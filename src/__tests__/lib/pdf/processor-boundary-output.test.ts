import * as pdfLib from 'pdf-lib';
import { describe, expect, it, vi } from 'vitest';
import type { Page as OCRPage } from 'tesseract.js';
import { rewritePageContent } from '@/lib/pdf/rewrite-page-content';
import { getOCRWords } from '@/lib/pdf/processors/ocr';
import { SanitizePDFProcessor } from '@/lib/pdf/processors/sanitize';

vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib'), loadPdfjs: vi.fn() }));

function decodeStream(document: pdfLib.PDFDocument, stream: pdfLib.PDFObject): Uint8Array {
  const resolved = document.context.lookup(stream);
  if (!(resolved instanceof pdfLib.PDFRawStream)) throw new Error('Expected raw stream');
  return pdfLib.decodePDFRawStream(resolved).decode();
}

async function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => reader.result instanceof ArrayBuffer ? resolve(reader.result) : reject(new Error('Expected bytes'));
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

describe('PDF content stream replacement', () => {
  it.each(['compressed', 'uncompressed', 'array', 'direct', 'content-stream'] as const)(
    'rewrites %s streams and preserves document geometry and unrelated content',
    async mode => {
      const document = await pdfLib.PDFDocument.create({ updateMetadata: false });
      const page = document.addPage([200, 300]);
      const content = new Uint8Array([...new TextEncoder().encode('(Secret) Tj\n'), 255]);
      const stream = mode === 'content-stream'
        ? document.context.contentStream([pdfLib.PDFOperator.of(pdfLib.PDFOperatorNames.ShowText, [pdfLib.PDFString.of('Secret')])])
        : mode === 'uncompressed' ? document.context.stream(content) : document.context.flateStream(content);
      stream.dict.set(pdfLib.PDFName.of('Preserved'), pdfLib.PDFName.of('Custom'));
      const originalRef = document.context.register(stream);
      const other = document.context.register(document.context.flateStream('(Keep) Tj'));
      const entries = mode === 'array' ? document.context.obj([originalRef, other]) : undefined;
      page.node.set(pdfLib.PDFName.of('Contents'), entries ?? (mode === 'direct' ? stream : originalRef));

      rewritePageContent(pdfLib, document, page, text => text.replace('Secret', 'Masked'));
      const output = await pdfLib.PDFDocument.load(await document.save(), { updateMetadata: false });
      const contents = output.getPage(0).node.lookup(pdfLib.PDFName.of('Contents'));
      if (!contents) throw new Error('Expected page content');
      const outputEntries = contents instanceof pdfLib.PDFArray ? contents.asArray() : [contents];
      const first = decodeStream(output, outputEntries[0]);
      expect(String.fromCharCode(...first)).toContain('(Masked) Tj');
      expect(String.fromCharCode(...first)).not.toContain('Secret');
      if (mode !== 'content-stream') expect(first.at(-1)).toBe(255);
      const rewritten = output.context.lookup(outputEntries[0], pdfLib.PDFStream);
      expect(rewritten.dict.get(pdfLib.PDFName.of('Preserved'))).toBe(pdfLib.PDFName.of('Custom'));
      expect(rewritten.dict.has(pdfLib.PDFName.of('Filter'))).toBe(false);
      if (mode === 'array') expect(String.fromCharCode(...decodeStream(output, outputEntries[1]))).toBe('(Keep) Tj');
      expect(output.getPage(0).getSize()).toEqual({ width: 200, height: 300 });
    },
  );

  it('retains untouched stream references and compression', async () => {
    const document = await pdfLib.PDFDocument.create();
    const page = document.addPage();
    const stream = document.context.flateStream('(Keep) Tj');
    const ref = document.context.register(stream);
    page.node.set(pdfLib.PDFName.of('Contents'), ref);
    rewritePageContent(pdfLib, document, page, text => text.replace('Absent', 'Masked'));
    expect(document.context.lookup(ref)).toBe(stream);
    expect(stream.dict.has(pdfLib.PDFName.of('Filter'))).toBe(true);
  });
});

