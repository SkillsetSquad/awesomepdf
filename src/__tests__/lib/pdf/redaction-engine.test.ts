import { beforeEach, describe, expect, it, vi } from 'vitest';
import { loadPyMuPDF } from '@/lib/pdf/pymupdf-loader';
import { removePDFContent, type EngineRedaction } from '@/lib/pdf/redaction-engine';

vi.mock('@/lib/pdf/pymupdf-loader', () => ({ loadPyMuPDF: vi.fn() }));
const area: EngineRedaction = { page: 1, rect: [10, 20, 30, 40], coordinates: 'display', color: '#000000' };
const writeFile = vi.fn();
const unlink = vi.fn();
const runPythonAsync = vi.fn();

beforeEach(() => {
  vi.clearAllMocks();
  runPythonAsync.mockResolvedValue(btoa('%PDF-output'));
  vi.mocked(loadPyMuPDF, { partial: true }).mockResolvedValue({
    pyodide: { FS: { writeFile, unlink }, runPythonAsync, loadPackage: vi.fn(), runPython: vi.fn() },
  });
});

describe('local redaction engine', () => {
  it('validates selections before loading and returns only engine output', async () => {
    for (const invalid of [{ ...area, page: NaN }, { ...area, rect: [0, 0, 0, 1] as EngineRedaction['rect'] }, { ...area, color: 'transparent' }]) {
      await expect(removePDFContent(new ArrayBuffer(4), [invalid])).rejects.toThrow('Invalid redaction area');
    }
    expect(loadPyMuPDF).not.toHaveBeenCalled();
    const result = await removePDFContent(new ArrayBuffer(4), [area]);
    expect(new TextDecoder().decode(result)).toBe('%PDF-output');
    expect(unlink).toHaveBeenCalledTimes(2);
  });

  it('keeps replacement text out of Python source and cleans files on failure', async () => {
    runPythonAsync.mockRejectedValue(new Error('Could not redact'));
    await expect(removePDFContent(new ArrayBuffer(4), [{ ...area, label: 'sensitive\' \\ label' }])).rejects.toThrow('Could not redact');
    expect(runPythonAsync.mock.calls[0][0]).not.toContain('sensitive');
    expect(unlink).toHaveBeenCalledTimes(2);
  });

  it('serializes operations and can retry after an engine failure', async () => {
    let complete: (value: string) => void = () => undefined;
    runPythonAsync.mockImplementationOnce(() => new Promise<string>(resolve => { complete = resolve; }));
    const first = removePDFContent(new ArrayBuffer(4), [area]);
    const second = removePDFContent(new ArrayBuffer(4), [area]);
    await vi.waitFor(() => expect(runPythonAsync).toHaveBeenCalledTimes(1));
    complete(btoa('first'));
    await Promise.all([first, second]);
    expect(runPythonAsync).toHaveBeenCalledTimes(2);
  });
});
