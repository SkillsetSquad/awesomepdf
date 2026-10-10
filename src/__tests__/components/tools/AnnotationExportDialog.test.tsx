import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createPortal } from 'react-dom';
import { act, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { toast } from 'sonner';
import { AnnotationExportDialog, type AnnotationExportWindow } from '@/components/tools/edit-pdf/AnnotationExportDialog';
import { AnnotationExportMenu } from '@/components/tools/edit-pdf/AnnotationExportMenu';

vi.mock('sonner', () => ({ toast: { error: vi.fn() } }));

/** Run the shipped async export methods and toolbar callback with local exporter fixtures. */
function nativeExports(viewer: Window) {
  const bundle = readFileSync(resolve('public/pdfjs-annotation-viewer/web/pdfjs-annotation-extension/pdfjs-annotation-extension.js'), 'utf8');
  const runtimeStart = bundle.indexOf('function z$(');
  const runtimeEnd = bundle.indexOf('function W$(', runtimeStart);
  const runtime = bundle.slice(runtimeStart, runtimeEnd);
  const method = (name: string, next: string) => {
    const prefix = `key:"${name}",value:`;
    const start = bundle.indexOf(prefix) + prefix.length;
    const end = bundle.indexOf(`},{key:"${next}"`, start);
    if (start < prefix.length || end < start) throw new Error(`Native ${name} method was not found.`);
    return bundle.slice(start, end);
  };
  const exportPdf = vi.fn<() => Promise<void>>().mockResolvedValue(undefined);
  const exportExcel = vi.fn<() => Promise<void>>().mockResolvedValue(undefined);
  const nativeModal = { info: vi.fn(() => ({ update: vi.fn(), destroy: vi.fn() })) };
  const labels: Record<string, string> = { 'normal.export': 'Export', 'normal.processing': 'Processing', 'pdf.generationSuccess': 'PDF generated successfully' };
  const methods = new Function('window', 'A$', 'j$', 'dE', 'le', 'Mn', 'SS', 'fr', `${runtime}
    var e, t;
    return { exportPdf: ${method('exportPdf', 'exportExcel')}, exportExcel: ${method('exportExcel', 'hasUnsavedChanges')} };
  `)(viewer, exportPdf, exportExcel, nativeModal, (key: string) => labels[key] ?? key, { jsx: vi.fn(), jsxs: vi.fn() }, null, null);
  const annotations = [{ id: 'note-1', page: 1, rect: [15, 30, 55, 75], text: 'Local annotation' }];
  const application = { pdfDocument: { numPages: 1 }, url: 'blob:local-pdf' };
  const engine = { ...methods, painter: { getData: () => annotations }, PDFJS_PDFViewerApplication: application };
  const callbackStart = bundle.indexOf('onExport:function(){var t=V$(H$().mark');
  const callbackEnd = bundle.indexOf(',onSidebarOpen:', callbackStart);
  if (callbackStart < 0 || callbackEnd < 0) throw new Error('Native toolbar export callback was not found.');
  const onExport = new Function('e', `${runtime} return ${bundle.slice(callbackStart + 'onExport:'.length, callbackEnd)};`)(engine) as (format: 'pdf' | 'excel') => Promise<void>;
  return { onExport, exportPdf, exportExcel, nativeModal, annotations, application };
}

function setup() {
  const iframe = document.createElement('iframe');
  document.body.append(iframe);
  const viewer = iframe.contentWindow as AnnotationExportWindow;
  const doc = iframe.contentDocument!;
  const toolbar = doc.createElement('div');
  toolbar.dataset.annotationTool = 'export';
  doc.body.append(toolbar);
  const engine = nativeExports(viewer);
  const view = render(<>
    {createPortal(<AnnotationExportMenu container={doc.body} label="Export" formats={['pdf', 'excel']} onExport={engine.onExport} direction="rtl" errorMessage="Export failed" />, toolbar)}
    <AnnotationExportDialog iframe={iframe} locale="ar" closeLabel="Close" />
  </>);
  return { ...engine, viewer, doc, user: userEvent.setup({ document: doc }), cleanup: () => { view.unmount(); iframe.remove(); } };
}

describe('Native annotation export status integration', () => {
  it('keeps PDF parameters and processing intact while reporting progress and completion in a standard dialog', async () => {
    const { exportPdf, nativeModal, annotations, application, doc, user, cleanup } = setup();
    let finish!: () => void;
    exportPdf.mockImplementationOnce(() => new Promise<void>(resolve => { finish = resolve; }));
    try {
      const trigger = within(doc.body).getByRole('button', { name: 'Export' });
      trigger.focus();
      await user.keyboard('{Enter}');
      await user.keyboard('{Enter}');
      const dialog = await screen.findByRole('dialog', { name: 'Export' });
      expect(dialog).toHaveAttribute('dir', 'rtl');
      expect(dialog).toHaveAttribute('aria-busy', 'true');
      expect(screen.getByRole('status')).toHaveTextContent('Processing');
      expect(screen.getByRole('button', { name: 'Close' })).toBeDisabled();
      expect(nativeModal.info).not.toHaveBeenCalled();
      expect(exportPdf).toHaveBeenCalledOnce();
      expect(exportPdf).toHaveBeenCalledWith(application, annotations);
      await waitFor(() => expect(dialog).toHaveFocus());
      await userEvent.keyboard('{Escape}');
      expect(dialog).toBeInTheDocument();
      await act(async () => finish());
      await waitFor(() => expect(dialog).toHaveAttribute('aria-busy', 'false'));
      expect(screen.getByRole('status')).toHaveTextContent('PDF generated successfully');
      await userEvent.click(screen.getByRole('button', { name: 'Close' }));
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
      await waitFor(() => expect(trigger).toHaveFocus());
    } finally { cleanup(); }
  });

  it('waits for Excel, uses the original local exporter and restores viewer focus after completion', async () => {
    const { exportExcel, nativeModal, annotations, application, doc, user, cleanup } = setup();
    let finish!: () => void;
    exportExcel.mockImplementationOnce(() => new Promise<void>(resolve => { finish = resolve; }));
    try {
      const trigger = within(doc.body).getByRole('button', { name: 'Export' });
      trigger.focus();
      await user.keyboard('{Enter}{End}{Enter}');
      expect(exportExcel).toHaveBeenCalledOnce();
      expect(exportExcel).toHaveBeenCalledWith(application, annotations);
      expect(trigger).toBeDisabled();
      expect(trigger).toHaveAttribute('aria-busy', 'true');
      expect(screen.queryByRole('dialog')).toBeNull();
      await act(async () => finish());
      const dialog = await screen.findByRole('dialog', { name: 'Export' });
      expect(dialog).toHaveAttribute('aria-busy', 'false');
      expect(nativeModal.info).not.toHaveBeenCalled();
      await waitFor(() => expect(dialog).toHaveFocus());
      await userEvent.keyboard('{Escape}');
      await waitFor(() => expect(trigger).toHaveFocus());
    } finally { cleanup(); }
  });

  it('removes a failed PDF progress dialog, reports the error and permits retry', async () => {
    const { exportPdf, nativeModal, doc, user, cleanup } = setup();
    let fail!: (error: Error) => void;
    exportPdf.mockImplementationOnce(() => new Promise<void>((_, reject) => { fail = reject; }));
    try {
      const trigger = within(doc.body).getByRole('button', { name: 'Export' });
      trigger.focus();
      await user.keyboard('{Enter}{Enter}');
      await screen.findByRole('dialog');
      await act(async () => fail(new Error('Local export unavailable')));
      await waitFor(() => expect(screen.queryByRole('dialog')).toBeNull());
      expect(toast.error).toHaveBeenCalledWith('Local export unavailable');
      await waitFor(() => expect(trigger).toHaveFocus());
      await user.keyboard('{Enter}{Enter}');
      await screen.findByRole('dialog');
      await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('PDF generated successfully'));
      expect(exportPdf).toHaveBeenCalledTimes(2);
      expect(nativeModal.info).not.toHaveBeenCalled();
    } finally { cleanup(); }
  });

  it('retains native fallback dialogs and removes the parent adapter on unmount', async () => {
    const { viewer, cleanup } = setup();
    expect(viewer.awesomepdfAnnotationExportDialog).toBeTypeOf('function');
    cleanup();
    expect(viewer.awesomepdfAnnotationExportDialog).toBeUndefined();
    const engine = nativeExports(viewer);
    await engine.onExport('pdf');
    expect(engine.nativeModal.info).toHaveBeenCalledOnce();
    expect(engine.nativeModal.info.mock.results[0].value.update).toHaveBeenCalledWith(expect.objectContaining({ content: 'PDF generated successfully', okButtonProps: { loading: false } }));
    await engine.onExport('excel');
    expect(engine.nativeModal.info).toHaveBeenCalledTimes(2);
  });
});
