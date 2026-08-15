/**
 * Single source of truth for business details.
 * Every page reads from here. "Peggy" is Margaret's shorthand and is what the
 * site copy calls her throughout — `owner` is deliberately the informal name.
 */

export const site = {
  name: "MKO Services",
  legalName: "MKO Services",
  owner: "Peggy",
  ownerFull: "Margaret Bidochka",
  tagline: "A mobile Commissioner for Oaths who comes to you — anywhere in Calgary and surrounding areas.",
  url: "https://mko-services.ca",

  phone: "(403) 813-7933",
  phoneHref: "+14038137933",

  city: "Calgary",
  region: "AB",
  regionName: "Alberta",
  country: "CA",

  // Serves clients at their location — no storefront address is published.
  serviceRadiusKm: 40,
  geo: { lat: 51.0447, lng: -114.0719 },

  /**
   * `time` is what visitors read; `schema` is the machine-readable equivalent
   * used for the opening hours in the LegalService structured data. Keep the
   * two in step — `schema: null` means "no fixed hours" and is left out of the
   * schema entirely, which is the correct signal for appointment-only days.
   */
  hours: [
    {
      days: "Monday – Friday",
      time: "4:00 p.m. – 10:00 p.m.",
      schema: {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
        closes: "22:00",
      },
    },
    {
      days: "Saturday",
      time: "9:00 a.m. – 6:00 p.m.",
      schema: {
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    { days: "Sunday", time: "By appointment", schema: null },
  ],

  // Social profiles are hidden until Margaret has set the accounts up. Nothing
  // on the site renders them yet — when they exist, uncomment and add them to
  // `sameAs` in the LegalService schema in Layout.astro, which is where they
  // actually earn their keep for search.
  // social: {
  //   facebook: "",
  //   linkedin: "",
  //   google: "",
  // },

} as const;

export const pricing = {
  base: 30,
  perExtraDoc: 10,
  // Weekends and statutory holidays. Weekday evenings to 10 p.m. are standard
  // hours, not a surcharge.
  weekendHoliday: 25,
  travelIncludedKm: 25,
  travelPerKm: 1,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Service Area", href: "/service-area/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
] as const;
