import { act, render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AnnotationHistoryControls } from '@/components/tools/edit-pdf/AnnotationHistoryControls';
import { annotation, engineFixture } from '../../fixtures/annotation-engine';

function setup() {
  const iframe = document.createElement('iframe'); document.body.append(iframe);
  const doc = iframe.contentDocument!;
  doc.documentElement.dir = 'rtl';
  doc.body.innerHTML = '<div class="CustomToolbar"><ul class="buttons"></ul></div><div tabindex="0" id="viewerContainer"></div><input aria-label="Comment" />';
  const fixture = engineFixture();
  Object.assign(iframe.contentWindow!, { pdfjsAnnotationExtensionInstance: fixture.engine });
  const onError = vi.fn();
  const view = render(<AnnotationHistoryControls iframe={iframe} undo="تراجع" redo="إعادة" onError={onError} />);
  return { ...fixture, doc, onError, cleanup: () => { view.unmount(); iframe.remove(); } };
}

describe('Native annotation history controls', () => {
  it('supports keyboard buttons and shortcuts, restores focus, and leaves text-field shortcuts to the field', async () => {
    const { doc, painter, records, cleanup } = setup();
    try {
      const ui = within(doc.body); const user = userEvent.setup({ document: doc });
      const undo = await ui.findByRole('button', { name: 'تراجع' }); const redo = ui.getByRole('button', { name: 'إعادة' });
      expect(undo).toBeDisabled(); expect(redo).toBeDisabled();
      act(() => painter.saveToStore(annotation('one')));
      await waitFor(() => expect(undo).toBeEnabled()); undo.focus(); await user.keyboard('{Enter}');
      expect(records.has('one')).toBe(false); expect(redo).toBeEnabled();
      await waitFor(() => expect(redo).toHaveFocus());
      redo.focus(); await user.keyboard(' '); expect(records.has('one')).toBe(true);
      ui.getByRole('textbox', { name: 'Comment' }).focus(); await user.keyboard('{Control>}z{/Control}');
      expect(records.has('one')).toBe(true);
      doc.getElementById('viewerContainer')!.focus(); await user.keyboard('{Control>}z{/Control}');
      expect(records.has('one')).toBe(false);
      await user.keyboard('{Control>}{Shift>}z{/Shift}{/Control}'); expect(records.has('one')).toBe(true);
    } finally { cleanup(); }
  });

  it('reports restore failures and removes timers, portal anchors and engine wrappers when unmounted', async () => {
    const { doc, painter, onError, cleanup } = setup();
    const native = painter.update;
    act(() => painter.saveToStore(annotation('one')));
    const redraw = painter.reDrawAnnotation;
    painter.reDrawAnnotation = vi.fn().mockImplementationOnce(() => { throw new Error('Cannot redraw'); }).mockImplementation(redraw);
    const user = userEvent.setup({ document: doc });
    await user.click(await within(doc.body).findByRole('button', { name: 'تراجع' }));
    expect(onError).toHaveBeenCalledOnce();
    cleanup();
    expect(doc.querySelector('[data-awesomepdf-control]')).toBeNull();
    // update was wrapped by the mounted controller, then restored on disposal.
    expect(painter.update).not.toBe(native);
  });
});
