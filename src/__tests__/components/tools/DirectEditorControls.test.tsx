import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, fireEvent, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DirectEditorControls } from '@/components/editor/DirectEditorControls';
import ids from '../../fixtures/direct-editor-dom-contract.json';

afterEach(() => {
  document.getElementById('direct-editor-engine')?.remove();
  document.documentElement.dir = 'ltr';
  document.documentElement.lang = 'en';
  Reflect.deleteProperty(window, 'appModule');
});

describe('Direct editor engine controls', () => {
  it('keeps the existing engine DOM identifiers and direct toolbar children', () => {
    render(<DirectEditorControls labels={{}} locale="en" />);
    for (const id of ids) expect(document.getElementById(id), id).toBeInTheDocument();
    for (const id of ['fToggles', 'fAlign', 'fDir', 'fList', 'fLevel', 'alignTools']) {
      for (const child of document.getElementById(id)!.children) {
        expect(child.tagName, id).toBe('BUTTON');
        expect(child).toHaveAttribute('data-slot', 'button');
      }
    }
    expect(document.getElementById('fFamily')).toBeInstanceOf(HTMLSelectElement);
    expect(document.getElementById('file')).toHaveAttribute('type', 'file');
    expect(document.getElementById('save')).toBeDisabled();
    expect(document.getElementById('direct-editor-engine')).toHaveAttribute('type', 'module');
    expect(document.getElementById('direct-editor-engine')).toHaveAttribute('src', '/direct-pdf-editor/main.js');
  });

  it('bridges standard checkbox interaction into the engine native input without resetting other values', async () => {
    render(<DirectEditorControls labels={{}} locale="en" />);
    document.getElementById('findbar')!.hidden = false;
    const native = document.getElementById('caseSens') as HTMLInputElement;
    const changes = vi.fn();
    native.addEventListener('change', changes);
    const size = document.getElementById('fSize') as HTMLInputElement;
    size.value = '20';
    fireEvent.change(size);
    await userEvent.click(document.getElementById('caseSens-control')!);
    expect(native.checked).toBe(true);
    expect(changes).toHaveBeenCalledOnce();
    expect(size.value).toBe('20');
  });

  it('keeps combined edit scopes and restores keyboard focus after dismissing the menu', async () => {
    render(<DirectEditorControls labels={{}} locale="en" />);
    const scope = document.getElementById('editScope') as HTMLSelectElement;
    const changes = vi.fn();
    scope.addEventListener('change', changes);
    const trigger = screen.getByRole('button', { name: 'Edit existing content' });
    await userEvent.click(trigger);
    await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Edit Text' }));
    expect(scope.value).toBe('text');
    await userEvent.click(screen.getByRole('menuitemcheckbox', { name: 'Edit Images' }));
    expect(scope.value).toBe('text,image');
    expect(changes).toHaveBeenCalledTimes(2);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(document.getElementById('editLabel')).toHaveTextContent('Edit Text + Edit Images');
  });

  it('passes a zoom preset to the existing editor API', async () => {
    const setZoom = vi.fn();
    Object.defineProperty(window, 'appModule', { configurable: true, value: { getZoom: () => 1, setZoom } });
    render(<DirectEditorControls labels={{}} locale="en" />);
    const trigger = screen.getByRole('button', { name: 'Zoom presets' });
    await userEvent.click(trigger);
    expect(screen.getByRole('menuitemradio', { name: '100%' })).toHaveAttribute('aria-checked', 'true');
    await userEvent.click(screen.getByRole('menuitemradio', { name: '150%' }));
    expect(setZoom).toHaveBeenCalledOnce();
    expect(setZoom).toHaveBeenCalledWith(1.5);
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('displays local document properties in a dialog and returns focus on Escape', async () => {
    const getDocDescription = vi.fn(() => ({ meta: { name: 'layout.pdf', size: 2048 }, fields: { Title: 'Local document title' } }));
    Object.defineProperty(window, 'appModule', { configurable: true, value: { getDocDescription } });
    render(<DirectEditorControls labels={{}} locale="en" />);
    const trigger = screen.getByRole('button', { name: 'Document properties' });
    await userEvent.click(trigger);
    const dialog = screen.getByRole('dialog', { name: 'Document Properties' });
    expect(within(dialog).getByText('layout.pdf')).toBeInTheDocument();
    expect(within(dialog).getByText('Local document title')).toBeInTheDocument();
    expect(within(dialog).getByText('2.0 KB')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
