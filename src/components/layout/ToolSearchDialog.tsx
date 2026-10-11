'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { type Locale, localeConfig } from '@/lib/i18n/config';
import { getAllTools, POPULAR_TOOL_IDS } from '@/config/tools';
import { getToolIcon } from '@/config/icons';
import { toolHref } from '@/lib/routes';
import { filterDirectoryTools, type DirectoryTool } from '@/lib/home/directory';
import type { ToolSummary } from '@/lib/tool-summaries';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';

const MAX_RESULTS = 8;

export interface ToolSearchDialogProps {
  locale: Locale;
  content: Record<string, ToolSummary>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Command palette for finding a tool by name, task or keyword. */
export default function ToolSearchDialog({ locale, content, open, onOpenChange }: ToolSearchDialogProps) {
  const t = useTranslations('common');
  const tPopular = useTranslations('home.categories');
  const router = useRouter();
  const [query, setQuery] = useState('');
  // Same name-first matching as the homepage directory, over the registry plus localized names.
  const entries = useMemo<DirectoryTool[]>(() => getAllTools().map((tool) => ({
    id: tool.id,
    slug: tool.slug,
    icon: tool.icon,
    category: tool.category,
    title: content[tool.id]?.title ?? tool.id,
    description: content[tool.id]?.description ?? '',
    searchText: tool.features.join(' ').replace(/-/g, ' '),
  })), [content]);
  const results = useMemo(() => query.trim()
    ? filterDirectoryTools(entries, query, 'all').slice(0, MAX_RESULTS)
    : POPULAR_TOOL_IDS.flatMap((id) => entries.filter((entry) => entry.id === id)).slice(0, MAX_RESULTS),
  [query, entries]);

  const changeOpen = (value: boolean) => {
    onOpenChange(value);
    if (!value) setQuery('');
  };

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className="overflow-hidden p-0" dir={localeConfig[locale].direction} showCloseButton={false}>
        <DialogHeader className="sr-only">
          <DialogTitle>{t('search.placeholder')}</DialogTitle>
          <DialogDescription>{t('search.hint')}</DialogDescription>
        </DialogHeader>
        <Command shouldFilter={false}>
          <CommandInput value={query} onValueChange={setQuery} placeholder={t('search.placeholder')} aria-label={t('search.placeholder')} className="pe-10" />
          <CommandList>
            <CommandEmpty>{t('search.noResults')}</CommandEmpty>
            <CommandGroup heading={query.trim() ? undefined : tPopular('popular')}>
              {results.map((tool) => {
                const Icon = getToolIcon(tool.icon);
                return (
                  <CommandItem key={tool.id} value={tool.id} onSelect={() => {
                    changeOpen(false);
                    router.push(toolHref(locale, tool.slug));
                  }}>
                    <Icon aria-hidden="true" />
                    <div className="min-w-0">
                      <div className="font-medium">{tool.title}</div>
                      <div className="truncate text-xs text-muted-foreground">{tool.description}</div>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
        <DialogClose asChild><Button variant="ghost" size="icon-sm" className="absolute end-2 top-2 z-10" aria-label={t('buttons.close')}><X aria-hidden="true" /></Button></DialogClose>
      </DialogContent>
    </Dialog>
  );
}
