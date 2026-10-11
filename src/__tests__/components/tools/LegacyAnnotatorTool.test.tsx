import { act, fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { LegacyAnnotatorTool } from '@/components/tools/edit-pdf/LegacyAnnotatorTool';

vi.mock('next-intl', () => ({
  useLocale: () => 'en',
  useTranslations: () => (key: string) => `${key}: O'Reilly \\ line\n"quoted"`,
}));

vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: () => null }));
vi.mock('@/lib/utils/path', () => ({ withBasePath: (path: string) => `/awesomepdf${path}` }));

describe('Annotation viewer integration', () => {
  it('renders translated stroke/fill labels and dispatches the selected annotation’s style changes', () => {
    vi.useFakeTimers();
    const stage = document.createElement('iframe');
    document.body.append(stage);
    const view = render(<LegacyAnnotatorTool file={new File(['%PDF-1.4'], 'annotation.pdf', { type: 'application/pdf' })} />);
    try {
      const iframe = view.container.querySelector('iframe')!;
      const doc = stage.contentDocument!;
      Object.defineProperty(iframe, 'contentDocument', { configurable: true, value: doc });
      fireEvent.load(iframe);
      act(() => vi.advanceTimersByTime(1000));
      const script = doc.querySelector('script')!.textContent!;
      const start = script.indexOf('function injectCustomMenuControls(menu)');
      const end = script.indexOf('// D. Annotation history', start);
      expect(start).toBeGreaterThan(0);
      const annotation = { name: 'rectangle', style: { color: '#123456', fillEnabled: false, fillColor: '#abcdef' } };
      const updateAnnotationStyle = vi.fn();
      const viewer = { pdfjsAnnotationExtensionInstance: { selectedAnnotation: annotation, updateAnnotationStyle } };
      const inject = new Function('document', 'window', `${script.slice(start, end)};return injectCustomMenuControls;`)(doc, viewer);
      const menu = doc.createElement('div');
      menu.innerHTML = '<div class="styleContainer"><input type="range" min="1" max="20" /></div>';
      doc.body.append(menu);
      inject(menu);
      expect(menu.querySelector('.pdfcraft-custom-controls')).not.toBeNull();
      expect(menu.textContent).toContain('editPdf.strokeColorLabel: O\'Reilly \\ line\n"quoted"');
      expect(menu.textContent).toContain('editPdf.fillColorLabel: O\'Reilly \\ line\n"quoted"');
      const [stroke, fill] = Array.from(menu.querySelectorAll<HTMLInputElement>('input[type="color"]'));
      expect(fill).toBeDisabled();
      fireEvent.change(stroke, { target: { value: '#102030' } });
      expect(updateAnnotationStyle).toHaveBeenLastCalledWith(annotation, { color: '#102030' });
      fireEvent.click(menu.querySelector('input[type="checkbox"]')!);
      expect(fill).toBeEnabled();
      expect(updateAnnotationStyle).toHaveBeenLastCalledWith(annotation, { fillEnabled: true, fillColor: '#abcdef' });
      fireEvent.change(fill, { target: { value: '#ffffff' } });
      expect(updateAnnotationStyle).toHaveBeenLastCalledWith(annotation, { fillColor: '#ffffff' });
      expect(menu.querySelector('input[type="range"]')).toHaveAttribute('min', '0');
      inject(menu);
      expect(menu.querySelectorAll('.pdfcraft-custom-controls')).toHaveLength(1);
    } finally {
      view.unmount();
      stage.remove();
      vi.useRealTimers();
    }
  });

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
      expect(script.textContent).toContain('/awesomepdf/fonts/NotoSansSC-Regular.ttf');
      expect(() => new Function(script.textContent!)).not.toThrow();
    } finally {
      view.unmount();
      vi.useRealTimers();
    }
  });
});
