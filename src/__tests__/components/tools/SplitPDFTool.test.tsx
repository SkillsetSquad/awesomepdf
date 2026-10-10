import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import messages from '../../../../messages/en.json';
import { SplitPDFTool } from '@/components/tools/split/SplitPDFTool';
import { splitPDF } from '@/lib/pdf';

vi.mock('@/lib/pdf', async () => ({ ...await import('@/lib/pdf/processors/split'), splitPDF: vi.fn(async () => ({ success: true, result: new Blob(['output']), metadata: { outputFiles: ['split.pdf'] } })) }));
vi.mock('@/lib/pdf/loader', () => ({ configurePdfjsWorker: vi.fn() }));
vi.mock('pdfjs-dist', () => ({ getDocument: vi.fn(() => ({ promise: Promise.resolve({
  numPages: 4,
  getOutline: async () => [{ title: 'Chapter one', dest: [1], items: [] }],
  getPageIndex: async () => 0,
  getPage: async () => ({ getViewport: () => ({ width: 120, height: 160 }), render: () => ({ promise: Promise.resolve() }) }),
}) })) }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => {
  const file = new File(['%PDF-1.4'], 'split.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(8) });
  onFilesSelected([file]);
}}>Choose test PDF</button> }));

beforeEach(() => {
  vi.clearAllMocks();
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({} as CanvasRenderingContext2D);
  vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,aA==');
});
afterEach(() => vi.restoreAllMocks());

describe('Split PDF mode controls', () => {
  it('keeps all six modes reachable by keyboard and passes bookmark and selected preview ranges to the processor', async () => {
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={messages}><SplitPDFTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose test PDF' }));
    await screen.findByRole('button', { name: 'Page 1' });
    const labels = ['modeRanges', 'modeEvenOdd', 'modeEveryPage', 'modeVisualShort', 'modeBookmarksShort', 'modeNTimesShort'] as const;
    for (const key of labels) {
      const mode = screen.getByRole('button', { name: messages.tools.splitPdf[key] });
      mode.focus();
      await user.keyboard('{Enter}');
      expect(mode).toHaveAttribute('aria-pressed', 'true');
    }
    const bookmarks = screen.getByRole('button', { name: messages.tools.splitPdf.modeBookmarksShort });
    bookmarks.focus();
    await user.keyboard('{Enter}');
    expect(screen.getByText('Chapter one')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: messages.tools.splitPdf.splitButton }));
    await waitFor(() => expect(splitPDF).toHaveBeenCalledOnce());
    expect(splitPDF).toHaveBeenLastCalledWith(expect.any(File), expect.objectContaining({ ranges: [{ start: 1, end: 4 }] }), expect.any(Function));

    fireEvent.click(screen.getByRole('button', { name: messages.tools.splitPdf.modeVisualShort }));
    const split = screen.getByRole('button', { name: messages.tools.splitPdf.splitButton });
    expect(split).toBeDisabled();
    const page = screen.getByRole('button', { name: 'Page 2' });
    page.focus();
    await user.keyboard('{Enter}');
    expect(page).toHaveAttribute('aria-pressed', 'true');
    expect(split).toBeEnabled();
    await user.click(split);
    await waitFor(() => expect(splitPDF).toHaveBeenCalledTimes(2));
    expect(splitPDF).toHaveBeenLastCalledWith(expect.any(File), expect.objectContaining({ ranges: [{ start: 2, end: 2 }] }), expect.any(Function));
  });
});
