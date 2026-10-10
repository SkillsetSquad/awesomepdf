import { PDFArray, PDFDict, PDFDocument, PDFName, PDFRawStream, decodePDFRawStream, type PDFPage } from 'pdf-lib';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { resizePDFPagesUniform } from '@/lib/pdf/processors/pdf-page-resizer-uniform';

vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
let sources: File[];
const sizes = { A4: [595.27, 841.89], A3: [841.89, 1190.55], Letter: [612, 792] } as const;
async function file(pdf: PDFDocument, name: string) {
  const bytes = await pdf.save(); const result = new File([new Uint8Array(bytes)], name, { type: 'application/pdf' });
  Object.defineProperty(result, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer }); return result;
}
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function concat(a: number[], b: number[]) {
  return [a[0]*b[0]+a[2]*b[1], a[1]*b[0]+a[3]*b[1], a[0]*b[2]+a[2]*b[3], a[1]*b[2]+a[3]*b[3], a[0]*b[4]+a[2]*b[5]+a[4], a[1]*b[4]+a[3]*b[5]+a[5]];
}
function transform(page: PDFPage) {
  const contents = page.node.Contents();
  if (!contents) return null;
  const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
  const text = refs.map(ref => new TextDecoder().decode(decodePDFRawStream(page.doc.context.lookup(ref) as PDFRawStream).decode())).join('\n');
  let matrix = [1, 0, 0, 1, 0, 0]; const stack: number[][] = [];
  const operators = /(?:([\d.eE+-]+)\s+([\d.eE+-]+)\s+([\d.eE+-]+)\s+([\d.eE+-]+)\s+([\d.eE+-]+)\s+([\d.eE+-]+)\s+cm)|(?:\/([^\s]+)\s+Do)|\b(q|Q)\b/g;
  for (const match of text.matchAll(operators)) {
    if (match[8] === 'q') stack.push([...matrix]);
    else if (match[8] === 'Q') matrix = stack.pop()!;
    else if (match[1]) matrix = concat(matrix, match.slice(1, 7).map(Number));
    else if (match[7]) {
      const objects = page.node.Resources()!.lookup(PDFName.of('XObject'), PDFDict);
      const embedded = objects.lookup(PDFName.of(match[7])) as PDFRawStream;
      const box = embedded.dict.lookup(PDFName.of('BBox'), PDFArray).asArray().map(value => Number(value.toString()));
      const formMatrix = embedded.dict.lookupMaybe(PDFName.of('Matrix'), PDFArray);
      if (formMatrix) matrix = concat(matrix, formMatrix.asArray().map(value => Number(value.toString())));
      const points = [[box[0], box[1]], [box[0], box[3]], [box[2], box[1]], [box[2], box[3]]].map(([x, y]) => [matrix[0]*x+matrix[2]*y+matrix[4], matrix[1]*x+matrix[3]*y+matrix[5]]);
      const xs = points.map(point => point[0]), ys = points.map(point => point[1]);
      return { left: Math.min(...xs), right: Math.max(...xs), bottom: Math.min(...ys), top: Math.max(...ys), text: new TextDecoder().decode(decodePDFRawStream(embedded).decode()) };
    }
  }
  return null;
}
beforeAll(async () => {
  const first = await PDFDocument.create(); first.addPage([200, 400]); first.addPage([300, 200]).drawText('FIRST', { x: 10, y: 10 });
  const second = await PDFDocument.create(); second.addPage([600, 300]).drawText('SECOND', { x: 10, y: 10 });
  sources = [await file(first, 'first.pdf'), await file(second, 'second.pdf')];
});

describe.each(['fit', 'fill'] as const)('Uniform resize real output (%s)', scaleMode => {
  it.each(['A4', 'A3', 'Letter'] as const)('keeps blank pages, source order, aspect ratios and centered %s geometry', async targetSize => {
    const result = await resizePDFPagesUniform(sources, { targetSize, scaleMode });
    expect(result.success).toBe(true); expect(result.filename).toBe('first_resized_uniform.pdf');
    const pdf = await PDFDocument.load(await readBlob(result.result as Blob));
    expect(pdf.getPageCount()).toBe(3); expect(result.metadata?.totalResizedPages).toBe(3);
    const [width, height] = sizes[targetSize];
    expect(pdf.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual([[width, height], [width, height], [width, height]]);
    expect(transform(pdf.getPage(0))).toBeNull();
    for (const [index, ratio, label] of [[1, 1.5, '4649525354'], [2, 2, '5345434F4E44']] as const) {
      const drawing = transform(pdf.getPage(index))!; expect(drawing.text).toContain(label);
      const drawnWidth = drawing.right - drawing.left, drawnHeight = drawing.top - drawing.bottom;
      expect(drawnWidth / drawnHeight).toBeCloseTo(ratio, 8);
      expect((drawing.right + drawing.left) / 2).toBeCloseTo(width / 2, 8); expect((drawing.top + drawing.bottom) / 2).toBeCloseTo(height / 2, 8);
      expect(Math.min(Math.abs(drawnWidth - width), Math.abs(drawnHeight - height))).toBeLessThan(1e-7);
      if (scaleMode === 'fit') { expect(drawing.left).toBeGreaterThanOrEqual(-1e-7); expect(drawing.bottom).toBeGreaterThanOrEqual(-1e-7); expect(drawing.right).toBeLessThanOrEqual(width + 1e-7); expect(drawing.top).toBeLessThanOrEqual(height + 1e-7); }
      else { expect(drawing.left).toBeLessThanOrEqual(1e-7); expect(drawing.bottom).toBeLessThanOrEqual(1e-7); expect(drawing.right).toBeGreaterThanOrEqual(width - 1e-7); expect(drawing.top).toBeGreaterThanOrEqual(height - 1e-7); }
    }
  });
});
