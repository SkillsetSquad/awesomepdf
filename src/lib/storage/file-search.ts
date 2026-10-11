import { getToolById, getToolBySlug } from '@/config/tools';
import { getRecentFiles } from './recent-files';
import { getAllProjects, isIndexedDBAvailable } from './project-db';

/** Searchable file metadata; document contents are never read by the palette. */
export interface LocalFileSearchEntry {
  id: string;
  name: string;
  size: number;
  source: 'recent' | 'project';
  updatedAt: number;
  toolId?: string;
  toolSlug?: string;
  toolName?: string;
  projectName?: string;
}

export interface LocalFileSearchSnapshot {
  files: LocalFileSearchEntry[];
  unavailable: boolean;
}

const record = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const text = (value: unknown): string | undefined =>
  typeof value === 'string' && value.trim() ? value : undefined;
const timestamp = (value: unknown): number => {
  const parsed = typeof value === 'string' ? Date.parse(value) : NaN;
  return Number.isFinite(parsed) ? parsed : 0;
};
const normalize = (value: string) => value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase();

function fileEntry(
  file: unknown, id: string, source: LocalFileSearchEntry['source'],
  toolKey: unknown, toolName: unknown, updatedAt: unknown, projectName?: unknown,
): LocalFileSearchEntry | null {
  if (!record(file) || typeof file.size !== 'number' || !Number.isFinite(file.size) || file.size < 0) return null;
  const name = text(file.name);
  if (!name) return null;
  const key = text(toolKey);
  const tool = key ? getToolById(key) ?? getToolBySlug(key) : undefined;
  return {
    id, name, size: file.size, source, updatedAt: timestamp(updatedAt),
    toolId: tool?.id, toolSlug: tool?.slug, toolName: text(toolName), projectName: text(projectName),
  };
}

/** Load both existing stores independently so an unavailable store cannot hide the other. */
export async function loadLocalFileSearch(): Promise<LocalFileSearchSnapshot> {
  const [recent, projects] = await Promise.allSettled([
    Promise.resolve().then(() => getRecentFiles()),
    Promise.resolve().then(() => isIndexedDBAvailable() ? getAllProjects() : []),
  ]);
  const files: LocalFileSearchEntry[] = [];
  if (recent.status === 'fulfilled' && Array.isArray(recent.value)) {
    recent.value.forEach((value: unknown, index) => {
      if (!record(value)) return;
      const entry = fileEntry(value, `recent:${text(value.id) ?? 'row'}:${index}`, 'recent', value.toolUsed, value.toolName, value.processedAt);
      if (entry) files.push(entry);
    });
  }
  if (projects.status === 'fulfilled' && Array.isArray(projects.value)) {
    projects.value.forEach((project: unknown, index) => {
      if (!record(project) || !Array.isArray(project.fileMetadata)) return;
      project.fileMetadata.forEach((value: unknown, fileIndex) => {
        const entry = fileEntry(value, `project:${text(project.id) ?? index}:${fileIndex}`, 'project',
          project.toolId, project.toolName, project.updatedAt, project.name);
        if (entry) files.push(entry);
      });
    });
  }
  return {
    files: files.sort((a, b) => b.updatedAt - a.updatedAt),
    unavailable: recent.status === 'rejected' || projects.status === 'rejected',
  };
}

/** Whether every query word occurs in the filename itself. */
export function matchesLocalFileName(name: string, query: string): boolean {
  const normalized = normalize(query).trim();
  return !!normalized && normalized.split(/\s+/).every(token => normalize(name).includes(token));
}

/** Filename matches rank ahead of project/tool metadata matches; newest files break ties. */
export function filterLocalFiles(files: LocalFileSearchEntry[], query: string, toolNames: Record<string, string> = {}): LocalFileSearchEntry[] {
  const normalized = normalize(query).trim().replace(/\s+/g, ' ');
  if (!normalized) return files;
  const tokens = normalized.split(' ');
  return files.map(file => {
    const name = normalize(file.name);
    const haystack = normalize(`${file.name} ${file.projectName ?? ''} ${file.toolName ?? ''} ${file.toolSlug?.replace(/-/g, ' ') ?? ''} ${toolNames[file.toolId ?? ''] ?? ''}`);
    const score = name === normalized ? 4 : name.startsWith(normalized) ? 3 : name.includes(normalized) ? 2 : tokens.every(token => name.includes(token)) ? 1 : 0;
    return { file, score, matches: tokens.every(token => haystack.includes(token)) };
  }).filter(item => item.matches)
    .sort((a, b) => b.score - a.score || b.file.updatedAt - a.file.updatedAt)
    .map(item => item.file);
}
