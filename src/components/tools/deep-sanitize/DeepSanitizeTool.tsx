"use client";

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CircleAlert, FileCheck, FileText, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { deepSanitizePDF } from '@/lib/pdf/processors/deep-sanitize';

export interface DeepSanitizeToolProps { className?: string; }

export function DeepSanitizeTool({ className = '' }: DeepSanitizeToolProps) {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const id = useId();
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);
  const [stripMetadata, setStripMetadata] = useState(true);
  const [stripPieceInfo, setStripPieceInfo] = useState(true);
  const [stripOcgWatermarks, setStripOcgWatermarks] = useState(true);
  const [stripAnnotations, setStripAnnotations] = useState(false);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [findings, setFindings] = useState<string[]>([]);
  const metadataRun = useRef(0);
  const processingRun = useRef(0);
  useEffect(() => () => { metadataRun.current++; processingRun.current++; }, []);

  const handleFileSelected = async (files: File[]) => {
    if (!files[0]) return;
    const run = ++metadataRun.current;
    processingRun.current++;
    const selectedFile = files[0];
    setFile(selectedFile); setTotalPages(0); setIsLoadingMetadata(true);
    setError(null); setResult(null); setFindings([]); setStatus('idle');
    try {
      const { PDFDocument } = await import('pdf-lib');
      const pdf = await PDFDocument.load(await selectedFile.arrayBuffer(), { ignoreEncryption: true });
      if (run === metadataRun.current) setTotalPages(pdf.getPageCount());
    } catch (err) {
      if (run === metadataRun.current) setError(err instanceof Error ? err.message : tErrors('processingFailed'));
    } finally {
      if (run === metadataRun.current) setIsLoadingMetadata(false);
    }
  };

  const handleSanitizeProcess = async () => {
    if (!file || isLoadingMetadata || !totalPages) return;
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setProgressMessage(t('status.processing'));
    setError(null); setResult(null); setFindings([]);
    try {
      const output = await deepSanitizePDF(file, { stripMetadata, stripPieceInfo, stripOcgWatermarks, stripAnnotations }, (value, message) => {
        if (run === processingRun.current) { setProgress(value); setProgressMessage(message || t('status.processing')); }
      });
      if (run !== processingRun.current) return;
      if (output.success && output.result) {
        setResult(output.result as Blob); setStatus('complete');
        const details = output.metadata?.findings;
        setFindings(Array.isArray(details) ? details.filter((item): item is string => typeof item === 'string') : []);
      } else {
        setError(output.error?.message || tErrors('processingFailed')); setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) { setError(err instanceof Error ? err.message : tErrors('processingFailed')); setStatus('error'); }
    }
  };

  const handleClearFile = () => {
    metadataRun.current++; processingRun.current++;
    setFile(null); setTotalPages(0); setIsLoadingMetadata(false); setResult(null); setError(null);
    setFindings([]); setStatus('idle'); setProgress(0); setProgressMessage('');
  };
  const isProcessing = status === 'processing';
  const settings = [
    { key: 'metadata', label: 'clearXmp', description: 'clearXmpDesc', checked: stripMetadata, set: setStripMetadata },
    { key: 'piece-info', label: 'clearPieceInfo', description: 'clearPieceInfoDesc', checked: stripPieceInfo, set: setStripPieceInfo },
    { key: 'layers', label: 'clearOcProperties', description: 'clearOcPropertiesDesc', checked: stripOcgWatermarks, set: setStripOcgWatermarks },
    { key: 'annotations', label: 'clearAnnotations', description: 'clearAnnotationsDesc', checked: stripAnnotations, set: setStripAnnotations },
  ];
  const findingLabels: Record<string, string> = {
    'XMP Metadata Stream (contains creator details, modification logs)': t('deepSanitize.clearXmp'),
    'Standard Document Info fields (Title, Author, Creation Date)': t('deepSanitize.clearXmpDesc'),
    'PieceInfo cache (contains proprietary editor histories)': t('deepSanitize.clearPieceInfo'),
    'StructTreeRoot (logical structure tree used in tracking)': t('deepSanitize.structureTags'),
    'OCProperties layers (often host invisible watermarks)': t('deepSanitize.clearOcProperties'),
    'Interactive annotations & links': t('deepSanitize.clearAnnotations'),
    'Incremental revision history logs (forces full xref reconstruction)': t('deepSanitize.rewrittenDocument'),
  };

  return <div className={`space-y-6 ${className}`.trim()}>
    {!file && <FileUploader accept={['application/pdf']} multiple={false} onFilesSelected={handleFileSelected} onError={setError}
      disabled={isProcessing || isLoadingMetadata} label={t('deepSanitize.uploadLabel')} description={t('deepSanitize.uploadDescription')} />}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {file && <Card className="flex flex-row items-center justify-between gap-4 p-4">
      <div className="flex min-w-0 items-center gap-3"><FileText aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
        <div className="min-w-0"><p className="truncate text-sm font-medium" title={file.name}>{file.name}</p>
          <p className="text-sm text-muted-foreground">{isLoadingMetadata ? t('deepSanitize.prechecking') : t('removeBlankPages.pagesCount', { count: totalPages, size: (file.size / (1024 * 1024)).toFixed(2) })}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" disabled={isProcessing} onClick={handleClearFile}>{t('buttons.remove')}</Button>
    </Card>}
    {isLoadingMetadata && <div role="status" className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 aria-hidden="true" className="size-4 animate-spin" />{t('deepSanitize.prechecking')}</div>}
    {file && !isLoadingMetadata && totalPages > 0 && status !== 'complete' && <Card className="p-6">
      <h3 className="text-base font-semibold">{t('deepSanitize.optionsTitle')}</h3>
      <div className="space-y-4">{settings.map(setting => <div key={setting.key} className="flex items-start gap-3">
        <Checkbox id={`${id}-${setting.key}`} className="mt-0.5" checked={setting.checked} disabled={isProcessing}
          onCheckedChange={checked => setting.set(checked === true)} aria-describedby={`${id}-${setting.key}-description`} />
        <div className="min-w-0 space-y-1"><Label htmlFor={`${id}-${setting.key}`}>{t(`deepSanitize.${setting.label}`)}</Label>
          <p id={`${id}-${setting.key}-description`} className="text-sm text-muted-foreground">{t(`deepSanitize.${setting.description}`)}</p>
        </div>
      </div>)}</div>
      <Button className="w-full whitespace-normal sm:w-fit" onClick={handleSanitizeProcess} disabled={isProcessing} loading={isProcessing}>{t('deepSanitize.processButton')}</Button>
    </Card>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={() => { processingRun.current++; setProgress(0); setProgressMessage(''); setStatus('idle'); }} />}
    {status === 'complete' && result && <Card className="p-6">
      <div role="status" className="flex items-start gap-3"><FileCheck aria-hidden="true" className="size-5 shrink-0 text-primary" /><div className="space-y-1">
        <h3 className="text-base font-semibold">{t('deepSanitize.successTitle')}</h3><p className="text-sm text-muted-foreground">{t('deepSanitize.successDesc')}</p>
      </div></div>
      {findings.length > 0 && <section aria-labelledby={`${id}-report`} className="space-y-2"><h4 id={`${id}-report`} className="text-sm font-medium">{t('deepSanitize.riskReport')}</h4>
        <ul className="list-disc space-y-1 ps-5 text-sm text-muted-foreground">{findings.map((finding, index) => <li key={`${index}:${finding}`}>{findingLabels[finding] ?? finding}</li>)}</ul>
      </section>}
      <DownloadButton file={result} filename={file?.name.replace(/\.pdf$/i, '_sanitized.pdf') || 'sanitized_document.pdf'} showFileSize />
    </Card>}
  </div>;
}

export default DeepSanitizeTool;
