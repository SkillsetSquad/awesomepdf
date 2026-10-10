'use client';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { FileText as UIFileText, X as UIX } from 'lucide-react';

import { Slider } from '@/components/ui/slider';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { pdfToTiff } from '@/lib/pdf/processors/pdf-to-tiff';
import type { ProcessOutput } from '@/types/pdf';
import {
  Printer,
  Settings,
  Cpu,
  Layers,
  Sliders,
  Info,
  Check,
  AlertCircle
} from 'lucide-react';

export interface PDFToTIFFToolProps {
  className?: string;
}

export function PDFToTIFFTool({ className = '' }: PDFToTIFFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

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

  // Cancellation ref
  const cancelledRef = useRef(false);

  /**
   * Handle File Selection and read pages
   */
  const handleFileSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    setFile(selectedFile);
    setIsLoadingFile(true);
    setError(null);
    setResult(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setTotalPages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
      setError(t('pdfToTiff.errorMetadata'));
    } finally {
      setIsLoadingFile(false);
    }
  }, []);

  const handleClearFile = () => {
    setFile(null);
    setTotalPages(0);
    setResult(null);
  };

  /**
   * Run TIFF Compilation
   */
  const handleProcess = async () => {
    if (!file) {
      setError(t('pdfToTiff.errorUpload'));
      return;
    }

    cancelledRef.current = false;
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
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || t('pdfToTiff.progressExtracting'));
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || t('pdfToTiff.errorExtracting'));
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : t('pdfToTiff.errorUnknown'));
        setStatus('error');
      }
    }
  };

  const handleCancel = () => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Zone */}
      <div className="space-y-3">
        <Label className="block" htmlFor="pdftotifftool-slider-1">
          {t('pdfToTiff.uploadLabel')}
        </Label>
        {file ? (
          <Card

            className="relative group p-4 flex items-center justify-between border-2 border-primary/30 bg-muted/15"
          >
            <div className="flex items-center gap-3">
              <UIFileText className="w-10 h-10 text-primary" aria-hidden="true" />
              <div>
                <p
                  className="font-semibold text-sm text-foreground truncate max-w-[280px] md:max-w-md"
                  title={file.name}
                >
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {totalPages > 0 ? t('pdfToTiff.uploadSuccess', { count: totalPages, size: (file.size / (1024 * 1024)).toFixed(2) }) : (t('aiPdfReflower.scanningMetadata') || 'Loading...')}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon-sm"
              onClick={handleClearFile}
              disabled={isProcessing}

            >
              <UIX className="w-5 h-5" aria-hidden="true" />
            </Button>
          </Card>
        ) : (
          <FileUploader
            accept={['application/pdf']}
            multiple={false}
            onFilesSelected={handleFileSelected}
            onError={setError}
            disabled={isProcessing || isLoadingFile}
            label={t('pdfToTiff.uploadButton')}
            description={t('pdfToTiff.uploadDesc')}
            className="min-h-[160px] p-6 rounded-2xl"
          />
        )}
      </div>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <div className="flex gap-2.5 items-start">
            <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
            <p className="text-sm font-semibold">{error}</p>
          </div>
        </AlertDescription></Alert>
      )}

      {/* Configuration & 3D Interactive Grid */}
      {file && totalPages > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT: 3D Pixel Grid Interactive Widget */}
          <div className="lg:col-span-5 space-y-4">
            <Card  className="p-6 bg-card flex flex-col items-center justify-center min-h-[360px] overflow-hidden relative">
              <span className="text-xs font-bold text-muted-foreground mb-8 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-primary" />
                {t('pdfToTiff.previewTitle')}
              </span>

              <div
                className="relative w-44 h-44 transform-gpu transition-all duration-700 ease-in-out"
                style={{
                  perspective: '600px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* 3D Grid container */}
                <div
                  className="w-full h-full border border-border rounded-2xl flex items-center justify-center transition-all duration-500 shadow-2xl"
                  style={{
                    transform: 'rotateX(55deg) rotateZ(-35deg)',
                    background: 'rgba(15, 15, 18, 0.85)',
                    boxShadow: colorMode === 'mono'
                      ? '0 25px 50px rgba(255, 255, 255, 0.05), inset 0 0 20px rgba(255,255,255,0.03)'
                      : colorMode === 'grayscale'
                        ? '0 25px 50px rgba(156, 163, 175, 0.08), inset 0 0 20px rgba(156, 163, 175, 0.03)'
                        : '0 25px 50px rgba(99, 102, 241, 0.25), inset 0 0 20px rgba(99, 102, 241, 0.08)',
                  }}
                >
                  {/* Dynamic Grid lines representing DPI */}
                  <div
                    className="absolute inset-4 rounded-xl opacity-90 grid gap-1 transition-all duration-500"
                    style={{
                      gridTemplateColumns: `repeat(${dpi <= 100 ? 5 : dpi <= 200 ? 10 : 16}, minmax(0, 1fr))`,
                      gridTemplateRows: `repeat(${dpi <= 100 ? 5 : dpi <= 200 ? 10 : 16}, minmax(0, 1fr))`,
                    }}
                  >
                    {Array.from({ length: dpi <= 100 ? 25 : dpi <= 200 ? 100 : 256 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="rounded-xs transition-all duration-700"
                        style={{
                          background: colorMode === 'mono'
                            ? (Math.random() > 0.45 ? '#ffffff' : '#000000')
                            : colorMode === 'grayscale'
                              ? `rgb(${Math.random() * 200 + 40}, ${Math.random() * 200 + 40}, ${Math.random() * 200 + 40})`
                              : `hsl(${(idx * 17) % 360}, 90%, 65%)`,
                          opacity: colorMode === 'mono' ? (Math.random() > 0.45 ? 0.95 : 0.1) : 0.8
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center max-w-xs leading-normal">
                <p className="text-[11px] font-semibold text-muted-foreground">
                  {colorMode === 'color'
                    ? t('pdfToTiff.descColor')
                    : colorMode === 'grayscale'
                      ? t('pdfToTiff.descGrayscale')
                      : t('pdfToTiff.descMono')
                  }
                </p>
              </div>
            </Card>
          </div>

          {/* RIGHT: Parameter adjustments */}
          <div className="lg:col-span-7 space-y-6">
            <Card

              className="p-6 gap-6 border"
            >
              <h3 className="text-sm font-bold text-foreground border-b border-border pb-3 flex items-center gap-1.5">
                <Printer className="w-4.5 h-4.5 text-primary" />
                {t('pdfToTiff.optionsTitle')}
              </h3>

              {/* Color Mode Switcher */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5 text-muted-foreground" />
                  {t('pdfToTiff.colorModeLabel')}
                </span>
                <div className="flex bg-muted/50 p-0.5 rounded-xl border border-input/40">
                  {[
                    { mode: 'color', label: t('pdfToTiff.colorModeFull') },
                    { mode: 'grayscale', label: t('pdfToTiff.colorModeGrayscale') },
                    { mode: 'mono', label: t('pdfToTiff.colorModeMono') }
                  ].map(item => (
                    <Button size="sm" variant={colorMode === item.mode ? 'default' : 'outline'} aria-pressed={colorMode === item.mode}
                      key={item.mode}
                      type="button"
                      onClick={() => setColorMode(item.mode as any)}
                      className="flex-1"
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Compression Algorithm */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-muted-foreground flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-muted-foreground" />
                  {t('pdfToTiff.compressionLabel')}
                </span>
                <div className="flex bg-muted/50 p-0.5 rounded-xl border border-input/40">
                  {[
                    { cmp: 'none', label: t('pdfToTiff.compressionNone') },
                    { cmp: 'packbits', label: t('pdfToTiff.compressionPackbits') }
                  ].map(item => (
                    <Button size="sm" variant={compression === item.cmp ? 'default' : 'outline'} aria-pressed={compression === item.cmp}
                      key={item.cmp}
                      type="button"
                      onClick={() => setCompression(item.cmp as any)}
                      className="flex-1"
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* DPI 无级滑轨 */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-muted-foreground flex items-center gap-1">
                    <Settings className="w-3.5 h-3.5 text-muted-foreground" />
                    {t('pdfToTiff.resolutionLabel')}
                  </span>
                  <span className="font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                    {t('pdfToTiff.resolutionDpi', { dpi, percent: Math.round(dpi / 72 * 100) })}
                  </span>
                </div>

                <Slider
                  min={72}
                  max={600}
                  step={6}
                  value={[dpi]}
                  onValueChange={(values) => setDpi(parseInt(String(values[0]), 10))}
                  className="w-full cursor-pointer" id="pdftotifftool-slider-1" aria-label={t('pdfToTiff.uploadLabel')}
                />

                <div className="flex justify-between text-[9px] text-muted-foreground font-semibold">
                  <span>{t('pdfToTiff.dpi72')}</span>
                  <span>{t('pdfToTiff.dpi150')}</span>
                  <span>{t('pdfToTiff.dpi300')}</span>
                  <span>{t('pdfToTiff.dpi600')}</span>
                </div>
              </div>

              {/* Halftone / 1-bit logic notice */}
              <div className="p-3 rounded-xl bg-muted border border-border/50 text-[10px] text-muted-foreground leading-normal flex gap-2">
                <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground">{t('pdfToTiff.tipTitle')}</span>
                  {t('pdfToTiff.tipDesc') || 'TIFF recommendations:'} <span className="text-primary font-semibold mx-0.5">{t('pdfToTiff.tipRecommend') || '300 DPI'}</span> {t('pdfToTiff.tipTail') || 'to ensure clean edges.'}
                </div>
              </div>

            </Card>

            {/* Run Buttons */}
            <div className="space-y-3">
              <Button
                variant="default"
                size="lg"
                onClick={handleProcess}
                disabled={isProcessing}
                className="w-full py-4 flex items-center justify-center gap-2"
              >
                <Printer className="w-5 h-5" />
                {isProcessing ? (t('pdfToTiff.processing') || 'Processing...') : t('pdfToTiff.processButton')}
              </Button>

              {result && (
                <DownloadButton
                  file={result}
                  filename={`${file.name.replace(/\.pdf$/i, '')}.tiff`}
                  variant="secondary"
                  size="lg"
                  className="w-full py-4"
                  showFileSize
                />
              )}
            </div>

            {/* Complete Prompt */}
            {status === 'complete' && result && (
              <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
                <p className="text-sm font-semibold flex items-center justify-center gap-1.5">
                  <Check className="w-5 h-5" />
                  {t('pdfToTiff.successMessage')}
                </p>
              </AlertDescription></Alert>
            )}
          </div>

        </div>
      )}

      {/* Processing Progress */}
      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={handleCancel}
          showPercentage
        />
      )}
    </div>
  );
}

export default PDFToTIFFTool;
