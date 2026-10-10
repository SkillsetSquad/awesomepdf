'use client';

import { useState, type ReactElement } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';

export interface DirectEditorBridge {
  getZoom(): number;
  setZoom(value: number): void;
  getDocDescription(): { meta: { name: string; size: number } | null; fields?: Record<string, string> };
}

function editor() { return (window as Window & { appModule?: DirectEditorBridge }).appModule; }
interface MenuProps { children: ReactElement; locale: string; labels: Record<string, string>; }

function text(props: MenuProps, key: string, english: string, chinese: string) {
  return props.labels[key] ?? (props.locale.startsWith('zh') ? chinese : english);
}

export function EditorEditMenu(props: MenuProps) {
  const [picked, setPicked] = useState(['all']);
  const scopes = [
    ['text', text(props, 'editText', 'Edit Text', '编辑文本')],
    ['image', text(props, 'editImages', 'Edit Images', '编辑图片')],
    ['shape', text(props, 'editShapes', 'Edit Shapes', '编辑形状')],
  ];
  const allLabel = text(props, 'editAll', 'Edit All', '编辑全部');
  const apply = (next: string[]) => {
    setPicked(next);
    const select = document.getElementById('editScope') as HTMLSelectElement | null;
    if (select) {
      const value = next.join(',');
      if (!Array.from(select.options).some(option => option.value === value)) select.add(new Option(value, value));
      select.value = value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
    const label = document.getElementById('editLabel');
    if (label) label.textContent = next.includes('all') ? allLabel : scopes.filter(([key]) => next.includes(key)).map(([, name]) => name).join(' + ');
  };
  return <DropdownMenu dir={props.locale === 'ar' ? 'rtl' : 'ltr'}>
    <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuCheckboxItem checked={picked.includes('all')} onCheckedChange={() => apply(['all'])} onSelect={event => event.preventDefault()}>{allLabel}</DropdownMenuCheckboxItem>
      {scopes.map(([key, name]) => <DropdownMenuCheckboxItem key={key} checked={picked.includes(key)} onCheckedChange={() => {
        const next = picked.filter(value => value !== 'all' && value !== key);
        if (!picked.includes(key)) next.push(key);
        apply(next.length === 0 || next.length === scopes.length ? ['all'] : next);
      }} onSelect={event => event.preventDefault()}>{name}</DropdownMenuCheckboxItem>)}
    </DropdownMenuContent>
  </DropdownMenu>;
}

export function EditorZoomMenu(props: MenuProps) {
  const [value, setValue] = useState('100');
  const fitPage = () => {
    const stage = document.getElementById('stage');
    const wrap = document.getElementById('pageWrap');
    const api = editor();
    if (!stage || !wrap || !api) return;
    const width = wrap.offsetWidth / api.getZoom();
    const height = wrap.offsetHeight / api.getZoom();
    if (width > 0 && height > 0) api.setZoom(Math.min((stage.clientWidth - 48) / width, (stage.clientHeight - 48) / height));
  };
  return <DropdownMenu dir={props.locale === 'ar' ? 'rtl' : 'ltr'} onOpenChange={open => { if (open) setValue(String(Math.round((editor()?.getZoom() ?? 1) * 100))); }}>
    <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuRadioGroup value={value} onValueChange={next => { setValue(next); editor()?.setZoom(Number(next) / 100); }}>
        {[50, 75, 100, 125, 150, 200, 400].map(percent => <DropdownMenuRadioItem key={percent} value={String(percent)}>{percent}%</DropdownMenuRadioItem>)}
      </DropdownMenuRadioGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem onSelect={fitPage}>{text(props, 'fitPage', 'Fit to Page', '适合页面')}</DropdownMenuItem>
      <DropdownMenuItem onSelect={() => document.getElementById('zoomFit')?.click()}>{text(props, 'fitWidth', 'Fit to Width', '适合宽度')}</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>;
}

export function EditorDocumentDialog(props: MenuProps) {
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState<ReturnType<DirectEditorBridge['getDocDescription']> | null>(null);
  return <Dialog open={open} onOpenChange={next => {
    if (next) {
      const current = editor()?.getDocDescription();
      if (!current?.meta) return;
      setDescription(current);
    }
    setOpen(next);
  }}>
    <DialogTrigger asChild>{props.children}</DialogTrigger>
    <DialogContent dir={props.locale === 'ar' ? 'rtl' : 'ltr'} showCloseButton={false}>
      <DialogHeader><DialogTitle>{text(props, 'docInfo', 'Document Properties', '文档属性')}</DialogTitle><DialogDescription>{description?.meta?.name}</DialogDescription></DialogHeader>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
        <dt className="text-muted-foreground">{text(props, 'size', 'Size', '大小')}</dt><dd>{((description?.meta?.size ?? 0) / 1024).toFixed(1)} KB</dd>
        {Object.entries(description?.fields ?? {}).filter(([, value]) => value).map(([key, value]) => <div key={key} className="col-span-2 grid grid-cols-subgrid"><dt className="text-muted-foreground">{key}</dt><dd className="break-words">{value}</dd></div>)}
      </dl>
      <DialogFooter><DialogClose asChild><Button variant="outline">{text(props, 'close', 'Close', '关闭')}</Button></DialogClose></DialogFooter>
    </DialogContent>
  </Dialog>;
}
