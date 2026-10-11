import { beforeEach, describe, expect, it, vi } from 'vitest';
import { OCGManagerProcessor } from '@/lib/pdf/processors/ocg-manager';

const engines = vi.hoisted(() => ({
  getOCGLayers: vi.fn(), toggleOCGLayer: vi.fn(), addOCGLayer: vi.fn(), deleteOCGLayer: vi.fn(), renameOCGLayer: vi.fn(),
}));
vi.mock('@/lib/pdf/pymupdf-loader', () => ({ loadPyMuPDF: vi.fn(async () => engines) }));

beforeEach(() => {
  vi.clearAllMocks();
  Object.values(engines).forEach(operation => operation.mockReset());
});

describe('OCG operation output boundary', () => {
  it.each(['toggle', 'add', 'delete', 'rename'] as const)('returns the binary PDF for %s rather than its engine wrapper', async action => {
    const pdf = new Blob(['binary-pdf'], { type: 'application/pdf' });
    const operations = { toggle: engines.toggleOCGLayer, add: engines.addOCGLayer, delete: engines.deleteOCGLayer, rename: engines.renameOCGLayer };
    operations[action].mockResolvedValue({ pdf, layerId: '7' });
    const result = await new OCGManagerProcessor().process({
      files: [new File(['input'], 'layers.pdf', { type: 'application/pdf' })],
      options: { action, layerId: '7', layerName: 'New name', visible: false },
    });
    expect(result.success).toBe(true);
    expect(result.result).toBe(pdf);
    expect(result.filename).toBe('layers_layers.pdf');
    expect(operations[action]).toHaveBeenCalledOnce();
  });
});
