'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CircleAlert, FileCheck, ImageIcon, SlidersHorizontal } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Slider } from '@/components/ui/slider';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { boostHandwritingInkContrast, type HandwritingInkContrastBoosterOptions } from '@/lib/pdf/processors/handwriting-ink-contrast-booster';

export interface HandwritingInkContrastBoosterToolProps { className?: string }

function usePreviewUrl(blob: Blob | null) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    if (!blob) { setUrl(null); return; }
    const next = URL.createObjectURL(blob); setUrl(next);
    return () => URL.revokeObjectURL(next);
  }, [blob]);
  return url;
}

export function HandwritingInkContrastBoosterTool({ className = '' }: HandwritingInkContrastBoosterToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [threshold, setThreshold] = useState(200);
  const [contrast, setContrast] = useState(1.5);
  const [inkType, setInkType] = useState<HandwritingInkContrastBoosterOptions['inkType']>('auto');
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('ink_boosted.png');
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  useEffect(() => () => { processingRun.current++; }, []);
  const sourceUrl = usePreviewUrl(file), resultUrl = usePreviewUrl(result);
  const isProcessing = status === 'processing';
  const clearOutput = () => { processingRun.current++; setResult(null); setStatus('idle'); setError(null); setProgress(0); setProgressMessage(''); };
  const handleUpload = (files: File[]) => { if (files[0]) { clearOutput(); setFile(files[0]); } };
  const handleProcess = async () => {
    if (!file || isProcessing) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing')); setResult(null); setError(null);
    try {
      const output = await boostHandwritingInkContrast([file], { threshold, contrast, inkType }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setFilename(output.filename || `${file.name.replace(/\.[^/.]+$/, '')}_ink_boosted.png`); setStatus('complete');
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };

  return <div className={`space-y-6 ${className}`.trim()}>
    {!file && <FileUploader accept={['image/png', 'image/jpeg', 'image/jpg', '.png', '.jpg', '.jpeg']} multiple={false} maxFiles={1}
      onFilesSelected={handleUpload} onError={setError} label={t('handwritingInkContrastBooster.uploadLabel')} description={t('handwritingInkContrastBooster.uploadDescription')} />}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <>
      <Card className="flex flex-row items-center justify-between gap-4 p-4"><div className="flex min-w-0 items-center gap-3"><ImageIcon aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
        <p className="truncate text-sm font-medium" title={file.name}>{file.name}</p></div>
        <Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { clearOutput(); setFile(null); }}>{t('handwritingInkContrastBooster.clearButton')}</Button>
      </Card>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-base font-semibold">{t('handwritingInkContrastBooster.optionsTitle')}</h3>
          <div className="space-y-2"><Label htmlFor={`${id}-type`}>{t('handwritingInkContrastBooster.targetTypeLabel')}</Label>
            <NativeSelect id={`${id}-type`} value={inkType} disabled={isProcessing} onChange={event => { setInkType(event.target.value as HandwritingInkContrastBoosterOptions['inkType']); clearOutput(); }}>
              <NativeSelectOption value="auto">{t('handwritingInkContrastBooster.typeAuto')}</NativeSelectOption>
              <NativeSelectOption value="dark-ink">{t('handwritingInkContrastBooster.typeDarkInk')}</NativeSelectOption>
              <NativeSelectOption value="red-stamp">{t('handwritingInkContrastBooster.typeRedStamp')}</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="space-y-2"><Label id={`${id}-threshold`}>{t('handwritingInkContrastBooster.bleachThreshold')}<span className="ms-auto tabular-nums">{threshold}</span></Label>
            <Slider min={100} max={245} step={1} value={[threshold]} disabled={isProcessing} aria-labelledby={`${id}-threshold`}
              onValueChange={([value]) => { setThreshold(value); clearOutput(); }} />
          </div>
          <div className="space-y-2"><Label id={`${id}-contrast`}>{t('handwritingInkContrastBooster.strokeContrast')}<span className="ms-auto tabular-nums">{contrast.toFixed(1)}×</span></Label>
            <Slider min={1} max={3} step={0.1} value={[contrast]} disabled={isProcessing} aria-labelledby={`${id}-contrast`}
              onValueChange={([value]) => { setContrast(value); clearOutput(); }} />
          </div>
          <Button onClick={handleProcess} loading={isProcessing} disabled={isProcessing} className="w-full whitespace-normal sm:w-fit"><SlidersHorizontal aria-hidden="true" />{t('handwritingInkContrastBooster.processButton')}</Button>
        </Card>
        <Card className="p-6" role="region" aria-labelledby={`${id}-source-title`}><h3 id={`${id}-source-title`} className="text-base font-semibold">{t('handwritingInkContrastBooster.magnifierTitle')}</h3>
          {sourceUrl && <img src={sourceUrl} alt={t('handwritingInkContrastBooster.magnifierTitle')} className="max-h-96 w-full object-contain" />}
        </Card>
      </div>
    </>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={() => { processingRun.current++; setStatus('idle'); setProgress(0); setProgressMessage(''); }} />}
    {status === 'complete' && result && <Card className="p-6" role="region" aria-labelledby={`${id}-result-title`}>
      <h3 id={`${id}-result-title`} className="text-base font-semibold">{t('handwritingInkContrastBooster.resultTitle')}</h3>
      <div role="status" className="flex items-start gap-3"><FileCheck aria-hidden="true" className="size-5 shrink-0 text-primary" /><p className="text-sm">{t('handwritingInkContrastBooster.successMessage')}</p></div>
      {resultUrl && <img src={resultUrl} alt={t('handwritingInkContrastBooster.resultTitle')} className="max-h-96 w-full object-contain" />}
      <DownloadButton file={result} filename={filename} showFileSize />
    </Card>}
  </div>;
}

export default HandwritingInkContrastBoosterTool;
