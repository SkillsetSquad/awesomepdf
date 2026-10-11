import { describe, expect, it, vi } from 'vitest';
import type { ConversionOptions, ConversionResult } from '@matbee/libreoffice-converter/browser';
import { LibreOfficeConverter } from '@/lib/libreoffice/converter';
import { createFileFixture } from '@/__tests__/helpers/file-fixture';

describe('LibreOffice conversion boundary', () => {
  it.each([
    ['REPORT.DOCX', 'docx'],
    ['report.htm', 'html'],
    ['report.unknown', undefined],
  ])('passes the installed format hint and binary output for %s', async (name, inputFormat) => {
    const convert = vi.fn<(bytes: Uint8Array, options: ConversionOptions, name?: string) => Promise<ConversionResult>>().mockResolvedValue({
      data: new Uint8Array([37, 80, 68, 70]),
      mimeType: 'application/pdf',
      filename: 'report.pdf',
      duration: 1,
    });
    const converter = new LibreOfficeConverter();
    // Supply only the worker boundary exercised by this unit test; no WASM starts.
    Object.defineProperty(converter, 'converter', { value: { convert } });
    const file = createFileFixture(name, 4, 'application/octet-stream');

    const blob = await converter.convert(file, 'pdf');

    expect(convert).toHaveBeenCalledWith(
      new Uint8Array(4),
      { outputFormat: 'pdf', inputFormat },
      name,
    );
    expect(blob.type).toBe('application/pdf');
    const bytes = await new Promise<ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => reader.result instanceof ArrayBuffer
        ? resolve(reader.result)
        : reject(new Error('Expected binary blob output'));
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(blob);
    });
    expect(new Uint8Array(bytes)).toEqual(new Uint8Array([37, 80, 68, 70]));
  });
});
