import { describe, expect, it } from 'vitest';
import { NAV_MENUS } from '@/config/navigation';
import { HOME_POPULAR_TOOLS, HOME_SHORTCUT_IDS } from '@/config/home';
import { getAllTools, getToolById } from '@/config/tools';
import { buildNavigationData } from '@/components/layout/navigation-data';
import { locales } from '@/lib/i18n/config';
import { TOOL_CATEGORIES } from '@/types/tool';

describe('navigation and homepage configuration', () => {
  it('only references tools that exist in the registry', () => {
    const ids = [
      ...NAV_MENUS.flatMap((menu) => menu.groups.flatMap((group) => group.toolIds)),
      ...HOME_POPULAR_TOOLS.map((tool) => tool.id),
      ...HOME_SHORTCUT_IDS,
    ];

    expect(ids.filter((id) => !getToolById(id))).toEqual([]);
  });

  it('lists each menu tool under the category it belongs to, once', () => {
    for (const menu of NAV_MENUS) {
      for (const group of menu.groups) {
        for (const id of group.toolIds) expect(getToolById(id)?.category, id).toBe(group.category);
        expect(new Set(group.toolIds).size).toBe(group.toolIds.length);
      }
    }
  });

  it('reaches every category from the menus and every popular shortcut from the popular grid', () => {
    const covered = new Set(NAV_MENUS.flatMap((menu) => menu.groups.map((group) => group.category)));
    expect([...covered].sort()).toEqual([...TOOL_CATEGORIES].sort());

    const popular = HOME_POPULAR_TOOLS.map((tool) => tool.id);
    for (const id of HOME_SHORTCUT_IDS) expect(popular).toContain(id);
  });

  it('builds localized menu data with real counts and routes', () => {
    for (const locale of locales) {
      const data = buildNavigationData(locale);
      expect(data.totalTools).toBe(getAllTools().length);
      expect(data.categories.reduce((sum, category) => sum + category.count, 0)).toBe(data.totalTools);

      for (const menu of data.menus) {
        for (const group of menu.groups) {
          expect(group.href).toBe(`/${locale}/tools/category/${group.category}`);
          for (const tool of group.tools) {
            expect(tool.href).toBe(`/${locale}/tools/${getToolById(tool.id)!.slug}`);
            expect(tool.title.length).toBeGreaterThan(0);
          }
        }
      }
    }
  });
});
