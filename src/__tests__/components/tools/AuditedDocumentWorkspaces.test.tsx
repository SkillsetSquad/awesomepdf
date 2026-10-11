import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { EinkOptimizerTool } from '@/components/tools/eink-optimizer/EinkOptimizerTool';
import { CitationLinkerTool } from '@/components/tools/citation-linker/CitationLinkerTool';
import { PDFVectorExtractorTool } from '@/components/tools/vector-extractor/PDFVectorExtractorTool';
import { TimestampPDFTool } from '@/components/tools/timestamp/TimestampPDFTool';
import type { ProcessOutput, ProgressCallback } from '@/types/pdf';

const { eink, citation, vector, timestamp, saveBlob, preview } = vi.hoisted(() => ({
  eink: vi.fn<(file: File, options: object, progress?: ProgressCallback) => Promise<ProcessOutput>>(),
  citation: vi.fn<(file: File, options: object, progress?: ProgressCallback) => Promise<ProcessOutput>>(),
  vector: vi.fn<(file: File, options: object, progress?: ProgressCallback) => Promise<ProcessOutput>>(),
  timestamp: vi.fn<(files: File[], options: object, progress?: ProgressCallback) => Promise<ProcessOutput>>(),
  saveBlob: vi.fn(), preview: vi.fn(),
}));
vi.mock('pdf-lib', () => ({ PDFDocument: { load: async () => ({ getPageCount: () => 3 }) } }));
vi.mock('@/lib/pdf/processors/eink-optimizer', () => ({ optimizeEink: eink }));
vi.mock('@/lib/pdf/processors/citation-linker', () => ({ linkCitations: citation }));
vi.mock('@/lib/pdf/processors/vector-extractor', () => ({ extractVectors: vector }));
vi.mock('@/lib/pdf/processors/timestamp', () => ({ timestampPDF: timestamp }));
vi.mock('@/lib/tauri-bridge', () => ({ saveBlobFile: saveBlob }));
const file = new File(['source fixture'], 'actual.pdf', { type: 'application/pdf' });
Object.defineProperty(file, 'arrayBuffer', { value: async () => new ArrayBuffer(0) });
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (p: { onFilesSelected(files: File[]): void; label: string }) => <button onClick={() => p.onFilesSelected([file])}>{p.label}</button> }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (p: { file: Blob; label: string; selectedPage?: number }) => { preview(p); return <div>{p.label} {p.selectedPage}</div>; } }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (p: { file: Blob; filename: string }) => <button onClick={() => saveBlob(p.file, p.filename)}>Download {p.filename}</button> }));

const output = new Blob(['result fixture'], { type: 'application/pdf' });
const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 700"><defs><linearGradient id="original-color"><stop stop-color="#f00"/></linearGradient></defs><g transform="translate(20 30)" opacity="0.75"><path id="document-path" d="M300 400 L350 500" fill="#112233"/></g></svg>';
beforeEach(() => {
  vi.clearAllMocks();
  eink.mockReset().mockResolvedValue({ success: true, result: output });
  timestamp.mockReset().mockResolvedValue({ success: true, result: output, metadata: { tsaAuthority: 'DigiCert', hash: 'source-hash', timestamp: '2026-10-11T12:00:00Z', serial: '01' } });
  vector.mockReset().mockResolvedValue({ success: true, result: new Blob([svg], { type: 'image/svg+xml' }), metadata: { svgContent: svg } });
  citation.mockReset().mockResolvedValue({ success: true, metadata: { citations: [{ id: 'c2', marker: '[2]', pageNum: 2, rect: [1, 2, 3, 4], url: 'https://doi.org/source', refText: 'Actual reference', refPage: 3 }] } });
});
function wrap(tool: React.ReactNode, locale: 'en' | 'ar', messages: typeof en | typeof ar) {
  const intlError = vi.fn();
  render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}>{tool}</NextIntlClientProvider>);
  return intlError;
}
const blobText = (blob: Blob) => new Promise<string>((resolve, reject) => {
  const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = reject; reader.readAsText(blob);
});

