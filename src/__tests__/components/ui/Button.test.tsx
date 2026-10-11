import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

describe('Button', () => {
  it('runs actions with the keyboard', async () => {
    const action = vi.fn();
    render(<Button onClick={action}>Process PDF</Button>);
    await userEvent.tab();
    await userEvent.keyboard('{Enter}');
    expect(action).toHaveBeenCalledOnce();
  });
  it('prevents processing a second time while busy', async () => {
    const action = vi.fn();
    render(<Button loading onClick={action}>Process PDF</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
    await userEvent.click(button);
    expect(action).not.toHaveBeenCalled();
  });
  it('composes a link without nesting interactive elements', () => {
    render(<Button asChild><Link href="/en/tools">Browse tools</Link></Button>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/en/tools');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
  it('does not submit an enclosing form by default', async () => {
    const submit = vi.fn(e => e.preventDefault());
    render(<form onSubmit={submit}><Button>Choose file</Button></form>);
    await userEvent.click(screen.getByRole('button'));
    expect(submit).not.toHaveBeenCalled();
  });
});
