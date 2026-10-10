import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { ToolPage } from '@/components/tools/ToolPage';
import { getToolById } from '@/config/tools';
import { getToolContent } from '@/config/tool-content';
import { useToolContext } from '@/lib/contexts/ToolContext';
vi.mock('@/components/layout/Header', () => ({ Header: () => <header /> }));
vi.mock('@/components/layout/Footer', () => ({ Footer: () => <footer /> }));
function Workspace() { return <output>{useToolContext()?.toolSlug}</output>; }

describe('Tool page shell', () => {
  it('preserves SEO sections, local routing and workspace context while exposing keyboard FAQ controls', async () => {
    const tool = getToolById('merge-pdf')!;
    const content = getToolContent('en', tool.id)!;
    render(<NextIntlClientProvider locale="en" messages={messages}><ToolPage tool={tool} content={content} locale="en"><Workspace /></ToolPage></NextIntlClientProvider>);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(content.title);
    expect(screen.getByTestId('tool-page-interface')).toHaveTextContent(tool.slug);
    expect(screen.getAllByTestId(/^how-to-step-/)).toHaveLength(content.howToUse.length);
    expect(screen.getAllByTestId(/^use-case-/)).toHaveLength(content.useCases.length);
    const faq = screen.getByTestId('faq-item-0');
    expect(faq.querySelector('[itemprop="acceptedAnswer"]')).toHaveTextContent(content.faq[0].answer);
    const trigger = within(faq).getByRole('button');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    trigger.focus();
    await userEvent.keyboard('{Enter}');
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: 'Organize & Manage' })).toHaveAttribute('href', '/en/tools/category/organize-manage');
    expect(within(screen.getByTestId('related-tools-grid')).getAllByTestId('tool-card')).toHaveLength(tool.relatedTools.length);
  });
});
