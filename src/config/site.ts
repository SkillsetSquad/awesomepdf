/**
 * Resolve the public origin of the deployment (no trailing slash).
 *
 * The site is a static export, so the host is only known at build time. Order:
 * explicit NEXT_PUBLIC_SITE_URL, then the host's own build variables
 * (Vercel, Netlify, Cloudflare Pages), then localhost for local development.
 */
function resolveSiteUrl(): string {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim() ||
    process.env.URL?.trim() || // Netlify primary site URL
    process.env.CF_PAGES_URL?.trim() ||
    process.env.VERCEL_URL?.trim() ||
    'http://localhost:3000';

  const withProtocol = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;
  return withProtocol.replace(/\/+$/, '');
}

/**
 * Site configuration
 */
export const siteConfig = {
  name: 'AwesomePDF',
  description: 'Professional PDF Tools - Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: resolveSiteUrl(),
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/SkillsetSquad/awesomepdf',
    upstream: 'https://github.com/PDFCraftTool/pdfcraft',
  },
  creator: 'Skillset Squad Private Limited',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || undefined,
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | AwesomePDF',
    defaultTitle: 'AwesomePDF - Professional PDF Tools',
    locale: 'en_US',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Contact', href: '/contact' },
  ],
};
