'use client';
import type { PDFDocumentProxy, PDFDocumentLoadingTask, RenderTask } from 'pdfjs-dist';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { File as UIFile, Search as UISearch, X as UIX } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
    searchTextInPDF,
    applyFindAndRedact,
    TextMatch,
    parseSearchTerms,
} from '@/lib/pdf/processors/find-and-redact';
import { loadPdfjs } from '@/lib/pdf/loader';

export interface FindAndRedactToolProps {
    className?: string;
}

/**
 * FindAndRedactTool Component
 *
 * Provides functionality to search for text across all pages of a PDF
 * and redact matching content. Useful for removing sensitive information
 * like account numbers, names, etc. from multi-page documents.
 */
export function FindAndRedactTool({ className = '' }: FindAndRedactToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools.findAndRedact');
    const tRedaction = useTranslations('tools.trueRedaction');

    // File state
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<ProcessingStatus>('idle');
    const [progress, setProgress] = useState(0);
    const [progressMessage, setProgressMessage] = useState('');
    const [result, setResult] = useState<Blob | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Search state
    const [searchTermsInput, setSearchTermsInput] = useState('');
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [wholeWord, setWholeWord] = useState(false);
    const [useRegex, setUseRegex] = useState(false);
    const [matches, setMatches] = useState<TextMatch[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    // Redaction options
    const [redactionColor, setRedactionColor] = useState('#000000');
    const [addBorder, setAddBorder] = useState(false);
    const [replacementText, setReplacementText] = useState('');

    // Page filter for viewing matches
    const [selectedPage, setSelectedPage] = useState<number | 'all'>('all');

    // Preview state
    const [showPreview, setShowPreview] = useState(false);
    const [previewPage, setPreviewPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [previewScale, setPreviewScale] = useState(1.0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pdfDocRef = useRef<PDFDocumentProxy | null>(null);

    const cancelledRef = useRef(false);
    const redactionRun = useRef(0);
    const searchRun = useRef(0);
    useEffect(() => {
        redactionRun.current++;
        setResult(null);
        setStatus('idle');
    }, [file, matches, redactionColor, addBorder, replacementText]);
    useEffect(() => {
        const searches = searchRun;
        const redactions = redactionRun;
        searches.current++;
        setIsSearching(false);
        return () => {
            searches.current++;
            redactions.current++;
            void pdfDocRef.current?.destroy();
            pdfDocRef.current = null;
        };
    }, [file]);

    // Parse search terms from input
    const parsedTerms = useMemo(() => parseSearchTerms(searchTermsInput), [searchTermsInput]);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setError(null);
            setResult(null);
            setMatches([]);
            setHasSearched(false);
            setShowPreview(false);
            setPreviewPage(1);
            void pdfDocRef.current?.destroy();
            pdfDocRef.current = null;
        }
    }, []);

    const handleClearFile = useCallback(() => {
        setFile(null);
        setResult(null);
        setError(null);
        setStatus('idle');
        setMatches([]);
        setHasSearched(false);
        setSearchTermsInput('');
        setShowPreview(false);
        void pdfDocRef.current?.destroy();
        pdfDocRef.current = null;
    }, []);

    // Own one render at a time, and discard loads from an obsolete file or view.
    useEffect(() => {
        if (!file || !showPreview) return;
        let disposed = false;
        let loadingTask: PDFDocumentLoadingTask | null = null;
        let renderTask: RenderTask | null = null;

        const render = async () => {
            try {
                let pdf = pdfDocRef.current;
                if (!pdf) {
                    const pdfjs = await loadPdfjs();
                    if (disposed) return;
                    const data = await file.arrayBuffer();
                    if (disposed) return;
                    loadingTask = pdfjs.getDocument({ data });
                    pdf = await loadingTask.promise;
                    loadingTask = null;
                    if (disposed) {
                        await pdf.destroy();
                        return;
                    }
                    pdfDocRef.current = pdf;
                }
                setTotalPages(pdf.numPages);
                const canvas = canvasRef.current;
                const context = canvas?.getContext('2d');
                if (!canvas || !context) return;
                const page = await pdf.getPage(previewPage);
                if (disposed) return;
                const viewport = page.getViewport({ scale: previewScale });
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                context.clearRect(0, 0, canvas.width, canvas.height);
                renderTask = page.render({ canvasContext: context, viewport });
                await renderTask.promise;
                if (disposed) return;

                for (const match of matches.filter(m => m.page === previewPage)) {
                    const bounds = match.bounds ?? [match.x, match.y, match.x + match.width, match.y + match.height];
                    const [x0, y0, x1, y1] = viewport.convertToViewportRectangle(bounds);
                    const x = Math.min(x0, x1);
                    const y = Math.min(y0, y1);
                    const width = Math.abs(x1 - x0);
                    const height = Math.abs(y1 - y0);
                    context.fillStyle = match.selected ? 'rgba(255, 0, 0, 0.3)' : 'rgba(255, 200, 0, 0.3)';
                    context.fillRect(x, y, width, height);
                    context.strokeStyle = match.selected ? 'rgba(255, 0, 0, 0.8)' : 'rgba(255, 200, 0, 0.8)';
                    context.lineWidth = 2;
                    context.strokeRect(x, y, width, height);
                }
            } catch {
                if (!disposed) setError(tRedaction('previewFailed'));
            }
        };
        void render();
        return () => {
            disposed = true;
            renderTask?.cancel();
            void loadingTask?.destroy();
        };
    }, [file, showPreview, previewPage, previewScale, matches, tRedaction]);

    // Search for matches
    const handleSearch = useCallback(async () => {
        if (!file || parsedTerms.length === 0) {
            setError(tTools('enterSearchTerm'));
            return;
        }

        const run = ++searchRun.current;
        setIsSearching(true);
        setError(null);
        setMatches([]);
        setProgress(0);

        try {
            const searchResult = await searchTextInPDF(
                file,
                {
                    searchTerms: parsedTerms,
                    caseSensitive,
                    useRegex,
                    wholeWord,
                },
                (prog, message) => {
                    if (run === searchRun.current) {
                        setProgress(prog);
                        setProgressMessage(message || '');
                    }
                }
            );

            if (run !== searchRun.current) return;

            if (searchResult.success) {
                setMatches(searchResult.matches);
                setHasSearched(true);
                if (searchResult.matches.length === 0) {
                    setError(tTools('noMatchesFound'));
                } else {
                    // Show preview if matches found
                    setShowPreview(true);
                    // Jump to the first page with matches
                    if (searchResult.pagesWithMatches.length > 0) {
                        setPreviewPage(searchResult.pagesWithMatches[0]);
                    }
                }
            } else {
                setError(searchResult.error || tTools('searchFailed'));
            }
        } catch (err) {
            if (run === searchRun.current) setError(err instanceof Error ? err.message : tTools('searchFailed'));
        } finally {
            if (run === searchRun.current) {
                setIsSearching(false);
                setProgress(0);
            }
        }
    }, [file, parsedTerms, caseSensitive, useRegex, wholeWord, tTools]);

    // Toggle individual match selection
    const toggleMatchSelection = useCallback((matchId: string) => {
        setMatches(prev =>
            prev.map(match =>
                match.id === matchId ? { ...match, selected: !match.selected } : match
            )
        );
    }, []);

    // Select/deselect all matches
    const toggleSelectAll = useCallback((selected: boolean) => {
        setMatches(prev => prev.map(match => ({ ...match, selected })));
    }, []);

    // Select/deselect all matches on a specific page
    const toggleSelectPage = useCallback((pageNum: number, selected: boolean) => {
        setMatches(prev =>
            prev.map(match =>
                match.page === pageNum ? { ...match, selected } : match
            )
        );
    }, []);

    // Apply redactions
    const handleRedact = useCallback(async () => {
        if (!file) return;

        const selectedMatches = matches.filter(m => m.selected);
        if (selectedMatches.length === 0) {
            setError(tTools('selectMatchesToRedact'));
            return;
        }

        cancelledRef.current = false;
        const run = ++redactionRun.current;
        setStatus('processing');
        setProgress(0);
        setError(null);
        setResult(null);

        try {
            // Parse hex color to RGB
            const hexToRgb = (hex: string) => {
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                return { r, g, b };
            };

            const redactionResult = await applyFindAndRedact(
                file,
                matches,
                {
                    color: hexToRgb(redactionColor),
                    addBorder,
                    replacementText: replacementText.trim() || undefined,
                    selectedMatchIds: selectedMatches.map(m => m.id),
                },
                (prog, message) => {
                    if (!cancelledRef.current && run === redactionRun.current) {
                        setProgress(prog);
                        setProgressMessage(message || '');
                    }
                }
            );

            if (run !== redactionRun.current) return;

            if (cancelledRef.current) {
                setStatus('idle');
                return;
            }

            if (redactionResult.success && redactionResult.result) {
                setResult(redactionResult.result);
                setStatus('complete');
            } else {
                setError(redactionResult.error || tTools('redactFailed'));
                setStatus('error');
            }
        } catch (err) {
            if (!cancelledRef.current && run === redactionRun.current) {
                setError(err instanceof Error ? err.message : tTools('redactFailed'));
                setStatus('error');
            }
        }
    }, [file, matches, redactionColor, addBorder, replacementText, tTools]);

    const formatSize = (bytes: number): string => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const isProcessing = status === 'processing';
    const selectedCount = matches.filter(m => m.selected).length;
    const pagesWithMatches = [...new Set(matches.map(m => m.page))].sort((a, b) => a - b);

    // Filter matches by selected page
    const filteredMatches = selectedPage === 'all'
        ? matches
        : matches.filter(m => m.page === selectedPage);

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* File Upload */}
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
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                    <p className="text-sm">{error}</p>
                </AlertDescription></Alert>
            )}

            {file && (
                <>
                    {/* File Info */}
                    <Card className="p-6" >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <UIFile className="w-10 h-10 text-red-500" aria-hidden="true" />
                                <div>
                                    <p className="font-medium text-foreground">{file.name}</p>
                                    <p className="text-sm text-muted-foreground">{formatSize(file.size)}</p>
                                </div>
                            </div>
                            <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing || isSearching}>
                                {t('buttons.remove')}
                            </Button>
                        </div>
                    </Card>

                    {/* Search Section */}
                    <Card className="p-6"  >
                        <h3 className="text-lg font-medium mb-4 text-foreground">
                            {tTools('searchTitle')}
                        </h3>

                        {/* Search Input - Multiple Terms */}
                        <div className="space-y-4">
                            <div>
                                <Label className="block mb-2" htmlFor="findandredacttool-field-1">
                                    {tTools('searchTermLabel')}
                                </Label>

                                {/* Main Input */}
                                <div className="relative">
                                    <Input
                                        type="text"
                                        value={searchTermsInput}
                                        onChange={(e) => setSearchTermsInput(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && parsedTerms.length > 0) {
                                                e.preventDefault();
                                                handleSearch();
                                            }
                                        }}
                                        placeholder={tTools('searchInputPlaceholder')}
                                        className="w-full transition-all"
                                        disabled={isProcessing || isSearching} id="findandredacttool-field-1" aria-label={tTools('searchTermLabel')}
                                    />
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                        <UISearch className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                                    </div>
                                </div>

                                {/* Help text */}
                                <p className="mt-1.5 text-xs text-muted-foreground">
                                    {tTools('searchInputHelp')}
                                </p>

                                {/* Parsed Terms Tags */}
                                {parsedTerms.length > 0 && (
                                    <div className="mt-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-xs font-medium text-foreground">
                                                {tTools('termsCount', { count: parsedTerms.length })}
                                            </span>
                                            <Button variant="ghost" size="sm"
                                                type="button"
                                                onClick={() => setSearchTermsInput('')}

                                                disabled={isProcessing || isSearching}
                                            >
                                                {t('buttons.clearAll')}
                                            </Button>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {parsedTerms.map((term, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                                                >
                                                    <UISearch className="w-3.5 h-3.5" aria-hidden="true" />
                                                    {term}
                                                    <Button variant="ghost" size="icon-sm"
                                                        type="button"
                                                        onClick={() => {
                                                            const newTerms = parsedTerms.filter((_, i) => i !== index);
                                                            setSearchTermsInput(newTerms.join(', '));
                                                        }}
                                                        className="ml-1"
                                                        disabled={isProcessing || isSearching}
                                                    >
                                                        <UIX className="w-3.5 h-3.5" aria-hidden="true" />
                                                    </Button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Search Options */}
                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 border-t border-border">
                                <Label className="flex items-center gap-2 cursor-pointer">
                                    <Checkbox

                                        checked={caseSensitive}
                                        onCheckedChange={(checked) => setCaseSensitive((checked === true))}

                                        disabled={isProcessing || isSearching}
                                    />
                                    <span className="text-sm text-foreground">
                                        {tTools('caseSensitive')}
                                    </span>
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer">
                                    <Checkbox

                                        checked={wholeWord}
                                        onCheckedChange={(checked) => setWholeWord((checked === true))}

                                        disabled={isProcessing || isSearching || useRegex}
                                    />
                                    <span className="text-sm text-foreground">
                                        {tTools('wholeWord')}
                                    </span>
                                </Label>
                                <Label className="flex items-center gap-2 cursor-pointer">
                                    <Checkbox

                                        checked={useRegex}
                                        onCheckedChange={(checked) => {
                                            setUseRegex((checked === true));
                                            if ((checked === true)) setWholeWord(false);
                                        }}

                                        disabled={isProcessing || isSearching}
                                    />
                                    <span className="text-sm text-foreground">
                                        {tTools('useRegex')}
                                    </span>
                                </Label>
                            </div>

                            {/* Search Button */}
                            <div className="flex justify-end">
                                <Button
                                    variant="default"
                                    size="lg"
                                    onClick={handleSearch}
                                    disabled={parsedTerms.length === 0 || isProcessing || isSearching}
                                    loading={isSearching}
                                    className="px-8"
                                >
                                    <UISearch className="w-5 h-5 mr-2" aria-hidden="true" />
                                    {isSearching ? tTools('searching') : tTools('searchButton')}
                                </Button>
                            </div>
                        </div>
                    </Card>

                    {/* Preview and Results - Side by Side Layout */}
                    {showPreview && hasSearched && matches.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                            {/* Left Side - Preview (60%) */}
                            <div className="lg:col-span-3">
                                <Card   className="h-full">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-medium text-foreground">
                                            {tTools('previewTitle') || 'Preview'}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setPreviewPage(Math.max(1, previewPage - 1))}
                                                disabled={previewPage <= 1}
                                            >
                                                ←
                                            </Button>
                                            <span className="text-sm text-foreground min-w-[60px] text-center">
                                                {previewPage} / {totalPages}
                                            </span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setPreviewPage(Math.min(totalPages, previewPage + 1))}
                                                disabled={previewPage >= totalPages}
                                            >
                                                →
                                            </Button>
                                            <NativeSelect
                                                value={previewScale}
                                                onChange={(e) => setPreviewScale(parseFloat(e.target.value))}
                                                className="ml-2"
                                            >
                                                <NativeSelectOption value="0.5">50%</NativeSelectOption>
                                                <NativeSelectOption value="0.75">75%</NativeSelectOption>
                                                <NativeSelectOption value="1">100%</NativeSelectOption>
                                                <NativeSelectOption value="1.5">150%</NativeSelectOption>
                                                <NativeSelectOption value="2">200%</NativeSelectOption>
                                            </NativeSelect>
                                        </div>
                                    </div>

                                    {/* Quick page navigation */}
                                    {pagesWithMatches.length > 1 && (
                                        <div className="mb-3 flex flex-wrap gap-1">
                                            <span className="text-xs text-muted-foreground mr-2">
                                                {tTools('pagesWithMatches') || 'Pages with matches:'}
                                            </span>
                                            {pagesWithMatches.map(page => (
                                                <Button size="sm" variant={previewPage === page ? 'default' : 'outline'} aria-pressed={previewPage === page}
                                                    key={page}
                                                    onClick={() => {
                                                        setPreviewPage(page);
                                                        setSelectedPage(page);
                                                    }}

                                                >
                                                    {page}
                                                </Button>
                                            ))}
                                        </div>
                                    )}

                                    {/* Preview Legend */}
                                    <div className="mb-3 flex gap-4 text-xs">
                                        <div className="flex items-center gap-1">
                                            <span className="inline-block w-4 h-4 bg-red-500/30 border-2 border-red-500 rounded"></span>
                                            <span className="text-foreground">{tTools('selectedMatch') || 'Selected'}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="inline-block w-4 h-4 bg-yellow-500/30 border-2 border-yellow-500 rounded"></span>
                                            <span className="text-foreground">{tTools('unselectedMatch') || 'Not selected'}</span>
                                        </div>
                                    </div>

                                    <div className="border rounded-lg overflow-auto bg-muted" style={{ maxHeight: 'calc(100vh - 400px)', minHeight: '400px' }}>
                                        <canvas ref={canvasRef} dir="ltr" className="mx-auto" />
                                    </div>
                                </Card>
                            </div>

                            {/* Right Side - Results (40%) */}
                            <div className="lg:col-span-2 space-y-4">
                                {/* Matches Header */}
                                <Card className="p-6"  >
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-lg font-medium text-foreground">
                                            {tTools('matchesFound', { count: matches.length })}
                                        </h3>
                                        <div className="flex items-center gap-1">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleSelectAll(true)}
                                                disabled={isProcessing}
                                            >
                                                {t('buttons.selectAll')}
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleSelectAll(false)}
                                                disabled={isProcessing}
                                            >
                                                {t('buttons.deselectAll')}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Page Filter - Compact */}
                                    {pagesWithMatches.length > 1 && (
                                        <div className="mb-3">
                                            <div className="flex flex-wrap gap-1.5">
                                                <Button size="sm" variant={selectedPage === 'all' ? 'default' : 'outline'} aria-pressed={selectedPage === 'all'}
                                                    onClick={() => setSelectedPage('all')}

                                                    disabled={isProcessing}
                                                >
                                                    {tTools('allMatches', { count: matches.length })}
                                                </Button>
                                                {pagesWithMatches.map(page => {
                                                    const pageMatchCount = matches.filter(m => m.page === page).length;
                                                    const isSelected = selectedPage === page;
                                                    return (
                                                        <Button size="sm" variant={isSelected ? 'default' : 'outline'} aria-pressed={isSelected}
                                                            key={page}
                                                            onClick={() => {
                                                                setSelectedPage(page);
                                                                setPreviewPage(page);
                                                            }}

                                                            disabled={isProcessing}
                                                        >
                                                            P{page} ({pageMatchCount})
                                                        </Button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Matches List - Scrollable */}
                                    <div className="border rounded-lg divide-y overflow-y-auto" style={{ maxHeight: 'calc(100vh - 380px)', minHeight: '300px' }}>
                                        {filteredMatches.map((match) => (
                                            <div
                                                key={match.id}
                                                className={`flex items-center gap-2 p-2.5 cursor-pointer hover:bg-muted transition-colors ${match.selected ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                                    }  ${previewPage === match.page ? 'border-l-2 border-l-blue-500' : ''}`}
                                            >
                                                <Checkbox

                                                    checked={match.selected}
                                                    onCheckedChange={() => toggleMatchSelection(match.id)}
                                                    className="flex-shrink-0"
                                                    disabled={isProcessing}
                                                />
                                                <div
                                                    className="flex-1 min-w-0"
                                                    onClick={() => {
                                                        setPreviewPage(match.page);
                                                        setSelectedPage(match.page);
                                                    }}
                                                >
                                                    <p className="text-sm font-medium text-foreground truncate">
                                                        &quot;{match.text}&quot;
                                                    </p>
                                                    <p className="text-xs text-muted-foreground">
                                                        {tTools('pageInfo', { page: match.page })}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-2 text-sm text-muted-foreground">
                                        {tTools('selectedCount', { selected: selectedCount, total: matches.length })}
                                    </p>
                                </Card>
                            </div>
                        </div>
                    )}

                    {/* No Preview Mode - Results Only */}
                    {!showPreview && hasSearched && matches.length > 0 && (
                        <Card className="p-6"  >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-medium text-foreground">
                                    {tTools('matchesFound', { count: matches.length })}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSelectAll(true)}
                                        disabled={isProcessing}
                                    >
                                        {t('buttons.selectAll')}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => toggleSelectAll(false)}
                                        disabled={isProcessing}
                                    >
                                        {t('buttons.deselectAll')}
                                    </Button>
                                </div>
                            </div>

                            {/* Matches List */}
                            <div className="max-h-60 overflow-y-auto border rounded-lg divide-y">
                                {filteredMatches.map((match) => (
                                    <div
                                        key={match.id}
                                        className={`flex items-center gap-3 p-3 cursor-pointer hover:bg-muted transition-colors ${match.selected ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
                                    >
                                        <Checkbox

                                            checked={match.selected}
                                            onCheckedChange={() => toggleMatchSelection(match.id)}

                                            disabled={isProcessing}
                                        />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-foreground truncate">
                                                &quot;{match.text}&quot;
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {tTools('pageInfo', { page: match.page })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-2 text-sm text-muted-foreground">
                                {tTools('selectedCount', { selected: selectedCount, total: matches.length })}
                            </p>
                        </Card>
                    )}

                    <p className="text-sm text-muted-foreground" role="note">{tRedaction('description')} {tRedaction('cleanup')}</p>
                    {/* Redaction Options */}
                    {hasSearched && matches.length > 0 && (
                        <Card className="p-6"  >
                            <h3 className="text-lg font-medium mb-4 text-foreground">
                                {tTools('redactionOptions')}
                            </h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <Label className="block mb-1" htmlFor="findandredacttool-field-2">
                                            {tTools('redactionColor')}
                                        </Label>
                                        <div className="flex items-center gap-2">
                                            <Input
                                                type="color"
                                                value={redactionColor}
                                                onChange={(e) => setRedactionColor(e.target.value)}
                                                className="w-10 h-10 cursor-pointer"
                                                disabled={isProcessing} id="findandredacttool-field-2" aria-label={tTools('redactionColor')}
                                            />
                                            <Input
                                                type="text"
                                                value={redactionColor}
                                                onChange={(e) => setRedactionColor(e.target.value)}
                                                className="flex-1"
                                                disabled={isProcessing} aria-label={tTools('redactionColor')}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label className="block mb-1" htmlFor="findandredacttool-field-3">
                                            {tTools('replacementText')}
                                        </Label>
                                        <Input
                                            type="text"
                                            value={replacementText}
                                            onChange={(e) => setReplacementText(e.target.value)}
                                            placeholder={tTools('replacementTextPlaceholder')}
                                            className="w-full"
                                            disabled={isProcessing} id="findandredacttool-field-3" aria-label={tTools('replacementText')}
                                        />
                                    </div>
                                </div>

                                <Label className="flex items-center gap-2 cursor-pointer">
                                    <Checkbox

                                        checked={addBorder}
                                        onCheckedChange={(checked) => setAddBorder((checked === true))}

                                        disabled={isProcessing}
                                    />
                                    <span className="text-sm text-foreground">
                                        {tTools('addBorder')}
                                    </span>
                                </Label>

                                {/* Warning */}
                                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400">
                                    <p className="text-sm">
                                        <strong>{tTools('warningTitle')}:</strong> {tTools('warningText')}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    )}

                    {/* Progress */}
                    {isProcessing && (
                        <ProcessingProgress
                            progress={progress}
                            status={status}
                            message={progressMessage}
                            onCancel={() => { cancelledRef.current = true; setStatus('idle'); }}
                            showPercentage
                        />
                    )}

                    {/* Action Buttons */}
                    {hasSearched && matches.length > 0 && (
                        <div className="flex flex-wrap items-center gap-4">
                            <Button
                                variant="default"
                                size="lg"
                                onClick={handleRedact}
                                disabled={selectedCount === 0 || isProcessing}
                                loading={isProcessing}
                            >
                                {isProcessing
                                    ? t('status.processing')
                                    : tTools('redactButton', { count: selectedCount })
                                }
                            </Button>
                            {result && (
                                <DownloadButton
                                    file={result}
                                    filename={file.name.replace('.pdf', '_redacted.pdf')}
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
                            <p className="text-sm font-medium">{tTools('successMessage')}</p>
                        </AlertDescription></Alert>
                    )}
                </>
            )}
        </div>
    );
}

export default FindAndRedactTool;
