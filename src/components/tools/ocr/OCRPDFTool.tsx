"use client";

import { useEffect, useId, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { CircleAlert, Copy, ExternalLink, FileCheck, FileText, Info, Scan } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Switch } from '@/components/ui/switch';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { ocrPDF, type OCROptions, type OCRLanguage, OCR_LANGUAGE_NAMES } from '@/lib/pdf/processors/ocr';

const availableLanguages: OCRLanguage[] = ['eng', 'chi_sim', 'chi_tra', 'jpn', 'kor', 'spa', 'fra', 'deu', 'por', 'ara', 'hun'];
type OCRStats = { pageCount?: number; totalWords?: number; totalChars?: number; avgConfidence?: number };
const numeric = (value: unknown) => typeof value === 'number' && Number.isFinite(value) ? value : undefined;

function parsePageRange(range: string): number[] {
  const pages: number[] = [];
  for (const part of range.split(',')) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [start, end] = trimmed.split('-').map(value => parseInt(value.trim(), 10));
      if (!isNaN(start) && !isNaN(end)) for (let page = start; page <= end; page++) if (!pages.includes(page)) pages.push(page);
    } else {
      const page = parseInt(trimmed, 10);
      if (!isNaN(page) && !pages.includes(page)) pages.push(page);
    }
  }
  return pages.sort((a, b) => a - b);
}

export interface OCRPDFToolProps { className?: string; }

