import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { PDFDict, PDFDocument, PDFName, PDFString } from 'pdf-lib';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';
import { FormLogicDesignerTool } from '@/components/tools/form-logic-designer/FormLogicDesignerTool';
import { injectFormLogic } from '@/lib/pdf/processors/form-logic-designer';

const { loadPdfLib } = vi.hoisted(() => ({ loadPdfLib: vi.fn() }));
vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib }));
vi.mock('@/lib/pdf/processors/form-logic-designer', async original => {
  const actual = await original<typeof import('@/lib/pdf/processors/form-logic-designer')>();
  return { ...actual, injectFormLogic: vi.fn(actual.injectFormLogic) };
});
vi.mock('reactflow', async original => {
  const actual = await original<typeof import('reactflow')>();
  return { ...actual, default: () => <div>Field connection canvas</div>, Controls: () => null, Background: () => null };
});
let file: File;
let downloaded: Blob;
vi.mock('@/components/tools/FileUploader', () => ({ FileUploader: (p: { onFilesSelected: (files: File[]) => void; label: string }) => <button onClick={() => p.onFilesSelected([file])}>{p.label}</button> }));
vi.mock('@/components/tools/DownloadButton', () => ({ DownloadButton: (p: { file: Blob }) => { downloaded = p.file; return <button>Download form</button>; } }));
async function source(withFields: boolean) {
  const pdf = await PDFDocument.create(), page = pdf.addPage([600, 800]);
  if (withFields) { const form = pdf.getForm(); form.createCheckBox('isStudent').addToPage(page); form.createTextField('studentId').addToPage(page); }
  const bytes = await pdf.save(); file = new File([new Uint8Array(bytes)], 'form.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
}
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result as ArrayBuffer); reader.onerror = () => reject(reader.error); reader.readAsArrayBuffer(blob); });
}
beforeEach(async () => {
  vi.clearAllMocks(); loadPdfLib.mockReset().mockResolvedValue(await import('pdf-lib'));
  const actual = await vi.importActual<typeof import('@/lib/pdf/processors/form-logic-designer')>('@/lib/pdf/processors/form-logic-designer');
  vi.mocked(injectFormLogic).mockReset().mockImplementation(actual.injectFormLogic);
});

describe('Form logic migration', () => {
  it.each([['en', en], ['ar', ar]] as const)('shows a truthful empty state without invented fields (%s)', async (locale, messages) => {
    await source(false); const user = userEvent.setup(), t = messages.common.formLogicDesigner, tools = messages.tools.formLogicDesigner, intlError = vi.fn();
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><FormLogicDesignerTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: tools.uploadLabel }));
    expect(await screen.findByRole('alert')).toHaveTextContent(t.noFields);
    expect(screen.queryByText('studentId')).toBeNull();
    expect(screen.getByRole('button', { name: tools.processButton })).toBeDisabled();
    expect(intlError).not.toHaveBeenCalled();
  });
  it.each([['en', en], ['ar', ar]] as const)('creates and removes connections by keyboard and emits actual field validation script (%s)', async (locale, messages) => {
    await source(true); const user = userEvent.setup(), t = messages.common.formLogicDesigner, tools = messages.tools.formLogicDesigner, intlError = vi.fn();
    render(<NextIntlClientProvider locale={locale} messages={messages} onError={intlError}><FormLogicDesignerTool /></NextIntlClientProvider>);
    await user.click(screen.getByRole('button', { name: tools.uploadLabel }));
    const from = screen.getByRole('combobox', { name: t.sourceField }), to = screen.getByRole('combobox', { name: t.targetField });
    await waitFor(() => expect(within(from).getByRole('option', { name: 'isStudent' })).toBeInTheDocument());
    await user.selectOptions(from, 'isStudent'); await user.selectOptions(to, 'studentId');
    await user.click(screen.getByRole('button', { name: t.addConnection }));
    expect(screen.getByText('isStudent → studentId')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: tools.processButton })); await screen.findByRole('button', { name: 'Download form' });
    expect(injectFormLogic).toHaveBeenCalledWith(file, { rules: [{ source: 'isStudent', target: 'studentId', trigger: 'change', condition: 'checked', value: 'Yes', action: 'enable' }] }, expect.any(Function));
    const pdf = await PDFDocument.load(await readBlob(downloaded));
    const script = pdf.getForm().getCheckBox('isStudent').acroField.dict.lookup(PDFName.of('AA'), PDFDict).lookup(PDFName.of('V'), PDFDict).lookup(PDFName.of('JS'), PDFString).decodeText();
    expect(script).toContain('this.getField("studentId")'); expect(script).toContain('tgt.readonly = false');
    await user.click(screen.getByRole('button', { name: `${t.removeConnection}: isStudent → studentId` }));
    expect(screen.queryByRole('button', { name: 'Download form' })).toBeNull();
    expect(screen.getByRole('button', { name: tools.processButton })).toBeDisabled();
    expect(intlError).not.toHaveBeenCalled();
  });
});
