'use client';

import { FormEvent, useMemo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const planCities: Record<string, string[]> = {
  '7-mix': ['Hanoi', 'Da Nang', 'Hoi An'],
  '7-beach': ['Da Nang', 'Hoi An', 'Phu Quoc'],
  '10-mix': ['Hanoi', 'Ha Long Bay', 'Hoi An', 'Ho Chi Minh City'],
  '10-beach': ['Ho Chi Minh City', 'Hoi An', 'Phu Quoc'],
  '14-mix': ['Hanoi', 'Ha Long Bay', 'Da Nang & Hoi An', 'Ho Chi Minh City', 'Phu Quoc'],
  '14-beach': ['Hanoi', 'Hoi An', 'Nha Trang', 'Phu Quoc'],
};

const nights: Record<string, number[]> = {
  '7-mix': [2, 2, 2], '7-beach': [2, 2, 2],
  '10-mix': [3, 1, 3, 2], '10-beach': [2, 3, 4],
  '14-mix': [3, 1, 4, 2, 3], '14-beach': [2, 4, 3, 4],
};

const ideas: Record<string, string[]> = {
  Hanoi: ['Old Quarter food walk', 'Hoan Kiem Lake', 'Temple of Literature'],
  'Ha Long Bay': ['Overnight cruise', 'Kayaking', 'Cave visit'],
  'Da Nang': ['My Khe Beach', 'Marble Mountains', 'Son Tra Peninsula'],
  'Hoi An': ['Ancient Town', 'Cooking class', 'An Bang Beach'],
  'Da Nang & Hoi An': ['Hoi An Ancient Town', 'My Khe Beach', 'Marble Mountains'],
  'Ho Chi Minh City': ['District 1', 'Food tour', 'Mekong day trip'],
  'Phu Quoc': ['Beach day', 'Island hopping', 'Sunset market'],
  'Nha Trang': ['Island day', 'Beach time', 'Seafood'],
};

const daily: Record<string, number> = { budget: 45, mid: 85, premium: 170 };

export default function EmailTripWidget() {
  const pathname = usePathname();
  const params = useSearchParams();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle'|'sending'|'sent'|'error'|'setup'>('idle');
  const [message, setMessage] = useState('');

  const trip = useMemo(() => {
    if (pathname !== '/en/planner') return null;
    const days = params.get('days') || '10';
    const interest = params.get('interest') || 'mix';
    const budget = params.get('budget') || 'mid';
    const travelers = Math.max(1, Number(params.get('travelers') || (params.get('style') === 'solo' ? 1 : params.get('style') === 'family' ? 4 : 2)));
    const key = planCities[`${days}-${interest}`] ? `${days}-${interest}` : `${days}-mix`;
    const cities = planCities[key] || planCities['10-mix'];
    const route = cities.map((city, index) => ({ city, nights: nights[key]?.[index] || 2, ideas: ideas[city] || [] }));
    const tier = budget === 'budget' ? 'A · Smart budget' : budget === 'premium' ? 'C · Premium' : 'B · Comfortable';
    return {
      origin: params.get('origin') || 'Your city',
      arrival: params.get('arrival') || 'Vietnam',
      days,
      travelers,
      budget,
      tier,
      interest,
      depart: params.get('depart') || '',
      returnDate: params.get('return') || '',
      estimate: Number(days) * (daily[budget] || 85) * travelers,
      route,
    };
  }, [pathname, params]);

  if (!trip) return null;

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    setMessage('');
    try {
      const response = await fetch('/api/email-itinerary', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, trip }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) { setState('sent'); setMessage('Sent — check your inbox.'); return; }
      if (response.status === 503) { setState('setup'); setMessage('Email delivery is being connected. Your itinerary is still saved on this page.'); return; }
      setState('error'); setMessage(data?.error || 'Could not send the itinerary.');
    } catch {
      setState('error'); setMessage('Could not send the itinerary.');
    }
  }

  return (
    <div className={`saveTripWidget ${open ? 'open' : ''}`}>
      <button className="saveTripToggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>✉</span><div><b>Email this itinerary</b><small>Save your optimized trip</small></div><em>{open ? '×' : '→'}</em>
      </button>
      {open ? <div className="saveTripPanel">
        <h3>Send this trip to your inbox.</h3>
        <p>Route, budget estimate and a link back to this itinerary.</p>
        <form onSubmit={submit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required autoComplete="email" />
          <button type="submit" disabled={state === 'sending' || state === 'sent'}>{state === 'sending' ? 'Sending…' : state === 'sent' ? 'Sent ✓' : 'Send my trip'}</button>
        </form>
        <small>One itinerary email only. No newsletter signup.</small>
        {message ? <div className={`saveTripMessage ${state}`}>{message}</div> : null}
      </div> : null}
    </div>
  );
}
