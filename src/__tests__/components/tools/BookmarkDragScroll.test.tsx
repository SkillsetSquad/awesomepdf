import { act, fireEvent, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useBookmarkDragScroll } from '@/components/tools/bookmark/useBookmarkDragScroll';

afterEach(() => vi.restoreAllMocks());

describe('Bookmark drag auto-scroll', () => {
  it('scrolls only at list edges during a drag and stops on drop, cancellation, and unmount', () => {
    const frames = new Map<number, FrameRequestCallback>(); let next = 0;
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation(callback => { frames.set(++next, callback); return next; });
    const cancel = vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(id => { frames.delete(id); });
    const element = document.createElement('div');
    document.body.appendChild(element);
    element.addEventListener('dragover', event => event.stopPropagation());
    Object.defineProperties(element, { scrollHeight: { value: 1000 }, clientHeight: { value: 200 } });
    element.scrollTop = 500;
    vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({ top: 100, bottom: 300, left: 0, right: 200, width: 200, height: 200, x: 0, y: 100, toJSON: () => ({}) });
    const frame = (time: number) => {
      const [id, callback] = [...frames][0]; frames.delete(id);
      act(() => callback(time));
    };
    const drag = (x: number, y: number) => fireEvent(element, new MouseEvent('dragover', { bubbles: true, clientX: x, clientY: y }));
    const { rerender, unmount } = renderHook(({ active }) => useBookmarkDragScroll({ current: element }, active), { initialProps: { active: false } });
    expect(frames.size).toBe(0); rerender({ active: true });
    frame(100); drag(100, 105); frame(116); expect(element.scrollTop).toBeLessThan(500);
    const afterUp = element.scrollTop;
    drag(100, 200); frame(132); expect(element.scrollTop).toBe(afterUp);
    drag(100, 295); frame(148); expect(element.scrollTop).toBeGreaterThan(afterUp);
    const afterDown = element.scrollTop;
    drag(250, 295); frame(164); expect(element.scrollTop).toBe(afterDown);
    drag(100, 295); fireEvent(document, new Event('drop')); frame(180); expect(element.scrollTop).toBe(afterDown);
    drag(100, 105); fireEvent(document, new Event('dragend')); frame(196); expect(element.scrollTop).toBe(afterDown);
    drag(100, 105); fireEvent(document, new Event('dragleave')); frame(212); expect(element.scrollTop).toBe(afterDown);
    rerender({ active: false }); expect(frames.size).toBe(0);
    rerender({ active: true }); unmount(); expect(frames.size).toBe(0); expect(cancel).toHaveBeenCalled();
    element.remove();
  });
});
