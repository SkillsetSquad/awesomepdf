import { describe, expect, it, vi } from 'vitest';
import { annotation, engineFixture } from '../../fixtures/annotation-engine';
import { createAnnotationHistory } from '@/lib/pdf/annotation-history';

describe('Shipped painter deletion from comment and annotation actions', () => {
  it('treats an already deleted ID as a no-op without touching another record or emitting twice', () => {
    const { painter, records, stages, originals } = engineFixture([annotation('one'), annotation('keep')]);
    painter.delete('one', true); expect(records.has('one')).toBe(false); expect(records.has('keep')).toBe(true);
    expect(stages.get(1)!.groups.has('one')).toBe(false); expect(stages.get(1)!.groups.has('keep')).toBe(true);
    expect(originals.has('one')).toBe(true); expect(painter.onStoreDelete).toHaveBeenCalledTimes(1); expect(painter.onStoreDelete).toHaveBeenCalledWith('one');
    expect(() => painter.delete('one', true)).not.toThrow(); expect(painter.onStoreDelete).toHaveBeenCalledTimes(1);
  });

  it('deletes data on an unloaded page, releases stale editor groups and remains undoable', () => {
    const hidden = annotation('hidden', 3); const { engine, painter, records, comments, originals } = engineFixture([annotation('visible'), hidden]);
    const staleGroup = { id: hidden.id, konvaGroup: { destroy: vi.fn() } }; const shapeGroupStore = new Map<string, unknown>([[hidden.id, staleGroup]]);
    const staleEditor = { ...painter.editorStore.get('1_5')!, shapeGroupStore, currentShapeGroup: staleGroup, isPainting: true };
    painter.editorStore.set('3_5', staleEditor); const history = createAnnotationHistory(engine, vi.fn());
    expect(() => painter.delete(hidden.id, true)).not.toThrow(); expect(records.has(hidden.id)).toBe(false); expect(comments.has(hidden.id)).toBe(false);
    expect(staleGroup.konvaGroup.destroy).toHaveBeenCalledTimes(1); expect(shapeGroupStore.size).toBe(0); expect(staleEditor.currentShapeGroup).toBeNull(); expect(staleEditor.isPainting).toBe(false);
    expect(staleEditor.deleteGroup).not.toHaveBeenCalled(); expect(originals.has(hidden.id)).toBe(true);
    history.undo(); expect(records.get(hidden.id)).toEqual(hidden); expect(comments.get(hidden.id)).toEqual(hidden); expect(painter.konvaCanvasStore.has(3)).toBe(false);
    history.dispose();
  });

  it('retains the record if drawing cleanup fails and preserves the comment-menu no-emit contract', () => {
    const { painter, records, comments } = engineFixture(); const editor = painter.editorStore.get('1_5')!;
    editor.deleteGroup.mockImplementationOnce(() => { throw new Error('Stage unavailable'); });
    expect(() => painter.delete('original')).toThrow('Stage unavailable'); expect(records.has('original')).toBe(true); expect(comments.has('original')).toBe(true);
    painter.delete('original'); expect(records.has('original')).toBe(false); expect(painter.onStoreDelete).not.toHaveBeenCalled();
    // The native comment action removes its own row, while the history bridge captures
    // the actual public delete method even when the native action does not emit.
    expect(painter.selector.delete).toHaveBeenCalledTimes(2);
  });
});
