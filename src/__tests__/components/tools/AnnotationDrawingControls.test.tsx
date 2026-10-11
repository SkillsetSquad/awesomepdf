import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AnnotationDrawingControls } from '@/components/tools/edit-pdf/AnnotationDrawingControls';
import type { AnnotationDrawingEngine } from '@/lib/pdf/annotation-drawing';

function engineFor(doc: Document) {
  const complete = vi.fn();
  const cloud = { pageNumber: 1, isPainting: true, handleDoubleClick: () => { complete(); cloud.isPainting = false; } };
  const engine: AnnotationDrawingEngine = { painter: { currentAnnotation: { name: 'cloud' }, getData: () => [], editorStore: new Map([['1_13', cloud]]), konvaCanvasStore: new Map() } };
  Object.defineProperty(doc.defaultView, 'pdfjsAnnotationExtensionInstance', { configurable: true, value: engine });
  return { complete, cloud };
}

describe('Annotation drawing bridge lifecycle', () => {
  it('connects after viewer initialization and releases old listeners across document/engine replacement and unmount', () => {
    vi.useFakeTimers();
    const iframe = document.createElement('iframe'), nextFrame = document.createElement('iframe'); document.body.append(iframe, nextFrame);
    let activeDocument = iframe.contentDocument!;
    const firstDocument = activeDocument, nextDocument = nextFrame.contentDocument!;
    Object.defineProperty(iframe, 'contentDocument', { configurable: true, get: () => activeDocument });
    const onError = vi.fn(), view = render(<AnnotationDrawingControls iframe={iframe} onError={onError} />);
    const enter = (doc: Document) => doc.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
    try {
      const first = engineFor(firstDocument);
      act(() => vi.advanceTimersByTime(500)); enter(firstDocument); expect(first.complete).toHaveBeenCalledTimes(1);
      first.cloud.isPainting = true;
      const next = engineFor(nextDocument); activeDocument = nextDocument;
      fireEvent.load(iframe);
      enter(firstDocument); expect(first.complete).toHaveBeenCalledTimes(1);
      enter(nextDocument); expect(next.complete).toHaveBeenCalledTimes(1);
      next.cloud.isPainting = true;
      const replacement = engineFor(nextDocument);
      act(() => vi.advanceTimersByTime(500)); enter(nextDocument);
      expect(next.complete).toHaveBeenCalledTimes(1); expect(replacement.complete).toHaveBeenCalledTimes(1);
      replacement.cloud.isPainting = true; view.unmount(); enter(nextDocument);
      expect(replacement.complete).toHaveBeenCalledTimes(1); expect(onError).not.toHaveBeenCalled();
    } finally { view.unmount(); iframe.remove(); nextFrame.remove(); vi.useRealTimers(); }
  });
});
