'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Stamp, Plus, CircleAlert, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileUploader } from '../FileUploader';
import { AnnotationColorControl } from './AnnotationColorControl';
import { readAnnotationImage } from './AnnotationSignatureControl';

export interface StampValues {
  stampText: string; fontStyle: string[]; fontFamily: string; textColor: string;
  backgroundColor: string | null; borderColor: string | null; borderStyle: 'solid' | 'dashed';
  timestamp: string[]; customTimestampText: string; dateFormat: string;
}
export interface AnnotationStampOptions {
  open: boolean; onOpenChange(open: boolean): void; creating: boolean; onCreate(): void; onBack(): void;
  gallery: string; onGalleryChange(value: string): void;
  defaults: string[]; saved: string[]; onChoose(image: string): void; onUpload(image: string): void;
  values: StampValues; onValuesChange(changes: Partial<StampValues>): void; onConfirm(): void;
  canvasRef: { current: HTMLDivElement | null }; stageRef: { current: { destroy(): void } | null }; render(): void;
  fonts: { label: string; value: string }[]; colors: string[]; dateFormats: { label: string; value: string }[];
  width: number; height: number; maxSize: number; accept: string; maxImageSize: number;
}
export interface AnnotationStampLabels {
  description: string; defaults: string; saved: string; create: string; text: string; font: string;
  textColor: string; background: string; border: string; borderStyle: string; solid: string; dashed: string;
  bold: string; italic: string; underline: string; strikeout: string;
  author: string; date: string; dateFormat: string; customTimestamp: string;
  upload: string; back: string; cancel: string; add: string; error: string; retry: string; empty: string; colorFormat: string; opacity: string; close: string;
}

function StampPreview({ options, onError, label }: { options: AnnotationStampOptions; onError: () => void; label: string }) {
  const { canvasRef, stageRef, values } = options;
  const draw = useRef(options.render); draw.current = options.render;
  const fail = useRef(onError); fail.current = onError;
  const mount = useCallback((node: HTMLDivElement | null) => { canvasRef.current = node; }, [canvasRef]);
  useEffect(() => {
    try { draw.current(); } catch { fail.current(); }
    return () => { stageRef.current?.destroy(); stageRef.current = null; };
  }, [values, stageRef]);
  return <div className="overflow-x-auto rounded-md border bg-white" role="img" aria-label={label}><div ref={mount} style={{ width: options.width, height: options.height }} /></div>;
}

function StampColor({ value, optional, defaultValue, label, labels, colors, direction, onChange }: {
  value: string | null; optional: boolean; defaultValue: string; label: string; labels: AnnotationStampLabels; colors: string[];
  direction: 'ltr' | 'rtl'; onChange: (value: string | null) => void;
}) {
  const id = useId();
  const previous = useRef(value ?? defaultValue); if (value !== null) previous.current = value;
  return <div className="space-y-2">
    {optional && <div className="flex items-center gap-2"><Checkbox id={id} checked={value !== null} onCheckedChange={checked => onChange(checked ? previous.current : null)} /><Label htmlFor={id}>{label}</Label></div>}
    <AnnotationColorControl options={{ value: value ?? previous.current, presets: colors, allowAlpha: true, onChange }}
      label={label} disabled={value === null} direction={direction} formatLabel={labels.colorFormat} closeLabel={labels.close} opacityLabel={labels.opacity} />
  </div>;
}

