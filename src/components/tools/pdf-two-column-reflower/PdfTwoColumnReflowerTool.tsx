'use client';
import { ArrowRight as UIEmojiArrowRight } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Slider } from '@/components/ui/slider';

import { NativeSelect } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { reflowTwoColumnPDF, type PdfTwoColumnReflowerOptions } from '@/lib/pdf/processors/pdf-two-column-reflower';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, BookOpen, Layers, Sparkles, RefreshCw } from 'lucide-react';

export interface PdfTwoColumnReflowerToolProps {
  className?: string;
}

export function PdfTwoColumnReflowerTool({ className = '' }: PdfTwoColumnReflowerToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [middleGapRatio, setMiddleGapRatio] = useState(0.5);
  const [horizontalReading, setHorizontalReading] = useState(false);

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  const handleFileSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    setFile(selectedFiles[0]);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleReflow = async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await reflowTwoColumnPDF(
        [file],
        { middleGapRatio, horizontalReading },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Rearranging layout grids...');
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
        setError(output.error?.message || 'Failed to reflow double columns.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Error reflowing layout.');
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
          label={t('pdfTwoColumnReflower.uploadLabel')}
          description={t('pdfTwoColumnReflower.uploadDescription')}
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
                  <BookOpen className="w-4 h-4 text-primary" />
                  {t('pdfTwoColumnReflower.previewTitle')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('pdfTwoColumnReflower.clearButton')}
                </Button>
              </div>

              <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-8 p-6 relative">
                {/* Visual rendering of Before and After with nice perspective */}
                <div className="w-44 h-56 bg-background border border-border rounded-xl p-3 shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300 relative flex flex-col gap-2">
                  <span className="absolute top-2 right-2 text-[8px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-mono font-bold">BEFORE</span>
                  <div className="h-6 w-1/2 bg-muted rounded" />
                  <div className="flex-1 grid grid-cols-2 gap-2 mt-2">
                    <div className="border-r border-dashed border-border space-y-1.5 pr-1">
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-3/4 bg-muted rounded" />
                      <div className="h-2 w-full bg-muted rounded" />
                    </div>
                    <div className="space-y-1.5 pl-1">
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-full bg-muted rounded" />
                      <div className="h-2 w-2/3 bg-muted rounded" />
                    </div>
                  </div>
                </div>

                <div className="text-foreground text-2xl font-bold animate-pulse"><UIEmojiArrowRight className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" /></div>

                <div className="w-44 h-56 bg-background border border-border rounded-xl p-3 shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 relative flex flex-col gap-2">
                  <span className="absolute top-2 right-2 text-[8px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-mono font-bold">AFTER</span>
                  <div className="h-6 w-1/2 bg-muted rounded" />
                  <div className="flex-1 space-y-2 mt-2">
                    <div className="space-y-1">
                      <div className="h-2 w-full bg-primary/10 rounded" />
                      <div className="h-2 w-3/4 bg-primary/10 rounded" />
                    </div>
                    <div className="border-t border-dashed border-primary/20 my-1" />
                    <div className="space-y-1">
                      <div className="h-2 w-full bg-primary/10 rounded" />
                      <div className="h-2 w-2/3 bg-primary/10 rounded" />
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
                  <h3 className="text-sm font-semibold text-foreground">{t('pdfTwoColumnReflower.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <Label className="flex justify-between" htmlFor="pdftwocolumnreflowertool-slider-1">
                      {t('pdfTwoColumnReflower.splitRatio')}
                      <span className="font-mono text-primary font-bold">{(middleGapRatio * 100).toFixed(0)}%</span>
                    </Label>
                    <Slider
                      min={0.4}
                      max={0.6}
                      step={0.01}
                      value={[middleGapRatio]}
                      onValueChange={(values) => setMiddleGapRatio(parseFloat(String(values[0])))}
                      className="w-full cursor-pointer" id="pdftwocolumnreflowertool-slider-1" aria-label={t('pdfTwoColumnReflower.splitRatio')}
                    />
                  </div>

                  <div className="space-y-1.5">
                    {t('pdfTwoColumnReflower.readingFlowLabel')}
                    <NativeSelect
                      value={horizontalReading ? 'horizontal' : 'vertical'}
                      onChange={(e) => setHorizontalReading(e.target.value === 'horizontal')}
                      className="w-full"
                    >
                      {t('pdfTwoColumnReflower.flowVertical')}
                      {t('pdfTwoColumnReflower.flowHorizontal')}
                    </NativeSelect>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border mt-6">
                {status === 'complete' && resultBlob ? (
                  <DownloadButton
                    file={resultBlob}
                    filename={`${file.name.replace(/\.[^/.]+$/, '')}_single_column.pdf`}
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
                    onClick={handleReflow}
                    disabled={status === 'processing'}
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'processing' ? 'animate-spin' : ''}`} />
                    {t('pdfTwoColumnReflower.processButton')}
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

export default PdfTwoColumnReflowerTool;
