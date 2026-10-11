/**
 * useBatchProcessing Hook
 * Requirements: 10.1
 * 
 * React hook for batch processing multiple files with the same operation
 */

'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { saveBlobFile } from '@/lib/tauri-bridge';

export interface BatchFile {
  id: string;
  file: File;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress: number;
  result?: Blob;
  error?: string;
}

export interface BatchProcessingOptions {
  maxConcurrent?: number;
  onFileComplete?: (file: BatchFile) => void;
  onAllComplete?: (files: BatchFile[]) => void;
  onError?: (file: BatchFile, error: Error) => void;
}

export interface UseBatchProcessingReturn {
  files: BatchFile[];
  isProcessing: boolean;
  overallProgress: number;
  completedCount: number;
  errorCount: number;
  
  // Actions
  addFiles: (files: File[]) => void;
  removeFile: (id: string) => void;
  clearFiles: () => void;
  resetFiles: () => void;
  startProcessing: (
    processor: (file: File, onProgress: (progress: number) => void) => Promise<Blob>
  ) => Promise<void>;
  cancelProcessing: () => void;
  downloadAll: (filenamePrefix?: string) => void;
  downloadAsZip: (zipFilename?: string) => Promise<void>;
}

function generateFileId(): string {
  return `batch_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function useBatchProcessing(options: BatchProcessingOptions = {}): UseBatchProcessingReturn {
  const { maxConcurrent = 2, onFileComplete, onAllComplete, onError } = options;
  
  const [files, setFiles] = useState<BatchFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const filesRef = useRef<BatchFile[]>([]);
  const processingRun = useRef(0);
  const processingRef = useRef(false); // Track processing state with ref
  useEffect(() => () => { processingRun.current++; processingRef.current = false; }, []);

  const changeFiles = useCallback((update: (current: BatchFile[]) => BatchFile[]) => {
    const next = update(filesRef.current);
    filesRef.current = next;
    setFiles(next);
  }, []);

  const cancelProcessing = useCallback(() => {
    processingRun.current++;
    processingRef.current = false;
    setIsProcessing(false);
    changeFiles(current => current.map(file => file.status === 'processing' ? { ...file, status: 'pending', progress: 0, result: undefined, error: undefined } : file));
  }, [changeFiles]);

  const addFiles = useCallback((newFiles: File[]) => {
    const batchFiles: BatchFile[] = newFiles.map((file) => ({
      id: generateFileId(),
      file,
      status: 'pending',
      progress: 0,
    }));
    
    changeFiles((prev) => [...prev, ...batchFiles]);
  }, [changeFiles]);

  const removeFile = useCallback((id: string) => {
    changeFiles((prev) => prev.filter((f) => f.id !== id));
  }, [changeFiles]);

  const clearFiles = useCallback(() => {
    cancelProcessing();
    changeFiles(() => []);
  }, [cancelProcessing, changeFiles]);

  const resetFiles = useCallback(() => {
    cancelProcessing();
    changeFiles(current => current.map(file => ({ ...file, status: 'pending', progress: 0, result: undefined, error: undefined })));
  }, [cancelProcessing, changeFiles]);

  const updateFile = useCallback((id: string, updates: Partial<BatchFile>) => {
    changeFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updates } : f))
    );
  }, [changeFiles]);

  const startProcessing = useCallback(
    async (processor: (file: File, onProgress: (progress: number) => void) => Promise<Blob>) => {
      if (processingRef.current) return;
      const run = ++processingRun.current;
      processingRef.current = true;
      setIsProcessing(true);
      const queue = filesRef.current.filter(file => file.status === 'pending' || file.status === 'error');
      const isCurrent = () => run === processingRun.current;
      const isPresent = (id: string) => filesRef.current.some(file => file.id === id);
      const processFile = async (batchFile: BatchFile) => {
        if (!isCurrent() || !isPresent(batchFile.id)) return;
        updateFile(batchFile.id, { status: 'processing', progress: 0, error: undefined, result: undefined });
        try {
          const result = await processor(batchFile.file, progress => {
            if (isCurrent()) updateFile(batchFile.id, { progress: Number.isFinite(progress) ? Math.max(0, Math.min(100, progress)) : 0 });
          });
          if (!isCurrent() || !isPresent(batchFile.id)) return;
          const completedFile: BatchFile = { ...batchFile, status: 'completed', progress: 100, result, error: undefined };
          updateFile(batchFile.id, completedFile);
          onFileComplete?.(completedFile);
        } catch (err) {
          if (!isCurrent() || !isPresent(batchFile.id)) return;
          const error = err instanceof Error ? err : new Error('Processing failed');
          updateFile(batchFile.id, { status: 'error', error: error.message });
          onError?.({ ...batchFile, status: 'error', error: error.message }, error);
        }
      };
      const worker = async () => {
        while (isCurrent() && queue.length > 0) {
          const file = queue.shift();
          if (file) await processFile(file);
        }
      };
      const concurrency = Number.isFinite(maxConcurrent) ? Math.max(1, Math.floor(maxConcurrent)) : 2;
      try {
        await Promise.all(Array.from({ length: Math.min(concurrency, queue.length) }, worker));
        if (isCurrent()) onAllComplete?.(filesRef.current);
      } finally {
        if (isCurrent()) { processingRef.current = false; setIsProcessing(false); }
      }
    },
    [maxConcurrent, updateFile, onFileComplete, onAllComplete, onError]
  );

  const downloadAll = useCallback((filenamePrefix = 'processed') => {
    const completedFiles = files.filter((f) => f.status === 'completed' && f.result);
    
    completedFiles.forEach((file, index) => {
      if (!file.result) return;
      
      const url = URL.createObjectURL(file.result);
      const a = document.createElement('a');
      a.href = url;
      
      // Generate filename
      const originalName = file.file.name.replace(/\.[^/.]+$/, '');
      a.download = `${filenamePrefix}_${originalName}_${index + 1}.pdf`;
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }, [files]);

  const downloadAsZip = useCallback(async (zipFilename = 'batch_processed.zip') => {
    const completedFiles = files.filter((f) => f.status === 'completed' && f.result);
    
    if (completedFiles.length === 0) return;

    // Dynamic import JSZip
    const JSZip = (await import('jszip')).default;
    const zip = new JSZip();

    completedFiles.forEach((file, index) => {
      if (!file.result) return;
      
      const originalName = file.file.name.replace(/\.[^/.]+$/, '');
      const filename = `${originalName}_processed_${index + 1}.pdf`;
      zip.file(filename, file.result);
    });

    const blob = await zip.generateAsync({ type: 'blob' });
    await saveBlobFile(blob, zipFilename);
  }, [files]);

  // Calculate derived state
  const completedCount = files.filter((f) => f.status === 'completed').length;
  const errorCount = files.filter((f) => f.status === 'error').length;
  const totalProgress = files.reduce((sum, f) => sum + f.progress, 0);
  const overallProgress = files.length > 0 ? Math.round(totalProgress / files.length) : 0;

  return {
    files,
    isProcessing,
    overallProgress,
    completedCount,
    errorCount,
    addFiles,
    removeFile,
    clearFiles,
    resetFiles,
    startProcessing,
    cancelProcessing,
    downloadAll,
    downloadAsZip,
  };
}
