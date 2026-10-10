import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { CertCryptorTool } from '@/components/tools/cert-cryptor/CertCryptorTool';
import { encryptAndSignCert } from '@/lib/pdf/processors/cert-cryptor';
import type { ProcessOutput } from '@/types/pdf';

const { loadPdfjs, download, renderPage, cancelRender, destroyDocument } = vi.hoisted(() => ({ loadPdfjs: vi.fn(), download: vi.fn(), renderPage: vi.fn(), cancelRender: vi.fn(), destroyDocument: vi.fn() }));
let source: File, selectedCertificate: File;
let box = [0, 0, 400, 600], rotation = 0;
function viewport(scale: number) {
  const width = (rotation === 90 ? box[3] - box[1] : box[2] - box[0]) * scale;
  const height = (rotation === 90 ? box[2] - box[0] : box[3] - box[1]) * scale;
  return { width, height, rotation, convertToPdfPoint: (x: number, y: number) => rotation === 90
    ? [box[0] + y / scale, box[1] + x / scale] : [box[0] + x / scale, box[3] - y / scale] };
}
function documentFixture() {
  return { numPages: 2, getPage: async () => ({ getViewport: ({ scale }: { scale: number }) => viewport(scale), render: renderPage }) };
}
vi.mock('@/lib/pdf/loader', () => ({ loadPdfjs }));
vi.mock('@/lib/pdf/processors/cert-cryptor', () => ({ encryptAndSignCert: vi.fn() }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (props: { onFilesSelected: (files: File[]) => void; label: string; disabled: boolean; accept: string[] }) =>
  <button disabled={props.disabled} onClick={() => props.onFilesSelected([props.accept.includes('.p12') ? selectedCertificate : source])}>{props.label}</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (props: { file: Blob; filename: string; label?: string }) => { download(props); return <button>{props.label || 'Download signed PDF'}</button>; } }));

beforeEach(() => {
  vi.clearAllMocks();
  box = [0, 0, 400, 600]; rotation = 0;
  source = new File(['PDF render fixture'], 'diploma.PDF', { type: 'application/pdf' });
  Object.defineProperty(source, 'arrayBuffer', { value: async () => new ArrayBuffer(12) });
  selectedCertificate = new File(['P12 fixture'], 'signer.p12');
  renderPage.mockReset().mockReturnValue({ promise: Promise.resolve(), cancel: cancelRender });
  destroyDocument.mockReset().mockResolvedValue(undefined);
  loadPdfjs.mockReset().mockResolvedValue({ getDocument: () => ({ promise: Promise.resolve(documentFixture()), destroy: destroyDocument }) });
  vi.mocked(encryptAndSignCert).mockReset().mockResolvedValue({ success: true, result: new Blob(['signed']), metadata: { encrypted: false } });
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({} as CanvasRenderingContext2D);
  vi.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/png;base64,cHJldmlldw==');
});
afterEach(() => vi.restoreAllMocks());
function wrap(locale = 'en', messages: typeof en | typeof ar = en) {
  const intlError = vi.fn();
  render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><CertCryptorTool /></NextIntlClientProvider>);
  return intlError;
}

