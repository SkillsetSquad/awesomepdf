import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument } from 'pdf-lib';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import messages from '../../../../messages/en.json';
import { PDFMultiTool } from '@/components/tools/pdf-multi-tool/PDFMultiTool';

const { fixtures, downloaded, saveBlobFile } = vi.hoisted(() => ({ fixtures: { files: [] as File[] }, downloaded: vi.fn(), saveBlobFile: vi.fn() }));
vi.mock('@/lib/pdf/loader', () => ({ configurePdfjsWorker: vi.fn() }));
vi.mock('@/lib/tauri-bridge', () => ({ saveBlobFile }));
vi.mock('pdfjs-dist', () => ({ getDocument: ({ data }: { data: ArrayBuffer }) => ({ promise: PDFDocument.load(data).then(pdf => ({
  numPages: pdf.getPageCount(),
  getPage: async () => ({ getViewport: () => ({ width: 120, height: 160 }), render: () => ({ promise: Promise.resolve() }) }),
})) }) }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected(fixtures.files)}>Choose test PDFs</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: ({ file }: { file: Blob | null }) => <button onClick={() => downloaded(file)} disabled={!file}>Download exported PDF</button> }));

beforeEach(async () => {
  vi.clearAllMocks();
  fixtures.files = [];
  for (const [name, sizes] of [['first.pdf', [[111, 222], [333, 444]]], ['second.pdf', [[555, 666]]]] as const) {
    const pdf = await PDFDocument.create();
    sizes.forEach(([width, height]) => pdf.addPage([width, height]));
    const bytes = await pdf.save();
    const file = new File([new Uint8Array(bytes)], name, { type: 'application/pdf' });
    Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.slice().buffer });
    fixtures.files.push(file);
  }
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({} as CanvasRenderingContext2D);
  vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,aA==');
});
afterEach(() => vi.restoreAllMocks());

function readBytes(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = reject;
    reader.readAsArrayBuffer(blob);
  });
}

describe('PDF organizer controls', () => {
  it('inserts blank pages through the keyboard dialog, preserves undo/redo and exports the actual edited multi-file PDF', async () => {
    const user = userEvent.setup();
    const intlError = vi.fn();
    render(<NextIntlClientProvider locale="en" messages={messages} onError={intlError}><PDFMultiTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose test PDFs' }));
    await screen.findByRole('button', { name: 'Page 3 of 3' });
    const trigger = screen.getByRole('button', { name: messages.tools.pdfMultiTool.addBlank });
    trigger.focus();
    await user.keyboard('{Enter}');
    const dialog = await screen.findByRole('dialog', { name: messages.tools.pdfMultiTool.addBlankPageTitle });
    fireEvent.change(within(dialog).getByRole('spinbutton', { name: messages.tools.pdfMultiTool.numberOfPages }), { target: { value: '2' } });
    fireEvent.change(within(dialog).getByRole('spinbutton', { name: messages.tools.pdfMultiTool.insertPosition }), { target: { value: '2' } });
    within(dialog).getByRole('button', { name: messages.common.buttons.add }).focus();
    await user.keyboard('{Enter}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
    expect(screen.getByRole('button', { name: 'Page 5 of 5' })).toBeInTheDocument();
    screen.getByRole('button', { name: messages.tools.pdfMultiTool.undo }).focus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: 'Page 3 of 3' })).toBeInTheDocument();
    screen.getByRole('button', { name: messages.tools.pdfMultiTool.redo }).focus();
    await user.keyboard('{Enter}');
    const blank = screen.getByRole('button', { name: 'Page 2 of 5' });
    blank.focus();
    await user.keyboard(' ');
    expect(blank).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Move up: Page 2 of 5' })).toBeEnabled();
    await user.click(screen.getByRole('button', { name: messages.tools.pdfMultiTool.exportPDF }));
    await user.click(await screen.findByRole('button', { name: 'Download exported PDF' }));
    expect(downloaded).toHaveBeenCalledOnce();
    const exported = await PDFDocument.load(await readBytes(downloaded.mock.calls[0][0]));
    expect(exported.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual([[111, 222], [595, 842], [595, 842], [333, 444], [555, 666]]);
    expect(intlError).not.toHaveBeenCalled();
  });

  it('keeps page actions separate from selection and preserves the edited order and rotation in the PDF', async () => {
    const user = userEvent.setup();
    render(<NextIntlClientProvider locale="en" messages={messages}><PDFMultiTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose test PDFs' }));
    await screen.findByRole('button', { name: 'Page 3 of 3' });
    expect(screen.getByRole('button', { name: 'Move up: Page 1 of 3' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Move down: Page 3 of 3' })).toBeDisabled();
    for (const label of ['Move up: Page 3 of 3', 'Right: Page 2 of 3', 'Duplicate: Page 2 of 3', 'Delete: Page 1 of 4']) {
      screen.getByRole('button', { name: label }).focus();
      await user.keyboard('{Enter}');
    }
    expect(screen.getByRole('button', { name: 'Page 1 of 3' })).toHaveAttribute('aria-pressed', 'false');
    await user.click(screen.getByRole('button', { name: messages.tools.pdfMultiTool.exportPDF }));
    await user.click(await screen.findByRole('button', { name: 'Download exported PDF' }));
    const exported = await PDFDocument.load(await readBytes(downloaded.mock.calls[0][0]));
    expect(exported.getPages().map(page => [page.getWidth(), page.getHeight(), page.getRotation().angle])).toEqual([[555, 666, 90], [555, 666, 90], [333, 444, 0]]);
  });
});
