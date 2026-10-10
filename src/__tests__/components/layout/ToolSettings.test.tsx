import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { EncryptPDFTool } from '@/components/tools/encrypt/EncryptPDFTool';
const { encryptPDF } = vi.hoisted(() => ({ encryptPDF: vi.fn() }));
vi.mock('@/lib/pdf/processors/encrypt', () => ({ encryptPDF }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([new File(['pdf'], 'test.pdf')])}>Select test PDF</button> }));
beforeEach(() => { encryptPDF.mockResolvedValue({ success: true, result: new Blob(['encrypted']) }); });
describe('Tool settings', () => {
  it('updates permissions from label clicks and keyboard checkbox interaction and keeps password input values', async () => {
    render(<NextIntlClientProvider locale="en" messages={messages}><EncryptPDFTool /></NextIntlClientProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'Select test PDF' }));
    const printing = screen.getByRole('checkbox', { name: 'Allow Printing' });
    expect(printing).toBeChecked();
    await userEvent.click(screen.getByText('Allow Printing'));
    expect(printing).not.toBeChecked();
    printing.focus();
    await userEvent.keyboard(' ');
    expect(printing).toBeChecked();
    await userEvent.click(printing);
    await userEvent.type(screen.getByLabelText('User Password (to open document)'), 'local-test');
    await userEvent.click(screen.getByRole('button', { name: 'Encrypt PDF' }));
    await waitFor(() => expect(encryptPDF).toHaveBeenCalledOnce());
    expect(encryptPDF.mock.calls[0][1]).toMatchObject({ userPassword: 'local-test', permissions: { printing: false, modifying: true, copying: true } });
    expect(await screen.findByRole('button', { name: /^Download/ })).toBeEnabled();
  });
});
