import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AnnotationColorControl } from '@/components/tools/edit-pdf/AnnotationColorControl';

async function setup(value: string, allowAlpha = true, direction: 'ltr' | 'rtl' = 'ltr') {
  const onChange = vi.fn(); const user = userEvent.setup();
  const view = render(<AnnotationColorControl options={{ value, allowAlpha, presets: ['#ff0000', '#11223380'], onChange }} label="Color" disabled={false} direction={direction} formatLabel="Format" closeLabel="Close" opacityLabel="Opacity" />);
  const trigger = screen.getByRole('button', { name: 'Color' }); trigger.focus(); await user.keyboard('{Enter}');
  const picker = within(screen.getByRole('dialog', { name: 'Color' }));
  return { user, view, trigger, picker, onChange };
}

describe('Annotation color opacity and original toolbar contract', () => {
  it.each([
    ['#12345680', '#123456', 50], ['#abcd', '#aabbcc', 87],
    ['rgba(18, 52, 86, 0.5)', '#123456', 50], ['rgba(18,52,86,.5)', '#123456', 50],
  ])('reads %s without changing the stored value on open', async (value, hex, opacity) => {
    const { picker, onChange, view } = await setup(String(value));
    try {
      expect(picker.getByRole('textbox', { name: 'Color (HEX)' })).toHaveValue(hex);
      expect(picker.getByRole('slider', { name: `Opacity (${opacity}%)` })).toHaveAttribute('aria-valuenow', String(opacity));
      expect(onChange).not.toHaveBeenCalled();
    } finally { view.unmount(); }
  });

  it.each(['ltr', 'rtl'] as const)('keeps alpha in HEX/RGB/HSB/native color edits, rejects bad entries and supports keyboard opacity in %s', async direction => {
    const { user, picker, trigger, onChange, view } = await setup('#12345680', true, direction);
    try {
      const hex = picker.getByRole('textbox', { name: 'Color (HEX)' });
      fireEvent.change(hex, { target: { value: '#abcdef' } }); expect(onChange).toHaveBeenLastCalledWith('#abcdef80');
      fireEvent.change(hex, { target: { value: '#abc0' } }); expect(onChange).toHaveBeenLastCalledWith('#aabbcc00');
      fireEvent.change(hex, { target: { value: '#01020380' } }); expect(onChange).toHaveBeenLastCalledWith('#01020380');
      const calls = onChange.mock.calls.length;
      fireEvent.change(hex, { target: { value: '#bad-color' } }); expect(hex).toHaveAttribute('aria-invalid', 'true'); expect(onChange).toHaveBeenCalledTimes(calls);
      await user.selectOptions(picker.getByRole('combobox', { name: 'Format' }), 'rgb');
      fireEvent.change(picker.getByRole('spinbutton', { name: 'R' }), { target: { value: '255' } }); expect(onChange).toHaveBeenLastCalledWith('#ff020380');
      await user.selectOptions(picker.getByRole('combobox', { name: 'Format' }), 'hsb');
      fireEvent.change(picker.getByRole('spinbutton', { name: 'B (%)' }), { target: { value: '0' } }); expect(onChange).toHaveBeenLastCalledWith('#00000080');
      fireEvent.change(picker.getByLabelText('Color', { selector: 'input' }), { target: { value: '#ffffff' } }); expect(onChange).toHaveBeenLastCalledWith('#ffffff80');
      const slider = picker.getByRole('slider'); slider.focus(); await user.keyboard('{Home}'); expect(onChange).toHaveBeenLastCalledWith('#ffffff00');
      await user.keyboard('{End}'); expect(onChange).toHaveBeenLastCalledWith('#ffffff');
      await user.click(picker.getByRole('button', { name: 'Color: #11223380' })); expect(onChange).toHaveBeenLastCalledWith('#11223380');
      expect(picker.getByRole('button', { name: 'Color: #11223380' })).toHaveAttribute('aria-pressed', 'true');
      await user.click(picker.getByRole('button', { name: 'Color: #ff0000' })); expect(onChange).toHaveBeenLastCalledWith('#ff0000'); expect(slider).toHaveAttribute('aria-valuenow', '100');
      await user.click(picker.getByRole('button', { name: 'Close' })); await waitFor(() => expect(trigger).toHaveFocus());
    } finally { view.unmount(); }
  });

  it('retains opaque toolbar callbacks and rejects alpha HEX when transparency is disabled', async () => {
    const { picker, onChange, view } = await setup('rgba(18,52,86,0.2)', false);
    try {
      expect(picker.queryByRole('slider')).toBeNull(); const hex = picker.getByRole('textbox', { name: 'Color (HEX)' });
      fireEvent.change(hex, { target: { value: '#abcdef80' } }); expect(onChange).not.toHaveBeenCalled(); expect(hex).toHaveAttribute('aria-invalid', 'true');
      fireEvent.change(hex, { target: { value: '#abc' } }); expect(onChange).toHaveBeenLastCalledWith('#aabbcc');
    } finally { view.unmount(); }
  });
});
