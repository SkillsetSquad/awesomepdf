import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { FileUploader } from '@/components/tools/FileUploader';
const { decryptPDF, load } = vi.hoisted(() => ({ decryptPDF: vi.fn(), load: vi.fn() }));
vi.mock('pdf-lib', () => ({ PDFDocument: { load } }));
vi.mock('@/lib/pdf/processors/decrypt', () => ({ decryptPDF }));
function encryptedFile() {
  const file = new File(['encrypted'], 'locked.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(1) });
  return file;
}
function view(onFilesSelected = vi.fn()) {
  render(<NextIntlClientProvider locale="en" messages={messages}><FileUploader onFilesSelected={onFilesSelected} /></NextIntlClientProvider>);
  const trigger = screen.getByRole('button', { name: 'Upload Files' });
  trigger.focus();
  fireEvent.drop(trigger, { dataTransfer: { files: [encryptedFile()] } });
  return trigger;
}
beforeEach(() => { load.mockRejectedValue(new Error('encrypted document')); decryptPDF.mockReset(); });
describe('Encrypted uploads', () => {
  it('focuses the password field, displays a failed password and retries local decryption', async () => {
    decryptPDF.mockResolvedValueOnce({ success: false, error: { message: 'INVALID_PASSWORD' } }).mockResolvedValueOnce({ success: true, result: new Blob(['unlocked'], { type: 'application/pdf' }) });
    const selected = vi.fn();
    view(selected);
    const input = await screen.findByLabelText('Enter document password...');
    await waitFor(() => expect(input).toHaveFocus());
    await userEvent.type(input, 'wrong{Enter}');
    expect(await screen.findByRole('alert')).toHaveTextContent(messages.errors.incorrectPassword);
    await userEvent.clear(input);
    await userEvent.type(input, 'correct{Enter}');
    await waitFor(() => expect(selected).toHaveBeenCalledOnce());
    expect(selected.mock.calls[0][0][0]).toMatchObject({ name: 'locked_unlocked.pdf', type: 'application/pdf' });
    expect(decryptPDF.mock.calls[1][1]).toEqual({ password: 'correct' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
  it('cancels with Escape and restores focus to the upload control', async () => {
    const trigger = view();
    await screen.findByRole('dialog');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });
});
