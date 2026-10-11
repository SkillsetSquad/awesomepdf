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
import { ImageFilePreview } from '../ImageFilePreview';
import { optimizeSignatureInk } from '@/lib/pdf/processors/signature-ink-optimizer';
import type { ProcessOutput } from '@/types/pdf';
import { Brush, Sliders } from 'lucide-react';

export interface SignatureInkOptimizerToolProps {
  className?: string;
}

export function SignatureInkOptimizerTool({ className = '' }: SignatureInkOptimizerToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [threshold, setThreshold] = useState(200);
  const [inkType, setInkType] = useState<'dark-ink' | 'red-stamp' | 'auto'>('auto');
  const [contrast, setContrast] = useState(1.5);

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

  const handleOptimize = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await optimizeSignatureInk(
        [file],
        {
          threshold,
          inkType,
          contrast,
        },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Purifying ink curves...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || (`${file.name.replace(/\.[^/.]+$/, '')}_ink_purified.png`));
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to purify ink stamps.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error purifying ink.');
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
          accept={['image/jpeg', 'image/png']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={status === 'processing'}
          label={t('signatureInkOptimizer.uploadLabel')}
          description={t('signatureInkOptimizer.uploadDescription')}
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
                  <Brush className="w-4 h-4 text-primary" />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('signatureInkOptimizer.clearButton')}
                </Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{resultBlob ? t('documentPreview.result') : t('documentPreview.source')}</p><ImageFilePreview file={resultBlob ?? file} label={file.name} /></div>
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('signatureInkOptimizer.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <Label className="" htmlFor="signatureinkoptimizertool-field-1">{t('signatureInkOptimizer.optimizerTypeLabel')}</Label>
                    <NativeSelect
                      value={inkType}
                      onChange={(e) => { resetOutput(); setInkType(e.target.value as typeof inkType); }}
                      className="w-full" id="signatureinkoptimizertool-field-1" aria-label={t('signatureInkOptimizer.optimizerTypeLabel')} disabled={status === 'processing'}
                    >
                      <NativeSelectOption value="auto">{t('signatureInkOptimizer.optimizerTypeAuto')}</NativeSelectOption>
                      <NativeSelectOption value="dark-ink">{t('signatureInkOptimizer.optimizerTypeDark')}</NativeSelectOption>
                      <NativeSelectOption value="red-stamp">{t('signatureInkOptimizer.optimizerTypeRed')}</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <div className="space-y-1">
                    <Label className="flex justify-between" htmlFor="signatureinkoptimizertool-slider-1">
                      <span>{t('signatureInkOptimizer.thresholdLabel')}</span>
                      <span className="font-mono text-primary font-bold">{threshold}</span>
                    </Label>
                    <Slider
                      min={100}
                      max={245}
                      value={[threshold]}
                      onValueChange={(values) => { resetOutput(); setThreshold(parseInt(String(values[0]))); }}
                      className="w-full cursor-pointer" id="signatureinkoptimizertool-slider-1" aria-label={t('signatureInkOptimizer.thresholdLabel')} disabled={status === 'processing'}
                    />
                  </div>

                  <div className="space-y-1">
                    <Label className="flex justify-between" htmlFor="signatureinkoptimizertool-slider-2">
                      <span>{t('signatureInkOptimizer.contrastLabel')}</span>
                      <span className="font-mono text-primary font-bold">{contrast.toFixed(1)}x</span>
                    </Label>
                    <Slider
                      min={1}
                      max={3}
                      step={0.1}
                      value={[contrast]}
                      onValueChange={(values) => { resetOutput(); setContrast(parseFloat(String(values[0]))); }}
                      className="w-full cursor-pointer" id="signatureinkoptimizertool-slider-2" aria-label={t('signatureInkOptimizer.contrastLabel')} disabled={status === 'processing'}
                    />
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
                    className="w-full py-4"
                    onClick={handleOptimize}
                    disabled={status === 'processing'}
                  >
                    {t('signatureInkOptimizer.processButton')}
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

export default SignatureInkOptimizerTool;
