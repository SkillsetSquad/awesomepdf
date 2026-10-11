import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PdfDeskewAlignerTool } from '@/components/tools/pdf-deskew-aligner/PdfDeskewAlignerTool';
import { deskewPDFAligner } from '@/lib/pdf/processors/pdf-deskew-aligner';
import type { PDFPagePreviewProps } from '@/components/tools/PDFPagePreview';
import type { ProcessOutput } from '@/types/pdf';

const file = new File(['source'], 'scan.PDF', { type: 'application/pdf' });
const result = new Blob(['aligned'], { type: 'application/pdf' });
const download = vi.fn(), preview = vi.fn();
vi.mock('@/lib/pdf/processors/pdf-deskew-aligner', () => ({ deskewPDFAligner: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => props.onFilesSelected([file])}>{props.label}</button> }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (props: PDFPagePreviewProps) => { preview(props); return <div aria-label={props.label} />; } }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download aligned PDF</button>; } }));
function view(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><PdfDeskewAlignerTool /></NextIntlClientProvider>); return intlError;
}
beforeEach(() => { vi.clearAllMocks(); vi.mocked(deskewPDFAligner).mockReset().mockResolvedValue({ success: true, result, filename: 'actual_aligned.pdf', metadata: { pagesProcessed: 3, correctedPages: 0, annotationPages: 1 } }); });

describe('Scan alignment workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('supports keyboard analysis settings and previews source/result blobs with accurate counts (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.pdfDeskewAligner, intlError = view(locale, messages);
    await user.click(screen.getByRole('button', { name: t.uploadLabel })); expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file, label: t.compassTitle }));
    await user.selectOptions(screen.getByRole('combobox', { name: t.dpiLabel }), '300');
    const angle = screen.getByRole('slider', { name: t.thresholdLabel }); act(() => angle.focus()); await user.keyboard('{ArrowUp}'); expect(angle).toHaveAttribute('aria-valuenow', '11');
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download aligned PDF' });
    expect(deskewPDFAligner).toHaveBeenCalledWith([file], { threshold: 11, dpi: 300 }, expect.any(Function)); expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'actual_aligned.pdf' })); expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: result, label: t.resultTitle }));
    expect(screen.getByRole('status')).toHaveTextContent(t.successMessage); expect(screen.getByText(t.correctedPages.replace('{count}', '0'))).toBeInTheDocument(); expect(screen.getByText(t.annotationPages.replace('{count}', '1'))).toBeInTheDocument(); expect(intlError).not.toHaveBeenCalled();
    await user.selectOptions(screen.getByRole('combobox', { name: t.dpiLabel }), '72'); expect(screen.queryByRole('button', { name: 'Download aligned PDF' })).toBeNull();
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download aligned PDF' }); act(() => angle.focus()); await user.keyboard('{ArrowUp}'); expect(screen.queryByRole('button', { name: 'Download aligned PDF' })).toBeNull();
    await user.click(screen.getByRole('button', { name: t.clearButton })); expect(screen.getByRole('button', { name: t.uploadLabel }).parentElement).toHaveFocus();
  });

  it('preserves default settings, uses the processor filename fallback and hides unknown statistics', async () => {
    vi.mocked(deskewPDFAligner).mockResolvedValueOnce({ success: true, result, metadata: { pagesProcessed: 'unknown', correctedPages: NaN } });
    const user = userEvent.setup(), t = en.common.pdfDeskewAligner; view(); await user.click(screen.getByRole('button', { name: t.uploadLabel })); await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download aligned PDF' });
    expect(deskewPDFAligner).toHaveBeenCalledWith([file], { threshold: 10, dpi: 150 }, expect.any(Function)); expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'scan_deskewed_aligned.pdf' })); expect(screen.queryByText(/Corrected:/)).toBeNull(); expect(screen.queryByText(/Pages:/)).toBeNull();
  });

  it('disables settings during processing, exposes progress and permits retry after failure', async () => {
    let fail!: (error: Error) => void;
    vi.mocked(deskewPDFAligner).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), t = en.common.pdfDeskewAligner; view(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton }); await user.click(process); expect(process).toBeDisabled(); expect(screen.getByRole('combobox')).toBeDisabled(); expect(screen.getByRole('button', { name: t.clearButton })).toBeDisabled();
    expect(screen.getByRole('slider').closest('[data-slot="slider"]')).toHaveAttribute('data-disabled');
    act(() => vi.mocked(deskewPDFAligner).mock.calls[0][2]?.(60)); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '60');
    await act(async () => fail(new Error('Analysis failed'))); expect(screen.getByRole('alert')).toHaveTextContent('Analysis failed'); expect(process).toBeEnabled();
    await user.click(process); await screen.findByRole('button', { name: 'Download aligned PDF' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s and late progress while a newer run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(deskewPDFAligner).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), t = en.common.pdfDeskewAligner; view(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton }); await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(deskewPDFAligner).mock.calls[0][2]?.(99));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']) }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled(); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    await act(async () => finishNew({ success: true, result, filename: 'current.pdf' })); await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pdf' })));
  });
});
