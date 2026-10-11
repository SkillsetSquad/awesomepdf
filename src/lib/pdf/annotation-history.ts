/** Bridge to the customized, shipped annotation engine, not its external-data getData(). */
export type StoredAnnotation = Record<string, unknown> & { id: string; pageNumber: number; konvaString: string };

interface ShapeNode { destroy(): void }
interface AnnotationStage { find(selector: string): ShapeNode[]; batchDraw(): void }
interface EngineStore { save(annotation: StoredAnnotation, original: boolean): unknown; delete(id: string): void }
interface EnginePainter {
  getData(): StoredAnnotation[];
  store: EngineStore;
  editorStore: Map<string, { shapeGroupStore: Map<string, unknown>; currentShapeGroup: unknown; isPainting: boolean }>;
  konvaCanvasStore: Map<number, { konvaStage: AnnotationStage }>;
  selector: { clear(): void };
  reDrawAnnotation(pageNumber: number): void;
  onStoreAdd(annotation: StoredAnnotation, original: boolean, definition?: unknown): void;
  onStoreDelete(id: string): void;
  onAnnotationChange(annotation: StoredAnnotation): void;
  onAnnotationChanging(): void;
  update(id: string, changes: Partial<StoredAnnotation>): unknown;
  delete(id: string, emit?: boolean): void;
  initAnnotations(annotations: StoredAnnotation[], loadPdfAnnotations: boolean): Promise<unknown>;
  setDefaultMode(): void;
}

export interface AnnotationHistoryEngine { painter: EnginePainter }
export interface AnnotationHistoryState { canUndo: boolean; canRedo: boolean }

/** Fail closed when a future vendor version changes the private methods we have audited. */
export function isAnnotationHistoryEngine(value: unknown): value is AnnotationHistoryEngine {
  if (!value || typeof value !== 'object' || !('painter' in value)) return false;
  const painter = value.painter;
  if (!painter || typeof painter !== 'object') return false;
  const candidate = painter as Record<string, unknown>;
  return ['getData', 'reDrawAnnotation', 'onStoreAdd', 'onStoreDelete', 'onAnnotationChange', 'onAnnotationChanging', 'update', 'delete', 'initAnnotations', 'setDefaultMode']
    .every(key => typeof candidate[key] === 'function') &&
    !!candidate.store && typeof candidate.store === 'object' &&
    'save' in candidate.store && typeof candidate.store.save === 'function' &&
    'delete' in candidate.store && typeof candidate.store.delete === 'function' &&
    !!candidate.selector && typeof candidate.selector === 'object' &&
    'clear' in candidate.selector && typeof candidate.selector.clear === 'function' &&
    Object.prototype.toString.call(candidate.editorStore) === '[object Map]' &&
    Object.prototype.toString.call(candidate.konvaCanvasStore) === '[object Map]';
}

function decodeSnapshot(snapshot: string): StoredAnnotation[] {
  const annotations: unknown = JSON.parse(snapshot);
  if (!Array.isArray(annotations)) throw new Error('Invalid annotation history.');
  const ids = new Set<string>();
  for (const annotation of annotations) {
    if (!annotation || typeof annotation !== 'object' || typeof annotation.id !== 'string' || !annotation.id ||
        ids.has(annotation.id) || !Number.isInteger(annotation.pageNumber) || annotation.pageNumber < 1 || typeof annotation.konvaString !== 'string') {
      throw new Error('Invalid annotation history.');
    }
    const group = JSON.parse(annotation.konvaString);
    if (group?.className !== 'Group' || group?.attrs?.id !== annotation.id) throw new Error('Invalid annotation drawing.');
    ids.add(annotation.id);
  }
  return annotations;
}

/**
 * Replace the local store, comments and drawn groups together. initAnnotations only adds
 * records, and reDrawAnnotation alone duplicates groups. Keep original PDF records and
 * every stage/layer in place; pages without a current canvas draw on their next render.
 */
function replaceAnnotations(painter: EnginePainter, annotations: StoredAnnotation[]) {
  painter.selector.clear();
  painter.onAnnotationChanging();
  for (const { konvaStage } of painter.konvaCanvasStore.values()) {
    konvaStage.find('.PdfjsAnnotationExtension_shape_group').forEach(group => group.destroy());
  }
  for (const editor of painter.editorStore.values()) {
    editor.shapeGroupStore.clear();
    editor.currentShapeGroup = null;
    editor.isPainting = false;
  }
  for (const annotation of painter.getData()) {
    painter.store.delete(annotation.id);
    painter.onStoreDelete(annotation.id);
  }
  for (const annotation of annotations) {
    painter.store.save(annotation, false);
    // Refresh comments without the native "new annotation" selection side effects.
    painter.onStoreAdd(annotation, true);
  }
  for (const [pageNumber, { konvaStage }] of painter.konvaCanvasStore) {
    painter.reDrawAnnotation(pageNumber);
    konvaStage.batchDraw();
  }
  painter.setDefaultMode();
}

