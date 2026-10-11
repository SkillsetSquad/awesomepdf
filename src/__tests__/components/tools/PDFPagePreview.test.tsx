import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PDFPagePreview } from '@/components/tools/PDFPagePreview';

const { loadPdfjs, getDocument } = vi.hoisted(() => ({ loadPdfjs: vi.fn(), getDocument: vi.fn() }));
vi.mock('@/lib/pdf/loader', () => ({ loadPdfjs }));
const drawImage = vi.fn();
function deferred<T>() {
  let resolve!: (value: T) => void, reject!: (error: Error) => void;
  const promise = new Promise<T>((success, failure) => { resolve = success; reject = failure; });
  return { promise, resolve, reject };
}
function source(bytes = [37, 80, 68, 70]) {
  const file = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
  return file;
}
function page(width = 1000, height = 2000, promise = Promise.resolve()) {
  const task = { promise, cancel: vi.fn() };
  return { getViewport: vi.fn(({ scale }: { scale: number }) => ({ width: width * scale, height: height * scale })), render: vi.fn<(options: { canvasContext: CanvasRenderingContext2D; viewport: { width: number; height: number } }) => typeof task>(() => task), cleanup: vi.fn(), task };
}
function documentFixture(pages = [page(), page(2000, 1000)]) {
  const pdf = { numPages: pages.length, getPage: vi.fn(async (number: number) => pages[number - 1]) };
  const task = { promise: Promise.resolve(pdf), destroy: vi.fn(async () => {}) };
  getDocument.mockReturnValueOnce(task);
  return { pages, pdf, task };
}
function view(file: Blob, locale = 'en', messages: typeof en | typeof ar = en, overlay = <span>Split marker</span>) {
  return <NextIntlClientProvider locale={locale} messages={messages}><PDFPagePreview file={file} label="Document preview" overlay={overlay} /></NextIntlClientProvider>;
}
beforeEach(() => {
  vi.clearAllMocks(); getDocument.mockReset(); loadPdfjs.mockReset().mockResolvedValue({ getDocument });
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({ drawImage } as unknown as CanvasRenderingContext2D);
});
afterEach(() => vi.restoreAllMocks());

