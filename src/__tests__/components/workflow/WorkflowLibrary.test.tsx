import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { WorkflowLibrary } from '@/components/workflow/WorkflowLibrary';
import type { SavedWorkflow } from '@/types/workflow';

const saved: SavedWorkflow = { id: 'saved-local', name: 'Local workflow', description: 'Local settings', nodes: [], edges: [], createdAt: '2026-10-10', updatedAt: '2026-10-10', isFavorite: true };

describe('Workflow library', () => {
  it('loads saved workflows with the keyboard and keeps sibling actions independent', async () => {
    const load = vi.fn(), duplicate = vi.fn(), download = vi.fn(), remove = vi.fn();
    render(<NextIntlClientProvider locale="en" messages={messages}><WorkflowLibrary savedWorkflows={[saved]} onLoadTemplate={vi.fn()} onLoadWorkflow={load} onDuplicateWorkflow={duplicate} onExportWorkflow={download} onDeleteWorkflow={remove} /></NextIntlClientProvider>);
    const templates = screen.getByRole('tab', { name: 'Templates' });
    templates.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Saved' })).toHaveAttribute('aria-selected', 'true');
    const panel = screen.getByRole('tabpanel');
    const card = within(panel).getByRole('button', { name: 'Local workflow' });
    card.focus();
    await userEvent.keyboard('{Enter}');
    expect(load).toHaveBeenCalledWith(saved);
    load.mockClear();
    await userEvent.click(within(panel).getByRole('button', { name: 'Duplicate: Local workflow' }));
    await userEvent.click(within(panel).getByRole('button', { name: 'Download: Local workflow' }));
    await userEvent.click(within(panel).getByRole('button', { name: 'Delete: Local workflow' }));
    expect(duplicate).toHaveBeenCalledWith(saved.id);
    expect(download).toHaveBeenCalledWith(saved);
    expect(remove).toHaveBeenCalledWith(saved.id);
    expect(load).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('tab', { name: 'Favorites' }));
    expect(screen.getByRole('button', { name: 'Local workflow' })).toBeInTheDocument();
  });
});
