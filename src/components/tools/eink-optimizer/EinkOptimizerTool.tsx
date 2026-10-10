'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Slider } from '@/components/ui/slider';

import { Label } from '@/components/ui/label';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { optimizeEink } from '@/lib/pdf/processors/eink-optimizer';
import {
  SunMoon,
  Sliders,
  Sparkles,
  Eye,
  Settings,
  BookOpen
} from 'lucide-react';

export function EinkOptimizerTool() {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.einkOptimizer');

  const [file, setFile] = useState<File | null>(null);
  const [contrastOffset, setContrastOffset] = useState(0); // -50 to 50
  const [dilationAmount, setDilationAmount] = useState(0); // 0 (none), 1 (light), 2 (strong)

  // Split-screen lens slider for comparing original vs e-Ink optimized (WOW Factor)
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = (uploadedFiles: File[]) => {
    if (uploadedFiles.length > 0) {
      setFile(uploadedFiles[0]);
      setResult(null);
      setError(null);
      setStatus('idle');
    }
  };

  const handleProcess = async () => {
    if (!file) return;

    setStatus('processing');
    setProgress(15);

    try {
      const output = await optimizeEink(
        file,
        { contrastOffset, dilationAmount },
        (p) => setProgress(p)
      );

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to optimize PDF.');
        setStatus('error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred.');
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setContrastOffset(0);
    setDilationAmount(0);
  };

  // Handle lens slider dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Clean up global listeners on unmount
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-teal-600/20 text-teal-400">
          <SunMoon className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">
            {tTools('optionsTitle')}
          </h2>
          <p className="text-xs text-muted-foreground">
            {tTools('uploadDescription')}
          </p>
        </div>
      </div>

      {!file ? (
        <FileUploader
          accept={['.pdf']}
          onFilesSelected={handleUpload}
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between p-3 rounded-lg bg-muted border border-border">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium truncate max-w-md">{file.name}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="text-xs"
            >
              {t('buttons.reset')}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Control Panel */}
            <div className="space-y-6">
              {/* Contrast Threshold Offset Slider */}
              <div className="space-y-3 p-4 rounded-xl bg-muted border border-border">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <Label htmlFor="eink-contrast-offset" className="flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-teal-400" />
                    {t('einkOptimizer.otsueThresholdSuffix')}
                  </Label>
                  <span className="font-mono text-teal-400">{contrastOffset > 0 ? `+${contrastOffset}` : contrastOffset}</span>
                </div>
                <Slider
                  min={-50}
                  max={50}
                  value={[contrastOffset]}
                  onValueChange={(values) => setContrastOffset(parseInt(String(values[0])))}
                  disabled={status === 'processing'}
                  className="w-full" id="eink-contrast-offset" aria-label={t('einkOptimizer.otsueThresholdSuffix')}
                />
                <div className="flex justify-between text-[9px] text-muted-foreground">
                  {t('einkOptimizer.keepStrokes')}
                  {t('einkOptimizer.stripBackground')}
                </div>
              </div>

              {/* Text Dilation Amount */}
              <div role="group" aria-labelledby="eink-dilation-label" className="space-y-3 p-4 rounded-xl bg-muted border border-border">
                <p id="eink-dilation-label" className="text-sm font-medium flex items-center gap-1.5">
                  <Settings className="w-3.5 h-3.5 text-teal-400" />
                  {t('einkOptimizer.dilationSuffix')}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 0, label: t('einkOptimizer.originalStroke') },
                    { val: 1, label: t('einkOptimizer.microDilation') },
                    { val: 2, label: t('einkOptimizer.strongDilation') }
                  ].map((option) => (
                    <Button size="sm" variant={dilationAmount === option.val ? 'default' : 'outline'} aria-pressed={dilationAmount === option.val}
                      key={option.val}
                      onClick={() => setDilationAmount(option.val)}
                      disabled={status === 'processing'}
                      className="text-center"
                    >
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              {status === 'idle' && (
                <Button
                  onClick={handleProcess}
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {tTools('processButton')}
                </Button>
              )}

              {status === 'processing' && (
                <ProcessingProgress progress={progress} status={status} />
              )}

              {status === 'complete' && result && (
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm text-center">
                    {tTools('successMessage')}
                  </div>
                  <DownloadButton
                    file={result}
                    filename={file.name.replace(/\.pdf$/i, '_eink.pdf')}
                    className="w-full"
                  />
                </div>
              )}

              {status === 'error' && error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                  {error}
                </AlertDescription></Alert>
              )}
            </div>

            {/* Split Screen Contrast Lens (WOW FACTOR COMPARISON) */}
            <div
              ref={containerRef}
              className="relative h-72 md:h-auto min-h-[300px] border border-neutral-800 rounded-xl overflow-hidden cursor-ew-resize select-none bg-neutral-900"
            >
              {/* Right Side: e-Ink Optimized (Clean White background, bold text) */}
              <div className="absolute inset-0 bg-neutral-100 flex flex-col justify-center p-8 text-neutral-900 font-serif leading-relaxed text-xs">
                <div className="text-right text-[9px] text-teal-600 font-mono font-bold mb-3 tracking-widest">
                  E-INK PAPER VIEW
                </div>
                <h3 className="text-sm font-bold border-b border-neutral-300 pb-1 mb-2 font-sans">
                  {t('einkOptimizer.afterLabel')}
                </h3>
                <p style={{ fontWeight: dilationAmount > 0 ? (dilationAmount === 1 ? '600' : '800') : 'normal' }}>
                  {t('einkOptimizer.beforeSampleText')}
                </p>
              </div>

              {/* Left Side: Original (Muddy scan page background with gray noise) */}
              <div
                className="absolute inset-y-0 left-0 bg-[radial-gradient(#b5b5b5_1px,transparent_1px)] [background-size:16px_16px] bg-neutral-400 flex flex-col justify-center p-8 text-neutral-700/80 font-serif leading-relaxed text-xs overflow-hidden border-r border-neutral-600"
                style={{
                  width: `${sliderPos}%`,
                  boxShadow: '4px 0 16px rgba(0,0,0,0.15)'
                }}
              >
                {/* Prevent content wrapping changes inside resized left pane */}
                <div className="w-[300px] sm:w-[400px]">
                  <div className="text-[9px] text-neutral-500 font-mono mb-3 tracking-widest">
                    MUDDY SCAN LOG (ORIGINAL)
                  </div>
                  <h3 className="text-sm font-bold border-b border-neutral-400/40 pb-1 mb-2 text-neutral-750 font-sans">
                    {t('einkOptimizer.beforeLabel')}
                  </h3>
                  <p className="opacity-70">
                    {t('einkOptimizer.beforeSampleText')}
                  </p>
                </div>
              </div>

              {/* Lens Handle Slider */}
              <div
                onMouseDown={handleMouseDown}
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-10 shadow-lg"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="h-8 w-8 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform text-white">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

export default EinkOptimizerTool;
