import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getToolContent } from '@/config/tool-content';
import { locales } from '@/lib/i18n/config';

describe('redaction guarantees across served locales', () => {
  it.each(locales)('excludes insecure effect instructions and documents permanent export in %s', locale => {
    const manual = getToolContent(locale, 'redact-pdf')!;
    expect(manual.keywords.join(' ')).not.toMatch(/mosaic|blur/);
    expect(manual.howToUse[2].description).toContain('solid black or white');
    expect(manual.faq.find(item => item.question === 'Can I use blur or mosaic?')?.answer).toMatch(/^No\./);
    for (const id of ['redact-pdf', 'find-and-redact', 'smart-data-redactor']) {
      const content = getToolContent(locale, id)!;
      if (locale !== 'en') expect(content.description).not.toBe(getToolContent('en', id)?.description);
      expect(content.faq.some(item => /unselected|unmatched/i.test(item.answer))).toBe(true);
    }
    const messages: { tools: { trueRedaction: { cleanup: string; brushNotice: string } } } =
      JSON.parse(readFileSync(`messages/${locale}.json`, 'utf8'));
    expect(messages.tools.trueRedaction.cleanup).toContain('forms');
    expect(messages.tools.trueRedaction.brushNotice).toContain('Blur and mosaic are not supported');
  });
});
