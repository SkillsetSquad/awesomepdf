'use client';
import { FolderOpen as UIEmojiFolderOpen, Image as UIEmojiImage } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { File as UIFile, Info as UIInfo, PenLine as UIPenLine, Upload as UIUpload } from 'lucide-react';

import { Input } from '@/components/ui/input';


import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { PDFViewerControls } from '../PDFViewerControls';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { withBasePath } from '@/lib/utils/path';
import { saveBlobFile } from '@/lib/tauri-bridge';
import { SignatureExtractorModal } from './SignatureExtractorModal';
import { SignatureLibraryModal } from './SignatureLibraryModal';
import { getSavedSignatures, saveSignature, dataUrlToBlob } from '@/lib/pdf/signature-storage';

export interface SignPDFToolProps {
  className?: string;
}

interface SignState {
  file: File | null;
  viewerReady: boolean;
}

type PdfViewerWindow = Window & {
  PDFViewerApplication?: {
    initializedPromise: Promise<void>;
    open: (args: { data: Uint8Array }) => Promise<void>;
    pdfDocument?: {
      annotationStorage: { size: number };
      saveDocument: () => Promise<Uint8Array | ArrayBuffer>;
    };
    pdfViewer?: {
      annotationEditorUIManager?: { commitOrRemove: () => void };
      annotationEditorMode: { mode: number };
    };
    eventBus?: {
      _on: (
        event: string,
        listener: () => void,
        options?: { once?: boolean }
      ) => void;
    };
  };
  pdfjsLib?: {
    AnnotationEditorType?: { NONE: number };
  };
  pdfcraftImportSignature?: (blob: Blob, name?: string) => Promise<boolean>;
};

const VIEWER_HTML = withBasePath('/pdfjs-viewer/viewer.html');

/**
 * SignPDFTool Component
 * Uses PDF.js viewer with native signature editor for comprehensive signing support.
 * Supports: draw (handwritten), type, and image signatures.
 */
