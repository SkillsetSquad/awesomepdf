'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Undo2, Redo2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createAnnotationHistory, isAnnotationHistoryEngine, type AnnotationHistoryState } from '@/lib/pdf/annotation-history';

export function AnnotationHistoryControls({ iframe, undo, redo, onError }: {
  iframe: HTMLIFrameElement | null; undo: string; redo: string; onError: () => void;
}) {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [state, setState] = useState<AnnotationHistoryState>({ canUndo: false, canRedo: false });
  const [history, setHistory] = useState<ReturnType<typeof createAnnotationHistory> | null>(null);
  const undoButton = useRef<HTMLButtonElement>(null);
  const redoButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const doc = iframe?.contentDocument;
    const viewer = doc?.defaultView;
    if (!doc || !viewer) return;
    let controller: ReturnType<typeof createAnnotationHistory> | null = null;
    let anchor: HTMLElement | null = null;
    const connect = () => {
      if (controller) { controller.capture(); return; }
      const engine: unknown = (viewer as Window & { pdfjsAnnotationExtensionInstance?: unknown }).pdfjsAnnotationExtensionInstance;
      const toolbar = doc.querySelector('.CustomToolbar ul.buttons');
      if (!toolbar || !isAnnotationHistoryEngine(engine)) return;
      controller = createAnnotationHistory(engine, setState);
      anchor = doc.createElement('li');
      anchor.dataset.awsomepdfControl = 'true';
      anchor.className = '!w-auto !h-auto';
      toolbar.prepend(anchor);
      setMount(anchor); setHistory(controller);
    };
    connect();
    const timer = viewer.setInterval(connect, 1000);
    const keydown = (event: KeyboardEvent) => {
      if (!controller || (!event.ctrlKey && !event.metaKey) || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest('input, textarea, select, [contenteditable]:not([contenteditable=false])')) return;
      const key = event.key.toLowerCase();
      if (key !== 'z' && key !== 'y') return;
      try {
        const changed = key === 'y' || event.shiftKey ? controller.redo() : controller.undo();
        if (changed) event.preventDefault();
      } catch { event.preventDefault(); onError(); }
    };
    doc.addEventListener('keydown', keydown);
    return () => {
      viewer.clearInterval(timer); doc.removeEventListener('keydown', keydown);
      controller?.dispose(); anchor?.remove(); setMount(null); setHistory(null);
    };
  }, [iframe, onError]);
  if (!mount || !history) return null;
  const perform = (action: 'undo' | 'redo') => {
    const button = action === 'undo' ? undoButton.current : redoButton.current;
    const focused = button?.ownerDocument.activeElement === button;
    try { history[action](); } catch { onError(); }
    if (focused) button?.ownerDocument.defaultView?.setTimeout(() => {
      if (!button.isConnected) return;
      (button.disabled ? action === 'undo' ? redoButton.current : undoButton.current : button)?.focus();
    }, 0);
  };
  return createPortal(<div className="flex items-center gap-1">
    <Button ref={undoButton} type="button" size="sm" variant="ghost" disabled={!state.canUndo} onClick={() => perform('undo')}><Undo2 aria-hidden="true" />{undo}</Button>
    <Button ref={redoButton} type="button" size="sm" variant="ghost" disabled={!state.canRedo} onClick={() => perform('redo')}><Redo2 aria-hidden="true" />{redo}</Button>
  </div>, mount);
}
