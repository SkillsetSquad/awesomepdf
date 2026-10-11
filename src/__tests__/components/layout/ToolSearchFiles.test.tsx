import 'fake-indexeddb/auto';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import messages from '../../../../messages/en.json';
import { ToolSearch } from '@/components/layout/ToolSearch';
import { getToolSummaries } from '@/lib/tool-summaries';
import { addRecentFile, clearRecentFiles } from '@/lib/storage/recent-files';
import * as projects from '@/lib/storage/project-db';

const { push } = vi.hoisted(() => ({ push: vi.fn() }));
vi.mock('next/navigation', () => ({ useRouter: () => ({ push }) }));

beforeEach(async () => {
  push.mockReset();
  localStorage.clear();
  await projects.clearAllProjects();
  HTMLElement.prototype.scrollIntoView = vi.fn();
});
afterEach(() => vi.restoreAllMocks());

async function open(locale: 'en' | 'ar' = 'en') {
  const user = userEvent.setup();
  render(<NextIntlClientProvider locale="en" messages={messages}><ToolSearch locale={locale} content={getToolSummaries(locale)} /></NextIntlClientProvider>);
  await user.keyboard('{Meta>}k{/Meta}');
  const input = await screen.findByRole('combobox');
  return { user, input };
}

describe('command palette file search', () => {
  it('finds a localStorage file by name and selects its tool with the keyboard', async () => {
    addRecentFile('payroll-2026-final.pdf', 2048, 'merge-pdf');
    const { user, input } = await open();
    await user.type(input, 'payroll-2026-final.pdf');
    const file = await screen.findByRole('option', { name: /payroll-2026-final.pdf/ });
    expect(file).toHaveTextContent(messages.common.search.recentFile);
    expect(screen.getByText(messages.common.search.fileHint)).toBeInTheDocument();
    await waitFor(() => expect(file).toHaveAttribute('aria-selected', 'true'));
    expect(screen.getAllByRole('option')[0]).toBe(file);
    await user.keyboard('{Enter}');
    expect(push).toHaveBeenCalledWith('/en/tools/merge-pdf');
    expect(push.mock.calls[0][0]).not.toContain('payroll');
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
  });

  it('finds IndexedDB project files and uses a locale-prefixed route', async () => {
    await projects.saveProject({ name: 'Vendor review', toolId: 'split-pdf', status: 'paused', progress: 0, options: {},
      fileMetadata: [{ name: 'vendor-contract-402.pdf', size: 1000, type: 'application/pdf', lastModified: 0 }],
    });
    const { user, input } = await open('ar');
    expect(screen.getByRole('dialog')).toHaveAttribute('dir', 'rtl');
    await user.type(input, 'vendor review');
    const file = await screen.findByRole('option', { name: /vendor-contract-402.pdf/ });
    expect(file).toHaveTextContent(messages.common.search.projectFile);
    await user.click(file);
    expect(push).toHaveBeenCalledWith('/ar/tools/split-pdf');
  });

  it('refreshes file records while open and resets the query on keyboard close/reopen', async () => {
    const { user, input } = await open();
    await user.type(input, 'just-created.pdf');
    await act(async () => { addRecentFile('just-created.pdf', 50, 'merge-pdf'); });
    await screen.findByRole('option', { name: /just-created.pdf/ });
    await act(async () => { clearRecentFiles(); });
    await waitFor(() => expect(screen.queryByRole('option', { name: /just-created.pdf/ })).toBeNull());
    await user.keyboard('{Meta>}k{/Meta}');
    await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
    await act(async () => { addRecentFile('new-history.pdf', 50, 'split-pdf'); });
    await user.keyboard('{Meta>}k{/Meta}');
    expect(await screen.findByRole('combobox')).toHaveValue('');
    await screen.findByRole('option', { name: /new-history.pdf/ });
  });

  it('keeps tool search working when IndexedDB fails and disables records for removed tools', async () => {
    vi.spyOn(projects, 'getAllProjects').mockRejectedValue(new Error('Blocked'));
    addRecentFile('obsolete.pdf', 20, 'removed-tool');
    const { user, input } = await open();
    await screen.findByText(messages.common.search.filesUnavailable);
    await user.type(input, 'obsolete.pdf');
    const file = await screen.findByRole('option', { name: /obsolete.pdf/ });
    expect(file).toHaveAttribute('aria-disabled', 'true');
    await user.click(file);
    expect(push).not.toHaveBeenCalled();
    await user.clear(input);
    await user.type(input, 'merge');
    await waitFor(() => expect(screen.getAllByRole('option')[0]).toHaveTextContent('Merge PDF'));
    await user.keyboard('{Enter}');
    expect(push).toHaveBeenCalledWith('/en/tools/merge-pdf');
  });

  it('refreshes IndexedDB files after project creation, updates and deletion', async () => {
    const { user, input } = await open();
    await user.type(input, 'live-record.pdf');
    const project = await act(async () => projects.saveProject({
      name: 'Live project', toolId: 'merge-pdf', status: 'paused', progress: 0, options: {},
      fileMetadata: [{ name: 'live-record.pdf', size: 100, type: 'application/pdf', lastModified: 0 }],
    }));
    await screen.findByRole('option', { name: /live-record.pdf/ });
    await act(async () => { await projects.updateProject(project.id, { fileMetadata: [] }); });
    await waitFor(() => expect(screen.queryByRole('option', { name: /live-record.pdf/ })).toBeNull());
    await act(async () => { await projects.updateProject(project.id, {
      fileMetadata: [{ name: 'live-record.pdf', size: 200, type: 'application/pdf', lastModified: 0 }],
    }); });
    await screen.findByRole('option', { name: /live-record.pdf/ });
    await act(async () => { await projects.deleteProject(project.id); });
    await waitFor(() => expect(screen.queryByRole('option', { name: /live-record.pdf/ })).toBeNull());
  });

  it('refreshes localStorage records changed in another window', async () => {
    const { user, input } = await open();
    await user.type(input, 'another-window.pdf');
    await act(async () => {
      localStorage.setItem('pdfcraft_recent_files', JSON.stringify([
        { id: 'external', name: 'another-window.pdf', size: 123, toolUsed: 'split-pdf' },
      ]));
      window.dispatchEvent(new StorageEvent('storage', { key: 'pdfcraft_recent_files' }));
    });
    await screen.findByRole('option', { name: /another-window.pdf/ });
  });
});
