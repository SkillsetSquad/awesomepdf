import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { BookmarkTool } from '@/components/tools/bookmark/BookmarkTool';
import { createFileFixture } from '@/__tests__/helpers/file-fixture';
import type { ProcessOutput } from '@/types/pdf';

const { getDocument, getOutline, processBookmarks } = vi.hoisted(() => ({
  getDocument: vi.fn(), getOutline: vi.fn(), processBookmarks: vi.fn(),
}));
vi.mock('pdfjs-dist', () => ({ GlobalWorkerOptions: { workerSrc: 'fixture' }, getDocument }));
vi.mock('@/lib/pdf/loader', () => ({ configurePdfjsWorker: vi.fn() }));
vi.mock('@/lib/pdf/processors/bookmark', () => ({ processBookmarks }));
const sourceFile = createFileFixture('source.pdf', 10, 'application/pdf');
vi.mock('@/components/tools/FileUploader', () => ({
  FileUploader: (props: { onFilesSelected(files: File[]): void; label: string; disabled: boolean }) =>
    <button disabled={props.disabled} onClick={() => props.onFilesSelected([sourceFile])}>{props.label}</button>,
}));
vi.mock('@/components/tools/DownloadButton', () => ({
  DownloadButton: (props: { file: Blob; filename: string }) => <button data-filename={props.filename}>Download {props.file.size}</button>,
}));

const tree = [{ title: 'Chapter', items: [{ title: 'Section', items: [{ title: 'Subsection', items: [] }] }] }];
const doc = { numPages: 3, getOutline, getPage: async () => ({}), getPageIndex: async (ref: { num: number }) => ref.num - 1 };
const success: ProcessOutput = { success: true, result: new Blob(['output'], { type: 'application/pdf' }) };

beforeEach(() => {
  vi.clearAllMocks();
  getDocument.mockReset().mockReturnValue({ promise: Promise.resolve(doc) });
  getOutline.mockReset().mockResolvedValue(tree);
  processBookmarks.mockReset().mockResolvedValue(success);
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
});

function renderTool(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn();
  render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><BookmarkTool /></NextIntlClientProvider>);
  return intlError;
}

async function upload(user: ReturnType<typeof userEvent.setup>, messages: typeof en | typeof ar = en) {
  await user.click(screen.getByRole('button', { name: messages.tools.bookmark.uploadLabel }));
  await screen.findByText('Subsection');
}

async function removeAll(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: en.tools.bookmark.removeAll }));
  await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: en.tools.bookmark.removeAll }));
  await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull());
}

