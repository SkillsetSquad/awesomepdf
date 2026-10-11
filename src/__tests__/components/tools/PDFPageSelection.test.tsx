import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import { PDFPagePreview } from '@/components/tools/PDFPagePreview';
const { getDocument } = vi.hoisted(() => ({ getDocument: vi.fn() }));
vi.mock('@/lib/pdf/loader', () => ({ loadPdfjs: async () => ({ getDocument }) }));
let file: Blob;
const getPage = vi.fn();
beforeEach(() => {
  vi.clearAllMocks();
  file = new Blob(['source']); Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array([1, 2]).buffer });
  getPage.mockResolvedValue({
    getViewport: ({ scale }: { scale: number }) => ({ width: 800 * scale, height: 600 * scale, convertToPdfPoint: (x: number, y: number) => [100 + y / scale, 50 + x / scale] }),
    render: () => ({ promise: Promise.resolve(), cancel: vi.fn() }), cleanup: vi.fn(),
  });
  getDocument.mockReturnValue({ promise: Promise.resolve({ numPages: 2, getPage }), destroy: vi.fn(async () => {}) });
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({ drawImage: vi.fn() } as unknown as CanvasRenderingContext2D);
});
afterEach(() => vi.restoreAllMocks());
describe('PDF page selection coordinates', () => {
  it('converts CSS-scaled page points through the rendered rotation/crop viewport and ignores secondary buttons', async () => {
    const point = vi.fn();
    render(<NextIntlClientProvider locale="en" messages={en}><PDFPagePreview file={file} label="Source" onPointSelect={point} /></NextIntlClientProvider>);
    const canvas = await screen.findByRole('img');
    vi.spyOn(canvas, 'getBoundingClientRect').mockReturnValue({ left: 20, top: 30, width: 300, height: 225 } as DOMRect);
    fireEvent.pointerDown(canvas, { button: 0, clientX: 170, clientY: 142.5 });
    expect(point).toHaveBeenCalledWith({ x: 400, y: 450, page: 1 });
    fireEvent.pointerDown(canvas, { button: 2, clientX: 170, clientY: 142.5 }); expect(point).toHaveBeenCalledTimes(1);
  });
  it('keeps the externally selected page aligned with processing and reports navigation to the tool', async () => {
    const change = vi.fn(), user = userEvent.setup();
    const view = (page: number) => <NextIntlClientProvider locale="en" messages={en}><PDFPagePreview file={file} label="Source" selectedPage={page} onPageChange={change} /></NextIntlClientProvider>;
    const { rerender } = render(view(2)); await screen.findByRole('img', { name: 'Source: Page 2 of 2' });
    expect(getPage).toHaveBeenCalledWith(2);
    await user.click(screen.getByRole('button', { name: en.common.buttons.previous })); expect(change).toHaveBeenCalledWith(1);
    expect(screen.getByRole('img')).toHaveAccessibleName('Source: Page 2 of 2');
    rerender(view(1)); await waitFor(() => expect(screen.getByRole('img')).toHaveAccessibleName('Source: Page 1 of 2'));
  });
});
