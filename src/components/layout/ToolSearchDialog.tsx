'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FileText, X } from 'lucide-react';
import { type Locale, localeConfig } from '@/lib/i18n/config';
import { getAllTools, POPULAR_TOOL_IDS } from '@/config/tools';
import { getToolIcon } from '@/config/icons';
import { toolHref } from '@/lib/routes';
import { filterDirectoryTools, type DirectoryTool } from '@/lib/home/directory';
import type { ToolSummary } from '@/lib/tool-summaries';
import { filterLocalFiles, loadLocalFileSearch, matchesLocalFileName, type LocalFileSearchEntry } from '@/lib/storage/file-search';
import { formatFileSize } from '@/lib/storage/recent-files';
import { LOCAL_FILE_RECORDS_CHANGED } from '@/lib/storage/events';
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

/** Command palette for tools and the file records already saved on this device. */
export default function ToolSearchDialog({ locale, content, open, onOpenChange }: ToolSearchDialogProps) {
  const t = useTranslations('common');
  const tPopular = useTranslations('home.categories');
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selection, setSelection] = useState('');
  const [files, setFiles] = useState<LocalFileSearchEntry[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [filesUnavailable, setFilesUnavailable] = useState(false);
  useEffect(() => {
    if (!open) {
      setQuery('');
      setFiles([]);
      setFilesUnavailable(false);
      setLoadingFiles(false);
      return;
    }
    let disposed = false;
    let request = 0;
    const refresh = async () => {
      const current = ++request;
      setLoadingFiles(true);
      const snapshot = await loadLocalFileSearch();
      if (disposed || current !== request) return;
      setFiles(snapshot.files);
      setFilesUnavailable(snapshot.unavailable);
      setLoadingFiles(false);
    };
    void refresh();
    const onStorage = (event: StorageEvent) => {
      if (event.key === null || event.key === 'pdfcraft_recent_files') void refresh();
    };
    window.addEventListener('storage', onStorage);
    window.addEventListener('focus', refresh);
    window.addEventListener(LOCAL_FILE_RECORDS_CHANGED, refresh);
    return () => {
      disposed = true;
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('focus', refresh);
      window.removeEventListener(LOCAL_FILE_RECORDS_CHANGED, refresh);
    };
  }, [open]);
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
  const fileResults = useMemo(() => filterLocalFiles(files, query,
    Object.fromEntries(entries.map(tool => [tool.id, tool.title]))).slice(0, MAX_RESULTS), [files, query, entries]);
  const filesFirst = fileResults.some(file => matchesLocalFileName(file.name, query));
  const firstFile = fileResults.find(file => file.toolSlug);
  const firstValue = filesFirst && firstFile ? `file:${firstFile.id}`
    : results[0] ? `tool:${results[0].id}` : firstFile ? `file:${firstFile.id}` : '';
  useEffect(() => { setSelection(firstValue); }, [query, firstValue]);

  const changeOpen = (value: boolean) => {
    onOpenChange(value);
    if (!value) setQuery('');
  };

  const toolGroup = results.length > 0 && (
    <CommandGroup key="tools" value="tools" heading={query.trim() ? t('search.tools') : tPopular('popular')}>
      {results.map((tool) => {
        const Icon = getToolIcon(tool.icon);
        return (
          <CommandItem key={tool.id} value={`tool:${tool.id}`} onSelect={() => {
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
  );

  const fileGroup = fileResults.length > 0 && (
    <CommandGroup key="files" value="files" heading={t('search.files')}>
      {fileResults.map(file => <CommandItem key={file.id} value={`file:${file.id}`} disabled={!file.toolSlug} onSelect={() => {
        if (!file.toolSlug) return;
        changeOpen(false);
        router.push(toolHref(locale, file.toolSlug));
      }}>
        <FileText aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <div className="truncate font-medium" dir="auto">{file.name}</div>
          <div className="truncate text-xs text-muted-foreground">
            {formatFileSize(file.size)} · {t(file.source === 'recent' ? 'search.recentFile' : 'search.projectFile')}
            {file.projectName && <> · <span dir="auto">{file.projectName}</span></>}
            {' · '}{file.toolSlug ? content[file.toolId ?? '']?.title ?? file.toolName ?? file.toolSlug : t('search.toolUnavailable')}
          </div>
        </div>
      </CommandItem>)}
    </CommandGroup>
  );

  return (
    <Dialog open={open} onOpenChange={changeOpen}>
      <DialogContent className="overflow-hidden p-0" dir={localeConfig[locale].direction} showCloseButton={false}>
        <DialogHeader className="sr-only">
          <DialogTitle>{t('search.placeholder')}</DialogTitle>
          <DialogDescription>{t('search.hint')}</DialogDescription>
        </DialogHeader>
        <Command shouldFilter={false} value={selection} onValueChange={setSelection}>
          <CommandInput value={query} onValueChange={setQuery} placeholder={t('search.placeholder')} aria-label={t('search.placeholder')} className="pe-10" />
          <CommandList className="max-h-[min(60dvh,32rem)]" aria-busy={loadingFiles}>
            {!loadingFiles && <CommandEmpty>{t('search.noResults')}</CommandEmpty>}
            {filesFirst ? fileGroup : toolGroup}
            {filesFirst ? toolGroup : fileGroup}
            {loadingFiles && <p role="status" className="px-3 py-2 text-xs text-muted-foreground">{t('search.loadingFiles')}</p>}
          </CommandList>
          {filesUnavailable && <p role="status" className="border-t px-3 py-2 text-xs text-muted-foreground">{t('search.filesUnavailable')}</p>}
          {fileResults.length > 0 && <p className="border-t px-3 py-2 text-xs text-muted-foreground">{t('search.fileHint')}</p>}
        </Command>
        <DialogClose asChild><Button variant="ghost" size="icon-sm" className="absolute end-2 top-2 z-10" aria-label={t('buttons.close')}><X aria-hidden="true" /></Button></DialogClose>
      </DialogContent>
    </Dialog>
  );
}
