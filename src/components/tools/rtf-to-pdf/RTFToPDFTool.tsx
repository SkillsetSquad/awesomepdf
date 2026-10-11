'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';


import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileType, Trash2, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BatchProcessingPanel } from '@/components/common/BatchProcessingPanel';
import { rtfToPDF } from '@/lib/pdf/processors/rtf-to-pdf';
import type { UploadedFile, ProcessOutput } from '@/types/pdf';

function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export interface RTFToPDFToolProps {
    className?: string;
}

export function RTFToPDFTool({ className = '' }: RTFToPDFToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    const [file, setFile] = useState<UploadedFile | null>(null);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [preloadStatus, setPreloadStatus] = useState<ProcessingStatus>('idle');
    const [preloadProgress, setPreloadProgress] = useState(0);
    const [preloadMessage, setPreloadMessage] = useState('');
    const [result, setResult] = useState<Blob | Blob[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const cancelledRef = useRef(false);

    // Preload LibreOffice WASM when the component mounts
    useEffect(() => {
        let cancelled = false;
        (async () => {
            try {
                const { getLibreOfficeConverter } = await import('@/lib/libreoffice');
                if (cancelled) return;
                const converter = getLibreOfficeConverter();

                setPreloadStatus('processing');
                setPreloadProgress(0);
                setPreloadMessage('Checking environment...');

                await converter.initialize((loadProgress: { percent: number; message: string; phase?: string }) => {
                    if (cancelled) return;
                    setPreloadStatus('processing');
                    setPreloadProgress(loadProgress.percent);
                    setPreloadMessage(loadProgress.message || 'Loading conversion engine...');

                    if (loadProgress.phase === 'ready' || loadProgress.percent >= 100) {
                        setPreloadStatus('complete');
                    }
                });

                if (cancelled) return;
                setPreloadStatus('complete');
                setPreloadProgress(100);
                setPreloadMessage('Conversion engine ready!');
            } catch (err) {
                if (cancelled) return;
                setPreloadStatus('error');
                setPreloadMessage(err instanceof Error ? err.message : 'Failed to preload conversion engine.');
            }
        })();
        return () => { cancelled = true; };
    }, []);

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

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    const handleRemoveFile = useCallback(() => {
        setFile(null);
        setResult(null);
        setError(null);
        setStatus('idle');
        setProgress(0);
    }, []);

    const handleConvert = useCallback(async () => {
        if (!file) {
            setError(t('errors.uploadFile') || 'Please upload an RTF file.');
            return;
        }

        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResult(null);

        try {
            const output: ProcessOutput = await rtfToPDF(
                file.file,
                {},
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
                setError(output.error?.message || 'Failed to convert RTF to PDF.');
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current) {
                setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
                setStatus('error');
            }
        }
    }, [file, t]);

    const handleCancel = useCallback(() => {
        cancelledRef.current = true;
        setStatus('idle');
        setProgress(0);
    }, []);

    const handleBatchProcess = useCallback(async (batchFile: File, onProgress: (progress: number) => void): Promise<Blob> => {
        const output = await rtfToPDF(
            batchFile,
            {},
            (prog) => onProgress(Math.round(prog))
        );

        if (!output.success || !output.result || Array.isArray(output.result)) {
            throw new Error(output.error?.message || 'Failed to convert file.');
        }

        return output.result;
    }, []);

    const formatSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const isProcessing = status === 'processing' || status === 'uploading';
    const canConvert = file && !isProcessing;

    return (
        <div className={`space-y-8 ${className}`.trim()}>
            <FileUploader
                accept={['.rtf', 'application/rtf', 'text/rtf']}
                multiple={false}
                maxFiles={1}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('rtfToPdf.uploadLabel') || 'Upload RTF File'}
                description={tTools('rtfToPdf.uploadDescription') || 'Drag and drop an RTF file here, or click to browse.'}
            />

            {error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{error}</p>
                </AlertDescription></Alert>
            )}

            {file && (
                <Card>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <FileType className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">{file.file.name}</p>
                                <p className="text-sm text-muted-foreground">{formatSize(file.file.size)}</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleRemoveFile} disabled={isProcessing} className="">
                            <Trash2 className="w-5 h-5" />
                        </Button>
                    </div>
                </Card>
            )}

            {isProcessing && (
                <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={handleCancel} showPercentage />
            )}

            {!isProcessing && preloadStatus !== 'idle' && (
                <ProcessingProgress
                    progress={preloadProgress}
                    status={preloadStatus}
                    message={preloadMessage}
                    showPercentage
                    showEstimatedTime={false}
                />
            )}

            <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="default" size="lg" onClick={handleConvert} disabled={!canConvert} loading={isProcessing} className="min-w-[200px] transition-all hover:-translate-y-0.5">
                    {!isProcessing && <RefreshCw className="w-5 h-5 mr-2" />}
                    {isProcessing ? (t('status.processing') || 'Converting...') : (tTools('rtfToPdf.convertButton') || 'Convert to PDF')}
                </Button>

                {result && !Array.isArray(result) && (
                    <DownloadButton file={result as Blob} filename={`${file?.file.name.replace(/\.rtf$/i, '')}.pdf`} variant="secondary" size="lg" showFileSize className="min-w-[200px] transition-all hover:-translate-y-0.5" />
                )}
            </div>

            {status === 'complete' && result && (
                <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tTools('successTitle') || 'Conversion Successful!'}</h3>
                    <p className="max-w-md mx-auto">
                        {tTools('rtfToPdf.successMessage') || 'Your RTF file has been converted to PDF.'}
                    </p>
                </AlertDescription></Alert>
            )}

            <BatchProcessingPanel
                translations={{
                    title: 'Batch RTF to PDF',
                    addFiles: 'Click or drop files to add',
                    clearAll: 'Clear all',
                    startProcessing: 'Start batch conversion',
                    cancelProcessing: 'Cancel',
                    downloadAll: 'Download all',
                    downloadZip: 'Download ZIP',
                    pending: 'Pending',
                    processing: 'Processing',
                    completed: 'Completed',
                    error: 'Error',
                    progress: 'Overall progress',
                    filesSelected: 'files',
                    noFiles: 'No files added yet.',
                }}
                acceptedTypes=".rtf"
                processor={handleBatchProcess}
                maxConcurrent={1}
            />
        </div>
    );
}

export default RTFToPDFTool;
