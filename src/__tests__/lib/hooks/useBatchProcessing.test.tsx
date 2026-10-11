import { StrictMode } from 'react';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useBatchProcessing } from '@/lib/hooks/useBatchProcessing';

vi.mock('@/lib/tauri-bridge', () => ({ saveBlobFile: vi.fn() }));
const files = ['first.pdf', 'second.pdf', 'third.pdf'].map(name => new File(['fixture'], name));
function deferred() {
  let resolve!: (blob: Blob) => void, reject!: (error: Error) => void;
  const promise = new Promise<Blob>((success, failure) => { resolve = success; reject = failure; });
  return { promise, resolve, reject };
}

describe('Batch processing lifecycle', () => {
  it('limits concurrency, clamps progress, keeps file order and invokes completion callbacks once under Strict Mode', async () => {
    const tasks = files.map(() => deferred()), onFileComplete = vi.fn(), onAllComplete = vi.fn();
    const processor = vi.fn<(file: File, progress: (value: number) => void) => Promise<Blob>>(file => tasks[files.indexOf(file)].promise);
    const { result } = renderHook(() => useBatchProcessing({ maxConcurrent: 2, onFileComplete, onAllComplete }), { wrapper: StrictMode });
    act(() => result.current.addFiles(files)); let run!: Promise<void>;
    act(() => { run = result.current.startProcessing(processor); }); expect(processor).toHaveBeenCalledTimes(2); expect(result.current.files.map(file => file.status)).toEqual(['processing', 'processing', 'pending']);
    const progress = processor.mock.calls[0][1];
    act(() => progress(500)); expect(result.current.files[0].progress).toBe(100); act(() => progress(-1)); expect(result.current.files[0].progress).toBe(0);
    await act(async () => tasks[1].resolve(new Blob(['second']))); expect(processor).toHaveBeenCalledTimes(3); expect(result.current.files[1].status).toBe('completed');
    await act(async () => { tasks[0].resolve(new Blob(['first'])); tasks[2].resolve(new Blob(['third'])); await run; });
    expect(result.current.files.map(file => file.file.name)).toEqual(files.map(file => file.name)); expect(result.current.completedCount).toBe(3); expect(result.current.overallProgress).toBe(100); expect(result.current.isProcessing).toBe(false);
    expect(onFileComplete).toHaveBeenCalledTimes(3); expect(onAllComplete).toHaveBeenCalledTimes(1); expect(onAllComplete).toHaveBeenCalledWith(result.current.files);
  });

  it.each(['result', 'error'] as const)('ignores cancelled %s and progress while a newer run is still pending', async outcome => {
    const old = deferred(), current = deferred(), onAllComplete = vi.fn(), onFileComplete = vi.fn(), onError = vi.fn();
    const processor = vi.fn<(file: File, progress: (value: number) => void) => Promise<Blob>>().mockReturnValueOnce(old.promise).mockReturnValueOnce(current.promise);
    const { result } = renderHook(() => useBatchProcessing({ onAllComplete, onFileComplete, onError })); act(() => result.current.addFiles([files[0]]));
    let first!: Promise<void>, second!: Promise<void>;
    act(() => { first = result.current.startProcessing(processor); }); act(() => result.current.cancelProcessing()); expect(result.current.files[0].status).toBe('pending');
    act(() => { second = result.current.startProcessing(processor); });
    act(() => processor.mock.calls[0][1](99)); expect(result.current.files[0].progress).toBe(0);
    await act(async () => { if (outcome === 'result') old.resolve(new Blob(['old'])); else old.reject(new Error('Old error')); await first; });
    expect(result.current.isProcessing).toBe(true); expect(result.current.files[0].status).toBe('processing'); expect(onAllComplete).not.toHaveBeenCalled(); expect(onFileComplete).not.toHaveBeenCalled(); expect(onError).not.toHaveBeenCalled();
    const blob = new Blob(['current']); await act(async () => { current.resolve(blob); await second; });
    expect(result.current.files[0].result).toBe(blob); expect(result.current.isProcessing).toBe(false); expect(onAllComplete).toHaveBeenCalledTimes(1); expect(onFileComplete).toHaveBeenCalledTimes(1);
  });

  it('retries failed files without reprocessing completed results', async () => {
    const processor = vi.fn<(file: File, progress: (value: number) => void) => Promise<Blob>>().mockResolvedValueOnce(new Blob(['first'])).mockRejectedValueOnce(new Error('Retry me')).mockResolvedValueOnce(new Blob(['second']));
    const { result } = renderHook(() => useBatchProcessing()); act(() => result.current.addFiles(files.slice(0, 2)));
    await act(async () => result.current.startProcessing(processor)); expect(result.current.errorCount).toBe(1); expect(result.current.completedCount).toBe(1);
    const firstResult = result.current.files[0].result; await act(async () => result.current.startProcessing(processor));
    expect(processor).toHaveBeenCalledTimes(3); expect(processor.mock.calls[2][0]).toBe(files[1]); expect(result.current.files[0].result).toBe(firstResult); expect(result.current.completedCount).toBe(2); expect(result.current.errorCount).toBe(0);
  });

  it('resets output after an option change without losing file identity or ordering', async () => {
    const { result } = renderHook(() => useBatchProcessing()); act(() => result.current.addFiles(files));
    await act(async () => result.current.startProcessing(async () => new Blob(['output']))); const ids = result.current.files.map(file => file.id);
    act(() => result.current.resetFiles()); expect(result.current.files.map(file => file.id)).toEqual(ids); expect(result.current.files.map(file => file.status)).toEqual(['pending', 'pending', 'pending']); expect(result.current.completedCount).toBe(0); expect(result.current.overallProgress).toBe(0); expect(result.current.files.every(file => !file.result && !file.error)).toBe(true);
  });

  it.each(['clear', 'unmount'] as const)('discards pending work after %s', async action => {
    const task = deferred(), callback = vi.fn(), processor = vi.fn<(file: File, progress: (value: number) => void) => Promise<Blob>>(() => task.promise);
    const { result, unmount } = renderHook(() => useBatchProcessing({ onAllComplete: callback, onFileComplete: callback, onError: callback })); act(() => result.current.addFiles([files[0]]));
    let run!: Promise<void>; act(() => { run = result.current.startProcessing(processor); }); if (action === 'clear') act(() => result.current.clearFiles()); else unmount();
    await act(async () => { processor.mock.calls[0][1](99); task.resolve(new Blob(['old'])); await run; }); expect(callback).not.toHaveBeenCalled(); if (action === 'clear') expect(result.current.files).toEqual([]);
  });

  it('prevents duplicate starts and treats an invalid concurrency limit as at least one worker', async () => {
    const task = deferred(), processor = vi.fn(async () => task.promise), { result } = renderHook(() => useBatchProcessing({ maxConcurrent: 0 }));
    act(() => result.current.addFiles([files[0]])); let run!: Promise<void>;
    act(() => { run = result.current.startProcessing(processor); }); await act(async () => result.current.startProcessing(processor)); expect(processor).toHaveBeenCalledTimes(1);
    await act(async () => { task.resolve(new Blob(['output'])); await run; }); expect(result.current.completedCount).toBe(1);
  });
});
