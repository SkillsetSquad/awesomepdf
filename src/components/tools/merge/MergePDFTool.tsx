'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GripVertical, FileText, ArrowUp, ArrowDown, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';
import { mergePDFs } from '@/lib/pdf';
import type { MergeOptions, UploadedFile, ProcessOutput } from '@/types/pdf';

/**
 * Generate a unique ID for files
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export interface MergePDFToolProps {
  /** Custom class name */
  className?: string;
}

/**
 * MergePDFTool Component
 * Requirements: 5.1, 5.2
 * 
 * Provides the UI for merging multiple PDF files with drag-to-reorder functionality.
 */
export function MergePDFTool({ className = '' }: MergePDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  
  // State
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preserveBookmarks, setPreserveBookmarks] = useState(true);
  
  // Drag state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  
  // Ref for cancellation
  const cancelledRef = useRef(false);

  /**
   * Handle files selected from uploader
   */
  const handleFilesSelected = useCallback((newFiles: File[]) => {
    const uploadedFiles: UploadedFile[] = newFiles.map(file => ({
      id: generateId(),
      file,
      status: 'pending' as const,
    }));
    
    setFiles(prev => [...prev, ...uploadedFiles]);
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
   * Remove a file from the list
   */
  const handleRemoveFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id));
    setResult(null);
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
  }, []);

  /**
   * Handle drag start
   */
  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    if (e.dataTransfer) {
      e.dataTransfer.setData('text/plain', String(index));
      e.dataTransfer.effectAllowed = 'move';
    }
  }, []);

  /**
   * Handle drag over
   */
  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  }, [draggedIndex]);

  /**
   * Handle drop
   */
  const handleDrop = useCallback((e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      setFiles(prev => {
        const newFiles = [...prev];
        const [draggedFile] = newFiles.splice(draggedIndex, 1);
        newFiles.splice(targetIndex, 0, draggedFile);
        return newFiles;
      });
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex]);

  /**
   * Handle drag end
   */
  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, []);

  /**
   * Move file up in the list
   */
  const handleMoveUp = useCallback((index: number) => {
    if (index === 0) return;
    setFiles(prev => {
      const newFiles = [...prev];
      [newFiles[index - 1], newFiles[index]] = [newFiles[index], newFiles[index - 1]];
      return newFiles;
    });
  }, []);

  /**
   * Move file down in the list
   */
  const handleMoveDown = useCallback((index: number) => {
    setFiles(prev => {
      if (index === prev.length - 1) return prev;
      const newFiles = [...prev];
      [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
      return newFiles;
    });
  }, []);

  /**
   * Handle merge operation
   */
  const handleMerge = useCallback(async () => {
    if (files.length < 2) {
      setError('Please add at least 2 PDF files to merge.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    const options: MergeOptions = {
      preserveBookmarks,
      pageOrder: 'sequential',
    };

    try {
      const output: ProcessOutput = await mergePDFs(
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
        setError(output.error?.message || 'Failed to merge PDF files.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [files, preserveBookmarks]);

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
  const canMerge = files.length >= 2 && !isProcessing;

  return (
    <div className={`space-y-6 ${className}`}>
      <FileUploader accept={['application/pdf', '.pdf']} multiple maxFiles={100}
        onFilesSelected={handleFilesSelected} onError={handleUploadError} disabled={isProcessing}
        label={tTools('mergePdf.uploadLabel')} description={tTools('mergePdf.uploadDescription')} />
      {error && <Alert variant="destructive"><AlertCircle /><AlertDescription>{error}</AlertDescription></Alert>}
      {!!files.length && <Card>
        <CardHeader>
          <CardTitle><h2>{tTools('mergePdf.filesTitle')} ({files.length})</h2></CardTitle>
          <CardDescription>{tTools('mergePdf.reorderHint')}</CardDescription>
          <CardAction><Button variant="ghost" size="sm" onClick={handleClearAll} disabled={isProcessing}>{t('buttons.clearAll')}</Button></CardAction>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2" aria-label={tTools('mergePdf.filesTitle')}>
            {files.map((file, index) => <li key={file.id} draggable={!isProcessing}
              onDragStart={event => handleDragStart(event, index)} onDragOver={event => handleDragOver(event, index)} onDrop={event => handleDrop(event, index)} onDragEnd={handleDragEnd}
              className={`flex flex-wrap items-center gap-2 rounded-md border p-3 ${draggedIndex === index ? 'opacity-50' : ''}  ${dragOverIndex === index ? 'border-primary bg-accent' : ''}  ${!isProcessing ? 'cursor-grab' : ''}`}>
              <GripVertical className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <Badge variant="secondary" className="tabular-nums">{index + 1}</Badge>
              <FileText className="hidden size-5 shrink-0 text-primary sm:block" aria-hidden="true" />
              <div className="min-w-0 flex-1 basis-24"><p className="truncate text-sm font-medium" title={file.file.name}>{file.file.name}</p><p className="text-xs text-muted-foreground">{formatSize(file.file.size)}</p></div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon-sm" onClick={() => handleMoveUp(index)} disabled={index === 0 || isProcessing} aria-label={`${t('buttons.moveUp')}: ${file.file.name}`}><ArrowUp /></Button>
                <Button variant="ghost" size="icon-sm" onClick={() => handleMoveDown(index)} disabled={index === files.length - 1 || isProcessing} aria-label={`${t('buttons.moveDown')}: ${file.file.name}`}><ArrowDown /></Button>
                <Button variant="ghost" size="icon-sm" onClick={() => handleRemoveFile(file.id)} disabled={isProcessing} aria-label={`${t('buttons.remove')}: ${file.file.name}`}><Trash2 /></Button>
              </div>
            </li>)}
          </ul>
        </CardContent>
      </Card>}
      {files.length >= 2 && <Card>
        <CardHeader><CardTitle><h2>{tTools('mergePdf.optionsTitle')}</h2></CardTitle></CardHeader>
        <CardContent className="flex items-start gap-3">
          <Checkbox id="preserve-bookmarks" checked={preserveBookmarks} onCheckedChange={checked => setPreserveBookmarks(checked === true)} disabled={isProcessing} />
          <Label htmlFor="preserve-bookmarks" className="leading-normal">{tTools('mergePdf.preserveBookmarks')}</Label>
        </CardContent>
      </Card>}
      {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={handleCancel} />}
      <div className="flex flex-wrap gap-3">
        <Button onClick={handleMerge} disabled={!canMerge} loading={isProcessing}>{isProcessing ? t('status.processing') : tTools('mergePdf.mergeButton')}</Button>
        {result && <DownloadButton file={result} filename="merged.pdf" variant="outline" />}
      </div>
      {status === 'complete' && result && <Alert role="status"><CheckCircle2 /><AlertDescription>{tTools('mergePdf.successMessage')}</AlertDescription></Alert>}
    </div>
  );
}

export default MergePDFTool;
