'use client';

import React, { useCallback, useRef, useState, useEffect, useId } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { UploadCloud, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { isTauri } from '@/lib/tauri-bridge';

export interface FileUploaderProps {
  /** Accepted file types (MIME types or extensions) */
  accept?: string[];
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Maximum file size in bytes */
  maxSize?: number;
  /** Maximum number of files */
  maxFiles?: number;
  /** Callback when files are selected */
  onFilesSelected: (files: File[]) => void;
  /** Callback when an error occurs */
  onError?: (error: string) => void;
  /** Custom class name */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Custom label text */
  label?: string;
  /** Custom description text */
  description?: string;
}

/**
 * FileUploader Component
 * Requirements: 5.2
 *
 * Supports drag-and-drop, file picker, and paste from clipboard.
 * Files and password-protected documents stay on the device.
 */
export const FileUploader: React.FC<FileUploaderProps> = ({
  accept = ['application/pdf'],
  multiple = false,
  maxSize = Infinity, // No limit by default
  maxFiles = 10,
  onFilesSelected,
  onError,
  className = '',
  disabled = false,
  label,
  description,
}) => {
  const t = useTranslations('common');
  const tErrors = useTranslations('errors');
  const locale = useLocale();
  const passwordId = useId();

  // Encryption & Decryption states
  const [encryptPendingFiles, setEncryptPendingFiles] = useState<File[]>([]);
  const [encryptCurrentIndex, setEncryptCurrentIndex] = useState<number>(-1);
  const [password, setPassword] = useState<string>('');
  const [decryptError, setDecryptError] = useState<string | null>(null);
  const [isDecrypting, setIsDecrypting] = useState<boolean>(false);
  const [decryptedFilesAccumulator, setDecryptedFilesAccumulator] = useState<File[]>([]);

  const [isDragging, setIsDragging] = useState(false);
  const [, setDragCounter] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // Helper to check if a PDF file is encrypted
  const checkIsEncrypted = async (file: File): Promise<boolean> => {
    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      return false;
    }
    try {
      const arrayBuffer = await file.arrayBuffer();
      const { PDFDocument } = await import('pdf-lib');
      await PDFDocument.load(arrayBuffer);
      return false;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message.toLowerCase() : '';
      if (msg.includes('encrypt') || msg.includes('password') || msg.includes('decrypt')) {
        return true;
      }
      return false;
    }
  };

  const resetDecryptStates = () => {
    setEncryptPendingFiles([]);
    setEncryptCurrentIndex(-1);
    setPassword('');
    setDecryptError(null);
    setIsDecrypting(false);
    setDecryptedFilesAccumulator([]);
  };

  const handleDecryptCancel = () => {
    resetDecryptStates();
  };

  // Generate accept string for input element
  const acceptString = accept.join(',');

  /**
   * Validate files against constraints
   */
  const validateFiles = useCallback((files: File[]): { valid: File[]; errors: string[] } => {
    const valid: File[] = [];
    const errors: string[] = [];

    // Check max files
    if (!multiple && files.length > 1) {
      errors.push('Only one file can be uploaded at a time.');
      return { valid: [files[0]], errors };
    }

    if (files.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed.`);
      files = files.slice(0, maxFiles);
    }

    for (const file of files) {
      // Check file size (skip if no limit)
      if (maxSize !== Infinity && file.size > maxSize) {
        const maxSizeMB = Math.round(maxSize / (1024 * 1024));
        errors.push(tErrors('fileTooLarge', { maxSize: maxSizeMB }));
        continue;
      }

      // Check file type
      const isValidType = accept.some(type => {
        // Accept all files
        if (type === '*/*' || type === '*') {
          return true;
        }
        if (type.startsWith('.')) {
          // Extension check
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        if (type.endsWith('/*')) {
          // Wildcard MIME type
          const baseType = type.slice(0, -2);
          return file.type.startsWith(baseType);
        }
        // Exact MIME type match
        return file.type === type;
      });

      // Also check by extension for PDF files
      const isPdfByExtension = file.name.toLowerCase().endsWith('.pdf');
      const acceptsPdf = accept.includes('application/pdf');

      if (!isValidType && !(acceptsPdf && isPdfByExtension)) {
        errors.push(tErrors('fileTypeInvalid', { acceptedTypes: accept.join(', ') }));
        continue;
      }

      valid.push(file);
    }

    return { valid, errors };
  }, [accept, maxSize, maxFiles, multiple, tErrors]);

  /**
   * Handle decryption submit action
   */
  const handleDecryptSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isDecrypting || encryptCurrentIndex === -1) return;

    const fileToDecrypt = encryptPendingFiles[encryptCurrentIndex];
    setIsDecrypting(true);
    setDecryptError(null);

    try {
      // Decrypt with qpdf-wasm (same engine as the dedicated Decrypt PDF tool).
      // NOTE: pdf-lib cannot decrypt password-protected PDFs at all, so we must
      // not use PDFDocument.load here — it throws for every encrypted input.
      const { decryptPDF } = await import('@/lib/pdf/processors/decrypt');
      const output = await decryptPDF(fileToDecrypt, { password });

      if (!output.success || !output.result) {
        throw new Error(output.error?.message || 'INVALID_PASSWORD');
      }

      const decryptedBlob = output.result as Blob;

      // Create a fresh unlocked virtual File object, fallback to window.File to avoid Node/Browser File type clashes
      const unlockedFile = new window.File([decryptedBlob], fileToDecrypt.name.replace('.pdf', '_unlocked.pdf'), {
        type: 'application/pdf',
      }) as File;

      const updatedAccumulator = [...decryptedFilesAccumulator, unlockedFile];
      setDecryptedFilesAccumulator(updatedAccumulator);
      setPassword('');

      const nextIndex = encryptCurrentIndex + 1;
      if (nextIndex < encryptPendingFiles.length) {
        setEncryptCurrentIndex(nextIndex);
      } else {
        // Complete! Notify tool components of the unlocked files alongside native plain files
        onFilesSelected(updatedAccumulator);
        resetDecryptStates();
      }
    } catch (err: unknown) {
      console.error('PDF Decryption failed:', err);
      setDecryptError(tErrors('incorrectPassword') || 'Incorrect password. Please try again.');
    } finally {
      setIsDecrypting(false);
    }
  };

  /**
   * Handle file selection
   */
  const handleFiles = useCallback(async (files: FileList | File[]) => {
    if (disabled) return;

    const fileArray = Array.from(files);
    if (fileArray.length === 0) return;

    const { valid, errors } = validateFiles(fileArray);

    if (errors.length > 0 && onError) {
      onError(errors[0]);
    }

    if (valid.length > 0) {
      // Async scan for encrypted PDF files
      const encryptedList: File[] = [];
      const unencryptedList: File[] = [];

      for (const file of valid) {
        const isEncrypted = await checkIsEncrypted(file);
        if (isEncrypted) {
          encryptedList.push(file);
        } else {
          unencryptedList.push(file);
        }
      }

      if (encryptedList.length > 0) {
        // Initialize the decryption state machine queue
        setEncryptPendingFiles(encryptedList);
        setDecryptedFilesAccumulator(unencryptedList);
        setEncryptCurrentIndex(0);
        setPassword('');
        setDecryptError(null);
      } else {
        // All files are already plain/unencrypted, transmit natively
        onFilesSelected(valid);
      }
    }
  }, [disabled, validateFiles, onError, onFilesSelected]);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (disabled) return;

    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }

    setDragCounter(prev => prev + 1);
    const hasFiles = e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files');
    if (hasFiles || (e.dataTransfer.items && e.dataTransfer.items.length > 0)) {
      setIsDragging(true);
    }
  }, [disabled]);

  /**
   * Handle drag leave
   */
  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragCounter(prev => {
      const newCount = prev - 1;
      if (newCount === 0) {
        setIsDragging(false);
      }
      return newCount;
    });
  }, []);

  /**
   * Handle drag over
   */
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'copy';
    }
  }, []);

  /**
   * Handle drop
   */
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
    setDragCounter(0);

    if (disabled) return;

    const files = e.dataTransfer.files;
    handleFiles(files);
  }, [disabled, handleFiles]);

  /**
   * Handle file input change
   */
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
    // Reset input value to allow selecting the same file again
    e.target.value = '';
  }, [handleFiles]);

  /**
   * Handle click to open file picker
   */
  const handleClick = useCallback(() => {
    if (disabled) return;
    fileInputRef.current?.click();
  }, [disabled]);

  /**
   * Handle keyboard interaction
   */
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  }, [disabled]);

  /**
   * Handle Tauri native drag-and-drop events
   */
  useEffect(() => {
    if (!isTauri() || disabled) return;

    let active = true;
    const unlisteners: (() => void)[] = [];

    const setupTauriDragDrop = async () => {
      try {
        const { getCurrentWebviewWindow } = await import('@tauri-apps/api/webviewWindow');
        const { readFile } = await import('@tauri-apps/plugin-fs');
        const appWindow = getCurrentWebviewWindow();

        if (!active) return;

        const uOver = await appWindow.listen<{ paths: string[] }>('tauri://drag-over', () => {
          setIsDragging(true);
        });
        unlisteners.push(uOver);

        const uLeave = await appWindow.listen('tauri://drag-leave', () => {
          setIsDragging(false);
        });
        unlisteners.push(uLeave);

        const uDrop = await appWindow.listen<{ paths: string[] }>('tauri://drag-drop', async (event) => {
          setIsDragging(false);
          const paths = event.payload.paths;
          if (!paths || paths.length === 0) return;

          const fileObjects: File[] = [];
          for (const filePath of paths) {
            try {
              const bytes = await readFile(filePath);
              const name = filePath.split(/[/\\]/).pop() || 'file.pdf';

              let mimeType = 'application/octet-stream';
              if (name.toLowerCase().endsWith('.pdf')) {
                mimeType = 'application/pdf';
              } else if (name.toLowerCase().endsWith('.png')) {
                mimeType = 'image/png';
              } else if (name.toLowerCase().endsWith('.jpg') || name.toLowerCase().endsWith('.jpeg')) {
                mimeType = 'image/jpeg';
              }

              const file = new window.File([bytes], name, { type: mimeType }) as File;
              fileObjects.push(file);
            } catch (err) {
              console.error(`Tauri failed to read dragged file: ${filePath}`, err);
            }
          }

          if (fileObjects.length > 0) {
            handleFiles(fileObjects);
          }
        });
        unlisteners.push(uDrop);

        if (!active) {
          unlisteners.forEach(u => u());
        }
      } catch (err) {
        console.error('Failed to set up Tauri drag and drop listeners:', err);
      }
    };

    setupTauriDragDrop();

    return () => {
      active = false;
      unlisteners.forEach(u => u());
    };
  }, [disabled, handleFiles]);

  /**
   * Handle paste from clipboard
   */
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (disabled) return;

      const items = e.clipboardData?.items;
      if (!items) return;

      const files: File[] = [];
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file) {
            files.push(file);
          }
        }
      }

      if (files.length > 0) {
        e.preventDefault();
        handleFiles(files);
      }
    };

    document.addEventListener('paste', handlePaste);
    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, [disabled, handleFiles]);

  /**
   * Prevent default browser drag/drop behavior to avoid file navigation (only for file drags)
   */
  useEffect(() => {
    const handleGlobalDragOver = (e: DragEvent) => {
      const hasFiles = e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files');
      if (hasFiles) {
        e.preventDefault();
      }
    };

    const handleGlobalDrop = (e: DragEvent) => {
      const hasFiles = e.dataTransfer && e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files');
      if (hasFiles) {
        e.preventDefault();
      }
    };

    window.addEventListener('dragover', handleGlobalDragOver);
    window.addEventListener('drop', handleGlobalDrop);
    return () => {
      window.removeEventListener('dragover', handleGlobalDragOver);
      window.removeEventListener('drop', handleGlobalDrop);
    };
  }, []);

  return (
    <>
      <Card
        ref={dropZoneRef}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label={label || t('buttons.upload')}
        aria-disabled={disabled}
        className={`relative w-full cursor-pointer items-center gap-3 border-dashed px-6 py-10 text-center outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${disabled ? 'cursor-not-allowed opacity-50' : isDragging ? 'border-primary bg-accent' : 'hover:bg-accent/50'} ${className}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Input ref={fileInputRef} type="file" accept={acceptString} multiple={multiple} onChange={handleInputChange} className="hidden" aria-hidden="true" disabled={disabled} />
        <UploadCloud className="size-8 text-primary" aria-hidden="true" />
        <p className="font-semibold">{isDragging ? t('fileUploader.dropToUpload') : label || t('buttons.upload')}</p>
        <p className="max-w-md text-sm text-muted-foreground">{description || t('fileUploader.dragDrop')}</p>
        <div className="flex max-w-full flex-wrap justify-center gap-2">
          <Badge variant="secondary" className="whitespace-normal break-all">{t('fileUploader.support')}: {accept.length ? accept.join(', ') : t('fileUploader.paste')}{Number.isFinite(maxSize) ? ` (${Math.round(maxSize / (1024 * 1024))}MB)` : ''}</Badge>
          {multiple && <Badge variant="outline">{t('fileUploader.maxFiles', { count: maxFiles })}</Badge>}
        </div>
      </Card>
      <Dialog open={encryptCurrentIndex !== -1} onOpenChange={open => { if (!open && !isDecrypting) handleDecryptCancel(); }}>
        <DialogContent dir={locale === 'ar' ? 'rtl' : 'ltr'} showCloseButton={false}
          onCloseAutoFocus={event => { event.preventDefault(); dropZoneRef.current?.focus(); }}
          onEscapeKeyDown={event => { if (isDecrypting) event.preventDefault(); }}
          onInteractOutside={event => { if (isDecrypting) event.preventDefault(); }}>
          <DialogHeader>
            <Lock className="size-5 text-primary" aria-hidden="true" />
            <DialogTitle>{t('fileUploader.encryptedTitle')}</DialogTitle>
            <DialogDescription className="break-words">{t('fileUploader.enterPasswordHelp').replace(/<br\s*\/?>/g, ' ')}<span className="block font-medium text-foreground">{encryptPendingFiles[encryptCurrentIndex]?.name}</span></DialogDescription>
          </DialogHeader>
          <form onSubmit={handleDecryptSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={passwordId}>{t('fileUploader.passwordPlaceholder')}</Label>
              <Input id={passwordId} type="password" autoComplete="off" placeholder={t('fileUploader.passwordPlaceholder')} value={password} onChange={event => setPassword(event.target.value)} disabled={isDecrypting} aria-invalid={!!decryptError} aria-describedby={decryptError ? `${passwordId}-error` : undefined} aria-label={t('fileUploader.passwordPlaceholder')} />
            </div>
            {decryptError && <Alert variant="destructive" id={`${passwordId}-error`}><AlertCircle /><AlertDescription>{decryptError}</AlertDescription></Alert>}
            <DialogFooter>
              <Button variant="outline" onClick={handleDecryptCancel} disabled={isDecrypting}>{t('fileUploader.cancelButton')}</Button>
              <Button type="submit" loading={isDecrypting} disabled={!password}>{t(isDecrypting ? 'fileUploader.decrypting' : 'fileUploader.decryptAndContinue')}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FileUploader;
