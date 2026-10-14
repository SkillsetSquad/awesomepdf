/**
 * Wax Seal & Certificate Cryptor Processor
 * Draws the document seal, signs with PKCS#7 and optionally encrypts for its certificate.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfLib } from '../loader';
import { withLocalCertificateSigner, createLocalSigningCertificate } from '../local-certificate-signer';

export interface CertCryptorOptions {
  waxColor: 'gold' | 'red' | 'bronze';
  sealPage?: number; // 0-indexed page number
  sealX?: number;
  sealY?: number;
  pfxPassword?: string;
  encryptWithCert?: boolean;
  certificateFile?: File;
}

export class CertCryptorProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const cryptorOptions: CertCryptorOptions = {
      waxColor: 'gold',
      sealPage: 0,
      sealX: 100,
      sealY: 100,
      encryptWithCert: false,
      ...(options as Partial<CertCryptorOptions>),
    };

    // We can have 1 PDF file, and optionally 1 PFX cert file (as files[1])
    if (files.length < 1 || files.length > 2) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Provide one PDF and optionally one PFX/P12 certificate.'
      );
    }

    const pdfFile = files[0];
    const certFile = files.length > 1 ? files[1] : null;

    try {
      return await withLocalCertificateSigner(async ({ PdfSigner, Crypto }) => {
        this.updateProgress(10, 'Loading cryptographic & PDF engines...');
        const pdfLib = await loadPdfLib();

        this.updateProgress(25, 'Loading target PDF bytes...');
        const arrayBuffer = await pdfFile.arrayBuffer();
        const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer);
        const totalPages = pdfDoc.getPageCount();

        const pageIdx = Math.min(totalPages - 1, Math.max(0, cryptorOptions.sealPage || 0));
        const page = pdfDoc.getPage(pageIdx);

        this.updateProgress(45, 'Creating 3D wax seal graphic elements...');

        // Let's draw a beautiful 3D physical wax seal.
        // Since embedding a raw external image requires network/paths, we will draw a gorgeous
        // vector wax seal stamp with overlapping circles, a central logo, and shading lines
        // to mimic 3D normal-mapped emboss/height variations.
        const sealX = cryptorOptions.sealX ?? 100;
        const sealY = cryptorOptions.sealY ?? 100;
        const radius = 35;

        // Color scheme based on selection
        let baseColor = pdfLib.rgb(0.85, 0.65, 0.15); // Gold
        let shadowColor = pdfLib.rgb(0.55, 0.4, 0.05);
        let highlightColor = pdfLib.rgb(1.0, 0.85, 0.4);

        if (cryptorOptions.waxColor === 'red') {
          baseColor = pdfLib.rgb(0.7, 0.1, 0.1); // Crimson
          shadowColor = pdfLib.rgb(0.4, 0.02, 0.02);
          highlightColor = pdfLib.rgb(0.9, 0.3, 0.3);
        } else if (cryptorOptions.waxColor === 'bronze') {
          baseColor = pdfLib.rgb(0.6, 0.4, 0.2); // Bronze
          shadowColor = pdfLib.rgb(0.35, 0.2, 0.08);
          highlightColor = pdfLib.rgb(0.8, 0.6, 0.4);
        }

        // Draw irregular overlapping outer wax blobs (simulating organic molten wax)
        const blobCount = 8;
        for (let i = 0; i < blobCount; i++) {
          const angle = (i * 2 * Math.PI) / blobCount;
          // Add random size variation
          const offsetR = radius * (1.0 + Math.sin(i * 3.5) * 0.08);
          const bx = sealX + Math.cos(angle) * (radius * 0.15);
          const by = sealY + Math.sin(angle) * (radius * 0.15);

          // Blob base
          page.drawCircle({
            x: bx,
            y: by,
            size: offsetR,
            color: baseColor,
          });

          // 3D edge highlight (crescent)
          page.drawCircle({
            x: bx - 1.5,
            y: by + 1.5,
            size: offsetR - 1.5,
            color: highlightColor,
          });

          // Inside shading
          page.drawCircle({
            x: bx + 1.0,
            y: by - 1.0,
            size: offsetR - 2.5,
            color: shadowColor,
          });
        }

        // Draw the flat inner stamp plate
        page.drawCircle({
          x: sealX,
          y: sealY,
          size: radius * 0.75,
          color: baseColor,
        });

        // Shaded ring
        page.drawCircle({
          x: sealX + 1.5,
          y: sealY - 1.5,
          size: radius * 0.73,
          color: shadowColor,
        });
        page.drawCircle({
          x: sealX - 1.0,
          y: sealY + 1.0,
          size: radius * 0.71,
          color: highlightColor,
        });
        page.drawCircle({
          x: sealX,
          y: sealY,
          size: radius * 0.68,
          color: baseColor,
        });

        // Draw Central Stamp Symbol (e.g. Shield + Key / AwsomePDF Logo)
        // We will draw a crest with lines
        // Draw a crown/crest in the center
        const iconSize = radius * 0.35;

        // Shield outlines
        page.drawRectangle({
          x: sealX - iconSize/2,
          y: sealY - iconSize/2,
          width: iconSize,
          height: iconSize * 0.9,
          borderColor: highlightColor,
          borderWidth: 1.5,
        });

        // Shield cross
        page.drawLine({
          start: { x: sealX, y: sealY - iconSize/2 },
          end: { x: sealX, y: sealY + iconSize/2 },
          color: highlightColor,
          thickness: 1.0,
        });
        page.drawLine({
          start: { x: sealX - iconSize/2, y: sealY },
          end: { x: sealX + iconSize/2, y: sealY },
          color: highlightColor,
          thickness: 1.0,
        });

        // Shield shadow line
        page.drawRectangle({
          x: sealX - iconSize/2 + 1,
          y: sealY - iconSize/2 - 1,
          width: iconSize,
          height: iconSize * 0.9,
          borderColor: shadowColor,
          borderWidth: 1.0,
        });

        if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        this.updateProgress(65, 'Preparing the signing certificate...');
        const password = certFile ? cryptorOptions.pfxPassword ?? '' : cryptorOptions.pfxPassword || 'awsomepdf';
        const certificateBytes = certFile ? new Uint8Array(await certFile.arrayBuffer()) : await createLocalSigningCertificate(password);
        if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        const signer = new PdfSigner({ p12cert: certificateBytes, pwd: password, reason: 'Wax seal applied with AwsomePDF.' });
        this.updateProgress(80, cryptorOptions.encryptWithCert ? 'Signing and encrypting for the certificate...' : 'Signing the PDF...');
        const pdfBytes = await signer.sign(pdfDoc, cryptorOptions.encryptWithCert ? {
          mode: Crypto.Mode.AES_256, pubkeys: [],
          permissions: ['modify', 'copy-extract', 'annot-forms', 'fill-forms'],
        } : undefined);
        if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing was cancelled.');
        const outputBlob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
        const outputFilename = pdfFile.name.replace(/\.pdf$/i, '_signed.pdf');

        this.updateProgress(100, 'Digital signature & wax seal applied!');
        return this.createSuccessOutput(outputBlob, outputFilename, {
          signedPage: pageIdx + 1,
          certified: true,
          encrypted: cryptorOptions.encryptWithCert,
          generatedCertificate: !certFile,
          certificate: !certFile ? new Blob([new Uint8Array(certificateBytes)], { type: 'application/x-pkcs12' }) : undefined,
          certificateFilename: pdfFile.name.replace(/\.pdf$/i, '_certificate.p12'),
        });
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to apply certificate cryptor and wax seal.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createCertCryptorProcessor(): CertCryptorProcessor {
  return new CertCryptorProcessor();
}

export async function encryptAndSignCert(
  file: File,
  options?: Partial<CertCryptorOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createCertCryptorProcessor();
  return processor.process(
    {
      files: options?.certificateFile ? [file, options.certificateFile] : [file],
      options: options || {},
    },
    onProgress
  );
}
