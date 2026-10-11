import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { SignatureInkOptimizerTool } from '@/components/tools/signature-ink-optimizer/SignatureInkOptimizerTool';
import { AnnotationExporterTool } from '@/components/tools/annotation-exporter/AnnotationExporterTool';
import { BookmarksAutoGeneratorTool } from '@/components/tools/bookmarks-auto-generator/BookmarksAutoGeneratorTool';
import { InteractiveTocGeneratorTool } from '@/components/tools/interactive-toc-generator/InteractiveTocGeneratorTool';
import { PhotoTilingPrepressTool } from '@/components/tools/photo-tiling-prepress/PhotoTilingPrepressTool';
import { BatchBarcodeInjectorTool } from '@/components/tools/batch-barcode-injector/BatchBarcodeInjectorTool';
import { SmartDataRedactorTool } from '@/components/tools/smart-data-redactor/SmartDataRedactorTool';
import { PdfScratchpadCanvasTool } from '@/components/tools/pdf-scratchpad-canvas/PdfScratchpadCanvasTool';
import type { ProcessOutput, ProgressCallback } from '@/types/pdf';

const { processors, preview } = vi.hoisted(() => ({
  processors: Array.from({ length: 8 }, () => vi.fn<(files: File[], options: object, progress?: ProgressCallback) => Promise<ProcessOutput>>()),
  preview: vi.fn(),
}));
vi.mock('@/lib/pdf/processors/signature-ink-optimizer', () => ({ optimizeSignatureInk: processors[0] }));
vi.mock('@/lib/pdf/processors/annotation-exporter', () => ({ exportAnnotations: processors[1] }));
vi.mock('@/lib/pdf/processors/bookmarks-auto-generator', () => ({ autoGenerateBookmarks: processors[2] }));
vi.mock('@/lib/pdf/processors/interactive-toc-generator', () => ({ generateInteractiveToc: processors[3] }));
vi.mock('@/lib/pdf/processors/photo-tiling-prepress', () => ({ prepressPhotoTiling: processors[4] }));
vi.mock('@/lib/pdf/processors/batch-barcode-injector', () => ({ injectBatchBarcodes: processors[5] }));
vi.mock('@/lib/pdf/processors/smart-data-redactor', () => ({ redactSmartData: processors[6] }));
vi.mock('@/lib/pdf/processors/pdf-scratchpad-canvas', () => ({ stitchScratchpadCanvas: processors[7] }));
const file = new File(['source fixture'], 'selected.pdf', { type: 'application/pdf' });
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (p: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => p.onFilesSelected([file])}>{p.label}</button> }));
vi.mock('@/components/tools/PDFPagePreview', () => ({ PDFPagePreview: (p: { file: Blob; label: string }) => { preview(p); return <div>{p.label}</div>; } }));
vi.mock('@/components/tools/ImageFilePreview', () => ({ ImageFilePreview: (p: { file: Blob; label: string }) => { preview(p); return <div>{p.label}</div>; } }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (p: { file: Blob; filename: string }) => <button data-size={p.file.size}>Download {p.filename}</button> }));
const tools = [
  [SignatureInkOptimizerTool, 'signatureInkOptimizer'], [AnnotationExporterTool, 'annotationExporter'],
  [BookmarksAutoGeneratorTool, 'bookmarksAutoGenerator'], [InteractiveTocGeneratorTool, 'interactiveTocGenerator'],
  [PhotoTilingPrepressTool, 'photoTilingPrepress'], [BatchBarcodeInjectorTool, 'batchBarcodeInjector'],
  [SmartDataRedactorTool, 'smartDataRedactor'], [PdfScratchpadCanvasTool, 'pdfScratchpadCanvas'],
] as const;
beforeEach(() => {
  vi.clearAllMocks();
  for (const processor of processors) processor.mockReset().mockResolvedValue({ success: true, result: new Blob(['current output']), filename: 'engine-result.pdf' });
});

describe('Remaining document workspaces', () => {
  for (const [index, [Tool, key]] of tools.entries()) {
    it.each([['en', en], ['ar', ar]] as const)(`${key} presents actual source/result, engine filename and reset focus (%s)`, async (locale, messages) => {
      const user = userEvent.setup(), t = messages.common[key], intlError = vi.fn();
      render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><Tool /></NextIntlClientProvider>);
      await user.click(screen.getByRole('button', { name: t.uploadLabel }));
      expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file }));
      await user.click(screen.getByRole('button', { name: t.processButton }));
      await screen.findByRole('button', { name: 'Download engine-result.pdf' });
      expect(processors[index]).toHaveBeenCalledWith([file], expect.any(Object), expect.any(Function));
      if (key === 'annotationExporter') expect(await screen.findByLabelText(messages.common.documentPreview.result)).toHaveTextContent('current output');
      else { const output: ProcessOutput = await processors[index].mock.results[0].value; expect(preview).toHaveBeenCalledWith(expect.objectContaining({ file: output.result })); }
      await user.click(screen.getByRole('button', { name: 'clearButton' in t ? t.clearButton : messages.common.buttons.reset }));
      expect(screen.getByRole('button', { name: t.uploadLabel }).parentElement).toHaveFocus();
      expect(intlError).not.toHaveBeenCalled();
    });
    it(`${key} blocks settings while pending and discards cancelled results/progress after restart`, async () => {
      let oldFinish!: (output: ProcessOutput) => void, currentFinish!: (output: ProcessOutput) => void;
      processors[index].mockImplementationOnce(() => new Promise(resolve => { oldFinish = resolve; })).mockImplementationOnce(() => new Promise(resolve => { currentFinish = resolve; }));
      const user = userEvent.setup(), t = en.common[key];
      render(<NextIntlClientProvider locale="en" messages={en}><Tool /></NextIntlClientProvider>);
      await user.click(screen.getByRole('button', { name: t.uploadLabel }));
      const process = screen.getByRole('button', { name: t.processButton });
      await user.click(process);
      for (const role of ['combobox', 'spinbutton', 'textbox', 'slider', 'checkbox']) for (const control of screen.queryAllByRole(role)) { if (role === 'slider') expect(control).toHaveAttribute('data-disabled'); else expect(control).toBeDisabled(); }
      await user.click(screen.getByRole('button', { name: en.common.buttons.cancel }));
      await user.click(process);
      act(() => processors[index].mock.calls[0][2]?.(99, 'Old progress'));
      await act(async () => oldFinish({ success: true, result: new Blob(['old']), filename: 'old.pdf' }));
      expect(screen.queryByText('Old progress')).toBeNull();
      expect(screen.queryByRole('button', { name: 'Download old.pdf' })).toBeNull();
      expect(process).toBeDisabled();
      await act(async () => currentFinish({ success: true, result: new Blob(['new']), filename: 'new.pdf' }));
      await waitFor(() => expect(screen.getByRole('button', { name: 'Download new.pdf' })).toBeInTheDocument());
    });
  }
});
