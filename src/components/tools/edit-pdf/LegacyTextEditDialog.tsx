'use client';

import { useEffect, useRef, useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import type { TextFitMode } from '@/lib/pdf/processors/replace-existing-text';

export interface LegacyTextSelection {
  requestId: number;
  text: string;
  labels: Record<string, string>;
}

export function LegacyTextEditDialog({ iframe, locale, cancelLabel, applyLabel }: {
  iframe: HTMLIFrameElement | null;
  locale: string;
  cancelLabel: string;
  applyLabel: string;
}) {
  const [selection, setSelection] = useState<LegacyTextSelection | null>(null);
  const currentSelection = useRef<LegacyTextSelection | null>(null);
  const [text, setText] = useState('');
  const [fitMode, setFitMode] = useState<TextFitMode>('preserve');
  const [overflow, setOverflow] = useState(false);
  const input = useRef<HTMLTextAreaElement>(null);
  const send = (type: string, payload: Record<string, unknown>) => iframe?.contentWindow?.postMessage({ type, payload }, window.location.origin);

  useEffect(() => {
    setSelection(null);
    currentSelection.current = null;
    const receive = (event: MessageEvent) => {
      if (event.origin !== window.location.origin || event.source !== iframe?.contentWindow) return;
      const { type, payload } = event.data ?? {};
      if (type === 'pdfcraft:select-existing-text' && payload && typeof payload.text === 'string' && Number.isFinite(payload.requestId)) {
        currentSelection.current = payload;
        setSelection(payload);
        setText(payload.text);
        setFitMode('preserve');
        setOverflow(false);
      } else if (type === 'pdfcraft:cancel-existing-text') {
        if (currentSelection.current?.requestId === payload?.requestId) {
          currentSelection.current = null;
          setSelection(null);
        }
      } else if (type === 'pdfcraft:text-overflow') {
        if (currentSelection.current?.requestId === payload?.requestId) setOverflow(Boolean(payload.overflow));
      }
    };
    window.addEventListener('message', receive);
    return () => window.removeEventListener('message', receive);
  }, [iframe]);

  const close = () => {
    if (selection) send('pdfcraft:close-existing-text', { requestId: selection.requestId });
    currentSelection.current = null;
    setSelection(null);
  };
  const labels = selection?.labels ?? {};
  return <Dialog open={selection !== null} onOpenChange={open => { if (!open) close(); }}>
    <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto" dir={locale === 'ar' ? 'rtl' : 'ltr'} showCloseButton={false}
      onOpenAutoFocus={event => { event.preventDefault(); input.current?.focus(); input.current?.select(); }}
      onCloseAutoFocus={event => { event.preventDefault(); iframe?.focus(); }}>
      <DialogHeader><DialogTitle>{labels.heading ?? 'Edit existing text'}</DialogTitle><DialogDescription>{labels.signature}</DialogDescription></DialogHeader>
      <form className="space-y-4" onSubmit={event => {
        event.preventDefault();
        if (!selection || text === selection.text) { close(); return; }
        send('pdfcraft:apply-existing-text', { requestId: selection.requestId, replacementText: text, fitMode });
        currentSelection.current = null;
        setSelection(null);
      }}>
        <div className="space-y-2"><p className="text-sm font-medium">{labels.original ?? 'Original text'}</p><p className="max-h-24 overflow-auto rounded-md border bg-muted p-3 text-sm">{selection?.text}</p></div>
        <div className="space-y-2"><Label htmlFor="legacy-replacement-text">{labels.replacement ?? 'New text'}</Label><Textarea ref={input} id="legacy-replacement-text" value={text} onChange={event => {
          setText(event.target.value);
          if (selection) send('pdfcraft:preview-existing-text', { requestId: selection.requestId, text: event.target.value });
        }} /></div>
        {overflow && <Alert role="status"><Info aria-hidden="true" /><AlertDescription>{labels.overflow}</AlertDescription></Alert>}
        <div className="space-y-2"><Label htmlFor="legacy-text-fit">{labels.fit ?? 'If it does not fit'}</Label><NativeSelect id="legacy-text-fit" value={fitMode} onChange={event => setFitMode(event.target.value as TextFitMode)}>
          <NativeSelectOption value="preserve">{labels.preserve ?? 'Keep original size'}</NativeSelectOption>
          <NativeSelectOption value="shrink">{labels.shrink ?? 'Shrink to fit'}</NativeSelectOption>
          <NativeSelectOption value="expand">{labels.expand ?? 'Expand the area'}</NativeSelectOption>
        </NativeSelect></div>
        <DialogFooter><Button type="button" variant="outline" onClick={close}>{cancelLabel}</Button><Button type="submit">{applyLabel}</Button></DialogFooter>
      </form>
    </DialogContent>
  </Dialog>;
}
