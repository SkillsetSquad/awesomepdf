'use client';
import { FileText as UIFileText } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { sanitizePDF, type SanitizePDFOptions } from '@/lib/pdf/processors/sanitize';
import type { ProcessOutput } from '@/types/pdf';

export interface SanitizePDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * SanitizePDFTool Component
 * Requirements: 5.1
 *
 * Provides the UI for sanitizing PDF files by removing potentially harmful content.
 */
export function SanitizePDFTool({ className = '' }: SanitizePDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [removedItems, setRemovedItems] = useState<string[]>([]);

  // Options
  const [options, setOptions] = useState<SanitizePDFOptions>({
    removeJavaScript: true,
    removeAttachments: true,
    removeLinks: true,
    flattenForms: true,
    removeMetadata: true,
    removeAnnotations: false,
  });

  // Ref for cancellation
  const cancelledRef = useRef(false);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
      setRemovedItems([]);
    }
  }, []);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  const handleClear = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setRemovedItems([]);
  }, []);

  const handleOptionChange = useCallback((key: keyof SanitizePDFOptions) => {
    setOptions(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleSanitize = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file to sanitize.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setRemovedItems([]);

    try {
      const output: ProcessOutput = await sanitizePDF(
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
        if (output.metadata?.removedItems) {
          setRemovedItems(output.metadata.removedItems as string[]);
        }
      } else {
        setError(output.error?.message || 'Failed to sanitize PDF file.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, options]);

  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const isProcessing = status === 'processing';
  const canSanitize = file && !isProcessing;

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
        label={tTools('sanitizePdf.uploadLabel') || 'Upload PDF File'}
        description={tTools('sanitizePdf.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
      />

      {/* Error Message */}
      {error && (
        <div
          className="p-4 rounded-md bg-red-50 border border-red-200 text-red-700"
          role="alert"
        >
          <p className="text-sm">{error}</p>
        </div>
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

      {/* Sanitization Options */}
      {file && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('sanitizePdf.optionsTitle') || 'Sanitization Options'}
          </h3>

          <div className="space-y-4">
            {/* Info */}
            <div className="p-3 rounded-sm bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-700">
                {tTools('sanitizePdf.info') || 'Sanitization removes potentially harmful content from PDFs, making them safer to open and share.'}
              </p>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.removeJavaScript}
                  onCheckedChange={() => handleOptionChange('removeJavaScript')}
                  disabled={isProcessing}

                />
                <span className="text-sm text-foreground">
                  {tTools('sanitizePdf.removeJavaScript') || 'Remove JavaScript'}
                </span>
              </Label>

              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.removeAttachments}
                  onCheckedChange={() => handleOptionChange('removeAttachments')}
                  disabled={isProcessing}

                />
                <span className="text-sm text-foreground">
                  {tTools('sanitizePdf.removeAttachments') || 'Remove Attachments'}
                </span>
              </Label>

              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.removeLinks}
                  onCheckedChange={() => handleOptionChange('removeLinks')}
                  disabled={isProcessing}

                />
                <span className="text-sm text-foreground">
                  {tTools('sanitizePdf.removeLinks') || 'Remove External Links'}
                </span>
              </Label>

              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.flattenForms}
                  onCheckedChange={() => handleOptionChange('flattenForms')}
                  disabled={isProcessing}

                />
                <span className="text-sm text-foreground">
                  {tTools('sanitizePdf.flattenForms') || 'Flatten Forms'}
                </span>
              </Label>

              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.removeMetadata}
                  onCheckedChange={() => handleOptionChange('removeMetadata')}
                  disabled={isProcessing}

                />
                <span className="text-sm text-foreground">
                  {tTools('sanitizePdf.removeMetadata') || 'Remove Metadata'}
                </span>
              </Label>

              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.removeAnnotations}
                  onCheckedChange={() => handleOptionChange('removeAnnotations')}
                  disabled={isProcessing}

                />
                <span className="text-sm text-foreground">
                  {tTools('sanitizePdf.removeAnnotations') || 'Remove Annotations'}
                </span>
              </Label>
            </div>
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
          onClick={handleSanitize}
          disabled={!canSanitize}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('sanitizePdf.sanitizeButton') || 'Sanitize PDF')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace('.pdf', '')}_sanitized.pdf` : 'sanitized.pdf'}
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}
      </div>

      {/* Success Message */}
      {status === 'complete' && result && (
        <div
          className="p-4 rounded-md bg-green-50 border border-green-200 text-green-700"
          role="status"
        >
          <p className="text-sm font-medium">
            {tTools('sanitizePdf.successMessage') || 'PDF sanitized successfully!'}
          </p>
          {removedItems.length > 0 && (
            <p className="text-xs mt-1 text-green-600">
              {tTools('sanitizePdf.removedItems') || 'Removed:'} {removedItems.join(', ')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default SanitizePDFTool;
