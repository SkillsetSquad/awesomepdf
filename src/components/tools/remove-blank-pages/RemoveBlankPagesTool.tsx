'use client';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Slider } from '@/components/ui/slider';

import React, { useState, useCallback, useId, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { configurePdfjsWorker } from '@/lib/pdf/loader';
import { removeBlankPages } from '@/lib/pdf/processors/remove-blank-pages';
import type { ProcessOutput } from '@/types/pdf';
import { Check, CircleAlert, Eye, FileCheck, FileText, Info, Loader2, Trash2, Undo2 } from 'lucide-react';

interface PageInfo {
  pageNumber: number;
  entropy: number;
  dataUrl: string;
  aspectRatio: number;
}

export interface RemoveBlankPagesToolProps {
  className?: string;
}

export function RemoveBlankPagesTool({ className = '' }: RemoveBlankPagesToolProps) {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');
  const tErrors = useTranslations('errors');
  const locale = useLocale();
  const thresholdId = useId();

  // File states
  const [file, setFile] = useState<File | null>(null);
  const [pages, setPages] = useState<PageInfo[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzingProgress, setAnalyzingProgress] = useState(0);

  // Configuration states
  const [threshold, setThreshold] = useState(99);
  const [userOverrides, setUserOverrides] = useState<Record<number, boolean>>({});
  const [filterMode, setFilterMode] = useState<'all' | 'blanks' | 'keeps'>('all');

  // Process & outcome states
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [removedCount, setRemovedCount] = useState(0);

  const cancelledRef = useRef(false);

  // Helper: calculate Shannon entropy on imageData
  const calculateEntropy = (imageData: ImageData): number => {
    const data = imageData.data;
    const totalPixels = data.length / 4;
    const histogram = new Float32Array(256);

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
      histogram[gray]++;
    }

    let entropy = 0;
    const eps = 1e-10;

    for (let i = 0; i < 256; i++) {
      const prob = histogram[i] / totalPixels;
      if (prob > 0) {
        entropy -= prob * Math.log2(prob + eps);
      }
    }
    return entropy;
  };

  // Check if a page is considered blank (auto + override)
  const isPageBlankAuto = (entropy: number, currentThreshold: number): boolean => {
    const entropyLimit = (100 - currentThreshold) * 0.02;
    return entropy < Math.max(0.01, entropyLimit);
  };

  const isPageRemoved = useCallback((page: PageInfo) => {
    const override = userOverrides[page.pageNumber];
    if (override !== undefined) {
      return override;
    }
    return isPageBlankAuto(page.entropy, threshold);
  }, [userOverrides, threshold]);

  /**
   * Render and analyze PDF pages in the background
   */
  const loadAndAnalyzePdf = async (selectedFile: File) => {
    setIsAnalyzing(true);
    setAnalyzingProgress(0);
    setPages([]);
    setUserOverrides({});
    setError(null);
    setResult(null);

    try {
      const pdfjsLib = await import('pdfjs-dist');
      configurePdfjsWorker(pdfjsLib);

      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdfDoc.numPages;

      const loadedPages: PageInfo[] = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdfDoc.getPage(i);
        const viewport = page.getViewport({ scale: 0.3 }); // Small preview for faster rendering

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        if (context) {
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;

          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const entropy = calculateEntropy(imageData);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.6);

          loadedPages.push({
            pageNumber: i,
            entropy,
            dataUrl,
            aspectRatio: viewport.width / viewport.height,
          });
        }

        setAnalyzingProgress(Math.round((i / totalPages) * 100));
        // Progressive update for responsive loading feel
        setPages([...loadedPages]);
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : tErrors('processingFailed'));
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleFileSelected = (files: File[]) => {
    if (files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);
      loadAndAnalyzePdf(selectedFile);
    }
  };

  const handleTogglePage = (pageNumber: number) => {
    const page = pages.find(p => p.pageNumber === pageNumber);
    if (!page) return;

    const autoIsBlank = isPageBlankAuto(page.entropy, threshold);
    const currentlyRemoved = isPageRemoved(page);

    setUserOverrides(prev => {
      const next = { ...prev };
      if (!currentlyRemoved === autoIsBlank) delete next[pageNumber];
      else next[pageNumber] = !currentlyRemoved;
      return next;
    });
  };

  const handleResetOverrides = () => {
    setUserOverrides({});
  };

  const handleSelectAllAsBlank = () => {
    const overrides: Record<number, boolean> = {};
    pages.forEach(p => {
      overrides[p.pageNumber] = true;
    });
    setUserOverrides(overrides);
  };

  const handleKeepAll = () => {
    const overrides: Record<number, boolean> = {};
    pages.forEach(p => {
      overrides[p.pageNumber] = false;
    });
    setUserOverrides(overrides);
  };

  const handleProcess = useCallback(async () => {
    if (!file || pages.length === 0) return;
    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);
    setRemovedCount(0);

    // Collect 1-indexed pages that are flagged for deletion
    const explicitPagesToRemove = pages
      .filter(p => isPageRemoved(p))
      .map(p => p.pageNumber);

    if (explicitPagesToRemove.length === pages.length) {
      setError(t('removeBlankPages.keepAtLeastOne'));
      setStatus('error');
      return;
    }

    try {
      const output: ProcessOutput = await removeBlankPages(
        file,
        { explicitPagesToRemove },
        (prog) => {
          if (!cancelledRef.current) setProgress(prog);
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setRemovedCount(explicitPagesToRemove.length);
        setStatus('complete');
      } else {
        setError(output.error?.message || tErrors('processingFailed'));
        setStatus('error');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : tErrors('processingFailed'));
      setStatus('error');
    }
  }, [file, pages, isPageRemoved, t, tErrors]);

  const handleClear = () => {
    setFile(null);
    setPages([]);
    setResult(null);
    setError(null);
    setUserOverrides({});
    setStatus('idle');
  };

  const isProcessing = status === 'processing';

  // Computed visual counters
  const blankPagesCount = pages.filter(p => isPageRemoved(p)).length;
  const keepPagesCount = pages.length - blankPagesCount;

  // Filter pages to display in grid
  const displayedPages = pages.filter(p => {
    const removed = isPageRemoved(p);
    if (filterMode === 'blanks') return removed;
    if (filterMode === 'keeps') return !removed;
    return true;
  });

  return (
    <div className={`space-y-6 ${className}`.trim()}>
      {!file && <FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1}
        onFilesSelected={handleFileSelected} onError={setError} disabled={isProcessing}
        label={tTools('removeBlankPages.uploadLabel')} description={tTools('removeBlankPages.uploadDescription')} />}

      {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}

      {isAnalyzing && <Card className="p-6">
        <div role="status" className="flex items-center gap-2 text-sm"><Loader2 aria-hidden="true" className="size-4 animate-spin" />{tTools('removeBlankPages.analyzingPages')}</div>
        <Progress value={analyzingProgress} aria-label={tTools('removeBlankPages.analyzingPages')} />
        <p className="text-sm tabular-nums text-muted-foreground">{analyzingProgress}%</p>
      </Card>}

      {file && !isAnalyzing && status !== 'complete' && <div className="space-y-6">
        <Card className="flex flex-row items-center justify-between gap-4 p-4">
          <div className="flex min-w-0 items-center gap-3"><FileText aria-hidden="true" className="size-5 shrink-0 text-muted-foreground" />
            <div className="min-w-0"><p className="truncate text-sm font-medium" title={file.name}>{file.name}</p>
              <p className="text-sm text-muted-foreground">{t('removeBlankPages.pagesCount', { count: pages.length, size: (file.size / (1024 * 1024)).toFixed(2) })}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={handleClear} disabled={isProcessing}>{t('buttons.remove')}</Button>
        </Card>

        <Card className="p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <Label id={`${thresholdId}-label`}>{tTools('removeBlankPages.sensitivity')}<span className="ms-auto tabular-nums">{threshold}%</span></Label>
              <Slider value={[threshold]} onValueChange={([value]) => setThreshold(value)} min={90} max={100} step={1}
                disabled={isProcessing} dir={locale === 'ar' ? 'rtl' : 'ltr'} aria-labelledby={`${thresholdId}-label`} aria-describedby={`${thresholdId}-hint`} />
              <p id={`${thresholdId}-hint`} className="text-sm text-muted-foreground">{tTools('removeBlankPages.sensitivityHint')}</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium">{t('removeBlankPages.summaryTitle')}</h3>
              <div className="flex flex-wrap gap-2" aria-live="polite">
                <Badge variant="outline">{t('removeBlankPages.totalLabel', { count: pages.length })}</Badge>
                <Badge variant="destructive">{t('removeBlankPages.blankLabel', { count: blankPagesCount })}</Badge>
                <Badge variant="secondary">{t('removeBlankPages.keepLabel', { count: keepPagesCount })}</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={handleResetOverrides} disabled={isProcessing || Object.keys(userOverrides).length === 0}><Undo2 aria-hidden="true" />{t('removeBlankPages.resetBtn')}</Button>
                <Button variant="outline" size="sm" onClick={handleKeepAll} disabled={isProcessing || pages.length === 0}>{t('removeBlankPages.keepAllBtn')}</Button>
                <Button variant="outline" size="sm" onClick={handleSelectAllAsBlank} disabled={isProcessing || pages.length === 0}>{t('removeBlankPages.deleteAllBtn')}</Button>
              </div>
            </div>
          </div>
          {pages.length > 0 && keepPagesCount === 0 && <Alert><Info aria-hidden="true" /><AlertDescription>{t('removeBlankPages.keepAtLeastOne')}</AlertDescription></Alert>}
          <Button onClick={handleProcess} disabled={isProcessing || keepPagesCount === 0 || pages.length === 0} loading={isProcessing} className="w-full whitespace-normal sm:w-fit">
            <Trash2 aria-hidden="true" />{isProcessing ? t('status.processing') : tTools('removeBlankPages.removeButton')}
          </Button>
        </Card>

        <Tabs value={filterMode} onValueChange={value => { if (value === 'all' || value === 'blanks' || value === 'keeps') setFilterMode(value); }} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <TabsList className="grid h-auto w-full grid-cols-3">
            <TabsTrigger className="h-auto whitespace-normal py-2" value="all" disabled={isProcessing}>{t('removeBlankPages.allTab', { count: pages.length })}</TabsTrigger>
            <TabsTrigger className="h-auto whitespace-normal py-2" value="blanks" disabled={isProcessing}>{t('removeBlankPages.blankTab', { count: blankPagesCount })}</TabsTrigger>
            <TabsTrigger className="h-auto whitespace-normal py-2" value="keeps" disabled={isProcessing}>{t('removeBlankPages.keepTab', { count: keepPagesCount })}</TabsTrigger>
          </TabsList>
          {(['all', 'blanks', 'keeps'] as const).map(mode => <TabsContent key={mode} value={mode} className="pt-4">
            {displayedPages.length === 0 ? <Card className="items-center p-6 text-center">
              <Eye aria-hidden="true" className="size-6 text-muted-foreground" /><p className="text-sm text-muted-foreground">{t('removeBlankPages.emptyState')}</p>
            </Card> : <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {displayedPages.map(page => <PageCard key={page.pageNumber} page={page} isRemoved={isPageRemoved(page)} isAutoBlank={isPageBlankAuto(page.entropy, threshold)}
                isManualKeep={userOverrides[page.pageNumber] === false} isManualRemove={userOverrides[page.pageNumber] === true} disabled={isProcessing}
                onToggle={() => handleTogglePage(page.pageNumber)} />)}
            </div>}
          </TabsContent>)}
        </Tabs>
      </div>}

      {status === 'complete' && result && <Card className="items-center p-6 text-center">
        <FileCheck aria-hidden="true" className="size-6 text-primary" />
        <div role="status" className="space-y-2"><h3 className="text-base font-semibold">{tTools('removeBlankPages.successMessage')}</h3>
          <p className="text-sm text-muted-foreground">{removedCount > 0 ? t('removeBlankPages.successRemoved', { count: removedCount }) : t('removeBlankPages.successNoChange')}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <DownloadButton file={result} filename={file?.name.replace(/\.pdf$/i, '_no_blanks.pdf') || 'cleaned_document.pdf'} showFileSize />
          <Button variant="outline" onClick={handleClear}>{t('removeBlankPages.processNew')}</Button>
        </div>
      </Card>}

      {isProcessing && <ProcessingProgress progress={progress} status={status} onCancel={() => { cancelledRef.current = true; setStatus('idle'); }} showPercentage />}
    </div>
  );
}

