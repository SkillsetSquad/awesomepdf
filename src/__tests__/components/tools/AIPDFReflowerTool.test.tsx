import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { AIPDFReflowerTool } from '@/components/tools/ai-pdf-reflower/AIPDFReflowerTool';
import { reflowPDF } from '@/lib/pdf/processors/ai-pdf-reflower';
import { saveBlobFile } from '@/lib/tauri-bridge';

const paragraphs = [
  { type: 'h1', text: 'Document heading', pageNum: 1 },
  { type: 'p', text: 'Readable paragraph', pageNum: 1 },
  { type: 'li', text: 'List item', pageNum: 2 },
];
vi.mock('pdf-lib', () => ({ PDFDocument: { load: vi.fn(async () => ({ getPageCount: () => 2 })) } }));
vi.mock('@/lib/pdf/processors/ai-pdf-reflower', () => ({ reflowPDF: vi.fn() }));
vi.mock('@/lib/tauri-bridge', () => ({ saveBlobFile: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => {
  const file = new File(['%PDF-1.4'], 'reader.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(8) });
  onFilesSelected([file]);
}}>Choose test PDF</button> }));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(reflowPDF).mockResolvedValue({ success: true, result: new Blob(['output']), metadata: { paragraphs } });
  vi.mocked(saveBlobFile).mockResolvedValue(true);
});

function readText(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}

describe('Reflow reader controls', () => {
  it.each([['en', en], ['ar', ar]] as const)('keeps the localized preview, reading theme, typography and all export formats reachable by keyboard (%s)', async (locale, messages) => {
    const user = userEvent.setup();
    const intlError = vi.fn();
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><AIPDFReflowerTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose test PDF' }));
    const preview = await screen.findByRole('region', { name: messages.common.aiPdfReflower.previewTitle });
    expect(preview).toHaveTextContent('Document heading');
    expect(preview).toHaveTextContent('Readable paragraph');
    expect(screen.getByRole('listitem')).toHaveTextContent('List item');
    expect(reflowPDF).toHaveBeenCalledOnce();
    expect(reflowPDF).toHaveBeenCalledWith(expect.any(File), { theme: 'sepia', fontSize: 16, exportFormat: 'markdown' }, expect.any(Function));
    const dark = screen.getByRole('button', { name: messages.common.aiPdfReflower.themeDark });
    dark.focus();
    await user.keyboard('{Enter}');
    expect(dark).toHaveAttribute('aria-pressed', 'true');
    expect(preview).toHaveClass('bg-zinc-900');
    const increase = screen.getByRole('button', { name: `${messages.common.aiPdfReflower.fontSizeLabel}: +1` });
    increase.focus();
    await user.keyboard('{Enter}');
    expect(preview).toHaveStyle({ fontSize: '17px' });
    preview.focus();
    expect(preview).toHaveFocus();

    for (const [label, extension, mime] of [
      ['Markdown', 'md', 'text/markdown;charset=utf-8'],
      ['EPUB', 'epub', 'application/epub+zip'],
      ['JSON', 'json', 'application/json'],
    ]) {
      const button = screen.getByRole('button', { name: label });
      button.focus();
      await user.keyboard('{Enter}');
      await waitFor(() => expect(button).toBeEnabled());
      expect(saveBlobFile).toHaveBeenLastCalledWith(expect.any(Blob), `reader_reflowed.${extension}`);
      const blob = vi.mocked(saveBlobFile).mock.lastCall![0] as Blob;
      expect(blob.type).toBe(mime);
      if (extension === 'md') expect(await readText(blob)).toContain('# Document heading');
      if (extension === 'json') expect(JSON.parse(await readText(blob))).toEqual(paragraphs);
    }
    expect(saveBlobFile).toHaveBeenCalledTimes(3);
    expect(intlError).not.toHaveBeenCalled();
  });

  it('shows an export failure and allows retry after the pending save finishes', async () => {
    let failSave!: (error: Error) => void;
    vi.mocked(saveBlobFile).mockImplementationOnce(() => new Promise<boolean>((_, reject) => { failSave = reject; }));
    const user = userEvent.setup();
    const intlError = vi.fn();
    render(<NextIntlClientProvider locale="en" messages={en} onError={intlError}><AIPDFReflowerTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: 'Choose test PDF' }));
    const markdown = await screen.findByRole('button', { name: 'Markdown' });
    await user.click(markdown);
    expect(markdown).toBeDisabled();
    expect(screen.getByRole('button', { name: 'JSON' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'EPUB' })).toBeDisabled();
    expect(screen.getByRole('status')).toHaveTextContent(en.common.status.processing);
    failSave(new Error('Save unavailable'));
    await screen.findByText('Save unavailable');
    expect(markdown).toBeEnabled();
    await user.click(markdown);
    await waitFor(() => expect(saveBlobFile).toHaveBeenCalledTimes(2));
    expect(screen.queryByText('Save unavailable')).not.toBeInTheDocument();
    expect(intlError).not.toHaveBeenCalled();
  });
});
