import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument } from 'pdf-lib';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PDFBookletTool } from '@/components/tools/pdf-booklet/PDFBookletTool';
import { createBooklet } from '@/lib/pdf/processors/booklet';
import type { PDFPagePreviewProps } from '@/components/tools/PDFPagePreview';
import type { ProcessOutput } from '@/types/pdf';

let file: File;
const download = vi.fn(), preview = vi.fn();
vi.mock('@/lib/pdf/processors/booklet', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/booklet')>();
  return { ...actual, createBooklet: vi.fn(actual.createBooklet) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => props.onFilesSelected([file])}>{props.label}</button> }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (props: PDFPagePreviewProps) => { preview(props); return <div aria-label={props.label} />; } }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download booklet</button>; } }));
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><PDFBookletTool /></NextIntlClientProvider>); return intlError;
}
beforeEach(async () => {
  vi.clearAllMocks();
  const actual = await vi.importActual<typeof import('@/lib/pdf/processors/booklet')>('@/lib/pdf/processors/booklet');
  vi.mocked(createBooklet).mockReset().mockImplementation(actual.createBooklet);
  const pdf = await PDFDocument.create();
  for (let i = 0; i < 4; i++) pdf.addPage([200, 400]).drawText(`Source ${i + 1}`);
  pdf.addPage([200, 400]);
  const bytes = await pdf.save(); file = new File([new Uint8Array(bytes)], 'source.PDF', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
});

describe('Booklet workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('uses accessible controls, correct sheet geometry and the actual PDF result (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.tools.pdfBooklet, common = messages.common.pdfBooklet, intlError = wrap(locale, messages);
    await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file, label: common.sourceTitle }));
    await user.selectOptions(screen.getByRole('combobox', { name: t.gridModeLabel }), '2x4');
    await user.selectOptions(screen.getByRole('combobox', { name: t.paperSizeLabel }), 'letter');
    await user.selectOptions(screen.getByRole('combobox', { name: t.orientationLabel }), 'portrait');
    await user.selectOptions(screen.getByRole('combobox', { name: t.rotationLabel }), '90cw');
    const padding = screen.getByRole('slider', { name: t.paddingLabel }); act(() => padding.focus()); await user.keyboard('{ArrowUp}'); expect(padding).toHaveAttribute('aria-valuenow', '21');
    const illustration = screen.getByRole('img', { name: t.previewLabel }); expect(illustration).toHaveAttribute('viewBox', '0 0 612 792');
    const slots = illustration.querySelectorAll('g'); expect(slots).toHaveLength(8); expect(slots[0].querySelector('rect')).toHaveAttribute('width', '153'); expect(slots[4].querySelector('rect')).toHaveAttribute('y', '396');
    await user.click(screen.getByRole('button', { name: t.createButton })); await screen.findByRole('button', { name: 'Download booklet' });
    expect(createBooklet).toHaveBeenCalledWith(file, { gridMode: '2x4', paperSize: 'letter', orientation: 'portrait', rotation: '90cw', padding: 21 }, expect.any(Function));
    const result = download.mock.lastCall![0] as { file: Blob; filename: string }; expect(result.filename).toBe('source_booklet.pdf');
    const pdf = await PDFDocument.load(await readBlob(result.file)); expect(pdf.getPageCount()).toBe(1); expect(pdf.getPage(0).getSize()).toEqual({ width: 612, height: 792 });
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: result.file, label: common.resultTitle }));
    expect(screen.getByRole('status')).toHaveTextContent(t.successMessage); expect(screen.getByText(common.outputSheets.replace('{count}', '1'))).toBeInTheDocument(); expect(intlError).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: messages.common.buttons.clear })); expect(screen.getByRole('button', { name: t.uploadLabel }).parentElement).toHaveFocus();
  });

  it('keeps the existing default options and booklet order, and invalidates all setting changes', async () => {
    const user = userEvent.setup(), t = en.tools.pdfBooklet; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.createButton }); await user.click(process); await screen.findByRole('button', { name: 'Download booklet' });
    expect(createBooklet).toHaveBeenCalledWith(file, { gridMode: '1x2', paperSize: 'a4', orientation: 'landscape', rotation: 'none', padding: 20 }, expect.any(Function));
    const pdf = await PDFDocument.load(await readBlob(download.mock.lastCall![0].file)); expect(pdf.getPageCount()).toBe(4);
    for (const [label, value] of [[t.gridModeLabel, '2x2'], [t.paperSizeLabel, 'legal'], [t.orientationLabel, 'portrait'], [t.rotationLabel, 'alternate']]) {
      await user.selectOptions(screen.getByRole('combobox', { name: label }), value); expect(screen.queryByRole('button', { name: 'Download booklet' })).toBeNull();
      await user.click(process); await screen.findByRole('button', { name: 'Download booklet' });
    }
    const padding = screen.getByRole('slider'); act(() => padding.focus()); await user.keyboard('{ArrowUp}'); expect(screen.queryByRole('button', { name: 'Download booklet' })).toBeNull();
  });

  it('disables settings while busy, exposes progress and allows retry after failure', async () => {
    let fail!: (error: Error) => void;
    vi.mocked(createBooklet).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), t = en.tools.pdfBooklet; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.createButton }); await user.click(process); expect(process).toBeDisabled();
    for (const select of screen.getAllByRole('combobox')) expect(select).toBeDisabled();
    expect(within(screen.getByRole('region', { name: en.common.pdfBooklet.sourceTitle })).getByRole('button')).toBeDisabled();
    expect(screen.getByRole('slider').closest('[data-slot="slider"]')).toHaveAttribute('data-disabled');
    act(() => vi.mocked(createBooklet).mock.calls[0][2]?.(65)); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '65');
    await act(async () => fail(new Error('Booklet failed'))); expect(screen.getByRole('alert')).toHaveTextContent('Booklet failed'); expect(process).toBeEnabled();
    await user.click(process); await screen.findByRole('button', { name: 'Download booklet' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s and its late progress while a newer run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(createBooklet).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), t = en.tools.pdfBooklet; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.createButton }); await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(createBooklet).mock.calls[0][2]?.(99));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']) }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled(); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.pdf', metadata: { outputSheets: 0 } }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pdf' })));
  });
});
