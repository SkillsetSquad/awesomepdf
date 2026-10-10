'use client';

import { useCallback, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { BookOpen, CheckCircle2, CircleAlert, FileText, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { pdfToCbz } from '@/lib/pdf/processors/pdf-to-cbz';

const fields = [
  { key: 'title', label: 'fieldTitle' },
  { key: 'series', label: 'fieldSeries', placeholder: 'seriesPlaceholder' },
  { key: 'number', label: 'fieldIssue' },
  { key: 'volume', label: 'fieldVolume' },
  { key: 'writer', label: 'fieldArtist', placeholder: 'artistPlaceholder' },
  { key: 'publisher', label: 'fieldPublisher', placeholder: 'publisherPlaceholder' },
  { key: 'genre', label: 'fieldGenre', placeholder: 'genrePlaceholder' },
] as const;

type MetadataField = typeof fields[number]['key'];

export interface PDFToCBZToolProps { className?: string }

export function PDFToCBZTool({ className = '' }: PDFToCBZToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [metadata, setMetadata] = useState<Record<MetadataField, string>>({ title: '', series: '', number: '1', volume: '1', writer: '', publisher: '', genre: '' });
  const [manga, setManga] = useState<'No' | 'YesAndRightToLeft'>('No');
  const [grayscale, setGrayscale] = useState(false);
  const [format, setFormat] = useState<'jpg' | 'png' | 'webp'>('jpg');
  const [scale, setScale] = useState(1.5);
  const [quality, setQuality] = useState(0.85);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const selection = useRef(0);
  const operation = useRef(0);
  const isProcessing = status === 'processing';

  const handleFileSelected = useCallback(async (files: File[]) => {
    if (!files.length) return;
    const current = ++selection.current;
    operation.current++;
    const selectedFile = files[0];
    setFile(selectedFile);
    setTotalPages(0);
    setIsLoadingFile(true);
    setError(null);
    setResult(null);
    setStatus('idle');
    const baseName = selectedFile.name.substring(0, selectedFile.name.lastIndexOf('.')) || selectedFile.name;
    setMetadata(previous => ({ ...previous, title: baseName }));
    try {
      const { PDFDocument } = await import('pdf-lib');
      const pdf = await PDFDocument.load(await selectedFile.arrayBuffer(), { ignoreEncryption: true });
      if (selection.current === current) setTotalPages(pdf.getPageCount());
    } catch (error) {
      console.error(error);
      if (selection.current === current) setError(t('pdfToCbz.errorMetadata'));
    } finally {
      if (selection.current === current) setIsLoadingFile(false);
    }
  }, [t]);

  const resetResult = () => { setResult(null); setStatus('idle'); setError(null); };
  const handleClearFile = () => {
    selection.current++;
    operation.current++;
    setFile(null);
    setTotalPages(0);
    setIsLoadingFile(false);
    setMetadata(previous => ({ ...previous, title: '' }));
    resetResult();
  };
  const handleProcess = async () => {
    if (!file) { setError(t('pdfToCbz.errorUpload')); return; }
    const current = ++operation.current;
    setStatus('processing');
    setProgress(0);
    setProgressMessage('');
    setError(null);
    setResult(null);
    try {
      const output = await pdfToCbz(file, {
        title: metadata.title || file.name.replace(/\.pdf$/i, ''),
        series: metadata.series || undefined, number: metadata.number || undefined,
        volume: metadata.volume || undefined, writer: metadata.writer || undefined,
        publisher: metadata.publisher || undefined, genre: metadata.genre || undefined,
        manga, grayscale, format, scale, quality,
      }, (value, message) => {
        if (operation.current !== current) return;
        setProgress(value);
        setProgressMessage(message || t('pdfToCbz.progressExtracting'));
      });
      if (operation.current !== current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || t('pdfToCbz.errorExtracting'));
        setStatus('error');
      }
    } catch (error) {
      if (operation.current !== current) return;
      setError(error instanceof Error ? error.message : t('pdfToCbz.errorUnknown'));
      setStatus('error');
    }
  };

  return <div className={`space-y-6 ${className}`.trim()}>
    {file ? <Card>
      <CardHeader>
        <div className="flex min-w-0 items-center gap-3">
          <FileText className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
          <div className="min-w-0 space-y-1">
            <CardTitle className="break-all">{file.name}</CardTitle>
            <p className="text-sm text-muted-foreground" role="status">{isLoadingFile ? t('aiPdfReflower.scanningMetadata') : t('pdfToCbz.uploadSuccess', { count: totalPages, size: (file.size / (1024 * 1024)).toFixed(2) })}</p>
          </div>
        </div>
        <CardAction><Button variant="ghost" size="icon-sm" onClick={handleClearFile} disabled={isProcessing} aria-label={`${t('buttons.remove')}: ${file.name}`}><X aria-hidden="true" /></Button></CardAction>
      </CardHeader>
    </Card> : <FileUploader accept={['application/pdf']} multiple={false} onFilesSelected={handleFileSelected} onError={setError}
      disabled={isProcessing || isLoadingFile} label={t('pdfToCbz.uploadButton')} description={t('pdfToCbz.uploadDesc')} />}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && totalPages > 0 && <div className="grid items-start gap-6 lg:grid-cols-3">
      <Card role="region" aria-labelledby="cbz-preview-title">
        <CardHeader><CardTitle id="cbz-preview-title">{t('pdfToCbz.previewTitle')}</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <BookOpen className="size-8 text-muted-foreground" aria-hidden="true" />
          <dl className="space-y-4">
            {fields.filter(field => ['title', 'series', 'volume', 'number', 'writer'].includes(field.key)).map(field => {
              const value = metadata[field.key] || (field.key === 'title' ? t('pdfToCbz.comicTitleDefault') : field.key === 'writer' ? t('pdfToCbz.comicArtistDefault') : '');
              return value && <div key={field.key}><dt className="text-sm text-muted-foreground">{t(`pdfToCbz.${field.label}`)}</dt><dd className="break-words text-sm font-medium">{value}</dd></div>;
            })}
            <div><dt className="text-sm text-muted-foreground">{t('pdfToCbz.readingOrderLabel')}</dt><dd className="text-sm font-medium">{t(manga === 'YesAndRightToLeft' ? 'pdfToCbz.readingOrderRtl' : 'pdfToCbz.readingOrderLtr')}</dd></div>
          </dl>
          <p className="text-sm text-muted-foreground">{t(manga === 'YesAndRightToLeft' ? 'pdfToCbz.directionRtlHelp' : 'pdfToCbz.directionLtrHelp')}</p>
        </CardContent>
      </Card>
      <div className="space-y-6 lg:col-span-2">
        <Card>
          <CardHeader><CardTitle>{t('pdfToCbz.metadataTitle')}</CardTitle></CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            {fields.map(field => <div key={field.key} className="space-y-2">
              <Label htmlFor={`cbz-${field.key}`}>{t(`pdfToCbz.${field.label}`)}</Label>
              <Input id={`cbz-${field.key}`} value={metadata[field.key]} disabled={isProcessing}
                placeholder={'placeholder' in field ? t(`pdfToCbz.${field.placeholder}`) : undefined}
                onChange={event => { setMetadata(previous => ({ ...previous, [field.key]: event.target.value })); resetResult(); }} />
            </div>)}
            <div className="space-y-2">
              <Label htmlFor="cbz-reading-order">{t('pdfToCbz.readingOrderLabel')}</Label>
              <NativeSelect id="cbz-reading-order" value={manga} disabled={isProcessing} onChange={event => { setManga(event.target.value === 'YesAndRightToLeft' ? 'YesAndRightToLeft' : 'No'); resetResult(); }}>
                <NativeSelectOption value="No">{t('pdfToCbz.readingOrderLtr')}</NativeSelectOption>
                <NativeSelectOption value="YesAndRightToLeft">{t('pdfToCbz.readingOrderRtl')}</NativeSelectOption>
              </NativeSelect>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>{t('pdfToCbz.deviceOptimizeTitle')}</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2"><Label htmlFor="cbz-quality">{t('pdfToCbz.qualityLabel')}</Label><span className="text-sm tabular-nums">{Math.round(quality * 100)}%</span></div>
              <Slider id="cbz-quality" min={0.5} max={1} step={0.05} value={[quality]} disabled={isProcessing} aria-label={t('pdfToCbz.qualityLabel')} aria-valuetext={`${Math.round(quality * 100)}%`} onValueChange={values => { setQuality(values[0]); resetResult(); }} />
            </div>
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2"><Label htmlFor="cbz-scale">{t('pdfToCbz.scaleLabel')}</Label><span className="text-sm tabular-nums">{scale.toFixed(1)}x ({Math.round(scale * 72)} DPI)</span></div>
              <Slider id="cbz-scale" min={1} max={2.5} step={0.1} value={[scale]} disabled={isProcessing} aria-label={t('pdfToCbz.scaleLabel')} aria-valuetext={`${scale.toFixed(1)}x`} onValueChange={values => { setScale(values[0]); resetResult(); }} />
            </div>
            <div className="space-y-2" role="group" aria-label={t('pdfToCbz.formatLabel')}>
              <p className="text-sm font-medium">{t('pdfToCbz.formatLabel')}</p>
              <div className="flex flex-wrap gap-2">{(['jpg', 'png', 'webp'] as const).map(value => <Button key={value} size="sm" variant={format === value ? 'default' : 'outline'} aria-pressed={format === value} disabled={isProcessing} onClick={() => { setFormat(value); resetResult(); }}>{value.toUpperCase()}</Button>)}</div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1"><Label htmlFor="cbz-grayscale">{t('pdfToCbz.einkGreyscale')}</Label><p id="cbz-grayscale-help" className="text-sm text-muted-foreground">{t('pdfToCbz.einkGreyscaleDesc')}</p></div>
              <Switch id="cbz-grayscale" checked={grayscale} disabled={isProcessing} aria-describedby="cbz-grayscale-help" onCheckedChange={value => { setGrayscale(value); resetResult(); }} />
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-col gap-3">
          <Button size="lg" loading={isProcessing} onClick={handleProcess}><BookOpen aria-hidden="true" />{t('pdfToCbz.processButton')}</Button>
          {result && <DownloadButton file={result} filename={`${file.name.replace(/\.pdf$/i, '')}.cbz`} variant="secondary" size="lg" showFileSize />}
        </div>
        {status === 'complete' && result && <Alert role="status"><CheckCircle2 aria-hidden="true" /><AlertDescription>{t('pdfToCbz.successMessage')}</AlertDescription></Alert>}
      </div>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={() => { operation.current++; setStatus('idle'); setProgress(0); }} showPercentage />}
  </div>;
}

export default PDFToCBZTool;
