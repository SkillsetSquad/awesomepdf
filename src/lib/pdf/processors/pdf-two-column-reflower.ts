/**
 * PDF Two Column Reflower Processor
 * 
 * Intelligently reflows academic papers from 2-column layout to single-column readable format.
 * Utilizes low-level viewports crop division for lossless vector precision reflow.
 */

import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import type { PDFPage } from 'pdf-lib';

export interface PdfTwoColumnReflowerOptions {
  middleGapRatio: number; // Displayed split line (UI range 0.4-0.6, default 0.5)
  horizontalReading: boolean; // Reader layout preference; page order stays left then right.
}

type PageBox = { x: number; y: number; width: number; height: number };

function columnBoxes(page: PDFPage, ratio: number): [PageBox, PageBox] {
  const media = page.getMediaBox(), crop = page.getCropBox();
  const x = Math.max(media.x, crop.x), y = Math.max(media.y, crop.y);
  const width = Math.min(media.x + media.width, crop.x + crop.width) - x;
  const height = Math.min(media.y + media.height, crop.y + crop.height) - y;
  if (width <= 0 || height <= 0) throw new Error('The page has no visible area inside its crop and media boxes.');
  const rotation = (page.getRotation().angle % 360 + 360) % 360;
  // Crop in PDF coordinates while keeping left/right relative to the displayed page.
  if (rotation === 0) return [{ x, y, width: width * ratio, height }, { x: x + width * ratio, y, width: width * (1 - ratio), height }];
  if (rotation === 180) return [{ x: x + width * (1 - ratio), y, width: width * ratio, height }, { x, y, width: width * (1 - ratio), height }];
  if (rotation === 90) return [{ x, y, width, height: height * ratio }, { x, y: y + height * ratio, width, height: height * (1 - ratio) }];
  if (rotation === 270) return [{ x, y: y + height * (1 - ratio), width, height: height * ratio }, { x, y, width, height: height * (1 - ratio) }];
  throw new Error('Page rotation must be a multiple of 90 degrees.');
}

export class PdfTwoColumnReflowerProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const reflowOptions: PdfTwoColumnReflowerOptions = {
      middleGapRatio: 0.5,
      horizontalReading: false,
      ...(options as Partial<PdfTwoColumnReflowerOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF document to reflow.'
      );
    }

    if (!Number.isFinite(reflowOptions.middleGapRatio) || reflowOptions.middleGapRatio <= 0 || reflowOptions.middleGapRatio >= 1 || typeof reflowOptions.horizontalReading !== 'boolean') {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Choose a split ratio between 0 and 1 and a valid reader layout.');
    }

    const file = files[0];

    try {
      this.updateProgress(10, 'Loading PDF library...');
      const pdfLib = await loadPdfLib();

      this.updateProgress(20, 'Reading PDF structure...');
      const arrayBuffer = await file.arrayBuffer();
      const srcDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const destDoc = await pdfLib.PDFDocument.create();
      const readerLayout = reflowOptions.horizontalReading ? 'TwoColumnLeft' : 'OneColumn';
      destDoc.catalog.set(pdfLib.PDFName.of('PageLayout'), pdfLib.PDFName.of(readerLayout));

      const pageCount = srcDoc.getPageCount();
      
      this.updateProgress(40, 'Reflowing double columns to single column layout...');

      for (let i = 0; i < pageCount; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled');
        }

        // We copy the page twice to preserve original vector content lossless
        const [pageLeft] = await destDoc.copyPages(srcDoc, [i]);
        const [pageRight] = await destDoc.copyPages(srcDoc, [i]);

        const [left, right] = columnBoxes(pageLeft, reflowOptions.middleGapRatio);

        // Set crop boxes for left column
        pageLeft.setCropBox(left.x, left.y, left.width, left.height);
        destDoc.addPage(pageLeft);

        // Set crop boxes for right column
        pageRight.setCropBox(right.x, right.y, right.width, right.height);
        destDoc.addPage(pageRight);

        this.updateProgress(40 + Math.floor((i / pageCount) * 50), `Processing page ${i + 1}/${pageCount}...`);
      }

      this.updateProgress(90, 'Assembling single-column reflowed document...');
      const outputBytes = await destDoc.save();
      const blob = new Blob([new Uint8Array(outputBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');
      
      const lastDot = file.name.lastIndexOf('.');
      const baseName = lastDot === -1 ? file.name : file.name.slice(0, lastDot);
      const outputFilename = `${baseName}_single_column.pdf`;

      return this.createSuccessOutput(blob, outputFilename, {
        originalPagesCount: pageCount,
        reflowedPagesCount: destDoc.getPageCount(),
        appliedGapRatio: reflowOptions.middleGapRatio,
        readerLayout,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to reflow academic two-column PDF.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createPdfTwoColumnReflowerProcessor(): PdfTwoColumnReflowerProcessor {
  return new PdfTwoColumnReflowerProcessor();
}

export async function reflowTwoColumnPDF(
  files: File[],
  options?: Partial<PdfTwoColumnReflowerOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPdfTwoColumnReflowerProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}
