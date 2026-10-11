'use client';

import { useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type RefObject } from 'react';
import { ArrowUpRight, Circle, CircleCheck, CircleMinus, CircleStop, Cloud, Filter, Highlighter, Link, MessageSquare, Minus, MoreHorizontal, Paperclip, Pentagon, PenLine, RectangleEllipsis, Square, SquareMinus, Stamp, StickyNote, Strikethrough, ThumbsDown, ThumbsUp, Type, Underline, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { StoredAnnotation } from '@/lib/pdf/annotation-history';

export interface AnnotationReply { id: string; title: string; date: string; content: string; status?: string | null }
export interface CommentAnnotation extends StoredAnnotation {
  title: string; date: string; subtype: string; konvaClientRect: { y: number };
  contentsObj?: { text?: string; image?: string } | null; comments?: AnnotationReply[];
}
export interface AnnotationCommentOptions {
  refreshControls(): void;
  annotations: CommentAnnotation[]; groups: Record<string, CommentAnnotation[]>;
  selectedId?: string | null; editingId?: string | null; replyingId?: string | null; editingReplyId?: string | null;
  authors: [string, number][]; types: [string, number][]; selectedAuthors: string[]; selectedTypes: string[];
  anchors: { current: Record<string, HTMLDivElement | null> }; statuses: string[];
  onSelect(annotation: CommentAnnotation): void | Promise<void>; onEdit(annotation: CommentAnnotation): void; onReply(annotation: CommentAnnotation): void;
  onEditReply(annotation: CommentAnnotation, reply: AnnotationReply): void; onCancel(): void;
  onSaveText(annotation: CommentAnnotation, text: string): void; onAddReply(annotation: CommentAnnotation, text: string, status?: string): void;
  onSaveReply(annotation: CommentAnnotation, reply: AnnotationReply, text: string): void; onDeleteReply(annotation: CommentAnnotation, reply: AnnotationReply): void;
  onDelete(annotation: CommentAnnotation): void; onAuthorsChange(authors: string[]): void; onTypesChange(types: string[]): void;
  onSelectAll(): void; onClearFilters(): void; formatDate(date: string): string;
}
export interface AnnotationCommentLabels {
  title: string; filter: string; author: string; type: string; empty: string;
  reply: string; edit: string; delete: string; save: string; cancel: string; selectAll: string; clear: string;
  actions: string; status: string; text: string; replyText: string; error: string;
  page(value: number): string; count(value: number): string; statusText(value: string): string;
  subtypes: Record<string, string>; statuses: Record<string, string>;
}
const icons: Record<string, LucideIcon> = { Circle, FreeText: Type, Ink: PenLine, Highlight: Highlighter, Underline, Squiggly: Highlighter, StrikeOut: Strikethrough, Stamp, Line: Minus, Square, Polygon: Pentagon, PolyLine: Cloud, Caret: PenLine, Link, Text: StickyNote, FileAttachment: Paperclip, Popup: MessageSquare, Widget: RectangleEllipsis, Note: StickyNote, Arrow: ArrowUpRight };
const statusIcons: Record<string, LucideIcon> = { Accepted: ThumbsUp, Rejected: ThumbsDown, Cancelled: CircleMinus, Completed: CircleCheck, Closed: CircleStop, None: SquareMinus };

function moveMenuFocus(event: KeyboardEvent<HTMLDivElement>, container: HTMLElement) {
  if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
  const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('[role="menuitem"]:not([data-disabled]),[role="menuitemcheckbox"]:not([data-disabled])'));
  if (!items.length) return;
  const active = items.indexOf(container.ownerDocument.activeElement as HTMLElement);
  const index = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : event.key === 'ArrowDown' ? Math.min(active + 1, items.length - 1) : Math.max(active - 1, 0);
  event.preventDefault(); event.stopPropagation(); items[index].focus();
}

