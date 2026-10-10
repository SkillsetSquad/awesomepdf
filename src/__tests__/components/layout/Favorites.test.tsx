import { beforeEach, describe, expect, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { ToolCard } from '@/components/tools/ToolCard';
import { getToolById } from '@/config/tools';
import { useFavorites } from '@/hooks/useFavorites';

function DirectoryFilter() {
  const { favoritesCount } = useFavorites();
  return <p role="status">Favorites: {favoritesCount}</p>;
}

beforeEach(() => localStorage.clear());

describe('Shared favorites', () => {
  it('retains choices from multiple cards and immediately updates the directory filter', async () => {
    render(<NextIntlClientProvider locale="en" messages={messages}><DirectoryFilter /><ToolCard locale="en" tool={getToolById('merge-pdf')!} /><ToolCard locale="en" tool={getToolById('split-pdf')!} /></NextIntlClientProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'Add to Favorites: Merge Pdf' }));
    await userEvent.click(screen.getByRole('button', { name: 'Add to Favorites: Split Pdf' }));
    expect(screen.getByRole('status')).toHaveTextContent('Favorites: 2');
    expect(JSON.parse(localStorage.getItem('pdfcraft-favorite-tools')!)).toEqual(['merge-pdf', 'split-pdf']);
    await userEvent.click(screen.getByRole('button', { name: 'Remove from Favorites: Merge Pdf' }));
    expect(screen.getByRole('status')).toHaveTextContent('Favorites: 1');
    expect(screen.getByRole('button', { name: 'Remove from Favorites: Split Pdf' })).toHaveAttribute('aria-pressed', 'true');
  });

  it('reflects changes made by another tab', () => {
    render(<DirectoryFilter />);
    act(() => {
      localStorage.setItem('pdfcraft-favorite-tools', '["merge-pdf"]');
      window.dispatchEvent(new StorageEvent('storage', { key: 'pdfcraft-favorite-tools', newValue: '["merge-pdf"]' }));
    });
    expect(screen.getByRole('status')).toHaveTextContent('Favorites: 1');
  });
});
