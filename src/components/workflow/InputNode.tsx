'use client';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardAction, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';

import { Input } from '@/components/ui/input';


import React, { memo, useState, useRef } from 'react';
import { Handle, Position, useReactFlow } from 'reactflow';
import { ToolNodeData, WorkflowNode } from '@/types/workflow';
import { Upload, X, FileText, Image as ImageIcon, Trash2, Plus, CheckCircle2, Eye } from 'lucide-react';

interface InputNodeProps {
    id: string;
    data: ToolNodeData;
    selected?: boolean;
    isConnectable?: boolean;
}

function formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Dedicated Input Node inspired by BentoPDF
 * Allows users to upload and preview input files directly on the canvas node
 */
const InputNode: React.FC<InputNodeProps> = ({
    id,
    data,
    selected = false,
    isConnectable = true,
}) => {
    const { setNodes, setEdges } = useReactFlow();
    const tCommon = useTranslations('common');
    const tWorkflow = useTranslations('workflow');
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const isImageNode = data.toolId === 'image-input';
    const isPdfNode = data.toolId === 'pdf-input';
    const files = data.inputFiles || [];

    const acceptedExtensions = isImageNode
        ? ['.jpg', '.jpeg', '.png', '.webp', '.bmp', '.tiff', '.svg', '.heic']
        : isPdfNode
        ? ['.pdf']
        : data.acceptedFormats || ['.pdf'];

    const acceptString = acceptedExtensions.join(',');

    const handleDeleteNode = (e: React.MouseEvent) => {
        e.stopPropagation();
        setNodes((nodes) => nodes.filter((node) => node.id !== id));
        setEdges((edges) => edges.filter((edge) => edge.source !== id && edge.target !== id));
    };

    const handleFilesAdded = (newFiles: FileList | File[]) => {
        const validFiles: File[] = [];
        for (let i = 0; i < newFiles.length; i++) {
            const file = newFiles[i];
            const ext = '.' + file.name.split('.').pop()?.toLowerCase();
            if (
                acceptedExtensions.includes('*') ||
                acceptedExtensions.some((a) => a.toLowerCase() === ext)
            ) {
                validFiles.push(file);
            }
        }

        if (validFiles.length === 0) return;

        setNodes((nodes: WorkflowNode[]) =>
            nodes.map((node) => {
                if (node.id === id) {
                    const currentFiles = node.data.inputFiles || [];
                    const updatedFiles = [...currentFiles, ...validFiles];
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            inputFiles: updatedFiles,
                            status: 'complete',
                            error: undefined,
                        },
                    };
                }
                return node;
            })
        );
    };

    const handleRemoveFile = (index: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setNodes((nodes: WorkflowNode[]) =>
            nodes.map((node) => {
                if (node.id === id) {
                    const currentFiles = node.data.inputFiles || [];
                    const updatedFiles = currentFiles.filter((_, i) => i !== index);
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            inputFiles: updatedFiles,
                            status: updatedFiles.length > 0 ? 'complete' : 'idle',
                        },
                    };
                }
                return node;
            })
        );
    };

    const handleClearAll = (e: React.MouseEvent) => {
        e.stopPropagation();
        setNodes((nodes: WorkflowNode[]) =>
            nodes.map((node) => {
                if (node.id === id) {
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            inputFiles: [],
                            status: 'idle',
                        },
                    };
                }
                return node;
            })
        );
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFilesAdded(e.dataTransfer.files);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
    };

    const label = data.customTitle || data.label || tWorkflow(isImageNode ? 'imageInput' : isPdfNode ? 'pdfInput' : 'fileInput');

    return <Card className={`relative w-80 gap-4 py-4 ${selected ? 'ring-2 ring-ring ring-offset-2 ring-offset-background' : ''}`}>
        <CardHeader className="gap-2 px-4">
            <CardTitle className="flex items-center gap-2 text-sm">{isImageNode ? <ImageIcon className="size-4" aria-hidden="true" /> : <FileText className="size-4" aria-hidden="true" />}<span className="min-w-0 break-words">{label}</span></CardTitle>
            <Badge variant="secondary">{tWorkflow('inputCategory')}</Badge>
            <CardAction className="nodrag nopan flex gap-1">
                {files.length > 0 && <Button variant="ghost" size="icon-sm" aria-label={tWorkflow('clearAll')} onClick={handleClearAll}><Trash2 aria-hidden="true" /></Button>}
                <Button variant="ghost" size="icon-sm" aria-label={`${tCommon('buttons.delete')}: ${label}`} onClick={handleDeleteNode}><X aria-hidden="true" /></Button>
            </CardAction>
        </CardHeader>
        <CardContent className="nodrag nopan space-y-3 px-4">
            <Input ref={fileInputRef} aria-label={tWorkflow('selectFiles')} type="file" multiple accept={acceptString} className="hidden" onChange={event => {
                if (event.target.files) { handleFilesAdded(event.target.files); event.target.value = ''; }
            }} />
            {files.length > 0 && <>
                <div className="flex flex-wrap items-center gap-2"><Badge variant="outline"><CheckCircle2 aria-hidden="true" />{files.length} {tWorkflow('filesCount')}</Badge><Button variant="ghost" size="sm" onClick={event => { event.stopPropagation(); window.dispatchEvent(new CustomEvent('workflow:open-preview')); }}><Eye aria-hidden="true" />{tWorkflow('preview')}</Button></div>
                <ul className="max-h-40 space-y-2 overflow-y-auto" aria-label={tWorkflow('selectedFiles')}>
                    {files.map((file, index) => <li key={`${file.name}-${index}`} className="flex items-center gap-2 rounded-md border p-2 text-xs">
                        <span className="min-w-0 flex-1 truncate" title={file.name}>{file.name}</span><span className="shrink-0 text-muted-foreground">{formatFileSize(file.size)}</span>
                        <Button variant="ghost" size="icon-sm" aria-label={`${tWorkflow('removeFile')}: ${file.name}`} onClick={event => handleRemoveFile(index, event)}><X aria-hidden="true" /></Button>
                    </li>)}
                </ul>
            </>}
            <Button variant="outline" onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onClick={event => { event.stopPropagation(); fileInputRef.current?.click(); }} className={`h-auto w-full flex-col gap-2 whitespace-normal border-dashed py-4 text-center ${isDragOver ? 'border-primary bg-accent' : ''}`}>
                {files.length ? <Plus aria-hidden="true" /> : <Upload aria-hidden="true" />}
                <span>{tCommon('fileUploader.dragDrop')}</span><span className="text-xs text-muted-foreground">{tCommon('fileUploader.support')}: {acceptedExtensions.join(', ')}</span>
            </Button>
        </CardContent>
        <Handle type="source" position={Position.Right} isConnectable={isConnectable} className="!size-3 !border-2 !border-background !bg-primary" title={data.outputFormat} />
    </Card>;

};

export default memo(InputNode);