function CommentMenu({ container, direction, label, Icon, fallback, items }: {
  container: HTMLElement; direction: 'ltr' | 'rtl'; label: string; Icon: LucideIcon; fallback: RefObject<HTMLButtonElement | null>;
  items: { key: string; label: string; Icon?: LucideIcon; destructive?: boolean; editor?: boolean; onChoose(): void }[];
}) {
  const trigger = useRef<HTMLButtonElement>(null); const editorFocus = useRef(false);
  return <DropdownMenu dir={direction} modal={false} onOpenChange={open => { if (open) editorFocus.current = false; }}>
    <DropdownMenuTrigger asChild><Button ref={trigger} size="icon-sm" variant="ghost" aria-label={label} onClick={event => event.stopPropagation()} onKeyDown={event => event.stopPropagation()}><Icon aria-hidden="true" /></Button></DropdownMenuTrigger>
    <DropdownMenuContent container={container.ownerDocument.body} align="end" onClick={event => event.stopPropagation()} onKeyDownCapture={event => moveMenuFocus(event, container)}
      onFocus={event => { if (event.target === event.currentTarget) event.currentTarget.querySelector<HTMLElement>('[role="menuitem"]')?.focus(); }}
      onCloseAutoFocus={event => {
        event.preventDefault();
        // A new editor focuses itself when the engine's state reaches the portal.
        // Avoid a delayed callback that could steal focus after a quick save.
        if (editorFocus.current) container.querySelector<HTMLTextAreaElement>('[data-comment-editor] textarea')?.focus();
        else if (trigger.current?.isConnected) trigger.current.focus();
        else fallback.current?.focus();
      }}>
      {items.map(item => <DropdownMenuItem key={item.key} variant={item.destructive ? 'destructive' : 'default'} onSelect={() => { editorFocus.current = !!item.editor; item.onChoose(); }}>{item.Icon && <item.Icon aria-hidden="true" />}{item.label}</DropdownMenuItem>)}
    </DropdownMenuContent>
  </DropdownMenu>;
}

function CommentEditor({ initial, label, save, cancel, onSave, onCancel }: {
  initial: string; label: string; save: string; cancel: string; onSave(text: string): void; onCancel(): void;
}) {
  const id = useId(); const input = useRef<HTMLTextAreaElement>(null); const [text, setText] = useState(initial);
  useLayoutEffect(() => { input.current?.focus(); }, []);
  return <form data-comment-editor="true" className="space-y-2" onClick={event => event.stopPropagation()} onSubmit={event => { event.preventDefault(); onSave(text); }}>
    <Label htmlFor={id}>{label}</Label><Textarea ref={input} id={id} rows={4} value={text} onChange={event => setText(event.target.value)} onKeyDown={event => {
      if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) { event.preventDefault(); event.currentTarget.form?.requestSubmit(); }
      if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); onCancel(); }
    }} />
    <div className="flex flex-wrap gap-2"><Button size="sm" type="submit">{save}</Button><Button size="sm" variant="outline" type="button" onClick={onCancel}>{cancel}</Button></div>
  </form>;
}

