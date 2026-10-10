'use client';

import { useCallback, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowDown, ArrowUp, CheckCircle2, CircleAlert, FileText, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { composePassportId } from '@/lib/pdf/processors/passport-id-composer';

export interface PassportIdComposerToolProps {
  className?: string;
}

export function PassportIdComposerTool({ className = '' }: PassportIdComposerToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const [files, setFiles] = useState<File[]>([]);
  const [watermark, setWatermark] = useState('FOR COPY ONLY');
  const [idCardHeight, setIdCardHeight] = useState(153);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const operation = useRef(0);
  const isProcessing = status === 'processing';

  const handleFilesSelected = useCallback((selectedFiles: File[]) => {
    operation.current++;
    setFiles(previous => [...previous, ...selectedFiles].slice(0, 2));
    setResultBlob(null);
    setStatus('idle');
    setError(null);
  }, []);

  const handleCompose = async () => {
    if (!files.length) return;
    const current = ++operation.current;
    setStatus('processing');
    setProgress(0);
    setProgressMessage('');
    setResultBlob(null);
    setError(null);
    try {
      const output = await composePassportId(files, {
        watermarkText: watermark, layout: 'single-page', idCardWidth: 242.6, idCardHeight,
      }, (value, message) => {
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

  const resetResult = () => { setResultBlob(null); setError(null); setStatus('idle'); };
  const moveFile = (index: number, offset: number) => {
    setFiles(previous => {
      const next = [...previous];
      [next[index], next[index + offset]] = [next[index + offset], next[index]];
      return next;
    });
    resetResult();
  };
  const handleClear = () => { operation.current++; setFiles([]); resetResult(); };

  return <div className={`space-y-6 ${className}`.trim()}>
    {files.length < 2 && <FileUploader accept={['application/pdf', 'image/jpeg', 'image/png']} multiple
      onFilesSelected={handleFilesSelected} onError={setError} disabled={isProcessing}
      label={t('passportIdComposer.uploadLabel')} description={t('passportIdComposer.uploadDescription')} />}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {files.length > 0 && <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t('passportIdComposer.layersCountLabel', { count: files.length })}</CardTitle>
          <CardAction><Button variant="ghost" size="sm" onClick={handleClear} disabled={isProcessing}>{t('passportIdComposer.clearButton')}</Button></CardAction>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            {files.map((file, index) => <li key={index} className="flex flex-wrap items-center gap-3 rounded-md border p-3">
              <FileText className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-sm font-medium">{t(index === 0 ? 'passportIdComposer.frontLabel' : 'passportIdComposer.backLabel')}</p>
                <p className="break-all text-sm">{file.name}</p>
                <p className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)} KB</p>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon-sm" disabled={isProcessing || index === 0} onClick={() => moveFile(index, -1)} aria-label={`${t('buttons.moveUp')}: ${file.name}`}><ArrowUp aria-hidden="true" /></Button>
                <Button variant="ghost" size="icon-sm" disabled={isProcessing || index === files.length - 1} onClick={() => moveFile(index, 1)} aria-label={`${t('buttons.moveDown')}: ${file.name}`}><ArrowDown aria-hidden="true" /></Button>
                <Button variant="ghost" size="icon-sm" disabled={isProcessing} onClick={() => { setFiles(previous => previous.filter((_, i) => i !== index)); resetResult(); }} aria-label={`${t('buttons.remove')}: ${file.name}`}><X aria-hidden="true" /></Button>
              </div>
            </li>)}
          </ol>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>{t('passportIdComposer.optionsTitle')}</CardTitle><CardDescription>{t('passportIdComposer.layoutSpecA4')}</CardDescription></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="passport-watermark">{t('passportIdComposer.watermarkLabel')}</Label>
            <Input id="passport-watermark" value={watermark} disabled={isProcessing} placeholder={t('passportIdComposer.watermarkPlaceholder')} onChange={event => { setWatermark(event.target.value); resetResult(); }} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="passport-height">{t('passportIdComposer.idCardHeightLabel')}</Label>
            <Input id="passport-height" type="number" value={idCardHeight} disabled={isProcessing} onChange={event => { setIdCardHeight(parseFloat(event.target.value) || 153); resetResult(); }} />
          </div>
        </CardContent>
        <CardFooter>
          {status === 'complete' && resultBlob
            ? <DownloadButton file={resultBlob} filename="passport_id_composite.pdf" size="lg" className="w-full" showFileSize />
            : <Button size="lg" className="w-full" loading={isProcessing} onClick={handleCompose}>{t('passportIdComposer.processButton')}</Button>}
        </CardFooter>
      </Card>
    </div>}
    {status === 'complete' && <Alert><CheckCircle2 aria-hidden="true" /><AlertDescription>{t('passportIdComposer.successMessage')}</AlertDescription></Alert>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage}
      onCancel={() => { operation.current++; setStatus('idle'); setProgress(0); }} showPercentage />}
  </div>;
}

export default PassportIdComposerTool;
