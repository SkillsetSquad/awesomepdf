import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import * as React from 'react';
import { createRoot, type Root } from 'react-dom/client';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LegacyEditorControls } from '@/components/tools/edit-pdf/LegacyEditorControls';

type Annotation = { id: string; type: number; pageNumber: number; konvaString: string };
type Rect = { x: number; y: number; width: number; height: number };
type MenuRef = { open: (annotation: Annotation, rect: Rect) => void; close: () => void };
type MenuProps = { onOpenComment: (annotation: Annotation) => void; onDelete: (annotation: Annotation) => void; onChangeStyle: (annotation: Annotation, style: Record<string, number | string>) => void };

/** Execute the shipped menu, with Konva measurements and its remaining native form controls stubbed. */
async function setup(locale: 'en' | 'ar' = 'en') {
  const iframe = document.createElement('iframe');
  document.body.append(iframe);
  const doc = iframe.contentDocument!;
  doc.body.innerHTML = '<div id="viewerContainer" tabindex="0"><div id="painter_page_1"><div class="konvajs-content"></div></div></div><div class="CustomComment"><input aria-label="Comment filter" /></div><div id="native-menu"></div>';
  const page = doc.querySelector('.konvajs-content')!;
  vi.spyOn(page, 'getBoundingClientRect').mockReturnValue({ x: 100, y: 200, left: 100, top: 200, width: 500, height: 700, right: 600, bottom: 900, toJSON: () => ({}) });
  const bundle = readFileSync(resolve('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js'), 'utf8');
  const start = bundle.indexOf('N$=(0,m.forwardRef)');
  const end = bundle.indexOf(';function F$(', start);
  if (start < 0 || end < 0) throw new Error('Native context menu was not found.');
  const renderer = bundle.slice(start + 'N$='.length, end);
  const Icon = () => <svg />;
  const Form = Object.assign(({ children }: { children: React.ReactNode }) => <div>{children}</div>, { Item: ({ children, label }: { children: React.ReactNode; label: string }) => <div>{label}{children}</div> });
  const NativeSlider = ({ value, min, max, onChange }: { value: number; min: number; max: number; onChange: (value: number) => void }) => <input type="range" tabIndex={0} value={value} min={min} max={max} onChange={event => onChange(Number(event.target.value))} />;
  const position = vi.fn(async (anchor: { getBoundingClientRect: () => Rect }) => {
    const rect = anchor.getBoundingClientRect();
    return { x: rect.x, y: rect.y + rect.height };
  });
  const Menu = new Function('m', '_$', 'Eo', 'ke', 'IE', 'requestAnimationFrame', 'document', 'sL', 'pn', 'hn', 'Po', 'Mn', 'rF', 'Lm', 'OD', 'gx', 'yo', 'po', 'So', `return ${renderer};`)(
    React, (value: unknown) => value, { setting: { COLOR: '#123456', STROKE_WIDTH: 2, OPACITY: 1 }, colors: ['#123456', '#ff0000'] }, () => ({ t: (key: string) => key }),
    () => ({ Node: { create: (value: string) => ({ children: [{ stroke: () => /^rgba?\(/.test(value) ? value : value === 'second-shape-fixture' ? '#ff0000' : '#123456', strokeWidth: () => value === 'second-shape-fixture' ? 7 : 2, opacity: () => value === 'second-shape-fixture' ? 0.5 : 1 }] }) } }),
    (callback: FrameRequestCallback) => { callback(0); return 0; }, doc, 'painter', position, () => ({ name: 'flip' }),
    [{ type: 4, styleEditable: { color: true, strokeWidth: true, opacity: true } }, { type: 5, styleEditable: { color: true, opacity: true } }, { type: 99, styleEditable: false }],
    jsxRuntime, (a: string, b: string) => a === b, () => <hr />, Form, NativeSlider, Icon, Icon, Icon,
  ) as React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<MenuRef>>;
  const ref = React.createRef<MenuRef>();
  const onOpenComment = vi.fn(), onDelete = vi.fn(), onChangeStyle = vi.fn();
  let root!: Root;
  act(() => { root = createRoot(doc.getElementById('native-menu')!); root.render(<Menu ref={ref} onOpenComment={onOpenComment} onDelete={onDelete} onChangeStyle={onChangeStyle} />); });
  const messages = JSON.parse(readFileSync(resolve(`messages/${locale}.json`), 'utf8'));
  const styleLabels = { title: messages.common.editPdf.annotationStyle, color: messages.tools.bookmark.color, strokeWidth: messages.common.editPdf.strokeWidth, opacity: messages.common.editPdf.opacity,
    back: messages.common.buttons.back, format: messages.common.editPdf.colorFormat, close: messages.common.buttons.close };
  const view = render(<LegacyEditorControls iframe={iframe} locale={locale} undo="Undo" redo="Redo" labels={{ comments: 'Comments', color: 'Color', style: 'Style', delete: 'Delete' }} styleLabels={styleLabels} />);
  const annotation: Annotation = { id: 'shape-1', type: 4, pageNumber: 1, konvaString: 'native-shape-fixture' };
  const bounds = { x: 10, y: 20, width: 80, height: 90 };
  const open = async (item = annotation) => { await act(async () => ref.current!.open(item, bounds)); };
  await open();
  return { doc, annotation, styleLabels, onOpenComment, onDelete, onChangeStyle, position, open, close: () => act(() => ref.current!.close()), cleanup: () => { view.unmount(); act(() => root.unmount()); iframe.remove(); } };
}

describe('Selected annotation action controls', () => {
  it('opens comments once for pointer activation and preserves the engine’s positioning and focus', async () => {
    const { doc, annotation, onOpenComment, position, cleanup } = await setup('ar');
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      const comments = await ui.findByRole('button', { name: 'Comments' });
      expect(comments).toHaveAttribute('dir', 'rtl');
      expect(position.mock.calls[0][0].getBoundingClientRect()).toEqual({ x: 110, y: 220, width: 80, height: 90, left: 110, top: 220, right: 190, bottom: 310 });
      expect(doc.querySelector('.CustomAnnotationMenu')).toHaveStyle({ left: '110px', top: '310px' });
      await user.click(comments);
      expect(onOpenComment).toHaveBeenCalledOnce();
      expect(onOpenComment).toHaveBeenCalledWith(annotation);
      await waitFor(() => expect(ui.queryByRole('button', { name: 'Comments' })).toBeNull());
      await waitFor(() => expect(ui.getByRole('textbox', { name: 'Comment filter' })).toHaveFocus());
    } finally { cleanup(); }
  });

  it('changes native stroke width and opacity by keyboard and returns to the action buttons', async () => {
    const { doc, annotation, styleLabels, onChangeStyle, cleanup } = await setup();
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      const style = await ui.findByRole('button', { name: 'Style' });
      style.focus();
      await user.keyboard('{Enter}');
      await waitFor(() => expect(ui.queryByRole('button', { name: 'Style' })).toBeNull());
      const panel = await ui.findByRole('region', { name: styleLabels.title });
      const color = within(panel).getByRole('button', { name: styleLabels.color });
      await waitFor(() => expect(color).toHaveFocus());
      const stroke = within(panel).getByRole('slider', { name: /^Stroke width/ });
      expect(stroke).toHaveAttribute('data-slot', 'slider-thumb');
      expect(stroke).toHaveAttribute('aria-valuemin', '1');
      expect(stroke).toHaveAttribute('aria-valuemax', '20');
      await user.tab();
      expect(stroke).toHaveFocus();
      await user.keyboard('{ArrowRight}');
      expect(onChangeStyle).toHaveBeenCalledOnce();
      expect(onChangeStyle).toHaveBeenLastCalledWith(annotation, { strokeWidth: 3 });
      await waitFor(() => expect(stroke).toHaveAttribute('aria-valuenow', '3'));
      await user.keyboard('{Home}');
      expect(onChangeStyle).toHaveBeenLastCalledWith(annotation, { strokeWidth: 1 });
      await user.keyboard('{End}');
      expect(onChangeStyle).toHaveBeenLastCalledWith(annotation, { strokeWidth: 20 });
      await user.tab();
      const opacity = within(panel).getByRole('slider', { name: /^Opacity/ });
      expect(opacity).toHaveFocus();
      await user.keyboard('{ArrowLeft}');
      expect(onChangeStyle).toHaveBeenLastCalledWith(annotation, { opacity: 0.99 });
      await waitFor(() => expect(opacity).toHaveAttribute('aria-valuetext', '99%'));
      await user.keyboard('{Home}');
      expect(onChangeStyle).toHaveBeenLastCalledWith(annotation, { opacity: 0 });
      await user.tab();
      expect(within(panel).getByRole('button', { name: styleLabels.back })).toHaveFocus();
      await user.keyboard('{Enter}');
      await waitFor(() => expect(ui.getByRole('button', { name: 'Style' })).toHaveFocus());
      expect(ui.queryByRole('region', { name: styleLabels.title })).toBeNull();
      await user.keyboard('{Enter}');
      await waitFor(() => expect(ui.getByRole('button', { name: styleLabels.color })).toHaveFocus());
      await user.keyboard('{Escape}');
      await waitFor(() => expect(ui.getByRole('button', { name: 'Style' })).toHaveFocus());
    } finally { cleanup(); }
  });

  it('uses a translated parent color dialog and applies edits to the current overlapping selection', async () => {
    const { doc, annotation, styleLabels, onChangeStyle, open, cleanup } = await setup('ar');
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      await user.click(await ui.findByRole('button', { name: 'Style' }));
      const panel = await ui.findByRole('region', { name: styleLabels.title });
      expect(panel).toHaveAttribute('dir', 'rtl');
      await user.click(within(panel).getByRole('button', { name: styleLabels.color }));
      const dialog = await screen.findByRole('dialog', { name: styleLabels.color });
      expect(dialog.ownerDocument).toBe(document);
      expect(dialog).toHaveAttribute('dir', 'rtl');
      const parentUser = userEvent.setup();
      await parentUser.click(within(dialog).getByRole('button', { name: `${styleLabels.color}: #ff0000` }));
      expect(onChangeStyle).toHaveBeenCalledOnce();
      expect(onChangeStyle).toHaveBeenLastCalledWith(annotation, { color: '#ff0000' });
      await parentUser.click(within(dialog).getByRole('button', { name: styleLabels.close }));
      await waitFor(() => expect(within(panel).getByRole('button', { name: styleLabels.color })).toHaveFocus());
      const next = { ...annotation, id: 'shape-2', konvaString: 'second-shape-fixture' };
      await open(next);
      const sliders = within(panel).getAllByRole('slider');
      await waitFor(() => expect(sliders[0]).toHaveAttribute('aria-valuenow', '7'));
      expect(sliders[1]).toHaveAttribute('aria-valuenow', '50');
      sliders[0].focus();
      await user.keyboard('{ArrowLeft}');
      expect(onChangeStyle).toHaveBeenLastCalledWith(next, { strokeWidth: 8 });
      await open({ ...next, type: 5 });
      await waitFor(() => expect(within(panel).getAllByRole('slider')).toHaveLength(1));
      expect(within(panel).getByRole('slider')).toHaveAttribute('aria-valuenow', '50');
    } finally { cleanup(); }
  });

  it('deletes the current overlapping selection by keyboard and returns focus to the PDF viewer', async () => {
    const { doc, annotation, onDelete, open, cleanup } = await setup();
    try {
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      const remove = await ui.findByRole('button', { name: 'Delete' });
      const next = { ...annotation, id: 'shape-2' };
      await open(next);
      expect(ui.getByRole('button', { name: 'Delete' })).toBe(remove);
      remove.focus();
      await user.keyboard(' ');
      expect(onDelete).toHaveBeenCalledOnce();
      expect(onDelete).toHaveBeenCalledWith(next);
      await waitFor(() => expect(doc.getElementById('viewerContainer')).toHaveFocus());
    } finally { cleanup(); }
  });

  it.each(['rgb(255, 222, 33)', 'rgba(255, 222, 33, 0.5)'])('opens the native %s color without replacing it with black or dispatching a style change', async value => {
    const { doc, annotation, styleLabels, onChangeStyle, open, cleanup } = await setup();
    try {
      await open({ ...annotation, konvaString: value });
      const ui = within(doc.body);
      const user = userEvent.setup({ document: doc });
      await user.click(await ui.findByRole('button', { name: 'Style' }));
      await user.click(await ui.findByRole('button', { name: styleLabels.color }));
      const dialog = await screen.findByRole('dialog', { name: styleLabels.color });
      expect(within(dialog).getByRole('textbox', { name: `${styleLabels.color} (HEX)` })).toHaveValue('#ffde21');
      expect(within(dialog).getByLabelText(styleLabels.color, { selector: 'input' })).toHaveValue('#ffde21');
      expect(onChangeStyle).not.toHaveBeenCalled();
      await userEvent.setup().keyboard('{Escape}');
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
      expect(ui.getByRole('region', { name: styleLabels.title })).toBeInTheDocument();
      await waitFor(() => expect(ui.getByRole('button', { name: styleLabels.color })).toHaveFocus());
      expect(onChangeStyle).not.toHaveBeenCalled();
    } finally { cleanup(); }
  });
});
