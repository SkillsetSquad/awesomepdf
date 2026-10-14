'use client';

import { useEffect, useId, useRef, useState, type PointerEvent } from 'react';
import { useTranslations } from 'next-intl';
import { BookOpen, CircleAlert, FileCheck, RotateCcw } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { designPDFSpine, type PdfSpineBookbinderOptions } from '@/lib/pdf/processors/pdf-spine-bookbinder';

export interface PdfSpineBookbinderToolProps { className?: string }
const coverWidth = 595.27;
const coverHeight = 841.89;
const initialRotation = { x: -20, y: -30 };

export function PdfSpineBookbinderTool({ className = '' }: PdfSpineBookbinderToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [pageCount, setPageCount] = useState(100);
  const [paperGsm, setPaperGsm] = useState<PdfSpineBookbinderOptions['paperGsm']>(80);
  const [bookTitle, setBookTitle] = useState('AwsomePDF Design');
  const [rotation, setRotation] = useState(initialRotation);
  const dragStart = useRef<{ x: number; y: number; pointer: number } | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('book_cover_spine_layout.pdf');
  const [resultWidth, setResultWidth] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  useEffect(() => () => { processingRun.current++; }, []);
  const isProcessing = status === 'processing';
  const sheetThickness = { 80: 0.1, 100: 0.12, 120: 0.14, 150: 0.18 }[paperGsm];
  const spineWidthMm = Math.ceil(pageCount / 2) * sheetThickness;
  const spineWidthPt = spineWidthMm * 2.83465;
  const totalWidth = coverWidth * 2 + spineWidthPt;
  const clearOutput = () => { processingRun.current++; setResult(null); setResultWidth(null); setStatus('idle'); setError(null); setProgress(0); setProgressMessage(''); };
  const rotateModel = (event: PointerEvent<HTMLDivElement>) => {
    const start = dragStart.current;
    if (!start || event.pointerId !== start.pointer) return;
    if (event.buttons === 0) { dragStart.current = null; return; }
    const dx = event.clientX - start.x, dy = event.clientY - start.y;
    setRotation(previous => ({ x: Math.max(-60, Math.min(60, previous.x - dy * 0.5)), y: ((previous.y + dx * 0.5 + 180) % 360 + 360) % 360 - 180 }));
    dragStart.current = { x: event.clientX, y: event.clientY, pointer: event.pointerId };
  };
  const handleDesign = async () => {
    if (isProcessing) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing')); setError(null); setResult(null); setResultWidth(null);
    try {
      const output = await designPDFSpine([], { pageCount, paperGsm, coverWidthPt: coverWidth, coverHeightPt: coverHeight, bookTitle }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setFilename(output.filename || 'book_cover_spine_layout.pdf'); setStatus('complete');
        const width = output.metadata?.calculatedSpineWidthMm;
        setResultWidth(typeof width === 'number' && Number.isFinite(width) && width >= 0 ? width : null);
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };

  return <div className={`space-y-6 ${className}`.trim()}>
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="min-w-0" role="region" aria-labelledby={`${id}-preview-title`}>
        <CardHeader>
        <h3 id={`${id}-preview-title`} className="text-base font-semibold">{t('pdfSpineBookbinder.magnifierTitle')}</h3>
        <p className="text-sm font-medium tabular-nums">{t('pdfSpineBookbinder.spineWidthText', { width: spineWidthMm.toFixed(2) })}</p>
        <CardDescription>{t('pdfSpineBookbinder.estimateHelp')}</CardDescription>
        </CardHeader>
        <CardContent>
        <Tabs defaultValue="model">
          <TabsList aria-label={t('pdfSpineBookbinder.magnifierTitle')} className="max-w-full">
            <TabsTrigger value="model">{t('pdfSpineBookbinder.modelView')}</TabsTrigger><TabsTrigger value="layout">{t('pdfSpineBookbinder.flatView')}</TabsTrigger>
          </TabsList>
          <TabsContent value="model" className="space-y-4">
            <div className="flex min-h-72 touch-none items-center justify-center overflow-hidden [perspective:1000px]" role="img" aria-label={t('pdfSpineBookbinder.modelView')}
              onPointerDown={event => { if (event.button !== 0) return; dragStart.current = { x: event.clientX, y: event.clientY, pointer: event.pointerId }; event.currentTarget.setPointerCapture?.(event.pointerId); }}
              onPointerMove={rotateModel} onPointerUp={() => { dragStart.current = null; }} onPointerCancel={() => { dragStart.current = null; }} onLostPointerCapture={() => { dragStart.current = null; }}>
              <div className="relative h-52 w-36 [transform-style:preserve-3d]" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
                <div className="absolute flex h-52 w-36 items-center justify-center border bg-muted p-3 text-center text-sm" style={{ left: -144, transform: 'rotateY(180deg)', transformOrigin: 'right' }}>{t('pdfSpineBookbinder.backCover')}</div>
                <div className="absolute flex h-52 items-center justify-center overflow-hidden border bg-muted text-xs" style={{ width: Math.max(4, spineWidthMm * 2), transform: `rotateY(90deg) translateZ(18px) translateX(-${Math.max(2, spineWidthMm)}px)` }}>
                  <span className="rotate-90 whitespace-nowrap">{bookTitle}</span>
                </div>
                <div className="absolute flex h-52 w-36 flex-col items-center justify-center gap-3 border bg-background p-4 text-center" style={{ transform: 'translateZ(1px)' }}>
                  <BookOpen aria-hidden="true" className="size-8 text-muted-foreground" /><span className="text-sm">{t('pdfSpineBookbinder.frontCover')}</span><span className="text-xs text-muted-foreground">{t('pdfSpineBookbinder.totalPagesUnit', { count: pageCount })}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{t('pdfSpineBookbinder.modelHelp')}</p>
            <div className="space-y-2"><Label htmlFor={`${id}-yaw`}>{t('pdfSpineBookbinder.rotateHorizontal')}: {Math.round(rotation.y)}°</Label><Slider id={`${id}-yaw`} aria-label={t('pdfSpineBookbinder.rotateHorizontal')} min={-180} max={180} step={1} value={[rotation.y]} onValueChange={([y]) => setRotation(previous => ({ ...previous, y }))} /></div>
            <div className="space-y-2"><Label htmlFor={`${id}-pitch`}>{t('pdfSpineBookbinder.rotateVertical')}: {Math.round(rotation.x)}°</Label><Slider id={`${id}-pitch`} aria-label={t('pdfSpineBookbinder.rotateVertical')} min={-60} max={60} step={1} value={[rotation.x]} onValueChange={([x]) => setRotation(previous => ({ ...previous, x }))} /></div>
            <Button variant="outline" size="sm" onClick={() => setRotation(initialRotation)}><RotateCcw aria-hidden="true" />{t('pdfSpineBookbinder.resetView')}</Button>
          </TabsContent>
          <TabsContent value="layout" className="space-y-3">
            <svg className="w-full border bg-white" viewBox={`0 0 ${totalWidth} ${coverHeight}`} role="img" aria-label={t('pdfSpineBookbinder.layoutDescription', { width: spineWidthMm.toFixed(2) })}>
              <rect x={coverWidth} y="0" width={spineWidthPt} height={coverHeight} fill="rgb(245,245,250)" />
              {[coverWidth, coverWidth + spineWidthPt].map(x => <line key={x} x1={x} x2={x} y1="0" y2={coverHeight} stroke="rgb(204,204,217)" strokeWidth="1" strokeDasharray="4 4" />)}
            </svg>
            <div className="flex justify-between gap-3 text-sm text-muted-foreground" dir="ltr"><span>{t('pdfSpineBookbinder.backCover')}</span><span>{t('pdfSpineBookbinder.frontCover')}</span></div>
          </TabsContent>
        </Tabs>
        </CardContent>
      </Card>
      <Card role="region" aria-labelledby={`${id}-settings-title`}>
        <CardHeader><h3 id={`${id}-settings-title`} className="text-base font-semibold">{t('pdfSpineBookbinder.optionsTitle')}</h3></CardHeader>
        <CardContent className="space-y-6">
        <div className="space-y-2"><Label htmlFor={`${id}-title`}>{t('pdfSpineBookbinder.spineTextLabel')}</Label><Input id={`${id}-title`} value={bookTitle} placeholder={t('pdfSpineBookbinder.spineTextPlaceholder')} disabled={isProcessing} onChange={event => { clearOutput(); setBookTitle(event.target.value); }} /></div>
        <div className="space-y-2"><Label htmlFor={`${id}-pages`}>{t('pdfSpineBookbinder.totalPagesLabel')}: {t('pdfSpineBookbinder.totalPagesUnit', { count: pageCount })}</Label><Slider id={`${id}-pages`} aria-label={t('pdfSpineBookbinder.totalPagesLabel')} min={10} max={1000} step={2} value={[pageCount]} disabled={isProcessing} onValueChange={([count]) => { clearOutput(); setPageCount(count); }} /></div>
        <div className="space-y-2"><Label htmlFor={`${id}-gsm`}>{t('pdfSpineBookbinder.gsmLabel')}</Label><NativeSelect id={`${id}-gsm`} value={paperGsm} disabled={isProcessing} onChange={event => { clearOutput(); setPaperGsm(Number(event.target.value) as PdfSpineBookbinderOptions['paperGsm']); }} className="w-full">
          {[80, 100, 120, 150].map(gsm => <NativeSelectOption key={gsm} value={gsm}>{t(`pdfSpineBookbinder.gsm${gsm}`)}</NativeSelectOption>)}
        </NativeSelect></div>
        <Button className="w-full" onClick={handleDesign} disabled={isProcessing}><BookOpen aria-hidden="true" />{t('pdfSpineBookbinder.processButton')}</Button>
        </CardContent>
      </Card>
    </div>
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={clearOutput} />}
    {result && <Card><CardHeader><p role="status" className="flex items-center gap-2 text-sm"><FileCheck aria-hidden="true" className="size-4 shrink-0" />{t('pdfSpineBookbinder.successMessage')}</p>
      {resultWidth !== null && <p className="text-sm tabular-nums">{t('pdfSpineBookbinder.spineWidthText', { width: resultWidth.toFixed(2) })}</p>}
      </CardHeader><CardFooter><DownloadButton file={result} filename={filename} showFileSize /></CardFooter>
    </Card>}
  </div>;
}

export default PdfSpineBookbinderTool;
