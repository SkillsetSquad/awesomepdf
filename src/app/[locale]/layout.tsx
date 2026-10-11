import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { localeConfig, type Locale, locales } from '@/lib/i18n/config';
import { fontVariables } from '@/lib/fonts';
import { SkipLink } from '@/components/common/SkipLink';
import '@/app/globals.css';
import { UIProviders } from '@/components/ui/providers';
import { SiteDocument } from '@/components/layout/SiteDocument';
import { siteConfig } from '@/config/site';
import { withBasePath } from '@/lib/utils/path';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: withBasePath('/favicon.svg'),
    apple: withBasePath('/apple-touch-icon.png'),
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Viewport configuration for performance
 * Requirements: 8.1 - Lighthouse performance score 90+
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  // Get direction for the locale
  const direction = localeConfig[locale as Locale]?.direction || 'ltr';

  return (
    <SiteDocument locale={locale as Locale}>
    <NextIntlClientProvider messages={messages}>
      <div lang={locale} dir={direction} className={`${fontVariables} min-h-screen bg-background text-foreground antialiased font-sans`}>
        <UIProviders>
        <SkipLink targetId="main-content">Skip to main content</SkipLink>
        {children}
        </UIProviders>
      </div>
    </NextIntlClientProvider>
    </SiteDocument>
  );
}
