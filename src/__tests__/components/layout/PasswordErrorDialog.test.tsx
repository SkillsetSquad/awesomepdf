import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { DecryptPDFTool } from '@/components/tools/decrypt/DecryptPDFTool';
const { decryptPDF } = vi.hoisted(() => ({ decryptPDF: vi.fn() }));
vi.mock('@/lib/pdf/processors/decrypt', () => ({ decryptPDF }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([new File(['locked'], 'locked.pdf')])}>Select locked PDF</button> }));
describe('Password errors', () => {
  it('opens a described dialog after an incorrect password, restores focus and allows retry', async () => {
    decryptPDF.mockResolvedValueOnce({ success: false, error: { message: 'INVALID_PASSWORD' } }).mockResolvedValueOnce({ success: true, result: new Blob(['unlocked']) });
    render(<NextIntlClientProvider locale="en" messages={messages}><DecryptPDFTool /></NextIntlClientProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'Select locked PDF' }));
    const process = screen.getByRole('button', { name: 'Decrypt PDF' });
    await userEvent.click(process);
    expect(await screen.findByRole('dialog', { name: 'Error' })).toHaveAccessibleDescription(messages.tools.decryptPdf.invalidPassword);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(process).toHaveFocus());
    await userEvent.click(process);
    expect(await screen.findByRole('button', { name: /^Download/ })).toBeEnabled();
    expect(decryptPDF).toHaveBeenCalledTimes(2);
  });
});
