'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { FileText as UIFileText, Paperclip as UIPaperclip, X as UIX } from 'lucide-react';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { addAttachments, type AddAttachmentsOptions } from '@/lib/pdf/processors/attachments';
import type { ProcessOutput } from '@/types/pdf';

/**
 * Generate a unique ID for files
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

interface UploadedFile {
  id: string;
  file: File;
}

export interface AddAttachmentsToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * AddAttachmentsTool Component
 * Requirements: 5.1, 5.2
 *
 * Provides the UI for adding attachments to PDF files.
 */
export function AddAttachmentsTool({ className = '' }: AddAttachmentsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [attachmentFiles, setAttachmentFiles] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attachmentLevel, setAttachmentLevel] = useState<'document' | 'page'>('document');
  const [pageRange, setPageRange] = useState('');

  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Handle PDF file selected
   */
  const handlePdfSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setPdfFile(files[0]);
      setError(null);
      setResult(null);
    }
  }, []);

  /**
   * Handle attachment files selected
   */
  const handleAttachmentsSelected = useCallback((files: File[]) => {
    const newFiles: UploadedFile[] = files.map(file => ({
      id: generateId(),
      file,
    }));
    setAttachmentFiles(prev => [...prev, ...newFiles]);
    setError(null);
    setResult(null);
  }, []);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Remove an attachment file
   */
  const handleRemoveAttachment = useCallback((id: string) => {
    setAttachmentFiles(prev => prev.filter(f => f.id !== id));
    setResult(null);
  }, []);

  /**
   * Clear all files
   */
  const handleClearAll = useCallback(() => {
    setPdfFile(null);
    setAttachmentFiles([]);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Handle add attachments operation
   */
  const handleAddAttachments = useCallback(async () => {
    if (!pdfFile || attachmentFiles.length === 0) {
      setError('Please select a PDF file and at least one file to attach.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: AddAttachmentsOptions = {
      attachmentLevel,
      pageRange: attachmentLevel === 'page' ? pageRange : undefined,
    };

    try {
      const output: ProcessOutput = await addAttachments(
        pdfFile,
        attachmentFiles.map(f => f.file),
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
        setError(output.error?.message || 'Failed to add attachments.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [pdfFile, attachmentFiles, attachmentLevel, pageRange]);

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
  const canProcess = pdfFile && attachmentFiles.length > 0 && !isProcessing;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* PDF File Upload */}
      <Card className="p-6"  >
        <h3 className="text-lg font-medium text-foreground mb-4">
          {tTools('addAttachments.pdfFileTitle') || '1. Select PDF File'}
        </h3>
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handlePdfSelected}
          onError={handleUploadError}
          disabled={isProcessing}
          label={tTools('addAttachments.pdfUploadLabel') || 'Upload PDF File'}
          description={tTools('addAttachments.pdfUploadDescription') || 'Select the PDF file to add attachments to.'}
        />
        {pdfFile && (
          <div className="mt-4 flex items-center gap-3 p-3 rounded-md bg-muted/30">
            <UIFileText className="w-8 h-8 text-red-500" aria-hidden="true" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {pdfFile.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatSize(pdfFile.size)}
              </p>
            </div>
            <Button variant="ghost" size="icon-sm"
              type="button"
              onClick={() => setPdfFile(null)}
              disabled={isProcessing}

              aria-label="Remove PDF"
            >
              <UIX className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        )}
      </Card>

      {/* Attachment Files Upload */}
      <Card className="p-6"  >
        <h3 className="text-lg font-medium text-foreground mb-4">
          {tTools('addAttachments.attachmentsTitle') || '2. Select Files to Attach'}
        </h3>
        <FileUploader
          accept={['*/*']}
          multiple
          maxFiles={50}
          onFilesSelected={handleAttachmentsSelected}
          onError={handleUploadError}
          disabled={isProcessing}
          label={tTools('addAttachments.attachmentsUploadLabel') || 'Upload Attachments'}
          description={tTools('addAttachments.attachmentsUploadDescription') || 'Select files to embed in the PDF. Any file type is supported.'}
        />

        {attachmentFiles.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                {attachmentFiles.length} file(s) selected
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setAttachmentFiles([])}
                disabled={isProcessing}
              >
                {t('buttons.clearAll') || 'Clear All'}
              </Button>
            </div>
            <ul className="space-y-2" role="list">
              {attachmentFiles.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 p-2 rounded-md bg-muted/30"
                >
                  <UIPaperclip className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">
                      {item.file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatSize(item.file.size)}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon-sm"
                    type="button"
                    onClick={() => handleRemoveAttachment(item.id)}
                    disabled={isProcessing}

                    aria-label={`Remove ${item.file.name}`}
                  >
                    <UIX className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>

      {/* Options Panel */}
      {pdfFile && attachmentFiles.length > 0 && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('addAttachments.optionsTitle') || 'Attachment Options'}
          </h3>

          <div className="space-y-4">
            <div>
              <Label className="block mb-2">
                {tTools('addAttachments.attachmentLevel') || 'Attachment Level'}
              </Label>
              <RadioGroup className="flex flex-wrap gap-4" name="attachmentLevel" value={attachmentLevel} onValueChange={(value) => setAttachmentLevel(value === 'page' ? 'page' : 'document')} aria-label={tTools('addAttachments.attachmentLevel')} orientation="horizontal">
                <Label className="flex items-center gap-2 cursor-pointer" htmlFor="attachmentLevel-document">
                  <RadioGroupItem
                    value="document"
                    disabled={isProcessing}
                     id="attachmentLevel-document"
                  />
                  <span className="text-sm">{tTools('addAttachments.documentLevel') || 'Document Level'}</span>
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer" htmlFor="attachmentLevel-page">
                  <RadioGroupItem
                    value="page"
                    disabled={isProcessing}
                     id="attachmentLevel-page"
                  />
                  <span className="text-sm">{tTools('addAttachments.pageLevel') || 'Page Level'}</span>
                </Label>
              </RadioGroup>
            </div>

            {attachmentLevel === 'page' && (
              <div>
                <Label className="block mb-2" htmlFor="addattachmentstool-field-1">
                  {tTools('addAttachments.pageRange') || 'Page Range'}
                </Label>
                <Input
                  type="text"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  placeholder="e.g., 1-3, 5, 7-9"
                  disabled={isProcessing}
                  className="w-full" id="addattachmentstool-field-1" aria-label={tTools('addAttachments.pageRange') || 'Page Range'}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  {tTools('addAttachments.pageRangeHint') || 'Specify which pages to attach files to.'}
                </p>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
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
          onClick={handleAddAttachments}
          disabled={!canProcess}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('addAttachments.addButton') || 'Add Attachments')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={pdfFile ? pdfFile.name.replace(/\.pdf$/i, '_with_attachments.pdf') : 'output.pdf'}
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}

        {(pdfFile || attachmentFiles.length > 0) && !isProcessing && (
          <Button
            variant="ghost"
            size="lg"
            onClick={handleClearAll}
          >
            {t('buttons.clearAll') || 'Clear All'}
          </Button>
        )}
      </div>

      {/* Success Message */}
      {status === 'complete' && result && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">
            {tTools('addAttachments.successMessage') || 'Attachments added successfully! Click the download button to save your file.'}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default AddAttachmentsTool;
