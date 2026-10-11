import type { Locale } from '@/lib/i18n/config';
import type { Tool, FAQ } from '@/types/tool';
import { siteConfig } from '@/config/site';
import { getToolContent } from '@/config/tool-content';
import { getCanonicalUrl } from '@/lib/seo/urls';
import { generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/seo/structured-data';
import seoCopy from '@/lib/seo/copy.json';
import { JsonLd } from './JsonLd';

interface PageSeoProps {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  tools?: Tool[];
  faqs?: FAQ[];
}

/** Server-rendered schemas derived from the same visible page content. */
export function PageSeo({ locale, path, title, description, type = 'WebPage', tools, faqs }: PageSeoProps) {
  const url = getCanonicalUrl(locale, path);
  const list = tools?.map((tool, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: getToolContent(locale, tool.id)?.title,
    url: getCanonicalUrl(locale, `/tools/${tool.slug}`),
  }));
  const page = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    name: title,
    description,
    url,
    inLanguage: locale,
    isPartOf: { '@type': 'WebSite', name: siteConfig.name, url: getCanonicalUrl(locale) },
    ...(list ? { mainEntity: { '@type': 'ItemList', numberOfItems: list.length, itemListElement: list } } : {}),
  };
  const crumbs = [{ name: seoCopy[locale].navigation.home, path: '' }];
  if (path.startsWith('/tools/')) crumbs.push({ name: seoCopy[locale].navigation.tools, path: '/tools' });
  if (path) crumbs.push({ name: title, path });
  return <JsonLd data={[
    page,
    ...(path ? [generateBreadcrumbSchema(crumbs, locale)] : []),
    ...(faqs?.length ? [generateFAQPageSchema(faqs)] : []),
  ]} />;
}
