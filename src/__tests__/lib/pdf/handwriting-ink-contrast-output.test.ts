import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { boostHandwritingInkContrast } from '@/lib/pdf/processors/handwriting-ink-contrast-booster';

const drawImage = vi.fn(), putImageData = vi.fn(), closeBitmap = vi.fn();
const toBlob = vi.fn();
let pixels: Uint8ClampedArray;
let bitmap: ImageBitmap;

beforeEach(() => {
  vi.clearAllMocks();
  pixels = new Uint8ClampedArray([240, 240, 240, 255, 180, 40, 30, 128, 80, 100, 120, 255]);
  bitmap = { width: 3, height: 1, close: closeBitmap } as ImageBitmap;
  vi.stubGlobal('createImageBitmap', vi.fn().mockResolvedValue(bitmap));
  drawImage.mockReset();
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({ drawImage, getImageData: () => ({ data: pixels, width: 3, height: 1 }), putImageData } as unknown as CanvasRenderingContext2D);
  toBlob.mockReset().mockImplementation((callback: BlobCallback, type?: string) => callback(new Blob([new Uint8Array(pixels)], { type })));
  vi.spyOn(HTMLCanvasElement.prototype, 'toBlob').mockImplementation(toBlob);
});
afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); });
function source() {
  const file = new File(['JPEG decode fixture'], 'signature.jpg', { type: 'image/jpeg' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(8) });
  return file;
}

describe('Handwriting contrast pixels and encoding contract', () => {
  it.each([
    ['auto', [255, 255, 255, 255, 206, 0, 0, 128, 56, 86, 116, 255], '_ink_boosted.png'],
    ['dark-ink', [255, 255, 255, 255, 142, 0, 0, 128, 0, 22, 52, 255], '_ink_boosted.png'],
    ['red-stamp', [255, 255, 255, 255, 255, 27, 20, 128, 80, 100, 120, 255], '_stamp_boosted.png'],
  ] as const)('preserves %s processing, alpha and PNG output when the source is JPEG', async (inkType, expected, suffix) => {
    const result = await boostHandwritingInkContrast([source()], { inkType, threshold: 200, contrast: 1.5 });
    expect(result.success).toBe(true); expect(result.filename).toBe(`signature${suffix}`); expect(result.result).toBeInstanceOf(Blob);
    expect((result.result as Blob).type).toBe('image/png');
    expect(toBlob).toHaveBeenCalledWith(expect.any(Function), 'image/png');
    expect(Array.from(pixels)).toEqual(expected);
    expect(drawImage).toHaveBeenCalledWith(bitmap, 0, 0); expect(closeBitmap).toHaveBeenCalledTimes(1);
    expect(putImageData).toHaveBeenCalledWith(expect.objectContaining({ data: pixels, width: 3, height: 1 }), 0, 0);
    expect(result.metadata).toEqual(expect.objectContaining({ appliedThreshold: 200, appliedContrast: 1.5, inkType }));
  });

  it('releases a decoded bitmap even when drawing fails', async () => {
    drawImage.mockImplementationOnce(() => { throw new Error('Drawing failed'); });
    const result = await boostHandwritingInkContrast([source()]);
    expect(result.success).toBe(false); expect(result.error?.details).toBe('Drawing failed');
    expect(closeBitmap).toHaveBeenCalledTimes(1); expect(toBlob).not.toHaveBeenCalled();
  });
});
