import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import { FindAndRedactTool } from '@/components/tools/find-and-redact/FindAndRedactTool';
import { applyFindAndRedact, searchTextInPDF, type RedactionResult } from '@/lib/pdf/processors/find-and-redact';
import { createFileFixture } from '@/__tests__/helpers/file-fixture';

let selectedFile: File;
const previewMocks = vi.hoisted(() => ({ getDocument: vi.fn() }));
vi.mock('@/lib/pdf/processors/find-and-redact', async importOriginal => ({
  ...await importOriginal<typeof import('@/lib/pdf/processors/find-and-redact')>(),
  searchTextInPDF: vi.fn(), applyFindAndRedact: vi.fn(),
}));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void }) =>
  <button onClick={() => props.onFilesSelected([selectedFile])}>Upload fixture</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: () => <button>Download redacted fixture</button> }));
vi.mock('@/lib/pdf/loader', () => ({ loadPdfjs: async () => ({
  getDocument: previewMocks.getDocument,
}) }));

beforeEach(() => {
  vi.clearAllMocks();
  selectedFile = createFileFixture('synthetic.pdf', 4, 'application/pdf');
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null);
  previewMocks.getDocument.mockReturnValue({
    promise: Promise.resolve({ numPages: 1, destroy: vi.fn() }), destroy: vi.fn(),
  });
  vi.mocked(searchTextInPDF).mockResolvedValue({ success: true, totalCount: 1, pagesWithMatches: [1], matches: [{
    page: 1, id: 'secret', text: 'secret', selected: true, x: 10, y: 20, width: 40, height: 15, bounds: [10, 17, 50, 32],
  }] });
  vi.mocked(applyFindAndRedact).mockResolvedValue({ success: true, result: new Blob(['redacted']), redactedCount: 1 });
});
afterEach(() => vi.restoreAllMocks());

async function search() {
  const user = userEvent.setup();
  render(<NextIntlClientProvider locale="en" messages={en}><FindAndRedactTool /></NextIntlClientProvider>);
  await user.click(screen.getByRole('button', { name: 'Upload fixture' }));
  await user.type(screen.getByRole('textbox', { name: en.tools.findAndRedact.searchTermLabel }), 'secret');
  await user.click(screen.getByRole('button', { name: en.tools.findAndRedact.searchButton }));
  await screen.findByText('"secret"');
  return user;
}

describe('Find and Redact output validity', () => {
  it('discards a late preview load after a different file is selected', async () => {
    const oldDocument = { numPages: 7, destroy: vi.fn() };
    let finishLoad: (value: typeof oldDocument) => void = () => undefined;
    const destroyLoading = vi.fn();
    previewMocks.getDocument.mockReturnValueOnce({
      promise: new Promise(resolve => { finishLoad = resolve; }), destroy: destroyLoading,
    });
    const user = await search();
    await waitFor(() => expect(previewMocks.getDocument).toHaveBeenCalledTimes(1));
    selectedFile = createFileFixture('different.pdf', 4, 'application/pdf');
    await user.click(screen.getByRole('button', { name: en.common.buttons.remove }));
    await user.click(screen.getByRole('button', { name: 'Upload fixture' }));
    await user.type(screen.getByRole('textbox', { name: en.tools.findAndRedact.searchTermLabel }), 'secret');
    await user.click(screen.getByRole('button', { name: en.tools.findAndRedact.searchButton }));
    await screen.findByText('1 / 1');
    expect(destroyLoading).toHaveBeenCalledOnce();
    await act(async () => finishLoad(oldDocument));
    expect(oldDocument.destroy).toHaveBeenCalledOnce();
    expect(screen.queryByText('1 / 7')).toBeNull();
  });

  it('cancels an older render and draws only the current match selection', async () => {
    const context = { clearRect: vi.fn(), fillRect: vi.fn(), strokeRect: vi.fn() };
    vi.mocked(HTMLCanvasElement.prototype.getContext).mockReturnValue(context as unknown as CanvasRenderingContext2D);
    let finishRender: () => void = () => undefined;
    const cancel = vi.fn();
    const renderPage = vi.fn()
      .mockReturnValueOnce({ promise: new Promise<void>(resolve => { finishRender = resolve; }), cancel })
      .mockReturnValue({ promise: Promise.resolve(), cancel: vi.fn() });
    previewMocks.getDocument.mockReturnValue({ promise: Promise.resolve({
      numPages: 1, destroy: vi.fn(), getPage: async () => ({
        getViewport: () => ({ width: 400, height: 500, convertToViewportRectangle: (bounds: number[]) => bounds }),
        render: renderPage,
      }),
    }), destroy: vi.fn() });
    const user = await search();
    await waitFor(() => expect(renderPage).toHaveBeenCalledOnce());
    await user.click(screen.getByRole('button', { name: en.common.buttons.deselectAll }));
    await waitFor(() => expect(context.fillRect).toHaveBeenCalledOnce());
    expect(cancel).toHaveBeenCalledOnce();
    await act(async () => finishRender());
    expect(context.fillRect).toHaveBeenCalledOnce();
    expect(context).toHaveProperty('fillStyle', 'rgba(255, 200, 0, 0.3)');
  });

  it('invalidates a previous download when the selection changes', async () => {
    const user = await search();
    await user.click(screen.getByRole('button', { name: 'Redact 1 Selected' }));
    await screen.findByRole('button', { name: 'Download redacted fixture' });
    await user.click(screen.getByRole('button', { name: en.common.buttons.deselectAll }));
    expect(screen.queryByRole('button', { name: 'Download redacted fixture' })).toBeNull();
  });

  it('discards a cancelled result after a newer processing run starts', async () => {
    let finishOld: (value: RedactionResult) => void = () => undefined;
    let finishNew: (value: RedactionResult) => void = () => undefined;
    vi.mocked(applyFindAndRedact)
      .mockImplementationOnce(() => new Promise(resolve => { finishOld = resolve; }))
      .mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = await search();
    await user.click(screen.getByRole('button', { name: 'Redact 1 Selected' }));
    await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    await user.click(screen.getByRole('button', { name: 'Redact 1 Selected' }));
    await act(async () => finishOld({ success: true, result: new Blob(['old']), redactedCount: 1 }));
    expect(screen.queryByRole('button', { name: 'Download redacted fixture' })).toBeNull();
    await act(async () => finishNew({ success: true, result: new Blob(['new']), redactedCount: 1 }));
    await screen.findByRole('button', { name: 'Download redacted fixture' });
  });
});
