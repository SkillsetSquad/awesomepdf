import { beforeAll, describe, expect, it, vi } from 'vitest';
import { PDFDocument, PDFArray, PDFDict, PDFName, PDFRawStream, PDFString, decodePDFRawStream, degrees } from 'pdf-lib';
import { reflowTwoColumnPDF } from '@/lib/pdf/processors/pdf-two-column-reflower';

vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
type Box = { x: number; y: number; width: number; height: number };
const media = { x: 100, y: 50, width: 600, height: 800 };
const visible = { x: 130, y: 90, width: 500, height: 700 };
const rotations = [0, 90, 180, 270, -90];
let source: File;
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function displayed(box: Box, angle: number, view: Box = visible) {
  const rotation = (angle % 360 + 360) % 360;
  const points = [[box.x, box.y], [box.x + box.width, box.y], [box.x, box.y + box.height], [box.x + box.width, box.y + box.height]].map(([x, y]) => {
    const dx = x - view.x, dy = y - view.y;
    if (rotation === 0) return [dx, view.height - dy];
    if (rotation === 90) return [dy, dx];
    if (rotation === 180) return [view.width - dx, dy];
    return [view.height - dy, view.width - dx];
  });
  return { left: Math.min(...points.map(p => p[0])), right: Math.max(...points.map(p => p[0])), top: Math.min(...points.map(p => p[1])), bottom: Math.max(...points.map(p => p[1])) };
}
beforeAll(async () => {
  const pdf = await PDFDocument.create();
  for (const [index, rotation] of rotations.entries()) {
    const page = pdf.addPage(); page.setMediaBox(media.x, media.y, media.width, media.height); page.setCropBox(visible.x, visible.y, visible.width, visible.height); page.setRotation(degrees(rotation));
    page.setTrimBox(140, 100, 480, 680); page.setBleedBox(120, 80, 520, 720);
    page.drawText(`SOURCE_${index + 1}`, { x: 200, y: 400 });
    const link = pdf.context.register(pdf.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: [140, 100, 220, 130], A: { S: 'URI', URI: PDFString.of(`https://example.com/${index}`) } })); page.node.addAnnot(link);
  }
  pdf.addPage([400, 600]);
  const bytes = await pdf.save(); source = new File([new Uint8Array(bytes)], 'paper.PDF', { type: 'application/pdf' });
  Object.defineProperty(source, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
});

describe.each([false, true])('two-column real PDF output (horizontal reader %s)', horizontalReading => {
  it.each([0.4, 0.5, 0.6])('splits the displayed crop at %s, preserves source drawing and keeps blank pages', async middleGapRatio => {
    const result = await reflowTwoColumnPDF([source], { middleGapRatio, horizontalReading }); expect(result.success).toBe(true); expect(result.filename).toBe('paper_single_column.pdf');
    const pdf = await PDFDocument.load(await readBlob(result.result as Blob)); expect(pdf.getPageCount()).toBe(12);
    expect(pdf.catalog.get(PDFName.of('PageLayout'))?.toString()).toBe(horizontalReading ? '/TwoColumnLeft' : '/OneColumn');
    expect(result.metadata).toMatchObject({ originalPagesCount: 6, reflowedPagesCount: 12, appliedGapRatio: middleGapRatio, readerLayout: horizontalReading ? 'TwoColumnLeft' : 'OneColumn' });
    for (const [index, rotation] of rotations.entries()) {
      const viewWidth = rotation % 180 === 0 ? visible.width : visible.height, viewHeight = rotation % 180 === 0 ? visible.height : visible.width;
      for (const column of [0, 1]) {
        const page = pdf.getPage(index * 2 + column); expect(page.getRotation().angle).toBe(rotation); expect(page.getMediaBox()).toEqual(media);
        expect(page.getTrimBox()).toEqual({ x: 140, y: 100, width: 480, height: 680 }); expect(page.getBleedBox()).toEqual({ x: 120, y: 80, width: 520, height: 720 });
        const crop = displayed(page.getCropBox(), rotation); expect(crop.left).toBeCloseTo(column === 0 ? 0 : viewWidth * middleGapRatio); expect(crop.right).toBeCloseTo(column === 0 ? viewWidth * middleGapRatio : viewWidth); expect(crop.top).toBeCloseTo(0); expect(crop.bottom).toBeCloseTo(viewHeight);
        const commands = (page.node.Contents() as PDFArray).asArray().map(ref => new TextDecoder().decode(decodePDFRawStream(pdf.context.lookup(ref) as PDFRawStream).decode())).join('\n');
        expect(commands).toContain(Array.from(`SOURCE_${index + 1}`, c => c.charCodeAt(0).toString(16)).join('').toUpperCase()); expect(commands).toContain('Tj');
        const annotation = page.node.Annots()!.lookup(0, PDFDict); expect(annotation.get(PDFName.of('Subtype'))?.toString()).toBe('/Link');
        expect(annotation.lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('URI'), PDFString).decodeText()).toBe(`https://example.com/${index}`);
      }
    }
    expect(pdf.getPage(10).getCropBox()).toEqual({ x: 0, y: 0, width: 400 * middleGapRatio, height: 600 }); expect(pdf.getPage(11).getCropBox()).toEqual({ x: 400 * middleGapRatio, y: 0, width: 400 * (1 - middleGapRatio), height: 600 });
  });
});

it('uses only the intersection of a CropBox and its MediaBox', async () => {
  const pdf = await PDFDocument.create(); const page = pdf.addPage([300, 400]); page.setCropBox(-20, -30, 280, 460);
  const bytes = await pdf.save(); const file = new File([new Uint8Array(bytes)], 'intersection.pdf'); Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
  const result = await reflowTwoColumnPDF([file]); expect(result.success).toBe(true);
  const output = await PDFDocument.load(await readBlob(result.result as Blob)); expect(output.getPages().map(p => p.getCropBox())).toEqual([{ x: 0, y: 0, width: 130, height: 400 }, { x: 130, y: 0, width: 130, height: 400 }]);
});

it.each([0, 1, Number.NaN, Infinity])('rejects invalid split ratios (%s)', async middleGapRatio => {
  const result = await reflowTwoColumnPDF([source], { middleGapRatio }); expect(result.success).toBe(false); expect(result.error?.code).toBe('INVALID_OPTIONS');
});
