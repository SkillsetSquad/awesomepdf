import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument, PageSizes } from 'pdf-lib';
import messages from '../../../../messages/en.json';
import { FormCreatorTool } from '@/components/tools/form-creator/FormCreatorTool';

const getDocument = vi.hoisted(() => vi.fn());
vi.mock('pdfjs-dist', () => ({ GlobalWorkerOptions: { workerSrc: 'test-worker' }, getDocument }));
const originalArrayBuffer = Object.getOwnPropertyDescriptor(Blob.prototype, 'arrayBuffer');
beforeEach(() => {
  localStorage.clear();
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  Object.defineProperty(Blob.prototype, 'arrayBuffer', { configurable: true, value() {
    return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsArrayBuffer(this); });
  } });
  getDocument.mockReturnValue({ promise: Promise.resolve({ numPages: 3, getPage: async () => ({ getViewport: () => ({ width: 612, height: 792 }) }) }) });
});
afterEach(() => {
  vi.restoreAllMocks();
  getDocument.mockClear();
  if (originalArrayBuffer) Object.defineProperty(Blob.prototype, 'arrayBuffer', originalArrayBuffer);
  else Reflect.deleteProperty(Blob.prototype, 'arrayBuffer');
});
function view() { return render(<NextIntlClientProvider locale="en" messages={messages}><FormCreatorTool /></NextIntlClientProvider>); }

describe('Form creator dialogs', () => {
  it('cancels blank-document settings with Escape and restores trigger focus', async () => {
    view();
    const trigger = screen.getByRole('button', { name: 'Create Blank PDF' });
    await userEvent.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Create Blank PDF' });
    await userEvent.selectOptions(within(dialog).getByLabelText('Page Size'), 'Letter');
    const count = within(dialog).getByLabelText('Number of Pages');
    await userEvent.click(count);
    await userEvent.keyboard('{Control>}a{/Control}3');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(getDocument).not.toHaveBeenCalled();
    await userEvent.click(trigger);
    expect(screen.getByLabelText('Number of Pages')).toHaveValue(1);
    expect(screen.getByLabelText('Page Size')).toHaveValue('A4');
  });

  it('creates the requested pages locally and moves focus into the new workspace', async () => {
    const { container } = view();
    await userEvent.click(screen.getByRole('button', { name: 'Create Blank PDF' }));
    const dialog = screen.getByRole('dialog');
    await userEvent.selectOptions(within(dialog).getByLabelText('Page Size'), 'Letter');
    const count = within(dialog).getByLabelText('Number of Pages');
    await userEvent.click(count);
    await userEvent.keyboard('{Control>}a{/Control}3');
    await userEvent.click(within(dialog).getByRole('button', { name: 'Create Form' }));
    await waitFor(() => expect(getDocument).toHaveBeenCalledOnce());
    const document = await PDFDocument.load(getDocument.mock.calls[0][0].data);
    expect(document.getPageCount()).toBe(3);
    expect(document.getPages().every(page => page.getWidth() === PageSizes.Letter[0] && page.getHeight() === PageSizes.Letter[1])).toBe(true);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    await waitFor(() => expect(container.firstElementChild).toHaveFocus());
  });

  it.each([
    ['Before current', 1],
    ['After current', 2],
    ['At end', 4],
  ])('inserts a page with the keyboard using "%s"', async (label, currentPage) => {
    getDocument.mockImplementation(({ data }: { data: ArrayBuffer }) => ({
      promise: PDFDocument.load(data).then(document => ({
        numPages: document.getPageCount(),
        getPage: async () => ({ getViewport: () => ({ width: 612, height: 792 }) }),
      })),
    }));
    view();
    await userEvent.click(screen.getByRole('button', { name: 'Create Blank PDF' }));
    const dialog = screen.getByRole('dialog');
    await userEvent.selectOptions(within(dialog).getByLabelText('Page Size'), 'Letter');
    await userEvent.click(within(dialog).getByLabelText('Number of Pages'));
    await userEvent.keyboard('{Control>}a{/Control}3');
    await userEvent.click(within(dialog).getByRole('button', { name: 'Create Form' }));
    await screen.findByText('1 / 3');

    const trigger = screen.getByRole('button', { name: 'Add Blank Page' });
    act(() => trigger.focus());
    await userEvent.keyboard('{Enter}');
    expect(screen.getByRole('menu')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(getDocument).toHaveBeenCalledOnce();

    await userEvent.keyboard('{Enter}');
    const items = screen.getAllByRole('menuitem');
    await waitFor(() => expect(items[0]).toHaveFocus());
    const itemIndex = items.indexOf(screen.getByRole('menuitem', { name: label }));
    if (itemIndex > 0) await userEvent.keyboard('{ArrowDown}'.repeat(itemIndex));
    await userEvent.keyboard('{Enter}');
    await screen.findByText(`${currentPage} / 4`);
    const document = await PDFDocument.load(getDocument.mock.calls[1][0].data);
    expect(document.getPageCount()).toBe(4);
    expect(document.getPages().every(page => page.getWidth() === 612 && page.getHeight() === 792)).toBe(true);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
