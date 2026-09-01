import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://silly-truffle-8677bb.netlify.app';
  const now = new Date();
  const pages = [
    { path: '/en', priority: 1, frequency: 'weekly' as const },
    { path: '/en/guides', priority: 0.95, frequency: 'weekly' as const },
    { path: '/en/vietnam-first-time-guide', priority: 0.95, frequency: 'monthly' as const },
    { path: '/en/best-time-to-visit-vietnam', priority: 0.95, frequency: 'monthly' as const },
    { path: '/en/getting-around-vietnam', priority: 0.9, frequency: 'monthly' as const },
    { path: '/en/explore', priority: 0.9, frequency: 'weekly' as const },
    { path: '/en/attractions', priority: 0.9, frequency: 'weekly' as const },
    { path: '/en/vietnam-itinerary-10-days', priority: 0.95, frequency: 'monthly' as const },
    { path: '/en/vietnam-itinerary-14-days', priority: 0.95, frequency: 'monthly' as const },
    { path: '/en/vietnam-itinerary-7-days', priority: 0.9, frequency: 'monthly' as const },
    { path: '/en/vietnam-travel-cost', priority: 0.9, frequency: 'monthly' as const },
    { path: '/en/hanoi', priority: 0.9, frequency: 'monthly' as const },
    { path: '/en/da-nang-hoi-an', priority: 0.9, frequency: 'monthly' as const },
    { path: '/en/ho-chi-minh-city', priority: 0.9, frequency: 'monthly' as const },
    { path: '/en/phu-quoc', priority: 0.9, frequency: 'monthly' as const },
    { path: '/en/ha-long-bay-from-hanoi', priority: 0.85, frequency: 'monthly' as const },
    { path: '/en/vietnam-esim', priority: 0.8, frequency: 'monthly' as const },
    { path: '/en/attractions/hoan-kiem-lake', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/ho-chi-minh-mausoleum', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/temple-of-literature-hanoi', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/my-khe-beach', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/marble-mountains-da-nang', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/hanoi-old-quarter', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/son-tra-peninsula', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/ba-na-hills', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/hoi-an-ancient-town', priority: 0.75, frequency: 'monthly' as const },
    { path: '/en/attractions/dragon-bridge-da-nang', priority: 0.75, frequency: 'monthly' as const },
  ];

  return pages.map(({ path, priority, frequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: frequency,
    priority,
    alternates: { languages: { en: `${base}${path}`, 'x-default': `${base}${path}` } },
  }));
}
