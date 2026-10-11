import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getToolContent } from '@/config/tool-content';
import { locales } from '@/lib/i18n/config';

describe('Timestamp content agrees with the local signer', () => {
  it.each(locales)('describes local device time throughout the served %s page', locale => {
    // Romanian currently uses the configured English content fallback.
    const contentLocale = locale === 'ro' ? 'en' : locale;
    const messages: { common: { timestamp: { localNotice: string; localUploadDescription: string } } } =
      JSON.parse(readFileSync(`messages/${contentLocale}.json`, 'utf8'));
    const content = getToolContent(locale, 'timestamp-pdf');
    expect(content).toBeDefined();
    expect(content?.description).toContain(messages.common.timestamp.localNotice);
    expect(content?.description).toContain(messages.common.timestamp.localUploadDescription);
    expect(content?.faq.some(item => item.answer.includes(messages.common.timestamp.localNotice))).toBe(true);
    expect(JSON.stringify(content)).not.toMatch(/RFC\s*3161|trusted timestamp|trusted TSA|external Time Stamping|legally.binding|tamper.proof|proof of existence/i);
    expect(content?.howToUse).toHaveLength(3);
    expect(content?.useCases).toHaveLength(3);
    expect(content?.faq).toHaveLength(3);
  });

  it.each(locales)('documents actual numeric slicing and preview placement in %s', locale => {
    const crop = getToolContent(locale, 'pdf-lossless-slicer')?.howToUse.slice(1);
    const anchors = getToolContent(locale, 'pdf-signature-anchor-helper')?.howToUse.slice(1);
    expect(crop).toHaveLength(2);
    expect(anchors).toHaveLength(2);
    expect(crop?.[0].description).toMatch(/X/);
    expect(crop?.[0].description).toMatch(/Y/);
    expect(anchors?.[0].description).toMatch(/X/);
    expect(anchors?.[0].description).toMatch(/Y/);
    expect(JSON.stringify([crop, anchors])).not.toMatch(/laser|radar|auto.scan|automatically located|green.*crop box|drag and scale|激光|发光|自动检测|laserowe|Przeciągnij/i);
  });
});
