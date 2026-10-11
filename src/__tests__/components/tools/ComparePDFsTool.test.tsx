import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { ComparePDFsTool } from '@/components/tools/compare-pdfs/ComparePDFsTool';
import { TooltipProvider } from '@/components/ui/tooltip';

const { loadPdfjs, getDocument } = vi.hoisted(() => ({ loadPdfjs: vi.fn(), getDocument: vi.fn() }));
vi.mock('@/lib/pdf/loader', () => ({ loadPdfjs }));
const uploadQueues: File[][] = [[], []];
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string; disabled: boolean }) => <button disabled={props.disabled} onClick={() => props.onFilesSelected([uploadQueues[[en.common.comparePdfs.originalPdfLabel, ar.common.comparePdfs.originalPdfLabel].includes(props.label) ? 0 : 1].shift()!])}>{props.label}</button> }));
function deferred<T>() {
  let resolve!: (value: T) => void, reject!: (error: Error) => void;
  const promise = new Promise<T>((success, failure) => { resolve = success; reject = failure; }); return { promise, resolve, reject };
}
function file(name: string, value = 1) {
  const source = new File([new Uint8Array([37, 80, 68, 70, value])], name, { type: 'application/pdf' });
  Object.defineProperty(source, 'arrayBuffer', { value: async () => new Uint8Array([37, 80, 68, 70, value]).buffer }); return source;
}
function item(str: string, y = 500, fontName = 'fontA') { return { str, transform: [1, 0, 0, 12, 100, y], width: str.length * 8, height: 12, fontName }; }
function page(items = [item('Same extracted text')], renderPromise = Promise.resolve(), rotated = false) {
  const task = { promise: renderPromise, cancel: vi.fn() };
  return { getViewport: vi.fn(({ scale }: { scale: number }) => ({ width: (rotated ? 800 : 600) * scale, height: (rotated ? 600 : 800) * scale, convertToViewportPoint: (x: number, y: number) => rotated ? [y * scale, x * scale] : [x * scale, (800 - y) * scale] })), render: vi.fn(() => task), getTextContent: vi.fn(async () => ({ items: [{ type: 'beginMarkedContent' }, ...items] })), cleanup: vi.fn(), task };
}
function fixture(pages = [page()], loading?: Promise<{ numPages: number; getPage: ReturnType<typeof vi.fn> }>) {
  const pdf = { numPages: pages.length, getPage: vi.fn(async (number: number) => pages[number - 1]) };
  const task = { promise: loading || Promise.resolve(pdf), destroy: vi.fn(async () => {}) };
  getDocument.mockReturnValueOnce(task); return { pdf, pages, task };
}
function view(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn(); const rendered = render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><TooltipProvider><ComparePDFsTool /></TooltipProvider></NextIntlClientProvider>); return { ...rendered, intlError };
}
async function uploadBoth(user: ReturnType<typeof userEvent.setup>, messages = en) {
  const t = messages.common.comparePdfs;
  await user.click(screen.getByRole('button', { name: t.originalPdfLabel })); await screen.findByText('original.pdf');
  await user.click(screen.getByRole('button', { name: t.modifiedPdfLabel })); await screen.findByText('modified.pdf');
  await user.click(screen.getByRole('button', { name: t.startCompare }));
}
beforeEach(() => {
  vi.clearAllMocks(); getDocument.mockReset(); loadPdfjs.mockReset().mockResolvedValue({ getDocument });
  uploadQueues[0] = [file('original.pdf')]; uploadQueues[1] = [file('modified.pdf', 2)];
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({ fillStyle: '', fillRect: vi.fn() } as unknown as CanvasRenderingContext2D);
  vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,cHJldmlldw==');
});
afterEach(() => { vi.restoreAllMocks(); Reflect.deleteProperty(HTMLElement.prototype, 'requestFullscreen'); Reflect.deleteProperty(document, 'exitFullscreen'); Reflect.deleteProperty(document, 'fullscreenElement'); });

