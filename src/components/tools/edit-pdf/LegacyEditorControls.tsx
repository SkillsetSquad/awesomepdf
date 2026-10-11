'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowUpRight, Circle, Cloud, Download, Highlighter, Info, MessageSquare, MousePointer2, Palette, PenLine, Redo2, Square, Stamp, StickyNote, TextCursorInput, Trash2, Type, Undo2, type LucideIcon } from 'lucide-react';
import { AnnotationExportMenu, type AnnotationExportAction, type AnnotationExportFormat } from './AnnotationExportMenu';
import { AnnotationColorControl, type AnnotationColorOptions } from './AnnotationColorControl';
import { AnnotationStyleControls, type AnnotationStyleLabels, type AnnotationStyleOptions } from './AnnotationStyleControls';
import { AnnotationSignatureControl, type AnnotationSignatureOptions, type AnnotationSignatureLabels } from './AnnotationSignatureControl';
import { AnnotationStampControl, type AnnotationStampOptions, type AnnotationStampLabels } from './AnnotationStampControl';
import { AnnotationCommentControls, type AnnotationCommentOptions, type AnnotationCommentLabels } from './AnnotationCommentControls';

const annotationIcons: Record<string, LucideIcon> = {
  select: MousePointer2, rectangle: Square, circle: Circle, note: StickyNote,
  arrow: ArrowUpRight, cloud: Cloud, freehand: PenLine, freeHighlight: Highlighter,
  freeText: Type, signature: PenLine, stamp: Stamp, color: Palette,
  export: Download, comments: MessageSquare,
};

interface ViewerControl {
  item: HTMLElement;
  mount: HTMLElement;
  kind: 'edit' | 'undo' | 'redo' | 'hint' | 'annotation' | 'annotation-action' | 'annotation-style' | 'annotation-comments';
  key: string;
  Icon: LucideIcon;
  toggle: boolean;
  color?: string;
  colorOptions?: AnnotationColorOptions;
  styleOptions?: AnnotationStyleOptions;
  signatureOptions?: AnnotationSignatureOptions;
  stampOptions?: AnnotationStampOptions;
  commentOptions?: AnnotationCommentOptions;
  onExport?: AnnotationExportAction;
  exportFormats?: AnnotationExportFormat[];
  label: string;
  disabled: boolean;
  pressed: boolean;
  action: HTMLElement;
}

