'use client';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { FileText as UIFileText, X as UIX } from 'lucide-react';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { overlayPDF } from '@/lib/pdf/processors/overlay';
import type { ProcessOutput } from '@/types/pdf';

export interface OverlayPDFToolProps {
  className?: string;
}

export function OverlayPDFTool({ className = '' }: OverlayPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // Files state
  const [baseFile, setBaseFile] = useState<File | null>(null);
  const [layerFile, setLayerFile] = useState<File | null>(null);

  // Loaded state
  const [basePages, setBasePages] = useState<number>(0);
  const [layerPages, setLayerPages] = useState<number>(0);
  const [isLoadingBase, setIsLoadingBase] = useState(false);
  const [isLoadingLayer, setIsLoadingLayer] = useState(false);

  // Configuration options
  const [mode, setMode] = useState<'overlay' | 'underlay'>('overlay');
  const [pageRange, setPageRange] = useState<string>('');
  const [loop, setLoop] = useState<boolean>(true);

  // Processing & result states
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Cancellation ref
  const cancelledRef = useRef(false);

  /**
   * Load metadata for Base PDF
   */
  const handleBaseSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setBaseFile(file);
    setIsLoadingBase(true);
    setError(null);
    setResult(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setBasePages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
      setError('Failed to parse main base PDF metadata. The file may be corrupt.');
    } finally {
      setIsLoadingBase(false);
    }
  }, []);

  /**
   * Load metadata for Layer PDF
   */
  const handleLayerSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const file = files[0];
    setLayerFile(file);
    setIsLoadingLayer(true);
    setError(null);
    setResult(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setLayerPages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
      setError('Failed to parse overlay layer PDF metadata. The file may be corrupt.');
    } finally {
      setIsLoadingLayer(false);
    }
  }, []);

  const handleClearBase = () => {
    setBaseFile(null);
    setBasePages(0);
    setResult(null);
  };

  const handleClearLayer = () => {
    setLayerFile(null);
    setLayerPages(0);
    setResult(null);
  };

  const handleProcess = async () => {
    if (!baseFile || !layerFile) {
      setError('Please upload both the main PDF and overlay layer PDF.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await overlayPDF(
        [baseFile, layerFile],
        { mode, pageRange, loop },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Processing page composition...');
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
        setError(output.error?.message || 'Failed to overlay pages.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
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
      {/* File Upload Zone (Double layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Slot A: Base/Underlay PDF */}
        <div className="space-y-3">
          <Label className="block">
            {t('overlayPdf.uploadBaseLabel')}
          </Label>
          {baseFile ? (
            <Card  className="relative group p-4 flex items-center justify-between border-2 border-primary/30 bg-muted/15">
              <div className="flex items-center gap-3">
                <UIFileText className="w-10 h-10 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-sm text-foreground truncate max-w-[200px]" title={baseFile.name}>
                    {baseFile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {basePages > 0 ? t('overlayPdf.uploadBaseSuccess', { count: basePages, size: (baseFile.size / (1024 * 1024)).toFixed(2) }) : (t('aiPdfReflower.scanningMetadata') || 'Loading...')}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon-sm"
                onClick={handleClearBase}
                disabled={isProcessing}

              >
                <UIX className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Card>
          ) : (
            <FileUploader
              accept={['application/pdf']}
              multiple={false}
              onFilesSelected={handleBaseSelected}
              onError={setError}
              disabled={isProcessing || isLoadingBase}
              label={t('overlayPdf.uploadBaseButton')}
              description={t('overlayPdf.uploadBaseDesc')}
              className="min-h-[160px] p-6 rounded-2xl"
            />
          )}
        </div>

        {/* Slot B: Overlay Layer PDF */}
        <div className="space-y-3">
          <Label className="block">
            {t('overlayPdf.uploadLayerLabel')}
          </Label>
          {layerFile ? (
            <Card  className="relative group p-4 flex items-center justify-between border-2">
              <div className="flex items-center gap-3">
                <UIFileText className="w-10 h-10 text-emerald-500" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-sm text-foreground truncate max-w-[200px]" title={layerFile.name}>
                    {layerFile.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {layerPages > 0 ? t('overlayPdf.uploadLayerSuccess', { count: layerPages, size: (layerFile.size / (1024 * 1024)).toFixed(2) }) : (t('aiPdfReflower.scanningMetadata') || 'Loading...')}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon-sm"
                onClick={handleClearLayer}
                disabled={isProcessing}

              >
                <UIX className="w-5 h-5" aria-hidden="true" />
              </Button>
            </Card>
          ) : (
            <FileUploader
              accept={['application/pdf']}
              multiple={false}
              onFilesSelected={handleLayerSelected}
              onError={setError}
              disabled={isProcessing || isLoadingLayer}
              label={t('overlayPdf.uploadLayerButton')}
              description={t('overlayPdf.uploadLayerDesc')}
              className="min-h-[160px] p-6 rounded-2xl border-emerald-500/25 hover:border-emerald-500"
            />
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-semibold">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* Main Workspace Configuration Panel */}
      {baseFile && layerFile && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* LEFT: 3D Visualization layer layout preview (Pure CSS awesome show) */}
          <div className="lg:col-span-5 space-y-4">
            <Card  className="p-6 bg-card flex flex-col items-center justify-center min-h-[300px] overflow-hidden">
              <span className="text-xs font-bold text-muted-foreground mb-8">
                {t('overlayPdf.previewTitle')}
              </span>

              {/* 3D Paper Layer frame container */}
              <div
                className="relative w-44 h-48 transform-gpu transition-all duration-700 ease-in-out"
                style={{
                  perspective: '800px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Layer A (Base PDF sheet) */}
                <div
                  className="absolute inset-0 bg-background border-2 border-primary shadow-xl rounded-xl flex items-center justify-center font-semibold text-primary select-none transition-all duration-700 ease-in-out"
                  style={{
                    transform: mode === 'overlay'
                      ? 'rotateX(55deg) rotateY(-10deg) rotateZ(-25deg) translateZ(0px)'
                      : 'rotateX(55deg) rotateY(-10deg) rotateZ(-25deg) translateZ(40px)',
                    opacity: 0.95,
                    boxShadow: mode === 'underlay' ? '0 20px 40px rgba(0,0,0,0.3)' : '0 4px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  <div className="text-center">
                    <p className="text-sm">{t('overlayPdf.basePageLabel')}</p>
                    <p className="text-[10px] opacity-60">Base Document</p>
                  </div>
                </div>

                {/* Layer B (Overlay PDF sheet) */}
                <div
                  className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-950/20 border-2 border-emerald-500 shadow-2xl rounded-xl flex items-center justify-center font-semibold text-emerald-500 select-none transition-all duration-700 ease-in-out"
                  style={{
                    transform: mode === 'overlay'
                      ? 'rotateX(55deg) rotateY(-10deg) rotateZ(-25deg) translateZ(40px)'
                      : 'rotateX(55deg) rotateY(-10deg) rotateZ(-25deg) translateZ(0px)',
                    opacity: 0.9,
                    boxShadow: mode === 'overlay' ? '0 20px 40px rgba(16,185,129,0.35)' : '0 4px 10px rgba(16,185,129,0.1)'
                  }}
                >
                  <div className="text-center">
                    <p className="text-sm">{t('overlayPdf.layerPageLabel')}</p>
                    <p className="text-[10px] opacity-70">Overlay Layer</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center max-w-xs">
                <p className="text-xs font-semibold text-foreground">
                  {mode === 'overlay'
                    ? t('overlayPdf.placementModeOverlay')
                    : t('overlayPdf.placementModeUnderlay')
                  }
                </p>
              </div>
            </Card>
          </div>

          {/* RIGHT: Parameter adjustments */}
          <div className="lg:col-span-7 space-y-6">
            <Card  className="p-6 gap-6 border">
              <h3 className="text-md font-bold text-foreground border-b border-border pb-3">
                {t('overlayPdf.optionsTitle')}
              </h3>

              {/* Mode Button Switcher */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-muted-foreground">
                  {t('overlayPdf.placementModeLabel')}
                </span>
                <div className="flex bg-muted/50 p-1 rounded-xl">
                  <Button size="sm" variant={mode === 'overlay' ? 'default' : 'outline'} aria-pressed={mode === 'overlay'}
                    onClick={() => setMode('overlay')}
                    className="flex-1"
                  >
                    {t('overlayPdf.placementOverlayBtn')}
                  </Button>
                  <Button size="sm" variant={mode === 'underlay' ? 'default' : 'outline'} aria-pressed={mode === 'underlay'}
                    onClick={() => setMode('underlay')}
                    className="flex-1"
                  >
                    {t('overlayPdf.placementUnderlayBtn')}
                  </Button>
                </div>
              </div>

              {/* Target Page Range */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-muted-foreground">
                    {t('overlayPdf.targetRangeLabel')}
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    {t('overlayPdf.targetRangeHelp')}
                  </span>
                </div>
                <Input
                  type="text"
                  placeholder={t('overlayPdf.targetRangePlaceholder')}
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  className="w-full transition-all"
                />
              </div>

              {/* Loop Switch Toggle */}
              <div className="flex items-center justify-between pt-2 border-t border-border">
                <div>
                  <span className="text-xs font-bold text-foreground block">
                    {t('overlayPdf.loopOverlayLabel')}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-0.5 block leading-normal max-w-md">
                    {t('overlayPdf.loopOverlayDesc')}
                  </span>
                </div>
                <Button size="icon-sm" variant={loop ? 'default' : 'outline'} aria-pressed={loop}
                  onClick={() => setLoop(prev => !prev)}
                  className="relative"
                >
                  <div
                    className={`absolute top-0.5 left-0.5 bg-background w-5.5 h-5.5 rounded-full shadow transition-transform duration-300 ${
                      loop ? 'translate-x-5.5' : 'translate-x-0'
                    }`}
                  />
                </Button>
              </div>

            </Card>

            {/* Run Button */}
            <div className="space-y-3">
              <Button
                variant="default"
                size="lg"
                onClick={handleProcess}
                disabled={isProcessing}
                className="w-full py-4"
              >
                {isProcessing ? (t('overlayPdf.processing') || 'Processing...') : t('overlayPdf.processButton')}
              </Button>

              {result && (
                <DownloadButton
                  file={result}
                  filename={baseFile.name.replace('.pdf', '_overlay.pdf')}
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
                <p className="text-sm font-semibold">
                  {t('overlayPdf.successMessage')}
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

export default OverlayPDFTool;
