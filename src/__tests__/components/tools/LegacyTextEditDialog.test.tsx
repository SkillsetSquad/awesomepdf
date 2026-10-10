import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LegacyTextEditDialog } from '@/components/tools/edit-pdf/LegacyTextEditDialog';

function setup() {
  const iframe = document.createElement('iframe');
  iframe.title = 'Annotation preview';
  document.body.appendChild(iframe);
  const post = vi.spyOn(iframe.contentWindow!, 'postMessage');
  const view = render(<LegacyTextEditDialog iframe={iframe} locale="en" cancelLabel="Cancel" applyLabel="Apply" />);
  const receive = (type: string, payload: unknown, source: MessageEventSource | null = iframe.contentWindow, origin = window.location.origin) => {
    act(() => window.dispatchEvent(new MessageEvent('message', { origin, source, data: { type, payload } })));
  };
  const select = () => receive('pdfcraft:select-existing-text', { requestId: 7, text: 'Original title', labels: { heading: 'Edit existing text', overflow: 'Text overflows the original area', signature: 'Review existing signatures' } });
  return { iframe, post, receive, select, cleanup: () => { view.unmount(); iframe.remove(); } };
}

describe('Annotation text editing dialog', () => {
  it('previews changes and applies the selected text-fit mode', async () => {
    const { post, receive, select, cleanup } = setup();
    try {
      select();
      const input = screen.getByRole('textbox', { name: 'New text' });
      await waitFor(() => expect(input).toHaveFocus());
      await userEvent.clear(input);
      await userEvent.type(input, 'Updated title');
      expect(post).toHaveBeenLastCalledWith({ type: 'pdfcraft:preview-existing-text', payload: { requestId: 7, text: 'Updated title' } }, window.location.origin);
      receive('pdfcraft:text-overflow', { requestId: 7, overflow: true });
      expect(screen.getByRole('status')).toHaveTextContent('Text overflows the original area');
      await userEvent.selectOptions(screen.getByRole('combobox', { name: 'If it does not fit' }), 'shrink');
      await userEvent.click(screen.getByRole('button', { name: 'Apply' }));
      expect(post).toHaveBeenLastCalledWith({ type: 'pdfcraft:apply-existing-text', payload: { requestId: 7, replacementText: 'Updated title', fitMode: 'shrink' } }, window.location.origin);
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    } finally { cleanup(); }
  });

  it('cancels on Escape and restores focus to the document iframe', async () => {
    const { iframe, post, select, cleanup } = setup();
    try {
      select();
      await userEvent.keyboard('{Escape}');
      expect(post).toHaveBeenLastCalledWith({ type: 'pdfcraft:close-existing-text', payload: { requestId: 7 } }, window.location.origin);
      await waitFor(() => expect(iframe).toHaveFocus());
    } finally { cleanup(); }
  });

  it('rejects messages from another window or origin and ignores stale preview feedback', () => {
    const { receive, select, cleanup } = setup();
    try {
      receive('pdfcraft:select-existing-text', { requestId: 7, text: 'Spoofed' }, window);
      receive('pdfcraft:select-existing-text', { requestId: 7, text: 'Spoofed' }, null, 'https://example.test');
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      select();
      receive('pdfcraft:text-overflow', { requestId: 6, overflow: true });
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
      receive('pdfcraft:cancel-existing-text', { requestId: 6 });
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    } finally { cleanup(); }
  });
});
