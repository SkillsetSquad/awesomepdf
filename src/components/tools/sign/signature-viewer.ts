/** Optional import adapter supplied by the bundled signature editor. */
export type SignatureViewerWindow = Window & {
  awsomepdfImportSignature?: (blob: Blob, name?: string) => Promise<boolean>;
};
