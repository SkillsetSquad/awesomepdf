// SVG artwork from lucide-react (ISC license), rendered with the installed version.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Lucide from 'lucide-react';

const names = [
  "ALargeSmall",
  "AlignCenter",
  "AlignCenterHorizontal",
  "AlignCenterVertical",
  "AlignEndVertical",
  "AlignJustify",
  "AlignLeft",
  "AlignRight",
  "AlignStartVertical",
  "ArrowDownToLine",
  "ArrowLeft",
  "ArrowUpToLine",
  "Bold",
  "Check",
  "ChevronDown",
  "ChevronLeft",
  "ChevronRight",
  "ChevronUp",
  "ChevronsDown",
  "ChevronsUp",
  "Circle",
  "CircleMinus",
  "CirclePlus",
  "Clipboard",
  "Columns2",
  "Copy",
  "Download",
  "Ellipsis",
  "ExternalLink",
  "FlipHorizontal",
  "FlipVertical",
  "FolderOpen",
  "Image",
  "IndentDecrease",
  "IndentIncrease",
  "Info",
  "Italic",
  "List",
  "ListOrdered",
  "Maximize",
  "Minus",
  "MoveHorizontal",
  "MoveVertical",
  "Palette",
  "PanelRight",
  "Pencil",
  "Plus",
  "Redo2",
  "RotateCcw",
  "RotateCw",
  "Rows2",
  "Scan",
  "Search",
  "Shapes",
  "SlidersHorizontal",
  "Spline",
  "Strikethrough",
  "Subscript",
  "Superscript",
  "Tag",
  "TextCursorInput",
  "Trash2",
  "Type",
  "Underline",
  "Undo2",
  "X"
];
const icons = Object.fromEntries(names.map(name => {
  if (!Lucide[name]) throw new Error(`Missing Lucide icon: ${name}`);
  return [name, renderToStaticMarkup(createElement(Lucide[name], { width: 16, height: 16, 'aria-hidden': 'true', focusable: 'false' }))];
}));
const packagePath = createRequire(import.meta.url).resolve('lucide-react/package.json');
const license = fs.readFileSync(path.join(path.dirname(packagePath), 'LICENSE'), 'utf8');
const source = `// Generated from lucide-react by scripts/sync-direct-editor-icons.mjs.
/*
${license}
*/
const icons = ${JSON.stringify(icons, null, 2)};

export function createEditorIcon(name) {
  const source = icons[name] || icons.Circle;
  const document = new DOMParser().parseFromString(source, 'image/svg+xml');
  return document.documentElement;
}
`;
fs.writeFileSync('public/direct-pdf-editor/icons.js', source);
