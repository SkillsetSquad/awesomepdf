'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowDown, ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUp, ArrowUpToLine,
  BookOpen, ChevronDown, ChevronUp, Download, FileImage, FolderOpen, Hand,
  Highlighter, Info, Layers, ListTree, Maximize, MessageSquare, MoreHorizontal,
  PanelLeft, Paperclip, PenLine, Printer, RotateCcw, RotateCw, Search, Settings,
  Square, Stamp, TextCursor, Type, X, ZoomIn, ZoomOut, type LucideIcon,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { inputClassName } from '@/components/ui/input';
import { nativeSelectClassName } from '@/components/ui/native-select';
import { cn } from '@/lib/utils';
import { textareaClassName } from '@/components/ui/textarea';
import { dialogContentClassName } from '@/components/ui/dialog';
import { tabsListVariants, tabsTriggerClassName } from '@/components/ui/tabs';
import { PDFViewerField } from './PDFViewerField';
import { switchClassName, switchThumbClassName } from '@/components/ui/switch';

const icons: Partial<Record<string, LucideIcon>> = {
  sidebarToggleButton: PanelLeft, sidebarToggle: PanelLeft, viewFindButton: Search,
  viewFind: Search, findPreviousButton: ChevronUp, findPrevious: ChevronUp,
  findNextButton: ChevronDown, findNext: ChevronDown, previous: ArrowUp, next: ArrowDown,
  zoomInButton: ZoomIn, zoomIn: ZoomIn, zoomOutButton: ZoomOut, zoomOut: ZoomOut,
  viewThumbnail: BookOpen, viewOutline: ListTree, viewAttachments: Paperclip,
  viewLayers: Layers, currentOutlineItem: ListTree, editorCommentButton: MessageSquare,
  editorSignatureButton: PenLine, editorSignatureAddSignature: PenLine,
  editorHighlightButton: Highlighter, editorFreeTextButton: Type, editorInkButton: PenLine,
  editorStampButton: Stamp, editorStampAddImage: FileImage, printButton: Printer,
  print: Printer, secondaryPrint: Printer, downloadButton: Download, download: Download,
  secondaryDownload: Download, secondaryToolbarToggleButton: MoreHorizontal,
  secondaryToolbarToggle: MoreHorizontal, secondaryOpenFile: FolderOpen,
  presentationMode: Maximize, firstPage: ArrowUpToLine, lastPage: ArrowDownToLine,
  pageRotateCw: RotateCw, pageRotateCcw: RotateCcw, cursorSelectTool: TextCursor,
  cursorHandTool: Hand, scrollPage: Square, scrollVertical: ArrowDown,
  scrollHorizontal: ArrowRight, scrollWrapped: ArrowLeft, spreadNone: Square,
  spreadOdd: BookOpen, spreadEven: BookOpen, imageAltTextSettings: Settings,
  documentProperties: Info,
  newAltTextCloseButton: X, addSignatureErrorCloseButton: X,
  addSignatureScanRotateLeft: RotateCcw, addSignatureScanRotateRight: RotateCw,
};

type IconMount = { button: HTMLButtonElement; mount: HTMLElement; Icon: LucideIcon };
type FieldMount = { input: HTMLInputElement; mount: HTMLElement };

