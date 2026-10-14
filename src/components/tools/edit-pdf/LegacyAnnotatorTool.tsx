'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, Info, CircleCheck, Undo2, Redo2, Loader2 } from 'lucide-react';

import { File as UIFile } from 'lucide-react';


import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { withBasePath } from '@/lib/utils/path';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LegacyTextEditDialog } from './LegacyTextEditDialog';
import { LegacyEditorControls } from './LegacyEditorControls';
import { annotationCommentLabels } from './annotation-comment-labels';
import { AnnotationExportDialog } from './AnnotationExportDialog';
import { AnnotationHistoryControls } from './AnnotationHistoryControls';
import { AnnotationDrawingControls } from './AnnotationDrawingControls';
import { PDFViewerControls } from '../PDFViewerControls';
import {
  replaceExistingText,
  type ReplaceExistingTextDiagnostics,
  type TextFitMode,
} from '@/lib/pdf/processors/replace-existing-text';

export interface LegacyAnnotatorToolProps {
  className?: string;
  file?: File | null;
  onFileChange?: (file: File | null) => void;
  hideHeaderCard?: boolean;
  onClear?: () => void;
}

/**
 * LegacyAnnotatorTool Component
 * 
 * Provides PDF editing capabilities using PDF.js viewer with annotation support.
 * Users can add text, draw, highlight, and add images to PDFs.
 * The PDF.js viewer has built-in save functionality (export button in toolbar).
 */
