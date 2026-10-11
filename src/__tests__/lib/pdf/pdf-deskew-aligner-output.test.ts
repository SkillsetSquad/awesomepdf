import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import { PDFArray, PDFDocument, PDFName, PDFRawStream, decodePDFRawStream, degrees } from 'pdf-lib';
import { createPdfDeskewAlignerProcessor, deskewPDFAligner, type AlignedScanPage } from '@/lib/pdf/processors/pdf-deskew-aligner';
import { PDFErrorCode } from '@/types/pdf';

const { getDocument } = vi.hoisted(() => ({ getDocument: vi.fn() }));
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib'), loadPdfjs: async () => ({ getDocument }) }));
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function decoded(pdf: PDFDocument, index: number) {
  const contents = pdf.getPage(index).node.Contents() as PDFArray | undefined;
  return contents?.asArray().map(ref => new TextDecoder().decode(decodePDFRawStream(pdf.context.lookup(ref) as PDFRawStream).decode())) || [];
}
function pixels(width: number, height: number, angle = 5) {
  const data = new Uint8ClampedArray(width * height * 4).fill(255);
  for (let line = 80; line < height - 80; line += 35) for (let x = 60; x < width - 60; x++) {
    const y = Math.round(line + Math.tan(angle * Math.PI / 180) * (x - width / 2));
    if (Math.floor(x / 20) % 4 === 0) continue;
    for (let k = 0; k < 3; k++) if (y + k >= 0 && y + k < height) {
      const offset = ((y + k) * width + x) * 4; data[offset] = data[offset + 1] = data[offset + 2] = 20;
    }
  }
  return { width, height, data };
}
let file: File, source: PDFDocument;
const getImageData = vi.fn((x: number, y: number, width: number, height: number) => pixels(width, height));
function rendering(promise = Promise.resolve(), width = 700, height = 500) {
  const page = { getViewport: vi.fn(({ scale }: { scale: number }) => ({ width: width * scale, height: height * scale })), render: vi.fn(() => ({ promise, cancel: vi.fn() })), cleanup: vi.fn() };
  const doc = { numPages: 3, getPage: vi.fn(async () => page) }, task = { promise: Promise.resolve(doc), destroy: vi.fn(async () => {}) };
  getDocument.mockReturnValueOnce(task); return { doc, page, task };
}
beforeEach(async () => {
  vi.clearAllMocks(); getDocument.mockReset(); getImageData.mockReset().mockImplementation((x, y, width, height) => pixels(width, height));
  const pdf = await PDFDocument.create(); pdf.setTitle('Source scan');
  const first = pdf.addPage([600, 800]); first.setMediaBox(100, 50, 600, 800); first.setCropBox(130, 90, 500, 700); first.setRotation(degrees(90)); first.drawText('SOURCE_SCAN', { x: 150, y: 120, rotate: degrees(85) });
  pdf.addPage([300, 400]).setRotation(degrees(180));
  const annotated = pdf.addPage([300, 400]); annotated.drawText('ANNOTATED_SOURCE');
  annotated.node.set(PDFName.of('Annots'), pdf.context.obj([pdf.context.register(pdf.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: [10, 20, 50, 40], A: { S: 'URI', URI: 'https://example.invalid/' } }))]));
  const bytes = await pdf.save(); source = await PDFDocument.load(bytes);
  file = new File([new Uint8Array(bytes)], 'scan.PDF', { type: 'application/pdf' }); Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({ fillStyle: '', fillRect: vi.fn(), getImageData } as unknown as CanvasRenderingContext2D);
});
afterEach(() => vi.restoreAllMocks());

