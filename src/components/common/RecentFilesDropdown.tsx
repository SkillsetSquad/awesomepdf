'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Clock, X, Trash2, FileText } from 'lucide-react';
import { useRecentFiles } from '@/lib/hooks/useRecentFiles';
import { formatFileSize, formatDate } from '@/lib/storage/recent-files';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { type Locale, localeConfig } from '@/lib/i18n/config';

export interface RecentFilesDropdownProps {
  locale: Locale;
  translations: {
    title: string;
    empty: string;
    clearAll: string;
    processedWith: string;
  };
}

export function RecentFilesDropdown({ locale, translations }: RecentFilesDropdownProps) {
  const { recentFiles, removeFile, clearAll, isLoading } = useRecentFiles();
  const [open, setOpen] = useState(false);
  const headingId = useId();
  const t = useTranslations('common.buttons');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={translations.title} disabled={isLoading}>
          <Clock aria-hidden="true" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" dir={localeConfig[locale].direction} aria-labelledby={headingId} className="max-h-[min(28rem,70dvh)] w-[min(24rem,calc(100vw-2rem))] overflow-y-auto">
        <div className="flex items-center justify-between gap-2">
          <h2 id={headingId} className="flex items-center gap-2 text-sm font-medium">{translations.title}<Badge variant="secondary">{recentFiles.length}</Badge></h2>
          {recentFiles.length > 0 && <Button variant="ghost" size="sm" onClick={() => { clearAll(); setOpen(false); }}>
            <Trash2 aria-hidden="true" />{translations.clearAll}
          </Button>}
        </div>
        <Separator className="my-3" />
        {recentFiles.length === 0 ? <div className="py-6 text-center text-sm text-muted-foreground">
          <FileText className="mx-auto mb-2 size-6" aria-hidden="true" />{translations.empty}
        </div> : <ul className="space-y-2">
          {recentFiles.map((file) => <li key={file.id} className="flex items-start gap-1">
            <Button variant="ghost" className="h-auto min-w-0 flex-1 justify-start whitespace-normal py-2 text-start" asChild>
              <Link href={`/${locale}/tools/${file.toolUsed}`} onClick={() => setOpen(false)}>
                <FileText className="shrink-0" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block truncate font-medium">{file.name}</span>
                  <span className="block text-xs text-muted-foreground">{formatFileSize(file.size)} · {formatDate(file.processedAt)}</span>
                  <span className="block text-xs text-muted-foreground">{translations.processedWith} {file.toolName || file.toolUsed}</span>
                </span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" aria-label={`${t('remove')}: ${file.name}`} onClick={() => removeFile(file.id)}><X aria-hidden="true" /></Button>
          </li>)}
        </ul>}
      </PopoverContent>
    </Popover>
  );
}

export default RecentFilesDropdown;
