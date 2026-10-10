declare module 'zgapdfsigner' {
  export namespace Crypto {
    enum Mode { RC4_40, RC4_128, AES_128, AES_256 }
  }
  export interface EncryptOption {
    mode: Crypto.Mode;
    permissions?: string[];
    userpwd?: string;
    ownerpwd?: string;
    pubkeys?: { c?: ArrayBuffer | Uint8Array; p?: string[] }[];
  }
  export interface SignOption {
    p12cert: ArrayBuffer;
    pwd: string;
    reason?: string;
    location?: string;
    contact?: string;
    drawinf?: {
      area: { x: number; y: number; w: number; h: number };
      pageidx: number | string;
      imgInfo?: { imgData: ArrayBuffer; imgType: string };
      textInfo?: { text: string; size: number; color: string };
    };
  }

  export class PdfSigner {
    constructor(options: Record<string, unknown>);
    sign(pdf: Uint8Array | import('pdf-lib').PDFDocument, encryption?: EncryptOption): Promise<Uint8Array>;
  }
}
