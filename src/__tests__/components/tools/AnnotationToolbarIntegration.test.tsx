import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { createRoot, type Root } from 'react-dom/client';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, fireEvent, render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LegacyEditorControls } from '@/components/tools/edit-pdf/LegacyEditorControls';
import { toast } from 'sonner';

vi.mock('sonner', () => ({ toast: { error: vi.fn() } }));

type Annotation = { name: string; type: number; pdfjsEditorType: number; icon: React.ReactNode; style?: { color: string }; styleEditable?: { color: boolean } };
type ToolbarProps = { defaultSidebarOpen: boolean; onChange: (annotation: Annotation | null, image: string | null) => void; onSidebarOpen: (open: boolean) => void; onExport: (format: string) => void };
type GraphicProps = { annotation: Annotation; onAdd: (image: string) => void };

/** Execute the shipped toolbar's state/handlers with small popover fixtures; no PDF is opened. */
function setup(exportPdf = true, exportExcel = true) {
  const iframe = document.createElement('iframe');
  document.body.append(iframe);
  const doc = iframe.contentDocument!;
  const host = doc.createElement('div');
  doc.body.append(host);
  const tools: Annotation[] = [
    { name: 'select', type: 0, pdfjsEditorType: 0, icon: <svg /> },
    { name: 'rectangle', type: 4, pdfjsEditorType: 15, icon: <svg />, style: { color: '#123456' }, styleEditable: { color: true } },
    { name: 'signature', type: 101, pdfjsEditorType: 13, icon: <svg /> },
    { name: 'stamp', type: 13, pdfjsEditorType: 13, icon: <svg /> },
  ];
  const onChange = vi.fn();
  const onSidebarOpen = vi.fn();
  const onExport = vi.fn();
  const notices = vi.fn();
  const labels: Record<string, string> = { select: 'Select', rectangle: 'Rectangle', signature: 'Signature', stamp: 'Stamp', color: 'Color', export: 'Export', anno: 'Comments' };
  const Graphic = ({ annotation, onAdd }: GraphicProps) => {
    const [open, setOpen] = React.useState(false);
    return <span data-testid={`${annotation.name}-anchor`} onClick={() => setOpen(true)}>
      <div className="icon">{annotation.icon}</div><div className="name">{labels[annotation.name]}</div>
      {open && createPortal(<button onClick={() => { onAdd(`data:image/png;base64,${annotation.name}`); setOpen(false); }}>Use {annotation.name}</button>, doc.body)}
    </span>;
  };
  const Popover = ({ children, content }: { children: React.ReactNode; content: React.ReactNode }) => {
    const [open, setOpen] = React.useState(false);
    return <span data-testid="export-anchor" onClick={() => setOpen(true)}>{children}{open && createPortal(<div>{content}</div>, doc.body)}</span>;
  };
  const ColorPicker = ({ children, disabled, onChangeComplete }: { children: React.ReactElement<React.HTMLAttributes<HTMLElement>>; disabled: boolean; onChangeComplete: (color: { toHexString: () => string }) => void }) => {
    const [open, setOpen] = React.useState(false);
    return <>{React.cloneElement(children, { onClick: () => { if (!disabled) setOpen(true); } })}{open && createPortal(<input type="color" aria-label="Native color" onChange={event => onChangeComplete({ toHexString: () => event.target.value })} />, doc.body)}</>;
  };
  const Icon = ({ style }: { style?: React.CSSProperties }) => <svg style={style} />;
  const Space = ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
  const NativeButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => <button onClick={onClick}>{children}</button>;
  const bundle = readFileSync(resolve('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js'), 'utf8');
  const start = bundle.indexOf('nL=(0,m.forwardRef)');
  const end = bundle.indexOf('oL=o(1665)', start);
  if (start < 0 || end < 0) throw new Error('Shipped annotation toolbar renderer was not found.');
  const renderer = bundle.slice(start, end).trim().replace(/^nL=/, '').replace(/,$/, '');
  const Toolbar = new Function('m', 'Po', 'Ao', 'To', 'tL', 'ke', 'JB', 'Mn', 'ad', '$B', 'bF', 'Eo', 'pS', 'SS', 'AC', 'hm', 'po', 'go', 'vo', 'xF', 'yo', `return ${renderer}`)(
    React, tools, { HIGHLIGHT: 9 }, { STAMP: 13, SIGNATURE: 101 }, (value: unknown) => value,
    () => ({ t: (key: string) => labels[key.split('.').at(-1)!] ?? key }), Object.assign, jsxRuntime, { open: notices }, Graphic, Graphic,
    { setting: { COLOR: '#000000', SAVE_BUTTON: false, EXPORT_PDF: exportPdf, EXPORT_EXCEL: exportExcel }, colors: [] },
    ColorPicker, Space, NativeButton, Popover, Icon, Icon, Icon, Icon, Icon,
  ) as React.ComponentType<ToolbarProps>;
  let root!: Root;
  act(() => { root = createRoot(host); root.render(<Toolbar defaultSidebarOpen={false} onChange={onChange} onSidebarOpen={onSidebarOpen} onExport={onExport} />); });
  const view = render(<LegacyEditorControls iframe={iframe} locale="ar" undo="Undo" redo="Redo" />);
  return { doc, tools, onChange, onSidebarOpen, onExport, notices, cleanup: () => { view.unmount(); act(() => root.unmount()); iframe.remove(); } };
}

