import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { pdfToTiff } from '@/lib/pdf/processors/pdf-to-tiff';

const { getDocument } = vi.hoisted(() => ({ getDocument: vi.fn() }));
vi.mock('@/lib/pdf/loader', () => ({ loadPdfjs: async () => ({ getDocument }) }));
const viewport = vi.fn(() => ({ width: 2, height: 2 }));
const pixels = [0, 0, 0, 255, 255, 255, 255, 255, 255, 0, 0, 255, 0, 255, 0, 255];
const reversed = [255, 255, 255, 255, 0, 0, 0, 255, 0, 255, 0, 255, 255, 0, 0, 255];

beforeEach(() => {
  vi.clearAllMocks();
  getDocument.mockReturnValue({ promise: Promise.resolve({ numPages: 2, getPage: async (page: number) => ({
    getViewport: viewport, render: ({ canvasContext }: { canvasContext: CanvasRenderingContext2D }) => {
      canvasContext.canvas.dataset.fixturePage = String(page);
      return { promise: Promise.resolve() };
    },
  }) }) });
  const contexts = new WeakMap<HTMLCanvasElement, CanvasRenderingContext2D>();
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(function (this: HTMLCanvasElement) {
    let context = contexts.get(this);
    if (!context) {
      context = { canvas: this, fillRect: () => {}, getImageData: () => ({ data: new Uint8ClampedArray(this.dataset.fixturePage === '2' ? reversed : pixels) }) } as unknown as CanvasRenderingContext2D;
      contexts.set(this, context);
    }
    return context;
  });
});
afterEach(() => vi.restoreAllMocks());

function bytesOf(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = reject; reader.readAsArrayBuffer(blob);
  });
}

/** Read the public TIFF directory/strip format, independently of the encoder's functions. */
function directories(bytes: ArrayBuffer) {
  const view = new DataView(bytes);
  expect(view.getUint16(0, true)).toBe(0x4949);
  expect(view.getUint16(2, true)).toBe(42);
  const frames: Map<number, { count: number; value: number }>[] = [];
  const seen = new Set<number>();
  let offset = view.getUint32(4, true);
  while (offset) {
    expect(seen.has(offset)).toBe(false);
    seen.add(offset);
    expect(offset + 2).toBeLessThanOrEqual(bytes.byteLength);
    const count = view.getUint16(offset, true);
    expect(offset + 2 + count * 12 + 4).toBeLessThanOrEqual(bytes.byteLength);
    const tags = new Map<number, { count: number; value: number }>();
    for (let i = 0; i < count; i++) {
      const entry = offset + 2 + i * 12;
      tags.set(view.getUint16(entry, true), { count: view.getUint32(entry + 4, true), value: view.getUint32(entry + 8, true) });
    }
    frames.push(tags);
    offset = view.getUint32(offset + 2 + count * 12, true);
  }
  return { frames, view };
}

function unpack(bytes: Uint8Array): number[] {
  const output: number[] = [];
  for (let i = 0; i < bytes.length;) {
    const count = bytes[i++];
    if (count < 128) { output.push(...bytes.slice(i, i + count + 1)); i += count + 1; }
    else if (count > 128) { output.push(...Array(257 - count).fill(bytes[i++])); }
  }
  return output;
}

const cases = (['color', 'grayscale', 'mono'] as const).flatMap(mode => (['none', 'packbits'] as const).map(compression => ({ mode, compression })));
describe('TIFF export compatibility', () => {
  it.each(cases)('writes linked pages, DPI and correct pixels for $mode / $compression', async ({ mode, compression }) => {
    const file = new File(['%PDF-fixture'], 'source.pdf', { type: 'application/pdf' });
    Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array([37, 80, 68, 70]).buffer });
    const output = await pdfToTiff(file, { colorMode: mode, compression, dpi: 300, scale: 300 / 72 });
    expect(output.success).toBe(true);
    const blob = output.result as Blob;
    expect(blob.type).toBe('image/tiff');
    const bytes = await bytesOf(blob);
    // Optional local artifacts let an independent installed TIFF decoder inspect the exact outputs.
    if (process.env.AWSOMEPDF_TIFF_FIXTURE_DIR) {
      const fs = await import('node:fs/promises'); const path = await import('node:path');
      await fs.mkdir(process.env.AWSOMEPDF_TIFF_FIXTURE_DIR, { recursive: true });
      await fs.writeFile(path.join(process.env.AWSOMEPDF_TIFF_FIXTURE_DIR, `${mode}-${compression}.tiff`), new Uint8Array(bytes));
    }
    const { frames, view } = directories(bytes);
    expect(frames).toHaveLength(2);
    for (const [index, tags] of frames.entries()) {
      expect(tags.get(256)?.value).toBe(2); expect(tags.get(257)?.value).toBe(2);
      expect(tags.get(259)?.value).toBe(compression === 'none' ? 1 : 32773);
      expect(tags.get(296)?.value).toBe(2);
      for (const tag of [282, 283]) {
        const offset = tags.get(tag)!.value;
        expect(view.getUint32(offset, true) / view.getUint32(offset + 4, true)).toBe(300);
      }
      const bitDepth = tags.get(258)!;
      expect(bitDepth.count).toBe(mode === 'color' ? 3 : 1);
      expect(mode === 'color' ? view.getUint16(bitDepth.value, true) : bitDepth.value).toBe(mode === 'mono' ? 1 : 8);
      const strip = new Uint8Array(bytes, tags.get(273)!.value, tags.get(279)!.value);
      const decoded = compression === 'packbits' ? unpack(strip) : [...strip];
      expect(decoded).toEqual(mode === 'color' ? (index ? [255, 255, 255, 0, 0, 0, 0, 255, 0, 255, 0, 0] : [0, 0, 0, 255, 255, 255, 255, 0, 0, 0, 255, 0])
        : mode === 'grayscale' ? (index ? [255, 0, 150, 76] : [0, 255, 76, 150]) : (index ? [128, 128] : [64, 64]));
    }
    expect(viewport).toHaveBeenCalledWith({ scale: 300 / 72 });
  });
});
