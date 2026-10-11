import { readFileSync } from 'node:fs';
import { vi } from 'vitest';
import type { StoredAnnotation, AnnotationHistoryEngine } from '@/lib/pdf/annotation-history';

const bundle = readFileSync('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js', 'utf8');
/** Execute the audited shipped methods; rendering stages/editors are local geometry fixtures. */
function shippedMethod(key: string, dependencyNames: string[] = [], dependencies: unknown[] = []) {
  const start = bundle.indexOf(`key:"${key}",value:function`, bundle.indexOf('key:"saveToStore"'));
  const end = bundle.indexOf('},{key:', start);
  if (start < 0 || end < 0) throw new Error(`Shipped painter ${key} not found.`);
  return new Function(...dependencyNames, `return ({${bundle.slice(start, end)}}).value;`)(...dependencies);
}

export const annotation = (id: string, pageNumber = 1, x = 10): StoredAnnotation => ({
  id, pageNumber, type: 5, pdfjsType: 15, color: '#123456', title: 'Guest User', date: 'original-date', comments: [],
  konvaString: JSON.stringify({ className: 'Group', attrs: { id, name: 'PdfjsAnnotationExtension_shape_group', x }, children: [{ className: 'Rect', attrs: { width: 50, height: 30, stroke: '#123456' } }] }),
});

export function engineFixture(initial: StoredAnnotation[] = [annotation('original')]) {
  const records = new Map(initial.map(item => [item.id, structuredClone(item)]));
  const originals = new Map(records);
  const comments = new Map(records);
  const definitions = [{ type: 5, pdfjsAnnotationType: 15 }];
  const makeStage = () => {
    const groups = new Map<string, { serialized: string; destroy: () => void }>();
    return { groups, batchDraw: vi.fn(), find: vi.fn(() => [...groups.values()]) };
  };
  const stages = new Map([[1, makeStage()], [2, makeStage()]]);
  const editorStore = new Map([...stages].map(([pageNumber]) => {
    const shapeGroupStore = new Map<string, unknown>();
    return [`${pageNumber}_5` as string, { shapeGroupStore, currentShapeGroup: null as unknown, isPainting: false,
      addSerializedGroupToLayer: (stage: ReturnType<typeof makeStage>, serialized: string) => {
        const id = JSON.parse(serialized).attrs.id;
        const group = { serialized, destroy: () => { stage.groups.delete(id); } };
        stage.groups.set(id, group); shapeGroupStore.set(id, group);
      },
    }] as const;
  }));
  const painter = {
    store: {
      get annotations() { return [...records.values()]; },
      getByPage: (page: number) => [...records.values()].filter(item => item.pageNumber === page),
      save: (item: StoredAnnotation, original: boolean) => { records.set(item.id, item); if (original) originals.set(item.id, item); return item; },
      delete: (id: string) => { records.delete(id); },
      update: (id: string, changes: Partial<StoredAnnotation>) => { const item = { ...records.get(id)!, ...changes }; records.set(id, item); return item; },
    },
    getData: shippedMethod('getData') as AnnotationHistoryEngine['painter']['getData'],
    saveToStore: shippedMethod('saveToStore', ['Po'], [definitions]) as (item: StoredAnnotation, original?: boolean) => void,
    updateStore: shippedMethod('updateStore') as (id: string, changes: Partial<StoredAnnotation>) => void,
    update: shippedMethod('update') as AnnotationHistoryEngine['painter']['update'],
    delete: (id: string, emit = false) => { records.delete(id); if (emit) painter.onStoreDelete(id); },
    reDrawAnnotation: shippedMethod('reDrawAnnotation', ['Po'], [definitions]) as AnnotationHistoryEngine['painter']['reDrawAnnotation'],
    findEditor: (page: number, type: number) => editorStore.get(`${page}_${type}`),
    enableEditor: vi.fn(),
    editorStore,
    konvaCanvasStore: new Map([...stages].map(([page, konvaStage]) => [page, { konvaStage }])),
    selector: { clear: vi.fn() },
    onStoreAdd: vi.fn((item: StoredAnnotation) => { comments.set(item.id, item); }),
    onStoreDelete: vi.fn((id: string) => { comments.delete(id); }),
    onAnnotationChange: vi.fn((item: StoredAnnotation) => { comments.set(item.id, item); }),
    onAnnotationChanging: vi.fn(),
    setDefaultMode: vi.fn(),
    initAnnotations: vi.fn(async (items: StoredAnnotation[]) => { items.forEach(item => painter.saveToStore(item, true)); }),
  };
  for (const page of stages.keys()) painter.reDrawAnnotation(page);
  return { engine: { painter }, records, originals, comments, stages, painter };
}

