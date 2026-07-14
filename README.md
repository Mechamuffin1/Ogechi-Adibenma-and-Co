# Ogechi Adibenma & Co Legal Chambers — Website

A static, dependency-free website (plain HTML/CSS/JS — no build step). Host it anywhere that serves files: Netlify, Vercel, Cloudflare Pages, GitHub Pages, or ordinary shared hosting.

## Design system (after the colour/motion revision pass)

- **Type**: Cabinet Grotesk (headings) + Satoshi (body/UI), served from Fontshare.
- **Palette**: warm alabaster `#f4f2ec` light sections; marine blues `#0f1f3a`/`#1b3a6e`/`#2f63b0` for dark bands and accents; cream `#f6f1e4` text on blue; sky `#9dc0ec` accents on dark.
- **Hero**: inset rounded gradient panel (`#16325e → #2f63b0 → #7fa9dd`) with three GSAP-animated liquid blobs (`js/atmosphere.js`); scroll cue draws the eye below the fold.
- **Nav**: frosted glass (`backdrop-filter: blur`), translucent over light and dark content.
- **Insights**: opens with the same blue panel; low-opacity rectangular blocks slide horizontally behind the title (GSAP), echoing the client's motion reference. Below it, the every.to-style sticky subject rail.
- **CTAs**: pill buttons, solid fills, lift on hover.
- GSAP loads from cdnjs only on `index.html` and `insights/index.html`; all motion is skipped under `prefers-reduced-motion`.

## Revision 2 — video hero, globe, unified blue headers

- **Hero** keeps the former blue gradient panel and blends `media/lady-justice.mp4` into it with `mix-blend-mode: soft-light`, so the statue reads as a blue-toned presence within the gradient rather than a dark photo. The video is mirrored (`transform: scaleX(-1)`) so Lady Justice sits on the **right**; the copy sits on the **left** over a subtle left-side darkening for legibility. Liquid blobs still drift for the former ambient motion. Tune the statue's prominence via `.hero-media` `opacity` / `mix-blend-mode` in `css/styles.css`.
  - ⚠️ The video is **24 MB** (4K). For production, re-encode to ~1080p/2–4 MB and add a `.webm`. With no `ffmpeg` on this machine I couldn't compress it here; the blue gradient shows as the fallback before it loads and under reduced-motion.
- **Practice Area section**: reference-style numbered index (01–05) pushed left, with a CSS **spinning dotted globe** on the right (partially off-screen, faded). London / United States / Nigeria are marked with pale-blue dots that glow in sequence as it turns; city labels appear on hover.
  - The supplied globe reference (`Free motion graphics…mp4`) was a screen-recording of the Jitter website (browser chrome + a pink "OpenAI" card), not a usable clean globe, and a flat video can't make dots light up by geography — so the globe is built in CSS/SVG to match the intent. Swap in a transparent globe video/GIF later if you have one.
- **Interior headers** (Practice Areas, People, About) now use the same blue panel as Insights.
- **Type**: Cabinet Grotesk (headings) + Satoshi (body), via Fontshare.
- **Motion**: GSAP (cdnjs) drives the hero blobs and the Insights/header geo-blocks; all motion is disabled under `prefers-reduced-motion` (video hidden, globe + blocks static).

## Structure

```
index.html                  Homepage
about.html                  Founding conviction, standards, people preview
contact.html                Single conversion point (form + details)
practice-areas/             Hub + 5 practice pages (surrogacy has the most depth)
insights/                   "Chambers Notes" hub + 4 articles
people/                     Hub + 3 profile pages
css/styles.css              Full design system
js/main.js                  Nav, reveals, form handling
sitemap.xml, robots.txt     SEO
```

## PLACEHOLDERS — replace before launch

1. **Domain**: `https://www.ogechiadibenma.com/` is used in every `<link rel="canonical">`, all JSON-LD, `sitemap.xml` and `robots.txt`. Find-and-replace with the real domain.
2. **Contact details**: address (`4 Adeola Odeku Street...`), phone (`+234 (0) 800 000 0000`), email (`chambers@ogechiadibenma.com`) — in every footer, contact page, and JSON-LD blocks.
3. **People**: the four partners (Ogechi Adibenma — Principal Partner; Angela Ekene Anekwe, Elisha Agwah, Joel Ezekiel Nwushie — Partners) now use their real photos from `media/partners/`. **Their bios, the practice each is shown leading, and the article bylines reassigned to them are placeholders I wrote** — send me each partner's real practice area, credentials/admissions, and a short bio to finalise the profile pages and the "Led by" / byline attributions.
4. **Articles**: the four Chambers Notes pieces are drafted samples written to demonstrate structure and tone. Replace or review them with the firm's actual published pieces — especially legal claims, which must be verified by counsel before publication.
5. **Credentials strip** (homepage): memberships/publications are generic placeholders.

## Wiring the contact form

Every form posts to `https://formspree.io/f/FORM_ID`. Create a (free) form at formspree.io, then find-and-replace `FORM_ID` across all HTML files with your real ID. Until then, `js/main.js` intercepts submissions and shows the confirmation locally so the site demos cleanly.

## SEO notes

- Each page has a unique `<title>` + meta description keyed to its practice-area search terms (e.g. "surrogacy lawyer Nigeria", "shareholders agreement Nigeria").
- JSON-LD: `LegalService` (home/contact), `FAQPage` (surrogacy + commercial practice pages), `Article` (each insight), `Person` (each profile).
- Articles cross-link to practice pages and vice versa — keep doing this with every new article; it is what makes the authority strategy compound.
- After launch: submit `sitemap.xml` in Google Search Console, and set up a Google Business Profile for local search.

## Adding a new Chambers Note

1. Copy any file in `insights/`, replace the content, byline, dates, JSON-LD and canonical.
2. Add an entry under the right subject section in `insights/index.html` (and bump the count on its subject card).
3. Add a card link on the homepage insight preview if it should be featured.
4. Link it from the relevant practice page's "From Chambers Notes" aside.
5. Add a `<url>` entry to `sitemap.xml`.
