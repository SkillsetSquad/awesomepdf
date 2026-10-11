/**
 * Font Configuration
 * Requirements: 8.4 - Font optimization
 * 
 * Uses next/font for automatic font optimization including:
 * - Font subsetting (only loads characters used)
 * - Self-hosting (no external requests to Google Fonts)
 * - Zero layout shift with size-adjust
 * - display: swap for better performance
 */

import { Inter, JetBrains_Mono } from 'next/font/google';

/**
 * Inter font - Primary sans-serif font
 * Used for body text and UI elements
 */
export const inter = Inter({
  // Only the Latin subset is preloaded: the 85 kB latin-ext file would otherwise be fetched
  // on every page, including English ones that never use it. next/font still self-hosts the
  // extended faces, and the browser loads them by unicode-range when a page needs them
  // (Polish, Romanian, Vietnamese and similar text).
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  adjustFontFallback: true,
});

/**
 * JetBrains Mono font - Monospace font
 * Used for code snippets and technical content
 */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  preload: false, // Only preload if code is shown above the fold
  fallback: ['Fira Code', 'Consolas', 'Monaco', 'monospace'],
  adjustFontFallback: true,
});

/**
 * Combined font variables for use in className
 */
export const fontVariables = `${inter.variable} ${jetbrainsMono.variable}`;

/**
 * Font class names for direct usage
 */
export const fontClassNames = {
  sans: inter.className,
  mono: jetbrainsMono.className,
};

/**
 * CSS custom properties for fonts
 * These are set as CSS variables and can be used in Tailwind
 */
export const fontCssVariables = {
  '--font-sans': inter.style.fontFamily,
  '--font-mono': jetbrainsMono.style.fontFamily,
} as const;
