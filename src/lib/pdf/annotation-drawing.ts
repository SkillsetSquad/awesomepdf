/** Optional drawing helpers bound to the audited shipped painter, not top-level extension stubs. */
interface Point { x: number; y: number }
interface Rect extends Point { width: number; height: number }
interface DrawingNode {
  id(): string;
  getClientRect(options: { relativeTo: DrawingStage }): Rect;
  absolutePosition(position?: Point): Point;
}
interface DrawingStage {
  container(): HTMLElement;
  find(selector: string): DrawingNode[];
  on(events: string, handler: (event: { target: DrawingNode }) => void): void;
  off(events: string): void;
  width(): number;
  height(): number;
  getAbsoluteTransform(): { point(point: Point): Point };
}
interface CloudEditor {
  pageNumber: number;
  isPainting: boolean;
  handleDoubleClick?: () => void;
}
export interface AnnotationDrawingEngine {
  painter: {
    currentAnnotation: { name: string } | null;
    getData(): { id: string }[];
    konvaCanvasStore: Map<number, { konvaStage: DrawingStage }>;
    editorStore: Map<string, CloudEditor>;
  };
}

export function isAnnotationDrawingEngine(value: unknown): value is AnnotationDrawingEngine {
  if (!value || typeof value !== 'object' || !('painter' in value) || !value.painter || typeof value.painter !== 'object') return false;
  const painter = value.painter as Record<string, unknown>;
  return typeof painter.getData === 'function' && 'currentAnnotation' in painter &&
    Object.prototype.toString.call(painter.konvaCanvasStore) === '[object Map]' &&
    Object.prototype.toString.call(painter.editorStore) === '[object Map]';
}

function closestSnap(edges: number[], stops: number[], limit: number) {
  let closest: { delta: number; guide: number } | null = null;
  for (const stop of stops) for (const edge of edges) {
    const delta = stop - edge;
    if (Math.abs(delta) < limit && (!closest || Math.abs(delta) < Math.abs(closest.delta))) closest = { delta, guide: stop };
  }
  return closest;
}

