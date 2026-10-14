// These names are read only to preserve data saved before the AwsomePDF rename.
const legacyStorageKeys: Record<string, string> = {
  'awsomepdf_recent_files': 'pdfcraft_recent_files',
  'awsomepdf-favorite-tools': 'pdfcraft-favorite-tools',
  'awsomepdf-language-preference': 'pdfcraft-language-preference',
  'awsomepdf_tour_completed': 'pdfcraft_tour_completed',
  'awsomepdf_tour_dismissed': 'pdfcraft_tour_dismissed',
  'awsomepdf.signatures': 'pdfcraft.signatures',
  'awsomepdf_workflows': 'pdfcraft_workflows',
  'awsomepdf_workflow_history': 'pdfcraft_workflow_history',
  'awsomepdf_pending_edit_file': 'pdfcraft_pending_edit_file',
};

const legacyDatabaseNames: Record<string, string> = {
  'awsomepdf_projects': 'pdfcraft_projects',
  'awsomepdf-fonts': 'pdfcraft-fonts',
};
const MIGRATION_STORE = 'brand-migrations';

/** Move a saved value only when the new key is absent, and keep it readable if writes fail. */
export function readStorageItem(storage: Storage, key: string): string | null {
  const current = storage.getItem(key);
  if (current !== null) return current;
  const legacyKey = legacyStorageKeys[key];
  if (!legacyKey) return null;
  const previous = storage.getItem(legacyKey);
  if (previous === null) return null;
  try {
    storage.setItem(key, previous);
    storage.removeItem(legacyKey);
  } catch {
    // Never delete the original value when writing the new key fails.
  }
  return previous;
}

/** Clear the old key first so it cannot restore a value the user has removed. */
export function removeStorageItem(storage: Storage, key: string): void {
  const legacyKey = legacyStorageKeys[key];
  if (legacyKey) storage.removeItem(legacyKey);
  storage.removeItem(key);
}

function openExistingDatabase(name: string): Promise<IDBDatabase | null> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(name);
    let missing = false;
    request.onupgradeneeded = () => {
      // Opening a missing database would create it. Abort without creating an empty legacy store.
      missing = true;
      request.transaction?.abort();
    };
    request.onerror = () => missing ? resolve(null) : reject(request.error);
    request.onsuccess = () => resolve(request.result);
  });
}

interface StoredEntry {
  key: IDBValidKey;
  value: unknown;
}

function readEntries(db: IDBDatabase, storeName: string): Promise<StoredEntry[]> {
  if (!db.objectStoreNames.contains(storeName)) return Promise.resolve([]);
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, 'readonly');
    const entries: StoredEntry[] = [];
    const request = transaction.objectStore(storeName).openCursor();
    request.onsuccess = () => {
      const cursor = request.result;
      if (!cursor) return;
      entries.push({ key: cursor.primaryKey, value: cursor.value });
      cursor.continue();
    };
    transaction.oncomplete = () => resolve(entries);
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error ?? new Error('Reading saved data was interrupted'));
  });
}

async function migrateDatabase(db: IDBDatabase, legacyName: string, storeName: string): Promise<void> {
  const completed = await new Promise<boolean>((resolve, reject) => {
    const request = db.transaction(MIGRATION_STORE, 'readonly').objectStore(MIGRATION_STORE).get(legacyName);
    request.onsuccess = () => resolve(request.result === true);
    request.onerror = () => reject(request.error);
  });
  if (completed) return;

  const legacy = await openExistingDatabase(legacyName);
  let entries: StoredEntry[] = [];
  if (legacy) {
    try {
      entries = await readEntries(legacy, storeName);
    } finally {
      legacy.close();
    }
  }

  await new Promise<void>((resolve, reject) => {
    // The marker commits with the copied records. Later deletions must not reimport old data.
    const transaction = db.transaction([storeName, MIGRATION_STORE], 'readwrite');
    const store = transaction.objectStore(storeName);
    for (const entry of entries) {
      const existing = store.get(entry.key);
      existing.onsuccess = () => {
        if (existing.result !== undefined) return;
        try {
          if (store.keyPath === null) store.put(entry.value, entry.key);
          else store.put(entry.value);
        } catch {
          transaction.abort();
        }
      };
    }
    transaction.objectStore(MIGRATION_STORE).put(true, legacyName);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error ?? new Error('Migrating saved data was interrupted'));
  });
}

/** Open the renamed database and copy legacy records once, without overwriting newer records. */
export async function openBrandedDatabase(
  name: string,
  storeName: string,
  createStore: (db: IDBDatabase) => void,
): Promise<IDBDatabase> {
  const db = await new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(name, 1);
    request.onupgradeneeded = () => {
      createStore(request.result);
      request.result.createObjectStore(MIGRATION_STORE);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  try {
    const legacyName = legacyDatabaseNames[name];
    if (legacyName) await migrateDatabase(db, legacyName, storeName);
    return db;
  } catch (error) {
    db.close();
    throw error;
  }
}
