'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import {
    X,
    FileText,
    Image,
    File,
    Eye,
    Trash2,
    ChevronUp,
    ChevronDown,
    GripVertical,
    XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface FileListPanelProps {
    files: File[];
    onFilesChange: (files: File[]) => void;
    onClose: () => void;
    onReturnFocus?: () => void;
}

/**
 * Get file icon based on file type
 */
function getFileIcon(file: File) {
    const type = file.type;
    if (type.startsWith('image/')) {
        return <Image className="w-5 h-5 text-muted-foreground" />;
    }
    if (type === 'application/pdf') {
        return <FileText className="w-5 h-5 text-muted-foreground" />;
    }
    return <File className="w-5 h-5 text-muted-foreground" />;
}

/**
 * Format file size to human readable string
 */
function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * File List Panel Component
 * Shows selected files with options to preview, remove, and reorder
 */
export function FileListPanel({ files, onFilesChange, onClose, onReturnFocus }: FileListPanelProps) {
    const tWorkflow = useTranslations('workflow');
    const tCommon = useTranslations('common');
    const direction = useLocale() === 'ar' ? 'rtl' : 'ltr';
    const previewTriggerRef = useRef<HTMLButtonElement | null>(null);

    const [previewFile, setPreviewFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    // Track preview URL for cleanup
    const previewUrlRef = useRef<string | null>(null);

    // Cleanup preview URL on unmount
    useEffect(() => {
        return () => {
            if (previewUrlRef.current) {
                URL.revokeObjectURL(previewUrlRef.current);
            }
        };
    }, []);

    /**
     * Handle close with cleanup
     */
    const handleClose = useCallback(() => {
        // Clean up preview URL before closing
        if (previewUrlRef.current) {
            URL.revokeObjectURL(previewUrlRef.current);
            previewUrlRef.current = null;
        }
        setPreviewUrl(null);
        setPreviewFile(null);
        onClose();
    }, [onClose]);

    /**
     * Remove a file from the list
     */
    const handleRemoveFile = useCallback((index: number) => {
        const newFiles = files.filter((_, i) => i !== index);
        onFilesChange(newFiles);
    }, [files, onFilesChange]);

    /**
     * Clear all files
     */
    const handleClearAll = useCallback(() => {
        onFilesChange([]);
    }, [onFilesChange]);

    /**
     * Move file up in the list
     */
    const handleMoveUp = useCallback((index: number) => {
        if (index === 0) return;
        const newFiles = [...files];
        [newFiles[index - 1], newFiles[index]] = [newFiles[index], newFiles[index - 1]];
        onFilesChange(newFiles);
    }, [files, onFilesChange]);

    /**
     * Move file down in the list
     */
    const handleMoveDown = useCallback((index: number) => {
        if (index === files.length - 1) return;
        const newFiles = [...files];
        [newFiles[index], newFiles[index + 1]] = [newFiles[index + 1], newFiles[index]];
        onFilesChange(newFiles);
    }, [files, onFilesChange]);

    /**
     * Preview a file
     */
    const handlePreview = useCallback((file: File) => {
        // Clean up previous preview URL
        if (previewUrlRef.current) {
            URL.revokeObjectURL(previewUrlRef.current);
        }

        const url = URL.createObjectURL(file);
        previewUrlRef.current = url;
        setPreviewUrl(url);
        setPreviewFile(file);
    }, []);

    /**
     * Close preview
     */
    const closePreview = useCallback(() => {
        if (previewUrlRef.current) {
            URL.revokeObjectURL(previewUrlRef.current);
            previewUrlRef.current = null;
        }
        setPreviewUrl(null);
        setPreviewFile(null);
    }, []);

    /**
     * Drag and drop handlers
     */
    const handleDragStart = useCallback((e: React.DragEvent, index: number) => {
        setDragIndex(index);
        if (e.dataTransfer) {
            e.dataTransfer.setData('text/plain', String(index));
            e.dataTransfer.effectAllowed = 'move';
        }
    }, []);

    const handleDragOver = useCallback((e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (e.dataTransfer) {
            e.dataTransfer.dropEffect = 'move';
        }
        if (dragIndex === null || dragIndex === index) return;

        const newFiles = [...files];
        const draggedFile = newFiles[dragIndex];
        newFiles.splice(dragIndex, 1);
        newFiles.splice(index, 0, draggedFile);
        onFilesChange(newFiles);
        setDragIndex(index);
    }, [dragIndex, files, onFilesChange]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragIndex(null);
    }, []);

    const handleDragEnd = useCallback(() => {
        setDragIndex(null);
    }, []);

    return (
        <>
            <DialogContent dir={direction} showCloseButton={false} className="max-h-[calc(100dvh-2rem)] sm:max-w-2xl"
                onCloseAutoFocus={(event) => { if (onReturnFocus) { event.preventDefault(); onReturnFocus(); } }}>
                <DialogHeader>
                    <DialogTitle className="flex flex-wrap items-center gap-2"><FileText className="size-5" aria-hidden="true" />{tWorkflow('selectedFiles')}<Badge variant="secondary">{files.length} {tWorkflow('filesCount')}</Badge></DialogTitle>
                    <DialogDescription>{tWorkflow('viewEditFiles')}</DialogDescription>
                </DialogHeader>
                <div className="max-h-[55dvh] space-y-2 overflow-auto" role="list" aria-label={tWorkflow('selectedFiles')}>
                    {files.map((file, index) => (
                        <div key={`${file.name}-${index}`} draggable onDragStart={(event) => handleDragStart(event, index)}
                            onDragOver={(event) => handleDragOver(event, index)} onDrop={handleDrop} onDragEnd={handleDragEnd}
                            role="listitem" className={`flex flex-wrap items-center gap-3 rounded-md border p-3 ${dragIndex === index ? 'bg-accent' : ''}`}>
                            <GripVertical className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                            {getFileIcon(file)}
                            <div className="min-w-0 flex-1"><p className="truncate text-sm font-medium">{file.name}</p><p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p></div>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon-sm" onClick={() => handleMoveUp(index)} disabled={index === 0} aria-label={`${tWorkflow('moveUp')}: ${file.name}`}><ChevronUp aria-hidden="true" /></Button>
                                <Button variant="ghost" size="icon-sm" onClick={() => handleMoveDown(index)} disabled={index === files.length - 1} aria-label={`${tWorkflow('moveDown')}: ${file.name}`}><ChevronDown aria-hidden="true" /></Button>
                                <Button variant="ghost" size="icon-sm" onClick={(event) => { previewTriggerRef.current = event.currentTarget; handlePreview(file); }} aria-label={`${tWorkflow('preview')}: ${file.name}`}><Eye aria-hidden="true" /></Button>
                                <Button variant="ghost" size="icon-sm" onClick={() => handleRemoveFile(index)} aria-label={`${tWorkflow('removeFile')}: ${file.name}`}><Trash2 aria-hidden="true" /></Button>
                            </div>
                        </div>
                    ))}
                </div>
                <DialogFooter className="sm:justify-between">
                    <Button variant="ghost" onClick={handleClearAll}><XCircle aria-hidden="true" />{tWorkflow('clearAll')}</Button>
                    <Button onClick={handleClose}>{tWorkflow('confirm')}</Button>
                </DialogFooter>
                <Button variant="ghost" size="icon-sm" className="absolute end-3 top-3" onClick={handleClose} aria-label={tCommon('buttons.close')}><X aria-hidden="true" /></Button>
            </DialogContent>
            <Dialog open={!!previewFile && !!previewUrl} onOpenChange={(open) => { if (!open) closePreview(); }}>
                <DialogContent dir={direction} showCloseButton={false} className="max-h-[calc(100dvh-2rem)] sm:max-w-5xl"
                    onCloseAutoFocus={(event) => { event.preventDefault(); previewTriggerRef.current?.focus(); }}>
                    <DialogHeader><DialogTitle className="truncate pe-8">{previewFile?.name}</DialogTitle><DialogDescription>{tWorkflow('preview')}</DialogDescription></DialogHeader>
                    <div className="flex min-h-0 items-center justify-center overflow-auto">
                        {previewFile?.type.startsWith('image/') && previewUrl ? <img src={previewUrl} alt={previewFile.name} className="max-h-[70dvh] max-w-full object-contain" />
                            : previewFile?.type === 'application/pdf' && previewUrl ? <iframe src={previewUrl} title={previewFile.name} className="h-[65dvh] w-full rounded-md border" />
                            : <p className="p-8 text-center text-muted-foreground">{tWorkflow('previewNotAvailable')}</p>}
                    </div>
                    <Button variant="ghost" size="icon-sm" className="absolute end-3 top-3" onClick={closePreview} aria-label={tCommon('buttons.close')}><X aria-hidden="true" /></Button>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default FileListPanel;
