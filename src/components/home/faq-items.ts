/** Keys of the homepage FAQ entries in `home.faq.items`, in display order. */
export const HOME_FAQ_KEYS = ['free', 'upload', 'account', 'tools', 'mobile', 'scanned', 'share'] as const;
export type HomeFaqKey = (typeof HOME_FAQ_KEYS)[number];
