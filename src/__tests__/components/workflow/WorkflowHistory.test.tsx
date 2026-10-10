import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { WorkflowHistory } from '@/components/workflow/WorkflowHistory';
import type { WorkflowExecutionRecord } from '@/types/workflow-history';

const mocks = vi.hoisted(() => ({ loadExecutionHistory: vi.fn(), deleteExecutionRecord: vi.fn(), clearExecutionHistory: vi.fn(), getExecutionStatistics: vi.fn() }));
vi.mock('@/lib/workflow/history', () => mocks);
const record: WorkflowExecutionRecord = { id: 'test-run', workflowName: 'Local run', nodes: [], edges: [], fileCount: 2, startTime: new Date('2026-10-10T12:00:00Z'), duration: 1000, status: 'completed', successfulNodes: 1, totalNodes: 1 };
beforeEach(() => {
  vi.clearAllMocks();
  mocks.loadExecutionHistory.mockReturnValue([record]);
  mocks.getExecutionStatistics.mockReturnValue({ total: 1, successRate: 100, avgDuration: 1000 });
  mocks.deleteExecutionRecord.mockImplementation(() => mocks.loadExecutionHistory.mockReturnValue([]));
  mocks.clearExecutionHistory.mockImplementation(() => mocks.loadExecutionHistory.mockReturnValue([]));
});
function view(load = vi.fn()) { render(<NextIntlClientProvider locale="en" messages={messages}><WorkflowHistory onLoadFromHistory={load} /></NextIntlClientProvider>); return load; }
describe('Workflow execution history', () => {
  it('loads the stored workflow and can cancel deletion without changing history', async () => {
    const load = view();
    await userEvent.click(screen.getByRole('button', { name: 'Local run' }));
    await userEvent.click(screen.getByRole('button', { name: 'Load Workflow' }));
    expect(load).toHaveBeenCalledWith(record);
    const trigger = screen.getByRole('button', { name: 'Delete: Local run' });
    await userEvent.click(trigger);
    const dialog = screen.getByRole('alertdialog');
    expect(within(dialog).getByRole('button', { name: 'Cancel' })).toHaveFocus();
    await userEvent.click(within(dialog).getByRole('button', { name: 'Cancel' }));
    expect(mocks.deleteExecutionRecord).not.toHaveBeenCalled();
    await waitFor(() => expect(trigger).toHaveFocus());
  });
  it('deletes only the confirmed record and keeps focus in the history view', async () => {
    view();
    await userEvent.click(screen.getByRole('button', { name: 'Delete: Local run' }));
    await userEvent.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: 'Delete' }));
    expect(mocks.deleteExecutionRecord).toHaveBeenCalledWith('test-run');
    expect(await screen.findByText('No execution history yet')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByRole('heading', { name: /Execution History/ })).toHaveFocus());
  });
  it('clears history only after the existing irreversible-action confirmation', async () => {
    view();
    await userEvent.click(screen.getByRole('button', { name: 'Clear All' }));
    expect(screen.getByRole('alertdialog')).toHaveTextContent('This cannot be undone.');
    expect(mocks.clearExecutionHistory).not.toHaveBeenCalled();
    await userEvent.click(within(screen.getByRole('alertdialog')).getByRole('button', { name: 'Delete' }));
    expect(mocks.clearExecutionHistory).toHaveBeenCalledOnce();
    expect(mocks.deleteExecutionRecord).not.toHaveBeenCalled();
  });
});
