import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vietnamgo.vercel.app';
  const pages = [
    '',
    '/en',
    '/en/hanoi',
    '/en/da-nang-hoi-an',
    '/en/ho-chi-minh-city',
    '/en/phu-quoc',
    '/en/vietnam-itinerary-7-days',
    '/en/vietnam-itinerary-10-days',
    '/en/vietnam-itinerary-14-days',
  ];

  return pages.map((path, index) => ({
    url: `${base}${path}`,
    changeFrequency: 'weekly',
    priority: index <= 1 ? 1 : 0.8,
  }));
}
