import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

describe('Card composition', () => {
  it('renders a labelled settings section and its controls', () => {
    render(<Card role="region" aria-label="PDF settings"><CardHeader><CardTitle>PDF settings</CardTitle><CardDescription>Choose output options.</CardDescription></CardHeader><CardContent><label htmlFor="filename">Filename</label><input id="filename" /></CardContent><CardFooter>Files stay on your device.</CardFooter></Card>);
    expect(screen.getByRole('region', { name: 'PDF settings' })).toContainElement(screen.getByLabelText('Filename'));
    expect(screen.getByText('Files stay on your device.')).toBeInTheDocument();
  });
});
