# VietnamGo itinerary email setup

The itinerary email flow uses Resend.

## Test mode

1. Create a Resend account and API key.
2. In the Vercel project, add `RESEND_API_KEY` for Production and Preview.
3. Redeploy.
4. The app will use `VietnamGo <onboarding@resend.dev>` automatically when `ITINERARY_EMAIL_FROM` is not configured.

Resend's onboarding sender is intended for testing and may only send to addresses allowed by the Resend account.

## Production mode

After VietnamGo has a verified sending domain in Resend, set:

`ITINERARY_EMAIL_FROM=VietnamGo <trip@your-domain.example>`

Then redeploy. No code changes are required.
