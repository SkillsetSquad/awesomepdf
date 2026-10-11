'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Slider } from '@/components/ui/slider';

export interface AnnotationColorOptions {
  value: string;
  presets: string[];
  onChange: (color: string) => void;
  allowAlpha?: boolean;
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

function viewerColor(value: string): string | null {
  if (/^#[\da-f]{8}$/i.test(value.trim())) return value.trim().slice(0, 7).toLowerCase();
  if (/^#[\da-f]{4}$/i.test(value.trim())) return hexColor(value.trim().slice(0, 4));
  const hex = hexColor(value.trim());
  if (hex) return hex;
  // The annotation engine also stores colors as rgb()/rgba(). Its picker edits opaque RGB.
  const match = value.trim().match(/^rgba?\(([^)]+)\)$/i);
  if (!match) return null;
  const parts = match[1].split(',').map(part => part.trim());
  if (parts.length !== 3 && parts.length !== 4) return null;
  if (parts.some(part => !/^\d+(?:\.\d+)?$/.test(part))) return null;
  const values = parts.map(Number);
  if (values.slice(0, 3).some(channel => channel < 0 || channel > 255)) return null;
  if (values.length === 4 && (values[3] < 0 || values[3] > 1)) return null;
  return rgbHex(values.slice(0, 3));
}

function viewerOpacity(value: string): number {
  const input = value.trim();
  if (/^#[\da-f]{8}$/i.test(input)) return parseInt(input.slice(7), 16) / 255;
  if (/^#[\da-f]{4}$/i.test(input)) return parseInt(input.slice(4), 16) / 15;
  const match = input.match(/^rgba\([^,]+,[^,]+,[^,]+,\s*(\d+(?:\.\d+)?)\s*\)$/i);
  const opacity = match ? Number(match[1]) : 1;
  return opacity >= 0 && opacity <= 1 ? opacity : 1;
}

function colorWithOpacity(color: string, opacity: number): string {
  return opacity < 1 ? `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}` : color;
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
export function AnnotationColorControl({ options, label, disabled, direction, formatLabel, closeLabel, opacityLabel = 'Opacity' }: {
  options: AnnotationColorOptions;
  label: string;
  disabled: boolean;
  direction: 'ltr' | 'rtl';
  formatLabel: string;
  closeLabel: string;
  opacityLabel?: string;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(viewerColor(options.value) ?? '#000000');
  const [hex, setHex] = useState(color);
  const [format, setFormat] = useState<ColorFormat>('hex');
  const [values, setValues] = useState<Channels>(() => channels(color, 'rgb'));
  const [opacity, setOpacity] = useState(viewerOpacity(options.value));
  useEffect(() => { if (disabled) setOpen(false); }, [disabled]);
  const apply = (value: string, alpha = opacity) => { setColor(value); options.onChange(options.allowAlpha ? colorWithOpacity(value, alpha) : value); };
  const chooseColor = (value: string, preserveOpacity = false) => {
    const normalized = viewerColor(value);
    if (!normalized) return;
    setHex(normalized);
    setValues(channels(normalized, format));
    const alpha = preserveOpacity ? opacity : viewerOpacity(value);
    setOpacity(alpha); apply(normalized, alpha);
  };
  const alphaHex = options.allowAlpha && /^#(?:[\da-f]{4}|[\da-f]{8})$/i.test(hex);
  const invalid = format === 'hex' ? !hexColor(hex) && !alphaHex : !channelColor(values, format);
  const names = format === 'rgb' ? ['R', 'G', 'B'] : ['H (°)', 'S (%)', 'B (%)'];
  return <Dialog open={open && !disabled} onOpenChange={value => {
    setOpen(value);
    if (value) {
      const initial = viewerColor(options.value) ?? '#000000';
      setColor(initial); setHex(initial); setValues(channels(initial, format)); setOpacity(viewerOpacity(options.value));
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
          {options.presets.map(value => <Button key={value} variant="outline" size="icon-sm" aria-label={`${label}: ${value}`} aria-pressed={viewerColor(value) === color && (!options.allowAlpha || viewerOpacity(value) === opacity)} onClick={() => chooseColor(value)}>
            <span className="size-4 rounded-sm border" style={{ backgroundColor: value }} aria-hidden="true" />
          </Button>)}
        </div>
        <div className="space-y-2"><Label htmlFor={`${id}-color`}>{label}</Label><Input type="color" id={`${id}-color`} value={color} onChange={event => chooseColor(event.target.value, true)} /></div>
        <div className="space-y-2"><Label htmlFor={`${id}-format`}>{formatLabel}</Label><NativeSelect id={`${id}-format`} value={format} onChange={event => {
          const next = event.target.value as ColorFormat;
          setFormat(next); setHex(color); setValues(channels(color, next));
        }}><NativeSelectOption value="hex">HEX</NativeSelectOption><NativeSelectOption value="rgb">RGB</NativeSelectOption><NativeSelectOption value="hsb">HSB</NativeSelectOption></NativeSelect></div>
        {format === 'hex' ? <div className="space-y-2"><Label htmlFor={`${id}-hex`}>{label} (HEX)</Label><Input ref={input} id={`${id}-hex`} value={hex} dir="ltr" aria-invalid={invalid} onChange={event => {
          setHex(event.target.value);
          const alphaValue = options.allowAlpha && /^#(?:[\da-f]{4}|[\da-f]{8})$/i.test(event.target.value);
          const value = hexColor(event.target.value) ?? (alphaValue ? viewerColor(event.target.value) : null);
          if (value) {
            const alpha = alphaValue ? viewerOpacity(event.target.value) : opacity;
            setOpacity(alpha); apply(value, alpha);
          }
        }} /></div> : <div className="grid grid-cols-3 gap-3">
          {names.map((name, index) => <div key={`${format}-${name}`} className="space-y-2"><Label htmlFor={`${id}-${index}`}>{name}</Label><Input ref={index === 0 ? input : undefined} id={`${id}-${index}`} type="number" dir="ltr" min={0} max={format === 'rgb' ? 255 : index === 0 ? 360 : 100} step={format === 'rgb' ? 1 : 'any'} value={values[index]} aria-invalid={invalid} onChange={event => {
            const next: Channels = [...values];
            next[index] = event.target.value;
            setValues(next);
            const value = channelColor(next, format);
            if (value) apply(value);
          }} /></div>)}
        </div>}
        {options.allowAlpha && <div className="space-y-2"><Label id={`${id}-opacity`}>{opacityLabel} ({Math.round(opacity * 100)}%)</Label><Slider dir={direction} min={0} max={100} step={1} value={[Math.round(opacity * 100)]} aria-labelledby={`${id}-opacity`} onValueChange={([value]) => {
          const alpha = value / 100; setOpacity(alpha); setHex(color); apply(color, alpha);
        }} /></div>}
      </div>
      <DialogFooter><Button onClick={() => setOpen(false)}>{closeLabel}</Button></DialogFooter>
    </DialogContent>
  </Dialog>;
}
