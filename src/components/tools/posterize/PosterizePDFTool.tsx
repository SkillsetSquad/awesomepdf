'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { FileText as UIFileText } from 'lucide-react';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { posterizePDF, type PosterizeOptions } from '@/lib/pdf/processors/posterize';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import type { ProcessOutput } from '@/types/pdf';

export interface PosterizePDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * PosterizePDFTool Component
 * Requirements: 5.1, 5.2
 *
 * Provides the UI for posterizing PDF pages into printable tiles.
 */
export function PosterizePDFTool({ className = '' }: PosterizePDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Options
  const [rows, setRows] = useState(2);
  const [cols, setCols] = useState(2);
  const [pageSize, setPageSize] = useState<'A4' | 'Letter' | 'Legal' | 'A3'>('A4');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape' | 'auto'>('auto');
  const [overlap, setOverlap] = useState(0);
  const [overlapUnit, setOverlapUnit] = useState<'pt' | 'mm' | 'in'>('mm');
  const [scalingMode, setScalingMode] = useState<'fit' | 'fill'>('fit');
  const [pageRange, setPageRange] = useState('');

  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Load PDF to get page count
   */
  const loadPdfInfo = useCallback(async (pdfFile: File) => {
    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      setTotalPages(pdf.numPages);
    } catch (err) {
      console.error('Failed to load PDF info:', err);
      setError('Failed to load PDF. The file may be corrupted or encrypted.');
    }
  }, []);

  /**
   * Handle file selected from uploader
   */
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setResult(null);
      loadPdfInfo(selectedFile);
    }
  }, [loadPdfInfo]);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Clear file and reset state
   */
  const handleClearFile = useCallback(() => {
    setFile(null);
    setTotalPages(0);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Convert overlap to points
   */
  const getOverlapInPoints = useCallback(() => {
    switch (overlapUnit) {
      case 'mm':
        return overlap * (72 / 25.4);
      case 'in':
        return overlap * 72;
      default:
        return overlap;
    }
  }, [overlap, overlapUnit]);

  /**
   * Handle posterize operation
   */
  const handlePosterize = useCallback(async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: Partial<PosterizeOptions> = {
      rows,
      cols,
      pageSize,
      orientation,
      overlap: getOverlapInPoints(),
      scalingMode,
      pageRange,
    };

    try {
      const output: ProcessOutput = await posterizePDF(
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
        setError(output.error?.message || 'Failed to posterize PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, rows, cols, pageSize, orientation, getOverlapInPoints, scalingMode, pageRange]);

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
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isProcessing = status === 'processing' || status === 'uploading';
  const canProcess = file && totalPages > 0 && !isProcessing;
  const outputTiles = rows * cols * totalPages;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          disabled={isProcessing}
          label={tTools('posterizePdf.uploadLabel') || 'Upload PDF File'}
          description={tTools('posterizePdf.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
        />
      )}

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* File Info */}
      {file && (
        <Card className="p-6" >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UIFileText className="w-10 h-10 text-red-500" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {formatSize(file.size)} • {totalPages} {totalPages === 1 ? 'page' : 'pages'}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFile}
              disabled={isProcessing}
            >
              {t('buttons.remove') || 'Remove'}
            </Button>
          </div>
        </Card>
      )}

      {/* Options */}
      {file && totalPages > 0 && (
        <Card className="p-6"  >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('posterizePdf.optionsTitle') || 'Posterize Options'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Rows */}
            <div>
              <Label htmlFor="rows" className="block mb-1">
                {tTools('posterizePdf.rows') || 'Rows'}
              </Label>
              <Input
                type="number"
                id="rows"
                min={1}
                max={10}
                value={rows}
                onChange={(e) => setRows(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                disabled={isProcessing}
                className="w-full" aria-label={tTools('posterizePdf.rows') || 'Rows'}
              />
            </div>

            {/* Columns */}
            <div>
              <Label htmlFor="cols" className="block mb-1">
                {tTools('posterizePdf.cols') || 'Columns'}
              </Label>
              <Input
                type="number"
                id="cols"
                min={1}
                max={10}
                value={cols}
                onChange={(e) => setCols(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                disabled={isProcessing}
                className="w-full" aria-label={tTools('posterizePdf.cols') || 'Columns'}
              />
            </div>

            {/* Page size */}
            <div>
              <Label htmlFor="pageSize" className="block mb-1">
                {tTools('posterizePdf.pageSize') || 'Output Page Size'}
              </Label>
              <NativeSelect
                id="pageSize"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value as 'A4' | 'Letter' | 'Legal' | 'A3')}
                disabled={isProcessing}
                className="w-full" aria-label={tTools('posterizePdf.pageSize') || 'Output Page Size'}
              >
                <NativeSelectOption value="A4">A4</NativeSelectOption>
                <NativeSelectOption value="Letter">Letter</NativeSelectOption>
                <NativeSelectOption value="Legal">Legal</NativeSelectOption>
                <NativeSelectOption value="A3">A3</NativeSelectOption>
              </NativeSelect>
            </div>

            {/* Orientation */}
            <div>
              <Label htmlFor="orientation" className="block mb-1">
                {tTools('posterizePdf.orientation') || 'Orientation'}
              </Label>
              <NativeSelect
                id="orientation"
                value={orientation}
                onChange={(e) => setOrientation(e.target.value as 'portrait' | 'landscape' | 'auto')}
                disabled={isProcessing}
                className="w-full" aria-label={tTools('posterizePdf.orientation') || 'Orientation'}
              >
                <NativeSelectOption value="auto">{t('options.auto') || 'Auto'}</NativeSelectOption>
                <NativeSelectOption value="portrait">{t('options.portrait') || 'Portrait'}</NativeSelectOption>
                <NativeSelectOption value="landscape">{t('options.landscape') || 'Landscape'}</NativeSelectOption>
              </NativeSelect>
            </div>

            {/* Overlap */}
            <div>
              <Label htmlFor="overlap" className="block mb-1">
                {tTools('posterizePdf.overlap') || 'Overlap'}
              </Label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  id="overlap"
                  min={0}
                  max={100}
                  value={overlap}
                  onChange={(e) => setOverlap(Math.max(0, parseFloat(e.target.value) || 0))}
                  disabled={isProcessing}
                  className="flex-1" aria-label={tTools('posterizePdf.overlap') || 'Overlap'}
                />
                <NativeSelect
                  value={overlapUnit}
                  onChange={(e) => setOverlapUnit(e.target.value as 'pt' | 'mm' | 'in')}
                  disabled={isProcessing}
                  className="w-20" id="overlap" aria-label={tTools('posterizePdf.overlap') || 'Overlap'}
                >
                  <NativeSelectOption value="mm">mm</NativeSelectOption>
                  <NativeSelectOption value="in">in</NativeSelectOption>
                  <NativeSelectOption value="pt">pt</NativeSelectOption>
                </NativeSelect>
              </div>
            </div>

            {/* Scaling mode */}
            <div>
              <Label htmlFor="scalingMode" className="block mb-1">
                {tTools('posterizePdf.scalingMode') || 'Scaling Mode'}
              </Label>
              <NativeSelect
                id="scalingMode"
                value={scalingMode}
                onChange={(e) => setScalingMode(e.target.value as 'fit' | 'fill')}
                disabled={isProcessing}
                className="w-full" aria-label={tTools('posterizePdf.scalingMode') || 'Scaling Mode'}
              >
                <NativeSelectOption value="fit">{tTools('posterizePdf.fit') || 'Fit (preserve aspect ratio)'}</NativeSelectOption>
                <NativeSelectOption value="fill">{tTools('posterizePdf.fill') || 'Fill (may crop)'}</NativeSelectOption>
              </NativeSelect>
            </div>

            {/* Page range */}
            <div className="md:col-span-2 lg:col-span-3">
              <Label htmlFor="pageRange" className="block mb-1">
                {tTools('posterizePdf.pageRange') || 'Page Range (optional)'}
              </Label>
              <Input
                type="text"
                id="pageRange"
                value={pageRange}
                onChange={(e) => setPageRange(e.target.value)}
                placeholder={tTools('posterizePdf.pageRangePlaceholder') || 'e.g., 1-5, 8, 10-15 (leave empty for all pages)'}
                disabled={isProcessing}
                className="w-full" aria-label={tTools('posterizePdf.pageRange') || 'Page Range (optional)'}
              />
            </div>
          </div>

          {/* Preview info */}
          <div className="mt-4 p-3 rounded-md bg-muted">
            <p className="text-sm text-muted-foreground">
              {tTools('posterizePdf.previewInfo', { rows, cols, total: rows * cols }) ||
                `Each page will be split into ${rows}×${cols} = ${rows * cols} tiles. Total output: ${outputTiles} pages.`
              }
            </p>
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
      {file && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={handlePosterize}
            disabled={!canProcess}
            loading={isProcessing}
          >
            {isProcessing
              ? (t('status.processing') || 'Processing...')
              : (tTools('posterizePdf.createButton') || 'Posterize PDF')
            }
          </Button>

          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace('.pdf', `_posterized_${rows}x${cols}.pdf`)}
              variant="secondary"
              size="lg"
              showFileSize
            />
          )}
        </div>
      )}

      {/* Success Message */}
      {status === 'complete' && result && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">
            {tTools('posterizePdf.successMessage') || 'PDF posterized successfully! Click the download button to save your file.'}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default PosterizePDFTool;
