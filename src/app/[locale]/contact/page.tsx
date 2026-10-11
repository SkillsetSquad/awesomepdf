import { PageSeo } from '@/components/seo/PageSeo';
import seoCopy from '@/lib/seo/copy.json';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { generateContactMetadata } from '@/lib/seo';
import ContactPageClient from './ContactPageClient';

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

  return generateContactMetadata(validLocale, {
    title: t('contact.title'),
    description: t('contact.description'),
  });
}

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return <><PageSeo locale={locale as Locale} path="/contact" title={seoCopy[locale as Locale].contact.title} description={seoCopy[locale as Locale].contact.description} type="ContactPage" /><ContactPageClient locale={locale as Locale} /></>;
}
