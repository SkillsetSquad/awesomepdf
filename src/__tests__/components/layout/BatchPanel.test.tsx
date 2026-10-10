import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import messages from '../../../../messages/en.json';
import { BatchProcessingPanel } from '@/components/common/BatchProcessingPanel';

const translations = {
  title: 'Batch conversion', addFiles: 'Add files', clearAll: 'Clear all',
  startProcessing: 'Start conversion', cancelProcessing: 'Cancel conversion',
  downloadAll: 'Download results', downloadZip: 'Download ZIP', pending: 'Pending',
  processing: 'Processing', completed: 'Completed', error: 'Failed', progress: 'Progress',
  filesSelected: 'Files selected', noFiles: 'No files selected',
};

describe('Batch conversion panel', () => {
  it('keeps removal keyboard-accessible and processes the remaining files with individual results', async () => {
    const processor = vi.fn(async (file: File, progress: (value: number) => void) => {
      progress(50);
      if (file.name === 'second.pdf') throw new Error('Test conversion failed');
      return new Blob(['result']);
    });
    const anchorClick = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    render(<NextIntlClientProvider locale="en" messages={messages}>
      <BatchProcessingPanel translations={translations} processor={processor} />
    </NextIntlClientProvider>);
    await userEvent.upload(screen.getByLabelText('Add files', { selector: 'input' }), [
      new File(['first'], 'first.pdf'), new File(['second'], 'second.pdf'), new File(['third'], 'third.pdf'),
    ]);
    const firstRemove = screen.getByRole('button', { name: 'Remove first.pdf' });
    expect(firstRemove.tabIndex).toBe(0);
    firstRemove.focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: 'Remove second.pdf' })).toHaveFocus();
    await userEvent.keyboard('{End}{Delete}');
    expect(screen.queryByText('third.pdf')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Start conversion' }));
    await waitFor(() => expect(processor).toHaveBeenCalledTimes(2));
    expect(processor.mock.calls.map(([file]) => file.name)).toEqual(['first.pdf', 'second.pdf']);
    expect(await screen.findByRole('alert')).toHaveTextContent('Test conversion failed');
    expect(within(screen.getByRole('list')).getByText('Completed')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Download results' }));
    expect(anchorClick).toHaveBeenCalledOnce();
    await userEvent.click(screen.getByRole('button', { name: 'Clear all' }));
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    anchorClick.mockRestore();
  });
});
