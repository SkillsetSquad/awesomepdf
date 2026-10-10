'use client';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Slider } from '@/components/ui/slider';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { addWatermark, WatermarkOptions } from '@/lib/pdf/processors/watermark';
import { parsePageSelection } from '@/lib/pdf/processors/extract';
import { loadPdfjs } from '@/lib/pdf/loader';
import type { ProcessOutput } from '@/types/pdf';

export interface WatermarkToolProps {
  className?: string;
}

/**
 * Convert any image file to PNG format using Canvas
 * This ensures compatibility with pdf-lib which doesn't support
 * progressive JPEG, CMYK color space, and some other formats
 */
async function convertImageToPng(file: File): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }
        ctx.drawImage(img, 0, 0);

        canvas.toBlob((blob) => {
          if (blob) {
            blob.arrayBuffer().then(resolve).catch(reject);
          } else {
            reject(new Error('Failed to convert image to PNG'));
          }
        }, 'image/png');
      } finally {
        URL.revokeObjectURL(url);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };

    img.src = url;
  });
}

type WatermarkType = 'text' | 'image';

export function WatermarkTool({ className = '' }: WatermarkToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools.watermark');

  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Multi-page navigation state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isRenderingPage, setIsRenderingPage] = useState(false);

  // Watermark type
  const [watermarkType, setWatermarkType] = useState<WatermarkType>('text');

  // Relative Position state (0 to 1, default center 0.5, 0.5)
  const [watermarkX, setWatermarkX] = useState(0.5);
  const [watermarkY, setWatermarkY] = useState(0.5);

  // Text watermark options
  const [watermarkText, setWatermarkText] = useState('CONFIDENTIAL');
  const [fontSize, setFontSize] = useState(72);
  const [textColor, setTextColor] = useState('#888888');
  const [textOpacity, setTextOpacity] = useState(0.3);
  const [textAngle, setTextAngle] = useState(-45);

  // Image watermark options
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [imageOpacity, setImageOpacity] = useState(0.3);
  const [imageAngle, setImageAngle] = useState(0);
  const [imageScale, setImageScale] = useState(50); // percentage 10-200%

  // Repeat/tile watermark options
  const [repeatWatermark, setRepeatWatermark] = useState(false);
  const [staggerWatermark, setStaggerWatermark] = useState(true);
  const [repeatSpacingX, setRepeatSpacingX] = useState(200);
  const [repeatSpacingY, setRepeatSpacingY] = useState(150);

  // Flatten watermark option
  const [flattenWatermark, setFlattenWatermark] = useState(false);

  // Page range options
  const [pageMode, setPageMode] = useState<'all' | 'odd' | 'even' | 'custom'>('all');
  const [customPageRange, setCustomPageRange] = useState('');

  // Canvas and Interaction Refs
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);
  const tileCanvasRef = useRef<HTMLCanvasElement>(null);
  const watermarkBoxRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pdfDocRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderTaskRef = useRef<any>(null);
  const imageElementRef = useRef<HTMLImageElement | null>(null);
  const cancelledRef = useRef(false);

  // Display scale (ratio between rendered CSS width and PDF point width)
  const [displayScale, setDisplayScale] = useState(1);
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  // Dragging & Resizing tracking refs
  const isDraggingRef = useRef(false);
  const isResizingRef = useRef(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });
  const resizeStartDistanceRef = useRef(1);
  const resizeStartFontSizeRef = useRef(72);
  const resizeStartImageScaleRef = useRef(50);

  // 9-Grid Presets
  const PRESETS = [
    { key: 'posTopLeft', label: tTools('posTopLeft'), x: 0.15, y: 0.15 },
    { key: 'posTop', label: tTools('posTop'), x: 0.5, y: 0.15 },
    { key: 'posTopRight', label: tTools('posTopRight'), x: 0.85, y: 0.15 },
    { key: 'posLeft', label: tTools('posLeft'), x: 0.15, y: 0.5 },
    { key: 'posCenter', label: tTools('posCenter'), x: 0.5, y: 0.5 },
    { key: 'posRight', label: tTools('posRight'), x: 0.85, y: 0.5 },
    { key: 'posBottomLeft', label: tTools('posBottomLeft'), x: 0.15, y: 0.85 },
    { key: 'posBottom', label: tTools('posBottom'), x: 0.5, y: 0.85 },
    { key: 'posBottomRight', label: tTools('posBottomRight'), x: 0.85, y: 0.85 },
  ];

  const isPresetActive = (px: number, py: number) => {
    return Math.abs(watermarkX - px) < 0.03 && Math.abs(watermarkY - py) < 0.03;
  };

  // Render a specific page of the PDF to canvas
  const renderPage = useCallback(async (pageNum: number) => {
    if (!pdfDocRef.current || !previewCanvasRef.current) return;
    setIsRenderingPage(true);

    try {
      const page = await pdfDocRef.current.getPage(pageNum);
      const unscaledViewport = page.getViewport({ scale: 1 });

      const containerWidth = previewContainerRef.current?.parentElement?.clientWidth || 550;
      const targetWidth = Math.min(Math.max(280, containerWidth - 32), 650);
      const scale = targetWidth / unscaledViewport.width;
      setDisplayScale(scale);

      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      const viewport = page.getViewport({ scale: scale * dpr });

      const canvas = previewCanvasRef.current;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const cssW = viewport.width / dpr;
      const cssH = viewport.height / dpr;
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        if (renderTaskRef.current) {
          try {
            renderTaskRef.current.cancel();
          } catch {
            // ignore cancel
          }
        }
        renderTaskRef.current = page.render({
          canvasContext: ctx,
          viewport,
        });
        await renderTaskRef.current.promise;
      }

      setContainerDimensions({ width: cssW, height: cssH });
    } catch (err: unknown) {
      if ((err as { name?: string })?.name !== 'RenderingCancelledException') {
        console.error('Page render error:', err);
      }
    } finally {
      setIsRenderingPage(false);
    }
  }, []);

  // Handle PDF file selection
  const handleFilesSelected = useCallback(async (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      setError(null);
      setResult(null);
      setCurrentPage(1);

      try {
        const pdfjs = await loadPdfjs();
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdf = await pdfjs.getDocument({ data: arrayBuffer.slice(0) }).promise;
        pdfDocRef.current = pdf;
        setTotalPages(pdf.numPages);
      } catch (err) {
        console.error('Failed to load PDF for preview:', err);
        setError(tTools('failed'));
      }
    }
  }, [tTools]);

  // When pdfDoc or currentPage changes, re-render the page
  useEffect(() => {
    if (pdfDocRef.current && totalPages > 0) {
      renderPage(currentPage);
    }
  }, [currentPage, totalPages, renderPage]);

  // Handle image watermark selection
  const handleImageSelected = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg') {
        setImageFile(selectedFile);
        setError(null);
        if (imagePreviewUrl) {
          URL.revokeObjectURL(imagePreviewUrl);
        }
        const url = URL.createObjectURL(selectedFile);
        setImagePreviewUrl(url);

        const img = new Image();
        img.onload = () => {
          imageElementRef.current = img;
        };
        img.src = url;
      } else {
        setError(tTools('unsupportedImage'));
      }
    }
  }, [imagePreviewUrl, tTools]);

  // Cleanup object URLs on unmount
  useEffect(() => {
    return () => {
      if (imagePreviewUrl) {
        URL.revokeObjectURL(imagePreviewUrl);
      }
    };
  }, [imagePreviewUrl]);

  // Render tile preview on tile canvas
  const renderTilePreview = useCallback(() => {
    if (!repeatWatermark || !tileCanvasRef.current || containerDimensions.width === 0) return;

    const canvas = tileCanvasRef.current;
    const w = containerDimensions.width;
    const h = containerDimensions.height;
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.scale(dpr, dpr);

    const scale = displayScale;
    const scaledSpacingX = repeatSpacingX * scale;
    const scaledSpacingY = repeatSpacingY * scale;

    if (watermarkType === 'text') {
      const scaledFontSize = Math.max(10, Math.round(fontSize * scale));
      ctx.font = `bold ${scaledFontSize}px "Noto Sans SC", sans-serif`;
      ctx.fillStyle = textColor;
      ctx.globalAlpha = textOpacity;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const text = watermarkText || 'CONFIDENTIAL';
      const textWidth = ctx.measureText(text).width;
      const textHeight = scaledFontSize;
      const stepX = textWidth + scaledSpacingX;
      const stepY = textHeight + scaledSpacingY;
      const margin = Math.max(textWidth, textHeight, 150);

      const rad = (textAngle * Math.PI) / 180;
      let rowIndex = 0;
      for (let y = -margin; y < h + margin; y += stepY) {
        const offsetX = (staggerWatermark && rowIndex % 2 === 1) ? stepX / 2 : 0;
        for (let x = -margin - offsetX; x < w + margin; x += stepX) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rad);
          ctx.fillText(text, 0, 0);
          ctx.restore();
        }
        rowIndex++;
      }
    } else if (watermarkType === 'image' && imageElementRef.current) {
      const img = imageElementRef.current;
      if (img.naturalWidth && img.naturalHeight) {
        const imgWidth = (imageScale / 100) * img.naturalWidth * scale * 0.5;
        const imgHeight = (imageScale / 100) * img.naturalHeight * scale * 0.5;
        const stepX = imgWidth + scaledSpacingX;
        const stepY = imgHeight + scaledSpacingY;
        const margin = Math.max(imgWidth, imgHeight, 150);

        ctx.globalAlpha = imageOpacity;
        const rad = (imageAngle * Math.PI) / 180;
        let rowIndex = 0;
        for (let y = -margin; y < h + margin; y += stepY) {
          const offsetX = (staggerWatermark && rowIndex % 2 === 1) ? stepX / 2 : 0;
          for (let x = -margin - offsetX; x < w + margin; x += stepX) {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(rad);
            ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
            ctx.restore();
          }
          rowIndex++;
        }
      }
    }

    ctx.restore();
  }, [
    repeatWatermark,
    containerDimensions,
    displayScale,
    repeatSpacingX,
    repeatSpacingY,
    watermarkType,
    fontSize,
    textColor,
    textOpacity,
    watermarkText,
    textAngle,
    staggerWatermark,
    imageScale,
    imageOpacity,
    imageAngle,
  ]);

  // Trigger tile render whenever relevant options change
  useEffect(() => {
    renderTilePreview();
  }, [renderTilePreview]);

  // Pointer Interaction Handlers for Drag & Corner Resize
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (repeatWatermark) return;
    const target = e.target as HTMLElement;
    const container = previewContainerRef.current;
    if (!container) return;

    if (target.classList.contains('resize-handle')) {
      isResizingRef.current = true;
      const containerRect = container.getBoundingClientRect();
      const centerX = watermarkX * containerRect.width;
      const centerY = watermarkY * containerRect.height;
      const pointerX = e.clientX - containerRect.left;
      const pointerY = e.clientY - containerRect.top;
      resizeStartDistanceRef.current = Math.max(Math.hypot(pointerX - centerX, pointerY - centerY), 10);
      resizeStartFontSizeRef.current = fontSize;
      resizeStartImageScaleRef.current = imageScale;

      if (container.setPointerCapture) {
        container.setPointerCapture(e.pointerId);
      }
      e.preventDefault();
      return;
    }

    if (watermarkBoxRef.current?.contains(target)) {
      isDraggingRef.current = true;
      const boxRect = watermarkBoxRef.current.getBoundingClientRect();
      dragOffsetRef.current = {
        x: e.clientX - boxRect.left - boxRect.width / 2,
        y: e.clientY - boxRect.top - boxRect.height / 2,
      };

      if (container.setPointerCapture) {
        container.setPointerCapture(e.pointerId);
      }
      e.preventDefault();
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = previewContainerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();

    if (isResizingRef.current) {
      const centerX = watermarkX * containerRect.width;
      const centerY = watermarkY * containerRect.height;
      const pointerX = e.clientX - containerRect.left;
      const pointerY = e.clientY - containerRect.top;
      const currentDistance = Math.hypot(pointerX - centerX, pointerY - centerY);
      const ratio = currentDistance / resizeStartDistanceRef.current;

      if (watermarkType === 'text') {
        const newSize = Math.max(10, Math.min(200, Math.round(resizeStartFontSizeRef.current * ratio)));
        setFontSize(newSize);
      } else {
        const newScale = Math.max(10, Math.min(200, Math.round(resizeStartImageScaleRef.current * ratio)));
        setImageScale(newScale);
      }
      e.preventDefault();
      return;
    }

    if (isDraggingRef.current) {
      const x = e.clientX - containerRect.left - dragOffsetRef.current.x;
      const y = e.clientY - containerRect.top - dragOffsetRef.current.y;

      const clampedX = Math.max(0, Math.min(x, containerRect.width));
      const clampedY = Math.max(0, Math.min(y, containerRect.height));

      setWatermarkX(clampedX / containerRect.width);
      setWatermarkY(clampedY / containerRect.height);
      e.preventDefault();
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    isResizingRef.current = false;
    const container = previewContainerRef.current;
    if (container?.releasePointerCapture && container.hasPointerCapture?.(e.pointerId)) {
      container.releasePointerCapture(e.pointerId);
    }
  };

  const handleClearFile = useCallback(() => {
    setFile(null);
    setResult(null);
    setError(null);
    setStatus('idle');
    setTotalPages(0);
    setCurrentPage(1);
    pdfDocRef.current = null;
    if (imagePreviewUrl) {
      URL.revokeObjectURL(imagePreviewUrl);
      setImagePreviewUrl(null);
    }
  }, [imagePreviewUrl]);

  // Execute watermark generation
  const handleProcess = useCallback(async () => {
    if (!file) return;
    if (watermarkType === 'text' && !watermarkText.trim()) {
      setError(tTools('enterText'));
      return;
    }
    if (watermarkType === 'image' && !imageFile) {
      setError(tTools('selectImage'));
      return;
    }

    if (pageMode === 'custom' && !customPageRange.trim()) {
      setError(tTools('rangePlaceholder'));
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const hexToRgb = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        return { r, g, b };
      };

      let options: WatermarkOptions;

      if (watermarkType === 'text') {
        options = {
          type: 'text',
          text: watermarkText,
          fontSize,
          color: hexToRgb(textColor),
          opacity: textOpacity,
          rotation: textAngle,
          x: watermarkX,
          y: watermarkY,
          pages: 'all',
          repeat: repeatWatermark,
          stagger: staggerWatermark,
          repeatSpacingX,
          repeatSpacingY,
          flatten: flattenWatermark,
        };
      } else {
        const imageData = await convertImageToPng(imageFile!);
        options = {
          type: 'image',
          imageData,
          imageType: 'png',
          opacity: imageOpacity,
          rotation: imageAngle,
          x: watermarkX,
          y: watermarkY,
          imageScale: imageScale / 100,
          pages: 'all',
          repeat: repeatWatermark,
          stagger: staggerWatermark,
          repeatSpacingX,
          repeatSpacingY,
          flatten: flattenWatermark,
        };
      }

      // Prepare pages option
      let pages: WatermarkOptions['pages'] = 'all';
      if (pageMode === 'odd') pages = 'odd';
      else if (pageMode === 'even') pages = 'even';
      else if (pageMode === 'custom') {
        pages = parsePageSelection(customPageRange, totalPages);
      }
      options.pages = pages;

      const output: ProcessOutput = await addWatermark(file, options, (prog, message) => {
        if (!cancelledRef.current) {
          setProgress(prog);
          setProgressMessage(message || '');
        }
      });

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || tTools('failed'));
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : tTools('failed'));
        setStatus('error');
      }
    }
  }, [
    file,
    watermarkType,
    watermarkText,
    fontSize,
    textColor,
    textOpacity,
    textAngle,
    watermarkX,
    watermarkY,
    imageFile,
    imageOpacity,
    imageAngle,
    imageScale,
    repeatWatermark,
    staggerWatermark,
    repeatSpacingX,
    repeatSpacingY,
    flattenWatermark,
    pageMode,
    customPageRange,
    totalPages,
    tTools,
  ]);

  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isProcessing = status === 'processing';

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
          label={tTools('uploadLabel')}
          description={tTools('uploadDescription')}
        />
      )}

      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
          <p className="text-sm">{error}</p>
        </div>
      )}

      {file && (
        <div className="grid grid-cols-1 lg:grid-cols-[540px_1fr] gap-6 items-start">
          {/* Controls Column */}
          <div className="space-y-6">
            <Card className="p-6" >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-10 h-10 text-red-500 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  </svg>
                  <div className="min-w-0">
                    <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{file.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatSize(file.size)}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>
                  {t('buttons.remove')}
                </Button>
              </div>
            </Card>

            <Card className="p-6"  >
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
                {tTools('optionsTitle')}
              </h3>

              {/* Watermark Type Selection */}
              <RadioGroup className="flex flex-wrap gap-6 mb-6" name="watermark-type" value={watermarkType} onValueChange={(value) => setWatermarkType(value === 'image' ? 'image' : 'text')} aria-label={tTools('optionsTitle')} orientation="horizontal">
                <Label className="flex items-center gap-2 cursor-pointer" htmlFor="watermark-type-text">
                  <RadioGroupItem
                    value="text"
                    disabled={isProcessing} id="watermark-type-text"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tTools('textWatermark')}
                  </span>
                </Label>
                <Label className="flex items-center gap-2 cursor-pointer" htmlFor="watermark-type-image">
                  <RadioGroupItem
                    value="image"
                    disabled={isProcessing} id="watermark-type-image"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tTools('imageWatermark')}
                  </span>
                </Label>
              </RadioGroup>

              {/* Text Watermark Options */}
              {watermarkType === 'text' && (
                <div className="space-y-4">
                  <div>
                    <Label className="block mb-1 dark:text-gray-300" htmlFor="watermarktool-field-1">
                      {tTools('watermarkText')}
                    </Label>
                    <Input
                      type="text"
                      value={watermarkText}
                      onChange={(e) => setWatermarkText(e.target.value)}
                      placeholder={tTools('textPlaceholder') || 'CONFIDENTIAL'}
                      className="w-full"
                      disabled={isProcessing} id="watermarktool-field-1" aria-label={tTools('watermarkText')}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label className="dark:text-gray-300" htmlFor="watermarktool-slider-1">
                          {tTools('fontSize')}
                        </Label>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{fontSize}pt</span>
                      </div>
                      <Slider
                        min={10}
                        max={200}
                        value={[fontSize]}
                        onValueChange={(values) => setFontSize(parseInt(String(values[0])) || 72)}
                        className="w-full"
                        disabled={isProcessing} id="watermarktool-slider-1" aria-label={tTools('fontSize')}
                      />
                    </div>
                    <div>
                      <Label className="block mb-1 dark:text-gray-300" htmlFor="watermarktool-field-2">
                        {tTools('color')}
                      </Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="color"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="w-9 h-9 cursor-pointer shrink-0"
                          disabled={isProcessing} id="watermarktool-field-2" aria-label={tTools('color')}
                        />
                        <Input
                          type="text"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
                          className="flex-1"
                          disabled={isProcessing} aria-label={tTools('color')}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label className="dark:text-gray-300" htmlFor="watermarktool-slider-2">
                          {tTools('opacity')}
                        </Label>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{Math.round(textOpacity * 100)}%</span>
                      </div>
                      <Slider
                        value={[textOpacity]}
                        onValueChange={(values) => setTextOpacity(parseFloat(String(values[0])))}
                        min={0.05}
                        max={1}
                        step={0.05}
                        className="w-full"
                        disabled={isProcessing} id="watermarktool-slider-2" aria-label={tTools('opacity')}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label className="dark:text-gray-300" htmlFor="watermarktool-slider-3">
                          {tTools('angle')}
                        </Label>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{textAngle}°</span>
                      </div>
                      <Slider
                        value={[textAngle]}
                        onValueChange={(values) => setTextAngle(parseInt(String(values[0])))}
                        min={-90}
                        max={90}
                        step={5}
                        className="w-full"
                        disabled={isProcessing} id="watermarktool-slider-3" aria-label={tTools('angle')}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Image Watermark Options */}
              {watermarkType === 'image' && (
                <div className="space-y-4">
                  <div>
                    <Label className="block mb-1 dark:text-gray-300" htmlFor="watermarktool-field-3">
                      {tTools('watermarkImage')}
                    </Label>
                    <Input
                      type="file"
                      accept="image/png, image/jpeg"
                      onChange={handleImageSelected}
                      className="w-full file:mr-4 file:text-white"
                      disabled={isProcessing} id="watermarktool-field-3" aria-label={tTools('watermarkImage')}
                    />
                    {imageFile && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {imageFile.name} ({formatSize(imageFile.size)})
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label className="dark:text-gray-300" htmlFor="watermarktool-slider-4">
                          {tTools('scale')}
                        </Label>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{imageScale}%</span>
                      </div>
                      <Slider
                        value={[imageScale]}
                        onValueChange={(values) => setImageScale(parseInt(String(values[0])) || 50)}
                        min={10}
                        max={200}
                        step={5}
                        className="w-full"
                        disabled={isProcessing} id="watermarktool-slider-4" aria-label={tTools('scale')}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <Label className="dark:text-gray-300" htmlFor="watermarktool-slider-5">
                          {tTools('opacity')}
                        </Label>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{Math.round(imageOpacity * 100)}%</span>
                      </div>
                      <Slider
                        value={[imageOpacity]}
                        onValueChange={(values) => setImageOpacity(parseFloat(String(values[0])))}
                        min={0.05}
                        max={1}
                        step={0.05}
                        className="w-full"
                        disabled={isProcessing} id="watermarktool-slider-5" aria-label={tTools('opacity')}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <Label className="dark:text-gray-300" htmlFor="watermarktool-slider-6">
                        {tTools('angle')}
                      </Label>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{imageAngle}°</span>
                    </div>
                    <Slider
                      value={[imageAngle]}
                      onValueChange={(values) => setImageAngle(parseInt(String(values[0])))}
                      min={-90}
                      max={90}
                      step={5}
                      className="w-full"
                      disabled={isProcessing} id="watermarktool-slider-6" aria-label={tTools('angle')}
                    />
                  </div>
                </div>
              )}

              {/* 9-Grid Position Presets (only shown when repeat is false) */}
              {!repeatWatermark && (
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <Label className="dark:text-gray-300">
                      {tTools('position')}
                    </Label>
                    <span className="text-xs text-gray-400">
                      ({Math.round(watermarkX * 100)}%, {Math.round(watermarkY * 100)}%)
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {PRESETS.map((p) => {
                      const active = isPresetActive(p.x, p.y);
                      return (
                        <button
                          key={p.key}
                          type="button"
                          onClick={() => {
                            setWatermarkX(p.x);
                            setWatermarkY(p.y);
                          }}
                          disabled={isProcessing}
                          className={`py-1.5 px-2 text-xs rounded-md font-medium transition-all ${
                            active
                              ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-500/30'
                              : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          {p.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </Card>

            {/* Repeat Watermark Options */}
            <Card className="p-6"  >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                  {tTools('repeatTitle')}
                </h3>
                <Label className="flex items-center gap-2 cursor-pointer select-none">
                  <div className="relative inline-flex">
                    <Checkbox

                      className="sr-only"
                      checked={repeatWatermark}
                      onCheckedChange={(checked) => setRepeatWatermark((checked === true))}
                      disabled={isProcessing}
                    />
                    <div
                      className={`w-11 h-6 rounded-full transition-colors ${
                        repeatWatermark ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                    <div
                      className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                        repeatWatermark ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tTools('repeatEnable')}
                  </span>
                </Label>
              </div>

              {repeatWatermark && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>{tTools('repeatSpacingX')}</span>
                        <span>{repeatSpacingX}pt</span>
                      </div>
                      <Slider
                        value={[repeatSpacingX]}
                        onValueChange={(values) => setRepeatSpacingX(parseInt(String(values[0])))}
                        min={20}
                        max={600}
                        step={10}
                        className="w-full"
                        disabled={isProcessing} aria-label={tTools('repeatSpacingX')}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span>{tTools('repeatSpacingY')}</span>
                        <span>{repeatSpacingY}pt</span>
                      </div>
                      <Slider
                        value={[repeatSpacingY]}
                        onValueChange={(values) => setRepeatSpacingY(parseInt(String(values[0])))}
                        min={20}
                        max={600}
                        step={10}
                        className="w-full"
                        disabled={isProcessing} aria-label={tTools('repeatSpacingY')}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                    <div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tTools('staggerTitle')}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {tTools('staggerDescription')}
                      </p>
                    </div>
                    <Label className="flex items-center gap-2 cursor-pointer select-none">
                      <div className="relative inline-flex">
                        <Checkbox

                          className="sr-only"
                          checked={staggerWatermark}
                          onCheckedChange={(checked) => setStaggerWatermark((checked === true))}
                          disabled={isProcessing}
                        />
                        <div
                          className={`w-11 h-6 rounded-full transition-colors ${
                            staggerWatermark ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        />
                        <div
                          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                            staggerWatermark ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </div>
                    </Label>
                  </div>
                </div>
              )}
            </Card>

            {/* Flatten Watermark Option */}
            <Card className="p-6"  >
              <div className="flex items-start gap-3">
                <Checkbox

                  id="flatten-watermark"
                  checked={flattenWatermark}
                  onCheckedChange={(checked) => setFlattenWatermark((checked === true))}
                  className="mt-1"
                  disabled={isProcessing}
                />
                <Label htmlFor="flatten-watermark" className="cursor-pointer">
                  <span className="block text-sm font-medium text-gray-900 dark:text-gray-100">
                    {tTools('flattenTitle')}
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {tTools('flattenDescription')}
                  </span>
                </Label>
              </div>
            </Card>

            {/* Page Range Selection */}
            <Card className="p-6"  >
              <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-gray-100">
                {tTools('rangeTitle')}
              </h3>

              <div className="space-y-4">
                <RadioGroup className="flex flex-wrap gap-4" name="page-mode" value={pageMode} onValueChange={(value) => setPageMode(value === 'odd' || value === 'even' || value === 'custom' ? value : 'all')} aria-label={tTools('rangeTitle')} orientation="horizontal">
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="page-mode-all">
                    <RadioGroupItem
                      value="all"
                      disabled={isProcessing} id="page-mode-all"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tTools('rangeAll')}
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="page-mode-odd">
                    <RadioGroupItem
                      value="odd"
                      disabled={isProcessing} id="page-mode-odd"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tTools('rangeOdd')}
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="page-mode-even">
                    <RadioGroupItem
                      value="even"
                      disabled={isProcessing} id="page-mode-even"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tTools('rangeEven')}
                    </span>
                  </Label>
                  <Label className="flex items-center gap-2 cursor-pointer" htmlFor="page-mode-custom">
                    <RadioGroupItem
                      value="custom"
                      disabled={isProcessing} id="page-mode-custom"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tTools('rangeCustom')}
                    </span>
                  </Label>
                </RadioGroup>

                {pageMode === 'custom' && (
                  <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                    <Input
                      type="text"
                      value={customPageRange}
                      onChange={(e) => setCustomPageRange(e.target.value)}
                      placeholder={tTools('rangePlaceholder')}
                      className="w-full"
                      disabled={isProcessing}
                    />
                  </div>
                )}
              </div>
            </Card>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleProcess}
                disabled={
                  !file ||
                  isProcessing ||
                  (watermarkType === 'text' && !watermarkText.trim()) ||
                  (watermarkType === 'image' && !imageFile)
                }
                loading={isProcessing}
              >
                {isProcessing ? t('status.processing') : tTools('addButton')}
              </Button>
              {result && (
                <DownloadButton
                  file={result}
                  filename={file.name.replace('.pdf', '_watermarked.pdf')}
                  variant="secondary"
                  size="lg"
                  showFileSize
                />
              )}
            </div>

            {isProcessing && (
              <ProcessingProgress
                progress={progress}
                status={status}
                message={progressMessage}
                onCancel={() => {
                  cancelledRef.current = true;
                  setStatus('idle');
                }}
                showPercentage
              />
            )}

            {status === 'complete' && result && (
              <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400">
                <p className="text-sm font-medium">{tTools('successMessage')}</p>
              </div>
            )}
          </div>

          {/* Interactive Preview Column */}
          <div className="space-y-3 flex flex-col items-center">
            {/* Page Navigation Header */}
            <div className="w-full flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {tTools('previewTitle')}
                </h3>
                {isRenderingPage && (
                  <span className="text-xs text-blue-600 dark:text-blue-400 animate-pulse">
                    {tTools('previewGenerating')}
                  </span>
                )}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg text-sm">
                  <Button variant="ghost" size="icon-sm"
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage <= 1 || isRenderingPage}

                    aria-label="Previous Page"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>

                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-300">
                    <span>{tTools('page')}</span>
                    <Input
                      type="number"
                      min={1}
                      max={totalPages}
                      value={currentPage}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (val >= 1 && val <= totalPages) {
                          setCurrentPage(val);
                        }
                      }}
                      className="w-10 text-center"
                    />
                    <span>{tTools('of')} {totalPages} {tTools('pages')}</span>
                  </div>

                  <Button variant="ghost" size="icon-sm"
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage >= totalPages || isRenderingPage}

                    aria-label="Next Page"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              )}
            </div>

            {/* Hint */}
            {!repeatWatermark && (
              <p className="text-xs text-gray-500 dark:text-gray-400 self-start px-2">
                💡 {tTools('dragHint')}
              </p>
            )}

            {/* Preview Box & Overlay Container */}
            <div className="w-full flex justify-center p-3 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-900/40 overflow-auto min-h-[500px]">
              <div
                ref={previewContainerRef}
                className="relative overflow-hidden select-none inline-block shadow-lg rounded bg-white transition-shadow hover:shadow-xl"
                style={{ touchAction: 'none' }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                {/* PDF Page Canvas */}
                <canvas ref={previewCanvasRef} className="block max-w-full h-auto" />

                {/* Repeating Watermark Canvas */}
                {repeatWatermark && (
                  <canvas
                    ref={tileCanvasRef}
                    className="absolute top-0 left-0 pointer-events-none w-full h-full"
                  />
                )}

                {/* Interactive Single Watermark Overlay */}
                {!repeatWatermark && (
                  <div
                    ref={watermarkBoxRef}
                    className="absolute pointer-events-auto"
                    style={{
                      left: `${watermarkX * 100}%`,
                      top: `${watermarkY * 100}%`,
                      transform: `translate(-50%, -50%) rotate(${
                        watermarkType === 'text' ? textAngle : imageAngle
                      }deg)`,
                      transformOrigin: 'center center',
                    }}
                  >
                    <div className="relative border-2 border-dashed border-blue-500/80 cursor-grab active:cursor-grabbing p-1 rounded group">
                      {watermarkType === 'text' ? (
                        <div
                          className="whitespace-nowrap select-none font-bold"
                          style={{
                            fontSize: `${Math.max(10, Math.round(fontSize * displayScale))}px`,
                            color: textColor,
                            opacity: textOpacity,
                            lineHeight: 1.1,
                            fontFamily: '"Noto Sans SC", sans-serif',
                          }}
                        >
                          {watermarkText || 'CONFIDENTIAL'}
                        </div>
                      ) : imagePreviewUrl ? (
                        <img
                          src={imagePreviewUrl}
                          alt="Watermark Preview"
                          className="select-none pointer-events-none block"
                          style={{
                            maxWidth: `${Math.max(20, Math.round((imageScale / 100) * (containerDimensions.width || 400) * 0.5))}px`,
                            opacity: imageOpacity,
                          }}
                        />
                      ) : (
                        <div className="text-xs text-gray-400 p-2 border border-gray-300 rounded bg-white/50">
                          {tTools('selectImage')}
                        </div>
                      )}

                      {/* 4 Corner Resize Handles */}
                      <div
                        data-handle="nw"
                        className="resize-handle absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-sm cursor-nw-resize pointer-events-auto z-10 hover:scale-125 transition-transform"
                      />
                      <div
                        data-handle="ne"
                        className="resize-handle absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-sm cursor-ne-resize pointer-events-auto z-10 hover:scale-125 transition-transform"
                      />
                      <div
                        data-handle="sw"
                        className="resize-handle absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-sm cursor-sw-resize pointer-events-auto z-10 hover:scale-125 transition-transform"
                      />
                      <div
                        data-handle="se"
                        className="resize-handle absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-600 rounded-sm cursor-se-resize pointer-events-auto z-10 hover:scale-125 transition-transform"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WatermarkTool;