describe('Actual deskew PDF output', () => {
  it('corrects tilted content while retaining text streams, source rotation/boxes, blank pages and annotated pages', async () => {
    const fixture = rendering(), output = await deskewPDFAligner([file], { dpi: 72, threshold: 10 }); expect(output.success, output.error?.details).toBe(true);
    expect(output.filename).toBe('scan_deskewed_aligned.pdf'); expect(output.metadata).toMatchObject({ pagesProcessed: 3, correctedPages: 1, annotationPages: 1, appliedThreshold: 10, appliedDpi: 72 });
    const results = output.metadata?.pageResults as AlignedScanPage[]; expect(results.map(page => page.reason)).toEqual(['corrected', 'blank', 'annotations']); expect(results[0].angle).toBeCloseTo(5, 1);
    const pdf = await PDFDocument.load(await readBlob(output.result as Blob)); expect(pdf.getTitle()).toBe('Source scan'); expect(pdf.getPageCount()).toBe(3);
    for (let i = 0; i < 3; i++) { expect(pdf.getPage(i).getRotation()).toEqual(source.getPage(i).getRotation()); expect(pdf.getPage(i).getMediaBox()).toEqual(source.getPage(i).getMediaBox()); expect(pdf.getPage(i).getCropBox()).toEqual(source.getPage(i).getCropBox()); }
    const streams = decoded(pdf, 0); expect(streams.join('\n')).toContain(decoded(source, 0).join('\n'));
    const [a, b, c, d, e, f] = streams[0].match(/q\n([^\n]+) cm/)![1].split(' ').map(Number);
    const sourceRadians = 85 * Math.PI / 180;
    const transformedAngle = Math.atan2(b * Math.cos(sourceRadians) + d * Math.sin(sourceRadians), a * Math.cos(sourceRadians) + c * Math.sin(sourceRadians)) * 180 / Math.PI;
    expect(transformedAngle - pdf.getPage(0).getRotation().angle).toBeCloseTo(0, 1);
    expect(a * 380 + c * 440 + e).toBeCloseTo(380); expect(b * 380 + d * 440 + f).toBeCloseTo(440);
    expect(streams[0]).toContain('130 90 500 700 re W n'); expect(streams.at(-1)).toBe('Q\n');
    expect(decoded(pdf, 1)).toEqual(decoded(source, 1)); expect(decoded(pdf, 2)).toEqual(decoded(source, 2)); expect(pdf.getPage(2).node.Annots()!.toString()).toBe(source.getPage(2).node.Annots()!.toString());
    expect(fixture.doc.getPage).toHaveBeenCalledTimes(1); expect(fixture.doc.getPage).toHaveBeenCalledWith(1); expect(fixture.page.cleanup).toHaveBeenCalledTimes(1); expect(fixture.task.destroy).toHaveBeenCalledTimes(1);
  });

  it.each([72, 150, 300])('uses the selected %s DPI for local analysis', async dpi => {
    const fixture = rendering(); const output = await deskewPDFAligner([file], { dpi, threshold: 10 }); expect(output.success).toBe(true);
    expect(fixture.page.getViewport).toHaveBeenLastCalledWith({ scale: dpi / 72 });
    expect(getImageData).toHaveBeenCalledWith(0, 0, Math.ceil(700 * dpi / 72), Math.ceil(500 * dpi / 72));
  });

  it('leaves out-of-limit and uncertain scan pages unchanged', async () => {
    rendering(); const output = await deskewPDFAligner([file], { dpi: 72, threshold: 3 }); expect(output.success).toBe(true); expect(output.metadata?.correctedPages).toBe(0);
    const pdf = await PDFDocument.load(await readBlob(output.result as Blob)); expect(decoded(pdf, 0)).toEqual(decoded(source, 0));
  });

  it.each([{ threshold: 0 }, { threshold: -1 }, { threshold: 31 }, { threshold: NaN }, { threshold: Infinity }, { dpi: 73 }])('rejects invalid options %j', async options => {
    const output = await deskewPDFAligner([file], options); expect(output.success).toBe(false); expect(output.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS); expect(getDocument).not.toHaveBeenCalled();
  });

  it('caps oversized preview canvases and reports the actual analysis resolution', async () => {
    const fixture = rendering(Promise.resolve(), 20_000, 10_000); getImageData.mockImplementationOnce((x, y, width, height) => ({ width, height, data: new Uint8ClampedArray(width * height * 4).fill(255) }));
    const output = await deskewPDFAligner([file], { dpi: 300 }); expect(output.success).toBe(true); expect(getImageData).toHaveBeenCalledWith(0, 0, 4096, 2048); expect(fixture.page.getViewport).toHaveBeenLastCalledWith({ scale: 4096 / 20_000 });
    expect((output.metadata?.pageResults as AlignedScanPage[])[0].analysisDpi).toBeCloseTo(4096 / 20_000 * 72);
  });

  it('releases the reader after rendering fails', async () => {
    const fixture = rendering(); fixture.page.render.mockImplementationOnce(() => ({ promise: Promise.reject(new Error('Render failed')), cancel: vi.fn() }));
    const output = await deskewPDFAligner([file]); expect(output.success).toBe(false); expect(output.error?.details).toBe('Render failed'); expect(fixture.page.cleanup).toHaveBeenCalledTimes(1); expect(fixture.task.destroy).toHaveBeenCalledTimes(1);
  });

  it('stops before saving after cancellation during a render', async () => {
    let finish!: () => void; const fixture = rendering(new Promise<void>(resolve => { finish = resolve; }));
    const processor = createPdfDeskewAlignerProcessor(), pending = processor.process({ files: [file], options: { dpi: 72 } });
    await waitFor(() => expect(fixture.page.render).toHaveBeenCalledTimes(1)); processor.cancel(); finish();
    const output = await pending; expect(output.success).toBe(false); expect(output.error?.code).toBe(PDFErrorCode.PROCESSING_CANCELLED); expect(getImageData).not.toHaveBeenCalled(); expect(fixture.task.destroy).toHaveBeenCalledTimes(1);
  });
});
