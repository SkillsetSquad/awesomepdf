import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { OCRPDFTool } from '@/components/tools/ocr/OCRPDFTool';
import { ocrPDF } from '@/lib/pdf/processors/ocr';
import type { OCROptions } from '@/lib/pdf/processors/ocr';
import type { ProcessOutput } from '@/types/pdf';

const { push, download, upload } = vi.hoisted(() => ({ push: vi.fn(), download: vi.fn(), upload: vi.fn() }));
let selectedFile: File;
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }) }));
vi.mock('@/lib/pdf/processors/ocr', async importOriginal => ({ ...(await importOriginal<typeof import('@/lib/pdf/processors/ocr')>()), ocrPDF: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string; accept: string[] }) => {
  upload(props); return <button onClick={() => props.onFilesSelected([selectedFile])}>{props.label}</button>;
} }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download OCR output</button>; } }));

const previewText = 'Recognized text\nالسطر الثاني';
function textBlob(text = previewText) {
  const blob = new Blob([text], { type: 'text/plain' });
  Object.defineProperty(blob, 'text', { value: async () => text });
  return blob;
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn();
  render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><OCRPDFTool /></NextIntlClientProvider>);
  return intlError;
}

beforeEach(() => {
  vi.clearAllMocks();
  selectedFile = new File(['image fixture'], 'scan.PNG', { type: 'image/png' });
  vi.mocked(ocrPDF).mockReset().mockResolvedValue({ success: true, result: textBlob(), metadata: { rawText: previewText } });
  sessionStorage.clear();
});
afterEach(() => {
  delete (window as Window & { __PDFCRAFT_PENDING_EDIT_FILE__?: File | null }).__PDFCRAFT_PENDING_EDIT_FILE__;
  Reflect.deleteProperty(document, 'execCommand');
});

