import { describe, expect, it, vi } from 'vitest';
import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { PDFToSVGTool } from '@/components/tools/pdf-to-svg/PDFToSVGTool';

const converter = vi.hoisted(() => vi.fn());
vi.mock('@/lib/pdf/processors/pdf-to-svg', () => ({ pdfToSVG: converter }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([new File(['pdf'], 'drawing.pdf', { type: 'application/pdf' })])}>Select test PDF</button> }));

describe('SVG preview', () => {
  it('preserves conversion settings and individual downloads while supporting keyboard preview', async () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="150"><text>Drawing preview</text></svg>';
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    converter.mockResolvedValue({ success: true, result: blob, metadata: { svgResults: [{ svg, blob, pageNumber: 7, width: 100, height: 150 }] } });
    render(<NextIntlClientProvider locale="en" messages={messages}><PDFToSVGTool /></NextIntlClientProvider>);
    await userEvent.click(screen.getByRole('button', { name: 'Select test PDF' }));
    await userEvent.type(screen.getByLabelText('Page Range'), '7');
    await userEvent.click(screen.getByRole('button', { name: 'Convert to SVG' }));
    expect(converter).toHaveBeenCalledWith(expect.objectContaining({ name: 'drawing.pdf' }), { scale: 2, pages: [7] }, expect.any(Function));
    const preview = await screen.findByRole('button', { name: `${messages.tools.pdfToSvg.previewTitle}: 7` });
    preview.focus();
    await userEvent.keyboard('{Enter}');
    const dialog = screen.getByRole('dialog', { name: `${messages.tools.pdfToSvg.previewPage} 7` });
    expect(dialog).toHaveTextContent('drawing.pdf');
    expect(within(dialog).getByText('Drawing preview')).toBeInTheDocument();
    const downloaded: string[] = [];
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function(this: HTMLAnchorElement) { downloaded.push(this.download); });
    await userEvent.click(within(dialog).getByRole('button', { name: /Download/ }));
    expect(downloaded).toEqual(['drawing_page_7.svg']);
    click.mockRestore();
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(preview).toHaveFocus());
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
