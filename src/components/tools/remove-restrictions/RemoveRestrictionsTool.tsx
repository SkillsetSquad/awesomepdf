'use client';
import { FileText as UIFileText } from 'lucide-react';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { AlertCircle } from 'lucide-react';
import { removeRestrictions, type RemoveRestrictionsOptions } from '@/lib/pdf/processors/remove-restrictions';
import type { ProcessOutput } from '@/types/pdf';
import { Eye, EyeOff } from 'lucide-react';

export interface RemoveRestrictionsToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * RemoveRestrictionsTool Component
 * Requirements: 5.1, 5.2
 *
 * Provides the UI for removing security restrictions from PDF files.
 * This removes owner password restrictions that prevent printing, copying, and editing.
 */
export function RemoveRestrictionsTool({ className = '' }: RemoveRestrictionsToolProps) {
  const t = useTranslations('common');
  const locale = useLocale();
  const processButtonRef = useRef<HTMLButtonElement>(null);
  const tTools = useTranslations('tools');

  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<{
    originalSize: number;
    newSize: number;
  } | null>(null);

  // Options
  const [ownerPassword, setOwnerPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Password error modal
  const [showPasswordErrorModal, setShowPasswordErrorModal] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

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
      setStats(null);
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
    setStats(null);
    setOwnerPassword('');
  }, []);

  /**
   * Handle remove restrictions operation
   */
  const handleRemoveRestrictions = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setStats(null);

    const options: RemoveRestrictionsOptions = {
      ownerPassword: ownerPassword || undefined,
    };

    try {
      const output: ProcessOutput = await removeRestrictions(
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

        // Set stats
        if (output.metadata) {
          setStats({
            originalSize: output.metadata.originalSize as number,
            newSize: output.metadata.newSize as number,
          });
        }
      } else {
        // Check for invalid password error
        const errorMsg = output.error?.message || '';
        const errorCode = output.error?.code || '';

        if (
          errorCode === 'INVALID_PASSWORD' ||
          errorMsg === 'INVALID_PASSWORD'
        ) {
          setPasswordErrorMessage(tTools('removeRestrictions.invalidPassword') || 'The password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errorMsg || 'Failed to remove PDF restrictions.');
        }
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        const errMsg = err instanceof Error ? err.message : String(err);
        // Check for invalid password error in catch block
        if (errMsg === 'INVALID_PASSWORD') {
          setPasswordErrorMessage(tTools('removeRestrictions.invalidPassword') || 'The password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errMsg || 'An unexpected error occurred.');
        }
        setStatus('error');
      }
    }
  }, [file, ownerPassword, tTools]);

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
        label={tTools('removeRestrictions.uploadLabel') || 'Upload PDF File'}
        description={tTools('removeRestrictions.uploadDescription') || 'Drag and drop a restricted PDF file here, or click to browse.'}
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

      {/* Options */}
      {file && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('removeRestrictions.optionsTitle') || 'Options'}
          </h3>

          <div className="space-y-4">
            {/* Owner Password Input */}
            <div>
              <Label className="block mb-2" htmlFor="removerestrictionstool-field-1">
                {tTools('removeRestrictions.ownerPasswordLabel') || 'Owner Password (optional)'}
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={ownerPassword}
                  onChange={(e) => setOwnerPassword(e.target.value)}
                  disabled={isProcessing}
                  placeholder={tTools('removeRestrictions.ownerPasswordPlaceholder') || 'Enter owner password if known'}
                  className="w-full pr-10 disabled:opacity-50" id="removerestrictionstool-field-1" aria-label={tTools('removeRestrictions.ownerPasswordLabel') || 'Owner Password (optional)'}
                />
                <Button variant="ghost" size="sm"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {tTools('removeRestrictions.ownerPasswordHint') || 'If the PDF has an owner password, enter it here for better results.'}
              </p>
            </div>

            {/* Info about restrictions */}
            <div className="p-3 rounded-sm bg-blue-50 border border-blue-200">
              <p className="text-sm text-blue-700">
                {tTools('removeRestrictions.info') || 'This tool removes owner password restrictions that prevent printing, copying, and editing. It works on PDFs with permission restrictions but cannot remove user passwords required to open the document.'}
              </p>
            </div>

            {/* Warning */}
            <div className="p-3 rounded-sm bg-yellow-50 border border-yellow-200">
              <p className="text-sm text-yellow-700">
                {tTools('removeRestrictions.warning') || 'Only use this tool on PDFs you own or have permission to modify. Removing restrictions from copyrighted material without authorization may violate copyright laws.'}
              </p>
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
          ref={processButtonRef}
          onClick={handleRemoveRestrictions}
          disabled={!canProcess}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('removeRestrictions.removeButton') || 'Remove Restrictions')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace('.pdf', '')}_unrestricted.pdf` : 'unrestricted.pdf'}
            variant="secondary"
            size="lg"
            showFileSize
          />
        )}
      </div>

      {/* Results */}
      {status === 'complete' && result && stats && (
        <div
          className="p-4 rounded-md bg-green-50 border border-green-200 text-green-700"
          role="status"
        >
          <p className="text-sm font-medium mb-2">
            {tTools('removeRestrictions.successMessage') || 'PDF restrictions removed successfully!'}
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-green-600">{tTools('removeRestrictions.originalSize') || 'Original:'}</span>
              <span className="ml-1 font-medium">{formatSize(stats.originalSize)}</span>
            </div>
            <div>
              <span className="text-green-600">{tTools('removeRestrictions.newSize') || 'New Size:'}</span>
              <span className="ml-1 font-medium">{formatSize(stats.newSize)}</span>
            </div>
          </div>
          <p className="text-xs mt-2 text-green-600">
            {tTools('removeRestrictions.successHint') || 'The PDF can now be printed, copied, and edited without restrictions.'}
          </p>
        </div>
      )}

      {/* Password Error Modal */}
      <Dialog open={showPasswordErrorModal} onOpenChange={setShowPasswordErrorModal}>
        <DialogContent dir={locale === 'ar' ? 'rtl' : 'ltr'} showCloseButton={false} onCloseAutoFocus={event => { event.preventDefault(); processButtonRef.current?.focus(); }}>
          <DialogHeader>
            <AlertCircle className="size-5 text-destructive" aria-hidden="true" />
            <DialogTitle>{t('status.error')}</DialogTitle>
            <DialogDescription>{passwordErrorMessage}</DialogDescription>
          </DialogHeader>
          <DialogFooter><DialogClose asChild><Button>{t('buttons.close')}</Button></DialogClose></DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default RemoveRestrictionsTool;
