/**
 * Site configuration
 */
export const siteConfig = {
  name: 'AwesomePDF',
  description: 'Professional PDF Tools - Free, Private & Browser-Based. Merge, split, compress, convert, and edit PDF files online without uploading to servers.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://pdfcraft.devtoolcafe.com').replace(/\/+$/, ''),
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://github.com/SkillsetSquad/awesomepdf',
    upstream: 'https://github.com/PDFCraftTool/pdfcraft',
  },
  creator: 'Skillset Squad Private Limited',
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
