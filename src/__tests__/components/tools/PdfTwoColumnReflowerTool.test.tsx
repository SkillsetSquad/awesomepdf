import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument, PDFName, degrees } from 'pdf-lib';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PdfTwoColumnReflowerTool } from '@/components/tools/pdf-two-column-reflower/PdfTwoColumnReflowerTool';
import { reflowTwoColumnPDF } from '@/lib/pdf/processors/pdf-two-column-reflower';
import type { PDFPagePreviewProps } from '@/components/tools/PDFPagePreview';
import type { ProcessOutput } from '@/types/pdf';

let file: File;
const download = vi.fn(), preview = vi.fn();
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
vi.mock('@/lib/pdf/processors/pdf-two-column-reflower', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/pdf-two-column-reflower')>();
  return { ...actual, reflowTwoColumnPDF: vi.fn(actual.reflowTwoColumnPDF) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => props.onFilesSelected([file])}>{props.label}</button> }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (props: PDFPagePreviewProps) => { preview(props); return <div aria-label={props.label}>{props.overlay}</div>; } }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download split PDF</button>; } }));
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><PdfTwoColumnReflowerTool /></NextIntlClientProvider>); return intlError;
}
beforeEach(async () => {
  vi.clearAllMocks();
  const actual = await vi.importActual<typeof import('@/lib/pdf/processors/pdf-two-column-reflower')>('@/lib/pdf/processors/pdf-two-column-reflower');
  vi.mocked(reflowTwoColumnPDF).mockReset().mockImplementation(actual.reflowTwoColumnPDF);
  const pdf = await PDFDocument.create(), page = pdf.addPage([600, 800]);
  page.setMediaBox(100, 50, 600, 800); page.setCropBox(130, 90, 500, 700); page.setRotation(degrees(90)); page.drawText('SOURCE');
  pdf.addPage([200, 400]);
  const bytes = await pdf.save(); file = new File([new Uint8Array(bytes)], 'paper.PDF', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
});

describe('Two-column PDF workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('supports keyboard split/layout settings and previews the actual cropped output (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.pdfTwoColumnReflower, intlError = wrap(locale, messages);
    await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    expect(screen.getByText('paper.PDF')).toBeInTheDocument();
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file, label: t.previewTitle }));
    const split = screen.getByRole('slider', { name: t.splitRatio }); act(() => split.focus()); await user.keyboard('{ArrowUp}');
    expect(split).toHaveAttribute('aria-valuenow', '0.51');
    const source = screen.getByRole('region', { name: t.previewTitle }); expect(source.querySelector('[aria-hidden="true"][style]')).toHaveStyle({ left: '51%' });
    await user.selectOptions(screen.getByRole('combobox', { name: t.readingFlowLabel }), 'horizontal');
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download split PDF' });
    expect(reflowTwoColumnPDF).toHaveBeenCalledWith([file], { middleGapRatio: 0.51, horizontalReading: true }, expect.any(Function));
    const output = download.mock.lastCall![0] as { file: Blob; filename: string }; expect(output.filename).toBe('paper_single_column.pdf');
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: output.file, label: t.resultPreviewTitle }));
    const pdf = await PDFDocument.load(await readBlob(output.file)); expect(pdf.getPageCount()).toBe(4); expect(pdf.catalog.get(PDFName.of('PageLayout'))?.toString()).toBe('/TwoColumnLeft');
    expect(pdf.getPages().map(page => page.getCropBox())).toEqual([
      { x: 130, y: 90, width: 500, height: 357 }, { x: 130, y: 447, width: 500, height: 343 },
      { x: 0, y: 0, width: 102, height: 400 }, { x: 102, y: 0, width: 98, height: 400 },
    ]);
    expect(pdf.getPages().map(page => page.getRotation().angle)).toEqual([90, 90, 0, 0]);
    expect(screen.getByText(t.outputPages.replace('{count}', '4'))).toBeInTheDocument(); expect(screen.getByRole('status')).toHaveTextContent(t.successMessage); expect(intlError).not.toHaveBeenCalled();
    await user.selectOptions(screen.getByRole('combobox', { name: t.readingFlowLabel }), 'vertical'); expect(screen.queryByRole('button', { name: 'Download split PDF' })).toBeNull();
    await user.click(screen.getByRole('button', { name: t.clearButton })); expect(screen.getByRole('button', { name: t.uploadLabel }).parentElement).toHaveFocus();
  });

  it('disables file/settings changes during processing and allows retry after failure', async () => {
    let fail!: (error: Error) => void;
    vi.mocked(reflowTwoColumnPDF).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), t = en.common.pdfTwoColumnReflower; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton }); await user.click(process); expect(process).toBeDisabled();
    expect(screen.getByRole('combobox')).toBeDisabled(); expect(within(screen.getByRole('region', { name: t.previewTitle })).getByRole('button')).toBeDisabled();
    const split = screen.getByRole('slider'); expect(split.closest('[data-slot="slider"]')).toHaveAttribute('data-disabled'); act(() => split.focus()); await user.keyboard('{ArrowUp}'); expect(split).toHaveAttribute('aria-valuenow', '0.5');
    act(() => vi.mocked(reflowTwoColumnPDF).mock.calls[0][2]?.(55, 'Cropping fixture')); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '55');
    await act(async () => fail(new Error('Cropping failed'))); expect(screen.getByRole('alert')).toHaveTextContent('Cropping failed'); expect(process).toBeEnabled();
    await user.click(process); await screen.findByRole('button', { name: 'Download split PDF' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s and progress while a newer run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(reflowTwoColumnPDF).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), t = en.common.pdfTwoColumnReflower; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton }); await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(reflowTwoColumnPDF).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']) }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled();
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.pdf', metadata: { reflowedPagesCount: 0 } }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pdf' })));
    expect(screen.getByText(t.outputPages.replace('{count}', '0'))).toBeInTheDocument();
  });

  it('uses default options and a filename fallback, hides unknown counts and invalidates output when the split changes', async () => {
    vi.mocked(reflowTwoColumnPDF).mockResolvedValueOnce({ success: true, result: new Blob(['fixture']), metadata: { reflowedPagesCount: 'unknown' } });
    const user = userEvent.setup(), t = en.common.pdfTwoColumnReflower; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download split PDF' });
    expect(reflowTwoColumnPDF).toHaveBeenCalledWith([file], { middleGapRatio: 0.5, horizontalReading: false }, expect.any(Function)); expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'paper_single_column.pdf' }));
    expect(screen.queryByText(/Output pages/)).toBeNull();
    const split = screen.getByRole('slider'); act(() => split.focus()); await user.keyboard('{ArrowUp}'); expect(screen.queryByRole('button', { name: 'Download split PDF' })).toBeNull();
  });
});
