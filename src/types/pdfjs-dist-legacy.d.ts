/**
 * Type declarations for pdfjs-dist-legacy
 * This is an alias for pdfjs-dist@2.16.105
 */

declare module 'pdfjs-dist-legacy' {
    export * from 'pdfjs-dist-legacy/types/src/pdf';
}

declare module 'pdfjs-dist-legacy/lib/display/svg' {
    export class SVGGraphics {
        constructor(
          commonObjs: import('pdfjs-dist-legacy/types/src/display/api').PDFPageProxy['commonObjs'],
          objs: import('pdfjs-dist-legacy/types/src/display/api').PDFPageProxy['objs']
        );
        embedFonts: boolean;
        getSVG(
          operatorList: import('pdfjs-dist-legacy/types/src/display/api').PDFOperatorList,
          viewport: import('pdfjs-dist-legacy/types/src/display/display_utils').PageViewport
        ): Promise<SVGElement>;
    }
}
