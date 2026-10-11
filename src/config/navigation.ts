/**
 * Header menus. Each menu lists the categories it covers and a few tools per
 * category, by registry id. "All Tools" lists every category and needs no entry.
 */

import type { ToolCategory } from '@/types/tool';

export type NavMenuId = 'edit' | 'convert' | 'organize';

export interface NavGroup {
  category: ToolCategory;
  toolIds: string[];
}

export interface NavMenu {
  id: NavMenuId;
  groups: NavGroup[];
}

export const NAV_MENUS: NavMenu[] = [
  {
    id: 'edit',
    groups: [
      { category: 'edit-annotate', toolIds: ['edit-pdf', 'sign-pdf', 'add-watermark', 'crop-pdf', 'page-numbers', 'form-filler'] },
    ],
  },
  {
    id: 'convert',
    groups: [
      { category: 'convert-to-pdf', toolIds: ['image-to-pdf', 'word-to-pdf', 'excel-to-pdf', 'pptx-to-pdf'] },
      { category: 'convert-from-pdf', toolIds: ['pdf-to-docx', 'pdf-to-jpg', 'pdf-to-excel', 'pdf-to-pptx'] },
    ],
  },
  {
    id: 'organize',
    groups: [
      { category: 'organize-manage', toolIds: ['merge-pdf', 'split-pdf', 'organize-pdf', 'rotate-pdf', 'extract-pages', 'delete-pages'] },
      { category: 'optimize-repair', toolIds: ['compress-pdf', 'repair-pdf'] },
      { category: 'secure-pdf', toolIds: ['encrypt-pdf', 'decrypt-pdf'] },
    ],
  },
];
