'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowDown, ArrowDownToLine, ArrowLeft, ArrowRight, ArrowUp, ArrowUpToLine,
  BookOpen, ChevronDown, ChevronUp, Download, FileImage, FolderOpen, Hand,
  Highlighter, Info, Layers, ListTree, Maximize, MessageSquare, MoreHorizontal,
  PanelLeft, Paperclip, PenLine, Printer, RotateCcw, RotateCw, Search, Settings,
  Square, Stamp, TextCursor, Type, ZoomIn, ZoomOut, type LucideIcon,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { inputClassName } from '@/components/ui/input';
import { nativeSelectClassName } from '@/components/ui/native-select';
import { cn } from '@/lib/utils';

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
};

type IconMount = { button: HTMLButtonElement; mount: HTMLElement; Icon: LucideIcon };

/** Keep the PDF.js elements, IDs, listeners and focus targets; apply the shared primitives. */
export function PDFViewerControls({ iframe, locale }: { iframe: HTMLIFrameElement | null; locale: string }) {
  const [iconMounts, setIconMounts] = useState<IconMount[]>([]);
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

    const elements = new Map<HTMLElement, { classes: string[]; slot?: string; size?: string; variant?: string }>();
    const mounts = new Map<HTMLButtonElement, IconMount>();
    const apply = (element: HTMLElement, slot: string, classes: string) => {
      const tokens = classes.split(/\s+/).filter(Boolean);
      const previous = elements.get(element);
      if (!previous) elements.set(element, { classes: [], slot: element.dataset.slot, size: element.dataset.size, variant: element.dataset.variant });
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
      for (const button of doc.querySelectorAll<HTMLButtonElement>('#toolbarContainer button[id], #toolbarSidebar button[id], #findbar button[id], #secondaryToolbar button[id], .editorParamsToolbar button[id]')) {
        // Color picker and switch controls keep their document-specific visual state.
        if (button.classList.contains('toggle-button')) continue;
        const labeled = button.classList.contains('labeled') || button.classList.contains('secondaryToolbarButton');
        const variant = button.classList.contains('toggled') || button.getAttribute('aria-checked') === 'true' ? 'secondary' : 'ghost';
        apply(button, 'button', buttonVariants({ variant, size: labeled ? 'sm' : 'icon-sm', className: labeled ? 'w-full justify-start' : undefined }));
        button.dataset.variant = variant;
        button.dataset.size = labeled ? 'sm' : 'icon-sm';
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
      const scale = doc.getElementById('scaleSelect');
      if (scale) { apply(scale, 'native-select', nativeSelectClassName); scale.dataset.size = 'sm'; }
      const next = [...mounts.values()];
      setIconMounts(previous => previous.length === next.length && next.every((entry, index) => previous[index].mount === entry.mount) ? previous : next);
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(doc.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'aria-checked'] });
    return () => {
      observer.disconnect(); theme.disconnect(); style.remove(); sheets.forEach(sheet => sheet.remove());
      for (const { button, mount } of mounts.values()) { mount.remove(); delete button.dataset.pdfViewerIcon; }
      for (const [element, record] of elements) {
        element.classList.remove(...record.classes);
        for (const key of ['slot', 'size', 'variant'] as const) {
          if (record[key] === undefined) delete element.dataset[key]; else element.dataset[key] = record[key];
        }
      }
    };
  }, [iframe, locale]);
  return iconMounts.map(({ mount, Icon, button }) => createPortal(<Icon aria-hidden="true" />, mount, button.id));
}