describe('Local PDF page preview', () => {
  it.each([['en', en], ['ar', ar]] as const)('loads typed local bytes and supports bounded keyboard page navigation (%s)', async (locale, messages) => {
    const file = source(), fixture = documentFixture(), user = userEvent.setup();
    render(view(file, locale, messages));
    const first = await screen.findByRole('img', { name: 'Document preview: ' + messages.common.accessibility.pageOf.replace('{current}', '1').replace('{total}', '2') });
    expect(getDocument).toHaveBeenCalledWith({ data: new Uint8Array([37, 80, 68, 70]) });
    expect(first).toHaveAttribute('width', '400'); expect(first).toHaveAttribute('height', '800');
    expect(fixture.pages[0].getViewport.mock.calls).toEqual([[{ scale: 1 }], [{ scale: 0.4 }]]);
    expect(screen.getByText('Split marker')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: messages.common.buttons.previous })).toBeDisabled();
    const next = screen.getByRole('button', { name: messages.common.buttons.next }); act(() => next.focus()); await user.keyboard('{Enter}');
    const second = await screen.findByRole('img', { name: 'Document preview: ' + messages.common.accessibility.pageOf.replace('{current}', '2').replace('{total}', '2') });
    expect(second).toHaveAttribute('width', '600'); expect(second).toHaveAttribute('height', '300'); expect(next).toBeDisabled();
    await user.click(screen.getByRole('button', { name: messages.common.buttons.previous }));
    await waitFor(() => expect(fixture.pdf.getPage).toHaveBeenLastCalledWith(1));
    expect(getDocument).toHaveBeenCalledTimes(1);
  });

  it('updates the split overlay without reloading or rerendering the PDF and destroys the loading task on unmount', async () => {
    const file = source(), fixture = documentFixture(), { rerender, unmount } = render(view(file));
    await screen.findByRole('img'); rerender(view(file, 'en', en, <span>New split position</span>));
    expect(screen.getByText('New split position')).toBeInTheDocument(); expect(getDocument).toHaveBeenCalledTimes(1); expect(fixture.pages[0].render).toHaveBeenCalledTimes(1);
    unmount(); expect(fixture.task.destroy).toHaveBeenCalledTimes(1); expect(fixture.pages[0].cleanup).toHaveBeenCalledTimes(1);
  });

  it('cancels a previous render and prevents it from drawing over the current page', async () => {
    const oldRender = deferred<void>(), oldPage = page(1000, 2000, oldRender.promise), fixture = documentFixture([oldPage, page(2000, 1000)]), user = userEvent.setup();
    render(view(source())); await waitFor(() => expect(oldPage.render).toHaveBeenCalledTimes(1));
    const bitmap = oldPage.render.mock.calls[0][0] as unknown as { canvasContext: CanvasRenderingContext2D };
    expect(bitmap.canvasContext).toBeDefined(); expect(screen.queryByText('Split marker')).toBeNull();
    await user.click(screen.getByRole('button', { name: en.common.buttons.next })); await screen.findByRole('img', { name: 'Document preview: Page 2 of 2' });
    expect(oldPage.task.cancel).toHaveBeenCalledTimes(1); expect(drawImage).toHaveBeenCalledTimes(1);
    await act(async () => oldRender.resolve());
    expect(drawImage).toHaveBeenCalledTimes(1); expect(screen.getByRole('img')).toHaveAccessibleName('Document preview: Page 2 of 2'); expect(fixture.pages[0].cleanup).toHaveBeenCalledTimes(1);
  });

  it('ignores a late document load when another file is selected', async () => {
    const oldLoad = deferred<{ numPages: number; getPage: ReturnType<typeof vi.fn> }>(), destroy = vi.fn(async () => {}), oldGetPage = vi.fn();
    getDocument.mockReturnValueOnce({ promise: oldLoad.promise, destroy });
    const file = source(), { rerender } = render(view(file)); await waitFor(() => expect(getDocument).toHaveBeenCalledTimes(1));
    const current = documentFixture(); rerender(view(source([1, 2, 3]))); await screen.findByRole('img');
    await act(async () => oldLoad.resolve({ numPages: 99, getPage: oldGetPage }));
    expect(destroy).toHaveBeenCalledTimes(1); expect(oldGetPage).not.toHaveBeenCalled(); expect(current.pdf.getPage).toHaveBeenCalledWith(1);
    expect(screen.getByRole('img')).toHaveAccessibleName('Document preview: Page 1 of 2');
  });

  it('shows rendering failures and permits navigation to another page', async () => {
    const failedPage = page(1000, 2000, Promise.resolve()); failedPage.render.mockImplementation(() => ({ promise: Promise.reject(new Error('Cannot render fixture')), cancel: vi.fn() }));
    const fixture = documentFixture([failedPage, page()]), user = userEvent.setup(); render(view(source()));
    expect(await screen.findByRole('alert')).toHaveTextContent('Cannot render fixture'); expect(screen.queryByRole('img')).toBeNull(); expect(screen.queryByText('Split marker')).toBeNull();
    await user.click(screen.getByRole('button', { name: en.common.buttons.next })); await screen.findByRole('img');
    expect(screen.queryByRole('alert')).toBeNull(); expect(fixture.pages[0].cleanup).toHaveBeenCalledTimes(1);
  });

  it('reports a load failure and recovers with a different file', async () => {
    getDocument.mockReturnValueOnce({ promise: Promise.reject(new Error('Invalid PDF fixture')), destroy: vi.fn(async () => {}) });
    const { rerender } = render(view(source())); expect(await screen.findByRole('alert')).toHaveTextContent('Invalid PDF fixture');
    documentFixture(); rerender(view(source([9, 8]))); await screen.findByRole('img'); expect(screen.queryByRole('alert')).toBeNull();
  });
});
