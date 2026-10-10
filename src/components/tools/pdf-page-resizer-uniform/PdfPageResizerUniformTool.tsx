'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowDown, ArrowUp, CircleAlert, FileCheck, FileText, Scaling, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { resizePDFPagesUniform, type PdfPageResizerUniformOptions } from '@/lib/pdf/processors/pdf-page-resizer-uniform';

export interface PdfPageResizerUniformToolProps { className?: string }

export function PdfPageResizerUniformTool({ className = '' }: PdfPageResizerUniformToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [documents, setDocuments] = useState<{ id: number; file: File }[]>([]);
  const files = documents.map(document => document.file);
  const documentId = useRef(0);
  const controls = useRef(new Map<string, HTMLButtonElement>());
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusAfterChange = useRef<string | null>(null);
  useEffect(() => {
    const destination = focusAfterChange.current;
    focusAfterChange.current = null;
    if (destination === 'upload') uploadRegion.current?.focus();
    else if (destination !== null) controls.current.get(destination)?.focus();
  }, [documents]);
  const [targetSize, setTargetSize] = useState<PdfPageResizerUniformOptions['targetSize']>('A4');
  const [scaleMode, setScaleMode] = useState<PdfPageResizerUniformOptions['scaleMode']>('fit');
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('resized_uniform.pdf');
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  useEffect(() => () => { processingRun.current++; }, []);
  const clearOutput = () => { processingRun.current++; setResult(null); setPageCount(null); setStatus('idle'); setError(null); setProgress(0); setProgressMessage(''); };
  const handleUpload = (selected: File[]) => { if (selected.length) { clearOutput(); setDocuments(selected.map(file => ({ id: ++documentId.current, file }))); } };
  const moveFile = (index: number, offset: number) => {
    const destination = index + offset;
    if (destination < 0 || destination >= files.length) return;
    const direction = destination === 0 ? 'down' : destination === files.length - 1 ? 'up' : offset < 0 ? 'up' : 'down';
    focusAfterChange.current = `${documents[index].id}-${direction}`;
    setDocuments(previous => { const next = [...previous]; [next[index], next[destination]] = [next[destination], next[index]]; return next; });
    clearOutput();
  };
  const isProcessing = status === 'processing';
  const handleProcess = async () => {
    if (!files.length || isProcessing) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing')); setError(null); setResult(null); setPageCount(null);
    try {
      const output = await resizePDFPagesUniform(files, { targetSize, scaleMode }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setFilename(output.filename || `${files[0].name.replace(/\.[^/.]+$/, '')}_resized_uniform.pdf`); setStatus('complete');
        const count = output.metadata?.totalResizedPages;
        setPageCount(typeof count === 'number' && Number.isInteger(count) && count >= 0 ? count : null);
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };

  return <div className={`space-y-6 ${className}`.trim()}>
    {!files.length && <div ref={uploadRegion} tabIndex={-1}><FileUploader accept={['application/pdf', '.pdf']} multiple maxFiles={10} disabled={isProcessing} onFilesSelected={handleUpload} onError={setError}
      label={t('pdfPageResizerUniform.uploadLabel')} description={t('pdfPageResizerUniform.uploadDescription')} /></div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {!!files.length && <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6" role="region" aria-labelledby={`${id}-files-title`}>
        <div className="flex flex-wrap items-center justify-between gap-3"><h3 id={`${id}-files-title`} className="text-base font-semibold">{t('pdfPageResizerUniform.magnifierTitle')}</h3>
          <Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { focusAfterChange.current = 'upload'; clearOutput(); setDocuments([]); }}>{t('buttons.clearAll')}</Button>
        </div>
        <p className="text-sm text-muted-foreground">{t('pdfPageResizerUniform.loadedFiles', { count: files.length })}</p>
        <ol className="space-y-3">{documents.map(({ file, id: documentKey }, index) => <li key={documentKey} className="flex flex-wrap items-center justify-between gap-3 rounded-md border p-3">
          <div className="flex min-w-0 flex-1 items-center gap-3"><FileText aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" /><span className="min-w-0 break-all text-sm font-medium" title={file.name}>{file.name}</span></div>
          <div className="flex items-center gap-1"><Button variant="ghost" size="icon-sm" ref={element => { if (element) controls.current.set(`${documentKey}-up`, element); else controls.current.delete(`${documentKey}-up`); }} disabled={isProcessing || index === 0} aria-label={`${t('buttons.moveUp')}: ${file.name}`} onClick={() => moveFile(index, -1)}><ArrowUp aria-hidden="true" /></Button>
            <Button variant="ghost" size="icon-sm" ref={element => { if (element) controls.current.set(`${documentKey}-down`, element); else controls.current.delete(`${documentKey}-down`); }} disabled={isProcessing || index === files.length - 1} aria-label={`${t('buttons.moveDown')}: ${file.name}`} onClick={() => moveFile(index, 1)}><ArrowDown aria-hidden="true" /></Button>
            <Button variant="ghost" size="icon-sm" ref={element => { if (element) controls.current.set(`${documentKey}-remove`, element); else controls.current.delete(`${documentKey}-remove`); }} disabled={isProcessing} aria-label={`${t('buttons.remove')}: ${file.name}`} onClick={() => { const neighbor = documents[index + 1] ?? documents[index - 1]; focusAfterChange.current = neighbor ? `${neighbor.id}-remove` : 'upload'; clearOutput(); setDocuments(previous => previous.filter(document => document.id !== documentKey)); }}><X aria-hidden="true" /></Button>
          </div>
        </li>)}</ol>
      </Card>
      <Card className="p-6">
        <h3 className="text-base font-semibold">{t('pdfPageResizerUniform.optionsTitle')}</h3>
        <p className="text-sm text-muted-foreground">{t('pdfPageResizerUniform.uniformHelp')}</p>
        <div className="space-y-2"><Label htmlFor={`${id}-size`}>{t('pdfPageResizerUniform.targetSpecLabel')}</Label>
          <NativeSelect id={`${id}-size`} value={targetSize} disabled={isProcessing} onChange={event => { setTargetSize(event.target.value as PdfPageResizerUniformOptions['targetSize']); clearOutput(); }}>
            <NativeSelectOption value="A4">{t('pdfPageResizerUniform.specA4')}</NativeSelectOption>
            <NativeSelectOption value="A3">{t('pdfPageResizerUniform.specA3')}</NativeSelectOption>
            <NativeSelectOption value="Letter">{t('pdfPageResizerUniform.specLetter')}</NativeSelectOption>
          </NativeSelect>
        </div>
        <div className="space-y-2"><Label htmlFor={`${id}-mode`}>{t('pdfPageResizerUniform.scaleModeLabel')}</Label>
          <NativeSelect id={`${id}-mode`} value={scaleMode} disabled={isProcessing} onChange={event => { setScaleMode(event.target.value as PdfPageResizerUniformOptions['scaleMode']); clearOutput(); }}>
            <NativeSelectOption value="fit">{t('pdfPageResizerUniform.modeFit')}</NativeSelectOption>
            <NativeSelectOption value="fill">{t('pdfPageResizerUniform.modeFill')}</NativeSelectOption>
          </NativeSelect>
        </div>
        <Button onClick={handleProcess} disabled={isProcessing} loading={isProcessing} className="w-full whitespace-normal sm:w-fit"><Scaling aria-hidden="true" />{t('pdfPageResizerUniform.processButton')}</Button>
      </Card>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={() => { processingRun.current++; setStatus('idle'); setProgress(0); setProgressMessage(''); }} />}
    {status === 'complete' && result && <Card className="p-6"><div role="status" className="flex items-start gap-3"><FileCheck aria-hidden="true" className="size-5 shrink-0 text-primary" /><p className="text-sm">{t('pdfPageResizerUniform.successMessage')}</p></div>
      {pageCount !== null && <p className="text-sm text-muted-foreground">{t('removeBlankPages.pagesCount', { count: pageCount, size: (result.size / (1024 * 1024)).toFixed(2) })}</p>}
      <DownloadButton file={result} filename={filename} showFileSize />
    </Card>}
  </div>;
}

export default PdfPageResizerUniformTool;
