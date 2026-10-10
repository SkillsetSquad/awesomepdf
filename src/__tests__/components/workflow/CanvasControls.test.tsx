import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TooltipProvider } from '@/components/ui/tooltip';
import { CanvasControls } from '@/components/workflow/CanvasControls';

const mocks = vi.hoisted(() => ({
  zoomIn: vi.fn(), zoomOut: vi.fn(), fitView: vi.fn(), setState: vi.fn(),
  state: { nodesDraggable: true, nodesConnectable: true, elementsSelectable: true, transform: [0, 0, 1], minZoom: 0.5, maxZoom: 2 },
}));
vi.mock('reactflow', () => ({
  Panel: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useReactFlow: () => mocks,
  useStoreApi: () => ({ setState: mocks.setState }),
  useStore: (selector: (state: typeof mocks.state) => unknown) => selector(mocks.state),
}));
vi.mock('next-intl', () => ({ useTranslations: () => (key: string) => key }));
beforeEach(() => { vi.clearAllMocks(); mocks.state.transform[2] = 1; });
function view() { render(<TooltipProvider><CanvasControls /></TooltipProvider>); }
describe('Workflow canvas controls', () => {
  it('preserves zoom, fit and all three interactivity flags', async () => {
    view();
    await userEvent.click(screen.getByRole('button', { name: 'zoomIn' }));
    await userEvent.click(screen.getByRole('button', { name: 'zoomOut' }));
    await userEvent.click(screen.getByRole('button', { name: 'fitView' }));
    expect(mocks.zoomIn).toHaveBeenCalledOnce();
    expect(mocks.zoomOut).toHaveBeenCalledOnce();
    expect(mocks.fitView).toHaveBeenCalledOnce();
    expect(screen.getByRole('button', { name: 'toggleEditing' })).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(screen.getByRole('button', { name: 'toggleEditing' }));
    expect(mocks.setState).toHaveBeenCalledWith({ nodesDraggable: false, nodesConnectable: false, elementsSelectable: false });
  });
  it('disables zoom at the existing canvas bounds', () => {
    mocks.state.transform[2] = 2;
    view();
    expect(screen.getByRole('button', { name: 'zoomIn' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'zoomOut' })).toBeEnabled();
  });
});
