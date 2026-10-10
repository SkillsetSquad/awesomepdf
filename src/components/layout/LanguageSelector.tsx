'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Globe, ChevronDown } from 'lucide-react';
import { type Locale, locales, localeConfig, getLocalizedPath } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuRadioGroup, DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';

export interface LanguageSelectorProps {
  currentLocale: Locale;
}

// Storage key for language preference
const LANGUAGE_PREFERENCE_KEY = 'pdfcraft-language-preference';

/**
 * Save language preference to localStorage
 */
export function saveLanguagePreference(locale: Locale): void {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LANGUAGE_PREFERENCE_KEY, locale);
    } catch {
      // Language navigation still works when browser storage is unavailable.
    }
  }
}

/**
 * Get language preference from localStorage
 */
export function getLanguagePreference(): Locale | null {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
      if (stored && locales.includes(stored as Locale)) return stored as Locale;
    } catch {
      // No persisted preference is available.
    }
  }
  return null;
}

export function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const t = useTranslations('common.buttons');
  const router = useRouter();
  const pathname = usePathname();
  const currentConfig = localeConfig[currentLocale];

  const selectLanguage = (value: string) => {
    if (!locales.includes(value as Locale)) return;
    const locale = value as Locale;
    saveLanguagePreference(locale);
    router.push(`${getLocalizedPath(pathname, locale)}${window.location.search}${window.location.hash}`);
  };

  return (
    <DropdownMenu dir={currentConfig.direction}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label={t('selectLanguage')}>
          <Globe aria-hidden="true" />
          <span className="hidden sm:inline">{currentConfig.nativeName}</span>
          <ChevronDown aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-[min(28rem,70dvh)] w-60 overflow-y-auto" aria-label={t('selectLanguage')}>
        <DropdownMenuRadioGroup value={currentLocale} onValueChange={selectLanguage}>
          {locales.map((locale) => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              <span lang={locale} dir={localeConfig[locale].direction}>{localeConfig[locale].nativeName}</span>
              <span className="ms-auto text-xs text-muted-foreground">{localeConfig[locale].name}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;
