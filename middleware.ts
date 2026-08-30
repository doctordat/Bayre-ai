import { NextRequest, NextResponse } from 'next/server';

function readParam(request: NextRequest, key: string, fallback = 'unknown') {
  const value = request.nextUrl.searchParams.get(key)?.trim();
  return value ? value.slice(0, 80) : fallback;
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

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const existingTripId = request.cookies.get('vg_trip')?.value;
  const tripId = existingTripId || crypto.randomUUID().slice(0, 12);

  response.cookies.set('vg_trip', tripId, {
    httpOnly: true,
    sameSite: 'lax',
    secure: request.nextUrl.protocol === 'https:',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  });

  console.info('[planner-result]', JSON.stringify({
    tripId,
    source: referrerPath(request),
    arrival: readParam(request, 'arrival', 'Vietnam'),
    days: readParam(request, 'days', '10'),
    travelers: readParam(request, 'travelers', '2'),
    budget: readParam(request, 'budget', 'mid'),
    style: readParam(request, 'style', 'couple'),
    interest: readParam(request, 'interest', 'mix'),
    hasDates: Boolean(request.nextUrl.searchParams.get('depart') || request.nextUrl.searchParams.get('return')),
    at: new Date().toISOString(),
  }));

  return response;
}

export const config = {
  matcher: ['/en/planner'],
};
