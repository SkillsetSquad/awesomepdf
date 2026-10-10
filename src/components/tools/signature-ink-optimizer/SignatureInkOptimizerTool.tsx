'use client';
import { Palette as UIEmojiPalette } from 'lucide-react';

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
import { optimizeSignatureInk, type SignatureInkOptions } from '@/lib/pdf/processors/signature-ink-optimizer';
import type { ProcessOutput } from '@/types/pdf';
import { Brush, Sliders, CheckSquare, Sparkles } from 'lucide-react';

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
  const [error, setError] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  const handleFileSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    setFile(selectedFiles[0]);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleOptimize = async () => {
    if (!file) return;
    cancelledRef.current = false;
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
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Purifying ink curves...');
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
        setError(output.error?.message || 'Failed to purify ink stamps.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Error purifying ink.');
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
          accept={['image/jpeg', 'image/png']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={status === 'processing'}
          label={t('signatureInkOptimizer.uploadLabel')}
          description={t('signatureInkOptimizer.uploadDescription')}
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
            <Card  className="p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-between border-2">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <Brush className="w-4 h-4 text-primary" />
                  {t('signatureInkOptimizer.previewTitle')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('signatureInkOptimizer.clearButton')}
                </Button>
              </div>

              {/* Dynamic canvas backdrop melting wave effect mockup */}
              <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                {status === 'processing' && (
                  <div className="absolute inset-0 bg-primary/5 flex flex-col items-center justify-center pointer-events-none">
                    <Sparkles className="w-12 h-12 text-primary animate-bounce" />
                  </div>
                )}
                <div className="max-w-md text-center space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto text-primary">
                    <UIEmojiPalette className="inline-block size-4 shrink-0 align-middle" aria-hidden="true" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground">
                    {file.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t('signatureInkOptimizer.emptyStateDescription')}
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
                  <h3 className="text-sm font-semibold text-foreground">{t('signatureInkOptimizer.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <Label className="" htmlFor="signatureinkoptimizertool-field-1">{t('signatureInkOptimizer.optimizerTypeLabel')}</Label>
                    <NativeSelect
                      value={inkType}
                      onChange={(e) => setInkType(e.target.value as any)}
                      className="w-full" id="signatureinkoptimizertool-field-1" aria-label={t('signatureInkOptimizer.optimizerTypeLabel')}
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
                      onValueChange={(values) => setThreshold(parseInt(String(values[0])))}
                      className="w-full cursor-pointer" id="signatureinkoptimizertool-slider-1" aria-label={t('signatureInkOptimizer.thresholdLabel')}
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
                      onValueChange={(values) => setContrast(parseFloat(String(values[0])))}
                      className="w-full cursor-pointer" id="signatureinkoptimizertool-slider-2" aria-label={t('signatureInkOptimizer.contrastLabel')}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border mt-6">
                {status === 'complete' && resultBlob ? (
                  <DownloadButton
                    file={resultBlob}
                    filename={`${file.name.replace(/\.[^/.]+$/, '')}_ink_purified.png`}
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
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}
    </div>
  );
}

export default SignatureInkOptimizerTool;
