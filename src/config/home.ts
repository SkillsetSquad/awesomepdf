/**
 * Homepage configuration. Tools are referenced by registry id only, so names,
 * routes and availability always come from the tool registry; ids that are not
 * in the registry are skipped when the page is built.
 */

import {
  Combine, FileArchive, FileImage, FileInput, FileOutput, FileText, FolderOpen, LayoutGrid,
  PenLine, PencilLine, Scissors, Settings, ShieldCheck, SquarePen, type LucideIcon,
} from 'lucide-react';
import type { ToolCategory } from '@/types/tool';

export interface HomeTool {
  id: string;
  icon: LucideIcon;
}

/** Cards under "Popular PDF Tools", in display order. */
export const HOME_POPULAR_TOOLS: HomeTool[] = [
  { id: 'merge-pdf', icon: Combine },
  { id: 'compress-pdf', icon: FileArchive },
  { id: 'pdf-to-docx', icon: FileText },
  { id: 'edit-pdf', icon: PencilLine },
  { id: 'split-pdf', icon: Scissors },
  { id: 'sign-pdf', icon: PenLine },
  { id: 'jpg-to-pdf', icon: FileImage },
  { id: 'organize-pdf', icon: LayoutGrid },
];

/** Quick links under the upload area. */
export const HOME_SHORTCUT_IDS = ['merge-pdf', 'compress-pdf', 'pdf-to-docx', 'edit-pdf', 'sign-pdf'] as const;

export const CATEGORY_ICONS: Record<ToolCategory, LucideIcon> = {
  'edit-annotate': SquarePen,
  'convert-to-pdf': FileInput,
  'convert-from-pdf': FileOutput,
  'organize-manage': FolderOpen,
  'optimize-repair': Settings,
  'secure-pdf': ShieldCheck,
};

/** Overview cards in the directory preview this many tools each, favoured ones first. */
export const DIRECTORY_PREVIEW_SIZE = 5;

/** Tools shown first in each directory overview card: the popular grid, then other everyday tools. */
export const DIRECTORY_FAVOURED_IDS: readonly string[] = [...HOME_POPULAR_TOOLS.map((tool) => tool.id), 'pdf-to-jpg', 'encrypt-pdf'];
