import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PDFToCBZTool } from '@/components/tools/pdf-to-cbz/PDFToCBZTool';
import { pdfToCbz } from '@/lib/pdf/processors/pdf-to-cbz';
import type { ProcessOutput } from '@/types/pdf';

const { load } = vi.hoisted(() => ({ load: vi.fn<() => Promise<{ getPageCount: () => number }>>() }));
const download = vi.fn();
let uploadQueue: File[][];
const makeFile = (name: string) => {
  const file = new File(['%PDF-1.4'], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(8) });
  return file;
};
vi.mock('pdf-lib', () => ({ PDFDocument: { load } }));
vi.mock('@/lib/pdf/processors/pdf-to-cbz', () => ({ pdfToCbz: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected, disabled }: { onFilesSelected: (files: File[]) => void; disabled: boolean }) => <button disabled={disabled} onClick={() => onFilesSelected(uploadQueue.shift()!)}>Choose comic PDF</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download CBZ</button>; } }));

beforeEach(() => {
  vi.clearAllMocks();
  load.mockReset().mockResolvedValue({ getPageCount: () => 2 });
  vi.mocked(pdfToCbz).mockReset().mockResolvedValue({ success: true, result: new Blob(['comic archive'], { type: 'application/zip' }) });
  uploadQueue = [[makeFile('comic.pdf')]];
});

describe('Comic exporter workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('keeps metadata, reading order and image options accessible by keyboard (%s)', async (locale, messages) => {
    const user = userEvent.setup();
    const intlError = vi.fn();
    const source = uploadQueue[0][0];
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><PDFToCBZTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose comic PDF' }));
    const preview = await screen.findByRole('region', { name: messages.common.pdfToCbz.previewTitle });
    expect(preview).toHaveTextContent('comic');
    for (const [label, value] of [
      ['fieldTitle', 'Comic title'], ['fieldSeries', 'Comic series'], ['fieldIssue', '7'], ['fieldVolume', '3'],
      ['fieldArtist', 'Example writer'], ['fieldPublisher', 'Example publisher'], ['fieldGenre', 'Adventure'],
    ] as const) {
      const input = screen.getByRole('textbox', { name: messages.common.pdfToCbz[label] });
      await user.clear(input);
      await user.type(input, value);
    }
    await user.selectOptions(screen.getByRole('combobox', { name: messages.common.pdfToCbz.readingOrderLabel }), 'YesAndRightToLeft');
    expect(preview).toHaveTextContent(messages.common.pdfToCbz.readingOrderRtl);
    expect(preview).toHaveTextContent('Example writer');
    const grayscale = screen.getByRole('switch', { name: messages.common.pdfToCbz.einkGreyscale });
    expect(grayscale).toHaveAccessibleDescription(messages.common.pdfToCbz.einkGreyscaleDesc);
    grayscale.focus();
    await user.keyboard(' ');
    expect(grayscale).toBeChecked();
    const formatGroup = screen.getByRole('group', { name: messages.common.pdfToCbz.formatLabel });
    const png = within(formatGroup).getByRole('button', { name: 'PNG' });
    png.focus();
    await user.keyboard('{Enter}');
    expect(png).toHaveAttribute('aria-pressed', 'true');
    const quality = screen.getByRole('slider', { name: messages.common.pdfToCbz.qualityLabel });
    quality.focus();
    await user.keyboard('{ArrowUp}');
    expect(quality).toHaveAttribute('aria-valuetext', '90%');
    const scale = screen.getByRole('slider', { name: messages.common.pdfToCbz.scaleLabel });
    scale.focus();
    await user.keyboard('{ArrowUp}');
    const process = screen.getByRole('button', { name: messages.common.pdfToCbz.processButton });
    process.focus();
    await user.keyboard('{Enter}');
    await screen.findByRole('button', { name: 'Download CBZ' });
    expect(pdfToCbz).toHaveBeenCalledWith(source, { title: 'Comic title', series: 'Comic series', number: '7', volume: '3', writer: 'Example writer', publisher: 'Example publisher', genre: 'Adventure', manga: 'YesAndRightToLeft', grayscale: true, format: 'png', quality: 0.9, scale: 1.6 }, expect.any(Function));
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: expect.any(Blob), filename: 'comic.cbz' }));
    await user.click(screen.getByRole('button', { name: `${messages.common.buttons.remove}: comic.pdf` }));
    expect(screen.queryByRole('region')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Download CBZ' })).toBeNull();
    expect(intlError).not.toHaveBeenCalled();
  });

  it('ignores metadata from a removed file after a newer PDF is selected', async () => {
    let finishMetadata!: (value: { getPageCount: () => number }) => void;
    load.mockImplementationOnce(() => new Promise(resolve => { finishMetadata = resolve; }));
    uploadQueue.push([makeFile('newer.pdf')]);
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={en}><PDFToCBZTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose comic PDF' }));
    await waitFor(() => expect(load).toHaveBeenCalledOnce());
    await user.click(screen.getByRole('button', { name: 'Remove: comic.pdf' }));
    await user.click(screen.getByRole('button', { name: 'Choose comic PDF' }));
    const preview = await screen.findByRole('region', { name: en.common.pdfToCbz.previewTitle });
    expect(preview).toHaveTextContent('newer');
    await act(async () => finishMetadata({ getPageCount: () => 99 }));
    expect(screen.getByText('2 page(s) • 0.00 MB')).toBeInTheDocument();
    expect(screen.queryByText(/99 page/)).toBeNull();
  });

  it('discards late output from a cancelled conversion while a replacement remains pending', async () => {
    const completions: Array<(output: ProcessOutput) => void> = [];
    vi.mocked(pdfToCbz).mockImplementation(() => new Promise(resolve => { completions.push(resolve); }));
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={en}><PDFToCBZTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose comic PDF' }));
    const process = await screen.findByRole('button', { name: en.common.pdfToCbz.processButton });
    await user.click(process);
    expect(screen.getByRole('switch', { name: en.common.pdfToCbz.einkGreyscale })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    await user.click(process);
    await act(async () => completions[0]({ success: true, result: new Blob(['old']) }));
    expect(process).toBeDisabled();
    expect(screen.queryByRole('button', { name: 'Download CBZ' })).toBeNull();
    const latest = new Blob(['latest']);
    await act(async () => completions[1]({ success: true, result: latest }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: latest })));
  });
});
