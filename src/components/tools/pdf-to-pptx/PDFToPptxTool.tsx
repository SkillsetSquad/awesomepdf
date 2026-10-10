'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Presentation, Trash2, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { pdfToPptx } from '@/lib/pdf/processors/pdf-to-pptx';
import type { UploadedFile, ProcessOutput } from '@/types/pdf';

/**
 * Generate a unique ID for files
 */
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export interface PDFToPptxToolProps {
    /** Custom class name */
    className?: string;
}

/**
 * PDFToPptxTool Component
 *
 * Converts PDF files to PowerPoint presentations (PPTX).
 */
export function PDFToPptxTool({ className = '' }: PDFToPptxToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    // State
    const [file, setFile] = useState<UploadedFile | null>(null);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [result, setResult] = useState<Blob | Blob[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Options
    const [dpi, setDpi] = useState(150);

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
            setStatus('idle');
            setProgress(0);
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
        setError(null);
        setStatus('idle');
        setProgress(0);
    }, []);

    /**
     * Handle convert operation
     */
    const handleConvert = useCallback(async () => {
        if (!file) {
            setError(t('errors.uploadFile') || 'Please upload a PDF file.');
            return;
        }

        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResult(null);

        try {
            const output: ProcessOutput = await pdfToPptx(
                file.file,
                { dpi },
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
                setStatus('complete');
            } else {
                setError(output.error?.message || t('errors.conversionFailed') || 'Failed to convert PDF to PowerPoint.');
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current) {
                setError(err instanceof Error ? err.message : t('errors.unexpectedError') || 'An unexpected error occurred.');
                setStatus('error');
            }
        }
    }, [file, dpi, t]);

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
    const canConvert = file && !isProcessing;

    return (
        <div className={`space-y-8 ${className}`.trim()}>
            {/* File Upload Area */}
            <FileUploader
                accept={['application/pdf', '.pdf']}
                multiple={false}
                maxFiles={1}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('pdfToPptx.uploadLabel') || 'Upload PDF'}
                description={tTools('pdfToPptx.uploadDescription') || 'Drag and drop a PDF file here, or click to browse.'}
            />

            {/* Error Message */}
            {error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{error}</p>
                </AlertDescription></Alert>
            )}

            {/* File Info */}
            {file && (
                <Card   className="glass-card">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <Presentation className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">{file.file.name}</p>
                                <p className="text-sm text-muted-foreground">{formatSize(file.file.size)}</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleRemoveFile}
                            disabled={isProcessing}
                            className=""
                        >
                            <Trash2 className="w-5 h-5" />
                            <span className="sr-only">{t('buttons.remove') || 'Remove'}</span>
                        </Button>
                    </div>
                </Card>
            )}

            {/* Options Panel */}
            {file && (
                <Card className="p-6" >
                    <h3 className="text-lg font-medium text-foreground mb-4">
                        {tTools('pdfToPptx.optionsTitle') || 'Conversion Options'}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <Label className="block mb-2" htmlFor="pdftopptxtool-field-1">
                                {tTools('pdfToPptx.dpiLabel') || 'Image Quality (DPI)'}
                            </Label>
                            <NativeSelect
                                value={dpi}
                                onChange={(e) => setDpi(Number(e.target.value))}
                                disabled={isProcessing}
                                className="w-full" id="pdftopptxtool-field-1" aria-label={tTools('pdfToPptx.dpiLabel') || 'Image Quality (DPI)'}
                            >
                                <NativeSelectOption value="72">{tTools('pdfToPptx.lowSet') || 'Low (72 DPI - smaller file)'}</NativeSelectOption>
                                <NativeSelectOption value="150">{tTools('pdfToPptx.mediumSet') || 'Medium (150 DPI - balanced)'}</NativeSelectOption>
                                <NativeSelectOption value="200">{tTools('pdfToPptx.highSet') || 'High (200 DPI - better quality)'}</NativeSelectOption>
                                <NativeSelectOption value="300">{tTools('pdfToPptx.veryHighSet') || 'Very High (300 DPI - best quality)'}</NativeSelectOption>
                            </NativeSelect>
                            <p className="mt-1 text-xs text-muted-foreground">
                                {tTools('pdfToPptx.dpiHint') || 'Higher DPI produces better quality slides but larger file sizes.'}
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
            <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                    variant="default"
                    size="lg"
                    onClick={handleConvert}
                    disabled={!canConvert}
                    loading={isProcessing}
                    className="min-w-[200px] transition-all hover:-translate-y-0.5"
                >
                    {!isProcessing && <RefreshCw className="w-5 h-5 mr-2" />}
                    {isProcessing
                        ? (t('status.processing') || 'Converting...')
                        : (tTools('pdfToPptx.convertButton') || 'Convert to PowerPoint')
                    }
                </Button>

                {result && !Array.isArray(result) && (
                    <DownloadButton
                        file={result as Blob}
                        filename={`${file?.file.name.replace(/\.pdf$/i, '')}.pptx`}
                        variant="secondary"
                        size="lg"
                        showFileSize
                        className="min-w-[200px] transition-all hover:-translate-y-0.5"
                    />
                )}
            </div>

            {/* Success Message */}
            {status === 'complete' && result && (
                <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tTools('successTitle') || 'Conversion Successful!'}</h3>
                    <p className="max-w-md mx-auto">
                        {tTools('pdfToPptx.successMessage') || 'Your PDF has been converted to PowerPoint. Each page is now a slide with full-quality images.'}
                    </p>
                </AlertDescription></Alert>
            )}
        </div>
    );
}

export default PDFToPptxTool;
