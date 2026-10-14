import { createRequire } from 'node:module';
import { readdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Use the image renderer installed with Next.js; this script adds no runtime dependency.
const require = createRequire(import.meta.url);
const requireFromNext = createRequire(require.resolve('next/package.json'));
const sharp = requireFromNext('sharp');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const images = path.join(root, 'public/images');
const sources = path.join(images, 'social');

for (const filename of (await readdir(sources)).filter(name => /^og-.+\.svg$/.test(name)).sort()) {
  const output = path.join(images, filename.replace(/\.svg$/, '.png'));
  const result = await sharp(path.join(sources, filename)).png().toFile(output);
  if (result.width !== 1200 || result.height !== 630) {
    throw new Error(`Unexpected social image dimensions: ${filename}`);
  }
}
await copyFile(path.join(images, 'og-en.png'), path.join(images, 'og-image.png'));
console.log('Generated localized AwsomePDF social previews and the default English preview.');
