import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { annotation, engineFixture } from '../../fixtures/annotation-engine';
import { createAnnotationHistory } from '@/lib/pdf/annotation-history';

type RecordData = ReturnType<typeof record>;
type Reply = { id: string; title: string; content: string; date: string; status?: string };
function record(id: string, pageNumber = 1) { return { ...annotation(id, pageNumber), title: 'Author', subtype: 'Square', contentsObj: { text: 'Original comment', image: 'original-image' }, comments: [] as Reply[], konvaClientRect: { x: 10, y: 20, width: 50, height: 30 } }; }
const bundle = readFileSync('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js', 'utf8');
const parsed = ts.createSourceFile('engine.js', bundle, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
let renderer = '';
function find(node: ts.Node) { if (ts.isVariableDeclaration(node) && node.name.getText(parsed) === 'NK') renderer = node.initializer!.getText(parsed); else ts.forEachChild(node, find); }
find(parsed);

function setup() {
  const host = document.createElement('div'); document.body.append(host);
  const { engine, painter, records } = engineFixture([record('one'), record('hidden', 3)]);
  const history = createAnnotationHistory(engine, vi.fn());
  const onUpdate = vi.fn((item: RecordData) => painter.update(item.id, { title: item.title, contentsObj: item.contentsObj, comments: item.comments }));
  const onDelete = vi.fn((id: string) => painter.delete(id)); const onSelected = vi.fn();
  const Native = () => null; const statuses = Object.fromEntries(['Accepted', 'Rejected', 'Cancelled', 'Completed', 'Closed', 'None'].map(key => [key, { labelKey: `comment.status.${key.toLowerCase()}`, icon: null }]));
  let sequence = 0;
  const Comment = new Function('m', 'OK', 'EK', 'kK', 'ke', 'Mn', 'XN', 'UN', 'YN', 'jo', 'RK', 'PK', 'gB', 'SS', '_K', 'AC', 'IK', 'Gq', 'sU', 'bK', 'hm', 'xK', `return ${renderer};`)(
    React, (values: unknown[]) => values, Array.from, Object.assign, () => ({ t: (key: string) => key }), jsxRuntime, () => 'new-date', () => `reply-${++sequence}`, (date: string) => date, { None: 'None' }, statuses,
    Native, Native, Native, Native, Native, Native, Native, Native, Native, Native, Native,
  ) as React.ForwardRefExoticComponent<{ userName: string; onUpdate: typeof onUpdate; onDelete: typeof onDelete; onSelected: typeof onSelected } & React.RefAttributes<{ addAnnotation(annotation: RecordData): void; updateAnnotation(annotation: RecordData): void; selectedAnnotation(annotation: RecordData, isClick: boolean): void }>>;
  const ref = React.createRef<React.ComponentRef<typeof Comment>>(); const root = createRoot(host);
  act(() => root.render(<React.StrictMode><Comment ref={ref} userName="Reviewer" onUpdate={onUpdate} onDelete={onDelete} onSelected={onSelected} /></React.StrictMode>));
  act(() => { for (const item of records.values()) ref.current!.addAnnotation(item as RecordData); });
  type Metadata = { annotations: RecordData[]; onAddReply(annotation: RecordData, text: string, status?: string): void; onSaveText(annotation: RecordData, text: string): void; onSaveReply(annotation: RecordData, reply: Reply, text: string): void; onDeleteReply(annotation: RecordData, reply: Reply): void; onDelete(annotation: RecordData): void };
  const metadata = () => (host.querySelector('[data-comment-control]') as HTMLElement & { awesomepdfComment: Metadata }).awesomepdfComment;
  return { metadata, records, onUpdate, onDelete, history, ref, cleanup: () => { act(() => root.unmount()); history.dispose(); host.remove(); } };
}

describe('Shipped comment mutations and actual painter store', () => {
  it('commits replies exactly once under StrictMode, persists edits/deletes and preserves immutable source data', async () => {
    const { metadata, records, onUpdate, history, cleanup } = setup();
    try {
      const original = records.get('one') as RecordData; const serialized = original.konvaString;
      act(() => metadata().onAddReply(original, 'Review', 'Accepted'));
      expect(onUpdate).toHaveBeenCalledTimes(1); const updated = records.get('one') as RecordData;
      expect(updated.comments).toEqual([{ id: 'reply-1', title: 'Reviewer', date: 'new-date', content: 'Review', status: 'Accepted' }]);
      expect(original.comments).toEqual([]); expect(updated.konvaString).toBe(serialized);
      act(() => metadata().onSaveReply(updated, updated.comments[0], 'Edited reply'));
      expect(onUpdate).toHaveBeenCalledTimes(2); expect((records.get('one') as RecordData).comments[0].content).toBe('Edited reply'); expect(updated.comments[0].content).toBe('Review');
      act(() => metadata().onDeleteReply(updated, updated.comments[0]));
      expect(onUpdate).toHaveBeenCalledTimes(3); expect((records.get('one') as RecordData).comments).toEqual([]); expect(metadata().annotations.find(item => item.id === 'one')!.comments).toEqual([]);
      act(() => history.undo()); expect((records.get('one') as RecordData).comments[0].content).toBe('Edited reply');
    } finally { cleanup(); }
  });

  it('keeps image/geometry and original contents immutable when saving unchanged or edited comment text', () => {
    const { metadata, records, onUpdate, cleanup } = setup();
    try {
      const original = records.get('one') as RecordData;
      act(() => metadata().onSaveText(original, original.contentsObj.text));
      expect((records.get('one') as RecordData).contentsObj).toEqual({ text: 'Original comment', image: 'original-image' });
      act(() => metadata().onSaveText(original, 'New comment'));
      expect((records.get('one') as RecordData).contentsObj).toEqual({ text: 'New comment', image: 'original-image' }); expect(original.contentsObj.text).toBe('Original comment');
      expect((records.get('one') as RecordData).konvaString).toBe(original.konvaString); expect(onUpdate).toHaveBeenCalledTimes(2);
    } finally { cleanup(); }
  });

  it('retains local state on a failed update and removes unloaded-page rows only after successful painter deletion', async () => {
    const { metadata, records, onUpdate, onDelete, cleanup } = setup();
    try {
      const original = records.get('one') as RecordData;
      onUpdate.mockImplementationOnce(() => { throw new Error('Store unavailable'); });
      expect(() => act(() => metadata().onSaveText(original, 'Rejected change'))).toThrow('Store unavailable');
      await waitFor(() => expect(metadata().annotations.find(item => item.id === 'one')!.contentsObj.text).toBe('Original comment')); expect(records.get('one')).toBe(original);
      const hidden = records.get('hidden') as RecordData; act(() => metadata().onDelete(hidden)); expect(onDelete).toHaveBeenCalledWith(hidden.id); expect(records.has(hidden.id)).toBe(false); expect(metadata().annotations.some(item => item.id === hidden.id)).toBe(false);
      onDelete.mockImplementationOnce(() => { throw new Error('Delete unavailable'); }); expect(() => act(() => metadata().onDelete(original))).toThrow('Delete unavailable');
      expect(metadata().annotations.some(item => item.id === original.id)).toBe(true); expect(records.has(original.id)).toBe(true);
    } finally { cleanup(); }
  });
});
