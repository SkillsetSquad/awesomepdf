import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import JSZip from 'jszip';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { CompressPDFTool } from '@/components/tools/compress/CompressPDFTool';
import { compressPDF } from '@/lib/pdf/processors/compress';
import { saveBlobFile } from '@/lib/tauri-bridge';
import type { PDFPagePreviewProps } from '@/components/tools/PDFPagePreview';
import type { ProcessOutput } from '@/types/pdf';

let sources: File[];
const outputBlobs = [new Blob(['first output fixture'], { type: 'application/pdf' }), new Blob(['second output fixture'], { type: 'application/pdf' })];
const download = vi.fn(), preview = vi.fn();
vi.mock('@/lib/pdf/processors/compress', () => ({ compressPDF: vi.fn() }));
vi.mock('@/lib/tauri-bridge', () => ({ saveBlobFile: vi.fn(async () => true) }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => props.onFilesSelected(sources)}>{props.label}</button> }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (props: PDFPagePreviewProps) => { preview(props); return <div>{props.label}</div>; } }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>{`Download: ${props.filename}`}</button>; } }));
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><CompressPDFTool /></NextIntlClientProvider>); return intlError;
}
beforeEach(() => {
  vi.clearAllMocks(); sources = [new File(['first source fixture'], 'first.PDF', { type: 'application/pdf' }), new File(['second source fixture'], 'second.pdf', { type: 'application/pdf' })];
  vi.mocked(compressPDF).mockReset().mockImplementation(async file => ({ success: true, result: outputBlobs[sources.indexOf(file)] }));
  vi.mocked(saveBlobFile).mockReset().mockResolvedValue(true);
});

