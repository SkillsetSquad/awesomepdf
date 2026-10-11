'use client';
import { Label } from '@/components/ui/label';

import React, { useState, useCallback, useRef, useEffect, useId } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { DifferenceHighlight, type DifferenceHighlightData } from './DifferenceHighlight';
import { loadPdfjs } from '@/lib/pdf/loader';
import type { RenderTask } from 'pdfjs-dist';
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Minimize,
  Maximize2
} from 'lucide-react';

export interface ComparePDFsToolProps {
  className?: string;
}

interface TextWordInfo {
  text: string;
  x: number;
  y: number;
  w: number;
  h: number;
  fontName: string;
  itemIdx: number;
}

interface PageTextContent {
  rawText: string;
  words: TextWordInfo[];
}

interface PDFFile {
  file: File;
  pageCount: number;
  pageTextContents: PageTextContent[];
  // Image buffers for rendering canvases
  pagesImages: string[]; // DataURLs of rendered pages
  pageDimensions: Array<{ width: number; height: number; scale: number }>;
}

interface DiffHighlight extends DifferenceHighlightData {
  category: 'text' | 'header-footer' | 'formatting';
  movedToPageIndex?: number;
  movedToCoords?: { x: number; y: number };
}

interface PageComparisonResult {
  pageIndex1: number; // 0-based index of original file, -1 if inserted page
  pageIndex2: number; // 0-based index of modified file, -1 if deleted page
  hasDifference: boolean;
  highlights1: DiffHighlight[]; // deleted / modified / moved source
  highlights2: DiffHighlight[]; // added / modified / moved dest
  diffPercentage: number;
}

