import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { HandwritingInkContrastBoosterTool } from '@/components/tools/handwriting-ink-contrast-booster/HandwritingInkContrastBoosterTool';
import { PdfDeskewAlignerTool } from '@/components/tools/pdf-deskew-aligner/PdfDeskewAlignerTool';
import { PdfPageResizerUniformTool } from '@/components/tools/pdf-page-resizer-uniform/PdfPageResizerUniformTool';
import { PdfSpineBookbinderTool } from '@/components/tools/pdf-spine-bookbinder/PdfSpineBookbinderTool';
import { PdfTwoColumnReflowerTool } from '@/components/tools/pdf-two-column-reflower/PdfTwoColumnReflowerTool';

const { ink, deskew, resize, spine, reflow } = vi.hoisted(() => ({ ink: vi.fn(), deskew: vi.fn(), resize: vi.fn(), spine: vi.fn(), reflow: vi.fn() }));
vi.mock('@/lib/pdf/processors/handwriting-ink-contrast-booster', () => ({ boostHandwritingInkContrast: ink }));
vi.mock('@/lib/pdf/processors/pdf-deskew-aligner', () => ({ deskewPDFAligner: deskew }));
vi.mock('@/lib/pdf/processors/pdf-page-resizer-uniform', () => ({ resizePDFPagesUniform: resize }));
vi.mock('@/lib/pdf/processors/pdf-spine-bookbinder', () => ({ designPDFSpine: spine }));
vi.mock('@/lib/pdf/processors/pdf-two-column-reflower', () => ({ reflowTwoColumnPDF: reflow }));
const file = new File(['processor contract fixture'], 'source.pdf');
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => props.onFilesSelected([file])}>Select contract fixture</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: () => <button>Download fixture</button> }));
beforeEach(() => { vi.clearAllMocks(); for (const processor of [ink, deskew, resize, spine, reflow]) processor.mockResolvedValue({ success: true, result: new Blob(['fixture']) }); });

const cases = [
  { tool: 'handwritingInkContrastBooster', Component: HandwritingInkContrastBoosterTool, processor: ink, selects: [{ label: 'targetTypeLabel', values: ['auto', 'dark-ink', 'red-stamp'], initial: 'auto' }], options: { inkType: 'red-stamp', threshold: 200, contrast: 1.5 } },
  { tool: 'pdfDeskewAligner', Component: PdfDeskewAlignerTool, processor: deskew, selects: [{ label: 'dpiLabel', values: ['72', '150', '300'], initial: '150' }], options: { dpi: 300, threshold: 10 } },
  { tool: 'pdfPageResizerUniform', Component: PdfPageResizerUniformTool, processor: resize, selects: [{ label: 'targetSpecLabel', values: ['A4', 'A3', 'Letter'], initial: 'A4' }, { label: 'scaleModeLabel', values: ['fit', 'fill'], initial: 'fit' }], options: { targetSize: 'Letter', scaleMode: 'fill' } },
  { tool: 'pdfSpineBookbinder', Component: PdfSpineBookbinderTool, processor: spine, selects: [{ label: 'gsmLabel', values: ['80', '100', '120', '150'], initial: '80' }], options: { paperGsm: 150, pageCount: 100 } },
  { tool: 'pdfTwoColumnReflower', Component: PdfTwoColumnReflowerTool, processor: reflow, selects: [{ label: 'readingFlowLabel', values: ['vertical', 'horizontal'], initial: 'vertical' }], options: { horizontalReading: true, middleGapRatio: 0.5 } },
] as const;

describe.each([['en', en], ['ar', ar]] as const)('specialized option controls (%s)', (locale, messages) => {
  it.each(cases)('offers every $tool choice with its original processor value', async ({ tool, Component, processor, selects, options }) => {
    const user = userEvent.setup(), intlError = vi.fn();
    const labels = messages.common[tool] as Record<string, string>;
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><Component /></NextIntlClientProvider>);
    if (tool !== 'pdfSpineBookbinder') await user.click(screen.getByRole('button', { name: 'Select contract fixture' }));
    for (const { label, values, initial } of selects) {
      const select = screen.getByRole('combobox', { name: labels[label] });
      expect(select).toHaveValue(initial);
      expect(within(select).getAllByRole('option').map(option => (option as HTMLOptionElement).value)).toEqual(values);
      for (const value of values) { await user.selectOptions(select, value); expect(select).toHaveValue(value); }
    }
    await user.click(screen.getByRole('button', { name: labels.processButton }));
    expect(processor).toHaveBeenCalledWith(tool === 'pdfSpineBookbinder' ? [] : [file], expect.objectContaining(options), expect.any(Function));
    expect(intlError).not.toHaveBeenCalled();
  });
});
