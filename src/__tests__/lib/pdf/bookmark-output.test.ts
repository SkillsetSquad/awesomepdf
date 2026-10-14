import { describe, expect, it } from 'vitest';
import { PDFArray, PDFDict, PDFDocument, PDFHexString, PDFName, PDFNumber, PDFRawStream, PDFRef, PDFString, decodePDFRawStream, degrees } from 'pdf-lib';
import { createFileFixture, readBlobBytes } from '@/__tests__/helpers/file-fixture';
import { processBookmarks } from '@/lib/pdf/processors/bookmark';
import { insertBookmarkAfter, moveBookmark, type BookmarkNode } from '@/lib/pdf/bookmark-tree';

async function createBookmarkedPDF() {
  const pdf = await PDFDocument.create();
  pdf.setTitle('Synthetic bookmarked document');
  const first = pdf.addPage([600, 800]); first.drawText('Chapter one');
  const second = pdf.addPage([400, 500]); second.drawText('Chapter two');
  second.setCropBox(10, 20, 300, 400); second.setRotation(degrees(90));
  const field = pdf.getForm().createTextField('example');
  field.setText('Preserved form value'); field.addToPage(first, { x: 50, y: 100, width: 200, height: 20 });
  const link = pdf.context.register(pdf.context.obj({
    Type: 'Annot', Subtype: 'Link', Rect: [10, 20, 100, 40],
    A: { S: 'URI', URI: PDFString.of('https://example.com/') },
  }));
  const note = pdf.context.register(pdf.context.obj({
    Type: 'Annot', Subtype: 'Text', Rect: [20, 50, 40, 70], Contents: PDFString.of('Preserved note'),
  }));
  second.node.set(PDFName.of('Annots'), pdf.context.obj([link, note]));
  const root = pdf.context.obj({ Type: 'Outlines', Count: 3 });
  const rootRef = pdf.context.register(root);
  const parent = pdf.context.obj({ Title: PDFHexString.fromText('Chapter'), Parent: rootRef, Dest: [first.ref, 'Fit'], Count: 2 });
  const parentRef = pdf.context.register(parent);
  const child = pdf.context.obj({ Title: PDFHexString.fromText('Section'), Parent: parentRef, Dest: [second.ref, 'Fit'], Count: 1 });
  const childRef = pdf.context.register(child);
  const nested = pdf.context.obj({ Title: PDFHexString.fromText('Subsection'), Parent: childRef, Dest: [second.ref, 'Fit'] });
  const nestedRef = pdf.context.register(nested);
  root.set(PDFName.of('First'), parentRef); root.set(PDFName.of('Last'), parentRef);
  parent.set(PDFName.of('First'), childRef); parent.set(PDFName.of('Last'), childRef);
  child.set(PDFName.of('First'), nestedRef); child.set(PDFName.of('Last'), nestedRef);
  pdf.catalog.set(PDFName.of('Outlines'), rootRef);
  const bytes = await pdf.save();
  return { file: createFileFixture('book.pdf', bytes, 'application/pdf'), bytes };
}

function pageStreams(pdf: PDFDocument) {
  return pdf.getPages().map(page => {
    const contents = page.node.lookup(PDFName.of('Contents'), PDFArray);
    return contents.asArray().map(ref => {
      const stream = pdf.context.lookup(ref);
      if (!(stream instanceof PDFRawStream)) throw new Error('Expected a page content stream');
      return new TextDecoder().decode(decodePDFRawStream(stream).decode());
    });
  });
}

