import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { BatchWatermarkRemoverTool } from '@/components/tools/batch-watermark-remover/BatchWatermarkRemoverTool';
import { removeBatchWatermarks } from '@/lib/pdf/processors/batch-watermark-remover';
import type { ProcessOutput } from '@/types/pdf';

const file = new File(['%PDF-1.4'], 'report.pdf', { type: 'application/pdf' });
const download = vi.fn();
vi.mock('@/lib/pdf/processors/batch-watermark-remover', () => ({ removeBatchWatermarks: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected, disabled }: { onFilesSelected: (files: File[]) => void; disabled: boolean }) => <button disabled={disabled} onClick={() => onFilesSelected([file])}>Choose watermarked PDF</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download PDF</button>; } }));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(removeBatchWatermarks).mockReset().mockResolvedValue({ success: true, result: new Blob(['cleaned']) });
});

describe('Watermark remover workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('labels the image-removal option correctly and preserves keyboard settings and output (%s)', async (locale, messages) => {
    const user = userEvent.setup();
    const intlError = vi.fn();
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><BatchWatermarkRemoverTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose watermarked PDF' }));
    const text = screen.getByRole('textbox', { name: messages.common.batchWatermarkRemover.watermarkKeywordsLabel });
    await user.clear(text);
    await user.type(text, 'COPY');
    const images = screen.getByRole('checkbox', { name: messages.common.batchWatermarkRemover.removeImagesLabel });
    expect(images).toHaveAccessibleDescription(messages.common.batchWatermarkRemover.removeImagesDescription);
    images.focus();
    await user.keyboard(' ');
    expect(images).toBeChecked();
    const process = screen.getByRole('button', { name: messages.common.batchWatermarkRemover.processButton });
    process.focus();
    await user.keyboard('{Enter}');
    await screen.findByRole('button', { name: 'Download PDF' });
    expect(removeBatchWatermarks).toHaveBeenCalledWith([file], { watermarkText: 'COPY', removeImages: true }, expect.any(Function));
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: expect.any(Blob), filename: 'report_watermark_scrubbed.pdf' }));
    await user.click(screen.getByRole('button', { name: messages.common.batchWatermarkRemover.clearButton }));
    expect(screen.queryByRole('button', { name: 'Download PDF' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Choose watermarked PDF' })).toBeEnabled();
    expect(intlError).not.toHaveBeenCalled();
  });

  it('ignores the cancelled run’s late progress and failure while a newer run is processing', async () => {
    let failOld!: (error: Error) => void;
    let completeNew!: (output: ProcessOutput) => void;
    vi.mocked(removeBatchWatermarks)
      .mockImplementationOnce(() => new Promise((_, reject) => { failOld = reject; }))
      .mockImplementationOnce(() => new Promise(resolve => { completeNew = resolve; }));
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={en}><BatchWatermarkRemoverTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose watermarked PDF' }));
    const process = screen.getByRole('button', { name: en.common.batchWatermarkRemover.processButton });
    await user.click(process);
    expect(screen.getByRole('checkbox', { name: en.common.batchWatermarkRemover.removeImagesLabel })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    await user.click(process);
    act(() => vi.mocked(removeBatchWatermarks).mock.calls[0][2]?.(90, 'Old run progress'));
    await act(async () => failOld(new Error('Old run failed')));
    expect(screen.queryByText('Old run progress')).toBeNull();
    expect(screen.queryByText('Old run failed')).toBeNull();
    expect(process).toBeDisabled();
    const latest = new Blob(['latest cleaned PDF']);
    await act(async () => completeNew({ success: true, result: latest }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: latest })));
  });
});