describe('Remove all bookmarks', () => {
  it.each([['en', en], ['ar', ar]] as const)('confirms nested removal, preserves drafts on cancellation, and restores focus (%s)', async (locale, messages) => {
    const user = userEvent.setup(), intlError = renderTool(locale, messages);
    await upload(user, messages);
    await user.click(screen.getAllByRole('button', { name: messages.common.buttons.edit })[0]);
    const title = screen.getByRole('textbox', { name: messages.tools.bookmark.title });
    await user.clear(title); await user.type(title, 'Unsaved chapter');
    const remove = screen.getByRole('button', { name: messages.tools.bookmark.removeAll });
    remove.focus(); await user.keyboard('{Enter}');
    const dialog = screen.getByRole('alertdialog');
    expect(dialog).toHaveAccessibleName(messages.tools.bookmark.removeAll);
    expect(dialog).toHaveAccessibleDescription(messages.tools.bookmark.removeAllConfirm);
    expect(within(dialog).getByRole('button', { name: messages.common.buttons.cancel })).toHaveFocus();
    await user.keyboard('{Escape}');
    await waitFor(() => expect(remove).toHaveFocus());
    expect(title).toHaveValue('Unsaved chapter');
    expect(screen.getByText('Subsection')).toBeInTheDocument();
    await user.keyboard('{Enter}');
    await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: messages.common.buttons.cancel }));
    await waitFor(() => expect(remove).toHaveFocus());
    expect(title).toHaveValue('Unsaved chapter');
    await user.keyboard('{Enter}');
    await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: messages.tools.bookmark.removeAll }));
    await waitFor(() => expect(screen.getByRole('button', { name: messages.tools.bookmark.saveButton })).toHaveFocus());
    expect(screen.queryByRole('textbox', { name: messages.tools.bookmark.title })).toBeNull();
    expect(screen.queryByText('Section')).toBeNull(); expect(screen.queryByText('Subsection')).toBeNull();
    expect(remove).toBeDisabled();
    expect(screen.getByRole('status')).toHaveTextContent(messages.tools.bookmark.removedAllNotice);
    expect(processBookmarks).not.toHaveBeenCalled(); expect(intlError).not.toHaveBeenCalled();
  });

  it('invalidates the previous download, exports an empty list, and permits retry after failure', async () => {
    const user = userEvent.setup(); renderTool(); await upload(user);
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton }));
    await screen.findByRole('button', { name: 'Download 6' });
    await removeAll(user);
    expect(screen.queryByRole('button', { name: /Download/ })).toBeNull();
    processBookmarks.mockResolvedValueOnce({ success: false, error: { message: 'Save failed' } });
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton }));
    expect(await screen.findByRole('alert')).toHaveTextContent('Save failed');
    expect(screen.getByRole('button', { name: en.tools.bookmark.saveButton })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton }));
    expect(await screen.findByRole('button', { name: 'Download 6' })).toHaveAttribute('data-filename', 'source_bookmarked.pdf');
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, { action: 'add', bookmarks: [] }, expect.any(Function));
    expect(screen.queryByRole('alert')).toBeNull();
    expect(screen.queryByText(en.tools.bookmark.removedAllNotice)).toBeNull();
    expect(screen.getByRole('status')).toHaveTextContent(en.tools.bookmark.successMessage);
  });

  it('disables removal and saving until loading and extraction complete', async () => {
    let finishLoad!: (value: typeof doc) => void;
    let finishOutline!: (value: typeof tree) => void;
    getDocument.mockReturnValueOnce({ promise: new Promise(resolve => { finishLoad = resolve; }) });
    getOutline.mockReturnValueOnce(new Promise(resolve => { finishOutline = resolve; }));
    const user = userEvent.setup(); renderTool();
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.uploadLabel }));
    expect(screen.queryByRole('button', { name: en.tools.bookmark.removeAll })).toBeNull();
    expect(screen.queryByRole('button', { name: en.tools.bookmark.saveButton })).toBeNull();
    await act(async () => finishLoad(doc));
    expect(screen.getByRole('button', { name: en.tools.bookmark.removeAll })).toBeDisabled();
    expect(screen.getByRole('button', { name: en.tools.bookmark.saveButton })).toBeDisabled();
    await act(async () => finishOutline(tree));
    expect(screen.getByRole('button', { name: en.tools.bookmark.removeAll })).toBeEnabled();
    expect(screen.getByRole('button', { name: en.tools.bookmark.saveButton })).toBeEnabled();
  });

  it('disables removal and editing during export and ignores a cancelled export after a retry', async () => {
    let finish!: (value: ProcessOutput) => void;
    processBookmarks.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
    const user = userEvent.setup(); renderTool(); await upload(user);
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton }));
    expect(screen.getByRole('button', { name: en.tools.bookmark.removeAll })).toBeDisabled();
    expect(screen.getByRole('button', { name: /Add Bookmark/ })).toBeDisabled();
    for (const edit of screen.getAllByRole('button', { name: 'Edit' })) expect(edit).toBeDisabled();
    await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    await removeAll(user);
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton }));
    await screen.findByRole('button', { name: 'Download 6' });
    await act(async () => finish({ success: true, result: new Blob(['stale output']) }));
    expect(screen.queryByRole('button', { name: 'Download 12' })).toBeNull();
    expect(screen.getByRole('button', { name: 'Download 6' })).toBeInTheDocument();
  });

  it('disables removal while extracting a replacement outline', async () => {
    let finish!: (value: typeof tree) => void;
    const user = userEvent.setup(); renderTool(); await upload(user);
    const remove = screen.getByRole('button', { name: en.tools.bookmark.removeAll });
    const save = screen.getByRole('button', { name: en.tools.bookmark.saveButton });
    getOutline.mockReturnValueOnce(new Promise(resolve => { finish = resolve; }));
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.extractExisting }));
    await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: en.common.buttons.confirm }));
    expect(remove).toBeDisabled(); expect(save).toBeDisabled();
    await act(async () => finish(tree));
    await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull());
    expect(remove).toBeEnabled(); expect(save).toBeEnabled();
  });

  it('allows saving a PDF without bookmarks and after deleting the final bookmark individually', async () => {
    getOutline.mockResolvedValueOnce(null);
    const user = userEvent.setup(); renderTool();
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.uploadLabel }));
    const save = await screen.findByRole('button', { name: en.tools.bookmark.saveButton });
    await waitFor(() => expect(save).toBeEnabled());
    expect(screen.getByRole('button', { name: en.tools.bookmark.removeAll })).toBeDisabled();
    await user.click(save);
    await screen.findByRole('button', { name: 'Download 6' });
    await user.click(screen.getByRole('button', { name: /Add Bookmark/ }));
    await user.click(screen.getByRole('button', { name: en.common.buttons.save }));
    await user.click(screen.getByRole('button', { name: 'Delete' }));
    expect(save).toBeEnabled();
    await user.click(save);
    await screen.findByRole('button', { name: 'Download 6' });
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, { action: 'add', bookmarks: [] }, expect.any(Function));
  });

  it('supports adding new bookmarks after removal and restoring the original outline', async () => {
    const user = userEvent.setup(); renderTool(); await upload(user);
    await removeAll(user);
    await user.click(screen.getByRole('button', { name: /Add Bookmark/ }));
    const title = screen.getByRole('textbox', { name: en.tools.bookmark.title });
    expect(title).toHaveValue('New Bookmark (Page 1)');
    await user.clear(title); await user.type(title, 'Replacement');
    await user.click(screen.getByRole('button', { name: en.common.buttons.save }));
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton }));
    await screen.findByRole('button', { name: 'Download 6' });
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, {
      action: 'add', bookmarks: [expect.objectContaining({ title: 'Replacement', children: undefined })],
    }, expect.any(Function));
    await removeAll(user);
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.extractExisting }));
    await screen.findByText('Subsection');
    expect(screen.queryByText(en.tools.bookmark.removedAllNotice)).toBeNull();
  });
});

