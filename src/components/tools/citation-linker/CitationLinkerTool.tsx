'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { FileText as UIFileText } from 'lucide-react';

import { Checkbox } from '@/components/ui/checkbox';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { PDFPagePreview } from '../PDFPagePreview';
import { linkCitations } from '@/lib/pdf/processors/citation-linker';
import type { ProcessOutput } from '@/types/pdf';
import {
  GitBranch,
  Settings2,
  Link2,
  Check,
  ShieldCheck
} from 'lucide-react';

export interface CitationLinkerToolProps {
  className?: string;
}

interface CitationItem {
  id: string;
  marker: string;
  pageNum: number;
  rect: number[];
  url: string;
  refText: string;
  refPage?: number;
}

export function CitationLinkerTool({ className = '' }: CitationLinkerToolProps) {
  const t = useTranslations('common');

  // File States
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingMetadata, setIsLoadingMetadata] = useState(false);

  // Status & Outcomes
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Citation Data
  const [citations, setCitations] = useState<CitationItem[]>([]);
  const [selectedCitation, setSelectedCitation] = useState<CitationItem | null>(null);

  // Customization
  const [detectDoi, setDetectDoi] = useState(true);
  const [fallbackToPageJump, setFallbackToPageJump] = useState(true);
  const [editUrl, setEditUrl] = useState('');

  const [previewPage, setPreviewPage] = useState(1);
  const cancelledRef = useRef(false);

  const operationRef = useRef(0);
  useEffect(() => () => { operationRef.current += 1; }, []);

  /**
   * Handle uploaded file and trigger scan
   */
  const handleFileSelected = async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    const operation = ++operationRef.current;
    setPreviewPage(1);
    setTotalPages(0);
    setFile(selectedFile);
    setIsLoadingMetadata(true);
    setError(null);
    setResult(null);
    setCitations([]);
    setSelectedCitation(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      if (operation !== operationRef.current) return;
      setTotalPages(pdf.getPageCount());
      setIsLoadingMetadata(false);

      // Scan the selected document after metadata is ready.
      await handleScanCitations(selectedFile);

    } catch (err) {
      if (operation !== operationRef.current) return;
      console.error(err);
      setError('Failed to parse PDF metadata. File might be corrupted.');
    } finally {
      if (operation === operationRef.current) setIsLoadingMetadata(false);
    }
  };

  /**
   * Scan Citations from PDF
   */
  const handleScanCitations = async (targetFile: File) => {
    const operation = ++operationRef.current;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      // Just scan without citationsList to find existing citations
      const output: ProcessOutput = await linkCitations(
        targetFile,
        {
          detectDoi,
          fallbackToPageJump,
        },
        (prog, message) => {
          if (!cancelledRef.current && operation === operationRef.current) {
            setProgress(prog);
            setProgressMessage(message || 'Analyzing bibliography patterns...');
          }
        }
      );

      if (cancelledRef.current || operation !== operationRef.current) return;

      if (output.success) {
        setStatus('idle'); // Back to idle so user can review and edit in UI
        if (output.metadata && output.metadata.citations) {
          const list = output.metadata.citations as CitationItem[];
          setCitations(list);
          if (list.length > 0) {
            setSelectedCitation(list[0]);
            setEditUrl(list[0].url);
          }
        }
      } else {
        setError(output.error?.message || 'Scanning citations failed.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current && operation === operationRef.current) {
        setError(err instanceof Error ? err.message : 'Error scanning citations.');
        setStatus('error');
      }
    }
  };

  /**
   * Apply edits and compile final PDF with links injected
   */
  const handleApplyLinks = async () => {
    if (!file) return;

    const operation = ++operationRef.current;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(70);
    setProgressMessage('Injecting PDF link elements...');
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await linkCitations(
        file,
        {
          detectDoi,
          fallbackToPageJump,
          citationsList: citations, // Pass modified list back to processor
        },
        (prog) => {
          if (!cancelledRef.current && operation === operationRef.current) {
            setProgress(prog);
          }
        }
      );

      if (cancelledRef.current || operation !== operationRef.current) return;

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || 'Failed to inject links.');
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current && operation === operationRef.current) {
        setError(err instanceof Error ? err.message : 'Linking process error.');
        setStatus('error');
      }
    }
  };

  /**
   * Save edited URL for the currently selected citation item
   */
  const handleSaveUrl = () => {
    if (!selectedCitation) return;
    setCitations((prev) =>
      prev.map((c) =>
        c.id === selectedCitation.id ? { ...c, url: editUrl } : c
      )
    );
    setSelectedCitation((prev) => prev ? { ...prev, url: editUrl } : null);
  };

  const handleClearFile = () => {
    operationRef.current += 1;
    setIsLoadingMetadata(false);
    setError(null);
    setFile(null);
    setTotalPages(0);
    setResult(null);
    setCitations([]);
    setSelectedCitation(null);
    setStatus('idle');
  };

  const handleCancel = () => {
    operationRef.current += 1;
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  return (
    <div className={`space-y-6 ${className}`.trim()}>

      {/* File Upload Zone */}
      {!file && (
        <FileUploader
          accept={['application/pdf']}
          multiple={false}
          onFilesSelected={handleFileSelected}
          onError={setError}
          disabled={isProcessing || isLoadingMetadata}
          label={t('citationLinker.uploadLabel')}
          description={t('citationLinker.uploadDescription')}
        />
      )}

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <p className="text-sm font-semibold">{error}</p>
        </AlertDescription></Alert>
      )}

      {/* File Metadata Overview */}
      {file && (
        <Card  className="p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <UIFileText className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
            <div className="min-w-0">
              <p className="font-semibold text-sm text-foreground truncate max-w-[280px]" title={file.name}>
                {file.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {totalPages > 0 ? t('accessibility.pageOf', { current: previewPage, total: totalPages }) : t('citationLinker.scanningMetadata')} • {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClearFile} disabled={isProcessing}>
            {t('buttons.remove') || 'Remove'}
          </Button>
        </Card>
      )}

      {/* Main Workspace (Visible after citation scanning completes) */}
      {file && totalPages > 0 && !isProcessing && status !== 'complete' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: Citation Configuration & List */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Card  className="flex-1 p-6 border flex flex-col justify-between">

              <div className="space-y-4">
                <div className="border-b border-border pb-3">
                  <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-primary" />
                    {t('citationLinker.optionsTitle')}
                  </h3>
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-3 cursor-pointer">
                    <Checkbox

                      checked={detectDoi}
                      onCheckedChange={(checked) => setDetectDoi((checked === true))}

                    />
                    <span className="text-xs font-semibold text-foreground">{t('citationLinker.detectDoi')}</span>
                  </Label>
                  <Label className="flex items-center gap-3 cursor-pointer">
                    <Checkbox

                      checked={fallbackToPageJump}
                      onCheckedChange={(checked) => setFallbackToPageJump((checked === true))}

                    />
                    <span className="text-xs font-semibold text-foreground">{t('citationLinker.enableGoto')}</span>
                  </Label>
                </div>

                {/* Edit Link input */}
                {selectedCitation && (
                  <div className="p-4 border rounded-md space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-foreground">{t('citationLinker.editingCitation', { marker: selectedCitation.marker })}</span>
                      <span className="text-xs opacity-60">{t('citationLinker.citationPage', { page: selectedCitation.pageNum })}</span>
                    </div>

                    <p className="text-sm leading-relaxed line-clamp-2 text-muted-foreground">
                      {t('citationLinker.citationRef', { ref: selectedCitation.refText })}
                    </p>

                    <div className="flex gap-2">
                      <Input
                        aria-label={t('citationLinker.doiPlaceholder')}
                        type="text"
                        value={editUrl}
                        onChange={(e) => setEditUrl(e.target.value)}
                        placeholder={t('citationLinker.doiPlaceholder')}
                        className="flex-1"
                      />
                      <Button size="sm" variant="default" onClick={handleSaveUrl} aria-label={t('buttons.save')}>
                        <Check className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Citations checklist */}
                <div className="space-y-2">
                  <Label className="text-muted-foreground uppercase tracking-wider">
                    {t('citationLinker.citationListTitle', { count: citations.length })}
                  </Label>
                  <Button variant="outline" onClick={() => handleScanCitations(file)}>{t('buttons.process')}</Button>
                  {citations.length === 0 && <Alert><AlertDescription><p className="font-medium">{t('citationLinker.emptyTitle')}</p><p>{t('citationLinker.emptyDescription')}</p></AlertDescription></Alert>}
                  <div className="space-y-1.5 max-h-[240px] overflow-y-auto">
                    {citations.map((c) => (
                      <Button
                        variant={selectedCitation?.id === c.id ? 'secondary' : 'outline'}
                        aria-pressed={selectedCitation?.id === c.id}
                        key={c.id}
                        onClick={() => {
                          setSelectedCitation(c);
                          setEditUrl(c.url);
                          setPreviewPage(c.pageNum);
                        }}
                        className="w-full justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{c.marker}</span>
                          <span className="text-xs text-muted-foreground">{t('citationLinker.citationPage', { page: c.pageNum })}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {c.url ? (
                            <span className="text-xs text-emerald-500 font-semibold flex items-center gap-0.5">
                              <Link2 className="w-3 h-3" /> DOI
                            </span>
                          ) : (
                            <span className="text-xs text-muted-foreground font-medium">{t('citationLinker.gotoPage')}</span>
                          )}
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Apply Button */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={handleApplyLinks}
                  disabled={citations.length === 0}
                >
                  <GitBranch className="w-5 h-5" />
                  {t('citationLinker.injectLink')}
                </Button>
              </div>
            </Card>
          </div>

          <Card className="lg:col-span-7 min-w-0 p-4 space-y-4">
            <h3 className="font-semibold">{t('documentPreview.source')}</h3>
            <PDFPagePreview file={file} label={t('documentPreview.source')} selectedPage={previewPage} onPageChange={setPreviewPage} />
          </Card>

        </div>
      )}

      {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={handleCancel} showPercentage />}

      {/* Finished Stage (Success screen) */}
      {status === 'complete' && result && (
        <Card  className="p-8 border text-center gap-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-10 h-10" />
          </div>

          <div className="space-y-2 max-w-sm mx-auto">
            <h3 className="text-base font-semibold text-foreground">{t('citationLinker.injectLink')}</h3>
            <p className="text-xs text-muted-foreground">
              {t('citationLinker.successDesc', { count: citations.length })}
            </p>
          </div>

          <PDFPagePreview file={result} label={t('documentPreview.result')} />
          <div className="flex gap-3 justify-center max-w-xs mx-auto">
            <DownloadButton
              file={result}
              filename={file?.name.replace('.pdf', '_linked.pdf') || 'citations_linked.pdf'}
              variant="default"
              size="lg"
              className="flex-1"
              showFileSize
            />
          </div>
        </Card>
      )}

    </div>
  );
}

export default CitationLinkerTool;
