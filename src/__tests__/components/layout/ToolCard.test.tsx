import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { ToolCard } from '@/components/tools/ToolCard';
import { getToolById } from '@/config/tools';

beforeEach(() => localStorage.clear());

describe('Tool cards', () => {
  it('keeps navigation and the favorite action separate for keyboard users', async () => {
    render(<NextIntlClientProvider locale="en" messages={messages}><ToolCard locale="en" tool={getToolById('merge-pdf')!} localizedContent={{ title: 'Merge PDF', description: 'Combine PDFs' }} /></NextIntlClientProvider>);
    const link = screen.getByRole('link', { name: 'Merge PDF' });
    const favorite = screen.getByRole('button', { name: 'Add to Favorites: Merge PDF' });
    expect(link).toHaveAttribute('href', '/en/tools/merge-pdf');
    expect(favorite.closest('a')).toBeNull();
    await waitFor(() => expect(favorite).toBeEnabled());
    favorite.focus();
    await userEvent.keyboard(' ');
    expect(favorite).toHaveAttribute('aria-pressed', 'true');
    expect(JSON.parse(localStorage.getItem('pdfcraft-favorite-tools')!)).toEqual(['merge-pdf']);
    await userEvent.tab();
    expect(link).toHaveFocus();
  });
});
