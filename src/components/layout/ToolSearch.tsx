'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Search, X } from 'lucide-react';
import { type Locale, localeConfig } from '@/lib/i18n/config';
import { getAllTools, POPULAR_TOOL_IDS } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import { getToolIcon } from '@/config/icons';
import { searchTools } from '@/lib/utils/search';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command';

export function ToolSearch({ locale }: { locale: Locale }) {
  const t = useTranslations('common');
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const allTools = useMemo(() => getAllTools(), []);
  const content = useMemo(() => Object.fromEntries(allTools.map((tool) => {
    const localized = getToolContent(locale, tool.id);
    return [tool.id, { title: localized?.title ?? tool.id.replace(/-/g, ' '), description: localized?.metaDescription ?? tool.features.join(', ') }];
  })), [allTools, locale]);
  const results = useMemo(() => query.trim()
    ? searchTools(query, content).filter(({ tool }) => !tool.disabled).slice(0, 8).map(({ tool }) => tool)
    : POPULAR_TOOL_IDS.map((id) => allTools.find((tool) => tool.id === id)).filter((tool) => tool !== undefined).slice(0, 8), [query, content, allTools]);

  const changeOpen = (value: boolean) => {
    setOpen(value);
    if (!value) setQuery('');
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
        setQuery('');
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('search.placeholder')} aria-keyshortcuts="Control+k Meta+k">
          <Search aria-hidden="true" />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0" dir={localeConfig[locale].direction} showCloseButton={false}>
        <DialogHeader className="sr-only">
          <DialogTitle>{t('search.placeholder')}</DialogTitle>
          <DialogDescription>{t('search.hint')}</DialogDescription>
        </DialogHeader>
        <Command shouldFilter={false}>
          <CommandInput value={query} onValueChange={setQuery} placeholder={t('search.placeholder')} aria-label={t('search.placeholder')} className="pe-10" />
          <CommandList>
            <CommandEmpty>{t('search.noResults')}</CommandEmpty>
            <CommandGroup>
              {results.map((tool) => {
                const Icon = getToolIcon(tool.icon);
                return <CommandItem key={tool.id} value={tool.id} onSelect={() => {
                  changeOpen(false);
                  router.push(`/${locale}/tools/${tool.slug}`);
                }}>
                  <Icon aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="font-medium">{content[tool.id].title}</div>
                    <div className="truncate text-xs text-muted-foreground">{content[tool.id].description}</div>
                  </div>
                </CommandItem>;
              })}
            </CommandGroup>
          </CommandList>
        </Command>
        <DialogClose asChild><Button variant="ghost" size="icon-sm" className="absolute end-2 top-2 z-10" aria-label={t('buttons.close')}><X aria-hidden="true" /></Button></DialogClose>
      </DialogContent>
    </Dialog>
  );
}
