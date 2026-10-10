'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';

export interface AnnotationColorOptions {
  value: string;
  presets: string[];
  onChange: (color: string) => void;
}

type ColorFormat = 'hex' | 'rgb' | 'hsb';
type Channels = [string, string, string];

function hexColor(value: string): string | null {
  if (/^#[\da-f]{6}$/i.test(value)) return value.toLowerCase();
  if (/^#[\da-f]{3}$/i.test(value)) return `#${value.slice(1).split('').map(char => char + char).join('')}`.toLowerCase();
  return null;
}

function rgb(value: string): number[] {
  return [1, 3, 5].map(start => parseInt(value.slice(start, start + 2), 16));
}

function rgbHex(values: number[]): string {
  return `#${values.map(value => Math.round(value).toString(16).padStart(2, '0')).join('')}`;
}

function channels(value: string, format: ColorFormat): Channels {
  const values = rgb(value);
  if (format !== 'hsb') return values.map(String) as Channels;
  const [r, g, b] = values.map(value => value / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), delta = max - min;
  const hue = !delta ? 0 : max === r ? ((g - b) / delta + 6) % 6 : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
  return [hue * 60, max ? delta / max * 100 : 0, max * 100].map(value => String(Math.round(value * 100) / 100)) as Channels;
}

function channelColor(values: Channels, format: ColorFormat): string | null {
  const numbers = values.map(value => value.trim() ? Number(value) : NaN);
  const maxima = format === 'rgb' ? [255, 255, 255] : [360, 100, 100];
  if (numbers.some((value, index) => !Number.isFinite(value) || value < 0 || value > maxima[index])) return null;
  if (format === 'rgb') return numbers.some(value => !Number.isInteger(value)) ? null : rgbHex(numbers);
  const [hue, saturation, brightness] = numbers;
  const sector = hue / 60 % 6, chroma = brightness / 100 * saturation / 100;
  const x = chroma * (1 - Math.abs(sector % 2 - 1)), m = brightness / 100 - chroma;
  const base = sector < 1 ? [chroma, x, 0] : sector < 2 ? [x, chroma, 0] : sector < 3 ? [0, chroma, x]
    : sector < 4 ? [0, x, chroma] : sector < 5 ? [x, 0, chroma] : [chroma, 0, x];
  return rgbHex(base.map(value => (value + m) * 255));
}

/** The toolbar's original callback receives opaque colors; document style processing stays native. */
export function AnnotationColorControl({ options, label, disabled, direction, formatLabel, closeLabel }: {
  options: AnnotationColorOptions;
  label: string;
  disabled: boolean;
  direction: 'ltr' | 'rtl';
  formatLabel: string;
  closeLabel: string;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(hexColor(options.value) ?? '#000000');
  const [hex, setHex] = useState(color);
  const [format, setFormat] = useState<ColorFormat>('hex');
  const [values, setValues] = useState<Channels>(() => channels(color, 'rgb'));
  useEffect(() => { if (disabled) setOpen(false); }, [disabled]);
  const apply = (value: string) => { setColor(value); options.onChange(value); };
  const chooseColor = (value: string) => {
    const normalized = hexColor(value);
    if (!normalized) return;
    setHex(normalized);
    setValues(channels(normalized, format));
    apply(normalized);
  };
  const invalid = format === 'hex' ? !hexColor(hex) : !channelColor(values, format);
  const names = format === 'rgb' ? ['R', 'G', 'B'] : ['H (°)', 'S (%)', 'B (%)'];
  return <Dialog open={open && !disabled} onOpenChange={value => {
    setOpen(value);
    if (value) {
      const initial = hexColor(options.value) ?? '#000000';
      setColor(initial); setHex(initial); setValues(channels(initial, format));
    }
  }}>
    <DialogTrigger asChild><Button ref={trigger} size="sm" variant="ghost" disabled={disabled} dir={direction}
      onClick={event => event.stopPropagation()} onKeyDown={event => event.stopPropagation()}>
      <Palette aria-hidden="true" /><span className="size-3 rounded-sm border" style={{ backgroundColor: options.value }} aria-hidden="true" />{label}
    </Button></DialogTrigger>
    <DialogContent dir={direction} showCloseButton={false} aria-describedby={undefined}
      onOpenAutoFocus={event => { event.preventDefault(); input.current?.focus(); input.current?.select(); }}
      onCloseAutoFocus={event => {
        event.preventDefault();
        const button = trigger.current;
        if (button && !button.disabled) button.focus();
        else (button?.ownerDocument.defaultView?.frameElement as HTMLElement | null)?.focus();
      }}>
      <DialogHeader><DialogTitle>{label}</DialogTitle></DialogHeader>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
          {options.presets.map(value => <Button key={value} variant="outline" size="icon-sm" aria-label={`${label}: ${value}`} aria-pressed={hexColor(value) === color} onClick={() => chooseColor(value)}>
            <span className="size-4 rounded-sm border" style={{ backgroundColor: value }} aria-hidden="true" />
          </Button>)}
        </div>
        <div className="space-y-2"><Label htmlFor={`${id}-color`}>{label}</Label><Input type="color" id={`${id}-color`} value={color} onChange={event => chooseColor(event.target.value)} /></div>
        <div className="space-y-2"><Label htmlFor={`${id}-format`}>{formatLabel}</Label><NativeSelect id={`${id}-format`} value={format} onChange={event => {
          const next = event.target.value as ColorFormat;
          setFormat(next); setHex(color); setValues(channels(color, next));
        }}><NativeSelectOption value="hex">HEX</NativeSelectOption><NativeSelectOption value="rgb">RGB</NativeSelectOption><NativeSelectOption value="hsb">HSB</NativeSelectOption></NativeSelect></div>
        {format === 'hex' ? <div className="space-y-2"><Label htmlFor={`${id}-hex`}>{label} (HEX)</Label><Input ref={input} id={`${id}-hex`} value={hex} dir="ltr" aria-invalid={invalid} onChange={event => {
          setHex(event.target.value);
          const value = hexColor(event.target.value);
          if (value) apply(value);
        }} /></div> : <div className="grid grid-cols-3 gap-3">
          {names.map((name, index) => <div key={`${format}-${name}`} className="space-y-2"><Label htmlFor={`${id}-${index}`}>{name}</Label><Input ref={index === 0 ? input : undefined} id={`${id}-${index}`} type="number" dir="ltr" min={0} max={format === 'rgb' ? 255 : index === 0 ? 360 : 100} step={format === 'rgb' ? 1 : 'any'} value={values[index]} aria-invalid={invalid} onChange={event => {
            const next: Channels = [...values];
            next[index] = event.target.value;
            setValues(next);
            const value = channelColor(next, format);
            if (value) apply(value);
          }} /></div>)}
        </div>}
      </div>
      <DialogFooter><Button onClick={() => setOpen(false)}>{closeLabel}</Button></DialogFooter>
    </DialogContent>
  </Dialog>;
}
