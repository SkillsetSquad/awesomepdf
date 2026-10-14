export const LOCAL_FILE_RECORDS_CHANGED = 'awsomepdf:local-file-records-changed';

/** Notify this window without including filenames or document data in the event. */
export function notifyLocalFileRecordsChanged(): void {
  if (typeof window !== 'undefined') window.dispatchEvent(new Event(LOCAL_FILE_RECORDS_CHANGED));
}
