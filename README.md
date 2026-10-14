# AwesomePDF

<div align="center">
  <img src="public/images/logo.png" alt="AwesomePDF logo" width="120" height="120" />
  <h1>Professional PDF Tools</h1>
  <p>
    <strong>Free, Private & Browser-Based</strong>
  </p>
  <p>
    Merge, split, compress, convert, and edit PDF files online without uploading to servers.
  </p>
</div>

<div align="center">

[![PDFCraft](https://img.shields.io/website?url=https%3A%2F%2Fpdfcraft.devtoolcafe.com%2Fen%2F&label=PDFCraft)](https://pdfcraft.devtoolcafe.com/en/)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-new--york-black?style=flat-square)

</div>

> **AwesomePDF is a fork of [PDFCraft](https://github.com/PDFCraftTool/pdfcraft)** ([live site](https://pdfcraft.devtoolcafe.com/en/)), maintained by [Skillset Squad](https://github.com/SkillsetSquad). All credit for the original tools and processing engine goes to the PDFCraft team.
>
> We have reworked the interface to use **[shadcn/ui](https://ui.shadcn.com/)** instead of PDFCraft's custom theme and component set. **Bigger changes are underway**, so expect this project to keep diverging from upstream.

## 📖 About

**AwesomePDF** is a comprehensive suite of PDF tools designed for privacy and performance. Unlike many online converters, it processes your files entirely within your browser using WebAssembly technology. Your documents **never** leave your device, ensuring maximum security for your sensitive data.

The processing engine and tool set come from PDFCraft. What differs in this fork is the interface layer and where the project is headed (see below).

## 🔀 Relationship to PDFCraft

| | PDFCraft (upstream) | AwesomePDF (this fork) |
|---|---|---|
| Repository | [PDFCraftTool/pdfcraft](https://github.com/PDFCraftTool/pdfcraft) | [SkillsetSquad/awesomepdf](https://github.com/SkillsetSquad/awesomepdf) |
| Website | [pdfcraft.devtoolcafe.com](https://pdfcraft.devtoolcafe.com/en/) | [awsomepdf.com](https://awsomepdf.com/) |
| UI | Custom theme and components | Standard shadcn/ui (Radix, Tailwind 4 design tokens, light/dark) |
| Status | Upstream project | Actively diverging |

### What has changed so far

- Replaced PDFCraft's custom Button, Card, Modal, Tabs, form-field and theme-toggle components with standard shadcn/ui primitives.
- Rebuilt the shared shell on shadcn/ui: header, navigation, search, mobile menu, language menu and footer. Cmd+K / Ctrl+K now searches tool names and locally saved file records from recent-file history and saved projects.
- Removed the inherited in-app update checker in this fork. Browser and desktop builds no longer query release servers or show update popups, badges, dialogs or manual update buttons, keeping document work free of update interruptions.
- Migrated the homepage, tool directory, category pages and the about, FAQ, privacy, contact, error and not-found pages.
- Added a real open-source page with source, license and notice downloads for each deployed build.
- Reworked Docker deployment in this fork for Coolify: production builds the static site into a self-contained Nginx image before startup, with a health check and no production source mounts or required Compose profile. Local preview ports use a separate Compose override.
- Changed Redact PDF, Find and Redact, and Smart Data Redactor in this fork to use local PDF content removal with a full rewrite, rather than overlays or text-stream replacement. Selected glyphs, overlapping image pixels and touched graphics are removed; other text stays selectable. Secure export uses solid fills and strips ancillary content that can retain copies.

### Work in progress

- The UI migration is not finished. Many individual tool workspaces (settings panels, previews and editors) are still being moved to shadcn/ui one at a time.
- Larger changes beyond the UI are underway. This README will be updated as they land.
- Some existing ESLint warnings remain. Production builds enforce lint and TypeScript checks.

Development notes are kept locally in the ignored `docs/` directory.

## ✨ Key Features

- **🔒 100% Private**: All processing happens client-side. No file uploads to external servers.
- **🚀 Fast & Responsive**: Powered by Next.js and WebAssembly for near-native performance.
- **🛠️ Comprehensive Toolset**: 90+ tools to handle any PDF task.
- **🎨 Modern UI**: Clean, accessible, responsive design built with shadcn/ui and Tailwind CSS, with light and dark themes.
- **Permanent redaction**: Select areas or text matches and export a PDF with the selected content removed. Black and white fills replace blur/mosaic in secure redaction.
- **🌐 Multi-language**: 15 languages: English, Japanese, Korean, Spanish, French, German, Simplified and Traditional Chinese, Portuguese, Arabic, Italian, Indonesian, Vietnamese, Romanian and Polish.

### Searching tools and file history

Press **Cmd+K** (Mac) or **Ctrl+K**, or use the header search button, to find tools and file records saved in this browser. Search matches filenames, saved project names and related tool names. Filename matches appear before tool results; otherwise tools come first. The palette reads recent-file history from localStorage and project file lists from IndexedDB when opened, and refreshes when file records change, when reopened or when the window regains focus.

File results show their source and open the corresponding tool. These stores contain names and metadata, not document bytes; choose the original file from your device to continue. Search does not inspect document contents, send filenames to a server or read unrelated browser storage. Results are limited to eight tools and eight files per query. Browser storage can be cleared or unavailable.

### Application updates

AwesomePDF does not check for application updates or display update controls. Website updates are managed by the deployment operator; desktop users install a newer build manually. Previously saved update preferences have no effect. PDF engines can still load assets over the network when a tool needs them.

### Redacting sensitive content

Use **Redact PDF** to select rectangles or brush areas, **Find and Redact** to review exact text matches, or **Smart Data Redactor** to remove matches for email, phone, SSN/ID patterns and custom keywords. Apply redaction to create a new PDF; the original file remains unchanged. Text search works on extractable text, including matches split across font spans on the same line, and does not run OCR or match across separate lines. Use manual rectangles for scans. PDF previews respect page cropping and rotation and keep document geometry stable in RTL interfaces.

The output removes selected text, overlapping image pixels, touched graphics, previous revisions and unused objects. It also removes metadata, attachments, bookmarks, annotations, links and forms; digital signatures are invalidated. A touched vector object can disappear beyond the selection, and brush envelopes may remove nearby content. Other unselected copies can remain, including content reused on other pages. Review every page of the downloaded PDF before sharing. Optional full-page rasterization removes all selectable text. Engine assets load lazily; document bytes stay on your device.

Run `node scripts/verify-redaction.mjs` to verify synthetic redaction outputs using the bundled PyMuPDF WASM engine, including extraction, decoded objects, image pixels, and page geometry.

Redaction summaries and titles are localized in all 15 languages. Updated detailed instructions, FAQs and safety controls currently use English fallback in non-English catalogs.

## 🧰 Complete Tool List (90+ Tools)

### 📁 Organize & Manage (27 tools)
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

### ✏️ Edit & Annotate (19 tools)
| Tool | Description |
|------|-------------|
| **Edit PDF** | Add text, images, annotations, highlights, and shapes |
| **Sign PDF** | Draw, type, upload, or scan a photo of your handwritten signature |
| **Crop PDF** | Trim margins and remove unwanted areas |
| **Edit Bookmarks** | Add, edit, and manage PDF navigation bookmarks |
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

### 📤 Convert to PDF (22 tools)
| Tool | Description |
|------|-------------|
| **Image to PDF** | Convert any image format to PDF |
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

### 📥 Convert from PDF (13 tools)
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

### ⚡ Optimize & Repair (8 tools)
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

### 🔒 Secure PDF (9 tools)
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

## 💻 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [shadcn/ui](https://ui.shadcn.com/) (new-york style, built on [Radix UI](https://www.radix-ui.com/) and [Lucide](https://lucide.dev/))
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **PDF Processing**:
  - [PDF.js](https://github.com/mozilla/pdf.js)
  - [pdf-lib](https://github.com/Hopding/pdf-lib)
  - [PyMuPDF (WASM)](https://pymupdf.readthedocs.io/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## 🚀 Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/SkillsetSquad/awesomepdf.git
    cd awesomepdf
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open your browser**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### 🐳 Docker

> ℹ️ The pre-built image published by upstream (`ghcr.io/pdfcrafttool/pdfcraft`) is the original PDFCraft and does **not** include the shadcn/ui rework. To run AwesomePDF, build from source as below.

```bash
# Clone the repository
git clone https://github.com/SkillsetSquad/awesomepdf.git
cd awesomepdf

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

For **Coolify**, use the Docker Compose build pack with `docker-compose.yml`, reload the Compose definition, and assign the domain to service **`web`**, internal port **80**. Production is enabled by default; remove the earlier `COMPOSE_PROFILES=prod` workaround and leave custom build/start commands empty. The base Compose file publishes no host ports and needs no repository preservation or static-output volume. See [DEPLOYMENT.md](DEPLOYMENT.md#coolify) for build variables and troubleshooting. Image builds can still take several minutes on a cold cache or a small server; progress appears in the build logs before Nginx starts.

#### 🌐 Site URL and Subpath Deployment

Sitemap, `robots.txt`, canonical and structured-data URLs are built from the site origin, which is fixed at build time because the app is statically exported. Set `NEXT_PUBLIC_SITE_URL` (for Docker, the build argument of the same name) to your production origin. See [DEPLOYMENT.md](DEPLOYMENT.md) for how it is resolved when unset.

The default production origin is `https://awsomepdf.com`. Use `npm run audit:seo` after a build to verify every public page and language. Local SEO reports and image sources are saved in the ignored `docs/seo/` directory.

To deploy under a subpath (e.g., `https://your-domain.com/awesomepdf/`), specify the base path during the build:

```bash
docker build \
  --build-arg BASE_PATH=/awesomepdf \
  --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.com \
  -t awesomepdf .
```

*Note: Since the app is statically exported, `BASE_PATH` and `NEXT_PUBLIC_SITE_URL` must be provided during the build stage.*

## 📜 Scripts

- `npm run dev`: Starts the development server with Turbopack. Automatically runs `predev` to decompress LibreOffice WASM files.
- `npm run build`: Builds the application for production. Automatically runs `postbuild` to decompress WASM files in `out/`.
- `npm run start`: Starts the production server.
- `npm run lint`: Lints the code using ESLint.
- `npm run test`: Runs tests using Vitest.

## 🚀 Production Deployment Guide

AwesomePDF is configured for static export (`output: 'export'`), which means it can be deployed to any service that supports static website hosting without requiring a Node.js server.

> 📖 **For comprehensive deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

### Quick Start

1. **Build the project:**
   ```bash
   npm run build
   ```
   All static files will be generated in the `out` directory.

2. **Deploy to your preferred platform:**
   - **Vercel** (Recommended): `vercel --prod`
   - **Netlify**: `netlify deploy --prod --dir=out`
   - **GitHub Pages**: Push to `main` branch (uses GitHub Actions)
   - **Cloudflare Pages**: `wrangler pages deploy out`
   - **Docker + Nginx**: `docker compose -f docker-compose.yml -f docker-compose.local.yml up --build -d` for local preview; use the base Compose file for Coolify

### Deployment Files Included

| File | Platform |
|------|----------|
| `vercel.json` | Vercel |
| `netlify.toml` | Netlify |
| `.github/workflows/deploy.yml` | GitHub Pages |
| `public/_headers` | Cloudflare Pages / Netlify |
| `docker-compose.yml` + `nginx.conf` | Docker / Self-hosted |
| `docker-compose.local.yml` | Local Docker production preview on port 8080 |
| `.htaccess` | Apache |

### Important Notes
- **Headers Configuration**: Security and caching headers are pre-configured in all deployment files.
- **Image Optimization**: Static export uses `images: { unoptimized: true }`.
- **WASM Support**: All deployment configs include proper MIME types for WebAssembly.
- **Subpath Support**: Set `BASE_PATH` environment variable during build to deploy under a subdirectory.

### Verify Deployment
After deployment, please check the following features to ensure everything is working correctly:
- Multi-language routing (e.g., `/en`, `/zh`)
- Tool page loading
- WebAssembly (PDF processing) functionality

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

Because this is a fork, changes to the core PDF tools that are not specific to the shadcn/ui rework may also be worth contributing back to [PDFCraft](https://github.com/PDFCraftTool/pdfcraft).

## 🙏 Acknowledgements

AwesomePDF is a fork of **[PDFCraft](https://github.com/PDFCraftTool/pdfcraft)** ([pdfcraft.devtoolcafe.com](https://pdfcraft.devtoolcafe.com/en/)). We are grateful to the PDFCraft team for the tools, processing engine and architecture this project is built on.

PDFCraft itself stands on the shoulders of giants. It gratefully acknowledges [BentoPDF](https://github.com/alam00000/bentopdf) for their pioneering work in privacy-first, client-side PDF tools, which served as a significant inspiration and reference for its core logic. We share that respect for the foundation laid by the BentoPDF team.

Third-party components keep their original notices. They are generated at build time and published with each deployed build on the site's open-source page.

## 📄 License

This project is licensed under the AGPL-3.0 License - see the [LICENSE](LICENSE) file for details. As a modified version of PDFCraft, the complete corresponding source of each deployed build is available from the site's open-source page.

---

<div align="center">
  Maintained by <a href="https://github.com/SkillsetSquad">Skillset Squad</a> · Forked from <a href="https://github.com/PDFCraftTool/pdfcraft">PDFCraft</a> by the PDFCraft Team
</div>
