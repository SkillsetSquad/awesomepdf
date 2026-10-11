import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { IntentLink } from '@/components/common/IntentLink';

const seen: Array<unknown> = [];
vi.mock('next/link', () => ({
  default: ({ prefetch, ...props }: React.ComponentProps<'a'> & { prefetch?: boolean | null }) => {
    seen.push(prefetch);
    return <a {...props} data-prefetch={String(prefetch)} />;
  },
}));

describe('IntentLink', () => {
  it('does not prefetch on load, only once the visitor shows intent', () => {
    render(<IntentLink href="/en/tools/merge-pdf">Merge</IntentLink>);
    const link = screen.getByRole('link', { name: 'Merge' });
    expect(link).toHaveAttribute('data-prefetch', 'false');

    fireEvent.mouseEnter(link);
    expect(link).toHaveAttribute('data-prefetch', 'null');
  });

  it.each([['focus'], ['touchStart']] as const)('treats %s as intent too and still calls the caller\'s handler', (event) => {
    const handler = vi.fn();
    const props = event === 'focus' ? { onFocus: handler } : { onTouchStart: handler };
    render(<IntentLink href="/en/tools/split-pdf" {...props}>Split</IntentLink>);
    const link = screen.getByRole('link', { name: 'Split' });

    fireEvent[event](link);
    expect(link).toHaveAttribute('data-prefetch', 'null');
    expect(handler).toHaveBeenCalledOnce();
  });

  it('respects an explicit prefetch setting', () => {
    render(<IntentLink href="/en" prefetch>Home</IntentLink>);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('data-prefetch', 'true');
  });
});
