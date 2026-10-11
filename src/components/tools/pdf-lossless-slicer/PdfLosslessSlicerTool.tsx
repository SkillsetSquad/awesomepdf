'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PDFPagePreview } from '../PDFPagePreview';


import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { slicePDFLossless } from '@/lib/pdf/processors/pdf-lossless-slicer';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, Scissors, RefreshCw } from 'lucide-react';

export interface PdfLosslessSlicerToolProps {
  className?: string;
}

export function PdfLosslessSlicerTool({ className = '' }: PdfLosslessSlicerToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [sliceX, setSliceX] = useState(0.1);
  const [sliceY, setSliceY] = useState(0.1);
  const [sliceWidth, setSliceWidth] = useState(0.8);
  const [sliceHeight, setSliceHeight] = useState(0.8);

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

  const handleFileSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    processingRun.current++; setStatus('idle'); setPageNumber(1);
    setFile(selectedFiles[0]);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleSlicing = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await slicePDFLossless(
        [file],
        {
          sliceX,
          sliceY,
          sliceWidth,
          sliceHeight,
          pageNumber,
        },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Engraving laser slicing beams...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || `${file.name.replace(/\.pdf$/i, '')}_sliced.pdf`);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to slice document.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error slicing blueprint.');
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
          label={t('pdfLosslessSlicer.uploadLabel')}
          description={t('pdfLosslessSlicer.uploadDescription')}
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
                  <Scissors className="w-4 h-4 text-primary " />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('buttons.reset')}
                </Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{resultBlob ? t('documentPreview.result') : t('documentPreview.source')}</p><PDFPagePreview disabled={status === 'processing'} file={resultBlob ?? file} label={resultBlob ? t('documentPreview.result') : t('documentPreview.source')} selectedPage={resultBlob ? undefined : pageNumber} onPageChange={page => { resetOutput(); setPageNumber(page); }}  /></div>
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('pdfLosslessSlicer.optionsTitle')}</h3>
                </div>

                <fieldset disabled={status === 'processing'} className="space-y-4">
                  <div className="space-y-2"><Label htmlFor="pdfLosslessSlicer-page">{t('pdfLosslessSlicer.targetPageLabel')}</Label><Input id="pdfLosslessSlicer-page" type="number" min={1} value={pageNumber} onChange={event => { resetOutput(); setPageNumber(Math.max(1, parseInt(event.target.value) || 1)); }} /></div>
                  <div className="space-y-2"><Label htmlFor="pdfLosslessSlicer-sliceX">X (%)</Label><Input id="pdfLosslessSlicer-sliceX" type="number" min={0} max={100} step={1} value={Number((sliceX * 100).toFixed(2))} onChange={event => { resetOutput(); setSliceX(Math.max(0, Math.min(100, Number(event.target.value) || 0)) / 100); }} /></div>
                  <div className="space-y-2"><Label htmlFor="pdfLosslessSlicer-sliceY">Y (%)</Label><Input id="pdfLosslessSlicer-sliceY" type="number" min={0} max={100} step={1} value={Number((sliceY * 100).toFixed(2))} onChange={event => { resetOutput(); setSliceY(Math.max(0, Math.min(100, Number(event.target.value) || 0)) / 100); }} /></div>
                  <div className="space-y-2"><Label htmlFor="pdfLosslessSlicer-sliceWidth">{t('pdfLosslessSlicer.sliceWidth', { percent: (sliceWidth * 100).toFixed(0) })}</Label><Input id="pdfLosslessSlicer-sliceWidth" type="number" min={0} max={100} step={1} value={Number((sliceWidth * 100).toFixed(2))} onChange={event => { resetOutput(); setSliceWidth(Math.max(0, Math.min(100, Number(event.target.value) || 0)) / 100); }} /></div>
                  <div className="space-y-2"><Label htmlFor="pdfLosslessSlicer-sliceHeight">{t('pdfLosslessSlicer.sliceHeight', { percent: (sliceHeight * 100).toFixed(0) })}</Label><Input id="pdfLosslessSlicer-sliceHeight" type="number" min={0} max={100} step={1} value={Number((sliceHeight * 100).toFixed(2))} onChange={event => { resetOutput(); setSliceHeight(Math.max(0, Math.min(100, Number(event.target.value) || 0)) / 100); }} /></div>
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
                    onClick={handleSlicing}
                    disabled={status === 'processing'}
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'processing' ? 'animate-spin' : ''}`} />
                    {t('pdfLosslessSlicer.processButton')}
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

export default PdfLosslessSlicerTool;