interface PageCardProps {
  page: PageInfo;
  isRemoved: boolean;
  isAutoBlank: boolean;
  isManualKeep: boolean;
  isManualRemove: boolean;
  disabled: boolean;
  onToggle: () => void;
}

function PageCard({ page, isRemoved, isAutoBlank, isManualKeep, isManualRemove, disabled, onToggle }: PageCardProps) {
  const t = useTranslations('common.removeBlankPages');
  const pageLabel = t('pageNumber', { page: page.pageNumber });
  const action = isRemoved ? t('clickToKeep') : t('clickToDelete');
  return <Card className="gap-0 overflow-hidden py-0">
    <Button variant="ghost" disabled={disabled} aria-pressed={isRemoved} aria-label={`${pageLabel}: ${action}`}
      className="h-auto min-w-0 w-full flex-col items-stretch gap-0 rounded-none p-0 whitespace-normal" onClick={event => {
        const button = event.currentTarget;
        const panel = button.closest<HTMLElement>('[role="tabpanel"]');
        onToggle();
        setTimeout(() => { if (!button.isConnected && document.activeElement === document.body) panel?.focus(); }, 0);
      }}>
      <div className="relative flex w-full items-center justify-center bg-muted p-3" style={{ aspectRatio: page.aspectRatio || 0.707 }}>
        <img src={page.dataUrl} alt="" className={`h-full w-full object-contain ${isRemoved ? 'opacity-40 grayscale' : ''}`} />
        {(isManualRemove || isManualKeep || isAutoBlank) && <Badge className="absolute top-2 end-2" variant={isRemoved ? 'destructive' : 'secondary'}>
          {isManualRemove ? t('forceDelete') : isManualKeep ? t('forceKeep') : t('blankBadge')}
        </Badge>}
      </div>
      <div className="space-y-2 border-t p-3 text-start">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm"><span>{pageLabel}</span>{isRemoved ? <Trash2 aria-hidden="true" className="size-4 text-destructive" /> : <Check aria-hidden="true" className="size-4 text-muted-foreground" />}</div>
        <p className="text-xs tabular-nums text-muted-foreground">{t('entropyLabel', { entropy: page.entropy.toFixed(3) })}</p>
        <p className="text-xs text-muted-foreground">{action}</p>
      </div>
    </Button>
  </Card>;
}

export default RemoveBlankPagesTool;
