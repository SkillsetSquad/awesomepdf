import { beforeEach, describe, expect, it, vi } from 'vitest';
import { applyFindAndRedact, findAndRedact, searchTextInPDF } from '@/lib/pdf/processors/find-and-redact';
import { extractRedactionText, removePDFContent, type PDFTextLine } from '@/lib/pdf/redaction-engine';

vi.mock('@/lib/pdf/redaction-engine', () => ({ extractRedactionText: vi.fn(), removePDFContent: vi.fn() }));

const file = new File(['synthetic'], 'fixture.pdf', { type: 'application/pdf' });
const options = { searchTerm: 'secret', caseSensitive: false, useRegex: false, wholeWord: false };
const line: PDFTextLine = { page: 1, chars: [
  { text: 'W', rect: [10, 20, 30, 35], origin: [10, 23] },
  ...[...'secret'].map((text, i) => ({ text, rect: [30 + i * 3, 20, 33 + i * 3, 35] as [number, number, number, number], origin: [30 + i * 3, 23] as [number, number] })),
  { text: 'i', rect: [48, 20, 50, 35], origin: [48, 23] },
] };

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(extractRedactionText).mockResolvedValue([line]);
  vi.mocked(removePDFContent).mockResolvedValue(new Uint8Array([37, 80, 68, 70]));
});

describe('Find and Redact', () => {
  it('uses exact glyph bounds for proportional fonts, including descenders', async () => {
    const result = await searchTextInPDF(file, options);
    expect(result.success).toBe(true);
    expect(result.matches[0]).toMatchObject({ text: 'secret', bounds: [30, 20, 48, 35], x: 30, y: 23, width: 18 });
    const applied = await applyFindAndRedact(file, result.matches, { replacementText: '[REDACTED]', addBorder: true });
    expect(applied.success).toBe(true);
    expect(removePDFContent).toHaveBeenCalledWith(file, [expect.objectContaining({ rect: [30, 20, 48, 35], coordinates: 'pdf', label: '[REDACTED]', border: true })]);
  });

  it('respects an explicitly empty selection and unchecked matches', async () => {
    const { matches } = await searchTextInPDF(file, options);
    expect((await applyFindAndRedact(file, matches, { selectedMatchIds: [] })).success).toBe(false);
    matches[0].selected = false;
    expect((await applyFindAndRedact(file, matches, {})).success).toBe(false);
    expect(removePDFContent).not.toHaveBeenCalled();
  });

  it('forwards multiple search terms and deduplicates overlapping searches', async () => {
    const result = await findAndRedact(file, { ...options, searchTerm: undefined, searchTerms: ['secret', 'secret'] });
    expect(result.redactedCount).toBe(1);
    expect(removePDFContent).toHaveBeenCalledTimes(1);
  });

  it('rejects matches without exact bounds and fails closed on engine errors', async () => {
    const { matches } = await searchTextInPDF(file, options);
    expect((await applyFindAndRedact(file, matches.map(match => ({ ...match, bounds: undefined })), {})).success).toBe(false);
    vi.mocked(removePDFContent).mockRejectedValue(new Error('Engine failed'));
    expect(await applyFindAndRedact(file, matches, {})).toEqual({ success: false, redactedCount: 0, error: 'Engine failed' });
  });

  it('handles zero-length regex matches without redacting anything', async () => {
    const result = await searchTextInPDF(file, { ...options, searchTerm: '(?=secret)', useRegex: true });
    expect(result.success).toBe(true);
    expect(result.totalCount).toBe(0);
  });

  it('handles whole words and invalid regexes before loading document bytes', async () => {
    expect((await searchTextInPDF(file, { ...options, wholeWord: true })).totalCount).toBe(0);
    vi.clearAllMocks();
    expect((await searchTextInPDF(file, { ...options, searchTerm: '[', useRegex: true })).success).toBe(false);
    expect(extractRedactionText).not.toHaveBeenCalled();
  });
});
