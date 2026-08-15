/**
 * Travel zones for the pricing estimator at /pricing/.
 *
 * Distances are approximate road distances from downtown Calgary — the same
 * anchor the published fee schedule already uses ("travel within 25 km of
 * downtown is included"). Downtown is deliberately the reference point rather
 * than Peggy's own location:
 *
 *  - An estimate has to be answerable at 11 p.m. by someone she's never met.
 *    Where she happens to be at that moment is unknowable.
 *  - It keeps her home address off the site.
 *  - A customer can check their own distance from downtown; they can't check
 *    hers, which makes a location-derived fee feel arbitrary.
 *
 * The fee is a zone surcharge, not fuel reimbursement. She confirms the real
 * number before setting out and can waive it when she's already nearby.
 */

export interface TravelZone {
  id: string;
  label: string;
  /** Approximate road km from downtown Calgary. */
  km: number;
  /** Communities in this zone, shown as help text. */
  note: string;
}

export const travelZones: TravelZone[] = [
  {
    id: "downtown",
    label: "Downtown & Beltline",
    km: 3,
    note: "Core, East Village, Mission, Bankview",
  },
  {
    id: "nw",
    label: "Northwest Calgary",
    km: 15,
    note: "Tuscany, Royal Oak, Brentwood, Varsity, Bowness",
  },
  {
    id: "ne",
    label: "Northeast Calgary",
    km: 16,
    note: "Saddle Ridge, Skyview, Falconridge, Marlborough",
  },
  {
    id: "sw",
    label: "Southwest Calgary",
    km: 14,
    note: "Signal Hill, Aspen, Springbank Hill, Woodbine",
  },
  {
    id: "se",
    label: "Southeast Calgary",
    km: 21,
    note: "Mahogany, Auburn Bay, McKenzie Towne, Seton",
  },
  { id: "chestermere", label: "Chestermere", km: 24, note: "East of the city" },
  { id: "airdrie", label: "Airdrie", km: 32, note: "North on the QEII" },
  { id: "cochrane", label: "Cochrane", km: 38, note: "West on Highway 1A" },
  { id: "okotoks", label: "Okotoks", km: 45, note: "South on Highway 2A" },
  { id: "strathmore", label: "Strathmore", km: 55, note: "East on Highway 1" },
];