export function createAnnotationHistory(engine: AnnotationHistoryEngine, onChange: (state: AnnotationHistoryState) => void) {
  const painter = engine.painter;
  let snapshots = [JSON.stringify(painter.getData())];
  let index = 0;
  let restoring = false;
  let loading = false;
  let disposed = false;
  const notify = () => { if (!disposed) onChange({ canUndo: !loading && index > 0, canRedo: !loading && index < snapshots.length - 1 }); };
  const capture = () => {
    if (disposed || restoring || loading) return;
    const next = JSON.stringify(painter.getData());
    if (next === snapshots[index]) return;
    snapshots = [...snapshots.slice(0, index + 1), next];
    // Bound memory while retaining the current and previous state for large image annotations.
    let bytes = snapshots.reduce((sum, snapshot) => sum + snapshot.length * 2, 0);
    while (snapshots.length > 2 && (snapshots.length > 100 || bytes > 32 * 1024 * 1024)) bytes -= snapshots.shift()!.length * 2;
    index = snapshots.length - 1;
    notify();
  };
  const originalAdd = painter.onStoreAdd;
  const originalDelete = painter.onStoreDelete;
  const originalChange = painter.onAnnotationChange;
  const originalUpdate = painter.update;
  const originalDeleteAction = painter.delete;
  const originalInit = painter.initAnnotations;
  const add: EnginePainter['onStoreAdd'] = function(annotation, original, definition) {
    originalAdd.call(painter, annotation, original, definition);
    if (original && !restoring) {
      // Initial decoded/imported annotations establish the baseline, not undo steps.
      snapshots = [JSON.stringify(painter.getData())]; index = 0; notify();
    } else capture();
  };
  const remove: EnginePainter['onStoreDelete'] = function(id) { originalDelete.call(painter, id); capture(); };
  const change: EnginePainter['onAnnotationChange'] = function(annotation) { originalChange.call(painter, annotation); capture(); };
  const update: EnginePainter['update'] = function(id, changes) { const result = originalUpdate.call(painter, id, changes); capture(); return result; };
  const deleteAction: EnginePainter['delete'] = function(id, emit) { originalDeleteAction.call(painter, id, emit); capture(); };
  const init: EnginePainter['initAnnotations'] = async function(annotations, loadPdfAnnotations) {
    loading = true; notify();
    try { return await originalInit.call(painter, annotations, loadPdfAnnotations); }
    finally { if (!disposed) { snapshots = [JSON.stringify(painter.getData())]; index = 0; loading = false; notify(); } }
  };
  painter.onStoreAdd = add; painter.onStoreDelete = remove; painter.onAnnotationChange = change;
  painter.update = update; painter.delete = deleteAction; painter.initAnnotations = init;
  const move = (delta: number) => {
    if (disposed || restoring || loading) return false;
    capture(); // Catch any native store updates that do not dispatch a callback.
    const next = index + delta;
    if (next < 0 || next >= snapshots.length) return false;
    const target = decodeSnapshot(snapshots[next]);
    const current = decodeSnapshot(snapshots[index]);
    restoring = true;
    try {
      try { replaceAnnotations(painter, target); }
      catch (error) { replaceAnnotations(painter, current); throw error; }
      index = next;
    } finally { restoring = false; notify(); }
    return true;
  };
  notify();
  return {
    capture,
    undo: () => move(-1),
    redo: () => move(1),
    dispose: () => {
      disposed = true; snapshots = [];
      if (painter.onStoreAdd === add) painter.onStoreAdd = originalAdd;
      if (painter.onStoreDelete === remove) painter.onStoreDelete = originalDelete;
      if (painter.onAnnotationChange === change) painter.onAnnotationChange = originalChange;
      if (painter.update === update) painter.update = originalUpdate;
      if (painter.delete === deleteAction) painter.delete = originalDeleteAction;
      if (painter.initAnnotations === init) painter.initAnnotations = originalInit;
    },
  };
}
