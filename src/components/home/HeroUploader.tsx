'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { IntentLink as Link } from '@/components/common/IntentLink';
import { useTranslations } from 'next-intl';
import { AlertCircle, ArrowRight, Lock, UploadCloud } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import { toolHref } from '@/lib/routes';
import { stageFilesForTool } from '@/lib/file-handoff';
import { formatFileSize } from '@/lib/storage/recent-files';
import type { SelectionKind, ToolSuggestion, UploadAnalysis } from '@/lib/home/upload-analysis';
import { cn } from '@/lib/utils';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export interface HeroUploaderProps {
  locale: Locale;
  /** File types the picker offers (every format some tool can open), prepared on the server. */
  accept: string;
  /** Localized names of the tools that can be suggested, prepared on the server. */
  toolTitles: Record<string, string>;
}

type Phase =
  | { status: 'idle' }
  | { status: 'analyzing' }
  | { status: 'ready'; analysis: UploadAnalysis }
  | { status: 'failed' };

// The analysis code carries the tool registry, so it is fetched when someone first picks files.
const loadAnalysis = () => import('@/lib/home/upload-analysis');

const MAX_NAMES_SHOWN = 3;
const isPlainLeftClick = (event: React.MouseEvent) =>
  event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

const summaryKey = (kind: SelectionKind) => (kind === 'none' ? 'mixed' : kind);

/**
 * Drop zone on the homepage. It inspects the chosen files in the browser,
 * suggests tools that can really open them, and hands the files to the tool the
 * person picks. Nothing is uploaded.
 */
export function HeroUploader({ locale, accept, toolTitles }: HeroUploaderProps) {
  const t = useTranslations('home.upload');
  const [phase, setPhase] = useState<Phase>({ status: 'idle' });
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chooseRef = useRef<HTMLButtonElement>(null);
  const regionRef = useRef<HTMLDivElement>(null);
  const requestId = useRef(0);

  const handleFiles = useCallback(async (list: FileList | File[]) => {
    const files = Array.from(list);
    if (files.length === 0) return;
    const id = ++requestId.current;
    setPhase({ status: 'analyzing' });
    let analysis: UploadAnalysis;
    try {
      analysis = await (await loadAnalysis()).analyzeFiles(files);
    } catch {
      if (id === requestId.current) setPhase({ status: 'failed' });
      return;
    }
    if (id !== requestId.current) return;
    setPhase({ status: 'ready', analysis });
    // Bring the result into view after a drop far down the page; a nicety, never a failure.
    regionRef.current?.scrollIntoView?.({ block: 'nearest' });
  }, []);

  // Accept a file dropped anywhere on the page, so a miss never opens the file in the tab.
  useEffect(() => {
    let depth = 0;
    const hasFiles = (event: DragEvent) => Array.from(event.dataTransfer?.types ?? []).includes('Files');
    const onDragEnter = (event: DragEvent) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      depth += 1;
      setDragging(true);
    };
    const onDragOver = (event: DragEvent) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
    };
    const onDragLeave = (event: DragEvent) => {
      if (!hasFiles(event)) return;
      depth = Math.max(0, depth - 1);
      if (depth === 0) setDragging(false);
    };
    const onDrop = (event: DragEvent) => {
      if (!hasFiles(event)) return;
      event.preventDefault();
      depth = 0;
      setDragging(false);
      if (event.dataTransfer) void handleFiles(event.dataTransfer.files);
    };
    window.addEventListener('dragenter', onDragEnter);
    window.addEventListener('dragover', onDragOver);
    window.addEventListener('dragleave', onDragLeave);
    window.addEventListener('drop', onDrop);
    return () => {
      window.removeEventListener('dragenter', onDragEnter);
      window.removeEventListener('dragover', onDragOver);
      window.removeEventListener('dragleave', onDragLeave);
      window.removeEventListener('drop', onDrop);
    };
  }, [handleFiles]);

  const reset = () => {
    requestId.current += 1;
    setPhase({ status: 'idle' });
    requestAnimationFrame(() => chooseRef.current?.focus());
  };

  const openPicker = () => inputRef.current?.click();

  const input = (
    <input
      ref={inputRef}
      type="file"
      multiple
      accept={accept}
      className="hidden"
      tabIndex={-1}
      aria-hidden="true"
      data-testid="hero-file-input"
      onChange={(event) => {
        void handleFiles(event.target.files ?? []);
        event.target.value = '';
      }}
    />
  );

  return (
    <div ref={regionRef} className="mx-auto w-full max-w-3xl scroll-mt-20">
      {phase.status === 'ready' ? (
        <Selection
          analysis={phase.analysis}
          locale={locale}
          toolTitles={toolTitles}
          onReset={reset}
        />
      ) : (
        <>
          <div
            // The Choose Files button is the keyboard-accessible control; clicking the zone is a convenience.
            onClick={(event) => { if (!(event.target as HTMLElement).closest('button, a, input')) openPicker(); }}
            className={cn(
              'rounded-xl border-2 border-dashed px-5 py-7 text-center transition-colors sm:px-8',
              dragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/30 bg-card hover:border-primary/50',
            )}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <UploadCloud className="size-6" aria-hidden="true" />
              </span>
              <div className="space-y-1">
                <p className="text-lg font-semibold">{dragging ? t('titleActive') : t('title')}</p>
                <p className="text-sm text-muted-foreground">{t('subtitle')}</p>
              </div>
              <Button ref={chooseRef} size="lg" onClick={openPicker} onPointerEnter={loadAnalysis} onFocus={loadAnalysis} loading={phase.status === 'analyzing'} className="h-11 px-6 text-base">
                {t('choose')}
              </Button>
              {input}
            </div>
          </div>
          {phase.status === 'failed' && (
            <Alert variant="destructive" className="mt-3 text-start">
              <AlertCircle />
              <AlertDescription>{t('readFailed')}</AlertDescription>
            </Alert>
          )}
        </>
      )}
      <p className="mt-3 text-center text-xs text-muted-foreground">
        <Lock className="me-1.5 inline size-3.5 align-[-2px]" aria-hidden="true" />
        {t('privacy')}
      </p>
    </div>
  );
}