describe('Sanitize supported PDF dictionary boundaries', () => {
  it.each(['direct', 'indirect'] as const)('clears metadata, scripts, attachments and links from %s dictionaries', async mode => {
    const document = await pdfLib.PDFDocument.create({ updateMetadata: false });
    document.setTitle('Secret title');
    const info = document.context.lookup(document.context.trailerInfo.Info, pdfLib.PDFDict);
    info.set(pdfLib.PDFName.of('PrivateKey'), pdfLib.PDFString.of('secret'));
    document.catalog.set(pdfLib.PDFName.of('Metadata'), document.context.register(document.context.stream('<xmp>private</xmp>')));
    const names = document.context.obj({ JavaScript: { Names: [] }, EmbeddedFiles: { Names: [] }, Dests: { Names: [] } });
    document.catalog.set(pdfLib.PDFName.of('Names'), mode === 'direct' ? names : document.context.register(names));
    document.catalog.set(pdfLib.PDFName.of('OpenAction'), document.context.obj({ S: 'JavaScript', JS: 'alert(1)' }));
    document.catalog.set(pdfLib.PDFName.of('AA'), document.context.obj({}));
    const page = document.addPage([200, 300]);
    const link = document.context.register(document.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: [0, 0, 10, 10] }));
    const note = document.context.register(document.context.obj({ Type: 'Annot', Subtype: 'Text', Rect: [10, 10, 20, 20] }));
    const annots = document.context.obj([link, note]);
    page.node.set(pdfLib.PDFName.of('Annots'), mode === 'direct' ? annots : document.context.register(annots));
    const bytes = new Uint8Array(await document.save());
    const file = new File([bytes], 'private.pdf', { type: 'application/pdf' });
    Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.buffer });

    const result = await new SanitizePDFProcessor().process({ files: [file], options: { flattenForms: false } });
    expect(result.success).toBe(true);
    if (!(result.result instanceof Blob)) throw new Error(result.error?.message ?? 'Expected output');
    const output = await pdfLib.PDFDocument.load(await readBlob(result.result), { updateMetadata: false });
    expect(output.getTitle()).toBe('');
    expect(output.context.lookup(output.context.trailerInfo.Info, pdfLib.PDFDict).has(pdfLib.PDFName.of('PrivateKey'))).toBe(false);
    for (const key of ['Metadata', 'OpenAction', 'AA']) expect(output.catalog.has(pdfLib.PDFName.of(key))).toBe(false);
    const outputNames = output.catalog.lookup(pdfLib.PDFName.of('Names'), pdfLib.PDFDict);
    expect(outputNames.has(pdfLib.PDFName.of('JavaScript'))).toBe(false);
    expect(outputNames.has(pdfLib.PDFName.of('EmbeddedFiles'))).toBe(false);
    expect(outputNames.has(pdfLib.PDFName.of('Dests'))).toBe(true);
    const outputAnnots = output.getPage(0).node.lookup(pdfLib.PDFName.of('Annots'), pdfLib.PDFArray);
    expect(outputAnnots.size()).toBe(1);
    expect(outputAnnots.lookup(0, pdfLib.PDFDict).get(pdfLib.PDFName.of('Subtype'))).toBe(pdfLib.PDFName.of('Text'));
    expect(output.getPage(0).getSize()).toEqual({ width: 200, height: 300 });
  });
});

describe('OCR worker output boundary', () => {
  it('extracts words from Tesseract 6 blocks without requiring the removed top-level words output', () => {
    const word = { text: 'Detected', confidence: 97, bbox: { x0: 1, y0: 2, x1: 3, y1: 4 } };
    const result = { blocks: [{ paragraphs: [{ lines: [{ words: [word] }] }] }] } as OCRPage;
    expect(getOCRWords(result)).toEqual([word]);
  });

  it('keeps legacy worker words and handles an empty detection', () => {
    const word = { text: 'Legacy', bbox: { x0: 0, y0: 0, x1: 10, y1: 10 } };
    const result = { words: [word], blocks: null } as unknown as OCRPage;
    expect(getOCRWords(result)).toEqual([word]);
    expect(getOCRWords({ blocks: null } as OCRPage)).toEqual([]);
  });
});
