import { IDBFactory } from 'fake-indexeddb';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { readStorageItem, openBrandedDatabase } from '@/lib/storage/brand-migration';
import { getRecentFiles, clearRecentFiles } from '@/lib/storage/recent-files';
import { getSavedSignatures, deleteSignature } from '@/lib/pdf/signature-storage';
import { getAllProjects, deleteProject, type ProjectState } from '@/lib/storage/project-db';
import { getLanguagePreference } from '@/components/layout/LanguageSelector';
import { getSavedWorkflows } from '@/lib/workflow/storage';

beforeEach(() => {
  localStorage.clear();
  sessionStorage.clear();
  vi.stubGlobal('indexedDB', new IDBFactory());
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function seedDatabase(name: string, storeName: string, key: IDBValidKey, value: unknown): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, 'readwrite');
      transaction.objectStore(storeName).put(value, key);
      transaction.oncomplete = () => { db.close(); resolve(); };
      transaction.onerror = () => { db.close(); reject(transaction.error); };
    };
  });
}

describe('AwsomePDF storage migration', () => {
  it('preserves saved filenames, language, workflows and signatures through their normal readers', () => {
    const recent = [{ id: 'file-1', name: 'Example.pdf', size: 10, processedAt: '2026-01-01', toolUsed: 'merge-pdf' }];
    const signature = { id: 'sig-1', name: 'Example signature', dataUrl: 'data:image/png;base64,AA==', width: 1, height: 1, createdAt: 1 };
    const workflow = { id: 'workflow-1', name: 'Example workflow', nodes: [], edges: [], createdAt: '2026-01-01', updatedAt: '2026-01-01' };
    localStorage.setItem('pdfcraft_recent_files', JSON.stringify(recent));
    localStorage.setItem('pdfcraft-language-preference', 'zh-TW');
    localStorage.setItem('pdfcraft.signatures', JSON.stringify([signature]));
    localStorage.setItem('pdfcraft_workflows', JSON.stringify([workflow]));

    expect(getRecentFiles()).toEqual(recent);
    expect(getLanguagePreference()).toBe('zh-TW');
    expect(getSavedSignatures()).toEqual([signature]);
    expect(getSavedWorkflows()).toEqual([workflow]);
    expect(localStorage.getItem('awsomepdf_recent_files')).toBe(JSON.stringify(recent));
    expect(localStorage.getItem('pdfcraft_recent_files')).toBeNull();

    clearRecentFiles();
    deleteSignature(signature.id);
    expect(getRecentFiles()).toEqual([]);
    expect(getSavedSignatures()).toEqual([]);
  });

  it('does not replace newer preferences with old values, including an explicitly empty value', () => {
    localStorage.setItem('pdfcraft-favorite-tools', '["split-pdf"]');
    localStorage.setItem('awsomepdf-favorite-tools', '["merge-pdf"]');
    expect(readStorageItem(localStorage, 'awsomepdf-favorite-tools')).toBe('["merge-pdf"]');
    localStorage.setItem('awsomepdf-favorite-tools', '');
    expect(readStorageItem(localStorage, 'awsomepdf-favorite-tools')).toBe('');
  });

  it('keeps old saved data readable and intact when writing the new key exceeds storage quota', () => {
    const value = '["merge-pdf"]';
    localStorage.setItem('pdfcraft-favorite-tools', value);
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new DOMException('Full', 'QuotaExceededError'); });
    expect(readStorageItem(localStorage, 'awsomepdf-favorite-tools')).toBe(value);
    expect(localStorage.getItem('pdfcraft-favorite-tools')).toBe(value);
    expect(localStorage.getItem('awsomepdf-favorite-tools')).toBeNull();
  });

  it('preserves an OCR handoff in sessionStorage', () => {
    const handoff = JSON.stringify({ name: 'Scan.pdf', type: 'application/pdf', data: 'data:application/pdf;base64,AA==' });
    sessionStorage.setItem('pdfcraft_pending_edit_file', handoff);
    expect(readStorageItem(sessionStorage, 'awsomepdf_pending_edit_file')).toBe(handoff);
    expect(sessionStorage.getItem('awsomepdf_pending_edit_file')).toBe(handoff);
    expect(sessionStorage.getItem('pdfcraft_pending_edit_file')).toBeNull();
  });

  it('copies projects and does not resurrect deleted records from the legacy database', async () => {
    const project: ProjectState = {
      id: 'project-1', name: 'Example project', toolId: 'merge-pdf', createdAt: '2026-01-01', updatedAt: '2026-01-01',
      status: 'paused', options: {}, fileMetadata: [{ name: 'Example.pdf', size: 10, type: 'application/pdf', lastModified: 0 }], progress: 10,
    };
    await seedDatabase('pdfcraft_projects', 'projects', project.id, project);
    expect(await getAllProjects()).toEqual([project]);
    await deleteProject(project.id);
    expect(await getAllProjects()).toEqual([]);
    expect((await indexedDB.databases()).map(db => db.name)).toContain('pdfcraft_projects');
  });

  it('preserves cached font bytes and prefers an existing font in the new database', async () => {
    await seedDatabase('pdfcraft-fonts', 'fonts', 'old-font', new Uint8Array([1, 2, 3]).buffer);
    await seedDatabase('pdfcraft-fonts', 'fonts', 'shared-font', new Uint8Array([4]).buffer);
    const db = await openBrandedDatabase('awsomepdf-fonts', 'fonts', (database) => {
      database.createObjectStore('fonts').put(new Uint8Array([9]).buffer, 'shared-font');
    });
    try {
      const fonts = await new Promise<unknown[]>((resolve, reject) => {
        const request = db.transaction('fonts', 'readonly').objectStore('fonts').getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
      expect(fonts).toEqual([new Uint8Array([1, 2, 3]).buffer, new Uint8Array([9]).buffer]);
    } finally {
      db.close();
    }
  });

  it('does not create an empty legacy database for a new installation', async () => {
    expect(await getAllProjects()).toEqual([]);
    expect((await indexedDB.databases()).map(db => db.name)).toEqual(['awsomepdf_projects']);
  });
});
