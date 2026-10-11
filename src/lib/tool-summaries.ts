/**
 * Localized tool names and one-line descriptions, built on the server from the
 * tool registry and the per-language tool content. Client components receive
 * the result as props, so the large tool-content catalogues never reach the
 * browser bundle.
 */

import { getAllTools } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import type { Locale } from '@/lib/i18n/config';

export interface ToolSummary {
  title: string;
  /** Full meta description, used for search. */
  description: string;
}

const cache = new Map<Locale, Record<string, ToolSummary>>();

export function humanizeToolId(id: string): string {
  return id.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/** Title and description for every enabled tool, in the given language (English where missing). */
export function getToolSummaries(locale: Locale): Record<string, ToolSummary> {
  const cached = cache.get(locale);
  if (cached) return cached;

  const summaries: Record<string, ToolSummary> = {};
  for (const tool of getAllTools()) {
    const content = getToolContent(locale, tool.id);
    summaries[tool.id] = {
      title: content?.title || humanizeToolId(tool.id),
      description: content?.metaDescription || tool.features.map((feature) => feature.replace(/-/g, ' ')).join(', '),
    };
  }
  cache.set(locale, summaries);
  return summaries;
}

/**
 * First sentence of a description: the part before the first full stop (or the
 * CJK / Arabic equivalent) that ends a sentence. Falls back to the whole text.
 */
export function firstSentence(text: string): string {
  const trimmed = text.trim();
  const match = trimmed.match(/^[\s\S]*?(?:[.!?؟](?=\s|$)|[。！？])/);
  return (match ? match[0] : trimmed).trim();
}
