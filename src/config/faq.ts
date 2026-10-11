import { getAllTools } from '@/config/tools';
import { locales, localeConfig } from '@/lib/i18n/config';

/** Shared between the visible FAQ and its server-rendered schema. */
export const FAQ_CATEGORY_ITEMS = {
  general: ['whatIs', 'isFree', 'account'],
  privacy: ['uploaded', 'safe', 'storage'],
  features: ['operations', 'merge', 'images', 'edit'],
  technical: ['browsers', 'sizeLimit', 'slow', 'offline'],
  languages: ['supported', 'change'],
} as const;
export function getFaqValues() {
  return {
    count: getAllTools().length,
    languages: locales.length,
    languageNames: locales.map(locale => localeConfig[locale].nativeName).join(', '),
  };
}
