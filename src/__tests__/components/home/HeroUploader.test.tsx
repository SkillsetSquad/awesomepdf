import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { HeroUploader } from '@/components/home/HeroUploader';
import { clearStagedFiles, takeStagedFiles } from '@/lib/file-handoff';
import { getToolSummaries } from '@/lib/tool-summaries';
import { getUploadAccept } from '@/lib/home/upload-analysis';

vi.mock('next/link', () => ({
  default: ({ onClick, ...props }: React.ComponentProps<'a'>) => <a {...props} onClick={(event) => { onClick?.(event); event.preventDefault(); }} />,
}));

const titles = Object.fromEntries(Object.entries(getToolSummaries('en')).map(([id, summary]) => [id, summary.title]));
const pdf = (name: string) => new File(['%PDF-1.7 body'], name, { type: 'application/pdf' });
const file = (name: string, body = 'data') => new File([body], name);

function view() {
  render(<NextIntlClientProvider locale="en" messages={messages}><HeroUploader locale="en" accept={getUploadAccept()} toolTitles={titles} /></NextIntlClientProvider>);
  return { input: screen.getByTestId('hero-file-input') as HTMLInputElement };
}
const choose = async (input: HTMLElement, ...files: File[]) => { await userEvent.setup({ applyAccept: false }).upload(input, files); };
const suggestionNames = () => screen.queryAllByRole('link').map((link) => link.querySelector('.font-medium')?.textContent);

beforeEach(() => clearStagedFiles());
afterEach(() => clearStagedFiles());

describe('Hero file selection', () => {
  it('invites the visitor to drop or choose files and says nothing is uploaded', () => {
    view();
    expect(screen.getByText('Drop your files here')).toBeInTheDocument();
    expect(screen.getByText('Choose PDFs, images, or supported documents')).toBeInTheDocument();
    expect(screen.getByText(/Nothing is uploaded to a server/)).toBeInTheDocument();
  });

  it('opens the file picker from the keyboard-reachable Choose Files button', async () => {
    const { input } = view();
    const open = vi.spyOn(input, 'click');
    const button = screen.getByRole('button', { name: 'Choose Files' });
    button.focus();
    await userEvent.keyboard('{Enter}');
    expect(open).toHaveBeenCalledOnce();
  });

  it('suggests the PDF tools for one PDF and links each to its real route', async () => {
    const { input } = view();
    await choose(input, pdf('report.pdf'));

    expect(await screen.findByText('1 PDF file selected')).toBeInTheDocument();
    expect(suggestionNames()).toEqual(['Compress PDF', 'Edit PDF', 'Split PDF', 'Sign PDF', 'Organize PDF']);
    expect(screen.getByRole('link', { name: /Compress PDF/ })).toHaveAttribute('href', '/en/tools/compress-pdf');
  });

  it('suggests merge, combine and batch compress for several PDFs', async () => {
    const { input } = view();
    await choose(input, pdf('a.pdf'), pdf('b.pdf'), pdf('c.pdf'));

    expect(await screen.findByText('3 PDF files selected')).toBeInTheDocument();
    expect(suggestionNames()).toEqual(['Merge PDF', 'Combine & Organize', 'Batch Compress']);
    expect(screen.getByText('Combine 3 files into one PDF.')).toBeInTheDocument();
  });

  it('suggests Image to PDF for images and Word to PDF for a Word file', async () => {
    const { input } = view();
    await choose(input, file('a.png'), file('b.jpg'));
    expect(await screen.findByText('2 images selected')).toBeInTheDocument();
    expect(suggestionNames()).toEqual(['Images to PDF']);

    await userEvent.click(screen.getByRole('button', { name: 'Choose different files' }));
    await choose(screen.getByTestId('hero-file-input'), file('letter.docx'));
    expect(await screen.findByText('1 file selected (DOCX)')).toBeInTheDocument();
    expect(suggestionNames()).toEqual(['Word to PDF']);
  });

  it('hands the selected files to the chosen tool without storing them anywhere persistent', async () => {
    const { input } = view();
    const files = [pdf('a.pdf'), pdf('b.pdf')];
    await choose(input, ...files);
    await userEvent.click(await screen.findByRole('link', { name: /Merge PDF/ }));

    expect(takeStagedFiles('merge-pdf')).toEqual(files);
    expect(localStorage.length + sessionStorage.length).toBe(0);
  });

  it('does not stage files for a new-tab click', async () => {
    const { input } = view();
    await choose(input, pdf('a.pdf'));
    fireEvent.click(await screen.findByRole('link', { name: /Compress PDF/ }), { ctrlKey: true });

    expect(takeStagedFiles('compress-pdf')).toBeNull();
  });

  it('explains every skipped file and still offers tools for the valid ones', async () => {
    const { input } = view();
    await choose(input, pdf('good.pdf'), file('app.exe'), new File([], 'empty.pdf'), file('fake.pdf', 'just text'));

    const alert = await screen.findByRole('alert');
    expect(within(alert).getByText("app.exe isn't a supported file type.")).toBeInTheDocument();
    expect(within(alert).getByText('empty.pdf is empty.')).toBeInTheDocument();
    expect(within(alert).getByText("fake.pdf isn't a valid PDF file.")).toBeInTheDocument();
    expect(screen.getByText('1 PDF file selected')).toBeInTheDocument();
    expect(suggestionNames()).toContain('Compress PDF');
  });

  it('says so plainly when nothing can be used or the types do not match', async () => {
    const { input } = view();
    await choose(input, file('app.exe'));
    expect(await screen.findByText(/None of the selected files can be used/)).toBeInTheDocument();
    expect(suggestionNames()).toEqual([]);

    await userEvent.click(screen.getByRole('button', { name: 'Choose different files' }));
    await choose(screen.getByTestId('hero-file-input'), pdf('a.pdf'), file('b.png'));
    expect(await screen.findByText(/different types/)).toBeInTheDocument();
    expect(suggestionNames()).toEqual([]);
  });

  it('returns to the empty state with focus on Choose Files', async () => {
    const { input } = view();
    await choose(input, pdf('a.pdf'));
    await userEvent.click(await screen.findByRole('button', { name: 'Choose different files' }));

    await waitFor(() => expect(screen.getByRole('button', { name: 'Choose Files' })).toHaveFocus());
    expect(screen.getByText('Drop your files here')).toBeInTheDocument();
  });

  it('accepts a file dropped anywhere on the page and highlights the zone while dragging', async () => {
    view();
    fireEvent.dragEnter(window, { dataTransfer: { types: ['Files'] } });
    expect(await screen.findByText('Release to add your files')).toBeInTheDocument();

    fireEvent.drop(window, { dataTransfer: { types: ['Files'], files: [pdf('dropped.pdf')] } });
    expect(await screen.findByText('1 PDF file selected')).toBeInTheDocument();
    expect(screen.getByText(/dropped\.pdf/)).toBeInTheDocument();
  });

  it('ignores drags that are not files', () => {
    view();
    fireEvent.dragEnter(window, { dataTransfer: { types: ['text/plain'] } });
    expect(screen.getByText('Drop your files here')).toBeInTheDocument();
  });
});
