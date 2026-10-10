import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { HandwritingInkContrastBoosterTool } from '@/components/tools/handwriting-ink-contrast-booster/HandwritingInkContrastBoosterTool';
import { boostHandwritingInkContrast } from '@/lib/pdf/processors/handwriting-ink-contrast-booster';
import type { ProcessOutput } from '@/types/pdf';

let selectedFile: File;
const download = vi.fn();
vi.mock('@/lib/pdf/processors/handwriting-ink-contrast-booster', () => ({ boostHandwritingInkContrast: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string }) =>
  <button onClick={() => props.onFilesSelected([selectedFile])}>{props.label}</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download enhanced image</button>; } }));

beforeEach(() => {
  vi.clearAllMocks();
  selectedFile = new File(['image preview contract'], 'signature.jpg', { type: 'image/jpeg' });
  vi.mocked(boostHandwritingInkContrast).mockReset().mockResolvedValue({ success: true, result: new Blob(['enhanced']), filename: 'signature_stamp_boosted.png' });
  let count = 0;
  vi.spyOn(URL, 'createObjectURL').mockImplementation(() => `blob:ink-preview-${++count}`);
  vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});
});
afterEach(() => vi.restoreAllMocks());
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); const view = render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><HandwritingInkContrastBoosterTool /></NextIntlClientProvider>);
  return { ...view, intlError };
}

describe('Handwriting contrast workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('uses the selected image, keyboard sliders and actual result filename (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.handwritingInkContrastBooster, { intlError } = wrap(locale, messages);
    await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const image = await screen.findByRole('img', { name: t.magnifierTitle });
    expect(image).toHaveAttribute('src', 'blob:ink-preview-1'); expect(URL.createObjectURL).toHaveBeenCalledWith(selectedFile);
    await user.selectOptions(screen.getByRole('combobox', { name: t.targetTypeLabel }), 'red-stamp');
    const [threshold, contrast] = screen.getAllByRole('slider');
    expect(threshold).toHaveAccessibleName(`${t.bleachThreshold} 200`); expect(contrast).toHaveAccessibleName(`${t.strokeContrast} 1.5×`);
    act(() => threshold.focus()); await user.keyboard('{End}'); expect(threshold).toHaveAttribute('aria-valuenow', '245');
    await user.keyboard('{Home}'); expect(threshold).toHaveAttribute('aria-valuenow', '100');
    act(() => contrast.focus()); await user.keyboard('{ArrowUp}'); expect(contrast).toHaveAttribute('aria-valuenow', '1.6');
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download enhanced image' });
    expect(boostHandwritingInkContrast).toHaveBeenCalledWith([selectedFile], { threshold: 100, contrast: 1.6, inkType: 'red-stamp' }, expect.any(Function));
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ filename: 'signature_stamp_boosted.png' }));
    expect(await screen.findByRole('img', { name: t.resultTitle })).toHaveAttribute('src', 'blob:ink-preview-2');
    expect(screen.getByRole('status')).toHaveTextContent(t.successMessage); expect(intlError).not.toHaveBeenCalled();
    await user.selectOptions(screen.getByRole('combobox', { name: t.targetTypeLabel }), 'dark-ink');
    expect(screen.queryByRole('region', { name: t.resultTitle })).toBeNull(); expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:ink-preview-2');
    expect(screen.getByRole('img', { name: t.magnifierTitle })).toHaveAttribute('src', 'blob:ink-preview-1');
    await user.click(screen.getByRole('button', { name: t.clearButton }));
    expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:ink-preview-1'); expect(screen.getByRole('button', { name: t.uploadLabel })).toBeEnabled();
  });

  it('disables settings during processing, reports failure and permits retry', async () => {
    let fail!: (error: Error) => void;
    vi.mocked(boostHandwritingInkContrast).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), t = en.common.handwritingInkContrastBooster; wrap();
    await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton }); await user.click(process);
    expect(process).toBeDisabled(); expect(screen.getByRole('combobox')).toBeDisabled(); expect(screen.getByRole('button', { name: t.clearButton })).toBeDisabled();
    for (const slider of screen.getAllByRole('slider')) expect(slider).toHaveAttribute('data-disabled');
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    act(() => vi.mocked(boostHandwritingInkContrast).mock.calls[0][2]?.(60, 'Enhancing fixture')); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '60');
    await act(async () => fail(new Error('Enhancement failed'))); expect(screen.getByRole('alert')).toHaveTextContent('Enhancement failed'); expect(process).toBeEnabled();
    await user.click(process); await screen.findByRole('button', { name: 'Download enhanced image' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s and its progress after a newer run starts', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(boostHandwritingInkContrast).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), t = en.common.handwritingInkContrastBooster; wrap();
    await user.click(screen.getByRole('button', { name: t.uploadLabel }));
    const process = screen.getByRole('button', { name: t.processButton });
    await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(boostHandwritingInkContrast).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']) }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(URL.createObjectURL).toHaveBeenCalledTimes(1); expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled();
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.png' }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.png' })));
    expect(URL.createObjectURL).toHaveBeenCalledWith(result);
  });

  it('releases both image URLs when the workspace unmounts', async () => {
    const user = userEvent.setup(), t = en.common.handwritingInkContrastBooster, { unmount } = wrap();
    await user.click(screen.getByRole('button', { name: t.uploadLabel })); await user.click(screen.getByRole('button', { name: t.processButton }));
    await screen.findByRole('img', { name: t.resultTitle }); unmount();
    expect(URL.revokeObjectURL).toHaveBeenCalledTimes(2); expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:ink-preview-1'); expect(URL.revokeObjectURL).toHaveBeenCalledWith('blob:ink-preview-2');
  });
});
