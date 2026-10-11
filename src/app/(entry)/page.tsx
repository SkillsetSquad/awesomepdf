import type { Metadata } from 'next';
import Link from 'next/link';
import { locales, localeConfig } from '@/lib/i18n/config';
import { siteConfig } from '@/config/site';
import { getAbsoluteUrl, getAlternateUrls } from '@/lib/seo/urls';
import { generateBaseMetadata } from '@/lib/seo/metadata';
import { JsonLd } from '@/components/seo/JsonLd';

const entryUrl = getAbsoluteUrl('/', true);
const entryMetadata = generateBaseMetadata({
  locale: 'en',
  title: `Free PDF Tools in ${locales.length} Languages`,
  description: siteConfig.description,
});

export const metadata: Metadata = {
  ...entryMetadata,
  alternates: {
    canonical: entryUrl,
    languages: getAlternateUrls(),
  },
  openGraph: { ...entryMetadata.openGraph, url: entryUrl },
};

/** A crawlable language entry page, also usable without browser scripting. */
export default function RootPage() {
  return (
    <>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: siteConfig.name, url: entryUrl, description: siteConfig.description, inLanguage: [...locales] }} />
    <main id="main-content" className="mx-auto max-w-3xl space-y-8 px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">{siteConfig.name}</h1>
      <p className="text-muted-foreground">{siteConfig.description}</p>
      <nav aria-label="Choose your language">
        <ul className="grid gap-4 sm:grid-cols-3">
          {locales.map(locale => <li key={locale}>
            <Link href={`/${locale}/`} hrefLang={locale} lang={locale} dir={localeConfig[locale].direction}
              className="block rounded-lg border p-4 hover:bg-muted">{localeConfig[locale].nativeName}</Link>
          </li>)}
        </ul>
      </nav>
    </main>
    </>
  );
}
