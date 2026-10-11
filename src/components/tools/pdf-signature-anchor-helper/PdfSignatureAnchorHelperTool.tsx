'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PDFPagePreview } from '../PDFPagePreview';
import { loadPdfLib } from '@/lib/pdf/loader';


import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { injectSignatureAnchors } from '@/lib/pdf/processors/pdf-signature-anchor-helper';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, PenTool, RefreshCw } from 'lucide-react';

export interface PdfSignatureAnchorHelperToolProps {
  className?: string;
}

export function PdfSignatureAnchorHelperTool({ className = '' }: PdfSignatureAnchorHelperToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [anchorX, setAnchorX] = useState(0.8);
  const [anchorY, setAnchorY] = useState(0.8);
  const [anchorLabel, setAnchorLabel] = useState(t('pdfSignatureAnchorHelper.anchorLabelDefault'));

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  const [filename, setFilename] = useState('output.pdf');
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => () => { processingRun.current++; }, []);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const resetOutput = () => { processingRun.current++; setResultBlob(null); setStatus('idle'); setError(null); };

  const [pageSizes, setPageSizes] = useState<{ width: number; height: number }[]>([]);
  useEffect(() => {
    let active = true; setPageSizes([]);
    if (file) void (async () => {
      try { const { PDFDocument } = await loadPdfLib(); const pdf = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true }); if (active) setPageSizes(pdf.getPages().map(page => page.getSize())); }
      catch (error) { if (active) setError(error instanceof Error ? error.message : t('status.error')); }
    })();
    return () => { active = false; };
  }, [file, t]);

  const handleFileSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    processingRun.current++; setStatus('idle'); setPageNumber(1);
    setFile(selectedFiles[0]);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleInject = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await injectSignatureAnchors(
        [file],
        {
          anchorX,
          anchorY,
          pageNumber,
          anchorLabel,
        },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Injecting visual signature coordinates...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || `${file.name.replace(/\.pdf$/i, '')}_anchored.pdf`);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to inject signature guides.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error injecting guides.');
        setStatus('error');
      }
    }
  };

  const handleClear = () => {
    focusUpload.current = true; resetOutput();
    setFile(null);
    setResultBlob(null);
    setStatus('idle');
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <div ref={uploadRegion} tabIndex={-1}><FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={status === 'processing'}
          label={t('pdfSignatureAnchorHelper.uploadLabel')}
          description={t('pdfSignatureAnchorHelper.uploadDescription')}
        /></div>
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          {error}
        </AlertDescription></Alert>
      )}

      {file && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 min-w-0 space-y-4">
            <Card  className="p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-between border">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <PenTool className="w-4 h-4 text-primary " />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('buttons.reset')}
                </Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{resultBlob ? t('documentPreview.result') : t('documentPreview.source')}</p><PDFPagePreview disabled={status === 'processing'} file={resultBlob ?? file} label={resultBlob ? t('documentPreview.result') : t('documentPreview.source')} selectedPage={pageNumber} onPageChange={page => { resetOutput(); setPageNumber(page); }} onPointSelect={point => { if (status === 'processing') return; const size = pageSizes[point.page - 1]; if (!size) return; resetOutput(); setAnchorX(point.x / size.width); setAnchorY(1 - point.y / size.height); }} /></div>
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('pdfSignatureAnchorHelper.optionsTitle')}</h3>
                </div>

                <fieldset disabled={status === 'processing'} className="space-y-4">
                  <div className="space-y-2"><Label htmlFor="pdfSignatureAnchorHelper-page">{t('pdfSignatureAnchorHelper.targetPageLabel')}</Label><Input id="pdfSignatureAnchorHelper-page" type="number" min={1} value={pageNumber} onChange={event => { resetOutput(); setPageNumber(Math.max(1, parseInt(event.target.value) || 1)); }} /></div>
                  <div className="space-y-2"><Label htmlFor="pdfSignatureAnchorHelper-label">{t('pdfSignatureAnchorHelper.anchorLabelLabel')}</Label><Input id="pdfSignatureAnchorHelper-label" value={anchorLabel} onChange={event => { resetOutput(); setAnchorLabel(event.target.value); }} /></div>
                  <div className="space-y-2"><Label htmlFor="pdfSignatureAnchorHelper-anchorX">X (%)</Label><Input id="pdfSignatureAnchorHelper-anchorX" type="number" min={0} max={100} step={1} value={Number((anchorX * 100).toFixed(2))} onChange={event => { resetOutput(); setAnchorX(Math.max(0, Math.min(100, Number(event.target.value) || 0)) / 100); }} /></div>
                  <div className="space-y-2"><Label htmlFor="pdfSignatureAnchorHelper-anchorY">Y (%)</Label><Input id="pdfSignatureAnchorHelper-anchorY" type="number" min={0} max={100} step={1} value={Number((anchorY * 100).toFixed(2))} onChange={event => { resetOutput(); setAnchorY(Math.max(0, Math.min(100, Number(event.target.value) || 0)) / 100); }} /></div>
                </fieldset>
              </div>

              <div className="pt-6 border-t border-border mt-6">
                {status === 'complete' && resultBlob ? (
                  <DownloadButton
                    file={resultBlob}
                    filename={filename}
                    variant="default"
                    size="lg"
                    className="w-full py-4"
                    showFileSize
                  />
                ) : (
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full py-4 flex items-center justify-center gap-2"
                    onClick={handleInject}
                    disabled={status === 'processing'}
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'processing' ? 'animate-spin' : ''}`} />
                    {t('pdfSignatureAnchorHelper.processButton')}
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}

      {status === 'processing' && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={() => { resetOutput(); }}
          showPercentage
        />
      )}
    </div>
  );
}

export default PdfSignatureAnchorHelperTool;
