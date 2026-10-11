import type { Metadata } from 'next';
import { Suspense } from 'react';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { generateToolsListMetadata } from '@/lib/seo';
import ToolsPageClient from './ToolsPageClient';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import { PageSeo } from '@/components/seo/PageSeo';
import seoCopy from '@/lib/seo/copy.json';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locales.includes(locale as Locale) ? (locale as Locale) : 'en';
  const t = await getTranslations({ locale: validLocale, namespace: 'metadata' });

  return generateToolsListMetadata(validLocale, {
    title: t('tools.title'),
    description: t('tools.description'),
  });
}

interface ToolsPageProps {
  params: Promise<{ locale: string }>;
}

function ToolsPageFallback({ label }: { label: string }) {
  return (
    <main id="main-content" aria-label={label} className="mx-auto w-full max-w-7xl flex-1 space-y-8 px-4 pt-24 pb-12 sm:px-6">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-28 w-full" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 8 }, (_, index) => <Skeleton key={index} className="h-44" />)}</div>
    </main>
  );
}

export default async function ToolsPage({ params }: ToolsPageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'common.status' });

  // Get localized content for tools
  const { tools } = await import('@/config/tools');
  const { getToolContent } = await import('@/config/tool-content');

  const localizedToolContent = tools.reduce((acc, tool) => {
    const content = getToolContent(locale as Locale, tool.id);
    if (content) {
      acc[tool.id] = {
        title: content.title,
        description: content.metaDescription
      };
    }
    return acc;
  }, {} as Record<string, { title: string; description: string }>);

  // Note: searchParams are handled client-side in ToolsPageClient
  // because static export doesn't support server-side searchParams
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PageSeo locale={locale as Locale} path="/tools" title={seoCopy[locale as Locale].tools.title} description={seoCopy[locale as Locale].tools.description} type="CollectionPage" tools={tools.filter(tool => !tool.disabled)} />
      <Header locale={locale as Locale} />
      <Suspense fallback={<ToolsPageFallback label={t('loading')} />}>
        <ToolsPageClient locale={locale as Locale} localizedToolContent={localizedToolContent} />
      </Suspense>
      <Footer locale={locale as Locale} />
    </div>
  );
}
