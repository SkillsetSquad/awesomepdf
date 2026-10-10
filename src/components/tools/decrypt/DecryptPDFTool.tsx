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
import { decryptPDF, type DecryptPDFOptions } from '@/lib/pdf/processors/decrypt';
import type { ProcessOutput } from '@/types/pdf';

export interface DecryptPDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * DecryptPDFTool Component
 * Requirements: 5.1, 11.4
 *
 * Provides the UI for decrypting password-protected PDF files.
 * All decryption is performed client-side - passwords are never transmitted.
 */
export function DecryptPDFTool({ className = '' }: DecryptPDFToolProps) {
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

  // Password
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Password error modal
  const [showPasswordErrorModal, setShowPasswordErrorModal] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  // Ref for cancellation
  const cancelledRef = useRef(false);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
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
    setPassword('');
  }, []);

  const handleDecrypt = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file to decrypt.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: DecryptPDFOptions = {
      password,
    };

    try {
      const output: ProcessOutput = await decryptPDF(
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
        // Check for invalid password error
        const errorMsg = output.error?.message || '';
        const errorDetails = output.error?.details || '';
        const combinedError = `${errorMsg} ${errorDetails}`.toLowerCase();

        if (
          errorMsg === 'INVALID_PASSWORD' ||
          combinedError.includes('invalid password') ||
          combinedError.includes('incorrect password')
        ) {
          setPasswordErrorMessage(tTools('decryptPdf.invalidPassword') || 'The password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errorMsg || 'Failed to decrypt PDF file.');
        }
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        const errMsg = err instanceof Error ? err.message : String(err);
        // Check for invalid password error in catch block
        if (errMsg.toLowerCase().includes('invalid password')) {
          setPasswordErrorMessage(tTools('decryptPdf.invalidPassword') || 'The password you entered is incorrect. Please check and try again.');
          setShowPasswordErrorModal(true);
        } else {
          setError(errMsg || 'An unexpected error occurred.');
        }
        setStatus('error');
      }
    }
  }, [file, password, tTools]);

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
  const canDecrypt = file && !isProcessing;

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
        label={tTools('decryptPdf.uploadLabel') || 'Upload Encrypted PDF'}
        description={tTools('decryptPdf.uploadDescription') || 'Drag and drop an encrypted PDF file here, or click to browse.'}
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

      {/* Password Input */}
      {file && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('decryptPdf.passwordTitle') || 'Enter Password'}
          </h3>

          <div className="space-y-4">
            {/* Privacy Notice */}
            <div className="p-3 rounded-sm bg-green-50 border border-green-200">
              <p className="text-sm text-green-700">
                {tTools('decryptPdf.privacyNotice') || '🔒 Your password is processed locally and never sent to any server.'}
              </p>
            </div>

            {/* Password Field */}
            <div>
              <Label htmlFor="decrypt-password" className="block mb-2">
                {tTools('decryptPdf.passwordLabel') || 'PDF Password'}
              </Label>
              <div className="relative">
                <Input
                  id="decrypt-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isProcessing}
                  placeholder={tTools('decryptPdf.passwordPlaceholder') || 'Enter the PDF password'}
                  aria-describedby="decrypt-password-hint"
                  className="w-full pr-10" aria-label={tTools('decryptPdf.passwordLabel') || 'PDF Password'}
                />
                <Button variant="ghost" size="sm"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? '🙈' : '👁️'}
                </Button>
              </div>
              <p id="decrypt-password-hint" className="mt-1 text-xs text-muted-foreground">
                {tTools('decryptPdf.passwordHint') || 'Leave empty if the PDF only has owner password restrictions.'}
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
          onClick={handleDecrypt}
          disabled={!canDecrypt}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('decryptPdf.decryptButton') || 'Decrypt PDF')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace('.pdf', '')}_decrypted.pdf` : 'decrypted.pdf'}
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
            {tTools('decryptPdf.successMessage') || 'PDF decrypted successfully!'}
          </p>
          <p className="text-xs mt-1 text-green-600">
            {tTools('decryptPdf.successHint') || 'The PDF is now unlocked and can be opened without a password.'}
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

export default DecryptPDFTool;