/** Keep the PDF.js elements, IDs, listeners and focus targets; apply the shared primitives. */
export function PDFViewerControls({ iframe, locale }: { iframe: HTMLIFrameElement | null; locale: string }) {
  const [iconMounts, setIconMounts] = useState<IconMount[]>([]);
  const [fieldMounts, setFieldMounts] = useState<FieldMount[]>([]);
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
      :root {
        --toolbar-height: 40px;
        --main-color: var(--foreground); --body-bg-color: var(--muted);
        --toolbar-bg-color: var(--card); --toolbar-border-color: var(--border);
        --sidebar-toolbar-bg-color: var(--card); --sidebar-narrow-bg-color: var(--card);
        --doorhanger-bg-color: var(--popover); --doorhanger-border-color: var(--border);
        --field-color: var(--foreground); --field-bg-color: var(--background);
        --field-border-color: var(--input); --progressBar-color: var(--primary);
        --treeitem-color: var(--foreground); --treeitem-hover-color: var(--foreground);
        --treeitem-selected-color: var(--accent-foreground); --treeitem-selected-bg-color: var(--accent);
      }
      #toolbarContainer, #toolbarContainer #toolbarViewer input, .toolbarLabel { font: inherit; }
      [data-pdf-viewer-icon]::before, [data-pdf-viewer-icon]::after { display: none; }
      [data-pdf-viewer-icon] > [data-pdf-viewer-icon-mount] { display: contents; }
      #pageNumber { width: 4rem; }
      #scaleSelect { appearance: auto; padding-inline-end: .75rem; }
      #scaleSelectContainer::after { display: none; }
      dialog::backdrop { background: rgb(0 0 0 / .5); }
      [data-pdf-viewer-switch]::before, [data-pdf-viewer-switch]::after { display: none; }
    `;
    doc.head.appendChild(style);
    const syncTheme = () => {
      const dark = document.documentElement.classList.contains('dark');
      doc.documentElement.classList.toggle('dark', dark);
      doc.documentElement.style.colorScheme = dark ? 'dark' : 'light';
      doc.documentElement.lang = locale;
      doc.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    };
    syncTheme();
    const theme = new MutationObserver(syncTheme);
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const elements = new Map<HTMLElement, { classes: string[]; slot?: string; size?: string; variant?: string; state?: string }>();
    const mounts = new Map<HTMLButtonElement, IconMount>();
    const switches = new Map<HTMLButtonElement, HTMLElement>();
    const fields = new Map<HTMLInputElement, { mount: HTMLElement; wrapper: HTMLElement; style: string | null }>();
    const apply = (element: HTMLElement, slot: string, classes: string) => {
      const tokens = classes.split(/\s+/).filter(Boolean);
      const previous = elements.get(element);
      if (!previous) elements.set(element, { classes: [], slot: element.dataset.slot, size: element.dataset.size, variant: element.dataset.variant, state: element.dataset.state });
      const record = elements.get(element)!;
      record.classes.filter(token => !tokens.includes(token)).forEach(token => element.classList.remove(token));
      const added = tokens.filter(token => !element.classList.contains(token));
      if (added.length) element.classList.add(...added);
      record.classes = [...new Set([...record.classes.filter(token => tokens.includes(token)), ...added])];
      element.dataset.slot = slot;
    };
    const sync = () => {
      for (const [button, entry] of mounts) {
        if (!doc.body.contains(button)) { entry.mount.remove(); mounts.delete(button); }
      }
      for (const [input, entry] of fields) {
        if (!doc.body.contains(input)) { entry.wrapper.remove(); fields.delete(input); }
      }
      for (const button of doc.querySelectorAll<HTMLButtonElement>('#toolbarContainer button[id], #toolbarSidebar button[id], #findbar button[id], #secondaryToolbar button[id], .editorParamsToolbar button[id], dialog button[id]')) {
        if (button.classList.contains('toggle-button')) {
          apply(button, 'switch', switchClassName);
          button.dataset.size = 'default';
          button.dataset.state = button.getAttribute('aria-pressed') === 'true' ? 'checked' : 'unchecked';
          let thumb = switches.get(button);
          if (!thumb) {
            thumb = doc.createElement('span');
            thumb.dataset.slot = 'switch-thumb';
            thumb.className = switchThumbClassName;
            thumb.setAttribute('aria-hidden', 'true');
            button.dataset.pdfViewerSwitch = 'true';
            button.appendChild(thumb);
            switches.set(button, thumb);
          }
          thumb.dataset.state = button.dataset.state;
          continue;
        }
        if (button.getAttribute('role') === 'tab') {
          apply(button, 'tabs-trigger', tabsTriggerClassName);
          button.dataset.state = button.getAttribute('aria-selected') === 'true' ? 'active' : 'inactive';
          continue;
        }
        const labeled = button.classList.contains('labeled') || button.classList.contains('secondaryToolbarButton');
        const inDialog = !!button.closest('dialog');
        const primary = button.classList.contains('primaryButton') || button.id === 'passwordSubmit';
        const variant = inDialog ? primary ? 'default' : 'outline' : button.classList.contains('toggled') || button.getAttribute('aria-checked') === 'true' ? 'secondary' : 'ghost';
        const size = inDialog ? 'default' : labeled ? 'sm' : 'icon-sm';
        apply(button, 'button', buttonVariants({ variant, size, className: labeled ? 'w-full justify-start' : undefined }));
        button.dataset.variant = variant;
        button.dataset.size = size;
        const Icon = icons[button.id];
        if (Icon && !mounts.has(button)) {
          const mount = doc.createElement('span');
          mount.dataset.pdfViewerIconMount = 'true';
          button.dataset.pdfViewerIcon = 'true';
          button.appendChild(mount);
          mounts.set(button, { button, mount, Icon });
        }
      }
      for (const field of doc.querySelectorAll<HTMLInputElement>('#pageNumber, #findInput')) apply(field, 'input', cn(inputClassName, 'h-8'));
      for (const field of doc.querySelectorAll<HTMLInputElement>('dialog input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), .editorParamsToolbar input[type=color]')) apply(field, 'input', inputClassName);
      for (const field of doc.querySelectorAll<HTMLTextAreaElement>('dialog textarea')) apply(field, 'textarea', textareaClassName);
      for (const select of doc.querySelectorAll<HTMLSelectElement>('#scaleSelect, dialog select')) {
        apply(select, 'native-select', nativeSelectClassName); select.dataset.size = select.id === 'scaleSelect' ? 'sm' : 'default';
      }
      for (const dialog of doc.querySelectorAll<HTMLDialogElement>('dialog')) apply(dialog, 'dialog-content', cn(dialogContentClassName, 'static top-auto left-auto m-auto block translate-x-0 translate-y-0 max-h-[calc(100dvh-2rem)] overflow-y-auto text-sm'));
      for (const list of doc.querySelectorAll<HTMLElement>('dialog [role=tablist]')) { apply(list, 'tabs-list', tabsListVariants({ className: 'h-9 max-w-full' })); list.dataset.variant = 'default'; }
      for (const input of doc.querySelectorAll<HTMLInputElement>('#findbar input[type=checkbox][id], dialog input[type=checkbox][id], dialog input[type=radio][id], dialog input[type=range][id], .editorParamsToolbar input[type=range][id]')) {
        if (!fields.has(input)) {
          const wrapper = doc.createElement('span');
          wrapper.dataset.pdfViewerField = 'true';
          wrapper.className = input.type === 'range' ? 'group/field relative inline-flex h-6 w-full min-w-24 items-center' : 'group/field relative inline-flex size-4 shrink-0 items-center';
          const mount = doc.createElement('span');
          mount.className = 'pointer-events-none flex w-full items-center [&:has([data-slot=checkbox])]:rounded-[4px] [&:has([data-slot=slider])]:rounded-full [&:has([data-slot=radio-group-item])]:rounded-full group-has-[input:focus-visible]/field:ring-[3px] group-has-[input:focus-visible]/field:ring-ring/50';
          mount.setAttribute('aria-hidden', 'true');
          mount.setAttribute('inert', '');
          const style = input.getAttribute('style');
          input.before(wrapper);
          wrapper.append(input, mount);
          Object.assign(input.style, { position: 'absolute', inset: '0', width: '100%', height: '100%', margin: '0', opacity: '0', zIndex: '1' });
          fields.set(input, { mount, wrapper, style });
        }
        input.dispatchEvent(new Event('awesomepdf:sync-field'));
      }
      const next = [...mounts.values()];
      setIconMounts(previous => previous.length === next.length && next.every((entry, index) => previous[index].mount === entry.mount) ? previous : next);
      const nextFields = [...fields.entries()].map(([input, { mount }]) => ({ input, mount }));
      setFieldMounts(previous => previous.length === nextFields.length && nextFields.every((entry, index) => previous[index].mount === entry.mount) ? previous : nextFields);
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(doc.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'aria-checked', 'aria-selected', 'aria-pressed'] });
    return () => {
      observer.disconnect(); theme.disconnect(); style.remove(); sheets.forEach(sheet => sheet.remove());
      for (const { button, mount } of mounts.values()) { mount.remove(); delete button.dataset.pdfViewerIcon; }
      for (const [button, thumb] of switches) { thumb.remove(); delete button.dataset.pdfViewerSwitch; }
      for (const [input, { wrapper, style }] of fields) {
        wrapper.before(input); wrapper.remove();
        if (style === null) input.removeAttribute('style'); else input.setAttribute('style', style);
      }
      for (const [element, record] of elements) {
        element.classList.remove(...record.classes);
        for (const key of ['slot', 'size', 'variant', 'state'] as const) {
          if (record[key] === undefined) delete element.dataset[key]; else element.dataset[key] = record[key];
        }
      }
    };
  }, [iframe, locale]);
  return <>
    {iconMounts.map(({ mount, Icon, button }) => createPortal(<Icon aria-hidden="true" />, mount, button.id))}
    {fieldMounts.map(({ input, mount }) => createPortal(<PDFViewerField input={input} />, mount, input.id))}
  </>;
}
