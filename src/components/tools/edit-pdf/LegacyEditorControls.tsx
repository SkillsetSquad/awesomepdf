'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, TextCursorInput, Undo2, Redo2 } from 'lucide-react';

interface ViewerControl {
  item: HTMLElement;
  mount: HTMLElement;
  kind: 'edit' | 'undo' | 'redo' | 'hint';
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
      [data-awesomepdf-control] > :not([data-awesomepdf-mount]) { display: none !important; }
      .CustomToolbar .buttons [data-awesomepdf-control] { border: 0; background: transparent; margin: 0; }
      [data-awesomepdf-mount] { display: inline-flex; }
    `;
    doc.head.appendChild(style);
    const syncTheme = () => {
      const dark = document.documentElement.classList.contains('dark');
      doc.documentElement.classList.toggle('dark', dark);
      doc.documentElement.classList.toggle('is-dark', dark);
      doc.documentElement.classList.toggle('is-light', !dark);
      doc.documentElement.lang = locale;
    };
    syncTheme();
    const theme = new MutationObserver(syncTheme);
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    const registry = new Map<HTMLElement, HTMLElement>();
    const sync = () => {
      const next: ViewerControl[] = [];
      for (const [item, mount] of registry) {
        if (!doc.body.contains(item)) { mount.remove(); registry.delete(item); }
      }
      for (const [selector, kind] of [
        ['#pdfcraft-edit-existing-text', 'edit'], ['.pdfcraft-undo-btn', 'undo'],
        ['.pdfcraft-redo-btn', 'redo'], ['#pdfcraft-text-edit-hint', 'hint'],
      ] as const) {
        const item = doc.querySelector<HTMLElement>(selector);
        if (!item) continue;
        let mount = registry.get(item);
        if (!mount) {
          mount = doc.createElement('span');
          mount.dataset.awesomepdfMount = 'true';
          item.dataset.awesomepdfControl = 'true';
          item.appendChild(mount);
          registry.set(item, mount);
        }
        const action = kind === 'undo' || kind === 'redo' ? item.querySelector<HTMLButtonElement>('button')! : item;
        if (!action) continue;
        next.push({ item, mount, kind, action, label: kind === 'undo' ? undo : kind === 'redo' ? redo : kind === 'hint' ? item.dataset.message ?? '' : item.title,
          disabled: action.hasAttribute('disabled'), pressed: item.classList.contains('pdfcraft-active') });
      }
      setControls(previous => previous.length === next.length && next.every((control, index) => {
        const old = previous[index];
        return old.item === control.item && old.mount === control.mount && old.label === control.label && old.disabled === control.disabled && old.pressed === control.pressed;
      }) ? previous : next);
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(doc.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'disabled', 'data-message', 'title'] });
    return () => {
      observer.disconnect();
      theme.disconnect();
      for (const [item, mount] of registry) { mount.remove(); delete item.dataset.awesomepdfControl; }
      style.remove();
      sheets.forEach(sheet => sheet.remove());
    };
  }, [iframe, locale, undo, redo]);

  return controls.map(control => createPortal(control.kind === 'hint'
    ? <Alert className="pointer-events-none fixed top-20 left-1/2 z-[100000] w-[calc(100%-2rem)] max-w-md -translate-x-1/2" role="status" dir={locale === 'ar' ? 'rtl' : 'ltr'}><Info aria-hidden="true" /><AlertDescription>{control.label}</AlertDescription></Alert>
    : <Button dir={locale === 'ar' ? 'rtl' : 'ltr'} type="button" size="sm" variant={control.pressed ? 'secondary' : 'ghost'} disabled={control.disabled}
      aria-pressed={control.kind === 'edit' ? control.pressed : undefined} onClick={event => { event.stopPropagation(); control.action.click(); }}>
      {control.kind === 'edit' ? <TextCursorInput aria-hidden="true" /> : control.kind === 'undo' ? <Undo2 aria-hidden="true" /> : <Redo2 aria-hidden="true" />}{control.label}
    </Button>, control.mount, control.kind));
}
