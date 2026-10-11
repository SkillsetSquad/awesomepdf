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
| Website | [pdfcraft.devtoolcafe.com](https://pdfcraft.devtoolcafe.com/en/) | Not yet announced |
| UI | Custom theme and components | Standard shadcn/ui (Radix, Tailwind 4 design tokens, light/dark) |
| Status | Upstream project | Actively diverging |

### What has changed so far

- Replaced PDFCraft's custom Button, Card, Modal, Tabs, form-field and theme-toggle components with standard shadcn/ui primitives.
- Rebuilt the shared shell on shadcn/ui: header, navigation, search, mobile menu, language menu and footer.
- Migrated the homepage, tool directory, category pages and the about, FAQ, privacy, contact, error and not-found pages.
- Added a real open-source page with source, license and notice downloads for each deployed build.

### Work in progress

- The UI migration is not finished. Many individual tool workspaces (settings panels, previews and editors) are still being moved to shadcn/ui one at a time.
- Larger changes beyond the UI are underway. This README will be updated as they land.
- While the migration is in progress, the default `npm run build` can fail on the existing lint baseline. `npm run build -- --no-lint` skips linting.

Progress details live in [docs/ui-migration.md](docs/ui-migration.md).

## ✨ Key Features

- **🔒 100% Private**: All processing happens client-side. No file uploads to external servers.
- **🚀 Fast & Responsive**: Powered by Next.js and WebAssembly for near-native performance.
- **🛠️ Comprehensive Toolset**: 90+ tools to handle any PDF task.
- **🎨 Modern UI**: Clean, accessible, responsive design built with shadcn/ui and Tailwind CSS, with light and dark themes.
- **🌐 Multi-language**: 15 languages: English, Japanese, Korean, Spanish, French, German, Simplified and Traditional Chinese, Portuguese, Arabic, Italian, Indonesian, Vietnamese, Romanian and Polish.

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

### 🔒 Secure PDF (6 tools)
| Tool | Description |
|------|-------------|
| **Encrypt PDF** | Add password protection and encryption |
| **Decrypt PDF** | Remove password from PDFs |
| **Sanitize PDF** | Remove metadata, scripts, and hidden data |
| **Flatten PDF** | Merge annotations and form fields into content |
| **Remove Metadata** | Strip author, dates, and other metadata |
| **Change Permissions** | Set print, copy, and edit permissions |

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

# Development mode (with hot reload)
docker compose --profile dev up

# Production mode (static build + Nginx)
docker compose --profile prod up --build
```

- Development: [http://localhost:3000](http://localhost:3000)
- Production: [http://localhost:8080](http://localhost:8080)

To stop containers:

```bash
docker compose down
```

#### 🌐 Site URL and Subpath Deployment

Sitemap, `robots.txt`, canonical and structured-data URLs are built from the site origin, which is fixed at build time because the app is statically exported. Set `NEXT_PUBLIC_SITE_URL` (for Docker, the build argument of the same name) to your production origin. See [DEPLOYMENT.md](DEPLOYMENT.md) for how it is resolved when unset.

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
   - **Docker + Nginx**: `docker compose --profile prod up --build`

### Deployment Files Included

| File | Platform |
|------|----------|
| `vercel.json` | Vercel |
| `netlify.toml` | Netlify |
| `.github/workflows/deploy.yml` | GitHub Pages |
| `public/_headers` | Cloudflare Pages / Netlify |
| `docker-compose.yml` + `nginx.conf` | Docker / Self-hosted |
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
