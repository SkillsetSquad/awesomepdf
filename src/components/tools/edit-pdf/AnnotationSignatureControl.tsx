'use client';

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { PenLine, Loader2, CircleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileUploader } from '../FileUploader';

interface SignatureStage { destroy(): void }
export interface AnnotationSignatureOptions {
  open: boolean; onOpenChange(open: boolean): void;
  mode: 'Draw' | 'Enter' | 'Upload'; onModeChange(mode: string): void;
  value: string; onTextChange(value: string): void;
  font: string; onFontChange(value: string): Promise<unknown>;
  fontLoading: boolean; fontError: boolean;
  fonts: { label: string; value: string }[];
  color: string; onColorChange(value: string): void; colors: string[];
  saved: string[]; onChoose(image: string): void;
  onConfirm(): void; onClear(): void; disabled: boolean;
  image: string | null; onImageChange(image: string): void;
  canvasRef: { current: HTMLDivElement | null }; stageRef: { current: SignatureStage | null }; ensureCanvas(): void;
  width: number; height: number; maxSize: number; accept: string; maxImageSize: number;
  preview: string | null;
}
export interface AnnotationSignatureLabels {
  description: string; draw: string; type: string; upload: string; saved: string; text: string;
  font: string; color: string; clear: string; add: string; cancel: string; image: string; error: string;
}

/** The native signature stage still owns strokes, fonts and the resulting placement image. */
function SignatureDrawing({ options, label }: { options: AnnotationSignatureOptions; label: string }) {
  const { canvasRef, stageRef, ensureCanvas, width, height } = options;
  const ensure = useRef(ensureCanvas); ensure.current = ensureCanvas;
  const mount = useCallback((node: HTMLDivElement | null) => {
    canvasRef.current = node;
    if (node) ensure.current();
    else { stageRef.current?.destroy(); stageRef.current = null; }
  }, [canvasRef, stageRef]);
  return <div className="overflow-x-auto rounded-md border bg-white" role="img" aria-label={label}>
    <div ref={mount} style={{ width, height }} />
  </div>;
}

/** Read an image locally and preserve the engine's bounded, transparent PNG conversion. */
export function readAnnotationImage(file: File, maximum: number, signal: AbortSignal): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const image = new Image();
    const finish = (error?: unknown, value?: string) => {
      signal.removeEventListener('abort', abort);
      reader.onload = null; reader.onerror = null; image.onload = null; image.onerror = null;
      if (error) reject(error); else resolve(value!);
    };
    const abort = () => { reader.abort(); image.src = ''; finish(new DOMException('Cancelled', 'AbortError')); };
    signal.addEventListener('abort', abort, { once: true });
    if (signal.aborted) { abort(); return; }
    reader.onerror = () => finish(reader.error ?? new Error('Image could not be read.'));
    image.onerror = () => finish(new Error('Image could not be decoded.'));
    image.onload = () => {
      try {
        const scale = Math.min(1, maximum / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(image.width * scale); canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext('2d');
        if (!context || !canvas.width || !canvas.height) throw new Error('Image could not be rendered.');
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        const png = canvas.toDataURL('image/png'); canvas.width = canvas.height = 0;
        finish(undefined, png);
      } catch (error) { finish(error); }
    };
    reader.onload = () => { image.src = String(reader.result); };
    reader.readAsDataURL(file);
  });
}

