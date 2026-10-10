import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PassportIdComposerTool } from '@/components/tools/passport-id-composer/PassportIdComposerTool';
import { composePassportId } from '@/lib/pdf/processors/passport-id-composer';
import type { ProcessOutput } from '@/types/pdf';

const files = [new File(['front'], 'front.png', { type: 'image/png' }), new File(['back'], 'back.pdf', { type: 'application/pdf' })];
const download = vi.fn();
vi.mock('@/lib/pdf/processors/passport-id-composer', () => ({ composePassportId: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected, disabled }: { onFilesSelected: (files: File[]) => void; disabled: boolean }) => <button disabled={disabled} onClick={() => onFilesSelected(files)}>Choose ID files</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download PDF</button>; } }));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(composePassportId).mockResolvedValue({ success: true, result: new Blob(['composite'], { type: 'application/pdf' }) });
});

describe('ID composer workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('uses keyboard ordering and labeled settings without changing the composition contract (%s)', async (locale, messages) => {
    const user = userEvent.setup();
    const intlError = vi.fn();
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><PassportIdComposerTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose ID files' }));
    const move = screen.getByRole('button', { name: `${messages.common.buttons.moveDown}: front.png` });
    move.focus();
    await user.keyboard('{Enter}');
    const sides = screen.getAllByRole('listitem');
    expect(sides[0]).toHaveTextContent('back.pdf');
    expect(sides[0]).toHaveTextContent(messages.common.passportIdComposer.frontLabel);
    expect(sides[1]).toHaveTextContent('front.png');
    expect(sides[1]).toHaveTextContent(messages.common.passportIdComposer.backLabel);
    const watermark = screen.getByRole('textbox', { name: messages.common.passportIdComposer.watermarkLabel });
    await user.clear(watermark);
    await user.type(watermark, 'FOR TEST ONLY');
    const height = screen.getByRole('spinbutton', { name: messages.common.passportIdComposer.idCardHeightLabel });
    await user.clear(height);
    await user.type(height, '{Control>}a{/Control}160');
    const generate = screen.getByRole('button', { name: messages.common.passportIdComposer.processButton });
    generate.focus();
    await user.keyboard('{Enter}');
    await screen.findByRole('button', { name: 'Download PDF' });
    expect(composePassportId).toHaveBeenCalledWith([files[1], files[0]], { watermarkText: 'FOR TEST ONLY', layout: 'single-page', idCardWidth: 242.6, idCardHeight: 160 }, expect.any(Function));
    expect(download).toHaveBeenLastCalledWith(expect.objectContaining({ file: expect.any(Blob), filename: 'passport_id_composite.pdf' }));
    const remove = screen.getByRole('button', { name: `${messages.common.buttons.remove}: front.png` });
    remove.focus();
    await user.keyboard('{Enter}');
    expect(within(screen.getByRole('list')).getAllByRole('listitem')).toHaveLength(1);
    expect(screen.queryByRole('button', { name: 'Download PDF' })).toBeNull();
    expect(intlError).not.toHaveBeenCalled();
  });

  it('ignores a cancelled run after a replacement run starts, including late progress and output', async () => {
    const completions: Array<(output: ProcessOutput) => void> = [];
    vi.mocked(composePassportId).mockImplementation(() => new Promise<ProcessOutput>(resolve => { completions.push(resolve); }));
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={en}><PassportIdComposerTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose ID files' }));
    const generate = screen.getByRole('button', { name: en.common.passportIdComposer.processButton });
    await user.click(generate);
    expect(generate).toBeDisabled();
    expect(screen.getByRole('textbox', { name: en.common.passportIdComposer.watermarkLabel })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    await user.click(generate);
    act(() => vi.mocked(composePassportId).mock.calls[0][2]?.(88, 'Old run progress'));
    expect(screen.queryByText('Old run progress')).toBeNull();
    await act(async () => completions[0]({ success: true, result: new Blob(['old']) }));
    expect(generate).toBeDisabled();
    expect(screen.queryByRole('button', { name: 'Download PDF' })).toBeNull();
    const latest = new Blob(['latest']);
    await act(async () => completions[1]({ success: true, result: latest }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: latest })));
  });
});
