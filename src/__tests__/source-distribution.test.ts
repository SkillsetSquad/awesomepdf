import { describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, writeFile, copyFile, symlink, readFile, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import path from 'node:path';
import os from 'node:os';
import JSZip from 'jszip';

const root = process.cwd();

describe('Static source distribution', () => {
  it('packages Git-less build inputs, lockfile and original notices without local secrets or generated output', async () => {
    const fixture = await mkdtemp(path.join(os.tmpdir(), 'awsomepdf-source-'));
    try {
      await mkdir(path.join(fixture, 'scripts'));
      await mkdir(path.join(fixture, 'src'));
      await mkdir(path.join(fixture, 'public/pdfjs-annotation-viewer/build'), { recursive: true });
      await copyFile(path.join(root, 'scripts/prepare-source.mjs'), path.join(fixture, 'scripts/prepare-source.mjs'));
      await symlink(path.join(root, 'node_modules'), path.join(fixture, 'node_modules'), 'junction');
      const originalLicense = 'Original application copyright and license\n';
      const lockfile = JSON.stringify({ packages: {} });
      await writeFile(path.join(fixture, 'LICENSE'), originalLicense);
      await writeFile(path.join(fixture, 'package.json'), '{"name":"awsomepdf","type":"module"}');
      await writeFile(path.join(fixture, 'package-lock.json'), lockfile);
      await writeFile(path.join(fixture, 'src/app.tsx'), 'export const brand = "AwsomePDF";\n');
      await writeFile(path.join(fixture, 'src/.env.local'), 'SECRET=must-not-be-published');
      await writeFile(path.join(fixture, '.env.local'), 'SECRET=must-not-be-published');
      await writeFile(path.join(fixture, 'public/pdfjs-annotation-viewer/build/pdf.mjs'), '// bundled viewer source');
      await writeFile(path.join(fixture, 'public/pdfjs-annotation-viewer/LICENSE'), 'Original viewer copyright\n');
      await writeFile(path.join(fixture, 'public/source-code.zip'), 'stale generated source');
      execFileSync(process.execPath, [path.join(fixture, 'scripts/prepare-source.mjs')], { cwd: fixture });
      const zip = await JSZip.loadAsync(await readFile(path.join(fixture, 'public/source-code.zip')));
      expect(await zip.file('awsomepdf/package-lock.json')!.async('string')).toBe(lockfile);
      expect(await zip.file('awsomepdf/LICENSE')!.async('string')).toBe(originalLicense);
      expect(zip.file('awsomepdf/public/pdfjs-annotation-viewer/build/pdf.mjs')).not.toBeNull();
      expect(Object.keys(zip.files).some((name) => name.includes('.env') || name.includes('node_modules') || name.endsWith('source-code.zip'))).toBe(false);
      const notices = await readFile(path.join(fixture, 'public/THIRD_PARTY_NOTICES.txt'), 'utf8');
      expect(notices).toContain('Original viewer copyright');
      expect(notices).toContain('© 2025 PDFCraft. All rights reserved.');
      expect(await readFile(path.join(fixture, 'public/LICENSE.txt'), 'utf8')).toBe(originalLicense);
      const manifest = JSON.parse(await zip.file('awsomepdf/source-manifest.json')!.async('string'));
      expect(manifest.application).toBe('AwsomePDF');
      for (const [file, expectedHash] of Object.entries(manifest.files)) {
        expect(createHash('sha256').update(await zip.file(`awsomepdf/${file}`)!.async('nodebuffer')).digest('hex')).toBe(expectedHash);
      }
    } finally {
      await rm(fixture, { recursive: true, force: true });
    }
  });
});
