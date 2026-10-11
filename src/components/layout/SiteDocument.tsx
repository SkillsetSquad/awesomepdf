import { localeConfig, type Locale } from '@/lib/i18n/config';
import { withBasePath } from '@/lib/utils/path';

/** Shared document shell; each root layout supplies its actual content language. */
export function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} dir={localeConfig[locale].direction} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <style dangerouslySetInnerHTML={{ __html: 'html{scrollbar-gutter:stable}' }} />
        <script src={withBasePath('/coi-serviceworker.js')} data-coi="true" async />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
