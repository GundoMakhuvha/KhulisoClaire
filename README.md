# Wedding Chronicle

Build a premium, single-page wedding invitation website (HTML/CSS/JS,

no build step, no frameworks) for [Couple Names]. It should make

people say "wow" and "aww" — distinctive and elegant, not templated.

DESIGN

- Custom color palette (avoid generic defaults): a deep, rich primary

  color + a muted metallic/accent color + a warm neutral background.

- Pair a characterful display serif (for names/headings) with a clean

  sans-serif (for body/UI text). Avoid default system fonts.

- One consistent, hand-crafted motif (e.g. a botanical line-art

  flourish) reused throughout instead of generic icon sets.

- A single bold "through-line" visual device tying the page together

  as you scroll (e.g. a progress vine/spine that grows with scroll).

OPENING SEQUENCE

- Before the site is visible, show a full-screen envelope. On

  tap/click: wax seal breaks → flap opens → letter slides out →

  overlay fades away, unlocking scroll and revealing the hero.

- Lock page scroll until opened; respect prefers-reduced-motion by

  collapsing the sequence to a near-instant reveal; keep it keyboard

  accessible (real <button>, not a div); provide a <noscript> fallback

  that skips the gate entirely.

SECTIONS

- Hero: both names, an elegant intro line, the date, a scroll cue.

  Entrance animation should trigger only after the envelope opens.

- Our story: short narrative + a photo/placeholder frame.

- Event details: ceremony + reception schedule with times and venue.

- Dress code: palette swatches + short description.

- RSVP form: name, email, attending yes/no toggle, guest count,

  optional message — submits to a database (e.g. Supabase via REST,

  no extra JS library needed) with inline success/error states, not

  alert() popups.

- Add to calendar: generate a downloadable .ics file client-side

  (no external service).

- Message the host: a wa.me WhatsApp deep link with a prefilled

  message.

- Footer sign-off.

SCROLL ANIMATION SYSTEM

- Section headings: a distinctive "unfurl" reveal (e.g. clip-path)

  rather than the generic fade-and-slide-up used everywhere.

- Body content: a lighter, secondary reveal treatment so the

  hierarchy of motion matches the hierarchy of content.

- Use IntersectionObserver, not scroll-jacking libraries.

DATABASE

- We already have a Supabase project set up. Ask for the Project URL,

  anon/public API key, and table name/schema before wiring up the

  RSVP form, instead of generating placeholder setup instructions.

CODE STRUCTURE

- Single index.html, all CSS/JS inline, portable to any static host.

- All editable real-world data (date, venue, phone number, API keys)

  centralized in one clearly commented CONFIG object at the top of

  the script — nothing hardcoded and scattered through markup.

- Placeholder/unknown content marked with TODO or TBC comments.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4189e461-2389-4b8f-b354-d3d58868eff5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
