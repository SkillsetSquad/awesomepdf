import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TooltipProvider } from '@/components/ui/tooltip';
import { DifferenceHighlight } from '@/components/tools/compare-pdfs/DifferenceHighlight';

describe('PDF difference highlights', () => {
  it('shows the standard tooltip on keyboard focus while retaining the page coordinates and moved-text color', async () => {
    render(<TooltipProvider><DifferenceHighlight label="Paragraph moved" highlight={{ type: 'moved', text: 'Moved content', x: 12, y: 34, w: 120, h: 20 }} /></TooltipProvider>);
    const user = userEvent.setup();
    const highlight = screen.getByRole('button', { name: 'Paragraph moved' });
    expect(highlight).toHaveStyle({ left: '12px', top: '34px', width: '120px', height: '20px', background: 'rgba(168, 85, 247, 0.18)' });
    expect(highlight.style.borderStyle).toBe('dashed');
    await user.tab();
    expect(highlight).toHaveFocus();
    const tooltip = await screen.findByRole('tooltip');
    expect(tooltip).toHaveTextContent('Moved content');
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('tooltip')).toBeNull();
  });
});
