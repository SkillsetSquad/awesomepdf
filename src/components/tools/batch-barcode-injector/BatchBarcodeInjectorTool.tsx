'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { injectBatchBarcodes, type BatchBarcodeOptions } from '@/lib/pdf/processors/batch-barcode-injector';
import type { ProcessOutput } from '@/types/pdf';
import { RefreshCcw, Sliders, CheckSquare, Sparkles } from 'lucide-react';

export interface BatchBarcodeInjectorToolProps {
  className?: string;
}

export function BatchBarcodeInjectorTool({ className = '' }: BatchBarcodeInjectorToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [barcodeType, setBarcodeType] = useState<'qr' | 'code128'>('qr');
  const [value, setValue] = useState('https://pdfcraft.org');
  const [xPos, setXPos] = useState(50);
  const [yPos, setYPos] = useState(50);
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(80);
  const [pageRange, setPageRange] = useState<'all' | 'first' | 'last'>('all');

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

  const handleInject = async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    // Audio scanning effect
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.frequency.setValueAtTime(1000, audioCtx.currentTime); // 1kHz beep
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch {
      // Audio context might be blocked or unsupported, ignore silently
    }

    try {
      const output: ProcessOutput = await injectBatchBarcodes(
        [file],
        {
          barcodeType,
          value,
          x: xPos,
          y: yPos,
          width,
          height,
          pages: pageRange,
        },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Injecting code layers...');
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
        setError(output.error?.message || 'Failed to inject barcodes into PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Error injecting barcodes.');
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
          label={t('batchBarcodeInjector.uploadLabel')}
          description={t('batchBarcodeInjector.uploadDescription')}
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
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-bold text-zinc-500 flex items-center gap-1.5">
                  <RefreshCcw className="w-4 h-4 text-primary" />
                  {t('batchBarcodeInjector.previewTitle')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('batchBarcodeInjector.clearButton')}
                </Button>
              </div>

              {/* Align coordinates mockup */}
              <div className="flex-1 flex flex-col items-center justify-center p-6 relative bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 rounded-2xl">
                <div className="w-48 h-64 bg-white dark:bg-zinc-950 border-2 border-primary rounded shadow-xl flex items-center justify-center relative">
                  {/* Absolute positioning of QR mockup based on percentage/scaled value */}
                  <div
                    className="absolute border border-dashed border-primary bg-primary/10 rounded flex items-center justify-center text-[10px] font-black text-primary animate-pulse"
                    style={{
                      left: `${Math.min(75, (xPos / 595.28) * 100)}%`,
                      bottom: `${Math.min(75, (yPos / 841.89) * 100)}%`,
                      width: `${Math.min(60, (width / 595.28) * 200)}px`,
                      height: `${Math.min(60, (height / 841.89) * 260)}px`,
                    }}
                  >
                    [QR CODE]
                  </div>
                </div>
                <span className="text-[10px] text-zinc-400 mt-2">
                  {t('batchBarcodeInjector.gridLabel', { xPos, yPos })}
                </span>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-zinc-150 dark:border-zinc-800 pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200">{t('batchBarcodeInjector.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <Label className="" htmlFor="batchbarcodeinjectortool-field-1">{t('batchBarcodeInjector.barcodeTypeLabel')}</Label>
                    <NativeSelect
                      value={barcodeType}
                      onChange={(e) => setBarcodeType(e.target.value as any)}
                      className="w-full" id="batchbarcodeinjectortool-field-1" aria-label={t('batchBarcodeInjector.barcodeTypeLabel')}
                    >
                      <NativeSelectOption value="qr">{t('batchBarcodeInjector.barcodeTypeQr')}</NativeSelectOption>
                      <NativeSelectOption value="code128">{t('batchBarcodeInjector.barcodeTypeBar')}</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="" htmlFor="batchbarcodeinjectortool-field-2">{t('batchBarcodeInjector.barcodeValueLabel')}</Label>
                    <Input
                      type="text"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      placeholder="e.g. https://pdfcraft.org"
                      className="w-full" id="batchbarcodeinjectortool-field-2" aria-label={t('batchBarcodeInjector.barcodeValueLabel')}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="" htmlFor="batchbarcodeinjectortool-field-3">{t('batchBarcodeInjector.xPosLabel')}</Label>
                      <Input
                        type="number"
                        value={xPos}
                        onChange={(e) => setXPos(parseInt(e.target.value) || 0)}
                        className="w-full" id="batchbarcodeinjectortool-field-3" aria-label={t('batchBarcodeInjector.xPosLabel')}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="" htmlFor="batchbarcodeinjectortool-field-4">{t('batchBarcodeInjector.yPosLabel')}</Label>
                      <Input
                        type="number"
                        value={yPos}
                        onChange={(e) => setYPos(parseInt(e.target.value) || 0)}
                        className="w-full" id="batchbarcodeinjectortool-field-4" aria-label={t('batchBarcodeInjector.yPosLabel')}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-150 dark:border-zinc-800 mt-6">
                {status === 'complete' && resultBlob ? (
                  <DownloadButton
                    file={resultBlob}
                    filename={`${file.name.replace(/\.pdf$/i, '')}_barcoded.pdf`}
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
                    onClick={handleInject}
                    disabled={status === 'processing'}
                  >
                    {t('batchBarcodeInjector.processButton')}
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

export default BatchBarcodeInjectorTool;