export function AnnotationStampControl({ options, label, labels, direction, pressed }: {
  options: AnnotationStampOptions; label: string; labels: AnnotationStampLabels; direction: 'ltr' | 'rtl'; pressed: boolean;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const createButton = useRef<HTMLButtonElement>(null);
  const upload = useRef<AbortController | null>(null);
  const current = useRef(options); current.current = options;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    upload.current?.abort(); upload.current = null; setError(false); setLoading(false);
    return () => upload.current?.abort();
  }, [options.open, options.gallery, options.creating]);
  useEffect(() => {
    if (!options.open) return;
    if (options.creating) (document.getElementById(`${id}-text`) as HTMLInputElement | null)?.focus();
    else createButton.current?.focus();
  }, [id, options.open, options.creating]);
  const loadImage = async (files: File[]) => {
    if (!files[0]) return;
    upload.current?.abort(); const controller = new AbortController(); upload.current = controller; setError(false); setLoading(true);
    try {
      const image = await readAnnotationImage(files[0], options.maxImageSize, controller.signal);
      if (!controller.signal.aborted && current.current.open && current.current.gallery === 'upload') current.current.onUpload(image);
    } catch { if (!controller.signal.aborted) setError(true); }
    finally { if (upload.current === controller) setLoading(false); }
  };
  const update = (changes: Partial<StampValues>) => { setError(false); options.onValuesChange(changes); };
  const toggle = (field: 'fontStyle' | 'timestamp', value: string, checked: boolean) => update({ [field]: checked ? [...options.values[field], value] : options.values[field].filter(item => item !== value) });
  const gallery = (images: string[], name: string) => images.length === 0 ? <p className="py-3 text-sm text-muted-foreground" role="status">{labels.empty}</p> : <div className="grid grid-cols-2 gap-2 sm:grid-cols-3" role="group" aria-label={name}>
    {images.map((image, index) => <Button key={`${index}-${image.length}`} variant="outline" className="h-24 bg-white p-2" aria-label={`${name} ${index + 1}`} onClick={() => options.onChoose(image)}><img src={image} alt="" className="max-h-full max-w-full object-contain" /></Button>)}
  </div>;
  return <Dialog open={options.open} onOpenChange={options.onOpenChange}>
    <DialogTrigger asChild><Button ref={trigger} size="sm" dir={direction} variant={pressed ? 'secondary' : 'ghost'} aria-pressed={pressed} onClick={event => event.stopPropagation()} onKeyDown={event => event.stopPropagation()}><Stamp aria-hidden="true" />{label}</Button></DialogTrigger>
    <DialogContent dir={direction} showCloseButton={false} className="max-h-[calc(100dvh-2rem)] overflow-y-auto" onCloseAutoFocus={event => { event.preventDefault(); trigger.current?.focus(); }}>
      <DialogHeader><DialogTitle>{options.creating ? labels.create : label}</DialogTitle><DialogDescription>{labels.description}</DialogDescription></DialogHeader>
      {options.creating ? <div className="space-y-4">
        <StampPreview options={options} label={label} onError={() => setError(true)} />
        <div className="space-y-2"><Label htmlFor={`${id}-text`}>{labels.text}</Label><Input id={`${id}-text`} value={options.values.stampText} onChange={event => update({ stampText: event.target.value })} /></div>
        <div className="space-y-2"><Label htmlFor={`${id}-font`}>{labels.font}</Label><NativeSelect id={`${id}-font`} value={options.values.fontFamily} onChange={event => update({ fontFamily: event.target.value })}>{options.fonts.map(font => <NativeSelectOption key={font.value} value={font.value}>{font.label}</NativeSelectOption>)}</NativeSelect></div>
        <div className="flex flex-wrap gap-4">{(['bold', 'italic', 'underline', 'strikeout'] as const).map(style => <div key={style} className="flex items-center gap-2"><Checkbox id={`${id}-${style}`} checked={options.values.fontStyle.includes(style)} onCheckedChange={checked => toggle('fontStyle', style, checked === true)} /><Label htmlFor={`${id}-${style}`}>{labels[style]}</Label></div>)}</div>
        <div className="grid gap-3 sm:grid-cols-2">
          <StampColor value={options.values.textColor} optional={false} defaultValue="#ffffff" label={labels.textColor} labels={labels} colors={['#ffffff', '#000000', ...options.colors]} direction={direction} onChange={value => update({ textColor: value ?? '#ffffff' })} />
          <StampColor value={options.values.backgroundColor} optional defaultValue="#00b445" label={labels.background} labels={labels} colors={options.colors} direction={direction} onChange={value => update({ backgroundColor: value })} />
          <StampColor value={options.values.borderColor} optional defaultValue="#000000" label={labels.border} labels={labels} colors={options.colors} direction={direction} onChange={value => update({ borderColor: value })} />
          <div className="space-y-2"><Label htmlFor={`${id}-border`}>{labels.borderStyle}</Label><NativeSelect id={`${id}-border`} value={options.values.borderStyle} onChange={event => update({ borderStyle: event.target.value as StampValues['borderStyle'] })}><NativeSelectOption value="solid">{labels.solid}</NativeSelectOption><NativeSelectOption value="dashed">{labels.dashed}</NativeSelectOption></NativeSelect></div>
        </div>
        <div className="flex flex-wrap gap-4">{(['username', 'date'] as const).map(part => <div key={part} className="flex items-center gap-2"><Checkbox id={`${id}-${part}`} checked={options.values.timestamp.includes(part)} onCheckedChange={checked => toggle('timestamp', part, checked === true)} /><Label htmlFor={`${id}-${part}`}>{part === 'username' ? labels.author : labels.date}</Label></div>)}</div>
        <div className="space-y-2"><Label htmlFor={`${id}-date`}>{labels.dateFormat}</Label><NativeSelect id={`${id}-date`} value={options.values.dateFormat} onChange={event => update({ dateFormat: event.target.value })}>{options.dateFormats.map(format => <NativeSelectOption key={format.value} value={format.value}>{format.label}</NativeSelectOption>)}</NativeSelect></div>
        <div className="space-y-2"><Label htmlFor={`${id}-timestamp`}>{labels.customTimestamp}</Label><Input id={`${id}-timestamp`} value={options.values.customTimestampText} onChange={event => update({ customTimestampText: event.target.value })} /></div>
      </div> : <Tabs value={options.gallery} onValueChange={options.onGalleryChange} dir={direction}>
        <TabsList className="w-full"><TabsTrigger value="default">{labels.defaults}</TabsTrigger><TabsTrigger value="custom">{labels.saved}</TabsTrigger><TabsTrigger value="upload">{labels.upload}</TabsTrigger></TabsList>
        <TabsContent value="default">{gallery(options.defaults, labels.defaults)}</TabsContent>
        <TabsContent value="custom" className="space-y-3">{gallery(options.saved, labels.saved)}<Button ref={createButton} variant="outline" className="w-full" onClick={options.onCreate}><Plus aria-hidden="true" />{labels.create}</Button></TabsContent>
        <TabsContent value="upload"><FileUploader accept={options.accept.split(',')} maxSize={options.maxSize} multiple={false} onFilesSelected={files => void loadImage(files)} onError={() => setError(true)} label={labels.upload} /></TabsContent>
      </Tabs>}
      {loading && <div className="flex items-center gap-2 text-sm text-muted-foreground" role="status"><Loader2 className="size-4 animate-spin" aria-hidden="true" />{labels.upload}</div>}
      {error && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{labels.error}{options.creating && <Button variant="outline" size="sm" onClick={() => { setError(false); try { options.render(); } catch { setError(true); } }}>{labels.retry}</Button>}</AlertDescription></Alert>}
      <DialogFooter>{options.creating && <Button variant="outline" onClick={options.onBack}>{labels.back}</Button>}<Button variant="outline" onClick={() => options.onOpenChange(false)}>{labels.cancel}</Button>{options.creating && <Button disabled={error} onClick={() => { try { options.onConfirm(); } catch { setError(true); } }}>{labels.add}</Button>}</DialogFooter>
    </DialogContent>
  </Dialog>;
}
