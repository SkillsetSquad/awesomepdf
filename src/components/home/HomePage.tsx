import { PageSeo } from '@/components/seo/PageSeo';
import seoCopy from '@/lib/seo/copy.json';
import { useTranslations } from 'next-intl';
import { getAllTools } from '@/config/tools';
import type { Locale } from '@/lib/i18n/config';
import { firstSentence, getToolSummaries } from '@/lib/tool-summaries';
import { getToolContent } from '@/config/tool-content';
import { generateFAQPageSchema, generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo';
import type { DirectoryTool } from '@/lib/home/directory';
import { JsonLd } from '@/components/seo/JsonLd';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { HOME_FAQ_KEYS } from './faq-items';
import { FaqSection } from './FaqSection';
import { HeroSection } from './HeroSection';
import { PopularTools } from './PopularTools';
import { ShareSection } from './ShareSection';
import { ToolDirectory } from './ToolDirectory';
import { TrustSection } from './TrustSection';

function buildDirectoryTools(locale: Locale): DirectoryTool[] {
  const summaries = getToolSummaries(locale);
  return getAllTools().map((tool) => {
    const keywords = getToolContent(locale, tool.id)?.keywords ?? [];
    return {
      id: tool.id,
      slug: tool.slug,
      icon: tool.icon,
      category: tool.category,
      title: summaries[tool.id].title,
      description: firstSentence(summaries[tool.id].description),
      searchText: [...keywords, ...tool.features.map((feature) => feature.replace(/-/g, ' '))].join(' '),
    };
  });
}

/** The homepage. Everything is rendered on the server except the uploader and the directory filters. */
export default function HomePage({ locale }: { locale: Locale }) {
  const t = useTranslations('home.faq');
  const directoryTools = buildDirectoryTools(locale);
  const faqs = HOME_FAQ_KEYS.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`, { count: directoryTools.length }),
  }));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={[generateWebSiteSchema(locale), generateOrganizationSchema(), generateFAQPageSchema(faqs)]} />
      <PageSeo locale={locale} path="" title={seoCopy[locale].home.title} description={seoCopy[locale].home.description} />
      <Header locale={locale} />
      <main id="main-content" tabIndex={-1} className="flex-1 pt-16 outline-none">
        <HeroSection locale={locale} />
        <PopularTools locale={locale} />
        <ToolDirectory locale={locale} tools={directoryTools} />
        <ShareSection />
        <TrustSection locale={locale} />
        <FaqSection locale={locale} toolCount={directoryTools.length} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
