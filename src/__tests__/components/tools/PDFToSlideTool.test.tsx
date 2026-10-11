import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import JSZip from 'jszip';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PDFToSlideTool } from '@/components/tools/pdf-to-slide/PDFToSlideTool';
import { reconstructPDFToSlide } from '@/lib/pdf/processors/pdf-to-slide';
import type { ProcessOutput } from '@/types/pdf';

const download = vi.fn();
const file = new File(['local text extraction fixture'], 'source.PDF', { type: 'application/pdf' });
Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array([37, 80, 68, 70]).buffer });
// Text extraction is a fixture; the processor's actual OOXML/ZIP generation runs below.
vi.mock('@/lib/pdf/loader', () => ({ loadPdfjs: async () => ({ getDocument: () => ({ promise: Promise.resolve({ numPages: 3, getPage: async (page: number) => ({ getTextContent: async () => ({ items: page === 3 ? [] : [
  { str: `Title ${page} & details`, transform: [1, 0, 0, 24, 50, 700] },
  { str: `Bullet ${page} <example>`, transform: [1, 0, 0, 12, 50, 600] },
] }) }) }) }) }) }));
vi.mock('@/lib/pdf/processors/pdf-to-slide', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/pdf-to-slide')>();
  return { ...actual, reconstructPDFToSlide: vi.fn(actual.reconstructPDFToSlide) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => props.onFilesSelected([file])}>{props.label}</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download presentation</button>; } }));
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><PDFToSlideTool /></NextIntlClientProvider>); return intlError;
}
beforeEach(async () => {
  vi.clearAllMocks(); const actual = await vi.importActual<typeof import('@/lib/pdf/processors/pdf-to-slide')>('@/lib/pdf/processors/pdf-to-slide');
  vi.mocked(reconstructPDFToSlide).mockReset().mockImplementation(actual.reconstructPDFToSlide);
});

describe('PDF to slides workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('uses keyboard theme and outline controls with actual ZIP output (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.pdfToSlide, tools = messages.tools.pdfToSlide, intlError = wrap(locale, messages);
    await user.click(screen.getByRole('button', { name: tools.uploadLabel })); expect(screen.getByText('source.PDF')).toBeInTheDocument();
    const color = screen.getByRole('button', { name: `${t.themeLabel}: #10b981` }); act(() => color.focus()); await user.keyboard('{Enter}'); expect(color).toHaveAttribute('aria-pressed', 'true');
    await user.click(screen.getByRole('button', { name: tools.processButton })); await screen.findByRole('button', { name: 'Download presentation' });
    expect(reconstructPDFToSlide).toHaveBeenCalledWith(file, { themeColor: '#10b981' }, expect.any(Function)); expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'source.pptx' }));
    const zip = await JSZip.loadAsync(await readBlob(download.mock.lastCall![0].file));
    expect(await zip.file('ppt/theme/theme1.xml')!.async('string')).toContain('<a:srgbClr val="10b981"/>');
    for (const page of [1, 2]) {
      const xml = await zip.file(`ppt/slides/slide${page}.xml`)!.async('string'); expect(xml).toContain(`Title ${page} &amp; details`); expect(xml).toContain(`Bullet ${page} &lt;example&gt;`);
    }
    expect(await zip.file('ppt/slides/slide3.xml')!.async('string')).toContain('[Scanned page/No readable text]');
    expect(screen.getByRole('article')).toHaveTextContent('Title 1 & details'); expect(screen.getByRole('button', { name: t.prevPage })).toBeDisabled();
    const next = screen.getByRole('button', { name: t.nextPage }); act(() => next.focus()); await user.keyboard('{Enter}'); expect(screen.getByRole('article')).toHaveTextContent('Title 2 & details');
    await user.keyboard('{Enter}'); expect(screen.getByRole('article')).toHaveTextContent('Page 3'); expect(next).toBeDisabled();
    await user.click(screen.getByRole('button', { name: t.prevPage })); expect(screen.getByRole('article')).toHaveTextContent('Title 2 & details'); expect(intlError).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: `${t.themeLabel}: #ef4444` })); expect(screen.queryByRole('button', { name: 'Download presentation' })).toBeNull(); expect(screen.queryByRole('article')).toBeNull();
    await user.click(screen.getByRole('button', { name: tools.processButton })); await screen.findByRole('button', { name: 'Download presentation' }); expect(screen.getByRole('article')).toHaveTextContent('Title 1 & details');
    await user.click(screen.getByRole('button', { name: messages.common.buttons.reset })); expect(screen.getByRole('button', { name: tools.uploadLabel }).parentElement).toHaveFocus();
  });

  it('disables source and theme changes while processing, reports progress and allows retry after failure', async () => {
    let fail!: (error: Error) => void; vi.mocked(reconstructPDFToSlide).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), tools = en.tools.pdfToSlide; wrap(); await user.click(screen.getByRole('button', { name: tools.uploadLabel })); await user.click(screen.getByRole('button', { name: tools.processButton }));
    for (const button of within(screen.getByRole('region', { name: tools.optionsTitle })).getAllByRole('button')) expect(button).toBeDisabled();
    act(() => vi.mocked(reconstructPDFToSlide).mock.calls[0][2]?.(55, 'Extracting fixture')); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '55');
    await act(async () => fail(new Error('Slide extraction failed'))); expect(screen.getByRole('alert')).toHaveTextContent('Slide extraction failed');
    await user.click(screen.getByRole('button', { name: tools.processButton })); await screen.findByRole('button', { name: 'Download presentation' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s and its progress while a new run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(reconstructPDFToSlide).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), tools = en.tools.pdfToSlide; wrap(); await user.click(screen.getByRole('button', { name: tools.uploadLabel }));
    const process = screen.getByRole('button', { name: tools.processButton }); await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(reconstructPDFToSlide).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']), metadata: { slides: [{ title: 'Old slide', bullets: [] }] } }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled();
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.pptx', metadata: { slides: [{ title: 'Current slide', bullets: ['Current bullet'] }] } }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pptx' }))); expect(screen.getByRole('article')).toHaveTextContent('Current slide');
  });

  it('ignores malformed outline metadata and keeps a successful download available with a fallback filename', async () => {
    vi.mocked(reconstructPDFToSlide).mockResolvedValueOnce({ success: true, result: new Blob(['fixture']), metadata: { slides: [null, { title: 9, bullets: [] }, { title: 'Invalid', bullets: [8] }] } });
    const user = userEvent.setup(), tools = en.tools.pdfToSlide; wrap(); await user.click(screen.getByRole('button', { name: tools.uploadLabel })); await user.click(screen.getByRole('button', { name: tools.processButton }));
    await screen.findByRole('button', { name: 'Download presentation' }); expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'source.pptx' })); expect(screen.queryByRole('article')).toBeNull(); expect(screen.getByText(en.common.pdfToSlide.outlineUnavailable)).toBeInTheDocument();
  });
});
