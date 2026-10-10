import { describe, expect, it, vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { ToolSidebar } from '@/components/workflow/ToolSidebar';
import { WORKFLOW_TOOL_DROP_EVENT } from '@/components/workflow/dragEvents';

describe('Workflow tool sidebar', () => {
  it('adds a tool with the keyboard and keeps category controls expandable', async () => {
    const added = vi.fn();
    const drop = vi.fn();
    window.addEventListener(WORKFLOW_TOOL_DROP_EVENT, drop);
    render(<NextIntlClientProvider locale="en" messages={messages}>
      <ToolSidebar onDragStart={vi.fn()} onToolAdded={added} />
    </NextIntlClientProvider>);
    const merge = screen.getByRole('button', { name: 'Merge PDF' });
    act(() => merge.focus());
    await userEvent.keyboard('{Enter}');
    expect(added).toHaveBeenCalledOnce();
    expect(drop).toHaveBeenCalledOnce();
    expect((drop.mock.calls[0][0] as CustomEvent).detail.nodeData.toolId).toBe('merge-pdf');
    const category = screen.getByRole('button', { name: /^Organize & Manage/ });
    await userEvent.click(category);
    expect(category).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('button', { name: 'Merge PDF' })).not.toBeInTheDocument();
    window.removeEventListener(WORKFLOW_TOOL_DROP_EVENT, drop);
  });
});
