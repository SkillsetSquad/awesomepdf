/** The browser QPDF build's exported CLI/filesystem surface (public/qpdf.js). */
export interface QpdfModule {
  FS: {
    writeFile(path: string, bytes: Uint8Array): void;
    readFile(path: string, options: { encoding: 'binary' }): Uint8Array<ArrayBuffer>;
    unlink(path: string): void;
  };
  callMain(args: string[]): number;
}

type QpdfFactory = (options: { locateFile(path: string): string }) => Promise<QpdfModule>;

/** Legacy script entry points are checked by the existing loaders before calling. */
export interface QpdfGlobals {
  Module?: QpdfFactory;
  createQpdfModule?: QpdfFactory;
}
