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
import { ImageFilePreview } from '../ImageFilePreview';
import { prepressPhotoTiling } from '@/lib/pdf/processors/photo-tiling-prepress';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, Layout, RefreshCw } from 'lucide-react';

export interface PhotoTilingPrepressToolProps {
  className?: string;
}

export function PhotoTilingPrepressTool({ className = '' }: PhotoTilingPrepressToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [photoSpec, setPhotoSpec] = useState<'1-inch' | '2-inch'>('1-inch');
  const [paperSize, setPaperSize] = useState<'5-inch' | '6-inch'>('6-inch');
  const [gapPt, setGapPt] = useState(8);

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

  const handlePrepress = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setResultBlob(null);
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await prepressPhotoTiling(
        [file],
        { photoSpec, paperSize, gapPt },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || 'Engraving prepress tiled grids...');
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setFilename(output.filename || ("prepress_photos_matrix.pdf"));
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to arrange photo prepress.');
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : 'Error processing photo tiling.');
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
          accept={['image/png', 'image/jpeg', 'image/jpg']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={status === 'processing'}
          label={t('photoTilingPrepress.uploadLabel')}
          description={t('photoTilingPrepress.uploadDescription')}
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
              <div className="flex items-center justify-between pb-3 border-b border-border ">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1.5">
                  <Layout className="w-4 h-4 text-primary" />
                  {resultBlob ? t('documentPreview.result') : t('documentPreview.source')}
                </span>
                <Button variant="ghost" size="sm" className="" onClick={handleClear} disabled={status === 'processing'}>
                  {t('photoTilingPrepress.clearButton')}
                </Button>
              </div>

              <div className="min-w-0 space-y-3 pt-4"><p className="break-words text-sm font-medium">{file.name}</p><p className="text-sm text-muted-foreground">{resultBlob ? t('documentPreview.result') : t('documentPreview.source')}</p><>{resultBlob ? <PDFPagePreview file={resultBlob} label={t('documentPreview.result')} /> : <ImageFilePreview file={file} label={file.name} />}</></div>
            </Card>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-border pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{t('photoTilingPrepress.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <Label className="" htmlFor="phototilingprepresstool-field-1">{t('photoTilingPrepress.photoSpecLabel')}</Label>
                    <NativeSelect
                      value={photoSpec}
                      onChange={(e) => { resetOutput(); setPhotoSpec(e.target.value as typeof photoSpec); }}
                      className="w-full" id="phototilingprepresstool-field-1" aria-label={t('photoTilingPrepress.photoSpecLabel')} disabled={status === 'processing'}
                    >
                      <NativeSelectOption value="1-inch">{t('photoTilingPrepress.photoSpec1Inch')}</NativeSelectOption>
                      <NativeSelectOption value="2-inch">{t('photoTilingPrepress.photoSpec2Inch')}</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="" htmlFor="phototilingprepresstool-field-2">{t('photoTilingPrepress.paperSizeLabel')}</Label>
                    <NativeSelect
                      value={paperSize}
                      onChange={(e) => { resetOutput(); setPaperSize(e.target.value as typeof paperSize); }}
                      className="w-full" id="phototilingprepresstool-field-2" aria-label={t('photoTilingPrepress.paperSizeLabel')} disabled={status === 'processing'}
                    >
                      <NativeSelectOption value="5-inch">{t('photoTilingPrepress.paperSize5Inch')}</NativeSelectOption>
                      <NativeSelectOption value="6-inch">{t('photoTilingPrepress.paperSize6Inch')}</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  <div className="space-y-1">
                    <Label className="flex justify-between" htmlFor="phototilingprepresstool-slider-1">
                      <span>{t('photoTilingPrepress.gapPtLabel')}</span>
                      <span className="font-mono text-primary font-bold">{gapPt} pt</span>
                    </Label>
                    <Slider
                      min={2}
                      max={20}
                      value={[gapPt]}
                      onValueChange={(values) => { resetOutput(); setGapPt(parseInt(String(values[0]))); }}
                      className="w-full cursor-pointer" id="phototilingprepresstool-slider-1" aria-label={t('photoTilingPrepress.gapPtLabel')} disabled={status === 'processing'}
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
                    className="w-full py-4 flex items-center justify-center gap-2"
                    onClick={handlePrepress}
                    disabled={status === 'processing'}
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'processing' ? 'animate-spin' : ''}`} />
                    {t('photoTilingPrepress.processButton')}
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

export default PhotoTilingPrepressTool;
