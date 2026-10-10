import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument, PDFName } from 'pdf-lib';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { DeepSanitizeTool } from '@/components/tools/deep-sanitize/DeepSanitizeTool';
import { deepSanitizePDF } from '@/lib/pdf/processors/deep-sanitize';
import type { ProcessOutput } from '@/types/pdf';

let selectedFile: File;
const download = vi.fn();
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
vi.mock('@/lib/pdf/processors/deep-sanitize', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/deep-sanitize')>();
  return { ...actual, deepSanitizePDF: vi.fn(actual.deepSanitizePDF) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([selectedFile])}>Choose sanitize source</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download sanitized PDF</button>; } }));

function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

beforeEach(async () => {
  vi.clearAllMocks();
  const actual = await vi.importActual<typeof import('@/lib/pdf/processors/deep-sanitize')>('@/lib/pdf/processors/deep-sanitize');
  vi.mocked(deepSanitizePDF).mockReset().mockImplementation(actual.deepSanitizePDF);
  const pdf = await PDFDocument.create();
  pdf.addPage([200, 300]); pdf.addPage([400, 500]);
  pdf.setTitle('Private title'); pdf.setAuthor('Private author');
  pdf.catalog.set(PDFName.of('Metadata'), pdf.context.register(pdf.context.stream('<xmp>Private author</xmp>')));
  pdf.catalog.set(PDFName.of('PieceInfo'), pdf.context.obj({ Editor: {} }));
  pdf.catalog.set(PDFName.of('StructTreeRoot'), pdf.context.obj({ Type: 'StructTreeRoot', K: [] }));
  pdf.catalog.set(PDFName.of('OCProperties'), pdf.context.obj({ OCGs: [], D: {} }));
  pdf.getPage(0).node.set(PDFName.of('Annots'), pdf.context.obj([{ Type: 'Annot', Subtype: 'Text', Rect: [0, 0, 20, 20], Contents: 'Keep this comment' }]));
  const bytes = await pdf.save();
  selectedFile = new File([new Uint8Array(bytes)], 'report.PDF', { type: 'application/pdf' });
  Object.defineProperty(selectedFile, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
});

describe('Deep Sanitize workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('uses keyboard settings and shows the real processing report only after completion (%s)', async (locale, messages) => {
    const user = userEvent.setup();
    const intlError = vi.fn();
    const t = messages.common.deepSanitize;
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><DeepSanitizeTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose sanitize source' }));
    const metadata = await screen.findByRole('checkbox', { name: t.clearXmp });
    const editor = screen.getByRole('checkbox', { name: t.clearPieceInfo });
    const layers = screen.getByRole('checkbox', { name: t.clearOcProperties });
    const annotations = screen.getByRole('checkbox', { name: t.clearAnnotations });
    expect(metadata).toBeChecked(); expect(editor).toBeChecked(); expect(layers).toBeChecked(); expect(annotations).not.toBeChecked();
    expect(editor).toHaveAccessibleDescription(t.clearPieceInfoDesc);
    expect(screen.queryByRole('region', { name: t.riskReport })).toBeNull();
    act(() => annotations.focus());
    await user.keyboard(' ');
    expect(annotations).toBeChecked();
    const process = screen.getByRole('button', { name: t.processButton });
    act(() => process.focus());
    await user.keyboard('{Enter}');
    const report = await screen.findByRole('region', { name: t.riskReport });
    expect(within(report).getByText(t.clearXmp)).toBeInTheDocument();
    expect(within(report).getByText(t.structureTags)).toBeInTheDocument();
    expect(within(report).getByText(t.clearAnnotations)).toBeInTheDocument();
    expect(within(report).getByText(t.rewrittenDocument)).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(t.successDesc);
    expect(deepSanitizePDF).toHaveBeenCalledWith(selectedFile, { stripMetadata: true, stripPieceInfo: true, stripOcgWatermarks: true, stripAnnotations: true }, expect.any(Function));
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'report_sanitized.pdf' }));
    const output = await PDFDocument.load(await readBlob(download.mock.lastCall![0].file), { updateMetadata: false });
    expect(output.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual([[200, 300], [400, 500]]);
    expect(output.getTitle()).toBe(''); expect(output.getAuthor()).toBe('');
    for (const key of ['Metadata', 'PieceInfo', 'StructTreeRoot', 'OCProperties']) expect(output.catalog.has(PDFName.of(key))).toBe(false);
    expect(output.getPage(0).node.has(PDFName.of('Annots'))).toBe(false);
    expect(intlError).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: messages.common.buttons.remove }));
    expect(screen.queryByRole('region', { name: t.riskReport })).toBeNull();
    expect(screen.getByRole('button', { name: 'Choose sanitize source' })).toBeEnabled();
  });

  it('reports only supplied findings and disables settings during a run', async () => {
    let finish!: (output: ProcessOutput) => void;
    vi.mocked(deepSanitizePDF).mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
    const user = userEvent.setup();
    const t = en.common.deepSanitize;
    render(<NextIntlClientProvider locale="en" messages={en}><DeepSanitizeTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose sanitize source' }));
    const process = await screen.findByRole('button', { name: t.processButton });
    for (const checkbox of screen.getAllByRole('checkbox')) if (checkbox.getAttribute('aria-checked') === 'true') await user.click(checkbox);
    await user.click(process);
    expect(deepSanitizePDF).toHaveBeenCalledWith(selectedFile, { stripMetadata: false, stripPieceInfo: false, stripOcgWatermarks: false, stripAnnotations: false }, expect.any(Function));
    for (const checkbox of screen.getAllByRole('checkbox')) expect(checkbox).toBeDisabled();
    expect(process).toBeDisabled();
    expect(screen.getByRole('button', { name: en.common.buttons.remove })).toBeDisabled();
    expect(screen.queryByText(t.riskReport)).toBeNull();
    act(() => vi.mocked(deepSanitizePDF).mock.calls[0][2]?.(45, 'Processing fixture'));
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '45');
    await act(async () => finish({ success: true, result: new Blob(['fixture']), metadata: { findings: ['Incremental revision history logs (forces full xref reconstruction)', 'Additional processor change', 17] } }));
    const report = await screen.findByRole('region', { name: t.riskReport });
    expect(within(report).getAllByRole('listitem')).toHaveLength(2);
    expect(report).toHaveTextContent(t.rewrittenDocument);
    expect(report).toHaveTextContent('Additional processor change');
    expect(within(report).queryByText(t.clearXmp)).toBeNull();
    expect(within(report).queryByText(t.clearPieceInfo)).toBeNull();
  });

  it('preserves settings after an error and permits retry', async () => {
    vi.mocked(deepSanitizePDF).mockRejectedValueOnce(new Error('Processing failed'));
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={en}><DeepSanitizeTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose sanitize source' }));
    const process = await screen.findByRole('button', { name: en.common.deepSanitize.processButton });
    await user.click(screen.getByRole('checkbox', { name: en.common.deepSanitize.clearXmp }));
    await user.click(process);
    expect(await screen.findByRole('alert')).toHaveTextContent('Processing failed');
    expect(screen.getByRole('checkbox', { name: en.common.deepSanitize.clearXmp })).not.toBeChecked();
    expect(process).toBeEnabled();
    await user.click(process);
    await screen.findByRole('button', { name: 'Download sanitized PDF' });
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('ignores cancelled progress and a late %s after a newer run starts', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(deepSanitizePDF)
      .mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; }))
      .mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={en}><DeepSanitizeTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose sanitize source' }));
    const process = await screen.findByRole('button', { name: en.common.deepSanitize.processButton });
    await user.click(process);
    await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    await user.click(process);
    act(() => vi.mocked(deepSanitizePDF).mock.calls[0][2]?.(98, 'Cancelled progress'));
    await act(async () => {
      if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']), metadata: { findings: ['Old report'] } });
      else failOld(new Error('Cancelled run failed'));
    });
    expect(screen.queryByText('Cancelled progress')).toBeNull();
    expect(screen.queryByText('Cancelled run failed')).toBeNull();
    expect(screen.queryByText('Old report')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Download sanitized PDF' })).toBeNull();
    expect(process).toBeDisabled();
    const latest = new Blob(['latest']);
    await act(async () => finishNew({ success: true, result: latest }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: latest })));
  });

  it.each(['result', 'error'] as const)('ignores a removed file’s late metadata %s', async outcome => {
    const latestFile = selectedFile;
    const oldPdf = await PDFDocument.create(); oldPdf.addPage([100, 200]);
    const bytes = await oldPdf.save();
    let finishOld!: (bytes: ArrayBuffer) => void, failOld!: (error: Error) => void;
    selectedFile = new File(['%PDF'], 'old.pdf', { type: 'application/pdf' });
    Object.defineProperty(selectedFile, 'arrayBuffer', { value: () => new Promise<ArrayBuffer>((resolve, reject) => { finishOld = resolve; failOld = reject; }) });
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={en}><DeepSanitizeTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose sanitize source' }));
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent(en.common.deepSanitize.prechecking));
    await user.click(screen.getByRole('button', { name: en.common.buttons.remove }));
    selectedFile = latestFile;
    await user.click(screen.getByRole('button', { name: 'Choose sanitize source' }));
    await screen.findByRole('button', { name: en.common.deepSanitize.processButton });
    await act(async () => {
      if (outcome === 'result') finishOld(new Uint8Array(bytes).buffer);
      else failOld(new Error('Old metadata failed'));
    });
    expect(screen.getByText(/^2 page\(s\)/)).toBeInTheDocument();
    expect(screen.queryByText(/^1 page\(s\)/)).toBeNull();
    expect(screen.queryByRole('alert')).toBeNull();
  });
});
