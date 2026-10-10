'use client';
import { CheckCircle2 as UICheckCircle2 } from 'lucide-react';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { CircleAlert as UICircleAlert } from 'lucide-react';

import { FileText as UIFileText, X as UIX } from 'lucide-react';

import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

import { Label } from '@/components/ui/label';

import { Input } from '@/components/ui/input';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { ProcessingProgress, ProcessingStatus } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { addPageLabels } from '@/lib/pdf/processors/page-labels';
import type { ProcessOutput } from '@/types/pdf';
import {
  Plus,
  Trash2,
  Tag,
  Info,
  Layers,
  HelpCircle,
  Check,
  AlertCircle
} from 'lucide-react';

export interface PageLabelRuleInput {
  pageRange: string;
  style: 'D' | 'R' | 'r' | 'A' | 'a' | 'none';
  prefix: string;
  startValue: number;
}

export function AddPageLabelsTool() {
  const t = useTranslations('common');
  const tTools = useTranslations('tools');

  // File state
  const [file, setFile] = useState<File | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isLoadingFile, setIsLoadingFile] = useState(false);

  // Configuration options: list of rules
  const [rules, setRules] = useState<PageLabelRuleInput[]>([
    {
      pageRange: '', // Default: all pages
      style: 'D',
      prefix: '',
      startValue: 1,
    }
  ]);

  // Processing & result states
  const [status, setStatus] = useState<ProcessingStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [result, setResult] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Preview limit
  const [showAllPreview, setShowAllPreview] = useState(false);

  // Cancellation ref
  const cancelledRef = useRef(false);

  /**
   * Handle File Selection and read total pages
   */
  const handleFileSelected = useCallback(async (files: File[]) => {
    if (files.length === 0) return;
    const selectedFile = files[0];
    setFile(selectedFile);
    setIsLoadingFile(true);
    setError(null);
    setResult(null);

    try {
      const { PDFDocument } = await import('pdf-lib');
      const arrayBuffer = await selectedFile.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
      setTotalPages(pdf.getPageCount());
    } catch (err) {
      console.error(err);
      setError(t('pageLabels.errorMetadata'));
    } finally {
      setIsLoadingFile(false);
    }
  }, []);

  const handleClearFile = () => {
    setFile(null);
    setTotalPages(0);
    setResult(null);
  };

  /**
   * Rule Management Operations
   */
  const handleAddRule = () => {
    setRules(prev => [
      ...prev,
      {
        pageRange: '',
        style: 'D',
        prefix: '',
        startValue: 1,
      }
    ]);
  };

  const handleRemoveRule = (index: number) => {
    setRules(prev => prev.filter((_, i) => i !== index));
  };

  const handleRuleChange = (index: number, fields: Partial<PageLabelRuleInput>) => {
    setRules(prev => prev.map((rule, i) => {
      if (i === index) {
        return {
          ...rule,
          ...fields
        };
      }
      return rule;
    }));
  };

  /**
   * Client-side Label Generation preview logic
   */
  const pageLabelsPreview = useMemo(() => {
    if (totalPages <= 0) return [];

    // 1. Initialize map
    const pageToRuleMap = new Array<PageLabelRuleInput | null>(totalPages).fill(null);

    // Later rules override earlier ones
    rules.forEach((rule, ruleIdx) => {
      const indices = parsePageRangeForPreview(rule.pageRange || '', totalPages);
      indices.forEach(idx => {
        // Embed the unique rule order index as reference
        pageToRuleMap[idx] = { ...rule, startValue: ruleIdx };
      });
    });

    // 2. Track real indices to count applied count per rule
    const ruleAppliedCount = new Map<number, number>();
    rules.forEach((_, ruleIdx) => {
      ruleAppliedCount.set(ruleIdx, 0);
    });

    const labels: string[] = [];

    // 3. Re-run boundary-splitting transition flow
    for (let i = 0; i < totalPages; i++) {
      const currentRuleRef = pageToRuleMap[i];

      if (currentRuleRef !== null) {
        const ruleIndex = currentRuleRef.startValue; // stored order index
        const originalRule = rules[ruleIndex];

        const countSoFar = ruleAppliedCount.get(ruleIndex) || 0;
        const startValBase = originalRule.startValue !== undefined && !isNaN(originalRule.startValue)
          ? originalRule.startValue
          : 1;
        const finalStartVal = startValBase + countSoFar;

        const numStr = formatNumberForPreview(finalStartVal, originalRule.style);
        labels.push(`${originalRule.prefix || ''}${numStr}`);

        ruleAppliedCount.set(ruleIndex, countSoFar + 1);
      } else {
        // Default decimal fallback
        labels.push(String(i + 1));
      }
    }

    return labels;
  }, [totalPages, rules]);

  /**
   * Process and Compile
   */
  const handleProcess = async () => {
    if (!file) {
      setError(t('pageLabels.errorUpload'));
      return;
    }

    cancelledRef.current = false;
    setStatus('processing');
    setProgress(0);
    setError(null);
    setResult(null);

    try {
      const output: ProcessOutput = await addPageLabels(
        file,
        {
          rules: rules.map(r => ({
            pageRange: r.pageRange,
            style: r.style,
            prefix: r.prefix || undefined,
            startValue: r.startValue !== undefined && !isNaN(r.startValue) ? r.startValue : undefined
          }))
        },
        (prog, message) => {
          if (!cancelledRef.current) {
            setProgress(prog);
            setProgressMessage(message || t('pageLabels.progressInjecting'));
          }
        }
      );

      if (cancelledRef.current) {
        setStatus('idle');
        return;
      }

      if (output.success && output.result) {
        setResult(output.result as Blob);
        setStatus('complete');
      } else {
        setError(output.error?.message || t('pageLabels.errorInjecting'));
        setStatus('error');
      }
    } catch (err) {
      if (!cancelledRef.current) {
        setError(err instanceof Error ? err.message : t('pageLabels.errorUnknown'));
        setStatus('error');
      }
    }
  };

  const handleCancel = () => {
    cancelledRef.current = true;
    setStatus('idle');
    setProgress(0);
  };

  const isProcessing = status === 'processing' || status === 'uploading';

  // Limit preview count to prevent DOM lag on massive PDFs
  const maxPreviewCount = 60;
  const previewList = showAllPreview
    ? pageLabelsPreview
    : pageLabelsPreview.slice(0, maxPreviewCount);

  return (
    <div className="space-y-6">
      {/* File Upload Zone */}
      <div className="space-y-3">
        <Label className="block">
          {t('pageLabels.uploadLabel')}
        </Label>
        {file ? (
          <Card

            className="relative group p-4 flex items-center justify-between border-2 border-primary/30 bg-muted/15"
          >
            <div className="flex items-center gap-3">
              <UIFileText className="w-10 h-10 text-primary" aria-hidden="true" />
              <div>
                <p
                  className="font-semibold text-sm text-foreground truncate max-w-[280px] md:max-w-md"
                  title={file.name}
                >
                  {file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {totalPages > 0 ? t('pageLabels.uploadSuccess', { count: totalPages, size: (file.size / (1024 * 1024)).toFixed(2) }) : (t('aiPdfReflower.scanningMetadata') || 'Loading...')}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon-sm"
              onClick={handleClearFile}
              disabled={isProcessing}

            >
              <UIX className="w-5 h-5" aria-hidden="true" />
            </Button>
          </Card>
        ) : (
          <FileUploader
            accept={['application/pdf']}
            multiple={false}
            onFilesSelected={handleFileSelected}
            onError={setError}
            disabled={isProcessing || isLoadingFile}
            label={t('pageLabels.uploadButton')}
            description={t('pageLabels.uploadDesc')}
            className="min-h-[160px] p-6 rounded-2xl"
          />
        )}
      </div>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" ><UICircleAlert aria-hidden="true" /><AlertDescription>
          <div className="flex gap-2.5 items-start">
            <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
            <p className="text-sm font-semibold">{error}</p>
          </div>
        </AlertDescription></Alert>
      )}

      {/* Configuration & Preview Area */}
      {file && totalPages > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* LEFT: Rules configuration panel */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex justify-between items-center pb-2">
              <Label className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-primary" />
                {t('pageLabels.optionsTitle')}
              </Label>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddRule}
                disabled={isProcessing}
                className="flex items-center gap-1 text-xs border py-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                {t('pageLabels.addRuleButton')}
              </Button>
            </div>

            <div className="space-y-4">
              {rules.map((rule, idx) => (
                <Card
                  key={idx}

                  className="p-5 relative gap-4 border animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <div className="flex justify-between items-center border-b border-border pb-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md">
                      {t('pageLabels.ruleTitle', { index: idx + 1 })}
                    </span>
                    {rules.length > 1 && (
                      <Button variant="ghost" size="icon-sm" aria-label={t('pageLabels.deleteRuleTitle')}
                        onClick={() => handleRemoveRule(idx)}
                        disabled={isProcessing}

                        title={t('pageLabels.deleteRuleTitle')}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Page Range input */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <Label className="text-muted-foreground">
                          {t('pageLabels.pageRangeLabel')}
                        </Label>
                        <span className="text-[10px] text-muted-foreground font-medium">
                          {t('pageLabels.pageRangeHelp')}
                        </span>
                      </div>
                      <Input
                        type="text"
                        placeholder={t('pageLabels.pageRangePlaceholder')}
                        value={rule.pageRange}
                        onChange={(e) => handleRuleChange(idx, { pageRange: e.target.value })}
                        className="w-full transition-all"
                      />
                    </div>

                    {/* Style selector */}
                    <div className="space-y-1.5">
                      <Label className="text-muted-foreground block">
                        {t('pageLabels.styleLabel')}
                      </Label>
                      <NativeSelect
                        value={rule.style}
                        onChange={(e) => handleRuleChange(idx, { style: e.target.value as any })}
                        className="w-full transition-all" aria-label={t('pageLabels.styleLabel')}
                      >
                        <NativeSelectOption value="D">{t('pageLabels.styleArabic')}</NativeSelectOption>
                        <NativeSelectOption value="R">{t('pageLabels.styleRomanUpper')}</NativeSelectOption>
                        <NativeSelectOption value="r">{t('pageLabels.styleRomanLower')}</NativeSelectOption>
                        <NativeSelectOption value="A">{t('pageLabels.styleAlphaUpper')}</NativeSelectOption>
                        <NativeSelectOption value="a">{t('pageLabels.styleAlphaLower')}</NativeSelectOption>
                        <NativeSelectOption value="none">{t('pageLabels.styleNone')}</NativeSelectOption>
                      </NativeSelect>
                    </div>

                    {/* Prefix input */}
                    <div className="space-y-1.5">
                      <Label className="text-muted-foreground block">
                        {t('pageLabels.prefixLabel')}
                      </Label>
                      <Input
                        type="text"
                        placeholder={t('pageLabels.prefixPlaceholder')}
                        value={rule.prefix}
                        onChange={(e) => handleRuleChange(idx, { prefix: e.target.value })}
                        className="w-full transition-all" aria-label={t('pageLabels.prefixLabel')}
                      />
                    </div>

                    {/* Start value input */}
                    <div className="space-y-1.5">
                      <Label className="text-muted-foreground block">
                        {t('pageLabels.startValueLabel')}
                      </Label>
                      <Input
                        type="number"
                        min="1"
                        value={rule.startValue}
                        onChange={(e) => handleRuleChange(idx, { startValue: parseInt(e.target.value, 10) || 1 })}
                        className="w-full transition-all" aria-label={t('pageLabels.startValueLabel')}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Run Buttons */}
            <div className="space-y-3 pt-3">
              <Button
                variant="default"
                size="lg"
                onClick={handleProcess}
                disabled={isProcessing}
                className="w-full py-4 flex items-center justify-center gap-2"
              >
                <Tag className="w-5 h-5" />
                {isProcessing ? t('pageLabels.processing') : t('pageLabels.processButton')}
              </Button>

              {result && (
                <DownloadButton
                  file={result}
                  filename={file.name.replace('.pdf', '_labeled.pdf')}
                  variant="secondary"
                  size="lg"
                  className="w-full py-4"
                  showFileSize
                />
              )}
            </div>

            {status === 'complete' && result && (
              <Alert role="status" ><UICheckCircle2 aria-hidden="true" /><AlertDescription>
                <p className="text-sm font-semibold flex items-center justify-center gap-1.5">
                  <Check className="w-5 h-5" />
                  {t('pageLabels.successMessage')}
                </p>
              </AlertDescription></Alert>
            )}
          </div>

          {/* RIGHT: Live tag preview panel */}
          <div className="lg:col-span-5 space-y-4">
            <Label className="flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-emerald-500" />
              {t('pageLabels.previewTitle')}
            </Label>

            <Card

              className="p-6 bg-card min-h-[460px] flex flex-col border border-border"
            >
              {/* Informative tips */}
              <div className="mb-4 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100/35 text-[11px] text-muted-foreground leading-normal flex gap-2">
                <Info className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-foreground">{t('pageLabels.previewAlgorithmTitle')}</span>
                  {t('pageLabels.previewAlgorithmDesc')}
                </div>
              </div>

              {/* Grid Preview */}
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 overflow-y-auto max-h-[380px] pr-1.5 custom-scrollbar">
                {previewList.map((label, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded-xl border border-border/40 bg-background select-none transition-all duration-300 hover:border-primary/30"
                  >
                    <span className="text-[10px] font-bold text-muted-foreground">
                      P.{idx + 1}
                    </span>
                    <Badge variant="secondary">{label}</Badge>
                  </div>
                ))}

                {totalPages > maxPreviewCount && !showAllPreview && (
                  <div className="col-span-full pt-4 pb-2 text-center">
                    <p className="text-[10px] text-muted-foreground mb-2">
                      {t('pageLabels.previewFolded', { count: totalPages - maxPreviewCount })}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowAllPreview(true)}
                      className="text-[10px] py-1 px-3"
                    >
                      {t('pageLabels.previewLoadAll', { total: totalPages })}
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* Processing Progress */}
      {isProcessing && (
        <ProcessingProgress
          progress={progress}
          status={status}
          message={progressMessage}
          onCancel={handleCancel}
          showPercentage
        />
      )}
    </div>
  );
}

/**
 * Format helper for client preview
 */
function formatNumberForPreview(num: number, style: string): string {
  switch (style) {
    case 'D':
      return String(num);
    case 'R':
      return toRomanForPreview(num);
    case 'r':
      return toRomanForPreview(num).toLowerCase();
    case 'A':
      return toAlphaForPreview(num, true);
    case 'a':
      return toAlphaForPreview(num, false);
    case 'none':
    default:
      return '';
  }
}

function toRomanForPreview(num: number): string {
  if (num <= 0 || num > 3999) return String(num);
  const romanNumerals: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
  ];
  let result = '';
  let val = num;
  for (const [value, symbol] of romanNumerals) {
    while (val >= value) {
      result += symbol;
      val -= value;
    }
  }
  return result;
}

function toAlphaForPreview(num: number, isUppercase: boolean): string {
  if (num <= 0) return String(num);
  let result = '';
  let temp = num;
  const baseCharCode = isUppercase ? 65 : 97;

  while (temp > 0) {
    const remainder = (temp - 1) % 26;
    result = String.fromCharCode(baseCharCode + remainder) + result;
    temp = Math.floor((temp - 1) / 26);
  }
  return result;
}

function parsePageRangeForPreview(rangeStr: string, totalPages: number): Set<number> {
  const indices = new Set<number>();
  const normalized = rangeStr.trim().toLowerCase();

  if (!normalized) {
    for (let i = 0; i < totalPages; i++) {
      indices.add(i);
    }
    return indices;
  }

  if (normalized === 'odd') {
    for (let i = 0; i < totalPages; i += 2) {
      indices.add(i);
    }
    return indices;
  }

  if (normalized === 'even') {
    for (let i = 1; i < totalPages; i += 2) {
      indices.add(i);
    }
    return indices;
  }

  const parts = normalized.split(',');
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.includes('-')) {
      const [startStr, endStr] = trimmed.split('-');
      const start = parseInt(startStr, 10);
      const end = parseInt(endStr, 10);
      if (!isNaN(start) && !isNaN(end)) {
        const from = Math.min(start, end);
        const to = Math.max(start, end);
        for (let i = from; i <= to; i++) {
          if (i >= 1 && i <= totalPages) {
            indices.add(i - 1);
          }
        }
      }
    } else {
      const val = parseInt(trimmed, 10);
      if (!isNaN(val) && val >= 1 && val <= totalPages) {
        indices.add(val - 1);
      }
    }
  }

  return indices;
}

export default AddPageLabelsTool;
