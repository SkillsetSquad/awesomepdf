/**
 * BatchProcessingPanel Component
 * Requirements: 10.1
 * 
 * UI for batch processing multiple files with the same operation
 */

'use client';

import React, { useCallback, useState, useRef, useEffect, useId } from 'react';
import {
  Files,
  X,
  Play,
  Pause,
  Download,
  Archive,
  CheckCircle,
  AlertCircle,
  Loader2,
  Trash2,
} from 'lucide-react';
import { useBatchProcessing, type BatchFile } from '@/lib/hooks/useBatchProcessing';
import { formatFileSize } from '@/lib/storage/recent-files';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardAction, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';

export interface BatchProcessingPanelProps {
  translations: {
    title: string;
    addFiles: string;
    clearAll: string;
    startProcessing: string;
    cancelProcessing: string;
    downloadAll: string;
    downloadZip: string;
    pending: string;
    processing: string;
    completed: string;
    error: string;
    progress: string;
    filesSelected: string;
    noFiles: string;
  };
  acceptedTypes?: string;
  processor: (file: File, onProgress: (progress: number) => void) => Promise<Blob>;
  maxConcurrent?: number;
}

const FileStatusIcon: React.FC<{ status: BatchFile['status'] }> = ({ status }) => {
  switch (status) {
    case 'pending':
      return <Files className="h-4 w-4 text-muted-foreground" aria-hidden="true" />;
    case 'processing':
      return <Loader2 className="h-4 w-4 text-primary animate-spin" aria-hidden="true" />;
    case 'completed':
      return <CheckCircle className="h-4 w-4 text-foreground" aria-hidden="true" />;
    case 'error':
      return <AlertCircle className="h-4 w-4 text-destructive" aria-hidden="true" />;
    default:
      return null;
  }
};

