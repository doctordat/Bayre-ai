import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import './home.css';
import './home-conversion.css';
import './email-trip.css';
import './planner-polish.css';
import './home-v2.css';
import EmailTripWidget from './EmailTripWidget';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://silly-truffle-8677bb.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Vietnam Trip Planner & Travel Guides | VietnamGo',
    template: '%s | VietnamGo',
  },
  description: 'Plan a Vietnam trip with practical 7, 10 and 14-day itineraries, destination guides, realistic travel cost estimates and booking options for flights, hotels, tours, transfers and eSIM.',
  applicationName: 'VietnamGo',
  keywords: ['Vietnam trip planner', 'Vietnam itinerary', 'Vietnam travel guide', 'Vietnam travel cost', 'Vietnam itinerary 10 days', 'Vietnam itinerary 2 weeks', 'Hanoi travel guide', 'Hoi An travel guide', 'Phu Quoc travel'],
  alternates: { canonical: '/en', languages: { 'en': '/en', 'x-default': '/en' } },
  openGraph: {
    title: 'Vietnam Trip Planner & Travel Guides | VietnamGo',
    description: 'Plan Vietnam with clear routes, destination advice, realistic budgets and connected booking options.',
    url: '/en',
    siteName: 'VietnamGo',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vietnam Trip Planner & Travel Guides | VietnamGo',
    description: 'Vietnam itineraries, destination guides, realistic budgets and booking options for first-time visitors.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VietnamGo',
    url: BASE_URL,
    inLanguage: 'en',
    description: 'Vietnam trip planner, travel guides, itineraries, budget estimates and booking discovery.',
  };

  return (
    <html lang="en">
      <body>
        {children}
        <Suspense fallback={null}><EmailTripWidget /></Suspense>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
