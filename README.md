# AwsomePDF

<div align="center">
  <img src="public/images/logo.png" alt="AwsomePDF logo" width="120" height="120" />
  <p>
    <strong>Free PDF tools that run in your browser</strong>
  </p>
  <p>
    Merge, split, compress, convert, and edit PDF files online without uploading to servers.
  </p>
</div>

<div align="center">

[![AwsomePDF website](https://img.shields.io/website?url=https%3A%2F%2Fawsomepdf.com%2Fen%2F&label=AwsomePDF)](https://awsomepdf.com/en/)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-new--york-black?style=flat-square)

</div>

AwsomePDF is based on and modified from [PDFCraft](https://github.com/PDFCraftTool/pdfcraft), maintained by [Skillset Squad Private Limited](https://github.com/SkillsetSquad). Credit for the original tools, processing engines and architecture belongs to the PDFCraft team.

The GitHub repository is standalone, with no fork-network relationship to PDFCraft. Its provenance and AGPLv3 obligations remain unchanged.

[Try AwsomePDF](https://awsomepdf.com/en/) · [Self-hosting guide](DEPLOYMENT.md) · [Contributing](CONTRIBUTING.md) · [Security reporting](#security-reporting) · [Changelog](CHANGELOG.md)

## About

AwsomePDF lets you merge, split, compress, convert, annotate and organize PDF files. It processes documents on your device using JavaScript and WebAssembly, without uploading them to a server. Use the [website](https://awsomepdf.com/en/) or host the application yourself.

Some tools download processing engines, fonts or language data when first used. Offline use depends on which assets are already cached.

## Relationship to PDFCraft

| | PDFCraft (upstream) | AwsomePDF (this fork) |
|---|---|---|
| Repository | [PDFCraftTool/pdfcraft](https://github.com/PDFCraftTool/pdfcraft) | [SkillsetSquad/awsomepdf](https://github.com/SkillsetSquad/awsomepdf) |
| Website | [pdfcraft.devtoolcafe.com](https://pdfcraft.devtoolcafe.com/en/) | [awsomepdf.com](https://awsomepdf.com/) |
| Maintenance | Original project | Independent repository; reviewed upstream patches remain welcome |

### What has changed so far

These changes are recorded in this repository’s history; they do not imply that current PDFCraft lacks each capability. PDFCraft provides the original tool set and processing engines.

| Area | Changes made in this fork | Commit evidence |
| --- | --- | --- |
| Product identity and existing browser data | Packages, desktop installers, extension links and generated document labels use AwsomePDF. Browser storage moves to the new names on the same origin while preserving legacy IndexedDB backups. Original PDFCraft attribution and license notices are retained. | [Product identity and data migration](https://github.com/SkillsetSquad/awesomepdf/commit/ade1e69) |
| Bookmark editing | Insert after the active entry at the previewed page. Move complete subtrees by dragging or with the keyboard/mobile Move dialog. Select visible ranges or individual entries using Ctrl/Cmd-click or checkboxes, confirm removal with descendant counts, and export even an empty bookmark list. | [Remove all](https://github.com/SkillsetSquad/awesomepdf/commit/3fc9a57), [insertion and movement](https://github.com/SkillsetSquad/awesomepdf/commit/a714f28), [selective removal](https://github.com/SkillsetSquad/awesomepdf/commit/291d65e) |
| Interface and navigation | Standard shadcn/ui controls across the shared shell and audited document workspaces, keyboard-accessible settings and dialogs, localized navigation, and previews of actual source and output documents. | [Homepage and navigation](https://github.com/SkillsetSquad/awsomepdf/commit/5352c59), [document workspace migration](https://github.com/SkillsetSquad/awsomepdf/commit/b5ae4cb), [UI audit completion](https://github.com/SkillsetSquad/awsomepdf/commit/12536e2) |
| Local file discovery | Cmd+K / Ctrl+K searches tools plus filenames and saved project records stored in this browser. File results open the relevant tool; the original document must still be selected from the device. | [Local file search](https://github.com/SkillsetSquad/awsomepdf/commit/2a9a6d8) |
| Permanent redaction | Redact PDF, Find and Redact, and Smart Data Redactor remove selected PDF content and rewrite the document instead of relying on cover-up overlays or text-stream replacement. Secure export uses solid fills and removes ancillary content that can retain copies. Review the output and the limitations below before sharing. | [Content-removal implementation](https://github.com/SkillsetSquad/awsomepdf/commit/8134fe2) |
| Annotation editing | Standard signature, stamp, comment and history controls stay connected to the native drawing engine and local annotation store. This includes undo/redo restoration, comment replies and filters, and native signature/stamp geometry. | [History](https://github.com/SkillsetSquad/awsomepdf/commit/6c6d98f), [signatures](https://github.com/SkillsetSquad/awsomepdf/commit/028b338), [stamps](https://github.com/SkillsetSquad/awsomepdf/commit/23b1ca5), [comments](https://github.com/SkillsetSquad/awsomepdf/commit/723f5b8) |
| Document processing and truthful results | Replaced simulated panels with document workspaces, preserved actual engine output streams, corrected visible-page geometry in booklet and column splitting, added local scan tilt detection, and report OCR confidence only when recognition measures it. | [Engine boundaries](https://github.com/SkillsetSquad/awsomepdf/commit/10143ef), [booklet geometry](https://github.com/SkillsetSquad/awsomepdf/commit/8c06ddb), [column splitting](https://github.com/SkillsetSquad/awsomepdf/commit/284c2d2), [scan alignment](https://github.com/SkillsetSquad/awsomepdf/commit/ea616f3), [OCR confidence](https://github.com/SkillsetSquad/awsomepdf/commit/5e7ec36) |
| Tool loading | Each tool interface loads through its own dynamic import rather than eagerly importing all tool interfaces. | [Selected-tool loading](https://github.com/SkillsetSquad/awsomepdf/commit/9bc7f44) |
| Multilingual discovery and source access | Added localized SEO metadata, canonical and alternate URLs, locale-specific social images, and deployed source, license and notice downloads. | [Multilingual SEO and source packaging](https://github.com/SkillsetSquad/awsomepdf/commit/f7d9394) |
| Deployment and update behavior | Coolify production uses a self-contained Nginx image with health checks and separate local preview configuration. The root redirects to English while language switching remains available in navigation. The inherited PDFCraft release checker and update popup have been removed. | [Docker deployment](https://github.com/SkillsetSquad/awsomepdf/commit/1049db2), [root redirect and updater removal](https://github.com/SkillsetSquad/awsomepdf/commit/be4b5f9) |

### Work in progress

- **AwsomePDF Share:** Browser-to-browser file sharing is planned. The sharing section shows a preview.
- **Redaction translations:** Some detailed instructions, FAQs and controls still use English in other language versions.

### Current scope and limitations

- The document UI audit and migration landed in the history above. That does not mean every tool or processing path has been verified against every PDF.
- Files are processed on the device. Some tools download fonts, language data or engine assets; saved file search reads names and metadata, not document contents.
- Tool-specific limits still apply, including the redaction restrictions documented below. No speed benchmark or blanket superiority claim is implied by these changes.
- Some ESLint warnings remain. Production builds enforce lint and TypeScript checks.

## Features

- **Local processing:** Document processing runs on your device.
- **PDF tools:** Merge, split, compress, convert, annotate, fill forms and manage pages.
- **Permanent redaction:** Remove selected areas or text matches with solid black or white fills.
- **Desktop and mobile:** Responsive controls with light and dark themes.
- **15 languages:** English, Japanese, Korean, Spanish, French, German, Simplified and Traditional Chinese, Portuguese, Arabic, Italian, Indonesian, Vietnamese, Romanian and Polish.

### Searching tools and file history

Press **Cmd+K** (Mac) or **Ctrl+K**, or use the header search button, to search tools, recent filenames and saved project records. Filename matches appear first when your query matches a saved file; otherwise tools come first. Each search shows up to eight tools and eight file results.

Choosing a file result opens its tool. Select the original file from your device to continue: the history stores names and metadata, not document bytes. Search stays in your browser, and clearing browser storage removes saved records.

### Application updates

Website updates are delivered by rebuilding and deploying the application. Desktop users install newer builds manually. AwsomePDF has no in-app update checker or update popup. The removed inherited checker queried PDFCraft releases, which do not represent releases of this project. Rebuild older deployments to remove the former checker; see [DEPLOYMENT.md](DEPLOYMENT.md).

The desktop app uses the bundle ID `com.skillsetsquad.awsomepdf` and installs separately from PDFCraft. Existing desktop app data stays with the old installation. On the same website origin, browser preferences, signatures, file history, projects, workflows and cached fonts migrate to the new storage names.

### Redacting sensitive content

Use **Redact PDF** to select rectangles or brush areas, **Find and Redact** to select exact text matches, or **Smart Data Redactor** to find email, phone, SSN/ID patterns and custom keywords. Applying redaction saves a new PDF and leaves the original unchanged.

Text search finds extractable text on the same line, including text split across font spans. It does not run OCR or match across lines. Use manual rectangles for scanned documents.

The exported PDF removes selected text, overlapping image pixels and graphics that touch the selection, then fills the areas with a solid color. Other text stays selectable unless you choose full-page rasterization.

Redaction has these effects:

- Export also removes previous revisions, unused objects, metadata, attachments, bookmarks, annotations, links and forms. Digital signatures become invalid.
- Graphics that touch a selection can be removed beyond its edges. Brush strokes can also remove nearby content.
- Copies outside your selections can remain, including content reused on other pages.
- Full-page rasterization turns pages into images and removes all selectable text.

Review every page of the downloaded PDF before sharing it.

## Tools

Common tools are listed below. Browse the [tool directory](https://awsomepdf.com/en/tools/) for the full list.

### Organize & Manage

| Tool | Description |
|------|-------------|
| **PDF Multi Tool** | All-in-one PDF editor for merge, split, organize, delete, rotate, and extract |
| **Merge PDF** | Combine multiple PDFs into one document |
| **Split PDF** | Separate specific pages or divide by page ranges |
| **Extract Pages** | Extract specific pages to a new file |
| **Organize PDF** | Reorder, duplicate, and delete pages with drag-and-drop |
| **Delete Pages** | Remove unwanted pages from PDF files |
| **Rotate PDF** | Rotate pages by 90°, 180°, or 270° |
| **Rotate by Custom Degrees** | Rotate pages by any angle for straightening scans |
| **Reverse Pages** | Reverse the page order of a PDF |
| **Add Blank Page** | Insert blank pages at any position |
| **Divide Pages** | Split pages horizontally or vertically |
| **N-up PDF** | Combine multiple pages on a single sheet (2-up, 4-up, etc.) |
| **Combine to Single Page** | Stitch all pages into one continuous page |
| **Alternate Merge** | Interleave pages from multiple PDFs |
| **OCR PDF** | Make scanned PDFs searchable with text recognition |
| **Add Attachments** | Embed files into PDF documents |
| **Extract Attachments** | Download embedded files from PDFs |
| **Edit Attachments** | View, rename, or remove embedded files |
| **View Metadata** | View PDF properties, author, dates, and keywords |
| **Edit Metadata** | Modify PDF title, author, subject, and keywords |
| **PDF to ZIP** | Package multiple PDFs into a ZIP archive |
| **Compare PDFs** | Compare two PDFs side-by-side with difference highlighting |
| **Posterize PDF** | Split large pages into multiple printable sheets |
| **Grid Combine** | Combine multiple PDFs into a grid layout with custom spacing |
| **PDF Booklet** | Arrange pages for booklet printing (saddle stitch) |
| **PDF Reader** | Read and view PDF documents in a clean interface |

### Edit & Annotate

| Tool | Description |
|------|-------------|
| **Edit PDF** | Add text, images, annotations, highlights, and shapes |
| **Sign PDF** | Draw, type, upload, or scan a photo of your handwritten signature |
| **Crop PDF** | Trim margins and remove unwanted areas |
| **Edit Bookmarks** | Insert beside an active entry, move bookmark subtrees, or remove selected/all bookmarks |
| **Table of Contents** | Generate clickable table of contents from bookmarks |
| **Page Numbers** | Add customizable page numbering |
| **Add Watermark** | Apply text or image watermarks |
| **Header & Footer** | Add headers and footers with page numbers and dates |
| **Invert Colors** | Create dark mode versions of documents |
| **Background Color** | Change or add page background colors |
| **Change Text Color** | Modify the color of all text content |
| **Add Stamps** | Apply preset or custom stamps (Approved, Rejected, etc.) |
| **Remove Annotations** | Strip comments, highlights, and markup |
| **Form Filler** | Complete interactive PDF forms |
| **Form Creator** | Add text fields, checkboxes, and dropdowns to create forms |
| **Remove Blank Pages** | Auto-detect and remove empty pages |
| **Deskew PDF** | Automatically straighten skewed scanned pages |
| **OCG Manager** | Manage Optional Content Groups (layers) in PDFs |

In **Edit Bookmarks**, click an entry's title to make it active, navigate the preview to the desired page, and click **Add Bookmark** to insert directly after that entry at the same level. With no active entry, new entries go at the end of the root list. **Add child** remains available for nested entries. Bookmarks target the page; they do not capture an exact scroll position within it.

Drag a bookmark's grip to place its entire subtree before, after, or inside another entry. The list scrolls when you hold the drag near its top or bottom edge. On mobile or with a keyboard, click or activate the grip to open **Move bookmark**, choose a destination and placement, and apply the move. Invalid drops leave the tree unchanged. Click **Save Bookmarks** and download to apply edits to a PDF; the original file remains unchanged.

To remove several bookmarks while keeping useful navigation, click one entry and **Shift-click** another to select the visible range between them. **Ctrl-click** (or **Cmd-click** on macOS) toggles individual entries; adding **Shift** adds a range to the selection. On touch screens or with a keyboard, use the labeled checkboxes; **Space** toggles a focused checkbox. Checkboxes do not change the preview or insertion position. Scrolling, using the scrollbar, and collapsing branches preserve selection, including selected entries hidden within collapsed branches.

Click **Remove selection** and review the confirmation: it shows the selected count and the total number to remove, including all descendants of selected parents. Cancel preserves edits, selection, and any existing download. Confirm clears the selected subtrees; then click **Save Bookmarks** and download. Movement still applies to one subtree at a time.

To remove every bookmark, click **Remove all bookmarks** and confirm, then save and download. This clears nested bookmarks too. You can also save after deleting the final bookmark individually or through **Remove selection**. If saving fails, retry without uploading the original file again.

### Convert to PDF

| Tool | Description |
|------|-------------|
| **Image to PDF** | Convert supported image formats to PDF |
| **JPG to PDF** | Convert JPEG images to PDF |
| **PNG to PDF** | Convert PNG images with transparency support |
| **WebP to PDF** | Convert modern WebP images to PDF |
| **SVG to PDF** | Convert vector graphics to PDF |
| **BMP to PDF** | Convert bitmap images to PDF |
| **HEIC to PDF** | Convert iPhone/iPad photos to PDF |
| **TIFF to PDF** | Convert multi-page TIFF to PDF |
| **TXT to PDF** | Convert plain text files to PDF |
| **JSON to PDF** | Convert JSON data with syntax highlighting |
| **PSD to PDF** | Convert Photoshop files to PDF |
| **Word to PDF** | Convert Microsoft Word documents to PDF |
| **Excel to PDF** | Convert Excel spreadsheets to PDF |
| **PowerPoint to PDF** | Convert PowerPoint presentations to PDF |
| **XPS to PDF** | Convert XPS documents to PDF |
| **RTF to PDF** | Convert Rich Text Format files to PDF |
| **EPUB to PDF** | Convert EPUB ebooks to PDF |
| **MOBI to PDF** | Convert MOBI ebooks to PDF |
| **Markdown to PDF** | Convert Markdown files to PDF with styling |
| **Email to PDF** | Convert email files (EML/MSG) to PDF |
| **CBZ to PDF** | Convert comic book archives to PDF |
| **DjVu to PDF** | Convert DjVu documents to PDF |

### Convert from PDF

| Tool | Description |
|------|-------------|
| **PDF to JPG** | Extract pages as JPEG images |
| **PDF to PNG** | Export pages as PNG with transparency |
| **PDF to WebP** | Convert to modern WebP format |
| **PDF to BMP** | Export as bitmap images |
| **PDF to TIFF** | Convert to high-quality TIFF |
| **PDF to Greyscale** | Convert colorful PDFs to black and white |
| **PDF to JSON** | Extract text and metadata as JSON |
| **PDF to DOCX** | Convert PDF to editable Word document |
| **PDF to PowerPoint** | Convert PDF to editable slides |
| **PDF to Excel** | Extract tables to spreadsheet format |
| **Extract Images** | Extract all images embedded in a PDF file |
| **PDF to PDF/A** | Convert PDF to archival PDF/A format |
| **Extract Tables** | Extract tables from PDF as structured data |

### Optimize & Repair

| Tool | Description |
|------|-------------|
| **Compress PDF** | Reduce file size while maintaining quality |
| **Fix Page Size** | Standardize page dimensions |
| **Page Dimensions** | Analyze and view page sizes |
| **Linearize PDF** | Optimize for fast web viewing |
| **Repair PDF** | Fix corrupted or damaged PDF files |
| **Remove Restrictions** | Remove editing/printing restrictions |
| **Rasterize PDF** | Convert vector elements to images for compatibility |
| **Font to Outline** | Convert text fonts to vector outlines |

### Secure PDF

| Tool | Description |
|------|-------------|
| **Encrypt PDF** | Add password protection and encryption |
| **Decrypt PDF** | Remove password from PDFs |
| **Sanitize PDF** | Remove metadata, scripts, and hidden data |
| **Flatten PDF** | Merge annotations and form fields into content |
| **Remove Metadata** | Strip author, dates, and other metadata |
| **Change Permissions** | Set print, copy, and edit permissions |
| **Redact PDF** | Permanently remove selected text, image pixels and touched graphics with solid fills |
| **Find and Redact** | Review exact text matches and permanently remove selected occurrences |
| **Smart Data Redactor** | Permanently remove text matching email, phone, SSN/ID patterns or custom keywords |

## Tech stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [shadcn/ui](https://ui.shadcn.com/) (new-york style, built on [Radix UI](https://www.radix-ui.com/) and [Lucide](https://lucide.dev/))
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **PDF Processing**:
  - [PDF.js](https://github.com/mozilla/pdf.js)
  - [pdf-lib](https://github.com/Hopding/pdf-lib)
  - [PyMuPDF (WASM)](https://pymupdf.readthedocs.io/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## Getting started

### Prerequisites

- Node.js 22, matching CI and Docker
- npm

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/SkillsetSquad/awsomepdf.git
    cd awsomepdf
    ```

2.  **Install dependencies**

    ```bash
    npm ci
    ```

3.  **Start the development server**

    ```bash
    npm run dev
    ```

4.  **Open your browser**

    Open [http://localhost:3000](http://localhost:3000).

### Docker

Build the AwsomePDF image from this repository:

```bash
# Clone the repository
git clone https://github.com/SkillsetSquad/awsomepdf.git
cd awsomepdf

# Development mode (with hot reload; only start the development service)
docker compose --profile dev up web-dev

# Local production preview (build the image, then serve on localhost:8080)
docker compose -f docker-compose.yml -f docker-compose.local.yml up --build -d
```

- Development: [http://localhost:3000](http://localhost:3000)
- Production: [http://localhost:8080](http://localhost:8080)

To stop containers:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml down
```

For **Coolify**, select the Docker Compose build pack with `docker-compose.yml` and assign the domain to service **`web`**, internal port **80**. Leave custom build and start commands empty. See the [Coolify guide](DEPLOYMENT.md#coolify) for build variables and troubleshooting.

#### Site URL and subpath hosting

The default production origin is `https://awsomepdf.com`. Set `NEXT_PUBLIC_SITE_URL` at build time to use a different origin for the sitemap, canonical links and structured data. Keep the path separate in `BASE_PATH`.

For example, to host at `https://your-domain.com/awsomepdf/`:

```bash
docker build \
  --build-arg BASE_PATH=/awsomepdf \
  --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  -t awsomepdf .
```

Rebuild the site after changing either value; runtime variables cannot change an existing static export.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Prepare source downloads and runtime assets, then start the development server |
| `npm run build` | Generate source downloads, build the static export in `out/`, and prepare runtime assets |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Check TypeScript |
| `npm test` | Run the Vitest suite |
| `npm run audit:seo` | Audit the exported site's metadata and locale routes after a build |
| `npm run generate:social-images` | Regenerate social previews from the SVG sources in `public/images/social/` |
| `node scripts/verify-redaction.mjs` | Check synthetic redaction outputs with the bundled PyMuPDF WASM engine |

## Deployment

Build the site with:

```bash
npm run build
```

Serve the generated `out/` directory with a static host. The `start` script calls `next start`; use a static server for this export. Hosting instructions are in [DEPLOYMENT.md](DEPLOYMENT.md).

### Hosting configuration

| File | Platform |
|------|----------|
| `vercel.json` | Vercel |
| `netlify.toml` | Netlify |
| `.github/workflows/deploy.yml` | GitHub Pages |
| `public/_headers` | Cloudflare Pages / Netlify |
| `docker-compose.yml` + `nginx.conf` | Docker / Self-hosted |
| `docker-compose.local.yml` | Local Docker production preview on port 8080 |
| `.htaccess` | Apache |

Office conversion requires a host that supports the cross-origin isolation headers used by the WASM engine. GitHub Pages cannot set those headers; see [its deployment limits](DEPLOYMENT.md#3-github-pages).

The root redirects to the English homepage; the sitemap and default language links use canonical localized pages. The SEO audit checks the root redirect separately. GitHub Pages deployment is opt-in with `AWSOMEPDF_ENABLE_GITHUB_PAGES=true`; leave it unset when using Coolify or another host.

After deployment, check localized routes such as `/en/` and `/zh/`, open a tool, and process a sample document to confirm that its engine assets load.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a change. Use synthetic or public PDF fixtures and keep document data on the device. CI checks lint, types, tests and the production static export.

Because this project is derived from PDFCraft, generally useful changes may also be worth contributing upstream. Import upstream changes through reviewed patches; automatic full-fork synchronization is not part of the maintenance workflow.

### Security reporting

Report vulnerabilities privately through [GitHub private vulnerability reporting](https://github.com/SkillsetSquad/awsomepdf/security/advisories/new). Include the affected commit, browser/OS, reproduction steps and a minimal synthetic or public fixture. Do not post exploit details, customer documents, passwords, private keys or personal information in public issues. No response-time guarantee or supported release series has been declared.

## Acknowledgements

Thank you to the [PDFCraft team](https://github.com/PDFCraftTool/pdfcraft) for the original application, and to [BentoPDF](https://github.com/alam00000/bentopdf), which inspired and informed PDFCraft's browser-based processing.

The root AGPLv3 license and original copyright notices remain unchanged. Removing the GitHub fork relationship does not change provenance or licensing obligations. Third-party components keep their original notices, generated at build time and published on the site's open-source page.

## License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](LICENSE) file for details. As a modified version of PDFCraft, the complete corresponding source of each deployed build is available from the site's open-source page.

---

<div align="center">
  Maintained by <a href="https://github.com/SkillsetSquad">Skillset Squad</a> · Based on and modified from <a href="https://github.com/PDFCraftTool/pdfcraft">PDFCraft</a> by the PDFCraft Team
</div>
