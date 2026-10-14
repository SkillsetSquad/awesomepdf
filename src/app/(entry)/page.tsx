import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/config';
import { getAbsoluteUrl, getAlternateUrls } from '@/lib/seo/urls';

export const metadata: Metadata = {
  alternates: {
    canonical: getAbsoluteUrl(`/${defaultLocale}/`, true),
    languages: getAlternateUrls(),
  },
};

/** The root has no language picker: it sends everyone to the default (English) site. */
export default function RootPage() {
  redirect(`/${defaultLocale}/`);
}
