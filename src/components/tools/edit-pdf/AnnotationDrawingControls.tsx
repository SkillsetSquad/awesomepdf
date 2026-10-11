'use client';

import { useEffect } from 'react';
import { connectAnnotationDrawing, isAnnotationDrawingEngine } from '@/lib/pdf/annotation-drawing';

/** The engine owns the drawings; this lifecycle adapter adds snapping and cloud completion. */
export function AnnotationDrawingControls({ iframe, onError }: { iframe: HTMLIFrameElement | null; onError: () => void }) {
  useEffect(() => {
    if (!iframe) return;
    let controller: ReturnType<typeof connectAnnotationDrawing> | null = null;
    let connectedEngine: unknown, connectedDocument: Document | null = null;
    const connect = () => {
      const doc = iframe.contentDocument;
      const engine: unknown = (doc?.defaultView as (Window & { pdfjsAnnotationExtensionInstance?: unknown }) | null)?.pdfjsAnnotationExtensionInstance;
      if (engine !== connectedEngine || doc !== connectedDocument) {
        controller?.dispose(); controller = null;
        connectedEngine = engine; connectedDocument = doc;
        if (doc && isAnnotationDrawingEngine(engine)) controller = connectAnnotationDrawing(engine, doc, onError);
      }
      controller?.refresh();
    };
    connect();
    // Use the parent timer so navigation to another viewer document cannot strand a listener.
    const timer = window.setInterval(connect, 500);
    iframe.addEventListener('load', connect);
    return () => { window.clearInterval(timer); iframe.removeEventListener('load', connect); controller?.dispose(); };
  }, [iframe, onError]);
  return null;
}
