'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Slider } from '@/components/ui/slider';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PDFPagePreview } from '../PDFPagePreview';
import { stitchScratchpadCanvas } from '@/lib/pdf/processors/pdf-scratchpad-canvas';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, RefreshCw, Columns } from 'lucide-react';

export interface PdfScratchpadCanvasToolProps {
  className?: string;
}

export function PdfScratchpadCanvasTool({ className = '' }: PdfScratchpadCanvasToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [padPosition, setPadPosition] = useState<'right' | 'bottom'>('right');
  const [padSize, setPadSize] = useState(200);
  const [gridType, setGridType] = useState<'grid' | 'ruled' | 'blank'>('grid');

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('output.pdf');
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  useEffect(() => () => { processingRun.current++; }, []);
  const resetOutput = () => { processingRun.current++; setResultBlob(null); setStatus('idle'); setError(null); };


  const handleFileSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    processingRun.current++;
    setStatus('idle');
    setFile(selectedFiles[0]);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleStitch = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await stitchScratchpadCanvas(
        [file],
        { padPosition, padSize, gridType },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Stitching scratchpad margins...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || (`${file.name.replace(/\.[^/.]+$/, '')}_scratchpad.pdf`));
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to stitch canvases.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error stitching canvases.');
        setStatus('error');
      }
    }
  };

  const handleClear = () => {
    focusUpload.current = true;
    resetOutput();
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
          label={t('pdfScratchpadCanvas.uploadLabel')}
          description={t('pdfScratchpadCanvas.uploadDescription')}
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
                  <Columns className="w-4 h-4 text-primary " />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>{t('buttons.reset')}</Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{resultBlob ? t('documentPreview.result') : t('documentPreview.source')}</p><PDFPagePreview file={resultBlob ?? file} label={resultBlob ? t('documentPreview.result') : t('documentPreview.source')} /></div>
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('pdfScratchpadCanvas.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <Label className="" htmlFor="pdfscratchpadcanvastool-field-1">{t('pdfScratchpadCanvas.padPositionLabel')}</Label>
                    <NativeSelect
                      value={padPosition}
                      onChange={(e) => { resetOutput(); setPadPosition(e.target.value as typeof padPosition); }}
                      className="w-full" id="pdfscratchpadcanvastool-field-1" aria-label={t('pdfScratchpadCanvas.padPositionLabel')} disabled={status === 'processing'}
                    >
                      <NativeSelectOption value="right">{t('pdfScratchpadCanvas.padPositionRight')}</NativeSelectOption>
                      <NativeSelectOption value="bottom">{t('pdfScratchpadCanvas.padPositionBottom')}</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <div className="space-y-1">
                    <Label className="flex justify-between" htmlFor="pdfscratchpadcanvastool-slider-1">
                      <span>{t('pdfScratchpadCanvas.padSizeLabel')}</span>
                      <span className="font-mono text-primary font-bold">{padSize} pt</span>
                    </Label>
                    <Slider
                      min={100}
                      max={350}
                      step={10}
                      value={[padSize]}
                      onValueChange={(values) => { resetOutput(); setPadSize(parseInt(String(values[0]))); }}
                      className="w-full cursor-pointer" id="pdfscratchpadcanvastool-slider-1" aria-label={t('pdfScratchpadCanvas.padSizeLabel')} disabled={status === 'processing'}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="" htmlFor="pdfscratchpadcanvastool-field-2">{t('pdfScratchpadCanvas.gridTypeLabel')}</Label>
                    <NativeSelect
                      value={gridType}
                      onChange={(e) => { resetOutput(); setGridType(e.target.value as typeof gridType); }}
                      className="w-full" id="pdfscratchpadcanvastool-field-2" aria-label={t('pdfScratchpadCanvas.gridTypeLabel')} disabled={status === 'processing'}
                    >
                      <NativeSelectOption value="grid">{t('pdfScratchpadCanvas.gridTypeGrid')}</NativeSelectOption>
                      <NativeSelectOption value="ruled">{t('pdfScratchpadCanvas.gridTypeRuled')}</NativeSelectOption>
                      <NativeSelectOption value="blank">{t('pdfScratchpadCanvas.gridTypeBlank')}</NativeSelectOption>
                    </NativeSelect>
                  </div>
                </div>
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
                    onClick={handleStitch}
                    disabled={status === 'processing'}
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'processing' ? 'animate-spin' : ''}`} />
                    {t('pdfScratchpadCanvas.processButton')}
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

export default PdfScratchpadCanvasTool;
