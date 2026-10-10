import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { SignPDFTool } from '@/components/tools/sign/SignPDFTool';
function view() { render(<NextIntlClientProvider locale="en" messages={messages}><SignPDFTool /></NextIntlClientProvider>); }
beforeEach(() => localStorage.clear());
describe('Signature dialogs', () => {
  it('opens the saved-signature dialog from its trigger and restores focus on Escape', async () => {
    view();
    const trigger = screen.getByRole('button', { name: /签名库/ });
    await userEvent.click(trigger);
    expect(await screen.findByRole('dialog', { name: '签名库管理' })).toHaveAttribute('dir', 'ltr');
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  });
  it('switches from the library to extraction with one active dialog and can close it', async () => {
    view();
    await userEvent.click(screen.getByRole('button', { name: /签名库/ }));
    const library = await screen.findByRole('dialog', { name: '签名库管理' });
    await userEvent.click(within(library).getAllByRole('button', { name: /从已签署 PDF 提取/ })[0]);
    const extractor = await screen.findByRole('dialog', { name: '从已签署 PDF 提取签名 / 印章' });
    expect(screen.getAllByRole('dialog')).toHaveLength(1);
    await userEvent.click(within(extractor).getByRole('button', { name: 'Close', exact: true }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(screen.getByRole('button', { name: '从 PDF 提取', exact: true })).toHaveFocus();
  });
});
