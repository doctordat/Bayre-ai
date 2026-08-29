export type AffiliateKey = 'flights' | 'hotels' | 'experiences' | 'transfers' | 'esim' | 'other';

export type AffiliatePartner = { id: string; label: string; href: string };
type AffiliateCategory = { label: string; disclosure: string; partners: AffiliatePartner[] };

export const affiliates: Record<AffiliateKey, AffiliateCategory> = {
  flights: {
    label: 'Flights', disclosure: 'Flight booking partners',
    partners: [
      { id: 'vietnam-airlines', label: 'Vietnam Airlines', href: 'https://shorten.asia/MhzpQnZq' },
      { id: 'traveloka', label: 'Traveloka', href: 'https://shorten.asia/zxKud1Xm' },
    ],
  },
  hotels: {
    label: 'Hotels', disclosure: 'Accommodation booking partners',
    partners: [
      { id: 'trip-com', label: 'Trip.com', href: 'https://shorten.asia/A7u3mnWY' },
      { id: 'traveloka', label: 'Traveloka', href: 'https://shorten.asia/zxKud1Xm' },
    ],
  },
  experiences: {
    label: 'Tours & activities', disclosure: 'Experiences booking partners',
    partners: [
      { id: 'klook', label: 'Klook', href: 'https://shorten.asia/Tk7VKSKv' },
      { id: 'trip-com', label: 'Trip.com', href: 'https://shorten.asia/A7u3mnWY' },
    ],
  },
  transfers: { label: 'Transfers', disclosure: 'Ground transport booking partner', partners: [{ id: 'klook', label: 'Klook', href: 'https://shorten.asia/Tk7VKSKv' }] },
  esim: { label: 'eSIM', disclosure: 'Connectivity partner', partners: [{ id: 'klook', label: 'Klook', href: 'https://shorten.asia/Tk7VKSKv' }] },
  other: { label: 'Trains & more', disclosure: 'Multi-service travel partner', partners: [{ id: 'trip-com', label: 'Trip.com', href: 'https://shorten.asia/A7u3mnWY' }] },
};

export function isAffiliateKey(value: string): value is AffiliateKey { return value in affiliates; }
export function hasAffiliate(key: AffiliateKey) { return affiliates[key].partners.length > 0; }
export function getAffiliatePartner(key: AffiliateKey, partnerId?: string | null) {
  const partners = affiliates[key].partners;
  return partners.find((partner) => partner.id === partnerId) || partners[0] || null;
}