describe('PDF comparison workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('preserves inserted-page pairing, keyboard filters, font changes and synchronized scrolling (%s)', async (locale, messages) => {
    const original = fixture([page([item('Alpha base apples'), item('Oldheader', 780)]), page([item('Second unique summary')])]);
    const modified = fixture([page([item('Alpha base oranges'), item('Newheader', 780)]), page([item('ZZZZ99999')]), page([item('Second unique summary', 500, 'fontB')])]);
    const user = userEvent.setup(), t = messages.common.comparePdfs, { intlError } = view(locale, messages); await uploadBoth(user, messages as typeof en);
    expect(screen.getByRole('status')).toHaveTextContent(t.compareStats.replace('{total}', '3').replace('{diff}', '3'));
    expect(screen.getByRole('heading', { name: t.successTitle })).toHaveFocus();
    expect(getDocument).toHaveBeenNthCalledWith(1, { data: new Uint8Array([37, 80, 68, 70, 1]) });
    expect(original.task.destroy).toHaveBeenCalledTimes(1); expect(modified.task.destroy).toHaveBeenCalledTimes(1);
    for (const loadedPage of [...original.pages, ...modified.pages]) expect(loadedPage.cleanup).toHaveBeenCalledTimes(1);
    const left = screen.getByRole('region', { name: t.originalPdfTitle }), right = screen.getByRole('region', { name: t.modifiedPdfTitle });
    expect(within(left).getAllByRole('button', { name: t.removedText })).toHaveLength(1); expect(within(right).getAllByRole('button', { name: t.addedText })).toHaveLength(1);
    const header = screen.getByRole('checkbox', { name: t.filterHeaderFooter }); act(() => header.focus()); await user.keyboard(' '); expect(header).toBeChecked();
    expect(within(left).getAllByRole('button', { name: t.removedText })).toHaveLength(2);
    const text = screen.getByRole('checkbox', { name: t.filterText }); await user.click(text); expect(within(left).getAllByRole('button', { name: t.removedText })).toHaveLength(1);
    left.scrollTop = 70; left.scrollLeft = 30; fireEvent.scroll(left); expect(right.scrollTop).toBe(70); expect(right.scrollLeft).toBe(30);
    const next = screen.getByRole('button', { name: t.nextPair }); act(() => next.focus()); await user.keyboard('{Enter}');
    expect(screen.getByText(t.insertedPageDesc)).toBeInTheDocument(); expect(screen.getByText(t.pagePairIndex.replace('{current}', '2').replace('{total}', '3'))).toBeInTheDocument(); expect(left.scrollTop).toBe(0);
    await user.click(next); expect(next).toBeDisabled(); expect(screen.getAllByRole('button', { name: t.modifiedText }).length).toBeGreaterThan(0);
    const fonts = screen.getByRole('checkbox', { name: t.filterFont }); await user.click(fonts); expect(screen.queryByRole('button', { name: t.modifiedText })).toBeNull();
    await user.click(screen.getByRole('button', { name: t.resetButton })); expect(screen.getByRole('button', { name: t.originalPdfLabel }).parentElement).toHaveFocus(); expect(screen.queryByRole('region', { name: t.originalPdfTitle })).toBeNull(); expect(intlError).not.toHaveBeenCalled();
  });

  it('retains moved-text highlights and the moved filter', async () => {
    fixture([page([item('Alpha base MIGRATIONPHRASE')]), page([item('Second unique summary')])]);
    fixture([page([item('Alpha base')]), page([item('Second unique summary MIGRATIONPHRASE')])]);
    const user = userEvent.setup(), t = en.common.comparePdfs; view(); await uploadBoth(user);
    expect(screen.getByRole('button', { name: t.paragraphMovedRight })).toBeInTheDocument();
    const moved = screen.getByRole('checkbox', { name: t.filterMoved }); await user.click(moved); expect(screen.queryByRole('button', { name: t.paragraphMovedRight })).toBeNull();
    await user.click(moved); await user.click(screen.getByRole('button', { name: t.nextPair })); expect(screen.getByRole('button', { name: t.paragraphMovedLeft })).toBeInTheDocument();
  });

  it('uses all viewport corners for rotated-page highlight bounds', async () => {
    const originalItem = { ...item('Sameword'), width: 100, height: 20, transform: [1, 0, 0, 20, 100, 200] };
    fixture([page([originalItem], Promise.resolve(), true)]); fixture([page([{ ...originalItem, fontName: 'fontB' }], Promise.resolve(), true)]);
    const user = userEvent.setup(), t = en.common.comparePdfs; view(); await uploadBoth(user);
    expect(within(screen.getByRole('region', { name: t.originalPdfTitle })).getByRole('button', { name: t.modifiedText })).toHaveStyle({ left: '299px', top: '149px', width: '32px', height: '152px' });
  });

  it.each(['resolve', 'reject'] as const)('discards a cancelled loading task that later %ss while a new task is pending', async outcome => {
    const oldLoad = deferred<{ numPages: number; getPage: ReturnType<typeof vi.fn> }>(), currentLoad = deferred<{ numPages: number; getPage: ReturnType<typeof vi.fn> }>();
    const old = fixture([page()], oldLoad.promise), current = fixture([page()], currentLoad.promise);
    const user = userEvent.setup(), t = en.common.comparePdfs; view(); await user.click(screen.getByRole('button', { name: t.originalPdfLabel }));
    await waitFor(() => expect(getDocument).toHaveBeenCalledTimes(1)); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    expect(old.task.destroy).toHaveBeenCalledTimes(1);
    await user.click(screen.getByRole('button', { name: t.modifiedPdfLabel })); await waitFor(() => expect(getDocument).toHaveBeenCalledTimes(2));
    await act(async () => { if (outcome === 'resolve') oldLoad.resolve(old.pdf); else oldLoad.reject(new Error('Cancelled load')); });
    expect(old.pdf.getPage).not.toHaveBeenCalled(); expect(screen.queryByRole('alert')).toBeNull(); expect(screen.getByRole('button', { name: t.originalPdfLabel })).toBeDisabled(); expect(current.task.destroy).not.toHaveBeenCalled();
    await act(async () => currentLoad.resolve(current.pdf)); await screen.findByText('modified.pdf'); expect(current.task.destroy).toHaveBeenCalledTimes(1);
  });

  it('cancels a pending render on unmount and releases the page after it settles', async () => {
    const pending = deferred<void>(), original = fixture([page([item('Source')], pending.promise)]);
    const user = userEvent.setup(), t = en.common.comparePdfs, { unmount } = view(); await user.click(screen.getByRole('button', { name: t.originalPdfLabel }));
    await waitFor(() => expect(original.pages[0].render).toHaveBeenCalledTimes(1)); unmount(); expect(original.pages[0].task.cancel).toHaveBeenCalledTimes(1); expect(original.task.destroy).toHaveBeenCalledTimes(1);
    await act(async () => pending.resolve()); expect(original.pages[0].getTextContent).not.toHaveBeenCalled(); expect(original.pages[0].cleanup).toHaveBeenCalledTimes(1);
  });

  it('reports an extraction error and permits retry, removal and focus restoration', async () => {
    const broken = fixture(); broken.pages[0].getTextContent.mockRejectedValueOnce(new Error('Extraction failed')); const current = fixture();
    uploadQueues[0].push(file('retry.pdf'));
    const user = userEvent.setup(), t = en.common.comparePdfs; view(); await user.click(screen.getByRole('button', { name: t.originalPdfLabel }));
    expect(await screen.findByRole('alert')).toHaveTextContent('Extraction failed'); expect(broken.task.destroy).toHaveBeenCalledTimes(1);
    await user.click(screen.getByRole('button', { name: t.originalPdfLabel })); await screen.findByText('retry.pdf'); expect(screen.queryByRole('alert')).toBeNull(); expect(current.task.destroy).toHaveBeenCalledTimes(1);
    await user.click(screen.getByRole('button', { name: t.removeButton })); expect(screen.getByRole('button', { name: t.originalPdfLabel }).parentElement).toHaveFocus();
  });

  it('keeps page and exit controls inside fullscreen and restores focus on exit', async () => {
    fixture(); fixture(); let fullscreen: Element | null = null;
    const enter = vi.fn(async () => { fullscreen = screen.getByRole('button', { name: en.common.comparePdfs.fullscreenTooltip }).closest('nav')!.parentElement; document.dispatchEvent(new Event('fullscreenchange')); });
    const exit = vi.fn(async () => { fullscreen = null; document.dispatchEvent(new Event('fullscreenchange')); });
    Object.defineProperty(HTMLElement.prototype, 'requestFullscreen', { configurable: true, value: enter }); Object.defineProperty(document, 'exitFullscreen', { configurable: true, value: exit }); Object.defineProperty(document, 'fullscreenElement', { configurable: true, get: () => fullscreen });
    const user = userEvent.setup(), t = en.common.comparePdfs; view(); await uploadBoth(user);
    const toggle = screen.getByRole('button', { name: t.fullscreenTooltip }); await user.click(toggle); expect(toggle).toHaveAttribute('aria-pressed', 'true');
    expect(enter.mock.contexts[0]).toBe(fullscreen);
    expect(fullscreen).toContainElement(toggle); expect(fullscreen).toContainElement(screen.getByRole('button', { name: t.prevPair })); expect(fullscreen).toContainElement(screen.getByRole('button', { name: t.resetButton }));
    await user.click(toggle); expect(exit).toHaveBeenCalledTimes(1); expect(toggle).toHaveAttribute('aria-pressed', 'false'); expect(toggle).toHaveFocus();
    enter.mockRejectedValueOnce(new Error('Unavailable')); await user.click(toggle); expect(screen.getByRole('alert')).toHaveTextContent(t.errorFullscreen);
    await user.click(toggle); await user.click(screen.getByRole('button', { name: t.resetButton }));
    fullscreen = null; act(() => document.dispatchEvent(new Event('fullscreenchange')));
    uploadQueues[0].push(file('original.pdf')); uploadQueues[1].push(file('modified.pdf', 2)); fixture(); fixture();
    await uploadBoth(user);
    const freshToggle = screen.getByRole('button', { name: t.fullscreenTooltip });
    expect(freshToggle).toHaveAttribute('aria-pressed', 'false'); expect(freshToggle.closest('nav')!.parentElement).not.toHaveClass('h-screen');
  });
});
