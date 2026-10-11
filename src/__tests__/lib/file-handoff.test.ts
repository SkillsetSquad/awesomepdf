import { afterEach, describe, expect, it } from 'vitest';
import { HANDOFF_TTL_MS, clearStagedFiles, stageFilesForTool, takeStagedFiles } from '@/lib/file-handoff';

const pdf = (name = 'a.pdf') => new File(['%PDF-1.7'], name, { type: 'application/pdf' });

afterEach(() => clearStagedFiles());

describe('file handoff', () => {
  it('delivers staged files to the addressed tool exactly once', () => {
    const files = [pdf('a.pdf'), pdf('b.pdf')];
    stageFilesForTool('merge-pdf', files);

    expect(takeStagedFiles('merge-pdf')).toEqual(files);
    expect(takeStagedFiles('merge-pdf')).toBeNull();
  });

  it('does not give files to a different tool, and keeps them for the right one', () => {
    stageFilesForTool('merge-pdf', [pdf()]);

    expect(takeStagedFiles('compress-pdf')).toBeNull();
    expect(takeStagedFiles('merge-pdf')).toHaveLength(1);
  });

  it('expires after the time limit', () => {
    const start = 1_000_000;
    stageFilesForTool('merge-pdf', [pdf()], start);

    expect(takeStagedFiles('merge-pdf', start + HANDOFF_TTL_MS)).toBeNull();
    expect(takeStagedFiles('merge-pdf', start + 1)).toBeNull();
  });

  it('replaces an earlier handoff and ignores an empty selection', () => {
    stageFilesForTool('merge-pdf', [pdf('old.pdf')]);
    stageFilesForTool('split-pdf', [pdf('new.pdf')]);
    expect(takeStagedFiles('merge-pdf')).toBeNull();

    stageFilesForTool('split-pdf', [pdf('new.pdf')]);
    stageFilesForTool('split-pdf', []);
    expect(takeStagedFiles('split-pdf')).toBeNull();
  });

  it('keeps files out of persistent browser storage', () => {
    stageFilesForTool('merge-pdf', [pdf()]);

    expect(localStorage.length).toBe(0);
    expect(sessionStorage.length).toBe(0);
  });
});
