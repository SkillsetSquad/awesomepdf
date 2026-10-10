'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';


import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { resizePDFPagesUniform, type PdfPageResizerUniformOptions } from '@/lib/pdf/processors/pdf-page-resizer-uniform';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, Copy, LayoutGrid, Layers, RefreshCw, Zap } from 'lucide-react';

export interface PdfPageResizerUniformToolProps {
  className?: string;
}

export function PdfPageResizerUniformTool({ className = '' }: PdfPageResizerUniformToolProps) {
  const t = useTranslations('common');
  const [files, setFiles] = useState<File[]>([]);
  const [targetSize, setTargetSize] = useState<'A4' | 'A3' | 'Letter'>('A4');
  const [scaleMode, setScaleMode] = useState<'fit' | 'fill'>('fit');

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  const handleFilesSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    setFiles(selectedFiles);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleResize = async () => {
    if (files.length === 0) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await resizePDFPagesUniform(
        files,
        { targetSize, scaleMode },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Harmonizing page bounds...');
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to unify page dimensions.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Error resizing documents.');
        setStatus('error');
      }
    }
  };

  const handleClear = () => {
    setFiles([]);
    setResultBlob(null);
    setStatus('idle');
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {files.length === 0 && (
        <FileUploader
          accept={['application/pdf']}
          multiple={true}
          onFilesSelected={handleFilesSelected}
          onError={setError}
          disabled={status === 'processing'}
          label={t('pdfPageResizerUniform.uploadLabel')}
          description={t('pdfPageResizerUniform.uploadDescription')}
        />
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          {error}
        </AlertDescription></Alert>
      )}

      {files.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <Card  className="p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-between border-2 border-dashed">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-primary animate-pulse" />
                  {t('pdfPageResizerUniform.magnifierTitle')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('pdfTwoColumnReflower.clearButton')}
                </Button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                {/* 3D Stack of cards representation */}
                <div className="relative w-48 h-36 flex items-center justify-center">
                  <div className="absolute w-36 h-28 bg-background border border-border rounded-lg shadow-md transform rotate-12 scale-90 translate-y-3 z-10" />
                  <div className="absolute w-44 h-32 bg-background border border-border rounded-lg shadow-lg transform -rotate-6 translate-y-1 z-20 flex items-center justify-center">
                    <span className="text-[10px] text-muted-foreground font-mono">Letter / A3</span>
                  </div>
                  <div className="absolute w-40 h-28 border-2 border-primary bg-primary/5 rounded-lg shadow-xl z-30 flex flex-col items-center justify-center animate-pulse">
                    <Zap className="w-5 h-5 text-primary mb-1 animate-bounce" />
                    <span className="text-[10px] text-primary font-semibold tracking-widest">{targetSize} UNIFORM</span>
                  </div>
                </div>

                <div className="max-w-md text-center mt-6 space-y-2">
                  <h4 className="text-sm font-bold text-foreground">
                  {t('pdfPageResizerUniform.loadedFiles', { count: files.length })}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t('pdfPageResizerUniform.uniformHelp')}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('pdfPageResizerUniform.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    {t('pdfPageResizerUniform.targetSpecLabel')}
                    <NativeSelect
                      value={targetSize}
                      aria-label={t('pdfPageResizerUniform.targetSpecLabel')}
                      disabled={status === 'processing'}
                      onChange={(e) => setTargetSize(e.target.value as PdfPageResizerUniformOptions['targetSize'])}
                      className="w-full"
                    >
                      <NativeSelectOption value="A4">{t('pdfPageResizerUniform.specA4')}</NativeSelectOption>
                      <NativeSelectOption value="A3">{t('pdfPageResizerUniform.specA3')}</NativeSelectOption>
                      <NativeSelectOption value="Letter">{t('pdfPageResizerUniform.specLetter')}</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <div className="space-y-1.5">
                    {t('pdfPageResizerUniform.scaleModeLabel')}
                    <NativeSelect
                      value={scaleMode}
                      aria-label={t('pdfPageResizerUniform.scaleModeLabel')}
                      disabled={status === 'processing'}
                      onChange={(e) => setScaleMode(e.target.value as PdfPageResizerUniformOptions['scaleMode'])}
                      className="w-full"
                    >
                      <NativeSelectOption value="fit">{t('pdfPageResizerUniform.modeFit')}</NativeSelectOption>
                      <NativeSelectOption value="fill">{t('pdfPageResizerUniform.modeFill')}</NativeSelectOption>
                    </NativeSelect>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border mt-6">
                {status === 'complete' && resultBlob ? (
                  <DownloadButton
                    file={resultBlob}
                    filename={`${files[0].name.replace(/\.[^/.]+$/, '')}_uniform_${targetSize.toLowerCase()}.pdf`}
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
                    onClick={handleResize}
                    disabled={status === 'processing'}
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'processing' ? 'animate-spin' : ''}`} />
                    {t('pdfPageResizerUniform.processButton')}
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
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}
    </div>
  );
}

export default PdfPageResizerUniformTool;
