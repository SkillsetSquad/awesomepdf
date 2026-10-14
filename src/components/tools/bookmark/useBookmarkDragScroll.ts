'use client';

import { useEffect, type RefObject } from 'react';

/** Keep long lists usable while a native mouse drag remains near either vertical edge. */
export function useBookmarkDragScroll(listRef: RefObject<HTMLDivElement | null>, active: boolean) {
  useEffect(() => {
    if (!active) return;
    let cursor: { x: number; y: number } | null = null;
    let frame = 0;
    let previousTime = 0;
    const track = (event: DragEvent) => { cursor = { x: event.clientX, y: event.clientY }; };
    const stop = () => { cursor = null; };
    const leave = (event: DragEvent) => { if (!event.relatedTarget) stop(); };
    const scroll = (time: number) => {
      const element = listRef.current;
      const elapsed = previousTime ? Math.min(time - previousTime, 50) : 0;
      previousTime = time;
      if (element && cursor) {
        const rect = element.getBoundingClientRect();
        if (cursor.x >= rect.left && cursor.x <= rect.right && cursor.y >= rect.top && cursor.y <= rect.bottom) {
          const edge = Math.min(40, rect.height / 3);
          const direction = cursor.y < rect.top + edge ? -1 : cursor.y > rect.bottom - edge ? 1 : 0;
          const distance = direction < 0 ? cursor.y - rect.top : rect.bottom - cursor.y;
          const speed = direction * Math.max(0, 1 - distance / edge) * 500;
          const maximum = Math.max(0, element.scrollHeight - element.clientHeight);
          element.scrollTop = Math.max(0, Math.min(maximum, element.scrollTop + speed * elapsed / 1000));
        }
      }
      frame = requestAnimationFrame(scroll);
    };
    // Capture before the row handlers stop bubbling to avoid missing the active drag.
    document.addEventListener('dragover', track, true);
    document.addEventListener('dragleave', leave, true);
    document.addEventListener('drop', stop, true);
    document.addEventListener('dragend', stop, true);
    frame = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('dragover', track, true);
      document.removeEventListener('dragleave', leave, true);
      document.removeEventListener('drop', stop, true);
      document.removeEventListener('dragend', stop, true);
    };
  }, [listRef, active]);
}
