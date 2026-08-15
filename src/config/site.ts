/**
 * Single source of truth for business details.
 * Swap these values for Peggy's real info — every page reads from here.
 */

export const site = {
  name: "Peggy Mobile Commissioner",
  legalName: "Peggy Mobile Commissioner for Oaths",
  owner: "Peggy",
  ownerFull: "Peggy Mitchell",
  tagline: "A mobile Commissioner for Oaths who comes to you — anywhere in Calgary.",
  // TODO: replace with the real production domain before launch
  url: "https://peggycommissioner.ca",

  // TODO: replace with Peggy's real contact details
  phone: "(403) 813-7933",
  phoneHref: "+14038137933",

  city: "Calgary",
  region: "AB",
  regionName: "Alberta",
  country: "CA",

  // Serves clients at their location — no storefront address is published.
  serviceRadiusKm: 40,
  geo: { lat: 51.0447, lng: -114.0719 },

  hours: [
    { days: "Monday – Friday", time: "8:00 a.m. – 8:00 p.m." },
    { days: "Saturday", time: "9:00 a.m. – 6:00 p.m." },
    { days: "Sunday", time: "By appointment" },
  ],

  social: {
    // TODO: add real profiles, or delete the entries you don't use
    facebook: "",
    linkedin: "",
    google: "",
  },

} as const;

export const pricing = {
  base: 45,
  perExtraDoc: 10,
  afterHours: 25,
  travelIncludedKm: 25,
  travelPerKm: 1,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Service Area", href: "/service-area/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
] as const;
