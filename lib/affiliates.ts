export type AffiliateKey = 'flights' | 'hotels' | 'experiences' | 'transfers' | 'esim';

type AffiliatePartner = {
  label: string;
  href: string | null;
  disclosure: string;
};

export const affiliates: Record<AffiliateKey, AffiliatePartner> = {
  flights: {
    label: 'Vietnam Airlines',
    href: 'https://go.isclix.com/deep_link/v6/5356313228598147852/6318680441596031865?sub1=724141&sub4=oneatapp&url_enc=aHR0cHM6Ly93d3cudmlldG5hbWFpcmxpbmVzLmNvbS92bi92aS9ob21l',
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

export function hasAffiliate(key: AffiliateKey) {
  return Boolean(affiliates[key].href);
}
