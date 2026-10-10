'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface EditorInputRequest {
  kind: 'password' | 'altText';
  retry?: boolean;
  value?: string;
  handled: boolean;
  respond: (value: string | null) => void;
}

export function EditorInputDialog({ labels, locale }: { labels: Record<string, string>; locale: string }) {
  const [request, setRequest] = useState<EditorInputRequest | null>(null);
  const [value, setValue] = useState('');
  const pending = useRef<EditorInputRequest | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const input = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const text = (key: string, fallback: string) => labels[key] ?? fallback;

  useEffect(() => {
    const receive = (event: Event) => {
      const next = (event as CustomEvent<EditorInputRequest>).detail;
      next.handled = true;
      pending.current?.respond(null);
      pending.current = next;
      const active = document.activeElement;
      if (active instanceof HTMLElement && !active.closest('[data-slot="dialog-content"]')) trigger.current = active;
      setValue(next.value ?? '');
      setRequest(next);
    };
    window.addEventListener('PDFCRAFT_EDITOR_INPUT', receive);
    return () => {
      window.removeEventListener('PDFCRAFT_EDITOR_INPUT', receive);
      pending.current?.respond(null);
      pending.current = null;
    };
  }, []);

  const finish = (result: string | null) => {
    const current = pending.current;
    pending.current = null;
    setRequest(null);
    current?.respond(result);
  };
  const password = request?.kind === 'password';
  const title = password ? text('passwordTitle', 'Enter Password') : text('altTextTitle', 'Image alt text');

  return <Dialog open={request !== null} onOpenChange={open => { if (!open) finish(null); }}>
    <DialogContent dir={locale === 'ar' ? 'rtl' : 'ltr'} showCloseButton={false}
      onOpenAutoFocus={event => { event.preventDefault(); input.current?.focus(); }}
      onCloseAutoFocus={event => { event.preventDefault(); trigger.current?.focus(); }}>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{password
          ? request?.retry ? text('invalidPassword', 'Incorrect password. Please try again.') : text('passwordDescription', 'Enter the password to open this PDF.')
          : text('altTextDescription', 'Describe the image for people using screen readers. This text is applied when you save the PDF.')}</DialogDescription>
      </DialogHeader>
      <form className="space-y-4" onSubmit={event => { event.preventDefault(); finish(value); }}>
        <div className="space-y-2">
          <Label htmlFor="editor-input-value">{password ? text('passwordLabel', 'PDF Password') : title}</Label>
          {password
            ? <Input ref={element => { input.current = element; }} id="editor-input-value" type="password" autoComplete="off" value={value} onChange={event => setValue(event.target.value)} />
            : <Textarea ref={element => { input.current = element; }} id="editor-input-value" value={value} onChange={event => setValue(event.target.value)} />}
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={() => finish(null)}>{text('cancel', 'Cancel')}</Button>
          <Button type="submit">{text('apply', 'Apply')}</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>;
}
