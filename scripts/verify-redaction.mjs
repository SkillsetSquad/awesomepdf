// Real bundled PyMuPDF/WASM verification, independent of jsdom and mocks.
import assert from 'node:assert/strict';
import { copyFile, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const temporary = await mkdtemp(join(tmpdir(), 'awesomepdf-redaction-'));
try {
  // The bundled Emscripten runtime expects CommonJS in Node. Keep vendor files intact.
  const assets = resolve('public/pymupdf-wasm');
  for (const name of ['pyodide.asm.js', 'pyodide.asm.wasm', 'python_stdlib.zip', 'pyodide-lock.json']) {
    await copyFile(join(assets, name), join(temporary, name));
  }
  await copyFile(join(assets, 'pyodide.js'), join(temporary, 'pyodide.mjs'));
  await writeFile(join(temporary, 'package.json'), '{"type":"commonjs"}');
  const { loadPyodide } = await import(pathToFileURL(join(temporary, 'pyodide.mjs')).href);
  const runtime = await loadPyodide({ indexURL: `${temporary}/` });
  await runtime.loadPackage(join(assets, 'pymupdf-1.26.3-cp313-none-pyodide_2025_0_wasm32.whl'));
  const source = await readFile('src/lib/pdf/redaction-script.ts', 'utf8');
  const script = source.match(/String\.raw`([\s\S]*)`;/)?.[1];
  assert.ok(script, 'Production redaction script must be present');
  await runtime.runPythonAsync(script);
  const result = await runtime.runPythonAsync(String.raw`
import base64, json, pymupdf

def redact(doc, areas, **options):
    doc.save('/fixture.pdf', deflate=True)
    doc.close()
    with open('/request.json', 'w') as f:
        json.dump(dict(action='redact', areas=areas, **options), f)
    encoded = _awesomepdf_redaction('/fixture.pdf', '/request.json')
    return pymupdf.open(stream=base64.b64decode(encoded), filetype='pdf')

def area(page, rect, coordinates='pdf', **kwargs):
    return dict(page=page, rect=list(rect), coordinates=coordinates, color='#000000', **kwargs)

def assert_absent(doc, secret):
    assert secret not in ''.join(p.get_text() for p in doc), 'Text extraction leak'
    for xref in range(1, doc.xref_length()):
        assert secret not in doc.xref_object(xref), 'Object dictionary leak'
        if doc.xref_is_stream(xref):
            stream = doc.xref_stream(xref)
            assert secret.encode() not in stream, 'Decoded stream leak'
            assert secret.encode().hex().lower().encode() not in stream.lower(), 'Hex text leak'

checks = []
for rotation in (0, 90, 180, 270):
    doc = pymupdf.open()
    page = doc.new_page(width=400, height=500)
    page.insert_text((60, 110), 'KEEP secretgy KEEP', fontsize=16)
    page.insert_text((60, 160), 'UNCHANGED', fontsize=16)
    page.set_cropbox(pymupdf.Rect(20, 30, 380, 470))
    page.set_rotation(rotation)
    doc.save('/text-fixture.pdf')
    with open('/text-request.json', 'w') as f:
        json.dump(dict(action='text'), f)
    extracted = json.loads(_awesomepdf_redaction('/text-fixture.pdf', '/text-request.json'))
    assert abs(extracted[0]['chars'][0]['origin'][0] - 60) < .01, 'Search crop X coordinate mismatch'
    assert abs(extracted[0]['chars'][0]['origin'][1] - 390) < .01, 'Search crop Y coordinate mismatch'
    selected = extracted[0]['chars'][5:13]
    bounds = [min(c['rect'][0] for c in selected), min(c['rect'][1] for c in selected),
              max(c['rect'][2] for c in selected), max(c['rect'][3] for c in selected)]
    with open('/text-request.json', 'w') as f:
        json.dump(dict(action='redact', areas=[area(1, bounds)]), f)
    text_output = pymupdf.open(stream=base64.b64decode(_awesomepdf_redaction('/text-fixture.pdf', '/text-request.json')), filetype='pdf')
    assert_absent(text_output, 'secretgy')
    assert 'KEEP' in text_output[0].get_text() and 'UNCHANGED' in text_output[0].get_text()
    assert text_output[0].rotation == rotation
    text_output.close()
    rect = page.search_for('secretgy')[0]
    display = rect * page.rotation_matrix
    # Exercise scaled UI coordinates on cropped and rotated pages.
    scaled = pymupdf.Rect(*(value * 1.5 for value in display))
    pw, ph = page.rect.width * 1.5, page.rect.height * 1.5
    doc.new_page(width=300, height=400).insert_text((40, 80), 'PAGE TWO')
    output = redact(doc, [area(1, scaled, 'display', pageWidth=pw, pageHeight=ph)])
    assert_absent(output, 'secretgy')
    assert 'KEEP' in output[0].get_text() and 'UNCHANGED' in output[0].get_text()
    assert 'PAGE TWO' in output[1].get_text()
    assert output[0].rotation == rotation
    assert output[0].cropbox == pymupdf.Rect(20, 30, 380, 470)
    output.close()
checks.append('scaled rectangles, crop boxes, all four page rotations, descenders and untouched selectable text')

# Encoded TJ text in a nested Form XObject, hidden text, and a touched vector path.
source = pymupdf.open()
page = source.new_page(width=400, height=400)
page.insert_text((40, 80), 'FORMSECRET', fontsize=16)
page.insert_text((40, 80), 'HIDDENSECRET', fontsize=16, render_mode=3)
page.draw_rect(pymupdf.Rect(40, 65, 200, 85), color=(1, 0, 0))
doc = pymupdf.open()
page = doc.new_page(width=400, height=400)
page.show_pdf_page(page.rect, source, 0)
source.close()
output = redact(doc, [area(1, pymupdf.Rect(35, 60, 210, 90) * ~page.transformation_matrix)])
assert_absent(output, 'FORMSECRET')
assert_absent(output, 'HIDDENSECRET')
assert not output[0].get_drawings() or all(d['fill'] == (0, 0, 0) for d in output[0].get_drawings())
output.close()
checks.append('compressed hexadecimal/TJ text, nested Form XObjects, invisible text and touched vector graphics')

# Selected alternate text and invisible optional-content layers must also disappear.
doc = pymupdf.open()
page = doc.new_page(width=400, height=400)
page.insert_text((40, 80), 'TAGGEDSECRET', fontsize=16)
for xref in page.get_contents():
    doc.update_stream(xref, b'/Span << /ActualText (TAGGEDSECRET) >> BDC\n' + doc.xref_stream(xref) + b'\nEMC')
layer = doc.add_ocg('hidden layer', on=False)
page.insert_text((40, 80), 'LAYERSECRET', fontsize=16, oc=layer)
output = redact(doc, [area(1, [35, 60, 210, 90], 'display')])
assert_absent(output, 'TAGGEDSECRET'); assert_absent(output, 'LAYERSECRET')
output.close()
checks.append('tagged alternate text and invisible optional-content layers')

# Remove document-level and interactive copies, including an old incremental revision.
doc = pymupdf.open()
page = doc.new_page(width=400, height=400)
page.insert_text((40, 80), 'ANCILLARYSECRET', fontsize=16)
rect = page.search_for('ANCILLARYSECRET')[0] * ~page.transformation_matrix
doc.set_metadata({'title': 'ANCILLARYSECRET', 'author': 'ANCILLARYSECRET'})
doc.set_xml_metadata('<secret>ANCILLARYSECRET</secret>')
doc.embfile_add('secret.txt', b'ANCILLARYSECRET')
doc.set_toc([[1, 'ANCILLARYSECRET', 1]])
page.add_text_annot((40, 40), 'ANCILLARYSECRET')
widget = pymupdf.Widget()
widget.field_name = 'secret'; widget.field_type = pymupdf.PDF_WIDGET_TYPE_TEXT
widget.field_value = 'ANCILLARYSECRET'; widget.rect = pymupdf.Rect(40, 150, 250, 180)
page.add_widget(widget)
doc.save('/history.pdf')
doc.close()
doc = pymupdf.open('/history.pdf')
doc.set_metadata({'title': 'OLDREVISIONSECRET'})
doc.saveIncr()
doc.close()
with open('/request.json', 'w') as f:
    json.dump(dict(action='redact', areas=[area(1, rect)]), f)
output = pymupdf.open(stream=base64.b64decode(_awesomepdf_redaction('/history.pdf', '/request.json')), filetype='pdf')
assert_absent(output, 'ANCILLARYSECRET'); assert_absent(output, 'OLDREVISIONSECRET')
assert not output.embfile_count() and not output.get_toc()
assert not list(output[0].annots() or []) and not list(output[0].widgets() or [])
output.close()
checks.append('metadata, XML, attachments, bookmarks, annotations, form values and incremental revisions')

# Image pixels are replaced, and the original image object must be absent.
doc = pymupdf.open()
page = doc.new_page(width=200, height=200)
pixmap = pymupdf.Pixmap(pymupdf.csRGB, pymupdf.IRect(0, 0, 100, 100), False)
pixmap.clear_with(255)
pixmap.set_rect(pymupdf.IRect(20, 20, 60, 60), (255, 0, 0))
original_samples = pixmap.samples
page.insert_image(pymupdf.Rect(0, 0, 200, 200), pixmap=pixmap)
output = redact(doc, [area(1, [35, 35, 125, 125], 'display')])
for image in output[0].get_images():
    image_pixmap = pymupdf.Pixmap(output, image[0])
    assert image_pixmap.samples != original_samples, 'Original image pixels retained'
    assert image_pixmap.pixel(40, 40)[:3] != (255, 0, 0), 'Sensitive pixels retained'
rendered = output[0].get_pixmap()
assert rendered.pixel(80, 80)[:3] == (0, 0, 0)
assert rendered.pixel(180, 180)[:3] == (255, 255, 255)
output.close()
checks.append('embedded image extraction, original pixel removal and rendered solid fills')

# Optional rasterization is performed after removal, including selected hidden text.
doc = pymupdf.open()
page = doc.new_page(width=200, height=200)
page.insert_text((30, 60), 'FLATTENSECRET')
output = redact(doc, [area(1, [20, 40, 160, 65], 'display')], flattenAllPages=True, renderScale=2)
assert_absent(output, 'FLATTENSECRET')
assert not output[0].get_text() and output[0].get_images()
output.close()
checks.append('optional lossless full-page rasterization after content removal')

json.dumps(checks)
`);
  for (const check of JSON.parse(result)) console.log(`PASS: ${check}`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
