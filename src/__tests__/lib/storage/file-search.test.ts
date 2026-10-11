import 'fake-indexeddb/auto';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { loadLocalFileSearch, filterLocalFiles } from '@/lib/storage/file-search';
import { addRecentFile } from '@/lib/storage/recent-files';
import * as projects from '@/lib/storage/project-db';

beforeEach(async () => {
  localStorage.clear();
  await projects.clearAllProjects();
});
afterEach(() => vi.restoreAllMocks());

describe('local file search', () => {
  it('reads file records from both real stores without indexing project options or document content', async () => {
    addRecentFile('Annual report.pdf', 1024, 'merge-pdf');
    await projects.saveProject({
      name: 'Quarterly budget', toolId: 'split-pdf', status: 'paused', progress: 25,
      options: { text: 'DO NOT INDEX DOCUMENT CONTENT' },
      fileMetadata: [{ name: 'Costs.csv', size: 250, type: 'text/csv', lastModified: 0 }],
    });
    const snapshot = await loadLocalFileSearch();
    expect(snapshot.unavailable).toBe(false);
    expect(snapshot.files).toHaveLength(2);
    expect(snapshot.files).toEqual(expect.arrayContaining([
      expect.objectContaining({ name: 'Annual report.pdf', source: 'recent', toolSlug: 'merge-pdf' }),
      expect.objectContaining({ name: 'Costs.csv', source: 'project', projectName: 'Quarterly budget', toolSlug: 'split-pdf' }),
    ]));
    expect(filterLocalFiles(snapshot.files, 'QUARTERLY costs')).toHaveLength(1);
    expect(filterLocalFiles(snapshot.files, 'DO NOT INDEX')).toHaveLength(0);
    expect(snapshot.files.every(file => !('options' in file))).toBe(true);
  });

  it('matches filenames case/accent-insensitively and ranks names ahead of tool metadata', async () => {
    addRecentFile('résumé final.pdf', 123, 'merge-pdf');
    addRecentFile('other.pdf', 456, 'split-pdf', 'Résumé final');
    const { files } = await loadLocalFileSearch();
    expect(filterLocalFiles(files, 'RESUME FINAL')[0].name).toBe('résumé final.pdf');
    expect(filterLocalFiles(files, 'final pdf merge')).toHaveLength(1);
    expect(filterLocalFiles(files, '分割', { 'split-pdf': 'PDF 分割' })[0].name).toBe('other.pdf');
  });

  it('skips malformed metadata and preserves searchable history for an unavailable tool', async () => {
    localStorage.setItem('pdfcraft_recent_files', JSON.stringify([
      null, { name: 7, size: 12 }, { name: 'invalid.pdf', size: -1 },
      { id: 'same', name: 'old.pdf', size: 0, toolUsed: 'removed-tool' },
      { id: 'same', name: 'valid.pdf', size: 512, toolUsed: 'merge-pdf' },
    ]));
    const { files } = await loadLocalFileSearch();
    expect(files.map(file => file.name)).toEqual(['old.pdf', 'valid.pdf']);
    expect(new Set(files.map(file => file.id)).size).toBe(2);
    expect(files[0].toolSlug).toBeUndefined();
    expect(files[1].toolSlug).toBe('merge-pdf');
  });

  it('keeps localStorage results if IndexedDB fails', async () => {
    addRecentFile('available.pdf', 123, 'merge-pdf');
    vi.spyOn(projects, 'getAllProjects').mockRejectedValueOnce(new Error('Storage blocked'));
    const snapshot = await loadLocalFileSearch();
    expect(snapshot.unavailable).toBe(true);
    expect(snapshot.files.map(file => file.name)).toEqual(['available.pdf']);
  });

  it('keeps IndexedDB results if localStorage is corrupt or blocked', async () => {
    await projects.saveProject({
      name: 'Project', toolId: 'merge-pdf', status: 'paused', progress: 0, options: {},
      fileMetadata: [{ name: 'kept.pdf', size: 20, type: 'application/pdf', lastModified: 0 }],
    });
    localStorage.setItem('pdfcraft_recent_files', 'not JSON');
    expect((await loadLocalFileSearch()).files[0].name).toBe('kept.pdf');
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new DOMException('Blocked', 'SecurityError'); });
    expect((await loadLocalFileSearch()).files[0].name).toBe('kept.pdf');
  });
});
