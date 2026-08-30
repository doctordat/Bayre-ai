import { NextRequest, NextResponse } from 'next/server';
import { getAffiliatePartner, isAffiliateKey } from '../../../lib/affiliates';

function clean(value: string | null, fallback = 'unknown') {
  const trimmed = value?.trim();
  return trimmed ? trimmed.slice(0, 80) : fallback;
}

function referrerPath(request: NextRequest) {
  const referrer = request.headers.get('referer');
  if (!referrer) return 'direct';
  try {
    const url = new URL(referrer);
    return `${url.pathname}${url.search ? '?…' : ''}`.slice(0, 120);
  } catch {
    return 'unknown';
  }
}

export function GET(request: NextRequest, context: { params: Promise<{ key: string }> }) {
  return context.params.then(({ key }) => {
    if (!isAffiliateKey(key)) {
      return NextResponse.redirect(new URL('/#book', request.url));
    }

    const requestedPartner = request.nextUrl.searchParams.get('partner');
    const partner = getAffiliatePartner(key, requestedPartner);
    if (!partner) {
      const fallback = new URL('/#book', request.url);
      fallback.searchParams.set('partner', key);
      return NextResponse.redirect(fallback);
    }

    const tripId = request.cookies.get('vg_trip')?.value || 'none';
    const source = clean(request.nextUrl.searchParams.get('src'), 'site');
    const page = clean(request.nextUrl.searchParams.get('page'), referrerPath(request));

    console.info('[affiliate-click]', JSON.stringify({
      tripId,
      key,
      partner: partner.id,
      source,
      page,
      referrer: referrerPath(request),
      days: clean(request.nextUrl.searchParams.get('days'), 'unknown'),
      budget: clean(request.nextUrl.searchParams.get('budget'), 'unknown'),
      style: clean(request.nextUrl.searchParams.get('style'), 'unknown'),
      interest: clean(request.nextUrl.searchParams.get('interest'), 'unknown'),
      arrival: clean(request.nextUrl.searchParams.get('arrival'), 'unknown'),
      travelers: clean(request.nextUrl.searchParams.get('travelers'), 'unknown'),
      at: new Date().toISOString(),
    }));

    return NextResponse.redirect(partner.href);
  });
}
