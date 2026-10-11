import { describe, expect, it, vi } from 'vitest';
import { createAnnotationHistory, isAnnotationHistoryEngine } from '@/lib/pdf/annotation-history';
import { annotation, engineFixture } from '../../fixtures/annotation-engine';

describe('Shipped annotation history bridge', () => {
  it('records fast additions separately and undoes/redoes actual store data and serialized geometry without duplicates', () => {
    const { engine, painter, records, comments, originals, stages } = engineFixture();
    const state = vi.fn(); const history = createAnnotationHistory(engine, state);
    painter.saveToStore(annotation('one', 1, 25)); painter.saveToStore(annotation('two', 2, 70));
    painter.editorStore.get('1_5')!.isPainting = true;
    expect(history.undo()).toBe(true);
    expect(painter.editorStore.get('1_5')!.isPainting).toBe(false);
    expect([...records.keys()]).toEqual(['original', 'one']); expect([...comments.keys()]).toEqual(['original', 'one']);
    expect(stages.get(1)!.groups.get('one')!.serialized).toBe(annotation('one', 1, 25).konvaString);
    expect(stages.get(2)!.groups.size).toBe(0);
    expect(history.undo()).toBe(true); expect([...records.keys()]).toEqual(['original']);
    expect(history.undo()).toBe(false);
    expect(history.redo()).toBe(true); expect(history.redo()).toBe(true);
    expect([...records.keys()]).toEqual(['original', 'one', 'two']);
    expect(stages.get(1)!.groups.size).toBe(2); expect(stages.get(2)!.groups.size).toBe(1);
    expect([...originals.keys()]).toEqual(['original']);
    expect(state).toHaveBeenLastCalledWith({ canUndo: true, canRedo: false }); history.dispose();
  });

  it('restores deleted annotations on unloaded pages, comments, styles and positions', () => {
    const hidden = annotation('hidden', 3, 42);
    const { engine, painter, records, comments, stages } = engineFixture([annotation('original'), hidden]);
    const history = createAnnotationHistory(engine, vi.fn());
    painter.updateStore('original', { color: '#ff0000', konvaString: annotation('original', 1, 100).konvaString });
    painter.update('original', { comments: [{ content: 'A reply' }] });
    painter.store.delete('hidden'); painter.onStoreDelete('hidden');
    history.undo(); expect(records.get('hidden')).toEqual(hidden); expect(comments.get('hidden')).toEqual(hidden);
    history.undo(); expect(records.get('original')!.comments).toEqual([]);
    history.undo(); expect(records.get('original')).toEqual(annotation('original'));
    expect(stages.get(1)!.groups.get('original')!.serialized).toBe(annotation('original').konvaString);
    // The stored hidden-page record is ready for the native pagerendered handler; no absent canvas is requested.
    expect(painter.konvaCanvasStore.has(3)).toBe(false);
    history.redo(); history.redo(); history.redo(); expect(records.has('hidden')).toBe(false); expect(comments.has('hidden')).toBe(false);
    history.dispose();
  });

  it('clears redo after a new edit and catches comment-menu deletes without a native delete callback', () => {
    const { engine, painter, records } = engineFixture(); const history = createAnnotationHistory(engine, vi.fn());
    painter.saveToStore(annotation('one')); history.undo(); painter.saveToStore(annotation('branch'));
    expect(history.redo()).toBe(false);
    painter.delete('branch'); history.undo();
    expect(records.has('branch')).toBe(true); expect(records.has('one')).toBe(false); history.dispose();
  });

  it('initializes decoded/imported annotations as a baseline and ignores callbacks while restoring', async () => {
    const { engine, painter, records } = engineFixture([]); const state = vi.fn(); const history = createAnnotationHistory(engine, state);
    await painter.initAnnotations([annotation('original')]);
    expect(history.undo()).toBe(false);
    painter.saveToStore(annotation('one')); history.undo(); expect([...records.keys()]).toEqual(['original']);
    expect(state).toHaveBeenLastCalledWith({ canUndo: false, canRedo: true });
    history.dispose();
  });

  it('validates history before removing shapes and rolls back a failed redraw without advancing history', () => {
    const { engine, painter, records, comments } = engineFixture(); const history = createAnnotationHistory(engine, vi.fn());
    painter.saveToStore(annotation('one'));
    const redraw = painter.reDrawAnnotation;
    painter.reDrawAnnotation = vi.fn().mockImplementationOnce(() => { throw new Error('Render failed'); }).mockImplementation(redraw);
    expect(() => history.undo()).toThrow('Render failed');
    expect([...records.keys()]).toEqual(['original', 'one']); expect([...comments.keys()]).toEqual(['original', 'one']);
    expect(history.undo()).toBe(true); expect([...records.keys()]).toEqual(['original']);
    history.dispose();
    const bad = engineFixture([annotation('broken')]); bad.records.get('broken')!.konvaString = 'invalid JSON';
    const invalid = createAnnotationHistory(bad.engine, vi.fn()); bad.painter.saveToStore(annotation('new'));
    expect(() => invalid.undo()).toThrow(); expect([...bad.records.keys()]).toEqual(['broken', 'new']); invalid.dispose();
  });

  it('restores callbacks on disposal, releases history and accepts cross-frame Maps without nonexistent top-level APIs', () => {
    const { engine, painter } = engineFixture(); const original = painter.onStoreAdd;
    expect(isAnnotationHistoryEngine(engine)).toBe(true); expect(isAnnotationHistoryEngine({ getAnnotationStore: () => [] })).toBe(false);
    const history = createAnnotationHistory(engine, vi.fn()); painter.saveToStore(annotation('one')); history.dispose();
    expect(painter.onStoreAdd).toBe(original); expect(history.undo()).toBe(false);
    const frame = document.createElement('iframe'); document.body.append(frame);
    try {
      const FrameMap = (frame.contentWindow as Window & { Map: MapConstructor }).Map;
      painter.konvaCanvasStore = new FrameMap(painter.konvaCanvasStore);
      expect(isAnnotationHistoryEngine(engine)).toBe(true);
    } finally { frame.remove(); }
  });
});
