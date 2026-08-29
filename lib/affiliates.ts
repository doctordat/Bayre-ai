export type AffiliateKey =
  | 'flights-vna'
  | 'flights-traveloka'
  | 'hotels-trip'
  | 'hotels-traveloka'
  | 'experiences-klook'
  | 'experiences-trip'
  | 'transfers-klook'
  | 'esim-klook'
  | 'trains-trip';

export type AffiliateCategory = 'flights' | 'hotels' | 'experiences' | 'transfers' | 'esim' | 'trains';

type AffiliatePartner = {
  label: string;
  category: AffiliateCategory;
  href: string;
  disclosure: string;
};

export const affiliates: Record<AffiliateKey, AffiliatePartner> = {
  'flights-vna': { label: 'Vietnam Airlines', category: 'flights', href: 'https://shorten.asia/MhzpQnZq', disclosure: 'Flight booking partner' },
  'flights-traveloka': { label: 'Traveloka', category: 'flights', href: 'https://shorten.asia/zxKud1Xm', disclosure: 'Flight booking partner' },
  'hotels-trip': { label: 'Trip.com', category: 'hotels', href: 'https://shorten.asia/A7u3mnWY', disclosure: 'Accommodation booking partner' },
  'hotels-traveloka': { label: 'Traveloka', category: 'hotels', href: 'https://shorten.asia/zxKud1Xm', disclosure: 'Accommodation booking partner' },
  'experiences-klook': { label: 'Klook', category: 'experiences', href: 'https://shorten.asia/Tk7VKSKv', disclosure: 'Experiences booking partner' },
  'experiences-trip': { label: 'Trip.com', category: 'experiences', href: 'https://shorten.asia/A7u3mnWY', disclosure: 'Experiences booking partner' },
  'transfers-klook': { label: 'Klook', category: 'transfers', href: 'https://shorten.asia/Tk7VKSKv', disclosure: 'Ground transport booking partner' },
  'esim-klook': { label: 'Klook', category: 'esim', href: 'https://shorten.asia/Tk7VKSKv', disclosure: 'Connectivity partner' },
  'trains-trip': { label: 'Trip.com', category: 'trains', href: 'https://shorten.asia/A7u3mnWY', disclosure: 'Train booking partner' },
};

export function isAffiliateKey(value: string): value is AffiliateKey {
  return value in affiliates;
}

export function getAffiliatesByCategory(category: AffiliateCategory) {
  return (Object.entries(affiliates) as [AffiliateKey, AffiliatePartner][]).filter(([, partner]) => partner.category === category);
}
