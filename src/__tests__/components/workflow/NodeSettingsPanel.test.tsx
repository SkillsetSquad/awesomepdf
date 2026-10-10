import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { NodeSettingsPanel } from '@/components/workflow/NodeSettingsPanel';
import type { WorkflowNode } from '@/types/workflow';

function node(toolId: string): WorkflowNode {
  return { id: 'test-node', position: { x: 0, y: 0 }, data: {
    toolId, label: 'Test tool', icon: 'FileText', category: 'optimize',
    acceptedFormats: ['pdf'], outputFormat: 'pdf', status: 'idle', progress: 0,
  } };
}
function Harness({ toolId, update }: { toolId: string; update: (id: string, settings: Record<string, unknown>) => void }) {
  const [selected, setSelected] = useState<WorkflowNode | null>(null);
  return <NextIntlClientProvider locale="en" messages={messages}>
    <button onClick={() => setSelected(node(toolId))}>Configure node</button>
    <NodeSettingsPanel node={selected} onClose={() => setSelected(null)} onUpdateSettings={update} />
  </NextIntlClientProvider>;
}

describe('Workflow node settings', () => {
  it('updates named checkbox and select settings and returns focus when dismissed', async () => {
    const update = vi.fn();
    render(<Harness toolId="compress-pdf" update={update} />);
    const trigger = screen.getByRole('button', { name: 'Configure node' });
    await userEvent.click(trigger);
    expect(screen.getByRole('dialog')).toHaveAttribute('dir', 'ltr');
    const optimize = screen.getByRole('checkbox', { name: 'Optimize embedded images' });
    expect(optimize).toBeChecked();
    await userEvent.click(screen.getByText('Optimize embedded images'));
    await waitFor(() => expect(update).toHaveBeenLastCalledWith('test-node', expect.objectContaining({ optimizeImages: false })));
    await userEvent.selectOptions(screen.getByRole('combobox', { name: 'Compression Algorithm' }), 'photon');
    expect(screen.getByRole('combobox', { name: 'Output DPI' })).toHaveValue('150');
    expect(screen.queryByRole('checkbox', { name: 'Optimize embedded images' })).not.toBeInTheDocument();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });
  it('keeps numeric slider settings and saves them through the existing update callback', async () => {
    const update = vi.fn();
    render(<Harness toolId="add-watermark" update={update} />);
    await userEvent.click(screen.getByRole('button', { name: 'Configure node' }));
    const opacity = screen.getByRole('slider', { name: 'Opacity' });
    act(() => opacity.focus());
    await userEvent.keyboard('{ArrowRight}');
    expect(opacity).toHaveAttribute('aria-valuenow', '0.35');
    await waitFor(() => expect(update).toHaveBeenLastCalledWith('test-node', expect.objectContaining({ opacity: 0.35 })));
  });
});
