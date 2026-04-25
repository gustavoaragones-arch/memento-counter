# Design Decisions

## No pulse animation on counter ticks

The original build plan mentioned "subtle pulse animation on each integer increment" as a Day 3 item. We chose to skip this.

**Reasoning:**
- The counter updates 4.3x per second on the born side and 2.0x per second on the deceased side. Any opacity flicker at that rate would compete with the user's attempt to read the number.
- The project tone is "reflective, factual, neutral" — pulsing digits lean closer to "gimmicky" than "gravitas."
- The `font-variant-numeric: tabular-nums` CSS already prevents digit-width jitter, which is the real visual distraction a pulse would have been trying to mask.

**If revisited:**
- A pulse on the *ones* digit only (not the full number) at reduced opacity range (e.g., 0.8 → 1.0) could work.
- Alternatively, a single-frame highlight on comma-separator crossings (every 1,000) would feel more like "something just happened" without constant motion.

## Approximate scale labels round DOWN

The "≈ 117 billion" label under each counter uses `Math.floor`, not `Math.round`. This is intentional: we never want the label to overstate the count. "117 billion" is true the moment the counter crosses 117,000,000,000, and rounding up would make the label lie for the seconds before that threshold.

## Share URL resolves to a server-rendered landing page

The "Copy shareable link" button copies a URL of the form `/share/{timestamp}`. That URL points to a real Next.js page that:
1. Server-renders a human-readable "moment in the ledger" view
2. Generates OG metadata that points the link preview at `/api/share?ts={timestamp}`
3. Makes social link previews show the frozen snapshot automatically

The alternative — having the button copy a direct `/api/share?ts=` PNG URL — would work as a raw image link but wouldn't give users a readable landing page when clicked, and social platforms would not generate rich previews for a raw PNG URL.

## GSC verification via environment variable

The Google Search Console verification meta tag is wired to `process.env.NEXT_PUBLIC_GSC_VERIFICATION`. When the variable is unset, no tag is emitted. This lets us commit the wiring without hardcoding a verification string, and lets Gustavo paste the real value into Vercel project settings when he verifies the property.