describe('OCR settings and output workspace', () => {
  for (const [locale, messages] of [['en', en], ['ar', ar]] as const) {
    it.each(['searchable-pdf', 'text', 'markdown', 'json'] satisfies OCROptions['outputFormat'][])('preserves keyboard settings, %s output, preview and actions (' + locale + ')', async format => {
      let finish!: (output: ProcessOutput) => void;
      vi.mocked(ocrPDF).mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
      const user = userEvent.setup();
      const intlError = wrap(locale, messages);
      const t = messages.common.ocr;
      expect(upload).toHaveBeenCalledWith(expect.objectContaining({ accept: expect.arrayContaining(['application/pdf', 'image/png', 'image/jpeg', 'image/webp']), multiple: false }));
      await user.click(screen.getByRole('button', { name: messages.tools.ocrPdf.uploadLabel }));
      const languages = screen.getByRole('group', { name: t.selectLang });
      expect(within(languages).getAllByRole('button')).toHaveLength(11);
      const english = within(languages).getByRole('button', { name: 'English' });
      act(() => english.focus()); await user.keyboard(' ');
      expect(english).toHaveAttribute('aria-pressed', 'true');
      const german = within(languages).getByRole('button', { name: 'German' });
      act(() => german.focus()); await user.keyboard(' ');
      await user.click(english);
      expect(english).toHaveAttribute('aria-pressed', 'false');
      expect(german).toHaveAttribute('aria-pressed', 'true');
      const output = screen.getByRole('combobox', { name: t.outputFormat });
      expect(output).toHaveValue('searchable-pdf');
      expect(within(output).getAllByRole('option')).toHaveLength(4);
      await user.selectOptions(output, format);
      const scale = screen.getByRole('combobox', { name: t.accuracyTitle });
      expect(scale).toHaveValue('2');
      await user.selectOptions(scale, '3');
      await user.type(screen.getByRole('textbox', { name: t.specifyPages }), '3, 1-2, 2');
      const contrast = screen.getByRole('switch', { name: t.enhanceContrast });
      expect(contrast).toBeChecked();
      expect(contrast).toHaveAccessibleDescription(t.enhanceContrastDesc);
      act(() => contrast.focus()); await user.keyboard(' ');
      expect(contrast).not.toBeChecked();
      const process = screen.getByRole('button', { name: t.startOcr });
      act(() => process.focus()); await user.keyboard('{Enter}');
      expect(ocrPDF).toHaveBeenCalledWith(selectedFile, { languages: ['deu'], outputFormat: format, scale: 3, pages: [1, 2, 3], enhanceContrast: false }, expect.any(Function));
      expect(process).toBeDisabled(); expect(contrast).toBeDisabled(); expect(output).toBeDisabled(); expect(german).toBeDisabled();
      expect(screen.getByRole('button', { name: messages.common.buttons.cancel })).toBeEnabled();
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
      act(() => vi.mocked(ocrPDF).mock.calls[0][2]?.(45, 'Reading fixture'));
      expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '45');
      const result = textBlob();
      await act(async () => finish({ success: true, result, metadata: { rawText: previewText, pageCount: 3, totalWords: 0, totalChars: 0, avgConfidence: 0 } }));
      const preview = await screen.findByRole('region', { name: t.previewTitle });
      expect(preview).toHaveTextContent('Recognized text'); expect(preview).toHaveTextContent('السطر الثاني');
      const confidence = screen.getByText(t.statsConfidence).parentElement!;
      expect(within(confidence).getByRole('definition')).toHaveTextContent('0%');
      expect(within(screen.getByText(t.statsWords).parentElement!).getByRole('definition')).toHaveTextContent('0');
      const extension = { 'searchable-pdf': 'pdf', text: 'txt', markdown: 'md', json: 'json' }[format];
      expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: `scan_ocr.${extension}` }));
      const copy = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
      await user.click(within(preview).getByRole('button', { name: t.copyText }));
      expect(copy).toHaveBeenCalledWith(previewText);
      expect(within(preview).getByRole('status')).toHaveTextContent(t.copied);
      if (format === 'searchable-pdf') {
        await user.click(screen.getByRole('button', { name: t.openInEditor }));
        expect(push).toHaveBeenCalledWith(`/${locale}/tools/edit-pdf`);
        const pending = (window as Window & { __PDFCRAFT_PENDING_EDIT_FILE__?: File }).__PDFCRAFT_PENDING_EDIT_FILE__!;
        expect(pending.name).toBe('scan_ocr.pdf'); expect(pending.type).toBe('application/pdf'); expect(pending.size).toBe(result.size);
        await waitFor(() => expect(sessionStorage.getItem('pdfcraft_pending_edit_file')).toContain('scan_ocr.pdf'));
      } else expect(screen.queryByRole('button', { name: t.openInEditor })).toBeNull();
      expect(intlError).not.toHaveBeenCalled();
      await user.click(screen.getByRole('button', { name: messages.common.buttons.remove }));
      expect(screen.queryByRole('region', { name: t.previewTitle })).toBeNull();
      expect(screen.queryByText(t.statsPages)).toBeNull();
      expect(screen.getByRole('button', { name: messages.tools.ocrPdf.uploadLabel })).toBeEnabled();
    });
  }

  it('does not invent missing statistics or report successful copying when both copy methods fail', async () => {
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.tools.ocrPdf.uploadLabel }));
    await user.click(screen.getByRole('button', { name: en.common.ocr.startOcr }));
    const preview = await screen.findByRole('region', { name: en.common.ocr.previewTitle });
    for (const label of [en.common.ocr.statsPages, en.common.ocr.statsWords, en.common.ocr.statsChars, en.common.ocr.statsConfidence])
      expect(within(screen.getByText(label).parentElement!).getByRole('definition')).toHaveTextContent('—');
    vi.spyOn(navigator.clipboard, 'writeText').mockRejectedValue(new Error('Clipboard denied'));
    const fallback = vi.fn().mockReturnValue(false);
    Object.defineProperty(document, 'execCommand', { configurable: true, value: fallback });
    const copy = within(preview).getByRole('button', { name: en.common.ocr.copyText });
    await user.click(copy);
    expect(fallback).toHaveBeenCalledWith('copy');
    expect(await screen.findByRole('alert')).toHaveTextContent(en.common.ocr.copyFailed);
    expect(copy).toHaveFocus(); expect(screen.queryByText(en.common.ocr.copied)).toBeNull();
    expect(document.querySelector('textarea')).toBeNull();
    fallback.mockReturnValue(true);
    await user.click(copy);
    expect(within(preview).getByRole('status')).toHaveTextContent(en.common.ocr.copied);
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('keeps settings after failure and permits retry', async () => {
    vi.mocked(ocrPDF).mockRejectedValueOnce(new Error('Worker failed'));
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.tools.ocrPdf.uploadLabel }));
    const process = screen.getByRole('button', { name: en.common.ocr.startOcr });
    await user.selectOptions(screen.getByRole('combobox', { name: en.common.ocr.outputFormat }), 'text');
    await user.click(process);
    expect(await screen.findByRole('alert')).toHaveTextContent('Worker failed');
    expect(screen.getByRole('combobox', { name: en.common.ocr.outputFormat })).toHaveValue('text');
    await user.click(process);
    await screen.findByRole('button', { name: 'Download OCR output' });
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error', 'preview'] as const)('discards cancelled %s work after a newer OCR run starts', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void, finishText!: (text: string) => void;
    const oldResult = new Blob(['old']);
    Object.defineProperty(oldResult, 'text', { value: () => new Promise<string>(resolve => { finishText = resolve; }) });
    vi.mocked(ocrPDF)
      .mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; }))
      .mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.tools.ocrPdf.uploadLabel }));
    await user.selectOptions(screen.getByRole('combobox', { name: en.common.ocr.outputFormat }), 'text');
    const process = screen.getByRole('button', { name: en.common.ocr.startOcr });
    await user.click(process);
    if (outcome === 'preview') await act(async () => finishOld({ success: true, result: oldResult }));
    await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    await user.click(process);
    act(() => vi.mocked(ocrPDF).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => {
      if (outcome === 'result') finishOld({ success: true, result: oldResult });
      else if (outcome === 'error') failOld(new Error('Cancelled failure'));
      else finishText('Cancelled preview');
    });
    expect(screen.queryByRole('button', { name: 'Download OCR output' })).toBeNull();
    expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled failure')).toBeNull(); expect(screen.queryByText('Cancelled preview')).toBeNull();
    expect(process).toBeDisabled();
    const latest = textBlob('Current preview');
    await act(async () => finishNew({ success: true, result: latest }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: latest })));
    expect(screen.getByRole('region', { name: en.common.ocr.previewTitle })).toHaveTextContent('Current preview');
  });
});
