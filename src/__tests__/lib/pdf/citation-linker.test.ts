import { createTextPDFFile, readBlobBytes } from '@/__tests__/helpers/file-fixture';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { 
  CitationLinkerProcessor, 
  createCitationLinkerProcessor, 
  linkCitations 
} from '@/lib/pdf/processors/citation-linker';
import { PDFErrorCode } from '@/types/pdf';
import type { CitationLinkerOptions } from '@/lib/pdf/processors/citation-linker';

// Mock loader libraries
vi.mock('@/lib/pdf/loader', () => {
  const mockPdfjs = {
    getDocument: vi.fn().mockImplementation(() => {
      return {
        promise: Promise.resolve({
          numPages: 2,
          getPage: vi.fn().mockImplementation(async (pageNum) => {
            if (pageNum === 1) {
              // Body Page with citation marker
              return {
                getTextContent: async () => ({
                  items: [
                    { str: 'This is a claim [1] that needs backing.', transform: [10, 0, 0, 10, 100, 500], width: 150, height: 10 },
                  ],
                }),
              };
            } else {
              // References section page
              return {
                getTextContent: async () => ({
                  items: [
                    { str: 'References', transform: [14, 0, 0, 14, 50, 700], width: 80, height: 14 },
                    { str: '[1] Scientist Name. Study on stuff. DOI: 10.1234/test.doi.path', transform: [10, 0, 0, 10, 50, 650], width: 250, height: 10 },
                  ],
                }),
              };
            }
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

describe('CitationLinkerProcessor', () => {
  let mockFile: File;

  beforeEach(async () => {
    mockFile = await createTextPDFFile('sample.pdf', ['This is a claim [1] that needs backing.', 'References [1] Scientist Name. Study on stuff. DOI: 10.1234/test.doi.path']);
  });

  it('should instantiate processor correctly', () => {
    const processor = createCitationLinkerProcessor();
    expect(processor).toBeInstanceOf(CitationLinkerProcessor);
  });

  it('should return error if input files are invalid', async () => {
    const processor = createCitationLinkerProcessor();
    const result = await processor.process({ files: [], options: {} });
    expect(result.success).toBe(false);
    expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
  });

  it('should detect citations and resolve bibliography items with DOIs', async () => {
    const result = await linkCitations(mockFile, { detectDoi: true });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('sample_citations_linked.pdf');

    const metadata = result.metadata;
    expect(metadata?.pageCount).toBe(2);
    
    const citations = metadata?.citations as NonNullable<CitationLinkerOptions['citationsList']>;
    expect(citations).toBeDefined();
    expect(citations.length).toBeGreaterThan(0);

    const firstCitation = citations[0];
    expect(firstCitation.marker).toBe('[1]');
    expect(firstCitation.pageNum).toBe(1);
    expect(firstCitation.url).toBe('https://doi.org/10.1234/test.doi.path');
    expect(firstCitation.refText).toContain('Scientist Name. Study on stuff.');
    const { PDFDocument, PDFArray, PDFDict, PDFName, PDFString } = await import('pdf-lib');
    const output = await PDFDocument.load(await readBlobBytes(result.result as Blob));
    expect(output.getPageCount()).toBe(2);
    const annotations = output.getPage(0).node.lookup(PDFName.of('Annots'), PDFArray);
    expect(annotations.size()).toBe(1);
    const annotation = output.context.lookup(annotations.get(0), PDFDict);
    expect(annotation.lookup(PDFName.of('Subtype'), PDFName)).toBe(PDFName.of('Link'));
    const action = annotation.lookup(PDFName.of('A'), PDFDict);
    expect(action.lookup(PDFName.of('S'), PDFName)).toBe(PDFName.of('URI'));
    expect(action.lookup(PDFName.of('URI'), PDFString).asString()).toBe('https://doi.org/10.1234/test.doi.path');
  });
});
