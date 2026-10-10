'use client';

import { useCallback, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2, CircleAlert, FileText } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { removeBatchWatermarks } from '@/lib/pdf/processors/batch-watermark-remover';

export interface BatchWatermarkRemoverToolProps { className?: string }

export function BatchWatermarkRemoverTool({ className = '' }: BatchWatermarkRemoverToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const [file, setFile] = useState<File | null>(null);
  const [watermarkText, setWatermarkText] = useState('Confidential');
  const [removeImages, setRemoveImages] = useState(false);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const operation = useRef(0);
  const isProcessing = status === 'processing';
  const handleFileSelected = useCallback((files: File[]) => {
    if (!files.length) return;
    operation.current++;
    setFile(files[0]);
    setStatus('idle');
    setError(null);
    setResultBlob(null);
  }, []);
  const resetResult = () => { setResultBlob(null); setStatus('idle'); setError(null); };
  const handleScrub = async () => {
    if (!file) return;
    const current = ++operation.current;
    setStatus('processing');
    setProgress(0);
    setProgressMessage('');
    setError(null);
    setResultBlob(null);
    try {
      const output = await removeBatchWatermarks([file], { watermarkText, removeImages }, (value, message) => {
        if (operation.current !== current) return;
        setProgress(value);
        setProgressMessage(message || t('status.processing'));
      });
      if (operation.current !== current) return;
      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || tErrors('processingFailed'));
        setStatus('error');
      }
    } catch (error) {
      if (operation.current !== current) return;
      setError(error instanceof Error ? error.message : tErrors('processingFailed'));
      setStatus('error');
    }
  };
  return <div className={`space-y-6 ${className}`.trim()}>
    {!file && <FileUploader accept={['application/pdf']} multiple={false} onFilesSelected={handleFileSelected} onError={setError}
      disabled={isProcessing} label={t('batchWatermarkRemover.uploadLabel')} description={t('batchWatermarkRemover.uploadDescription')} />}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <div className="grid items-start gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <div className="flex min-w-0 items-center gap-3"><FileText className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" /><CardTitle className="break-all">{file.name}</CardTitle></div>
          <CardAction><Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { operation.current++; setFile(null); resetResult(); }}>{t('batchWatermarkRemover.clearButton')}</Button></CardAction>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader><CardTitle>{t('batchWatermarkRemover.optionsTitle')}</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="watermark-text">{t('batchWatermarkRemover.watermarkKeywordsLabel')}</Label>
            <Input id="watermark-text" value={watermarkText} disabled={isProcessing} placeholder={t('batchWatermarkRemover.watermarkKeywordsPlaceholder')} onChange={event => { setWatermarkText(event.target.value); resetResult(); }} />
          </div>
          <div className="flex items-start gap-3">
            <Checkbox id="watermark-remove-images" checked={removeImages} disabled={isProcessing} aria-describedby="watermark-remove-images-help" onCheckedChange={checked => { setRemoveImages(checked === true); resetResult(); }} />
            <div className="space-y-1"><Label htmlFor="watermark-remove-images">{t('batchWatermarkRemover.removeImagesLabel')}</Label><p id="watermark-remove-images-help" className="text-sm text-muted-foreground">{t('batchWatermarkRemover.removeImagesDescription')}</p></div>
          </div>
        </CardContent>
        <CardFooter>
          {status === 'complete' && resultBlob
            ? <DownloadButton file={resultBlob} filename={`${file.name.replace(/\.pdf$/i, '')}_watermark_scrubbed.pdf`} size="lg" className="w-full" showFileSize />
            : <Button size="lg" className="w-full" loading={isProcessing} onClick={handleScrub}>{t('batchWatermarkRemover.processButton')}</Button>}
        </CardFooter>
      </Card>
    </div>}
    {status === 'complete' && <Alert><CheckCircle2 aria-hidden="true" /><AlertDescription>{t('batchWatermarkRemover.successMessage')}</AlertDescription></Alert>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={() => { operation.current++; setStatus('idle'); setProgress(0); }} showPercentage />}
  </div>;
}

export default BatchWatermarkRemoverTool;
