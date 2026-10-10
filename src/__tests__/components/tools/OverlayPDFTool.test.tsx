import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument, PDFArray, PDFDict, PDFName, PDFRawStream, decodePDFRawStream, type PDFPage } from 'pdf-lib';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { OverlayPDFTool } from '@/components/tools/overlay/OverlayPDFTool';
import { overlayPDF } from '@/lib/pdf/processors/overlay';
import { ErrorCategory, PDFErrorCode, type ProcessOutput } from '@/types/pdf';

let selectedFile: File, base: File, layer: File;
const download = vi.fn();
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
vi.mock('@/lib/pdf/processors/overlay', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/overlay')>();
  return { ...actual, overlayPDF: vi.fn(actual.overlayPDF) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string; disabled: boolean }) =>
  <button disabled={props.disabled} onClick={() => props.onFilesSelected([selectedFile])}>{props.label}</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download composition</button>; } }));

async function source(name: string, prefix: string, sizes: number[][]) {
  const pdf = await PDFDocument.create();
  for (const [index, size] of sizes.entries()) pdf.addPage(size as [number, number]).drawText(`${prefix}_${index + 1}`, { x: 10, y: 10, size: 12 });
  const bytes = await pdf.save();
  const file = new File([new Uint8Array(bytes)], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { configurable: true, value: async () => new Uint8Array(bytes).buffer });
  return file;
}
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function streamText(stream: PDFRawStream) { return new TextDecoder().decode(decodePDFRawStream(stream).decode()); }
function label(text: string) {
  const labels = ['BASE_1', 'BASE_2', 'BASE_3', 'LAYER_1', 'LAYER_2'];
  return labels.find(value => text.includes(Array.from(value, char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('').toUpperCase()));
}
function paintedLabels(page: PDFPage) {
  const { context } = page.doc;
  const contents = page.node.Contents();
  const refs = contents instanceof PDFArray ? contents.asArray() : [contents];
  const text = refs.map(ref => { const stream = context.lookup(ref); expect(stream).toBeInstanceOf(PDFRawStream); return streamText(stream as PDFRawStream); }).join('\n');
  const draws = [...text.matchAll(/\/([^\s]+) Do\b/g)];
  if (!draws.length) return [label(text)];
  const resources = page.node.Resources()!;
  const objects = resources.lookup(PDFName.of('XObject'), PDFDict);
  return draws.map(([, name]) => { const object = objects.lookup(PDFName.of(name)); expect(object).toBeInstanceOf(PDFRawStream); return label(streamText(object as PDFRawStream)); });
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><OverlayPDFTool /></NextIntlClientProvider>); return intlError;
}
async function upload(user: ReturnType<typeof userEvent.setup>, messages: typeof en | typeof ar = en) {
  selectedFile = base; await user.click(screen.getByRole('button', { name: messages.common.overlayPdf.uploadBaseButton }));
  selectedFile = layer; await user.click(screen.getByRole('button', { name: messages.common.overlayPdf.uploadLayerButton }));
  await waitFor(() => expect(screen.getByRole('button', { name: messages.common.overlayPdf.processButton })).toBeEnabled());
}

beforeEach(async () => {
  vi.clearAllMocks();
  const actual = await vi.importActual<typeof import('@/lib/pdf/processors/overlay')>('@/lib/pdf/processors/overlay');
  vi.mocked(overlayPDF).mockReset().mockImplementation(actual.overlayPDF);
  base = await source('main.PDF', 'BASE', [[200, 300], [400, 500], [210, 310]]);
  layer = await source('layer.pdf', 'LAYER', [[100, 150], [120, 180]]);
  selectedFile = base;
});
afterEach(() => vi.restoreAllMocks());

