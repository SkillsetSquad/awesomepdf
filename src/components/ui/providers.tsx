'use client';

import { ThemeProvider } from 'next-themes';
import { useLocale, useTranslations } from 'next-intl';
import { Direction } from 'radix-ui';
import { localeConfig, type Locale } from '@/lib/i18n/config';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/sonner';

export function UIProviders({ children }: { children: React.ReactNode }) {
  const direction = localeConfig[useLocale() as Locale]?.direction || 'ltr';
  const t = useTranslations('common');
  return <Direction.Provider dir={direction}><ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme" disableTransitionOnChange>
    <TooltipProvider>{children}<Toaster dir={direction} closeButton toastOptions={{ closeButtonAriaLabel: t('buttons.close') }} /></TooltipProvider>
  </ThemeProvider></Direction.Provider>;
}
