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

  it('retains mixed plain and encrypted selection order through password retry', async () => {
    const makeFile = (name: string, marker: number) => {
      const file = new File(['document'], name, { type: 'application/pdf' });
      Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array([marker]).buffer });
      return file;
    };
    const files = [makeFile('first.PDF', 1), makeFile('middle.pdf', 0), makeFile('third.pdf', 2), makeFile('last.pdf', 0)];
    load.mockImplementation(async (data: ArrayBuffer) => { if (new Uint8Array(data)[0]) throw new Error('encrypted document'); return {}; });
    decryptPDF.mockResolvedValueOnce({ success: false, error: { message: 'INVALID_PASSWORD' } })
      .mockResolvedValueOnce({ success: true, result: new Blob(['first unlocked']) })
      .mockResolvedValueOnce({ success: true, result: new Blob(['third unlocked']) });
    const selected = vi.fn();
    render(<NextIntlClientProvider locale="en" messages={messages}><FileUploader multiple onFilesSelected={selected} /></NextIntlClientProvider>);
    fireEvent.drop(screen.getByRole('button', { name: 'Upload Files' }), { dataTransfer: { files } });
    const user = userEvent.setup();
    const input = await screen.findByLabelText('Enter document password...');
    expect(screen.getByRole('dialog')).toHaveTextContent('first.PDF');
    await user.type(input, 'wrong{Enter}');
    await screen.findByRole('alert');
    expect(selected).not.toHaveBeenCalled();
    await user.clear(input);
    await user.type(input, 'first-password{Enter}');
    await waitFor(() => expect(screen.getByRole('dialog')).toHaveTextContent('third.pdf'));
    expect(selected).not.toHaveBeenCalled();
    await user.type(input, 'third-password{Enter}');
    await waitFor(() => expect(selected).toHaveBeenCalledOnce());
    const ordered: File[] = selected.mock.calls[0][0];
    expect(ordered.map(file => file.name)).toEqual(['first_unlocked.pdf', 'middle.pdf', 'third_unlocked.pdf', 'last.pdf']);
    expect(ordered[1]).toBe(files[1]);
    expect(ordered[3]).toBe(files[3]);
    expect(decryptPDF).toHaveBeenNthCalledWith(2, files[0], { password: 'first-password' });
    expect(decryptPDF).toHaveBeenNthCalledWith(3, files[2], { password: 'third-password' });
  });
});
