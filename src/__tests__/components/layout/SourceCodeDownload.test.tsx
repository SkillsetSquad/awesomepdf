import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { SourceCodeDownload } from '@/components/common/SourceCodeDownload';
import type { ProgressCallback } from '@/lib/utils/asset-loader';

const { fetchArchive } = vi.hoisted(() => ({ fetchArchive: vi.fn() }));
vi.mock('@/lib/utils/asset-loader', () => ({ fetchAssembledBlob: fetchArchive }));

beforeEach(() => {
  vi.restoreAllMocks();
  fetchArchive.mockReset();
  vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
});

function renderDownload() {
  render(<NextIntlClientProvider locale="en" messages={messages}><SourceCodeDownload archiveId="2026-10-10T12:00:00Z" /></NextIntlClientProvider>);
}

describe('Deployed source download', () => {
  it('uses a versioned archive URL, reports progress and blocks repeat downloads', async () => {
    let finish!: (blob: Blob) => void;
    fetchArchive.mockImplementation((_url: string, progress: ProgressCallback) => {
      progress({ loadedBytes: 25, totalBytes: 100 });
      return new Promise<Blob>((resolve) => { finish = resolve; });
    });
    renderDownload();
    const button = screen.getByRole('button', { name: 'Source code (ZIP)' });
    await userEvent.click(button);
    expect(button).toBeDisabled();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '25');
    await userEvent.click(button);
    expect(fetchArchive).toHaveBeenCalledTimes(1);
    expect(fetchArchive.mock.calls[0][0]).toBe('/source-code.zip?v=2026-10-10T12%3A00%3A00Z');
    finish(new Blob(['source']));
    await waitFor(() => expect(button).toBeEnabled());
    expect(HTMLAnchorElement.prototype.click).toHaveBeenCalledTimes(1);
  });

  it('shows a translated error and permits a successful retry', async () => {
    fetchArchive.mockRejectedValueOnce(new Error('unavailable')).mockResolvedValueOnce(new Blob(['source']));
    renderDownload();
    const button = screen.getByRole('button', { name: 'Source code (ZIP)' });
    await userEvent.click(button);
    expect(await screen.findByRole('alert')).toHaveTextContent('Source download failed. Please try again.');
    expect(button).toBeEnabled();
    await userEvent.click(button);
    await waitFor(() => expect(screen.queryByRole('alert')).not.toBeInTheDocument());
    expect(HTMLAnchorElement.prototype.click).toHaveBeenCalledTimes(1);
  });
});