describe('Wax seal and certificate workspace', () => {
  it.each([['en', en], ['ar', ar]] as const)('preserves keyboard settings, physical placement and both downloads (%s)', async (locale, messages) => {
    let finish!: (output: ProcessOutput) => void;
    vi.mocked(encryptAndSignCert).mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
    const user = userEvent.setup(); const intlError = wrap(locale, messages);
    const t = messages.common.certCryptor, tool = messages.tools.certCryptor;
    await user.click(screen.getByRole('button', { name: tool.uploadLabel }));
    const preview = await screen.findByRole('button', { name: t.previewTitle });
    expect(preview).toHaveStyle({ aspectRatio: String(400 / 600) });
    expect(preview.querySelector('img')).toHaveAttribute('src', 'data:image/png;base64,cHJldmlldw==');
    const gold = screen.getByRole('radio', { name: t.goldWax }); expect(gold).toBeChecked();
    act(() => gold.focus()); await user.keyboard('{ArrowDown>}');
    await waitFor(() => expect(screen.getByRole('radio', { name: t.redWax })).toBeChecked()); await user.keyboard('{/ArrowDown}');
    await user.keyboard('{ArrowDown>}');
    await waitFor(() => expect(screen.getByRole('radio', { name: t.bronzeWax })).toBeChecked()); await user.keyboard('{/ArrowDown}');
    const encryption = screen.getByRole('checkbox', { name: t.enableDoubleKey });
    expect(encryption).not.toBeChecked(); expect(encryption).toHaveAccessibleDescription(t.encryptedHelp);
    act(() => encryption.focus()); await user.keyboard(' ');
    await user.type(screen.getByLabelText(t.decryptPasswordHelp), 'protect-p12');
    act(() => preview.focus()); await user.keyboard('{ArrowRight}{ArrowDown}');
    const horizontal = screen.getByRole('slider', { name: new RegExp(t.positionX.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) });
    const vertical = screen.getByRole('slider', { name: new RegExp(t.positionY.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) });
    expect(horizontal).toHaveAttribute('aria-valuenow', '41'); expect(vertical).toHaveAttribute('aria-valuenow', '38.5');
    act(() => horizontal.focus()); await user.keyboard('{ArrowRight}');
    expect(horizontal).toHaveAttribute('aria-valuenow', '41.5');
    act(() => preview.focus()); await user.keyboard('{Enter}');
    expect(horizontal).toHaveAttribute('aria-valuenow', '41.5');
    const process = screen.getByRole('button', { name: tool.processButton });
    act(() => process.focus()); await user.keyboard('{Enter}');
    expect(encryptAndSignCert).toHaveBeenCalledWith(source, { waxColor: 'bronze', sealPage: 0, sealX: 166, sealY: 369, pfxPassword: 'protect-p12', encryptWithCert: true, certificateFile: undefined }, expect.any(Function));
    expect(process).toBeDisabled(); expect(gold).toBeDisabled(); expect(encryption).toBeDisabled(); expect(preview).toBeDisabled();
    expect(screen.getByLabelText(t.decryptPasswordHelp)).toBeDisabled(); expect(horizontal).toHaveAttribute('data-disabled');
    expect(screen.getByRole('button', { name: messages.common.buttons.reset })).toBeDisabled();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
    act(() => vi.mocked(encryptAndSignCert).mock.calls[0][2]?.(65, 'Preparing certificate fixture'));
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '65');
    const result = new Blob(['signed PDF']), certificate = new Blob(['generated P12']);
    await act(async () => finish({ success: true, result, metadata: { encrypted: true, certificate, certificateFilename: 'diploma_certificate.p12' } }));
    await screen.findByRole('button', { name: 'Download signed PDF' });
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: result, filename: 'diploma_signed.pdf' }));
    expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: certificate, filename: 'diploma_certificate.p12', label: t.certificateDownload }));
    expect(screen.getByRole('status')).toHaveTextContent(tool.successMessage);
    expect(screen.getByRole('note')).toHaveTextContent(t.encryptedHelp);
    expect(intlError).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: messages.common.buttons.reset }));
    expect(screen.queryByRole('button', { name: 'Download signed PDF' })).toBeNull();
    expect(screen.getByRole('button', { name: tool.uploadLabel })).toBeEnabled();
  });

  it('uses rotated crop-box geometry for pointer placement and supplied certificate options', async () => {
    box = [10, 20, 210, 320]; rotation = 90;
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    const preview = await screen.findByRole('button', { name: en.common.certCryptor.previewTitle });
    expect(preview).toHaveStyle({ aspectRatio: String(300 / 200) });
    vi.spyOn(preview, 'getBoundingClientRect').mockReturnValue(new DOMRect(40, 20, 200, 300));
    await user.pointer([{ keys: '[MouseLeft]', target: preview, coords: { clientX: 90, clientY: 140 } }]);
    await user.click(screen.getByRole('button', { name: en.common.certCryptor.certificateLabel }));
    expect(screen.getByText('signer.p12')).toBeInTheDocument();
    await user.type(screen.getByLabelText(en.common.certCryptor.decryptPasswordHelp), 'certificate-pass');
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.processButton }));
    expect(encryptAndSignCert).toHaveBeenCalledWith(source, { waxColor: 'gold', sealPage: 0, sealX: 90, sealY: 95, pfxPassword: 'certificate-pass', encryptWithCert: false, certificateFile: selectedCertificate }, expect.any(Function));
    await screen.findByRole('button', { name: 'Download signed PDF' });
    expect(screen.queryByRole('button', { name: en.common.certCryptor.certificateDownload })).toBeNull();
  });

  it('preserves options and permits retry after failure, using the existing default password for a generated certificate', async () => {
    vi.mocked(encryptAndSignCert).mockRejectedValueOnce(new Error('Certificate processing failed'));
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    await screen.findByRole('button', { name: en.common.certCryptor.previewTitle });
    const process = screen.getByRole('button', { name: en.tools.certCryptor.processButton });
    await user.click(process);
    expect(await screen.findByRole('alert')).toHaveTextContent('Certificate processing failed');
    expect(process).toBeEnabled();
    await user.click(process); await screen.findByRole('button', { name: 'Download signed PDF' });
    expect(vi.mocked(encryptAndSignCert).mock.calls[1][1]?.pfxPassword).toBe('pdfcraft');
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('keeps an empty supplied-certificate password and clears the password when its certificate is removed', async () => {
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    await screen.findByRole('button', { name: en.common.certCryptor.previewTitle });
    await user.click(screen.getByRole('button', { name: en.common.certCryptor.certificateLabel }));
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.processButton }));
    await screen.findByRole('button', { name: 'Download signed PDF' });
    expect(vi.mocked(encryptAndSignCert).mock.calls[0][1]).toEqual(expect.objectContaining({ certificateFile: selectedCertificate, pfxPassword: '' }));
    await user.click(screen.getByRole('button', { name: en.common.buttons.reset }));
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    await screen.findByRole('button', { name: en.common.certCryptor.previewTitle });
    await user.type(screen.getByLabelText(en.common.certCryptor.decryptPasswordHelp), 'removed-password');
    await user.click(screen.getByRole('button', { name: en.common.certCryptor.removeCertificate }));
    expect(screen.getByLabelText(en.common.certCryptor.decryptPasswordHelp)).toHaveValue('');
    expect(screen.getByRole('note')).toHaveTextContent(en.common.certCryptor.localCertificateHelp);
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.processButton }));
    await screen.findByRole('button', { name: 'Download signed PDF' });
    expect(vi.mocked(encryptAndSignCert).mock.calls[1][1]).toEqual(expect.objectContaining({ certificateFile: undefined, pfxPassword: 'pdfcraft' }));
  });

  it.each(['result', 'error'] as const)('ignores cancelled progress and a late %s after a newer run starts', async outcome => {
    let finishOld!: (output: ProcessOutput) => void, failOld!: (error: Error) => void, finishNew!: (output: ProcessOutput) => void;
    vi.mocked(encryptAndSignCert)
      .mockImplementationOnce(() => new Promise((resolve, reject) => { finishOld = resolve; failOld = reject; }))
      .mockImplementationOnce(() => new Promise(resolve => { finishNew = resolve; }));
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    await screen.findByRole('button', { name: en.common.certCryptor.previewTitle });
    const process = screen.getByRole('button', { name: en.tools.certCryptor.processButton });
    await user.click(process); await user.click(screen.getByRole('button', { name: en.common.buttons.cancel })); await user.click(process);
    act(() => vi.mocked(encryptAndSignCert).mock.calls[0][2]?.(99, 'Cancelled progress'));
    await act(async () => { if (outcome === 'result') finishOld({ success: true, result: new Blob(['old']), metadata: { certificate: new Blob(['old certificate']) } }); else failOld(new Error('Cancelled failure')); });
    expect(screen.queryByText('Cancelled progress')).toBeNull(); expect(screen.queryByText('Cancelled failure')).toBeNull();
    expect(download).not.toHaveBeenCalled(); expect(process).toBeDisabled();
    const latest = new Blob(['latest']); await act(async () => finishNew({ success: true, result: latest }));
    await waitFor(() => expect(download).toHaveBeenCalledWith(expect.objectContaining({ file: latest })));
  });

  it('cancels and destroys pending preview work when the file is reset, then keeps the new preview', async () => {
    let finishRender!: () => void;
    renderPage.mockReturnValueOnce({ promise: new Promise<void>(resolve => { finishRender = resolve; }), cancel: cancelRender });
    const { unmount } = render(<NextIntlClientProvider locale="en" messages={en}><CertCryptorTool /></NextIntlClientProvider>);
    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    await waitFor(() => expect(renderPage).toHaveBeenCalledTimes(1));
    expect(screen.getByRole('button', { name: en.tools.certCryptor.processButton })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: en.common.buttons.reset }));
    expect(cancelRender).toHaveBeenCalledTimes(1); expect(destroyDocument).toHaveBeenCalledTimes(1);
    box = [0, 0, 200, 300];
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    const latest = await screen.findByRole('button', { name: en.common.certCryptor.previewTitle });
    expect(latest).toHaveStyle({ aspectRatio: String(200 / 300) });
    await act(async () => finishRender());
    expect(screen.getByRole('button', { name: en.common.certCryptor.previewTitle })).toHaveStyle({ aspectRatio: String(200 / 300) });
    expect(screen.getByRole('button', { name: en.tools.certCryptor.processButton })).toBeEnabled();
    unmount();
    expect(destroyDocument).toHaveBeenCalledTimes(2);
  });

  it('reports failed rendering and permits selecting the document again', async () => {
    renderPage.mockImplementationOnce(() => ({ promise: Promise.reject(new Error('Preview failed')), cancel: cancelRender }));
    const user = userEvent.setup(); wrap();
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    expect(await screen.findByRole('alert')).toHaveTextContent('Preview failed');
    expect(screen.getByRole('button', { name: en.tools.certCryptor.processButton })).toBeDisabled();
    await user.click(screen.getByRole('button', { name: en.common.buttons.reset }));
    await user.click(screen.getByRole('button', { name: en.tools.certCryptor.uploadLabel }));
    await screen.findByRole('button', { name: en.common.certCryptor.previewTitle });
    expect(screen.getByRole('button', { name: en.tools.certCryptor.processButton })).toBeEnabled();
    expect(screen.queryByRole('alert')).toBeNull();
  });
});
