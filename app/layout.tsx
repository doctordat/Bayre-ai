import type { Metadata } from 'next';
import './globals.css';
import './home.css';

export const metadata: Metadata = {
  title: 'VietnamGo — Plan Your Vietnam Trip',
  description: 'Plan a Vietnam itinerary, compare travel options, and find flights, stays, experiences, transfers and eSIM in one place.',
  metadataBase: new URL('https://bayre-ai-1kcx-bice.vercel.app'),
  alternates: { canonical: '/en' },
  openGraph: {
    title: 'VietnamGo — Plan Your Vietnam Trip',
    description: 'Build a smarter Vietnam itinerary with real travel photos, practical guides and connected booking partners.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
