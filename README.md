# Peggy — Mobile Commissioner for Oaths (Calgary, AB)

Static marketing site built with [Astro](https://astro.build) and Tailwind CSS v4.
No JavaScript framework, no client-side runtime beyond two tiny inline scripts
(the mobile menu toggle and the contact-form fallback).

## Commands

| Command           | Does                                        |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Static build to `./dist/`                   |
| `npm run preview` | Serve the built output locally              |
| `npx astro check` | Type-check `.astro` files                   |

## Before launch — replace the placeholders

Everything business-specific lives in **`src/config/site.ts`**. Nothing is
hard-coded into the pages, so these are the only edits needed:

- [x] `phone` and `phoneHref` — set to `(403) 813-7933`
- [x] `url` — set to `https://mko-services.ca` (canonical URLs and the sitemap)
- [x] `name` / `legalName` — set to `MKO Services`
- [x] `ownerFull` — set to `Margaret Bidochka` (used in the structured data).
      `owner` stays `"Peggy"` — her shorthand, and what the site copy uses.
- [ ] `hours` — **still placeholder.** Confirm the real availability.
- [ ] `pricing` — **still placeholder.** Confirm the fee schedule on `/services/`.
- [ ] `social` — **still placeholder.** Add real profile URLs or leave blank.

> The scaffold shipped with invented business details. Everything above marked
> `[ ]` is fiction until someone checks it against what Margaret actually does.

Page copy lives in two files:

- **`src/config/services.ts`** — the six services, one object each. This drives the
  service pages, the nav dropdown, the footer, the homepage cards and the contact
  form dropdown.
- **`src/config/content.ts`** — general FAQ, service areas, scope boundaries, and
  the how-it-works steps.

### Adding or editing a service

Add an object to the `services` array in `src/config/services.ts` and a page
appears at `/services/<slug>/` automatically, along with its nav, footer and
homepage entries. The required fields are documented on the `Service` interface at
the top of that file. `icon` must match a key in `src/components/Icon.astro`.

Each service page carries its own `Service`, `BreadcrumbList` and `FAQPage`
structured data, so the `metaDescription`, `intro` and `faqs` fields are worth
writing properly — near-duplicate pages rank worse than a single combined one.

### Hero images

Hero photos live in **`src/assets/heroes/`**, not `public/`. That matters: Astro
only optimizes images under `src/`. Files in `public/` are served byte-for-byte,
and these originals are 2–4 MB each. Built through `src/`, all five images
across every responsive size total under 1 MB.

The mapping lives in `src/config/heroImages.ts`:

| Page | Image |
| --- | --- |
| Home | *none — deliberate* |
| Contact, FAQ, Service area, Services hub | `default-hero.jpg` (placeholder) |
| `/services/travel-consent/` | `child-travel.jpg` |
| `/services/mobile-visits/` | `care-home.jpg` |
| Affidavits, Oaths & Affirmations | `signature.jpg` |
| Statutory Declarations, Witnessing | `signature-2.jpg` |

To swap one: drop the file in `src/assets/heroes/`, update the import at the top
of `src/config/heroImages.ts`, rebuild. To give a service its own photo, add a
line to the `serviceHeroes` map keyed by slug — anything not listed falls back
to the default.

Heroes render as an `<Image>` behind a parchment scrim rather than a CSS
`background-image`, so they get WebP conversion, a `srcset` and `fetchpriority`
that a CSS background can't. The scrim gradient is in `PageHero.astro`; lighten
`to-parchment/35` to show more of the photo, darken it if text contrast suffers.

### Contact form

The form on `/contact/` uses [Netlify Forms](https://docs.netlify.com/manage/forms/setup/).
It posts `name`/`phone`/`email`/`doctype`/`area`/`when`/`message` plus a
`company` honeypot to the site root, then swaps itself for an inline
confirmation. No API keys and no config — the form is named `booking`, and
Netlify picks it up by parsing the prerendered HTML at deploy time.

Two consequences of that build-time detection:

- The form only appears in the Netlify dashboard **after a successful deploy**.
  It won't exist before the first one.
- Submissions only work on Netlify. Locally, and on any other host, the POST
  will 404 and the visitor sees the "please phone instead" error state.

After the first deploy, set up **Forms → booking → Form notifications → Email
notification** in the Netlify dashboard so Peggy is emailed each request.
The free tier covers 100 submissions/month, and spam counts toward it.

## Deploying

The build output is fully static — any host works. Zero-config options:

```sh
npx vercel deploy      # or
npx netlify deploy     # or push to Cloudflare Pages
```

Point the host at `npm run build` with a publish directory of `dist`.

After the domain is live, submit `https://<domain>/sitemap-index.xml` to Google
Search Console and create a Google Business Profile — for a local service
business, that profile drives more calls than the site itself will.

## What's included

- 11 pages: home, services & fees, six individual service pages, service area,
  FAQ, contact — plus a 404
- `LegalService`, `Service`, `FAQPage`, `BreadcrumbList` and `ItemList` JSON-LD
  structured data for local SEO
- Services dropdown in the header (CSS-only, works without JS) and a nested
  service list in the mobile menu
- Auto-generated `sitemap-index.xml` and `robots.txt`
- Sticky tap-to-call bar on phones (the main conversion path for this business)
- Accessible markup: skip link, focus-visible rings, labelled form fields,
  `prefers-reduced-motion` support

## A note on the content

The copy is deliberately explicit about what an Alberta Commissioner for Oaths
**cannot** do — certify true copies, commission outside Alberta, or give legal
advice. That boundary is real (Commissioners are appointed under the *Notaries
and Commissioners Act*, and certifying copies is a Notary Public function), and
stating it plainly both protects Peggy and screens out wasted appointments.

Have Peggy review all copy before launch, particularly the fee schedule and the
FAQ answers about scope.
