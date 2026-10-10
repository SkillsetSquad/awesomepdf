import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { PDFReaderTool } from '@/components/tools/pdf-reader/PdfReaderTool';

const notifications = vi.hoisted(() => ({ success: vi.fn(() => 'reader-copy'), dismiss: vi.fn() }));
vi.mock('sonner', () => ({ toast: notifications }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([new File(['pdf'], 'reader.pdf')])}>Select test PDF</button> }));
afterEach(() => vi.restoreAllMocks());

describe('PDF reader controls', () => {
  it('changes auto-copy without reloading the viewer and cleans up its listener and notification', async () => {
    const user = userEvent.setup();
    const write = vi.spyOn(navigator.clipboard, 'writeText').mockResolvedValue();
    const { unmount } = render(<NextIntlClientProvider locale="en" messages={messages}><PDFReaderTool /></NextIntlClientProvider>);
    fireEvent.mouseUp(document);
    expect(write).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: 'Select test PDF' }));
    const viewer = screen.getByTitle('reader.pdf') as HTMLIFrameElement;
    const viewerDocument = viewer.contentDocument!;
    let selection = 'Selected document text';
    vi.spyOn(viewer.contentWindow!, 'getSelection').mockImplementation(() => ({ toString: () => selection } as Selection));
    fireEvent.load(viewer);
    fireEvent.mouseUp(viewerDocument);
    await waitFor(() => expect(write).toHaveBeenCalledWith(selection));
    expect(notifications.success).toHaveBeenCalledWith(messages.common.ocr.copied, expect.objectContaining({ description: selection, duration: 2000 }));

    const toggle = screen.getByRole('button', { name: messages.tools.pdfReader.autoCopySelection });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    selection = 'Another selection';
    fireEvent.mouseUp(viewerDocument);
    expect(write).toHaveBeenCalledOnce();
    await user.click(toggle);
    fireEvent.mouseUp(viewerDocument);
    await waitFor(() => expect(write).toHaveBeenCalledTimes(2));
    expect(notifications.success).toHaveBeenLastCalledWith(messages.common.ocr.copied, expect.objectContaining({ id: 'reader-copy', description: selection }));
    unmount();
    fireEvent.mouseUp(viewerDocument);
    expect(write).toHaveBeenCalledTimes(2);
    expect(notifications.dismiss).toHaveBeenCalledWith('reader-copy');
  });
});