const positionTree = [
  { title: 'Chapter', dest: [{ num: 1 }], bold: true, color: [18, 52, 86], items: [
    { title: 'Section', dest: [{ num: 2 }], items: [{ title: 'Subsection', dest: [{ num: 2 }], items: [] }] },
    { title: 'Another section', dest: [{ num: 3 }], items: [] },
  ] },
  { title: 'Tail', dest: [{ num: 3 }], items: [] },
];

function bookmarkRow(title: string) {
  const row = screen.getByRole('button', { name: title }).closest('[data-bookmark-row]');
  if (!(row instanceof HTMLDivElement)) throw new Error('Expected a bookmark row');
  return row;
}

function nativeDrag(target: HTMLElement, type: 'dragstart' | 'dragover' | 'drop' | 'dragend', y = 120) {
  const event = new MouseEvent(type, { bubbles: true, cancelable: true, clientX: 100, clientY: y });
  Object.defineProperty(event, 'dataTransfer', { value: { setData: vi.fn(), effectAllowed: 'none', dropEffect: 'none' } });
  fireEvent(target, event);
}

async function nameNewBookmark(user: ReturnType<typeof userEvent.setup>, title: string, messages: typeof en | typeof ar = en) {
  const field = screen.getByRole('textbox', { name: messages.tools.bookmark.title });
  expect(field).toHaveFocus();
  await user.clear(field); await user.type(field, title);
  await user.click(screen.getByRole('button', { name: messages.common.buttons.save }));
}

