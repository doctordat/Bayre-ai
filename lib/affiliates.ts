export type AffiliateKey = 'flights' | 'hotels' | 'experiences' | 'transfers' | 'esim';

type AffiliatePartner = {
  label: string;
  href: string | null;
  disclosure: string;
};

export const affiliates: Record<AffiliateKey, AffiliatePartner> = {
  flights: {
    label: 'Flights',
    href: null,
    disclosure: 'Flight booking partner',
  },
  hotels: {
    label: 'Hotels',
    href: null,
    disclosure: 'Accommodation booking partner',
  },
  experiences: {
    label: 'Tours & activities',
    href: null,
    disclosure: 'Experiences booking partner',
  },
  transfers: {
    label: 'Transfers',
    href: null,
    disclosure: 'Ground transport booking partner',
  },
  esim: {
    label: 'eSIM',
    href: null,
    disclosure: 'Connectivity partner',
  },
};

export function isAffiliateKey(value: string): value is AffiliateKey {
  return value in affiliates;
}