function Selection({ analysis, locale, toolTitles, onReset }: {
  analysis: UploadAnalysis;
  locale: Locale;
  toolTitles: Record<string, string>;
  onReset: () => void;
}) {
  const t = useTranslations('home.upload');
  const { accepted, rejected, kind, suggestions } = analysis;
  const extension = (analysis.extension ?? '').replace('.', '').toUpperCase();
  const totalSize = accepted.reduce((sum, file) => sum + file.size, 0);
  const names = accepted.slice(0, MAX_NAMES_SHOWN).map((file) => file.name).join(', ');
  const hidden = accepted.length - MAX_NAMES_SHOWN;

  const textFor = (suggestion: ToolSuggestion) => {
    const base = `suggestions.${suggestion.context}.${suggestion.toolId}`;
    const count = accepted.length;
    return {
      title: t.has(`${base}.title`) ? t(`${base}.title`) : toolTitles[suggestion.toolId] ?? suggestion.toolId,
      description: t.has(`${base}.description`)
        ? t(`${base}.description`, { count })
        : t(`suggestions.convert.description`, { count, extension: extension || '' }),
    };
  };

  const empty = kind === 'none';
  const notice = kind === 'mixed' ? t('mixedNotice') : suggestions.length === 0 && !empty ? t('noToolNotice') : null;

  return (
    <div className="rounded-xl border bg-card p-5 text-start shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <p role="status" className="font-semibold">
            {empty ? t('noneUsable') : t(`summary.${summaryKey(kind)}`, { count: accepted.length, extension })}
          </p>
          {!empty && (
            <p className="break-words text-sm text-muted-foreground">
              {formatFileSize(totalSize)} · {names}{hidden > 0 && ` ${t('moreFiles', { count: hidden })}`}
            </p>
          )}
        </div>
        <Button variant="outline" size="sm" onClick={onReset}>{t('chooseDifferent')}</Button>
      </div>

      {rejected.length > 0 && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle />
          <AlertTitle className="line-clamp-none">{t('skipped')}</AlertTitle>
          <AlertDescription>
            <ul className="list-disc space-y-0.5 ps-4">
              {rejected.map((file, index) => (
                <li key={`${file.name}-${index}`} className="break-words">{t(`errors.${file.reason}`, { name: file.name })}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {notice && <p className="mt-4 text-sm text-muted-foreground">{notice}</p>}

      {suggestions.length > 0 && (
        <div className="mt-5 space-y-3">
          <p className="text-sm font-medium">{t('suggestionsTitle')}</p>
          <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {suggestions.map((suggestion) => {
              const { title, description } = textFor(suggestion);
              return (
                <li key={`${suggestion.context}-${suggestion.toolId}`}>
                  <Link
                    href={toolHref(locale, suggestion.slug)}
                    onClick={(event) => { if (isPlainLeftClick(event)) stageFilesForTool(suggestion.slug, accepted); }}
                    className="group flex h-full items-start gap-3 rounded-lg border bg-background p-3.5 transition-colors hover:border-primary/50 hover:bg-accent focus-visible:outline-2"
                  >
                    <span className="min-w-0 flex-1 space-y-0.5">
                      <span className="block font-medium">{title}</span>
                      <span className="block text-sm text-muted-foreground">{description}</span>
                    </span>
                    <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeroUploader;
