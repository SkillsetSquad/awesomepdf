/**
 * In-memory handoff of user-selected files from one route to a tool page.
 *
 * The homepage lets people drop files before choosing a tool. Client-side
 * navigation keeps this module alive, so the chosen tool can pick the files up
 * without asking again. Files are held in a plain variable only: they are never
 * written to localStorage, sessionStorage or IndexedDB and never leave the
 * browser. A handoff is addressed to one tool, expires after a few minutes, and
 * is removed as soon as that tool takes it. A full page load clears it.
 */

export const HANDOFF_TTL_MS = 5 * 60 * 1000;

interface StagedFiles {
  toolSlug: string;
  files: File[];
  expiresAt: number;
}

let staged: StagedFiles | null = null;

/** Hold `files` for `toolSlug`, replacing any earlier handoff. */
export function stageFilesForTool(toolSlug: string, files: File[], now: number = Date.now()): void {
  staged = files.length > 0 ? { toolSlug, files: [...files], expiresAt: now + HANDOFF_TTL_MS } : null;
}

/**
 * Take the files staged for `toolSlug`. Returns null when nothing is waiting,
 * when the handoff is for another tool, or when it has expired. A matching
 * handoff is removed so the files are delivered exactly once.
 */
export function takeStagedFiles(toolSlug: string, now: number = Date.now()): File[] | null {
  if (!staged) return null;
  if (staged.expiresAt <= now) {
    staged = null;
    return null;
  }
  if (staged.toolSlug !== toolSlug) return null;
  const { files } = staged;
  staged = null;
  return files;
}

/** Drop any staged files, e.g. when the user starts over. */
export function clearStagedFiles(): void {
  staged = null;
}
