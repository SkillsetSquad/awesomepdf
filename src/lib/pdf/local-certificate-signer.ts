import type { Crypto, PdfSigner } from 'zgapdfsigner';
import type Forge from 'node-forge';

type LocalEngine = { PdfSigner: typeof PdfSigner; Crypto: typeof Crypto; newRefs: { size: number; restoreAll(): void } };
let pendingOperation: Promise<void> = Promise.resolve();

/** The signer temporarily changes pdf-lib's cached PDFRefs, so keep its operations sequential. */
export async function withLocalCertificateSigner<T>(operation: (engine: LocalEngine) => Promise<T>): Promise<T> {
  const previous = pendingOperation;
  let release!: () => void;
  pendingOperation = new Promise(resolve => { release = resolve; });
  await previous;
  let engine: LocalEngine | undefined;
  try { engine = await createLocalCertificateSigner(); return await operation(engine); }
  finally { try { if (engine?.newRefs.size) engine.newRefs.restoreAll(); } finally { release(); } }
}

/** A per-operation signer with no timestamp, issuer, revocation or document network requests. */
export async function createLocalCertificateSigner() {
  const [forgeModule, pdfLib, certificates, cryptor, signer] = await Promise.all([
    import('node-forge'), import('pdf-lib'), import('zgapdfsigner/lib/zgacertsutil.js'),
    import('zgapdfsigner/lib/zgapdfcryptor.js'), import('zgapdfsigner/lib/zgapdfsigner.js'),
  ]);
  const forge = forgeModule.default;
  // The installed library's factories accept isolated bindings. Its default Node
  // entrypoint also initializes remote certificate fetching, which this local tool does not need.
  const bindings: Record<string, unknown> = {
    forge, PDFLib: pdfLib, log: () => {},
    u8arrToRaw: (bytes: Uint8Array) => Array.from(bytes, byte => String.fromCharCode(byte)).join(''),
    rawToU8arr: (raw: string) => Uint8Array.from(raw, character => character.charCodeAt(0)),
  };
  certificates.default(bindings); cryptor.default(bindings); signer.default(bindings);
  return bindings as LocalEngine;
}

export async function createLocalSigningCertificate(password: string) {
  const { default: forge } = await import('node-forge');
  const keys = await new Promise<Forge.pki.rsa.KeyPair>((resolve, reject) => {
    forge.pki.rsa.generateKeyPair({ bits: 2048, workers: 0 }, (error, pair) => {
      if (error) reject(error); else resolve(pair);
    });
  });
  const certificate = forge.pki.createCertificate();
  certificate.publicKey = keys.publicKey;
  certificate.serialNumber = '01' + forge.util.bytesToHex(forge.random.getBytesSync(15));
  certificate.validity.notBefore = new Date();
  certificate.validity.notAfter = new Date();
  certificate.validity.notAfter.setFullYear(certificate.validity.notAfter.getFullYear() + 1);
  const subject = [{ name: 'commonName', value: 'AwsomePDF Local Seal' }];
  certificate.setSubject(subject); certificate.setIssuer(subject);
  certificate.setExtensions([{ name: 'basicConstraints', cA: false }, { name: 'keyUsage', digitalSignature: true, keyEncipherment: true }]);
  certificate.sign(keys.privateKey, forge.md.sha256.create());
  const p12 = forge.pkcs12.toPkcs12Asn1(keys.privateKey, [certificate], password, { algorithm: '3des' });
  const binary = forge.asn1.toDer(p12).getBytes();
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}
