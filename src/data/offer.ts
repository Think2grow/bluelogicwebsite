// THE ONE PLACE the current offer, prices and financing terms live on the site.
// Every page that mentions an offer, a price or financing imports from here, so
// a change is made once. Source of truth for prices: BlueLogicWebApp
// lib/sale/catalog.ts. Financing terms: Pinnacle Finance program overview
// (Oct 2026) plus the year-end promo for applications through 2026-12-31.
//
// Financing copy follows Regulation Z (12 CFR 1026.24): "$0 down" and "no
// payments for 90 days" are trigger terms, so any page that shows them must also
// show OFFER_DISCLOSURE (down payment, repayment terms, APR) on the same page.

export const OFFER_ENDS_ISO = "2026-12-31";
export const OFFER_ENDS_LABEL = "December 31, 2026";
export const OFFER_DISCOUNT = 250;

export function offerActive(now: Date = new Date()): boolean {
  // Close of Dec 31 in Utah (MST, UTC-7) is 07:00 UTC on Jan 1.
  return now.getTime() < Date.parse("2027-01-01T07:00:00Z");
}

export const OFFER_HEADLINE = "$250 off, or $0 down and no payments for 90 days";
export const OFFER_SUBHEAD = `On any Blue Logic system purchased by ${OFFER_ENDS_LABEL}.`;

export const OFFER_DISCLOSURE =
  `Offers valid on a new Blue Logic Softener, Filtration or Purification system purchased by ${OFFER_ENDS_LABEL}. ` +
  "Choose one: $250 off the system price, or financing with $0 down and no payments for 90 days; offers cannot be combined. " +
  "Financing is provided by Pinnacle Finance to qualifying homeowners, subject to credit approval. " +
  "No payments for 90 days from the loan date; depending on the plan approved, interest may accrue from the loan date. " +
  "After the deferral period, repayment is 96 to 144 monthly payments at 10.99% to 17.99% APR, based on credit. " +
  "Checking eligibility is a soft credit inquiry that does not affect your credit score.";

export const PRICES = {
  softener: 2999,
  filtration: 5999,
  purification: 15999,
} as const;

// Out-the-door: installation and tax included.
export const PRICE_NOTE = "Prices include standard installation and tax.";

export const SYSTEMS = [
  {
    id: "softener",
    name: "Blue Logic Softener",
    price: PRICES.softener,
    summary: "Soft water that ends hard-water scale, spots and dry skin.",
  },
  {
    id: "filtration",
    name: "Blue Logic Filtration",
    price: PRICES.filtration,
    summary:
      "Whole-home softening and filtration in one tank, plus an under-sink reverse osmosis system for purified drinking water at the kitchen tap.",
  },
  {
    id: "purification",
    name: "Blue Logic Purification System",
    price: PRICES.purification,
    summary:
      "Whole-home reverse osmosis: Blue Logic Filtration in front, reverse osmosis, a 165-gallon food-grade storage tank, and a Grundfos SCALA2 constant-pressure pump, so every tap in the home runs purified water at normal pressure. Built to the home, so tank size and components can be customized.",
  },
] as const;

export const ADD_ONS = [
  { name: "Under-Sink RO", price: 999 },
  { name: "UV Purification Add-On", price: 799 },
  { name: "Grundfos SCALA2 Pressure Pump", price: 1699 },
] as const;

export const WARRANTY =
  "5-year warranty against defects in materials and workmanship, and a 10-year warranty on the media inside the treatment tank. Consumables such as filters, RO membranes and salt are not covered. Installation workmanship is warranted for 12 months.";

// Price range (Scott, 2026-11-13): solutions start around $1,000 and go up from there;
// every system is customized to the home, so there is no published ceiling.
export const PRICE_RANGE =
  "Blue Logic solutions start at about $1,000 and go up from there, and every system is customized to what your water and home need.";

export function usd(n: number): string {
  return "$" + n.toLocaleString("en-US");
}
