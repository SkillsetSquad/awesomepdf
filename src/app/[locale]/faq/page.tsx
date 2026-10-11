import { FAQ_CATEGORY_ITEMS, getFaqValues } from '@/config/faq';
import { PageSeo } from '@/components/seo/PageSeo';
import seoCopy from '@/lib/seo/copy.json';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { locales, type Locale } from '@/lib/i18n/config';
import { generateFaqMetadata } from '@/lib/seo';
import FAQPageClient from './FAQPageClient';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

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

  return generateFaqMetadata(validLocale, {
    title: t('faq.title'),
    description: t('faq.description'),
  });
}

interface FAQPageProps {
  params: Promise<{ locale: string }>;
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations('faqPage');
  const values = getFaqValues();
  const faqs = Object.entries(FAQ_CATEGORY_ITEMS).flatMap(([category, keys]) => keys.map(key => ({
    question: t(`sections.${category}.${key}.question`, values),
    answer: t(`sections.${category}.${key}.answer`, values),
  })));

  return <><PageSeo locale={locale as Locale} path="/faq" title={seoCopy[locale as Locale].faq.title} description={seoCopy[locale as Locale].faq.description} type="WebPage" faqs={faqs} /><div className="flex min-h-screen flex-col bg-background"><Header locale={locale as Locale} /><FAQPageClient locale={locale as Locale} /><Footer locale={locale as Locale} /></div></>;
}
