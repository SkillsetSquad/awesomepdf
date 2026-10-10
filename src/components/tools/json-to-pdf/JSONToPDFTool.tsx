'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { FileJson2 as UIFileJson2, X as UIX } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { jsonToPDF, JSON_PAGE_SIZES, type JSONPageSizeType, type JSONToPDFOptions } from '@/lib/pdf/processors/json-to-pdf';
import type { UploadedFile, ProcessOutput } from '@/types/pdf';

/**
 * Generate a unique ID for files
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export interface JSONToPDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * JSONToPDFTool Component
 * Requirements: 5.1, 5.2
 *
 * Converts JSON files to PDF with formatted output.
 */
export function JSONToPDFTool({ className = '' }: JSONToPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [jsonPreview, setJsonPreview] = useState<string>('');
  const [parseError, setParseError] = useState<string | null>(null);

  // Options state
  const [pageSize, setPageSize] = useState<JSONPageSizeType>('A4');
  const [fontSize, setFontSize] = useState(10);
  const [indentSpaces, setIndentSpaces] = useState(2);
  const [prettyPrint, setPrettyPrint] = useState(true);
  const [showLineNumbers, setShowLineNumbers] = useState(true);

  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Handle files selected from uploader
   */
  const handleFilesSelected = useCallback(async (newFiles: File[]) => {
    const uploadedFiles: UploadedFile[] = newFiles.map(file => ({
      id: generateId(),
      file,
      status: 'pending' as const,
    }));

    setFiles(prev => [...prev, ...uploadedFiles]);
    setError(null);
    setResult(null);
    setParseError(null);

    // Load and validate preview of first file
    if (newFiles.length > 0) {
      try {
        const text = await newFiles[0].text();
        const parsed = JSON.parse(text);
        const formatted = JSON.stringify(parsed, null, 2);
        setJsonPreview(formatted.slice(0, 3000) + (formatted.length > 3000 ? '\n...' : ''));
        setParseError(null);
      } catch (err) {
        setJsonPreview('');
        setParseError(err instanceof Error ? err.message : 'Invalid JSON');
      }
    }
  }, []);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Remove a file from the list
   */
  const handleRemoveFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setResult(null);
    setJsonPreview('');
    setParseError(null);
  }, []);

  /**
   * Clear all files
   */
  const handleClearAll = useCallback(() => {
    setFiles([]);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setJsonPreview('');
    setParseError(null);
  }, []);

  /**
   * Handle convert operation
   */
  const handleConvert = useCallback(async () => {
    if (files.length < 1) {
      setError('Please add at least 1 JSON file.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: Partial<JSONToPDFOptions> = {
      pageSize,
      fontSize,
      indentSpaces,
      prettyPrint,
      showLineNumbers,
    };

    try {
      const output: ProcessOutput = await jsonToPDF(
        files.map(f => f.file),
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
        setError(output.error?.message || 'Failed to convert JSON to PDF.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [files, pageSize, fontSize, indentSpaces, prettyPrint, showLineNumbers]);

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
  const canConvert = files.length >= 1 && !isProcessing && !parseError;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      <FileUploader
        accept={['application/json', '.json']}
        multiple
        maxFiles={10}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={tTools('jsonToPdf.uploadLabel') || 'Upload JSON Files'}
        description={tTools('jsonToPdf.uploadDescription') || 'Drag and drop JSON files here, or click to browse.'}
      />

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* Parse Error */}
      {parseError && (
        <div
          className="p-4 rounded-md bg-yellow-50 border border-yellow-200 text-yellow-700"
          role="alert"
        >
          <p className="text-sm font-medium">Invalid JSON</p>
          <p className="text-sm mt-1">{parseError}</p>
        </div>
      )}

      {/* File List */}
      {files.length > 0 && (
        <Card className="p-6"  >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-foreground">
              {tTools('jsonToPdf.filesTitle') || 'JSON Files'} ({files.length})
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              disabled={isProcessing}
            >
              {t('buttons.clearAll') || 'Clear All'}
            </Button>
          </div>

          <ul className="space-y-2" role="list">
            {files.map((file) => (
              <li
                key={file.id}
                className="flex items-center gap-3 p-3 rounded-md border border-border bg-white"
              >
                {/* File Icon */}
                <div className="flex-shrink-0">
                  <UIFileJson2 className="w-8 h-8 text-orange-500" aria-hidden="true" />
                </div>

                {/* File Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {file.file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatSize(file.file.size)}
                  </p>
                </div>

                {/* Remove Button */}
                <Button variant="ghost" size="icon-sm"
                  type="button"
                  onClick={() => handleRemoveFile(file.id)}
                  disabled={isProcessing}
                  className="flex-shrink-0"
                  aria-label={`Remove ${file.file.name}`}
                >
                  <UIX className="w-5 h-5" aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>

          {/* JSON Preview */}
          {jsonPreview && !parseError && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-foreground mb-2">
                {tTools('jsonToPdf.preview') || 'Preview'}
              </h4>
              <pre className="p-3 rounded-md bg-muted/30 text-xs font-mono text-foreground overflow-auto max-h-64 whitespace-pre">
                {jsonPreview}
              </pre>
            </div>
          )}
        </Card>
      )}

      {/* Options Panel */}
      {files.length >= 1 && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('jsonToPdf.optionsTitle') || 'PDF Options'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Page Size */}
            <div>
              <Label className="block mb-2" htmlFor="jsontopdftool-field-1">
                {tTools('jsonToPdf.pageSize') || 'Page Size'}
              </Label>
              <NativeSelect
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value as JSONPageSizeType)}
                disabled={isProcessing}
                className="w-full" id="jsontopdftool-field-1" aria-label={tTools('jsonToPdf.pageSize') || 'Page Size'}
              >
                <NativeSelectOption value="A4">A4</NativeSelectOption>
                <NativeSelectOption value="LETTER">Letter</NativeSelectOption>
                <NativeSelectOption value="LEGAL">Legal</NativeSelectOption>
                <NativeSelectOption value="A3">A3</NativeSelectOption>
              </NativeSelect>
            </div>

            {/* Font Size */}
            <div>
              <Label className="block mb-2" htmlFor="jsontopdftool-field-2">
                {tTools('jsonToPdf.fontSize') || 'Font Size'}
              </Label>
              <NativeSelect
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                disabled={isProcessing}
                className="w-full" id="jsontopdftool-field-2" aria-label={tTools('jsonToPdf.fontSize') || 'Font Size'}
              >
                <NativeSelectOption value="8">8pt</NativeSelectOption>
                <NativeSelectOption value="9">9pt</NativeSelectOption>
                <NativeSelectOption value="10">10pt</NativeSelectOption>
                <NativeSelectOption value="11">11pt</NativeSelectOption>
                <NativeSelectOption value="12">12pt</NativeSelectOption>
              </NativeSelect>
            </div>

            {/* Indent Spaces */}
            <div>
              <Label className="block mb-2" htmlFor="jsontopdftool-field-3">
                {tTools('jsonToPdf.indentSpaces') || 'Indentation'}
              </Label>
              <NativeSelect
                value={indentSpaces}
                onChange={(e) => setIndentSpaces(Number(e.target.value))}
                disabled={isProcessing}
                className="w-full" id="jsontopdftool-field-3" aria-label={tTools('jsonToPdf.indentSpaces') || 'Indentation'}
              >
                <NativeSelectOption value="2">2 spaces</NativeSelectOption>
                <NativeSelectOption value="4">4 spaces</NativeSelectOption>
                <NativeSelectOption value="8">8 spaces (tab)</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <Label className="flex items-center gap-3 cursor-pointer">
              <Checkbox

                checked={prettyPrint}
                onCheckedChange={(checked) => setPrettyPrint((checked === true))}
                disabled={isProcessing}

              />
              <span className="text-sm text-foreground">
                {tTools('jsonToPdf.prettyPrint') || 'Format JSON (pretty print)'}
              </span>
            </Label>

            <Label className="flex items-center gap-3 cursor-pointer">
              <Checkbox

                checked={showLineNumbers}
                onCheckedChange={(checked) => setShowLineNumbers((checked === true))}
                disabled={isProcessing}

              />
              <span className="text-sm text-foreground">
                {tTools('jsonToPdf.showLineNumbers') || 'Show line numbers'}
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
          onClick={handleConvert}
          disabled={!canConvert}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('jsonToPdf.convertButton') || 'Convert to PDF')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={files.length === 1 ? `${files[0].file.name.replace(/\.[^/.]+$/, '')}.pdf` : `json_${files.length}_files.pdf`}
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
            {tTools('jsonToPdf.successMessage') || 'JSON converted to PDF successfully! Click the download button to save your file.'}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default JSONToPDFTool;
