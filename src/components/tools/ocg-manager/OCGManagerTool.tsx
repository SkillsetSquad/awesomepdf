'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { manageOCGLayers, listOCGLayers, type OCGLayer } from '@/lib/pdf/processors/ocg-manager';
import { Layers, Eye, EyeOff, Plus, Trash2, Edit2, RefreshCw } from 'lucide-react';

export interface OCGManagerToolProps {
    className?: string;
}

export function OCGManagerTool({ className = '' }: OCGManagerToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');
    const tErrors = useTranslations('errors');

    const [file, setFile] = useState<File | null>(null);
    const [layers, setLayers] = useState<OCGLayer[]>([]);
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [newLayerName, setNewLayerName] = useState('');
    const [editingLayer, setEditingLayer] = useState<string | null>(null);
    const [editName, setEditName] = useState('');
    const [pendingDelete, setPendingDelete] = useState<OCGLayer | null>(null);
    const deleteTriggerRef = useRef<HTMLButtonElement | null>(null);
    const newLayerInputRef = useRef<HTMLInputElement>(null);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setLayers([]);
            setResultBlob(null);
            setError(null);
            setPendingDelete(null);
        }
    }, []);

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    // Load layers when file is selected
    useEffect(() => {
        if (file) {
            loadLayers();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    const loadLayers = useCallback(async () => {
        if (!file) return;

        setIsLoading(true);
        setError(null);

        try {
            const result = await listOCGLayers(file, (prog) => setProgress(prog));
            setLayers(result.layers);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load layers.');
        } finally {
            setIsLoading(false);
        }
    }, [file]);

    const handleToggleLayer = useCallback(async (layerId: string, currentVisible: boolean) => {
        if (!file) return;

        setIsProcessing(true);
        setError(null);

        try {
            const output = await manageOCGLayers(file, {
                action: 'toggle',
                layerId,
                visible: !currentVisible,
            }, (prog) => setProgress(prog));

            if (output.success && output.result) {
                setResultBlob(output.result as Blob);
                // Update local state
                setLayers(prev => prev.map(l =>
                    l.id === layerId ? { ...l, visible: !currentVisible } : l
                ));
            } else {
                setError(output.error?.message || 'Failed to toggle layer.');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred.');
        } finally {
            setIsProcessing(false);
        }
    }, [file]);

    const handleAddLayer = useCallback(async () => {
        if (!file || !newLayerName.trim()) return;

        setIsProcessing(true);
        setError(null);

        try {
            const output = await manageOCGLayers(file, {
                action: 'add',
                layerName: newLayerName.trim(),
            }, (prog) => setProgress(prog));

            if (output.success && output.result) {
                setResultBlob(output.result as Blob);
                setNewLayerName('');
                // Reload layers
                await loadLayers();
            } else {
                setError(output.error?.message || 'Failed to add layer.');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred.');
        } finally {
            setIsProcessing(false);
        }
    }, [file, newLayerName, loadLayers]);

    const handleDeleteLayer = useCallback(async (layerId: string) => {
        if (!file) return;

        setIsProcessing(true);
        setError(null);

        try {
            const output = await manageOCGLayers(file, {
                action: 'delete',
                layerId,
            }, (prog) => setProgress(prog));

            if (output.success && output.result) {
                setResultBlob(output.result as Blob);
                setLayers(prev => prev.filter(l => l.id !== layerId));
                setPendingDelete(null);
            } else {
                setError(output.error?.message || tErrors('processingFailed'));
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : tErrors('processingFailed'));
        } finally {
            setIsProcessing(false);
        }
    }, [file, tErrors]);

    const handleRenameLayer = useCallback(async (layerId: string) => {
        if (!file || !editName.trim()) return;

        setIsProcessing(true);
        setError(null);

        try {
            const output = await manageOCGLayers(file, {
                action: 'rename',
                layerId,
                layerName: editName.trim(),
            }, (prog) => setProgress(prog));

            if (output.success && output.result) {
                setResultBlob(output.result as Blob);
                setLayers(prev => prev.map(l =>
                    l.id === layerId ? { ...l, name: editName.trim() } : l
                ));
                setEditingLayer(null);
                setEditName('');
            } else {
                setError(output.error?.message || 'Failed to rename layer.');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred.');
        } finally {
            setIsProcessing(false);
        }
    }, [file, editName]);

    const handleReset = useCallback(() => {
        setFile(null);
        setLayers([]);
        setResultBlob(null);
        setError(null);
        setProgress(0);
        setPendingDelete(null);
    }, []);

    const hasFile = file !== null;
    const hasLayers = layers.length > 0;

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            <FileUploader
                accept={['application/pdf', '.pdf']}
                multiple={false}
                maxFiles={1}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('ocgManager.uploadLabel') || 'Upload PDF File'}
                description={tTools('ocgManager.uploadDescription') || 'Drag and drop a PDF to manage its layers (OCG).'}
            />

            {error && !pendingDelete && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                    <p className="text-sm">{error}</p>
                </AlertDescription></Alert>
            )}

            <AlertDialog open={pendingDelete !== null} onOpenChange={(open) => { if (!open && !isProcessing) setPendingDelete(null); }}>
                <AlertDialogContent onCloseAutoFocus={(event) => {
                    event.preventDefault();
                    if (deleteTriggerRef.current?.isConnected) deleteTriggerRef.current.focus();
                    else newLayerInputRef.current?.focus();
                }}>
                    <AlertDialogHeader>
                        <AlertDialogTitle>{t('buttons.delete')}</AlertDialogTitle>
                        <AlertDialogDescription>{tTools('ocgManager.deleteConfirm', { name: pendingDelete?.name || '' })}</AlertDialogDescription>
                    </AlertDialogHeader>
                    {error && <Alert variant="destructive"><UICircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
                    {isProcessing && <p role="status">{t('status.processing')}</p>}
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isProcessing}>{t('buttons.cancel')}</AlertDialogCancel>
                        <Button variant="destructive" disabled={isProcessing} onClick={() => { if (pendingDelete) void handleDeleteLayer(pendingDelete.id); }}>{t('buttons.delete')}</Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {hasFile && (
                <Card className="p-6" >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <Layers className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-medium text-foreground">
                                {tTools('ocgManager.layersTitle') || 'PDF Layers'} ({layers.length})
                            </h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" aria-label={tTools('ocgManager.refreshLayers')} onClick={loadLayers} disabled={isLoading || isProcessing}>
                                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleReset} disabled={isProcessing}>
                                {t('buttons.clear') || 'Clear'}
                            </Button>
                        </div>
                    </div>

                    {isLoading ? (
                        <div className="py-8 text-center text-muted-foreground">
                            {t('status.loading')}
                        </div>
                    ) : hasLayers ? (
                        <div className="space-y-2">
                            {layers.map((layer) => (
                                <div
                                    key={layer.id}
                                    className="flex items-center justify-between p-3 rounded-md border border-border bg-muted/30"
                                >
                                    <div className="flex items-center gap-3">
                                        <Button variant="ghost" size="sm"
                                            onClick={() => handleToggleLayer(layer.id, layer.visible)}
                                            disabled={isProcessing}

                                            aria-label={tTools(layer.visible ? 'ocgManager.hideLayer' : 'ocgManager.showLayer', { name: layer.name })}
                                        >
                                            {layer.visible ? (
                                                <Eye className="w-4 h-4 text-green-600" />
                                            ) : (
                                                <EyeOff className="w-4 h-4 text-muted-foreground" />
                                            )}
                                        </Button>

                                        {editingLayer === layer.id ? (
                                            <Input
                                                type="text"
                                                aria-label={tTools('ocgManager.layerName')}
                                                value={editName}
                                                onChange={(e) => setEditName(e.target.value)}
                                                onKeyDown={(e) => e.key === 'Enter' && handleRenameLayer(layer.id)}
                                                className=""
                                                autoFocus
                                            />
                                        ) : (
                                            <span className="text-sm font-medium text-foreground">
                                                {layer.name}
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex items-center gap-1">
                                        {editingLayer === layer.id ? (
                                            <>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleRenameLayer(layer.id)}
                                                    disabled={isProcessing}
                                                >
                                                    {t('buttons.save')}
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => {
                                                        setEditingLayer(null);
                                                        setEditName('');
                                                    }}
                                                >
                                                    {t('buttons.cancel')}
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button variant="ghost" size="icon-sm" aria-label={`${t('buttons.edit')} ${layer.name}`}
                                                    onClick={() => {
                                                        setEditingLayer(layer.id);
                                                        setEditName(layer.name);
                                                    }}
                                                    disabled={isProcessing}

                                                >
                                                    <Edit2 className="w-4 h-4 text-muted-foreground" />
                                                </Button>
                                                <Button variant="ghost" size="icon-sm" aria-label={`${t('buttons.delete')} ${layer.name}`}
                                                    onClick={(event) => { deleteTriggerRef.current = event.currentTarget; setError(null); setPendingDelete(layer); }}
                                                    disabled={isProcessing}

                                                >
                                                    <Trash2 className="w-4 h-4 text-red-500" />
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-8 text-center text-muted-foreground">
                            {tTools('ocgManager.noLayers') || 'This PDF has no layers (OCG).'}
                        </div>
                    )}

                    {/* Add New Layer */}
                    <div className="mt-4 pt-4 border-t border-border">
                        <Label className="block mb-2" htmlFor="ocgmanagertool-field-1">
                            {tTools('ocgManager.addLayerLabel') || 'Add New Layer'}
                        </Label>
                        <div className="flex gap-2">
                            <Input
                                ref={newLayerInputRef}
                                type="text"
                                value={newLayerName}
                                onChange={(e) => setNewLayerName(e.target.value)}
                                placeholder={tTools('ocgManager.layerName')}
                                disabled={isProcessing}
                                className="flex-1" id="ocgmanagertool-field-1" aria-label={tTools('ocgManager.addLayerLabel') || 'Add New Layer'}
                            />
                            <Button
                                variant="secondary"
                                onClick={handleAddLayer}
                                disabled={isProcessing || !newLayerName.trim()}
                            >
                                <Plus className="w-4 h-4 me-1" />
                                {t('buttons.add')}
                            </Button>
                        </div>
                    </div>
                </Card>
            )}

            {isProcessing && (
                <ProcessingProgress progress={progress} status="processing" message={t('status.processing')} showPercentage />
            )}

            {resultBlob && (
                <div className="flex flex-wrap items-center gap-4">
                    <DownloadButton
                        file={resultBlob}
                        filename={file ? `${file.name.replace(/\.pdf$/i, '')}_layers.pdf` : 'layers.pdf'}
                        variant="default"
                        size="lg"
                    />
                </div>
            )}

            {resultBlob && (
                <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
                    <p className="text-sm font-medium">{tTools('ocgManager.successMessage') || 'Layer changes saved successfully!'}</p>
                </AlertDescription></Alert>
            )}
        </div>
    );
}

export default OCGManagerTool;
