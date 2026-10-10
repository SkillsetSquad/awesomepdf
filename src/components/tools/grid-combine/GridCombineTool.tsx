'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { ChevronDown as UIChevronDown, ChevronUp as UIChevronUp, FileText as UIFileText, GripVertical as UIGripVertical, Info as UIInfo, X as UIX } from 'lucide-react';

import { Slider } from '@/components/ui/slider';

import { Checkbox } from '@/components/ui/checkbox';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { createGridCombinePDF, type GridCombineOptions } from '@/lib/pdf/processors/grid-combine';
import { loadPdfjs } from '@/lib/pdf/loader';
import type { UploadedFile, ProcessOutput } from '@/types/pdf';

/**
 * Generate a unique ID for files
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Extended file type with thumbnail
 */
interface ExtendedUploadedFile extends UploadedFile {
    thumbnail?: string;
    pageCount?: number;
}

export interface GridCombineToolProps {
    /** Custom class name */
    className?: string;
}

/**
 * GridCombineTool Component
 *
 * Provides the UI for combining multiple PDFs into a grid layout.
 */
export function GridCombineTool({ className = '' }: GridCombineToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    // State
    const [files, setFiles] = useState<ExtendedUploadedFile[]>([]);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [result, setResult] = useState<Blob | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [errorDetails, setErrorDetails] = useState<string | null>(null);

    // Options
    const [gridLayout, setGridLayout] = useState<GridCombineOptions['gridLayout']>('2x2');
    const [pageSize, setPageSize] = useState<GridCombineOptions['pageSize']>('A4');
    const [orientation, setOrientation] = useState<GridCombineOptions['orientation']>('landscape');
    const [useMargins, setUseMargins] = useState(true);
    const [addBorder, setAddBorder] = useState(true);
    const [borderColor, setBorderColor] = useState('#CCCCCC');
    const [spacing, setSpacing] = useState(10);
    const [fillMode, setFillMode] = useState<GridCombineOptions['fillMode']>('leave-empty');
    const [pageMode, setPageMode] = useState<GridCombineOptions['pageMode']>('first-page-only');

    // Drag state
    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
    const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

    // Ref for cancellation
    const cancelledRef = useRef(false);

    /**
     * Generate thumbnail for PDF file
     */
    const generateThumbnail = useCallback(async (file: File): Promise<{ thumbnail: string; pageCount: number } | null> => {
        try {
            // Use the centralized loader which configures the worker correctly
            const pdfjsLib = await loadPdfjs();

            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const pageCount = pdf.numPages;

            // Get first page
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({ scale: 0.3 });

            // Create canvas
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (!context) return null;

            canvas.width = viewport.width;
            canvas.height = viewport.height;

            await page.render({
                canvasContext: context,
                viewport: viewport,
            }).promise;

            const thumbnail = canvas.toDataURL('image/jpeg', 0.7);
            return { thumbnail, pageCount };
        } catch (err) {
            console.error('Failed to generate thumbnail:', err);
            return null;
        }
    }, []);

    /**
     * Handle files selected from uploader
     */
    const handleFilesSelected = useCallback(async (newFiles: File[]) => {
        const uploadedFiles: ExtendedUploadedFile[] = newFiles.map(file => ({
            id: generateId(),
            file,
            status: 'pending' as const,
        }));

        setFiles(prev => [...prev, ...uploadedFiles]);
        setError(null);
        setErrorDetails(null);
        setResult(null);

        // Generate thumbnails in background
        for (const uploadedFile of uploadedFiles) {
            const result = await generateThumbnail(uploadedFile.file);
            if (result) {
                setFiles(prev => prev.map(f =>
                    f.id === uploadedFile.id
                        ? { ...f, thumbnail: result.thumbnail, pageCount: result.pageCount }
                        : f
                ));
            }
        }
    }, [generateThumbnail]);

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
        setErrorDetails(null);
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
     * Handle combine operation
     */
    const handleCombine = useCallback(async () => {
        if (files.length < 2) {
            setError(tTools('gridCombine.minFilesError') || 'Please add at least 2 PDF files to combine.');
            return;
        }

        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setErrorDetails(null);
        setResult(null);

        const options: Partial<GridCombineOptions> = {
            gridLayout,
            pageSize,
            orientation,
            useMargins,
            addBorder,
            borderColor,
            spacing,
            fillMode,
            pageMode,
        };

        try {
            const output: ProcessOutput = await createGridCombinePDF(
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
                setError(output.error?.message || 'Failed to combine PDF files.');
                setErrorDetails(output.error?.details || null);
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current) {
                const errMsg = err instanceof Error ? err.message : 'An unexpected error occurred.';
                const errStack = err instanceof Error ? err.stack : undefined;
                setError(errMsg);
                setErrorDetails(errStack || null);
                setStatus('error');
            }
        }
    }, [files, gridLayout, pageSize, orientation, useMargins, addBorder, borderColor, spacing, fillMode, pageMode, tTools]);

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
    const canCombine = files.length >= 2 && !isProcessing;

    // Calculate preview info
    const [cols, rows] = gridLayout.split('x').map(Number);
    const cellsPerPage = cols * rows;

    // Calculate total pages based on pageMode
    const totalSourcePages = pageMode === 'all-pages'
        ? files.reduce((sum, f) => sum + (f.pageCount || 1), 0)
        : files.length;
    const outputPages = Math.ceil(totalSourcePages / cellsPerPage);

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* File Upload Area */}
            <FileUploader
                accept={['application/pdf', '.pdf']}
                multiple
                maxFiles={100}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('gridCombine.uploadLabel') || 'Upload PDF Files'}
                description={tTools('gridCombine.uploadDescription') || 'Drag and drop multiple PDF files here.'}
            />

            {/* Error Message */}
            {error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                    <p className="text-sm font-medium">{error}</p>
                    {errorDetails && (
                        <details className="mt-2">
                            <summary className="text-xs cursor-pointer hover:underline">
                                {tTools('gridCombine.showErrorDetails') || 'Show error details'}
                            </summary>
                            <pre className="mt-2 p-2 text-xs bg-red-100 rounded overflow-x-auto whitespace-pre-wrap break-all max-h-40 overflow-y-auto">{errorDetails}</pre>
                        </details>
                    )}
                </AlertDescription></Alert>
            )}

            {/* Preview Info */}
            {files.length > 0 && (
                <Card  className="">
                    <div className="flex items-center gap-2 text-blue-800">
                        <UIInfo className="w-5 h-5" aria-hidden="true" />
                        <p className="text-sm font-medium">
                            {pageMode === 'all-pages'
                                ? tTools('gridCombine.previewInfoAllPages', { fileCount: files.length, totalPages: totalSourcePages, layout: gridLayout, outputPages })
                                : tTools('gridCombine.previewInfoFirstPage', { fileCount: files.length, layout: gridLayout, outputPages })
                            }
                        </p>
                    </div>
                </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* File List (2/3 width) */}
                <div className="lg:col-span-2 space-y-4">
                    {files.length > 0 && (
                        <Card className="p-6"  >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium text-foreground">
                                    {tTools('gridCombine.filesTitle') || 'Files to Combine'} ({files.length})
                                </h3>
                                <Button variant="ghost" size="sm" onClick={handleClearAll} disabled={isProcessing}>
                                    {t('buttons.clearAll') || 'Clear All'}
                                </Button>
                            </div>

                            <p className="text-sm text-muted-foreground mb-4">
                                {tTools('gridCombine.reorderHint') || 'Drag and drop to reorder files.'}
                            </p>

                            <ul className="space-y-2 max-h-[500px] overflow-y-auto pr-2" role="list">
                                {files.map((file, index) => (
                                    <li
                                        key={file.id}
                                        draggable={!isProcessing}
                                        onDragStart={(e) => handleDragStart(e, index)}
                                        onDragOver={(e) => handleDragOver(e, index)}
                                        onDrop={(e) => handleDrop(e, index)}
                                        onDragEnd={handleDragEnd}
                                        className={`
                                            flex items-center gap-3 p-3 rounded-md border transition-all duration-200
                                            ${draggedIndex === index ? 'opacity-50 border-dashed' : ''}
                                            ${dragOverIndex === index ? 'border-primary bg-primary/5' : 'border-border'}
                                            ${!isProcessing ? 'cursor-grab hover:bg-muted/50' : ''}
                                        `}
                                    >
                                        {/* Drag Handle */}
                                        <div className="flex-shrink-0 text-muted-foreground">
                                            <UIGripVertical className="w-5 h-5" aria-hidden="true" />
                                        </div>

                                        {/* File Number */}
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-medium flex items-center justify-center">
                                            {index + 1}
                                        </span>

                                        {/* Thumbnail or PDF Icon */}
                                        <div className="flex-shrink-0 w-12 h-16 rounded overflow-hidden bg-muted flex items-center justify-center">
                                            {file.thumbnail ? (
                                                <img src={file.thumbnail} alt={file.file.name} className="w-full h-full object-contain" />
                                            ) : (
                                                <UIFileText className="w-8 h-8 text-red-500" aria-hidden="true" />
                                            )}
                                        </div>

                                        {/* File Info */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-foreground truncate">
                                                {file.file.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {formatSize(file.file.size)}
                                                {file.pageCount && ` • ${file.pageCount} ${file.pageCount === 1 ? (tTools('gridCombine.page') || 'page') : (tTools('gridCombine.pages') || 'pages')}`}
                                            </p>
                                        </div>

                                        {/* Reorder Buttons */}
                                        <div className="flex-shrink-0 flex items-center gap-1">
                                            <Button variant="ghost" size="icon-sm"
                                                type="button"
                                                onClick={() => handleMoveUp(index)}
                                                disabled={index === 0 || isProcessing}

                                            >
                                                <UIChevronUp className="w-4 h-4" aria-hidden="true" />
                                            </Button>
                                            <Button variant="ghost" size="icon-sm"
                                                type="button"
                                                onClick={() => handleMoveDown(index)}
                                                disabled={index === files.length - 1 || isProcessing}

                                            >
                                                <UIChevronDown className="w-4 h-4" aria-hidden="true" />
                                            </Button>
                                        </div>

                                        {/* Remove Button */}
                                        <Button variant="ghost" size="icon-sm"
                                            type="button"
                                            onClick={() => handleRemoveFile(file.id)}
                                            disabled={isProcessing}
                                            className="flex-shrink-0"
                                        >
                                            <UIX className="w-5 h-5" aria-hidden="true" />
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}
                </div>

                {/* Options Panel (1/3 width) */}
                <div className="lg:col-span-1">
                    {files.length > 0 && (
                        <Card  className="sticky top-4">
                            <h3 className="text-lg font-medium text-foreground mb-4">
                                {tTools('gridCombine.optionsTitle') || 'Layout Options'}
                            </h3>

                            <div className="space-y-4">
                                {/* Grid Layout */}
                                <div>
                                    <Label htmlFor="gridLayout" className="block mb-1">
                                        {tTools('gridCombine.gridLayout') || 'Grid Layout'}
                                    </Label>
                                    <NativeSelect
                                        id="gridLayout"
                                        value={gridLayout}
                                        onChange={(e) => setGridLayout(e.target.value as GridCombineOptions['gridLayout'])}
                                        disabled={isProcessing}
                                        className="w-full" aria-label={tTools('gridCombine.gridLayout') || 'Grid Layout'}
                                    >
                                        <NativeSelectOption value="1x2">1×2 (2 {tTools('gridCombine.cells') || 'cells'})</NativeSelectOption>
                                        <NativeSelectOption value="2x1">2×1 (2 {tTools('gridCombine.cells') || 'cells'})</NativeSelectOption>
                                        <NativeSelectOption value="2x2">2×2 (4 {tTools('gridCombine.cells') || 'cells'})</NativeSelectOption>
                                        <NativeSelectOption value="2x3">2×3 (6 {tTools('gridCombine.cells') || 'cells'})</NativeSelectOption>
                                        <NativeSelectOption value="3x2">3×2 (6 {tTools('gridCombine.cells') || 'cells'})</NativeSelectOption>
                                        <NativeSelectOption value="3x3">3×3 (9 {tTools('gridCombine.cells') || 'cells'})</NativeSelectOption>
                                        <NativeSelectOption value="4x4">4×4 (16 {tTools('gridCombine.cells') || 'cells'})</NativeSelectOption>
                                    </NativeSelect>

                                    {/* 布局可视化预览 - 带缩略图 */}
                                    <div className="mt-3 p-3 bg-muted/30 rounded-md">
                                        <p className="text-xs text-muted-foreground mb-2">
                                            {tTools('gridCombine.layoutPreview') || 'Layout Preview'}:
                                        </p>
                                        <div
                                            className="grid mx-auto border border-border rounded bg-white transition-all duration-300 ease-in-out"
                                            style={{
                                                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                                                gridTemplateRows: `repeat(${rows}, 1fr)`,
                                                width: orientation === 'landscape' ? '160px' : '120px',
                                                height: orientation === 'landscape' ? '120px' : '160px',
                                                gap: `${spacing * 0.3}px`,
                                                padding: useMargins ? '12px' : '4px',
                                            }}
                                        >
                                            {Array.from({ length: cellsPerPage }).map((_, idx) => {
                                                const file = files[idx];
                                                const hasContent = idx < files.length ||
                                                    (fillMode === 'repeat' && files.length > 0) ||
                                                    (fillMode === 'stretch-last' && files.length > 0 && idx >= files.length);
                                                const repeatFile = fillMode === 'repeat' && files.length > 0
                                                    ? files[idx % files.length]
                                                    : fillMode === 'stretch-last' && files.length > 0 && idx >= files.length
                                                        ? files[files.length - 1]
                                                        : null;
                                                const displayFile = file || repeatFile;

                                                return (
                                                    <div
                                                        key={idx}
                                                        className={`
                                                            flex items-center justify-center text-xs font-medium rounded-sm overflow-hidden
                                                            ${displayFile
                                                                ? 'bg-primary/10'
                                                                : 'bg-muted border border-dashed border-border'
                                                            }
                                                        `}
                                                        title={displayFile?.file.name}
                                                    >
                                                        {displayFile?.thumbnail ? (
                                                            <img
                                                                src={displayFile.thumbnail}
                                                                alt=""
                                                                className={`w-full h-full object-contain ${!file && repeatFile ? 'opacity-50' : ''}`}
                                                            />
                                                        ) : displayFile ? (
                                                            <span className={`text-primary ${!file && repeatFile ? 'opacity-50' : ''}`}>
                                                                {idx < files.length ? idx + 1 : '↺'}
                                                            </span>
                                                        ) : null}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <p className="text-xs text-center text-muted-foreground mt-2">
                                            {cols} {tTools('gridCombine.columns') || 'columns'} × {rows} {tTools('gridCombine.rows') || 'rows'}
                                        </p>
                                    </div>
                                </div>

                                {/* Page Mode */}
                                <div>
                                    <Label htmlFor="pageMode" className="block mb-1">
                                        {tTools('gridCombine.pageMode') || 'Page Mode'}
                                    </Label>
                                    <NativeSelect
                                        id="pageMode"
                                        value={pageMode}
                                        onChange={(e) => setPageMode(e.target.value as GridCombineOptions['pageMode'])}
                                        disabled={isProcessing}
                                        className="w-full" aria-label={tTools('gridCombine.pageMode') || 'Page Mode'}
                                    >
                                        <NativeSelectOption value="first-page-only">{tTools('gridCombine.firstPageOnly') || 'First page only'}</NativeSelectOption>
                                        <NativeSelectOption value="all-pages">{tTools('gridCombine.allPages') || 'All pages'}</NativeSelectOption>
                                    </NativeSelect>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {pageMode === 'all-pages'
                                            ? (tTools('gridCombine.allPagesHint') || 'Include all pages from each PDF in the grid.')
                                            : (tTools('gridCombine.firstPageOnlyHint') || 'Only use the first page from each PDF.')
                                        }
                                    </p>
                                </div>

                                {/* Fill Mode */}
                                <div>
                                    <Label htmlFor="fillMode" className="block mb-1">
                                        {tTools('gridCombine.fillMode') || 'Fill Mode'}
                                    </Label>
                                    <NativeSelect
                                        id="fillMode"
                                        value={fillMode}
                                        onChange={(e) => setFillMode(e.target.value as GridCombineOptions['fillMode'])}
                                        disabled={isProcessing}
                                        className="w-full" aria-label={tTools('gridCombine.fillMode') || 'Fill Mode'}
                                    >
                                        <NativeSelectOption value="leave-empty">{tTools('gridCombine.leaveEmpty') || 'Leave empty cells'}</NativeSelectOption>
                                        <NativeSelectOption value="repeat">{tTools('gridCombine.repeat') || 'Repeat from start'}</NativeSelectOption>
                                        <NativeSelectOption value="stretch-last">{tTools('gridCombine.stretchLast') || 'Repeat last page'}</NativeSelectOption>
                                    </NativeSelect>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {tTools('gridCombine.fillModeHint') || 'How to fill empty cells when files are fewer than grid cells.'}
                                    </p>
                                </div>

                                {/* Page Size */}
                                <div>
                                    <Label htmlFor="pageSize" className="block mb-1">
                                        {tTools('gridCombine.pageSize') || 'Page Size'}
                                    </Label>
                                    <NativeSelect
                                        id="pageSize"
                                        value={pageSize}
                                        onChange={(e) => setPageSize(e.target.value as GridCombineOptions['pageSize'])}
                                        disabled={isProcessing}
                                        className="w-full" aria-label={tTools('gridCombine.pageSize') || 'Page Size'}
                                    >
                                        <NativeSelectOption value="A4">A4</NativeSelectOption>
                                        <NativeSelectOption value="Letter">Letter</NativeSelectOption>
                                        <NativeSelectOption value="Legal">Legal</NativeSelectOption>
                                        <NativeSelectOption value="A3">A3</NativeSelectOption>
                                    </NativeSelect>
                                </div>

                                {/* Orientation */}
                                <div>
                                    <Label htmlFor="orientation" className="block mb-1">
                                        {tTools('gridCombine.orientation') || 'Orientation'}
                                    </Label>
                                    <NativeSelect
                                        id="orientation"
                                        value={orientation}
                                        onChange={(e) => setOrientation(e.target.value as GridCombineOptions['orientation'])}
                                        disabled={isProcessing}
                                        className="w-full" aria-label={tTools('gridCombine.orientation') || 'Orientation'}
                                    >
                                        <NativeSelectOption value="landscape">{t('options.landscape') || 'Landscape'}</NativeSelectOption>
                                        <NativeSelectOption value="portrait">{t('options.portrait') || 'Portrait'}</NativeSelectOption>
                                    </NativeSelect>
                                </div>

                                {/* Spacing */}
                                <div>
                                    <Label htmlFor="spacing" className="block mb-1">
                                        {tTools('gridCombine.spacing') || 'Spacing'} ({spacing}px)
                                    </Label>
                                    <Slider
                                        id="spacing"
                                        min={0}
                                        max={50}
                                        step={1}
                                        value={[spacing]}
                                        onValueChange={(values) => setSpacing(Number(String(values[0])))}
                                        disabled={isProcessing}
                                        className="w-full" aria-label={tTools('gridCombine.spacing')}
                                    />
                                </div>

                                {/* Margins & Borders */}
                                <div className="space-y-2 pt-2 border-t border-border">
                                    <div className="flex items-center gap-2">
                                        <Checkbox

                                            id="useMargins"
                                            checked={useMargins}
                                            onCheckedChange={(checked) => setUseMargins((checked === true))}
                                            disabled={isProcessing}
                                             aria-label={tTools('gridCombine.useMargins') || 'Add margins'}
                                        />
                                        <Label htmlFor="useMargins" className="">
                                            {tTools('gridCombine.useMargins') || 'Add margins'}
                                        </Label>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Checkbox

                                            id="addBorder"
                                            checked={addBorder}
                                            onCheckedChange={(checked) => setAddBorder((checked === true))}
                                            disabled={isProcessing}
                                             aria-label={tTools('gridCombine.addBorder') || 'Add borders'}
                                        />
                                        <Label htmlFor="addBorder" className="">
                                            {tTools('gridCombine.addBorder') || 'Add borders'}
                                        </Label>
                                    </div>

                                    {addBorder && (
                                        <div className="pl-6">
                                            <Label htmlFor="borderColor" className="block text-muted-foreground mb-1">
                                                {tTools('gridCombine.borderColor') || 'Border Color'}
                                            </Label>
                                            <Input
                                                type="color"
                                                id="borderColor"
                                                value={borderColor}
                                                onChange={(e) => setBorderColor(e.target.value)}
                                                disabled={isProcessing}
                                                className="w-full h-8 cursor-pointer" aria-label={tTools('gridCombine.borderColor') || 'Border Color'}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
            </div>

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
            {files.length > 0 && (
                <div className="flex flex-wrap items-center gap-4">
                    <Button
                        variant="default"
                        size="lg"
                        onClick={handleCombine}
                        disabled={!canCombine}
                        loading={isProcessing}
                    >
                        {isProcessing
                            ? (t('status.processing') || 'Processing...')
                            : (tTools('gridCombine.combineButton') || 'Combine PDFs')
                        }
                    </Button>

                    {result && (
                        <DownloadButton
                            file={result}
                            filename={`grid_combine_${files.length}_files.pdf`}
                            variant="secondary"
                            size="lg"
                            showFileSize
                        />
                    )}
                </div>
            )}

            {/* Success Message */}
            {status === 'complete' && result && (
                <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
                    <p className="text-sm font-medium">
                        {tTools('gridCombine.successMessage') || 'PDFs combined successfully! Click the download button to save your file.'}
                    </p>
                </AlertDescription></Alert>
            )}
        </div>
    );
}

export default GridCombineTool;
