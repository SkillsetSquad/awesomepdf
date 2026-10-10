import { beforeEach, describe, expect, it, vi } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { UpdateCheckButton } from '@/components/common/UpdateCheckButton';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { UpdateCheckResult, ReleaseAsset } from '@/types/updater';

const { checkUpdate, openExternalUrl, ignoreVersion } = vi.hoisted(() => ({ checkUpdate: vi.fn(), openExternalUrl: vi.fn(), ignoreVersion: vi.fn() }));
vi.mock('@/lib/updater', () => ({ checkUpdate, ignoreVersion, shouldCheckUpdate: () => false, isVersionIgnored: () => false, isUpdateSnoozedInSession: () => false, snoozeUpdateInSession: vi.fn(), GITHUB_REPO: 'PDFCraftTool/pdfcraft' }));
vi.mock('@/lib/tauri-bridge', () => ({ isTauri: () => false, openExternalUrl }));

const asset: ReleaseAsset = { name: 'desktop.zip', size: 1024, downloadUrl: 'https://example.com/desktop.zip', browserDownloadUrl: 'https://example.com/desktop.zip', mirrorDownloadUrl: 'https://example.com/mirror.zip', platformType: 'windows-portable' };
const latest: UpdateCheckResult = { hasUpdate: false, currentVersion: 'v1', latestVersion: 'v1', matchedAssets: { all: [] } };

function renderUpdater() {
  render(<NextIntlClientProvider locale="en" messages={messages}><TooltipProvider><UpdateCheckButton /></TooltipProvider></NextIntlClientProvider>);
}

beforeEach(() => {
  vi.clearAllMocks();
  openExternalUrl.mockResolvedValue(true);
});

describe('Application updater interface', () => {
  it('opens from the keyboard, reports the current version and restores focus on Escape', async () => {
    checkUpdate.mockResolvedValue(latest);
    renderUpdater();
    const trigger = screen.getByRole('button', { name: 'Check for Updates' });
    act(() => trigger.focus());
    await userEvent.keyboard('{Enter}');
    expect(await screen.findByRole('dialog')).toHaveTextContent('v1');
    expect(await screen.findByText('You are up to date!')).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    await waitFor(() => expect(trigger).toHaveFocus());
  });

  it('retries failures and preserves primary, mirror and skip-version actions', async () => {
    checkUpdate.mockResolvedValueOnce({ ...latest, error: 'Offline' }).mockResolvedValueOnce({ ...latest, hasUpdate: true, latestVersion: 'v2', matchedAssets: { primary: asset, all: [asset] } });
    renderUpdater();
    await userEvent.click(screen.getByRole('button', { name: 'Check for Updates' }));
    expect(await screen.findByRole('alert')).toHaveTextContent('Offline');
    await userEvent.click(screen.getByRole('button', { name: 'Retry' }));
    await userEvent.click(await screen.findByRole('button', { name: /Windows Portable/ }));
    expect(openExternalUrl).toHaveBeenCalledWith(asset.browserDownloadUrl);
    await userEvent.click(screen.getByRole('button', { name: /Fast Mirror/ }));
    expect(openExternalUrl).toHaveBeenCalledWith(asset.mirrorDownloadUrl);
    await userEvent.click(screen.getByRole('button', { name: 'Skip this version' }));
    expect(ignoreVersion).toHaveBeenCalledWith('v2');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });
});
