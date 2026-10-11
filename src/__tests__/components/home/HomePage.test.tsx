import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import HomePage from '@/components/home/HomePage';
import { getAllTools, getToolById } from '@/config/tools';
import { HOME_POPULAR_TOOLS } from '@/config/home';

vi.mock('@/components/layout/Header', () => ({ Header: () => <header data-testid="header" /> }));
vi.mock('@/components/layout/Footer', () => ({ Footer: () => <footer data-testid="footer" /> }));
vi.mock('next/link', () => ({ default: (props: React.ComponentProps<'a'>) => <a {...props} /> }));

function view() {
  return render(<NextIntlClientProvider locale="en" messages={messages}><HomePage locale="en" /></NextIntlClientProvider>);
}

describe('Homepage', () => {
  it('has exactly one H1 and the sections in the intended order', () => {
    view();
    const h1 = screen.getAllByRole('heading', { level: 1 });
    expect(h1).toHaveLength(1);
    expect(h1[0]).toHaveTextContent('Every PDF tool you need. In one place.');
    expect(screen.getAllByRole('heading', { level: 2 }).map((heading) => heading.textContent)).toEqual([
      'Popular PDF Tools',
      'Explore All PDF Tools',
      expect.stringContaining('Share files directly. No cloud storage.'),
      'Your documents. Your control.',
      'Frequently asked questions',
    ]);
  });

  it('links the popular tools and the shortcuts to real tool routes only', () => {
    view();
    const popular = screen.getByRole('region', { name: 'Popular PDF Tools' });
    const links = within(popular).getAllByRole('link').filter((link) => link.getAttribute('href')?.includes('/tools/'));

    expect(links).toHaveLength(HOME_POPULAR_TOOLS.length);
    for (const link of links) {
      const slug = link.getAttribute('href')!.replace('/en/tools/', '');
      expect(getToolById(slug), slug).toBeDefined();
    }
    const shortcuts = within(screen.getByRole('navigation', { name: 'Popular tools' })).getAllByRole('link');
    expect(shortcuts.map((link) => link.textContent)).toEqual(['Merge PDF', 'Compress PDF', 'PDF to Word', 'Edit PDF', 'Sign PDF']);
  });

  it('presents AwesomePDF Share as Coming Soon, with nothing interactive that could pretend it works', () => {
    view();
    const share = screen.getByRole('region', { name: /Share files directly/ });

    expect(within(share).getAllByText('Coming Soon').length).toBeGreaterThan(0);
    const heading = within(share).getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Coming Soon');
    const cta = within(share).getByRole('button', { name: 'Share Files — Coming Soon' });
    expect(cta).toBeDisabled();
    expect(within(share).queryAllByRole('link')).toEqual([]);
    expect(share.querySelector('input, [type="file"], a[href]')).toBeNull();
    expect(within(share).getByText(/not available yet/i)).toBeInTheDocument();
  });

  it('does not count the Share preview as a tool', () => {
    view();
    expect(screen.getByRole('button', { name: `All ${getAllTools().length}` })).toBeInTheDocument();
    expect(getAllTools().some((tool) => /share|p2p|webrtc/i.test(tool.id))).toBe(false);
  });

  it('answers the seven questions from the brief, using the real tool count', () => {
    view();
    const faq = screen.getByRole('region', { name: 'Frequently asked questions' });
    const questions = within(faq).getAllByRole('button').map((button) => button.textContent);

    expect(questions).toEqual([
      'Is AwesomePDF free to use?',
      'Are my PDF files uploaded to a server?',
      'Can I use AwesomePDF without creating an account?',
      'Which PDF tools are available?',
      'Can I use AwesomePDF on mobile devices?',
      'Does AwesomePDF support scanned documents?',
      'What is AwesomePDF Share?',
    ]);
    expect(faq).toHaveTextContent(`AwesomePDF includes ${getAllTools().length} tools`);
    expect(faq).toHaveTextContent(/AwesomePDF Share is a planned feature, coming soon/);
  });

  it('publishes structured data that matches the visible FAQ', () => {
    const { container } = view();
    const data = [...container.querySelectorAll('script[type="application/ld+json"]')].map((script) => JSON.parse(script.textContent!));
    const faq = data.find((item) => item['@type'] === 'FAQPage');

    expect(data.map((item) => item['@type'])).toEqual(expect.arrayContaining(['WebSite', 'Organization', 'FAQPage']));
    const visible = within(screen.getByRole('region', { name: 'Frequently asked questions' })).getAllByRole('button').map((button) => button.textContent);
    expect(faq.mainEntity.map((entry: { name: string }) => entry.name)).toEqual(visible);
    for (const entry of faq.mainEntity) expect(screen.getByText(entry.acceptedAnswer.text)).toBeInTheDocument();
  });

  it('makes no blanket promise that files never leave the device', () => {
    const { container } = view();
    expect(container.textContent).not.toMatch(/never leave|100% private/i);
    expect(container.textContent).toMatch(/download fonts, language data, or helper scripts/);
  });
});
