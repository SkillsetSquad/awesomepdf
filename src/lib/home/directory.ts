/**
 * Filtering for the homepage tool directory. Pure functions over the tool list
 * the server prepared, so every tool appears at most once and the counts shown
 * in the UI are the counts of what is listed.
 */

import { fuzzyMatch } from '@/lib/utils/fuzzy';
import type { ToolCategory } from '@/types/tool';

export interface DirectoryTool {
  id: string;
  slug: string;
  icon: string;
  category: ToolCategory;
  title: string;
  /** One-sentence description shown on the card. */
  description: string;
  /** Extra words people may search by (keywords, features). Not displayed. */
  searchText: string;
}

export type CategoryFilter = ToolCategory | 'all';

const FUZZY_TITLE_THRESHOLD = 0.3;

const normalize = (value: string) => value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase();

function rank(tool: DirectoryTool, query: string, tokens: string[]): number {
  const title = normalize(tool.title);
  if (title === query) return 5;
  if (title.startsWith(query)) return 4;
  if (title.includes(query)) return 3;
  if (tokens.every((token) => title.includes(token))) return 2;
  return 1;
}

/**
 * Tools matching `query` (every word must appear in the name, description or
 * keywords) within `category`, best match first. Registry order breaks ties.
 * When nothing matches exactly, names that are a close typo are returned.
 */
export function filterDirectoryTools(tools: DirectoryTool[], query: string, category: CategoryFilter): DirectoryTool[] {
  const inCategory = category === 'all' ? tools : tools.filter((tool) => tool.category === category);
  const normalizedQuery = normalize(query).trim().replace(/\s+/g, ' ');
  if (!normalizedQuery) return inCategory;

  const tokens = normalizedQuery.split(' ');
  const exact = inCategory
    .map((tool, index) => ({ tool, index, haystack: normalize(`${tool.title} ${tool.description} ${tool.searchText}`) }))
    .filter(({ haystack }) => tokens.every((token) => haystack.includes(token)))
    .map(({ tool, index }) => ({ tool, index, score: rank(tool, normalizedQuery, tokens) }));

  const matches = exact.length > 0
    ? exact
    : inCategory
      .map((tool, index) => ({ tool, index, score: fuzzyMatch(normalizedQuery, normalize(tool.title)) }))
      .filter(({ score }) => score >= FUZZY_TITLE_THRESHOLD);

  return matches.sort((a, b) => b.score - a.score || a.index - b.index).map(({ tool }) => tool);
}

/** Tools of `category` to preview on its overview card: favoured ids first, then registry order. */
export function previewTools(tools: DirectoryTool[], category: ToolCategory, favoured: readonly string[], limit: number): DirectoryTool[] {
  const rankOf = (id: string) => {
    const position = favoured.indexOf(id);
    return position === -1 ? Number.MAX_SAFE_INTEGER : position;
  };
  return tools
    .filter((tool) => tool.category === category)
    .map((tool, index) => ({ tool, index }))
    .sort((a, b) => rankOf(a.tool.id) - rankOf(b.tool.id) || a.index - b.index)
    .slice(0, limit)
    .map(({ tool }) => tool);
}
