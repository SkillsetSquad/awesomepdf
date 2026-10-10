import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { MergePDFTool } from '@/components/tools/merge/MergePDFTool';
const { mergePDFs } = vi.hoisted(() => ({ mergePDFs: vi.fn() }));
vi.mock('@/lib/pdf', () => ({ mergePDFs }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([new File(['first'], 'first.pdf'), new File(['second'], 'second.pdf')])}>Select test PDFs</button> }));
beforeEach(() => { mergePDFs.mockResolvedValue({ success: true, result: new Blob(['merged']) }); });
describe('Merge workspace', () => {
  it('passes keyboard-ordered files and bookmark options to the processor and enables downloading', async () => {
    render(<NextIntlClientProvider locale="en" messages={messages}><MergePDFTool /></NextIntlClientProvider>);
    expect(screen.getByRole('button', { name: 'Merge PDFs' })).toBeDisabled();
    await userEvent.click(screen.getByRole('button', { name: 'Select test PDFs' }));
    const up = screen.getByRole('button', { name: 'Move up: second.pdf' });
    up.focus();
    await userEvent.keyboard('{Enter}');
    expect(within(screen.getByRole('list')).getAllByRole('listitem')[0]).toHaveTextContent('second.pdf');
    await userEvent.click(screen.getByRole('checkbox'));
    await userEvent.click(screen.getByRole('button', { name: 'Merge PDFs' }));
    await waitFor(() => expect(mergePDFs).toHaveBeenCalledOnce());
    expect(mergePDFs.mock.calls[0][0].map((file: File) => file.name)).toEqual(['second.pdf', 'first.pdf']);
    expect(mergePDFs.mock.calls[0][1]).toEqual({ preserveBookmarks: false, pageOrder: 'sequential' });
    expect(await screen.findByRole('button', { name: /^Download/ })).toBeEnabled();
  });
});
