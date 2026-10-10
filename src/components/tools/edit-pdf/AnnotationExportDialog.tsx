'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export interface AnnotationExportNotice {
  title: string;
  content: string;
  okButtonProps: { loading: boolean };
}

export interface AnnotationExportDialogHandle {
  update: (notice: Partial<AnnotationExportNotice>) => void;
  destroy: () => void;
}

export type AnnotationExportWindow = Window & {
  awesomepdfAnnotationExportDialog?: (notice: AnnotationExportNotice) => AnnotationExportDialogHandle;
};

/** The engine keeps its local export routines; only its status dialog is hosted here. */
export function AnnotationExportDialog({ iframe, locale, closeLabel }: {
  iframe: HTMLIFrameElement | null;
  locale: string;
  closeLabel: string;
}) {
  const [notice, setNotice] = useState<(AnnotationExportNotice & { id: number }) | null>(null);
  const content = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const viewer = iframe?.contentWindow as AnnotationExportWindow | null;
    const doc = iframe?.contentDocument;
    if (!viewer || !doc) return;
    let nextId = 0;
    const previous = viewer.awesomepdfAnnotationExportDialog;
    const openDialog = (options: AnnotationExportNotice): AnnotationExportDialogHandle => {
      const id = ++nextId;
      returnFocus.current = doc.querySelector<HTMLElement>('[data-annotation-tool="export"] [data-slot="dropdown-menu-trigger"]');
      setNotice({ ...options, id });
      return {
        update: update => setNotice(current => current?.id === id ? { ...current, ...update } : current),
        destroy: () => setNotice(current => current?.id === id ? null : current),
      };
    };
    viewer.awesomepdfAnnotationExportDialog = openDialog;
    return () => {
      if (viewer.awesomepdfAnnotationExportDialog === openDialog) {
        if (previous) viewer.awesomepdfAnnotationExportDialog = previous;
        else delete viewer.awesomepdfAnnotationExportDialog;
      }
    };
  }, [iframe]);
  const loading = notice?.okButtonProps.loading ?? false;
  return <Dialog open={notice !== null} onOpenChange={open => { if (!open && !loading) setNotice(null); }}>
    <DialogContent ref={content} dir={locale === 'ar' ? 'rtl' : 'ltr'} showCloseButton={false} aria-busy={loading}
      onOpenAutoFocus={event => { event.preventDefault(); content.current?.focus(); }}
      onCloseAutoFocus={event => {
        event.preventDefault();
        if (returnFocus.current?.isConnected && !returnFocus.current.hasAttribute('disabled')) returnFocus.current.focus();
        else iframe?.focus();
      }}
      onEscapeKeyDown={event => { if (loading) event.preventDefault(); }}
      onInteractOutside={event => { if (loading) event.preventDefault(); }}>
      <DialogHeader>
        <DialogTitle>{notice?.title}</DialogTitle>
        <DialogDescription role="status" aria-live="polite" aria-atomic="true">
          {loading && <Loader2 aria-hidden="true" className="me-2 inline size-4 animate-spin" />}{notice?.content}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter><Button loading={loading} onClick={() => setNotice(null)}>{closeLabel}</Button></DialogFooter>
    </DialogContent>
  </Dialog>;
}
