'use client';
import { Input } from '@/components/ui/input';


import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { slicePDFLossless, type PdfLosslessSlicerOptions } from '@/lib/pdf/processors/pdf-lossless-slicer';
import type { ProcessOutput } from '@/types/pdf';
import { Sliders, Scissors, RefreshCw, Layers } from 'lucide-react';

export interface PdfLosslessSlicerToolProps {
  className?: string;
}

export function PdfLosslessSlicerTool({ className = '' }: PdfLosslessSlicerToolProps) {
  const t = useTranslations('common');
  const [file, setFile] = useState<File | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [sliceX, setSliceX] = useState(0.1);
  const [sliceY, setSliceY] = useState(0.1);
  const [sliceWidth, setSliceWidth] = useState(0.8);
  const [sliceHeight, setSliceHeight] = useState(0.8);

  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const cancelledRef = useRef(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = useState(false);

  const handleFileSelected = useCallback((selectedFiles: File[]) => {
    if (selectedFiles.length === 0) return;
    setFile(selectedFiles[0]);
    setError(null);
    setResultBlob(null);
  }, []);

  const handleCropDrag = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    // Basic drag resize logic: dragging will expand the crop width and height relative to center
    setSliceWidth(parseFloat(Math.max(0.2, Math.min(0.9, Math.abs(x - sliceX) * 2)).toFixed(2)));
    setSliceHeight(parseFloat(Math.max(0.2, Math.min(0.9, Math.abs(y - sliceY) * 2)).toFixed(2)));
  };

  const handleSlicing = async () => {
    if (!file) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const output: ProcessOutput = await slicePDFLossless(
        [file],
        {
          sliceX,
          sliceY,
          sliceWidth,
          sliceHeight,
          pageNumber,
        },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Engraving laser slicing beams...');
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResultBlob(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to slice document.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'Error slicing blueprint.');
        setStatus('error');
      }
    }
  };

  const handleClear = () => {
    setFile(null);
    setResultBlob(null);
    setStatus('idle');
  };

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={status === 'processing'}
          label={t('pdfLosslessSlicer.uploadLabel')}
          description={t('pdfLosslessSlicer.uploadDescription')}
        />
      )}

      {error && (
        <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 text-red-600 text-sm">
          {error}
        </div>
      )}

      {file && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-4">
            <Card  className="p-6 relative overflow-hidden min-h-[380px] flex flex-col justify-between border-2 border-dashed">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <span className="text-xs font-bold text-zinc-500 flex items-center gap-1.5">
                  <Scissors className="w-4 h-4 text-primary animate-pulse" />
                  {t('pdfLosslessSlicer.magnifierTitle')}
                </span>
                <Button variant="ghost" size="sm" onClick={handleClear} disabled={status === 'processing'}>
                  {t('pdfTwoColumnReflower.clearButton')}
                </Button>
              </div>

              {/* Glowing Laser Cutting Crop Grid */}
              <div className="flex-1 flex items-center justify-center p-6 relative">
                <div 
                  ref={containerRef}
                  onMouseMove={handleCropDrag}
                  className="relative w-80 h-56 bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 shadow-inner rounded-md overflow-hidden flex items-center justify-center"
                >
                  {/* Glowing Laser Rays mock decoration */}
                  {status === 'processing' && (
                    <>
                      <div className="absolute top-0 bottom-0 w-0.5 bg-green-500 animate-pulse left-[45%] shadow-[0_0_8px_#22c55e]" />
                      <div className="absolute left-0 right-0 h-0.5 bg-green-500 animate-pulse top-[50%] shadow-[0_0_8px_#22c55e]" />
                    </>
                  )}

                  {/* Crop boundary selector box */}
                  <div 
                    className="absolute border border-green-500 bg-green-500/5 shadow-[0_0_10px_rgba(34,197,94,0.2)] rounded cursor-move flex items-center justify-center"
                    style={{
                      width: `${sliceWidth * 100}%`,
                      height: `${sliceHeight * 100}%`,
                      left: `${(1 - sliceWidth) * 50}%`,
                      top: `${(1 - sliceHeight) * 50}%`,
                    }}
                  >
                    <span className="text-[9px] text-green-600 font-mono tracking-widest font-black">
                      LASER SLICER GRID
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <Card  className="p-6 border flex flex-col justify-between min-h-[380px]">
              <div className="space-y-6">
                <div className="border-b border-zinc-150 dark:border-zinc-800 pb-3 flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-primary" />
                  <h3 className="text-sm font-black text-zinc-800 dark:text-zinc-200">{t('pdfLosslessSlicer.optionsTitle')}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    {t('pdfLosslessSlicer.targetPageLabel')}
                    <Input
                      type="number"
                      min={1}
                      value={pageNumber}
                      onChange={(e) => setPageNumber(parseInt(e.target.value) || 1)}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between font-mono text-[9px] text-zinc-400">
                      <span>{t('pdfLosslessSlicer.sliceWidth', { width: (sliceWidth * 100).toFixed(0) })}</span>
                      <span>{t('pdfLosslessSlicer.sliceHeight', { height: (sliceHeight * 100).toFixed(0) })}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-150 dark:border-zinc-800 mt-6">
                {status === 'complete' && resultBlob ? (
                  <DownloadButton
                    file={resultBlob}
                    filename={`${file.name.replace(/\.[^/.]+$/, '')}_laser_sliced.pdf`}
                    variant="default"
                    size="lg"
                    className="w-full py-4"
                    showFileSize
                  />
                ) : (
                  <Button
                    variant="default"
                    size="lg"
                    className="w-full py-4 flex items-center justify-center gap-2"
                    onClick={handleSlicing}
                    disabled={status === 'processing'}
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'processing' ? 'animate-spin' : ''}`} />
                    {t('pdfLosslessSlicer.processButton')}
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}

      {status === 'processing' && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}
    </div>
  );
}

export default PdfLosslessSlicerTool;
