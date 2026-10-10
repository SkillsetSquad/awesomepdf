import { describe, expect, it, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { ExtractImagesTool } from '@/components/tools/extract-images/ExtractImagesTool';

const mocks = vi.hoisted(() => ({ extract: vi.fn(), save: vi.fn() }));
vi.mock('@/lib/pdf/processors/extract-images', () => ({ extractImages: mocks.extract }));
vi.mock('@/lib/tauri-bridge', () => ({ saveBlobFile: mocks.save }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([new File(['first'], 'first.pdf'), new File(['second'], 'second.pdf')])}>Select test PDFs</button> }));

describe('Extracted-image previews', () => {
  it('keeps multiple inputs, download names, keyboard focus and preview URL cleanup', async () => {
    mocks.extract.mockResolvedValue({ success: true, metadata: { images: [{ index: 0, name: 'diagram.png', ext: 'png', data: new Uint8Array([1, 2, 3]).buffer, width: 100, height: 150, pageNumber: 2, size: 3 }] } });
    const create = vi.spyOn(URL, 'createObjectURL');
    const revoke = vi.spyOn(URL, 'revokeObjectURL');
    const { unmount } = render(<NextIntlClientProvider locale="en" messages={messages}><ExtractImagesTool /></NextIntlClientProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'Select test PDFs' }));
    await userEvent.click(screen.getByRole('button', { name: 'Extract Images' }));
    expect(mocks.extract).toHaveBeenCalledWith([expect.objectContaining({ name: 'first.pdf' }), expect.objectContaining({ name: 'second.pdf' })], { minWidth: 50, minHeight: 50, minSize: 10240 }, expect.any(Function));
    const preview = await screen.findByRole('button', { name: 'Extracted Images: diagram.png' });
    preview.focus();
    await userEvent.keyboard('{Enter}');
    const dialog = screen.getByRole('dialog', { name: 'diagram.png' });
    expect(within(dialog).getByRole('img', { name: 'diagram.png' })).toHaveAttribute('src', create.mock.results[0].value);
    await userEvent.click(within(dialog).getByRole('button', { name: 'Download' }));
    expect(mocks.save).toHaveBeenCalledWith(expect.any(Blob), 'diagram.png');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(preview).toHaveFocus());
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    unmount();
    expect(revoke).toHaveBeenCalledWith(create.mock.results[0].value);
    create.mockRestore();
    revoke.mockRestore();
  });
});
