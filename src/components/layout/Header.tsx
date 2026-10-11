import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { type Locale } from '@/lib/i18n/config';
import { getToolSummaries } from '@/lib/tool-summaries';
import { RecentFilesDropdown } from '@/components/common/RecentFilesDropdown';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { BrandMark } from './BrandMark';
import { LanguageSelector } from './LanguageSelector';
import { MobileMenu } from './MobileMenu';
import { Navigation } from './Navigation';
import { buildNavigationData } from './navigation-data';
import { ToolSearch } from './ToolSearch';

export interface HeaderProps {
  locale: Locale;
  showSearch?: boolean;
}

/**
 * Site header. A server component: menu data and tool names are prepared here,
 * so only the interactive pieces (menus, search, theme, language) ship as client code.
 */
export function Header({ locale, showSearch = true }: HeaderProps) {
  const t = useTranslations('common');
  const navigation = buildNavigationData(locale);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5 rounded-md py-1 text-lg font-semibold tracking-tight" aria-label={`${t('brand')} - ${t('navigation.home')}`}>
          <BrandMark />
          <span data-testid="brand-name">{t('brand')}</span>
        </Link>
        <Navigation locale={locale} navigation={navigation} />
        <div className="flex shrink-0 items-center gap-1">
          {showSearch && <ToolSearch locale={locale} content={getToolSummaries(locale)} />}
          <RecentFilesDropdown locale={locale} translations={{
            title: t('recentFiles.title'),
            empty: t('recentFiles.empty'),
            clearAll: t('recentFiles.clearAll'),
            processedWith: t('recentFiles.processedWith'),
          }} />
          <div className="hidden items-center gap-1 xl:flex">
            <LanguageSelector currentLocale={locale} variant="compact" />
            <ThemeToggle />
          </div>
          <MobileMenu locale={locale} navigation={navigation} />
        </div>
      </div>
    </header>
  );
}

export default Header;