describe('Overlay and underlay workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('keeps both source slots, keyboard settings and actual underlay output (%s)', async (locale, messages) => {
    const user = userEvent.setup(), intlError = wrap(locale, messages), t = messages.common.overlayPdf;
    await upload(user, messages);
    const overlay = screen.getByRole('radio', { name: t.placementOverlayBtn }); expect(overlay).toBeChecked();
    act(() => overlay.focus()); await user.keyboard('{ArrowDown>}');
    await waitFor(() => expect(screen.getByRole('radio', { name: t.placementUnderlayBtn })).toBeChecked()); await user.keyboard('{/ArrowDown}');
    const order = screen.getByRole('region', { name: t.previewTitle });
    expect(within(order).getAllByRole('listitem').map(item => item.textContent)).toEqual([`${t.layerPageLabel}layer.pdf`, `${t.basePageLabel}main.PDF`]);
    const loop = screen.getByRole('switch', { name: t.loopOverlayLabel }); expect(loop).toBeChecked(); expect(loop).toHaveAccessibleDescription(t.loopOverlayDesc);
    act(() => loop.focus()); await user.keyboard(' ');
    const range = screen.getByRole('textbox', { name: t.targetRangeLabel }); expect(range).toHaveAccessibleDescription(t.targetRangeHelp);
    await user.type(range, '1,3');
    const process = screen.getByRole('button', { name: t.processButton }); act(() => process.focus()); await user.keyboard('{Enter}');
    await screen.findByRole('button', { name: 'Download composition' });
    expect(overlayPDF).toHaveBeenCalledWith([base, layer], { mode: 'underlay', pageRange: '1,3', loop: false }, expect.any(Function));
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'main_overlay.pdf' }));
    const pdf = await PDFDocument.load(await readBlob(download.mock.lastCall![0].file));
    expect(pdf.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual([[200, 300], [400, 500], [210, 310]]);
    expect(pdf.getPages().map(paintedLabels)).toEqual([['LAYER_1', 'BASE_1'], ['BASE_2'], ['BASE_3']]);
    expect(screen.getByRole('status')).toHaveTextContent(t.successMessage); expect(intlError).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: `${messages.common.buttons.remove}: ${t.uploadLayerButton}` }));
    expect(screen.queryByRole('button', { name: 'Download composition' })).toBeNull(); expect(screen.getByText('main.PDF')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: t.uploadLayerButton })).toBeEnabled();
  });

  it.each([
    ['', true, [['BASE_1', 'LAYER_1'], ['BASE_2', 'LAYER_2'], ['BASE_3', 'LAYER_1']]],
    ['', false, [['BASE_1', 'LAYER_1'], ['BASE_2', 'LAYER_2'], ['BASE_3']]],
    ['odd', true, [['BASE_1', 'LAYER_1'], ['BASE_2'], ['BASE_3', 'LAYER_1']]],
    ['even', true, [['BASE_1'], ['BASE_2', 'LAYER_2'], ['BASE_3']]],
  ] as const)('preserves actual foreground painting, page range "%s" and repetition %s', async (range, repeat, expected) => {
    const user = userEvent.setup(); wrap(); await upload(user);
    if (!repeat) await user.click(screen.getByRole('switch', { name: en.common.overlayPdf.loopOverlayLabel }));
    if (range) await user.type(screen.getByRole('textbox', { name: en.common.overlayPdf.targetRangeLabel }), range);
    await user.click(screen.getByRole('button', { name: en.common.overlayPdf.processButton })); await screen.findByRole('button', { name: 'Download composition' });
    const pdf = await PDFDocument.load(await readBlob(download.mock.lastCall![0].file));
    expect(pdf.getPages().map(paintedLabels)).toEqual(expected);
  });

  it('disables source changes and settings during processing and permits retry after failure', async () => {
    let finish!: (output: ProcessOutput) => void;
    vi.mocked(overlayPDF).mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
    const user = userEvent.setup(); wrap(); await upload(user);
    const process = screen.getByRole('button', { name: en.common.overlayPdf.processButton }); await user.click(process);
    for (const radio of screen.getAllByRole('radio')) expect(radio).toBeDisabled();
    expect(screen.getByRole('switch')).toBeDisabled(); expect(screen.getByRole('textbox')).toBeDisabled(); expect(process).toBeDisabled();
    for (const button of screen.getAllByRole('button', { name: /^Remove:/ })) expect(button).toBeDisabled();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    act(() => vi.mocked(overlayPDF).mock.calls[0][2]?.(60, 'Composing fixture')); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '60');
    await act(async () => finish({ success: false, error: { code: PDFErrorCode.PROCESSING_FAILED, category: ErrorCategory.PROCESSING_ERROR, message: 'Composition failed', recoverable: true } }));
    expect(screen.getByRole('alert')).toHaveTextContent('Composition failed'); expect(process).toBeEnabled();
    await user.click(process); await screen.findByRole('button', { name: 'Download composition' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('ignores progress and a late cancelled %s while a new run is processing', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(overlayPDF).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(); wrap(); await upload(user);
    const process = screen.getByRole('button', { name: en.common.overlayPdf.processButton });
    await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(overlayPDF).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']) }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled();
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.pdf' }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pdf' })));
  });

  it.each(['result', 'error'] as const)('ignores a removed-document metadata %s while a new document is loading', async outcome => {
    let old!: (buffer: ArrayBuffer) => void, current!: (buffer: ArrayBuffer) => void;
    const bytes = await base.arrayBuffer();
    Object.defineProperty(base, 'arrayBuffer', { value: () => new Promise<ArrayBuffer>(resolve => { old = resolve; }) });
    const replacement = await source('replacement.pdf', 'BASE', [[100, 200]]), replacementBytes = await replacement.arrayBuffer();
    Object.defineProperty(replacement, 'arrayBuffer', { value: () => new Promise<ArrayBuffer>(resolve => { current = resolve; }) });
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.common.overlayPdf.uploadBaseButton })); await waitFor(() => expect(old).toBeDefined());
    await user.click(screen.getByRole('button', { name: `${en.common.buttons.remove}: ${en.common.overlayPdf.uploadBaseButton}` }));
    selectedFile = replacement; await user.click(screen.getByRole('button', { name: en.common.overlayPdf.uploadBaseButton })); await waitFor(() => expect(current).toBeDefined());
    selectedFile = layer; await user.click(screen.getByRole('button', { name: en.common.overlayPdf.uploadLayerButton }));
    await act(async () => old(outcome === 'result' ? bytes : new ArrayBuffer(0)));
    expect(screen.getByRole('button', { name: en.common.overlayPdf.processButton })).toBeDisabled();
    const baseRegion = screen.getByRole('region', { name: en.common.overlayPdf.uploadBaseLabel });
    expect(within(baseRegion).getByRole('status')).toHaveTextContent(en.common.status.loading); expect(baseRegion).not.toHaveTextContent('3 page(s)');
    await act(async () => current(replacementBytes)); await waitFor(() => expect(screen.getByRole('button', { name: en.common.overlayPdf.processButton })).toBeEnabled());
    expect(baseRegion).toHaveTextContent('1 page(s)'); expect(baseRegion).toHaveTextContent('replacement.pdf');
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('blocks composition after a metadata failure and permits replacing only the failed source', async () => {
    Object.defineProperty(base, 'arrayBuffer', { value: async () => { throw new Error('Metadata failed'); } });
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.common.overlayPdf.uploadBaseButton }));
    expect(await screen.findByRole('alert')).toHaveTextContent('Metadata failed');
    selectedFile = layer; await user.click(screen.getByRole('button', { name: en.common.overlayPdf.uploadLayerButton }));
    expect(screen.getByRole('button', { name: en.common.overlayPdf.processButton })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: `${en.common.buttons.remove}: ${en.common.overlayPdf.uploadBaseButton}` }));
    selectedFile = await source('replacement.pdf', 'BASE', [[200, 300]]);
    await user.click(screen.getByRole('button', { name: en.common.overlayPdf.uploadBaseButton }));
    await waitFor(() => expect(screen.getByRole('button', { name: en.common.overlayPdf.processButton })).toBeEnabled());
    expect(screen.getByRole('region', { name: en.common.overlayPdf.uploadBaseLabel })).toHaveTextContent('replacement.pdf');
    expect(screen.getByRole('region', { name: en.common.overlayPdf.uploadLayerLabel })).toHaveTextContent('layer.pdf');
    expect(screen.queryByRole('alert')).toBeNull();
  });
});
