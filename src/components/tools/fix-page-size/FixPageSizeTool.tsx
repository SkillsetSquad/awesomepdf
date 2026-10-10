'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { FileText as UIFileText } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  fixPageSize,
  PAGE_SIZES,
  type FixPageSizeOptions,
  type PageSizePreset,
  type ScaleMode,
} from '@/lib/pdf/processors/fix-page-size';
import type { ProcessOutput } from '@/types/pdf';

export interface FixPageSizeToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * FixPageSizeTool Component
 * Requirements: 5.1, 5.2
 *
 * Provides the UI for standardizing PDF page sizes.
 */
export function FixPageSizeTool({ className = '' }: FixPageSizeToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Options
  const [sizePreset, setSizePreset] = useState<PageSizePreset>('a4');
  const [customWidth, setCustomWidth] = useState(595.28);
  const [customHeight, setCustomHeight] = useState(841.89);
  const [scaleMode, setScaleMode] = useState<ScaleMode>('fit');
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [orientation, setOrientation] = useState<'portrait' | 'landscape' | 'auto'>('auto');

  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Handle file selected from uploader
   */
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
    }
  }, []);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Clear file
   */
  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Handle fix page size operation
   */
  const handleFixPageSize = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: FixPageSizeOptions = {
      sizePreset,
      customWidth: sizePreset === 'custom' ? customWidth : undefined,
      customHeight: sizePreset === 'custom' ? customHeight : undefined,
      scaleMode,
      maintainAspectRatio,
      orientation,
    };

    try {
      const output: ProcessOutput = await fixPageSize(
        file,
        options,
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || '');
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
        setError(output.error?.message || 'Failed to fix page sizes.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, sizePreset, customWidth, customHeight, scaleMode, maintainAspectRatio, orientation]);

  /**
   * Handle cancel operation
   */
  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Format file size
   */
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isProcessing = status === 'processing';
  const canProcess = file && !isProcessing;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple={false}
        maxFiles={1}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={tTools('fixPageSize.uploadLabel') || 'Upload PDF File'}
        description={tTools('fixPageSize.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
      />

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* Selected File */}
      {file && (
        <Card className="p-6"  >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <UIFileText className="w-10 h-10 text-red-500" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatSize(file.size)}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              disabled={isProcessing}
            >
              {t('buttons.remove') || 'Remove'}
            </Button>
          </div>
        </Card>
      )}

      {/* Options */}
      {file && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('fixPageSize.optionsTitle') || 'Page Size Options'}
          </h3>

          <div className="space-y-6">
            {/* Page Size Selection */}
            <div>
              <Label className="block mb-2">
                {tTools('fixPageSize.targetSize') || 'Target Page Size'}
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(Object.keys(PAGE_SIZES) as PageSizePreset[]).map((preset) => (
                  <Button size="sm" variant={sizePreset === preset ? 'default' : 'outline'} aria-pressed={sizePreset === preset}
                    key={preset}
                    type="button"
                    onClick={() => setSizePreset(preset)}
                    disabled={isProcessing}

                  >
                    {preset === 'custom' ? (tTools('fixPageSize.custom') || 'Custom') : preset.toUpperCase()}
                  </Button>
                ))}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {PAGE_SIZES[sizePreset].label}
              </p>
            </div>

            {/* Custom Dimensions */}
            {sizePreset === 'custom' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="block mb-1" htmlFor="fixpagesizetool-field-1">
                    {tTools('fixPageSize.width') || 'Width (points)'}
                  </Label>
                  <Input
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    disabled={isProcessing}
                    min={72}
                    max={3000}
                    className="w-full" id="fixpagesizetool-field-1" aria-label={tTools('fixPageSize.width') || 'Width (points)'}
                  />
                </div>
                <div>
                  <Label className="block mb-1" htmlFor="fixpagesizetool-field-2">
                    {tTools('fixPageSize.height') || 'Height (points)'}
                  </Label>
                  <Input
                    type="number"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(Number(e.target.value))}
                    disabled={isProcessing}
                    min={72}
                    max={3000}
                    className="w-full" id="fixpagesizetool-field-2" aria-label={tTools('fixPageSize.height') || 'Height (points)'}
                  />
                </div>
              </div>
            )}

            {/* Scale Mode */}
            <div>
              <Label className="block mb-2">
                {tTools('fixPageSize.scaleMode') || 'Content Scaling'}
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(['fit', 'fill', 'stretch', 'center'] as ScaleMode[]).map((mode) => (
                  <Button size="sm" variant={scaleMode === mode ? 'default' : 'outline'} aria-pressed={scaleMode === mode}
                    key={mode}
                    type="button"
                    onClick={() => setScaleMode(mode)}
                    disabled={isProcessing}

                  >
                    {mode === 'fit' && (tTools('fixPageSize.scaleFit') || 'Fit')}
                    {mode === 'fill' && (tTools('fixPageSize.scaleFill') || 'Fill')}
                    {mode === 'stretch' && (tTools('fixPageSize.scaleStretch') || 'Stretch')}
                    {mode === 'center' && (tTools('fixPageSize.scaleCenter') || 'Center')}
                  </Button>
                ))}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {scaleMode === 'fit' && (tTools('fixPageSize.scaleFitDesc') || 'Scale content to fit within page, maintaining aspect ratio')}
                {scaleMode === 'fill' && (tTools('fixPageSize.scaleFillDesc') || 'Scale content to fill page, may crop edges')}
                {scaleMode === 'stretch' && (tTools('fixPageSize.scaleStretchDesc') || 'Stretch content to fill page exactly')}
                {scaleMode === 'center' && (tTools('fixPageSize.scaleCenterDesc') || 'Center content without scaling')}
              </p>
            </div>

            {/* Orientation */}
            <div>
              <Label className="block mb-2">
                {tTools('fixPageSize.orientation') || 'Page Orientation'}
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {(['auto', 'portrait', 'landscape'] as const).map((orient) => (
                  <Button size="sm" variant={orientation === orient ? 'default' : 'outline'} aria-pressed={orientation === orient}
                    key={orient}
                    type="button"
                    onClick={() => setOrientation(orient)}
                    disabled={isProcessing}

                  >
                    {orient === 'auto' && (tTools('fixPageSize.orientAuto') || 'Auto')}
                    {orient === 'portrait' && (tTools('fixPageSize.orientPortrait') || 'Portrait')}
                    {orient === 'landscape' && (tTools('fixPageSize.orientLandscape') || 'Landscape')}
                  </Button>
                ))}
              </div>
            </div>

            {/* Maintain Aspect Ratio */}
            <Label className="flex items-center gap-3 cursor-pointer">
              <Checkbox

                checked={maintainAspectRatio}
                onCheckedChange={(checked) => setMaintainAspectRatio((checked === true))}
                disabled={isProcessing || scaleMode === 'stretch' || scaleMode === 'center'}

              />
              <span className="text-sm text-foreground">
                {tTools('fixPageSize.maintainAspectRatio') || 'Maintain aspect ratio'}
              </span>
            </Label>
          </div>
        </Card>
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

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <Button
          variant="default"
          size="lg"
          onClick={handleFixPageSize}
          disabled={!canProcess}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('fixPageSize.applyButton') || 'Fix Page Sizes')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace('.pdf', '')}_fixed.pdf` : 'fixed.pdf'}
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}
      </div>

      {/* Success Message */}
      {status === 'complete' && result && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">
            {tTools('fixPageSize.successMessage') || 'Page sizes fixed successfully!'}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default FixPageSizeTool;
