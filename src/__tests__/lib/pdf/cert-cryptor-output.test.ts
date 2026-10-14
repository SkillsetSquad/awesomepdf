import { createDecipheriv, createHash, verify } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { inflateSync } from 'node:zlib';
import forge from 'node-forge';
import { PDFArray, PDFDict, PDFDocument, PDFHexString, PDFName, PDFNumber, PDFRawStream } from 'pdf-lib';
import { beforeAll, describe, expect, it, vi } from 'vitest';
import { encryptAndSignCert } from '@/lib/pdf/processors/cert-cryptor';
import { createLocalSigningCertificate } from '@/lib/pdf/local-certificate-signer';

vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));
let certificateFile: File;
let source: File;
const certificatePassword = 'fixture-password';
beforeAll(async () => {
  certificateFile = makeFile(await createLocalSigningCertificate(certificatePassword), 'signer.p12');
  const pdf = await PDFDocument.create();
  pdf.addPage([200, 300]); pdf.addPage([400, 500]);
  pdf.getPage(0).drawText('Original document content');
  const link = pdf.context.register(pdf.context.obj({ Type: 'Annot', Subtype: 'Link', Rect: [10, 10, 20, 20] }));
  pdf.getPage(0).node.set(PDFName.of('Annots'), pdf.context.register(pdf.context.obj([link])));
  const existingField = pdf.context.register(pdf.context.obj({ FT: 'Tx', T: 'Existing field', V: 'Keep value' }));
  pdf.catalog.set(PDFName.of('AcroForm'), pdf.context.register(pdf.context.obj({ Fields: [existingField] })));
  source = makeFile(await pdf.save(), 'certificate.PDF', 'application/pdf');
});

function makeFile(bytes: Uint8Array, name: string, type = 'application/x-pkcs12') {
  const copied = new Uint8Array(bytes);
  const file = new File([copied], name, { type });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => copied.buffer });
  return file;
}
async function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

