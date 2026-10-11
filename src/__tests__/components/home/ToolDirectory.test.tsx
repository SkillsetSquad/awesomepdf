import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { ToolDirectory } from '@/components/home/ToolDirectory';
import { getAllTools, getToolsByCategory } from '@/config/tools';
import { firstSentence, getToolSummaries } from '@/lib/tool-summaries';
import type { DirectoryTool } from '@/lib/home/directory';
import { TOOL_CATEGORIES } from '@/types/tool';

vi.mock('next/link', () => ({ default: (props: React.ComponentProps<'a'>) => <a {...props} /> }));

const summaries = getToolSummaries('en');
const tools: DirectoryTool[] = getAllTools().map((tool) => ({
  id: tool.id, slug: tool.slug, icon: tool.icon, category: tool.category,
  title: summaries[tool.id].title, description: firstSentence(summaries[tool.id].description),
  searchText: tool.features.join(' ').replace(/-/g, ' '),
}));

function view() {
  render(<NextIntlClientProvider locale="en" messages={messages}><ToolDirectory locale="en" tools={tools} /></NextIntlClientProvider>);
  const region = screen.getByRole('region', { name: 'Explore All PDF Tools' });
  return { region, search: within(region).getByRole('searchbox', { name: 'Search PDF tools' }) };
}
const cardTitles = (region: HTMLElement) => within(region).getAllByRole('heading', { level: 3 }).map((heading) => heading.textContent);

describe('Homepage tool directory', () => {
  it('opens as one overview card per category with the true tool counts', () => {
    const { region } = view();

    for (const category of TOOL_CATEGORIES) {
      const count = getToolsByCategory(category).length;
      expect(within(region).getByRole('button', { name: `See all ${count}` })).toBeInTheDocument();
    }
    expect(within(region).getByRole('button', { name: `All ${tools.length}` })).toHaveAttribute('aria-pressed', 'true');
  });

  it('filters live as the visitor types and reports how many tools matched', async () => {
    const { region, search } = view();
    await userEvent.type(search, 'rotate');

    expect(await within(region).findByRole('status')).toHaveTextContent(/\d+ tools? found/);
    expect(cardTitles(region)).toEqual(expect.arrayContaining(['Rotate PDF']));
    for (const link of within(region).getAllByRole('link')) expect(link.getAttribute('href')).toMatch(/^\/en\/tools\/[a-z0-9-]+$/);
  });

  it('never lists a tool twice, whatever the filter', async () => {
    const { region, search } = view();
    for (const query of ['', 'pdf', 'convert', 'image']) {
      await userEvent.clear(search);
      if (query) await userEvent.type(search, query);
      await userEvent.click(within(region).getByRole('button', { name: /^All/ }));
      const titlesNow = cardTitles(region);
      expect(new Set(titlesNow).size).toBe(titlesNow.length);
    }
  });

  it('narrows to one category from a chip and keeps the chip count honest', async () => {
    const { region } = view();
    const chip = within(region).getByRole('button', { name: /^Secure PDF/ });
    await userEvent.click(chip);

    expect(chip).toHaveAttribute('aria-pressed', 'true');
    expect(cardTitles(region)).toHaveLength(getToolsByCategory('secure-pdf').length);
  });

  it('moves focus to the results when See all is used', async () => {
    const { region } = view();
    await userEvent.click(within(region).getByRole('button', { name: `See all ${getToolsByCategory('organize-manage').length}` }));

    expect(cardTitles(region)).toHaveLength(getToolsByCategory('organize-manage').length);
    await waitFor(() => expect(document.activeElement).toBe(within(region).getByRole('status').parentElement));
  });

  it('offers a way back when nothing matches', async () => {
    const { region, search } = view();
    await userEvent.type(search, 'qzxqzxqzx');

    expect(within(region).getByText('No tools match your search.')).toBeInTheDocument();
    await userEvent.click(within(region).getAllByRole('button', { name: 'Clear filters' })[0]);
    expect(search).toHaveValue('');
    expect(within(region).getAllByRole('button', { name: /^See all/ })).toHaveLength(TOOL_CATEGORIES.length);
  });
});
