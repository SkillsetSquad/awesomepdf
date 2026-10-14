import { describe, expect, it } from 'vitest';
import { act, render, screen, waitFor } from '@testing-library/react';
import { EditorNotifications } from '@/components/editor/EditorNotifications';

describe('Editor notifications', () => {
  it('shows engine messages through the shared toaster and follows the host theme', async () => {
    const { container, unmount } = render(<EditorNotifications />);
    act(() => { window.dispatchEvent(new CustomEvent('AWSOMEPDF_EDITOR_NOTICE', { detail: { message: 'Saved locally' } })); });
    expect(await screen.findByText('Saved locally')).toBeInTheDocument();
    act(() => { document.documentElement.classList.add('dark'); });
    await waitFor(() => expect(container.querySelector('[data-sonner-toaster]')).toHaveAttribute('data-sonner-theme', 'dark'));
    unmount();
    document.documentElement.classList.remove('dark');
  });
});
