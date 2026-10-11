'use client';

import { Suspense, useState, useMemo, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Search, X, Star } from 'lucide-react';
import { ToolGrid } from '@/components/tools/ToolGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Skeleton } from '@/components/ui/skeleton';
import { getAllTools } from '@/config/tools';
import { toolMatchesQuery } from '@/lib/utils/search';
import { type Locale } from '@/lib/i18n/config';
import { TOOL_CATEGORIES, type ToolCategory } from '@/types/tool';
import { useFavorites } from '@/hooks/useFavorites';

type CategoryFilter = ToolCategory | 'all' | 'favorites';
const categoryKeys: Record<ToolCategory, string> = {
  'edit-annotate': 'editAnnotate', 'convert-to-pdf': 'convertToPdf',
  'convert-from-pdf': 'convertFromPdf', 'organize-manage': 'organizeManage',
  'optimize-repair': 'optimizeRepair', 'secure-pdf': 'securePdf',
};
function parseCategory(value: string | null): CategoryFilter {
  return value === 'favorites' || TOOL_CATEGORIES.includes(value as ToolCategory) ? value as CategoryFilter : 'all';
}
interface ToolsPageClientProps {
  locale: Locale;
  localizedToolContent?: Record<string, { title: string; description: string }>;
}

/** Isolate the static-export search-parameter bailout from the visible directory. */
function ToolsQuerySync({ onQueryChange, onCategoryChange }: {
  onQueryChange: (query: string) => void;
  onCategoryChange: (category: CategoryFilter) => void;
}) {
  const searchParams = useSearchParams();
  useEffect(() => {
    onCategoryChange(parseCategory(searchParams.get('category')));
    onQueryChange(searchParams.get('q') || '');
  }, [searchParams, onQueryChange, onCategoryChange]);
  return null;
}

export default function ToolsPageClient({ locale, localizedToolContent }: ToolsPageClientProps) {
  const t = useTranslations();
  const allTools = useMemo(() => getAllTools(), []);
  const { favorites, isLoaded: favoritesLoaded, favoritesCount } = useFavorites();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');

  const filteredTools = useMemo(() => allTools.filter(tool =>
    (selectedCategory === 'all' || (selectedCategory === 'favorites' ? favorites.includes(tool.id) : tool.category === selectedCategory)) &&
    (!searchQuery.trim() || toolMatchesQuery(tool, searchQuery, localizedToolContent?.[tool.id]))
  ), [allTools, selectedCategory, searchQuery, favorites, localizedToolContent]);
  const categories = [
    { value: 'all', label: t('toolsPage.allTools'), count: allTools.length },
    { value: 'favorites', label: t('tools.favorite.title'), count: favoritesLoaded ? favoritesCount : undefined },
    ...TOOL_CATEGORIES.map(category => ({ value: category, label: t(`home.categories.${categoryKeys[category]}`), count: allTools.filter(tool => tool.category === category).length })),
  ];
  const clearFilters = () => { setSearchQuery(''); setSelectedCategory('all'); };
  const loadingFavorites = selectedCategory === 'favorites' && !favoritesLoaded;
  const emptyFavorites = selectedCategory === 'favorites' && !searchQuery.trim();

  return (
    <main id="main-content" className="mx-auto w-full max-w-7xl flex-1 space-y-8 px-4 pt-24 pb-12 sm:px-6">
      <Suspense fallback={null}><ToolsQuerySync onQueryChange={setSearchQuery} onCategoryChange={setSelectedCategory} /></Suspense>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('toolsPage.title')}</h1>
        <p className="text-muted-foreground">{t('toolsPage.subtitle', { count: allTools.length })}</p>
      </div>
      <Card>
        <CardContent className="grid items-end gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto]">
          <div className="space-y-2">
            <Label htmlFor="tool-search">{t('common.search.placeholder')}</Label>
            <div className="relative">
              <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input id="tool-search" type="search" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder={t('tools.search.placeholder')} className="ps-9 pe-10 [&::-webkit-search-cancel-button]:appearance-none" />
              {searchQuery && <Button variant="ghost" size="icon" className="absolute end-0 top-0" onClick={() => setSearchQuery('')} aria-label={t('common.buttons.clear')}><X /></Button>}
            </div>
          </div>
          <div className="space-y-2 [&>[data-slot=native-select-wrapper]]:w-full">
            <Label htmlFor="tool-category">{t('toolsPage.filters')}</Label>
            <NativeSelect id="tool-category" value={selectedCategory} onChange={event => setSelectedCategory(parseCategory(event.target.value))}>
              {categories.map(category => <NativeSelectOption key={category.value} value={category.value}>{category.label}{category.count !== undefined ? ` (${category.count})` : ''}</NativeSelectOption>)}
            </NativeSelect>
          </div>
          <Button variant="outline" onClick={clearFilters} disabled={!searchQuery && selectedCategory === 'all'}>{t('toolsPage.clearAll')}</Button>
        </CardContent>
      </Card>
      <p role="status" className="text-sm text-muted-foreground">
        {t(filteredTools.length === allTools.length ? 'toolsPage.showingAll' : 'toolsPage.showingFiltered', { count: allTools.length, filtered: filteredTools.length, total: allTools.length })}
        {searchQuery && ` ${t('toolsPage.forQuery', { query: searchQuery })}`}
        {TOOL_CATEGORIES.includes(selectedCategory as ToolCategory) && ` ${t('toolsPage.inCategory', { category: t(`home.categories.${categoryKeys[selectedCategory as ToolCategory]}`) })}`}
      </p>
      {loadingFavorites ? <div aria-label={t('common.status.loading')} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton key={index} className="h-44" />)}</div> : filteredTools.length ? (
        <ToolGrid tools={filteredTools} locale={locale} localizedToolContent={localizedToolContent} showCategoryHeaders={selectedCategory === 'all' && !searchQuery.trim()} />
      ) : (
        <Card className="mx-auto max-w-xl text-center">
          <CardHeader>
            {emptyFavorites ? <Star className="mx-auto size-8 text-muted-foreground" aria-hidden="true" /> : <Search className="mx-auto size-8 text-muted-foreground" aria-hidden="true" />}
            <CardTitle><h2>{t(emptyFavorites ? 'tools.favorite.empty' : 'toolsPage.noToolsFound')}</h2></CardTitle>
            <CardDescription>{emptyFavorites ? t('tools.favorite.hint') : t('tools.search.noResults', { query: searchQuery })}</CardDescription>
          </CardHeader>
          <CardContent><Button variant="outline" onClick={clearFilters}>{t(emptyFavorites ? 'toolsPage.allTools' : 'toolsPage.clearFilters')}</Button></CardContent>
        </Card>
      )}
    </main>
  );
}
