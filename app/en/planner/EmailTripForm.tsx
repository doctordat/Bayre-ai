'use client';

import { FormEvent, useState } from 'react';

type Props = {
  trip: {
    origin: string;
    arrival: string;
    days: string;
    travelers: number;
    budget: string;
    tier: string;
    interest: string;
    depart: string;
    returnDate: string;
    estimate: number;
    route: { city: string; nights: number; ideas: string[] }[];
  };
};

export default function EmailTripForm({ trip }: Props) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error' | 'setup'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    try {
      const response = await fetch('/api/email-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, trip }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setStatus('sent');
        setMessage('Sent — check your inbox for your Vietnam itinerary.');
        return;
      }
      if (response.status === 503) {
        setStatus('setup');
        setMessage('Email delivery is being connected. Your itinerary is ready on this page for now.');
        return;
      }
      setStatus('error');
      setMessage(data?.error || 'Could not send the itinerary. Please try again.');
    } catch {
      setStatus('error');
      setMessage('Could not send the itinerary. Please try again.');
    }
  }

  return (
    <section className="emailTripBox" aria-labelledby="email-trip-title">
      <div className="emailTripCopy">
        <span className="kicker">SAVE THIS TRIP</span>
        <h2 id="email-trip-title">Email me this optimized itinerary.</h2>
        <p>Get this route, budget snapshot and booking checklist in one email so you can come back to it later.</p>
        <div className="emailTripTrust"><span>✓ One itinerary email</span><span>✓ No account needed</span><span>✓ No newsletter unless you choose one later</span></div>
      </div>
      <form className="emailTripForm" onSubmit={submit}>
        <label htmlFor="trip-email">Your email</label>
        <div className="emailTripInputRow">
          <input id="trip-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required autoComplete="email" />
          <button className="primary" type="submit" disabled={status === 'sending' || status === 'sent'}>{status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Email my trip →'}</button>
        </div>
        <small>We use this address only to send the itinerary you requested.</small>
        {message ? <p className={`emailTripStatus ${status}`}>{message}</p> : null}
      </form>
    </section>
  );
}