export function LegacyEditorControls({ iframe, locale, undo, redo, labels, colorLabels, styleLabels, signatureLabels, stampLabels, commentLabels, exportError = 'Export failed. Please try again.' }: {
  iframe: HTMLIFrameElement | null;
  locale: string;
  undo: string;
  redo: string;
  labels?: Record<string, string>;
  colorLabels?: { format: string; close: string };
  styleLabels?: AnnotationStyleLabels;
  signatureLabels?: AnnotationSignatureLabels;
  stampLabels?: AnnotationStampLabels;
  commentLabels?: AnnotationCommentLabels;
  exportError?: string;
}) {
  const [controls, setControls] = useState<ViewerControl[]>([]);
  useEffect(() => {
    const doc = iframe?.contentDocument;
    if (!doc?.body) return;
    const viewer = doc.defaultView as (Window & { awesomepdfSignatureControls?: boolean; awesomepdfStampControls?: boolean; awesomepdfCommentControls?: boolean }) | null;
    const previousSignatureControls = viewer?.awesomepdfSignatureControls;
    const previousStampControls = viewer?.awesomepdfStampControls;
    const previousCommentControls = viewer?.awesomepdfCommentControls;
    if (viewer) viewer.awesomepdfSignatureControls = !!signatureLabels;
    if (viewer) viewer.awesomepdfStampControls = !!stampLabels;
    const refreshComments = () => {
      for (const item of doc.querySelectorAll<HTMLElement>('[data-comment-control]')) (item as HTMLElement & { awesomepdfComment?: AnnotationCommentOptions }).awesomepdfComment?.refreshControls();
    };
    if (viewer) viewer.awesomepdfCommentControls = !!commentLabels;
    if (!!previousCommentControls !== !!commentLabels) refreshComments();
    const sheets = Array.from(document.querySelectorAll('link[rel="stylesheet"], style')).map(node => {
      const clone = node.cloneNode(true) as HTMLElement;
      clone.removeAttribute('id');
      doc.head.appendChild(clone);
      return clone;
    });
    const style = doc.createElement('style');
    style.textContent = `
      .CustomToolbar { background: var(--card); color: var(--foreground); }
      .CustomToolbar .buttons li { color: var(--foreground); }
      .CustomToolbar .buttons [data-awesomepdf-control] { color: var(--foreground); }
      [data-awesomepdf-action] > :not([data-awesomepdf-mount]) { display: none !important; }
      .CustomToolbar .buttons li[data-awesomepdf-control] { border: 0; background: transparent; margin: 0; opacity: 1; }
      .CustomToolbar { justify-content: flex-start; gap: .5rem; padding-inline: .5rem; border-bottom: 1px solid var(--border); }
      .CustomToolbar::after { display: none; }
      .CustomToolbar .buttons { flex-shrink: 0; gap: .25rem; }
      .CustomToolbar .right { position: static; margin-inline-start: auto; }
      .CustomAnnotationMenu { background: var(--popover); color: var(--popover-foreground); border-color: var(--border); }
      .CustomAnnotationMenu .buttons { display: flex; gap: .25rem; }
      .CustomAnnotationMenu .buttons li[data-awesomepdf-control] { background: transparent; border: 0; padding: 0; margin: 0; width: auto; height: auto; }
      .CustomComment[data-awesomepdf-control] > [data-awesomepdf-mount] { display: block; }
      [data-awesomepdf-mount] { display: inline-flex; }
    `;
    doc.head.appendChild(style);
    const syncTheme = () => {
      const dark = document.documentElement.classList.contains('dark');
      doc.documentElement.classList.toggle('dark', dark);
      doc.documentElement.classList.toggle('is-dark', dark);
      doc.documentElement.classList.toggle('is-light', !dark);
      doc.documentElement.lang = locale;
      doc.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    };
    syncTheme();
    const theme = new MutationObserver(syncTheme);
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    const registry = new Map<HTMLElement, { mount: HTMLElement; parent: HTMLElement }>();
    const mountControl = (item: HTMLElement, parent = item) => {
      let entry = registry.get(item);
      if (entry?.parent !== parent) {
        if (entry) { entry.mount.remove(); delete entry.parent.dataset.awesomepdfAction; }
        const mount = doc.createElement('span');
        mount.dataset.awesomepdfMount = 'true';
        parent.dataset.awesomepdfAction = 'true';
        item.dataset.awesomepdfControl = 'true';
        entry = { mount, parent };
        registry.set(item, entry);
      }
      if (entry.mount.parentElement !== parent) parent.appendChild(entry.mount);
      return entry.mount;
    };
    const sync = () => {
      const next: ViewerControl[] = [];
      for (const [item, { mount, parent }] of registry) {
        if (!doc.body.contains(item)) { mount.remove(); delete parent.dataset.awesomepdfAction; delete item.dataset.awesomepdfControl; registry.delete(item); }
      }
      if (commentLabels) for (const item of doc.querySelectorAll<HTMLElement>('.CustomComment[data-comment-control]')) {
        const commentOptions = (item as HTMLElement & { awesomepdfComment?: AnnotationCommentOptions }).awesomepdfComment;
        if (commentOptions) next.push({ item, mount: mountControl(item), action: item, key: 'comments-panel', kind: 'annotation-comments', Icon: MessageSquare, toggle: false, label: commentLabels.title, disabled: false, pressed: false, commentOptions });
      }
      for (const [selector, kind] of [
        ['#pdfcraft-edit-existing-text', 'edit'], ['.pdfcraft-undo-btn', 'undo'],
        ['.pdfcraft-redo-btn', 'redo'], ['#pdfcraft-text-edit-hint', 'hint'],
      ] as const) {
        const item = doc.querySelector<HTMLElement>(selector);
        if (!item) continue;
        const action = kind === 'undo' || kind === 'redo' ? item.querySelector<HTMLButtonElement>('button')! : item;
        if (!action) continue;
        const mount = mountControl(item);
        next.push({ item, mount, kind, action, key: kind, toggle: kind === 'edit', Icon: kind === 'edit' ? TextCursorInput : kind === 'undo' ? Undo2 : kind === 'redo' ? Redo2 : Info, label: kind === 'undo' ? undo : kind === 'redo' ? redo : kind === 'hint' ? item.dataset.message ?? '' : item.title,
          disabled: action.hasAttribute('disabled'), pressed: item.classList.contains('pdfcraft-active') });
      }
      for (const item of doc.querySelectorAll<HTMLElement>('.CustomToolbar .buttons > li[data-annotation-tool]')) {
        const tool = item.dataset.annotationTool!;
        const Icon = annotationIcons[tool];
        const icon = item.querySelector<HTMLElement>('.icon');
        const name = item.querySelector<HTMLElement>('.name');
        const action = icon?.parentElement;
        if (!Icon || !action || !name || name.parentElement !== action) continue;
        // Mount inside the actual popover anchor so its geometry and handlers remain intact.
        const color = icon.querySelector<HTMLElement>('[style]')?.style.color || undefined;
        const label = labels?.[tool] ?? (name.textContent?.trim() || item.title);
        const mount = mountControl(item, action);
        const exportAction = (item as HTMLElement & { awesomepdfExport?: AnnotationExportAction }).awesomepdfExport;
        const colorOptions = (item as HTMLElement & { awesomepdfColor?: AnnotationColorOptions }).awesomepdfColor;
        const signatureOptions = (item.querySelector('[data-signature-control]') as (HTMLElement & { awesomepdfSignature?: AnnotationSignatureOptions }) | null)?.awesomepdfSignature;
        const stampOptions = (item.querySelector('[data-stamp-control]') as (HTMLElement & { awesomepdfStamp?: AnnotationStampOptions }) | null)?.awesomepdfStamp;
        const exportFormats = (['pdf', 'excel'] as const).filter(format => item.dataset[format === 'pdf' ? 'exportPdf' : 'exportExcel'] === 'true');
        next.push({ item, mount, action, kind: 'annotation', key: tool, Icon, color: tool === 'color' ? color : undefined, colorOptions, signatureOptions, stampOptions,
          onExport: typeof exportAction === 'function' ? exportAction : undefined, exportFormats,
          label, toggle: !['color', 'export'].includes(tool),
          disabled: item.classList.contains('disabled') || action.hasAttribute('disabled'), pressed: item.classList.contains('selected') });
      }
      for (const item of doc.querySelectorAll<HTMLElement>('.CustomAnnotationMenu .buttons > li[data-annotation-action]')) {
        const key = item.dataset.annotationAction!;
        const action = { comments: { Icon: MessageSquare, label: labels?.comments ?? 'Comments' }, style: { Icon: Palette, label: labels?.style ?? labels?.color ?? 'Color' }, delete: { Icon: Trash2, label: labels?.delete ?? 'Delete' } }[key];
        if (!action) continue;
        next.push({ item, mount: mountControl(item), action: item, key: `context-${key}`, kind: 'annotation-action', ...action, toggle: false, disabled: false, pressed: false });
      }
      for (const item of doc.querySelectorAll<HTMLElement>('.CustomAnnotationMenu .styleContainer[data-annotation-style]')) {
        const styleOptions = (item as HTMLElement & { awesomepdfStyle?: AnnotationStyleOptions }).awesomepdfStyle;
        if (!styleOptions) continue;
        next.push({ item, mount: mountControl(item), action: item, key: 'context-style-panel', kind: 'annotation-style', Icon: Palette, label: '', styleOptions, toggle: false, disabled: false, pressed: false });
      }
      setControls(previous => previous.length === next.length && next.every((control, index) => {
        const old = previous[index];
        return old.item === control.item && old.mount === control.mount && old.action === control.action && old.label === control.label && old.disabled === control.disabled && old.pressed === control.pressed && old.color === control.color && old.colorOptions === control.colorOptions && old.styleOptions === control.styleOptions && old.signatureOptions === control.signatureOptions && old.stampOptions === control.stampOptions && old.commentOptions === control.commentOptions && old.onExport === control.onExport && old.exportFormats?.join() === control.exportFormats?.join();
      }) ? previous : next);
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(doc.body, { childList: true, subtree: true, attributes: true, characterData: true, attributeFilter: ['class', 'disabled', 'data-message', 'title', 'style', 'data-export-pdf', 'data-export-excel', 'data-annotation-style', 'data-color', 'data-stroke-width', 'data-opacity', 'data-signature-revision', 'data-stamp-revision', 'data-comment-revision'] });
    return () => {
      observer.disconnect();
      if (viewer) {
        if (previousSignatureControls === undefined) delete viewer.awesomepdfSignatureControls;
        else viewer.awesomepdfSignatureControls = previousSignatureControls;
        if (previousStampControls === undefined) delete viewer.awesomepdfStampControls;
        else viewer.awesomepdfStampControls = previousStampControls;
        if (previousCommentControls === undefined) delete viewer.awesomepdfCommentControls;
        else viewer.awesomepdfCommentControls = previousCommentControls;
        if (iframe?.isConnected && !!previousCommentControls !== !!commentLabels) refreshComments();
      }
      theme.disconnect();
      for (const [item, { mount, parent }] of registry) { mount.remove(); delete parent.dataset.awesomepdfAction; delete item.dataset.awesomepdfControl; }
      style.remove();
      sheets.forEach(sheet => sheet.remove());
    };
  }, [iframe, locale, undo, redo, labels, signatureLabels, stampLabels, commentLabels]);

  return controls.map(control => createPortal(control.kind === 'hint'
    ? <Alert className="pointer-events-none fixed top-20 left-1/2 z-[100000] w-[calc(100%-2rem)] max-w-md -translate-x-1/2" role="status" dir={locale === 'ar' ? 'rtl' : 'ltr'}><Info aria-hidden="true" /><AlertDescription>{control.label}</AlertDescription></Alert>
    : control.kind === 'annotation-comments' && control.commentOptions && commentLabels
    ? <AnnotationCommentControls options={control.commentOptions} labels={commentLabels} container={control.item} direction={locale === 'ar' ? 'rtl' : 'ltr'} />
    : control.kind === 'annotation-style' && control.styleOptions
    ? <AnnotationStyleControls options={control.styleOptions} direction={locale === 'ar' ? 'rtl' : 'ltr'} labels={styleLabels ?? { title: 'Annotation style', color: labels?.color ?? 'Color', strokeWidth: 'Stroke width', opacity: 'Opacity', back: 'Back', format: colorLabels?.format ?? 'Color format', close: colorLabels?.close ?? 'Close' }} />
    : control.key === 'color' && control.colorOptions
    ? <AnnotationColorControl options={control.colorOptions} label={control.label} disabled={control.disabled} direction={locale === 'ar' ? 'rtl' : 'ltr'} formatLabel={colorLabels?.format ?? 'Color format'} closeLabel={colorLabels?.close ?? 'Close'} />
    : control.key === 'signature' && control.signatureOptions && signatureLabels
    ? <AnnotationSignatureControl options={control.signatureOptions} label={control.label} labels={signatureLabels} direction={locale === 'ar' ? 'rtl' : 'ltr'} pressed={control.pressed} />
    : control.key === 'stamp' && control.stampOptions && stampLabels
    ? <AnnotationStampControl options={control.stampOptions} label={control.label} labels={stampLabels} direction={locale === 'ar' ? 'rtl' : 'ltr'} pressed={control.pressed} />
    : control.key === 'export' && control.onExport
    ? <AnnotationExportMenu container={control.item.ownerDocument.body} label={control.label} formats={control.exportFormats ?? []} onExport={control.onExport} direction={locale === 'ar' ? 'rtl' : 'ltr'} errorMessage={exportError} />
    : <Button dir={locale === 'ar' ? 'rtl' : 'ltr'} type="button" size={control.kind === 'annotation-action' ? 'icon-sm' : 'sm'} variant={control.pressed ? 'secondary' : 'ghost'} disabled={control.disabled}
      aria-label={control.kind === 'annotation-action' ? control.label : undefined} title={control.kind === 'annotation-action' ? control.label : undefined}
      onMouseDown={event => { if (control.kind === 'annotation-action') event.stopPropagation(); }}
      onKeyDown={event => { if (control.kind === 'annotation-action') event.stopPropagation(); }}
      aria-pressed={control.toggle ? control.pressed : undefined} onClick={event => {
        event.stopPropagation();
        if (control.kind !== 'annotation-action') { control.action.click(); return; }
        const doc = control.item.ownerDocument;
        const viewer = doc.defaultView;
        // The shipped menu listens on mouse-down. Suppress the button's mouse-down and send exactly one engine action on click, including keyboard clicks.
        control.action.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true, view: viewer }));
        viewer?.setTimeout(() => {
          if (!iframe?.isConnected || document.activeElement !== iframe || doc.activeElement !== doc.body) return;
          const target = control.key === 'context-style' ? '.CustomAnnotationMenu .styleContainer [data-awesomepdf-mount] [role="slider"], .CustomAnnotationMenu .styleContainer [data-awesomepdf-mount] button'
            : control.key === 'context-comments' ? '.CustomComment input, .CustomComment textarea, .CustomComment [tabindex="0"]' : '#viewerContainer';
          (doc.querySelector<HTMLElement>(target) ?? doc.querySelector<HTMLElement>('#viewerContainer'))?.focus();
        }, 0);
      }}>
      <control.Icon aria-hidden="true" />{control.color && <span className="size-3 rounded-sm border" aria-hidden="true" style={{ backgroundColor: control.color }} />}{control.kind !== 'annotation-action' && control.label}
    </Button>, control.mount, control.key));
}
