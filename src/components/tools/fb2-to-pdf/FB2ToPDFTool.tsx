'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';


import React, { useState, useCallback, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { BookText, Trash2, RefreshCw, CheckCircle2, AlertCircle } from 'lucide-react';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { fb2ToPDF } from '@/lib/pdf/processors/fb2-to-pdf';
import type { UploadedFile, ProcessOutput } from '@/types/pdf';

function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export interface FB2ToPDFToolProps {
    className?: string;
}

export function FB2ToPDFTool({ className = '' }: FB2ToPDFToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [result, setResult] = useState<Blob | Blob[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const cancelledRef = useRef(false);

    const handleFilesSelected = useCallback((newFiles: File[]) => {
        const uploadedFiles: UploadedFile[] = newFiles.map(file => ({
            id: generateId(),
            file,
            status: 'pending' as const,
        }));
        setFiles(prev => [...prev, ...uploadedFiles]);
        setError(null);
        setResult(null);
        setStatus('idle');
        setProgress(0);
    }, []);

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    const handleRemoveFile = useCallback((fileId: string) => {
        setFiles(prev => prev.filter(f => f.id !== fileId));
        if (files.length === 1) {
            setResult(null);
            setError(null);
            setStatus('idle');
            setProgress(0);
        }
    }, [files.length]);

    const handleConvert = useCallback(async () => {
        if (files.length === 0) {
            setError(t('errors.uploadFile') || 'Please upload at least one FB2 file.');
            return;
        }

        cancelledRef.current = false;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResult(null);

        try {
            const fileObjects = files.map(f => f.file);
            const output: ProcessOutput = await fb2ToPDF(
                fileObjects,
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
                setError(output.error?.message || 'Failed to convert FB2 to PDF.');
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current) {
                setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
                setStatus('error');
            }
        }
    }, [files, t]);

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

    const isProcessing = status === 'processing' || status === 'uploading';
    const canConvert = files.length > 0 && !isProcessing;

    const getOutputFilename = () => {
        if (files.length === 1) {
            return `${files[0].file.name.replace(/\.fb2(\.zip)?$/i, '')}.pdf`;
        }
        return 'fb2-converted.zip';
    };

    return (
        <div className={`space-y-8 ${className}`.trim()}>
            <FileUploader
                accept={['.fb2', '.fb2.zip', 'application/x-fictionbook+xml']}
                multiple={true}
                maxFiles={20}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('fb2ToPdf.uploadLabel') || 'Upload FB2 Files'}
                description={tTools('fb2ToPdf.uploadDescription') || 'Drag and drop FB2 e-book files here, or click to browse. Supports multiple files.'}
            />

            {error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{error}</p>
                </AlertDescription></Alert>
            )}

            {files.length > 0 && (
                <Card   className="glass-card">
                    <div className="space-y-3">
                        <h3 className="font-semibold text-foreground">
                            {files.length} {files.length === 1 ? 'File' : 'Files'} Selected
                        </h3>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {files.map((file) => (
                                <div key={file.id} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border">
                                    <div className="flex items-center gap-3 flex-1 min-w-0">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                            <BookText className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-foreground truncate">{file.file.name}</p>
                                            <p className="text-xs text-muted-foreground">{formatSize(file.file.size)}</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleRemoveFile(file.id)}
                                        disabled={isProcessing}
                                        className="flex-shrink-0"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            )}

            {isProcessing && (
                <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={handleCancel} showPercentage />
            )}

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
                    {isProcessing ? (t('status.processing') || 'Converting...') : (tTools('fb2ToPdf.convertButton') || 'Convert to PDF')}
                </Button>

                {result && !Array.isArray(result) && (
                    <DownloadButton
                        file={result as Blob}
                        filename={getOutputFilename()}
                        variant="secondary"
                        size="lg"
                        showFileSize
                        className="min-w-[200px] transition-all hover:-translate-y-0.5"
                    />
                )}
                {result && Array.isArray(result) && result.map((blob, index) => (
                    <DownloadButton
                        key={index}
                        file={blob}
                        filename={`${files[index]?.file.name.replace(/\.fb2(\.zip)?$/i, '')}.pdf`}
                        variant="secondary"
                        size="lg"
                        showFileSize
                        className="min-w-[200px] transition-all hover:-translate-y-0.5"
                    />
                ))}
            </div>

            {status === 'complete' && result && (
                <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{tTools('successTitle') || 'Conversion Successful!'}</h3>
                    <p className="max-w-md mx-auto">
                        {tTools('fb2ToPdf.successMessage') || 'Your FB2 file(s) have been converted to PDF.'}
                    </p>
                </AlertDescription></Alert>
            )}
        </div>
    );
}

export default FB2ToPDFTool;
