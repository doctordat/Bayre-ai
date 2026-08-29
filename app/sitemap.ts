import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vietnamgo.vercel.app';
  return [
    { url: `${base}/en`, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/en/planner`, changeFrequency: 'weekly', priority: 0.9 },
  ];
}
