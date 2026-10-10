'use client';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Bookmark as UIBookmark, Check as UICheck, Download as UIDownload, FileText as UIFileText, LayoutGrid as UILayoutGrid, List as UIList, ListFilter as UIListFilter, MousePointerClick as UIMousePointerClick, TriangleAlert as UITriangleAlert } from 'lucide-react';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  splitPDF,
  parsePageRanges,
  createSplitEveryPage,
  createSplitEveryNPages,
  createSplitByEvenOdd,
  createSplitNTimes,
  createSplitByBookmarks,
  type BookmarkInfo,
} from '@/lib/pdf';
import { createZip } from '@/lib/zip';
import { saveBlobFile } from '@/lib/tauri-bridge';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import type { SplitOptions, PageRange, ProcessOutput } from '@/types/pdf';

export interface SplitPDFToolProps {
  /** Custom class name */
  className?: string;
}

type SplitMode = 'ranges' | 'even-odd' | 'every-page' | 'visual' | 'bookmarks' | 'n-times';

interface PagePreview {
  pageNumber: number;
  thumbnail?: string;
}

/**
 * SplitPDFTool Component
 * Requirements: 5.1, 5.2
 *
 * Provides the UI for splitting PDF files with page range input and preview.
 */
export function SplitPDFTool({ className = '' }: SplitPDFToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // State
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [results, setResults] = useState<{ blob: Blob; filename: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Split options
  const [splitMode, setSplitMode] = useState<SplitMode>('ranges');
  const [rangeInput, setRangeInput] = useState('');
  const [splitCount, setSplitCount] = useState(2); // For n-times mode
  const [evenOddMode, setEvenOddMode] = useState<'odd' | 'even' | 'both'>('both'); // For even-odd mode

  // Page previews
  const [pagePreviews, setPagePreviews] = useState<PagePreview[]>([]);
  const [selectedPages, setSelectedPages] = useState<Set<number>>(new Set());
  const [isLoadingPreviews, setIsLoadingPreviews] = useState(false);

  // Bookmark state for bookmark-based splitting
  const [pdfBookmarks, setPdfBookmarks] = useState<BookmarkInfo[]>([]);
  const [bookmarkLabels, setBookmarkLabels] = useState<string[]>([]);

  // Ref for cancellation
  const cancelledRef = useRef(false);
  const pdfDocRef = useRef<any>(null);

  /**
   * Load PDF and generate page previews
   */
  const loadPdfPreviews = useCallback(async (pdfFile: File) => {
    setIsLoadingPreviews(true);
    setPagePreviews([]);
    setPdfBookmarks([]);
    setBookmarkLabels([]);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      pdfDocRef.current = pdf;
      setTotalPages(pdf.numPages);

      // Extract bookmarks using PDF.js getOutline() API
      try {
        const outline = await pdf.getOutline();
        if (outline && outline.length > 0) {
          const extractedBookmarks = await parseOutlineToBookmarks(outline, pdf);
          setPdfBookmarks(extractedBookmarks);
        }
      } catch (bookmarkErr) {
        console.warn('Failed to extract bookmarks:', bookmarkErr);
        // Continue without bookmarks - not a fatal error
      }

      // Generate thumbnails for each page
      const previews: PagePreview[] = [];
      const maxPreviewPages = Math.min(pdf.numPages, 50); // Limit previews for performance

      for (let i = 1; i <= maxPreviewPages; i++) {
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

          previews.push({
            pageNumber: i,
            thumbnail: canvas.toDataURL('image/jpeg', 0.7),
          });
        }
      }

      // Add remaining pages without thumbnails
      for (let i = maxPreviewPages + 1; i <= pdf.numPages; i++) {
        previews.push({ pageNumber: i });
      }

      setPagePreviews(previews);
    } catch (err) {
      console.error('Failed to load PDF previews:', err);
      setError('Failed to load PDF preview. The file may be corrupted or encrypted.');
    } finally {
      setIsLoadingPreviews(false);
    }
  }, []);

  /**
   * Parse PDF.js outline to BookmarkInfo format
   */
  const parseOutlineToBookmarks = async (
    outline: any[],
    pdf: any
  ): Promise<BookmarkInfo[]> => {
    const result: BookmarkInfo[] = [];

    for (const item of outline) {
      let pageNumber = 1;

      // Get destination page using PDF.js API
      if (item.dest) {
        try {
          const dest = typeof item.dest === 'string'
            ? await pdf.getDestination(item.dest)
            : item.dest;
          if (dest && dest[0]) {
            const pageRef = dest[0];
            const pageIndex = await pdf.getPageIndex(pageRef);
            pageNumber = pageIndex + 1;
          }
        } catch (e) {
          console.warn('Failed to get destination for bookmark:', item.title);
        }
      }

      const bookmark: BookmarkInfo = {
        title: item.title || 'Untitled',
        pageNumber,
        children: item.items && item.items.length > 0
          ? await parseOutlineToBookmarks(item.items, pdf)
          : undefined,
      };

      result.push(bookmark);
    }

    return result;
  };

  /**
   * Handle file selected from uploader
   */
  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setResults([]);
      setSelectedPages(new Set());
      setRangeInput('');
      loadPdfPreviews(selectedFile);
    }
  }, [loadPdfPreviews, splitMode]);

  /**
   * Handle file upload error
   */
  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  /**
   * Clear file and reset state
   */
  const handleClearFile = useCallback(() => {
    setFile(null);
    setTotalPages(0);
    setPagePreviews([]);
    setSelectedPages(new Set());
    setResults([]);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setRangeInput('');
    setPdfBookmarks([]);
    setBookmarkLabels([]);
    pdfDocRef.current = null;
  }, []);

  /**
   * Toggle page selection
   */
  const handleTogglePage = useCallback((pageNumber: number) => {
    setSelectedPages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(pageNumber)) {
        newSet.delete(pageNumber);
      } else {
        newSet.add(pageNumber);
      }
      return newSet;
    });
  }, []);

  /**
   * Select all pages
   */
  const handleSelectAll = useCallback(() => {
    setSelectedPages(new Set(pagePreviews.map(p => p.pageNumber)));
  }, [pagePreviews]);

  /**
   * Deselect all pages
   */
  const handleDeselectAll = useCallback(() => {
    setSelectedPages(new Set());
  }, []);

  /**
   * Get page ranges from current selection/input
   */
  const getPageRanges = useCallback((): PageRange[] => {
    switch (splitMode) {
      case 'ranges':
        if (rangeInput.trim()) {
          return parsePageRanges(rangeInput, totalPages);
        }
        // If no input but pages selected, create ranges from selection
        if (selectedPages.size > 0) {
          const sortedPages = Array.from(selectedPages).sort((a, b) => a - b);
          const ranges: PageRange[] = [];
          let start = sortedPages[0];
          let end = sortedPages[0];

          for (let i = 1; i < sortedPages.length; i++) {
            if (sortedPages[i] === end + 1) {
              end = sortedPages[i];
            } else {
              ranges.push({ start, end });
              start = sortedPages[i];
              end = sortedPages[i];
            }
          }
          ranges.push({ start, end });
          return ranges;
        }
        // Default: export all pages if no input and no selection
        return [{ start: 1, end: totalPages }];

      case 'even-odd': {
        const { odd, even } = createSplitByEvenOdd(totalPages);
        if (evenOddMode === 'odd') {
          return odd;
        } else if (evenOddMode === 'even') {
          return even;
        }
        // Both: return all odd pages as one range group, then all even pages
        return [...odd, ...even];
      }

      case 'every-page':
        return createSplitEveryPage(totalPages);

      case 'visual':
        // Visual mode uses selected pages
        if (selectedPages.size > 0) {
          return Array.from(selectedPages)
            .sort((a, b) => a - b)
            .map(p => ({ start: p, end: p }));
        }
        return [];

      case 'bookmarks': {
        // Use extracted bookmarks from PDF.js
        const { ranges, labels } = createSplitByBookmarks(pdfBookmarks, totalPages);
        // Store labels for later use in filenames
        if (labels.length > 0 && bookmarkLabels.length === 0) {
          setBookmarkLabels(labels);
        }
        return ranges;
      }

      case 'n-times':
        return createSplitNTimes(totalPages, splitCount);

      default:
        return [];
    }
  }, [splitMode, rangeInput, selectedPages, totalPages, splitCount, evenOddMode, pdfBookmarks, bookmarkLabels]);

  /**
   * Handle split operation
   */
  const handleSplit = useCallback(async () => {
    if (!file) {
      setError('Please upload a PDF file first.');
      return;
    }

    const ranges = getPageRanges();
    if (ranges.length === 0) {
      setError('Please specify page ranges or select pages to extract.');
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResults([]);

    const options: SplitOptions = {
      ranges,
      outputFormat: 'multiple',
    };

    try {
      const output: ProcessOutput = await splitPDF(
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
        const blobs = Array.isArray(output.result) ? output.result : [output.result];
        const filenames = output.metadata?.outputFiles as string[] ||
          blobs.map((_, i) => `split_${i + 1}.pdf`);

        const resultFiles = blobs.map((blob, i) => ({
          blob,
          filename: filenames[i] || `split_${i + 1}.pdf`,
        }));

        setResults(resultFiles);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to split PDF file.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
        setStatus('error');
      }
    }
  }, [file, getPageRanges]);

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
  const canSplit = file && totalPages > 0 && !isProcessing && (
    splitMode === 'ranges' ||  // ranges mode always allowed (defaults to all pages)
    splitMode === 'even-odd' ||
    splitMode === 'every-page' ||
    (splitMode === 'visual' && selectedPages.size > 0) ||
    splitMode === 'bookmarks' ||
    splitMode === 'n-times'
  );

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {/* File Upload Area */}
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={handleUploadError}
          disabled={isProcessing}
          label={tTools('splitPdf.uploadLabel') || 'Upload PDF File'}
          description={tTools('splitPdf.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
        />
      )}

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* File Info */}
      {file && (
        <Card className="p-6" >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UIFileText className="w-10 h-10 text-red-500" aria-hidden="true" />
              <div>
                <p className="font-medium text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {formatSize(file.size)} • {totalPages} {totalPages === 1 ? 'page' : 'pages'}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearFile}
              disabled={isProcessing}
            >
              {t('buttons.remove') || 'Remove'}
            </Button>
          </div>
        </Card>
      )}

      {/* Split Mode Selection */}
      {file && totalPages > 0 && (
        <Card className="p-6"  >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('splitPdf.splitModeTitle') || 'Split Method'}
          </h3>

          <div className="space-y-4">
            {/* Mode Selection - Card-based selector */}
            <div>
              <Label className="block mb-3">
                {tTools('splitPdf.splitModeLabel') || 'Split Mode'}
              </Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {/* Range Mode */}
                <Button size="sm" variant={splitMode === 'ranges' ? 'default' : 'outline'} aria-pressed={splitMode === 'ranges'}
                  type="button"
                  onClick={() => setSplitMode('ranges')}
                  disabled={isProcessing}
                  className="group relative flex flex-col items-center h-auto whitespace-normal p-3"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${splitMode === 'ranges' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-primary/20'
                    }`}>
                    <UIList className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className={`text-sm font-medium text-center ${splitMode === 'ranges' ? 'text-primary' : 'text-foreground'}`}>
                    {tTools('splitPdf.modeRanges')?.replace(' (Default)', '') || 'Page Range'}
                  </span>
                  {splitMode === 'ranges' && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <UICheck className="w-3 h-3 text-white" aria-hidden="true" />
                    </div>
                  )}
                </Button>

                {/* Even/Odd Mode */}
                <Button size="sm" variant={splitMode === 'even-odd' ? 'default' : 'outline'} aria-pressed={splitMode === 'even-odd'}
                  type="button"
                  onClick={() => setSplitMode('even-odd')}
                  disabled={isProcessing}
                  className="group relative flex flex-col items-center h-auto whitespace-normal p-3"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${splitMode === 'even-odd' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-primary/20'
                    }`}>
                    <UIListFilter className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className={`text-sm font-medium text-center ${splitMode === 'even-odd' ? 'text-primary' : 'text-foreground'}`}>
                    {tTools('splitPdf.modeEvenOdd')?.replace('Split by ', '') || 'Even/Odd'}
                  </span>
                  {splitMode === 'even-odd' && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <UICheck className="w-3 h-3 text-white" aria-hidden="true" />
                    </div>
                  )}
                </Button>

                {/* Every Page Mode */}
                <Button size="sm" variant={splitMode === 'every-page' ? 'default' : 'outline'} aria-pressed={splitMode === 'every-page'}
                  type="button"
                  onClick={() => setSplitMode('every-page')}
                  disabled={isProcessing}
                  className="group relative flex flex-col items-center h-auto whitespace-normal p-3"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${splitMode === 'every-page' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-primary/20'
                    }`}>
                    <UIFileText className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className={`text-sm font-medium text-center ${splitMode === 'every-page' ? 'text-primary' : 'text-foreground'}`}>
                    {tTools('splitPdf.modeEveryPage')?.replace('Split All Pages into Separate Files', 'Every Page') || 'Every Page'}
                  </span>
                  {splitMode === 'every-page' && (
              <Alert><UIFileText aria-hidden="true" /><AlertTitle>{totalPages} Separate Files</AlertTitle><AlertDescription>
                {tTools('splitPdf.everyPageInfo', { count: totalPages }) || 'Each page will be extracted as a separate PDF file'}
              </AlertDescription></Alert>
            )}

            {splitMode === 'visual' && (
              <Alert><UIMousePointerClick aria-hidden="true" /><AlertTitle>Visual Page Selection</AlertTitle><AlertDescription>
                {tTools('splitPdf.visualInfo') || 'Click on page thumbnails below to select pages for extraction'}
              </AlertDescription></Alert>
            )}

            {splitMode === 'bookmarks' && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <UICheck className="w-3 h-3 text-white" aria-hidden="true" />
                    </div>
                  )}
                </Button>

                {/* N Times Mode */}
                <Button size="sm" variant={splitMode === 'n-times' ? 'default' : 'outline'} aria-pressed={splitMode === 'n-times'}
                  type="button"
                  onClick={() => setSplitMode('n-times')}
                  disabled={isProcessing}
                  className="group relative flex flex-col items-center h-auto whitespace-normal p-3"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors ${splitMode === 'n-times' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-primary/20'
                    }`}>
                    <UILayoutGrid className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className={`text-sm font-medium text-center ${splitMode === 'n-times' ? 'text-primary' : 'text-foreground'}`}>
                    {tTools('splitPdf.modeNTimesShort') || 'Split N Parts'}
                  </span>
                  {splitMode === 'n-times' && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <UICheck className="w-3 h-3 text-white" aria-hidden="true" />
                    </div>
                  )}
                </Button>
              </div>
            </div>

            {/* Mode-specific options */}
            {splitMode === 'ranges' && (
              <div className="space-y-3">
                <div>
                  <Label
                    htmlFor="page-ranges"
                    className="block mb-1"
                  >
                    {tTools('splitPdf.rangeInputLabel') || 'Page Ranges'}
                  </Label>
                  <Input
                    id="page-ranges"
                    type="text"
                    value={rangeInput}
                    onChange={(e) => setRangeInput(e.target.value)}
                    placeholder="e.g., 1-5, 8, 10-15"
                    disabled={isProcessing}
                    className="w-full" aria-label={tTools('splitPdf.rangeInputLabel') || 'Page Ranges'}
                  />
                  <p className="mt-1 text-xs text-muted-foreground">
                    {tTools('splitPdf.rangeInputHint') || 'Enter page numbers or ranges separated by commas. Leave empty to export all pages as one file.'}
                  </p>
                </div>
              </div>
            )}

            {splitMode === 'even-odd' && (
              <div className="space-y-3">
                <div>
                  <Label className="block mb-2">
                    {tTools('splitPdf.evenOddLabel') || 'Extract Pages'}
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" variant={evenOddMode === 'odd' ? 'default' : 'outline'} aria-pressed={evenOddMode === 'odd'}
                      type="button"
                      onClick={() => setEvenOddMode('odd')}
                      disabled={isProcessing}

                    >
                      {tTools('splitPdf.oddPagesOnly') || 'Odd Pages Only'}
                    </Button>
                    <Button size="sm" variant={evenOddMode === 'even' ? 'default' : 'outline'} aria-pressed={evenOddMode === 'even'}
                      type="button"
                      onClick={() => setEvenOddMode('even')}
                      disabled={isProcessing}

                    >
                      {tTools('splitPdf.evenPagesOnly') || 'Even Pages Only'}
                    </Button>
                    <Button size="sm" variant={evenOddMode === 'both' ? 'default' : 'outline'} aria-pressed={evenOddMode === 'both'}
                      type="button"
                      onClick={() => setEvenOddMode('both')}
                      disabled={isProcessing}

                    >
                      {tTools('splitPdf.bothSeparate') || 'Both (Separate Files)'}
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {tTools('splitPdf.evenOddHint') || 'Odd pages: 1, 3, 5... Even pages: 2, 4, 6...'}
                  </p>
                </div>
              </div>
            )}

            {splitMode === 'every-page' && (
              <div className="relative overflow-hidden p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <UIFileText className="w-5 h-5 text-blue-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-800">
                      {totalPages} Separate Files
                    </p>
                    <p className="text-xs text-blue-600 mt-0.5">
                      {tTools('splitPdf.everyPageInfo', { count: totalPages }) || 'Each page will be extracted as a separate PDF file'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {splitMode === 'visual' && (
              <div className="relative overflow-hidden p-4 rounded-xl bg-gradient-to-r from-purple-50 to-fuchsia-50 border border-purple-200/60 shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <UIMousePointerClick className="w-5 h-5 text-purple-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-purple-800">
                      Visual Page Selection
                    </p>
                    <p className="text-xs text-purple-600 mt-0.5">
                      {tTools('splitPdf.visualInfo') || 'Click on page thumbnails below to select pages for extraction'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {splitMode === 'bookmarks' && (
              <div className="space-y-4">
                {pdfBookmarks.length > 0 ? (
                  <>
                    <Alert role="status"><UICheck aria-hidden="true" /><AlertTitle>
                      {pdfBookmarks.length} {pdfBookmarks.length === 1 ? 'Bookmark' : 'Bookmarks'} Found
                    </AlertTitle><AlertDescription>Your PDF will be split into {pdfBookmarks.length} separate files based on the bookmark structure</AlertDescription></Alert>

                    {/* Bookmark list with modern styling */}
                    <div className="rounded-md border border-border overflow-hidden bg-background">
                      <div className="px-4 py-3 bg-muted border-b border-border">
                        <div className="flex items-center gap-2">
                          <UIBookmark className="w-4 h-4 text-primary" aria-hidden="true" />
                          <p className="text-sm font-medium text-foreground">
                            Split Points
                          </p>
                        </div>
                      </div>
                      <div className="max-h-56 overflow-y-auto">
                        <ul className="divide-y divide-border/50">
                          {pdfBookmarks.map((bookmark, index) => (
                            <li key={index} className="group px-4 py-3 flex items-center justify-between transition-colors hover:bg-muted/15">
                              <div className="flex items-center gap-3 min-w-0">
                                <span className="flex-shrink-0 w-6 h-6 rounded-md bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center">
                                  {index + 1}
                                </span>
                                <span className="truncate text-sm text-foreground group-hover:text-primary">
                                  {bookmark.title}
                                </span>
                              </div>
                              <span className="ml-3 flex-shrink-0 px-2 py-1 rounded-md bg-muted/40 text-xs font-medium text-muted-foreground">
                                Page {bookmark.pageNumber}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {pdfBookmarks.length > 5 && (
                        <div className="px-4 py-2 bg-muted/20 border-t border-border/50 text-center">
                          <p className="text-xs text-muted-foreground">
                            Scroll to see all {pdfBookmarks.length} bookmarks
                          </p>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <Alert><UITriangleAlert aria-hidden="true" /><AlertTitle>No Bookmarks Found</AlertTitle><AlertDescription>
                    {tTools('splitPdf.bookmarksNotice') || 'This PDF does not contain bookmarks. The entire document will be returned as a single file.'}
                  </AlertDescription></Alert>
                )}
              </div>
            )}

            {splitMode === 'n-times' && (
              <div>
                <Label
                  htmlFor="split-count"
                  className="block mb-1"
                >
                  {tTools('splitPdf.splitCountLabel') || 'Number of Parts'}
                </Label>
                <Input
                  id="split-count"
                  type="number"
                  min={2}
                  max={totalPages}
                  value={splitCount}
                  onChange={(e) => setSplitCount(Math.max(2, Math.min(totalPages, parseInt(e.target.value) || 2)))}
                  disabled={isProcessing}
                  className="w-24" aria-label={tTools('splitPdf.splitCountLabel') || 'Number of Parts'}
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  {tTools('splitPdf.splitCountHint', {
                    count: splitCount,
                    pages: Math.ceil(totalPages / splitCount)
                  }) || `Split into ${splitCount} equal parts (~${Math.ceil(totalPages / splitCount)} pages each)`}
                </p>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* Page Preview Grid */}
      {file && pagePreviews.length > 0 && (splitMode === 'ranges' || splitMode === 'visual') && (
        <Card className="p-6"  >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-foreground">
              {tTools('splitPdf.pagePreviewTitle') || 'Select Pages'}
              {selectedPages.size > 0 && ` (${selectedPages.size} selected)`}
            </h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={handleSelectAll} disabled={isProcessing}>
                {t('buttons.selectAll') || 'Select All'}
              </Button>
              <Button variant="ghost" size="sm" onClick={handleDeselectAll} disabled={isProcessing}>
                {t('buttons.deselectAll') || 'Deselect All'}
              </Button>
            </div>
          </div>

          {isLoadingPreviews ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-muted-foreground">
                  {t('status.loading') || 'Loading previews...'}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 max-h-[400px] overflow-y-auto p-1">
              {pagePreviews.map((preview) => (
                <Button size="sm" variant="outline" aria-pressed={selectedPages.has(preview.pageNumber)}
                  key={preview.pageNumber}
                  type="button"
                  onClick={() => handleTogglePage(preview.pageNumber)}
                  disabled={isProcessing}
                  className="relative aspect-[3/4] overflow-hidden h-auto w-full p-0 aria-pressed:border-primary aria-pressed:ring-2 aria-pressed:ring-primary/30"
                  aria-label={`Page ${preview.pageNumber}${selectedPages.has(preview.pageNumber) ? ' (selected)' : ''}`}
                >
                  {preview.thumbnail ? (
                    <img
                      src={preview.thumbnail}
                      alt={`Page ${preview.pageNumber}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">
                        {preview.pageNumber}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-0.5 text-center">
                    {preview.pageNumber}
                  </div>
                  {selectedPages.has(preview.pageNumber) && (
                    <div className="absolute top-1 right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <UICheck className="w-3 h-3 text-white" aria-hidden="true" />
                    </div>
                  )}
                </Button>
              ))}
            </div>
          )}
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
      {file && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={handleSplit}
            disabled={!canSplit}
            loading={isProcessing}
          >
            {isProcessing
              ? (t('status.processing') || 'Processing...')
              : (tTools('splitPdf.splitButton') || 'Split PDF')
            }
          </Button>
        </div>
      )}

      {/* Results */}
      {status === 'complete' && results.length > 0 && (
        <Card className="p-6"  >
          <h3 className="text-lg font-medium text-foreground mb-4">
            {tTools('splitPdf.resultsTitle') || 'Split Results'} ({results.length} {results.length === 1 ? 'file' : 'files'})
          </h3>

          {/* Download ZIP button if multiple files */}
          {results.length > 1 && (
            <div className="mb-4">
              <Button
                variant="default"
                onClick={async () => {
                  try {
                    const zipBlob = await createZip(results);
                    const zipName = `${file?.name.replace('.pdf', '') || 'split'}-files.zip`;
                    await saveBlobFile(zipBlob, zipName);
                  } catch (err) {
                    console.error('Failed to create ZIP:', err);
                    setError('Failed to create ZIP file.');
                  }
                }}
                className="w-full sm:w-auto"
              >
                <UIDownload className="w-4 h-4 mr-2" aria-hidden="true" />
                {tTools('splitPdf.downloadZip') || 'Download All as ZIP'}
              </Button>
            </div>
          )}

          <div className="space-y-2">
            {results.map((result, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-md bg-muted/30"
              >
                <div className="flex items-center gap-3">
                  <UIFileText className="w-8 h-8 text-red-500" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {result.filename}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatSize(result.blob.size)}
                    </p>
                  </div>
                </div>
                <DownloadButton
                  file={result.blob}
                  filename={result.filename}
                  variant="secondary"
                  size="sm"
                />
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Success Message */}
      {status === 'complete' && results.length > 0 && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">
            {tTools('splitPdf.successMessage') || `PDF split successfully into ${results.length} file(s)! Click the download buttons to save your files.`}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default SplitPDFTool;
