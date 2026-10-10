'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert, CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { emailToPDF, type EmailToPDFOptions, type EmailPageSize } from '@/lib/pdf/processors/email-to-pdf';
import { Mail } from 'lucide-react';

export interface EmailToPDFToolProps {
    className?: string;
}

export function EmailToPDFTool({ className = '' }: EmailToPDFToolProps) {
    const t = useTranslations('common');
    const tTools = useTranslations('tools');

    const [file, setFile] = useState<File | null>(null);
    const [resultBlob, setResultBlob] = useState<Blob | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);

    const [pageSize, setPageSize] = useState<EmailPageSize>('a4');
    const [includeCcBcc, setIncludeCcBcc] = useState(true);
    const [includeAttachments, setIncludeAttachments] = useState(true);
    const [dateFormat, setDateFormat] = useState<'full' | 'short' | 'iso'>('full');
    const [timezone, setTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

    const handleFilesSelected = useCallback((files: File[]) => {
        if (files.length > 0) {
            setFile(files[0]);
            setResultBlob(null);
            setError(null);
        }
    }, []);

    const handleUploadError = useCallback((errorMessage: string) => {
        setError(errorMessage);
    }, []);

    const handleConvert = useCallback(async () => {
        if (!file) {
            setError('Please select an email file.');
            return;
        }

        setIsProcessing(true);
        setProgress(0);
        setError(null);

        try {
            const options: EmailToPDFOptions = {
                pageSize,
                includeCcBcc,
                includeAttachments,
                dateFormat,
                timezone,
            };

            const output = await emailToPDF(file, options, (prog) => setProgress(prog));

            if (output.success && output.result) {
                setResultBlob(output.result as Blob);
            } else {
                setError(output.error?.message || 'Failed to convert email.');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred.');
        } finally {
            setIsProcessing(false);
        }
    }, [file, pageSize, includeCcBcc, includeAttachments, dateFormat, timezone]);

    const handleReset = useCallback(() => {
        setFile(null);
        setResultBlob(null);
        setError(null);
        setProgress(0);
    }, []);

    const hasFile = file !== null;
    const canProcess = hasFile && !isProcessing;

    return (
        <div className={`space-y-6 ${className}`.trim()}>
            <FileUploader
                accept={['.eml', '.msg', 'message/rfc822', 'application/vnd.ms-outlook']}
                multiple={false}
                maxFiles={1}
                onFilesSelected={handleFilesSelected}
                onError={handleUploadError}
                disabled={isProcessing}
                label={tTools('emailToPdf.uploadLabel') || 'Upload Email File'}
                description={tTools('emailToPdf.uploadDescription') || 'Drag and drop an email file (.eml or .msg) to convert to PDF.'}
            />

            {error && (
                <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
                    <p className="text-sm">{error}</p>
                </AlertDescription></Alert>
            )}

            {hasFile && (
                <Card className="p-6" >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">{file.name}</p>
                            <p className="text-sm text-muted-foreground">{(file.size / 1024).toFixed(2)} KB</p>
                        </div>
                        <Button variant="ghost" size="sm" onClick={handleReset} disabled={isProcessing}>
                            {t('buttons.clear') || 'Clear'}
                        </Button>
                    </div>
                </Card>
            )}

            {hasFile && (
                <Card className="p-6" >
                    <h3 className="text-lg font-medium text-foreground mb-4">
                        {tTools('emailToPdf.optionsTitle') || 'Conversion Options'}
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <Label className="block mb-2">
                                {tTools('emailToPdf.pageSizeLabel') || 'Page Size'}
                            </Label>
                            <div className="grid grid-cols-3 gap-2">
                                {(['a4', 'letter', 'legal'] as EmailPageSize[]).map((size) => (
                                    <Button size="sm" variant={pageSize === size ? 'default' : 'outline'} aria-pressed={pageSize === size}
                                        key={size}
                                        type="button"
                                        onClick={() => setPageSize(size)}
                                        disabled={isProcessing}
                                        className=""
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <Label className="flex items-center gap-3 cursor-pointer">
                            <Checkbox

                                checked={includeCcBcc}
                                onCheckedChange={(checked) => setIncludeCcBcc((checked === true))}
                                disabled={isProcessing}

                            />
                            <span className="text-sm text-foreground">
                                {tTools('emailToPdf.includeCcBccLabel') || 'Include CC/BCC fields'}
                            </span>
                        </Label>

                        <Label className="flex items-center gap-3 cursor-pointer">
                            <Checkbox

                                checked={includeAttachments}
                                onCheckedChange={(checked) => setIncludeAttachments((checked === true))}
                                disabled={isProcessing}

                            />
                            <span className="text-sm text-foreground">
                                {tTools('emailToPdf.includeAttachmentsLabel') || 'Include attachment list'}
                            </span>
                        </Label>

                        <div>
                            <Label className="block mb-2" htmlFor="emailtopdftool-field-1">
                                {tTools('emailToPdf.timezoneLabel') || 'Timezone'}
                            </Label>
                            <Input
                                type="text"
                                value={timezone}
                                onChange={(e) => setTimezone(e.target.value)}
                                disabled={isProcessing}
                                className="w-full" id="emailtopdftool-field-1" aria-label={tTools('emailToPdf.timezoneLabel') || 'Timezone'}
                            />
                        </div>
                    </div>
                </Card>
            )}

            {isProcessing && (
                <ProcessingProgress progress={progress} status="processing" message="Converting email to PDF..." showPercentage />
            )}

            <div className="flex flex-wrap items-center gap-4">
                <Button variant="default" size="lg" onClick={handleConvert} disabled={!canProcess} loading={isProcessing}>
                    <Mail className="w-4 h-4 mr-2" />
                    {isProcessing ? (t('status.processing') || 'Processing...') : (tTools('emailToPdf.convertButton') || 'Convert to PDF')}
                </Button>

                {resultBlob && (
                    <DownloadButton
                        file={resultBlob}
                        filename={file ? `${file.name.replace(/\.(eml|msg)$/i, '')}.pdf` : 'email.pdf'}
                        variant="secondary"
                        size="lg"
                    />
                )}
            </div>

            {resultBlob && (
                <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
                    <p className="text-sm font-medium">{tTools('emailToPdf.successMessage') || 'Email converted successfully!'}</p>
                </AlertDescription></Alert>
            )}
        </div>
    );
}

export default EmailToPDFTool;
