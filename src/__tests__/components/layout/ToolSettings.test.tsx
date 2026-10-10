import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { EncryptPDFTool } from '@/components/tools/encrypt/EncryptPDFTool';
import { TextColorTool } from '@/components/tools/text-color/TextColorTool';
const { encryptPDF, changeTextColor } = vi.hoisted(() => ({ encryptPDF: vi.fn(), changeTextColor: vi.fn() }));
vi.mock('@/lib/pdf/processors/encrypt', () => ({ encryptPDF }));
vi.mock('@/lib/pdf/processors/text-color', () => ({ changeTextColor }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([new File(['pdf'], 'test.pdf')])}>Select test PDF</button> }));
beforeEach(() => { encryptPDF.mockResolvedValue({ success: true, result: new Blob(['encrypted']) }); changeTextColor.mockResolvedValue({ success: true, result: new Blob(['changed']) }); });
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
  it('passes arrow-key radio and slider values into the PDF text-color operation', async () => {
    render(<NextIntlClientProvider locale="en" messages={messages}><TextColorTool /></NextIntlClientProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'Select test PDF' }));
    const dark = screen.getByRole('radio', { name: 'Dark text (light background)' });
    act(() => dark.focus());
    await userEvent.keyboard('{ArrowRight>}');
    await waitFor(() => expect(screen.getByRole('radio', { name: 'Light text (dark background)' })).toBeChecked());
    await userEvent.keyboard('{/ArrowRight}');
    screen.getByRole('slider', { name: 'Brightness Threshold' }).focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '129');
    await userEvent.click(screen.getByRole('button', { name: 'Apply Text Color' }));
    await waitFor(() => expect(changeTextColor).toHaveBeenCalledOnce());
    expect(changeTextColor.mock.calls[0][1]).toMatchObject({ mode: 'light', threshold: 129 });
  });

});
