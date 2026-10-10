'use client';
import { ChevronLeft as UIChevronLeft, ChevronRight as UIChevronRight, File as UIFile, Minus as UIMinus, Plus as UIPlus, TriangleAlert as UITriangleAlert } from 'lucide-react';


import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { configurePdfjsWorker } from '@/lib/pdf/loader';

export interface FilePreviewProps {
  /** File to preview */
  file: File | Blob | null;
  /** File name for display */
  filename?: string;
  /** Custom class name */
  className?: string;
  /** Initial zoom level (default: 1) */
  initialZoom?: number;
  /** Minimum zoom level */
  minZoom?: number;
  /** Maximum zoom level */
  maxZoom?: number;
  /** Zoom step */
  zoomStep?: number;
  /** Show navigation controls */
  showNavigation?: boolean;
  /** Show zoom controls */
  showZoomControls?: boolean;
  /** Callback when page changes */
  onPageChange?: (page: number, totalPages: number) => void;
  /** Callback when zoom changes */
  onZoomChange?: (zoom: number) => void;
}

interface PDFPageInfo {
  pageNumber: number;
  totalPages: number;
}

/**
 * FilePreview Component
 * Requirements: 5.4
 *
 * Displays PDF thumbnail preview with zoom and navigation support.
 */
export const FilePreview: React.FC<FilePreviewProps> = ({
  file,
  filename,
  className = '',
  initialZoom = 1,
  minZoom = 0.5,
  maxZoom = 3,
  zoomStep = 0.25,
  showNavigation = true,
  showZoomControls = true,
  onPageChange,
  onZoomChange,
}) => {
  const t = useTranslations('common');

  const [zoom, setZoom] = useState(initialZoom);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Load PDF document
   */
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      setPdfDoc(null);
      setTotalPages(1);
      setCurrentPage(1);
      return;
    }

    const loadPdf = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Dynamically import pdfjs-dist
        const pdfjsLib = await import('pdfjs-dist');

        // Set worker source
        configurePdfjsWorker(pdfjsLib);

        // Create blob URL
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        // Load PDF document
        const loadingTask = pdfjsLib.getDocument(url);
        const pdf = await loadingTask.promise;

        setPdfDoc(pdf);
        setTotalPages(pdf.numPages);
        setCurrentPage(1);

        onPageChange?.(1, pdf.numPages);
      } catch (err) {
        console.error('Failed to load PDF:', err);
        setError('Failed to load PDF preview');
      } finally {
        setIsLoading(false);
      }
    };

    loadPdf();

    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [file]);

  /**
   * Render current page
   */
  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;

    const renderPage = async () => {
      try {
        const page = await pdfDoc.getPage(currentPage);
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Calculate scale based on zoom and container width
        const containerWidth = containerRef.current?.clientWidth || 600;
        const viewport = page.getViewport({ scale: 1 });
        const baseScale = (containerWidth - 40) / viewport.width;
        const scale = baseScale * zoom;

        const scaledViewport = page.getViewport({ scale });

        // Set canvas dimensions
        canvas.height = scaledViewport.height;
        canvas.width = scaledViewport.width;

        // Render page
        const renderContext = {
          canvasContext: context,
          viewport: scaledViewport,
        };

        await page.render(renderContext).promise;
      } catch (err) {
        console.error('Failed to render page:', err);
      }
    };

    renderPage();
  }, [pdfDoc, currentPage, zoom]);

  /**
   * Handle zoom in
   */
  const handleZoomIn = useCallback(() => {
    setZoom(prev => {
      const newZoom = Math.min(maxZoom, prev + zoomStep);
      onZoomChange?.(newZoom);
      return newZoom;
    });
  }, [maxZoom, zoomStep, onZoomChange]);

  /**
   * Handle zoom out
   */
  const handleZoomOut = useCallback(() => {
    setZoom(prev => {
      const newZoom = Math.max(minZoom, prev - zoomStep);
      onZoomChange?.(newZoom);
      return newZoom;
    });
  }, [minZoom, zoomStep, onZoomChange]);

  /**
   * Handle reset zoom
   */
  const handleResetZoom = useCallback(() => {
    setZoom(1);
    onZoomChange?.(1);
  }, [onZoomChange]);

  /**
   * Handle previous page
   */
  const handlePrevPage = useCallback(() => {
    setCurrentPage(prev => {
      const newPage = Math.max(1, prev - 1);
      onPageChange?.(newPage, totalPages);
      return newPage;
    });
  }, [totalPages, onPageChange]);

  /**
   * Handle next page
   */
  const handleNextPage = useCallback(() => {
    setCurrentPage(prev => {
      const newPage = Math.min(totalPages, prev + 1);
      onPageChange?.(newPage, totalPages);
      return newPage;
    });
  }, [totalPages, onPageChange]);

  /**
   * Handle wheel zoom
   */
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      if (e.deltaY < 0) {
        handleZoomIn();
      } else {
        handleZoomOut();
      }
    }
  }, [handleZoomIn, handleZoomOut]);

  // No file state
  if (!file) {
    return (
      <div className={`flex items-center justify-center min-h-[300px] bg-muted/30 rounded-lg ${className}`}>
        <p className="text-muted-foreground">
          No file to preview
        </p>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className={`flex items-center justify-center min-h-[300px] bg-muted/30 rounded-lg ${className}`}>
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-muted-foreground">
            {t('status.loading')}
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`flex items-center justify-center min-h-[300px] bg-muted/30 rounded-lg ${className}`}>
        <div className="flex flex-col items-center gap-3 text-center p-4">
          <UITriangleAlert className="w-12 h-12 text-red-500" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Toolbar */}
      <div className="flex items-center justify-between p-2 bg-muted/50 rounded-t-[var(--radius-lg)] border-b border-border">
        {/* File name */}
        <div className="flex items-center gap-2 min-w-0">
          <UIFile className="w-5 h-5 text-muted-foreground flex-shrink-0" aria-hidden="true" />
          <span className="text-sm text-foreground truncate">
            {filename || 'Document'}
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          {showZoomControls && (
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomOut}
                disabled={zoom <= minZoom}
                aria-label="Zoom out"
              >
                <UIMinus className="w-4 h-4" aria-hidden="true" />
              </Button>

              <Button variant="ghost" size="sm"
                onClick={handleResetZoom}

                aria-label={`Zoom: ${Math.round(zoom * 100)}%`}
              >
                {Math.round(zoom * 100)}%
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleZoomIn}
                disabled={zoom >= maxZoom}
                aria-label="Zoom in"
              >
                <UIPlus className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          )}

          {/* Page navigation */}
          {showNavigation && totalPages > 1 && (
            <div className="flex items-center gap-1 ml-2 pl-2 border-l border-border">
              <Button
                variant="ghost"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                aria-label="Previous page"
              >
                <UIChevronLeft className="w-4 h-4" aria-hidden="true" />
              </Button>

              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {currentPage} / {totalPages}
              </span>

              <Button
                variant="ghost"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage >= totalPages}
                aria-label="Next page"
              >
                <UIChevronRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Preview area */}
      <div
        ref={containerRef}
        className="relative flex items-center justify-center overflow-auto bg-muted/30 rounded-b-[var(--radius-lg)] min-h-[400px] max-h-[600px]"
        onWheel={handleWheel}
      >
        <canvas
          ref={canvasRef}
          className="max-w-full shadow-lg"
          style={{
            transform: `scale(1)`,
            transformOrigin: 'center center',
          }}
        />
      </div>
    </div>
  );
};

export default FilePreview;
