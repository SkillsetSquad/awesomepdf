import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { LegacyAnnotatorTool } from '@/components/tools/edit-pdf/LegacyAnnotatorTool';

vi.mock('next-intl', () => ({
  useLocale: () => 'en',
  useTranslations: () => (key: string) => `${key}: O'Reilly \\ line\n"quoted"`,
}));

vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: () => null }));
vi.mock('@/lib/utils/path', () => ({ withBasePath: (path: string) => `/awsomepdf${path}` }));

describe('Annotation viewer integration', () => {
  it('keeps injected viewer code valid with quotes, backslashes and newlines in translations', () => {
    vi.useFakeTimers();
    const view = render(<LegacyAnnotatorTool file={new File(['%PDF-1.4'], 'annotation.pdf', { type: 'application/pdf' })} />);
    try {
      const iframe = view.container.querySelector('iframe')!;
      const doc = document.implementation.createHTMLDocument('Annotation viewer');
      Object.defineProperty(iframe, 'contentDocument', { configurable: true, value: doc });
      fireEvent.load(iframe);
      act(() => vi.advanceTimersByTime(1000));
      const script = iframe.contentDocument!.querySelector('script')!;
      expect(script?.tagName).toBe('SCRIPT');
      expect(script.textContent).toContain('awsomepdf-edit-existing-text');
      expect(script.textContent).not.toMatch(/getAnnotationStore|updateAnnotationStyle|selectedAnnotation|setupChineseFontPatch|setupCloudFix|injectCustomMenuControls/);
      expect(() => new Function(script.textContent!)).not.toThrow();
    } finally {
      view.unmount();
      vi.useRealTimers();
    }
  });
});
