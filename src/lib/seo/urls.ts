import { siteConfig } from '@/config/site';
import { defaultLocale, locales, type Locale } from '@/lib/i18n/config';
import { getBasePath } from '@/lib/utils/path';

/** One URL convention for HTML metadata, JSON-LD and the static sitemap. */
export function getAbsoluteUrl(path = '/', trailingSlash = false): string {
  const base = getBasePath().replace(/^\/+|\/+$/g, '');
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
  const pathname = `/${[base, cleanPath].filter(Boolean).join('/')}`;
  return `${siteConfig.url}${pathname}${trailingSlash && pathname !== '/' ? '/' : ''}`;
}

export function getCanonicalUrl(locale: Locale, path = ''): string {
  return getAbsoluteUrl(`/${locale}/${path.replace(/^\/+|\/+$/g, '')}`, true);
}

export function getAlternateUrls(path = ''): Record<string, string> {
  return {
    ...Object.fromEntries(locales.map(locale => [locale, getCanonicalUrl(locale, path)])),
    'x-default': path.replace(/\//g, '') ? getCanonicalUrl(defaultLocale, path) : getAbsoluteUrl('/', true),
  };
}
