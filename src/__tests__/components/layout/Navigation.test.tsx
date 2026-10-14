import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { LanguageSelector, getLanguagePreference } from '@/components/layout/LanguageSelector';
import { Navigation } from '@/components/layout/Navigation';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { ToolSearch } from '@/components/layout/ToolSearch';
import { buildNavigationData } from '@/components/layout/navigation-data';
import { getToolSummaries } from '@/lib/tool-summaries';
import { getAllTools } from '@/config/tools';
import { TooltipProvider } from '@/components/ui/tooltip';

const { push } = vi.hoisted(() => ({ push: vi.fn() }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }), usePathname: () => '/en/tools/merge-pdf' }));
vi.mock('next/link', () => ({
  default: ({ onClick, ...props }: React.ComponentProps<'a'>) => <a {...props} onClick={(event) => { onClick?.(event); event.preventDefault(); }} />,
}));

function wrap(children: React.ReactNode) {
  return render(<NextIntlClientProvider locale="en" messages={messages}><TooltipProvider>{children}</TooltipProvider></NextIntlClientProvider>);
}

beforeEach(() => {
  push.mockReset();
  localStorage.clear();
  window.history.replaceState(null, '', '/en/tools/merge-pdf?category=organize-manage#settings');
  HTMLElement.prototype.scrollIntoView = vi.fn();
});

describe('Shared navigation', () => {
  it('selects a language by keyboard, preserving the tool, filter and anchor', async () => {
    wrap(<LanguageSelector currentLocale="en" />);
    const trigger = screen.getByRole('button', { name: /Select Language/ });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(await screen.findByRole('menuitemradio', { name: /English/ })).toHaveAttribute('aria-checked', 'true');
    await userEvent.keyboard('{ArrowDown}{Enter}');
    expect(push).toHaveBeenCalledWith('/ja/tools/merge-pdf?category=organize-manage#settings');
    expect(getLanguagePreference()).toBe('ja');
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('lists every category in All Tools with its real count, and restores focus after Escape', async () => {
    const navigation = buildNavigationData('en');
    wrap(<Navigation locale="en" navigation={navigation} />);
    expect(screen.queryByRole('link', { name: 'Workflow' })).not.toBeInTheDocument();
    const trigger = screen.getByRole('button', { name: 'All Tools' });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const menu = await screen.findByRole('menu');
    const all = within(menu).getByRole('menuitem', { name: `Browse all ${getAllTools().length} tools` });
    expect(all).toHaveAttribute('href', '/en/tools');
    const organize = within(menu).getByRole('menuitem', { name: /Organize & Manage/ });
    expect(organize).toHaveAttribute('href', '/en/tools/category/organize-manage');
    expect(organize).toHaveTextContent(String(navigation.categories.find((c) => c.category === 'organize-manage')!.count));
    expect(within(menu).getAllByRole('menuitem')).toHaveLength(7);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it.each([
    ['Edit', 'Edit PDF', '/en/tools/edit-pdf', 'Edit & Annotate'],
    ['Convert', 'PDF to Word', '/en/tools/pdf-to-docx', 'Convert from PDF'],
    ['Organize', 'Merge PDF', '/en/tools/merge-pdf', 'Secure PDF'],
  ])('opens the %s menu by keyboard with real tools and category links', async (label, tool, href, category) => {
    wrap(<Navigation locale="en" navigation={buildNavigationData('en')} />);
    const trigger = screen.getByRole('button', { name: label });
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    const menu = await screen.findByRole('menu');
    expect(within(menu).getByRole('menuitem', { name: tool })).toHaveAttribute('href', href);
    expect(within(menu).getByRole('menuitem', { name: new RegExp(category) })).toHaveAttribute('href', expect.stringContaining('/en/tools/category/'));
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('shows Share Files as a Coming Soon item that only points at the homepage preview', () => {
    wrap(<Navigation locale="en" navigation={buildNavigationData('en')} />);
    const share = screen.getByRole('link', { name: /Share Files/ });
    expect(share).toHaveTextContent('Coming Soon');
    expect(share).toHaveAttribute('href', '/en#share');
  });

  it('opens a direction-aware mobile Sheet and closes after a category selection', async () => {
    wrap(<MobileMenu locale="ar" navigation={buildNavigationData('ar')} />);
    const trigger = screen.getByRole('button', { name: 'Open menu' });
    await userEvent.click(trigger);
    const dialog = await screen.findByRole('dialog', { name: 'Main navigation' });
    expect(within(dialog).queryByRole('link', { name: 'Workflow' })).not.toBeInTheDocument();
    expect(dialog).toHaveAttribute('dir', 'rtl');
    expect(within(dialog).getByRole('link', { name: /Share Files/ })).toHaveTextContent('Coming Soon');
    await userEvent.click(within(dialog).getByRole('button', { name: 'All Tools' }));
    const category = within(dialog).getByRole('link', { name: /Organize & Manage/ });
    expect(category).toHaveAttribute('href', '/ar/tools/category/organize-manage');
    await userEvent.click(category);
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('opens localized fuzzy search with Ctrl+K and selects the ranked result with Enter', async () => {
    wrap(<ToolSearch locale="en" content={getToolSummaries('en')} />);
    await userEvent.keyboard('{Control>}k{/Control}');
    const search = await screen.findByRole('combobox', undefined, { timeout: 8000 });
    expect(search).toHaveFocus();
    await userEvent.type(search, 'merge pdf');
    await waitFor(() => expect(screen.getAllByRole('option')[0]).toHaveTextContent('Merge PDF'));
    await userEvent.keyboard('{Enter}');
    expect(push).toHaveBeenCalledWith('/en/tools/merge-pdf');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });

  it.each([
    ['compress', 'Compress PDF'],
    ['merge', 'Merge PDF'],
    ['split', 'Split PDF'],
    ['sign', 'Sign PDF'],
    ['mege', 'Merge PDF'],
  ])('ranks the tool named by "%s" first, ahead of tools that merely mention it', async (query, expected) => {
    wrap(<ToolSearch locale="en" content={getToolSummaries('en')} />);
    await userEvent.keyboard('{Control>}k{/Control}');
    const search = await screen.findByRole('combobox', undefined, { timeout: 8000 });
    await userEvent.type(search, query);
    await waitFor(() => expect(screen.getAllByRole('option')[0]).toHaveTextContent(expected));
  });

  it('keeps the search palette out of the page until it is used', () => {
    wrap(<ToolSearch locale="en" content={getToolSummaries('en')} />);
    expect(screen.getByRole('button', { name: messages.common.search.placeholder })).toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  });
});
