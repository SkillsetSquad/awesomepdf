import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { SignPDFTool } from '@/components/tools/sign/SignPDFTool';
import { getSavedSignatures, saveSignature } from '@/lib/pdf/signature-storage';
import { toast } from 'sonner';

vi.mock('sonner', () => ({ toast: { success: vi.fn() } }));
vi.mock('next-intl', () => ({ useTranslations: () => (key: string) => key }));
vi.mock('@/lib/pdf/signature-storage', () => ({ getSavedSignatures: vi.fn(() => []), saveSignature: vi.fn(), dataUrlToBlob: vi.fn(() => new Blob(['png'], { type: 'image/png' })) }));
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: ({ onFilesSelected }: { onFilesSelected: (files: File[]) => void }) => <button onClick={() => onFilesSelected([new File(['%PDF-1.4'], 'sign.pdf', { type: 'application/pdf' })])}>Select PDF</button> }));
vi.mock('@/components/tools/sign/SignatureLibraryModal', () => ({ SignatureLibraryModal: () => null }));
vi.mock('@/components/tools/sign/SignatureExtractorModal', () => ({ SignatureExtractorModal: ({ onSignatureExtracted }: { onSignatureExtracted: (result: { name: string; blob: Blob; dataUrl: string }) => void }) => <DialogContent><DialogTitle>Signature extractor</DialogTitle><DialogDescription>Local signature</DialogDescription><button onClick={() => onSignatureExtracted({ name: 'Alice', blob: new Blob(), dataUrl: 'data:image/png;base64,aA==' })}>Save extracted signature</button></DialogContent> }));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getSavedSignatures).mockReturnValue([]);
});
afterEach(() => vi.unstubAllGlobals());

function mockImage() {
  vi.stubGlobal('FileReader', class {
    result = 'data:image/png;base64,aA==';
    onload: (() => void) | null = null;
    readAsDataURL() { this.onload?.(); }
  });
  vi.stubGlobal('Image', class {
    width = 70;
    height = 30;
    onload: (() => void) | null = null;
    set src(_value: string) { this.onload?.(); }
  });
  const saved = { id: 'saved', name: 'Alice', dataUrl: 'data:image/png;base64,aA==', width: 70, height: 30, createdAt: Date.now() };
  vi.mocked(saveSignature).mockImplementation(() => { vi.mocked(getSavedSignatures).mockReturnValue([saved]); return saved; });
}

describe('Signature tool feedback', () => {
  it('reports extracted signatures through the shared success toaster', async () => {
    render(<SignPDFTool />);
    await userEvent.click(screen.getByRole('button', { name: '从 PDF 提取' }));
    await userEvent.click(screen.getByRole('button', { name: 'Save extracted signature' }));
    expect(toast.success).toHaveBeenCalledOnce();
    expect(toast.success).toHaveBeenCalledWith(expect.stringContaining('Alice'), { id: 'signature-import', duration: 6000 });
  });

  it.each([true, false])('keeps image signature data and reports the viewer activation result (%s)', async activated => {
    mockImage();
    const { container } = render(<SignPDFTool />);
    await userEvent.click(screen.getByRole('button', { name: 'Select PDF' }));
    const frame = container.querySelector('iframe')!;
    const activate = vi.fn(async () => activated);
    Object.assign(frame.contentWindow!, { pdfcraftImportSignature: activate });
    fireEvent.change(container.querySelector('input[type=file]')!, { target: { files: [new File(['png'], 'Alice.png', { type: 'image/png' })] } });
    await waitFor(() => expect(toast.success).toHaveBeenCalledOnce());
    expect(saveSignature).toHaveBeenCalledWith(expect.objectContaining({ name: 'Alice', width: 70, height: 30, dataUrl: 'data:image/png;base64,aA==' }));
    expect(activate).toHaveBeenCalledWith(expect.any(Blob), 'Alice');
    expect(vi.mocked(toast.success).mock.calls[0][0]).toContain(activated ? '当前文档激活' : '已存入签名库');
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