export function ComparePDFsTool({ className = '' }: ComparePDFsToolProps) {
  const t = useTranslations('common');
  const id = useId();
  const uploadRegion1 = useRef<HTMLDivElement>(null);
  const uploadRegion2 = useRef<HTMLDivElement>(null);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  const fullscreenButton = useRef<HTMLButtonElement>(null);
  const focusUpload = useRef<1 | 2 | null>(null);

  // Files state
  const [file1, setFile1] = useState<PDFFile | null>(null);
  const [file2, setFile2] = useState<PDFFile | null>(null);
  useEffect(() => {
    if (focusUpload.current === 1 && !file1) { focusUpload.current = null; uploadRegion1.current?.focus(); }
    if (focusUpload.current === 2 && !file2) { focusUpload.current = null; uploadRegion2.current?.focus(); }
  }, [file1, file2]);

  // Configuration options (Categories)
  const [filterPills, setFilterPills] = useState({
    text: true,
    formatting: true,
    headerFooter: false, // Default ignore header/footer for clean diff
    moved: true
  });

  // Processing & result states
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [error, setError] = useState<string | null>(null);

  const processingRun = useRef(0);
  const cancelLoad = useRef<(() => void) | null>(null);
  useEffect(() => () => { processingRun.current++; cancelLoad.current?.(); }, []);
  const isProcessing = status === 'processing';
  const handleCancel = useCallback(() => {
    processingRun.current++;
    cancelLoad.current?.();
    setStatus('idle');
    setProgress(0);
    setProgressMessage('');
    setError(null);
  }, []);

  // Pagination & pairing outcomes
  const [pairedPages, setPairedPages] = useState<PageComparisonResult[]>([]);
  const [currentPairIdx, setCurrentPairIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => { if (pairedPages.length) resultHeading.current?.focus(); }, [pairedPages]);

  // Synced scroll refs
  const scrollContainer1Ref = useRef<HTMLDivElement>(null);
  const scrollContainer2Ref = useRef<HTMLDivElement>(null);
  const isScrollingSyncRef = useRef(false);
  const scrollFrame = useRef<number | null>(null);
  useEffect(() => () => { if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current); }, []);
  useEffect(() => {
    for (const container of [scrollContainer1Ref.current, scrollContainer2Ref.current]) { if (container) { container.scrollTop = 0; container.scrollLeft = 0; } }
  }, [currentPairIdx]);
  const comparisonContainerRef = useRef<HTMLDivElement>(null);

  /**
   * Load PDF, render pages to DataURL, and extract all words with Bounding Box coordinates
   */
  const loadPDF = useCallback(async (file: File, run: number): Promise<PDFFile | null> => {
    const [pdfjsLib, arrayBuffer] = await Promise.all([loadPdfjs(), file.arrayBuffer()]);
    if (run !== processingRun.current) return null;
    const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
    let renderTask: RenderTask | null = null;
    let destroyed: Promise<void> | undefined;
    const dispose = () => {
      if (destroyed) return destroyed;
      renderTask?.cancel();
      destroyed = loadingTask.destroy().catch(() => {});
      return destroyed;
    };
    const cancel = () => { void dispose(); };
    cancelLoad.current = cancel;
    try {
      const pdf = await loadingTask.promise;
      if (run !== processingRun.current) return null;
      const pageTextContents: PageTextContent[] = [];
      const pagesImages: string[] = [];
      const pageDimensions: PDFFile['pageDimensions'] = [];
      const renderScale = 1.5;
      for (let i = 1; i <= pdf.numPages; i++) {
        if (run !== processingRun.current) return null;
        setProgress(Math.round((i - 1) / pdf.numPages * 100));
        const page = await pdf.getPage(i);
        const canvas = document.createElement('canvas');
        try {
          if (run !== processingRun.current) return null;
          const viewport = page.getViewport({ scale: renderScale });
          pageDimensions.push({ width: viewport.width, height: viewport.height, scale: renderScale });
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) throw new Error('Cannot create the PDF comparison preview.');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          renderTask = page.render({ canvasContext: ctx, viewport });
          await renderTask.promise;
          renderTask = null;
          if (run !== processingRun.current) return null;
          pagesImages.push(canvas.toDataURL('image/jpeg', 0.85));
          const textContent = await page.getTextContent();
          if (run !== processingRun.current) return null;
          const words: TextWordInfo[] = [];
          let rawText = '';
          textContent.items.forEach((item, itemIdx) => {
            if (!('str' in item) || item.str.trim() === '') return;
            const strVal = item.str, tx = item.transform[4], ty = item.transform[5];
            const itemWidth = item.width || 0;
            const itemHeight = item.height || Math.abs(item.transform[3]) || 12;
            const corners = [[tx, ty], [tx + itemWidth, ty], [tx, ty + itemHeight], [tx + itemWidth, ty + itemHeight]]
              .map(([x, y]) => viewport.convertToViewportPoint(x, y));
            const canvasX = Math.min(...corners.map(point => point[0]));
            const canvasY = Math.min(...corners.map(point => point[1]));
            const canvasW = Math.max(2, Math.max(...corners.map(point => point[0])) - canvasX);
            const canvasH = Math.max(2, Math.max(...corners.map(point => point[1])) - canvasY);
            const fontName = item.fontName || '';
            if (/[\u4e00-\u9fa5]/.test(strVal)) {
              const chars = strVal.split(''), charW = canvasW / chars.length;
              chars.forEach((char, charIdx) => words.push({ text: char, x: canvasX + charIdx * charW, y: canvasY, w: charW, h: canvasH, fontName, itemIdx }));
              rawText += strVal;
            } else {
              const tokens = strVal.split(/(\s+)/);
              let currentTokenX = canvasX;
              const pxPerChar = canvasW / (strVal.length || 1);
              tokens.forEach(token => {
                const tokenW = token.length * pxPerChar;
                if (token.trim() !== '') words.push({ text: token, x: currentTokenX, y: canvasY, w: tokenW, h: canvasH, fontName, itemIdx });
                currentTokenX += tokenW;
              });
              rawText += strVal + ' ';
            }
          });
          pageTextContents.push({ rawText, words });
          setProgress(Math.round(i / pdf.numPages * 100));
        } finally {
          page.cleanup();
          canvas.width = 0; canvas.height = 0;
        }
      }
      return { file, pageCount: pdf.numPages, pageTextContents, pagesImages, pageDimensions };
    } finally {
      if (cancelLoad.current === cancel) cancelLoad.current = null;
      await dispose();
    }
  }, []);

  const handleFileSelected = useCallback(async (files: File[], slot: 1 | 2) => {
    if (!files[0] || isProcessing) return;
    cancelLoad.current?.();
    const run = ++processingRun.current;
    setStatus('processing'); setProgress(0); setError(null); setPairedPages([]); setCurrentPairIdx(0);
    setProgressMessage(t(slot === 1 ? 'comparePdfs.progressExtractingOriginal' : 'comparePdfs.progressExtractingModified'));
    try {
      const loaded = await loadPDF(files[0], run);
      if (run !== processingRun.current) return;
      if (loaded) { if (slot === 1) setFile1(loaded); else setFile2(loaded); }
      setStatus('idle');
    } catch (err) {
      if (run !== processingRun.current) return;
      setError(err instanceof Error ? err.message : t(slot === 1 ? 'comparePdfs.errorExtractingOriginal' : 'comparePdfs.errorExtractingModified'));
      setStatus('error');
    }
  }, [isProcessing, loadPDF, t]);
  const handleFile1Selected = (files: File[]) => handleFileSelected(files, 1);
  const handleFile2Selected = (files: File[]) => handleFileSelected(files, 2);

  /**
   * Align pages and compare their extracted words
   */
  const handleCompare = useCallback(() => {
    if (!file1 || !file2 || isProcessing) return;

    setError(null);
    setStatus('processing');
    setProgress(95);
    setProgressMessage(t('comparePdfs.progressRunningDiff'));

    try {
      // 1. LCS Page Alignment to avoid multi-page shifts
      const pairedList = smartPagePairing(file1, file2);

      // 2. Perform detailed word diff on each aligned page pair
      pairedList.forEach(pair => {
        if (pair.pageIndex1 !== -1 && pair.pageIndex2 !== -1) {
          const page1 = file1.pageTextContents[pair.pageIndex1];
          const page2 = file2.pageTextContents[pair.pageIndex2];

          const dim1 = file1.pageDimensions[pair.pageIndex1];
          const dim2 = file2.pageDimensions[pair.pageIndex2];

          const diffResult = diffSinglePageWords(
            page1.words,
            page2.words,
            dim1.height,
            dim2.height
          );

          pair.highlights1 = diffResult.highlights1;
          pair.highlights2 = diffResult.highlights2;
          pair.hasDifference = diffResult.hasDifference;
          pair.diffPercentage = diffResult.diffPercentage;
        } else {
          // One-sided page (entire page inserted or deleted)
          pair.hasDifference = true;
          pair.diffPercentage = 100;
          pair.highlights1 = [];
          pair.highlights2 = [];
        }
      });

      // 3. Moved-Text (段落位移) Cross-correlation analysis
      findMovedTextSegments(pairedList);

      setPairedPages(pairedList);
      setCurrentPairIdx(0);
      setStatus('complete');
    } catch (err) {
      console.error(err);
      setError(t('comparePdfs.errorDiffFailed'));
      setStatus('error');
    }
  }, [file1, file2, isProcessing, t]);

  const handleClearAll = () => {
    focusUpload.current = 1;
    handleCancel();
    setFile1(null);
    setFile2(null);
    setPairedPages([]);
    setError(null);
    setStatus('idle');
    setProgress(0);
    setCurrentPairIdx(0);
  };

  /**
   * Synced scrolling controllers
   */
  const handleScroll1 = useCallback(() => {
    if (isScrollingSyncRef.current) return;
    if (!scrollContainer1Ref.current || !scrollContainer2Ref.current) return;
    isScrollingSyncRef.current = true;
    scrollContainer2Ref.current.scrollTop = scrollContainer1Ref.current.scrollTop;
    scrollContainer2Ref.current.scrollLeft = scrollContainer1Ref.current.scrollLeft;
    scrollFrame.current = requestAnimationFrame(() => { isScrollingSyncRef.current = false; scrollFrame.current = null; });
  }, []);

  const handleScroll2 = useCallback(() => {
    if (isScrollingSyncRef.current) return;
    if (!scrollContainer1Ref.current || !scrollContainer2Ref.current) return;
    isScrollingSyncRef.current = true;
    scrollContainer1Ref.current.scrollTop = scrollContainer2Ref.current.scrollTop;
    scrollContainer1Ref.current.scrollLeft = scrollContainer2Ref.current.scrollLeft;
    scrollFrame.current = requestAnimationFrame(() => { isScrollingSyncRef.current = false; scrollFrame.current = null; });
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const container = comparisonContainerRef.current;
    if (!container) return;
    try {
      if (document.fullscreenElement === container) await document.exitFullscreen();
      else await container.requestFullscreen();
    } catch {
      setError(t('comparePdfs.errorFullscreen'));
    }
  }, [t]);

  useEffect(() => {
    const handleFsChange = () => {
      const active = !!comparisonContainerRef.current && document.fullscreenElement === comparisonContainerRef.current;
      setIsFullscreen(active);
      if (!active) fullscreenButton.current?.focus();
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Filter highlights based on user-toggled filter pills
  const getFilteredHighlights = (highlights: DiffHighlight[]) => {
    return highlights.filter(hl => {
      if (hl.type === 'moved' && !filterPills.moved) return false;
      if (hl.category === 'header-footer' && !filterPills.headerFooter) return false;
      if (hl.category === 'formatting' && !filterPills.formatting) return false;
      if (hl.category === 'text' && !filterPills.text) return false;
      return true;
    });
  };

  const currentPair = pairedPages[currentPairIdx];

  return <div className={`space-y-6 ${className}`.trim()}>
    {error && <Alert variant="destructive"><AlertCircle aria-hidden="true" /><AlertDescription>{error}</AlertDescription></Alert>}
    {pairedPages.length === 0 && <>
      <p className="text-sm text-muted-foreground">{t('comparePdfs.comparisonHelp')}</p>
      <div className="grid items-start gap-6 md:grid-cols-2">
        {([1, 2] as const).map(slot => {
          const loaded = slot === 1 ? file1 : file2;
          const prefix = slot === 1 ? 'original' : 'modified';
          return <Card key={slot} className="min-w-0">
            <CardHeader><h3 className="font-semibold">{t(`comparePdfs.${prefix}PdfTitle`)}</h3>
              {loaded && <><CardDescription className="break-words">{loaded.file.name}</CardDescription>
                <CardAction><Button variant="ghost" size="sm" disabled={isProcessing} onClick={() => {
                  focusUpload.current = slot; handleCancel(); if (slot === 1) setFile1(null); else setFile2(null);
                }}>{t('comparePdfs.removeButton')}</Button></CardAction></>}
            </CardHeader><CardContent>
              {loaded ? <div className="space-y-3"><img src={loaded.pagesImages[0]} alt={t(`comparePdfs.${prefix}PdfTitle`)} className="mx-auto max-h-64 w-full object-contain" />
                <p className="text-sm text-muted-foreground">{t('accessibility.pageOf', { current: 1, total: loaded.pageCount })} · {(loaded.file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div> : <div ref={slot === 1 ? uploadRegion1 : uploadRegion2} tabIndex={-1}>
                <FileUploader accept={['application/pdf', '.pdf']} multiple={false} maxFiles={1} disabled={isProcessing}
                  onFilesSelected={slot === 1 ? handleFile1Selected : handleFile2Selected} onError={setError}
                  label={t(`comparePdfs.${prefix}PdfLabel`)} description={t(`comparePdfs.${prefix}PdfDesc`)} />
              </div>}
            </CardContent>
          </Card>;
        })}
      </div>
      {file1 && file2 && <Button onClick={handleCompare} disabled={isProcessing}><Shuffle aria-hidden="true" />{t('comparePdfs.startCompare')}</Button>}
    </>}
    {isProcessing && <ProcessingProgress progress={progress} status={status} message={progressMessage} onCancel={handleCancel} />}
    {currentPair && file1 && file2 && <div ref={comparisonContainerRef} className={`space-y-4 ${isFullscreen ? 'h-screen overflow-auto bg-background p-4' : ''}`}>
      <Card>
        <CardHeader><h3 ref={resultHeading} tabIndex={-1} className="font-semibold">{t('comparePdfs.successTitle')}</h3>
          <CardDescription role="status">{t('comparePdfs.compareStats', { total: pairedPages.length, diff: pairedPages.filter(pair => pair.hasDifference).length })}</CardDescription>
          <CardAction><Button variant="outline" size="sm" onClick={handleClearAll}>{t('comparePdfs.resetButton')}</Button></CardAction>
        </CardHeader><CardContent>
          <fieldset className="space-y-3"><legend className="mb-3 text-sm font-medium">{t('comparePdfs.filterLabel')}</legend>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {([['text', 'filterText'], ['formatting', 'filterFont'], ['headerFooter', 'filterHeaderFooter'], ['moved', 'filterMoved']] as const).map(([key, label]) => <div key={key} className="flex items-center gap-2">
                <Checkbox id={`${id}-filter-${key}`} checked={filterPills[key]} onCheckedChange={checked => setFilterPills(filters => ({ ...filters, [key]: checked === true }))} />
                <Label htmlFor={`${id}-filter-${key}`}>{t(`comparePdfs.${label}`)}</Label>
              </div>)}
            </div>
          </fieldset>
        </CardContent>
      </Card>
      <nav aria-label={t('comparePdfs.pageNavigation')} className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="outline" size="sm" onClick={() => setCurrentPairIdx(index => Math.max(0, index - 1))} disabled={currentPairIdx === 0}><ChevronLeft aria-hidden="true" className="rtl:rotate-180" />{t('comparePdfs.prevPair')}</Button>
        <div aria-live="polite" className="flex flex-wrap items-center gap-2 text-sm"><span>{t('comparePdfs.pagePairIndex', { current: currentPairIdx + 1, total: pairedPages.length })}</span>
          <Badge variant={currentPair.hasDifference ? 'secondary' : 'outline'}>
            {currentPair.pageIndex1 === -1 ? t('comparePdfs.insertedPage') : currentPair.pageIndex2 === -1 ? t('comparePdfs.deletedPage') : currentPair.hasDifference ? t('comparePdfs.detectedDiff', { percent: currentPair.diffPercentage.toFixed(1) }) : t('comparePdfs.noDiff')}
          </Badge>
        </div>
        <div className="flex items-center gap-2"><Button ref={fullscreenButton} variant="outline" size="icon" onClick={toggleFullscreen} aria-pressed={isFullscreen} aria-label={t('comparePdfs.fullscreenTooltip')}>
          {isFullscreen ? <Minimize aria-hidden="true" /> : <Maximize2 aria-hidden="true" />}
        </Button><Button variant="outline" size="sm" onClick={() => setCurrentPairIdx(index => Math.min(pairedPages.length - 1, index + 1))} disabled={currentPairIdx >= pairedPages.length - 1}>{t('comparePdfs.nextPair')}<ChevronRight aria-hidden="true" className="rtl:rotate-180" /></Button></div>
      </nav>
      <div className="grid items-start gap-4 md:grid-cols-2">
        {([1, 2] as const).map(slot => {
          const loaded = slot === 1 ? file1 : file2;
          const pageIndex = slot === 1 ? currentPair.pageIndex1 : currentPair.pageIndex2;
          const title = t(slot === 1 ? 'comparePdfs.originalPdfTitle' : 'comparePdfs.modifiedPdfTitle');
          const highlights = slot === 1 ? currentPair.highlights1 : currentPair.highlights2;
          const dimension = loaded.pageDimensions[pageIndex];
          return <Card key={slot} className="min-w-0">
            <CardHeader><h3 className="font-semibold">{title}</h3><CardDescription className="break-words">{loaded.file.name}</CardDescription>
              {pageIndex !== -1 && <p className="text-sm text-muted-foreground">{t('comparePdfs.pageIndex', { page: pageIndex + 1 })}</p>}
            </CardHeader><CardContent>
              <div ref={slot === 1 ? scrollContainer1Ref : scrollContainer2Ref} onScroll={slot === 1 ? handleScroll1 : handleScroll2} role="region" aria-label={title} tabIndex={0}
                className="max-h-[70vh] min-h-64 overflow-auto rounded-md border border-border bg-muted p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {pageIndex !== -1 ? <div className="relative" style={{ width: dimension.width, height: dimension.height }}>
                  <img src={loaded.pagesImages[pageIndex]} alt={`${title}: ${t('comparePdfs.pageIndex', { page: pageIndex + 1 })}`} className="block h-full w-full max-w-none" />
                  <div className="pointer-events-none absolute inset-0">{getFilteredHighlights(highlights).map((highlight, index) => <DifferenceHighlight key={index} highlight={highlight} label={t(highlight.type === 'deleted' ? 'comparePdfs.removedText' : highlight.type === 'added' ? 'comparePdfs.addedText' : highlight.type === 'modified' ? 'comparePdfs.modifiedText' : slot === 1 ? 'comparePdfs.paragraphMovedRight' : 'comparePdfs.paragraphMovedLeft')} />)}</div>
                </div> : <div className="flex min-h-64 flex-col items-center justify-center gap-2 p-4 text-center">
                  <AlertCircle aria-hidden="true" className="size-6 text-muted-foreground" /><p className="font-medium">{t(slot === 1 ? 'comparePdfs.insertedPageTitle' : 'comparePdfs.deletedPageTitle')}</p>
                  <p className="max-w-sm text-sm text-muted-foreground">{t(slot === 1 ? 'comparePdfs.insertedPageDesc' : 'comparePdfs.deletedPageDesc')}</p>
                </div>}
              </div>
            </CardContent>
          </Card>;
        })}
      </div>
    </div>}
  </div>;
}

/**
 * 1. Smart LCS Page Pairing dynamic programming algorithm
 */
function smartPagePairing(file1: PDFFile, file2: PDFFile): PageComparisonResult[] {
  const N = file1.pageCount;
  const M = file2.pageCount;

  // Pre-calculate page text likeness matrix
  const similarityMatrix = Array.from({ length: N }, () => new Array(M).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      similarityMatrix[i][j] = computeTextSimilarity(
        file1.pageTextContents[i].rawText,
        file2.pageTextContents[j].rawText
      );
    }
  }

  // DP table for alignment
  const dp = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      // Threshold 0.25 to consider pages "matching" at all
      if (similarityMatrix[i - 1][j - 1] >= 0.25) {
        dp[i][j] = dp[i - 1][j - 1] + similarityMatrix[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find paired matches
  const paired: PageComparisonResult[] = [];
  let i = N;
  let j = M;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && similarityMatrix[i - 1][j - 1] >= 0.25) {
      paired.unshift({
        pageIndex1: i - 1,
        pageIndex2: j - 1,
        hasDifference: similarityMatrix[i - 1][j - 1] < 0.999,
        highlights1: [],
        highlights2: [],
        diffPercentage: (1 - similarityMatrix[i - 1][j - 1]) * 100
      });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      // Insertion in file 2 (no match in file 1)
      paired.unshift({
        pageIndex1: -1,
        pageIndex2: j - 1,
        hasDifference: true,
        highlights1: [],
        highlights2: [],
        diffPercentage: 100
      });
      j--;
    } else {
      // Deletion in file 2 (no match in file 1)
      paired.unshift({
        pageIndex1: i - 1,
        pageIndex2: -1,
        hasDifference: true,
        highlights1: [],
        highlights2: [],
        diffPercentage: 100
      });
      i--;
    }
  }

  return paired;
}

/**
 * Text Similarity Index based on common characters proportion
 */
function computeTextSimilarity(txt1: string, txt2: string): number {
  const clean1 = txt1.replace(/\s+/g, '');
  const clean2 = txt2.replace(/\s+/g, '');
  if (!clean1 && !clean2) return 1.0;
  if (!clean1 || !clean2) return 0.0;

  const set1 = new Set(clean1.split(''));
  let match = 0;
  clean2.split('').forEach(c => {
    if (set1.has(c)) match++;
  });

  return (match * 2) / (clean1.length + clean2.length);
}

/**
 * Word LCS Diff backtrack algorithm
 */
function diffWordsLCS(A: string[], B: string[]) {
  const N = A.length;
  const M = B.length;
  const dp: number[][] = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const result: Array<{ type: 'equal' | 'added' | 'deleted'; word: string; indexA: number; indexB: number }> = [];
  let i = N;
  let j = M;

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && A[i - 1] === B[j - 1]) {
      result.unshift({ type: 'equal', word: A[i - 1], indexA: i - 1, indexB: j - 1 });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: 'added', word: B[j - 1], indexA: -1, indexB: j - 1 });
      j--;
    } else {
      result.unshift({ type: 'deleted', word: A[i - 1], indexA: i - 1, indexB: -1 });
      i--;
    }
  }

  return result;
}

