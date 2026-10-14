import { act, render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { LegacyEditorControls } from '@/components/tools/edit-pdf/LegacyEditorControls';

afterEach(() => { document.documentElement.classList.remove('dark'); });

function setup() {
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  const doc = iframe.contentDocument!;
  doc.body.innerHTML = '<div class="CustomToolbar"><ul class="buttons"><li class="pdfcraft-undo-btn"><button disabled>Undo</button></li><li class="pdfcraft-redo-btn"><button disabled>Redo</button></li><li id="pdfcraft-edit-existing-text" title="Edit text"></li></ul></div>';
  const undo = doc.querySelector<HTMLButtonElement>('.pdfcraft-undo-btn button')!;
  const edit = doc.getElementById('pdfcraft-edit-existing-text')!;
  const editAction = vi.fn();
  const undoAction = vi.fn();
  edit.addEventListener('click', editAction);
  undo.addEventListener('click', undoAction);
  const view = render(<LegacyEditorControls iframe={iframe} locale="ar" undo="Undo annotation" redo="Redo annotation" />);
  return { iframe, doc, undo, edit, editAction, undoAction, cleanup: () => { view.unmount(); iframe.remove(); } };
}

describe('Annotation editor controls', () => {
  it('passes keyboard actions once to the existing viewer and follows selection and history state', async () => {
    const { doc, undo, edit, editAction, undoAction, cleanup } = setup();
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      const undoButton = ui.getByRole('button', { name: 'Undo annotation' });
      expect(undoButton).toBeDisabled();
      const editButton = ui.getByRole('button', { name: 'Edit text' });
      expect(editButton).toHaveAttribute('dir', 'rtl');
      expect(editButton).toHaveAttribute('data-slot', 'button');
      await user.tab();
      expect(editButton).toHaveFocus();
      await user.keyboard('{Enter}');
      expect(editAction).toHaveBeenCalledOnce();
      act(() => { edit.classList.add('pdfcraft-active'); undo.disabled = false; });
      await waitFor(() => expect(editButton).toHaveAttribute('aria-pressed', 'true'));
      expect(undoButton).toBeEnabled();
      undoButton.focus();
      await user.keyboard('{Enter}');
      expect(undoAction).toHaveBeenCalledOnce();
    } finally { cleanup(); }
  });

  it('syncs theme, renders the edit hint as an alert, and cleans up the iframe mounts', async () => {
    const { iframe, doc, cleanup } = setup();
    try {
      act(() => {
        document.documentElement.classList.add('dark');
        const hint = doc.createElement('div');
        hint.id = 'pdfcraft-text-edit-hint';
        hint.dataset.message = 'Select a text block';
        doc.body.appendChild(hint);
      });
      await waitFor(() => expect(doc.documentElement).toHaveClass('dark', 'is-dark'));
      expect(within(doc.body).getByRole('status')).toHaveTextContent('Select a text block');
      expect(iframe).toBeInTheDocument();
    } finally { cleanup(); }
    expect(doc.querySelector('[data-awsomepdf-mount]')).toBeNull();
    expect(doc.querySelector('[data-awsomepdf-control]')).toBeNull();
  });
});
