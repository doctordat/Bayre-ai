import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import './home.css';
import './home-conversion.css';
import './email-trip.css';
import './planner-polish.css';
import EmailTripWidget from './EmailTripWidget';

const BASE_URL = 'https://bayre-ai-1kcx-bice.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'VietnamGo — Plan Your Vietnam Trip',
    template: '%s | VietnamGo',
  },
  description: 'Plan a Vietnam itinerary with practical destination guides, real travel inspiration, budget ideas and connected booking options for flights, hotels, experiences, transfers and eSIM.',
  applicationName: 'VietnamGo',
  keywords: ['Vietnam travel', 'Vietnam itinerary', 'Vietnam travel planner', 'Vietnam travel cost', 'Vietnam destinations', 'Vietnam flights', 'Vietnam hotels'],
  alternates: { canonical: '/en' },
  openGraph: {
    title: 'VietnamGo — Plan Your Vietnam Trip',
    description: 'Build a smarter Vietnam itinerary with practical guides, real travel inspiration and connected booking partners.',
    url: '/en',
    siteName: 'VietnamGo',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VietnamGo — Plan Your Vietnam Trip',
    description: 'Practical Vietnam itineraries, destination guides, budgets and booking options in one place.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'VietnamGo',
    url: BASE_URL,
    inLanguage: 'en',
    description: 'Vietnam travel planning, destination guides, itineraries and booking discovery.',
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
