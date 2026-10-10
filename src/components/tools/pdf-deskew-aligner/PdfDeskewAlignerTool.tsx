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
import { deskewPDFAligner, type PdfDeskewAlignerOptions } from '@/lib/pdf/processors/pdf-deskew-aligner';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, HelpCircle, Compass, RefreshCw, Layers } from 'lucide-react';

export interface PdfDeskewAlignerToolProps {
  className?: string;
}

export function PdfDeskewAlignerTool({ className = '' }: PdfDeskewAlignerToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [threshold, setThreshold] = useState(10);
  const [dpi, setDpi] = useState(150);

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

  const handleDeskew = async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await deskewPDFAligner(
        [file],
        { threshold, dpi },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Straightening scan axes...');
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
        setError(output.error?.message || 'Failed to align tilted PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Error aligning scan.');
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
          label={t('pdfDeskewAligner.uploadLabel')}
          description={t('pdfDeskewAligner.uploadDescription')}
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
                  <Compass className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '6s' }} />
                  {t('pdfDeskewAligner.compassTitle')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('pdfTwoColumnReflower.clearButton')}
                </Button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
                <div className="w-36 h-36 border-4 border-primary/20 rounded-full flex items-center justify-center relative shadow-inner">
                  <div className="absolute inset-2 border border-border rounded-full border-dashed" />
                  <div className="absolute w-1.5 h-16 bg-primary rounded-full origin-bottom -translate-y-8 animate-pulse transform" style={{ transform: 'rotate(-4deg)', transition: 'transform 0.5s ease-in-out' }} />
                  <Compass className="w-10 h-10 text-primary/45 absolute" />
                </div>
                <div className="max-w-md text-center mt-6 space-y-2">
                  <h4 className="text-sm font-bold text-foreground">
                    {file.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {t('pdfDeskewAligner.gyroHelp')}
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
                  <h3 className="text-sm font-semibold text-foreground">{t('pdfDeskewAligner.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <Label className="flex justify-between">
                      {t('pdfDeskewAligner.dpiLabel')}
                      <span className="font-mono text-primary font-bold">{dpi} DPI</span>
                    </Label>
                    <NativeSelect
                      value={dpi}
                      aria-label={t('pdfDeskewAligner.dpiLabel')}
                      disabled={status === 'processing'}
                      onChange={(e) => setDpi(parseInt(e.target.value))}
                      className="w-full"
                    >
                      <NativeSelectOption value="72">{t('pdfDeskewAligner.dpi72')}</NativeSelectOption>
                      <NativeSelectOption value="150">{t('pdfDeskewAligner.dpi150')}</NativeSelectOption>
                      <NativeSelectOption value="300">{t('pdfDeskewAligner.dpi300')}</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <div className="space-y-1">
                    <Label className="flex justify-between" htmlFor="pdfdeskewalignertool-slider-1">
                      {t('pdfDeskewAligner.thresholdLabel')}
                      <span className="font-mono text-primary font-bold">{threshold}°</span>
                    </Label>
                    <Slider
                      min={1}
                      max={30}
                      value={[threshold]}
                      onValueChange={(values) => setThreshold(parseInt(String(values[0])))}
                      className="w-full cursor-pointer" id="pdfdeskewalignertool-slider-1" aria-label={t('pdfDeskewAligner.thresholdLabel')}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border mt-6">
                {status === 'complete' && resultBlob ? (
                  <DownloadButton
                    file={resultBlob}
                    filename={`${file.name.replace(/\.[^/.]+$/, '')}_aligned.pdf`}
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
                    onClick={handleDeskew}
                    disabled={status === 'processing'}
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'processing' ? 'animate-spin' : ''}`} />
                    {t('pdfDeskewAligner.processButton')}
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

export default PdfDeskewAlignerTool;
