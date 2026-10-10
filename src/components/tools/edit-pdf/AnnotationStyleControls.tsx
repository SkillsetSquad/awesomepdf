'use client';

import { useId, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { AnnotationColorControl } from './AnnotationColorControl';

export interface AnnotationStyleChange {
  color?: string;
  strokeWidth?: number;
  opacity?: number;
}

export interface AnnotationStyleOptions {
  id: string;
  color: string;
  strokeWidth: number;
  opacity: number;
  presets: string[];
  editable: { color?: boolean; strokeWidth?: boolean; opacity?: boolean };
  onChange: (style: AnnotationStyleChange) => void;
  onBack: () => void;
}

export interface AnnotationStyleLabels {
  title: string;
  color: string;
  strokeWidth: string;
  opacity: string;
  back: string;
  format: string;
  close: string;
}

/** Reuses the selected annotation's native style callbacks and supported settings. */
export function AnnotationStyleControls({ options, labels, direction }: {
  options: AnnotationStyleOptions;
  labels: AnnotationStyleLabels;
  direction: 'ltr' | 'rtl';
}) {
  const id = useId();
  const back = useRef<HTMLButtonElement>(null);
  const returnToActions = () => {
    const doc = back.current?.ownerDocument;
    options.onBack();
    doc?.defaultView?.setTimeout(() => {
      if (doc.activeElement === doc.body) {
        (doc.querySelector<HTMLButtonElement>('[data-annotation-action="style"] [data-slot="button"]')
          ?? doc.querySelector<HTMLElement>('.CustomAnnotationMenu .buttons [data-slot="button"]')
          ?? doc.querySelector<HTMLElement>('#viewerContainer'))?.focus();
      }
    }, 0);
  };
  return <section className="w-56 max-w-[calc(100vw-2rem)] space-y-4 p-2" dir={direction} aria-label={labels.title}
    onMouseDown={event => event.stopPropagation()} onClick={event => event.stopPropagation()} onKeyDown={event => event.stopPropagation()} onKeyDownCapture={event => {
      // Dialog keystrokes originate in the parent document and belong to that dialog.
      if (event.key === 'Escape' && (event.target as HTMLElement).ownerDocument === event.currentTarget.ownerDocument) {
        event.preventDefault();
        event.stopPropagation();
        returnToActions();
      }
    }}>
    {options.editable.color && <AnnotationColorControl key={options.id} options={{ value: options.color, presets: options.presets, onChange: color => options.onChange({ color }) }}
      label={labels.color} disabled={false} direction={direction} formatLabel={labels.format} closeLabel={labels.close} />}
    {options.editable.strokeWidth && <div className="space-y-3">
      <Label id={`${id}-stroke`}>{labels.strokeWidth} <span className="ms-auto tabular-nums">{options.strokeWidth}</span></Label>
      <Slider aria-labelledby={`${id}-stroke`} value={[options.strokeWidth]} min={1} max={20} step={1} dir={direction}
        onValueChange={([strokeWidth]) => options.onChange({ strokeWidth })} />
    </div>}
    {options.editable.opacity && <div className="space-y-3">
      <Label id={`${id}-opacity`}>{labels.opacity} <span className="ms-auto tabular-nums">{options.opacity}%</span></Label>
      <Slider aria-labelledby={`${id}-opacity`} aria-valuetext={`${options.opacity}%`} value={[options.opacity]} min={0} max={100} step={1} dir={direction}
        onValueChange={([opacity]) => options.onChange({ opacity: opacity / 100 })} />
    </div>}
    <Button ref={back} variant="outline" size="sm" onClick={returnToActions}><ArrowLeft aria-hidden="true" className="rtl:rotate-180" />{labels.back}</Button>
  </section>;
}
