'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Eye, EyeOff, Lock, FileText as UIFileText } from 'lucide-react';

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
import { encryptPDF, type EncryptPDFOptions, type PDFPermissions } from '@/lib/pdf/processors/encrypt';
import type { ProcessOutput } from '@/types/pdf';

export interface EncryptPDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * EncryptPDFTool Component
 * Requirements: 5.1, 11.4
 *
 * Provides the UI for encrypting PDF files with password protection.
 * All encryption is performed client-side - passwords are never transmitted.
 */
export function EncryptPDFTool({ className = '' }: EncryptPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Password options
  const [userPassword, setUserPassword] = useState('');
  const [ownerPassword, setOwnerPassword] = useState('');
  const [showUserPassword, setShowUserPassword] = useState(false);
  const [showOwnerPassword, setShowOwnerPassword] = useState(false);

  // Permission options
  const [permissions, setPermissions] = useState<PDFPermissions>({
    printing: true,
    modifying: true,
    copying: true,
    annotating: true,
    fillingForms: true,
    contentAccessibility: true,
    documentAssembly: true,
  });

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
    setUserPassword('');
    setOwnerPassword('');
  }, []);

  const handlePermissionChange = useCallback((key: keyof PDFPermissions) => {
    setPermissions(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  const handleEncrypt = useCallback(async () => {
    if (!file) {
      setError('Please select a PDF file to encrypt.');
      return;
    }

    if (!userPassword && !ownerPassword) {
      setError('Please provide at least one password.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: EncryptPDFOptions = {
      userPassword,
      ownerPassword,
      permissions,
    };

    try {
      const output: ProcessOutput = await encryptPDF(
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
        setError(output.error?.message || 'Failed to encrypt PDF file.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, userPassword, ownerPassword, permissions]);

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
  const canEncrypt = file && (userPassword || ownerPassword) && !isProcessing;

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
        label={tTools('encryptPdf.uploadLabel') || 'Upload PDF File'}
        description={tTools('encryptPdf.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
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

      {/* Password Options */}
      {file && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('encryptPdf.passwordTitle') || 'Password Settings'}
          </h3>

          <div className="space-y-4">
            {/* Privacy Notice */}
            <Alert role="note">
              <Lock aria-hidden="true" />
              <AlertDescription>{tTools('encryptPdf.privacyNotice')}</AlertDescription>
            </Alert>

            {/* User Password */}
            <div>
              <Label htmlFor="user-password" className="block mb-2">
                {tTools('encryptPdf.userPasswordLabel') || 'User Password (to open document)'}
              </Label>
              <div className="relative">
                <Input
                  id="user-password"
                  type={showUserPassword ? 'text' : 'password'}
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  disabled={isProcessing}
                  placeholder={tTools('encryptPdf.userPasswordPlaceholder') || 'Enter password to open PDF'}
                  aria-describedby="user-password-hint"
                  className="w-full pe-11" aria-label={tTools('encryptPdf.userPasswordLabel') || 'User Password (to open document)'}
                />
                <Button variant="ghost" size="icon-sm"
                  type="button"
                  onClick={() => setShowUserPassword(!showUserPassword)}
                  aria-label={`${t(showUserPassword ? 'buttons.hidePassword' : 'buttons.showPassword')}: ${tTools('encryptPdf.userPasswordLabel')}`}
                  aria-controls="user-password"
                  aria-pressed={showUserPassword}
                  disabled={isProcessing}
                  className="absolute end-1 top-1/2 -translate-y-1/2"
                >
                  {showUserPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                </Button>
              </div>
              <p id="user-password-hint" className="mt-1 text-xs text-muted-foreground">
                {tTools('encryptPdf.userPasswordHint') || 'Required to open and view the PDF.'}
              </p>
            </div>

            {/* Owner Password */}
            <div>
              <Label htmlFor="owner-password" className="block mb-2">
                {tTools('encryptPdf.ownerPasswordLabel') || 'Owner Password (to change permissions)'}
              </Label>
              <div className="relative">
                <Input
                  id="owner-password"
                  type={showOwnerPassword ? 'text' : 'password'}
                  value={ownerPassword}
                  onChange={(e) => setOwnerPassword(e.target.value)}
                  disabled={isProcessing}
                  placeholder={tTools('encryptPdf.ownerPasswordPlaceholder') || 'Enter owner password'}
                  aria-describedby="owner-password-hint"
                  className="w-full pe-11" aria-label={tTools('encryptPdf.ownerPasswordLabel') || 'Owner Password (to change permissions)'}
                />
                <Button variant="ghost" size="icon-sm"
                  type="button"
                  onClick={() => setShowOwnerPassword(!showOwnerPassword)}
                  aria-label={`${t(showOwnerPassword ? 'buttons.hidePassword' : 'buttons.showPassword')}: ${tTools('encryptPdf.ownerPasswordLabel')}`}
                  aria-controls="owner-password"
                  aria-pressed={showOwnerPassword}
                  disabled={isProcessing}
                  className="absolute end-1 top-1/2 -translate-y-1/2"
                >
                  {showOwnerPassword ? <EyeOff aria-hidden="true" /> : <Eye aria-hidden="true" />}
                </Button>
              </div>
              <p id="owner-password-hint" className="mt-1 text-xs text-muted-foreground">
                {tTools('encryptPdf.ownerPasswordHint') || 'Required to modify permissions or remove encryption.'}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Permission Options */}
      {file && (
        <Card className="p-6" >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('encryptPdf.permissionsTitle') || 'Document Permissions'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(permissions).map(([key, value]) => (
              <Label key={key} className="flex items-center gap-3 cursor-pointer">
                <Checkbox

                  checked={value}
                  onCheckedChange={() => handlePermissionChange(key as keyof PDFPermissions)}
                  disabled={isProcessing}

                />
                <span className="text-sm text-foreground">
                  {key === 'printing' && (tTools('encryptPdf.permPrinting') || 'Allow Printing')}
                  {key === 'modifying' && (tTools('encryptPdf.permModifying') || 'Allow Modifying')}
                  {key === 'copying' && (tTools('encryptPdf.permCopying') || 'Allow Copying')}
                  {key === 'annotating' && (tTools('encryptPdf.permAnnotating') || 'Allow Annotating')}
                  {key === 'fillingForms' && (tTools('encryptPdf.permFillingForms') || 'Allow Filling Forms')}
                  {key === 'contentAccessibility' && (tTools('encryptPdf.permAccessibility') || 'Allow Accessibility')}
                  {key === 'documentAssembly' && (tTools('encryptPdf.permAssembly') || 'Allow Assembly')}
                </span>
              </Label>
            ))}
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
          onClick={handleEncrypt}
          disabled={!canEncrypt}
          loading={isProcessing}
        >
          {isProcessing
            ? (t('status.processing') || 'Processing...')
            : (tTools('encryptPdf.encryptButton') || 'Encrypt PDF')
          }
        </Button>

        {result && (
          <DownloadButton
            file={result}
            filename={file ? `${file.name.replace('.pdf', '')}_encrypted.pdf` : 'encrypted.pdf'}
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
            {tTools('encryptPdf.successMessage') || 'PDF encrypted successfully!'}
          </p>
          <p className="text-xs mt-1">
            {tTools('encryptPdf.successHint') || 'Remember to save your passwords securely. They cannot be recovered if lost.'}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default EncryptPDFTool;
