'use client';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { removeAnnotations } from '@/lib/pdf/processors/remove-annotations';
import type { ProcessOutput } from '@/types/pdf';

export interface RemoveAnnotationsToolProps { className?: string; }

export function RemoveAnnotationsTool({ className = '' }: RemoveAnnotationsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [removeAll, setRemoveAll] = useState(true);
  const cancelledRef = useRef(false);

  const handleProcess = useCallback(async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing'); setProgress(0); setError(null); setResult(null);
    try {
      const output: ProcessOutput = await removeAnnotations(file, { removeAll, pages: 'all' }, (prog) => { if (!cancelledRef.current) setProgress(prog); });
      if (output.success && output.result) { setResult(output.result as Blob); setStatus('complete'); }
      else { setError(output.error?.message || 'Failed.'); setStatus('error'); }
    } catch (err) { setError(err instanceof Error ? err.message : 'Error'); setStatus('error'); }
  }, [file, removeAll]);

  const isProcessing = status === 'processing';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && <FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1} onFilesSelected={(files) => { if (files.length > 0) { setFile(files[0]); setError(null); setResult(null); } }} onError={setError} disabled={isProcessing} label={tTools('removeAnnotations.uploadLabel') || t('buttons.upload')} description={tTools('removeAnnotations.uploadDescription')} />}
      {error && <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription><p className="text-sm">{error}</p></AlertDescription></Alert>}
      {file && (
        <>
          <Card className="p-6" ><div className="flex items-center justify-between"><p className="font-medium">{file.name}</p><Button variant="ghost" size="sm" onClick={() => { setFile(null); setResult(null); }} disabled={isProcessing}>{t('buttons.remove')}</Button></div></Card>
          <Card className="p-6"  >
            <h3 className="text-lg font-medium mb-4">{tTools('removeAnnotations.optionsTitle') || 'Options'}</h3>
            <Label className="flex items-center gap-2">
              <Checkbox  checked={removeAll} onCheckedChange={(checked) => setRemoveAll((checked === true))} disabled={isProcessing}  />
              <span>{tTools('removeAnnotations.removeAllLabel') || 'Remove all annotations (comments, highlights, links, etc.)'}</span>
            </Label>
          </Card>
        </>
      )}
      {isProcessing && <ProcessingProgress progress={progress} status={status} onCancel={() => { cancelledRef.current = true; setStatus('idle'); }} showPercentage />}
      {file && <div className="flex flex-wrap items-center gap-4"><Button variant="default" size="lg" onClick={handleProcess} disabled={!file || isProcessing} loading={isProcessing}>{isProcessing ? t('status.processing') : tTools('removeAnnotations.processButton') || 'Remove Annotations'}</Button>{result && <DownloadButton file={result} filename={file.name.replace('.pdf', '_no_annotations.pdf')} variant="secondary" size="lg" showFileSize />}</div>}
      {status === 'complete' && result && <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription><p className="text-sm font-medium">{tTools('removeAnnotations.successMessage') || 'Annotations removed successfully!'}</p></AlertDescription></Alert>}
    </div>
  );
}

export default RemoveAnnotationsTool;