describe('Shipped annotation toolbar integration', () => {
  it('preserves tool/color/comment engine changes, selected state and native cleanup through keyboard controls', async () => {
    const { doc, tools, onChange, onSidebarOpen, cleanup } = setup();
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      const rectangle = ui.getByRole('button', { name: 'Rectangle' });
      const color = ui.getByRole('button', { name: 'Color' });
      expect(color).toBeDisabled();
      expect(rectangle).toHaveAttribute('dir', 'rtl');
      rectangle.focus();
      await user.keyboard('{Enter}');
      await waitFor(() => expect(rectangle).toHaveAttribute('aria-pressed', 'true'));
      expect(onChange).toHaveBeenLastCalledWith(tools[1], null);
      expect(color).toBeEnabled();
      const changeCount = onChange.mock.calls.length;
      color.focus();
      await user.keyboard('{Enter}');
      fireEvent.change(ui.getByLabelText('Native color'), { target: { value: '#abcdef' } });
      await waitFor(() => expect(onChange).toHaveBeenCalledTimes(changeCount + 1));
      expect(onChange).toHaveBeenLastCalledWith(expect.objectContaining({ type: 4, style: { color: '#abcdef' } }), null);
      const comments = ui.getByRole('button', { name: 'Comments' });
      comments.focus();
      await user.keyboard(' ');
      expect(onSidebarOpen).toHaveBeenCalledOnce();
      expect(onSidebarOpen).toHaveBeenCalledWith(true);
      await waitFor(() => expect(comments).toHaveAttribute('aria-pressed', 'true'));
      await user.click(rectangle);
      await waitFor(() => expect(rectangle).toHaveAttribute('aria-pressed', 'false'));
      expect(onChange).toHaveBeenLastCalledWith(null, null);
    } finally { cleanup(); }
    expect(doc.querySelector('[data-awesomepdf-mount]')).toBeNull();
    expect(doc.querySelector('[data-awesomepdf-action]')).toBeNull();
  });

  it('activates native graphic anchors and exposes the engine export callback through an accessible menu', async () => {
    const { doc, tools, onChange, onExport, notices, cleanup } = setup();
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      for (const [label, name, tool] of [['Signature', 'signature', tools[2]], ['Stamp', 'stamp', tools[3]]] as const) {
        const trigger = ui.getByRole('button', { name: label });
        expect(ui.getByTestId(`${name}-anchor`)).toContainElement(trigger);
        trigger.focus();
        await user.keyboard('{Enter}');
        await user.click(ui.getByRole('button', { name: `Use ${name}` }));
        await waitFor(() => expect(onChange).toHaveBeenLastCalledWith(tool, `data:image/png;base64,${name}`));
        await waitFor(() => expect(trigger).toHaveAttribute('aria-pressed', 'true'));
      }
      expect(notices).toHaveBeenCalledTimes(2);
      const exportButton = ui.getByRole('button', { name: 'Export' });
      expect(ui.getByTestId('export-anchor')).toContainElement(exportButton);
      exportButton.focus();
      await user.keyboard('{Enter}');
      const menu = await ui.findByRole('menu');
      expect(menu.ownerDocument).toBe(doc);
      expect(menu).toHaveAttribute('dir', 'rtl');
      expect(ui.queryByRole('button', { name: 'PDF' })).toBeNull();
      await waitFor(() => expect(ui.getByRole('menuitem', { name: 'PDF' })).toHaveFocus());
      await user.keyboard('{Enter}');
      await waitFor(() => expect(onExport).toHaveBeenCalledWith('pdf'));
      await waitFor(() => expect(exportButton).toHaveFocus());
      await user.keyboard('{Enter}');
      const excel = await ui.findByRole('menuitem', { name: 'Excel' });
      await user.keyboard('{End}');
      expect(excel).toHaveFocus();
      await user.keyboard('{Home}');
      expect(ui.getByRole('menuitem', { name: 'PDF' })).toHaveFocus();
      await user.keyboard('{ArrowDown}');
      await waitFor(() => expect(excel).toHaveFocus());
      await user.keyboard('{Enter}');
      expect(onExport.mock.calls).toEqual([['pdf'], ['excel']]);
    } finally { cleanup(); }
  });

  it('respects enabled formats, dismisses with Escape and restores focus after a failed export', async () => {
    const { doc, onExport, cleanup } = setup(true, false);
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      const trigger = ui.getByRole('button', { name: 'Export' });
      trigger.focus();
      await user.keyboard('{Enter}');
      await ui.findByRole('menuitem', { name: 'PDF' });
      expect(ui.queryByRole('menuitem', { name: 'Excel' })).toBeNull();
      await user.keyboard('{Escape}');
      await waitFor(() => expect(ui.queryByRole('menu')).toBeNull());
      expect(trigger).toHaveFocus();
      onExport.mockImplementationOnce(() => Promise.reject(new Error('Local export unavailable')));
      await user.keyboard('{Enter}');
      await user.click(await ui.findByRole('menuitem', { name: 'PDF' }));
      await waitFor(() => expect(toast.error).toHaveBeenCalledWith('Local export unavailable'));
      expect(trigger).toBeEnabled();
      trigger.focus();
      await user.keyboard('{Enter}');
      await user.click(await ui.findByRole('menuitem', { name: 'PDF' }));
      expect(onExport).toHaveBeenCalledTimes(2);
    } finally { cleanup(); }
  });

  it('prevents repeated export while pending and restores the trigger after completion', async () => {
    const { doc, onExport, cleanup } = setup(true, false);
    let completeExport!: () => void;
    onExport.mockImplementationOnce(() => new Promise<void>(resolve => { completeExport = resolve; }));
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      const trigger = ui.getByRole('button', { name: 'Export' });
      trigger.focus();
      await user.keyboard('{Enter}');
      await user.click(await ui.findByRole('menuitem', { name: 'PDF' }));
      expect(trigger).toBeDisabled();
      expect(trigger).toHaveAttribute('aria-busy', 'true');
      expect(onExport).toHaveBeenCalledOnce();
      act(() => completeExport());
      await waitFor(() => expect(trigger).toBeEnabled());
      await waitFor(() => expect(trigger).toHaveFocus());
      await user.keyboard('{Enter}');
      await user.click(await ui.findByRole('menuitem', { name: 'PDF' }));
      expect(onExport).toHaveBeenCalledTimes(2);
    } finally { cleanup(); }
  });
});