export function OCRPDFTool({ className = '' }: OCRPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.ocrPdf');
  const tErrors = useTranslations('errors');
  const locale = useLocale();
  const router = useRouter();
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [textPreview, setTextPreview] = useState<string | null>(null);
  const [stats, setStats] = useState<OCRStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [languages, setLanguages] = useState<OCRLanguage[]>(['eng']);
  const [outputFormat, setOutputFormat] = useState<OCROptions['outputFormat']>('searchable-pdf');
  const [scale, setScale] = useState(2);
  const [pageRange, setPageRange] = useState('');
  const [enhanceContrast, setEnhanceContrast] = useState(true);
  const processingRun = useRef(0);
  const copyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { processingRun.current++; if (copyTimer.current) clearTimeout(copyTimer.current); }, []);

  const clearResult = () => {
    processingRun.current++;
    if (copyTimer.current) clearTimeout(copyTimer.current);
    setResult(null); setTextPreview(null); setStats(null); setCopied(false); setError(null);
    setStatus('idle'); setProgress(0); setProgressMessage('');
  };
  const handleFilesSelected = (files: File[]) => { if (files[0]) { clearResult(); setFile(files[0]); } };
  const handleOCR = async () => {
    if (!file || status === 'processing') return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing'));
    setError(null); setResult(null); setTextPreview(null); setStats(null); setCopied(false);
    try {
      const output = await ocrPDF(file, { languages, outputFormat, scale, pages: parsePageRange(pageRange), enhanceContrast }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (!output.success || !output.result) {
        const details = output.error?.details ? ` (${output.error.details})` : '';
        setError(`${output.error?.message || tErrors('processingFailed')}${details}`); setStatus('error'); return;
      }
      const blob = output.result as Blob;
      const text = outputFormat === 'searchable-pdf'
        ? typeof output.metadata?.rawText === 'string' ? output.metadata.rawText : null
        : await blob.text();
      if (run !== processingRun.current) return;
      setResult(blob); setTextPreview(text);
      setStats({ pageCount: numeric(output.metadata?.pageCount), totalWords: numeric(output.metadata?.totalWords),
        totalChars: numeric(output.metadata?.totalChars), avgConfidence: numeric(output.metadata?.avgConfidence) });
      setStatus('complete');
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };

  const handleCopy = async () => {
    if (!textPreview) return;
    const run = processingRun.current;
    try {
      try { await navigator.clipboard.writeText(textPreview); }
      catch {
        const textarea = document.createElement('textarea');
        textarea.value = textPreview;
        textarea.className = 'sr-only';
        document.body.appendChild(textarea);
        const focused = document.activeElement;
        try { textarea.select(); if (!document.execCommand('copy')) throw new Error(t('ocr.copyFailed')); }
        finally { textarea.remove(); if (focused instanceof HTMLElement) focused.focus(); }
      }
      if (run !== processingRun.current) return;
      setCopied(true); setError(null);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch { if (run === processingRun.current) setError(t('ocr.copyFailed')); }
  };

  const handleOpenInEditor = () => {
    if (!result || !file) return;
    const fileName = `${file.name.replace(/\.[^.]+$/, '')}_ocr.pdf`;
    const targetFile = new File([result], fileName, { type: 'application/pdf' });
    const transfer = window as Window & { __AWSOMEPDF_PENDING_EDIT_FILE__?: File | null };
    transfer.__AWSOMEPDF_PENDING_EDIT_FILE__ = targetFile;
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (transfer.__AWSOMEPDF_PENDING_EDIT_FILE__ !== targetFile) return;
        try { window.sessionStorage.setItem('awsomepdf_pending_edit_file', JSON.stringify({ name: fileName, type: 'application/pdf', data: reader.result })); }
        catch { /* The in-memory file still supports transfer if storage is full. */ }
      };
      reader.readAsDataURL(result);
    } catch { /* The in-memory file remains available to the editor. */ }
    router.push(`/${locale}/tools/edit-pdf`);
  };

  const isProcessing = status === 'processing';
  const statLabels = [
    ['pageCount', 'statsPages'], ['totalWords', 'statsWords'], ['totalChars', 'statsChars'], ['avgConfidence', 'statsConfidence'],
  ] as const;
  const extension = outputFormat === 'text' ? 'txt' : outputFormat === 'markdown' ? 'md' : outputFormat === 'json' ? 'json' : 'pdf';

  return <div className={`space-y-6 ${className}`.trim()}>
    {!file && <FileUploader accept={['application/pdf', '.pdf', 'image/png', '.png', 'image/jpeg', '.jpg', '.jpeg', 'image/webp', '.webp']}
      multiple={false} maxFiles={1} onFilesSelected={handleFilesSelected} onError={setError} disabled={isProcessing}
      label={tTools('uploadLabel')} description={tTools('uploadDescription')} />}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <Card className="flex flex-row items-center justify-between gap-4 p-4">
      <div className="flex min-w-0 items-center gap-3"><FileText aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
        <div className="min-w-0"><p className="truncate text-sm font-medium" title={file.name}>{file.name}</p>
          <p className="text-sm text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p></div>
      </div>
      <Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => { clearResult(); setFile(null); }}>{t('buttons.remove')}</Button>
    </Card>}
    {file && status !== 'complete' && <Card className="p-6">
      <h3 className="text-base font-semibold">{t('ocr.optionsTitle')}</h3>
      <fieldset className="space-y-3" disabled={isProcessing}>
        <legend className="mb-3 text-sm font-medium">{t('ocr.selectLang')}</legend>
        <div className="flex flex-wrap gap-2">{availableLanguages.map(lang => <Button key={lang} size="sm" variant={languages.includes(lang) ? 'default' : 'outline'}
          aria-pressed={languages.includes(lang)} disabled={isProcessing} onClick={() => setLanguages(previous => previous.includes(lang)
            ? previous.length > 1 ? previous.filter(value => value !== lang) : previous : [...previous, lang])}>{OCR_LANGUAGE_NAMES[lang]}</Button>)}</div>
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2"><Label htmlFor={`${id}-format`}>{t('ocr.outputFormat')}</Label>
          <NativeSelect id={`${id}-format`} value={outputFormat} disabled={isProcessing} onChange={event => setOutputFormat(event.target.value as OCROptions['outputFormat'])}>
            <NativeSelectOption value="searchable-pdf">{t('ocr.formatSearchablePdf')}</NativeSelectOption>
            <NativeSelectOption value="text">{t('ocr.formatText')}</NativeSelectOption>
            <NativeSelectOption value="markdown">{t('ocr.formatMarkdown')}</NativeSelectOption>
            <NativeSelectOption value="json">{t('ocr.formatJson')}</NativeSelectOption>
          </NativeSelect></div>
        <div className="space-y-2"><Label htmlFor={`${id}-scale`}>{t('ocr.accuracyTitle')}</Label>
          <NativeSelect id={`${id}-scale`} value={scale} disabled={isProcessing} onChange={event => setScale(Number(event.target.value))}>
            <NativeSelectOption value="1">{t('ocr.accuracySd')}</NativeSelectOption><NativeSelectOption value="2">{t('ocr.accuracyHd')}</NativeSelectOption>
            <NativeSelectOption value="3">{t('ocr.accuracyUd')}</NativeSelectOption>
          </NativeSelect></div>
        <div className="space-y-2"><Label htmlFor={`${id}-pages`}>{t('ocr.specifyPages')}</Label>
          <Input id={`${id}-pages`} value={pageRange} placeholder={t('ocr.pagesPlaceholder')} disabled={isProcessing} onChange={event => setPageRange(event.target.value)} /></div>
      </div>
      <div className="flex items-start gap-3"><Switch id={`${id}-contrast`} checked={enhanceContrast} onCheckedChange={setEnhanceContrast} disabled={isProcessing}
        aria-describedby={`${id}-contrast-description`} className="mt-0.5" />
        <div className="space-y-1"><Label htmlFor={`${id}-contrast`}>{t('ocr.enhanceContrast')}</Label>
          <p id={`${id}-contrast-description`} className="text-sm text-muted-foreground">{t('ocr.enhanceContrastDesc')}</p></div>
      </div>
      <Alert role="note"><Info aria-hidden="true" /><AlertTitle>{t('ocr.advantageTitle')}</AlertTitle>
        <AlertDescription>{t.rich('ocr.advantageDesc', { b: chunks => <strong>{chunks}</strong> })}</AlertDescription></Alert>
      <Button className="w-full whitespace-normal sm:w-fit" disabled={isProcessing} loading={isProcessing} onClick={handleOCR}><Scan aria-hidden="true" />{t('ocr.startOcr')}</Button>
    </Card>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={() => { processingRun.current++; setStatus('idle'); setProgress(0); setProgressMessage(''); }} />}
    {status === 'complete' && result && <Card className="p-6">
      <div role="status" className="flex items-start gap-3"><FileCheck aria-hidden="true" className="size-5 shrink-0 text-primary" /><div className="space-y-1">
        <h3 className="text-base font-semibold">{t('ocr.successTitle')}</h3>
        <p className="text-sm text-muted-foreground">{t(outputFormat === 'searchable-pdf' ? 'ocr.successSearchablePdf' : 'ocr.successText')}</p></div></div>
      {stats && <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">{statLabels.map(([key, label]) => <div key={key} className="space-y-1">
        <dt className="text-sm text-muted-foreground">{t(`ocr.${label}`)}</dt><dd className="font-medium tabular-nums">{stats[key] === undefined ? '—' : `${stats[key]}${key === 'avgConfidence' ? '%' : ''}`}</dd>
      </div>)}</dl>}
      <div className="flex flex-wrap gap-3"><DownloadButton file={result} filename={`${file?.name.replace(/\.(pdf|png|jpe?g|webp|bmp|tiff?)$/i, '')}_ocr.${extension}`} showFileSize />
        {outputFormat === 'searchable-pdf' && <Button variant="secondary" onClick={handleOpenInEditor}><ExternalLink aria-hidden="true" />{t('ocr.openInEditor')}</Button>}</div>
    </Card>}
    {textPreview && <Card className="p-6" role="region" aria-labelledby={`${id}-preview`}>
      <div className="flex flex-wrap items-center justify-between gap-3"><h3 id={`${id}-preview`} className="text-base font-semibold">{t('ocr.previewTitle')}</h3>
        <Button variant="outline" size="sm" onClick={handleCopy}><Copy aria-hidden="true" />{t(copied ? 'ocr.copied' : 'ocr.copyText')}</Button></div>
      <pre className="max-h-80 overflow-auto whitespace-pre-wrap break-words text-sm" tabIndex={0}>{textPreview}</pre>
      {copied && <p role="status" className="sr-only">{t('ocr.copied')}</p>}
    </Card>}
  </div>;
}

export default OCRPDFTool;
