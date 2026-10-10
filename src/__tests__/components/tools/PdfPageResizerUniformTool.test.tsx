import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument, PDFArray, PDFDict, PDFName, PDFRawStream, decodePDFRawStream } from 'pdf-lib';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PdfPageResizerUniformTool } from '@/components/tools/pdf-page-resizer-uniform/PdfPageResizerUniformTool';
import { resizePDFPagesUniform } from '@/lib/pdf/processors/pdf-page-resizer-uniform';
import type { ProcessOutput } from '@/types/pdf';

let sources: File[];
const download = vi.fn();
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
vi.mock('@/lib/pdf/processors/pdf-page-resizer-uniform', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/pdf-page-resizer-uniform')>();
  return { ...actual, resizePDFPagesUniform: vi.fn(actual.resizePDFPagesUniform) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => props.onFilesSelected(sources)}>{props.label}</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download resized PDF</button>; } }));
async function source(name: string, sizes: [number, number][], prefix: string) {
  const pdf = await PDFDocument.create();
  for (const [index, size] of sizes.entries()) pdf.addPage(size).drawText(`${prefix}_${index + 1}`, { x: 10, y: 10, size: 10 });
  const bytes = await pdf.save(); const file = new File([new Uint8Array(bytes)], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer }); return file;
}
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
async function outputLabels(blob: Blob) {
  const pdf = await PDFDocument.load(await readBlob(blob));
  const labels = pdf.getPages().map(page => {
    const contents = page.node.Contents() as PDFArray;
    const commands = contents.asArray().map(ref => new TextDecoder().decode(decodePDFRawStream(pdf.context.lookup(ref) as PDFRawStream).decode())).join('\n');
    const name = commands.match(/\/([^\s]+) Do\b/)![1];
    const objects = page.node.Resources()!.lookup(PDFName.of('XObject'), PDFDict);
    const embedded = objects.lookup(PDFName.of(name)) as PDFRawStream;
    const text = new TextDecoder().decode(decodePDFRawStream(embedded).decode());
    return ['FIRST_1', 'FIRST_2', 'SECOND_1'].find(label => text.includes(Array.from(label, c => c.charCodeAt(0).toString(16)).join('').toUpperCase()));
  });
  return { pdf, labels };
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><PdfPageResizerUniformTool /></NextIntlClientProvider>); return intlError;
}
beforeEach(async () => {
  vi.clearAllMocks();
  const actual = await vi.importActual<typeof import('@/lib/pdf/processors/pdf-page-resizer-uniform')>('@/lib/pdf/processors/pdf-page-resizer-uniform');
  vi.mocked(resizePDFPagesUniform).mockReset().mockImplementation(actual.resizePDFPagesUniform);
  sources = [await source('first.PDF', [[200, 400], [300, 200]], 'FIRST'), await source('second.pdf', [[600, 300]], 'SECOND')];
});
afterEach(() => vi.restoreAllMocks());

describe('Uniform resize workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('keeps ordered documents, keyboard focus, settings and actual merged output (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.pdfPageResizerUniform, buttons = messages.common.buttons, intlError = wrap(locale, messages);
    await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const files = screen.getByRole('region', { name: t.magnifierTitle });
    expect(within(files).getAllByRole('listitem').map(item => item.textContent)).toEqual(['first.PDF', 'second.pdf']);
    const down = screen.getByRole('button', { name: `${buttons.moveDown}: first.PDF` }); act(() => down.focus()); await user.keyboard('{Enter}');
    expect(within(files).getAllByRole('listitem').map(item => item.textContent)).toEqual(['second.pdf', 'first.PDF']);
    expect(screen.getByRole('button', { name: `${buttons.moveUp}: first.PDF` })).toHaveFocus();
    await user.selectOptions(screen.getByRole('combobox', { name: t.targetSpecLabel }), 'A3');
    await user.selectOptions(screen.getByRole('combobox', { name: t.scaleModeLabel }), 'fill');
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download resized PDF' });
    expect(resizePDFPagesUniform).toHaveBeenCalledWith([sources[1], sources[0]], { targetSize: 'A3', scaleMode: 'fill' }, expect.any(Function));
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'second_resized_uniform.pdf' }));
    const { pdf, labels } = await outputLabels(download.mock.lastCall![0].file);
    expect(pdf.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual([[841.89, 1190.55], [841.89, 1190.55], [841.89, 1190.55]]);
    expect(labels).toEqual(['SECOND_1', 'FIRST_1', 'FIRST_2']); expect(screen.getByRole('status')).toHaveTextContent(t.successMessage);
    expect(intlError).not.toHaveBeenCalled();
    const remove = screen.getByRole('button', { name: `${buttons.remove}: second.pdf` }); act(() => remove.focus()); await user.keyboard('{Enter}');
    expect(screen.queryByRole('button', { name: 'Download resized PDF' })).toBeNull(); expect(screen.getByRole('button', { name: `${buttons.remove}: first.PDF` })).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: t.uploadLabel })).toBeInTheDocument(); expect(screen.getByRole('button', { name: t.uploadLabel }).parentElement).toHaveFocus();
  });

  it('disables source management and options while processing, then permits retry', async () => {
    let fail!: (error: Error) => void;
    vi.mocked(resizePDFPagesUniform).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), t = en.common.pdfPageResizerUniform; wrap();
    await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton }); await user.click(process);
    expect(process).toBeDisabled(); for (const select of screen.getAllByRole('combobox')) expect(select).toBeDisabled();
    for (const button of within(screen.getByRole('region', { name: t.magnifierTitle })).getAllByRole('button')) expect(button).toBeDisabled();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    act(() => vi.mocked(resizePDFPagesUniform).mock.calls[0][2]?.(55, 'Resizing fixture')); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '55');
    await act(async () => fail(new Error('Resize failed'))); expect(screen.getByRole('alert')).toHaveTextContent('Resize failed'); expect(process).toBeEnabled();
    await user.click(process); await screen.findByRole('button', { name: 'Download resized PDF' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s and its progress while a newer run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(resizePDFPagesUniform).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), t = en.common.pdfPageResizerUniform; wrap();
    await user.click(screen.getByRole('button', { name: t.uploadLabel })); const process = screen.getByRole('button', { name: t.processButton });
    await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(resizePDFPagesUniform).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']), metadata: { totalResizedPages: 99 } }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled();
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.pdf', metadata: { totalResizedPages: 3 } }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pdf' })));
  });

  it('clears previous output when settings change and uses the default fit mode without reordering sources', async () => {
    const user = userEvent.setup(), t = en.common.pdfPageResizerUniform; wrap();
    await user.click(screen.getByRole('button', { name: t.uploadLabel })); await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download resized PDF' });
    expect(vi.mocked(resizePDFPagesUniform).mock.calls[0].slice(0, 2)).toEqual([sources, { targetSize: 'A4', scaleMode: 'fit' }]);
    expect((await outputLabels(download.mock.lastCall![0].file)).labels).toEqual(['FIRST_1', 'FIRST_2', 'SECOND_1']);
    await user.selectOptions(screen.getByRole('combobox', { name: t.targetSpecLabel }), 'Letter');
    expect(screen.queryByRole('button', { name: 'Download resized PDF' })).toBeNull();
    await user.click(screen.getByRole('button', { name: en.common.buttons.clearAll }));
    expect(screen.getByRole('button', { name: t.uploadLabel }).parentElement).toHaveFocus();
  });
});
