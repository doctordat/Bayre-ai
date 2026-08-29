import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://bayre-ai-1kcx-bice.vercel.app';
  const pages = [
    '',
    '/en',
    '/en/explore',
    '/en/guides',
    '/en/planner',
    '/en/hanoi',
    '/en/da-nang-hoi-an',
    '/en/ho-chi-minh-city',
    '/en/phu-quoc',
    '/en/vietnam-itinerary-7-days',
    '/en/vietnam-itinerary-10-days',
    '/en/vietnam-itinerary-14-days',
    '/en/vietnam-travel-cost',
    '/en/vietnam-esim',
    '/en/ha-long-bay-from-hanoi',
  ];

  return pages.map((path, index) => ({
    url: `${base}${path}`,
    changeFrequency: index <= 4 ? 'weekly' : 'monthly',
    priority: index <= 1 ? 1 : index <= 4 ? 0.9 : 0.8,
  }));
}
