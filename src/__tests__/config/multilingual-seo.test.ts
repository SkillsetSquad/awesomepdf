import { afterEach, describe, expect, it, vi } from 'vitest';
import { existsSync } from 'node:fs';
import { getAllTools } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import { locales } from '@/lib/i18n/config';
import { TOOL_CATEGORIES } from '@/types/tool';
import { getFaqValues } from '@/config/faq';
import { generateToolMetadata, generateHomeMetadata, generateToolsListMetadata, generateAboutMetadata, generateFaqMetadata, generatePrivacyMetadata, generateContactMetadata } from '@/lib/seo/metadata';
import { generateToolPageStructuredData, serializeStructuredData } from '@/lib/seo/structured-data';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';

describe('every public page and language', () => {
  it('describes the current tool and language catalog in FAQs', () => {
    expect(getFaqValues().count).toBe(getAllTools().length);
    expect(getFaqValues().languages).toBe(locales.length);
    expect(getFaqValues().languageNames).toContain('Română');
    expect(getFaqValues().languageNames).toContain('Polski');
  });
  it.each(locales)('serves complete translated tool content and valid metadata in %s', locale => {
    for (const tool of getAllTools()) {
      const content = getToolContent(locale, tool.id)!;
      expect(content, `${locale}/${tool.slug}`).toBeDefined();
      expect(content.title.trim()).not.toBe('');
      expect(content.metaDescription.trim()).not.toBe('');
      expect(content.description.trim()).not.toBe('');
      expect(content.howToUse.length).toBeGreaterThan(0);
      expect(content.faq.length).toBeGreaterThan(0);
      if (locale !== 'en') {
        expect(content).not.toBe(getToolContent('en', tool.id));
        expect(content.metaDescription).not.toBe(getToolContent('en', tool.id)?.metaDescription);
        expect(content.description).not.toBe(getToolContent('en', tool.id)?.description);
      }
      const metadata = generateToolMetadata({ locale, tool, content });
      expect(metadata.alternates?.canonical).toBe(`https://awsomepdf.com/${locale}/tools/${tool.slug}/`);
      expect(metadata.title).not.toMatch(/PDFCraft/);
      expect(metadata.openGraph?.url).toBe(metadata.alternates?.canonical);
      expect(Object.keys(metadata.alternates?.languages || {})).toHaveLength(locales.length + 1);
      const schemas = generateToolPageStructuredData(tool, content, locale);
      expect(schemas.softwareApplication.aggregateRating).toBeUndefined();
      expect(schemas.softwareApplication.url).toBe(metadata.alternates?.canonical);
      expect(schemas.webPage.inLanguage).toBe(locale);
      for (const step of schemas.howTo?.step || []) {
        expect(step.url).toBe(`${metadata.alternates?.canonical}#step-${step.position}`);
      }
    }
    expect(existsSync(`public/images/og-${locale}.png`)).toBe(true);
    for (const generate of [generateHomeMetadata, generateToolsListMetadata, generateAboutMetadata, generateFaqMetadata, generatePrivacyMetadata, generateContactMetadata]) {
      const metadata = generate(locale);
      expect(metadata.title).toBeTruthy();
      expect(metadata.description).toBeTruthy();
      expect(metadata.description).not.toContain('PDFCraft');
      if (locale !== 'en') expect(metadata.description).not.toBe(generate('en').description);
    }
  });

  it('includes every indexable route with reciprocal language alternates', () => {
    const entries = sitemap();
    const paths = ['', '/tools', '/about', '/faq', '/privacy', '/contact', '/open-source',
      ...TOOL_CATEGORIES.map(category => `/tools/category/${category}`),
      ...getAllTools().map(tool => `/tools/${tool.slug}`)];
    const expected = ['https://awsomepdf.com/', ...locales.flatMap(locale => paths.map(path => `https://awsomepdf.com/${locale}${path}/`))];
    expect(entries.map(entry => entry.url).sort()).toEqual(expected.sort());
    expect(new Set(entries.map(entry => entry.url)).size).toBe(entries.length);
    for (const entry of entries) {
      expect(Object.keys(entry.alternates?.languages || {})).toHaveLength(locales.length + 1);
      expect(entry.lastModified).toBeUndefined();
      expect(entry.url).not.toContain('direct-pdf-editor');
    }
    const rules = JSON.stringify(robots());
    expect(rules).not.toContain('/_next/');
    expect(rules).not.toContain('/static/');
    expect(robots().sitemap).toBe('https://awsomepdf.com/sitemap.xml');
  });

  it('serializes JSON-LD without letting content close its script tag', () => {
    const serialized = serializeStructuredData({ name: '</script><script>alert(1)</script>' });
    expect(serialized).not.toContain('<');
    expect(JSON.parse(serialized).name).toBe('</script><script>alert(1)</script>');
  });
});

describe('subpath deployments', () => {
  afterEach(() => { vi.unstubAllEnvs(); vi.resetModules(); });
  it('keeps preview hostnames from changing the production canonical domain', async () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '');
    vi.stubEnv('VERCEL_URL', 'preview.vercel.app');
    vi.stubEnv('VERCEL_PROJECT_PRODUCTION_URL', 'project.vercel.app');
    vi.stubEnv('URL', 'preview.netlify.app');
    vi.stubEnv('CF_PAGES_URL', 'preview.pages.dev');
    vi.resetModules();
    const { siteConfig } = await import('@/config/site');
    expect(siteConfig.url).toBe('https://awsomepdf.com');
  });
  it('uses the same subpath and slash convention for pages, assets, sitemap and schemas', async () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'https://awsomepdf.com');
    vi.stubEnv('NEXT_PUBLIC_BASE_PATH', '/awsomepdf');
    vi.resetModules();
    const { getCanonicalUrl, getAlternateUrls, getAbsoluteUrl } = await import('@/lib/seo/urls');
    const { default: subpathSitemap } = await import('@/app/sitemap');
    const { default: subpathRobots } = await import('@/app/robots');
    expect(getCanonicalUrl('zh-TW', '/tools/merge-pdf/')).toBe('https://awsomepdf.com/awsomepdf/zh-TW/tools/merge-pdf/');
    expect(getAlternateUrls('/about')['ro']).toBe('https://awsomepdf.com/awsomepdf/ro/about/');
    expect(getAbsoluteUrl('/images/og-ar.png')).toBe('https://awsomepdf.com/awsomepdf/images/og-ar.png');
    expect(subpathSitemap().every(entry => entry.url.startsWith('https://awsomepdf.com/awsomepdf/'))).toBe(true);
    expect(subpathRobots().sitemap).toBe('https://awsomepdf.com/awsomepdf/sitemap.xml');
  });
});
