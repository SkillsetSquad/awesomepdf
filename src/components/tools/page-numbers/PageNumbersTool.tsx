'use client';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { File as UIFile, RefreshCw as UIRefreshCw, ZoomIn as UIZoomIn, ZoomOut as UIZoomOut } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { addPageNumbers, PageNumberOptions } from '@/lib/pdf/processors/page-numbers';
import type { ProcessOutput } from '@/types/pdf';

// Store pdfjs module reference
let pdfjsModule: typeof import('pdfjs-dist') | null = null;

export interface PageNumbersToolProps {
  className?: string;
}

type Position = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';
type Format = 'number' | 'roman' | 'page-of-total' | 'custom';

export function PageNumbersTool({ className = '' }: PageNumbersToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Options
  const [position, setPosition] = useState<Position>('bottom-center');
  const [format, setFormat] = useState<Format>('number');
  const [customFormat, setCustomFormat] = useState('Page {page} of {total}');
  const [startNumber, setStartNumber] = useState(1);
  const [fontSize, setFontSize] = useState(12);
  const [fontColor, setFontColor] = useState('#000000');
  const [margin, setMargin] = useState(30);
  const [skipFirstPage, setSkipFirstPage] = useState(false);
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  // Odd/Even page settings
  const [pageMode, setPageMode] = useState<'all' | 'odd-only' | 'even-only' | 'odd-even-different'>('all');
  const [oddPosition, setOddPosition] = useState<Position>('bottom-right');
  const [evenPosition, setEvenPosition] = useState<Position>('bottom-left');

  // Preview state
  const [totalPages, setTotalPages] = useState(0);
  const [currentPreviewPage, setCurrentPreviewPage] = useState(1);
  const [previewScale, setPreviewScale] = useState(0.5);

  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const cancelledRef = useRef(false);
  const renderTaskRef = useRef<{ cancel: () => void } | null>(null);

  // Load pdfjs module dynamically
  const loadPdfjsLib = async () => {
    if (pdfjsModule) return pdfjsModule;

    const pdfjsLib = await import('pdfjs-dist');
    const { configurePdfjsWorker } = await import('@/lib/pdf/loader');

    if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
      configurePdfjsWorker(pdfjsLib);
    }

    pdfjsModule = pdfjsLib;
    return pdfjsLib;
  };

  // Load PDF preview
  const loadPdfPreview = useCallback(async (pdfFile: File) => {
    try {
      const pdfjsLib = await loadPdfjsLib();
      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      setTotalPages(pdf.numPages);
      renderPagePreview(pdf, 1);
    } catch (err) {
      console.error('Failed to load PDF:', err);
    }
  }, []);

  // Render page with page number overlay
  const renderPagePreview = async (pdf: any, pageNum: number) => {
    if (!previewCanvasRef.current) return;

    // Cancel any ongoing render task
    if (renderTaskRef.current) {
      try {
        renderTaskRef.current.cancel();
      } catch {
        // Ignore cancel errors
      }
      renderTaskRef.current = null;
    }

    try {
      const page = await pdf.getPage(pageNum);
      // Use scale 1.5 for good quality preview
      const renderScale = 1.5;
      const viewport = page.getViewport({ scale: renderScale });

      const canvas = previewCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderTask = page.render({ canvasContext: ctx, viewport });
      renderTaskRef.current = renderTask;

      await renderTask.promise;
      renderTaskRef.current = null;

      // Check if page number should be drawn based on pageMode
      const isOddPage = pageNum % 2 === 1;
      let shouldDraw = true;

      if (skipFirstPage && pageNum === 1) shouldDraw = false;
      else if (pageMode === 'odd-only' && !isOddPage) shouldDraw = false;
      else if (pageMode === 'even-only' && isOddPage) shouldDraw = false;

      if (shouldDraw) {
        drawPageNumberOverlay(ctx, viewport.width, viewport.height, pageNum, pdf.numPages, renderScale, isOddPage);
      }

    } catch (err) {
      // Ignore cancelled render errors
      if (err instanceof Error && err.message.includes('cancelled')) {
        return;
      }
      console.error('Failed to render page:', err);
    }
  };

  // Format page number based on options
  const formatPageNumber = (page: number, total: number): string => {
    const adjustedPage = page - 1 + startNumber;
    let text = '';

    switch (format) {
      case 'number':
        text = String(adjustedPage);
        break;
      case 'roman':
        text = toRoman(adjustedPage);
        break;
      case 'page-of-total':
        text = `Page ${adjustedPage} of ${total - 1 + startNumber}`;
        break;
      case 'custom':
        text = customFormat
          .replace(/{page}/g, String(adjustedPage))
          .replace(/{total}/g, String(total - 1 + startNumber));
        break;
    }

    return `${prefix}${text}${suffix}`;
  };

  // Convert number to Roman numeral
  const toRoman = (num: number): string => {
    const romanNumerals: [number, string][] = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    let result = '';
    let n = num;
    for (const [value, symbol] of romanNumerals) {
      while (n >= value) {
        result += symbol;
        n -= value;
      }
    }
    return result;
  };

  // Draw page number on canvas
  const drawPageNumberOverlay = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    page: number,
    total: number,
    renderScale: number = 1,
    isOddPage: boolean = true
  ) => {
    const text = formatPageNumber(page, total);
    // Scale font size and margin according to render scale
    const scaledFontSize = fontSize * renderScale;
    const scaledMargin = margin * renderScale;

    ctx.font = `${scaledFontSize}px Arial`;
    ctx.fillStyle = fontColor;

    // Determine effective position based on page mode
    let effectivePosition: Position = position;
    if (pageMode === 'odd-even-different') {
      effectivePosition = isOddPage ? oddPosition : evenPosition;
    }

    // Calculate position
    let x = 0;
    let y = 0;

    switch (effectivePosition) {
      case 'bottom-center':
        ctx.textAlign = 'center';
        x = width / 2;
        y = height - scaledMargin;
        break;
      case 'bottom-left':
        ctx.textAlign = 'left';
        x = scaledMargin;
        y = height - scaledMargin;
        break;
      case 'bottom-right':
        ctx.textAlign = 'right';
        x = width - scaledMargin;
        y = height - scaledMargin;
        break;
      case 'top-center':
        ctx.textAlign = 'center';
        x = width / 2;
        y = scaledMargin + scaledFontSize;
        break;
      case 'top-left':
        ctx.textAlign = 'left';
        x = scaledMargin;
        y = scaledMargin + scaledFontSize;
        break;
      case 'top-right':
        ctx.textAlign = 'right';
        x = width - scaledMargin;
        y = scaledMargin + scaledFontSize;
        break;
    }

    // Draw background for visibility
    const metrics = ctx.measureText(text);
    const padding = 4 * renderScale;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(
      x - (ctx.textAlign === 'center' ? metrics.width / 2 : ctx.textAlign === 'right' ? metrics.width : 0) - padding,
      y - scaledFontSize,
      metrics.width + padding * 2,
      scaledFontSize + padding
    );

    // Draw text
    ctx.fillStyle = fontColor;
    ctx.fillText(text, x, y);
  };

  // Re-render preview when options change
  useEffect(() => {
    if (file && totalPages > 0) {
      const loadAndRender = async () => {
        const pdfjsLib = await loadPdfjsLib();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        renderPagePreview(pdf, currentPreviewPage);
      };
      loadAndRender();
    }
  }, [file, position, format, customFormat, startNumber, fontSize, fontColor, margin, skipFirstPage, prefix, suffix, currentPreviewPage, totalPages, pageMode, oddPosition, evenPosition]);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
      setResult(null);
      loadPdfPreview(files[0]);
    }
  }, [loadPdfPreview]);

  const handleClearFile = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setTotalPages(0);
    setCurrentPreviewPage(1);
  }, []);

  const handleProcess = useCallback(async () => {
    if (!file) return;

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const options: PageNumberOptions = {
        position,
        format: format as PageNumberOptions['format'],
        startNumber,
        fontSize,
        fontColor,
        margin,
        skipFirstPage,
        prefix,
        suffix,
        customFormat: format === 'custom' ? customFormat : undefined,
        pageMode,
        oddPosition,
        evenPosition,
      };

      const output: ProcessOutput = await addPageNumbers(file, options, (prog, message) => {
        if (!cancelledRef.current) {
          setProgress(prog);
          setProgressMessage(message || '');
        }
      });

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to add page numbers.');
        setStatus('error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      setStatus('error');
    }
  }, [file, position, format, customFormat, startNumber, fontSize, fontColor, margin, skipFirstPage, prefix, suffix, pageMode, oddPosition, evenPosition]);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isProcessing = status === 'processing';

  // Position options with visual representation
  const positionOptions = [
    { value: 'top-left', label: 'Top Left', icon: '↖' },
    { value: 'top-center', label: 'Top Center', icon: '↑' },
    { value: 'top-right', label: 'Top Right', icon: '↗' },
    { value: 'bottom-left', label: 'Bottom Left', icon: '↙' },
    { value: 'bottom-center', label: 'Bottom Center', icon: '↓' },
    { value: 'bottom-right', label: 'Bottom Right', icon: '↘' },
  ];

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && (
        <FileUploader
          accept={['application/pdf', '.pdf']}
          multiple={false}
          maxFiles={1}
          onFilesSelected={handleFilesSelected}
          onError={setError}
          disabled={isProcessing}
          label={tTools('pageNumbers.uploadLabel')}
          description={tTools('pageNumbers.uploadDescription')}
        />
      )}

      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm">{error}</p>
        </AlertDescription></Alert>
      )}

      {file && (
        <div className="grid lg:grid-cols-2 gap-4">
          {/* Options Panel */}
          <div className="space-y-3 lg:max-h-[850px] lg:overflow-y-auto lg:pr-2">
            {/* File Info */}
            <Card  className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UIFile className="w-8 h-8 text-red-500 shrink-0" aria-hidden="true" />
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatSize(file.size)} • {totalPages} pages
                    </p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>
                  {t('buttons.remove')}
                </Button>
              </div>
            </Card>

            {/* Main Options Card */}
            <Card  className="p-4">
              {/* Position Section */}
              <h4 className="text-sm font-semibold mb-2 text-gray-700">
                {tTools('pageNumbers.positionTitle')}
              </h4>
              <div className="grid grid-cols-3 gap-1.5 mb-4">
                {positionOptions.map((opt) => (
                  <Button size="sm" variant={position === opt.value ? 'default' : 'outline'} aria-pressed={position === opt.value}
                    key={opt.value}
                    onClick={() => setPosition(opt.value as Position)}
                    disabled={isProcessing}
                    className="text-center"
                  >
                    <span className="text-base">{opt.icon}</span>
                    <span className="block text-xs">{opt.label}</span>
                  </Button>
                ))}
              </div>

              {/* Format Section */}
              <h4 className="text-sm font-semibold mb-2 text-gray-700">
                {tTools('pageNumbers.formatTitle')}
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <Label className="block mb-1" htmlFor="pagenumberstool-field-1">{tTools('pageNumbers.style')}</Label>
                  <NativeSelect
                    value={format}
                    onChange={(e) => setFormat(e.target.value as Format)}
                    className="w-full"
                    disabled={isProcessing} id="pagenumberstool-field-1" aria-label={tTools('pageNumbers.style')}
                  >
                    <NativeSelectOption value="number">1, 2, 3...</NativeSelectOption>
                    <NativeSelectOption value="roman">I, II, III...</NativeSelectOption>
                    <NativeSelectOption value="page-of-total">Page 1 of N</NativeSelectOption>
                    <NativeSelectOption value="custom">Custom</NativeSelectOption>
                  </NativeSelect>
                </div>
                <div>
                  <Label className="block mb-1" htmlFor="pagenumberstool-field-2">{tTools('pageNumbers.startNumber')}</Label>
                  <Input
                    type="number"
                    value={startNumber}
                    onChange={(e) => setStartNumber(parseInt(e.target.value) || 1)}
                    min={1}
                    className="w-full"
                    disabled={isProcessing} id="pagenumberstool-field-2" aria-label={tTools('pageNumbers.startNumber')}
                  />
                </div>
              </div>

              {format === 'custom' && (
                <div className="mb-3">
                  <Label className="block mb-1" htmlFor="pagenumberstool-field-3">{tTools('pageNumbers.customFormat')}</Label>
                  <Input
                    type="text"
                    value={customFormat}
                    onChange={(e) => setCustomFormat(e.target.value)}
                    placeholder="Page {page} of {total}"
                    className="w-full"
                    disabled={isProcessing} id="pagenumberstool-field-3" aria-label={tTools('pageNumbers.customFormat')}
                  />
                  <p className="text-xs text-gray-500 mt-1">{tTools('pageNumbers.customFormatHint')}</p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <Label className="block mb-1" htmlFor="pagenumberstool-field-4">{tTools('pageNumbers.prefix')}</Label>
                  <Input
                    type="text"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    placeholder="e.g., Page "
                    className="w-full"
                    disabled={isProcessing} id="pagenumberstool-field-4" aria-label={tTools('pageNumbers.prefix')}
                  />
                </div>
                <div>
                  <Label className="block mb-1" htmlFor="pagenumberstool-field-5">{tTools('pageNumbers.suffix')}</Label>
                  <Input
                    type="text"
                    value={suffix}
                    onChange={(e) => setSuffix(e.target.value)}
                    placeholder="e.g., -"
                    className="w-full"
                    disabled={isProcessing} id="pagenumberstool-field-5" aria-label={tTools('pageNumbers.suffix')}
                  />
                </div>
              </div>

              {/* Style Section */}
              <h4 className="text-sm font-semibold mb-2 text-gray-700 pt-2 border-t">
                {tTools('pageNumbers.styleTitle')}
              </h4>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <Label className="block mb-1" htmlFor="pagenumberstool-field-6">{tTools('pageNumbers.fontSize')}</Label>
                  <Input
                    type="number"
                    value={fontSize}
                    onChange={(e) => setFontSize(parseInt(e.target.value) || 12)}
                    min={6}
                    max={72}
                    className="w-full"
                    disabled={isProcessing} id="pagenumberstool-field-6" aria-label={tTools('pageNumbers.fontSize')}
                  />
                </div>
                <div>
                  <Label className="block mb-1" htmlFor="pagenumberstool-field-7">{tTools('pageNumbers.margin')}</Label>
                  <Input
                    type="number"
                    value={margin}
                    onChange={(e) => setMargin(parseInt(e.target.value) || 30)}
                    min={10}
                    max={100}
                    className="w-full"
                    disabled={isProcessing} id="pagenumberstool-field-7" aria-label={tTools('pageNumbers.margin')}
                  />
                </div>
              </div>
              <div className="mb-3">
                <Label className="block mb-1" htmlFor="pagenumberstool-field-8">{tTools('pageNumbers.color')}</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="color"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="w-10 h-10 cursor-pointer"
                    disabled={isProcessing} id="pagenumberstool-field-8" aria-label={tTools('pageNumbers.color')}
                  />
                  <Input
                    type="text"
                    value={fontColor}
                    onChange={(e) => setFontColor(e.target.value)}
                    className="flex-1"
                    disabled={isProcessing} aria-label={tTools('pageNumbers.color')}
                  />
                </div>
              </div>

              <Label className="flex items-center gap-2">
                <Checkbox

                  checked={skipFirstPage}
                  onCheckedChange={(checked) => setSkipFirstPage((checked === true))}
                  className="w-3.5 h-3.5"
                  disabled={isProcessing}
                />
                <span className="text-sm">{tTools('pageNumbers.skipFirstPage')}</span>
              </Label>

              {/* Odd/Even Page Mode */}
              <div className="mt-3 pt-3 border-t border-gray-200">
                <h4 className="text-sm font-semibold mb-2 text-gray-700">
                  {tTools('pageNumbers.oddEvenTitle')}
                </h4>

                <div className="space-y-2">
                  <div>
                    <Label className="block mb-1" htmlFor="pagenumberstool-field-9">{tTools('pageNumbers.pageMode')}</Label>
                    <NativeSelect
                      value={pageMode}
                      onChange={(e) => setPageMode(e.target.value as typeof pageMode)}
                      className="w-full"
                      disabled={isProcessing} id="pagenumberstool-field-9" aria-label={tTools('pageNumbers.pageMode')}
                    >
                      <NativeSelectOption value="all">{tTools('pageNumbers.modeAll')}</NativeSelectOption>
                      <NativeSelectOption value="odd-only">{tTools('pageNumbers.modeOddOnly')}</NativeSelectOption>
                      <NativeSelectOption value="even-only">{tTools('pageNumbers.modeEvenOnly')}</NativeSelectOption>
                      <NativeSelectOption value="odd-even-different">{tTools('pageNumbers.modeDifferent')}</NativeSelectOption>
                    </NativeSelect>
                  </div>

                  {pageMode === 'odd-even-different' && (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label className="block mb-1" htmlFor="pagenumberstool-field-10">{tTools('pageNumbers.oddPosition')}</Label>
                        <NativeSelect
                          value={oddPosition}
                          onChange={(e) => setOddPosition(e.target.value as Position)}
                          className="w-full"
                          disabled={isProcessing} id="pagenumberstool-field-10" aria-label={tTools('pageNumbers.oddPosition')}
                        >
                          <NativeSelectOption value="bottom-left">{tTools('pageNumbers.posBottomLeft')}</NativeSelectOption>
                          <NativeSelectOption value="bottom-center">{tTools('pageNumbers.posBottomCenter')}</NativeSelectOption>
                          <NativeSelectOption value="bottom-right">{tTools('pageNumbers.posBottomRight')}</NativeSelectOption>
                          <NativeSelectOption value="top-left">{tTools('pageNumbers.posTopLeft')}</NativeSelectOption>
                          <NativeSelectOption value="top-center">{tTools('pageNumbers.posTopCenter')}</NativeSelectOption>
                          <NativeSelectOption value="top-right">{tTools('pageNumbers.posTopRight')}</NativeSelectOption>
                        </NativeSelect>
                        <p className="text-xs text-gray-500">{tTools('pageNumbers.oddPositionHint')}</p>
                      </div>
                      <div>
                        <Label className="block mb-1" htmlFor="pagenumberstool-field-11">{tTools('pageNumbers.evenPosition')}</Label>
                        <NativeSelect
                          value={evenPosition}
                          onChange={(e) => setEvenPosition(e.target.value as Position)}
                          className="w-full"
                          disabled={isProcessing} id="pagenumberstool-field-11" aria-label={tTools('pageNumbers.evenPosition')}
                        >
                          <NativeSelectOption value="bottom-left">{tTools('pageNumbers.posBottomLeft')}</NativeSelectOption>
                          <NativeSelectOption value="bottom-center">{tTools('pageNumbers.posBottomCenter')}</NativeSelectOption>
                          <NativeSelectOption value="bottom-right">{tTools('pageNumbers.posBottomRight')}</NativeSelectOption>
                          <NativeSelectOption value="top-left">{tTools('pageNumbers.posTopLeft')}</NativeSelectOption>
                          <NativeSelectOption value="top-center">{tTools('pageNumbers.posTopCenter')}</NativeSelectOption>
                          <NativeSelectOption value="top-right">{tTools('pageNumbers.posTopRight')}</NativeSelectOption>
                        </NativeSelect>
                        <p className="text-xs text-gray-500">{tTools('pageNumbers.evenPositionHint')}</p>
                      </div>
                    </div>
                  )}

                  {pageMode === 'odd-even-different' && (
                    <div className="p-2 bg-blue-50 rounded text-sm text-blue-700">
                      <p>{tTools('pageNumbers.differentModeHint')}</p>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Preview Panel */}
          <div>
            <Card className="p-6"  >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">
                  {tTools('pageNumbers.preview')}
                </h3>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPreviewPage(p => Math.max(1, p - 1))}
                    disabled={currentPreviewPage <= 1}
                  >
                    ←
                  </Button>
                  <span className="text-sm">
                    {tTools('pageNumbers.pageOf', { current: currentPreviewPage, total: totalPages })}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentPreviewPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPreviewPage >= totalPages}
                  >
                    →
                  </Button>
                </div>
              </div>

              {/* Zoom Controls */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPreviewScale(s => Math.max(0.5, s - 0.25))}
                  disabled={previewScale <= 0.5}
                  title={tTools('pageNumbers.zoomOut')}
                >
                  <UIZoomOut className="w-4 h-4" aria-hidden="true" />
                </Button>
                <span className="text-sm min-w-[60px] text-center">{Math.round(previewScale * 100)}%</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPreviewScale(s => Math.min(2, s + 0.25))}
                  disabled={previewScale >= 2}
                  title={tTools('pageNumbers.zoomIn')}
                >
                  <UIZoomIn className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setPreviewScale(0.5)}
                  disabled={previewScale === 0.5}
                  title={tTools('pageNumbers.zoomReset')}
                >
                  <UIRefreshCw className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 overflow-auto" style={{ maxHeight: '600px', minHeight: '500px' }}>
                <div
                  className="flex justify-center"
                  style={{
                    transform: `scale(${previewScale})`,
                    transformOrigin: 'top center',
                    minHeight: previewScale < 1 ? 'auto' : undefined
                  }}
                >
                  <canvas
                    ref={previewCanvasRef}
                    className="shadow-lg bg-white"
                  />
                </div>
              </div>

              <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
                {skipFirstPage && currentPreviewPage === 1
                  ? tTools('pageNumbers.firstPageSkipped')
                  : tTools('pageNumbers.previewText', { text: formatPageNumber(currentPreviewPage, totalPages) })
                }
              </p>
            </Card>
          </div>
        </div>
      )}

      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
          showPercentage
        />
      )}

      {file && (
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={handleProcess}
            disabled={!file || isProcessing}
            loading={isProcessing}
          >
            {isProcessing ? t('status.processing') : tTools('pageNumbers.addButton')}
          </Button>
          {result && (
            <DownloadButton
              file={result}
              filename={file.name.replace('.pdf', '_numbered.pdf')}
              variant="secondary"
              size="lg"
              showFileSize
            />
          )}
        </div>
      )}

      {status === 'complete' && result && (
        <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-medium">
            {tTools('pageNumbers.successMessage')}
          </p>
        </AlertDescription></Alert>
      )}
    </div>
  );
}

export default PageNumbersTool;
