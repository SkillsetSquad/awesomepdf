import { describe, expect, it } from 'vitest';
import { analyzeFiles, getFileExtension, getUploadAccept } from '@/lib/home/upload-analysis';
import { getAllTools, getToolById } from '@/config/tools';

const pdf = (name: string, body = '%PDF-1.7\n1 0 obj\n') => new File([body], name, { type: 'application/pdf' });
const file = (name: string, body = 'content', type = '') => new File([body], name, { type });
const ids = (analysis: Awaited<ReturnType<typeof analyzeFiles>>) => analysis.suggestions.map((suggestion) => suggestion.toolId);

describe('upload analysis', () => {
  it('offers the PDF tools for a single PDF', async () => {
    const analysis = await analyzeFiles([pdf('report.pdf')]);

    expect(analysis.kind).toBe('pdf');
    expect(ids(analysis)).toEqual(['compress-pdf', 'edit-pdf', 'split-pdf', 'sign-pdf', 'organize-pdf']);
    expect(analysis.suggestions.every((suggestion) => suggestion.context === 'single')).toBe(true);
  });

  it('offers merge, combine and batch compress for several PDFs', async () => {
    const analysis = await analyzeFiles([pdf('a.pdf'), pdf('b.pdf'), pdf('c.pdf')]);

    expect(ids(analysis)).toEqual(['merge-pdf', 'pdf-multi-tool', 'compress-pdf']);
    expect(analysis.suggestions.every((suggestion) => suggestion.context === 'multiple')).toBe(true);
  });

  it('drops tools that cannot take that many files', async () => {
    const compress = getToolById('compress-pdf')!;
    const many = Array.from({ length: compress.maxFiles + 1 }, (_, index) => pdf(`f${index}.pdf`));

    expect(ids(await analyzeFiles(many))).not.toContain('compress-pdf');
    expect(ids(await analyzeFiles(many))).toContain('merge-pdf');
  });

  it('offers Image to PDF for one image or many', async () => {
    const one = await analyzeFiles([file('photo.JPG', 'x', 'image/jpeg')]);
    const many = await analyzeFiles([file('a.png', 'x'), file('b.webp', 'x'), file('c.jpeg', 'x')]);

    expect(one.kind).toBe('image');
    expect(one.suggestions).toEqual([{ toolId: 'image-to-pdf', slug: 'image-to-pdf', context: 'image' }]);
    expect(many.suggestions).toEqual([{ toolId: 'image-to-pdf', slug: 'image-to-pdf', context: 'images' }]);
  });

  it('offers the matching converter for office documents', async () => {
    const word = await analyzeFiles([file('letter.docx')]);

    expect(word.kind).toBe('document');
    expect(word.extension).toBe('.docx');
    expect(ids(word)).toEqual(['word-to-pdf']);
    expect(ids(await analyzeFiles([file('table.xlsx')]))).toEqual(['excel-to-pdf']);
  });

  it('only suggests tools that exist and accept every file', async () => {
    const registry = new Set(getAllTools().map((tool) => tool.id));
    const samples = [[pdf('a.pdf')], [pdf('a.pdf'), pdf('b.pdf')], [file('a.png')], [file('a.docx')], [file('a.txt')], [file('a.pptx')], [file('a.heif')]];

    for (const sample of samples) {
      const analysis = await analyzeFiles(sample);
      for (const suggestion of analysis.suggestions) {
        const tool = getToolById(suggestion.toolId)!;
        expect(registry.has(suggestion.toolId)).toBe(true);
        expect(suggestion.slug).toBe(tool.slug);
        expect(sample.length).toBeLessThanOrEqual(tool.maxFiles);
        for (const item of sample) {
          expect(tool.acceptedFormats.some((format) => item.name.toLowerCase().endsWith(format))).toBe(true);
        }
      }
    }
  });

  it('does not mix families and says nothing is suggested', async () => {
    const analysis = await analyzeFiles([pdf('a.pdf'), file('b.png')]);

    expect(analysis.kind).toBe('mixed');
    expect(analysis.suggestions).toEqual([]);
    expect((await analyzeFiles([file('a.docx'), file('b.xlsx')])).kind).toBe('mixed');
  });

  it('rejects empty, unsupported and fake PDF files with a reason', async () => {
    const analysis = await analyzeFiles([
      pdf('good.pdf'),
      new File([], 'empty.pdf', { type: 'application/pdf' }),
      file('program.exe'),
      file('notes.pdf', 'this is plain text, not a pdf'),
    ]);

    expect(analysis.accepted.map((item) => item.name)).toEqual(['good.pdf']);
    expect(analysis.rejected).toEqual([
      { name: 'empty.pdf', reason: 'empty' },
      { name: 'program.exe', reason: 'unsupported' },
      { name: 'notes.pdf', reason: 'notPdf' },
    ]);
  });

  it('accepts a PDF whose header is not at byte zero', async () => {
    const analysis = await analyzeFiles([pdf('padded.pdf', `\n\n${' '.repeat(100)}%PDF-1.4`)]);

    expect(analysis.kind).toBe('pdf');
  });

  it('reports no kind when every file is rejected', async () => {
    const analysis = await analyzeFiles([file('virus.exe')]);

    expect(analysis.kind).toBe('none');
    expect(analysis.suggestions).toEqual([]);
  });

  it('builds the file picker filter from the registry', () => {
    const accept = getUploadAccept().split(',');

    expect(accept).toEqual(expect.arrayContaining(['.pdf', '.docx', '.png', '.heic']));
    expect(new Set(accept).size).toBe(accept.length);
    expect(accept.every((format) => /^\.[a-z0-9]+$/.test(format))).toBe(true);
  });

  it('keeps compound extensions whole', () => {
    expect(getFileExtension('book.fb2.zip')).toBe('.fb2.zip');
    expect(getFileExtension('Letter.DOCX')).toBe('.docx');
    expect(getFileExtension('README')).toBe('');
  });
});
