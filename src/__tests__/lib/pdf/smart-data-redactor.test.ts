import { createTextPDFFile, readBlobBytes } from '@/__tests__/helpers/file-fixture';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  SmartDataRedactorProcessor,
  createSmartDataRedactorProcessor,
  redactSmartData
} from '@/lib/pdf/processors/smart-data-redactor';

vi.mock('@/lib/pdf/loader', () => {
  const mockPdfjs = {
    getDocument: vi.fn().mockImplementation(() => {
      return {
        promise: Promise.resolve({
          numPages: 1,
          getPage: vi.fn().mockImplementation(async () => {
            return {
              getTextContent: () => Promise.resolve({
                items: [
                  { str: 'test@example.com', transform: [12, 0, 0, 12, 100, 200] },
                ],
              }),
            };
          }),
        }),
      };
    }),
  };

  return {
    loadPdfjs: vi.fn().mockResolvedValue(mockPdfjs),
    loadPdfLib: vi.fn(async () => import('pdf-lib')),
  };
});

describe('SmartDataRedactorProcessor', () => {
  let mockFile: File;

  beforeEach(async () => {
    mockFile = await createTextPDFFile('secure.pdf', 'test@example.com');
  });

  it('should instantiate correctly', () => {
    const processor = createSmartDataRedactorProcessor();
    expect(processor).toBeInstanceOf(SmartDataRedactorProcessor);
  });

  it('should redact sensitive details successfully', async () => {
    const result = await redactSmartData([mockFile], {
      patterns: ['email'],
    });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('secure_redacted.pdf');
    expect(result.metadata?.redactionsApplied).toBe(1);
    const { PDFDocument, PDFArray, PDFRawStream, decodePDFRawStream, PDFName } = await import('pdf-lib');
    const output = await PDFDocument.load(await readBlobBytes(result.result as Blob));
    const contents = output.context.lookup(output.getPage(0).node.get(PDFName.of('Contents')), PDFArray);
    const decoded = contents.asArray().map(ref => {
      const stream = output.context.lookup(ref);
      expect(stream).toBeInstanceOf(PDFRawStream);
      if (!(stream instanceof PDFRawStream)) throw new Error('Expected a saved content stream');
      return new TextDecoder().decode(decodePDFRawStream(stream).decode());
    }).join('\n');
    expect(decoded).not.toContain('test@example.com');
    expect(decoded).toContain('([REDACTED]) Tj');
  });
});
