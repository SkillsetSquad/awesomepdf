/** Detect scan tilt locally and correct existing page content without rasterizing it. */
import type { PDFDocumentLoadingTask, PDFDocumentProxy } from 'pdfjs-dist';
import type { ProcessInput, ProcessOutput, ProgressCallback } from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib, loadPdfjs } from '../loader';
import { estimateScanSkew, scanCorrectionMatrix } from '../skew';

export interface PdfDeskewAlignerOptions { threshold: number; dpi: number }
export interface AlignedScanPage {
  pageNumber: number;
  angle: number;
  corrected: boolean;
  reason: 'blank' | 'annotations' | 'no-clear-angle' | 'corrected';
  analysisDpi: number | null;
}

export class PdfDeskewAlignerProcessor extends BasePDFProcessor {
  async process(input: ProcessInput, onProgress?: ProgressCallback): Promise<ProcessOutput> {
    this.reset(); this.onProgress = onProgress;
    const { files, options } = input;
    const alignOptions: PdfDeskewAlignerOptions = { threshold: 10, dpi: 150, ...(options as Partial<PdfDeskewAlignerOptions>) };
    if (files.length !== 1) return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Please provide exactly one PDF file for deskewing.');
    if (!Number.isFinite(alignOptions.threshold) || alignOptions.threshold < 1 || alignOptions.threshold > 30
      || ![72, 150, 300].includes(alignOptions.dpi)) {
      return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Choose a correction limit from 1–30° and an analysis resolution of 72, 150 or 300 DPI.');
    }
    let loadingTask: PDFDocumentLoadingTask | undefined;
    let renderingDocument: PDFDocumentProxy | undefined;
    try {
      this.updateProgress(5, 'Reading PDF document...');
      const pdfLib = await loadPdfLib();
      const arrayBuffer = await files[0].arrayBuffer();
      const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      const pages = pdfDoc.getPages();
      const pageResults: AlignedScanPage[] = [];
      for (const [index, sourcePage] of pages.entries()) {
        if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled.');
        this.updateProgress(10 + index / pages.length * 80, `Analyzing page ${index + 1}...`);
        const result: AlignedScanPage = { pageNumber: index + 1, angle: 0, corrected: false, reason: 'no-clear-angle', analysisDpi: null };
        pageResults.push(result);
        // Changing only content would misalign interactive annotation geometry.
        if (sourcePage.node.Annots()?.size()) { result.reason = 'annotations'; continue; }
        const contents = sourcePage.node.Contents();
        if (!contents || contents instanceof pdfLib.PDFArray && contents.size() === 0) { result.reason = 'blank'; continue; }
        if (!renderingDocument) {
          const pdfjs = await loadPdfjs();
          // The worker may transfer its buffer; keep pdf-lib's source bytes intact.
          loadingTask = pdfjs.getDocument({ data: new Uint8Array(new Uint8Array(arrayBuffer)) });
          renderingDocument = await loadingTask.promise;
          if (renderingDocument.numPages !== pages.length) throw new Error('PDF readers disagree about the page count.');
        }
        const renderingPage = await renderingDocument.getPage(index + 1);
        const canvas = document.createElement('canvas');
        try {
          if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled.');
          const base = renderingPage.getViewport({ scale: 1 });
          const scale = Math.min(alignOptions.dpi / 72, 4096 / Math.max(base.width, base.height), Math.sqrt(16_000_000 / (base.width * base.height)));
          const viewport = renderingPage.getViewport({ scale });
          canvas.width = Math.ceil(viewport.width); canvas.height = Math.ceil(viewport.height);
          const ctx = canvas.getContext('2d', { willReadFrequently: true });
          if (!ctx) throw new Error('Cannot create a canvas for local scan analysis.');
          ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
          await renderingPage.render({ canvasContext: ctx, viewport }).promise;
          if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled.');
          const scan = estimateScanSkew(ctx.getImageData(0, 0, canvas.width, canvas.height), alignOptions.threshold);
          result.angle = scan.angle; result.analysisDpi = scale * 72;
          if (scan.angle === 0) continue;
          const media = sourcePage.getMediaBox(), crop = sourcePage.getCropBox();
          const x = Math.max(media.x, crop.x), y = Math.max(media.y, crop.y);
          const width = Math.min(media.x + media.width, crop.x + crop.width) - x;
          const height = Math.min(media.y + media.height, crop.y + crop.height) - y;
          if (![x, y, width, height].every(Number.isFinite) || width <= 0 || height <= 0) throw new Error('The source page has an invalid visible box.');
          const matrix = scanCorrectionMatrix({ x, y, width, height }, scan.angle);
          sourcePage.node.normalize();
          const start = pdfDoc.context.register(pdfDoc.context.flateStream(`q\n${matrix.join(' ')} cm\n${x} ${y} ${width} ${height} re W n\n`));
          const end = pdfDoc.context.register(pdfDoc.context.flateStream('Q\n'));
          if (!sourcePage.node.wrapContentStreams(start, end)) throw new Error('Cannot transform the source page content.');
          result.corrected = true; result.reason = 'corrected';
        } finally {
          renderingPage.cleanup(); canvas.width = 0; canvas.height = 0;
        }
      }
      if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled.');
      this.updateProgress(95, 'Saving aligned PDF...');
      const bytes = await pdfDoc.save();
      const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' });
      this.updateProgress(100, 'Complete!');
      return this.createSuccessOutput(blob, `${files[0].name.replace(/\.[^/.]+$/, '')}_deskewed_aligned.pdf`, {
        pagesProcessed: pages.length,
        correctedPages: pageResults.filter(page => page.corrected).length,
        annotationPages: pageResults.filter(page => page.reason === 'annotations').length,
        appliedThreshold: alignOptions.threshold,
        appliedDpi: alignOptions.dpi,
        pageResults,
      });
    } catch (error) {
      return this.createErrorOutput(this.checkCancelled() ? PDFErrorCode.PROCESSING_CANCELLED : PDFErrorCode.PROCESSING_FAILED,
        'Failed to align and deskew scanned PDF.', error instanceof Error ? error.message : 'Unknown error');
    } finally {
      await loadingTask?.destroy().catch(() => {});
    }
  }
  protected getAcceptedTypes(): string[] { return ['application/pdf']; }
}
export function createPdfDeskewAlignerProcessor(): PdfDeskewAlignerProcessor { return new PdfDeskewAlignerProcessor(); }
export async function deskewPDFAligner(files: File[], options?: Partial<PdfDeskewAlignerOptions>, onProgress?: ProgressCallback): Promise<ProcessOutput> {
  return createPdfDeskewAlignerProcessor().process({ files, options: options || {} }, onProgress);
}
