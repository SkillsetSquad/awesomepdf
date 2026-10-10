import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { LanguageSelector, getLanguagePreference } from '@/components/layout/LanguageSelector';
import { Navigation } from '@/components/layout/Navigation';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { ToolSearch } from '@/components/layout/ToolSearch';
import { TooltipProvider } from '@/components/ui/tooltip';

const { push } = vi.hoisted(() => ({ push: vi.fn() }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }), usePathname: () => '/en/tools/merge-pdf' }));
vi.mock('next/link', () => ({
  default: ({ onClick, ...props }: React.ComponentProps<'a'>) => <a {...props} onClick={(event) => { onClick?.(event); event.preventDefault(); }} />,
}));
vi.mock('@/components/common/UpdateCheckButton', () => ({ UpdateCheckButton: () => null }));

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
    const trigger = screen.getByRole('button', { name: 'Select Language' });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(await screen.findByRole('menuitemradio', { name: /English/ })).toHaveAttribute('aria-checked', 'true');
    await userEvent.keyboard('{ArrowDown}{Enter}');
    expect(push).toHaveBeenCalledWith('/ja/tools/merge-pdf?category=organize-manage#settings');
    expect(getLanguagePreference()).toBe('ja');
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('includes all category destinations and restores focus after Escape', async () => {
    wrap(<Navigation locale="en" currentPath="/en/tools/merge-pdf" />);
    const trigger = screen.getByRole('button', { name: 'Tools' });
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    const menu = await screen.findByRole('menu');
    expect(within(menu).getByRole('menuitem', { name: 'Organize & Manage' })).toHaveAttribute('href', '/en/tools?category=organize-manage');
    expect(within(menu).getAllByRole('menuitem')).toHaveLength(7);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('opens a direction-aware mobile Sheet and closes after a category selection', async () => {
    wrap(<MobileMenu locale="ar" />);
    const trigger = screen.getByRole('button', { name: 'Open menu' });
    await userEvent.click(trigger);
    const dialog = await screen.findByRole('dialog', { name: 'Main navigation' });
    expect(dialog).toHaveAttribute('dir', 'rtl');
    await userEvent.click(within(dialog).getByRole('button', { name: 'Tools' }));
    const category = within(dialog).getByRole('link', { name: 'Organize & Manage' });
    expect(category).toHaveAttribute('href', '/ar/tools?category=organize-manage');
    await userEvent.click(category);
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('opens localized fuzzy search with Ctrl+K and selects the ranked result with Enter', async () => {
    wrap(<ToolSearch locale="en" />);
    await userEvent.keyboard('{Control>}k{/Control}');
    const search = await screen.findByRole('combobox');
    expect(search).toHaveFocus();
    await userEvent.type(search, 'merge pdf');
    await waitFor(() => expect(screen.getAllByRole('option')[0]).toHaveTextContent('Merge PDF'));
    await userEvent.keyboard('{Enter}');
    expect(push).toHaveBeenCalledWith('/en/tools/merge-pdf');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });
});
