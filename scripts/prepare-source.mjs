/** Publish the deployed working source and original license notices with static builds. */
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { createWriteStream } from 'node:fs';
import { readFile, readdir, stat, mkdir, writeFile, rename, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';
import JSZip from 'jszip';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public');
const generated = new Set(['public/source-code.zip', 'public/LICENSE.txt', 'public/THIRD_PARTY_NOTICES.txt', 'public/source-manifest.json']);
const excludedDirectories = new Set(['node_modules', '.git', '.next', 'out', 'target', 'dist', 'coverage', 'scratch', '.cache']);
const excludedFiles = new Set([
  'public/libreoffice-wasm/soffice.wasm', 'public/libreoffice-wasm/soffice.data',
  'public/libreoffice-wasm/soffice.wasm.bin', 'public/libreoffice-wasm/soffice.data.bin',
]);

async function walk(relative) {
  const files = [];
  for (const entry of await readdir(path.join(root, relative), { withFileTypes: true })) {
    if (excludedDirectories.has(entry.name) || entry.name.startsWith('.env') || entry.name === '.DS_Store') continue;
    const name = path.posix.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...await walk(name));
    else if (entry.isFile() && !generated.has(name) && !excludedFiles.has(name)) files.push(name);
  }
  return files;
}

async function sourceFiles() {
  try {
    return execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], { cwd: root, maxBuffer: 10 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().split('\0').filter(Boolean).filter((file) => !generated.has(file));
  } catch {
    // Docker builds intentionally omit .git. Include the same application/build inputs.
    const directories = ['src', 'public', 'messages', 'scripts', 'docs', 'extension', 'src-tauri', 'nix', '.github'];
    const rootFiles = (await readdir(root, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && !entry.name.startsWith('.env') && !/\.(zip|tgz|log|tsbuildinfo)$/.test(entry.name) && entry.name !== '.DS_Store')
      .map((entry) => entry.name);
    const files = [...rootFiles];
    for (const directory of directories) {
      try { files.push(...await walk(directory)); } catch (error) { if (error.code !== 'ENOENT') throw error; }
    }
    return files;
  }
}

let revision = process.env.SOURCE_REVISION || '';
try { revision ||= execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { /* ZIP remains available without Git. */ }
const files = [...new Set(await sourceFiles())].sort();
const lock = JSON.parse(await readFile(path.join(root, 'package-lock.json'), 'utf8'));
const license = await readFile(path.join(root, 'LICENSE'), 'utf8');
const notices = [
  'AwesomePDF — A brand of Skillset Squad Private Limited.',
  'Modified from PDFCraft: https://github.com/PDFCraftTool/pdfcraft',
  'Original application notice: © 2025 PDFCraft. All rights reserved.',
  'AwesomePDF source: https://github.com/SkillsetSquad/awesomepdf',
  'Application license: GNU Affero General Public License, version 3 (see LICENSE.txt).',
  'Original licenses and copyright notices below are reproduced without alteration.\n',
];

for (const [directory, info] of Object.entries(lock.packages)) {
  if (!directory || info.dev || info.devOptional) continue;
  let names;
  try { names = await readdir(path.join(root, directory)); } catch (error) { if (error.code === 'ENOENT') continue; throw error; }
  const packageName = directory.split('node_modules/').at(-1);
  notices.push(`\n${'='.repeat(72)}\n${packageName} ${info.version}\nLicense: ${info.license || 'See package source'}\nSource: https://www.npmjs.com/package/${packageName}/v/${info.version}`);
  for (const name of names.filter((name) => /^(licen[sc]e|copying|notice|copyright|authors)(\b|[._-])/i.test(name)).sort()) {
    if (!(await stat(path.join(root, directory, name))).isFile()) continue;
    notices.push(`\n--- ${name} ---\n${await readFile(path.join(root, directory, name), 'utf8')}`);
  }
}
for (const file of files.filter((file) => file.startsWith('public/') && /(^|\/)(licen[sc]e|copying|notice|copyright)(\b|[._-])/i.test(file))) {
  notices.push(`\n${'='.repeat(72)}\nBundled asset: ${file}\n\n${await readFile(path.join(root, file), 'utf8')}`);
}
await mkdir(output, { recursive: true });
await writeFile(path.join(output, 'LICENSE.txt'), license);
await writeFile(path.join(output, 'THIRD_PARTY_NOTICES.txt'), notices.join('\n'));

const zip = new JSZip();
const manifest = { application: 'AwesomePDF', revision, generatedAt: new Date().toISOString(), files: {} };
for (const file of files) {
  let data;
  try { data = await readFile(path.join(root, file)); } catch (error) { if (error.code === 'ENOENT') continue; throw error; }
  manifest.files[file] = createHash('sha256').update(data).digest('hex');
  zip.file(`awesomepdf/${file}`, data, { unixPermissions: (await stat(path.join(root, file))).mode });
}
zip.file('awesomepdf/THIRD_PARTY_NOTICES.txt', notices.join('\n'));
zip.file('awesomepdf/source-manifest.json', JSON.stringify(manifest, null, 2));
const temporaryArchive = path.join(output, 'source-code.zip.tmp');
try {
  await pipeline(zip.generateNodeStream({ streamFiles: true, platform: 'UNIX', compression: 'DEFLATE', compressionOptions: { level: 6 } }), createWriteStream(temporaryArchive));
  await rename(temporaryArchive, path.join(output, 'source-code.zip'));
} finally {
  await rm(temporaryArchive, { force: true });
}
await writeFile(path.join(output, 'source-manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`[source] Packaged ${Object.keys(manifest.files).length} working source files, application license and third-party notices.`);
