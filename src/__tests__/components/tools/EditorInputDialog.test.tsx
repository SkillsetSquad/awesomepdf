import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { EditorInputDialog } from '@/components/editor/EditorInputDialog';
import { requestEditorInput } from '../../../../public/direct-pdf-editor/ui.js';

describe('Direct editor input dialogs', () => {
  it('submits a password and allows a localized retry without calling a browser prompt', async () => {
    render(<EditorInputDialog labels={{ invalidPassword: 'Try your password again' }} locale="en" />);
    let first!: Promise<unknown>;
    act(() => { first = requestEditorInput({ kind: 'password' }); });
    const password = screen.getByLabelText('PDF Password');
    await waitFor(() => expect(password).toHaveFocus());
    expect(password).toHaveAttribute('type', 'password');
    await userEvent.type(password, 'local-secret{Enter}');
    await expect(first).resolves.toBe('local-secret');
    let second!: Promise<unknown>;
    act(() => { second = requestEditorInput({ kind: 'password', retry: true }); });
    expect(screen.getByText('Try your password again')).toBeInTheDocument();
    expect(screen.getByLabelText('PDF Password')).toHaveValue('');
    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }));
    await expect(second).resolves.toBeNull();
  });

  it('preserves existing alt text, supports cancellation and returns focus', async () => {
    render(<><button>Image properties</button><EditorInputDialog labels={{}} locale="ar" /></>);
    const trigger = screen.getByRole('button', { name: 'Image properties' });
    await userEvent.click(trigger);
    let result!: Promise<unknown>;
    act(() => { result = requestEditorInput({ kind: 'altText', value: 'A blue chart' }); });
    expect(screen.getByRole('dialog')).toHaveAttribute('dir', 'rtl');
    const input = screen.getByRole('textbox', { name: 'Image alt text' });
    expect(input).toHaveValue('A blue chart');
    await waitFor(() => expect(input).toHaveFocus());
    await userEvent.keyboard('{Escape}');
    await expect(result).resolves.toBeNull();
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('resolves cancellation if the UI is unavailable or unmounts', async () => {
    await expect(requestEditorInput({ kind: 'password' })).resolves.toBeNull();
    const { unmount } = render(<EditorInputDialog labels={{}} locale="en" />);
    let result!: Promise<unknown>;
    act(() => { result = requestEditorInput({ kind: 'altText' }); });
    unmount();
    await expect(result).resolves.toBeNull();
  });

  it('returns updated image text, including an empty value to remove the description', async () => {
    render(<EditorInputDialog labels={{}} locale="en" />);
    let result!: Promise<unknown>;
    act(() => { result = requestEditorInput({ kind: 'altText', value: 'Old description' }); });
    await userEvent.clear(screen.getByRole('textbox', { name: 'Image alt text' }));
    await userEvent.click(screen.getByRole('button', { name: 'Apply' }));
    await expect(result).resolves.toBe('');
  });
});
