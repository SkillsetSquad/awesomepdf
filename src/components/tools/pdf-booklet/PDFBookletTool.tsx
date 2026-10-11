'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { BookOpen, CircleAlert, FileCheck } from 'lucide-react';
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
import { createBooklet, getBookletSheetLayout, type BookletGridMode, type BookletPaperSize, type BookletRotation } from '@/lib/pdf/processors/booklet';

export interface PDFBookletToolProps { className?: string }

export function PDFBookletTool({ className = '' }: PDFBookletToolProps) {
  const t = useTranslations('common');
  const tBooklet = useTranslations('tools.pdfBooklet');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [gridMode, setGridMode] = useState<BookletGridMode>('1x2');
  const [paperSize, setPaperSize] = useState<BookletPaperSize>('a4');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');
  const [rotation, setRotation] = useState<BookletRotation>('none');
  const [padding, setPadding] = useState(20);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('booklet.pdf');
  const [sheetCount, setSheetCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => () => { processingRun.current++; }, []);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const isProcessing = status === 'processing';
  const layout = getBookletSheetLayout({ gridMode, paperSize, orientation });
  const cellWidth = layout.width / layout.cols;
  const cellHeight = layout.height / layout.rows;
  const clearOutput = () => { processingRun.current++; setResult(null); setSheetCount(null); setStatus('idle'); setProgress(0); setError(null); };
  const handleProcess = async () => {
    if (!file || isProcessing) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setResult(null); setSheetCount(null); setError(null);
    try {
      const output = await createBooklet(file, { gridMode, paperSize, orientation, rotation, padding }, value => {
        if (run === processingRun.current) setProgress(value);
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result instanceof Blob) {
        setResult(output.result); setFilename(output.filename || `${file.name.replace(/\.[^/.]+$/, '')}_booklet.pdf`); setStatus('complete');
        const count = output.metadata?.outputSheets;
        setSheetCount(typeof count === 'number' && Number.isInteger(count) && count >= 0 ? count : null);
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };
  return <div className={`space-y-6 ${className}`.trim()}>
    {!file && <div ref={uploadRegion} tabIndex={-1}><FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1}
      onFilesSelected={files => { if (files[0]) { clearOutput(); setFile(files[0]); } }} onError={setError}
      label={tBooklet('uploadLabel')} description={tBooklet('uploadDescription')} /></div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <div className="grid items-start gap-6 lg:grid-cols-2">
      <Card className="min-w-0" role="region" aria-labelledby={`${id}-source-title`}>
        <CardHeader><h3 id={`${id}-source-title`} className="font-semibold">{t('pdfBooklet.sourceTitle')}</h3><CardDescription className="break-words">{file.name}</CardDescription>
          <CardAction><Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { focusUpload.current = true; clearOutput(); setFile(null); }}>{t('buttons.clear')}</Button></CardAction>
        </CardHeader><CardContent><PDFPagePreview file={file} label={t('pdfBooklet.sourceTitle')} /></CardContent>
      </Card>
      <Card className="min-w-0" role="region" aria-labelledby={`${id}-settings-title`}>
        <CardHeader><h3 id={`${id}-settings-title`} className="font-semibold">{tBooklet('optionsTitle')}</h3><CardDescription id={`${id}-grid-help`}>{tBooklet('gridModeDesc')}</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor={`${id}-grid`}>{tBooklet('gridModeLabel')}</Label>
              <NativeSelect id={`${id}-grid`} value={gridMode} disabled={isProcessing} aria-describedby={`${id}-grid-help`} onChange={event => { clearOutput(); setGridMode(event.target.value as BookletGridMode); }}>
                {(['1x2', '2x2', '2x4', '4x4'] as const).map(mode => <NativeSelectOption key={mode} value={mode}>{mode.replace('x', ' × ')}</NativeSelectOption>)}
              </NativeSelect>
            </div>
            <div className="space-y-2"><Label htmlFor={`${id}-paper`}>{tBooklet('paperSizeLabel')}</Label>
              <NativeSelect id={`${id}-paper`} value={paperSize} disabled={isProcessing} onChange={event => { clearOutput(); setPaperSize(event.target.value as BookletPaperSize); }}>
                {(['a4', 'letter', 'legal'] as const).map(size => <NativeSelectOption key={size} value={size}>{size.toUpperCase()}</NativeSelectOption>)}
              </NativeSelect>
            </div>
            <div className="space-y-2"><Label htmlFor={`${id}-orientation`}>{tBooklet('orientationLabel')}</Label>
              <NativeSelect id={`${id}-orientation`} value={orientation} disabled={isProcessing} onChange={event => { clearOutput(); setOrientation(event.target.value as 'portrait' | 'landscape'); }}>
                <NativeSelectOption value="portrait">{t('nUpPdf.orientationPortrait')}</NativeSelectOption><NativeSelectOption value="landscape">{t('nUpPdf.orientationLandscape')}</NativeSelectOption>
              </NativeSelect>
            </div>
            <div className="space-y-2"><Label htmlFor={`${id}-rotation`}>{tBooklet('rotationLabel')}</Label>
              <NativeSelect id={`${id}-rotation`} value={rotation} disabled={isProcessing} onChange={event => { clearOutput(); setRotation(event.target.value as BookletRotation); }}>
                <NativeSelectOption value="none">{t('pdfBooklet.rotationNone')}</NativeSelectOption><NativeSelectOption value="90cw">{t('pdfBooklet.rotationClockwise')}</NativeSelectOption>
                <NativeSelectOption value="90ccw">{t('pdfBooklet.rotationCounterclockwise')}</NativeSelectOption><NativeSelectOption value="alternate">{t('pdfBooklet.rotationAlternate')}</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
          <div className="space-y-2"><Label htmlFor={`${id}-padding`}>{tBooklet('paddingLabel')}: {padding} pt</Label>
            <Slider id={`${id}-padding`} aria-label={tBooklet('paddingLabel')} min={0} max={50} step={1} value={[padding]} disabled={isProcessing} onValueChange={([value]) => { clearOutput(); setPadding(value); }} />
          </div>
          <figure className="space-y-3"><p className="text-sm font-medium">{tBooklet('previewLabel')}</p>
            <svg role="img" aria-label={tBooklet('previewLabel')} viewBox={`0 0 ${layout.width} ${layout.height}`} className="mx-auto w-full max-w-sm rounded-sm border border-border bg-background text-muted-foreground">
              {Array.from({ length: layout.rows * layout.cols }, (_, slot) => {
                const x = slot % layout.cols * cellWidth, y = Math.floor(slot / layout.cols) * cellHeight;
                return <g key={slot}>
                  <rect x={x} y={y} width={cellWidth} height={cellHeight} fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  <rect x={x + padding} y={y + padding} width={cellWidth - padding * 2} height={cellHeight - padding * 2} fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  <text x={x + cellWidth / 2} y={y + cellHeight / 2} textAnchor="middle" dominantBaseline="middle" fill="currentColor" fontSize="18">{slot + 1}</text>
                </g>;
              })}
            </svg><figcaption className="text-sm text-muted-foreground">{t('pdfBooklet.layoutHelp')}</figcaption>
          </figure>
        </CardContent><CardFooter><Button className="w-full" onClick={handleProcess} disabled={isProcessing}><BookOpen aria-hidden="true" />{tBooklet('createButton')}</Button></CardFooter>
      </Card>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} onCancel={clearOutput} />}
    {result && <Card className="min-w-0" role="region" aria-labelledby={`${id}-result-title`}>
      <CardHeader><h3 id={`${id}-result-title`} className="font-semibold">{t('pdfBooklet.resultTitle')}</h3><p role="status" className="flex items-center gap-2 text-sm"><FileCheck aria-hidden="true" className="size-4 shrink-0" />{tBooklet('successMessage')}</p>
        {sheetCount !== null && <CardDescription>{t('pdfBooklet.outputSheets', { count: sheetCount })}</CardDescription>}
      </CardHeader><CardContent><div className="mx-auto max-w-xl"><PDFPagePreview file={result} label={t('pdfBooklet.resultTitle')} /></div></CardContent><CardFooter><DownloadButton file={result} filename={filename} showFileSize /></CardFooter>
    </Card>}
  </div>;
}
export default PDFBookletTool;
