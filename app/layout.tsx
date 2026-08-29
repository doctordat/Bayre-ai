import type { Metadata } from 'next';
import './globals.css';
import './home.css';

export const metadata: Metadata = {
  title: 'VietnamGo — Plan Your Vietnam Trip',
  description: 'Plan a Vietnam itinerary, compare travel options, and find flights, stays, and experiences in one place.',
  metadataBase: new URL('https://vietnamgo.vercel.app'),
  alternates: { canonical: '/en' },
  openGraph: {
    title: 'VietnamGo — Plan Your Vietnam Trip',
    description: 'Build a smarter Vietnam itinerary in minutes.',
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
