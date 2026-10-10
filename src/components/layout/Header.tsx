'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { FileText, Github } from 'lucide-react';
import { type Locale } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { RecentFilesDropdown } from '@/components/common/RecentFilesDropdown';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { UpdateCheckButton } from '@/components/common/UpdateCheckButton';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { LanguageSelector } from './LanguageSelector';
import { ToolSearch } from './ToolSearch';

export interface HeaderProps {
  locale: Locale;
  showSearch?: boolean;
}

export function Header({ locale, showSearch = true }: HeaderProps) {
  const t = useTranslations('common');
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2 rounded-md font-semibold" aria-label={`${t('brand')} - ${t('navigation.home')}`}>
          <FileText className="hidden size-6 text-primary sm:block" aria-hidden="true" />
          <span data-testid="brand-name">{t('brand')}</span>
        </Link>
        <Navigation locale={locale} currentPath={pathname} />
        <div className="flex items-center sm:gap-1">
          {showSearch && <ToolSearch locale={locale} />}
          <RecentFilesDropdown locale={locale} translations={{
            title: t('recentFiles.title'),
            empty: t('recentFiles.empty'),
            clearAll: t('recentFiles.clearAll'),
            processedWith: t('recentFiles.processedWith'),
          }} />
          <div className="hidden sm:contents"><UpdateCheckButton /><ThemeToggle /></div>
          <LanguageSelector currentLocale={locale} />
          <Button variant="ghost" size="icon" className="hidden 2xl:inline-flex" asChild>
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github aria-hidden="true" /></a>
          </Button>
          <MobileMenu locale={locale} />
        </div>
      </div>
    </header>
  );
}

export default Header;
