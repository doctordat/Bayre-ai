// BayRe AI - Analytics & Affiliate Tracking
window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, eventParams = {}) {
    // Standard dataLayer push for GA4/GTM
    window.dataLayer.push({ event: eventName, ...eventParams });
    
    // Debug logging
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname.includes('vercel.app')) {
        console.info(`[Tracking] ${eventName}`, eventParams);
    }
}

// Global Event Delegation
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        // 1. Affiliate Outbound Clicks
        const isPartnerLink = link.classList.contains('book') || 
                              link.classList.contains('budgetCta') || 
                              link.href.includes('aviasales.com') || 
                              link.href.includes('vietnamairlines.com') || 
                              link.href.includes('sunphuquocairways.com') || 
                              link.href.includes('vegiagoc.com') || 
                              link.href.includes('gotadi.com') || 
                              link.href.includes('atadi.vn') || 
                              link.href.includes('trip.com') || 
                              link.href.includes('vivavivu.com');

        // Ensure it's actually leaving the site
        if (isPartnerLink && !link.href.includes(location.host) && !link.href.startsWith('/') && !link.href.startsWith('#')) {
            trackEvent('affiliate_outbound_click', {
                link_url: link.href,
                link_text: link.innerText.trim(),
                page_path: location.pathname
            });
        }

        // 2. Route CTA Clicks (From SEO routes/guides to the search flow)
        if (link.href.includes('index.html?from=')) {
            try {
                const urlObj = new URL(link.href, location.origin);
                trackEvent('route_cta_click', {
                    origin: urlObj.searchParams.get('from'),
                    destination: urlObj.searchParams.get('to'),
                    page_path: location.pathname
                });
            } catch (err) {
                // Fallback if URL parsing fails
            }
        }
    });
});

// Expose trackEvent globally so index.html can call it
window.bayreTrackEvent = trackEvent;
