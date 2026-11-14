# Facts List - Blue Logic Water

Checked facts and phrases that can be used across the site. Site copy that conflicts with these facts should be changed.

Updated 2026-11. Sources, in order of authority:

- BlueLogicWebApp `data/blue-logic-knowledge-base.md` (product facts, warranty, how each system is built)
- BlueLogicWebApp `lib/sale/catalog.ts` (prices and what each system includes)
- `src/data/offer.ts` in this repo (the current offer, disclosure, prices, add-ons, warranty text). Pages import from it; never retype offer or price text.

The 2025 print brochures (WH-Pure v3.1, Filtration Brochure v1) are out of date: they describe the retired "7 media" blend. Do not quote them.

---

## Company Information

| Field            | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| **Legal Name**   | Blue Logic LLP                                                                          |
| **Brand Name**   | Blue Logic Water (also "Blue Logic")                                                    |
| **Type**         | Family-owned local Utah water treatment company, warehouse in Murray, Utah              |
| **Owners**       | Jared and Scott                                                                         |
| **Phone**        | (801) 980-2583                                                                          |
| **Website**      | bluelogicwater.com                                                                      |
| **Service Area** | Salt Lake, Davis and Utah Counties, the Tooele valley, and the Ogden/Weber metro        |
| **Tagline**      | "The Logic Behind Purity"                                                               |

Service area rules: never promise a local tech or an in-home visit outside the service area, and never tell anyone their town is outside the area. Out-of-area inquiries are routed for manual review.

---

## What We Sell

Prices are out the door: standard installation and tax included. Source: `PRICES` and `ADD_ONS` in `src/data/offer.ts`. General range: $2,999 to $19,999 depending on the home. Do not add prices to pages that do not already show them.

| System                             | Price   | What it is                                                                                                                                                                  |
| ---------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Blue Logic Softener**            | $2,999  | Soft water that ends hard-water scale, spots and dry skin. Treats calcium and magnesium; also handles dissolved iron. Softening only, not filtration.                       |
| **Blue Logic Filtration**          | $5,999  | Whole-home softening and filtration in ONE self-cleaning tank, plus an under-sink reverse osmosis system with its own tap at the kitchen sink. The most common choice.     |
| **Blue Logic Purification System** | $15,999 | Whole-home reverse osmosis: Blue Logic Filtration in front, a sediment pre-filter, RO, a 165-gallon food-grade storage tank, and a Grundfos SCALA2 constant-pressure pump. |

| Add-on                           | Price  |
| -------------------------------- | ------ |
| Under-Sink RO                    | $999   |
| UV Purification Add-On           | $799   |
| Grundfos SCALA2 Pressure Pump    | $1,699 |

Systems are modular: a client can buy Filtration and add RO later, or start with a Softener and upgrade.

---

## Blue Logic Filtration: Sell the Outcome

Never name the media inside the tank, never count layers or stages, and never describe Filtration as filter cartridges. It is one self-cleaning tank that regenerates automatically based on water use (meter-initiated), with a brine tank alongside.

What the homeowner gets:

- Soft water: no new scale on fixtures, glass or inside appliances
- Chlorine and chloramine taste and odor gone at every tap, including showers and baths
- Sediment and rust filtered out: visibly clear water, easier on plumbing and clothing
- Appliances and fixtures protected
- Softer skin and hair
- Purified drinking and cooking water at the kitchen tap (the included under-sink RO)

Owner upkeep: keep salt in the brine tank (Costco, Walmart and similar stores). Blue Logic does annual maintenance, including the under-sink RO filters and a system check.

### Under-Sink RO (included with Filtration, $999 on its own)

- Dedicated tap at the kitchen sink; tankless; internal pump; plugs into a standard outlet
- Reduces TDS, heavy metals including lead and arsenic, fluoride, nitrates, PFAS, pesticides, pharmaceuticals, microplastics, bacteria, viruses, bad taste and odor (at that one tap)
- Filters typically last about a year (replaced at annual maintenance)

---

## Blue Logic Purification System (Whole-Home RO)

1. **Blue Logic Filtration** (pre-treatment): softens and filters, protects the membrane
2. **Sediment pre-filter**: full-flow, 5 micron, catches fine particles before the membrane (a pre-filter is fine to mention on Purification pages only)
3. **Reverse osmosis**: removes contaminants larger than about 0.0001 microns; reduces TDS, hardness, heavy metals including lead and arsenic, fluoride, nitrates, PFAS, pharmaceuticals, pesticides, microplastics, bacteria and viruses
4. **165-gallon storage tank**: food-grade, BPA-free and phthalate-free polyethylene, NSF/ANSI and FDA compliant materials. Homes that need more add tanks as modules (one, two or more 165-gallon tanks)
5. **Grundfos SCALA2 constant-pressure pump**: variable speed, automatic pressure regulation, low-flow and dry-run protection, soft start; purified water at normal city pressure

