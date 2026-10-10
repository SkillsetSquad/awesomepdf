'use client';

import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { Download, FileSpreadsheet, FileText } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export type AnnotationExportFormat = 'pdf' | 'excel';
export type AnnotationExportAction = (format: AnnotationExportFormat) => void | Promise<void>;

/** Export choices use the engine's original callback, with the menu in the viewer's document. */
export function AnnotationExportMenu({ container, label, formats, onExport, direction, errorMessage }: {
  container: HTMLElement;
  label: string;
  formats: AnnotationExportFormat[];
  onExport: AnnotationExportAction;
  direction: 'ltr' | 'rtl';
  errorMessage: string;
}) {
  const [busy, setBusy] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const wasBusy = useRef(false);
  useEffect(() => {
    const doc = container.ownerDocument;
    const activeFrame = doc === document || document.activeElement === doc.defaultView?.frameElement;
    if (wasBusy.current && !busy && activeFrame && doc.activeElement === doc.body) trigger.current?.focus();
    wasBusy.current = busy;
  }, [busy, container]);
  const getItems = () => Array.from(menu.current?.querySelectorAll<HTMLElement>('[role="menuitem"]:not([data-disabled])') ?? []);
  const handleMenuKey = (event: KeyboardEvent<HTMLDivElement>) => {
    // Radix's keyboard helpers use the host document; focus stays within this PDF iframe.
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
    const items = getItems();
    if (!items.length) return;
    const current = items.indexOf(container.ownerDocument.activeElement as HTMLElement);
    const index = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1
      : event.key === 'ArrowDown' ? Math.min(current + 1, items.length - 1) : current < 0 ? items.length - 1 : Math.max(current - 1, 0);
    event.preventDefault();
    event.stopPropagation();
    items[index].focus();
  };
  const handleExport = async (format: AnnotationExportFormat) => {
    setBusy(true);
    try { await onExport(format); }
    catch (error) { toast.error(error instanceof Error ? error.message : errorMessage); }
    finally { setBusy(false); }
  };
  return <DropdownMenu dir={direction} modal={false}>
    <DropdownMenuTrigger asChild><Button ref={trigger} size="sm" variant="ghost" loading={busy} disabled={!formats.length}
      onClick={event => event.stopPropagation()} onKeyDown={event => event.stopPropagation()}>
      <Download aria-hidden="true" />{label}
    </Button></DropdownMenuTrigger>
    <DropdownMenuContent ref={menu} container={container} align="end" onKeyDownCapture={handleMenuKey}
      onFocus={event => { if (event.target === event.currentTarget) getItems()[0]?.focus(); }}>
      {formats.includes('pdf') && <DropdownMenuItem onSelect={() => { void handleExport('pdf'); }}><FileText aria-hidden="true" />PDF</DropdownMenuItem>}
      {formats.includes('excel') && <DropdownMenuItem onSelect={() => { void handleExport('excel'); }}><FileSpreadsheet aria-hidden="true" />Excel</DropdownMenuItem>}
    </DropdownMenuContent>
  </DropdownMenu>;
}
