/**
 * PDF Booklet Processor
 * 
 * Creates booklet layouts from PDF files for print-and-fold production.
 * Supports various grid modes and paper sizes.
 */

import type {
    ProcessInput,
    ProcessOutput,
    ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { PDFArray, PDFDocument, PageSizes, degrees, type PDFPage } from 'pdf-lib';

/**
 * Grid mode options
 */
export type BookletGridMode = '1x2' | '2x2' | '2x4' | '4x4';

/**
 * Paper size options
 */
export type BookletPaperSize = 'letter' | 'a4' | 'a3' | 'legal' | 'tabloid';

/**
 * Orientation options
 */
export type BookletOrientation = 'auto' | 'portrait' | 'landscape';

/**
 * Rotation options
 */
export type BookletRotation = 'none' | '90cw' | '90ccw' | 'alternate';

/**
 * Booklet options interface
 */
export interface BookletPDFOptions {
    /** Grid arrangement mode */
    gridMode: BookletGridMode;
    /** Output paper size */
    paperSize: BookletPaperSize;
    /** Page orientation */
    orientation: BookletOrientation;
    /** Page rotation mode */
    rotation: BookletRotation;
    /** Padding between pages (in points, default 10) */
    padding: number;
}

/**
 * Default booklet options
 */
const DEFAULT_BOOKLET_OPTIONS: BookletPDFOptions = {
    gridMode: '1x2',
    paperSize: 'letter',
    orientation: 'auto',
    rotation: 'none',
    padding: 10,
};

/**
 * Paper size mapping to pdf-lib PageSizes
 */
const PAPER_SIZES: Record<BookletPaperSize, [number, number]> = {
    letter: PageSizes.Letter,
    a4: PageSizes.A4,
    a3: PageSizes.A3,
    legal: PageSizes.Legal,
    tabloid: PageSizes.Tabloid,
};

/**
 * Get grid dimensions from mode
 */
function getGridDimensions(mode: BookletGridMode): { rows: number; cols: number } {
    switch (mode) {
        case '1x2': return { rows: 1, cols: 2 };
        case '2x2': return { rows: 2, cols: 2 };
        case '2x4': return { rows: 2, cols: 4 };
        case '4x4': return { rows: 4, cols: 4 };
        default: return { rows: 1, cols: 2 };
    }
}

/**
 * Get sheet dimensions based on paper size and orientation
 */
function getSheetDimensions(
    paperSize: BookletPaperSize,
    orientation: BookletOrientation,
    isBookletMode: boolean
): { width: number; height: number } {
    const pageDims = PAPER_SIZES[paperSize] || PAPER_SIZES.letter;

    let effectiveOrientation: 'portrait' | 'landscape';
    if (orientation === 'auto') {
        effectiveOrientation = isBookletMode ? 'landscape' : 'portrait';
    } else {
        effectiveOrientation = orientation;
    }

    if (effectiveOrientation === 'landscape') {
        return { width: pageDims[1], height: pageDims[0] };
    }
    return { width: pageDims[0], height: pageDims[1] };
}

/** Sheet geometry shared by the imposition processor and its layout illustration. */
export function getBookletSheetLayout(options: Pick<BookletPDFOptions, 'gridMode' | 'paperSize' | 'orientation'>) {
    return {
        ...getGridDimensions(options.gridMode),
        ...getSheetDimensions(options.paperSize, options.orientation, options.gridMode === '1x2'),
    };
}

function visiblePageBox(page: PDFPage) {
    const media = page.getMediaBox();
    const crop = page.getCropBox();
    const left = Math.max(media.x, crop.x);
    const bottom = Math.max(media.y, crop.y);
    const right = Math.min(media.x + media.width, crop.x + crop.width);
    const top = Math.min(media.y + media.height, crop.y + crop.height);
    if (![left, bottom, right, top].every(Number.isFinite) || right <= left || top <= bottom) {
        throw new Error('The source page has an invalid visible page box.');
    }
    return { left, bottom, right, top };
}

function displayedRotation(page: PDFPage, mode: BookletRotation, pageIndex: number) {
    const extra = mode === '90cw' ? 90 : mode === '90ccw' ? -90 : mode === 'alternate' ? pageIndex % 2 === 0 ? 90 : -90 : 0;
    const angle = page.getRotation().angle + extra;
    if (!Number.isFinite(angle) || angle % 90 !== 0) throw new Error('The source page has an unsupported rotation.');
    return ((angle % 360) + 360) % 360;
}

/**
 * PDF Booklet Processor
 * Creates booklet layouts from PDF files.
 */
export class BookletPDFProcessor extends BasePDFProcessor {
    /**
     * Process PDF file and create booklet layout
     */
    async process(
        input: ProcessInput,
        onProgress?: ProgressCallback
    ): Promise<ProcessOutput> {
        this.reset();
        this.onProgress = onProgress;

        const { files, options } = input;
        const bookletOptions: BookletPDFOptions = {
            ...DEFAULT_BOOKLET_OPTIONS,
            ...(options as Partial<BookletPDFOptions>),
        };

        // Validate single file
        if (files.length !== 1) {
            return this.createErrorOutput(
                PDFErrorCode.INVALID_OPTIONS,
                'Please provide exactly one PDF file.',
                `Received ${files.length} file(s).`
            );
        }

        if (!['1x2', '2x2', '2x4', '4x4'].includes(bookletOptions.gridMode)
            || !Object.prototype.hasOwnProperty.call(PAPER_SIZES, bookletOptions.paperSize)
            || !['auto', 'portrait', 'landscape'].includes(bookletOptions.orientation)
            || !['none', '90cw', '90ccw', 'alternate'].includes(bookletOptions.rotation)) {
            return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Please choose a supported booklet layout.');
        }
        const { rows, cols, width: sheetWidth, height: sheetHeight } = getBookletSheetLayout(bookletOptions);
        const cellWidth = sheetWidth / cols;
        const cellHeight = sheetHeight / rows;
        const padding = bookletOptions.padding;
        if (!Number.isFinite(padding) || padding < 0 || padding * 2 >= Math.min(cellWidth, cellHeight)) {
            return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Padding must leave space for a page in each grid cell.');
        }

        const file = files[0];

        try {
            this.updateProgress(5, 'Loading PDF file...');

            // Read file
            const arrayBuffer = await file.arrayBuffer();
            const pdfBytes = new Uint8Array(arrayBuffer);

            // Load source document
            const sourceDoc = await PDFDocument.load(pdfBytes, {
                ignoreEncryption: true,
            });

            if (this.checkCancelled()) {
                return this.createErrorOutput(
                    PDFErrorCode.PROCESSING_CANCELLED,
                    'Processing was cancelled.'
                );
            }

            this.updateProgress(15, 'Analyzing pages...');

            const totalPages = sourceDoc.getPageCount();
            const pagesPerSheet = rows * cols;
            const isBookletMode = rows === 1 && cols === 2;

            // Calculate number of output sheets
            let numSheets: number;
            let totalRounded: number;
            if (isBookletMode) {
                // For booklet mode, round up to multiple of 4
                totalRounded = Math.ceil(totalPages / 4) * 4;
                numSheets = Math.ceil(totalPages / 4) * 2; // Front and back
            } else {
                totalRounded = totalPages;
                numSheets = Math.ceil(totalPages / pagesPerSheet);
            }

            // Create output document
            const outputDoc = await PDFDocument.create();

            this.updateProgress(25, 'Creating booklet layout...');

            // Create each output sheet
            for (let sheetIndex = 0; sheetIndex < numSheets; sheetIndex++) {
                if (this.checkCancelled()) {
                    return this.createErrorOutput(
                        PDFErrorCode.PROCESSING_CANCELLED,
                        'Processing was cancelled.'
                    );
                }

                const progress = 25 + ((sheetIndex / numSheets) * 65);
                this.updateProgress(progress, `Creating sheet ${sheetIndex + 1} of ${numSheets}...`);

                const outputPage = outputDoc.addPage([sheetWidth, sheetHeight]);

                // Place pages on this sheet
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        const slotIndex = r * cols + c;
                        let pageNumber: number;

                        if (isBookletMode) {
                            // Booklet page ordering for saddle-stitch binding
                            const physicalSheet = Math.floor(sheetIndex / 2);
                            const isFrontSide = sheetIndex % 2 === 0;
                            if (isFrontSide) {
                                pageNumber = c === 0 ? totalRounded - 2 * physicalSheet : 2 * physicalSheet + 1;
                            } else {
                                pageNumber = c === 0 ? 2 * physicalSheet + 2 : totalRounded - 2 * physicalSheet - 1;
                            }
                        } else {
                            // Simple n-up ordering
                            pageNumber = sheetIndex * pagesPerSheet + slotIndex + 1;
                        }

                        // Only embed if page exists
                        if (pageNumber >= 1 && pageNumber <= totalPages) {
                            const sourcePage = sourceDoc.getPage(pageNumber - 1);
                            const contents = sourcePage.node.Contents();
                            // Valid blank pages keep their assigned slot without an empty-page embedder.
                            if (!contents || contents instanceof PDFArray && contents.size() === 0) continue;
                            const box = visiblePageBox(sourcePage);
                            const angle = displayedRotation(sourcePage, bookletOptions.rotation, pageNumber - 1);
                            const embeddedPage = await outputDoc.embedPage(sourcePage, box);
                            const srcW = angle % 180 === 0 ? embeddedPage.width : embeddedPage.height;
                            const srcH = angle % 180 === 0 ? embeddedPage.height : embeddedPage.width;
                            const scale = Math.min((cellWidth - padding * 2) / srcW, (cellHeight - padding * 2) / srcH);
                            const scaledWidth = srcW * scale;
                            const scaledHeight = srcH * scale;
                            const left = c * cellWidth + (cellWidth - scaledWidth) / 2;
                            const bottom = sheetHeight - (r + 1) * cellHeight + (cellHeight - scaledHeight) / 2;
                            outputPage.drawPage(embeddedPage, {
                                x: left + (angle === 180 || angle === 270 ? scaledWidth : 0),
                                y: bottom + (angle === 90 || angle === 180 ? scaledHeight : 0),
                                xScale: scale,
                                yScale: scale,
                                rotate: degrees(-angle),
                            });
                        }
                    }
                }
            }

            this.updateProgress(92, 'Saving booklet PDF...');

            // Save output document
            const outputBytes = await outputDoc.save();
            const blob = new Blob([new Uint8Array(outputBytes)], { type: 'application/pdf' });

            this.updateProgress(100, 'Complete!');

            // Generate output filename
            const outputFilename = generateBookletFilename(file.name);

            return this.createSuccessOutput(blob, outputFilename, {
                totalPages,
                outputSheets: numSheets,
                gridMode: bookletOptions.gridMode,
                paperSize: bookletOptions.paperSize,
            });

        } catch (error) {
            if (error instanceof Error && error.message.includes('encrypt')) {
                return this.createErrorOutput(
                    PDFErrorCode.PDF_ENCRYPTED,
                    'The PDF file is encrypted.',
                    'Please decrypt the file before creating a booklet.'
                );
            }

            return this.createErrorOutput(
                PDFErrorCode.PROCESSING_FAILED,
                'Failed to create booklet.',
                error instanceof Error ? error.message : 'Unknown error'
            );
        }
    }

    /**
     * Get accepted file types
     */
    protected getAcceptedTypes(): string[] {
        return ['application/pdf'];
    }
}

/**
 * Generate a filename for the booklet PDF
 */
function generateBookletFilename(originalName: string): string {
    const lastDot = originalName.lastIndexOf('.');
    const baseName = lastDot === -1 ? originalName : originalName.slice(0, lastDot);
    return `${baseName}_booklet.pdf`;
}

/**
 * Create a new instance of the booklet processor
 */
export function createBookletProcessor(): BookletPDFProcessor {
    return new BookletPDFProcessor();
}

/**
 * Create a booklet from a PDF file (convenience function)
 */
export async function createBooklet(
    file: File,
    options?: Partial<BookletPDFOptions>,
    onProgress?: ProgressCallback
): Promise<ProcessOutput> {
    const processor = createBookletProcessor();
    return processor.process(
        {
            files: [file],
            options: options || {},
        },
        onProgress
    );
}
