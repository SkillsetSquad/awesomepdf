'use client';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';


import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileText, Type, Pencil, Loader2, CircleCheck, AlertCircle } from 'lucide-react';
import { LegacyAnnotatorTool } from './LegacyAnnotatorTool';

export interface EditPDFToolProps {
  className?: string;
}

/**
 * EditPDFTool Component
 *
 * Provides professional PDF direct in-place editing capabilities (live reflow,
 * font & typography styling, image replacement, find & replace) powered by
 * EditCore WASM, with seamless fallback to classic annotation mode.
 */
export function EditPDFTool({ className = '' }: EditPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.editPdf');
  const locale = useLocale();

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [editMode, setEditMode] = useState<'direct' | 'annotator'>('direct');
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  // Restore pending edit file passed from other tools (e.g. OCR)
  useEffect(() => {
    if (file) return;

    // Check in-memory transfer first
    if (typeof window !== 'undefined' && (window as any).__PDFCRAFT_PENDING_EDIT_FILE__ instanceof File) {
      const pendingFile = (window as any).__PDFCRAFT_PENDING_EDIT_FILE__ as File;
      (window as any).__PDFCRAFT_PENDING_EDIT_FILE__ = null;
      try {
        window.sessionStorage.removeItem('pdfcraft_pending_edit_file');
      } catch {}
      setFile(pendingFile);
      return;
    }

    // Check sessionStorage fallback
    if (typeof window !== 'undefined') {
      try {
        const stored = window.sessionStorage.getItem('pdfcraft_pending_edit_file');
        if (stored) {
          window.sessionStorage.removeItem('pdfcraft_pending_edit_file');
          const parsed = JSON.parse(stored);
          if (parsed?.data) {
            fetch(parsed.data)
              .then(res => res.blob())
              .then(blob => {
                const restoredFile = new File([blob], parsed.name || 'document.pdf', {
                  type: parsed.type || 'application/pdf',
                });
                setFile(restoredFile);
              })
              .catch(() => {});
          }
        }
      } catch {}
    }
  }, [file]);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fileRef = useRef<File | null>(null);
  fileRef.current = file;

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setSavedNotice(null);
      setIsEditorReady(false);
    }
  }, []);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  const handleClear = useCallback(() => {
    setFile(null);
    setError(null);
    setIsEditorReady(false);
    setSavedNotice(null);
  }, []);

  // Send selected PDF to the Direct Editor iframe once loaded
  const sendPdfToIframe = useCallback(async () => {
    const currentFile = fileRef.current;
    if (!currentFile || !iframeRef.current?.contentWindow) return;

    try {
      const buffer = await currentFile.arrayBuffer();
      iframeRef.current.contentWindow.postMessage(
        {
          type: 'PDFCRAFT_LOAD_PDF',
          payload: {
            name: currentFile.name,
            buffer,
          },
        },
        '*'
      );
    } catch (err) {
      console.error('[EditPDFTool] Failed to transfer PDF buffer to editor:', err);
    }
  }, []);

  // Send current theme to the direct editor iframe
  const sendThemeToIframe = useCallback(() => {
    if (!iframeRef.current?.contentWindow) return;
    const isDark = document.documentElement.classList.contains('dark');
    iframeRef.current.contentWindow.postMessage(
      {
        type: 'PDFCRAFT_THEME_CHANGE',
        payload: { isDark },
      },
      '*'
    );
  }, []);

  // Listen for root document dark class changes and sync with iframe
  useEffect(() => {
    sendThemeToIframe();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          sendThemeToIframe();
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [sendThemeToIframe]);

  const handleIframeLoad = useCallback(() => {
    sendThemeToIframe();
    sendPdfToIframe();
    setTimeout(() => {
      setIsEditorReady(true);
    }, 1200);
  }, [sendPdfToIframe, sendThemeToIframe]);

  // Listen for messages from direct editor iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { type, fileName, sizeKb } = event.data || {};
      if (type === 'PDFCRAFT_EDITOR_READY') {
        sendThemeToIframe();
        sendPdfToIframe();
      } else if (type === 'PDFCRAFT_LOADED_SUCCESS') {
        setIsEditorReady(true);
      } else if (type === 'PDFCRAFT_SAVE_SUCCESS') {
        setSavedNotice(
          `${fileName || 'Document'} saved successfully! (${sizeKb ? sizeKb + ' KB' : 'downloaded'})`
        );
        setTimeout(() => setSavedNotice(null), 6000);
      } else if (type === 'PDFCRAFT_EXIT_EDITOR') {
        handleClear();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleClear, sendPdfToIframe, sendThemeToIframe]);

  return (
    <Tabs value={editMode} onValueChange={(value) => { if (value === 'direct' || value === 'annotator') setEditMode(value); }} className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <TabsList className="h-auto max-w-full flex-wrap">
              <TabsTrigger value="direct" className="whitespace-normal">
                <Type aria-hidden="true" />
                <span>{locale === 'zh' ? '直接编辑正文与图片' : 'Direct Content Edit'}</span>
              </TabsTrigger>
              <TabsTrigger value="annotator" className="whitespace-normal">
                <Pencil aria-hidden="true" />
                <span>{locale === 'zh' ? '经典批注与涂鸦' : 'Classic Annotator'}</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <FileUploader
            accept={['application/pdf', '.pdf']}
            multiple={false}
            maxFiles={1}
            onFilesSelected={handleFilesSelected}
            onError={handleUploadError}
            label={tTools('uploadLabel')}
            description={tTools('uploadDescription')}
          />
        </div>
      )}

      {error && (
        <Alert variant="destructive"><AlertCircle aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>
      )}

      {file && (
        <div className="space-y-4">
          {/* File summary & mode switcher */}
          <Card><CardContent>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <FileText className="size-6 shrink-0 text-muted-foreground" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-foreground truncate max-w-[240px] sm:max-w-md">
                    {file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>

              {/* Mode switch pills */}
              <TabsList className="h-auto max-w-full flex-wrap">
                <TabsTrigger value="direct" className="whitespace-normal">
                  <Type aria-hidden="true" />
                  <span>{locale === 'zh' ? '直接编辑正文与图片' : 'Direct Content Edit'}</span>
                </TabsTrigger>
                <TabsTrigger value="annotator" className="whitespace-normal">
                  <Pencil aria-hidden="true" />
                  <span>{locale === 'zh' ? '经典批注与涂鸦' : 'Classic Annotator'}</span>
                </TabsTrigger>
              </TabsList>

              <Button variant="ghost" size="sm" onClick={handleClear}>
                {t('buttons.clear') || 'Clear'}
              </Button>
            </div>
          </CardContent></Card>

          {savedNotice && (
            <Alert role="status"><CircleCheck aria-hidden="true" /><AlertDescription>{savedNotice}</AlertDescription></Alert>
          )}

          {/* Direct In-place Text/Image Editor Mode */}
          <TabsContent value="direct"><div className="relative overflow-hidden rounded-lg border bg-card">
              <iframe
                ref={iframeRef}
                src={`/direct-pdf-editor/index.html?lang=${encodeURIComponent(locale || 'en')}`}
                className="w-full h-[820px] border-0"
                title="PDF Editor"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads"
                allow="local-fonts"
                onLoad={handleIframeLoad}
              />
              {!isEditorReady && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80">
                  <Card><CardContent className="flex flex-col items-center gap-3 text-center" role="status">
                    <Loader2 className="size-6 animate-spin" aria-hidden="true" />
                    <p className="text-sm font-semibold text-foreground">
                      {t('status.loading') || 'Loading...'}
                    </p>
                  </CardContent></Card>
                </div>
              )}
            </div></TabsContent>

          {/* Classic Annotator Mode */}
          <TabsContent value="annotator"><LegacyAnnotatorTool
              file={file}
              onFileChange={setFile}
              hideHeaderCard={true}
              onClear={handleClear}
              className="border-0 shadow-none p-0"
            /></TabsContent>
        </div>
      )}
    </Tabs>
  );
}

export default EditPDFTool;