describe('Audited document workspaces', () => {
  it.each([['en', en], ['ar', ar]] as const)('e-ink compares the selected source and processor output (%s)', async (locale, messages) => {
    const user = userEvent.setup(), intlError = wrap(<EinkOptimizerTool />, locale, messages);
    await user.click(screen.getByRole('button', { name: messages.tools.einkOptimizer.uploadLabel }));
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file }));
    await user.click(screen.getByRole('button', { name: messages.common.einkOptimizer.microDilation }));
    await user.click(screen.getByRole('button', { name: messages.tools.einkOptimizer.processButton }));
    await user.click(await screen.findByRole('tab', { name: messages.common.documentPreview.result }));
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: output }));
    expect(eink).toHaveBeenCalledWith(file, { contrastOffset: 0, dilationAmount: 1 }, expect.any(Function));
    expect(intlError).not.toHaveBeenCalled();
  });

  it('e-ink discards a cancelled output while a retry is still processing', async () => {
    let finish!: (value: ProcessOutput) => void;
    eink.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; })).mockImplementationOnce(() => new Promise(() => {}));
    const user = userEvent.setup(); wrap(<EinkOptimizerTool />, 'en', en);
    await user.click(screen.getByRole('button', { name: en.tools.einkOptimizer.uploadLabel }));
    await user.click(screen.getByRole('button', { name: en.tools.einkOptimizer.processButton }));
    await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
    await user.click(screen.getByRole('button', { name: en.tools.einkOptimizer.processButton }));
    await act(async () => finish({ success: true, result: output }));
    expect(screen.queryByRole('button', { name: 'Download actual_eink.pdf' })).toBeNull();
    expect(screen.getByRole('tab', { name: en.common.documentPreview.result })).toBeDisabled();
  });

  it.each([['en', en], ['ar', ar]] as const)('citation keyboard selection shows the actual document page and preserves an edited URL (%s)', async (locale, messages) => {
    const user = userEvent.setup(), intlError = wrap(<CitationLinkerTool />, locale, messages);
    await user.click(screen.getByRole('button', { name: messages.common.citationLinker.uploadLabel }));
    const selection = await screen.findByRole('button', { name: /\[2\]/ });
    selection.focus(); await user.keyboard('{Enter}');
    expect(selection).toHaveAttribute('aria-pressed', 'true');
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file, selectedPage: 2 }));
    const input = screen.getByRole('textbox', { name: messages.common.citationLinker.doiPlaceholder });
    await user.clear(input); await user.type(input, 'https://example.org/replacement');
    await user.click(screen.getByRole('button', { name: messages.common.buttons.save }));
    citation.mockResolvedValueOnce({ success: true, result: output });
    await user.click(screen.getByRole('button', { name: messages.common.citationLinker.injectLink }));
    await screen.findByRole('button', { name: 'Download actual_linked.pdf' });
    expect(citation.mock.calls[1][1]).toEqual(expect.objectContaining({ citationsList: [expect.objectContaining({ url: 'https://example.org/replacement', pageNum: 2 })] }));
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: output }));
    expect(intlError).not.toHaveBeenCalled();
  });

  it.each([['en', en], ['ar', ar]] as const)('vector keyboard selection and repeated recoloring preserve coordinates, definitions and downloads (%s)', async (locale, messages) => {
    const user = userEvent.setup(), intlError = wrap(<PDFVectorExtractorTool />, locale, messages);
    await user.click(screen.getByRole('button', { name: messages.common.vectorExtractor.uploadLabel }));
    const path = await screen.findByRole('button', { name: `${messages.common.vectorExtractor.propertiesTitle}: path 2` });
    act(() => path.focus()); await user.keyboard('{Enter}');
    expect(path).toHaveFocus();
    const color = screen.getByLabelText(messages.common.vectorExtractor.rgbColor);
    fireEvent.change(color, { target: { value: '#abcdef' } });
    await waitFor(() => expect(document.querySelector('#document-path')).toHaveAttribute('fill', '#abcdef'));
    fireEvent.change(color, { target: { value: '#654321' } });
    await user.click(screen.getByRole('button', { name: messages.common.vectorExtractor.downloadSvg }));
    const selected: Blob = saveBlob.mock.calls[0][0];
    expect(await blobText(selected)).toContain('viewBox="0 0 500 700"');
    expect(await blobText(selected)).toContain('id="original-color"');
    expect(await blobText(selected)).toContain('fill="#654321"');
    expect(await blobText(selected)).toContain('d="M300 400 L350 500"');
    expect(await blobText(selected)).toContain('transform="translate(20 30)"');
    expect(await blobText(selected)).toContain('opacity="0.75"');
    await user.click(screen.getByRole('button', { name: 'Download actual_page_1.svg' }));
    expect(await blobText(saveBlob.mock.calls[1][0])).toContain('fill="#654321"');
    expect(intlError).not.toHaveBeenCalled();
  });

  it.each([['en', en], ['ar', ar]] as const)('timestamp settings disclose local signing and present real output and device metadata (%s)', async (locale, messages) => {
    const user = userEvent.setup(), intlError = wrap(<TimestampPDFTool />, locale, messages);
    await user.click(screen.getByRole('button', { name: messages.common.timestamp.localUploadLabel }));
    expect(await screen.findByRole('alert')).toHaveTextContent(messages.common.timestamp.localNotice);
    const authority = screen.getByRole('button', { name: 'DigiCert TSA' });
    authority.focus(); await user.keyboard('{Enter}');
    expect(authority).toHaveAttribute('aria-pressed', 'true');
    await user.click(screen.getByRole('button', { name: messages.common.timestamp.localProcessButton }));
    await screen.findByText('source-hash');
    await user.click(screen.getByRole('tab', { name: messages.common.documentPreview.result }));
    expect(timestamp).toHaveBeenCalledWith([file], { tsaServer: 'DigiCert' }, expect.any(Function));
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: output }));
    expect(screen.getByText(messages.common.timestamp.deviceTime)).toBeInTheDocument();
    expect(intlError).not.toHaveBeenCalled();
  });
});
