import type { Metadata } from 'next';
import '@/app/globals.css';

import { siteConfig } from '@/config/site';
import { withBasePath } from '@/lib/utils/path';
import { SiteDocument } from '@/components/layout/SiteDocument';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: withBasePath('/favicon.svg'),
    shortcut: withBasePath('/favicon.svg'),
    apple: withBasePath('/apple-touch-icon.png'),
  },
};

// Root layout - provides the basic HTML structure
// The actual layout with i18n is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteDocument locale="en">{children}</SiteDocument>
  );
}
