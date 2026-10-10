import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument } from 'pdf-lib';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { RemoveBlankPagesTool } from '@/components/tools/remove-blank-pages/RemoveBlankPagesTool';
import { removeBlankPages } from '@/lib/pdf/processors/remove-blank-pages';
import { getDocument } from 'pdfjs-dist';

let selectedFile: File;
let activePage = 0;
const download = vi.fn();
vi.mock('pdfjs-dist', () => ({ getDocument: vi.fn() }));
vi.mock('@/lib/pdf/loader', () => ({ configurePdfjsWorker: vi.fn(), loadPdfLib: () => import('pdf-lib') }));
vi.mock('@/lib/pdf/processors/remove-blank-pages', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/remove-blank-pages')>();
  return { ...actual, removeBlankPages: vi.fn(actual.removeBlankPages) };
});
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([selectedFile])}>Choose PDF</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download PDF</button>; } }));

beforeEach(async () => {
  vi.clearAllMocks();
  vi.mocked(removeBlankPages).mockReset();
  const actual = await vi.importActual<typeof import('@/lib/pdf/processors/remove-blank-pages')>('@/lib/pdf/processors/remove-blank-pages');
  vi.mocked(removeBlankPages).mockImplementation(actual.removeBlankPages);
  const pdf = await PDFDocument.create();
  pdf.addPage([200, 300]); pdf.addPage([400, 500]); pdf.addPage([600, 700]);
  const bytes = await pdf.save();
  selectedFile = new File([new Uint8Array(bytes)], 'report.PDF', { type: 'application/pdf' });
  Object.defineProperty(selectedFile, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
  vi.mocked(getDocument).mockReturnValue({ promise: Promise.resolve({
    numPages: 3,
    getPage: async (page: number) => ({ getViewport: () => ({ width: page * 60, height: (page * 200 + 100) * 0.3 }), render: () => { activePage = page; return { promise: Promise.resolve() }; } }),
  }) } as unknown as ReturnType<typeof getDocument>);
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(() => ({ getImageData: () => {
    const data = new Uint8ClampedArray(1000 * 4).fill(255);
    const darkPixels = activePage === 2 ? 500 : activePage === 3 ? 1 : 0;
    for (let pixel = 0; pixel < darkPixels; pixel++) data.fill(0, pixel * 4, pixel * 4 + 3);
    return { data };
  } }) as unknown as CanvasRenderingContext2D);
  vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockImplementation(() => `data:image/jpeg;base64,${btoa(`page-${activePage}`)}`);
});
afterEach(() => vi.restoreAllMocks());

function bytesOf(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
}

describe('Blank-page review workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('preserves detection, keyboard overrides, filters and actual exported page geometry (%s)', async (locale, messages) => {
    const intlError = vi.fn();
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><RemoveBlankPagesTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose PDF' }));
    const pageButton = (number: number) => screen.getByRole('button', { name: new RegExp(`^${messages.common.removeBlankPages.pageNumber.replace('{page}', String(number))}:`) });
    await waitFor(() => expect(pageButton(1)).toHaveAttribute('aria-pressed', 'true'));
    expect(pageButton(2)).toHaveAttribute('aria-pressed', 'false');
    expect(pageButton(3)).toHaveAttribute('aria-pressed', 'true');
    expect(pageButton(2).querySelector('img')?.parentElement).toHaveStyle({ aspectRatio: 0.8 });
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAccessibleDescription(messages.tools.removeBlankPages.sensitivityHint);
    act(() => slider.focus());
    await user.keyboard('{End}');
    expect(slider).toHaveAttribute('aria-valuenow', '100');
    expect(pageButton(3)).toHaveAttribute('aria-pressed', 'false');
    act(() => pageButton(1).focus());
    await user.keyboard(' ');
    expect(pageButton(1)).toHaveAttribute('aria-pressed', 'false');
    act(() => slider.focus());
    await user.keyboard('{Home}');
    expect(slider).toHaveAttribute('aria-valuenow', '90');
    expect(pageButton(1)).toHaveAttribute('aria-pressed', 'false');
    expect(pageButton(3)).toHaveAttribute('aria-pressed', 'true');
    await user.click(screen.getByRole('button', { name: messages.common.removeBlankPages.resetBtn }));
    expect(pageButton(1)).toHaveAttribute('aria-pressed', 'true');
    const allTab = screen.getByRole('tab', { name: messages.common.removeBlankPages.allTab.replace('{count}', '3') });
    act(() => allTab.focus());
    await user.keyboard(locale === 'ar' ? '{ArrowLeft}' : '{ArrowRight}');
    const panel = screen.getByRole('tabpanel');
    expect(within(panel).getAllByRole('button')).toHaveLength(2);
    expect(screen.getByRole('tab', { selected: true })).toHaveTextContent(messages.common.removeBlankPages.blankTab.replace('{count}', '2'));
    act(() => pageButton(1).focus());
    await user.keyboard('{Enter}');
    await waitFor(() => expect(panel).toHaveFocus());
    expect(within(panel).getAllByRole('button')).toHaveLength(1);
    await user.click(screen.getByRole('button', { name: messages.common.removeBlankPages.deleteAllBtn }));
    expect(screen.getByRole('button', { name: messages.tools.removeBlankPages.removeButton })).toBeDisabled();
    expect(screen.getByText(messages.common.removeBlankPages.keepAtLeastOne)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: messages.common.removeBlankPages.keepAllBtn }));
    expect(screen.getByText(messages.common.removeBlankPages.emptyState)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: messages.common.removeBlankPages.resetBtn }));
    expect(screen.getByRole('button', { name: messages.common.removeBlankPages.resetBtn })).toBeDisabled();
    const process = screen.getByRole('button', { name: messages.tools.removeBlankPages.removeButton });
    act(() => process.focus());
    await user.keyboard('{Enter}');
    await screen.findByRole('button', { name: 'Download PDF' });
    expect(removeBlankPages).toHaveBeenCalledWith(selectedFile, { explicitPagesToRemove: [1, 3] }, expect.any(Function));
    const output = download.mock.lastCall![0] as { file: Blob; filename: string };
    expect(output.filename).toBe('report_no_blanks.pdf');
    const exported = await PDFDocument.load(await bytesOf(output.file));
    expect(exported.getPageCount()).toBe(1);
    expect(exported.getPage(0).getSize()).toEqual({ width: 400, height: 500 });
    expect(intlError).not.toHaveBeenCalled();
  });

  it('retains the reviewed selections when processing fails and permits retry', async () => {
    vi.mocked(removeBlankPages).mockRejectedValueOnce(new Error('Local processing failed'));
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={en}><RemoveBlankPagesTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose PDF' }));
    const process = await screen.findByRole('button', { name: en.tools.removeBlankPages.removeButton });
    await user.click(process);
    expect(await screen.findByRole('alert')).toHaveTextContent('Local processing failed');
    expect(screen.getByRole('button', { name: /^Page 1:/ })).toHaveAttribute('aria-pressed', 'true');
    expect(process).toBeEnabled();
    await user.click(process);
    await screen.findByRole('button', { name: 'Download PDF' });
    expect(screen.queryByRole('alert')).toBeNull();
    await act(async () => user.click(screen.getByRole('button', { name: en.common.removeBlankPages.processNew })));
    expect(screen.getByRole('button', { name: 'Choose PDF' })).toBeEnabled();
  });
});
