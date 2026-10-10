'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { FileText as UIFileText, Paperclip as UIPaperclip, X as UIX } from 'lucide-react';


import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { extractAttachments, type AttachmentInfo } from '@/lib/pdf/processors/attachments';
import { saveBlobFile } from '@/lib/tauri-bridge';
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

export interface ExtractAttachmentsToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * ExtractAttachmentsTool Component
 * Requirements: 5.1, 5.2
 *
 * Provides the UI for extracting attachments from PDF files.
 */
export function ExtractAttachmentsTool({ className = '' }: ExtractAttachmentsToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [extractedAttachments, setExtractedAttachments] = useState<AttachmentInfo[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Handle files selected from uploader
   */
  const handleFilesSelected = useCallback((newFiles: File[]) => {
    const uploadedFiles: UploadedFile[] = newFiles.map(file => ({
      id: generateId(),
      file,
    }));
    setFiles(prev => [...prev, ...uploadedFiles]);
    setError(null);
    setExtractedAttachments([]);
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
    setExtractedAttachments([]);
  }, []);

  /**
   * Clear all files
   */
  const handleClearAll = useCallback(() => {
    setFiles([]);
    setExtractedAttachments([]);
    setError(null);
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Handle extract operation
   */
  const handleExtract = useCallback(async () => {
    if (files.length === 0) {
      setError('Please add at least one PDF file.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setExtractedAttachments([]);

    try {
      const output: ProcessOutput = await extractAttachments(
        files.map(f => f.file),
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

      if (output.success && output.metadata?.attachments) {
        setExtractedAttachments(output.metadata.attachments as AttachmentInfo[]);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'No attachments found in the selected PDF(s).');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [files]);

  /**
   * Handle cancel operation
   */
  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  /**
   * Download a single attachment
   */
  const handleDownloadAttachment = useCallback((attachment: AttachmentInfo) => {
    const blob = new Blob([new Uint8Array(attachment.data)]);
    saveBlobFile(blob, attachment.name);
  }, []);

  /**
   * Download all attachments as individual files
   */
  const handleDownloadAll = useCallback(() => {
    extractedAttachments.forEach((attachment, index) => {
      setTimeout(() => {
        handleDownloadAttachment(attachment);
      }, index * 200); // Stagger downloads to avoid browser blocking
    });
  }, [extractedAttachments, handleDownloadAttachment]);

  /**
   * Format file size
   */
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isProcessing = status === 'processing' || status === 'uploading';
  const canExtract = files.length > 0 && !isProcessing;

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple
        maxFiles={20}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={tTools('extractAttachments.uploadLabel') || 'Upload PDF Files'}
        description={tTools('extractAttachments.uploadDescription') || 'Select PDF files to extract attachments from.'}
      />

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* File List */}
      {files.length > 0 && (
        <Card className="p-6"  >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-foreground">
              {tTools('extractAttachments.filesTitle') || 'Selected Files'} ({files.length})
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
            {files.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 p-3 rounded-md border border-border"
              >
                <UIFileText className="w-8 h-8 text-red-500" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {item.file.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatSize(item.file.size)}
                  </p>
                </div>
                <Button variant="ghost" size="icon-sm"
                  type="button"
                  onClick={() => handleRemoveFile(item.id)}
                  disabled={isProcessing}

                  aria-label={`Remove ${item.file.name}`}
                >
                  <UIX className="w-5 h-5" aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>
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
          onClick={handleExtract}
          disabled={!canExtract}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('extractAttachments.extractButton') || 'Extract Attachments')
          }
        </Button>
      </div>

      {/* Extracted Attachments */}
      {extractedAttachments.length > 0 && (
        <Card className="p-6"  >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-foreground">
              {tTools('extractAttachments.extractedTitle') || 'Extracted Attachments'} ({extractedAttachments.length})
            </h3>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleDownloadAll}
            >
              {tTools('extractAttachments.downloadAll') || 'Download All'}
            </Button>
          </div>

          <ul className="space-y-2" role="list">
            {extractedAttachments.map((attachment, index) => (
              <li
                key={`${attachment.name}-${index}`}
                className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted/30"
              >
                <UIPaperclip className="w-6 h-6 text-muted-foreground" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {attachment.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {formatSize(attachment.data.byteLength)}
                    {attachment.page > 0 && ` • Page ${attachment.page}`}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownloadAttachment(attachment)}
                >
                  {t('buttons.download') || 'Download'}
                </Button>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* Success Message */}
      {status === 'complete' && extractedAttachments.length > 0 && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">
            {tTools('extractAttachments.successMessage') || `Successfully extracted ${extractedAttachments.length} attachment(s). Click to download individual files or use "Download All".`}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default ExtractAttachmentsTool;