describe('Bookmark removal PDF output', () => {
  it('removes a nested outline while retaining page geometry, text, forms, links, and annotations', async () => {
    const { file, bytes } = await createBookmarkedPDF();
    const source = await PDFDocument.load(bytes);
    const root = source.catalog.lookup(PDFName.of('Outlines'), PDFDict);
    const parent = root.lookup(PDFName.of('First'), PDFDict);
    const child = parent.lookup(PDFName.of('First'), PDFDict);
    expect(child.lookup(PDFName.of('First'), PDFDict).lookup(PDFName.of('Title'), PDFHexString).decodeText()).toBe('Subsection');

    const output = await processBookmarks(file, { action: 'add', bookmarks: [] });
    expect(output.success, output.error?.details).toBe(true);
    expect(output.filename).toBe('book_bookmarked.pdf');
    if (!(output.result instanceof Blob)) throw new Error('Expected a PDF blob');
    expect(output.result.type).toBe('application/pdf');
    const saved = await PDFDocument.load(await readBlobBytes(output.result));
    expect(saved.catalog.has(PDFName.of('Outlines'))).toBe(false);
    expect(saved.getPageCount()).toBe(2);
    expect(saved.getPages().map(page => [page.getMediaBox(), page.getCropBox(), page.getRotation()]))
      .toEqual(source.getPages().map(page => [page.getMediaBox(), page.getCropBox(), page.getRotation()]));
    expect(pageStreams(saved)).toEqual(pageStreams(source));
    expect(saved.getTitle()).toBe('Synthetic bookmarked document');
    expect(saved.getForm().getTextField('example').getText()).toBe('Preserved form value');
    expect(saved.getForm().getTextField('example').acroField.getWidgets()).toHaveLength(1);
    const annotations = saved.getPage(1).node.lookup(PDFName.of('Annots'), PDFArray);
    expect(annotations.size()).toBe(2);
    expect(annotations.lookup(0, PDFDict).lookup(PDFName.of('A'), PDFDict).lookup(PDFName.of('URI'), PDFString).decodeText()).toBe('https://example.com/');
    expect(annotations.lookup(1, PDFDict).lookup(PDFName.of('Contents'), PDFString).decodeText()).toBe('Preserved note');
    expect(new Uint8Array(await file.arrayBuffer())).toEqual(bytes);
    expect(source.catalog.has(PDFName.of('Outlines'))).toBe(true);
  });

  it('handles an already empty outline and supports adding bookmarks again', async () => {
    const { file } = await createBookmarkedPDF();
    const removed = await processBookmarks(file, { action: 'add', bookmarks: [] });
    if (!(removed.result instanceof Blob)) throw new Error('Expected a PDF blob');
    const emptyFile = createFileFixture('empty.pdf', await readBlobBytes(removed.result), 'application/pdf');
    const repeated = await processBookmarks(emptyFile, { action: 'add', bookmarks: [] });
    expect(repeated.success).toBe(true);
    if (!(repeated.result instanceof Blob)) throw new Error('Expected a PDF blob');
    const empty = await PDFDocument.load(await readBlobBytes(repeated.result));
    expect(empty.catalog.has(PDFName.of('Outlines'))).toBe(false);
    const added = await processBookmarks(emptyFile, { action: 'add', bookmarks: [{ id: 'new', title: 'New chapter', pageNumber: 2 }] });
    expect(added.success).toBe(true);
    if (!(added.result instanceof Blob)) throw new Error('Expected a PDF blob');
    const saved = await PDFDocument.load(await readBlobBytes(added.result));
    const outline = saved.catalog.lookup(PDFName.of('Outlines'), PDFDict);
    expect(outline.lookup(PDFName.of('First'), PDFDict).lookup(PDFName.of('Title'), PDFHexString).decodeText()).toBe('New chapter');
  });

  it('exports inserted and moved bookmarks in tree order with correct destinations and styles', async () => {
    const { file, bytes } = await createBookmarkedPDF();
    const original = await PDFDocument.load(bytes);
    const chapter: BookmarkNode = { id: 'chapter', title: 'Chapter', pageNumber: 1, children: [
      { id: 'section', title: 'Section', pageNumber: 2, color: '#123456', style: 'bold-italic', children: [] },
    ], isExpanded: true };
    let tree = [chapter, { id: 'tail', title: 'Tail', pageNumber: 2, children: [], isExpanded: true }];
    tree = insertBookmarkAfter(tree, { id: 'inserted', title: 'Inserted', pageNumber: 2, children: [] }, 'section');
    tree = moveBookmark(tree, 'chapter', 'tail', 'inside');
    const convert = (nodes: BookmarkNode[]): import('@/lib/pdf/processors/bookmark').BookmarkItem[] => nodes.map(({ isExpanded, children, ...item }) => ({ ...item, expanded: isExpanded, children: convert(children) }));
    const output = await processBookmarks(file, { action: 'add', bookmarks: convert(tree) });
    expect(output.success, output.error?.details).toBe(true);
    if (!(output.result instanceof Blob)) throw new Error('Expected a PDF blob');
    const saved = await PDFDocument.load(await readBlobBytes(output.result));
    function readOutline(parent: PDFDict): Array<{ title: string; page: number; children: ReturnType<typeof readOutline> }> {
      const result: Array<{ title: string; page: number; children: ReturnType<typeof readOutline> }> = [];
      let next = parent.get(PDFName.of('First'));
      while (next) {
        const item = saved.context.lookup(next, PDFDict);
        const destination = item.lookup(PDFName.of('Dest'), PDFArray).get(0);
        if (!(destination instanceof PDFRef)) throw new Error('Expected a bookmark page reference');
        result.push({ title: item.lookup(PDFName.of('Title'), PDFHexString).decodeText(), page: saved.getPages().findIndex(page => page.ref.toString() === destination.toString()) + 1, children: readOutline(item) });
        next = item.get(PDFName.of('Next'));
      }
      return result;
    }
    const root = saved.catalog.lookup(PDFName.of('Outlines'), PDFDict);
    expect(readOutline(root)).toEqual([{ title: 'Tail', page: 2, children: [{ title: 'Chapter', page: 1, children: [
      { title: 'Section', page: 2, children: [] }, { title: 'Inserted', page: 2, children: [] },
    ] }] }]);
    const section = root.lookup(PDFName.of('First'), PDFDict).lookup(PDFName.of('First'), PDFDict).lookup(PDFName.of('First'), PDFDict);
    expect(section.lookup(PDFName.of('F'), PDFNumber).asNumber()).toBe(3);
    const color = section.lookup(PDFName.of('C'), PDFArray);
    expect(color.asArray().map(value => saved.context.lookup(value, PDFNumber).asNumber())).toEqual([18 / 255, 52 / 255, 86 / 255]);
    expect(saved.getPageCount()).toBe(original.getPageCount());
    expect(pageStreams(saved)).toEqual(pageStreams(original));
    expect(saved.getForm().getTextField('example').getText()).toBe('Preserved form value');
  });
});
