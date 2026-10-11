/**
 * Resolve the public origin of the deployment (no trailing slash).
 *
 * The site is a static export, so the host is only known at build time. Order:
 * explicit NEXT_PUBLIC_SITE_URL, then the known production domain. Preview
 * hostnames must not silently change the canonical origin.
 */
function resolveSiteUrl(): string {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    'https://awsomepdf.com';

  const withProtocol = /^https?:\/\//i.test(candidate) ? candidate : `https://${candidate}`;
  const url = new URL(withProtocol);
  if (url.pathname !== '/' || url.search || url.hash) {
    throw new Error('NEXT_PUBLIC_SITE_URL must be an origin. Set BASE_PATH separately for a subpath deployment.');
  }
  return url.origin;
}

/**
 * Site configuration
 */
export const siteConfig = {
  name: 'AwesomePDF',
  description: 'Free online PDF tools that run in your browser. Merge, split, compress, convert, and edit PDF files with no sign-up required.',
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
    defaultTitle: 'AwesomePDF - Free Online PDF Tools',
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
