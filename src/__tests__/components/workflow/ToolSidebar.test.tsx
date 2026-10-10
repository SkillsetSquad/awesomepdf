import { describe, expect, it, vi } from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { ToolSidebar } from '@/components/workflow/ToolSidebar';
import { WORKFLOW_TOOL_DROP_EVENT } from '@/components/workflow/dragEvents';

describe('Workflow tool sidebar', () => {
  it('emits a fallback pointer drop when native drag and drop is unavailable', () => {
    const dropped = vi.fn();
    window.addEventListener(WORKFLOW_TOOL_DROP_EVENT, dropped);
    render(<NextIntlClientProvider locale="en" messages={messages}>
      <ToolSidebar onDragStart={vi.fn()} onDragEnd={vi.fn()} />
    </NextIntlClientProvider>);
    const merge = screen.getByText('Merge PDF');
    fireEvent.pointerDown(merge, { pointerId: 1, clientX: 100, clientY: 120 });
    fireEvent.pointerMove(window, { pointerId: 1, clientX: 340, clientY: 220 });
    fireEvent.pointerUp(window, { pointerId: 1, clientX: 340, clientY: 220 });
    expect(dropped).toHaveBeenCalledOnce();
    expect(dropped.mock.calls[0][0]).toMatchObject({ detail: {
      clientX: 340, clientY: 220, nodeData: expect.objectContaining({ toolId: 'merge-pdf', label: 'Merge PDF' }),
    } });
    window.removeEventListener(WORKFLOW_TOOL_DROP_EVENT, dropped);
  });

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
