'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { BookOpen, CircleAlert, FileCheck } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUploader } from '../FileUploader';
import { PDFPagePreview } from '../PDFPagePreview';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { imposeBookletFolding, type BookletFoldingOptions } from '@/lib/pdf/processors/booklet-folding-simulator';

export function BookletFoldingSimulatorTool() {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.bookletFoldingSimulator');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [foldingMode, setFoldingMode] = useState<'4-page-fold' | '8-page-saddle'>('4-page-fold');
  const [foldProgress, setFoldProgress] = useState(0);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('booklet_imposed.pdf');
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => () => { processingRun.current++; }, []);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const isProcessing = status === 'processing';
  const firstPair = foldingMode === '4-page-fold' ? [4, 1] : [8, 1];
  const clearOutput = () => { processingRun.current++; setResult(null); setStatus('idle'); setProgress(0); setProgressMessage(''); setError(null); };
  const handleProcess = async () => {
    if (!file || isProcessing) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing')); setError(null); setResult(null);
    try {
      const options: BookletFoldingOptions = { foldingMode };
      const output = await imposeBookletFolding(file, options, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) { setResult(output.result as Blob); setFilename(output.filename || `${file.name.replace(/\.[^/.]+$/, '')}_imposed.pdf`); setStatus('complete'); }
      else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };
  return <div className="space-y-6">
    {!file && <div ref={uploadRegion} tabIndex={-1}><FileUploader accept={['application/pdf', '.pdf']} multiple={false} disabled={isProcessing}
      onFilesSelected={files => { if (files[0]) { clearOutput(); setFile(files[0]); setFoldProgress(0); } }} onError={setError} label={tTools('uploadLabel')} description={tTools('uploadDescription')} /></div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <div className="grid items-start gap-6 lg:grid-cols-2">
      <Card role="region" aria-labelledby={`${id}-settings-title`}>
        <CardHeader><h3 id={`${id}-settings-title`} className="font-semibold">{tTools('optionsTitle')}</h3><CardDescription className="break-words">{file.name}</CardDescription>
          <CardAction><Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { focusUpload.current = true; clearOutput(); setFile(null); setFoldProgress(0); }}>{t('buttons.reset')}</Button></CardAction>
        </CardHeader><CardContent className="space-y-4">
          <fieldset className="space-y-3" disabled={isProcessing}><legend id={`${id}-mode-label`} className="text-sm font-medium">{tTools('foldingMode')}</legend>
            <RadioGroup value={foldingMode} disabled={isProcessing} aria-labelledby={`${id}-mode-label`} onValueChange={value => { clearOutput(); setFoldingMode(value as typeof foldingMode); }}>
              <div className="flex items-start gap-3"><RadioGroupItem id={`${id}-four`} value="4-page-fold" className="mt-0.5" /><div className="space-y-1"><Label htmlFor={`${id}-four`}>{t('bookletFoldingSimulator.fourPagesFold')}</Label><p className="text-sm text-muted-foreground">{t('bookletFoldingSimulator.oneSheetDoubleSide')}</p></div></div>
              <div className="flex items-start gap-3"><RadioGroupItem id={`${id}-eight`} value="8-page-saddle" className="mt-0.5" /><div className="space-y-1"><Label htmlFor={`${id}-eight`}>{t('bookletFoldingSimulator.eightPagesSaddle')}</Label><p className="text-sm text-muted-foreground">{t('bookletFoldingSimulator.twoSheetsMiddleStitch')}</p></div></div>
            </RadioGroup>
          </fieldset>
        </CardContent><CardFooter><Button disabled={isProcessing} onClick={handleProcess}><BookOpen aria-hidden="true" />{tTools('processButton')}</Button></CardFooter>
      </Card>
      <Card className="min-w-0" role="region" aria-labelledby={`${id}-model-title`}>
        <CardHeader><h3 id={`${id}-model-title`} className="font-semibold">{t('bookletFoldingSimulator.modelTitle')}</h3><CardDescription id={`${id}-model-help`}>{t('bookletFoldingSimulator.modelHelp')}</CardDescription></CardHeader>
        <CardContent className="space-y-4"><Tabs defaultValue="model">
          <TabsList aria-label={t('bookletFoldingSimulator.modelTitle')} className="max-w-full"><TabsTrigger value="model">{t('bookletFoldingSimulator.view3D')}</TabsTrigger><TabsTrigger value="flat">{t('bookletFoldingSimulator.view2D')}</TabsTrigger></TabsList>
          <TabsContent value="model"><div role="img" aria-label={t('bookletFoldingSimulator.view3D')} aria-describedby={`${id}-model-help`} className="flex min-h-72 items-center justify-center overflow-hidden rounded-md border bg-muted [perspective:1200px]" dir="ltr">
            <div className="relative h-56 w-48 [transform-style:preserve-3d]" style={{ transform: 'rotateX(30deg) rotateY(-25deg) rotateZ(5deg)' }}>
              <div className="absolute inset-y-0 start-0 flex w-24 flex-col items-center justify-between border border-gray-300 bg-white p-3 text-gray-800 [backface-visibility:hidden]">
                <span className="text-xs">{t('bookletFoldingSimulator.sheetFront')}</span><span className="font-semibold">{t('bookletFoldingSimulator.pageLabel', { number: firstPair[0] })}</span><span className="text-xs">{t('bookletFoldingSimulator.leftPageHalf')}</span>
              </div>
              <div className="absolute inset-y-0 start-24 flex w-24 origin-left flex-col items-center justify-between border border-gray-300 bg-gray-100 p-3 text-gray-800 [backface-visibility:hidden]" style={{ transform: `rotateY(${-foldProgress * 1.8}deg)` }}>
                <span className="text-xs">{t('bookletFoldingSimulator.sheetFront')}</span><span className="font-semibold">{t('bookletFoldingSimulator.pageLabel', { number: firstPair[1] })}</span><span className="text-xs">{t('bookletFoldingSimulator.rightPageHalf')}</span>
              </div>
            </div>
          </div></TabsContent>
          <TabsContent value="flat"><div role="img" aria-label={t('bookletFoldingSimulator.view2D')} aria-describedby={`${id}-model-help`} className="flex min-h-72 items-center justify-center rounded-md border bg-muted p-4" dir="ltr">
            <div className="grid w-full max-w-sm grid-cols-2 border border-gray-300 bg-white text-gray-800">{firstPair.map(number => <div key={number} className="flex min-h-40 items-center justify-center border-e border-gray-300 p-3 text-center last:border-e-0">{t('bookletFoldingSimulator.pageLabel', { number })}</div>)}</div>
          </div></TabsContent>
        </Tabs><div className="space-y-2"><Label htmlFor={`${id}-fold`}>{t('bookletFoldingSimulator.foldingDamping')}: {foldProgress}%</Label><Slider id={`${id}-fold`} aria-label={t('bookletFoldingSimulator.foldingDamping')} min={0} max={100} step={1} value={[foldProgress]} onValueChange={([value]) => setFoldProgress(value)} />
          <div className="flex justify-between gap-3 text-xs text-muted-foreground"><span>{t('bookletFoldingSimulator.flatUnfold')}</span><span>{t('bookletFoldingSimulator.fullyFolded')}</span></div>
        </div></CardContent>
      </Card>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={clearOutput} />}
    {result && <Card className="min-w-0" role="region" aria-labelledby={`${id}-result-title`}>
      <CardHeader><h3 id={`${id}-result-title`} className="font-semibold">{t('bookletFoldingSimulator.resultTitle')}</h3><p role="status" className="flex items-center gap-2 text-sm"><FileCheck aria-hidden="true" className="size-4 shrink-0" />{tTools('successMessage')}</p></CardHeader>
      <CardContent><div className="mx-auto max-w-2xl"><PDFPagePreview file={result} label={t('bookletFoldingSimulator.resultTitle')} /></div></CardContent><CardFooter><DownloadButton file={result} filename={filename} showFileSize /></CardFooter>
    </Card>}
  </div>;
}
export default BookletFoldingSimulatorTool;
