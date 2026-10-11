import { createFileFixture } from '@/__tests__/helpers/file-fixture';
import { describe, it, expect, vi, beforeEach, afterAll } from 'vitest';
import {
  SignatureInkOptimizerProcessor,
  createSignatureInkOptimizerProcessor,
  optimizeSignatureInk
} from '@/lib/pdf/processors/signature-ink-optimizer';

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
}));

afterAll(() => vi.unstubAllGlobals());

describe('SignatureInkOptimizerProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = createFileFixture('signature.png', 100, 'image/png');
  });

  it('should instantiate correctly', () => {
    const processor = createSignatureInkOptimizerProcessor();
    expect(processor).toBeInstanceOf(SignatureInkOptimizerProcessor);
  });

  it('should optimize and purify ink signatures successfully', async () => {
    const result = await optimizeSignatureInk([mockFile], {
      threshold: 200,
      inkType: 'auto',
      contrast: 1.5,
    });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('signature_ink_purified.png');
  });
});