export const BatchProcessingPanel: React.FC<BatchProcessingPanelProps> = ({
  translations,
  acceptedTypes = '.pdf',
  processor,
  maxConcurrent = 2,
}) => {
  const {
    files,
    isProcessing,
    overallProgress,
    completedCount,
    errorCount,
    addFiles,
    removeFile,
    clearFiles,
    startProcessing,
    cancelProcessing,
    downloadAll,
    downloadAsZip,
  } = useBatchProcessing({ maxConcurrent });

  const t = useTranslations('common');
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [focusedFileIndex, setFocusedFileIndex] = useState<number>(-1);
  const fileItemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Focus file item when focusedFileIndex changes
  useEffect(() => {
    if (focusedFileIndex >= 0 && fileItemRefs.current[focusedFileIndex]) {
      const removeButton = fileItemRefs.current[focusedFileIndex]?.querySelector<HTMLButtonElement>(
        'button[aria-label]'
      );
      removeButton?.focus();
    }
  }, [focusedFileIndex]);

  const handleFileKeyDown = useCallback((event: React.KeyboardEvent, index: number) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedFileIndex(index < files.length - 1 ? index + 1 : 0);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedFileIndex(index > 0 ? index - 1 : files.length - 1);
        break;
      case 'Home':
        event.preventDefault();
        setFocusedFileIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setFocusedFileIndex(files.length - 1);
        break;
      case 'Delete':
      case 'Backspace':
        if (!isProcessing && files[index].status !== 'processing') {
          event.preventDefault();
          removeFile(files[index].id);
          // Adjust focus after removal
          if (files.length > 1) {
            setFocusedFileIndex((prev) => Math.min(prev, files.length - 2));
          } else {
            setFocusedFileIndex(-1);
          }
        }
        break;
    }
  }, [files, isProcessing, removeFile]);

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (selectedFiles) {
        addFiles(Array.from(selectedFiles));
      }
      // Reset input
      event.target.value = '';
    },
    [addFiles]
  );

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const droppedFiles = event.dataTransfer.files;
      if (droppedFiles) {
        addFiles(Array.from(droppedFiles));
      }
    },
    [addFiles]
  );

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleStartProcessing = useCallback(() => {
    startProcessing(processor);
  }, [startProcessing, processor]);

  const getStatusLabel = (status: BatchFile['status']) => {
    switch (status) {
      case 'pending':
        return translations.pending;
      case 'processing':
        return translations.processing;
      case 'completed':
        return translations.completed;
      case 'error':
        return translations.error;
      default:
        return status;
    }
  };

  const pendingCount = files.filter((f) => f.status === 'pending').length;
  const hasCompletedFiles = completedCount > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-wrap items-center gap-2">
          <Files className="size-5" aria-hidden="true" />
          {translations.title}
          {files.length > 0 && <Badge variant="secondary">{files.length} {translations.filesSelected}</Badge>}
        </CardTitle>
        {files.length > 0 && !isProcessing && (
          <CardAction><Button variant="ghost" size="sm" onClick={clearFiles}>
            <Trash2 aria-hidden="true" />{translations.clearAll}
          </Button></CardAction>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div onDrop={isProcessing ? undefined : handleDrop} onDragOver={handleDragOver}
          className="flex flex-col items-center gap-3 rounded-lg border border-dashed p-6 text-center"
          role="region" aria-label={translations.addFiles}>
          <Input ref={inputRef} type="file" id={inputId} multiple accept={acceptedTypes}
            onChange={handleFileSelect} className="hidden" disabled={isProcessing} aria-label={translations.addFiles} />
          <Files className="size-8 text-muted-foreground" aria-hidden="true" />
          <Button variant="outline" onClick={() => inputRef.current?.click()} disabled={isProcessing}>
            {translations.addFiles}
          </Button>
        </div>
        {files.length > 0 ? (
          <div className="max-h-64 space-y-2 overflow-auto" role="list" aria-label={translations.filesSelected}>
            {files.map((file, index) => (
              <div key={file.id} ref={(el) => { fileItemRefs.current[index] = el; }}
                className="flex items-center gap-3 rounded-md border p-3" role="listitem"
                onKeyDown={(event) => handleFileKeyDown(event, index)}>
                <FileStatusIcon status={file.status} />
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="truncate text-sm font-medium">{file.file.name}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span>{formatFileSize(file.file.size)}</span>
                    <Badge variant={file.status === 'error' ? 'destructive' : 'secondary'}>{getStatusLabel(file.status)}</Badge>
                  </div>
                  {file.status === 'processing' && <Progress value={file.progress} aria-label={`${translations.progress}: ${file.file.name}`} />}
                  {file.status === 'error' && file.error && <p className="text-xs text-destructive" role="alert">{file.error}</p>}
                </div>
                {!isProcessing && file.status !== 'processing' && (
                  <Button variant="ghost" size="icon-sm" onClick={() => removeFile(file.id)}
                    aria-label={`${t('buttons.remove')} ${file.file.name}`}><X aria-hidden="true" /></Button>
                )}
              </div>
            ))}
          </div>
        ) : <p className="text-center text-sm text-muted-foreground">{translations.noFiles}</p>}
        {isProcessing && (
          <div className="space-y-2" role="status" aria-live="polite">
            <p className="text-sm text-muted-foreground">{translations.progress}: {completedCount}/{files.length} ({overallProgress}%)</p>
            <Progress value={overallProgress} aria-label={translations.progress} />
          </div>
        )}
        {files.length > 0 && !isProcessing && (completedCount > 0 || errorCount > 0) && (
          <div className="flex flex-wrap items-center gap-3 text-sm" role="status" aria-live="polite">
            {completedCount > 0 && <Badge variant="secondary"><CheckCircle aria-hidden="true" />{completedCount} {translations.completed}</Badge>}
            {errorCount > 0 && <Badge variant="destructive"><AlertCircle aria-hidden="true" />{errorCount} {translations.error}</Badge>}
          </div>
        )}
      </CardContent>
      {files.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2">
          {!isProcessing && pendingCount > 0 && <Button size="sm" onClick={handleStartProcessing}><Play aria-hidden="true" />{translations.startProcessing}</Button>}
          {isProcessing && <Button variant="secondary" size="sm" onClick={cancelProcessing}><Pause aria-hidden="true" />{translations.cancelProcessing}</Button>}
          {hasCompletedFiles && !isProcessing && <>
            <Button variant="secondary" size="sm" onClick={() => downloadAll()}><Download aria-hidden="true" />{translations.downloadAll}</Button>
            <Button variant="outline" size="sm" onClick={() => downloadAsZip()}><Archive aria-hidden="true" />{translations.downloadZip}</Button>
          </>}
        </CardFooter>
      )}
    </Card>
  );
};

export default BatchProcessingPanel;
