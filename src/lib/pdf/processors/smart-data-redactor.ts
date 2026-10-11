/**
 * Smart Data Redactor Processor
 * 
 * Implements automatic scanning and physical redaction of sensitive patterns (e.g., Email, Phone, SSN/ID Card).
 * Uses glyph bounds and the shared local content-removal engine.
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { searchTextInPDF, applyFindAndRedact } from './find-and-redact';

export interface SmartRedactOptions {
  patterns: ('email' | 'phone' | 'idcard' | 'custom')[];
  customKeywords?: string[];
  redactColor?: { r: number; g: number; b: number };
}

const DEFAULT_OPTIONS: SmartRedactOptions = {
  patterns: ['email', 'phone'],
  customKeywords: [],
  redactColor: { r: 0, g: 0, b: 0 }, // Black
};

const REGEX_PATTERNS = {
  email: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
  phone: /(?:\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}/g,
  idcard: /\d{17}[\dXx]|\d{3}-\d{2}-\d{4}/g, // Generic 18-digit ID or SSN
};

export class SmartDataRedactorProcessor extends BasePDFProcessor {
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const redactOptions: SmartRedactOptions = {
      ...DEFAULT_OPTIONS,
      ...(options as Partial<SmartRedactOptions>),
    };

    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please upload exactly one PDF file.'
      );
    }

    const file = files[0];

    try {
      const terms: string[] = [];
      for (const pattern of redactOptions.patterns) {
        if (pattern === 'custom') {
          terms.push(...(redactOptions.customKeywords ?? []).filter(word => word.trim())
            .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
        } else if (pattern in REGEX_PATTERNS) {
          terms.push(REGEX_PATTERNS[pattern].source);
        } else {
          return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Invalid redaction pattern.');
        }
      }
      if (!terms.length) return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'Select a pattern or enter a custom keyword.');
      const search = await searchTextInPDF(file, {
        searchTerms: terms, caseSensitive: false, useRegex: true, wholeWord: false,
      }, (progress, message) => this.updateProgress(progress * .5, message));
      if (!search.success) throw new Error(search.error);
      if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled.');
      if (!search.matches.length) return this.createErrorOutput(PDFErrorCode.INVALID_OPTIONS, 'No matching sensitive data found. Review the document manually.');
      const result = await applyFindAndRedact(file, search.matches, {
        color: redactOptions.redactColor,
      }, (progress, message) => this.updateProgress(50 + progress * .5, message));
      if (!result.success || !result.result) throw new Error(result.error);
      if (this.checkCancelled()) return this.createErrorOutput(PDFErrorCode.PROCESSING_CANCELLED, 'Processing cancelled.');
      return this.createSuccessOutput(result.result, `${file.name.replace(/\.pdf$/i, '')}_redacted.pdf`, {
        redactionsApplied: result.redactedCount,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to redact PDF privacy data.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  protected getAcceptedTypes(): string[] {
    return ['application/pdf'];
  }
}

export function createSmartDataRedactorProcessor(): SmartDataRedactorProcessor {
  return new SmartDataRedactorProcessor();
}

export async function redactSmartData(
  files: File[],
  options?: Partial<SmartRedactOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createSmartDataRedactorProcessor();
  return processor.process({ files, options: options || {} }, onProgress);
}
