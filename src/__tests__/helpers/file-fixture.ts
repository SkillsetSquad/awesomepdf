/** Create a real File with binary reads in jsdom, which omits Blob.arrayBuffer. */
export function createFileFixture(name: string, contents: number | Uint8Array, type: string): File {
  const bytes = typeof contents === 'number' ? new Uint8Array(contents) : new Uint8Array(contents);
  const file = new File([bytes], name, { type });
  Object.defineProperty(file, 'arrayBuffer', {
    value: async () => bytes.buffer.slice(0),
  });
  return file;
}

/** A parsable PDF with an uncompressed text stream for content rewrite checks. */
export async function createTextPDFFile(name: string, text: string | string[]): Promise<File> {
  const { PDFDocument, PDFName, StandardFonts } = await import('pdf-lib');
  const document = await PDFDocument.create();
  const font = await document.embedFont(StandardFonts.Helvetica);
  for (const pageText of Array.isArray(text) ? text : [text]) {
    const page = document.addPage([600, 800]);
    const escapedText = pageText.replace(/[\\()]/g, '\\$&');
    const stream = document.context.stream(`BT\n/F1 12 Tf\n100 200 Td\n(${escapedText}) Tj\nET`);
    page.node.set(PDFName.of('Resources'), document.context.obj({ Font: { F1: font.ref } }));
    page.node.set(PDFName.of('Contents'), document.context.register(stream));
  }
  return createFileFixture(name, await document.save(), 'application/pdf');
}

export function readBlobBytes(blob: Blob): Promise<Uint8Array<ArrayBuffer>> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => reader.result instanceof ArrayBuffer
      ? resolve(new Uint8Array(reader.result))
      : reject(new Error('Expected binary blob output'));
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}