describe('PDF compression workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('keeps every algorithm/quality option, actual result previews, file focus and ZIP bytes (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.compress, tools = messages.tools.compressPdf, intlError = wrap(locale, messages);
    await user.click(screen.getByRole('button', { name: tools.uploadLabel }));
    const quality = screen.getByRole('combobox', { name: tools.qualityLabel }), algorithm = screen.getByRole('combobox', { name: tools.algorithmLabel });
    expect(quality).toHaveValue('medium'); expect(algorithm).toHaveValue('condense');
    expect(within(quality).getAllByRole('option').map(option => (option as HTMLOptionElement).value)).toEqual(['low', 'medium', 'high', 'maximum']); expect(within(algorithm).getAllByRole('option').map(option => (option as HTMLOptionElement).value)).toEqual(['standard', 'condense', 'photon']);
    await user.selectOptions(quality, 'maximum'); await user.selectOptions(algorithm, 'photon'); await user.selectOptions(screen.getByRole('combobox', { name: tools.photonDpiLabel }), '300');
    const metadata = screen.getByRole('checkbox', { name: tools.removeMetadata }); act(() => metadata.focus()); await user.keyboard(' '); await user.click(screen.getByRole('checkbox', { name: tools.optimizeImages }));
    await user.click(screen.getByRole('button', { name: tools.compressButton })); await screen.findByRole('button', { name: 'Download: first_compressed.pdf' }); await screen.findByRole('button', { name: 'Download: second_compressed.pdf' });
    for (const file of sources) expect(compressPDF).toHaveBeenCalledWith(file, { algorithm: 'photon', quality: 'maximum', removeMetadata: true, optimizeImages: false, removeUnusedObjects: true, photonDpi: 300, photonFormat: 'jpeg', photonQuality: 85 }, expect.any(Function));
    expect(screen.getByRole('button', { name: tools.compressButton })).toBeDisabled();
    await user.click(screen.getByRole('tab', { name: t.resultPreview })); expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: outputBlobs[0], label: t.resultPreview }));
    await user.click(screen.getByRole('button', { name: 'second.pdf' })); expect(screen.getByRole('tab', { name: t.sourcePreview })).toHaveAttribute('aria-selected', 'true'); await user.click(screen.getByRole('tab', { name: t.resultPreview })); expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: outputBlobs[1], label: t.resultPreview }));
    await user.click(screen.getByRole('button', { name: t.zipDownload.replace('{count}', '2') })); await waitFor(() => expect(saveBlobFile).toHaveBeenCalledTimes(1));
    const [zipBlob, zipName] = vi.mocked(saveBlobFile).mock.calls[0]; expect(zipName).toBe('compressed-pdfs.zip'); if (!(zipBlob instanceof Blob)) throw new Error('Expected the generated ZIP Blob'); const zip = await JSZip.loadAsync(await readBlob(zipBlob));
    expect(await zip.file('first_processed_1.pdf')!.async('string')).toBe('first output fixture'); expect(await zip.file('second_processed_2.pdf')!.async('string')).toBe('second output fixture'); expect(intlError).not.toHaveBeenCalled();
    await user.selectOptions(quality, 'low'); expect(screen.queryByRole('button', { name: 'Download: first_compressed.pdf' })).toBeNull(); expect(screen.getByRole('tab', { name: t.resultPreview })).toBeDisabled(); expect(screen.getByRole('button', { name: tools.compressButton })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: `${messages.common.buttons.remove}: first.PDF` })); expect(screen.getByRole('button', { name: 'second.pdf' })).toHaveFocus();
    await user.click(screen.getByRole('button', { name: `${messages.common.buttons.remove}: second.pdf` })); expect(screen.getByRole('button', { name: tools.uploadLabel }).parentElement).toHaveFocus();
  });

  it('keeps single-file controls available without a rendered preview and retries only failed files in a mixed batch', async () => {
    const user = userEvent.setup(), tools = en.tools.compressPdf; sources = [sources[0]]; wrap(); await user.click(screen.getByRole('button', { name: tools.uploadLabel }));
    expect(screen.getByRole('button', { name: tools.compressButton })).toBeEnabled(); await user.click(screen.getByRole('button', { name: en.common.buttons.clearAll }));
    sources.push(new File(['second source'], 'second.pdf')); await user.click(screen.getByRole('button', { name: tools.uploadLabel }));
    let fail!: (error: Error) => void; vi.mocked(compressPDF).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; })).mockResolvedValueOnce({ success: true, result: outputBlobs[1] });
    await user.click(screen.getByRole('button', { name: tools.compressButton })); expect(screen.getByRole('button', { name: tools.compressButton })).toBeDisabled(); for (const select of screen.getAllByRole('combobox')) expect(select).toBeDisabled(); for (const checkbox of screen.getAllByRole('checkbox')) expect(checkbox).toBeDisabled(); expect(screen.getByRole('button', { name: en.common.buttons.clearAll })).toBeDisabled();
    act(() => vi.mocked(compressPDF).mock.calls[0][2]?.(60)); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '80');
    await act(async () => fail(new Error('First file failed'))); expect(screen.getByRole('alert')).toHaveTextContent('First file failed'); expect(screen.getByRole('button', { name: 'Download: second_compressed.pdf' })).toBeInTheDocument(); expect(screen.getByRole('button', { name: en.common.compress.zipDownload.replace('{count}', '1') })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: tools.compressButton })); await screen.findByRole('button', { name: 'Download: first_compressed.pdf' }); expect(compressPDF).toHaveBeenCalledTimes(3); expect(vi.mocked(compressPDF).mock.calls[2][0]).toBe(sources[0]); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('ignores a cancelled %s and progress while a new compression run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void; sources = [sources[0]];
    vi.mocked(compressPDF).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), tools = en.tools.compressPdf; wrap(); await user.click(screen.getByRole('button', { name: tools.uploadLabel })); const process = screen.getByRole('button', { name: tools.compressButton }); await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(compressPDF).mock.calls[0][2]?.(99)); await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']) }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled(); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    const blob = new Blob(['current']); await act(async () => finishNew({ success: true, result: blob })); await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: blob, filename: 'first_compressed.pdf' })));
  });

  it('reports ZIP save failures, retains downloads and allows ZIP retry', async () => {
    vi.mocked(saveBlobFile).mockRejectedValueOnce(new Error('ZIP save failed'));
    const user = userEvent.setup(), tools = en.tools.compressPdf; wrap(); await user.click(screen.getByRole('button', { name: tools.uploadLabel })); await user.click(screen.getByRole('button', { name: tools.compressButton })); await screen.findByRole('button', { name: 'Download: first_compressed.pdf' });
    const zip = screen.getByRole('button', { name: en.common.compress.zipDownload.replace('{count}', '2') }); await user.click(zip); expect(await screen.findByRole('alert')).toHaveTextContent('ZIP save failed'); expect(screen.getByRole('button', { name: 'Download: first_compressed.pdf' })).toBeInTheDocument();
    await user.click(zip); await waitFor(() => expect(saveBlobFile).toHaveBeenCalledTimes(2)); expect(screen.queryByRole('alert')).toBeNull();
  });
});
