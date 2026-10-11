import { createTextPDFFile, readBlobBytes } from '@/__tests__/helpers/file-fixture';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  BatchWatermarkRemoverProcessor,
  createBatchWatermarkRemoverProcessor,
  removeBatchWatermarks
} from '@/lib/pdf/processors/batch-watermark-remover';

vi.mock('@/lib/pdf/loader', () => ({
  loadPdfLib: vi.fn(async () => import('pdf-lib')),
}));

describe('BatchWatermarkRemoverProcessor', () => {
  let mockFile: File;

  beforeEach(async () => {
    mockFile = await createTextPDFFile('report.pdf', 'Confidential');
  });

  it('should instantiate correctly', () => {
    const processor = createBatchWatermarkRemoverProcessor();
    expect(processor).toBeInstanceOf(BatchWatermarkRemoverProcessor);
  });

  it('should remove watermarks successfully', async () => {
    const result = await removeBatchWatermarks([mockFile], {
      watermarkText: 'Confidential',
      removeImages: true,
    });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('report_watermarked_purged.pdf');
    const { PDFDocument, PDFRawStream, decodePDFRawStream, PDFName } = await import('pdf-lib');
    const output = await PDFDocument.load(await readBlobBytes(result.result as Blob));
    const content = output.context.lookup(output.getPage(0).node.get(PDFName.of('Contents')));
    expect(content).toBeInstanceOf(PDFRawStream);
    if (!(content instanceof PDFRawStream)) throw new Error('Expected a saved content stream');
    const decoded = new TextDecoder().decode(decodePDFRawStream(content).decode());
    expect(decoded).not.toContain('Confidential');
    expect(decoded).toContain('() Tj');
  });
});