RO efficiency: about 3 gallons purified for every 1 sent to drain (up to 75% recovery), made safe by the Filtration in front.

Never say:

- 1:1 or 50% recovery
- "2,400 GPD" as real output (it is a nameplate rating, not what a home sees)
- "Removes up to 99% of contaminants", "50% smaller", "10x quieter", "half the cost" (not in the sources)
- "NSF-certified system" or "NSF-certified components" (only the storage tank's NSF/ANSI and FDA compliant materials are supported)

---

## Current Offer

Use `OFFER_HEADLINE`, `OFFER_SUBHEAD` and `OFFER_DISCLOSURE` from `src/data/offer.ts`.

- $250 off, OR $0 down and no payments for 90 days, on systems purchased by December 31, 2026. Cannot be combined.
- Financing: Pinnacle Finance, qualifying homeowners, subject to credit approval. Checking eligibility is a soft credit inquiry.
- LEGAL: any page that says "$0 down" or "no payments" must also show `OFFER_DISCLOSURE` on that same page (Regulation Z trigger terms).

Retired, never use: in-house financing, half down, no third-party lender, no credit check, price-match guarantee, "free under-sink RO ($1,000 value)", free 250-gallon tank upgrade, any 250-gallon option, "$5,995 to $19,999".

---

## Warranty

Source: `WARRANTY` in `src/data/offer.ts`.

- 5 years against defects in materials and workmanship
- 12 months on installation workmanship
- Consumables are not covered: filters, cartridges, RO membranes, salt, antiscalant
- Original purchaser and installation location; not transferable unless Blue Logic agrees in writing
- A visit outside scheduled maintenance, including a warranty check, carries a $129 service call fee

---

## Softener vs. Filtration vs. Purification

- A softener is for hardness and scale. Softening is not filtration; it does not remove chlorine, taste and odor, or other contaminants.
- Many companies sell resin plus carbon as "filtration." Blue Logic's position: that is softening with a taste polish, not true filtration.
- Filtration: soft, filtered water at every tap, purified RO water at the kitchen tap.
- Purification: purified water at every tap in the home. The best Blue Logic offering, though not the right fit for every home.

RO and minerals (objection handling): RO water does not cause nutritional deficiencies. Most essential minerals come from food, not water, and low-mineral water does not leach nutrients from the body.

---

## Sales Process

| Step | Name                        | Description                                                                                                                                         |
| ---- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | **Free Consultation**       | Meet with a Blue Logic water expert, walk through the local water report, answer questions.                                                         |
| 2    | **Video Walkthrough**       | Confirm the system meets the home's needs, fits the space, and gives the installer everything needed for a smooth install.                           |
| 3    | **Coordinate Installation** | Blue Logic coordinates the install from start to finish. Systems usually go in the utility room; a brine tank can go in the garage on a shared wall. |
| 4    | **Quality Check**           | Check pressure and flow, test the treated water before leaving.                                                                                     |
| 5    | **Ongoing Support**         | Annual maintenance, filter reminders, and troubleshooting by phone first, then a technician if needed.                                              |

Any non-standard work (long runs, significant drywall, custom scenarios) is discussed during the consult and before work is done.

---

## Approved Marketing Phrases

- "The Logic Behind Purity"
- "Pure Logic for Pure Water"
- "Protect your health, home, and peace of mind"
- "Clean water everywhere it matters"
- "Rivals bottled quality straight from every tap" (Filtration)
- "Pure water at every tap" (Purification)

Retired: "7 Medias. One System. Pure Logic." and any phrase that counts media, layers or stages in the Filtration tank.

---

## Key Scientific Facts

1. Reverse osmosis removes contaminants larger than about 0.0001 microns, including what is dissolved in the water, not just what is suspended in it
2. Filtration traps or binds contaminants; it cannot separate water from everything dissolved in it
3. Water softeners exchange hardness minerals (calcium, magnesium); they do not filter contaminants
4. Hot showers expose people to chlorine and disinfection byproducts through breathing and skin contact, which is why Blue Logic treats the whole home, not just drinking water
