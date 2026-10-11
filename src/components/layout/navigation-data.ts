/**
 * Header menu data, built on the server from the tool registry. Menus list tool
 * ids (see config/navigation.ts); names come from the localized tool content,
 * and ids missing from the registry are skipped.
 */

import { getAllTools, getToolById, getToolsByCategory } from '@/config/tools';
import { NAV_MENUS, type NavMenuId } from '@/config/navigation';
import { TOOL_CATEGORIES, type ToolCategory } from '@/types/tool';
import type { Locale } from '@/lib/i18n/config';
import { allToolsHref, categoryHref, toolHref } from '@/lib/routes';
import { getToolSummaries } from '@/lib/tool-summaries';

export interface NavToolLink {
  id: string;
  title: string;
  href: string;
}

export interface NavCategoryLink {
  category: ToolCategory;
  href: string;
  count: number;
}

export interface NavGroupData extends NavCategoryLink {
  tools: NavToolLink[];
}

export interface NavMenuData {
  id: NavMenuId;
  groups: NavGroupData[];
}

export interface NavigationData {
  totalTools: number;
  allToolsHref: string;
  categories: NavCategoryLink[];
  menus: NavMenuData[];
}

export function buildNavigationData(locale: Locale): NavigationData {
  const summaries = getToolSummaries(locale);
  const categoryLink = (category: ToolCategory): NavCategoryLink => ({
    category,
    href: categoryHref(locale, category),
    count: getToolsByCategory(category).length,
  });

  return {
    totalTools: getAllTools().length,
    allToolsHref: allToolsHref(locale),
    categories: TOOL_CATEGORIES.map(categoryLink),
    menus: NAV_MENUS.map((menu) => ({
      id: menu.id,
      groups: menu.groups.map((group) => ({
        ...categoryLink(group.category),
        tools: group.toolIds.flatMap((id) => {
          const tool = getToolById(id);
          return tool ? [{ id, title: summaries[id]?.title ?? id, href: toolHref(locale, tool.slug) }] : [];
        }),
      })),
    })),
  };
}
