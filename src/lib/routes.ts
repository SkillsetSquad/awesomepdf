/** Locale-aware URL helpers shared by the header, footer and homepage. */

import type { Locale } from '@/lib/i18n/config';
import type { ToolCategory } from '@/types/tool';

export const toolHref = (locale: Locale | string, slug: string) => `/${locale}/tools/${slug}`;
export const categoryHref = (locale: Locale | string, category: ToolCategory) => `/${locale}/tools/category/${category}`;
export const allToolsHref = (locale: Locale | string) => `/${locale}/tools`;
/** Anchor of the AwesomePDF Share (Coming Soon) section on the homepage. */
export const shareSectionHref = (locale: Locale | string) => `/${locale}#share`;
