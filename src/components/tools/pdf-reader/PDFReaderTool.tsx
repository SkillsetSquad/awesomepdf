'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';


import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, X, CopyCheck } from 'lucide-react';
import { saveBlobFile } from '@/lib/tauri-bridge';
import { toast } from 'sonner';
import { withBasePath } from '@/lib/utils/path';

export interface PDFReaderToolProps {
    className?: string;
}

/**
 * PDFReaderTool Component
 * 
 * A full-featured PDF reader with automatic selection-to-clipboard synchronization.
 */
export function PDFReaderTool({ className = '' }: PDFReaderToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    const [file, setFile] = useState<File | null>(null);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [autoCopyEnabled, setAutoCopyEnabled] = useState(true);
    const toastIdRef = useRef<string | number | undefined>(undefined);
    const selectionCleanupRef = useRef<(() => void) | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const lastCopiedRef = useRef<string>('');

    // Sync selected text to clipboard
    const syncSelection = useCallback((targetWindow?: Window | null) => {
        if (!autoCopyEnabled || !file) return;
        try {
            const win = targetWindow || window;
            const sel = win.getSelection();
            if (win === window && sel?.anchorNode && !containerRef.current?.contains(sel.anchorNode)) return;
            const text = sel ? sel.toString().trim() : '';
            if (text && text.length > 0 && text !== lastCopiedRef.current) {
                lastCopiedRef.current = text;
                if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
                    navigator.clipboard.writeText(text).then(() => {
                        toastIdRef.current = toast.success(t('ocr.copied'), {
                            id: toastIdRef.current,
                            description: text.slice(0, 30) + (text.length > 30 ? '…' : ''),
                            duration: 2000,
                        });
                    }).catch(() => {});
                }
            }
        } catch {}
    }, [autoCopyEnabled, file, t]);

    // Attach selection listener to host document
    useEffect(() => {
        const handleMouseUp = () => syncSelection(window);
        document.addEventListener('mouseup', handleMouseUp);
        return () => document.removeEventListener('mouseup', handleMouseUp);
    }, [syncSelection]);

    // Attach selection listener into iframe contentDocument once loaded
    const handleIframeLoad = useCallback(() => {
        selectionCleanupRef.current?.();
        selectionCleanupRef.current = null;
        try {
            const iframe = iframeRef.current;
            if (iframe?.contentDocument && iframe.contentWindow) {
                const doc = iframe.contentDocument;
                const win = iframe.contentWindow;
                const copy = () => syncSelection(win);
                doc.addEventListener('mouseup', copy);
                doc.addEventListener('touchend', copy);
                selectionCleanupRef.current = () => {
                    doc.removeEventListener('mouseup', copy);
                    doc.removeEventListener('touchend', copy);
                };
            }
        } catch {}
    }, [syncSelection]);

    useEffect(() => {
        handleIframeLoad();
        return () => selectionCleanupRef.current?.();
    }, [handleIframeLoad]);

    useEffect(() => () => { if (toastIdRef.current !== undefined) toast.dismiss(toastIdRef.current); }, []);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            const selectedFile = files[0];
            setFile(selectedFile);

            // Revoke previous URL
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }

            // Create new URL for the PDF
            const url = URL.createObjectURL(selectedFile);
            setPdfUrl(url);
            setError(null);
        }
    }, [pdfUrl]);

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    // Cleanup URL on unmount
    useEffect(() => {
        return () => {
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        };
    }, [pdfUrl]);

    const handleDownload = useCallback(() => {
        if (file) {
            saveBlobFile(file, file.name);
        }
    }, [file]);

    const handleReset = useCallback(() => {
        if (pdfUrl) {
            URL.revokeObjectURL(pdfUrl);
        }
        setFile(null);
        setPdfUrl(null);
        setError(null);
        if (toastIdRef.current !== undefined) toast.dismiss(toastIdRef.current);
        lastCopiedRef.current = '';
    }, [pdfUrl]);

    const hasFile = file !== null;

    return (
        <div className={`space-y-4 ${className}`.trim()} ref={containerRef}>
            {!hasFile && (
                <FileUploader
                    accept={['application/pdf', '.pdf']}
                    multiple={false}
                    maxFiles={1}
                    onFilesSelected={handleFilesSelected}
                    onError={handleUploadError}
                    label={tTools('pdfReader.uploadLabel') || 'Open PDF File'}
                    description={tTools('pdfReader.uploadDescription') || 'Open a PDF file to read and view.'}
                />
            )}

            {error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                    <p className="text-sm">{error}</p>
                </AlertDescription></Alert>
            )}

            {hasFile && pdfUrl && (
                <>
                    {/* Simple Header with File Info */}
                    <Card  className="!p-3">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                                <span className="min-w-0 break-all text-sm font-medium">
                                    {file.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    ({(file.size / 1024 / 1024).toFixed(2)} MB)
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Auto-copy selection toggle (Ubuntu / Linux Primary Selection feature) */}
                                <Button
                                    variant={autoCopyEnabled ? "secondary" : "ghost"}
                                    size="sm"
                                    onClick={() => setAutoCopyEnabled(!autoCopyEnabled)}
                                    className="text-xs h-7 gap-1"
                                    aria-label={tTools('pdfReader.autoCopySelection')}
                                    aria-pressed={autoCopyEnabled}
                                >
                                    <CopyCheck className={`w-3.5 h-3.5 ${autoCopyEnabled ? 'text-primary' : 'text-muted-foreground'}`} />
                                    <span className="hidden sm:inline">{tTools('pdfReader.autoCopySelection')}</span>
                                </Button>

                                <Button variant="ghost" size="icon-sm" onClick={handleDownload} aria-label={t('buttons.download')}>
                                    <Download className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon-sm" onClick={handleReset} aria-label={t('buttons.close')}>
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* PDF Viewer - Using full-featured PDF.js Viewer */}
                    <div
                        className="relative bg-muted rounded-md overflow-hidden"
                        style={{ height: '80vh', minHeight: '600px' }}
                    >
                        <iframe
                            ref={iframeRef}
                            src={withBasePath(`/pdfjs-viewer/viewer.html?file=${encodeURIComponent(pdfUrl)}`)}
                            onLoad={handleIframeLoad}
                            className="w-full h-full absolute inset-0 border-0"
                            title={file.name}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default PDFReaderTool;
