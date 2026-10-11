import { createFileFixture } from '@/__tests__/helpers/file-fixture';
import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import {
  HandwritingInkContrastBoosterProcessor,
  createHandwritingInkContrastBoosterProcessor,
  boostHandwritingInkContrast
} from '@/lib/pdf/processors/handwriting-ink-contrast-booster';

// Setup Mock global browser APIs for canvas
if (typeof window === 'undefined') {
  vi.stubGlobal('window', {});
}

const mockCanvas = {
  width: 100,
  height: 100,
  getContext: () => ({
    drawImage: vi.fn(),
    getImageData: () => ({
      data: new Uint8ClampedArray(40000), // 100x100x4 pixels
    }),
    putImageData: vi.fn(),
  }),
  toBlob: vi.fn().mockImplementation((callback) => callback(new Blob())),
};

vi.stubGlobal('document', {
  createElement: (tag: string) => {
    if (tag === 'canvas') return mockCanvas;
    return {};
  },
});

vi.stubGlobal('createImageBitmap', vi.fn().mockResolvedValue({
  width: 100,
  height: 100,
  close: vi.fn(),
}));

afterAll(() => vi.unstubAllGlobals());

describe('HandwritingInkContrastBoosterProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = createFileFixture('ink_signature.png', 100, 'image/png');
  });

  it('should instantiate correctly', () => {
    const processor = createHandwritingInkContrastBoosterProcessor();
    expect(processor).toBeInstanceOf(HandwritingInkContrastBoosterProcessor);
  });

  it('should boost handwriting ink contrast successfully', async () => {
    const result = await boostHandwritingInkContrast([mockFile], {
      threshold: 200,
      contrast: 1.5,
      inkType: 'auto',
    });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('ink_signature_ink_boosted.png');
  });
});
