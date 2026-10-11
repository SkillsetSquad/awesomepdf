/**
 * Robots.txt Generation
 * Configures crawling rules for search engines
 * 
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */

import { MetadataRoute } from 'next';
import { getAbsoluteUrl } from '@/lib/seo/urls';
import { withBasePath } from '@/lib/utils/path';

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          withBasePath('/api/'),
        ],
      },
    ],
    sitemap: getAbsoluteUrl('/sitemap.xml'),
  };
}
