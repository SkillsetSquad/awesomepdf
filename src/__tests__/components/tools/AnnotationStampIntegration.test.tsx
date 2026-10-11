import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LegacyEditorControls } from '@/components/tools/edit-pdf/LegacyEditorControls';
import type { AnnotationStampLabels, AnnotationStampOptions } from '@/components/tools/edit-pdf/AnnotationStampControl';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';

vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected, label }: { onFilesSelected: (files: File[]) => void; label: string }) => <input aria-label={label} type="file" onChange={event => onFilesSelected([...event.target.files!])} /> }));

// Execute the shipped component and callbacks; text measurement/raster/date formatting
// are fixtures. This does not open a PDF or prove real browser/exported raster pixels.
const bundle = readFileSync('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js', 'utf8');
const parsed = ts.createSourceFile('engine.js', bundle, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
const extracted = new Map<string, string>();
function find(node: ts.Node) {
  if (ts.isVariableDeclaration(node) && ['$B', 'YB'].includes(node.name.getText(parsed))) extracted.set(node.name.getText(parsed), node.initializer!.getText(parsed));
  else if (ts.isVariableDeclaration(node) && node.name.getText(parsed) === 'Eo' && ts.isObjectLiteralExpression(node.initializer!)) {
    const fonts = node.initializer.properties.find(property => ts.isPropertyAssignment(property) && property.name.getText(parsed) === 'defaultFontList');
    if (fonts && ts.isPropertyAssignment(fonts)) extracted.set('fonts', fonts.initializer.getText(parsed));
  }
  else ts.forEachChild(node, find);
}
find(parsed);
const dateGroups = new Function(`return ${extracted.get('YB')};`)() as { options: { label: string; value: string }[] }[];
const dateOptions = dateGroups.flatMap(group => group.options);
const fonts = new Function(`return ${extracted.get('fonts')};`)() as { label: string; value: string }[];

type Attributes = { name?: string; x?: number; y?: number; width?: number; height?: number; text?: string; fontSize?: number; fontFamily?: string; fontStyle?: string; fill?: string | null; stroke?: string | null; strokeWidth?: number; dash?: number[]; points?: number[] };
async function setup(locale: 'en' | 'ar' = 'en') {
  const iframe = document.createElement('iframe'); document.body.append(iframe);
  const doc = iframe.contentDocument!;
  doc.body.innerHTML = '<div class="CustomToolbar"><ul class="buttons"><li data-annotation-tool="stamp" id="stamp"></li></ul></div>';
  const onAdd = vi.fn(); const nativeModal = vi.fn(); const nativePopover = vi.fn(); const formatDate = vi.fn((format: string) => `date:${format}`);
  let failNextStage = false;
  class Shape {
    constructor(readonly attrs: Attributes) {}
    x() { return this.attrs.x ?? 0; } y() { return this.attrs.y ?? 0; }
    width() { return this.attrs.width ?? 0; } height() { return this.attrs.height ?? 0; }
    name() { return this.attrs.name ?? ''; }
  }
  class Text extends Shape { width() { return this.attrs.width ?? (this.attrs.text?.length ?? 0) * (this.attrs.fontSize ?? 0) / 2; } }
  class Layer {
    children: Shape[] = [];
    add(shape: Shape) { this.children.push(shape); }
    getChildren(predicate: (shape: Shape) => boolean) { return this.children.filter(predicate); }
  }
  const stages: Stage[] = [];
  class Stage {
    layer = new Layer(); destroy = vi.fn();
    toDataURL = vi.fn<(crop: { x: number; y: number; width: number; height: number }) => string>(() => 'data:image/png;base64,stamp');
    constructor(readonly options: { container: HTMLElement; width: number; height: number }) {
      if (failNextStage) { failNextStage = false; throw new Error('Preview unavailable'); }
      stages.push(this);
    }
    add(layer: Layer) { this.layer = layer; } getLayers() { return [this.layer]; }
  }
  const Popover = ({ children, ...props }: { children: React.ReactNode }) => { nativePopover(props); return <span>{children}</span>; };
  const Modal = (props: unknown) => { nativeModal(props); return null; };
  const Native = Object.assign(() => null, { Group: () => null, Item: () => null });
  const Form = Object.assign(Native, { useForm: () => React.useMemo(() => [{ setFieldsValue: vi.fn() }], []) });
  const Stamp = new Function('m', 'ke', 'Eo', 'IE', 'Mn', 'document', 'window', 'hm', 'AC', 'DE', 'dE', 'RE', 'sy', 'OD', 'VB', 'UB', 'BB', 'KB', 'XB', 'qB', 'YB', '_B', 'Lm', 'yB', 'oB', 'iB', 'aB', 'pS', 'gB', 'SB', 'EB', 'TB', 'MB', `return ${extracted.get('$B')};`)(
    React, () => ({ t: (key: string) => key === 'editor.stamp.defaultText' ? 'APPROVED' : key }),
    { stamp: { MAX_SIZE: 5 * 1024 * 1024, ACCEPT: '.png,.jpg,.jpeg,.bmp', DEFAULT_STAMP: ['data:image/png;base64,default'], editor: { DEFAULT_TEXT_COLOR: '#ffffff', DEFAULT_BACKGROUND_COLOR: '#00b445', DEFAULT_BORDER_COLOR: null } }, defaultFontList: fonts, colors: ['#ff0000', '#00b445', '#1677ff'], setting: { MAX_UPLOAD_IMAGE_SIZE: 1000 } },
    () => ({ Stage, Layer, Text, Rect: Shape, Line: Shape }), jsxRuntime, doc, doc.defaultView, Popover, Native, Native, Modal, Native, Native, Form,
    (values: unknown[]) => values, Array.from, Object.assign, 470, 120, 'StampGroup', dateGroups, () => () => ({ format: formatDate }), Native, Native, Native, Native, Native, Native, Native, Native, Native, Native, Native,
  ) as React.ComponentType<{ annotation: { name: string; icon: React.ReactNode }; onAdd: (image: string) => void; userName: string }>;
  const messages = locale === 'ar' ? ar : en; const t = messages.common.editPdf;
  const labels: AnnotationStampLabels = { description: t.stampDescription, defaults: t.stampDefaults, saved: t.stampSaved, create: t.stampCreate, text: t.stampText, font: t.signatureFont, textColor: t.stampTextColor, background: t.stampBackground, border: t.stampBorder, borderStyle: t.stampBorderStyle, solid: t.stampSolid, dashed: t.stampDashed, bold: t.stampBold, italic: t.stampItalic, underline: t.stampUnderline, strikeout: t.stampStrikeout, author: t.stampAuthor, date: t.stampDate, dateFormat: t.stampDateFormat, customTimestamp: t.stampCustomTimestamp, empty: t.stampEmpty, upload: messages.common.buttons.upload, back: messages.common.buttons.back, cancel: messages.common.buttons.cancel, add: messages.common.buttons.add, error: messages.errors.processingFailed, retry: messages.errors.tryAgain, colorFormat: t.colorFormat, opacity: t.opacity, close: messages.common.buttons.close };
  const view = render(<LegacyEditorControls iframe={iframe} locale={locale} undo="Undo" redo="Redo" labels={{ stamp: t.annStamp }} stampLabels={labels} />);
  const root = createRoot(doc.getElementById('stamp')!);
  act(() => root.render(<Stamp annotation={{ name: 'stamp', icon: <svg /> }} onAdd={onAdd} userName="Author" />));
  const trigger = await within(doc.body).findByRole('button', { name: t.annStamp });
  const open = async () => { trigger.focus(); await userEvent.setup({ document: doc }).keyboard('{Enter}'); await screen.findByRole('dialog'); };
  const metadata = () => (doc.querySelector('[data-stamp-control]') as HTMLElement & { awesomepdfStamp: AnnotationStampOptions }).awesomepdfStamp;
  await open();
  return { doc, labels, trigger, onAdd, nativeModal, nativePopover, stages, formatDate, fonts, metadata, open,
    failPreview: () => { failNextStage = true; },
    cleanup: () => { view.unmount(); act(() => root.unmount()); iframe.remove(); } };
}

async function createStamp(labels: AnnotationStampLabels) {
  await userEvent.click(screen.getByRole('tab', { name: labels.saved }));
  await userEvent.click(screen.getByRole('button', { name: labels.create }));
  await screen.findByRole('textbox', { name: labels.text });
}

describe('Shipped stamp creator with standard application controls', () => {
  it.each(['en', 'ar'] as const)('preserves gallery, native styles/cropping, placement, saved reuse and focus in %s', async locale => {
    const { labels, trigger, onAdd, stages, nativeModal, nativePopover, open, metadata, cleanup } = await setup(locale);
    try {
      const user = userEvent.setup();
      expect(screen.getByRole('dialog')).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      await user.click(screen.getByRole('button', { name: `${labels.defaults} 1` }));
      expect(onAdd).toHaveBeenLastCalledWith('data:image/png;base64,default');
      await waitFor(() => expect(trigger).toHaveFocus()); await open();
      await user.click(screen.getByRole('tab', { name: labels.saved })); expect(screen.getByRole('status')).toHaveTextContent(labels.empty);
      await user.click(screen.getByRole('button', { name: labels.create }));
      const text = await screen.findByRole('textbox', { name: labels.text }); await waitFor(() => expect(text).toHaveFocus());
      fireEvent.change(text, { target: { value: 'Approved' } });
      for (const style of [labels.bold, labels.italic, labels.underline, labels.strikeout]) await user.click(screen.getByRole('checkbox', { name: style }));
      await user.selectOptions(screen.getByRole('combobox', { name: labels.font }), fonts.find(font => font.label === 'Courier New')!.value);
      await user.selectOptions(screen.getByRole('combobox', { name: labels.borderStyle }), 'dashed');
      await user.click(screen.getByRole('checkbox', { name: labels.background }));
      await user.click(screen.getByRole('checkbox', { name: labels.border }));
      await user.click(screen.getByRole('button', { name: labels.border }));
      const color = screen.getByRole('dialog', { name: labels.border });
      fireEvent.change(within(color).getByRole('textbox', { name: `${labels.border} (HEX)` }), { target: { value: '#12345680' } });
      await user.click(within(color).getByRole('button', { name: labels.close }));
      expect(screen.getByRole('button', { name: labels.border })).toHaveFocus();
      fireEvent.change(screen.getByRole('textbox', { name: labels.customTimestamp }), { target: { value: ' Reviewed ' } });
      await waitFor(() => expect(metadata().values.borderColor).toBe('#12345680'));
      const stage = stages.at(-1)!; const [rect, title, underline, strikeout, timestamp] = stage.layer.children;
      expect(stage.options).toMatchObject({ width: 470, height: 120 });
      expect(rect.attrs).toMatchObject({ name: 'StampGroup', fill: null, stroke: '#12345680', dash: [5, 5], strokeWidth: 3 });
      expect(title.attrs).toMatchObject({ text: 'Approved', fontFamily: fonts.find(font => font.label === 'Courier New')!.value, fontStyle: 'italic bold', fontSize: 30, fill: '#ffffff', width: 470 });
      expect(underline.attrs.points).toEqual([rect.x(), title.y() + 34, rect.x() + rect.width(), title.y() + 34]);
      expect(strikeout.attrs.points).toEqual([rect.x(), title.y() + 15, rect.x() + rect.width(), title.y() + 15]);
      expect(timestamp.attrs.text).toBe('Author · date:YYYY-MM-DD · Reviewed');
      expect(rect.width()).toBe(Math.max('Approved'.length * 15, 'Author · date:YYYY-MM-DD · Reviewed'.length * 8) + 60);
      await user.click(screen.getByRole('button', { name: labels.add }));
      expect(stage.toDataURL).toHaveBeenCalledWith({ x: rect.x(), y: rect.y(), width: rect.width(), height: rect.height() });
      expect(onAdd).toHaveBeenLastCalledWith('data:image/png;base64,stamp'); await waitFor(() => expect(trigger).toHaveFocus());
      expect(stage.destroy).toHaveBeenCalled(); await open();
      await user.click(screen.getByRole('button', { name: `${labels.saved} 1` }));
      expect(onAdd).toHaveBeenCalledTimes(3);
      expect(nativeModal.mock.calls.every(([props]) => props.open === false)).toBe(true); expect(nativePopover.mock.calls.every(([props]) => props.open === false)).toBe(true);
      expect(stages.every(old => old.destroy.mock.calls.length > 0)).toBe(true);
    } finally { cleanup(); }
  });

  it('retains native date/font choices, no-border/background state, timestamp and creation values after Back', async () => {
    const { labels, stages, fonts, metadata, formatDate, cleanup } = await setup();
    try {
      const user = userEvent.setup(); await createStamp(labels);
      expect(within(screen.getByRole('combobox', { name: labels.font })).getAllByRole('option').map(option => option.getAttribute('value'))).toEqual(fonts.map(font => font.value));
      expect(within(screen.getByRole('combobox', { name: labels.dateFormat })).getAllByRole('option').map(option => option.getAttribute('value'))).toEqual(dateOptions.map(format => format.value));
      for (const format of dateOptions) { await user.selectOptions(screen.getByRole('combobox', { name: labels.dateFormat }), format.value); expect(formatDate).toHaveBeenLastCalledWith(format.value); }
      await user.click(screen.getByRole('checkbox', { name: labels.author })); await user.click(screen.getByRole('checkbox', { name: labels.date }));
      expect(stages.at(-1)!.layer.children).toHaveLength(2); expect(stages.at(-1)!.layer.children[1].attrs.fontSize).toBe(36);
      await user.click(screen.getByRole('checkbox', { name: labels.background }));
      expect(metadata().values).toMatchObject({ backgroundColor: null, borderColor: null, timestamp: [], dateFormat: dateOptions.at(-1)!.value });
      expect(screen.getByRole('button', { name: labels.background })).toBeDisabled(); expect(screen.getByRole('button', { name: labels.border })).toBeDisabled();
      await user.click(screen.getByRole('checkbox', { name: labels.background })); expect(metadata().values.backgroundColor).toBe('#00b445');
      await user.click(screen.getByRole('button', { name: labels.back }));
      await waitFor(() => expect(screen.getByRole('button', { name: labels.create })).toHaveFocus());
      await user.click(screen.getByRole('button', { name: labels.create })); expect(metadata().values.timestamp).toEqual([]); expect(metadata().values.dateFormat).toBe(dateOptions.at(-1)!.value);
      await user.click(screen.getByRole('button', { name: labels.cancel })); expect(stages.every(stage => stage.destroy.mock.calls.length > 0)).toBe(true);
    } finally { cleanup(); }
  });

  it('shows native preview/export failures, preserves the form and permits retry', async () => {
    const { labels, stages, failPreview, onAdd, cleanup } = await setup();
    try {
      const user = userEvent.setup(); failPreview(); await createStamp(labels);
      await screen.findByRole('alert'); expect(screen.getByRole('button', { name: labels.add })).toBeDisabled();
      expect(screen.getByRole('textbox', { name: labels.text })).toHaveValue('APPROVED');
      await user.click(screen.getByRole('button', { name: labels.retry }));
      await waitFor(() => expect(screen.queryByRole('alert')).toBeNull());
      stages.at(-1)!.toDataURL.mockImplementationOnce(() => { throw new Error('Canvas export failed'); });
      await user.click(screen.getByRole('button', { name: labels.add })); await screen.findByRole('alert'); expect(onAdd).not.toHaveBeenCalled();
      await user.click(screen.getByRole('button', { name: labels.retry })); await user.click(screen.getByRole('button', { name: labels.add }));
      expect(onAdd).toHaveBeenCalledWith('data:image/png;base64,stamp');
    } finally { cleanup(); }
  });

  it('cancels stale uploads on tab/close, reports failures, retries and retains placed uploads in the gallery', async () => {
    const { labels, onAdd, open, cleanup } = await setup();
    const images: { width: number; height: number; onload: (() => void) | null; onerror: (() => void) | null; src: string }[] = [];
    class ImageFixture { width = 2000; height = 1000; onload: (() => void) | null = null; onerror: (() => void) | null = null; src = ''; constructor() { images.push(this); } }
    vi.stubGlobal('Image', ImageFixture);
    const draw = vi.fn(); const contextSpy = vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({ drawImage: draw } as unknown as CanvasRenderingContext2D);
    const outputSpy = vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/png;base64,upload');
    try {
      const user = userEvent.setup(); await user.click(screen.getByRole('tab', { name: labels.upload }));
      const upload = async (name: string) => { await user.upload(screen.getByLabelText(labels.upload, { selector: 'input' }), new File(['image'], name, { type: 'image/png' })); await waitFor(() => expect(images.at(-1)!.src).toContain('data:image/png')); };
      await upload('first.png'); await user.click(screen.getByRole('tab', { name: labels.saved }));
      expect(images[0].onload).toBeNull(); expect(onAdd).not.toHaveBeenCalled();
      await user.click(screen.getByRole('tab', { name: labels.upload })); await upload('second.png');
      await user.click(screen.getByRole('button', { name: labels.cancel })); expect(images[1].onload).toBeNull(); await open();
      await upload('bad.png'); act(() => images[2].onerror!()); await screen.findByRole('alert');
      await upload('good.png'); act(() => images[3].onload!());
      await waitFor(() => expect(onAdd).toHaveBeenCalledWith('data:image/png;base64,upload')); expect(draw).toHaveBeenCalledWith(images[3], 0, 0, 1000, 500);
      await open(); await user.click(screen.getByRole('tab', { name: labels.saved })); await user.click(screen.getByRole('button', { name: `${labels.saved} 1` }));
      expect(onAdd).toHaveBeenCalledTimes(2);
    } finally { contextSpy.mockRestore(); outputSpy.mockRestore(); vi.unstubAllGlobals(); cleanup(); }
  });
});
