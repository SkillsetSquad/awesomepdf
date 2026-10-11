import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument, PDFArray, PDFRawStream, decodePDFRawStream } from 'pdf-lib';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { GlobalInvoiceParserTool } from '@/components/tools/global-invoice-parser/GlobalInvoiceParserTool';
import { parseGlobalInvoice } from '@/lib/pdf/processors/global-invoice-parser';
import type { PDFPagePreviewProps } from '@/components/tools/PDFPagePreview';
import type { ProcessOutput } from '@/types/pdf';

let file: File;
const download = vi.fn(), preview = vi.fn();
// Currency text extraction is a fixture; PDF-lib reads and stamps a real two-page PDF.
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib'), loadPdfjs: async () => ({ getDocument: () => ({ promise: Promise.resolve({ getPage: async () => ({ getTextContent: async () => ({ items: [{ str: 'Total Amount Due' }, { str: '$ 150.00' }] }) }) }) }) }) }));
vi.mock('@/lib/pdf/processors/global-invoice-parser', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/global-invoice-parser')>();
  return { ...actual, parseGlobalInvoice: vi.fn(actual.parseGlobalInvoice) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => props.onFilesSelected([file])}>{props.label}</button> }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (props: PDFPagePreviewProps) => { preview(props); return <div>{props.label}</div>; } }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download invoice</button>; } }));
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><GlobalInvoiceParserTool /></NextIntlClientProvider>); return intlError;
}
beforeEach(async () => {
  vi.clearAllMocks(); const actual = await vi.importActual<typeof import('@/lib/pdf/processors/global-invoice-parser')>('@/lib/pdf/processors/global-invoice-parser');
  vi.mocked(parseGlobalInvoice).mockReset().mockImplementation(actual.parseGlobalInvoice);
  const pdf = await PDFDocument.create(); pdf.addPage([595.28, 841.89]).drawText('SOURCE_PAGE_1'); pdf.addPage([400, 600]).drawText('SOURCE_PAGE_2');
  const bytes = await pdf.save(); file = new File([new Uint8Array(bytes)], 'invoice.PDF', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
});

describe('Invoice conversion workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('preserves currency choices, keyboard settings, actual ledger output and source/result previews (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.globalInvoiceParser, intlError = wrap(locale, messages);
    await user.click(screen.getByRole('button', { name: t.uploadLabel })); expect(screen.getByText('invoice.PDF')).toBeInTheDocument();
    const currency = screen.getByRole('combobox', { name: t.targetCurrencyLabel }); expect(currency).toHaveValue('CNY'); expect(within(currency).getAllByRole('option').map(option => (option as HTMLOptionElement).value)).toEqual(['CNY', 'USD', 'EUR', 'JPY']);
    for (const value of ['JPY', 'EUR', 'USD', 'CNY']) { await user.selectOptions(currency, value); expect(currency).toHaveValue(value); }
    await user.type(screen.getByRole('textbox', { name: t.customRateLabel }), '7.2');
    const process = screen.getByRole('button', { name: t.processButton }); act(() => process.focus()); await user.keyboard('{Enter}'); await screen.findByRole('button', { name: 'Download invoice' });
    expect(parseGlobalInvoice).toHaveBeenCalledWith([file], { targetCurrency: 'CNY', exchangeRate: 7.2, translateLabels: true }, expect.any(Function));
    expect(screen.getByText('1080.00 CNY')).toBeInTheDocument(); expect(screen.getByText(t.convertRateApplied.replace('{rate}', '7.2000').replace('{original}', '150.00').replace('{currency}', 'USD'))).toBeInTheDocument(); expect(intlError).not.toHaveBeenCalled();
    const output = download.mock.lastCall![0] as { file: Blob; filename: string }; expect(output.filename).toBe('invoice_converted.pdf');
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file, label: t.previewTitle })); expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: output.file, label: t.resultPreviewTitle }));
    const pdf = await PDFDocument.load(await readBlob(output.file)); expect(pdf.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual([[595.28, 841.89], [400, 600]]);
    const streams = pdf.getPages().map(page => (page.node.Contents() as PDFArray).asArray().map(ref => new TextDecoder().decode(decodePDFRawStream(pdf.context.lookup(ref) as PDFRawStream).decode())).join('\n'));
    const hex = (value: string) => Array.from(value, char => char.charCodeAt(0).toString(16).padStart(2, '0')).join('').toUpperCase();
    expect(streams[0]).toContain(hex('SOURCE_PAGE_1')); expect(streams[0]).toContain(hex('Total: 1080.00 CNY')); expect(streams[1]).toContain(hex('SOURCE_PAGE_2')); expect(streams[1]).not.toContain(hex('CURRENCY CONVERSION'));
    await user.selectOptions(currency, 'EUR'); expect(screen.queryByRole('button', { name: 'Download invoice' })).toBeNull(); expect(screen.queryByText('1080.00 CNY')).toBeNull();
    await user.click(screen.getByRole('button', { name: t.clearButton })); expect(screen.getByRole('button', { name: t.uploadLabel }).parentElement).toHaveFocus();
  });

  it('uses fixed estimates for a blank rate and rejects zero, negative, infinite and partially numeric input', async () => {
    const user = userEvent.setup(), t = en.common.globalInvoiceParser; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const input = screen.getByRole('textbox', { name: t.customRateLabel }), process = screen.getByRole('button', { name: t.processButton }); expect(screen.getByText(t.rateHelp)).toBeInTheDocument();
    for (const value of ['0', '-1', 'Infinity', '1abc']) { await user.clear(input); await user.type(input, value); expect(input).toHaveAttribute('aria-invalid', 'true'); expect(process).toBeDisabled(); expect(screen.getByRole('alert')).toHaveTextContent(t.invalidRate); }
    expect(parseGlobalInvoice).not.toHaveBeenCalled(); await user.clear(input); expect(input).toHaveAttribute('aria-invalid', 'false'); expect(process).toBeEnabled();
    await user.click(process); await screen.findByRole('button', { name: 'Download invoice' });
    expect(parseGlobalInvoice).toHaveBeenCalledWith([file], { targetCurrency: 'CNY', exchangeRate: undefined, translateLabels: true }, expect.any(Function)); expect(screen.getByText('1087.50 CNY')).toBeInTheDocument();
    await user.type(input, '7.3'); expect(screen.queryByRole('button', { name: 'Download invoice' })).toBeNull();
  });

  it('disables source/options while processing, reports progress and permits retry', async () => {
    let fail!: (error: Error) => void; vi.mocked(parseGlobalInvoice).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), t = en.common.globalInvoiceParser; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton }); await user.click(process); expect(process).toBeDisabled(); expect(screen.getByRole('textbox')).toBeDisabled(); expect(screen.getByRole('combobox')).toBeDisabled(); expect(screen.getByRole('button', { name: t.clearButton })).toBeDisabled();
    act(() => vi.mocked(parseGlobalInvoice).mock.calls[0][2]?.(65, 'Stamping fixture')); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '65');
    await act(async () => fail(new Error('Invoice failed'))); expect(screen.getByRole('alert')).toHaveTextContent('Invoice failed'); expect(process).toBeEnabled(); await user.click(process); await screen.findByRole('button', { name: 'Download invoice' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s while another run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(parseGlobalInvoice).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), t = en.common.globalInvoiceParser; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton }); await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(parseGlobalInvoice).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']) }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled();
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.pdf', metadata: { originalAmount: 0, convertedAmount: 0, originalCurrency: 'USD', targetCurrency: 'CNY', rateApplied: 7.25 } }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pdf' }))); expect(screen.getByText('0.00 CNY')).toBeInTheDocument();
  });

  it('keeps a successful download when statistics are missing or malformed and uses a fallback filename', async () => {
    vi.mocked(parseGlobalInvoice).mockResolvedValueOnce({ success: true, result: new Blob(['fixture']), metadata: { convertedAmount: NaN } });
    const user = userEvent.setup(), t = en.common.globalInvoiceParser; wrap(); await user.click(screen.getByRole('button', { name: t.uploadLabel })); await user.click(screen.getByRole('button', { name: t.processButton }));
    await screen.findByRole('button', { name: 'Download invoice' }); expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'invoice_converted.pdf' })); expect(screen.queryByText(/NaN/)).toBeNull(); expect(screen.getByRole('status')).toHaveTextContent(t.successMessage);
  });
});
