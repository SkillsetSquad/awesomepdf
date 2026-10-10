'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { CircleAlert, FileCheck, FileText, Layers, Loader2, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { loadPdfLib } from '@/lib/pdf/loader';
import { overlayPDF, type OverlayOptions } from '@/lib/pdf/processors/overlay';

export interface OverlayPDFToolProps { className?: string }
type Slot = 'base' | 'layer';
type Document = { file: File; pages: number | null; loading: boolean };

export function OverlayPDFTool({ className = '' }: OverlayPDFToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const locale = useLocale();
  const id = useId();
  const [documents, setDocuments] = useState<Record<Slot, Document | null>>({ base: null, layer: null });
  const [mode, setMode] = useState<'overlay' | 'underlay'>('overlay');
  const [pageRange, setPageRange] = useState('');
  const [loop, setLoop] = useState(true);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('overlay.pdf');
  const [error, setError] = useState<string | null>(null);
  const metadataRun = useRef({ base: 0, layer: 0 });
  const processingRun = useRef(0);
  useEffect(() => () => { metadataRun.current.base++; metadataRun.current.layer++; processingRun.current++; }, []);

  const clearOutput = (clearError = true) => {
    processingRun.current++; setResult(null); setStatus('idle'); setProgress(0); setProgressMessage('');
    if (clearError) setError(null);
  };
  const handleSelect = async (slot: Slot, files: File[]) => {
    const file = files[0];
    if (!file) return;
    const run = ++metadataRun.current[slot];
    clearOutput();
    setDocuments(previous => ({ ...previous, [slot]: { file, pages: null, loading: true } }));
    try {
      const { PDFDocument } = await loadPdfLib();
      const pdf = await PDFDocument.load(await file.arrayBuffer(), { ignoreEncryption: true });
      if (run === metadataRun.current[slot]) setDocuments(previous => ({ ...previous, [slot]: { file, pages: pdf.getPageCount(), loading: false } }));
    } catch (err) {
      if (run === metadataRun.current[slot]) {
        setDocuments(previous => ({ ...previous, [slot]: { file, pages: null, loading: false } }));
        setError(err instanceof Error ? err.message : tErrors('processingFailed'));
      }
    }
  };
  const handleClear = (slot: Slot) => {
    metadataRun.current[slot]++; clearOutput();
    setDocuments(previous => ({ ...previous, [slot]: null }));
  };
  const isProcessing = status === 'processing';
  const ready = !!documents.base?.pages && !!documents.layer?.pages && !documents.base.loading && !documents.layer.loading;
  const handleProcess = async () => {
    if (!ready || !documents.base || !documents.layer || isProcessing) return;
    const run = ++processingRun.current;
    const base = documents.base.file, layer = documents.layer.file;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing')); setError(null); setResult(null);
    const options: OverlayOptions = { mode, pageRange, loop };
    try {
      const output = await overlayPDF([base, layer], options, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setFilename(output.filename || base.name.replace(/\.pdf$/i, '_overlay.pdf')); setStatus('complete');
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };
  const slots = [
    { slot: 'base', label: 'uploadBaseLabel', button: 'uploadBaseButton', description: 'uploadBaseDesc', summary: 'uploadBaseSuccess' },
    { slot: 'layer', label: 'uploadLayerLabel', button: 'uploadLayerButton', description: 'uploadLayerDesc', summary: 'uploadLayerSuccess' },
  ] as const;
  const order: Slot[] = mode === 'overlay' ? ['base', 'layer'] : ['layer', 'base'];

  return <div className={`space-y-6 ${className}`.trim()}>
    <div className="grid gap-6 md:grid-cols-2">{slots.map(({ slot, label, button, description, summary }) => {
      const document = documents[slot];
      return <section key={slot} className="space-y-3" aria-labelledby={`${id}-${slot}-title`}>
        <h3 id={`${id}-${slot}-title`} className="text-base font-semibold">{t(`overlayPdf.${label}`)}</h3>
        {document ? <Card className="flex flex-row items-center justify-between gap-4 p-4">
          <div className="flex min-w-0 items-center gap-3"><FileText aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
            <div className="min-w-0"><p className="truncate text-sm font-medium" title={document.file.name}>{document.file.name}</p>
              {document.loading ? <p role="status" className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 aria-hidden="true" className="size-4 animate-spin" />{t('status.loading')}</p>
                : document.pages !== null && <p className="text-sm text-muted-foreground">{t(`overlayPdf.${summary}`, { count: document.pages, size: (document.file.size / (1024 * 1024)).toFixed(2) })}</p>}
            </div>
          </div>
          <Button variant="ghost" size="icon-sm" disabled={isProcessing} aria-label={`${t('buttons.remove')}: ${t(`overlayPdf.${button}`)}`} onClick={() => handleClear(slot)}><X aria-hidden="true" /></Button>
        </Card> : <FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1} disabled={isProcessing}
          label={t(`overlayPdf.${button}`)} description={t(`overlayPdf.${description}`)} onError={setError} onFilesSelected={files => void handleSelect(slot, files)} />}
      </section>;
    })}</div>
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {documents.base && documents.layer && <div className="grid gap-6 lg:grid-cols-2">
      <Card className="p-6">
        <h3 className="text-base font-semibold">{t('overlayPdf.optionsTitle')}</h3>
        <div className="space-y-3"><Label id={`${id}-mode-label`}>{t('overlayPdf.placementModeLabel')}</Label>
          <RadioGroup value={mode} disabled={isProcessing} dir={locale === 'ar' ? 'rtl' : 'ltr'} aria-labelledby={`${id}-mode-label`}
            onValueChange={value => { if (value === 'overlay' || value === 'underlay') { setMode(value); clearOutput(false); } }}>
            {(['overlay', 'underlay'] as const).map(value => <div key={value} className="flex items-center gap-2"><RadioGroupItem id={`${id}-${value}`} value={value} />
              <Label htmlFor={`${id}-${value}`}>{t(value === 'overlay' ? 'overlayPdf.placementOverlayBtn' : 'overlayPdf.placementUnderlayBtn')}</Label></div>)}
          </RadioGroup>
        </div>
        <div className="space-y-2"><Label htmlFor={`${id}-range`}>{t('overlayPdf.targetRangeLabel')}</Label>
          <Input id={`${id}-range`} value={pageRange} placeholder={t('overlayPdf.targetRangePlaceholder')} disabled={isProcessing} aria-describedby={`${id}-range-help`}
            onChange={event => { setPageRange(event.target.value); clearOutput(false); }} />
          <p id={`${id}-range-help`} className="text-sm text-muted-foreground">{t('overlayPdf.targetRangeHelp')}</p>
        </div>
        <div className="flex items-start gap-3"><Switch id={`${id}-loop`} checked={loop} disabled={isProcessing} aria-describedby={`${id}-loop-help`}
          onCheckedChange={value => { setLoop(value); clearOutput(false); }} />
          <div className="space-y-1"><Label htmlFor={`${id}-loop`}>{t('overlayPdf.loopOverlayLabel')}</Label>
            <p id={`${id}-loop-help`} className="text-sm text-muted-foreground">{t('overlayPdf.loopOverlayDesc')}</p></div>
        </div>
        <Button onClick={handleProcess} disabled={isProcessing || !ready} loading={isProcessing} className="w-full whitespace-normal sm:w-fit"><Layers aria-hidden="true" />{t('overlayPdf.processButton')}</Button>
      </Card>
      <Card className="p-6" role="region" aria-labelledby={`${id}-order-title`}>
        <h3 id={`${id}-order-title`} className="text-base font-semibold">{t('overlayPdf.previewTitle')}</h3>
        <p className="text-sm text-muted-foreground">{t(mode === 'overlay' ? 'overlayPdf.placementModeOverlay' : 'overlayPdf.placementModeUnderlay')}</p>
        <ol className="list-decimal space-y-3 ps-5">{order.map(slot => <li key={slot} className="ps-1 text-sm">
          <p className="font-medium">{t(slot === 'base' ? 'overlayPdf.basePageLabel' : 'overlayPdf.layerPageLabel')}</p>
          <p className="break-all text-muted-foreground">{documents[slot]?.file.name}</p>
        </li>)}</ol>
      </Card>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={() => { processingRun.current++; setStatus('idle'); setProgress(0); setProgressMessage(''); }} />}
    {status === 'complete' && result && <Card className="p-6"><div role="status" className="flex items-start gap-3"><FileCheck aria-hidden="true" className="size-5 shrink-0 text-primary" /><p className="text-sm">{t('overlayPdf.successMessage')}</p></div>
      <DownloadButton file={result} filename={filename} showFileSize />
    </Card>}
  </div>;
}

export default OverlayPDFTool;