export function AnnotationCommentControls({ options, labels, container, direction }: {
  options: AnnotationCommentOptions; labels: AnnotationCommentLabels; container: HTMLElement; direction: 'ltr' | 'rtl';
}) {
  const [error, setError] = useState(false); const filter = useRef<HTMLButtonElement>(null); const current = useRef(options); current.current = options;
  const restoreSelectionFocus = useRef(false);
  useLayoutEffect(() => {
    if (!restoreSelectionFocus.current || options.editingId || options.replyingId || options.editingReplyId) return;
    restoreSelectionFocus.current = false;
    const active = container.ownerDocument.activeElement;
    if (!active || active === container.ownerDocument.body || !active.isConnected) container.querySelector<HTMLButtonElement>('[data-comment-selected="true"]')?.focus();
  }, [container, options.editingId, options.replyingId, options.editingReplyId]);
  const run = async (action: () => void | Promise<void>) => { setError(false); try { await action(); } catch { setError(true); } };
  const save = (action: () => void) => { void run(() => { restoreSelectionFocus.current = true; try { action(); } catch (error) { restoreSelectionFocus.current = false; throw error; } }); };
  const returnToSelection = () => {
    restoreSelectionFocus.current = true; options.onCancel(); setError(false);
  };
  return <section className="w-full space-y-3 p-3 text-foreground" aria-label={labels.title} dir={direction}>
    <div className="flex flex-wrap items-center justify-between gap-2"><h2 className="text-sm font-semibold">{labels.title}</h2>
      <DropdownMenu dir={direction} modal={false}>
        <DropdownMenuTrigger asChild><Button ref={filter} size="sm" variant="outline" className="h-auto max-w-full whitespace-normal"><Filter aria-hidden="true" />{labels.filter}</Button></DropdownMenuTrigger>
        <DropdownMenuContent container={container.ownerDocument.body} align="end" className="max-w-[calc(100vw-2rem)]" onKeyDownCapture={event => moveMenuFocus(event, container)}
          onFocus={event => { if (event.target === event.currentTarget) event.currentTarget.querySelector<HTMLElement>('[role="menuitemcheckbox"],[role="menuitem"]')?.focus(); }} onCloseAutoFocus={event => { event.preventDefault(); filter.current?.focus(); }}>
          <DropdownMenuLabel>{labels.author}</DropdownMenuLabel>
          {options.authors.map(([author, count]) => <DropdownMenuCheckboxItem key={author} checked={options.selectedAuthors.includes(author)} onSelect={event => event.preventDefault()} onCheckedChange={checked => {
            const values = current.current.selectedAuthors.filter(value => value !== author); current.current.onAuthorsChange(checked ? [...values, author] : values);
          }}>{author} ({count})</DropdownMenuCheckboxItem>)}
          <DropdownMenuSeparator /><DropdownMenuLabel>{labels.type}</DropdownMenuLabel>
          {options.types.map(([type, count]) => { const Icon = icons[type] ?? MessageSquare; return <DropdownMenuCheckboxItem key={type} checked={options.selectedTypes.includes(type)} onSelect={event => event.preventDefault()} onCheckedChange={checked => {
            const values = current.current.selectedTypes.filter(value => value !== type); current.current.onTypesChange(checked ? [...values, type] : values);
          }}><Icon aria-hidden="true" />{labels.subtypes[type] ?? type} ({count})</DropdownMenuCheckboxItem>; })}
          <DropdownMenuSeparator /><DropdownMenuItem onSelect={event => { event.preventDefault(); current.current.onSelectAll(); }}>{labels.selectAll}</DropdownMenuItem><DropdownMenuItem onSelect={event => { event.preventDefault(); current.current.onClearFilters(); }}>{labels.clear}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    {error && <Alert variant="destructive"><AlertDescription>{labels.error}</AlertDescription></Alert>}
    {Object.keys(options.groups).length === 0 && <p className="text-sm text-muted-foreground" role="status">{labels.empty}</p>}
    {Object.entries(options.groups).map(([page, annotations]) => <div key={page} className="space-y-2">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs"><h3 className="font-medium">{labels.page(Number(page))}</h3><span className="text-muted-foreground">{labels.count(annotations.length)}</span></div>
      {[...annotations].sort((left, right) => left.konvaClientRect.y - right.konvaClientRect.y).map(annotation => {
        const Icon = icons[annotation.subtype] ?? MessageSquare; const selected = options.selectedId === annotation.id;
        const status = [...(annotation.comments ?? [])].reverse().find(reply => reply.status != null)?.status ?? 'None'; const StatusIcon = statusIcons[status] ?? SquareMinus;
        return <Card key={annotation.id} id={`annotation-${annotation.id}`} ref={node => { options.anchors.current[annotation.id] = node; }} className={`gap-2 py-3 ${selected ? 'border-ring' : ''}`} onClick={event => {
          if (!(event.target as HTMLElement).closest('button,textarea,input')) void run(() => options.onSelect(annotation));
        }}>
          <CardContent className="space-y-3 px-3">
            <div className="flex flex-wrap items-start gap-1">
              <Button variant="ghost" size="sm" className="h-auto min-w-0 basis-full justify-start whitespace-normal text-start" aria-pressed={selected} data-comment-selected={selected} onClick={event => { event.stopPropagation(); void run(() => options.onSelect(annotation)); }}><Icon className="shrink-0" aria-hidden="true" /><span className="min-w-0 break-words">{annotation.title}<span className="block text-xs font-normal text-muted-foreground">{options.formatDate(annotation.date)}</span></span></Button>
              <CommentMenu container={container} direction={direction} label={`${labels.status}: ${labels.statuses[status] ?? status}`} Icon={StatusIcon} fallback={filter} items={options.statuses.map(value => ({ key: value, label: labels.statuses[value] ?? value, Icon: statusIcons[value], onChoose: () => { void run(() => options.onAddReply(annotation, labels.statusText(labels.statuses[value] ?? value), value)); } }))} />
              <CommentMenu container={container} direction={direction} label={labels.actions} Icon={MoreHorizontal} fallback={filter} items={[
                { key: 'reply', label: labels.reply, editor: true, onChoose: () => options.onReply(annotation) },
                { key: 'edit', label: labels.edit, editor: true, onChoose: () => options.onEdit(annotation) },
                { key: 'delete', label: labels.delete, destructive: true, onChoose: () => { void run(() => options.onDelete(annotation)); } },
              ]} />
            </div>
            {options.editingId === annotation.id ? <CommentEditor key={`text-${annotation.id}`} initial={annotation.contentsObj?.text ?? ''} label={labels.text} save={labels.save} cancel={labels.cancel} onSave={text => save(() => options.onSaveText(annotation, text))} onCancel={returnToSelection} /> : <p className="whitespace-pre-wrap break-words text-sm">{annotation.contentsObj?.text}</p>}
            {(annotation.comments ?? []).map(reply => <div key={reply.id} data-comment-reply={reply.id} className="space-y-2 rounded-md border bg-muted/50 p-2">
              <div className="flex items-start justify-between gap-2"><span className="min-w-0 break-words text-sm">{reply.title}<span className="block text-xs text-muted-foreground">{options.formatDate(reply.date)}</span></span><CommentMenu container={container} direction={direction} label={labels.actions} Icon={MoreHorizontal} fallback={filter} items={[
                { key: 'edit', label: labels.edit, editor: true, onChoose: () => options.onEditReply(annotation, reply) },
                { key: 'delete', label: labels.delete, destructive: true, onChoose: () => { void run(() => options.onDeleteReply(annotation, reply)); } },
              ]} /></div>
              {options.editingReplyId === reply.id ? <CommentEditor key={`reply-${reply.id}`} initial={reply.content} label={labels.replyText} save={labels.save} cancel={labels.cancel} onSave={text => save(() => options.onSaveReply(annotation, reply, text))} onCancel={returnToSelection} /> : <p className="whitespace-pre-wrap break-words text-sm">{reply.content}</p>}
            </div>)}
            {options.replyingId === annotation.id ? <CommentEditor key={`add-${annotation.id}`} initial="" label={labels.replyText} save={labels.save} cancel={labels.cancel} onSave={text => save(() => options.onAddReply(annotation, text))} onCancel={returnToSelection} /> : selected && !options.editingId && !options.editingReplyId && !options.replyingId && <Button variant="outline" size="sm" className="w-full" onClick={event => { event.stopPropagation(); options.onReply(annotation); }}><MessageSquare aria-hidden="true" />{labels.reply}</Button>}
          </CardContent>
        </Card>;
      })}
    </div>)}
  </section>;
}