export function LegacyAnnotatorTool({
  className = '',
  file: externalFile,
  onFileChange,
  hideHeaderCard = false,
  onClear,
}: LegacyAnnotatorToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const locale = useLocale();
  const [editorFrame, setEditorFrame] = useState<HTMLIFrameElement | null>(null);
  const tTools = useTranslations('tools.editPdf');
  const tBookmark = useTranslations('tools.bookmark');
  const annotationLabels = useMemo(() => ({
    select: tTools('toolbar.select'), rectangle: t('editPdf.annRectangle'), circle: t('editPdf.annCircle'),
    note: t('editPdf.annNote'), arrow: t('editPdf.annArrow'), cloud: t('editPdf.annCloud'),
    freehand: t('editPdf.annFreehand'), freeHighlight: t('editPdf.annFreeHighlight'), freeText: t('editPdf.annFreeText'),
    signature: t('editPdf.annSignature'), stamp: t('editPdf.annStamp'), color: tBookmark('color'),
    export: t('buttons.download'), comments: t('editPdf.comments'), delete: t('buttons.delete'), style: t('editPdf.annotationStyle'),
  }), [t, tTools, tBookmark]);
  const signatureLabels = useMemo(() => ({
    description: t('editPdf.signatureDescription'), draw: t('editPdf.signatureDraw'), type: t('editPdf.signatureType'),
    saved: t('editPdf.signatureSaved'), text: t('editPdf.signatureText'), font: t('editPdf.signatureFont'), image: t('editPdf.signatureImage'),
    upload: t('buttons.upload'), color: tBookmark('color'), clear: t('buttons.clear'), add: t('buttons.add'), cancel: t('buttons.cancel'), error: tErrors('processingFailed'),
  }), [t, tBookmark, tErrors]);
  const stampLabels = useMemo(() => ({
    description: t('editPdf.stampDescription'), defaults: t('editPdf.stampDefaults'), saved: t('editPdf.stampSaved'), create: t('editPdf.stampCreate'), text: t('editPdf.stampText'),
    font: t('editPdf.signatureFont'), textColor: t('editPdf.stampTextColor'), background: t('editPdf.stampBackground'), border: t('editPdf.stampBorder'), borderStyle: t('editPdf.stampBorderStyle'), solid: t('editPdf.stampSolid'), dashed: t('editPdf.stampDashed'),
    bold: t('editPdf.stampBold'), italic: t('editPdf.stampItalic'), underline: t('editPdf.stampUnderline'), strikeout: t('editPdf.stampStrikeout'),
    author: t('editPdf.stampAuthor'), date: t('editPdf.stampDate'), dateFormat: t('editPdf.stampDateFormat'), customTimestamp: t('editPdf.stampCustomTimestamp'), empty: t('editPdf.stampEmpty'),
    upload: t('buttons.upload'), back: t('buttons.back'), cancel: t('buttons.cancel'), add: t('buttons.add'), error: tErrors('processingFailed'), retry: tErrors('tryAgain'),
    colorFormat: t('editPdf.colorFormat'), opacity: t('editPdf.opacity'), close: t('buttons.close'),
  }), [t, tErrors]);
  const commentLabels = useMemo(() => annotationCommentLabels(t, tTools, tErrors('processingFailed')), [t, tTools, tErrors]);
  
  const [internalFile, setInternalFile] = useState<File | null>(null);
  const file = externalFile !== undefined ? externalFile : internalFile;

  const setFile = useCallback(
    (newFile: File | null) => {
      if (externalFile !== undefined) {
        onFileChange?.(newFile);
      } else {
        setInternalFile(newFile);
      }
    },
    [externalFile, onFileChange]
  );

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isTextReplacing, setIsTextReplacing] = useState(false);
  const [replacementNotice, setReplacementNotice] = useState<string | null>(null);
  const [replacementDiagnostics, setReplacementDiagnostics] =
    useState<ReplaceExistingTextDiagnostics | null>(null);
  const [textUndoCount, setTextUndoCount] = useState(0);
  const [textRedoCount, setTextRedoCount] = useState(0);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const textUndoStackRef = useRef<File[]>([]);
  const textRedoStackRef = useRef<File[]>([]);

  // Sync external file prop changes
  useEffect(() => {
    if (externalFile) {
      setError(null);
      setReplacementNotice(null);
      setReplacementDiagnostics(null);
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return URL.createObjectURL(externalFile);
      });
    } else if (externalFile === null) {
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return null;
      });
    }
  }, [externalFile]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setReplacementNotice(null);
      setReplacementDiagnostics(null);
      textUndoStackRef.current = [];
      textRedoStackRef.current = [];
      setTextUndoCount(0);
      setTextRedoCount(0);
      setPdfUrl((prev) => {
        if (prev) URL.revokeObjectURL(prev);
        return URL.createObjectURL(selectedFile);
      });
    }
  }, [setFile]);

  const handleAnnotationHistoryError = useCallback(() => setError(tErrors('processingFailed')), [tErrors]);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  useEffect(() => {
    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [pdfUrl]);

  const handleIframeLoad = useCallback(() => {
    setEditorFrame(iframeRef.current);
    setTimeout(() => {
      setIsEditorReady(true);
      
      try {
        const iframe = iframeRef.current;
        if (iframe?.contentDocument) {
          const doc = iframe.contentDocument;

          // 1. Hide native PDF.js download/save buttons
          const downloadBtn = doc.getElementById('download');
          const secondaryDownloadBtn = doc.getElementById('secondaryDownload');
          if (downloadBtn) downloadBtn.style.display = 'none';
          if (secondaryDownloadBtn) secondaryDownloadBtn.style.display = 'none';
          
          // 2. Hide save button from CustomToolbar (pdfjs-annotation-extension)
          const customToolbar = doc.querySelector('.CustomToolbar');
          if (customToolbar) {
            const buttons = customToolbar.querySelectorAll('li, button');
            buttons.forEach((btn: Element) => {
              const text = btn.textContent?.trim();
              if (text === '\u4fdd\u5b58' || text === 'Save') {
                (btn as HTMLElement).style.display = 'none';
              }
            });
          }          // 3. Inject AwsomePDF Enrichment Script
          const patchScript = doc.createElement('script');
          patchScript.textContent = `
            (function() {
              console.log('[AwsomePDF Patch] Initializing annotation patches...');

              const initInterval = setInterval(() => {
                const ext = window.pdfjsAnnotationExtensionInstance;
                if (ext) {
                  clearInterval(initInterval);
                  console.log('[AwsomePDF Patch] pdfjsAnnotationExtensionInstance found! Setting up patches...');
                  setupExistingTextEditing();
                }
              }, 200);

              function setupExistingTextEditing() {
                if (document.getElementById('awsomepdf-edit-existing-text')) return;
                const toolbar = document.querySelector('.CustomToolbar ul.buttons');
                if (!toolbar) return;

                const parentLang = window.parent?.document?.documentElement?.lang || 'en';
                const parentLocale = window.parent?.location?.pathname?.split('/')[1] || parentLang;
                const isSpanish = parentLocale.toLowerCase().startsWith('es');
                const labels = isSpanish
                  ? {
                      tool: 'Editar texto',
                      heading: 'Editar texto existente',
                      original: 'Texto original',
                      replacement: 'Texto nuevo',
                      apply: 'Aplicar',
                      confirm: 'Confirmar cambio',
                      cancel: 'Cancelar',
                      hint: 'Haz clic sobre un bloque de texto del PDF',
                      overflow: 'El texto nuevo no cabe en el área original.',
                      fit: 'Si no cabe',
                      preserve: 'Mantener tamaño',
                      shrink: 'Reducir para encajar',
                      expand: 'Ampliar el área',
                      signature: 'Editar el contenido invalida las firmas digitales existentes.'
                    }
                  : {
                      tool: 'Edit text',
                      heading: 'Edit existing text',
                      original: 'Original text',
                      replacement: 'New text',
                      apply: 'Apply',
                      confirm: 'Confirm change',
                      cancel: 'Cancel',
                      hint: 'Click a text block in the PDF',
                      overflow: 'The new text does not fit in the original area.',
                      fit: 'If it does not fit',
                      preserve: 'Keep original size',
                      shrink: 'Shrink to fit',
                      expand: 'Expand the area',
                      signature: 'Editing content invalidates existing digital signatures.'
                    };

                const item = document.createElement('li');
                item.id = 'awsomepdf-edit-existing-text';
                item.title = labels.tool;
                const selectItem = toolbar.querySelector('li[title="Select"]');
                if (selectItem?.nextSibling) {
                  toolbar.insertBefore(item, selectItem.nextSibling);
                } else {
                  toolbar.insertBefore(item, toolbar.firstChild);
                }

                const style = document.createElement('style');
                style.id = 'awsomepdf-existing-text-styles';
                style.textContent = \`
                  body.awsomepdf-text-edit-mode .textLayer { pointer-events: auto !important; }
                  body.awsomepdf-text-edit-mode .textLayer span {
                    cursor: text !important;
                    pointer-events: auto !important;
                    border-radius: 2px;
                    transition: outline-color .12s, background .12s;
                  }
                  body.awsomepdf-text-edit-mode .textLayer span:hover {
                    outline: 2px solid #2563eb !important;
                    background: rgba(37, 99, 235, .14) !important;
                  }
                  .awsomepdf-live-text-preview {
                    outline: 2px dashed #16a34a !important;
                    background: rgba(22, 163, 74, .10) !important;
                  }
                \`;
                document.head.appendChild(style);

                let active = false;
                let editingText = false;
                let requestId = 0;
                let selectionGeometry = null;
                let originalWidth = 0;
                let originalHeight = 0;
                let previewSpan = null;
                let previewOriginalText = '';

                function restorePreview() {
                  if (previewSpan) {
                    previewSpan.textContent = previewOriginalText;
                    previewSpan.classList.remove('awsomepdf-live-text-preview');
                  }
                  previewSpan = null;
                  previewOriginalText = '';
                }

                function closeTextEditor() {
                  restorePreview();
                  if (editingText) window.parent.postMessage({ type: 'awsomepdf:cancel-existing-text', payload: { requestId } }, window.location.origin);
                  editingText = false;
                }

                function setActive(nextActive) {
                  active = nextActive;
                  document.body.classList.toggle('awsomepdf-text-edit-mode', active);
                  item.classList.toggle('awsomepdf-active', active);
                  closeTextEditor();

                  document.getElementById('awsomepdf-text-edit-hint')?.remove();
                  if (active) {
                    const hint = document.createElement('div');
                    hint.id = 'awsomepdf-text-edit-hint';
                    hint.dataset.message = labels.hint;
                    document.body.appendChild(hint);
                  }
                }

                item.addEventListener('click', function(event) {
                  event.preventDefault();
                  event.stopPropagation();
                  setActive(!active);
                });

                document.addEventListener('keydown', function(event) {
                  if (event.key === 'Escape' && (active || editingText)) {
                    if (editingText) closeTextEditor();
                    else setActive(false);
                  }
                });

                document.addEventListener('click', async function(event) {
                  if (!active) return;
                  const target = event.target;
                  if (!(target instanceof HTMLElement)) return;
                  const span = target.closest('.textLayer span');
                  if (!span || !span.textContent?.trim()) return;

                  event.preventDefault();
                  event.stopPropagation();

                  const pageElement = span.closest('.page');
                  const pageNumber = Number(pageElement?.getAttribute('data-page-number'));
                  const app = window.PDFViewerApplication;
                  const pageView = app?.pdfViewer?.getPageView(pageNumber - 1);
                  const pdfPage = pageView?.pdfPage;
                  if (!pageElement || !pageNumber || !pdfPage) return;

                  const viewport = pdfPage.getViewport({ scale: 1 });
                  const pageRect = pageElement.getBoundingClientRect();
                  const textRect = span.getBoundingClientRect();
                  originalWidth = textRect.width;
                  originalHeight = textRect.height;
                  const x = (textRect.left - pageRect.left) / pageRect.width * viewport.width;
                  const top = (textRect.top - pageRect.top) / pageRect.height * viewport.height;
                  const width = textRect.width / pageRect.width * viewport.width;
                  const height = textRect.height / pageRect.height * viewport.height;
                  const y = viewport.height - top - height;

                  closeTextEditor();
                  previewSpan = span;
                  previewOriginalText = span.textContent;
                  requestId += 1;
                  editingText = true;
                  selectionGeometry = { page: pageNumber, text: previewOriginalText, x, y, width, height };
                  window.parent.postMessage({
                    type: 'awsomepdf:select-existing-text',
                    payload: { requestId, text: previewOriginalText, labels }
                  }, window.location.origin);
                }, true);

                window.addEventListener('message', function(event) {
                  if (event.source !== window.parent || event.origin !== window.location.origin) return;
                  const { type, payload } = event.data || {};
                  if (!editingText || payload?.requestId !== requestId) return;
                  if (type === 'awsomepdf:preview-existing-text' && typeof payload.text === 'string') {
                    previewSpan.textContent = payload.text;
                    previewSpan.classList.add('awsomepdf-live-text-preview');
                    const previewRect = previewSpan.getBoundingClientRect();
                    const lineCount = Math.max(1, payload.text.split(/\\r?\\n/).length);
                    const overflow = previewRect.width > originalWidth + 1 || lineCount * originalHeight > originalHeight + 1;
                    window.parent.postMessage({ type: 'awsomepdf:text-overflow', payload: { requestId, overflow } }, window.location.origin);
                  } else if (type === 'awsomepdf:close-existing-text') {
                    closeTextEditor();
                  } else if (type === 'awsomepdf:apply-existing-text' && typeof payload.replacementText === 'string') {
                    window.parent.postMessage({
                      type: 'awsomepdf:replace-existing-text',
                      payload: { ...selectionGeometry, replacementText: payload.replacementText, fitMode: payload.fitMode }
                    }, window.location.origin);
                    closeTextEditor();
                  }
                }, true);
              }

              // Drawing helpers and history are mounted by the parent against the shipped painter.
              // D. Annotation history is mounted by the parent using the shipped painter/store API.
            })();
          `;
          doc.body.appendChild(patchScript);
          console.log('[AwsomePDF Patch] Enrichment script successfully injected into iframe!');
        }
      } catch (e) {
        console.warn('Could not access iframe content to inject patches', e);
      }
    }, 1000);
  }, []);

  const handleClear = useCallback(() => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setFile(null);
    setPdfUrl(null);
    setError(null);
    setIsEditorReady(false);
    setReplacementNotice(null);
    setReplacementDiagnostics(null);
    textUndoStackRef.current = [];
    textRedoStackRef.current = [];
    setTextUndoCount(0);
    setTextRedoCount(0);
    setEditorFrame(null);
    onClear?.();
  }, [pdfUrl, setFile, onClear]);

  const showFileVersion = useCallback((nextFile: File) => {
    setFile(nextFile);
    setIsEditorReady(false);
    setPdfUrl(URL.createObjectURL(nextFile));
  }, [setFile]);

  const handleExistingTextReplaced = useCallback((
    result: Blob,
    count: number,
    diagnostics?: ReplaceExistingTextDiagnostics
  ) => {
    if (!file) return;
    const editedFile = new File([result], file.name, { type: 'application/pdf' });
    textUndoStackRef.current.push(file);
    textRedoStackRef.current = [];
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(0);
    setReplacementNotice(`${count} text occurrence${count === 1 ? '' : 's'} replaced.`);
    setReplacementDiagnostics(diagnostics ?? null);
    showFileVersion(editedFile);
  }, [file, showFileVersion]);

  const handleTextUndo = useCallback(() => {
    if (!file || textUndoStackRef.current.length === 0 || isTextReplacing) return;
    const previousFile = textUndoStackRef.current.pop();
    if (!previousFile) return;
    textRedoStackRef.current.push(file);
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(textRedoStackRef.current.length);
    setReplacementNotice(tTools('textUndoApplied'));
    setReplacementDiagnostics(null);
    showFileVersion(previousFile);
  }, [file, isTextReplacing, showFileVersion, tTools]);

  const handleTextRedo = useCallback(() => {
    if (!file || textRedoStackRef.current.length === 0 || isTextReplacing) return;
    const nextFile = textRedoStackRef.current.pop();
    if (!nextFile) return;
    textUndoStackRef.current.push(file);
    setTextUndoCount(textUndoStackRef.current.length);
    setTextRedoCount(textRedoStackRef.current.length);
    setReplacementNotice(tTools('textRedoApplied'));
    setReplacementDiagnostics(null);
    showFileVersion(nextFile);
  }, [file, isTextReplacing, showFileVersion, tTools]);

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== iframeRef.current?.contentWindow ||
        event.data?.type !== 'awsomepdf:replace-existing-text' ||
        !file ||
        isTextReplacing
      ) {
        return;
      }

      const payload = event.data.payload as {
        page: number;
        text: string;
        replacementText: string;
        x: number;
        y: number;
        width: number;
        height: number;
        fitMode?: TextFitMode;
      };

      if (
        !payload ||
        !Number.isFinite(payload.page) ||
        !Number.isFinite(payload.x) ||
        !Number.isFinite(payload.y) ||
        !Number.isFinite(payload.width) ||
        !Number.isFinite(payload.height)
      ) {
        return;
      }

      setIsTextReplacing(true);
      setError(null);
      const match = {
        page: payload.page,
        text: payload.text,
        x: payload.x,
        y: payload.y,
        width: payload.width,
        height: payload.height,
        id: `inline-${payload.page}-${payload.x}-${payload.y}`,
        selected: true,
      };

      const result = await replaceExistingText(
        file,
        [match],
        {
          replacementText: payload.replacementText,
          fitMode: payload.fitMode ?? 'preserve',
        }
      );

      if (result.success && result.result) {
        handleExistingTextReplaced(
          result.result,
          result.replacedCount,
          result.diagnostics
        );
      } else {
        setError(result.error || 'Unable to edit the selected text.');
      }
      setIsTextReplacing(false);
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [file, handleExistingTextReplaced, isTextReplacing]);

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      <PDFViewerControls key={`viewer:${pdfUrl}`} iframe={editorFrame} locale={locale} />
      <AnnotationDrawingControls iframe={editorFrame} onError={handleAnnotationHistoryError} />
      <AnnotationHistoryControls iframe={editorFrame} undo={t('editPdf.undo')} redo={t('editPdf.redo')} onError={handleAnnotationHistoryError} />
      <LegacyEditorControls key={`controls:${pdfUrl}`} iframe={editorFrame} locale={locale} undo={t('editPdf.undo')} redo={t('editPdf.redo')} labels={annotationLabels} signatureLabels={signatureLabels} stampLabels={stampLabels} commentLabels={commentLabels}
        colorLabels={{ format: t('editPdf.colorFormat'), close: t('buttons.close') }}
        styleLabels={{ title: t('editPdf.annotationStyle'), color: tBookmark('color'), strokeWidth: t('editPdf.strokeWidth'), opacity: t('editPdf.opacity'), back: t('buttons.back'), format: t('editPdf.colorFormat'), close: t('buttons.close') }}
        exportError={tErrors('processingFailed')} />
      <AnnotationExportDialog key={`exports:${pdfUrl}`} iframe={editorFrame} locale={locale} closeLabel={t('buttons.close')} labels={{ title: t('buttons.download'), processing: t('status.processing'), complete: t('status.complete') }} />
      <LegacyTextEditDialog key={`text:${pdfUrl}`} iframe={editorFrame} locale={locale} cancelLabel={t('buttons.cancel')} applyLabel={t('buttons.apply')} />
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {file && pdfUrl && (
        <div className="space-y-4">
          {!hideHeaderCard && (
            <Card className="p-6"  >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <UIFile className="size-8 text-muted-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleClear}>
                  {t('buttons.clear') || 'Clear'}
                </Button>
              </div>
            </Card>
          )}

          {replacementNotice && (
            <Alert role="status"><CircleCheck aria-hidden="true" /><AlertDescription>{replacementNotice}</AlertDescription></Alert>
          )}

          <div
            className="flex flex-wrap items-center gap-2 rounded-md border border-border bg-background p-2"
            aria-label={tTools('textHistory')}
          >
            <span className="mr-1 text-xs font-medium text-muted-foreground">
              {tTools('textHistory')}:
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleTextUndo}
              disabled={textUndoCount === 0 || isTextReplacing}
            >
              <Undo2 aria-hidden="true" />{tTools('textUndo')}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleTextRedo}
              disabled={textRedoCount === 0 || isTextReplacing}
            >
              <Redo2 aria-hidden="true" />{tTools('textRedo')}
            </Button>
          </div>

          {replacementDiagnostics?.overflowDetected && (
            <Alert role="status"><Info aria-hidden="true" /><AlertDescription>{tTools('overflowAppliedWarning')}</AlertDescription></Alert>
          )}

          {replacementDiagnostics?.usedFallbackFont && (
            <Alert role="status"><Info aria-hidden="true" /><AlertDescription>{tTools('fallbackFontWarning')}</AlertDescription></Alert>
          )}

          {replacementDiagnostics?.hasDigitalSignatures && (
            <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
              <p className="text-sm font-medium">{tTools('signatureInvalidatedWarning')}</p>
            </AlertDescription></Alert>
          )}

          {/* PDF Viewer iframe */}
          <div className="relative border border-border rounded-md overflow-hidden bg-muted">
            <iframe
              ref={iframeRef}
              src={withBasePath(`/pdfjs-annotation-viewer/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`)}
              className="w-full h-[700px] border-0"
              title="PDF Editor"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
              onLoad={handleIframeLoad}
            />
            {!isEditorReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-background" role="status">
                <div className="text-center">
                  <Loader2 aria-hidden="true" className="mx-auto mb-2 size-8 animate-spin text-primary" />
                  <p className="text-sm text-muted-foreground">{t('status.loading') || 'Loading...'}</p>
                </div>
              </div>
            )}
            {isTextReplacing && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-background" role="status">
                <div className="px-5 py-4 text-center">
                  <Loader2 aria-hidden="true" className="mx-auto mb-2 size-8 animate-spin text-primary" />
                  <p className="text-sm font-medium">Updating PDF text…</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LegacyAnnotatorTool;
