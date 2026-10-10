import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

function WorkspaceTabs() {
  return <Tabs defaultValue="pages"><TabsList aria-label="Workspace"><TabsTrigger value="pages">Pages</TabsTrigger><TabsTrigger value="locked" disabled>Unavailable</TabsTrigger><TabsTrigger value="settings">Settings</TabsTrigger></TabsList><TabsContent value="pages">Page previews</TabsContent><TabsContent value="settings">Output settings</TabsContent></Tabs>;
}

describe('Workspace tabs', () => {
  it('switches panels with arrow keys and skips disabled controls', async () => {
    render(<WorkspaceTabs />);
    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Settings' })).toHaveFocus();
    expect(screen.getByRole('tab', { name: 'Settings' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tabpanel')).toHaveTextContent('Output settings');
  });
  it('uses unique tab/panel relationships in multiple workspaces', () => {
    render(<><WorkspaceTabs /><WorkspaceTabs /></>);
    const tabs = screen.getAllByRole('tab', { name: 'Pages' });
    expect(tabs[0].id).not.toEqual(tabs[1].id);
    for (const tab of tabs) expect(document.getElementById(tab.getAttribute('aria-controls')!)).toHaveAttribute('aria-labelledby', tab.id);
  });
});
