import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument, PDFArray, PDFDict, PDFName, PDFRawStream, decodePDFRawStream } from 'pdf-lib';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { BookletFoldingSimulatorTool } from '@/components/tools/booklet-folding-simulator/BookletFoldingSimulatorTool';
import { imposeBookletFolding } from '@/lib/pdf/processors/booklet-folding-simulator';
import type { PDFPagePreviewProps } from '@/components/tools/PDFPagePreview';
import type { ProcessOutput } from '@/types/pdf';

let file: File;
const download = vi.fn(), preview = vi.fn();
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
vi.mock('@/lib/pdf/processors/booklet-folding-simulator', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/booklet-folding-simulator')>();
  return { ...actual, imposeBookletFolding: vi.fn(actual.imposeBookletFolding) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => props.onFilesSelected([file])}>{props.label}</button> }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (props: PDFPagePreviewProps) => { preview(props); return <div>{props.label}</div>; } }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download imposed PDF</button>; } }));
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
async function outputOrder(blob: Blob) {
  const pdf = await PDFDocument.load(await readBlob(blob));
  const order = pdf.getPages().map(page => {
    const contents = page.node.Contents() as PDFArray | undefined;
    if (!contents) return [];
    const commands = contents.asArray().map(ref => new TextDecoder().decode(decodePDFRawStream(pdf.context.lookup(ref) as PDFRawStream).decode())).join('\n');
    const objects = page.node.Resources()!.lookup(PDFName.of('XObject'), PDFDict);
    return [...commands.matchAll(/\/([^\s]+) Do\b/g)].map(match => {
      const text = new TextDecoder().decode(decodePDFRawStream(objects.lookup(PDFName.of(match[1])) as PDFRawStream).decode());
      return [1, 2, 3, 4, 5].find(number => text.includes(Array.from(`SOURCE_${number}`, char => char.charCodeAt(0).toString(16)).join('').toUpperCase()));
    });
  });
  return { pdf, order };
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><BookletFoldingSimulatorTool /></NextIntlClientProvider>); return intlError;
}
beforeEach(async () => {
  vi.clearAllMocks(); const actual = await vi.importActual<typeof import('@/lib/pdf/processors/booklet-folding-simulator')>('@/lib/pdf/processors/booklet-folding-simulator');
  vi.mocked(imposeBookletFolding).mockReset().mockImplementation(actual.imposeBookletFolding);
  const pdf = await PDFDocument.create(); for (let page = 1; page <= 5; page++) pdf.addPage([300, 400]).drawText(`SOURCE_${page}`);
  const bytes = await pdf.save(); file = new File([new Uint8Array(bytes)], 'book.PDF', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
});

describe('Booklet folding workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('preserves the folding illustration, keyboard controls and actual imposed page orders (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.bookletFoldingSimulator, tools = messages.tools.bookletFoldingSimulator, intlError = wrap(locale, messages);
    await user.click(screen.getByRole('button', { name: tools.uploadLabel })); expect(screen.getByText('book.PDF')).toBeInTheDocument();
    const model = screen.getByRole('img', { name: t.view3D }), folded = model.querySelector('[style*="rotateY(0deg)"]'); expect(folded).toBeInTheDocument();
    const fold = screen.getByRole('slider', { name: t.foldingDamping }); act(() => fold.focus()); await user.keyboard('{End}'); expect(fold).toHaveAttribute('aria-valuenow', '100'); expect(folded).toHaveStyle({ transform: 'rotateY(-180deg)' });
    await user.click(screen.getByRole('tab', { name: t.view2D })); expect(screen.getByRole('img', { name: t.view2D })).toHaveTextContent(t.pageLabel.replace('{number}', '4'));
    await user.click(screen.getByRole('button', { name: tools.processButton })); await screen.findByRole('button', { name: 'Download imposed PDF' });
    const first = download.mock.lastCall![0] as { file: Blob; filename: string }; expect(first.filename).toBe('book_imposed.pdf');
    expect(imposeBookletFolding).toHaveBeenCalledWith(file, { foldingMode: '4-page-fold' }, expect.any(Function)); const output4 = await outputOrder(first.file); expect(output4.order).toEqual([[4, 1], [2, 3], [5], []]); expect(output4.pdf.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual(Array.from({ length: 4 }, () => [600, 400]));
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: first.file, label: t.resultTitle }));
    act(() => fold.focus()); await user.keyboard('{Home}'); expect(fold).toHaveAttribute('aria-valuenow', '0'); expect(screen.getByRole('button', { name: 'Download imposed PDF' })).toBeInTheDocument();
    const four = screen.getByRole('radio', { name: t.fourPagesFold }), eight = screen.getByRole('radio', { name: t.eightPagesSaddle }); act(() => four.focus()); await user.keyboard('{ArrowDown>}'); await waitFor(() => expect(eight).toBeChecked()); await user.keyboard('{/ArrowDown}');
    expect(screen.queryByRole('button', { name: 'Download imposed PDF' })).toBeNull(); expect(screen.getByRole('img', { name: t.view2D })).toHaveTextContent(t.pageLabel.replace('{number}', '8'));
    await user.click(screen.getByRole('button', { name: tools.processButton })); await screen.findByRole('button', { name: 'Download imposed PDF' });
    expect((await outputOrder(download.mock.lastCall![0].file)).order).toEqual([[1], [2], [3], [4, 5]]); expect(intlError).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: messages.common.buttons.reset })); expect(screen.getByRole('button', { name: tools.uploadLabel }).parentElement).toHaveFocus();
  });

  it('disables source and output options while processing, permits illustration changes and allows retry', async () => {
    let fail!: (error: Error) => void; vi.mocked(imposeBookletFolding).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), t = en.common.bookletFoldingSimulator, tools = en.tools.bookletFoldingSimulator; wrap(); await user.click(screen.getByRole('button', { name: tools.uploadLabel })); await user.click(screen.getByRole('button', { name: tools.processButton }));
    const settings = screen.getByRole('region', { name: tools.optionsTitle }); for (const button of within(settings).getAllByRole('button')) expect(button).toBeDisabled();
    const fold = screen.getByRole('slider', { name: t.foldingDamping }); act(() => fold.focus()); await user.keyboard('{ArrowUp}'); expect(fold).toHaveAttribute('aria-valuenow', '1');
    act(() => vi.mocked(imposeBookletFolding).mock.calls[0][2]?.(60, 'Imposing fixture')); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '60');
    await act(async () => fail(new Error('Imposition failed'))); expect(screen.getByRole('alert')).toHaveTextContent('Imposition failed'); await user.click(screen.getByRole('button', { name: tools.processButton })); await screen.findByRole('button', { name: 'Download imposed PDF' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s and its progress while a new run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(imposeBookletFolding).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), tools = en.tools.bookletFoldingSimulator; wrap(); await user.click(screen.getByRole('button', { name: tools.uploadLabel }));
    const process = screen.getByRole('button', { name: tools.processButton }); await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(imposeBookletFolding).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']) }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled();
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.pdf' })); await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pdf' })));
  });
});
