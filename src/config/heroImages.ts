/**
 * Hero background images.
 *
 * Files live in `src/assets/heroes/` (NOT `public/`) so Astro compresses them,
 * converts to WebP and generates responsive sizes at build time. The originals
 * are 2–4 MB each; served raw from `public/` they would dominate page load.
 *
 * To swap an image: drop the new file in `src/assets/heroes/`, update the
 * import below, and the pages using it pick it up on the next build.
 */

import careHome from "../assets/heroes/care-home.jpg";
import childTravel from "../assets/heroes/child-travel.jpg";
import defaultHero from "../assets/heroes/default-hero.jpg";
import signature from "../assets/heroes/signature.jpg";
import signature2 from "../assets/heroes/signature-2.jpg";

/** Used by every page without a more specific image. Placeholder — to be replaced. */
export const heroDefault = defaultHero;

/**
 * Per-service heroes, keyed by service slug. Travel consent and the mobile
 * visits page get their subject-matter photos; the remaining document services
 * alternate between the two signature shots.
 */
const serviceHeroes: Record<string, ImageMetadata> = {
  "travel-consent": childTravel,
  "mobile-visits": careHome,
  affidavits: signature,
  "statutory-declarations": signature2,
  "oaths-affirmations": signature,
  witnessing: signature2,
};

/** Falls back to the default hero for any service without its own image. */
export const heroForService = (slug: string): ImageMetadata =>
  serviceHeroes[slug] ?? heroDefault;
