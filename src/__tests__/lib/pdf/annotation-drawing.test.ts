import { readFileSync } from 'node:fs';
import ts from 'typescript';
import { describe, expect, it, vi } from 'vitest';
import { connectAnnotationDrawing, isAnnotationDrawingEngine, type AnnotationDrawingEngine } from '@/lib/pdf/annotation-drawing';

const source = ts.createSourceFile('engine.js', readFileSync('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js', 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
let cloudHandler = '', unicodeWriter = '';
function find(node: ts.Node) {
  if (ts.isCallExpression(node) && node.arguments.length === 3 && ts.isStringLiteral(node.arguments[1]) && node.arguments[1].text === 'handleDoubleClick' && node.arguments[2].getText(source).includes('cloudPath')) cloudHandler = node.arguments[2].getText(source);
  if (ts.isFunctionDeclaration(node) && node.name?.text === 'QN') unicodeWriter = node.getText(source);
  ts.forEachChild(node, find);
}
find(source);

function stageFixture(scale = 1) {
  const container = document.createElement('div'); document.body.append(container);
  const page = document.createElement('div'); page.className = 'page'; page.dataset.pageNumber = '1'; page.append(container); document.body.append(page);
  const handlers = new Map<string, (event: { target: NodeFixture }) => void>();
  const nodes: NodeFixture[] = [];
  const stage = {
    container: () => container, find: vi.fn(() => nodes), width: () => 400 * scale, height: () => 600 * scale,
    getAbsoluteTransform: () => ({ point: (point: { x: number; y: number }) => ({ x: point.x * scale, y: point.y * scale }) }),
    on: vi.fn((name: string, handler: (event: { target: NodeFixture }) => void) => { handlers.set(name, handler); }),
    off: vi.fn((name: string) => { for (const key of handlers.keys()) if (key.endsWith(name)) handlers.delete(key); }),
  };
  const engine: AnnotationDrawingEngine = { painter: { currentAnnotation: { name: 'select' }, getData: () => nodes.map(node => ({ id: node.id() })), konvaCanvasStore: new Map([[1, { konvaStage: stage }]]), editorStore: new Map() } };
  return { engine, stage, page, container, nodes, handlers, fire: (name: string, target: NodeFixture) => { for (const [key, handler] of handlers) if (key.split('.')[0] === name) handler({ target }); }, cleanup: () => page.remove() };
}
function nodeFixture(id: string, box: { x: number; y: number; width: number; height: number }, position: { x: number; y: number }) {
  let current = { ...position };
  return { id: () => id, getClientRect: vi.fn(() => box), absolutePosition: vi.fn((next?: { x: number; y: number }) => { if (next) current = next; return current; }) };
}
type NodeFixture = ReturnType<typeof nodeFixture>;
function nativeCloud(pageNumber = 1, count = 3) {
  const save = vi.fn();
  const editor = { pageNumber, isPainting: true, points: Array.from({ length: count }, (_value, i) => ({ x: i * 20, y: i * 10 })), cloudPath: { data: vi.fn() }, currentShapeGroup: { konvaGroup: { id: () => `cloud-${pageNumber}` } }, currentAnnotation: { style: { color: '#123456' } }, generateCloudPathData: vi.fn(() => 'geometry-fixture'), setShapeGroupDone: save, startRect: { destroy: vi.fn() }, handleDoubleClick: () => {} };
  editor.handleDoubleClick = new Function('r', 'DG', `return ${cloudHandler};`)(editor, Array.from) as () => void;
  return { editor, save };
}

describe('Drawing helpers connected to native painter pages', () => {
  it('snaps stored groups using rectangle offsets and zoom while preserving the native dragend listener', () => {
    const f = stageFixture(2), onError = vi.fn();
    const active = nodeFixture('active', { x: 98, y: 45, width: 20, height: 10 }, { x: 20, y: 30 });
    const other = nodeFixture('other', { x: 100, y: 150, width: 20, height: 10 }, { x: 0, y: 0 });
    f.nodes.push(active, other); const nativeDragEnd = vi.fn(() => active.absolutePosition());
    f.stage.on('dragend', nativeDragEnd);
    const controller = connectAnnotationDrawing(f.engine, document, onError);
    f.fire('dragmove', active);
    expect(active.getClientRect).toHaveBeenCalledWith({ relativeTo: f.stage });
    expect(active.absolutePosition()).toEqual({ x: 24, y: 30 });
    expect(f.container.querySelectorAll('svg[data-awsomepdf-alignment-guides] line')).toHaveLength(1);
    expect(f.container.querySelector('line')).toHaveAttribute('x1', '200');
    f.fire('dragend', active); expect(nativeDragEnd).toHaveBeenCalledTimes(1);
    expect(nativeDragEnd).toHaveReturnedWith({ x: 24, y: 30 }); expect(f.container.querySelector('svg')).toBeNull();
    controller.dispose(); expect(f.handlers.has('dragend')).toBe(true); expect(onError).not.toHaveBeenCalled(); f.cleanup();
  });

  it('ignores transformer/unpersisted groups and clears listeners/guides when page stages are unloaded or replaced', () => {
    const f = stageFixture(), onError = vi.fn();
    const active = nodeFixture('active', { x: 98, y: 45, width: 20, height: 10 }, { x: 20, y: 30 });
    const other = nodeFixture('other', { x: 100, y: 150, width: 20, height: 10 }, { x: 0, y: 0 });
    f.nodes.push(active, other); const controller = connectAnnotationDrawing(f.engine, document, onError);
    f.fire('dragmove', nodeFixture('transformer', { x: 98, y: 45, width: 20, height: 10 }, { x: 0, y: 0 }));
    expect(f.container.querySelector('svg')).toBeNull();
    f.engine.painter.getData = () => [{ id: 'other' }]; f.fire('dragmove', active); expect(active.absolutePosition).not.toHaveBeenCalled();
    f.engine.painter.getData = () => [{ id: 'active' }, { id: 'other' }]; f.fire('dragmove', active); expect(f.container.querySelector('svg')).not.toBeNull();
    f.engine.painter.konvaCanvasStore.clear(); controller.refresh(); expect(f.stage.off).toHaveBeenCalledWith('.awsomepdfSnapping'); expect(f.container.querySelector('svg')).toBeNull();
    f.engine.painter.konvaCanvasStore.set(1, { konvaStage: f.stage }); controller.refresh(); expect(f.handlers.has('dragmove.awsomepdfSnapping')).toBe(true);
    controller.refresh(); expect(f.stage.on.mock.calls.filter(call => call[0] === 'dragmove.awsomepdfSnapping')).toHaveLength(2);
    controller.dispose(); controller.dispose(); expect(f.handlers.size).toBe(0); f.cleanup();
  });

  it('uses the shipped cloud completion callback for Enter/double-click without dispatching recursive mouse events', () => {
    const f = stageFixture(), { editor, save } = nativeCloud(), onError = vi.fn();
    f.engine.painter.currentAnnotation = { name: 'cloud' }; f.engine.painter.editorStore.set('1_13', editor);
    const controller = connectAnnotationDrawing(f.engine, document, onError), dispatch = vi.spyOn(f.container, 'dispatchEvent');
    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }); f.page.dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true); expect(save).toHaveBeenCalledTimes(1);
    expect(save).toHaveBeenCalledWith({ id: 'cloud-1', color: '#123456', contentsObj: { text: '' } });
    expect(editor.isPainting).toBe(false); expect(editor.points).toEqual([]);
    f.page.dispatchEvent(new MouseEvent('dblclick', { bubbles: true, cancelable: true })); expect(save).toHaveBeenCalledTimes(1); expect(dispatch).not.toHaveBeenCalled();
    const next = nativeCloud(); f.engine.painter.editorStore.set('1_13', next.editor);
    const double = new MouseEvent('dblclick', { bubbles: true, cancelable: true }); f.page.dispatchEvent(double);
    expect(double.defaultPrevented).toBe(true); expect(next.save).toHaveBeenCalledTimes(1);
    controller.dispose(); f.cleanup();
  });

  it('does not complete short clouds, other pages, form inputs, IME or modified Enter and releases keyboard listeners', () => {
    const f = stageFixture(), short = nativeCloud(1, 2), other = nativeCloud(2), onError = vi.fn();
    f.engine.painter.currentAnnotation = { name: 'cloud' }; f.engine.painter.editorStore.set('1_13', short.editor); f.engine.painter.editorStore.set('2_13', other.editor);
    const controller = connectAnnotationDrawing(f.engine, document, onError);
    f.page.dispatchEvent(new MouseEvent('dblclick', { bubbles: true })); expect(short.save).not.toHaveBeenCalled(); expect(other.save).not.toHaveBeenCalled();
    const input = document.createElement('input'); f.page.append(input);
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    for (const options of [{ isComposing: true }, { ctrlKey: true }, { metaKey: true }, { altKey: true }]) f.page.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, ...options }));
    expect(other.save).not.toHaveBeenCalled(); controller.dispose();
    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); expect(other.save).not.toHaveBeenCalled(); f.cleanup();
  });

  it('uses the native Unicode metadata encoding for CJK, Arabic and surrogate pairs without a PDFDocument save/font prototype patch', () => {
    const encode = new Function('AP', `${unicodeWriter}; return QN;`)({ of: (hex: string) => hex }) as (text: string) => string;
    expect(encode('中文')).toBe('FEFF4E2D6587'); expect(encode('مرحبا')).toBe('FEFF06450631062D06280627'); expect(encode('😀')).toBe('FEFFD83DDE00');
  });

  it('requires actual painter stores rather than mocked top-level extension APIs', () => {
    expect(isAnnotationDrawingEngine({ activeAnnotation: { name: 'cloud' }, getAnnotationStore: vi.fn(), stage: {} })).toBe(false);
    const f = stageFixture(); expect(isAnnotationDrawingEngine(f.engine)).toBe(true); f.cleanup();
  });
});
