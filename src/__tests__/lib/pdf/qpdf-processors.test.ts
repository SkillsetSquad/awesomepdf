import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { decryptPDF } from '@/lib/pdf/processors/decrypt';
import { encryptPDF } from '@/lib/pdf/processors/encrypt';
import { repairPDF } from '@/lib/pdf/processors/repair';
import { removeRestrictions } from '@/lib/pdf/processors/remove-restrictions';
import { changePermissions } from '@/lib/pdf/processors/change-permissions';
import type { QpdfModule } from '@/lib/pdf/qpdf-types';
import { PDFErrorCode } from '@/types/pdf';

// Exercise the real processor argument/output/error boundary, without claiming
// this fixture executes the WASM implementation.
const storage = new Map<string, Uint8Array<ArrayBuffer>>();
const bytes = new Uint8Array([37, 80, 68, 70, 45, 49, 46, 55]);
const callMain = vi.fn((args: string[]) => {
  storage.set(args.at(-1)!, new Uint8Array(bytes));
  return 0;
});
const fixtureModule: QpdfModule = {
  FS: {
    writeFile: (path, data) => { storage.set(path, new Uint8Array(data)); },
    readFile: (path) => {
      const data = storage.get(path);
      if (!data) throw new Error('File not found');
      return new Uint8Array(data);
    },
    unlink: (path) => { storage.delete(path); },
  },
  callMain,
};
const originalModule = Object.getOwnPropertyDescriptor(window, 'Module');
let file: File;
beforeAll(() => {
  Object.defineProperty(window, 'Module', { configurable: true, value: async () => fixtureModule });
  file = new File([bytes], 'source.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => bytes.slice().buffer });
});
beforeEach(() => {
  storage.clear();
  callMain.mockReset().mockImplementation((args) => {
    expect(storage.get('/input.pdf')).toEqual(bytes);
    storage.set(args.at(-1)!, new Uint8Array(bytes));
    return 0;
  });
});
afterAll(() => {
  if (originalModule) Object.defineProperty(window, 'Module', originalModule);
  else Reflect.deleteProperty(window, 'Module');
});
function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

describe('QPDF processor contracts', () => {
  const operations = [
    { run: () => decryptPDF(file, { password: 'secret' }), args: ['/input.pdf', '--password=secret', '--decrypt', '/output.pdf'], filename: 'source_decrypted.pdf' },
    { run: () => encryptPDF(file, { userPassword: 'secret' }), args: ['/input.pdf', '--encrypt', 'secret', 'secret', '256', '--', '/output.pdf'], filename: 'source_encrypted.pdf' },
    { run: () => repairPDF(file), args: ['/input.pdf', '--decrypt', '/output.pdf'], filename: 'source_repaired.pdf' },
    { run: () => removeRestrictions(file, { ownerPassword: 'secret' }), args: ['/input.pdf', '--password=secret', '--decrypt', '--remove-restrictions', '--', '/output.pdf'], filename: 'source_unrestricted.pdf' },
    { run: () => changePermissions(file), args: ['/input.pdf', '--decrypt', '--', '/output.pdf'], filename: 'source_permissions.pdf' },
  ];
  for (const operation of operations) {
    it(`retains arguments, binary output and filesystem cleanup for ${operation.filename}`, async () => {
      const output = await operation.run();
      expect(output.success, output.error?.details).toBe(true);
      expect(callMain).toHaveBeenCalledWith(operation.args);
      expect(output.filename).toBe(operation.filename);
      expect(new Uint8Array(await readBlob(output.result as Blob))).toEqual(bytes);
      expect(storage.size).toBe(0);
    });
  }
  it('classifies plain Emscripten message objects and restores stderr after failure', async () => {
    callMain.mockImplementation(() => { throw { message: 'incorrect password' }; });
    const error = console.error;
    for (const run of [operations[0].run, operations[3].run, () => changePermissions(file, { currentPassword: 'secret' })]) {
      const output = await run();
      expect(output.success).toBe(false);
      expect(output.error?.message).toBe('INVALID_PASSWORD');
      expect(console.error).toBe(error);
    }
  });
  it('keeps output produced alongside a QPDF warning', async () => {
    callMain.mockImplementation((args) => {
      storage.set(args.at(-1)!, new Uint8Array(bytes));
      throw { message: 'operation succeeded with warnings' };
    });
    const output = await decryptPDF(file, { password: 'secret' });
    expect(output.success).toBe(true);
    expect(storage.size).toBe(0);
  });
  it('retains an encryption engine message in the failure details', async () => {
    callMain.mockImplementation(() => { throw { message: 'engine unavailable' }; });
    const output = await encryptPDF(file, { userPassword: 'secret' });
    expect(output.success).toBe(false);
    expect(output.error?.code).toBe(PDFErrorCode.PROCESSING_FAILED);
    expect(output.error?.details).toContain('engine unavailable');
    expect(storage.size).toBe(0);
  });
});
