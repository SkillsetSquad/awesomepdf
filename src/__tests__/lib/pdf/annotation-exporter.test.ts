import { createFileFixture } from '@/__tests__/helpers/file-fixture';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  AnnotationExporterProcessor,
  createAnnotationExporterProcessor,
  exportAnnotations
} from '@/lib/pdf/processors/annotation-exporter';

vi.mock('@/lib/pdf/loader', () => {
  const mockPdfjs = {
    getDocument: vi.fn().mockImplementation(() => {
      return {
        promise: Promise.resolve({
          numPages: 2,
          getPage: vi.fn().mockImplementation(async () => {
            return {
              getAnnotations: () => Promise.resolve([
                { subtype: 'Highlight', contents: 'This is highlight', color: [1, 1, 0] },
                { subtype: 'Text', contents: 'This is note', title: 'User' },
              ]),
            };
          }),
        }),
      };
    }),
  };

  return {
    loadPdfjs: vi.fn().mockResolvedValue(mockPdfjs),
  };
});

describe('AnnotationExporterProcessor', () => {
  let mockFile: File;

  beforeEach(() => {
    mockFile = createFileFixture('notes.pdf', 100, 'application/pdf');
  });

  it('should instantiate correctly', () => {
    const processor = createAnnotationExporterProcessor();
    expect(processor).toBeInstanceOf(AnnotationExporterProcessor);
  });

  it('should extract annotations successfully as MD', async () => {
    const result = await exportAnnotations([mockFile], { format: 'md' });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('notes_annotations.md');
    expect(result.metadata?.annotationCount).toBe(4); // 2 pages * 2 annots
  });
});
