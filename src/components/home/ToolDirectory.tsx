'use client';

import { useId, useMemo, useRef, useState } from 'react';
import { IntentLink as Link } from '@/components/common/IntentLink';
import { useTranslations } from 'next-intl';
import { ArrowRight, Search, SearchX, X } from 'lucide-react';
import { CATEGORY_ICONS, DIRECTORY_FAVOURED_IDS, DIRECTORY_PREVIEW_SIZE } from '@/config/home';
import { getToolIcon } from '@/config/icons';
import type { Locale } from '@/lib/i18n/config';
import { categoryHref, toolHref } from '@/lib/routes';
import { filterDirectoryTools, previewTools, type CategoryFilter, type DirectoryTool } from '@/lib/home/directory';
import { cn } from '@/lib/utils';
import { CATEGORY_MESSAGE_KEYS, TOOL_CATEGORIES, type ToolCategory } from '@/types/tool';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export interface ToolDirectoryProps {
  locale: Locale;
  tools: DirectoryTool[];
}

/** Searchable, filterable directory of every tool in the registry. */
export function ToolDirectory({ locale, tools }: ToolDirectoryProps) {
  const t = useTranslations('home.directory');
  const tCategories = useTranslations('home.categories');
  const tDescriptions = useTranslations('home.categoriesDescription');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const resultsRef = useRef<HTMLDivElement>(null);
  const searchId = useId();

  const counts = useMemo(() => {
    const byCategory = Object.fromEntries(TOOL_CATEGORIES.map((id) => [id, 0])) as Record<ToolCategory, number>;
    for (const tool of tools) byCategory[tool.category] += 1;
    return byCategory;
  }, [tools]);
  const results = useMemo(() => filterDirectoryTools(tools, query, category), [tools, query, category]);
  const filtering = query.trim() !== '' || category !== 'all';
  const nameOf = (id: ToolCategory) => tCategories(CATEGORY_MESSAGE_KEYS[id]);

  const chooseCategory = (next: CategoryFilter, moveFocus = false) => {
    setCategory(next);
    if (moveFocus) requestAnimationFrame(() => resultsRef.current?.focus());
  };
  const clearFilters = () => {
    setQuery('');
    setCategory('all');
  };

  return (
    <section id="tools" aria-labelledby="directory-title" className="scroll-mt-16 border-y bg-surface py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl space-y-2">
          <h2 id="directory-title" className="text-2xl font-semibold tracking-tight md:text-3xl">{t('title')}</h2>
          <p className="text-muted-foreground">{t('description')}</p>
        </div>

        <div className="mt-6 space-y-4">
          <div className="relative max-w-xl">
            <label htmlFor={searchId} className="sr-only">{t('searchLabel')}</label>
            <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              id={searchId}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t('searchPlaceholder')}
              autoComplete="off"
              className="h-11 bg-background ps-9 pe-10 [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && (
              <Button variant="ghost" size="icon" className="absolute end-0.5 top-0.5 size-10" onClick={() => setQuery('')} aria-label={t('clearSearch')}>
                <X aria-hidden="true" />
              </Button>
            )}
          </div>

          <div role="group" aria-label={t('filterLabel')} className="flex flex-wrap gap-2">
            {(['all', ...TOOL_CATEGORIES] as const).map((id) => {
              const active = category === id;
              const count = id === 'all' ? tools.length : counts[id];
              return (
                <button
                  key={id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => chooseCategory(id)}
                  className={cn(
                    'inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors focus-visible:outline-2',
                    active ? 'border-primary bg-primary text-primary-foreground' : 'bg-background hover:border-primary/40 hover:bg-accent',
                  )}
                >
                  {id === 'all' ? t('all') : nameOf(id)}
                  <span className={cn('text-xs font-normal', active ? 'text-primary-foreground' : 'text-muted-foreground')}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div ref={resultsRef} tabIndex={-1} className="mt-8 outline-none">
          <p role="status" className={cn('mb-4 text-sm text-muted-foreground', !filtering && 'sr-only')}>
            {filtering ? t('status', { count: results.length }) : ''}
          </p>

          {!filtering ? (
            <ul className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2 xl:grid-cols-3">
              {TOOL_CATEGORIES.map((id) => {
                const Icon = CATEGORY_ICONS[id];
                return (
                  <li key={id} className="flex min-w-0 flex-col rounded-xl border bg-card p-5">
                    <div className="flex items-start gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <h3 className="font-semibold leading-snug">
                            <Link href={categoryHref(locale, id)} className="rounded-sm hover:underline">{nameOf(id)}</Link>
                          </h3>
                          <Badge variant="secondary" className="whitespace-nowrap">{t('toolsCount', { count: counts[id] })}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{tDescriptions(CATEGORY_MESSAGE_KEYS[id])}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-0.5">
                      {previewTools(tools, id, DIRECTORY_FAVOURED_IDS, DIRECTORY_PREVIEW_SIZE).map((tool) => {
                        const ToolIcon = getToolIcon(tool.icon);
                        return (
                          <li key={tool.id}>
                            <Link href={toolHref(locale, tool.slug)} className="flex min-h-9 items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent focus-visible:outline-2">
                              <ToolIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                              <span className="min-w-0">{tool.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="mt-auto pt-4">
                      <Button variant="outline" size="sm" onClick={() => chooseCategory(id, true)}>
                        {t('seeAll', { count: counts[id] })}
                        <ArrowRight className="rtl:rotate-180" aria-hidden="true" />
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : results.length > 0 ? (
            <ul className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {results.map((tool) => {
                const ToolIcon = getToolIcon(tool.icon);
                return (
                  <li
                    key={tool.id}
                    className="relative flex h-full gap-3 rounded-xl border bg-card p-4 transition-[border-color,box-shadow] hover:border-primary/40 hover:shadow-sm has-[a:focus-visible]:border-primary has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring/50"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <ToolIcon className="size-4.5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 space-y-1">
                      <h3 className="font-semibold leading-snug">
                        <Link href={toolHref(locale, tool.slug)} className="outline-none after:absolute after:inset-0 after:rounded-xl">{tool.title}</Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="mx-auto flex max-w-md flex-col items-center gap-3 rounded-xl border bg-card px-6 py-10 text-center">
              <SearchX className="size-8 text-muted-foreground" aria-hidden="true" />
              <p className="font-semibold">{t('empty')}</p>
              <p className="text-sm text-muted-foreground">{t('emptyHint')}</p>
              <Button variant="outline" onClick={clearFilters}>{t('clearFilters')}</Button>
            </div>
          )}

          {filtering && results.length > 0 && (
            <div className="mt-6">
              <Button variant="ghost" size="sm" onClick={clearFilters}>{t('clearFilters')}</Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ToolDirectory;
