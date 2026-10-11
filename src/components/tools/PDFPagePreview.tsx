'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import type { PDFDocumentLoadingTask, PDFDocumentProxy, PDFPageProxy, RenderTask } from 'pdfjs-dist';
import { ChevronLeft, ChevronRight, CircleAlert, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { loadPdfjs } from '@/lib/pdf/loader';

export interface PDFPagePreviewProps { file: Blob; label: string; overlay?: ReactNode }

/** Local PDF canvas and page navigation; its surrounding tool owns the workspace layout. */
export function PDFPagePreview({ file, label, overlay }: PDFPagePreviewProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const canvas = useRef<HTMLCanvasElement>(null);
  const [loadedDocument, setLoadedDocument] = useState<{ file: Blob; pdf: PDFDocumentProxy } | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [ready, setReady] = useState<{ file: Blob; page: number } | null>(null);
  const [failure, setFailure] = useState<{ file: Blob; message: string | null } | null>(null);
  const pdf = loadedDocument?.file === file ? loadedDocument.pdf : null;
  const visible = ready?.file === file && ready.page === pageNumber;
  const error = failure?.file === file ? failure.message || tErrors('processingFailed') : null;

  useEffect(() => {
    let active = true;
    let loadingTask: PDFDocumentLoadingTask | undefined;
    setLoadedDocument(null); setPageNumber(1); setReady(null); setFailure(null);
    const load = async () => {
      try {
        const pdfjs = await loadPdfjs();
        const data = new Uint8Array(await file.arrayBuffer());
        if (!active) return;
        loadingTask = pdfjs.getDocument({ data });
        const pdf = await loadingTask.promise;
        if (active) setLoadedDocument({ file, pdf });
      } catch (err) {
        if (active) setFailure({ file, message: err instanceof Error ? err.message : null });
      }
    };
    void load();
    return () => { active = false; if (loadingTask) void loadingTask.destroy().catch(() => {}); };
  }, [file]);

  useEffect(() => {
    if (!pdf) return;
    let active = true;
    let renderTask: RenderTask | undefined;
    let page: PDFPageProxy | undefined;
    let bitmap: HTMLCanvasElement | undefined;
    setReady(null); setFailure(null);
    const render = async () => {
      try {
        page = await pdf.getPage(pageNumber);
        if (!active) return;
        const original = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: Math.min(600 / original.width, 800 / original.height) });
        // Each render owns a canvas, so cancelled pages cannot paint onto a newer preview.
        bitmap = window.document.createElement('canvas');
        bitmap.width = Math.max(1, Math.ceil(viewport.width)); bitmap.height = Math.max(1, Math.ceil(viewport.height));
        const context = bitmap.getContext('2d');
        if (!context) throw new Error();
        renderTask = page.render({ canvasContext: context, viewport });
        await renderTask.promise;
        if (!active || !canvas.current) return;
        const output = canvas.current.getContext('2d');
        if (!output) throw new Error();
        canvas.current.width = bitmap.width; canvas.current.height = bitmap.height;
        output.drawImage(bitmap, 0, 0);
        setReady({ file, page: pageNumber });
      } catch (err) {
        if (active) setFailure({ file, message: err instanceof Error ? err.message : null });
      } finally {
        try { page?.cleanup(); } catch { /* The document may already have been destroyed. */ }
        if (bitmap) { bitmap.width = 0; bitmap.height = 0; }
      }
    };
    void render();
    return () => { active = false; renderTask?.cancel(); };
  }, [pdf, file, pageNumber]);

  const pageLabel = t('accessibility.pageOf', { current: pageNumber, total: pdf?.numPages || 1 });
  return <div className="space-y-3">
    <div className="relative min-h-32 overflow-hidden rounded-md border bg-white" dir="ltr">
      <canvas ref={canvas} className={visible ? 'block h-auto w-full' : 'hidden'} aria-hidden={!visible} role="img" aria-label={`${label}: ${pageLabel}`} />
      {visible && overlay}
      {!visible && !error && <div role="status" className="flex min-h-32 items-center justify-center gap-2 p-4 text-sm text-gray-600"><Loader2 aria-hidden="true" className="size-4 animate-spin" />{t('status.loading')}</div>}
    </div>
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {pdf && <div className="flex flex-wrap items-center justify-between gap-3">
      <Button variant="outline" size="sm" onClick={() => setPageNumber(value => value - 1)} disabled={pageNumber <= 1}><ChevronLeft aria-hidden="true" className="rtl:rotate-180" />{t('buttons.previous')}</Button>
      <span className="text-sm tabular-nums" aria-live="polite">{pageLabel}</span>
      <Button variant="outline" size="sm" onClick={() => setPageNumber(value => value + 1)} disabled={pageNumber >= pdf.numPages}>{t('buttons.next')}<ChevronRight aria-hidden="true" className="rtl:rotate-180" /></Button>
    </div>}
  </div>;
}
