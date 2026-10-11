import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDocument, PDFArray, PDFRawStream, decodePDFRawStream } from 'pdf-lib';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { PdfSpineBookbinderTool } from '@/components/tools/pdf-spine-bookbinder/PdfSpineBookbinderTool';
import { designPDFSpine } from '@/lib/pdf/processors/pdf-spine-bookbinder';
import type { ProcessOutput } from '@/types/pdf';

const download = vi.fn();
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
vi.mock('@/lib/pdf/processors/pdf-spine-bookbinder', async importOriginal => {
  const actual = await importOriginal<typeof import('@/lib/pdf/processors/pdf-spine-bookbinder')>();
  return { ...actual, designPDFSpine: vi.fn(actual.designPDFSpine) };
});
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string }) => { download(props); return <button>Download cover PDF</button>; } }));
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn();
  const view = render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><PdfSpineBookbinderTool /></NextIntlClientProvider>);
  return { ...view, intlError };
}
beforeEach(() => { vi.mocked(designPDFSpine).mockClear(); download.mockClear(); });

describe('Spine bookbinding workspace', () => {
  it('rotates with a captured pointer and stops when the button is released or capture is lost', () => {
    wrap(); const t = en.common.pdfSpineBookbinder, model = screen.getByRole('img', { name: t.modelView });
    const yaw = screen.getByRole('slider', { name: t.rotateHorizontal }), pitch = screen.getByRole('slider', { name: t.rotateVertical });
    fireEvent.pointerDown(model, { button: 0, buttons: 1, pointerId: 1, clientX: 10, clientY: 10 });
    fireEvent.pointerMove(model, { buttons: 1, pointerId: 1, clientX: 30, clientY: 20 });
    expect(yaw).toHaveAttribute('aria-valuenow', '-20'); expect(pitch).toHaveAttribute('aria-valuenow', '-25');
    fireEvent.pointerMove(model, { buttons: 0, pointerId: 1, clientX: 60, clientY: 10 });
    fireEvent.pointerMove(model, { buttons: 1, pointerId: 1, clientX: 70, clientY: 10 });
    expect(yaw).toHaveAttribute('aria-valuenow', '-20'); expect(pitch).toHaveAttribute('aria-valuenow', '-25');
    fireEvent.pointerDown(model, { button: 0, buttons: 1, pointerId: 1, clientX: 10, clientY: 10 });
    fireEvent.lostPointerCapture(model, { pointerId: 1 }); fireEvent.pointerMove(model, { buttons: 1, pointerId: 1, clientX: 30, clientY: 20 });
    expect(yaw).toHaveAttribute('aria-valuenow', '-20'); expect(pitch).toHaveAttribute('aria-valuenow', '-25');
  });
  it.each([['en', en], ['ar', ar]] as const)('supports keyboard settings, model controls and actual cover output (%s)', async (locale, messages) => {
    const user = userEvent.setup(), t = messages.common.pdfSpineBookbinder, { intlError } = wrap(locale, messages);
    const yaw = screen.getByRole('slider', { name: t.rotateHorizontal }); act(() => yaw.focus()); await user.keyboard('{ArrowUp}');
    expect(yaw).toHaveAttribute('aria-valuenow', '-29');
    const pitch = screen.getByRole('slider', { name: t.rotateVertical }); act(() => pitch.focus()); await user.keyboard('{ArrowUp}'); expect(pitch).toHaveAttribute('aria-valuenow', '-19');
    await user.click(screen.getByRole('button', { name: t.resetView })); expect(yaw).toHaveAttribute('aria-valuenow', '-30'); expect(pitch).toHaveAttribute('aria-valuenow', '-20');
    const title = screen.getByRole('textbox', { name: t.spineTextLabel }); await user.clear(title); await user.type(title, 'Designed Book');
    const pages = screen.getByRole('slider', { name: t.totalPagesLabel }); act(() => pages.focus()); await user.keyboard('{ArrowUp}'); expect(pages).toHaveAttribute('aria-valuenow', '102');
    await user.selectOptions(screen.getByRole('combobox', { name: t.gsmLabel }), '150');
    await user.click(screen.getByRole('tab', { name: t.flatView }));
    const diagram = screen.getByRole('img'); expect(diagram).toHaveAttribute('viewBox', `0 0 ${595.27 * 2 + 9.18 * 2.83465} 841.89`);
    expect(diagram).toHaveAccessibleName(t.layoutDescription.replace('{width}', '9.18'));
    const folds = diagram.querySelectorAll('line'); expect(folds).toHaveLength(2); expect(Number(folds[0].getAttribute('x1'))).toBeCloseTo(595.27); expect(Number(folds[1].getAttribute('x1'))).toBeCloseTo(595.27 + 9.18 * 2.83465);
    const layoutTab = screen.getByRole('tab', { name: t.flatView }); act(() => layoutTab.focus()); await user.keyboard('{Home}');
    await waitFor(() => expect(screen.getByRole('tab', { name: t.modelView })).toHaveAttribute('aria-selected', 'true'));
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download cover PDF' });
    expect(designPDFSpine).toHaveBeenCalledWith([], { pageCount: 102, paperGsm: 150, coverWidthPt: 595.27, coverHeightPt: 841.89, bookTitle: 'Designed Book' }, expect.any(Function));
    const { file, filename } = download.mock.lastCall![0] as { file: Blob; filename: string }; expect(filename).toBe('book_cover_spine_layout.pdf');
    const pdf = await PDFDocument.load(await readBlob(file)); expect(pdf.getPageCount()).toBe(1);
    const page = pdf.getPage(0); expect(page.getWidth()).toBeCloseTo(595.27 * 2 + 9.18 * 2.83465); expect(page.getHeight()).toBe(841.89);
    const commands = (page.node.Contents() as PDFArray).asArray().map(ref => new TextDecoder().decode(decodePDFRawStream(pdf.context.lookup(ref) as PDFRawStream).decode())).join('\n');
    const lines = [...commands.matchAll(/([\d.]+) 0 m\s+([\d.]+) 841\.89 l\s+S\b/g)]; expect(lines).toHaveLength(2); expect(Number(lines[0][1])).toBeCloseTo(595.27); expect(Number(lines[1][1])).toBeCloseTo(595.27 + 9.18 * 2.83465);
    expect(commands).toContain('44657369676E656420426F6F6B'); expect(screen.getByRole('status')).toHaveTextContent(t.successMessage); expect(intlError).not.toHaveBeenCalled();
  });

  it('disables processing settings, reports progress and allows retry after failure', async () => {
    let fail!: (error: Error) => void;
    vi.mocked(designPDFSpine).mockImplementationOnce(() => new Promise((_resolve, reject) => { fail = reject; }));
    const user = userEvent.setup(), t = en.common.pdfSpineBookbinder; wrap(); await user.click(screen.getByRole('button', { name: t.processButton }));
    const settings = screen.getByRole('region', { name: t.optionsTitle });
    expect(within(settings).getByRole('textbox')).toBeDisabled(); expect(within(settings).getByRole('combobox')).toBeDisabled(); expect(within(settings).getByRole('button')).toBeDisabled();
    const pages = within(settings).getByRole('slider'); expect(pages.closest('[data-slot="slider"]')).toHaveAttribute('data-disabled');
    act(() => pages.focus()); await user.keyboard('{ArrowUp}'); expect(pages).toHaveAttribute('aria-valuenow', '100');
    act(() => vi.mocked(designPDFSpine).mock.calls[0][2]?.(65, 'Drawing test fold lines')); expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '65');
    await act(async () => fail(new Error('Cannot encode title'))); expect(screen.getByRole('alert')).toHaveTextContent('Cannot encode title');
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download cover PDF' }); expect(screen.queryByRole('alert')).toBeNull();
  });

  it.each(['result', 'error'] as const)('discards a cancelled %s while a newer run is pending', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(designPDFSpine).mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; })).mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(), t = en.common.pdfSpineBookbinder; wrap(); const process = screen.getByRole('button', { name: t.processButton });
    await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(designPDFSpine).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']), metadata: { calculatedSpineWidthMm: 99 } }); else failOld(new Error('Cancelled error')); });
    expect(download).not.toHaveBeenCalled(); expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled error')).toBeNull(); expect(process).toBeDisabled();
    const result = new Blob(['current']); await act(async () => finishNew({ success: true, result, filename: 'current.pdf', metadata: { calculatedSpineWidthMm: 0 } }));
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'current.pdf' }));
    expect(screen.getByText(t.spineWidthText.replace('{width}', '0.00'))).toBeInTheDocument();
  });

  it('keeps output when adjusting the model and invalidates it when print settings change', async () => {
    const user = userEvent.setup(), t = en.common.pdfSpineBookbinder; wrap(); await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download cover PDF' });
    const yaw = screen.getByRole('slider', { name: t.rotateHorizontal }); act(() => yaw.focus()); await user.keyboard('{ArrowUp}'); expect(screen.getByRole('button', { name: 'Download cover PDF' })).toBeInTheDocument();
    await user.type(screen.getByRole('textbox', { name: t.spineTextLabel }), ' New'); expect(screen.queryByRole('button', { name: 'Download cover PDF' })).toBeNull();
    await user.click(screen.getByRole('button', { name: t.processButton })); await screen.findByRole('button', { name: 'Download cover PDF' });
    await user.selectOptions(screen.getByRole('combobox', { name: t.gsmLabel }), '120'); expect(screen.queryByRole('button', { name: 'Download cover PDF' })).toBeNull();
  });
});
