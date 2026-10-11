'use client';

import { lazy, Suspense, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { ToolSummary } from '@/lib/tool-summaries';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// The palette (dialog, command list, tool registry and icons) is only fetched
// once someone reaches for search, which keeps it out of every page's first load.
const loadDialog = () => import('./ToolSearchDialog');
const ToolSearchDialog = lazy(loadDialog);

export interface ToolSearchProps {
  locale: Locale;
  /** Localized tool names and descriptions, prepared on the server. */
  content: Record<string, ToolSummary>;
  className?: string;
}

export function ToolSearch({ locale, content, className }: ToolSearchProps) {
  const t = useTranslations('common');
  const tNav = useTranslations('common.navigation');
  const [requested, setRequested] = useState(false);
  const [open, setOpen] = useState(false);
  const [isApple, setIsApple] = useState(false);

  useEffect(() => {
    setIsApple(/Mac|iPhone|iPad|iPod/i.test(navigator.userAgent));
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setRequested(true);
        setOpen((value) => !value);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <div className="relative">
        <Button
          variant="ghost"
          className={cn('size-9 p-0 xl:w-36 xl:justify-start xl:gap-2 xl:border xl:bg-background xl:px-3 xl:pe-12 xl:shadow-xs', className)}
          aria-label={t('search.placeholder')}
          aria-keyshortcuts="Control+K Meta+K"
          onPointerEnter={loadDialog}
          onFocus={loadDialog}
          onClick={() => { setRequested(true); setOpen(true); }}
        >
          <Search aria-hidden="true" />
          <span className="hidden font-normal text-muted-foreground xl:inline">{tNav('search')}</span>
        </Button>
        <kbd className="pointer-events-none absolute end-2 top-1/2 hidden h-5 -translate-y-1/2 items-center rounded border bg-muted px-1.5 font-sans text-xs text-muted-foreground xl:inline-flex" aria-hidden="true">
          {isApple ? '⌘K' : 'Ctrl K'}
        </kbd>
      </div>
      {requested && (
        <Suspense fallback={null}>
          <ToolSearchDialog locale={locale} content={content} open={open} onOpenChange={setOpen} />
        </Suspense>
      )}
    </>
  );
}

export default ToolSearch;