/**
 * 2. Word-level Diff on single page with Bounding Box coordinates
 */
function diffSinglePageWords(
  words1: TextWordInfo[],
  words2: TextWordInfo[],
  pageHeight1: number,
  pageHeight2: number
): { highlights1: DiffHighlight[]; highlights2: DiffHighlight[]; hasDifference: boolean; diffPercentage: number } {
  const A = words1.map(w => w.text);
  const B = words2.map(w => w.text);

  const rawDiff = diffWordsLCS(A, B);

  // Group diff structures and detect "modified" segments (contiguous delete + add)
  // Re-map word indices back to physical bounding box coordinates
  const highlights1: DiffHighlight[] = [];
  const highlights2: DiffHighlight[] = [];

  let wordCountDiff = 0;

  rawDiff.forEach(item => {
    // Determine category based on spatial coordinate analysis
    // Header/Footer: within top/bottom 12% vertical coordinate bounds of canvas
    let category: 'text' | 'header-footer' | 'formatting' = 'text';

    if (item.type === 'deleted') {
      wordCountDiff++;
      const wInfo = words1[item.indexA];
      if (wInfo.y <= pageHeight1 * 0.12 || wInfo.y >= pageHeight1 * 0.88) {
        category = 'header-footer';
      }

      highlights1.push({
        type: 'deleted',
        text: item.word,
        x: wInfo.x - 1,
        y: wInfo.y - 1,
        w: wInfo.w + 2,
        h: wInfo.h + 2,
        category
      });
    } else if (item.type === 'added') {
      wordCountDiff++;
      const wInfo = words2[item.indexB];
      if (wInfo.y <= pageHeight2 * 0.12 || wInfo.y >= pageHeight2 * 0.88) {
        category = 'header-footer';
      }

      highlights2.push({
        type: 'added',
        text: item.word,
        x: wInfo.x - 1,
        y: wInfo.y - 1,
        w: wInfo.w + 2,
        h: wInfo.h + 2,
        category
      });
    } else {
      // Check for Formatting discrepancies (Fonts diff)
      const wInfo1 = words1[item.indexA];
      const wInfo2 = words2[item.indexB];

      if (wInfo1.fontName !== wInfo2.fontName) {
        category = 'formatting';

        highlights1.push({
          type: 'modified',
          text: item.word,
          x: wInfo1.x - 1,
          y: wInfo1.y - 1,
          w: wInfo1.w + 2,
          h: wInfo1.h + 2,
          category
        });

        highlights2.push({
          type: 'modified',
          text: item.word,
          x: wInfo2.x - 1,
          y: wInfo2.y - 1,
          w: wInfo2.w + 2,
          h: wInfo2.h + 2,
          category
        });
      }
    }
  });

  // Consolidate adjacent highlights to reduce bounding box DOM nodes
  const compact1 = compactAdjacentHighlights(highlights1);
  const compact2 = compactAdjacentHighlights(highlights2);

  const totalWords = Math.max(words1.length, words2.length, 1);
  const diffPercentage = (wordCountDiff / totalWords) * 100;

  return {
    highlights1: compact1,
    highlights2: compact2,
    hasDifference: compact1.length > 0 || compact2.length > 0,
    diffPercentage
  };
}

