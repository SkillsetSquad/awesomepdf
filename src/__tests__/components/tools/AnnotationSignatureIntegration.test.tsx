import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LegacyEditorControls } from '@/components/tools/edit-pdf/LegacyEditorControls';
import { readAnnotationImage, type AnnotationSignatureLabels } from '@/components/tools/edit-pdf/AnnotationSignatureControl';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';

vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected, label }: { onFilesSelected: (files: File[]) => void; label: string }) => <input aria-label={label} type="file" onChange={event => onFilesSelected([...event.target.files!])} /> }));

const bundle = readFileSync('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js', 'utf8');
const parsed = ts.createSourceFile('engine.js', bundle, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
let signature = '';
function find(node: ts.Node) { if (ts.isVariableDeclaration(node) && node.name.getText(parsed) === 'bF') signature = node.initializer!.getText(parsed); else ts.forEachChild(node, find); }
find(parsed);
const helpers = bundle.slice(bundle.indexOf('function fF()'), bundle.indexOf('var bF='));

async function setup(locale: 'en' | 'ar' = 'en') {
  const iframe = document.createElement('iframe'); document.body.append(iframe);
  const doc = iframe.contentDocument!;
  doc.body.innerHTML = '<div class="CustomToolbar"><ul class="buttons"><li data-annotation-tool="signature" id="signature"></li></ul></div>';
  const onAdd = vi.fn(); const loadFont = vi.fn(async () => {});
  const nativeModal = vi.fn(); const nativePopover = vi.fn();
  const draw = vi.fn();
  const context = { clearRect: vi.fn(), measureText: (value: string) => ({ width: value.length * 60 }), fillText: draw,
    font: '', fillStyle: '', textAlign: '', textBaseline: '', imageSmoothingEnabled: false, shadowColor: '', shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0 };
  const canvasPrototype: HTMLCanvasElement = Object.getPrototypeOf(doc.createElement('canvas'));
  const contextSpy = vi.spyOn(canvasPrototype, 'getContext').mockImplementation(() => context as unknown as CanvasRenderingContext2D);
  const imageSpy = vi.spyOn(canvasPrototype, 'toDataURL').mockImplementation(() => 'data:image/png;base64,typed');
  const stages: Stage[] = [];
  class Line {
    values: number[]; color: string;
    constructor(options: { points: number[]; stroke: string }) { this.values = options.points; this.color = options.stroke; }
    points(next?: number[]) { if (next) this.values = next; return this.values; }
    stroke(color: string) { this.color = color; }
    getClassName() { return 'Line'; }
  }
  class Layer {
    lines: Line[] = [];
    add(line: Line) { this.lines.push(line); }
    getChildren(predicate: (line: Line) => boolean) { return this.lines.filter(predicate); }
    destroyChildren() { this.lines = []; }
  }
  class Stage {
    layer = new Layer(); position = { x: 10, y: 20 };
    events = new Map<string, (event?: unknown) => void>();
    destroy = vi.fn(); clear = vi.fn();
    constructor(readonly options: { container: HTMLElement; width: number; height: number }) { stages.push(this); }
    add(layer: Layer) { this.layer = layer; }
    on(events: string, handler: (event?: unknown) => void) { for (const event of events.split(' ')) this.events.set(event, handler); }
    getPointerPosition() { return this.position; }
    getLayers() { return [this.layer]; }
    toDataURL() { return 'data:image/png;base64,drawn'; }
  }
  const Popover = ({ children, ...props }: { children: React.ReactNode }) => { nativePopover(props); return <span>{children}</span>; };
  const Modal = (props: unknown) => { nativeModal(props); return null; };
  const Native = () => null;
  const Signature = new Function('m', 'ke', 'Eo', 'IE', 'Mn', 'lF', 'document', 'window', 'hm', 'AC', 'DE', 'dE', 'RE', 'pA', 'GN', 'sy', 'dF', `${helpers}; return ${signature};`)(
    React, () => ({ t: (key: string) => key }), { signature: { COLORS: ['#000000', '#ff0000', '#1677ff'], WIDTH: 366, HEIGHT: 200, TYPE: 'Draw', MAX_SIZE: 5 * 1024 * 1024, ACCEPT: '.png,.jpg,.jpeg,.bmp' }, handwritingFontList: [{ label: 'Font A', value: 'font-a' }, { label: 'Font B', value: 'font-b' }], setting: { MAX_UPLOAD_IMAGE_SIZE: 1000 } },
    () => ({ Stage, Layer, Line }), jsxRuntime, loadFont, doc, doc.defaultView, Popover, Native, Native, Modal, { Group: Native }, Native, () => '5 MB', Native, Array.from,
  ) as React.ComponentType<{ annotation: { name: string; icon: React.ReactNode }; onAdd: (image: string) => void }>;
  const messages = locale === 'ar' ? ar : en;
  const t = messages.common.editPdf;
  const labels: AnnotationSignatureLabels = { description: t.signatureDescription, draw: t.signatureDraw, type: t.signatureType, upload: messages.common.buttons.upload, saved: t.signatureSaved, text: t.signatureText, font: t.signatureFont, image: t.signatureImage,
    color: messages.tools.bookmark.color, clear: messages.common.buttons.clear, add: messages.common.buttons.add, cancel: messages.common.buttons.cancel, error: messages.errors.processingFailed };
  const view = render(<LegacyEditorControls iframe={iframe} locale={locale} undo="Undo" redo="Redo" labels={{ signature: t.annSignature }} signatureLabels={labels} />);
  const root = createRoot(doc.getElementById('signature')!);
  act(() => root.render(<Signature annotation={{ name: 'signature', icon: <svg /> }} onAdd={onAdd} />));
  const trigger = await within(doc.body).findByRole('button', { name: t.annSignature });
  const user = userEvent.setup({ document: doc });
  trigger.focus(); await user.keyboard('{Enter}');
  await screen.findByRole('dialog');
  return { doc, trigger, labels, onAdd, loadFont, stages, draw, context, nativeModal, nativePopover,
    cleanup: () => { view.unmount(); act(() => root.unmount()); contextSpy.mockRestore(); imageSpy.mockRestore(); iframe.remove(); } };
}

describe('Shipped signature creator with standard application controls', () => {
  it.each(['en', 'ar'] as const)('preserves drawing, colors, clear, saved reuse, placement and dialog focus in %s', async locale => {
    const { doc, trigger, labels, stages, onAdd, nativeModal, nativePopover, cleanup } = await setup(locale);
    try {
      const user = userEvent.setup(); const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
      await waitFor(() => expect(stages.length).toBe(1)); const stage = stages[0];
      expect(stage.options.width).toBe(366); expect(stage.options.height).toBe(200);
      expect(within(dialog).getByRole('button', { name: labels.add })).toBeDisabled();
      act(() => { stage.events.get('mousedown')!(); stage.position = { x: 40, y: 70 }; stage.events.get('mousemove')!({ evt: { preventDefault: vi.fn() } }); stage.events.get('mouseup')!(); });
      await waitFor(() => expect(within(dialog).getByRole('button', { name: labels.add })).toBeEnabled());
      await user.click(within(dialog).getByRole('button', { name: `${labels.color}: #ff0000` }));
      expect(stage.layer.lines[0].values).toEqual([10, 20, 40, 70]); expect(stage.layer.lines[0].color).toBe('#ff0000');
      expect(stages).toHaveLength(1); expect(stage.destroy).not.toHaveBeenCalled();
      await user.click(within(dialog).getByRole('button', { name: labels.clear }));
      expect(stage.layer.lines).toHaveLength(0); expect(within(dialog).getByRole('button', { name: labels.add })).toBeDisabled();
      act(() => { stage.events.get('mousedown')!(); stage.events.get('mousemove')!({ evt: { preventDefault: vi.fn() } }); });
      await user.click(within(dialog).getByRole('button', { name: labels.add }));
      await waitFor(() => expect(onAdd).toHaveBeenCalledWith('data:image/png;base64,drawn'));
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull()); await waitFor(() => expect(trigger).toHaveFocus());
      await userEvent.setup({ document: doc }).keyboard('{Enter}');
      await user.click(await screen.findByRole('button', { name: `${labels.saved} 1` }));
      expect(onAdd).toHaveBeenCalledTimes(2);
      expect(nativeModal.mock.calls.every(([props]) => props.open === false)).toBe(true);
      expect(nativePopover.mock.calls.every(([props]) => props.open === false)).toBe(true);
    } finally { cleanup(); }
  });

  it('uses native typed-image geometry and font choices, discards older font requests and permits retry', async () => {
    const { labels, onAdd, loadFont, context, draw, cleanup } = await setup();
    try {
      const user = userEvent.setup(); await user.click(screen.getByRole('tab', { name: labels.type }));
      await user.type(await screen.findByRole('textbox', { name: labels.text }), 'A long signature');
      expect(draw).toHaveBeenLastCalledWith('A long signature', Math.floor(366 / 1.1) / 2, 100);
      expect(context.font).toContain('font-a');
      const font = screen.getByRole('combobox', { name: labels.font });
      let old!: () => void;
      loadFont.mockImplementationOnce(() => new Promise<void>(resolve => { old = resolve; }));
      fireEvent.change(font, { target: { value: 'font-b' } });
      expect(screen.getByRole('button', { name: labels.add })).toBeDisabled();
      fireEvent.change(font, { target: { value: 'font-a' } });
      await act(async () => old()); expect(font).toHaveValue('font-a');
      loadFont.mockRejectedValueOnce(new Error('Font unavailable'));
      await user.selectOptions(font, 'font-b'); await screen.findByRole('alert');
      await user.selectOptions(font, 'font-b'); await waitFor(() => expect(font).toHaveValue('font-b'));
      await user.click(screen.getByRole('button', { name: labels.add }));
      expect(onAdd).toHaveBeenLastCalledWith('data:image/png;base64,typed');
    } finally { cleanup(); }
  });

  it('converts local uploaded images to bounded PNG and rejects unreadable or cancelled images', async () => {
    const images: { width: number; height: number; onload: (() => void) | null; onerror: (() => void) | null; src: string }[] = [];
    class ImageFixture {
      width = 2000; height = 1000; onload: (() => void) | null = null; onerror: (() => void) | null = null; src = '';
      constructor() { images.push(this); }
    }
    vi.stubGlobal('Image', ImageFixture);
    const canvas = document.createElement('canvas'); const context = { drawImage: vi.fn() };
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(context as unknown as CanvasRenderingContext2D);
    vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/png;base64,uploaded');
    const create = document.createElement.bind(document);
    vi.spyOn(document, 'createElement').mockImplementation((tag: string) => tag === 'canvas' ? canvas : create(tag));
    try {
      const file = new File(['image'], 'signature.png', { type: 'image/png' });
      const controller = new AbortController(); const result = readAnnotationImage(file, 1000, controller.signal);
      await waitFor(() => expect(images[0].src).toContain('data:image/png'));
      images[0].onload!(); expect(await result).toBe('data:image/png;base64,uploaded');
      expect(context.drawImage).toHaveBeenCalledWith(images[0], 0, 0, 1000, 500); expect(canvas.width).toBe(0); expect(canvas.height).toBe(0);
      const bad = readAnnotationImage(file, 1000, new AbortController().signal); const failed = expect(bad).rejects.toThrow('decoded'); images[1].onerror!(); await failed;
      const cancel = new AbortController(); const pending = readAnnotationImage(file, 1000, cancel.signal); const cancelled = expect(pending).rejects.toMatchObject({ name: 'AbortError' }); cancel.abort(); await cancelled;
    } finally { vi.restoreAllMocks(); vi.unstubAllGlobals(); }
  });

  it('cancels an upload after switching modes, reports decode failure, retries and places the converted image', async () => {
    const { labels, onAdd, cleanup } = await setup();
    const images: { width: number; height: number; onload: (() => void) | null; onerror: (() => void) | null; src: string }[] = [];
    class ImageFixture {
      width = 800; height = 400; onload: (() => void) | null = null; onerror: (() => void) | null = null; src = '';
      constructor() { images.push(this); }
    }
    vi.stubGlobal('Image', ImageFixture);
    const contextSpy = vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({ drawImage: vi.fn() } as unknown as CanvasRenderingContext2D);
    const outputSpy = vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/png;base64,converted');
    try {
      const user = userEvent.setup();
      await user.click(screen.getByRole('tab', { name: labels.upload }));
      await user.upload(screen.getByLabelText(labels.upload, { selector: 'input' }), new File(['image'], 'one.png', { type: 'image/png' }));
      await waitFor(() => expect(images[0].src).toContain('data:image/png'));
      expect(screen.getByRole('button', { name: labels.add })).toBeDisabled();
      await user.click(screen.getByRole('tab', { name: labels.type }));
      expect(images[0].onload).toBeNull(); expect(onAdd).not.toHaveBeenCalled();
      await user.click(screen.getByRole('tab', { name: labels.upload }));
      await user.upload(screen.getByLabelText(labels.upload, { selector: 'input' }), new File(['bad'], 'two.png', { type: 'image/png' }));
      await waitFor(() => expect(images[1].src).toContain('data:image/png'));
      act(() => images[1].onerror!()); await screen.findByRole('alert');
      await user.upload(screen.getByLabelText(labels.upload, { selector: 'input' }), new File(['valid'], 'three.png', { type: 'image/png' }));
      await waitFor(() => expect(images[2].src).toContain('data:image/png'));
      act(() => images[2].onload!());
      await waitFor(() => expect(screen.getByRole('button', { name: labels.add })).toBeEnabled());
      expect(screen.getByRole('img', { name: labels.image })).toHaveAttribute('src', 'data:image/png;base64,converted');
      await user.click(screen.getByRole('button', { name: labels.add }));
      expect(onAdd).toHaveBeenLastCalledWith('data:image/png;base64,converted');
    } finally { contextSpy.mockRestore(); outputSpy.mockRestore(); vi.unstubAllGlobals(); cleanup(); }
  });
});
