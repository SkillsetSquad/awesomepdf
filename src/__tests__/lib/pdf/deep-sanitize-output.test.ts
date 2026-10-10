import { PDFDict, PDFDocument, PDFName } from 'pdf-lib';
import { describe, expect, it, vi } from 'vitest';
import { deepSanitizePDF } from '@/lib/pdf/processors/deep-sanitize';

vi.mock('@/lib/pdf/loader', () => ({ loadPdfLib: () => import('pdf-lib') }));

async function readBlob(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as ArrayBuffer);
    reader.onerror = () => reject(reader.error);
    reader.readAsArrayBuffer(blob);
  });
}

describe('Deep Sanitize real PDF output', () => {
  it.each(['direct', 'indirect', 'inherited'] as const)('preserves unselected metadata, links and %s layer resources', async resourceType => {
    const { file, title, producer, modified } = await fixture(resourceType);
    const result = await deepSanitizePDF(file, { stripMetadata: false, stripPieceInfo: false, stripOcgWatermarks: false, stripAnnotations: false });
    expect(result.success).toBe(true);
    const output = await PDFDocument.load(await readBlob(result.result as Blob), { updateMetadata: false });
    expect(output.getTitle()).toBe(title);
    expect(output.getProducer()).toBe(producer);
    expect(output.getModificationDate()).toEqual(modified);
    for (const key of ['Metadata', 'PieceInfo', 'StructTreeRoot', 'OCProperties']) expect(output.catalog.has(PDFName.of(key))).toBe(true);
    for (const page of output.getPages()) {
      expect(page.node.Resources()?.has(PDFName.of('Properties'))).toBe(true);
      expect(page.node.has(PDFName.of('Annots'))).toBe(true);
    }
    expect(result.metadata?.findings).toEqual(['Incremental revision history logs (forces full xref reconstruction)']);
    expect(output.getPages().map(page => [page.getWidth(), page.getHeight()])).toEqual([[200, 300], [400, 500]]);
  });

  it.each(['direct', 'indirect', 'inherited'] as const)('removes selected %s layer properties while retaining other page resources and unselected data', async resourceType => {
    const { file, title, producer, modified } = await fixture(resourceType);
    const result = await deepSanitizePDF(file, { stripMetadata: false, stripPieceInfo: false, stripOcgWatermarks: true, stripAnnotations: false });
    expect(result.success).toBe(true);
    const output = await PDFDocument.load(await readBlob(result.result as Blob), { updateMetadata: false });
    expect(output.catalog.has(PDFName.of('OCProperties'))).toBe(false);
    expect(output.getTitle()).toBe(title);
    expect(output.getProducer()).toBe(producer);
    expect(output.getModificationDate()).toEqual(modified);
    for (const key of ['Metadata', 'PieceInfo', 'StructTreeRoot']) expect(output.catalog.has(PDFName.of(key))).toBe(true);
    for (const page of output.getPages()) {
      const resources = page.node.Resources()!;
      expect(resources.has(PDFName.of('Properties'))).toBe(false);
      expect(resources.lookup(PDFName.of('Font'), PDFDict).has(PDFName.of('PreservedFont'))).toBe(true);
      expect(page.node.has(PDFName.of('Annots'))).toBe(true);
    }
  });

  it('reports changes to page layer properties when the catalog has no optional-content dictionary', async () => {
    const { file } = await fixture('indirect', false);
    const result = await deepSanitizePDF(file, { stripMetadata: false, stripPieceInfo: false, stripOcgWatermarks: true, stripAnnotations: false });
    expect(result.success).toBe(true);
    const output = await PDFDocument.load(await readBlob(result.result as Blob), { updateMetadata: false });
    expect(output.getPage(0).node.Resources()?.has(PDFName.of('Properties'))).toBe(false);
    expect(result.metadata?.findings).toContain('OCProperties layers (often host invisible watermarks)');
  });
});

async function fixture(resourceType: 'direct' | 'indirect' | 'inherited', catalogLayers = true) {
  const pdf = await PDFDocument.create({ updateMetadata: false });
  const title = 'Preserved title', producer = 'Original producer', modified = new Date('2001-02-03T04:05:06Z');
  pdf.setTitle(title); pdf.setProducer(producer); pdf.setModificationDate(modified);
  pdf.catalog.set(PDFName.of('Metadata'), pdf.context.register(pdf.context.stream('<xmp>Keep metadata</xmp>')));
  pdf.catalog.set(PDFName.of('PieceInfo'), pdf.context.obj({ Editor: {} }));
  pdf.catalog.set(PDFName.of('StructTreeRoot'), pdf.context.obj({ Type: 'StructTreeRoot', K: [] }));
  if (catalogLayers) pdf.catalog.set(PDFName.of('OCProperties'), pdf.context.obj({ OCGs: [], D: {} }));
  const resources = pdf.context.obj({ Properties: { Layer: { Type: 'OCG', Name: 'Layer' } }, Font: { PreservedFont: { Type: 'Font', Subtype: 'Type1', BaseFont: 'Helvetica' } } });
  const resourceValue = resourceType === 'direct' ? resources : pdf.context.register(resources);
  for (const dimensions of [[200, 300], [400, 500]] satisfies [number, number][]) {
    const page = pdf.addPage(dimensions);
    page.node.set(PDFName.of('Annots'), pdf.context.obj([{ Type: 'Annot', Subtype: 'Link', Rect: [0, 0, 10, 10] }]));
    if (resourceType === 'inherited') {
      page.node.delete(PDFName.of('Resources'));
      page.node.Parent()!.set(PDFName.of('Resources'), resourceValue);
    } else page.node.set(PDFName.of('Resources'), resourceValue);
  }
  const bytes = await pdf.save();
  const file = new File([new Uint8Array(bytes)], 'layers.pdf', { type: 'application/pdf' });
  Object.defineProperty(file, 'arrayBuffer', { value: async () => new Uint8Array(bytes).buffer });
  return { file, title, producer, modified };
}
