/**
 * Works out what can be done with files dropped on the homepage.
 *
 * Everything here runs in the browser against the tool registry: a tool is only
 * suggested if it exists, is enabled and accepts every selected file (format,
 * count and size). Nothing is uploaded; the only read is the first kilobyte of
 * each PDF to confirm it really is one.
 */

import { getAllTools } from '@/config/tools';
import type { Tool } from '@/types/tool';

export type RejectionReason = 'empty' | 'unsupported' | 'notPdf';

export interface RejectedFile {
  name: string;
  reason: RejectionReason;
}

/** What the accepted files are, for the summary line. */
export type SelectionKind = 'none' | 'pdf' | 'image' | 'document' | 'mixed';

/** Wording group for a suggestion; see `home.upload.suggestions` in the messages. */
export type SuggestionContext = 'single' | 'multiple' | 'image' | 'images' | 'convert';

export interface ToolSuggestion {
  toolId: string;
  slug: string;
  context: SuggestionContext;
}

export interface UploadAnalysis {
  accepted: File[];
  rejected: RejectedFile[];
  kind: SelectionKind;
  /** Lower-case extension of the first accepted file (the shared one for a document selection), e.g. ".docx". */
  extension?: string;
  suggestions: ToolSuggestion[];
}

export const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff', '.tif', '.svg', '.heic'] as const;

/** Preferred PDF tools in the order they are offered; each is checked against the registry. */
const PDF_SUGGESTIONS = {
  single: ['compress-pdf', 'edit-pdf', 'split-pdf', 'sign-pdf', 'organize-pdf'],
  multiple: ['merge-pdf', 'pdf-multi-tool', 'compress-pdf'],
} as const;

const IMAGE_SUGGESTION = 'image-to-pdf';
const MAX_CONVERTER_SUGGESTIONS = 3;
const PDF_HEADER_WINDOW = 1024;

const hasFormat = (name: string, format: string) => name.toLowerCase().endsWith(format);
const isPdf = (file: File) => hasFormat(file.name, '.pdf') || file.type === 'application/pdf';
const isImage = (file: File) => IMAGE_EXTENSIONS.some((extension) => hasFormat(file.name, extension));

/** Extension used to group documents, e.g. ".docx". Compound formats such as ".fb2.zip" are kept whole. */
export function getFileExtension(name: string, tools: Tool[] = getAllTools()): string {
  const lower = name.toLowerCase();
  const compound = tools.flatMap((tool) => tool.acceptedFormats).find((format) => format.indexOf('.', 1) > 0 && lower.endsWith(format));
  if (compound) return compound;
  const dot = lower.lastIndexOf('.');
  return dot > 0 ? lower.slice(dot) : '';
}

/** `accept` attribute covering every format at least one tool can open. */
export function getUploadAccept(tools: Tool[] = getAllTools()): string {
  const formats = new Set<string>(['.pdf']);
  for (const tool of tools) {
    for (const format of tool.acceptedFormats) {
      if (/^\.[a-z0-9]+$/i.test(format)) formats.add(format.toLowerCase());
    }
  }
  return [...formats].sort().join(',');
}

function readHead(file: File): Promise<string> {
  const slice = file.slice(0, PDF_HEADER_WINDOW);
  if (typeof slice.arrayBuffer === 'function') {
    return slice.arrayBuffer().then((buffer) => new TextDecoder('latin1').decode(buffer));
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ''));
    reader.onerror = () => reject(reader.error);
    reader.readAsText(slice, 'latin1');
  });
}

/** PDF readers accept the "%PDF-" marker anywhere in the first kilobyte. */
export async function looksLikePdf(file: File): Promise<boolean> {
  try {
    return (await readHead(file)).includes('%PDF-');
  } catch {
    return false;
  }
}

const acceptsAll = (tool: Tool, files: File[]) =>
  files.length <= tool.maxFiles &&
  files.every((file) => file.size <= tool.maxFileSize && tool.acceptedFormats.some((format) => hasFormat(file.name, format)));

function suggestPdfTools(files: File[], tools: Tool[]): ToolSuggestion[] {
  const context = files.length > 1 ? 'multiple' : 'single';
  return PDF_SUGGESTIONS[context].flatMap((id) => {
    const tool = tools.find((candidate) => candidate.id === id);
    return tool && acceptsAll(tool, files) ? [{ toolId: tool.id, slug: tool.slug, context } as ToolSuggestion] : [];
  });
}

function suggestConverters(files: File[], tools: Tool[]): ToolSuggestion[] {
  return tools
    .filter((tool) => tool.category === 'convert-to-pdf' && acceptsAll(tool, files))
    .slice(0, MAX_CONVERTER_SUGGESTIONS)
    .map((tool) => ({ toolId: tool.id, slug: tool.slug, context: 'convert' }));
}

function suggestImageTool(files: File[], tools: Tool[]): ToolSuggestion[] {
  const tool = tools.find((candidate) => candidate.id === IMAGE_SUGGESTION);
  if (!tool || !acceptsAll(tool, files)) return suggestConverters(files, tools);
  return [{ toolId: tool.id, slug: tool.slug, context: files.length > 1 ? 'images' : 'image' }];
}

/**
 * Validate a selection and suggest tools for it. Files that cannot be used are
 * returned in `rejected` with a reason so the UI can say why.
 */
export async function analyzeFiles(files: File[], tools: Tool[] = getAllTools()): Promise<UploadAnalysis> {
  const accepted: File[] = [];
  const rejected: RejectedFile[] = [];

  for (const file of files) {
    if (file.size === 0) {
      rejected.push({ name: file.name, reason: 'empty' });
    } else if (!isPdf(file) && !tools.some((tool) => tool.acceptedFormats.some((format) => hasFormat(file.name, format)))) {
      rejected.push({ name: file.name, reason: 'unsupported' });
    } else if (isPdf(file) && !(await looksLikePdf(file))) {
      rejected.push({ name: file.name, reason: 'notPdf' });
    } else {
      accepted.push(file);
    }
  }

  if (accepted.length === 0) return { accepted, rejected, kind: 'none', suggestions: [] };

  const extension = getFileExtension(accepted[0].name, tools);
  if (accepted.every(isPdf)) {
    return { accepted, rejected, kind: 'pdf', extension, suggestions: suggestPdfTools(accepted, tools) };
  }
  if (accepted.every(isImage)) {
    return { accepted, rejected, kind: 'image', extension, suggestions: suggestImageTool(accepted, tools) };
  }

  const extensions = new Set(accepted.map((file) => getFileExtension(file.name, tools)));
  if (accepted.some(isPdf) || accepted.some(isImage) || extensions.size > 1) {
    return { accepted, rejected, kind: 'mixed', extension, suggestions: [] };
  }
  return { accepted, rejected, kind: 'document', extension, suggestions: suggestConverters(accepted, tools) };
}
