import { beforeAll, describe, expect, it } from 'vitest';
import { PDFArray, PDFDict, PDFDocument, PDFName, PDFNumber, PDFRawStream, decodePDFRawStream, degrees } from 'pdf-lib';
import { createBooklet, type BookletGridMode, type BookletRotation } from '@/lib/pdf/processors/booklet';
import { PDFErrorCode } from '@/types/pdf';

type Matrix = [number, number, number, number, number, number];
const identity: Matrix = [1, 0, 0, 1, 0, 0];
function multiply(a: Matrix, b: Matrix): Matrix {
  return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]];
}
function point(matrix: Matrix, x: number, y: number) { return [matrix[0] * x + matrix[2] * y + matrix[4], matrix[1] * x + matrix[3] * y + matrix[5]]; }
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function numbers(array: PDFArray) { return array.asArray().map(value => (value as PDFNumber).asNumber()); }
function commands(doc: PDFDocument, pageIndex: number) {
  const contents = doc.getPage(pageIndex).node.Contents() as PDFArray | undefined;
  return contents?.asArray().map(ref => new TextDecoder().decode(decodePDFRawStream(doc.context.lookup(ref) as PDFRawStream).decode())).join('\n') || '';
}
function placements(doc: PDFDocument, pageIndex: number) {
  const resources = doc.getPage(pageIndex).node.Resources()?.lookup(PDFName.of('XObject'), PDFDict);
  const result: { source: number | undefined; matrix: Matrix; bbox: number[] }[] = [];
  let matrix = identity, operands: (string | number)[] = [];
  const stack: Matrix[] = [];
  for (const token of commands(doc, pageIndex).match(/[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?|\/[^\s]+|[A-Za-z]+/g) || []) {
    if (token.startsWith('/')) { operands.push(token.slice(1)); continue; }
    if (Number.isFinite(Number(token))) { operands.push(Number(token)); continue; }
    if (token === 'q') stack.push(matrix);
    if (token === 'Q') matrix = stack.pop() || identity;
    if (token === 'cm') matrix = multiply(matrix, operands.slice(-6) as Matrix);
    if (token === 'Do') {
      const object = resources!.lookup(PDFName.of(String(operands.at(-1)))) as PDFRawStream;
      const body = new TextDecoder().decode(decodePDFRawStream(object).decode());
      const source = [1, 2, 3, 4, 5, 6].find(value => body.includes(Array.from(`SOURCE_${value}`, char => char.charCodeAt(0).toString(16)).join('').toUpperCase()));
      const transform = numbers(object.dict.lookup(PDFName.of('Matrix'), PDFArray)) as Matrix;
      result.push({ source, matrix: multiply(matrix, transform), bbox: numbers(object.dict.lookup(PDFName.of('BBox'), PDFArray)) });
    }
    operands = [];
  }
  return result;
}

let file: File;
const rotations = [0, 90, 180, 270, -90, 360];
beforeAll(async () => {
  const pdf = await PDFDocument.create();
  for (const [index, angle] of rotations.entries()) {
    const page = pdf.addPage([600, 800]); page.setMediaBox(100, 50, 600, 800); page.setCropBox(130, 90, 500, 700); page.setRotation(degrees(angle)); page.drawText(`SOURCE_${index + 1}`, { x: 150, y: 120 });
  }
  pdf.addPage([300, 400]);
  const bytes = await pdf.save(); file = new File([new Uint8Array(bytes)], 'source.PDF', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
});

const grids: { mode: BookletGridMode; rows: number; columns: number; order: number[][] }[] = [
  { mode: '1x2', rows: 1, columns: 2, order: [[8, 1], [2, 7], [6, 3], [4, 5]] },
  { mode: '2x2', rows: 2, columns: 2, order: [[1, 2, 3, 4], [5, 6, 7, 8]] },
  { mode: '2x4', rows: 2, columns: 4, order: [[1, 2, 3, 4, 5, 6, 7, 8]] },
  { mode: '4x4', rows: 4, columns: 4, order: [Array.from({ length: 16 }, (_, index) => index + 1)] },
];

describe('Booklet vector output', () => {
  for (const grid of grids) for (const rotation of ['none', '90cw', '90ccw', 'alternate'] as BookletRotation[]) {
    it(`fits visible rotated/cropped content and preserves blank slots in ${grid.mode}/${rotation}`, async () => {
      const output = await createBooklet(file, { gridMode: grid.mode, paperSize: 'letter', orientation: 'landscape', rotation, padding: 20 });
      expect(output.success, output.error?.details).toBe(true); expect(output.filename).toBe('source_booklet.pdf');
      const pdf = await PDFDocument.load(await readBlob(output.result as Blob)); expect(pdf.getPageCount()).toBe(grid.order.length); expect(output.metadata?.outputSheets).toBe(grid.order.length);
      for (const [sheet, order] of grid.order.entries()) {
        const page = pdf.getPage(sheet); expect([page.getWidth(), page.getHeight()]).toEqual([792, 612]);
        const draws = placements(pdf, sheet); expect(draws.map(draw => draw.source)).toEqual(order.filter(number => number <= 6));
        for (const draw of draws) {
          const source = draw.source!, slot = order.indexOf(source), row = Math.floor(slot / grid.columns), column = slot % grid.columns;
          const extra = rotation === '90cw' ? 90 : rotation === '90ccw' ? -90 : rotation === 'alternate' ? source % 2 ? 90 : -90 : 0;
          const angle = ((rotations[source - 1] + extra) % 360 + 360) % 360;
          const width = angle % 180 ? 700 : 500, height = angle % 180 ? 500 : 700;
          const cellWidth = 792 / grid.columns, cellHeight = 612 / grid.rows, scale = Math.min((cellWidth - 40) / width, (cellHeight - 40) / height);
          const left = column * cellWidth + (cellWidth - width * scale) / 2, bottom = 612 - (row + 1) * cellHeight + (cellHeight - height * scale) / 2;
          expect(draw.bbox).toEqual([130, 90, 630, 790]);
          for (const [x, y] of [[130, 90], [630, 90], [130, 790], [630, 790], [150, 120]]) {
            const u = x - 130, v = y - 90;
            const displayed = angle === 0 ? [u, v] : angle === 90 ? [v, 500 - u] : angle === 180 ? [500 - u, 700 - v] : [700 - v, u];
            const actual = point(draw.matrix, x, y); expect(actual[0]).toBeCloseTo(left + displayed[0] * scale, 6); expect(actual[1]).toBeCloseTo(bottom + displayed[1] * scale, 6);
          }
        }
      }
    });
  }

  it.each([-1, NaN, Infinity, 200])('rejects padding %s rather than creating mirrored or missing pages', async padding => {
    const output = await createBooklet(file, { padding, gridMode: '4x4' }); expect(output.success).toBe(false); expect(output.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
  });
});
