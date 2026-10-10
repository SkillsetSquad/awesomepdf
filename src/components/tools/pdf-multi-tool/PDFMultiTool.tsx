'use client';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { Check as UICheck, ChevronLeft as UIChevronLeft, ChevronRight as UIChevronRight, Copy as UICopy, Download as UIDownload, FilePlus2 as UIFilePlus2, Redo2 as UIRedo2, RefreshCw as UIRefreshCw, RotateCcw as UIRotateCcw, RotateCw as UIRotateCw, Trash2 as UITrash2, Undo2 as UIUndo2, X as UIX } from 'lucide-react';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { saveBlobFile } from '@/lib/tauri-bridge';

export interface PDFMultiToolProps {
  className?: string;
}

interface PagePreview {
  pageNumber: number;
  originalPageNumber: number;
  sourceFileIndex: number;
  sourceFileName: string;
  thumbnail?: string;
  rotation: number;
  selected: boolean;
}

interface SourceFile {
  file: File;
  pageCount: number;
}

interface HistoryState {
  pages: PagePreview[];
}

/**
 * PDFMultiTool Component
 * All-in-one PDF editor with multi-file support
 */
export function PDFMultiTool({ className = '' }: PDFMultiToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  const direction = useLocale() === 'ar' ? 'rtl' : 'ltr';

  // State
  const [sourceFiles, setSourceFiles] = useState<SourceFile[]>([]);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Page management
  const [pagePreviews, setPagePreviews] = useState<PagePreview[]>([]);
  const [isLoadingPreviews, setIsLoadingPreviews] = useState(false);

  // History for undo/redo
  const [history, setHistory] = useState<HistoryState[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  // Drag state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Add blank page modal
  const [showAddBlankModal, setShowAddBlankModal] = useState(false);
  const [blankPagePosition, setBlankPagePosition] = useState(1);
  const [blankPageCount, setBlankPageCount] = useState(1);

  const cancelledRef = useRef(false);

  // Save to history
  const saveToHistory = useCallback((pages: PagePreview[]) => {
    setHistory(prev => {
      const newHistory = prev.slice(0, historyIndex + 1);
      newHistory.push({ pages: JSON.parse(JSON.stringify(pages)) });
      return newHistory.slice(-30);
    });
    setHistoryIndex(prev => Math.min(prev + 1, 29));
  }, [historyIndex]);

  // Update pages with history
  const updatePages = useCallback((newPages: PagePreview[], skipHistory = false) => {
    if (!skipHistory) {
      saveToHistory(newPages);
    }
    setPagePreviews(newPages);
  }, [saveToHistory]);

  /**
   * Load PDF and generate page previews
   */
  const loadPdfPreviews = useCallback(async (files: File[], existingPages: PagePreview[] = []) => {
    setIsLoadingPreviews(true);
    setError(null);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const newPreviews: PagePreview[] = [...existingPages];
      const newSourceFiles: SourceFile[] = [...sourceFiles];

      for (let fileIdx = 0; fileIdx < files.length; fileIdx++) {
        const file = files[fileIdx];
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

        const sourceFileIndex = newSourceFiles.length;
        newSourceFiles.push({ file, pageCount: pdf.numPages });

        const maxPreviewPages = Math.min(pdf.numPages, 50);

        for (let i = 1; i <= pdf.numPages; i++) {
          let thumbnail: string | undefined;

          if (i <= maxPreviewPages) {
            const page = await pdf.getPage(i);
            const viewport = page.getViewport({ scale: 0.2 });

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            if (context) {
              canvas.height = viewport.height;
              canvas.width = viewport.width;

              await page.render({
                canvasContext: context,
                viewport: viewport,
              }).promise;

              thumbnail = canvas.toDataURL('image/jpeg', 0.7);
            }
          }

          newPreviews.push({
            pageNumber: newPreviews.length + 1,
            originalPageNumber: i,
            sourceFileIndex,
            sourceFileName: file.name,
            thumbnail,
            rotation: 0,
            selected: false,
          });
        }
      }

      setSourceFiles(newSourceFiles);
      setPagePreviews(newPreviews);
      setHistory([{ pages: JSON.parse(JSON.stringify(newPreviews)) }]);
      setHistoryIndex(0);
    } catch (err) {
      console.error('Failed to load PDF:', err);
      setError('Failed to load PDF. The file may be corrupted or encrypted.');
    } finally {
      setIsLoadingPreviews(false);
    }
  }, [sourceFiles]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setResult(null);
      loadPdfPreviews(files, pagePreviews);
    }
  }, [loadPdfPreviews, pagePreviews]);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  const handleClearAll = useCallback(() => {
    setSourceFiles([]);
    setPagePreviews([]);
    setResult(null);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setHistory([]);
    setHistoryIndex(-1);
  }, []);

  // Undo
  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      setHistoryIndex(prev => prev - 1);
      setPagePreviews(JSON.parse(JSON.stringify(history[historyIndex - 1].pages)));
    }
  }, [history, historyIndex]);

  // Redo
  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(prev => prev + 1);
      setPagePreviews(JSON.parse(JSON.stringify(history[historyIndex + 1].pages)));
    }
  }, [history, historyIndex]);

  // Reset
  const handleReset = useCallback(() => {
    if (history.length > 0) {
      setPagePreviews(JSON.parse(JSON.stringify(history[0].pages)));
      setHistoryIndex(0);
    }
    setResult(null);
  }, [history]);

  // Drag handlers
  const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
    setDraggedIndex(index);
    if (e.dataTransfer) {
      e.dataTransfer.setData('text/plain', String(index));
      e.dataTransfer.effectAllowed = 'move';
    }
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (e.dataTransfer) {
      e.dataTransfer.dropEffect = 'move';
    }
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  }, [draggedIndex]);

  const handleDrop = useCallback((e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      const newPreviews = [...pagePreviews];
      const [draggedPage] = newPreviews.splice(draggedIndex, 1);
      newPreviews.splice(targetIndex, 0, draggedPage);
      updatePages(newPreviews);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, [draggedIndex, pagePreviews, updatePages]);

  const handleDragEnd = useCallback(() => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  }, []);

  // Move page position
  const handleMovePage = useCallback((fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= pagePreviews.length) return;
    const newPreviews = [...pagePreviews];
    const [movedPage] = newPreviews.splice(fromIndex, 1);
    newPreviews.splice(toIndex, 0, movedPage);
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  // Selection
  const handleToggleSelect = useCallback((index: number) => {
    const newPreviews = pagePreviews.map((p, i) =>
      i === index ? { ...p, selected: !p.selected } : p
    );
    setPagePreviews(newPreviews);
  }, [pagePreviews]);

  const handleSelectAll = useCallback(() => {
    setPagePreviews(prev => prev.map(p => ({ ...p, selected: true })));
  }, []);

  const handleDeselectAll = useCallback(() => {
    setPagePreviews(prev => prev.map(p => ({ ...p, selected: false })));
  }, []);

  // Delete
  const handleDeletePage = useCallback((index: number) => {
    const newPreviews = pagePreviews.filter((_, i) => i !== index);
    if (newPreviews.length > 0) {
      updatePages(newPreviews);
    } else {
      setError('Cannot delete all pages.');
    }
  }, [pagePreviews, updatePages]);

  const handleDeleteSelected = useCallback(() => {
    const newPreviews = pagePreviews.filter(p => !p.selected);
    if (newPreviews.length > 0) {
      updatePages(newPreviews);
    } else {
      setError('Cannot delete all pages.');
    }
  }, [pagePreviews, updatePages]);

  // Rotate
  const handleRotatePage = useCallback((index: number, degrees: number) => {
    const newPreviews = pagePreviews.map((p, i) =>
      i === index ? { ...p, rotation: (p.rotation + degrees + 360) % 360 } : p
    );
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  const handleRotateSelected = useCallback((degrees: number) => {
    const hasSelected = pagePreviews.some(p => p.selected);
    const newPreviews = pagePreviews.map(p =>
      (hasSelected ? p.selected : true) ? { ...p, rotation: (p.rotation + degrees + 360) % 360 } : p
    );
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  // Duplicate
  const handleDuplicatePage = useCallback((index: number) => {
    const newPreviews = [...pagePreviews];
    const dup = { ...pagePreviews[index], selected: false };
    newPreviews.splice(index + 1, 0, dup);
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  const handleDuplicateSelected = useCallback(() => {
    const newPreviews: PagePreview[] = [];
    pagePreviews.forEach(p => {
      newPreviews.push(p);
      if (p.selected) {
        newPreviews.push({ ...p, selected: false });
      }
    });
    updatePages(newPreviews);
  }, [pagePreviews, updatePages]);

  // Add blank page
  const handleAddBlankPage = useCallback(() => {
    const insertIndex = Math.max(0, Math.min(blankPagePosition - 1, pagePreviews.length));
    const newPages: PagePreview[] = [];

    for (let i = 0; i < blankPageCount; i++) {
      newPages.push({
        pageNumber: -1,
        originalPageNumber: -1,
        sourceFileIndex: -1,
        sourceFileName: 'Blank Page',
        rotation: 0,
        selected: false,
      });
    }

    const newPreviews = [...pagePreviews];
    newPreviews.splice(insertIndex, 0, ...newPages);
    updatePages(newPreviews);
    setShowAddBlankModal(false);
  }, [blankPagePosition, blankPageCount, pagePreviews, updatePages]);

  // Download selected
  const handleDownloadSelected = useCallback(async () => {
    const selectedPages = pagePreviews.filter(p => p.selected);
    if (selectedPages.length === 0) return;

    setStatus('processing');
    setProgress(0);

    try {
      const pdfLib = await import('pdf-lib');
      const newPdf = await pdfLib.PDFDocument.create();

      // Load all source files
      const loadedPdfs: any[] = [];
      for (const sf of sourceFiles) {
        const arrayBuffer = await sf.file.arrayBuffer();
        const pdf = await pdfLib.PDFDocument.load(arrayBuffer);
        loadedPdfs.push(pdf);
      }

      for (const pageInfo of selectedPages) {
        if (pageInfo.sourceFileIndex >= 0) {
          const sourcePdf = loadedPdfs[pageInfo.sourceFileIndex];
          const [copiedPage] = await newPdf.copyPages(sourcePdf, [pageInfo.originalPageNumber - 1]);
          if (pageInfo.rotation !== 0) {
            copiedPage.setRotation(pdfLib.degrees(pageInfo.rotation));
          }
          newPdf.addPage(copiedPage);
        } else {
          // Blank page
          newPdf.addPage([595, 842]); // A4 size
        }
      }

      const pdfBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });
      await saveBlobFile(blob, 'selected_pages.pdf');

      setStatus('idle');
    } catch (err) {
      setError('Failed to download selected pages');
      setStatus('error');
    }
  }, [sourceFiles, pagePreviews]);

  // Export PDF
  const handleExport = useCallback(async () => {
    if (pagePreviews.length === 0) {
      setError('No pages to export.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      setProgress(5);
      setProgressMessage('Loading PDF library...');

      const pdfLib = await import('pdf-lib');

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      setProgress(10);
      setProgressMessage('Loading source files...');

      // Load all source PDFs
      const loadedPdfs: any[] = [];
      for (const sf of sourceFiles) {
        const arrayBuffer = await sf.file.arrayBuffer();
        const pdf = await pdfLib.PDFDocument.load(arrayBuffer);
        loadedPdfs.push(pdf);
      }

      setProgress(20);
      setProgressMessage('Creating new document...');

      const newPdf = await pdfLib.PDFDocument.create();
      const progressPerPage = 70 / pagePreviews.length;

      for (let i = 0; i < pagePreviews.length; i++) {
        if (cancelledRef.current) {
          setStatus('idle');
          return;
        }

        const pageInfo = pagePreviews[i];
        setProgress(20 + (i * progressPerPage));
        setProgressMessage(`Processing page ${i + 1} of ${pagePreviews.length}...`);

        if (pageInfo.sourceFileIndex >= 0) {
          const sourcePdf = loadedPdfs[pageInfo.sourceFileIndex];
          const [copiedPage] = await newPdf.copyPages(sourcePdf, [pageInfo.originalPageNumber - 1]);

          if (pageInfo.rotation !== 0) {
            copiedPage.setRotation(pdfLib.degrees(pageInfo.rotation));
          }

          newPdf.addPage(copiedPage);
        } else {
          // Blank page
          newPdf.addPage([595, 842]);
        }
      }

      setProgress(90);
      setProgressMessage('Saving PDF...');

      const pdfBytes = await newPdf.save();
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      setProgress(100);
      setProgressMessage('Complete!');
      setResult(blob);
      setStatus('complete');

    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [sourceFiles, pagePreviews]);

  const handleCancel = useCallback(() => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  }, []);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isProcessing = status === 'processing';
  const canExport = pagePreviews.length > 0 && !isProcessing;
  const selectedCount = pagePreviews.filter(p => p.selected).length;
  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < history.length - 1;
  const totalPages = pagePreviews.length;

  return (
    <Dialog open={showAddBlankModal} onOpenChange={setShowAddBlankModal}>
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple={true}
        maxFiles={1000}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        disabled={isProcessing}
        label={sourceFiles.length > 0
          ? (tTools('pdfMultiTool.addMoreFiles') || 'Add More PDF Files')
          : (tTools('pdfMultiTool.uploadLabel') || 'Upload PDF Files')
        }
        description={tTools('pdfMultiTool.uploadDescription') || 'Drag and drop PDF files here, or click to browse. You can upload multiple files.'}
      />

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* Editor Panel */}
      {pagePreviews.length > 0 && (
        <Card className="p-6"  >
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-2 pb-4 mb-4 border-b border-border">
            {/* Edit Actions */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleUndo}
                disabled={!canUndo || isProcessing}
                title="Undo"
              >
                <UIUndo2 className="w-4 h-4 mr-1" aria-hidden="true" />
                {tTools('pdfMultiTool.undo') || 'Undo'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRedo}
                disabled={!canRedo || isProcessing}
                title="Redo"
              >
                <UIRedo2 className="w-4 h-4 mr-1" aria-hidden="true" />
                {tTools('pdfMultiTool.redo') || 'Redo'}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                disabled={isProcessing}
                title="Reset"
              >
                <UIRefreshCw className="w-4 h-4 mr-1" aria-hidden="true" />
                {tTools('pdfMultiTool.reset') || 'Reset'}
              </Button>
            </div>

            <div className="w-px h-6 bg-border" />

            {/* Selection Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={handleSelectAll} disabled={isProcessing}>
                {tTools('pdfMultiTool.selectAll') || 'Select All'}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDeselectAll} disabled={selectedCount === 0 || isProcessing}>
                {tTools('pdfMultiTool.deselectAll') || 'Deselect'}
              </Button>
            </div>

            <div className="w-px h-6 bg-border" />

            {/* Rotate Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => handleRotateSelected(-90)} disabled={isProcessing}>
                <UIRotateCcw className="w-4 h-4 mr-1" aria-hidden="true" />
                {tTools('pdfMultiTool.rotateLeft') || 'Left'}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => handleRotateSelected(90)} disabled={isProcessing}>
                <UIRotateCw className="w-4 h-4 mr-1" aria-hidden="true" />
                {tTools('pdfMultiTool.rotateRight') || 'Right'}
              </Button>
            </div>

            <div className="w-px h-6 bg-border" />

            {/* Transform Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={handleDuplicateSelected} disabled={selectedCount === 0 || isProcessing}>
                <UICopy className="w-4 h-4 mr-1" aria-hidden="true" />
                {tTools('pdfMultiTool.duplicate') || 'Duplicate'}
              </Button>
              <DialogTrigger asChild><Button
                variant="ghost"
                size="sm"
                disabled={isProcessing}
              >
                <UIFilePlus2 className="w-4 h-4 mr-1" aria-hidden="true" />
                {tTools('pdfMultiTool.addBlank') || 'Add Blank'}
              </Button></DialogTrigger>
            </div>

            <div className="w-px h-6 bg-border" />

            {/* Delete Action */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeleteSelected}
              disabled={selectedCount === 0 || isProcessing}
              className="!text-red-600 !border-red-200 hover:!bg-red-50 dark:!border-red-800 dark:hover:!bg-red-900/20"
            >
              <UITrash2 className="w-4 h-4 mr-1" aria-hidden="true" />
              {tTools('pdfMultiTool.delete') || 'Delete'}
            </Button>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Info */}
            <div className="text-sm text-muted-foreground">
              {totalPages} {totalPages === 1 ? 'page' : 'pages'}
              {selectedCount > 0 && ` • ${selectedCount} selected`}
            </div>

            {/* Clear All */}
            <Button variant="ghost" size="sm" onClick={handleClearAll} disabled={isProcessing}>
              {tTools('pdfMultiTool.clearAll') || 'Clear All'}
            </Button>
          </div>

          {/* Page Grid */}
          {isLoadingPreviews ? (
            <div className="flex items-center justify-center py-16">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-muted-foreground">
                  {t('status.loading') || 'Loading previews...'}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 max-h-[500px] overflow-y-auto p-1">
              {pagePreviews.map((page, index) => (
                <div
                  key={`page-${index}`}
                  draggable={!isProcessing}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                  onDragEnd={handleDragEnd}
                  className={`
                    group relative rounded-lg cursor-grab transition-all duration-200
                    ${draggedIndex === index ? 'opacity-50 scale-95' : ''}
                    ${dragOverIndex === index ? 'ring-2 ring-primary ring-offset-2' : ''}
                  `}
                >
                  {/* Page Card */}
                  <div
                    onClick={() => handleToggleSelect(index)}
                    className={`
                      relative aspect-[3/4] rounded-lg border-2 overflow-hidden transition-all cursor-pointer
                      ${page.selected
                        ? 'border-primary ring-2 ring-primary/30'
                        : 'border-border hover:border-primary/50'
                      }
                    `}
                  >
                    {page.thumbnail ? (
                      <img
                        src={page.thumbnail}
                        alt={`Page ${index + 1}`}
                        className="w-full h-full object-contain bg-white dark:bg-slate-800"
                        style={{ transform: `rotate(${page.rotation}deg)` }}
                        draggable={false}
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <span className="text-lg font-medium text-muted-foreground">
                          {page.sourceFileIndex === -1 ? '◻' : page.originalPageNumber}
                        </span>
                      </div>
                    )}

                    {/* Selection indicator */}
                    {page.selected && (
                      <div className="absolute top-2 left-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                        <UICheck className="w-3 h-3 text-white" aria-hidden="true" />
                      </div>
                    )}

                    {/* Move buttons */}
                    <div className="absolute bottom-1 left-1 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon-sm"
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleMovePage(index, index - 1); }}
                        disabled={index === 0 || isProcessing}
                        className="flex items-center justify-center"
                        aria-label="Move left"
                        title="Move left"
                      >
                        <UIChevronLeft className="w-3 h-3 text-slate-700 dark:text-slate-200" aria-hidden="true" />
                      </Button>
                      <Button variant="ghost" size="icon-sm"
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleMovePage(index, index + 1); }}
                        disabled={index === pagePreviews.length - 1 || isProcessing}
                        className="flex items-center justify-center"
                        aria-label="Move right"
                        title="Move right"
                      >
                        <UIChevronRight className="w-3 h-3 text-slate-700 dark:text-slate-200" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>

                  {/* Page Info */}
                  <div className="mt-1 text-center">
                    <p className="text-xs font-medium text-foreground">
                      {index + 1}
                      {page.rotation !== 0 && <span className="text-muted-foreground"> ({page.rotation}°)</span>}
                    </p>
                    {sourceFiles.length > 1 && page.sourceFileIndex >= 0 && (
                      <p className="text-[10px] text-muted-foreground truncate" title={page.sourceFileName}>
                        {page.sourceFileName.length > 12 ? page.sourceFileName.slice(0, 10) + '...' : page.sourceFileName}
                      </p>
                    )}
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute top-1 right-1 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon-sm" aria-label="Rotate left"
                      onClick={(e) => { e.stopPropagation(); handleRotatePage(index, -90); }}
                      className="flex items-center justify-center"
                      title="Rotate left"
                    >
                      <UIRotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                    </Button>
                    <Button variant="ghost" size="icon-sm" aria-label="Rotate right"
                      onClick={(e) => { e.stopPropagation(); handleRotatePage(index, 90); }}
                      className="flex items-center justify-center"
                      title="Rotate right"
                    >
                      <UIRotateCw className="w-3.5 h-3.5" aria-hidden="true" />
                    </Button>
                    <Button variant="ghost" size="icon-sm" aria-label="Duplicate"
                      onClick={(e) => { e.stopPropagation(); handleDuplicatePage(index); }}
                      className="flex items-center justify-center"
                      title="Duplicate"
                    >
                      <UICopy className="w-3.5 h-3.5" aria-hidden="true" />
                    </Button>
                    <Button variant="destructive" size="icon-sm" aria-label="Delete"
                      onClick={(e) => { e.stopPropagation(); handleDeletePage(index); }}
                      className="flex items-center justify-center"
                      title="Delete"
                    >
                      <UIX className="w-3.5 h-3.5" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 mt-4 border-t border-border">
            <Button
              variant="outline"
              size="default"
              onClick={handleDownloadSelected}
              disabled={selectedCount === 0 || isProcessing}
            >
              <UIDownload className="w-4 h-4 mr-2" aria-hidden="true" />
              {tTools('pdfMultiTool.downloadSelected') || 'Download Selected'}
            </Button>

            <Button
              variant="default"
              size="default"
              onClick={handleExport}
              disabled={!canExport}
              loading={isProcessing}
            >
              {isProcessing
                ? (t('status.processing') || 'Processing...')
                : (tTools('pdfMultiTool.exportPDF') || 'Export PDF')
              }
            </Button>

            {result && (
              <DownloadButton
                file={result}
                filename="edited.pdf"
                variant="secondary"
                size="default"
                showFileSize
              />
            )}
          </div>
        </Card>
      )}

      {/* Add Blank Page Modal */}
      <DialogContent dir={direction} showCloseButton={false}>
            <DialogHeader><DialogTitle className="pe-8">
              {tTools('pdfMultiTool.addBlankPageTitle') || 'Add Blank Pages'}
            </DialogTitle><DialogDescription>{tTools('pdfMultiTool.insertPosition')}</DialogDescription></DialogHeader>
            <DialogClose asChild><Button variant="ghost" size="icon-sm" className="absolute end-3 top-3" aria-label={t('buttons.close')}><X aria-hidden="true" /></Button></DialogClose>
            <div className="space-y-4">
              <div>
                <Label className="block mb-2 text-muted-foreground" htmlFor="pdfmultitool-field-1">
                  {tTools('pdfMultiTool.numberOfPages') || 'Number of pages'}
                </Label>
                <Input
                  type="number"
                  min="1"
                  max="100"
                  value={blankPageCount}
                  onChange={(e) => setBlankPageCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                  className="w-full" id="pdfmultitool-field-1" aria-label={tTools('pdfMultiTool.numberOfPages') || 'Number of pages'}
                />
              </div>
              <div>
                <Label className="block mb-2 text-muted-foreground" htmlFor="pdfmultitool-field-2">
                  {tTools('pdfMultiTool.insertPosition') || 'Insert at position'}
                </Label>
                <Input
                  type="number"
                  min="1"
                  max={pagePreviews.length + 1}
                  value={blankPagePosition}
                  onChange={(e) => setBlankPagePosition(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full" id="pdfmultitool-field-2" aria-label={tTools('pdfMultiTool.insertPosition') || 'Insert at position'}
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowAddBlankModal(false)} className="flex-1">
                  {t('buttons.cancel') || 'Cancel'}
                </Button>
                <Button variant="default" onClick={handleAddBlankPage} className="flex-1">
                  {t('buttons.add') || 'Add'}
                </Button>
              </DialogFooter>
            </div>
      </DialogContent>

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

      {/* Success Message */}
      {status === 'complete' && result && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">
            {tTools('pdfMultiTool.successMessage') || 'PDF processed successfully! Click the download button to save your file.'}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
    </Dialog>
  );
}

export default PDFMultiTool;
