import { loadPyMuPDF } from './pymupdf-loader';
import { REDACTION_SCRIPT } from './redaction-script';

export type RedactionRect = [number, number, number, number];

export interface EngineRedaction {
  page: number;
  rect: RedactionRect;
  coordinates: 'pdf' | 'display';
  pageWidth?: number;
  pageHeight?: number;
  color: string;
  label?: string;
  border?: boolean;
}

export interface PDFTextLine {
  page: number;
  chars: { text: string; rect: RedactionRect; origin: [number, number] }[];
}

export interface EngineRedactOptions {
  flattenAllPages?: boolean;
  renderScale?: number;
}

// Pyodide cannot run multiple asynchronous Python calls simultaneously.
let pending: Promise<unknown> = Promise.resolve();

async function runOperation(file: File | ArrayBuffer, request: object): Promise<string> {
  const operation = pending.then(async () => {
    const { pyodide } = await loadPyMuPDF();
    const uid = crypto.randomUUID();
    const inputPath = `/redact-${uid}.pdf`;
    const requestPath = `/redact-${uid}.json`;
    try {
      const bytes = file instanceof File ? await file.arrayBuffer() : file;
      pyodide.FS.writeFile(inputPath, new Uint8Array(bytes));
      pyodide.FS.writeFile(requestPath, new TextEncoder().encode(JSON.stringify(request)));
      // Only generated paths enter Python source. User data is read from JSON.
      const result = await pyodide.runPythonAsync(
        `${REDACTION_SCRIPT}\n_awsomepdf_redaction(${JSON.stringify(inputPath)}, ${JSON.stringify(requestPath)})`
      );
      if (typeof result !== 'string') throw new Error('Invalid local redaction engine response');
      return result;
    } finally {
      for (const path of [inputPath, requestPath]) {
        try { pyodide.FS.unlink(path); } catch { /* Already removed or never written. */ }
      }
    }
  });
  pending = operation.catch(() => undefined);
  return operation;
}

export async function extractRedactionText(file: File): Promise<PDFTextLine[]> {
  return JSON.parse(await runOperation(file, { action: 'text' })) as PDFTextLine[];
}

export async function removePDFContent(
  file: File | ArrayBuffer,
  areas: EngineRedaction[],
  options: EngineRedactOptions = {}
): Promise<Uint8Array<ArrayBuffer>> {
  if (!areas.length) throw new Error('No redaction areas specified');
  for (const area of areas) {
    if (!Number.isInteger(area.page) || area.page < 1 ||
      !area.rect.every(Number.isFinite) || area.rect[2] <= area.rect[0] || area.rect[3] <= area.rect[1] ||
      !/^#[\da-f]{6}$/i.test(area.color) || !['pdf', 'display'].includes(area.coordinates) ||
      [area.pageWidth, area.pageHeight].some(value => value !== undefined && (!Number.isFinite(value) || value <= 0))) {
      throw new Error('Invalid redaction area');
    }
  }
  const scale = options.renderScale ?? 2;
  if (!Number.isFinite(scale) || scale <= 0 || scale > 4) throw new Error('Invalid rendering scale');
  const result = await runOperation(file, { action: 'redact', areas, ...options });
  return Uint8Array.from(atob(result), char => char.charCodeAt(0));
}
