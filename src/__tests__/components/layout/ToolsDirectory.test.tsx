import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import ToolsPageClient from '@/app/[locale]/tools/ToolsPageClient';
import { getAllTools } from '@/config/tools';

let params = new URLSearchParams();
vi.mock('next/navigation', () => ({ useSearchParams: () => params }));
const content = { 'merge-pdf': { title: 'Fusion locale', description: 'Assembler les documents' } };
function view() {
  return <NextIntlClientProvider locale="en" messages={messages}><ToolsPageClient locale="en" localizedToolContent={content} /></NextIntlClientProvider>;
}
beforeEach(() => { params = new URLSearchParams(); localStorage.clear(); });
describe('Tool directory', () => {
  it('restores URL filters, searches localized content and resets to all enabled tools', async () => {
    params = new URLSearchParams('category=organize-manage&q=Fusion');
    render(view());
    expect(screen.getByRole('combobox', { name: 'Filters' })).toHaveValue('organize-manage');
    expect(screen.getByRole('searchbox')).toHaveValue('Fusion');
    expect(screen.getByRole('link', { name: 'Fusion locale' })).toHaveAttribute('href', '/en/tools/merge-pdf');
    await userEvent.click(screen.getByRole('button', { name: 'Clear all' }));
    expect(screen.getByRole('searchbox')).toHaveValue('');
    expect(screen.getAllByTestId('tool-card')).toHaveLength(getAllTools().length);
  });
  it('shows no search results for a query missing from favorites and permits clearing it', async () => {
    localStorage.setItem('awsomepdf-favorite-tools', JSON.stringify(['merge-pdf']));
    params = new URLSearchParams('category=favorites');
    render(view());
    expect(screen.getByRole('link', { name: 'Fusion locale' })).toBeInTheDocument();
    await userEvent.type(screen.getByRole('searchbox'), 'unfindable');
    expect(screen.getByRole('heading', { name: 'No tools found' })).toBeInTheDocument();
    expect(screen.queryByText(messages.tools.favorite.empty)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Clear' }));
    expect(screen.getByRole('link', { name: 'Fusion locale' })).toBeInTheDocument();
    await userEvent.click(within(screen.getByTestId('tool-card-container')).getByRole('button'));
    expect(screen.getByRole('heading', { name: messages.tools.favorite.empty })).toBeInTheDocument();
  });
  it('falls back from an invalid URL category and reacts to later URL navigation', () => {
    params = new URLSearchParams('category=invalid');
    const { rerender } = render(view());
    expect(screen.getByRole('combobox')).toHaveValue('all');
    params = new URLSearchParams('category=secure-pdf');
    rerender(view());
    expect(screen.getByRole('combobox')).toHaveValue('secure-pdf');
    expect(screen.getAllByTestId('tool-card')).toHaveLength(getAllTools().filter(tool => tool.category === 'secure-pdf').length);
  });
});
