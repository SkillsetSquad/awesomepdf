import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WorkflowControls } from '@/components/workflow/WorkflowControls';
import type { WorkflowExecutionState, WorkflowValidation } from '@/types/workflow';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'en',
}));

function createExecutionState(overrides: Partial<WorkflowExecutionState> = {}): WorkflowExecutionState {
  return {
    status: 'idle',
    currentNodeId: null,
    executedNodes: [],
    pendingNodes: [],
    progress: 0,
    ...overrides,
  };
}

function createValidation(overrides: Partial<WorkflowValidation> = {}): WorkflowValidation {
  return {
    isValid: true,
    errors: [],
    warnings: [],
    ...overrides,
  };
}

describe('WorkflowControls', () => {
  it('reorders files, closes a nested preview with URL cleanup, and returns focus after clearing', async () => {
    const onExecute = vi.fn();
    const first = new File(['first'], 'first.pdf', { type: 'application/pdf' });
    const second = new File(['second'], 'second.pdf', { type: 'application/pdf' });
    const revoke = vi.spyOn(URL, 'revokeObjectURL');
    render(<WorkflowControls nodes={[{ id: 'node', position: { x: 0, y: 0 }, data: {
      toolId: 'merge-pdf', label: 'Merge', icon: 'FileText', category: 'edit',
      acceptedFormats: ['pdf'], outputFormat: 'pdf', status: 'idle', progress: 0,
    } }]} edges={[]} executionState={createExecutionState()} validation={createValidation()}
      onExecute={onExecute} onStop={vi.fn()} onSave={vi.fn()} onClear={vi.fn()} onImport={vi.fn()} />);
    await userEvent.upload(screen.getByLabelText('selectFiles'), [first, second]);
    const trigger = screen.getByRole('button', { name: '2 filesCount' });
    await userEvent.click(trigger);
    await userEvent.click(screen.getByRole('button', { name: 'moveUp: second.pdf' }));
    expect(within(screen.getByRole('list')).getAllByRole('listitem')[0]).toHaveTextContent('second.pdf');
    const preview = screen.getByRole('button', { name: 'preview: second.pdf' });
    await userEvent.click(preview);
    expect(screen.getByRole('dialog', { name: 'second.pdf' })).toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(preview).toHaveFocus());
    expect(screen.getByRole('dialog', { name: /selectedFiles/ })).toBeInTheDocument();
    expect(revoke).toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: 'confirm' }));
    await waitFor(() => expect(trigger).toHaveFocus());
    await userEvent.click(screen.getByRole('button', { name: 'execute' }));
    expect(onExecute).toHaveBeenCalledWith([second, first]);
    await userEvent.click(trigger);
    await userEvent.click(screen.getByRole('button', { name: 'clearAll' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(screen.getByRole('button', { name: 'selectFiles' })).toHaveFocus();
    revoke.mockRestore();
  });

  it('saves a named workflow through an accessible dialog and restores trigger focus', async () => {
    const onSave = vi.fn();
    render(<WorkflowControls nodes={[{ id: 'node', position: { x: 0, y: 0 }, data: {
      toolId: 'merge-pdf', label: 'Merge', icon: 'FileText', category: 'edit',
      acceptedFormats: ['pdf'], outputFormat: 'pdf', status: 'idle', progress: 0,
    } }]} edges={[]} executionState={createExecutionState()} validation={createValidation()}
      onExecute={vi.fn()} onStop={vi.fn()} onSave={onSave} onClear={vi.fn()} onImport={vi.fn()} />);
    const trigger = screen.getByRole('button', { name: 'buttons.save' });
    await userEvent.click(trigger);
    expect(screen.getByRole('dialog', { name: 'saveWorkflow' })).toHaveAttribute('dir', 'ltr');
    const name = screen.getByLabelText('workflowName');
    expect(name).toHaveFocus();
    await userEvent.type(name, '  Local workflow  ');
    await userEvent.type(screen.getByLabelText(/description/), 'Local settings');
    await userEvent.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'buttons.save' }));
    expect(onSave).toHaveBeenCalledWith('Local workflow', 'Local settings');
    await waitFor(() => expect(trigger).toHaveFocus());
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('exposes a broad file accept list for workflow inputs', () => {
    const { container } = render(
      <WorkflowControls
        nodes={[]}
        edges={[]}
        executionState={createExecutionState()}
        validation={createValidation()}
        onExecute={vi.fn()}
        onStop={vi.fn()}
        onSave={vi.fn()}
        onClear={vi.fn()}
        onImport={vi.fn()}
      />
    );

    const input = container.querySelector('input[type="file"][multiple]') as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.accept).toContain('.txt');
    expect(input.accept).toContain('.json');
    expect(input.accept).toContain('.svg');
    expect(input.accept).toContain('.epub');
    expect(input.accept).toContain('.eml');
  });

  it('renders readable list markers for validation messages', () => {
    render(
      <WorkflowControls
        nodes={[]}
        edges={[]}
        executionState={createExecutionState()}
        validation={createValidation({
          isValid: false,
          errors: [{ type: 'format', message: 'Bad edge format' }],
          warnings: [{ message: 'Disconnected node' }],
        })}
        onExecute={vi.fn()}
        onStop={vi.fn()}
        onSave={vi.fn()}
        onClear={vi.fn()}
        onImport={vi.fn()}
      />
    );

    expect(screen.getByText('- Bad edge format')).toBeInTheDocument();
    expect(screen.getByText('- Disconnected node')).toBeInTheDocument();
  });
});
