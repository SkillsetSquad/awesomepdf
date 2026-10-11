/** Shared by the browser engine and the real WASM output verification script. */
export const REDACTION_SCRIPT = String.raw`
def _awesomepdf_redaction(input_path, request_path):
    import base64
    import json
    import math
    import pymupdf

    def native_pdf_matrix(page):
        # In 1.26.3 a rotated page's transformation_matrix omits CropBox offsets.
        # Read the true PDF-to-unrotated-page matrix, then restore its rotation.
        rotation = page.rotation
        try:
            page.set_rotation(0)
            return page.transformation_matrix
        finally:
            page.set_rotation(rotation)

    with open(request_path, encoding="utf-8") as request_file:
        request = json.load(request_file)
    doc = pymupdf.open(input_path)
    output = None
    try:
        if not doc.is_pdf or doc.needs_pass:
            raise ValueError("Please decrypt the PDF before redacting it.")
        if request["action"] == "text":
            lines = []
            for page in doc:
                inverse = ~native_pdf_matrix(page)
                for block in page.get_text("rawdict")["blocks"]:
                    for line in block.get("lines", []):
                        chars = []
                        for span in line["spans"]:
                            for char in span["chars"]:
                                rect = pymupdf.Rect(char["bbox"]) * inverse
                                origin = pymupdf.Point(char["origin"]) * inverse
                                chars.append({"text": char["c"], "rect": list(rect), "origin": list(origin)})
                        if chars:
                            lines.append({"page": page.number + 1, "chars": chars})
            return json.dumps(lines)

        by_page = {}
        for area in request["areas"]:
            number = area["page"]
            if not isinstance(number, int) or not 1 <= number <= len(doc):
                raise ValueError("Invalid redaction page")
            page = doc[number - 1]
            values = area["rect"]
            if not all(isinstance(v, (int, float)) and math.isfinite(v) for v in values):
                raise ValueError("Invalid redaction coordinates")
            rect = pymupdf.Rect(values)
            if area["coordinates"] == "display":
                sx = page.rect.width / area.get("pageWidth", page.rect.width)
                sy = page.rect.height / area.get("pageHeight", page.rect.height)
                rect = pymupdf.Rect(rect.x0 * sx, rect.y0 * sy, rect.x1 * sx, rect.y1 * sy)
                rect = rect * page.derotation_matrix
            else:
                rect = rect * native_pdf_matrix(page)
            rect &= page.rect * page.derotation_matrix
            if rect.is_empty or rect.is_infinite:
                raise ValueError("Redaction area is outside the page")
            color = tuple(int(area["color"][i:i+2], 16) / 255 for i in (1, 3, 5))
            by_page.setdefault(number - 1, []).append((rect, color, area))

        for page in doc:
            # Remove ancillary copies, including existing redaction annotations.
            for annot in list(page.annots() or []):
                page.delete_annot(annot)
            for widget in list(page.widgets() or []):
                page.delete_widget(widget)
            for rect, color, area in by_page.get(page.number, []):
                page.add_redact_annot(rect, fill=color, cross_out=False)
            if page.number in by_page:
                if not page.apply_redactions(images=2, graphics=2, text=0):
                    raise ValueError("The PDF engine did not apply the redactions")
                # Add optional replacement text only after original content is removed.
                for rect, color, area in by_page[page.number]:
                    if area.get("label"):
                        foreground = (1, 1, 1) if sum(color) < 1.5 else (0, 0, 0)
                        page.insert_textbox(rect, area["label"], fontsize=min(10, rect.height * .6),
                                            color=foreground, align=1)
                    if area.get("border"):
                        page.draw_rect(rect, color=(.3, .3, .3), width=.5)

        doc.scrub(metadata=True, xml_metadata=True, embedded_files=True, attached_files=True,
                  javascript=True, remove_links=True, reset_fields=False,
                  hidden_text=False, redactions=False, clean_pages=True)
        doc.set_toc([])
        # Tagged PDF alternate text and private catalog/page metadata can retain copies.
        for key in ("StructTreeRoot", "MarkInfo", "PieceInfo", "Names", "AcroForm", "OpenAction", "AA"):
            doc.xref_set_key(doc.pdf_catalog(), key, "null")
        for page in doc:
            for key in ("Metadata", "PieceInfo", "AA"):
                doc.xref_set_key(page.xref, key, "null")

        if request.get("flattenAllPages"):
            output = pymupdf.open()
            for page in doc:
                scale = min(request.get("renderScale", 2), 4096 / max(page.rect.width, page.rect.height))
                pixmap = page.get_pixmap(matrix=pymupdf.Matrix(scale, scale), alpha=False)
                target = output.new_page(width=page.rect.width, height=page.rect.height)
                target.insert_image(target.rect, stream=pixmap.tobytes("png"))
        else:
            output = doc
        # Full rewrite: old revisions and unreachable objects never enter the output.
        data = output.tobytes(garbage=4, deflate=True, clean=True)
        with pymupdf.open(stream=data, filetype="pdf") as verified:
            if len(verified) != len(doc):
                raise ValueError("Redaction output has an invalid page count")
        return base64.b64encode(data).decode("ascii")
    finally:
        if output is not None and output is not doc:
            output.close()
        doc.close()
`;
