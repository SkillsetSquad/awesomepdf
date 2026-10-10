'use client';
import { Textarea } from '@/components/ui/textarea';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { markdownToPDF, type MarkdownPageSize, type MarkdownTheme } from '@/lib/pdf/processors/markdown-to-pdf';
import { FileType, Upload, Type, Eye, EyeOff } from 'lucide-react';
import { marked } from 'marked';
import { sanitizeHtml } from '@/lib/utils/html-sanitizer';

export interface MarkdownToPDFToolProps {
    /** Custom class name */
    className?: string;
}

type InputMode = 'upload' | 'manual';

/**
 * MarkdownToPDFTool Component
 *
 * Converts Markdown files to PDF with styling options.
 * Supports both file upload and manual markdown input with live preview.
 */
export function MarkdownToPDFTool({ className = '' }: MarkdownToPDFToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    // State
    const [inputMode, setInputMode] = useState<InputMode>('manual');
    const [file, setFile] = useState<File | null>(null);
    const [manualMarkdown, setManualMarkdown] = useState<string>(`# Welcome to Markdown to PDF

This tool converts your **Markdown** content to a beautiful PDF document.

## Features

- Live preview of your markdown
- Multiple themes (light, dark, GitHub style)
- Custom page sizes (A4, Letter, Legal)
- GitHub Flavored Markdown support

## Example Code

\`\`\`javascript
function hello() {
    console.log("Hello, World!");
}
\`\`\`

## Table Example

| Feature | Status |
|---------|--------|
| Tables | ✅ |
| Task Lists | ✅ |
| Code Blocks | ✅ |

Enjoy converting your Markdown to PDF!
`);
    const [showPreview, setShowPreview] = useState(true);
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // Options
    const [pageSize, setPageSize] = useState<MarkdownPageSize>('a4');
    const [theme, setTheme] = useState<MarkdownTheme>('light');
    const [gfm, setGfm] = useState(true);
    const [syntaxHighlight, setSyntaxHighlight] = useState(true);

    /**
     * Parse markdown to HTML for preview
     */
    const previewHtml = useMemo(() => {
        if (!manualMarkdown) return '';
        try {
            marked.setOptions({
                gfm: gfm,
                breaks: true,
            });
            return marked.parse(manualMarkdown) as string;
        } catch {
            return '<p>Error parsing markdown</p>';
        }
    }, [manualMarkdown, gfm]);

    /**
     * Handle file selected from uploader
     */
    const handleFilesSelected = useCallback(async (files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setResultBlob(null);
            setError(null);

            // Read file content and display in editor
            try {
                const content = await files[0].text();
                setManualMarkdown(content);
            } catch (err) {
                console.error('Failed to read file:', err);
            }
        }
    }, []);

    /**
     * Handle file upload error
     */
    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    /**
     * Handle conversion
     */
    const handleConvert = useCallback(async () => {
        const content = inputMode === 'upload' && file
            ? await file.text()
            : manualMarkdown;

        if (!content.trim()) {
            setError('Please enter some Markdown content or upload a file.');
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        setError(null);

        try {
            const options = {
                pageSize,
                theme,
                gfm,
                syntaxHighlight,
            };

            // Create a virtual file from the content
            const virtualFile = new File([content], 'document.md', { type: 'text/markdown' });

            const output = await markdownToPDF(
                virtualFile,
                options,
                (prog) => setProgress(prog)
            );

            if (output.success && output.result) {
                setResultBlob(output.result as Blob);
            } else {
                setError(output.error?.message || 'Failed to convert Markdown.');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred.');
        } finally {
            setIsProcessing(false);
        }
    }, [inputMode, file, manualMarkdown, pageSize, theme, gfm, syntaxHighlight]);

    /**
     * Reset state
     */
    const handleReset = useCallback(() => {
        setFile(null);
        setResultBlob(null);
        setError(null);
        setProgress(0);
    }, []);

    const hasContent = inputMode === 'upload' ? file !== null : manualMarkdown.trim().length > 0;
    const canProcess = hasContent && !isProcessing;

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            {/* Input Mode Tabs */}
            <div className="flex gap-2 p-1 bg-muted/30 rounded-lg">
                <button
                    type="button"
                    onClick={() => setInputMode('manual')}
                    className={`
                        flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md
                        text-sm font-medium transition-all duration-200
                        ${inputMode === 'manual'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }
                    `}
                >
                    <Type className="w-4 h-4" />
                    {tTools('markdownToPdf.manualInput') || 'Write Markdown'}
                </button>
                <button
                    type="button"
                    onClick={() => setInputMode('upload')}
                    className={`
                        flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md
                        text-sm font-medium transition-all duration-200
                        ${inputMode === 'upload'
                            ? 'bg-background text-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-foreground'
                        }
                    `}
                >
                    <Upload className="w-4 h-4" />
                    {tTools('markdownToPdf.uploadFile') || 'Upload File'}
                </button>
            </div>

            {/* Upload Mode - File Uploader */}
            {inputMode === 'upload' && !file && (
                <FileUploader
                    accept={['.md', '.markdown', 'text/markdown', 'text/plain']}
                    multiple={false}
                    maxFiles={1}
                    onFilesSelected={handleFilesSelected}
                    onError={handleUploadError}
                    disabled={isProcessing}
                    label={tTools('markdownToPdf.uploadLabel') || 'Upload Markdown File'}
                    description={tTools('markdownToPdf.uploadDescription') || 'Drag and drop a .md or .markdown file to convert to PDF.'}
                />
            )}

            {/* Editor & Preview - Show in manual mode OR after file upload */}
            {(inputMode === 'manual' || (inputMode === 'upload' && file)) && (
                <div className="space-y-4">
                    {/* File info for upload mode */}
                    {inputMode === 'upload' && file && (
                        <Card className="p-6" >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-foreground">{file.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {(file.size / 1024).toFixed(2)} KB
                                    </p>
                                </div>
                                <Button variant="ghost" size="sm" onClick={handleReset} disabled={isProcessing}>
                                    {t('buttons.clear') || 'Clear'}
                                </Button>
                            </div>
                        </Card>
                    )}

                    {/* Preview Toggle */}
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={() => setShowPreview(!showPreview)}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            {showPreview
                                ? (tTools('markdownToPdf.hidePreview') || 'Hide Preview')
                                : (tTools('markdownToPdf.showPreview') || 'Show Preview')
                            }
                        </button>
                    </div>

                    {/* Editor and Preview Container */}
                    <div className={`grid gap-4 ${showPreview ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
                        {/* Markdown Editor */}
                        <div className="space-y-2">
                            <Label className="block" htmlFor="markdowntopdftool-field-1">
                                {tTools('markdownToPdf.editorLabel') || 'Markdown Editor'}
                            </Label>
                            <Textarea
                                value={manualMarkdown}
                                onChange={(e) => {
                                    setManualMarkdown(e.target.value);
                                    setResultBlob(null);
                                }}
                                disabled={isProcessing}
                                placeholder="# Enter your Markdown here..."
                                className="w-full h-[400px] resize-none disabled:opacity-50 disabled:cursor-not-allowed" id="markdowntopdftool-field-1" aria-label={tTools('markdownToPdf.editorLabel') || 'Markdown Editor'}
                            />
                        </div>

                        {/* Live Preview */}
                        {showPreview && (
                            <div className="space-y-2">
                                <Label className="block">
                                    {tTools('markdownToPdf.previewLabel') || 'Preview'}
                                </Label>
                                <div
                                    className={`
                                        h-[400px] p-4 overflow-auto
                                        border border-border
                                        rounded-md
                                        prose prose-sm max-w-none
                                        ${theme === 'dark' ? 'bg-gray-900 text-white prose-invert' : 'bg-white'}
                                    `}
                                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(previewHtml) }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div
                    className="p-4 rounded-md bg-red-50 border border-red-200 text-red-700"
                    role="alert"
                >
                    <p className="text-sm">{error}</p>
                </div>
            )}

            {/* Conversion Options */}
            <Card className="p-6" >
                <h3 className="text-lg font-medium text-foreground mb-4">
                    {tTools('markdownToPdf.optionsTitle') || 'Conversion Options'}
                </h3>

                <div className="space-y-4">
                    {/* Theme */}
                    <div>
                        <Label className="block mb-2">
                            {tTools('markdownToPdf.themeLabel') || 'Theme'}
                        </Label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['light', 'dark', 'github'] as MarkdownTheme[]).map((th) => (
                                <button
                                    key={th}
                                    type="button"
                                    onClick={() => setTheme(th)}
                                    disabled={isProcessing}
                                    className={`
                                        px-4 py-2 rounded-md border text-sm font-medium capitalize
                                        transition-colors duration-200
                                        ${theme === th
                                            ? 'border-primary bg-primary text-primary-foreground'
                                            : 'border-border hover:bg-muted/50'
                                        }
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                    `}
                                >
                                    {th}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Page Size */}
                    <div>
                        <Label className="block mb-2">
                            {tTools('markdownToPdf.pageSizeLabel') || 'Page Size'}
                        </Label>
                        <div className="grid grid-cols-3 gap-2">
                            {(['a4', 'letter', 'legal'] as MarkdownPageSize[]).map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => setPageSize(size)}
                                    disabled={isProcessing}
                                    className={`
                                        px-4 py-2 rounded-md border text-sm font-medium uppercase
                                        transition-colors duration-200
                                        ${pageSize === size
                                            ? 'border-primary bg-primary text-primary-foreground'
                                            : 'border-border hover:bg-muted/50'
                                        }
                                        disabled:opacity-50 disabled:cursor-not-allowed
                                    `}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* GFM Support */}
                    <Label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox

                            checked={gfm}
                            onCheckedChange={(checked) => setGfm((checked === true))}
                            disabled={isProcessing}

                        />
                        <span className="text-sm text-foreground">
                            {tTools('markdownToPdf.gfmLabel') || 'Enable GitHub Flavored Markdown (tables, task lists, etc.)'}
                        </span>
                    </Label>

                    {/* Syntax Highlighting */}
                    <Label className="flex items-center gap-3 cursor-pointer">
                        <Checkbox

                            checked={syntaxHighlight}
                            onCheckedChange={(checked) => setSyntaxHighlight((checked === true))}
                            disabled={isProcessing}

                        />
                        <span className="text-sm text-foreground">
                            {tTools('markdownToPdf.syntaxHighlightLabel') || 'Enable syntax highlighting for code blocks'}
                        </span>
                    </Label>
                </div>
            </Card>

            {/* Processing Progress */}
            {isProcessing && (
                <ProcessingProgress
                    progress={progress}
                    status="processing"
                    message="Converting Markdown to PDF..."
                    showPercentage
                />
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
                <Button
                    variant="default"
                    size="lg"
                    onClick={handleConvert}
                    disabled={!canProcess}
                    loading={isProcessing}
                >
                    <FileType className="w-4 h-4 mr-2" />
                    {isProcessing
                        ? (t('status.processing') || 'Processing...')
                        : (tTools('markdownToPdf.convertButton') || 'Convert to PDF')
                    }
                </Button>

                {resultBlob && (
                    <DownloadButton
                        file={resultBlob}
                        filename={file ? `${file.name.replace(/\.(md|markdown)$/i, '')}.pdf` : 'document.pdf'}
                        variant="secondary"
                        size="lg"
                    />
                )}
            </div>

            {/* Success Message */}
            {resultBlob && (
                <div
                    className="p-4 rounded-md bg-green-50 border border-green-200 text-green-700"
                    role="status"
                >
                    <p className="text-sm font-medium">
                        {tTools('markdownToPdf.successMessage') || 'PDF created successfully! Click download to save.'}
                    </p>
                </div>
            )}
        </div>
    );
}

export default MarkdownToPDFTool;