describe('Bookmark insertion and repositioning', () => {
  it.each([['en', en], ['ar', ar]] as const)('inserts repeatedly after a keyboard-selected nested entry at the previewed page (%s)', async (locale, messages) => {
    getOutline.mockResolvedValueOnce(positionTree);
    const user = userEvent.setup(), intlError = renderTool(locale, messages); await upload(user, messages);
    const section = screen.getByRole('button', { name: 'Section' });
    section.focus(); await user.keyboard('{Enter}'); expect(section).toHaveAttribute('aria-pressed', 'true');
    await user.click(screen.getByRole('button', { name: new RegExp(messages.common.buttons.next) }));
    await user.click(screen.getByRole('button', { name: new RegExp(messages.tools.bookmark.addBookmark) }));
    expect(screen.getByRole('textbox', { name: messages.tools.bookmark.title })).toHaveValue(messages.tools.bookmark.newBookmarkTitle.replace('{page}', '3'));
    await nameNewBookmark(user, 'Inserted', messages);
    await user.click(screen.getByRole('button', { name: new RegExp(messages.tools.bookmark.addBookmark) }));
    await nameNewBookmark(user, 'Next inserted', messages);
    await user.click(screen.getByRole('button', { name: messages.tools.bookmark.saveButton }));
    await screen.findByRole('button', { name: 'Download 6' });
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, { action: 'add', bookmarks: [
      expect.objectContaining({ title: 'Chapter', children: [
        expect.objectContaining({ title: 'Section', children: [expect.objectContaining({ title: 'Subsection' })] }),
        expect.objectContaining({ title: 'Inserted', pageNumber: 3, children: undefined }),
        expect.objectContaining({ title: 'Next inserted', pageNumber: 3, children: undefined }),
        expect.objectContaining({ title: 'Another section' }),
      ] }), expect.objectContaining({ title: 'Tail' }),
    ] }, expect.any(Function));
    expect(intlError).not.toHaveBeenCalled();
  });

  it('inserts after a root selection and appends at the root without selection', async () => {
    getOutline.mockResolvedValueOnce(positionTree);
    const user = userEvent.setup(); renderTool(); await upload(user);
    await user.click(screen.getByRole('button', { name: /Add Bookmark/ })); await nameNewBookmark(user, 'At end');
    await user.click(screen.getByRole('button', { name: 'Chapter' }));
    await user.click(screen.getByRole('button', { name: /Add Bookmark/ })); await nameNewBookmark(user, 'After chapter');
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton })); await screen.findByRole('button', { name: 'Download 6' });
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, { action: 'add', bookmarks: [
      expect.objectContaining({ title: 'Chapter' }), expect.objectContaining({ title: 'After chapter' }),
      expect.objectContaining({ title: 'Tail' }), expect.objectContaining({ title: 'At end' }),
    ] }, expect.any(Function));
  });

  it.each([['en', en], ['ar', ar]] as const)('moves a subtree with the keyboard dialog, preserves drafts, and restores focus (%s)', async (locale, messages) => {
    getOutline.mockResolvedValueOnce(positionTree);
    const user = userEvent.setup(), intlError = renderTool(locale, messages); await upload(user, messages);
    const subsection = bookmarkRow('Subsection');
    await user.click(within(subsection).getByRole('button', { name: messages.common.buttons.edit }));
    const title = screen.getByRole('textbox', { name: messages.tools.bookmark.title });
    await user.clear(title); await user.type(title, 'Unsaved subsection');
    const grip = screen.getByRole('button', { name: messages.tools.bookmark.moveBookmarkNamed.replace('{title}', 'Chapter') });
    grip.focus(); await user.keyboard('{Enter}');
    let dialog = screen.getByRole('dialog', { name: messages.tools.bookmark.moveBookmark });
    const destination = within(dialog).getByRole('combobox', { name: messages.tools.bookmark.moveTarget });
    expect(within(destination).getAllByRole('option')).toHaveLength(1);
    expect(destination).toHaveFocus();
    await user.keyboard('{Escape}'); await waitFor(() => expect(grip).toHaveFocus());
    expect(title).toHaveValue('Unsaved subsection');
    await user.keyboard('{Enter}'); dialog = screen.getByRole('dialog');
    await user.selectOptions(within(dialog).getByRole('combobox', { name: messages.tools.bookmark.movePosition }), 'inside');
    await user.click(within(dialog).getByRole('button', { name: messages.tools.bookmark.moveButton }));
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    const movedGrip = screen.getByRole('button', { name: messages.tools.bookmark.moveBookmarkNamed.replace('{title}', 'Chapter') });
    await waitFor(() => expect(movedGrip).toHaveFocus());
    expect(screen.getByRole('textbox', { name: messages.tools.bookmark.title })).toHaveValue('Unsaved subsection');
    expect(screen.getByRole('status')).toHaveTextContent(messages.tools.bookmark.movedNotice.replace('{title}', 'Chapter'));
    expect(processBookmarks).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: messages.common.buttons.save }));
    expect(screen.getByRole('button', { name: 'Unsaved subsection' })).toHaveAttribute('aria-pressed', 'true');
    await user.click(screen.getByRole('button', { name: messages.tools.bookmark.saveButton })); await screen.findByRole('button', { name: 'Download 6' });
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, { action: 'add', bookmarks: [
      expect.objectContaining({ title: 'Tail', children: [expect.objectContaining({ title: 'Chapter', style: 'bold', color: '#123456', children: [
        expect.objectContaining({ title: 'Section', children: [expect.objectContaining({ title: 'Unsaved subsection' })] }), expect.objectContaining({ title: 'Another section' }),
      ] })] }),
    ] }, expect.any(Function));
    expect(intlError).not.toHaveBeenCalled();
  });

  it('uses the drop position instead of stale hover state and expands collapsed destinations', async () => {
    getOutline.mockResolvedValueOnce(positionTree);
    const user = userEvent.setup(); renderTool(); await upload(user);
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton })); await screen.findByRole('button', { name: 'Download 6' });
    const target = bookmarkRow('Tail');
    vi.spyOn(target, 'getBoundingClientRect').mockReturnValue({ top: 100, bottom: 140, left: 0, right: 200, width: 200, height: 40, x: 0, y: 100, toJSON: () => ({}) });
    const grip = screen.getByRole('button', { name: 'Move bookmark: Chapter' });
    expect(bookmarkRow('Chapter').draggable).toBe(false); expect(grip.draggable).toBe(true);
    nativeDrag(grip, 'dragstart'); nativeDrag(target, 'dragover', 120); nativeDrag(target, 'drop', 138);
    await waitFor(() => expect(screen.queryByRole('button', { name: /Download/ })).toBeNull());
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton })); await screen.findByRole('button', { name: 'Download 6' });
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, { action: 'add', bookmarks: [expect.objectContaining({ title: 'Tail', children: undefined }), expect.objectContaining({ title: 'Chapter', children: expect.any(Array) })] }, expect.any(Function));
    await user.click(screen.getByRole('button', { name: 'Collapse Chapter' }));
    const collapsed = bookmarkRow('Chapter');
    vi.spyOn(collapsed, 'getBoundingClientRect').mockReturnValue({ top: 100, bottom: 140, left: 0, right: 200, width: 200, height: 40, x: 0, y: 100, toJSON: () => ({}) });
    nativeDrag(screen.getByRole('button', { name: 'Move bookmark: Tail' }), 'dragstart'); nativeDrag(collapsed, 'drop', 120);
    expect(await screen.findByRole('button', { name: 'Subsection' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton })); await screen.findByRole('button', { name: 'Download 6' });
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, { action: 'add', bookmarks: [expect.objectContaining({ title: 'Chapter', expanded: true, children: [expect.objectContaining({ title: 'Section' }), expect.objectContaining({ title: 'Another section' }), expect.objectContaining({ title: 'Tail' })] })] }, expect.any(Function));
  });

  it('rejects self and descendant drops without losing bookmarks or invalidating the existing download', async () => {
    const user = userEvent.setup(); renderTool(); await upload(user);
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton })); await screen.findByRole('button', { name: 'Download 6' });
    for (const target of [bookmarkRow('Subsection'), bookmarkRow('Chapter')]) {
      nativeDrag(screen.getByRole('button', { name: 'Move bookmark: Chapter' }), 'dragstart');
      nativeDrag(target, 'dragover'); nativeDrag(target, 'drop');
      expect(screen.getByRole('button', { name: 'Download 6' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Subsection' })).toBeInTheDocument();
    }
  });

  it('clears selection and drafts after deleting an ancestor or extracting a new tree', async () => {
    getOutline.mockResolvedValue(positionTree);
    const user = userEvent.setup(); renderTool(); await upload(user);
    const child = bookmarkRow('Subsection'); await user.click(within(child).getByRole('button', { name: 'Edit' }));
    await user.click(within(bookmarkRow('Chapter')).getByRole('button', { name: 'Delete' }));
    expect(screen.queryByRole('textbox', { name: en.tools.bookmark.title })).toBeNull();
    await user.click(screen.getByRole('button', { name: /Add Bookmark/ })); await nameNewBookmark(user, 'At root');
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.extractExisting }));
    await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: en.common.buttons.confirm }));
    await screen.findByText('Subsection');
    await user.click(screen.getByRole('button', { name: /Add Bookmark/ })); await nameNewBookmark(user, 'After reset');
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton })); await screen.findByRole('button', { name: 'Download 6' });
    expect(processBookmarks).toHaveBeenLastCalledWith(sourceFile, { action: 'add', bookmarks: [expect.objectContaining({ title: 'Chapter' }), expect.objectContaining({ title: 'Tail' }), expect.objectContaining({ title: 'After reset' })] }, expect.any(Function));
  });

  it('disables movement during extraction/export and explains when no destination exists', async () => {
    const user = userEvent.setup(); renderTool(); await upload(user);
    await user.click(screen.getByRole('button', { name: 'Move bookmark: Chapter' }));
    const dialog = screen.getByRole('dialog'); expect(dialog).toHaveTextContent(en.tools.bookmark.noMoveTargets);
    expect(within(dialog).getByRole('button', { name: en.tools.bookmark.moveButton })).toBeDisabled();
    await user.click(within(dialog).getByRole('button', { name: en.common.buttons.cancel }));
    let finish!: (value: ProcessOutput) => void;
    processBookmarks.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.saveButton }));
    expect(screen.getByRole('button', { name: 'Move bookmark: Chapter' })).toBeDisabled();
    await act(async () => finish(success));
    let finishOutline!: (value: typeof tree) => void;
    getOutline.mockImplementationOnce(() => new Promise(resolve => { finishOutline = resolve; }));
    const grip = screen.getByRole('button', { name: 'Move bookmark: Chapter' });
    await user.click(screen.getByRole('button', { name: en.tools.bookmark.extractExisting }));
    await user.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: en.common.buttons.confirm }));
    expect(grip).toBeDisabled();
    await act(async () => finishOutline(tree));
    await waitFor(() => expect(screen.queryByRole('alertdialog')).toBeNull());
  });
});
