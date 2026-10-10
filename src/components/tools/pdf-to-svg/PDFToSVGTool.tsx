'use client';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Eye, X, FileText, CircleAlert, CheckCircle2 } from 'lucide-react';
import { pdfToSVG, type PDFToSVGOptions, type SVGResult } from '@/lib/pdf/processors/pdf-to-svg';
import type { UploadedFile, ProcessOutput } from '@/types/pdf';
import JSZip from 'jszip';
import { saveBlobFile } from '@/lib/tauri-bridge';

/**
 * Generate a unique ID for files
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export interface PDFToSVGToolProps {
    /** Custom class name */
    className?: string;
}

/**
 * PDFToSVGTool Component
 *
 * Converts PDF pages to SVG (Scalable Vector Graphics).
 * Supports preview and individual export.
 */
export function PDFToSVGTool({ className = '' }: PDFToSVGToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    // State
    const [file, setFile] = useState<UploadedFile | null>(null);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [result, setResult] = useState<Blob | Blob[] | null>(null);
    const [svgResults, setSvgResults] = useState<SVGResult[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [previewIndex, setPreviewIndex] = useState<number | null>(null);
    const previewTriggerRef = useRef<HTMLButtonElement | null>(null);
    const direction = useLocale() === 'ar' ? 'rtl' : 'ltr';

    // Options state
    const [scale, setScale] = useState(2);
    const [pageRange, setPageRange] = useState('');

    // Ref for cancellation
    const cancelledRef = useRef(false);

    /**
     * Handle file selected from uploader
     */
    const handleFilesSelected = useCallback((newFiles: File[]) => {
        if (newFiles.length > 0) {
            const uploadedFile: UploadedFile = {
                id: generateId(),
                file: newFiles[0],
                status: 'pending' as const,
            };
            setFile(uploadedFile);
            setError(null);
            setResult(null);
            setSvgResults([]);
            setPreviewIndex(null);
        }
    }, []);

    /**
     * Handle file upload error
     */
    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    /**
     * Remove the file
     */
    const handleRemoveFile = useCallback(() => {
        setFile(null);
        setResult(null);
        setSvgResults([]);
        setError(null);
        setStatus('idle');
        setProgress(0);
        setPreviewIndex(null);
    }, []);

    /**
     * Parse page range string to array of page numbers
     */
    const parsePageRange = (rangeStr: string): number[] => {
        if (!rangeStr.trim()) return [];

        const pages: number[] = [];
        const parts = rangeStr.split(',');

        for (const part of parts) {
            const trimmed = part.trim();
            if (trimmed.includes('-')) {
                const [start, end] = trimmed.split('-').map(s => parseInt(s.trim(), 10));
                if (!isNaN(start) && !isNaN(end)) {
                    for (let i = start; i <= end; i++) {
                        if (!pages.includes(i)) pages.push(i);
                    }
                }
            } else {
                const num = parseInt(trimmed, 10);
                if (!isNaN(num) && !pages.includes(num)) {
                    pages.push(num);
                }
            }
        }

        return pages.sort((a, b) => a - b);
    };

    /**
     * Handle convert operation
     */
    const handleConvert = useCallback(async () => {
        if (!file) {
            setError('Please upload a PDF file.');
            return;
        }

        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResult(null);
        setSvgResults([]);
        setPreviewIndex(null);

        const options: Partial<PDFToSVGOptions> = {
            scale,
            pages: parsePageRange(pageRange),
        };

        try {
            const output: ProcessOutput = await pdfToSVG(
                file.file,
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
                setResult(output.result);
                if (output.metadata?.svgResults) {
                    setSvgResults(output.metadata.svgResults as SVGResult[]);
                }
                setStatus('complete');
            } else {
                setError(output.error?.message || 'Failed to convert PDF to SVG.');
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current) {
                setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
                setStatus('error');
            }
        }
    }, [file, scale, pageRange]);

    /**
     * Handle cancel operation
     */
    const handleCancel = useCallback(() => {
        cancelledRef.current = true;
        setStatus('idle');
        setProgress(0);
    }, []);

    /**
     * Download all SVGs as ZIP
     */
    const handleDownloadZip = useCallback(async () => {
        if (!result || !Array.isArray(result) || !file) return;

        const zip = new JSZip();
        const baseName = file.file.name.replace(/\.pdf$/i, '');

        result.forEach((blob, index) => {
            zip.file(`${baseName}_page_${index + 1}.svg`, blob);
        });

        const zipBlob = await zip.generateAsync({ type: 'blob' });
        await saveBlobFile(zipBlob, `${baseName}_svg.zip`);
    }, [result, file]);

    /**
     * Format file size
     */
    const formatSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    /**
     * Open preview modal
     */
    const openPreview = (index: number, trigger: HTMLButtonElement) => {
        previewTriggerRef.current = trigger;
        setPreviewIndex(index);
    };

    /**
     * Close preview modal
     */
    const closePreview = () => {
        setPreviewIndex(null);
    };

    const isProcessing = status === 'processing' || status === 'uploading';
    const canConvert = file && !isProcessing;
    const isMultipleSVGs = Array.isArray(result) && result.length > 1;

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* File Upload Area */}
            <FileUploader
                accept={['application/pdf', '.pdf']}
                multiple={false}
                maxFiles={1}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('pdfToSvg.uploadLabel') || 'Upload PDF'}
                description={tTools('pdfToSvg.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
            />

            {/* Error Message */}
            {error && (
                <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>
            )}

            {/* File Info */}
            {file && (
                <Card className="p-6"  >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                                <FileText className="size-5" aria-hidden="true" />
                            </div>
                            <div>
                                <p className="font-medium text-foreground">{file.file.name}</p>
                                <p className="text-sm text-muted-foreground">{formatSize(file.file.size)}</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleRemoveFile}
                            disabled={isProcessing}
                        >
                            {t('buttons.remove') || 'Remove'}
                        </Button>
                    </div>
                </Card>
            )}

            {/* Options Panel */}
            {file && (
                <Card className="p-6" >
                    <h3 className="text-lg font-medium text-foreground mb-4">
                        {tTools('pdfToSvg.optionsTitle') || 'Conversion Options'}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Scale/Resolution */}
                        <div>
                            <Label className="block mb-2" htmlFor="pdftosvgtool-field-1">
                                {tTools('pdfToSvg.resolution') || 'Resolution'}
                            </Label>
                            <NativeSelect
                                value={scale}
                                onChange={(e) => setScale(parseFloat(e.target.value))}
                                disabled={isProcessing}
                                className="w-full" id="pdftosvgtool-field-1" aria-label={tTools('pdfToSvg.resolution') || 'Resolution'}
                            >
                                <NativeSelectOption value="1">72 DPI (Low)</NativeSelectOption>
                                <NativeSelectOption value="2">144 DPI (Medium)</NativeSelectOption>
                                <NativeSelectOption value="3">216 DPI (High)</NativeSelectOption>
                                <NativeSelectOption value="4">288 DPI (Very High)</NativeSelectOption>
                            </NativeSelect>
                            <p className="text-xs text-muted-foreground mt-1">
                                {tTools('pdfToSvg.resolutionHint') || 'Higher resolution produces larger, more detailed SVG files.'}
                            </p>
                        </div>

                        {/* Page Range */}
                        <div>
                            <Label className="block mb-2" htmlFor="pdftosvgtool-field-2">
                                {tTools('pdfToSvg.pageRange') || 'Page Range'}
                            </Label>
                            <Input
                                type="text"
                                value={pageRange}
                                onChange={(e) => setPageRange(e.target.value)}
                                placeholder={tTools('pdfToSvg.pageRangePlaceholder') || 'e.g., 1-3, 5, 7'}
                                disabled={isProcessing}
                                className="w-full" id="pdftosvgtool-field-2" aria-label={tTools('pdfToSvg.pageRange') || 'Page Range'}
                            />
                            <p className="text-xs text-muted-foreground mt-1">
                                {tTools('pdfToSvg.pageRangeHint') || 'Leave empty for all pages'}
                            </p>
                        </div>
                    </div>
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
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    variant="default"
                    size="lg"
                    onClick={handleConvert}
                    disabled={!canConvert}
                    loading={isProcessing}
                >
                    {isProcessing
                        ? (t('status.processing') || 'Processing...')
                        : (tTools('pdfToSvg.convertButton') || 'Convert to SVG')
                    }
                </Button>

                {result && !isMultipleSVGs && (
                    <DownloadButton
                        file={result as Blob}
                        filename={`${file?.file.name.replace(/\.pdf$/i, '')}.svg`}
                        variant="secondary"
                        size="lg"
                        showFileSize
                    />
                )}

                {isMultipleSVGs && (
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={handleDownloadZip}
                    >
                        {tTools('pdfToSvg.downloadZip') || `Download All (${(result as Blob[]).length} SVGs)`}
                    </Button>
                )}
            </div>

            {/* SVG Preview Grid */}
            {svgResults.length > 0 && (
                <Card className="p-6"  >
                    <h3 className="text-lg font-medium text-foreground mb-4">
                        {tTools('pdfToSvg.previewTitle') || 'Converted SVGs'} ({svgResults.length})
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {svgResults.map((svgResult, index) => (
                            <div key={index} className="relative group">
                                <Button variant="outline" aria-label={`${tTools('pdfToSvg.previewTitle')}: ${svgResult.pageNumber}`} className="aspect-[3/4] h-auto w-full overflow-hidden p-0" onClick={event => openPreview(index, event.currentTarget)}>
                                    <div aria-hidden="true" className="flex h-full w-full items-center justify-center" dangerouslySetInnerHTML={{ __html: svgResult.svg.replace(/<\?xml[^>]*\?>/, '').replace(/width="[^"]*"/, 'width="100%"').replace(/height="[^"]*"/, 'height="100%"') }} />
                                </Button>
                                <Badge variant="secondary" className="pointer-events-none absolute start-2 top-2">{svgResult.pageNumber}</Badge>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <Button variant="outline" size="icon-sm" aria-label={`${tTools('pdfToSvg.previewPage')}: ${svgResult.pageNumber}`} onClick={event => openPreview(index, event.currentTarget)}><Eye aria-hidden="true" /></Button>
                                    <DownloadButton file={svgResult.blob} filename={`${file?.file.name.replace(/\.pdf$/i, '')}_page_${svgResult.pageNumber}.svg`} variant="outline" size="sm" aria-label={`${t('buttons.download')}: ${svgResult.pageNumber}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            )}

            <Dialog open={previewIndex !== null} onOpenChange={open => { if (!open) closePreview(); }}>
                <DialogContent dir={direction} showCloseButton={false} className="sm:max-w-4xl" onCloseAutoFocus={event => { event.preventDefault(); previewTriggerRef.current?.focus(); }}>
                    <DialogHeader><DialogTitle className="pe-8">{tTools('pdfToSvg.previewPage')} {previewIndex !== null && svgResults[previewIndex]?.pageNumber}</DialogTitle><DialogDescription>{file?.file.name}</DialogDescription></DialogHeader>
                    <DialogClose asChild><Button variant="ghost" size="icon-sm" aria-label={t('buttons.close')} className="absolute end-3 top-3"><X aria-hidden="true" /></Button></DialogClose>
                    {previewIndex !== null && svgResults[previewIndex] && <>
                        <div className="max-h-[65dvh] overflow-auto rounded-md border bg-white p-4 text-black" dangerouslySetInnerHTML={{ __html: svgResults[previewIndex].svg.replace(/<\?xml[^>]*\?>/, '') }} />
                        <DownloadButton file={svgResults[previewIndex].blob} filename={`${file?.file.name.replace(/\.pdf$/i, '')}_page_${svgResults[previewIndex].pageNumber}.svg`} variant="secondary" size="sm" />
                    </>}
                </DialogContent>
            </Dialog>

            {/* Success Message */}
            {status === 'complete' && result && (
                <Alert role="status"><CheckCircle2 aria-hidden="true" /><AlertTitle>{t('status.complete')}</AlertTitle><AlertDescription>{tTools('pdfToSvg.successMessage')}</AlertDescription></Alert>
            )}
        </div>
    );
}

export default PDFToSVGTool;