export function connectAnnotationDrawing(engine: AnnotationDrawingEngine, doc: Document, onError: () => void) {
  const { painter } = engine;
  const stages = new Map<DrawingStage, () => void>();
  let disposed = false;
  const completeCloud = (event: KeyboardEvent | MouseEvent) => {
    if (event.defaultPrevented || painter.currentAnnotation?.name !== 'cloud') return;
    const target = event.target;
    if (target && 'closest' in target && typeof target.closest === 'function' && target.closest('input, textarea, select, button, [contenteditable]:not([contenteditable=false])')) return;
    if (event.type === 'keydown' && ((event as KeyboardEvent).key !== 'Enter' || (event as KeyboardEvent).isComposing || (event as KeyboardEvent).ctrlKey || (event as KeyboardEvent).metaKey || (event as KeyboardEvent).altKey)) return;
    const page = target && 'closest' in target && typeof target.closest === 'function' ? target.closest('.page[data-page-number]') as HTMLElement | null : null;
    const pageNumber = page ? Number(page.dataset.pageNumber) : null;
    // A double click outside a PDF page must not complete an unrelated drawing.
    if (event.type === 'dblclick' && pageNumber === null) return;
    try {
      for (const editor of painter.editorStore.values()) {
        if (!editor.isPainting || typeof editor.handleDoubleClick !== 'function' || (pageNumber !== null && editor.pageNumber !== pageNumber)) continue;
        editor.handleDoubleClick();
        if (!editor.isPainting) event.preventDefault();
      }
    } catch { onError(); }
  };
  doc.addEventListener('keydown', completeCloud, true);
  doc.addEventListener('dblclick', completeCloud, true);

  const attach = (stage: DrawingStage) => {
    const container = stage.container();
    const guide = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    guide.dataset.awsomepdfAlignmentGuides = 'true';
    guide.setAttribute('aria-hidden', 'true');
    guide.classList.add('pointer-events-none', 'absolute', 'inset-0', 'text-primary');
    guide.style.width = '100%'; guide.style.height = '100%';
    const clear = () => { guide.replaceChildren(); guide.remove(); };
    const line = (from: Point, to: Point) => {
      const element = doc.createElementNS('http://www.w3.org/2000/svg', 'line');
      for (const [key, value] of Object.entries({ x1: from.x, y1: from.y, x2: to.x, y2: to.y })) element.setAttribute(key, String(value));
      element.setAttribute('stroke', 'currentColor'); element.setAttribute('stroke-width', '1'); element.setAttribute('stroke-dasharray', '4 4');
      guide.append(element);
    };
    const drag = ({ target }: { target: DrawingNode }) => {
      clear();
      try {
        const groups = Array.from(stage.find('.PdfjsAnnotationExtension_shape_group'));
        if (!groups.includes(target)) return;
        const stored = new Set(painter.getData().map(record => record.id));
        if (!stored.has(target.id())) return;
        const bounds = target.getClientRect({ relativeTo: stage });
        const horizontal: number[] = [], vertical: number[] = [];
        for (const group of groups) {
          if (group === target || !stored.has(group.id())) continue;
          const box = group.getClientRect({ relativeTo: stage });
          horizontal.push(box.x, box.x + box.width / 2, box.x + box.width);
          vertical.push(box.y, box.y + box.height / 2, box.y + box.height);
        }
        const transform = stage.getAbsoluteTransform(), origin = transform.point({ x: 0, y: 0 });
        const xUnit = transform.point({ x: 1, y: 0 }), yUnit = transform.point({ x: 0, y: 1 });
        const scaleX = Math.hypot(xUnit.x - origin.x, xUnit.y - origin.y), scaleY = Math.hypot(yUnit.x - origin.x, yUnit.y - origin.y);
        if (!Number.isFinite(scaleX) || !Number.isFinite(scaleY) || scaleX === 0 || scaleY === 0) return;
        const x = closestSnap([bounds.x, bounds.x + bounds.width / 2, bounds.x + bounds.width], horizontal, 8 / scaleX);
        const y = closestSnap([bounds.y, bounds.y + bounds.height / 2, bounds.y + bounds.height], vertical, 8 / scaleY);
        if (!x && !y) return;
        // Rectangle origin includes child offsets/stroke. Apply its delta through the stage
        // transform to the group's absolute position, preserving parent transforms and zoom.
        const position = target.absolutePosition(), shifted = transform.point({ x: x?.delta ?? 0, y: y?.delta ?? 0 });
        target.absolutePosition({ x: position.x + shifted.x - origin.x, y: position.y + shifted.y - origin.y });
        guide.setAttribute('viewBox', `0 0 ${stage.width()} ${stage.height()}`);
        if (x) line(transform.point({ x: x.guide, y: 0 }), transform.point({ x: x.guide, y: stage.height() / scaleY }));
        if (y) line(transform.point({ x: 0, y: y.guide }), transform.point({ x: stage.width() / scaleX, y: y.guide }));
        container.append(guide);
        // Native dragend remains responsible for serializing and publishing the moved group.
      } catch { clear(); onError(); }
    };
    stage.on('dragmove.awsomepdfSnapping', drag);
    stage.on('dragend.awsomepdfSnapping', clear);
    return () => { stage.off('.awsomepdfSnapping'); clear(); };
  };

  const refresh = () => {
    if (disposed) return;
    const current = new Set(Array.from(painter.konvaCanvasStore.values(), canvas => canvas.konvaStage));
    for (const [stage, dispose] of stages) if (!current.has(stage) || !stage.container().isConnected) { dispose(); stages.delete(stage); }
    for (const stage of current) {
      if (!stage || ['container', 'on', 'off', 'find', 'getAbsoluteTransform', 'width', 'height'].some(key => typeof (stage as unknown as Record<string, unknown>)[key] !== 'function')) continue;
      if (stages.has(stage) || !stage.container().isConnected) continue;
      stages.set(stage, attach(stage));
    }
  };
  refresh();
  return { refresh, dispose: () => {
    if (disposed) return;
    disposed = true;
    doc.removeEventListener('keydown', completeCloud, true); doc.removeEventListener('dblclick', completeCloud, true);
    for (const dispose of stages.values()) dispose(); stages.clear();
  } };
}
