'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

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
import { flattenPDF, type FlattenPDFOptions } from '@/lib/pdf/processors/flatten';
import type { ProcessOutput } from '@/types/pdf';

export interface FlattenPDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * FlattenPDFTool Component
 * Requirements: 5.1
 *
 * Provides the UI for flattening PDF files.
 * Converts interactive elements into static page content.
 */
export function FlattenPDFTool({ className = '' }: FlattenPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [flattenedItems, setFlattenedItems] = useState<string[]>([]);

  // Options
  const [options, setOptions] = useState<FlattenPDFOptions>({
    flattenForms: true,
    flattenAnnotations: true,
    flattenLayers: true,
  });

  // Ref for cancellation
  const cancelledRef = useRef(false);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
      setFlattenedItems([]);
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
    setFlattenedItems([]);
  }, []);

  const handleOptionChange = useCallback((key: keyof FlattenPDFOptions) => {
    setOptions(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleFlatten = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file to flatten.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setFlattenedItems([]);

    try {
      const output: ProcessOutput = await flattenPDF(
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
        if (output.metadata?.flattenedItems) {
          setFlattenedItems(output.metadata.flattenedItems as string[]);
        }
      } else {
        setError(output.error?.message || 'Failed to flatten PDF file.');
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
  const canFlatten = file && !isProcessing;

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
        label={tTools('flattenPdf.uploadLabel') || 'Upload PDF File'}
        description={tTools('flattenPdf.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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

      {/* Flatten Options */}
      {file && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('flattenPdf.optionsTitle') || 'Flatten Options'}
          </h3>

          <div className="space-y-4">
            {/* Info */}
            <div className="p-3 rounded-sm bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-700">
                {tTools('flattenPdf.info') || 'Flattening converts interactive elements (forms, annotations) into static page content. This makes the PDF non-editable but ensures consistent appearance across all viewers.'}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.flattenForms}
                  onCheckedChange={() => handleOptionChange('flattenForms')}
                  disabled={isProcessing}

                />
                <div>
                  <span className="text-sm text-foreground">
                    {tTools('flattenPdf.flattenForms') || 'Flatten Form Fields'}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {tTools('flattenPdf.flattenFormsDesc') || 'Convert fillable form fields to static text'}
                  </p>
                </div>
              </Label>

              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.flattenAnnotations}
                  onCheckedChange={() => handleOptionChange('flattenAnnotations')}
                  disabled={isProcessing}

                />
                <div>
                  <span className="text-sm text-foreground">
                    {tTools('flattenPdf.flattenAnnotations') || 'Flatten Annotations'}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {tTools('flattenPdf.flattenAnnotationsDesc') || 'Merge comments, highlights, and stamps into page content'}
                  </p>
                </div>
              </Label>

              <Label className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={options.flattenLayers}
                  onCheckedChange={() => handleOptionChange('flattenLayers')}
                  disabled={isProcessing}

                />
                <div>
                  <span className="text-sm text-foreground">
                    {tTools('flattenPdf.flattenLayers') || 'Flatten Layers'}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {tTools('flattenPdf.flattenLayersDesc') || 'Merge all visible layers into a single layer'}
                  </p>
                </div>
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
          onClick={handleFlatten}
          disabled={!canFlatten}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('flattenPdf.flattenButton') || 'Flatten PDF')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace('.pdf', '')}_flattened.pdf` : 'flattened.pdf'}
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
            {tTools('flattenPdf.successMessage') || 'PDF flattened successfully!'}
          </p>
          {flattenedItems.length > 0 && (
            <p className="text-xs mt-1">
              {tTools('flattenPdf.flattenedItems') || 'Flattened:'} {flattenedItems.join(', ')}
            </p>
          )}
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default FlattenPDFTool;
