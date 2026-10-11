import { afterEach, describe, expect, it, vi } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { FileUploader } from '@/components/tools/FileUploader';
import { ToolProvider } from '@/lib/contexts/ToolContext';
import { clearStagedFiles, stageFilesForTool, takeStagedFiles } from '@/lib/file-handoff';

vi.mock('pdf-lib', () => ({ PDFDocument: { load: vi.fn().mockResolvedValue({}) } }));

function pdf(name: string) {
  const file = new File(['%PDF-1.7'], name, { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(8) });
  return file;
}

function view(toolSlug: string | null, props: Partial<React.ComponentProps<typeof FileUploader>> = {}) {
  const onFilesSelected = vi.fn();
  const onError = vi.fn();
  const tree = (extra: Partial<React.ComponentProps<typeof FileUploader>> = {}) => (
    <NextIntlClientProvider locale="en" messages={messages}>
      {toolSlug
        ? <ToolProvider toolSlug={toolSlug} toolName="Tool"><FileUploader multiple maxFiles={10} onFilesSelected={onFilesSelected} onError={onError} {...props} {...extra} /></ToolProvider>
        : <FileUploader multiple maxFiles={10} onFilesSelected={onFilesSelected} onError={onError} {...props} {...extra} />}
    </NextIntlClientProvider>
  );
  const utils = render(tree());
  return { ...utils, onFilesSelected, onError, rerenderWith: (extra: Partial<React.ComponentProps<typeof FileUploader>>) => utils.rerender(tree(extra)) };
}

afterEach(() => clearStagedFiles());

describe('FileUploader handoff from the homepage', () => {
  it('delivers the files chosen on the homepage to the tool it was addressed to, once', async () => {
    const files = [pdf('a.pdf'), pdf('b.pdf')];
    stageFilesForTool('merge-pdf', files);
    const { onFilesSelected } = view('merge-pdf');

    await waitFor(() => expect(onFilesSelected).toHaveBeenCalledOnce());
    expect(onFilesSelected.mock.calls[0][0].map((file: File) => file.name)).toEqual(['a.pdf', 'b.pdf']);
    expect(takeStagedFiles('merge-pdf')).toBeNull();
  });

  it('leaves the files alone when the page belongs to a different tool', async () => {
    stageFilesForTool('merge-pdf', [pdf('a.pdf')]);
    const { onFilesSelected } = view('compress-pdf');

    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(onFilesSelected).not.toHaveBeenCalled();
    expect(takeStagedFiles('merge-pdf')).toHaveLength(1);
  });

  it('ignores staged files outside a tool page', async () => {
    stageFilesForTool('merge-pdf', [pdf('a.pdf')]);
    const { onFilesSelected } = view(null);

    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(onFilesSelected).not.toHaveBeenCalled();
  });

  it('applies the tool\'s own limits to the handed-over files and reports why', async () => {
    stageFilesForTool('split-pdf', [pdf('a.pdf'), pdf('b.pdf')]);
    const { onFilesSelected, onError } = view('split-pdf', { multiple: false, maxFiles: 1 });

    await waitFor(() => expect(onFilesSelected).toHaveBeenCalledOnce());
    expect(onFilesSelected.mock.calls[0][0]).toHaveLength(1);
    expect(onError).toHaveBeenCalledWith(expect.stringContaining('1'));
  });

  it('rejects handed-over files the tool cannot open', async () => {
    stageFilesForTool('image-to-pdf', [pdf('a.pdf')]);
    const { onFilesSelected, onError } = view('image-to-pdf', { accept: ['image/*', '.png'] });

    await waitFor(() => expect(onError).toHaveBeenCalled());
    expect(onFilesSelected).not.toHaveBeenCalled();
  });

  it('waits while the uploader is disabled, then takes the files once it is enabled', async () => {
    stageFilesForTool('merge-pdf', [pdf('a.pdf')]);
    const { onFilesSelected, rerenderWith } = view('merge-pdf', { disabled: true });

    await new Promise((resolve) => setTimeout(resolve, 30));
    expect(onFilesSelected).not.toHaveBeenCalled();
    rerenderWith({ disabled: false });
    await waitFor(() => expect(onFilesSelected).toHaveBeenCalledOnce());
  });
});
