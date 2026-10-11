import { describe, expect, it } from 'vitest';
import { filterDirectoryTools, previewTools, type DirectoryTool } from '@/lib/home/directory';
import { getAllTools } from '@/config/tools';
import { getToolSummaries, firstSentence } from '@/lib/tool-summaries';
import { TOOL_CATEGORIES } from '@/types/tool';

const summaries = getToolSummaries('en');
const tools: DirectoryTool[] = getAllTools().map((tool) => ({
  id: tool.id,
  slug: tool.slug,
  icon: tool.icon,
  category: tool.category,
  title: summaries[tool.id].title,
  description: firstSentence(summaries[tool.id].description),
  searchText: tool.features.join(' ').replace(/-/g, ' '),
}));
const ids = (list: DirectoryTool[]) => list.map((tool) => tool.id);

describe('homepage tool directory filtering', () => {
  it('lists every tool exactly once when nothing is filtered', () => {
    const all = filterDirectoryTools(tools, '', 'all');

    expect(all).toHaveLength(getAllTools().length);
    expect(new Set(ids(all)).size).toBe(all.length);
  });

  it('splits the registry cleanly across categories with matching counts', () => {
    const perCategory = TOOL_CATEGORIES.map((category) => filterDirectoryTools(tools, '', category));

    expect(perCategory.reduce((sum, list) => sum + list.length, 0)).toBe(tools.length);
    perCategory.forEach((list, index) => expect(list.every((tool) => tool.category === TOOL_CATEGORIES[index])).toBe(true));
  });

  it('puts the best name match first', () => {
    expect(ids(filterDirectoryTools(tools, 'merge', 'all'))[0]).toBe('merge-pdf');
    expect(ids(filterDirectoryTools(tools, 'compress pdf', 'all'))[0]).toBe('compress-pdf');
    expect(ids(filterDirectoryTools(tools, 'PDF TO WORD', 'all'))[0]).toBe('pdf-to-docx');
  });

  it('finds tools by task words in the description or keywords', () => {
    expect(ids(filterDirectoryTools(tools, 'rotate', 'all'))).toEqual(expect.arrayContaining(['rotate-pdf']));
    expect(ids(filterDirectoryTools(tools, 'signature', 'all'))).toContain('sign-pdf');
  });

  it('combines the search with a category filter', () => {
    const result = filterDirectoryTools(tools, 'pdf', 'secure-pdf');

    expect(result.length).toBeGreaterThan(0);
    expect(result.every((tool) => tool.category === 'secure-pdf')).toBe(true);
  });

  it('tolerates a small typo in a tool name and returns nothing for gibberish', () => {
    expect(ids(filterDirectoryTools(tools, 'mege', 'all'))).toContain('merge-pdf');
    expect(filterDirectoryTools(tools, 'qzxqzxqzx', 'all')).toEqual([]);
  });

  it('ignores accents and surrounding whitespace', () => {
    expect(ids(filterDirectoryTools(tools, '  MÉRGE  ', 'all'))).toContain('merge-pdf');
  });

  it('previews favoured tools first, then registry order, within one category', () => {
    const preview = previewTools(tools, 'organize-manage', ['split-pdf', 'merge-pdf'], 4);

    expect(ids(preview).slice(0, 2)).toEqual(['split-pdf', 'merge-pdf']);
    expect(preview).toHaveLength(4);
    expect(preview.every((tool) => tool.category === 'organize-manage')).toBe(true);
  });
});
