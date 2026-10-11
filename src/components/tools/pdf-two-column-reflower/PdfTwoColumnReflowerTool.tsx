'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CircleAlert, Columns2, FileCheck } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Slider } from '@/components/ui/slider';
import { FileUploader } from '../FileUploader';
import { PDFPagePreview } from '../PDFPagePreview';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { reflowTwoColumnPDF } from '@/lib/pdf/processors/pdf-two-column-reflower';

export interface PdfTwoColumnReflowerToolProps { className?: string }

export function PdfTwoColumnReflowerTool({ className = '' }: PdfTwoColumnReflowerToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [middleGapRatio, setMiddleGapRatio] = useState(0.5);
  const [horizontalReading, setHorizontalReading] = useState(false);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('single_column.pdf');
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => () => { processingRun.current++; }, []);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const isProcessing = status === 'processing';
  const clearOutput = () => { processingRun.current++; setResult(null); setPageCount(null); setStatus('idle'); setProgress(0); setProgressMessage(''); setError(null); };
  const handleProcess = async () => {
    if (!file || isProcessing) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing')); setResult(null); setPageCount(null); setError(null);
    try {
      const output = await reflowTwoColumnPDF([file], { middleGapRatio, horizontalReading }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setFilename(output.filename || `${file.name.replace(/\.[^/.]+$/, '')}_single_column.pdf`); setStatus('complete');
        const count = output.metadata?.reflowedPagesCount;
        setPageCount(typeof count === 'number' && Number.isInteger(count) && count >= 0 ? count : null);
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };
  return <div className={`space-y-6 ${className}`.trim()}>
    {!file && <div ref={uploadRegion} tabIndex={-1}><FileUploader accept={['application/pdf', '.pdf']} multiple={false} disabled={isProcessing}
      onFilesSelected={selected => { if (selected[0]) { clearOutput(); setFile(selected[0]); } }} onError={setError}
      label={t('pdfTwoColumnReflower.uploadLabel')} description={t('pdfTwoColumnReflower.uploadDescription')} /></div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <div className="grid items-start gap-6 lg:grid-cols-2">
      <Card className="min-w-0" role="region" aria-labelledby={`${id}-source-title`}>
        <CardHeader><h3 id={`${id}-source-title`} className="font-semibold">{t('pdfTwoColumnReflower.previewTitle')}</h3>
          <CardDescription className="break-words">{file.name}</CardDescription>
          <CardAction><Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { focusUpload.current = true; clearOutput(); setFile(null); }}>{t('pdfTwoColumnReflower.clearButton')}</Button></CardAction>
        </CardHeader>
        <CardContent><PDFPagePreview file={file} label={t('pdfTwoColumnReflower.previewTitle')} overlay={<div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary" style={{ left: `${middleGapRatio * 100}%` }} />} /></CardContent>
      </Card>
      <Card role="region" aria-labelledby={`${id}-settings-title`}>
        <CardHeader><h3 id={`${id}-settings-title`} className="font-semibold">{t('pdfTwoColumnReflower.optionsTitle')}</h3><CardDescription>{t('pdfTwoColumnReflower.splitHelp')}</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2"><Label htmlFor={`${id}-split`}>{t('pdfTwoColumnReflower.splitRatio')}: {(middleGapRatio * 100).toFixed(0)}%</Label>
            <Slider id={`${id}-split`} aria-label={t('pdfTwoColumnReflower.splitRatio')} min={0.4} max={0.6} step={0.01} value={[middleGapRatio]} disabled={isProcessing} onValueChange={([ratio]) => { clearOutput(); setMiddleGapRatio(ratio); }} />
          </div>
          <div className="space-y-2"><Label htmlFor={`${id}-flow`}>{t('pdfTwoColumnReflower.readingFlowLabel')}</Label>
            <NativeSelect id={`${id}-flow`} value={horizontalReading ? 'horizontal' : 'vertical'} disabled={isProcessing} aria-describedby={`${id}-flow-help`} onChange={event => { clearOutput(); setHorizontalReading(event.target.value === 'horizontal'); }} className="w-full">
              <NativeSelectOption value="vertical">{t('pdfTwoColumnReflower.flowVertical')}</NativeSelectOption><NativeSelectOption value="horizontal">{t('pdfTwoColumnReflower.flowHorizontal')}</NativeSelectOption>
            </NativeSelect><p id={`${id}-flow-help`} className="text-sm text-muted-foreground">{t('pdfTwoColumnReflower.flowHelp')}</p>
          </div>
        </CardContent>
        <CardFooter><Button className="w-full" onClick={handleProcess} disabled={isProcessing}><Columns2 aria-hidden="true" />{t('pdfTwoColumnReflower.processButton')}</Button></CardFooter>
      </Card>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={clearOutput} />}
    {result && <Card className="min-w-0" role="region" aria-labelledby={`${id}-result-title`}>
      <CardHeader><h3 id={`${id}-result-title`} className="font-semibold">{t('pdfTwoColumnReflower.resultPreviewTitle')}</h3><p role="status" className="flex items-center gap-2 text-sm"><FileCheck aria-hidden="true" className="size-4 shrink-0" />{t('pdfTwoColumnReflower.successMessage')}</p>
        {pageCount !== null && <CardDescription>{t('pdfTwoColumnReflower.outputPages', { count: pageCount })}</CardDescription>}
      </CardHeader><CardContent><div className="mx-auto max-w-xl"><PDFPagePreview file={result} label={t('pdfTwoColumnReflower.resultPreviewTitle')} /></div></CardContent><CardFooter><DownloadButton file={result} filename={filename} showFileSize /></CardFooter>
    </Card>}
  </div>;
}
export default PdfTwoColumnReflowerTool;
