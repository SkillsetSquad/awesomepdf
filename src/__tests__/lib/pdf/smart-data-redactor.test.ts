import { createTextPDFFile, readBlobBytes } from '@/__tests__/helpers/file-fixture';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  SmartDataRedactorProcessor,
  createSmartDataRedactorProcessor,
  redactSmartData
} from '@/lib/pdf/processors/smart-data-redactor';

import { extractRedactionText, removePDFContent } from '@/lib/pdf/redaction-engine';
vi.mock('@/lib/pdf/redaction-engine', () => ({ extractRedactionText: vi.fn(), removePDFContent: vi.fn() }));

describe('SmartDataRedactorProcessor', () => {
  let mockFile: File;

  beforeEach(async () => {
    vi.clearAllMocks();
    vi.mocked(extractRedactionText).mockResolvedValue([{ page: 1, chars: [...'test@example.com'].map((text, i) => ({
      text, rect: [100 + i * 6, 197, 106 + i * 6, 212], origin: [100 + i * 6, 200],
    })) }]);
    const clean = await createTextPDFFile('output.pdf', 'KEEP');
    vi.mocked(removePDFContent).mockResolvedValue(new Uint8Array(await clean.arrayBuffer()));
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
    const contents = output.context.lookup(output.getPage(0).node.get(PDFName.of('Contents')));
    const decoded = (contents instanceof PDFArray ? contents.asArray() : [contents]).map(ref => {
      const stream = output.context.lookup(ref);
      expect(stream).toBeInstanceOf(PDFRawStream);
      if (!(stream instanceof PDFRawStream)) throw new Error('Expected a saved content stream');
      return new TextDecoder().decode(decodePDFRawStream(stream).decode());
    }).join('\n');
    expect(decoded).not.toContain('test@example.com');
    expect(decoded).toContain('(KEEP) Tj');
    expect(removePDFContent).toHaveBeenCalledWith(mockFile, [expect.objectContaining({ coordinates: 'pdf', rect: [100, 197, 196, 212] })]);
  });
  it('fails when no sensitive data is found instead of returning the original as redacted', async () => {
    vi.mocked(extractRedactionText).mockResolvedValue([]);
    const result = await redactSmartData([mockFile], { patterns: ['email'] });
    expect(result.success).toBe(false);
    expect(removePDFContent).not.toHaveBeenCalled();
  });
});
