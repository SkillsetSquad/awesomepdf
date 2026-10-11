import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import IntlMessageFormat from 'intl-messageformat';
import { locales } from '@/lib/i18n/config';

type Catalog = Record<string, unknown>;
const messagesDir = join(process.cwd(), 'messages');
const load = (locale: string) => JSON.parse(readFileSync(join(messagesDir, `${locale}.json`), 'utf8')) as Catalog;

/** Namespaces written for the homepage redesign; every locale must define all of them. */
const HOMEPAGE_NAMESPACES = [
  'home.hero', 'home.upload', 'home.popularTools', 'home.directory', 'home.share', 'home.trust', 'home.faq',
  'common.navigation.allTools', 'common.navigation.edit', 'common.navigation.convert', 'common.navigation.organize',
  'common.navigation.shareFiles', 'common.navigation.comingSoon', 'common.navigation.browseAll',
  'common.navigation.language', 'common.navigation.search',
  'common.footer.description', 'common.footer.brandOf', 'common.footer.toolsHeading', 'common.footer.companyHeading',
  'common.footer.legalHeading', 'common.footer.convertPdf', 'common.footer.privacyPolicy', 'common.footer.copyrightLine',
  'metadata.home',
];

const get = (catalog: unknown, path: string): unknown =>
  path.split('.').reduce<unknown>((node, key) => (node && typeof node === 'object' ? (node as Catalog)[key] : undefined), catalog);

function leaves(value: unknown, path: string): Array<[string, string]> {
  if (typeof value === 'string') return [[path, value]];
  if (!value || typeof value !== 'object') return [];
  return Object.entries(value as Catalog).flatMap(([key, child]) => leaves(child, `${path}.${key}`));
}

const homepageLeaves = (catalog: Catalog) => HOMEPAGE_NAMESPACES.flatMap((path) => leaves(get(catalog, path), path));
const argsOf = (message: string) => [...new Set(Array.from(message.matchAll(/\{([A-Za-z_][A-Za-z0-9_]*)(?:[,}])/g), (m) => m[1]))].sort();
const english = homepageLeaves(load('en'));

describe('homepage copy in every locale', () => {
  it('has a substantial English source', () => {
    expect(english.length).toBeGreaterThan(100);
  });

  it.each(locales)('%s defines every homepage string with the same placeholders as English', (locale) => {
    const catalog = load(locale);
    for (const [path, source] of english) {
      const message = get(catalog, path);
      expect(message, `${locale}: ${path}`).toEqual(expect.any(String));
      expect((message as string).trim(), `${locale}: ${path}`).not.toBe('');
      expect(argsOf(message as string), `${locale}: ${path}`).toEqual(argsOf(source));
    }
  });

  it.each(locales)('%s messages are valid ICU and format plurals for any count', (locale) => {
    const catalog = load(locale);
    for (const [path] of english) {
      const message = get(catalog, path) as string;
      const formatter = new IntlMessageFormat(message, locale);
      for (const count of [0, 1, 2, 3, 5, 11, 21, 132]) {
        const text = formatter.format({ count, extension: 'DOCX', name: 'file.pdf', year: 2026 });
        expect(String(text), `${locale}: ${path} (count=${count})`).not.toMatch(/[{}]|undefined/);
      }
    }
  });

  it.each(locales)('%s keeps the Coming Soon wording on both the badge and the call to action', (locale) => {
    const catalog = load(locale);
    const badge = get(catalog, 'home.share.badge') as string;
    expect(get(catalog, 'home.share.cta')).toContain(' — ');
    expect(get(catalog, 'common.navigation.comingSoon')).toBe(badge);
    expect((get(catalog, 'home.share.cta') as string).toLowerCase()).toContain(badge.toLowerCase());
  });

  it.each(locales)('%s keeps the desktop navigation labels short enough to fit the header at 1280px', (locale) => {
    // Measured in a browser: the header has room for roughly 75 Latin characters of nav labels
    // (CJK and Arabic glyphs counted double) before items crowd the logo or the search button.
    const catalog = load(locale);
    const labels = ['allTools', 'edit', 'convert', 'organize', 'shareFiles', 'comingSoon']
      .map((key) => get(catalog, `common.navigation.${key}`) as string);
    const width = labels.join('').split('').reduce((sum, char) => sum + (/[\u2e80-\u9fff\uac00-\ud7af]/.test(char) ? 2 : 1), 0);

    expect(width, labels.join(' | ')).toBeLessThanOrEqual(75);
  });
});
