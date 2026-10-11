'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CircleAlert, FileCheck, ScanLine } from 'lucide-react';
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
import { deskewPDFAligner } from '@/lib/pdf/processors/pdf-deskew-aligner';

export interface PdfDeskewAlignerToolProps { className?: string }

export function PdfDeskewAlignerTool({ className = '' }: PdfDeskewAlignerToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [threshold, setThreshold] = useState(10);
  const [dpi, setDpi] = useState(150);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('aligned.pdf');
  const [counts, setCounts] = useState<{ pagesProcessed: number | null; correctedPages: number | null; annotationPages: number | null } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => () => { processingRun.current++; }, []);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const isProcessing = status === 'processing';
  const clearOutput = () => { processingRun.current++; setResult(null); setCounts(null); setStatus('idle'); setProgress(0); setError(null); };
  const handleProcess = async () => {
    if (!file || isProcessing) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setResult(null); setCounts(null); setError(null);
    try {
      const output = await deskewPDFAligner([file], { threshold, dpi }, value => { if (run === processingRun.current) setProgress(value); });
      if (run !== processingRun.current) return;
      if (output.success && output.result instanceof Blob) {
        setResult(output.result); setFilename(output.filename || `${file.name.replace(/\.[^/.]+$/, '')}_deskewed_aligned.pdf`); setStatus('complete');
        const count = (key: string) => { const value = output.metadata?.[key]; return typeof value === 'number' && Number.isInteger(value) && value >= 0 ? value : null; };
        setCounts({ pagesProcessed: count('pagesProcessed'), correctedPages: count('correctedPages'), annotationPages: count('annotationPages') });
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };
  return <div className={`space-y-6 ${className}`.trim()}>
    {!file && <div ref={uploadRegion} tabIndex={-1}><FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1}
      onFilesSelected={files => { if (files[0]) { clearOutput(); setFile(files[0]); } }} onError={setError}
      label={t('pdfDeskewAligner.uploadLabel')} description={t('pdfDeskewAligner.uploadDescription')} /></div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <div className="grid items-start gap-6 lg:grid-cols-2">
      <Card className="min-w-0" role="region" aria-labelledby={`${id}-source-title`}>
        <CardHeader><h3 id={`${id}-source-title`} className="font-semibold">{t('pdfDeskewAligner.compassTitle')}</h3><CardDescription className="break-words">{file.name}</CardDescription>
          <CardAction><Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { focusUpload.current = true; clearOutput(); setFile(null); }}>{t('pdfDeskewAligner.clearButton')}</Button></CardAction>
        </CardHeader><CardContent><PDFPagePreview file={file} label={t('pdfDeskewAligner.compassTitle')} /></CardContent>
      </Card>
      <Card role="region" aria-labelledby={`${id}-settings-title`}>
        <CardHeader><h3 id={`${id}-settings-title`} className="font-semibold">{t('pdfDeskewAligner.optionsTitle')}</h3><CardDescription>{t('pdfDeskewAligner.gyroHelp')}</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2"><Label htmlFor={`${id}-dpi`}>{t('pdfDeskewAligner.dpiLabel')}</Label>
            <NativeSelect id={`${id}-dpi`} value={dpi} disabled={isProcessing} onChange={event => { clearOutput(); setDpi(Number(event.target.value)); }} aria-describedby={`${id}-dpi-help`}>
              <NativeSelectOption value="72">{t('pdfDeskewAligner.dpi72')}</NativeSelectOption><NativeSelectOption value="150">{t('pdfDeskewAligner.dpi150')}</NativeSelectOption><NativeSelectOption value="300">{t('pdfDeskewAligner.dpi300')}</NativeSelectOption>
            </NativeSelect><p id={`${id}-dpi-help`} className="text-sm text-muted-foreground">{t('pdfDeskewAligner.analysisHelp')}</p>
          </div>
          <div className="space-y-2"><Label htmlFor={`${id}-threshold`}>{t('pdfDeskewAligner.thresholdLabel')}: {threshold}°</Label>
            <Slider id={`${id}-threshold`} aria-label={t('pdfDeskewAligner.thresholdLabel')} min={1} max={30} step={1} value={[threshold]} disabled={isProcessing} onValueChange={([value]) => { clearOutput(); setThreshold(value); }} />
          </div>
        </CardContent><CardFooter><Button className="w-full" onClick={handleProcess} disabled={isProcessing}><ScanLine aria-hidden="true" />{t('pdfDeskewAligner.processButton')}</Button></CardFooter>
      </Card>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} onCancel={clearOutput} />}
    {result && <Card className="min-w-0" role="region" aria-labelledby={`${id}-result-title`}>
      <CardHeader><h3 id={`${id}-result-title`} className="font-semibold">{t('pdfDeskewAligner.resultTitle')}</h3><p role="status" className="flex items-center gap-2 text-sm"><FileCheck aria-hidden="true" className="size-4 shrink-0" />{t('pdfDeskewAligner.successMessage')}</p>
        {counts && <CardDescription className="flex flex-wrap gap-x-4 gap-y-1">{(['pagesProcessed', 'correctedPages', 'annotationPages'] as const).map(key => counts[key] !== null && <span key={key}>{t(`pdfDeskewAligner.${key}`, { count: counts[key] })}</span>)}</CardDescription>}
      </CardHeader><CardContent><div className="mx-auto max-w-xl"><PDFPagePreview file={result} label={t('pdfDeskewAligner.resultTitle')} /></div></CardContent><CardFooter><DownloadButton file={result} filename={filename} showFileSize /></CardFooter>
    </Card>}
  </div>;
}
export default PdfDeskewAlignerTool;
