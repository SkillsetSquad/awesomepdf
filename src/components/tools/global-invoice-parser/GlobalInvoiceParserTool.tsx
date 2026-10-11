'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CircleAlert, FileCheck, Landmark } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { FileUploader } from '../FileUploader';
import { PDFPagePreview } from '../PDFPagePreview';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { parseGlobalInvoice } from '@/lib/pdf/processors/global-invoice-parser';

export interface GlobalInvoiceParserToolProps { className?: string }
interface InvoiceSummary { originalAmount: number; originalCurrency: string; convertedAmount: number; targetCurrency: string; rateApplied: number }
function summary(value: unknown): InvoiceSummary | null {
  if (!value || typeof value !== 'object') return null;
  const stats = value as Partial<InvoiceSummary>;
  return typeof stats.originalAmount === 'number' && Number.isFinite(stats.originalAmount) && typeof stats.originalCurrency === 'string' && typeof stats.convertedAmount === 'number' && Number.isFinite(stats.convertedAmount) && typeof stats.targetCurrency === 'string' && typeof stats.rateApplied === 'number' && Number.isFinite(stats.rateApplied) ? stats as InvoiceSummary : null;
}

export function GlobalInvoiceParserTool({ className = '' }: GlobalInvoiceParserToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [targetCurrency, setTargetCurrency] = useState('CNY');
  const [customRate, setCustomRate] = useState('');
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [filename, setFilename] = useState('invoice_converted.pdf');
  const [invoiceStats, setInvoiceStats] = useState<InvoiceSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  const processingRun = useRef(0);
  const uploadRegion = useRef<HTMLDivElement>(null);
  const focusUpload = useRef(false);
  useEffect(() => () => { processingRun.current++; }, []);
  useEffect(() => { if (!file && focusUpload.current) { focusUpload.current = false; uploadRegion.current?.focus(); } }, [file]);
  const isProcessing = status === 'processing';
  const rate = customRate.trim() ? Number(customRate.trim()) : undefined;
  const invalidRate = rate !== undefined && (!Number.isFinite(rate) || rate <= 0);
  const clearOutput = () => { processingRun.current++; setResult(null); setInvoiceStats(null); setStatus('idle'); setProgress(0); setProgressMessage(''); setError(null); };
  const handleParse = async () => {
    if (!file || isProcessing || invalidRate) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing')); setResult(null); setInvoiceStats(null); setError(null);
    try {
      const output = await parseGlobalInvoice([file], { targetCurrency, exchangeRate: rate, translateLabels: true }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setFilename(output.filename || `${file.name.replace(/\.[^/.]+$/, '')}_converted.pdf`); setInvoiceStats(summary(output.metadata)); setStatus('complete');
      } else { setError(output.error?.details || output.error?.message || tErrors('processingFailed')); setStatus('error'); }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };
  return <div className={`space-y-6 ${className}`.trim()}>
    {!file && <div ref={uploadRegion} tabIndex={-1}><FileUploader accept={['application/pdf', '.pdf']} multiple={false} disabled={isProcessing}
      onFilesSelected={files => { if (files[0]) { clearOutput(); setFile(files[0]); } }} onError={setError} label={t('globalInvoiceParser.uploadLabel')} description={t('globalInvoiceParser.uploadDescription')} /></div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <div className="grid items-start gap-6 lg:grid-cols-2">
      <Card className="min-w-0" role="region" aria-labelledby={`${id}-source-title`}>
        <CardHeader><h3 id={`${id}-source-title`} className="font-semibold">{t('globalInvoiceParser.previewTitle')}</h3><CardDescription className="break-words">{file.name}</CardDescription>
          <CardAction><Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { focusUpload.current = true; clearOutput(); setFile(null); }}>{t('globalInvoiceParser.clearButton')}</Button></CardAction>
        </CardHeader><CardContent><PDFPagePreview file={file} label={t('globalInvoiceParser.previewTitle')} /></CardContent>
      </Card>
      <Card role="region" aria-labelledby={`${id}-settings-title`}>
        <CardHeader><h3 id={`${id}-settings-title`} className="font-semibold">{t('globalInvoiceParser.optionsTitle')}</h3><CardDescription>{t('globalInvoiceParser.emptyStateDescription')}</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2"><Label htmlFor={`${id}-currency`}>{t('globalInvoiceParser.targetCurrencyLabel')}</Label>
            <NativeSelect id={`${id}-currency`} value={targetCurrency} disabled={isProcessing} className="w-full" onChange={event => { clearOutput(); setTargetCurrency(event.target.value); }}>
              {(['CNY', 'USD', 'EUR', 'JPY'] as const).map(currency => <NativeSelectOption key={currency} value={currency}>{t(`globalInvoiceParser.${currency.toLowerCase()}Label`)}</NativeSelectOption>)}
            </NativeSelect>
          </div>
          <div className="space-y-2"><Label htmlFor={`${id}-rate`}>{t('globalInvoiceParser.customRateLabel')}</Label>
            <Input id={`${id}-rate`} type="text" inputMode="decimal" value={customRate} disabled={isProcessing} placeholder={t('globalInvoiceParser.customRatePlaceholder')}
              aria-invalid={invalidRate} aria-describedby={`${id}-rate-help${invalidRate ? ` ${id}-rate-error` : ''}`} onChange={event => { clearOutput(); setCustomRate(event.target.value); }} />
            <p id={`${id}-rate-help`} className="text-sm text-muted-foreground">{t('globalInvoiceParser.rateHelp')}</p>
            {invalidRate && <p id={`${id}-rate-error`} role="alert" className="text-sm text-destructive">{t('globalInvoiceParser.invalidRate')}</p>}
          </div>
        </CardContent><CardFooter><Button disabled={isProcessing || invalidRate} onClick={handleParse}><Landmark aria-hidden="true" />{t('globalInvoiceParser.processButton')}</Button></CardFooter>
      </Card>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={clearOutput} />}
    {result && <Card className="min-w-0" role="region" aria-labelledby={`${id}-result-title`}>
      <CardHeader><h3 id={`${id}-result-title`} className="font-semibold">{t('globalInvoiceParser.resultPreviewTitle')}</h3><p role="status" className="flex items-center gap-2 text-sm"><FileCheck aria-hidden="true" className="size-4 shrink-0" />{t('globalInvoiceParser.successMessage')}</p></CardHeader>
      <CardContent className="space-y-4">{invoiceStats && <div className="space-y-2 rounded-md border p-4">
        <p className="break-words text-2xl font-semibold tabular-nums"><bdi>{invoiceStats.convertedAmount.toFixed(2)} {invoiceStats.targetCurrency}</bdi></p>
        <p className="text-sm text-muted-foreground">{t('globalInvoiceParser.convertRateApplied', { rate: invoiceStats.rateApplied.toFixed(4), original: invoiceStats.originalAmount.toFixed(2), currency: invoiceStats.originalCurrency })}</p>
      </div>}<div className="mx-auto max-w-xl"><PDFPagePreview file={result} label={t('globalInvoiceParser.resultPreviewTitle')} /></div></CardContent>
      <CardFooter><DownloadButton file={result} filename={filename} showFileSize /></CardFooter>
    </Card>}
  </div>;
}
export default GlobalInvoiceParserTool;
