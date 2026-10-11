import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { BookmarkTool } from '@/components/tools/bookmark/BookmarkTool';
import { OCGManagerTool } from '@/components/tools/ocg-manager/OCGManagerTool';

const { outline, manageLayers, listLayers } = vi.hoisted(() => ({ outline: vi.fn(), manageLayers: vi.fn(), listLayers: vi.fn() }));
vi.mock('pdfjs-dist', () => ({ GlobalWorkerOptions: { workerSrc: 'fixture' }, getDocument: () => ({ promise: Promise.resolve({ numPages: 1, getOutline: outline, getPage: async () => ({}) }) }) }));
vi.mock('@/lib/pdf/loader', () => ({ configurePdfjsWorker: vi.fn() }));
vi.mock('@/lib/pdf/processors/bookmark', () => ({ processBookmarks: vi.fn() }));
vi.mock('@/lib/pdf/processors/ocg-manager', () => ({ manageOCGLayers: manageLayers, listOCGLayers: listLayers }));
const file = new File(['fixture'], 'source.pdf', { type: 'application/pdf' });
Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(0) });
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected(files: File[]): void; disabled: boolean; label: string }) => <button disabled={props.disabled} onClick={() => props.onFilesSelected([file])}>{props.label}</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: () => <button>Download fixture</button> }));

beforeEach(() => {
  vi.clearAllMocks();
  outline.mockReset().mockResolvedValue([{ title: 'Original bookmark', items: [] }]);
  listLayers.mockResolvedValue({ layers: [{ id: 'art', name: 'Artwork', visible: true }, { id: 'text', name: 'Text', visible: true }] });
  manageLayers.mockReset().mockResolvedValue({ success: true, result: new Blob(['fixture']) });
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
});

function wrap(component: React.ReactNode, locale: string, messages: typeof en | typeof ar) {
  const intlError = vi.fn();
  render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}>{component}</NextIntlClientProvider>);
  return intlError;
}

describe('Standard confirmation dialogs', () => {
  it.each([['en', en], ['ar', ar]] as const)('confirms or cancels bookmark replacement and restores keyboard focus (%s)', async (locale, messages) => {
    const user = userEvent.setup(), intlError = wrap(<BookmarkTool />, locale, messages);
    await user.click(screen.getByRole('button', { name: messages.tools.bookmark.uploadLabel }));
    await screen.findByText('Original bookmark');
    const extract = screen.getByRole('button', { name: messages.tools.bookmark.extractExisting });
    extract.focus(); await user.keyboard('{Enter}');
    const dialog = await screen.findByRole('alertdialog', { name: messages.tools.bookmark.extractExisting });
    expect(dialog).toHaveTextContent(messages.tools.bookmark.replaceConfirm);
    expect(outline).toHaveBeenCalledTimes(1);
    await user.click(within(dialog).getByRole('button', { name: messages.common.buttons.cancel }));
    await waitFor(() => expect(extract).toHaveFocus());
    expect(outline).toHaveBeenCalledTimes(1); expect(screen.getByText('Original bookmark')).toBeInTheDocument();
    outline.mockResolvedValueOnce([{ title: 'Replacement bookmark', items: [] }]);
    await user.keyboard('{Enter}');
    await user.click(within(await screen.findByRole('alertdialog')).getByRole('button', { name: messages.common.buttons.confirm }));
    await screen.findByText('Replacement bookmark');
    await waitFor(() => expect(extract).toHaveFocus());
    expect(screen.queryByText('Original bookmark')).toBeNull();
    expect(outline).toHaveBeenCalledTimes(2); expect(intlError).not.toHaveBeenCalled();
  });

  it('retains bookmark edits and the confirmation after failure, allowing retry and an empty-outline notice', async () => {
    const user = userEvent.setup(); wrap(<BookmarkTool />, 'en', en);
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.uploadLabel })); await screen.findByText('Original bookmark');
    outline.mockRejectedValueOnce(new Error('Extraction failed'));
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.extractExisting }));
    await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: en.common.buttons.confirm }));
    expect(await screen.findByRole('alert')).toHaveTextContent(en.tools.bookmark.failedExtract);
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    outline.mockResolvedValueOnce([]);
    await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: en.common.buttons.confirm }));
    await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull());
    expect(screen.getByText('Original bookmark')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent(en.tools.bookmark.noBookmarksFound);
  });

  it.each([['en', en], ['ar', ar]] as const)('requires confirmation for a layer deletion and restores focus after cancel or success (%s)', async (locale, messages) => {
    const user = userEvent.setup(), intlError = wrap(<OCGManagerTool />, locale, messages);
    await user.click(screen.getByRole('button', { name: messages.tools.ocgManager.uploadLabel }));
    const trigger = await screen.findByRole('button', { name: `${messages.common.buttons.delete} Artwork` });
    trigger.focus(); await user.keyboard('{Enter}');
    const dialog = screen.getByRole('alertdialog', { name: messages.common.buttons.delete });
    expect(dialog).toHaveTextContent(messages.tools.ocgManager.deleteConfirm.replace('{name}', 'Artwork'));
    expect(manageLayers).not.toHaveBeenCalled();
    await user.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(manageLayers).not.toHaveBeenCalled();
    await user.keyboard('{Enter}');
    await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: messages.common.buttons.delete }));
    await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull());
    expect(manageLayers).toHaveBeenCalledTimes(1);
    expect(manageLayers).toHaveBeenCalledWith(file, { action: 'delete', layerId: 'art' }, expect.any(Function));
    expect(screen.queryByText('Artwork')).toBeNull(); expect(screen.getByText('Text')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole('textbox', { name: messages.tools.ocgManager.addLayerLabel })).toHaveFocus());
    expect(intlError).not.toHaveBeenCalled();
  });

  it('prevents repeat deletion or dismissal while pending, and retains the layer on failure for retry', async () => {
    let finish!: (result: { success: boolean; error: { message: string } }) => void;
    manageLayers.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
    const user = userEvent.setup(); wrap(<OCGManagerTool />, 'en', en);
    await user.click(screen.getByRole('button', { name: en.tools.ocgManager.uploadLabel }));
    await user.click(await screen.findByRole('button', { name: 'Delete Artwork' }));
    const dialog = screen.getByRole('alertdialog'), confirm = within(dialog).getByRole('button', { name: 'Delete' });
    await user.click(confirm); expect(confirm).toBeDisabled();
    expect(within(dialog).getByRole('button', { name: 'Cancel' })).toBeDisabled();
    await user.keyboard('{Escape}'); await user.click(confirm);
    expect(screen.getByRole('alertdialog')).toBeInTheDocument(); expect(manageLayers).toHaveBeenCalledTimes(1);
    await act(async () => finish({ success: false, error: { message: 'Delete failed' } }));
    expect(within(dialog).getByRole('alert')).toHaveTextContent('Delete failed'); expect(confirm).toBeEnabled();
    await user.click(confirm); await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull());
    expect(manageLayers).toHaveBeenCalledTimes(2); expect(screen.queryByText('Artwork')).toBeNull();
  });
});