/**
 * Compact contiguous text highlights into single bounding boxes to save DOM render overhead
 */
function compactAdjacentHighlights(highlights: DiffHighlight[]): DiffHighlight[] {
  if (highlights.length === 0) return [];

  const result: DiffHighlight[] = [];
  let current = { ...highlights[0] };

  for (let i = 1; i < highlights.length; i++) {
    const next = highlights[i];

    // Check if next highlight is on the same line, contiguous coordinate, and same properties
    const sameLine = Math.abs(next.y - current.y) < 5;
    const contiguous = Math.abs(next.x - (current.x + current.w)) < 15;

    if (sameLine && contiguous && next.category === current.category && next.type === current.type) {
      current.w = (next.x + next.w) - current.x;
      current.text += next.text;
    } else {
      result.push(current);
      current = { ...next };
    }
  }
  result.push(current);
  return result;
}

/**
 * 3. Cross-correlation Moved-Text Segment detector
 */
function findMovedTextSegments(pairedList: PageComparisonResult[]) {
  // Collect all deletes and adds segments across aligned pages
  pairedList.forEach(pair1 => {
    if (pair1.highlights1.length === 0) return;

    pair1.highlights1.forEach(hl1 => {
      if (hl1.type !== 'deleted' || hl1.text.trim().length < 5) return;

      // Scan other pages to find corresponding add segments
      pairedList.forEach(pair2 => {
        if (pair2.highlights2.length === 0) return;

        pair2.highlights2.forEach(hl2 => {
          if (hl2.type !== 'added' || hl2.text.trim().length < 5) return;

          // Cross-correlation threshold 85% textual likeness
          const matchSim = computeTextSimilarity(hl1.text, hl2.text);

          if (matchSim >= 0.85) {
            // Relabel as moved
            hl1.type = 'moved';
            hl2.type = 'moved';
            hl1.movedToPageIndex = pair2.pageIndex2;
            hl1.movedToCoords = { x: hl2.x, y: hl2.y };

            hl2.movedToPageIndex = pair1.pageIndex1;
            hl2.movedToCoords = { x: hl1.x, y: hl1.y };
          }
        });
      });
    });
  });
}

export default ComparePDFsTool;
