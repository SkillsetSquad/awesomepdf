'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight, CircleAlert, FileCheck, Presentation } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { reconstructPDFToSlide } from '@/lib/pdf/processors/pdf-to-slide';

interface SlidePreview { title: string; bullets: string[] }
function outlines(value: unknown): SlidePreview[] {
  if (!Array.isArray(value)) return [];
  return value.filter((slide): slide is SlidePreview => slide !== null && typeof slide === 'object' && typeof slide.title === 'string' && Array.isArray(slide.bullets) && slide.bullets.every((bullet: unknown) => typeof bullet === 'string'));
}
const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#ef4444'];

export function PDFToSlideTool() {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.pdfToSlide');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [themeColor, setThemeColor] = useState('#6366f1');
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('slides.pptx');
  const [error, setError] = useState<string | null>(null);
  const [slides, setSlides] = useState<SlidePreview[]>([]);
  const processingRun = useRef(0);
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => () => { processingRun.current++; }, []);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const isProcessing = status === 'processing';
  const clearOutput = () => { processingRun.current++; setResult(null); setSlides([]); setActiveSlideIdx(0); setStatus('idle'); setProgress(0); setProgressMessage(''); setError(null); };
  const handleProcess = async () => {
    if (!file || isProcessing) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('pdfToSlide.progressReconstructing')); setError(null); setResult(null); setSlides([]); setActiveSlideIdx(0);
    try {
      const output = await reconstructPDFToSlide(file, { themeColor }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('pdfToSlide.progressReconstructing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setFilename(output.filename || `${file.name.replace(/\.[^/.]+$/, '')}.pptx`); setSlides(outlines(output.metadata?.slides)); setStatus('complete');
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };
  const slide = slides[activeSlideIdx];
  const position = t('pdfToSlide.slidePosition', { current: activeSlideIdx + 1, total: slides.length });
  return <div className="space-y-6">
    {!file && <div ref={uploadRegion} tabIndex={-1}><FileUploader accept={['application/pdf', '.pdf']} multiple={false} disabled={isProcessing}
      onFilesSelected={files => { if (files[0]) { clearOutput(); setFile(files[0]); } }} onError={setError} label={tTools('uploadLabel')} description={t('pdfToSlide.sourceHelp')} /></div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <Card role="region" aria-labelledby={`${id}-settings-title`}>
      <CardHeader><h3 id={`${id}-settings-title`} className="font-semibold">{tTools('optionsTitle')}</h3><CardDescription className="break-words">{file.name}</CardDescription>
        <CardAction><Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { focusUpload.current = true; clearOutput(); setFile(null); }}>{t('buttons.reset')}</Button></CardAction>
      </CardHeader>
      <CardContent className="space-y-4"><p className="text-sm text-muted-foreground">{t('pdfToSlide.sourceHelp')}</p>
        <fieldset disabled={isProcessing} className="space-y-3"><legend className="text-sm font-medium">{t('pdfToSlide.themeLabel')}</legend>
          <div className="flex flex-wrap gap-2">{colors.map(color => <Button key={color} variant="outline" size="icon" disabled={isProcessing} aria-pressed={themeColor === color}
            aria-label={`${t('pdfToSlide.themeLabel')}: ${color}`} className="aria-pressed:border-primary aria-pressed:ring-1 aria-pressed:ring-primary"
            onClick={() => { clearOutput(); setThemeColor(color); }}><span aria-hidden="true" className="size-5 rounded-sm" style={{ backgroundColor: color }} /></Button>)}</div>
        </fieldset>
      </CardContent><CardFooter><Button disabled={isProcessing} onClick={handleProcess}><Presentation aria-hidden="true" />{tTools('processButton')}</Button></CardFooter>
    </Card>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={clearOutput} />}
    {result && <Card role="region" aria-labelledby={`${id}-result-title`}>
      <CardHeader><h3 id={`${id}-result-title`} className="font-semibold">{t('pdfToSlide.outlinePreviewTitle')}</h3><p role="status" className="flex items-center gap-2 text-sm"><FileCheck aria-hidden="true" className="size-4 shrink-0" />{tTools('successMessage')}</p>
        <CardDescription>{t('pdfToSlide.previewHelp')}</CardDescription>
      </CardHeader>
      <CardContent>{slide ? <div className="space-y-4">
        <article aria-label={position} className="min-h-48 space-y-4 rounded-md border p-4 sm:p-6">
          <div aria-hidden="true" className="h-1 w-12 rounded" style={{ backgroundColor: themeColor }} />
          <h4 className="break-words text-lg font-semibold">{slide.title}</h4>
          <ul className="list-disc space-y-2 ps-5 text-sm">{slide.bullets.map((bullet, index) => <li key={index} className="break-words">{bullet}</li>)}</ul>
        </article>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button variant="outline" size="sm" disabled={activeSlideIdx === 0} onClick={() => setActiveSlideIdx(index => index - 1)}><ChevronLeft aria-hidden="true" className="rtl:rotate-180" />{t('pdfToSlide.prevPage')}</Button>
          <span className="text-sm tabular-nums" aria-live="polite">{position}</span>
          <Button variant="outline" size="sm" disabled={activeSlideIdx === slides.length - 1} onClick={() => setActiveSlideIdx(index => index + 1)}>{t('pdfToSlide.nextPage')}<ChevronRight aria-hidden="true" className="rtl:rotate-180" /></Button>
        </div>
      </div> : <p className="text-sm text-muted-foreground">{t('pdfToSlide.outlineUnavailable')}</p>}</CardContent>
      <CardFooter><DownloadButton file={result} filename={filename} showFileSize /></CardFooter>
    </Card>}
  </div>;
}
export default PDFToSlideTool;
