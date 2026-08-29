import type { MetadataRoute } from 'next';

const BASE_URL = 'https://bayre-ai-1kcx-bice.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/go/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
