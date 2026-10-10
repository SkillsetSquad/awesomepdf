'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Slider } from '@/components/ui/slider';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { stitchScratchpadCanvas, type PdfScratchpadCanvasOptions } from '@/lib/pdf/processors/pdf-scratchpad-canvas';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, Eye, RefreshCw, PenTool, Columns } from 'lucide-react';

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
  const [error, setError] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  const [showScratchpad, setShowScratchpad] = useState(true);

  const handleFileSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    setFile(selectedFiles[0]);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleStitch = async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await stitchScratchpadCanvas(
        [file],
        { padPosition, padSize, gridType },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Stitching scratchpad margins...');
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
        setError(output.error?.message || 'Failed to stitch canvases.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Error stitching canvases.');
        setStatus('error');
      }
    }
  };

  const handleClear = () => {
    setFile(null);
    setResultBlob(null);
    setStatus('idle');
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={status === 'processing'}
          label={t('pdfScratchpadCanvas.uploadLabel')}
          description={t('pdfScratchpadCanvas.uploadDescription')}
        />
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          {error}
        </AlertDescription></Alert>
      )}

      {file && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <Card  className="p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-between border-2 border-dashed">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <Columns className="w-4 h-4 text-primary animate-pulse" />
                  {t('pdfScratchpadCanvas.previewTitle')}
                </span>
                <Button variant="ghost" size="sm" onClick={() => setShowScratchpad(!showScratchpad)}>
                  {showScratchpad ? t('pdfScratchpadCanvas.foldPad') : t('pdfScratchpadCanvas.unfoldPad')}
                </Button>
              </div>

              {/* 3D notebook unfolding grid margin mockup */}
              <div className="flex-1 flex items-center justify-center p-6 perspective-[1000px]">
                <div className="flex items-center justify-center relative shadow-xl rounded-lg border border-border bg-background overflow-hidden min-h-[220px]">
                  {/* Left normal page content */}
                  <div className="w-40 h-52 p-4 space-y-3 border-r border-border">
                    <div className="h-4 w-3/4 bg-muted rounded" />
                    <div className="h-2 w-full bg-muted rounded" />
                    <div className="h-2 w-full bg-muted rounded" />
                    <div className="h-2 w-5/6 bg-muted rounded" />
                  </div>

                  {/* Right scratchpad fold margin */}
                  <div
                    className="h-52 bg-yellow-50/40 dark:bg-yellow-950/10 transition-all duration-500 ease-out origin-left flex items-center justify-center"
                    style={{
                      width: showScratchpad ? `${padSize / 1.5}px` : '0px',
                      transform: showScratchpad ? 'rotateY(0deg)' : 'rotateY(-90deg)',
                      opacity: showScratchpad ? 1 : 0,
                    }}
                  >
                    <div className="w-full h-full relative p-3">
                      {/* Draw grids decoratively */}
                      {gridType === 'grid' && (
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:10px_10px] opacity-60" />
                      )}
                      {gridType === 'ruled' && (
                        <div className="absolute inset-0 flex flex-col justify-between py-4">
                          <div className="border-b border-border h-0 w-full" />
                          <div className="border-b border-border h-0 w-full" />
                          <div className="border-b border-border h-0 w-full" />
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[8px] text-muted-foreground font-mono tracking-widest font-semibold uppercase">
                          {gridType} pad
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4 space-y-6">
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
                      onChange={(e) => setPadPosition(e.target.value as any)}
                      className="w-full" id="pdfscratchpadcanvastool-field-1" aria-label={t('pdfScratchpadCanvas.padPositionLabel')}
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
                      onValueChange={(values) => setPadSize(parseInt(String(values[0])))}
                      className="w-full cursor-pointer" id="pdfscratchpadcanvastool-slider-1" aria-label={t('pdfScratchpadCanvas.padSizeLabel')}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="" htmlFor="pdfscratchpadcanvastool-field-2">{t('pdfScratchpadCanvas.gridTypeLabel')}</Label>
                    <NativeSelect
                      value={gridType}
                      onChange={(e) => setGridType(e.target.value as any)}
                      className="w-full" id="pdfscratchpadcanvastool-field-2" aria-label={t('pdfScratchpadCanvas.gridTypeLabel')}
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
                    filename={`${file.name.replace(/\.[^/.]+$/, '')}_scratchpad.pdf`}
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
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}
    </div>
  );
}

export default PdfScratchpadCanvasTool;