function validateCms(bytes: Uint8Array) {
  const raw = Buffer.from(bytes).toString('latin1');
  const match = raw.match(/\/ByteRange\s*\[\s*(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s*\]/)!;
  expect(match).not.toBeNull();
  const [start1, count1, start2, count2] = match.slice(1).map(Number);
  expect(start1).toBe(0); expect(start2 + count2).toBe(bytes.length);
  const excluded = raw.slice(count1, start2);
  expect(excluded).toMatch(/^<[0-9a-f]+>$/i);
  const padded = forge.util.hexToBytes(excluded.slice(1, -1));
  const firstLength = padded.charCodeAt(1);
  const lengthBytes = firstLength & 0x80 ? firstLength & 0x7f : 0;
  expect(lengthBytes).toBeLessThanOrEqual(4);
  let contentLength = lengthBytes ? 0 : firstLength;
  for (let index = 0; index < lengthBytes; index++) contentLength = contentLength * 256 + padded.charCodeAt(2 + index);
  const cmsLength = 2 + lengthBytes + contentLength;
  expect(padded.slice(cmsLength)).toMatch(/^\0*$/);
  const cms = padded.slice(0, cmsLength);
  const asn1 = forge.asn1.fromDer(cms);
  const signedData = (asn1.value as forge.asn1.Asn1[])[1].value as forge.asn1.Asn1[];
  const fields = signedData[0].value as forge.asn1.Asn1[];
  const signers = fields[fields.length - 1].value as forge.asn1.Asn1[];
  const signer = signers[0].value as forge.asn1.Asn1[];
  const attributes = signer[3].value as forge.asn1.Asn1[];
  const signedBytes = Buffer.concat([Buffer.from(bytes.slice(start1, start1 + count1)), Buffer.from(bytes.slice(start2, start2 + count2))]);
  const digestAttribute = attributes.find(attribute => forge.asn1.derToOid((attribute.value as forge.asn1.Asn1[])[0].value as string) === forge.pki.oids.messageDigest)!;
  const expectedDigest = ((digestAttribute.value as forge.asn1.Asn1[])[1].value as forge.asn1.Asn1[])[0].value as string;
  expect(Buffer.from(expectedDigest, 'binary').toString('hex')).toBe(createHash('sha256').update(signedBytes).digest('hex'));
  const attributeSet = forge.asn1.create(forge.asn1.Class.UNIVERSAL, forge.asn1.Type.SET, true, attributes);
  const attributeBytes = Buffer.from(forge.asn1.toDer(attributeSet).getBytes(), 'binary');
  const certificates = fields.find(field => field.tagClass === forge.asn1.Class.CONTEXT_SPECIFIC && field.type === 0)!;
  const certificate = forge.pki.certificateFromAsn1((certificates.value as forge.asn1.Asn1[])[0]);
  const signature = Buffer.from(signer[5].value as string, 'binary');
  expect(verify('RSA-SHA256', attributeBytes, forge.pki.certificateToPem(certificate), signature)).toBe(true);
  return { cms: Buffer.from(cms, 'binary'), signedBytes, certificate };
}

describe('Certificate cryptor real output', () => {
  it.each(['gold', 'red', 'bronze'] as const)('creates a verifiable %s seal signature while retaining pages, annotations and form fields', async waxColor => {
    const result = await encryptAndSignCert(source, { waxColor, sealX: 0, sealY: 125, certificateFile, pfxPassword: certificatePassword });
    expect(result.success).toBe(true);
    expect(result.filename).toBe('certificate_signed.pdf');
    const bytes = new Uint8Array(await readBlob(result.result as Blob));
    validateCms(bytes);
    const pdf = await PDFDocument.load(bytes, { updateMetadata: false });
    expect(pdf.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual([[200, 300], [400, 500]]);
    const annotations = pdf.getPage(0).node.Annots()!;
    expect(annotations.size()).toBe(2);
    expect(annotations.lookup(0, PDFDict).lookup(PDFName.of('Subtype'), PDFName).toString()).toBe('/Link');
    const fields = pdf.catalog.lookup(PDFName.of('AcroForm'), PDFDict).lookup(PDFName.of('Fields'), PDFArray);
    expect(fields.size()).toBe(2);
    expect(fields.lookup(0, PDFDict).lookup(PDFName.of('FT'), PDFName).toString()).toBe('/Tx');
    expect(result.metadata?.encrypted).toBe(false);
    expect(result.metadata?.certificate).toBeUndefined();
    expect(result.metadata?.generatedCertificate).toBe(false);
    const outputDirectory = process.env.AWSOMEPDF_CERT_FIXTURE_DIR;
    if (outputDirectory) {
      await mkdir(outputDirectory, { recursive: true });
      const { cms, signedBytes } = validateCms(bytes);
      await writeFile(path.join(outputDirectory, waxColor + '.pdf'), bytes);
      await writeFile(path.join(outputDirectory, waxColor + '.p7s'), cms);
      await writeFile(path.join(outputDirectory, waxColor + '.signed-content'), signedBytes);
    }
  });

  it('returns the generated P12 needed to keep or open a locally signed document', async () => {
    const result = await encryptAndSignCert(source, { waxColor: 'gold', pfxPassword: certificatePassword });
    expect(result.success).toBe(true);
    const bytes = new Uint8Array(await readBlob(result.result as Blob));
    const { certificate } = validateCms(bytes);
    expect(result.metadata?.generatedCertificate).toBe(true);
    const p12 = new Uint8Array(await readBlob(result.metadata?.certificate as Blob));
    const parsed = forge.pkcs12.pkcs12FromAsn1(forge.asn1.fromDer(forge.util.createBuffer(p12)), certificatePassword);
    const cert = parsed.getBags({ bagType: forge.pki.oids.certBag })[forge.pki.oids.certBag]![0].cert!;
    expect(cert.serialNumber).toBe(certificate.serialNumber);
    expect(cert.verify(cert)).toBe(true);
    expect(result.metadata?.certificateFilename).toBe('certificate_certificate.p12');
  });

  it('signs and encrypts with AES-256 for the selected certificate without network access', async () => {
    const fetch = vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network is forbidden'));
    try {
      const result = await encryptAndSignCert(source, { waxColor: 'gold', certificateFile, pfxPassword: certificatePassword, encryptWithCert: true });
      expect(result.success).toBe(true);
      const bytes = new Uint8Array(await readBlob(result.result as Blob));
      validateCms(bytes);
      const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
      const encryption = pdf.context.lookup(pdf.context.trailerInfo.Encrypt, PDFDict);
      expect(encryption.lookup(PDFName.of('Filter'), PDFName).toString()).toBe('/Adobe.PubSec');
      expect(encryption.lookup(PDFName.of('Length'), PDFNumber).asNumber()).toBe(256);
      const filterName = encryption.lookup(PDFName.of('StmF'), PDFName);
      const filter = encryption.lookup(PDFName.of('CF'), PDFDict).lookup(filterName, PDFDict);
      expect(filter.lookup(PDFName.of('CFM'), PDFName).toString()).toBe('/AESV3');
      const recipients = filter.lookup(PDFName.of('Recipients'), PDFArray);
      expect(recipients.size()).toBe(1);
      const p12 = forge.pkcs12.pkcs12FromAsn1(forge.asn1.fromDer(forge.util.createBuffer(new Uint8Array(await certificateFile.arrayBuffer()))), certificatePassword);
      const key = p12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag })[forge.pki.oids.pkcs8ShroudedKeyBag]![0].key!;
      const cert = p12.getBags({ bagType: forge.pki.oids.certBag })[forge.pki.oids.certBag]![0].cert!;
      const envelope = forge.pkcs7.messageFromAsn1(forge.asn1.fromDer(forge.util.createBuffer(new Uint8Array(recipients.lookup(0, PDFHexString).asBytes())))) as forge.pkcs7.PkcsEnvelopedData;
      envelope.decrypt(envelope.findRecipient(cert)!, key);
      expect(typeof envelope.content === 'string' ? envelope.content.length : envelope.content?.length()).toBe(24);
      const envelopeBytes = Buffer.from(typeof envelope.content === 'string' ? envelope.content : envelope.content!.bytes(), 'binary');
      const recipientDer = Buffer.from(recipients.lookup(0, PDFHexString).asBytes());
      const fileKey = createHash('sha256').update(envelopeBytes.subarray(0, 20)).update(recipientDer).digest();
      const contentStreams = pdf.getPage(0).node.Contents() as PDFArray;
      const plain = contentStreams.asArray().map(reference => {
        const stream = pdf.context.lookup(reference);
        if (!(stream instanceof PDFRawStream)) throw new Error('Expected an encrypted PDF stream');
        const cipher = Buffer.from(stream.getContents());
        const decipher = createDecipheriv('aes-256-cbc', fileKey, cipher.subarray(0, 16));
        const decoded = Buffer.concat([decipher.update(cipher.subarray(16)), decipher.final()]);
        return stream.dict.has(PDFName.of('Filter')) ? inflateSync(decoded).toString() : decoded.toString();
      }).join('\n');
      expect(plain).toContain(Buffer.from('Original document content').toString('hex').toUpperCase());
      expect(plain).toContain('0.85 0.65 0.15 rg');
      expect(result.metadata?.encrypted).toBe(true);
      expect(fetch).not.toHaveBeenCalled();
    } finally { fetch.mockRestore(); }
  });

  it('serializes simultaneous signatures without corrupting cached PDF references', async () => {
    const results = await Promise.all(['gold', 'red'].map(waxColor => encryptAndSignCert(source, {
      waxColor: waxColor as 'gold' | 'red', certificateFile, pfxPassword: certificatePassword,
    })));
    for (const result of results) {
      expect(result.success).toBe(true);
      validateCms(new Uint8Array(await readBlob(result.result as Blob)));
    }
  });

  it('reports an invalid certificate and allows subsequent work instead of leaving the signing queue locked', async () => {
    const invalid = await encryptAndSignCert(source, { waxColor: 'red', certificateFile: makeFile(new TextEncoder().encode('invalid'), 'invalid.p12'), pfxPassword: 'wrong' });
    expect(invalid.success).toBe(false); expect(invalid.result).toBeUndefined();
    const valid = await encryptAndSignCert(source, { waxColor: 'red', certificateFile, pfxPassword: certificatePassword });
    expect(valid.success).toBe(true);
    validateCms(new Uint8Array(await readBlob(valid.result as Blob)));
  });
});
