import type { PDFDocument, PDFPage } from 'pdf-lib';

/** Rewrite decoded page content using the installed PDF-lib stream types. */
export function rewritePageContent(
  pdfLib: typeof import('pdf-lib'),
  document: PDFDocument,
  page: PDFPage,
  rewrite: (content: string) => string,
): void {
  const key = pdfLib.PDFName.of('Contents');
  const contents = page.node.get(key);
  const resolved = document.context.lookup(contents);
  if (!resolved) return;

  const entries = resolved instanceof pdfLib.PDFArray ? resolved.asArray() : [contents];
  entries.forEach((entry, index) => {
    const stream = document.context.lookup(entry);
    const bytes = stream instanceof pdfLib.PDFRawStream
      ? pdfLib.decodePDFRawStream(stream).decode()
      : stream instanceof pdfLib.PDFContentStream
        ? stream.getUnencodedContents()
        : undefined;
    if (!bytes || !(stream instanceof pdfLib.PDFStream)) return;

    // PDF content streams are byte strings: preserve bytes outside matched text.
    const chunks: string[] = [];
    for (let offset = 0; offset < bytes.length; offset += 32768) {
      chunks.push(String.fromCharCode(...bytes.subarray(offset, offset + 32768)));
    }
    const original = chunks.join('');
    const rewritten = rewrite(original);
    if (rewritten === original) return;

    const output = Uint8Array.from(rewritten, character => character.charCodeAt(0));
    const dictionary = stream.dict.clone(document.context);
    dictionary.delete(pdfLib.PDFName.of('Filter'));
    dictionary.delete(pdfLib.PDFName.of('DecodeParms'));
    const replacement = pdfLib.PDFRawStream.of(dictionary, output);
    if (entry instanceof pdfLib.PDFRef) {
      document.context.assign(entry, replacement);
    } else if (resolved instanceof pdfLib.PDFArray) {
      resolved.set(index, document.context.register(replacement));
    } else {
      page.node.set(key, document.context.register(replacement));
    }
  });
}
