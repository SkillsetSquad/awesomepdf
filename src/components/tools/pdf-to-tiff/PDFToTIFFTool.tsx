'use client';
import { useEffect, useId, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { CheckCircle2, CircleAlert, FileText, Info, Loader2, Printer, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, type ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { pdfToTiff } from '@/lib/pdf/processors/pdf-to-tiff';
import type { ProcessOutput } from '@/types/pdf';

export interface PDFToTIFFToolProps {
  className?: string;
}

export function PDFToTIFFTool({ className = '' }: PDFToTIFFToolProps) {
  const t = useTranslations('common');
  const locale = useLocale();
  const id = useId();

  // File state
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingFile, setIsLoadingFile] = useState(false);

  // Configuration options
  const [colorMode, setColorMode] = useState<'color' | 'grayscale' | 'mono'>('color');
  const [compression, setCompression] = useState<'none' | 'packbits'>('packbits');
  const [dpi, setDpi] = useState<number>(150);

  // Processing & result states
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  const metadataRun = useRef(0);
  const processingRun = useRef(0);
  useEffect(() => () => { metadataRun.current++; processingRun.current++; }, []);

  /**
   * Handle File Selection and read pages
   */
  const handleFileSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const run = ++metadataRun.current;
    processingRun.current++;
    const selectedFile = files[0];
    setFile(selectedFile);
    setTotalPages(0);
    setIsLoadingFile(true);
    setError(null);
    setResult(null);
    setStatus('idle');

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      if (run !== metadataRun.current) return;
      setTotalPages(pdf.getPageCount());
    } catch (err) {
      if (run !== metadataRun.current) return;
      console.error(err);
      setError(t('pdfToTiff.errorMetadata'));
    } finally {
      if (run === metadataRun.current) setIsLoadingFile(false);
    }
  };

  const handleClearFile = () => {
    metadataRun.current++;
    processingRun.current++;
    setFile(null);
    setTotalPages(0);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setProgressMessage('');
    setIsLoadingFile(false);
  };

  /**
   * Run TIFF Compilation
   */
  const handleProcess = async () => {
    if (!file) {
      setError(t('pdfToTiff.errorUpload'));
      return;
    }

    const run = ++processingRun.current;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    // Compute PDFJS render scale based on DPI无级滑轨
    // 72 DPI corresponds to scale 1.0
    const calculatedScale = dpi / 72;

    try {
      const output: ProcessOutput = await pdfToTiff(
        file,
        {
          colorMode,
          compression,
          dpi,
          scale: calculatedScale
        },
        (prog, message) => {
          if (run === processingRun.current) {
            setProgress(prog);
            setProgressMessage(message || t('pdfToTiff.progressExtracting'));
          }
        }
      );

      if (run !== processingRun.current) return;

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || t('pdfToTiff.errorExtracting'));
        setStatus('error');
      }
    } catch (err) {
      if (run === processingRun.current) {
        setError(err instanceof Error ? err.message : t('pdfToTiff.errorUnknown'));
        setStatus('error');
      }
    }
  };

  const handleCancel = () => {
    processingRun.current++;
    setStatus('idle');
    setProgress(0);
    setProgressMessage('');
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  const colorModes = [
    { value: 'color', label: t('pdfToTiff.colorModeFull') },
    { value: 'grayscale', label: t('pdfToTiff.colorModeGrayscale') },
    { value: 'mono', label: t('pdfToTiff.colorModeMono') },
  ] as const;
  const compressionModes = [
    { value: 'none', label: t('pdfToTiff.compressionNone') },
    { value: 'packbits', label: t('pdfToTiff.compressionPackbits') },
  ] as const;

  return <div className={`space-y-6 ${className}`.trim()}>
    <div className="space-y-3">
      <h3 className="text-sm font-medium">{t('pdfToTiff.uploadLabel')}</h3>
      {file ? <Card className="flex flex-row items-center justify-between gap-4 p-4">
        <div className="flex min-w-0 items-center gap-3"><FileText aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
          <div className="min-w-0"><p className="truncate text-sm font-medium" title={file.name}>{file.name}</p>
            <p className="text-sm text-muted-foreground">{isLoadingFile ? t('aiPdfReflower.scanningMetadata') : t('pdfToTiff.uploadSuccess', { count: totalPages, size: (file.size / (1024 * 1024)).toFixed(2) })}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon-sm" aria-label={t('buttons.remove')} onClick={handleClearFile} disabled={isProcessing}><X aria-hidden="true" /></Button>
      </Card> : <FileUploader accept={['application/pdf']} multiple={false} onFilesSelected={handleFileSelected} onError={setError}
        disabled={isProcessing || isLoadingFile} label={t('pdfToTiff.uploadButton')} description={t('pdfToTiff.uploadDesc')} />}
    </div>

    {isLoadingFile && <div role="status" className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 aria-hidden="true" className="size-4 animate-spin" />{t('aiPdfReflower.scanningMetadata')}</div>}
    {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}

    {file && totalPages > 0 && <div className="grid items-start gap-6 lg:grid-cols-2">
      <Card className="p-6" role="region" aria-labelledby={`${id}-summary`}>
        <h3 id={`${id}-summary`} className="text-base font-semibold">{t('pdfToTiff.previewTitle')}</h3>
        <dl className="space-y-4 text-sm">
          <div><dt className="text-muted-foreground">{t('pdfToTiff.colorModeLabel')}</dt><dd className="font-medium">{colorModes.find(mode => mode.value === colorMode)?.label}</dd></div>
          <div><dt className="text-muted-foreground">{t('pdfToTiff.compressionLabel')}</dt><dd className="font-medium">{compressionModes.find(mode => mode.value === compression)?.label}</dd></div>
          <div><dt className="text-muted-foreground">{t('pdfToTiff.resolutionLabel')}</dt><dd className="font-medium tabular-nums">{t('pdfToTiff.resolutionDpi', { dpi, percent: Math.round(dpi / 72 * 100) })}</dd></div>
        </dl>
        <p className="text-sm text-muted-foreground">{t(colorMode === 'color' ? 'pdfToTiff.descColor' : colorMode === 'grayscale' ? 'pdfToTiff.descGrayscale' : 'pdfToTiff.descMono')}</p>
      </Card>

      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-base font-semibold">{t('pdfToTiff.optionsTitle')}</h3>
          <fieldset className="space-y-3">
            <legend id={`${id}-color`} className="mb-3 text-sm font-medium">{t('pdfToTiff.colorModeLabel')}</legend>
            <RadioGroup value={colorMode} onValueChange={value => { if (value === 'color' || value === 'grayscale' || value === 'mono') setColorMode(value); }}
              aria-labelledby={`${id}-color`} orientation="vertical" dir={direction} disabled={isProcessing}>
              {colorModes.map(mode => <div key={mode.value} className="flex items-start gap-3"><RadioGroupItem id={`${id}-color-${mode.value}`} value={mode.value} className="mt-0.5" /><Label className="min-w-0 leading-5" htmlFor={`${id}-color-${mode.value}`}>{mode.label}</Label></div>)}
            </RadioGroup>
          </fieldset>
          <fieldset className="space-y-3">
            <legend id={`${id}-compression`} className="mb-3 text-sm font-medium">{t('pdfToTiff.compressionLabel')}</legend>
            <RadioGroup value={compression} onValueChange={value => { if (value === 'none' || value === 'packbits') setCompression(value); }}
              aria-labelledby={`${id}-compression`} orientation="vertical" dir={direction} disabled={isProcessing}>
              {compressionModes.map(mode => <div key={mode.value} className="flex items-start gap-3"><RadioGroupItem id={`${id}-compression-${mode.value}`} value={mode.value} className="mt-0.5" /><Label className="min-w-0 leading-5" htmlFor={`${id}-compression-${mode.value}`}>{mode.label}</Label></div>)}
            </RadioGroup>
          </fieldset>
          <div className="space-y-3">
            <Label id={`${id}-dpi`}>{t('pdfToTiff.resolutionLabel')}<span className="ms-auto tabular-nums">{dpi} DPI</span></Label>
            <Slider value={[dpi]} onValueChange={([value]) => setDpi(value)} min={72} max={600} step={6} disabled={isProcessing} dir={direction}
              aria-labelledby={`${id}-dpi`} aria-valuetext={`${dpi} DPI`} />
            <div className="flex flex-wrap justify-between gap-2 text-xs text-muted-foreground"><span>72 DPI</span><span>150 DPI</span><span>300 DPI</span><span>600 DPI</span></div>
          </div>
          <Alert role="note"><Info aria-hidden="true" /><AlertDescription>{t('pdfToTiff.tipDesc')} {t('pdfToTiff.tipRecommend')}</AlertDescription></Alert>
        </Card>
        <Button className="w-full whitespace-normal" onClick={handleProcess} disabled={isProcessing || isLoadingFile} loading={isProcessing}>
          <Printer aria-hidden="true" />{isProcessing ? t('status.processing') : t('pdfToTiff.processButton')}
        </Button>
        {result && <DownloadButton file={result} filename={`${file.name.replace(/\.pdf$/i, '')}.tiff`} className="w-full" showFileSize />}
        {status === 'complete' && result && <Alert role="status"><CheckCircle2 aria-hidden="true" /><AlertDescription>{t('pdfToTiff.successMessage')}</AlertDescription></Alert>}
      </div>
    </div>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={handleCancel} showPercentage />}
  </div>;
}

export default PDFToTIFFTool;
