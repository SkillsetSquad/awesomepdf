import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, fireEvent, render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { LegacyEditorControls } from '@/components/tools/edit-pdf/LegacyEditorControls';
import { annotationCommentLabels } from '@/components/tools/edit-pdf/annotation-comment-labels';
import type { AnnotationCommentOptions, CommentAnnotation } from '@/components/tools/edit-pdf/AnnotationCommentControls';
import { createAnnotationHistory } from '@/lib/pdf/annotation-history';
import { annotation, engineFixture } from '../../fixtures/annotation-engine';

const bundle = readFileSync('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js', 'utf8');
const parsed = ts.createSourceFile('engine.js', bundle, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
let renderer = '';
function find(node: ts.Node) { if (ts.isVariableDeclaration(node) && node.name.getText(parsed) === 'NK') renderer = node.initializer!.getText(parsed); else ts.forEachChild(node, find); } find(parsed);
function fixtureRecord(id: string, title = 'Author', subtype = 'Square', pageNumber = 1, y = 20): CommentAnnotation {
  return { ...annotation(id, pageNumber), title, subtype, date: 'original-date', contentsObj: { text: `Comment ${id}`, image: 'original-image' }, comments: [], konvaClientRect: { y } };
}
function labelsFor(locale: string) {
  const messages = JSON.parse(readFileSync(`messages/${locale}.json`, 'utf8'));
  const lookup = (base: Record<string, unknown>) => (key: string, values?: { value: string | number }) => {
    const value = key.split('.').reduce<unknown>((value, part) => (value as Record<string, unknown>)[part], base);
    if (typeof value !== 'string') throw new Error(`Missing translation ${locale}:${key}`);
    return values ? value.replace('{value}', String(values.value)) : value;
  };
  return annotationCommentLabels(lookup(messages.common), lookup(messages.tools.editPdf), messages.errors.processingFailed);
}
async function setup(locale: 'en' | 'ar' = 'en') {
  const iframe = document.createElement('iframe'); document.body.append(iframe); const doc = iframe.contentDocument!;
  const host = doc.createElement('div'); doc.body.append(host);
  const initial = [fixtureRecord('one'), fixtureRecord('two', 'Other', 'FreeText', 1, 10), { ...fixtureRecord('hidden', 'Author', 'Square', 3), contentsObj: null }];
  const { engine, painter, records } = engineFixture(initial);
  const onUpdate = vi.fn((item: CommentAnnotation) => painter.update(item.id, { title: item.title, contentsObj: item.contentsObj, comments: item.comments }));
  const onDelete = vi.fn((id: string) => painter.delete(id)); const onSelected = vi.fn<(annotation: CommentAnnotation) => Promise<void>>(async () => {});
  const Native = () => null; const statuses = Object.fromEntries(['Accepted', 'Rejected', 'Cancelled', 'Completed', 'Closed', 'None'].map(key => [key, { labelKey: `comment.status.${key.toLowerCase()}`, icon: null }])); let sequence = 0;
  const Comment = new Function('m', 'OK', 'EK', 'kK', 'ke', 'Mn', 'XN', 'UN', 'YN', 'jo', 'RK', 'PK', 'gB', 'SS', '_K', 'AC', 'IK', 'Gq', 'sU', 'bK', 'hm', 'xK', 'window', `return ${renderer};`)(
    React, (values: unknown[]) => values, Array.from, Object.assign, () => ({ t: (key: string) => key }), jsxRuntime, () => 'new-date', () => `reply-${++sequence}`, (date: string) => date, { None: 'None' }, statuses,
    Native, Native, Native, Native, Native, Native, Native, Native, Native, Native, Native, doc.defaultView,
  ) as React.ForwardRefExoticComponent<{ userName: string; onUpdate: typeof onUpdate; onDelete: typeof onDelete; onSelected: typeof onSelected } & React.RefAttributes<{ addAnnotation(annotation: CommentAnnotation): void; delAnnotation(id: string): void; updateAnnotation(annotation: CommentAnnotation): void; selectedAnnotation(annotation: CommentAnnotation, isClick: boolean): void }>>;
  const ref = React.createRef<React.ComponentRef<typeof Comment>>(); const root = createRoot(host); const labels = labelsFor(locale);
  const view = render(<LegacyEditorControls iframe={iframe} locale={locale} undo="Undo" redo="Redo" commentLabels={labels} />);
  act(() => root.render(<React.StrictMode><Comment ref={ref} userName="Reviewer" onUpdate={onUpdate} onDelete={onDelete} onSelected={onSelected} /></React.StrictMode>));
  act(() => { for (const item of initial) ref.current!.addAnnotation(item); });
  const originalAdd = painter.onStoreAdd, originalDelete = painter.onStoreDelete, originalChange = painter.onAnnotationChange;
  painter.onStoreAdd = vi.fn(item => { originalAdd(item); ref.current!.addAnnotation(item as CommentAnnotation); });
  painter.onStoreDelete = vi.fn(id => { originalDelete(id); ref.current!.delAnnotation(id); });
  painter.onAnnotationChange = vi.fn(item => { originalChange(item); ref.current!.updateAnnotation(item as CommentAnnotation); });
  const history = createAnnotationHistory(engine, vi.fn());
  const panel = await within(doc.body).findByRole('region', { name: labels.title });
  await waitFor(() => expect(panel.querySelectorAll('[data-slot="card"]')).toHaveLength(3));
  const metadata = () => (host.querySelector('[data-comment-control]') as HTMLElement & { awesomepdfComment: AnnotationCommentOptions }).awesomepdfComment;
  let controlsMounted = true;
  const unmountControls = () => { if (controlsMounted) { view.unmount(); controlsMounted = false; } };
  return { iframe, doc, panel, labels, records, onUpdate, onDelete, onSelected, history, ref, metadata,
    unmountControls, cleanup: () => { unmountControls(); act(() => root.unmount()); history.dispose(); iframe.remove(); } };
}

async function choose(card: HTMLElement, name: string, action: string, doc: Document) {
  await userEvent.setup({ document: doc }).click(within(card).getByRole('button', { name }));
  await userEvent.setup({ document: doc }).click(await within(doc.body).findByRole('menuitem', { name: action }));
}

describe('Standard comments connected to the shipped component and painter store', () => {
  it.each(['en', 'ar'] as const)('preserves selection, text/reply/status data, keyboard save/cancel and focus in %s', async locale => {
    const { doc, panel, labels, records, onUpdate, onSelected, metadata, cleanup } = await setup(locale);
    try {
      const ui = within(panel); const user = userEvent.setup({ document: doc });
      expect(panel).toHaveAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr'); expect(doc.querySelectorAll('#annotation-one')).toHaveLength(1);
      const card = doc.getElementById('annotation-one')!; const select = within(card).getByRole('button', { name: 'Author original-date' });
      select.focus(); await user.keyboard('{Enter}'); expect(onSelected).toHaveBeenCalledTimes(1); await waitFor(() => expect(select).toHaveAttribute('aria-pressed', 'true'));
      await choose(card, labels.actions, labels.edit, doc); const input = await ui.findByRole('textbox', { name: labels.text }); await waitFor(() => expect(input).toHaveFocus());
      expect(input).toHaveValue('Comment one'); await user.tab(); expect(ui.getByRole('button', { name: labels.save })).toHaveFocus(); await user.keyboard('{Enter}');
      await waitFor(() => expect(ui.queryByRole('textbox')).toBeNull()); expect((records.get('one') as CommentAnnotation).contentsObj!.text).toBe('Comment one'); await waitFor(() => expect(select).toHaveFocus());
      await choose(card, labels.actions, labels.edit, doc); const edit = await ui.findByRole('textbox', { name: labels.text }); fireEvent.change(edit, { target: { value: 'Updated\ncomment' } }); edit.focus(); await user.keyboard('{Enter}');
      await waitFor(() => expect((records.get('one') as CommentAnnotation).contentsObj!.text).toBe('Updated\ncomment')); expect((records.get('one') as CommentAnnotation).contentsObj!.image).toBe('original-image');
      await choose(card, labels.actions, labels.reply, doc); const reply = await ui.findByRole('textbox', { name: labels.replyText }); fireEvent.change(reply, { target: { value: 'Review' } }); reply.focus(); await user.keyboard('{Shift>}{Enter}{/Shift}'); expect(onUpdate).toHaveBeenCalledTimes(2); await user.keyboard('{Enter}');
      await waitFor(() => expect((records.get('one') as CommentAnnotation).comments).toHaveLength(1)); expect(onUpdate).toHaveBeenCalledTimes(3); await waitFor(() => expect(select).toHaveFocus());
      const replyData = (records.get('one') as CommentAnnotation).comments![0]; expect(replyData.content).toBe('Review\n'); expect(replyData.title).toBe('Reviewer');
      const replyNode = panel.querySelector<HTMLElement>(`[data-comment-reply="${replyData.id}"]`)!;
      await choose(replyNode, labels.actions, labels.edit, doc); expect(await ui.findByRole('textbox', { name: labels.replyText })).toHaveValue('Review\n');
      await user.keyboard('{Escape}'); await waitFor(() => expect(ui.queryByRole('textbox')).toBeNull()); expect(onUpdate).toHaveBeenCalledTimes(3);
      await choose(card, `${labels.status}: ${labels.statuses.None}`, labels.statuses.Accepted, doc);
      await waitFor(() => expect((records.get('one') as CommentAnnotation).comments).toHaveLength(2)); expect((records.get('one') as CommentAnnotation).comments![1]).toMatchObject({ status: 'Accepted', content: labels.statusText(labels.statuses.Accepted) }); expect(onUpdate).toHaveBeenCalledTimes(4);
      expect(metadata().anchors.current.one).toBe(card);
    } finally { cleanup(); }
  });

  it('keeps author/type filters across reply changes, exposes all/clear controls and restores filter focus', async () => {
    const { doc, panel, labels, metadata, cleanup } = await setup();
    try {
      const user = userEvent.setup({ document: doc }); const filter = within(panel).getByRole('button', { name: labels.filter });
      filter.focus(); await user.keyboard('{Enter}'); const menu = await within(doc.body).findByRole('menu');
      expect(menu.ownerDocument).toBe(doc); await user.click(within(menu).getByRole('menuitemcheckbox', { name: 'Author (2)' }));
      await waitFor(() => expect(panel.querySelectorAll('[data-slot="card"]')).toHaveLength(1));
      await user.keyboard('{Escape}'); await waitFor(() => expect(filter).toHaveFocus());
      const card = doc.getElementById('annotation-two')!; await choose(card, `${labels.status}: ${labels.statuses.None}`, labels.statuses.Completed, doc);
      await waitFor(() => expect(metadata().selectedAuthors).toEqual(['Other'])); expect(panel.querySelectorAll('[data-slot="card"]')).toHaveLength(1);
      await user.click(filter); await user.click(await within(doc.body).findByRole('menuitem', { name: labels.clear })); await waitFor(() => expect(within(panel).getByRole('status')).toHaveTextContent(labels.empty));
      await user.click(within(doc.body).getByRole('menuitem', { name: labels.selectAll })); await waitFor(() => expect(panel.querySelectorAll('[data-slot="card"]')).toHaveLength(3));
      await user.click(within(doc.body).getByRole('menuitemcheckbox', { name: `${labels.subtypes.FreeText} (1)` })); await waitFor(() => expect(panel.querySelectorAll('[data-slot="card"]')).toHaveLength(2));
      await user.keyboard('{Home}'); expect(within(doc.body).getByRole('menuitemcheckbox', { name: 'Author (2)' })).toHaveFocus(); await user.keyboard('{End}'); expect(within(doc.body).getByRole('menuitem', { name: labels.clear })).toHaveFocus(); await user.keyboard('{Escape}'); expect(filter).toHaveFocus();
    } finally { cleanup(); }
  });

  it('retains the draft on save failure, persists reply edits/deletion and supports history on an unloaded page', async () => {
    const { doc, panel, labels, records, onUpdate, history, cleanup } = await setup();
    try {
      const user = userEvent.setup({ document: doc }); const hidden = doc.getElementById('annotation-hidden')!;
      await choose(hidden, labels.actions, labels.edit, doc); const input = await within(panel).findByRole('textbox', { name: labels.text }); expect(input).toHaveValue('');
      fireEvent.change(input, { target: { value: 'Hidden comment' } }); onUpdate.mockImplementationOnce(() => { throw new Error('Store unavailable'); });
      await user.click(within(panel).getByRole('button', { name: labels.save })); await within(panel).findByRole('alert'); expect(input).toHaveValue('Hidden comment'); expect((records.get('hidden') as CommentAnnotation).contentsObj).toBeNull();
      await user.click(within(panel).getByRole('button', { name: labels.save })); await waitFor(() => expect((records.get('hidden') as CommentAnnotation).contentsObj?.text).toBe('Hidden comment'));
      await choose(hidden, labels.actions, labels.reply, doc); fireEvent.change(await within(panel).findByRole('textbox', { name: labels.replyText }), { target: { value: 'Reply' } }); await user.click(within(panel).getByRole('button', { name: labels.save }));
      await waitFor(() => expect((records.get('hidden') as CommentAnnotation).comments).toHaveLength(1));
      const reply = panel.querySelector<HTMLElement>('[data-comment-reply]')!;
      await choose(reply, labels.actions, labels.edit, doc); fireEvent.change(await within(panel).findByRole('textbox', { name: labels.replyText }), { target: { value: 'Edited reply' } }); await user.click(within(panel).getByRole('button', { name: labels.save })); await waitFor(() => expect((records.get('hidden') as CommentAnnotation).comments![0].content).toBe('Edited reply'));
      await choose(reply, labels.actions, labels.delete, doc); await waitFor(() => expect((records.get('hidden') as CommentAnnotation).comments).toHaveLength(0));
      await choose(hidden, labels.actions, labels.delete, doc); await waitFor(() => expect(records.has('hidden')).toBe(false)); expect(doc.getElementById('annotation-hidden')).toBeNull();
      act(() => history.undo()); await waitFor(() => expect(doc.getElementById('annotation-hidden')).not.toBeNull()); expect((records.get('hidden') as CommentAnnotation).contentsObj!.text).toBe('Hidden comment');
    } finally { cleanup(); }
  });

  it('uses the visible card for native selection/scroll and restores the standalone UI on unmount', async () => {
    const { iframe, doc, panel, labels, metadata, ref, records, unmountControls, cleanup } = await setup();
    try {
      const card = doc.getElementById('annotation-one')!; const scroll = vi.fn(); card.scrollIntoView = scroll;
      act(() => ref.current!.selectedAnnotation(records.get('one') as CommentAnnotation, true)); await within(panel).findByRole('textbox', { name: labels.replyText }); expect(scroll).toHaveBeenCalledWith({ behavior: 'smooth', block: 'center' }); expect(metadata().anchors.current.one).toBe(card);
      expect((iframe.contentWindow as Window & { awesomepdfCommentControls: boolean }).awesomepdfCommentControls).toBe(true);
      act(() => unmountControls());
      await waitFor(() => expect(doc.querySelector('.CustomComment .filters')).not.toBeNull());
      expect((iframe.contentWindow as Window & { awesomepdfCommentControls?: boolean }).awesomepdfCommentControls).toBeUndefined();
      expect(doc.querySelector('[data-awesomepdf-mount]')).toBeNull(); expect(doc.querySelector('[data-slot="card"]')).toBeNull();
      expect(doc.querySelectorAll('#annotation-one')).toHaveLength(1); expect(metadata().anchors.current.one).toBe(doc.getElementById('annotation-one'));
    } finally { cleanup(); }
  });

  it('has every comment/filter/type/status label in all supported catalogs', () => {
    for (const locale of ['en', 'ar', 'de', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'pl', 'pt', 'ro', 'vi', 'zh', 'zh-TW']) {
      const labels = labelsFor(locale); for (const value of [...Object.values(labels.statuses), ...Object.values(labels.subtypes)]) expect(value).toBeTruthy(); expect(labels.page(3)).not.toContain('{value}'); expect(labels.statusText(labels.statuses.Accepted)).not.toContain('{value}');
    }
  });
});
