'use client';

import { useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const readField = (input: HTMLInputElement) => ({ value: input.value, checked: input.checked, disabled: input.disabled, min: input.min, max: input.max, step: input.step });

/** The native input retains focus, labels and engine events; the standard component draws it. */
export function PDFViewerField({ input }: { input: HTMLInputElement }) {
  const [state, setState] = useState(() => readField(input));
  useEffect(() => {
    const sync = () => setState(previous => {
      const next = readField(input);
      return previous.value === next.value && previous.checked === next.checked && previous.disabled === next.disabled && previous.min === next.min && previous.max === next.max && previous.step === next.step ? previous : next;
    });
    sync();
    input.addEventListener('input', sync);
    input.addEventListener('change', sync);
    input.addEventListener('awsomepdf:sync-field', sync);
    // Selecting a native radio also unchecks its sibling without firing on that sibling.
    if (input.type === 'radio') input.ownerDocument.addEventListener('change', sync);
    const observer = new MutationObserver(sync);
    observer.observe(input, { attributes: true, attributeFilter: ['disabled', 'value', 'checked', 'min', 'max', 'step'] });
    return () => {
      observer.disconnect();
      input.removeEventListener('input', sync);
      input.removeEventListener('change', sync);
      input.removeEventListener('awsomepdf:sync-field', sync);
      if (input.type === 'radio') input.ownerDocument.removeEventListener('change', sync);
    };
  }, [input]);
  if (input.type === 'radio') return (
    <RadioGroup value={state.checked ? 'selected' : ''} disabled>
      <RadioGroupItem value="selected" tabIndex={-1} className={`pointer-events-none ${state.disabled ? 'disabled:opacity-50' : 'disabled:opacity-100'}`} />
    </RadioGroup>
  );
  return input.type === 'checkbox'
    ? <Checkbox checked={state.checked} disabled tabIndex={-1} className={`pointer-events-none ${state.disabled ? 'disabled:opacity-50' : 'disabled:opacity-100'}`} />
    : <Slider value={[Number(state.value)]} min={Number(state.min) || 0} max={state.max ? Number(state.max) : 100} step={state.step === 'any' ? undefined : Number(state.step) || 1}
        disabled className={`pointer-events-none ${state.disabled ? 'data-[disabled]:opacity-50' : 'data-[disabled]:opacity-100'}`} />;
}
