import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument } from 'pdf-lib';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PdfLosslessSlicerTool } from '@/components/tools/pdf-lossless-slicer/PdfLosslessSlicerTool';
import { PdfSignatureAnchorHelperTool } from '@/components/tools/pdf-signature-anchor-helper/PdfSignatureAnchorHelperTool';
import { slicePDFLossless } from '@/lib/pdf/processors/pdf-lossless-slicer';
import { injectSignatureAnchors } from '@/lib/pdf/processors/pdf-signature-anchor-helper';
import type { PDFPagePreviewProps } from '@/components/tools/PDFPagePreview';
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
vi.mock('@/lib/pdf/processors/pdf-lossless-slicer', async original => { const actual = await original<typeof import('@/lib/pdf/processors/pdf-lossless-slicer')>(); return { ...actual, slicePDFLossless: vi.fn(actual.slicePDFLossless) }; });
vi.mock('@/lib/pdf/processors/pdf-signature-anchor-helper', async original => { const actual = await original<typeof import('@/lib/pdf/processors/pdf-signature-anchor-helper')>(); return { ...actual, injectSignatureAnchors: vi.fn(actual.injectSignatureAnchors) }; });
let file: File;
let output: Blob;
const { preview } = vi.hoisted(() => ({ preview: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (p: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => p.onFilesSelected([file])}>{p.label}</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (p: { file: Blob; filename: string }) => { output = p.file; return <button>Download {p.filename}</button>; } }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (p: PDFPagePreviewProps) => { preview(p); return <div><button onClick={() => p.onPageChange?.(2)}>Preview page two</button>{p.onPointSelect && <button onClick={() => p.onPointSelect?.({ page: 2, x: 120, y: 640 })}>Place guide</button>}</div>; } }));
async function readBlob(blob: Blob): Promise<ArrayBuffer> { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); }); }
beforeEach(async () => {
  vi.clearAllMocks(); const pdf = await PDFDocument.create(); pdf.addPage([600, 800]).drawText('PAGE_ONE'); pdf.addPage([600, 800]).drawText('PAGE_TWO');
  const bytes = await pdf.save(); file = new File([new Uint8Array(bytes)], 'source.pdf', { type: 'application/pdf' }); Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
});
describe('Coordinate workspaces', () => {
  it.each([['en', en], ['ar', ar]] as const)('slices the selected real page from keyboard coordinates and clears stale output (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.pdfLosslessSlicer, error = vi.fn();
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={error}><PdfLosslessSlicerTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: t.uploadLabel })); await user.click(screen.getByRole('button', { name: 'Preview page two' }));
    expect(screen.getByRole('spinbutton', { name: t.targetPageLabel })).toHaveValue(2);
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download source_sliced_p2.pdf' });
    expect(slicePDFLossless).toHaveBeenCalledWith([file], { sliceX: 0.1, sliceY: 0.1, sliceWidth: 0.8, sliceHeight: 0.8, pageNumber: 2 }, expect.any(Function));
    const pdf = await PDFDocument.load(await readBlob(output)); expect(pdf.getPageCount()).toBe(1); expect(pdf.getPage(0).getMediaBox()).toEqual({ x: 60, y: 80, width: 480, height: 640 });
    expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: output, selectedPage: undefined }));
    const x = screen.getByRole('spinbutton', { name: 'X (%)' }); await user.clear(x); await user.type(x, '20');
    expect(screen.queryByRole('button', { name: 'Download source_sliced_p2.pdf' })).toBeNull(); expect(error).not.toHaveBeenCalled();
  });
  it('places the guide in original PDF coordinates on the matching target page and keeps numeric alternatives', async () => {
    const user = userEvent.setup(), t = en.common.pdfSignatureAnchorHelper;
    render(<NextIntlClientProvider locale="en" messages={en}><PdfSignatureAnchorHelperTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: t.uploadLabel })); await waitFor(() => expect(preview).toHaveBeenCalled());
    // Wait for the independent source geometry read before selecting a point.
    await waitFor(() => expect(screen.queryByRole('alert')).toBeNull());
    await user.click(screen.getByRole('button', { name: 'Preview page two' })); await user.click(screen.getByRole('button', { name: 'Place guide' }));
    await waitFor(() => expect(screen.getByRole('spinbutton', { name: 'X (%)' })).toHaveValue(20));
    expect(screen.getByRole('spinbutton', { name: 'Y (%)' })).toHaveValue(20);
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download source_signed_guided.pdf' });
    expect(injectSignatureAnchors).toHaveBeenCalledWith([file], { anchorX: 0.2, anchorY: expect.closeTo(0.2), pageNumber: 2, anchorLabel: t.anchorLabelDefault }, expect.any(Function));
    const pdf = await PDFDocument.load(await readBlob(output)); expect(pdf.getPageCount()).toBe(2);
    expect(pdf.getPage(1).node.Contents()?.toString()).not.toBe(pdf.getPage(0).node.Contents()?.toString());
  });
});
