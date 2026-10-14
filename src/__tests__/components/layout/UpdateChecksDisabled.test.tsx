import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { Footer } from '@/components/layout/Footer';
import { MobileMenu } from '@/components/layout/MobileMenu';
import { buildNavigationData } from '@/components/layout/navigation-data';
import { UIProviders } from '@/components/ui/providers';

vi.mock('next/navigation', () => ({ usePathname: () => '/en/', useRouter: () => ({ push: vi.fn() }) }));
vi.mock('next/link', () => ({
  default: ({ prefetch, ...props }: React.ComponentProps<'a'> & { prefetch?: boolean | null }) => {
    void prefetch;
    return <a {...props} />;
  },
}));

const updateLabel = /check for updates|new version available|software update|update now|skip this version|remind me later/i;

beforeEach(() => {
  vi.useFakeTimers();
  vi.stubEnv('DISABLE_UPDATE_CHECK', 'false');
  vi.stubEnv('NEXT_PUBLIC_DISABLE_UPDATE_CHECK', 'false');
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ tag_name: 'v9999.01.01', assets: [] }),
  }));
  localStorage.clear();
  sessionStorage.clear();
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  localStorage.clear();
  sessionStorage.clear();
});

describe('Update checks remain disabled', () => {
  it.each([
    { desktop: false, storedSettings: null },
    { desktop: false, storedSettings: JSON.stringify({ autoCheck: true, checkFrequencyHours: 0, lastCheckedTimestamp: 0, ignoredVersions: [] }) },
    { desktop: true, storedSettings: JSON.stringify({ autoCheck: true, checkFrequencyHours: 0, lastCheckedTimestamp: 0, ignoredVersions: [] }) },
    { desktop: true, storedSettings: '{invalid json' },
  ])('has no update requests or controls with desktop=$desktop and stored preferences=$storedSettings', async ({ desktop, storedSettings }) => {
    if (desktop) vi.stubGlobal('__TAURI_INTERNALS__', {});
    if (storedSettings !== null) localStorage.setItem('pdfcraft_update_settings', storedSettings);

    render(
      <NextIntlClientProvider locale="en" messages={messages}>
        <UIProviders>
          <Footer locale="en" />
          <MobileMenu locale="en" navigation={buildNavigationData('en')} />
        </UIProviders>
      </NextIntlClientProvider>,
    );

    // Pass the former startup delay so a background request or toast would surface.
    await act(async () => { await vi.advanceTimersByTimeAsync(10000); });
    expect(fetch).not.toHaveBeenCalled();
    expect(screen.queryByRole('button', { name: updateLabel })).not.toBeInTheDocument();
    expect(screen.queryByText(updateLabel)).not.toBeInTheDocument();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Source code' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
    expect(screen.getByRole('dialog', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle color theme' })).toBeInTheDocument();
    await act(async () => { await vi.advanceTimersByTimeAsync(10000); });
    expect(fetch).not.toHaveBeenCalled();
    expect(screen.queryByRole('button', { name: updateLabel })).not.toBeInTheDocument();
    expect(screen.queryByText(updateLabel)).not.toBeInTheDocument();
    expect(localStorage.getItem('pdfcraft_update_settings')).toBe(storedSettings);
  });
});
