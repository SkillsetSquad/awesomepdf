import { rewritePageContent } from '../rewrite-page-content';
/**
 * Batch Watermark Remover Processor
 * 
 * Implements physical purge of watermarks from PDF content streams.
 * Scans content operators and physically removes matched text nodes or specified shapes.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';

export interface BatchWatermarkOptions {
  watermarkText?: string;
  removeImages?: boolean;
}

const DEFAULT_OPTIONS: BatchWatermarkOptions = {
  watermarkText: '',
  removeImages: false,
};

export class BatchWatermarkRemoverProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const removerOptions: BatchWatermarkOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<BatchWatermarkOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF file.'
      );
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF documents...');
      const pdfLib = await loadPdfLib();
      
      const fileBytes = await file.arrayBuffer();
      const pdfDoc = await pdfLib.PDFDocument.load(fileBytes);
      const pages = pdfDoc.getPages();
      const totalPages = pages.length;

      this.updateProgress(30, 'Analyzing content streams...');
      const targetText = removerOptions.watermarkText?.trim();

      const progressInterval = 60 / totalPages;

      for (let i = 0; i < totalPages; i++) {
        this.updateProgress(30 + i * progressInterval, `Purging watermark operators from page ${i + 1}...`);
        
        const page = pages[i];
        
        // Remove image XObjects if requested (often watermarks are semi-transparent images)
        if (removerOptions.removeImages) {
          const resources = page.node.get(pdfLib.PDFName.of('Resources'));
          if (resources instanceof pdfLib.PDFDict) {
            const xObject = resources.get(pdfLib.PDFName.of('XObject'));
            if (xObject instanceof pdfLib.PDFDict) {
              const keys = xObject.keys();
              for (const key of keys) {
                const xObj = xObject.get(key);
                if (xObj) {
                  const resolved = pdfDoc.context.lookup(xObj);
                  if (resolved instanceof pdfLib.PDFStream) {
                    const subtype = resolved.dict.get(pdfLib.PDFName.of('Subtype'));
                    if (subtype === pdfLib.PDFName.of('Image')) {
                      // Remove this image XObject by deleting it from resources
                      xObject.delete(key);
                    }
                  }
                }
              }
            }
          }
        }

        // If target watermark text is provided, scrub text operators from content streams
        if (targetText) {
          const escapedText = targetText.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          const searchRegex = new RegExp(`\\([^\\)]*${escapedText}[^\\)]*\\)\\s*(Tj|TJ)`, 'gi');
          rewritePageContent(pdfLib, pdfDoc, page, content => content.replace(searchRegex, '() Tj'));
        }
      }

      this.updateProgress(95, 'Saving purified PDF...');
      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, `${file.name.replace(/\.pdf$/i, '')}_watermarked_purged.pdf`, {
        pageCount: totalPages,
        purgedText: !!targetText,
        purgedImages: !!removerOptions.removeImages,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to purge watermarks.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createBatchWatermarkRemoverProcessor(): BatchWatermarkRemoverProcessor {
  return new BatchWatermarkRemoverProcessor();
}

export async function removeBatchWatermarks(
  files: File[],
  options?: Partial<BatchWatermarkOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createBatchWatermarkRemoverProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}
