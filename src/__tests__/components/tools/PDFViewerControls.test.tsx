import { act, render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { PDFViewerControls } from '@/components/tools/PDFViewerControls';

afterEach(() => { document.documentElement.classList.remove('dark'); });

function setup() {
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  const doc = iframe.contentDocument!;
  doc.body.innerHTML = `<div id="toolbarContainer"><button id="next" class="toolbarButton" type="button"><span>Next page</span></button><button id="editorInkButton" class="toolbarButton" disabled type="button" role="radio" aria-checked="false"><span>Draw</span></button><input id="pageNumber" type="number" min="1" max="8" value="1" aria-label="Page"><select id="scaleSelect" aria-label="Zoom"><option value="1">100%</option><option value="2">200%</option></select></div>`;
  const next = doc.querySelector<HTMLButtonElement>('#next')!;
  const ink = doc.querySelector<HTMLButtonElement>('#editorInkButton')!;
  const page = doc.querySelector<HTMLInputElement>('#pageNumber')!;
  const click = vi.fn(() => { page.value = '2'; });
  next.addEventListener('click', click);
  const view = render(<PDFViewerControls iframe={iframe} locale="ar" />);
  return { doc, iframe, next, ink, page, click, view, cleanup: () => { view.unmount(); iframe.remove(); } };
}

describe('PDF.js shared controls', () => {
  it('keeps engine button identity, focus and keyboard actions, and preserves field change events', async () => {
    const { doc, next, page, click, cleanup } = setup();
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      expect(ui.getByRole('button', { name: 'Next page' })).toBe(next);
      expect(next).toHaveAttribute('data-slot', 'button');
      await user.tab();
      expect(next).toHaveFocus();
      await user.keyboard('{Enter}');
      expect(click).toHaveBeenCalledOnce();
      expect(page.value).toBe('2');
      expect(page).toHaveAttribute('min', '1');
      expect(page).toHaveAttribute('max', '8');
      const changed = vi.fn();
      doc.getElementById('scaleSelect')!.addEventListener('change', changed);
      await user.selectOptions(ui.getByRole('combobox', { name: 'Zoom' }), '2');
      expect(changed).toHaveBeenCalledOnce();
      expect(ui.getByRole('combobox', { name: 'Zoom' })).toHaveValue('2');
    } finally { cleanup(); }
    expect(next).not.toHaveAttribute('data-slot');
    expect(next.querySelector('svg')).toBeNull();
    expect(next).toHaveClass('toolbarButton');
  });

  it('follows native disabled, translated and selected state, theme and dynamically inserted controls', async () => {
    const { doc, ink, view, cleanup } = setup();
    try {
      expect(ink).toBeDisabled();
      expect(doc.documentElement).toHaveAttribute('dir', 'rtl');
      act(() => {
        document.documentElement.classList.add('dark');
        ink.disabled = false;
        ink.classList.add('toggled');
        ink.setAttribute('aria-checked', 'true');
        ink.querySelector('span')!.textContent = 'رسم';
        const zoom = doc.createElement('button');
        zoom.id = 'zoomInButton';
        zoom.textContent = 'Zoom in';
        doc.getElementById('toolbarContainer')!.appendChild(zoom);
      });
      await waitFor(() => expect(ink).toHaveAttribute('data-variant', 'secondary'));
      expect(within(doc.body).getByRole('radio', { name: 'رسم' })).toBeEnabled();
      expect(doc.documentElement).toHaveClass('dark');
      expect(doc.getElementById('zoomInButton')!.querySelector('svg')).not.toBeNull();
      act(() => { ink.classList.remove('toggled'); ink.setAttribute('aria-checked', 'false'); });
      await waitFor(() => expect(ink).toHaveAttribute('data-variant', 'ghost'));
      view.rerender(<PDFViewerControls iframe={null} locale="ar" />);
      expect(doc.querySelector('[data-pdf-viewer-icon-mount]')).toBeNull();
    } finally { cleanup(); }
  });

  it('preserves native dialog controls, password submission and signature tab state', async () => {
    const { doc, cleanup } = setup();
    try {
      const dialog = doc.createElement('dialog');
      dialog.id = 'passwordDialog';
      dialog.innerHTML = '<label for="password">Password</label><input id="password" type="password"><button id="passwordSubmit" type="button">Open</button><div role="tablist"><button id="addSignatureTypeButton" role="tab" aria-selected="true">Type</button><button id="addSignatureDrawButton" role="tab" aria-selected="false">Draw</button></div><label for="description">Description</label><textarea id="description"></textarea>';
      const submit = dialog.querySelector<HTMLButtonElement>('#passwordSubmit')!;
      const password = dialog.querySelector<HTMLInputElement>('#password')!;
      const submitted = vi.fn();
      submit.addEventListener('click', () => submitted(password.value));
      const draw = dialog.querySelector<HTMLButtonElement>('#addSignatureDrawButton')!;
      draw.addEventListener('click', () => { draw.setAttribute('aria-selected', 'true'); });
      act(() => { doc.body.appendChild(dialog); dialog.setAttribute('open', ''); });
      await waitFor(() => expect(dialog).toHaveAttribute('data-slot', 'dialog-content'));
      expect(dialog).toBe(doc.getElementById('passwordDialog'));
      expect(password).toHaveAttribute('data-slot', 'input');
      expect(submit).toHaveAttribute('data-variant', 'default');
      const user = userEvent.setup({ document: doc });
      await user.type(password, 'local-password');
      await user.click(submit);
      expect(submitted).toHaveBeenCalledWith('local-password');
      expect(submitted).toHaveBeenCalledOnce();
      await user.click(draw);
      await waitFor(() => expect(draw).toHaveAttribute('data-state', 'active'));
      expect(dialog.querySelector('textarea')).toHaveAttribute('data-slot', 'textarea');
    } finally { cleanup(); }
  });
});
