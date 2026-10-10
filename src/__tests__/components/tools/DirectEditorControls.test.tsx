import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DirectEditorControls } from '@/components/editor/DirectEditorControls';
import ids from '../../fixtures/direct-editor-dom-contract.json';

afterEach(() => {
  document.getElementById('direct-editor-engine')?.remove();
  document.documentElement.dir = 'ltr';
  document.documentElement.lang = 'en';
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
});
