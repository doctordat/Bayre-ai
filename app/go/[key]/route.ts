import { NextRequest, NextResponse } from 'next/server';
import { affiliates, isAffiliateKey } from '../../../lib/affiliates';

export function GET(request: NextRequest, context: { params: Promise<{ key: string }> }) {
  return context.params.then(({ key }) => {
    if (!isAffiliateKey(key)) {
      return NextResponse.redirect(new URL('/#book', request.url));
    }

    const partner = affiliates[key];
    if (!partner.href) {
      const fallback = new URL('/#book', request.url);
      fallback.searchParams.set('partner', key);
      return NextResponse.redirect(fallback);
    }

    const source = request.nextUrl.searchParams.get('src') || 'site';
    const page = request.nextUrl.searchParams.get('page') || request.headers.get('referer') || 'unknown';
    console.info('[affiliate-click]', JSON.stringify({ key, source, page, at: new Date().toISOString() }));

    return NextResponse.redirect(partner.href);
  });
}
