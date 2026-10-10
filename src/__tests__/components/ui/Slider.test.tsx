import { useState } from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Slider } from '@/components/ui/slider';
import { UIProviders } from '@/components/ui/providers';
import { NextIntlClientProvider } from 'next-intl';
function Range({ disabled = false }: { disabled?: boolean }) {
  const [value, setValue] = useState([50]);
  return <><Slider aria-label="PDF quality" value={value} onValueChange={setValue} min={10} max={90} step={5} disabled={disabled} /><output>{value[0]}</output></>;
}
describe('Slider', () => {
  it('names the thumb and preserves keyboard steps and bounds', async () => {
    render(<Range />);
    const slider = screen.getByRole('slider', { name: 'PDF quality' });
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(slider).toHaveAttribute('aria-valuenow', '55');
    await userEvent.keyboard('{End}');
    expect(slider).toHaveAttribute('aria-valuenow', '90');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider).toHaveAttribute('aria-valuenow', '90');
    await userEvent.keyboard('{Home}');
    expect(slider).toHaveAttribute('aria-valuenow', '10');
  });
  it('follows Arabic keyboard direction from the shared providers', async () => {
    render(<NextIntlClientProvider locale="ar" messages={{}}><UIProviders><Range /></UIProviders></NextIntlClientProvider>);
    const slider = screen.getByRole('slider', { name: 'PDF quality' });
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(slider).toHaveAttribute('aria-valuenow', '45');
  });
  it('keeps disabled sliders out of keyboard navigation', async () => {
    render(<Range disabled />);
    await userEvent.tab();
    expect(screen.getByRole('slider')).not.toHaveFocus();
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '50');
  });
});