export function AnnotationSignatureControl({ options, label, labels, direction, pressed }: {
  options: AnnotationSignatureOptions; label: string; labels: AnnotationSignatureLabels; direction: 'ltr' | 'rtl'; pressed: boolean;
}) {
  const id = useId();
  const trigger = useRef<HTMLButtonElement>(null);
  const upload = useRef<AbortController | null>(null);
  const fontRun = useRef(0);
  const current = useRef(options); current.current = options;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fontLoading, setFontLoading] = useState(false);
  const fontBusy = fontLoading || options.fontLoading;
  useEffect(() => {
    upload.current?.abort(); upload.current = null; setLoading(false); setError(false);
    fontRun.current++; setFontLoading(false);
    return () => { upload.current?.abort(); };
  }, [options.open, options.mode]);
  const chooseFont = async (value: string) => {
    const run = ++fontRun.current;
    setError(false); setFontLoading(true);
    try { await options.onFontChange(value); }
    catch { if (run === fontRun.current) setError(true); }
    finally { if (run === fontRun.current) setFontLoading(false); }
  };
  const loadImage = async (files: File[]) => {
    if (!files[0]) return;
    upload.current?.abort(); const controller = new AbortController(); upload.current = controller;
    setLoading(true); setError(false);
    try {
      const image = await readAnnotationImage(files[0], options.maxImageSize, controller.signal);
      if (!controller.signal.aborted && current.current.open && current.current.mode === 'Upload') current.current.onImageChange(image);
    } catch { if (!controller.signal.aborted) setError(true); }
    finally { if (upload.current === controller) setLoading(false); }
  };
  return <Dialog open={options.open} onOpenChange={options.onOpenChange}>
    <DialogTrigger asChild><Button ref={trigger} size="sm" variant={pressed ? 'secondary' : 'ghost'} dir={direction} aria-pressed={pressed}
      onClick={event => event.stopPropagation()} onKeyDown={event => event.stopPropagation()}><PenLine aria-hidden="true" />{label}</Button></DialogTrigger>
    <DialogContent dir={direction} showCloseButton={false} className="max-h-[calc(100dvh-2rem)] overflow-y-auto" onCloseAutoFocus={event => { event.preventDefault(); trigger.current?.focus(); }}>
      <DialogHeader><DialogTitle>{label}</DialogTitle><DialogDescription>{labels.description}</DialogDescription></DialogHeader>
      {options.saved.length > 0 && <div className="space-y-2"><Label>{labels.saved}</Label><div className="grid grid-cols-2 gap-2" role="group" aria-label={labels.saved}>
        {options.saved.map((image, index) => <Button key={`${index}-${image.length}`} variant="outline" className="h-20 bg-white p-2" aria-label={`${labels.saved} ${index + 1}`} onClick={() => options.onChoose(image)}><img className="max-h-full max-w-full object-contain" src={image} alt="" /></Button>)}
      </div></div>}
      <Tabs value={options.mode} onValueChange={options.onModeChange} dir={direction}>
        <TabsList className="w-full"><TabsTrigger value="Draw">{labels.draw}</TabsTrigger><TabsTrigger value="Enter">{labels.type}</TabsTrigger><TabsTrigger value="Upload">{labels.upload}</TabsTrigger></TabsList>
        <TabsContent value="Draw"><SignatureDrawing options={options} label={labels.draw} /></TabsContent>
        <TabsContent value="Enter" className="space-y-3">
          <div className="space-y-2"><Label htmlFor={`${id}-text`}>{labels.text}</Label><Input id={`${id}-text`} value={options.value} onChange={event => options.onTextChange(event.target.value)} /></div>
          <div className="space-y-2"><Label htmlFor={`${id}-font`}>{labels.font}</Label><NativeSelect id={`${id}-font`} value={options.font} aria-busy={fontBusy} onChange={event => void chooseFont(event.target.value)}>
            {options.fonts.map(font => <NativeSelectOption key={font.value} value={font.value}>{font.label}</NativeSelectOption>)}
          </NativeSelect></div>
          {fontBusy && <div className="flex items-center gap-2 text-sm text-muted-foreground" role="status"><Loader2 className="size-4 animate-spin" aria-hidden="true" />{labels.font}</div>}
          {options.preview && <div className="flex min-h-24 justify-center rounded-md border bg-white p-2"><img src={options.preview} alt={labels.text} className="max-h-40 max-w-full object-contain" /></div>}
        </TabsContent>
        <TabsContent value="Upload" className="space-y-3">
          <FileUploader accept={options.accept.split(',')} maxSize={options.maxSize} multiple={false} onFilesSelected={files => void loadImage(files)} onError={() => setError(true)} label={labels.upload} />
          {loading && <div className="flex items-center gap-2 text-sm text-muted-foreground" role="status"><Loader2 className="size-4 animate-spin" aria-hidden="true" />{labels.upload}</div>}
          {options.image && <div className="flex justify-center rounded-md border bg-white p-2"><img src={options.image} alt={labels.image} className="max-h-40 max-w-full object-contain" /></div>}
        </TabsContent>
      </Tabs>
      {options.mode !== 'Upload' && <div className="space-y-2"><Label>{labels.color}</Label><div className="flex flex-wrap gap-2" role="group" aria-label={labels.color}>
        {options.colors.map(color => <Button key={color} size="icon-sm" variant="outline" aria-label={`${labels.color}: ${color}`} aria-pressed={color === options.color} onClick={() => options.onColorChange(color)}><span className="size-4 rounded-sm border" style={{ backgroundColor: color }} aria-hidden="true" /></Button>)}
      </div></div>}
      {(error || options.fontError) && <Alert variant="destructive"><CircleAlert aria-hidden="true" /><AlertDescription>{labels.error}</AlertDescription></Alert>}
      <DialogFooter>
        <Button variant="outline" onClick={() => { upload.current?.abort(); setError(false); setLoading(false); options.onClear(); }}>{labels.clear}</Button>
        <Button variant="outline" onClick={() => options.onOpenChange(false)}>{labels.cancel}</Button>
        <Button disabled={options.disabled || loading || (options.mode === 'Enter' && fontBusy)} onClick={() => { try { options.onConfirm(); } catch { setError(true); } }}>{labels.add}</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>;
}
