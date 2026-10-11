'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PDFPagePreview } from '../PDFPagePreview';
import { injectBatchBarcodes } from '@/lib/pdf/processors/batch-barcode-injector';
import type { ProcessOutput } from '@/types/pdf';
import { RefreshCcw, Sliders } from 'lucide-react';

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
  const [width] = useState(80);
  const [height] = useState(80);
  const [pageRange] = useState<'all' | 'first' | 'last'>('all');

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

  const handleInject = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

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
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Injecting code layers...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || (`${file.name.replace(/\.pdf$/i, '')}_barcoded.pdf`));
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to inject barcodes into PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error injecting barcodes.');
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
          label={t('batchBarcodeInjector.uploadLabel')}
          description={t('batchBarcodeInjector.uploadDescription')}
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
                  <RefreshCcw className="w-4 h-4 text-primary" />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('batchBarcodeInjector.clearButton')}
                </Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{resultBlob ? t('documentPreview.result') : t('documentPreview.source')}</p><PDFPagePreview file={resultBlob ?? file} label={resultBlob ? t('documentPreview.result') : t('documentPreview.source')} /></div>
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('batchBarcodeInjector.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <Label className="" htmlFor="batchbarcodeinjectortool-field-1">{t('batchBarcodeInjector.barcodeTypeLabel')}</Label>
                    <NativeSelect
                      value={barcodeType}
                      onChange={(e) => { resetOutput(); setBarcodeType(e.target.value as typeof barcodeType); }}
                      className="w-full" id="batchbarcodeinjectortool-field-1" aria-label={t('batchBarcodeInjector.barcodeTypeLabel')} disabled={status === 'processing'}
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
                      onChange={(e) => { resetOutput(); setValue(e.target.value); }}
                      placeholder="e.g. https://pdfcraft.org"
                      className="w-full" id="batchbarcodeinjectortool-field-2" aria-label={t('batchBarcodeInjector.barcodeValueLabel')} disabled={status === 'processing'}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="" htmlFor="batchbarcodeinjectortool-field-3">{t('batchBarcodeInjector.xPosLabel')}</Label>
                      <Input
                        type="number"
                        value={xPos}
                        onChange={(e) => { resetOutput(); setXPos(parseInt(e.target.value) || 0); }}
                        className="w-full" id="batchbarcodeinjectortool-field-3" aria-label={t('batchBarcodeInjector.xPosLabel')} disabled={status === 'processing'}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label className="" htmlFor="batchbarcodeinjectortool-field-4">{t('batchBarcodeInjector.yPosLabel')}</Label>
                      <Input
                        type="number"
                        value={yPos}
                        onChange={(e) => { resetOutput(); setYPos(parseInt(e.target.value) || 0); }}
                        className="w-full" id="batchbarcodeinjectortool-field-4" aria-label={t('batchBarcodeInjector.yPosLabel')} disabled={status === 'processing'}
                      />
                    </div>
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
          onCancel={() => { resetOutput(); }}
          showPercentage
        />
      )}
    </div>
  );
}

export default BatchBarcodeInjectorTool;
