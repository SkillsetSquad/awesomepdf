'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowUpRight, Circle, Cloud, Download, Highlighter, Info, MessageSquare, MousePointer2, Palette, PenLine, Redo2, Square, Stamp, StickyNote, TextCursorInput, Type, Undo2, type LucideIcon } from 'lucide-react';

const annotationIcons: Record<string, LucideIcon> = {
  select: MousePointer2, rectangle: Square, circle: Circle, note: StickyNote,
  arrow: ArrowUpRight, cloud: Cloud, freehand: PenLine, freeHighlight: Highlighter,
  freeText: Type, signature: PenLine, stamp: Stamp, color: Palette,
  export: Download, comments: MessageSquare,
};

interface ViewerControl {
  item: HTMLElement;
  mount: HTMLElement;
  kind: 'edit' | 'undo' | 'redo' | 'hint' | 'annotation';
  key: string;
  Icon: LucideIcon;
  toggle: boolean;
  color?: string;
  label: string;
  disabled: boolean;
  pressed: boolean;
  action: HTMLElement;
}

export function LegacyEditorControls({ iframe, locale, undo, redo }: {
  iframe: HTMLIFrameElement | null;
  locale: string;
  undo: string;
  redo: string;
}) {
  const [controls, setControls] = useState<ViewerControl[]>([]);
  useEffect(() => {
    const doc = iframe?.contentDocument;
    if (!doc?.body) return;
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
        const label = name.textContent?.trim() || item.title;
        const mount = mountControl(item, action);
        next.push({ item, mount, action, kind: 'annotation', key: tool, Icon, color: tool === 'color' ? color : undefined,
          label, toggle: !['color', 'export'].includes(tool),
          disabled: item.classList.contains('disabled') || action.hasAttribute('disabled'), pressed: item.classList.contains('selected') });
      }
      setControls(previous => previous.length === next.length && next.every((control, index) => {
        const old = previous[index];
        return old.item === control.item && old.mount === control.mount && old.action === control.action && old.label === control.label && old.disabled === control.disabled && old.pressed === control.pressed && old.color === control.color;
      }) ? previous : next);
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(doc.body, { childList: true, subtree: true, attributes: true, characterData: true, attributeFilter: ['class', 'disabled', 'data-message', 'title', 'style'] });
    return () => {
      observer.disconnect();
      theme.disconnect();
      for (const [item, { mount, parent }] of registry) { mount.remove(); delete parent.dataset.awesomepdfAction; delete item.dataset.awesomepdfControl; }
      style.remove();
      sheets.forEach(sheet => sheet.remove());
    };
  }, [iframe, locale, undo, redo]);

  return controls.map(control => createPortal(control.kind === 'hint'
    ? <Alert className="pointer-events-none fixed top-20 left-1/2 z-[100000] w-[calc(100%-2rem)] max-w-md -translate-x-1/2" role="status" dir={locale === 'ar' ? 'rtl' : 'ltr'}><Info aria-hidden="true" /><AlertDescription>{control.label}</AlertDescription></Alert>
    : <Button dir={locale === 'ar' ? 'rtl' : 'ltr'} type="button" size="sm" variant={control.pressed ? 'secondary' : 'ghost'} disabled={control.disabled}
      aria-pressed={control.toggle ? control.pressed : undefined} onClick={event => { event.stopPropagation(); control.action.click(); }}>
      <control.Icon aria-hidden="true" />{control.color && <span className="size-3 rounded-sm border" aria-hidden="true" style={{ backgroundColor: control.color }} />}{control.label}
    </Button>, control.mount, control.key));
}