export function SignPDFTool({ className = '' }: SignPDFToolProps) {
  const locale = useLocale();
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  const [signState, setSignState] = useState<SignState>({
    file: null,
    viewerReady: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [editorFrame, setEditorFrame] = useState<HTMLIFrameElement | null>(null);

  // Extractor & Library modals
  const [isExtractorOpen, setIsExtractorOpen] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const [savedSignatureCount, setSavedSignatureCount] = useState<number>(0);

  useEffect(() => {
    setSavedSignatureCount(getSavedSignatures().length);
  }, [isExtractorOpen, isLibraryOpen]);

  const handleSignatureExtracted = useCallback((res: { blob: Blob; dataUrl: string; name: string }) => {
    setSavedSignatureCount(getSavedSignatures().length);
    toast.success(`签名“${res.name}”已成功存入签名库！您可以在工具栏的签名笔或签名库中直接使用。`, { id: 'signature-import', duration: 6000 });
  }, []);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fileRef = useRef<File | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleQuickImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const img = new Image();
      img.onload = async () => {
        const name = file.name.replace(/\.[^/.]+$/, '');
        const saved = saveSignature({
          name: name || '签名图片',
          dataUrl,
          width: img.width || 300,
          height: img.height || 150,
          sourceDoc: '本地图片导入',
        });
        setSavedSignatureCount(getSavedSignatures().length);

        const viewer = iframeRef.current?.contentWindow as PdfViewerWindow | null;
        const activated = viewer?.pdfcraftImportSignature
          ? await viewer.pdfcraftImportSignature(dataUrlToBlob(dataUrl), saved.name)
          : false;
        toast.success(activated
          ? `签名“${saved.name}”已成功导入并在当前文档激活！可在页面点击放置并拖动边角自由缩放。`
          : `签名“${saved.name}”已存入签名库！打开 PDF 后即可随时选用盖章。`, { id: 'signature-import', duration: 6000 });
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  }, []);

  /**
   * Handle file selected
   */
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const file = files[0];
      fileRef.current = file;

      // Configure PDF.js preferences for signature editor
      try {
        const existingPrefsRaw = localStorage.getItem('pdfjs.preferences');
        const existingPrefs = existingPrefsRaw ? JSON.parse(existingPrefsRaw) : {};
        delete existingPrefs.annotationEditorMode;
        const newPrefs = {
          ...existingPrefs,
          enableSignatureEditor: true,
          enablePermissions: false,
        };
        localStorage.setItem('pdfjs.preferences', JSON.stringify(newPrefs));
      } catch (e) {
        console.warn('Could not set PDF.js preferences:', e);
      }

      setSignState({
        file,
        viewerReady: false,
      });
      setError(null);
    }
  }, []);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Enable signature tools in the viewer UI
   */
  const enableSignatureTools = useCallback((viewerWindow: PdfViewerWindow) => {
    const app = viewerWindow.PDFViewerApplication;
    if (!app?.eventBus) return;

    const doc = viewerWindow.document;
    const { eventBus } = app;

    const enable = () => {
      const editorModeButtons = doc.getElementById('editorModeButtons');
      editorModeButtons?.classList.remove('hidden');

      const editorSignature = doc.getElementById('editorSignature');
      editorSignature?.removeAttribute('hidden');

      const editorSignatureButton = doc.getElementById('editorSignatureButton') as HTMLButtonElement | null;
      if (editorSignatureButton) {
        editorSignatureButton.disabled = false;
      }

      const editorStamp = doc.getElementById('editorStamp');
      editorStamp?.removeAttribute('hidden');

      const editorStampButton = doc.getElementById('editorStampButton') as HTMLButtonElement | null;
      if (editorStampButton) {
        editorStampButton.disabled = false;
      }
    };

    eventBus._on('annotationeditoruimanager', enable);
    enable();
  }, []);

  /**
   * Load PDF into viewer via ArrayBuffer (avoids blob: URL issues on HTTP)
   */
  const handleIframeLoad = useCallback(async () => {
    setEditorFrame(iframeRef.current);
    const file = fileRef.current;
    const iframe = iframeRef.current;
    if (!file || !iframe?.contentWindow) return;

    try {
      const viewerWindow = iframe.contentWindow as PdfViewerWindow;
      const app = viewerWindow.PDFViewerApplication;
      if (!app) return;

      await app.initializedPromise;

      let documentLoaded = false;
      const onDocumentLoaded = () => {
        if (documentLoaded) return;
        documentLoaded = true;
        setSignState(prev => ({ ...prev, viewerReady: true }));
        enableSignatureTools(viewerWindow);
      };

      app.eventBus?._on('documentloaded', onDocumentLoaded, { once: true });

      const pdfData = new Uint8Array(await file.arrayBuffer());
      await app.open({ data: pdfData });

      if (!documentLoaded && app.pdfDocument) {
        onDocumentLoaded();
      }
    } catch (e) {
      console.error('Could not load PDF in viewer:', e);
      setError('Failed to load PDF in the viewer. Please try again.');
    }
  }, [enableSignatureTools]);

  /**
   * Save signed PDF using PDF.js native save (embeds signatures into the file)
   */
  const handleSave = useCallback(async () => {
    if (!signState.viewerReady || !iframeRef.current) {
      setError('Viewer not ready. Please wait for the PDF to load.');
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);

      const viewerWindow = iframeRef.current.contentWindow as PdfViewerWindow;
      const app = viewerWindow.PDFViewerApplication;

      if (!app?.pdfDocument) {
        setError('PDF viewer not initialized.');
        setIsProcessing(false);
        return;
      }

      const { pdfDocument, pdfViewer } = app;

      // Commit any signature still being placed/edited
      pdfViewer?.annotationEditorUIManager?.commitOrRemove();
      // Exit editor mode (PDF.js expects { mode }, not a raw number; DISABLE is invalid here)
      if (pdfViewer) {
        const editorNone =
          viewerWindow.pdfjsLib?.AnnotationEditorType?.NONE ?? 0;
        pdfViewer.annotationEditorMode = { mode: editorNone };
      }

      if (pdfDocument.annotationStorage.size === 0) {
        setError(
          'No signature found. Add a signature using the pen tool in the toolbar, then try again.'
        );
        setIsProcessing(false);
        return;
      }

      const rawPdfBytes = await pdfDocument.saveDocument();
      const pdfBytes =
        rawPdfBytes instanceof Uint8Array
          ? rawPdfBytes
          : new Uint8Array(rawPdfBytes);

      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      const downloadName = `signed_${signState.file?.name || 'document.pdf'}`;
      await saveBlobFile(blob, downloadName);

      setIsProcessing(false);
    } catch (err) {
      console.error('Failed to save signed PDF:', err);
      const msg = err instanceof Error ? err.message : 'Please try again.';
      setError(`Failed to save signed PDF: ${msg}`);
      setIsProcessing(false);
    }
  }, [signState.viewerReady, signState.file]);

  /**
   * Clear and start over
   */
  const handleClear = useCallback(() => {
    setEditorFrame(null);
    fileRef.current = null;
    setSignState({
      file: null,
      viewerReady: false,
    });
    setError(null);
  }, []);

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      <PDFViewerControls iframe={editorFrame} locale={locale} />
      {/* Quick Action Header: Signature Extractor & Library */}
      <Card className="flex-row flex-wrap items-center justify-between gap-4 p-4">
        <div className="flex items-center gap-3">
          <div className="size-10 shrink-0 flex items-center justify-center text-muted-foreground">
            <UIPenLine className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground flex flex-wrap items-center gap-2">
              <span>从已签署 PDF 提取签名 / 印章</span>
              <Badge variant="secondary">支持 Adobe Acrobat</Badge>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              上传已签名的 PDF，智能识别笔迹或印章并剥离纸张白底，一键存入签名库随时使用。
            </p>
          </div>
        </div>

        <Input
          ref={imageInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/svg+xml"
          className="hidden"
          onChange={handleQuickImageUpload}
        />

        <div className="flex flex-wrap items-center gap-2">
          <Dialog open={isLibraryOpen} onOpenChange={setIsLibraryOpen}><DialogTrigger asChild><Button
            variant="outline"
            size="sm"
            className="text-xs flex items-center gap-1.5"
          >
            <span><UIEmojiFolderOpen className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" /> 签名库</span>
            {savedSignatureCount > 0 && (
              <Badge variant="secondary">{savedSignatureCount}</Badge>
            )}
          </Button></DialogTrigger><SignatureLibraryModal
        isOpen={isLibraryOpen}
        onClose={() => setIsLibraryOpen(false)}
        viewerWindow={iframeRef.current?.contentWindow}
        onOpenExtractor={() => setIsExtractorOpen(true)}
      /></Dialog>

          <Button
            variant="outline"
            size="sm"
            onClick={() => imageInputRef.current?.click()}
            className="text-xs flex items-center gap-1.5"
          >
            <span><UIEmojiImage className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" /> 导入图片签名</span>
          </Button>

          <Dialog open={isExtractorOpen} onOpenChange={setIsExtractorOpen}><DialogTrigger asChild><Button
            variant="default"
            size="sm"
            className="text-xs flex items-center gap-1.5"
          >
            <UIUpload className="w-3.5 h-3.5" aria-hidden="true" />
            <span>从 PDF 提取</span>
          </Button></DialogTrigger><SignatureExtractorModal
        isOpen={isExtractorOpen}
        onClose={() => setIsExtractorOpen(false)}
        viewerWindow={iframeRef.current?.contentWindow}
        onSignatureExtracted={handleSignatureExtracted}
      /></Dialog>
        </div>
      </Card>

      {/* File Upload Area - Only show when no file */}
      {!signState.file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          disabled={isProcessing}
          label={tTools('signPdf.uploadLabel') || 'Upload PDF File'}
          description={tTools('signPdf.uploadDescription') || 'Drag and drop a PDF file to sign.'}
        />
      )}

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* PDF Viewer */}
      {signState.file && (
        <>
          {/* File Info & Clear Button */}
          <Card className="p-6" >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <UIFile className="w-8 h-8 text-red-500" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {signState.file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {(signState.file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClear}
                disabled={isProcessing}
              >
                {t('buttons.remove') || 'Remove'}
              </Button>
            </div>
          </Card>

          {/* Instructions */}
          <Card  className="">
            <div className="flex gap-3">
              <UIInfo className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-sm text-blue-700">
                <p className="font-medium mb-1">{tTools('signPdf.instructionsTitle') || 'How to Sign'}</p>
                <ol className="list-decimal list-inside space-y-1 text-blue-600">
                  <li>{tTools('signPdf.instruction1') || '点击工具栏中的签名笔工具（或使用上方快捷导入图片/从 PDF 提取）'}</li>
                  <li>{tTools('signPdf.instruction2') || '选择手写绘制、输入文本，或直接上传现成的透明 PNG 图片签名'}</li>
                  <li>{tTools('signPdf.instruction3') || '在页面点击放置签名，可随意拖拽四角自由调整大小（Resize）与旋转'}</li>
                  <li>{tTools('signPdf.instruction4') || '完成签署后，点击下方的“保存已签署 PDF”'}</li>
                </ol>
              </div>
            </div>
          </Card>

          {/* PDF.js Viewer Iframe */}
          <div className="border border-border rounded-lg overflow-hidden">
            <iframe
              key={signState.file.name + signState.file.lastModified}
              ref={iframeRef}
              src={VIEWER_HTML}
              onLoad={handleIframeLoad}
              className="w-full bg-muted"
              style={{ height: '600px', border: 'none' }}
              title="PDF Signature Editor"
            />
          </div>

          {/* Save Button */}
          <Card className="p-6" >
            <div className="flex gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleSave}
                disabled={!signState.viewerReady || isProcessing}
                loading={isProcessing}
              >
                {isProcessing
                  ? (t('status.processing') || 'Processing...')
                  : (tTools('signPdf.saveButton') || 'Save Signed PDF')
                }
              </Button>
            </div>
          </Card>
        </>
      )}




    </div>
  );
}

export default SignPDFTool;
