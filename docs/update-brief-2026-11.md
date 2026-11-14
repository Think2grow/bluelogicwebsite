# Site update brief, 2026-11 (shared by every agent on this pass)

Repo: C:\Users\think\OneDrive\Desktop\blue-logic-water-website-main (Astro site for bluelogicwater.com).
Branch: content/current-offerings-2026-11 (already checked out). Do NOT run git, do NOT run `pnpm build`
or `astro build` (several agents share this working tree; the lead builds at the end). Edit only the files
your task assigns you. If a fix is needed in a file you do not own, list it in your report instead.

## Sources of truth (read these, never guess)
- src/data/offer.ts : the current offer, disclosure, prices, systems, add-ons, warranty. Import from it
  instead of retyping offer or price text.
- C:\Users\think\OneDrive\Desktop\BlueLogicWebApp\data\blue-logic-knowledge-base.md : product facts,
  warranty, how each system is built. READ ONLY.
- C:\Users\think\OneDrive\Desktop\BlueLogicWebApp\lib\sale\catalog.ts : prices and what each system includes. READ ONLY.

A claim that cannot be backed by those sources gets removed or rewritten to something that can be.
List every removed or changed claim in your report (file, old claim, new text or "removed", why).

## What we sell now
- Blue Logic Softener $2,999. Blue Logic Filtration $5,999 (whole-home softening and filtration in ONE tank,
  plus an under-sink RO at the kitchen tap). Blue Logic Purification System $15,999 (Filtration in front,
  then RO, then 165-gallon food-grade storage, then Grundfos SCALA2 constant pressure).
  Add-ons: under-sink RO $999, UV $799, SCALA2 pump $1,699. Prices are out the door (install + tax included).
  General range $2,999 to $19,999. Do not add prices to pages that do not already show them.
- Offer: $250 off, OR $0 down and no payments for 90 days (Pinnacle Finance, approved credit), on systems
  purchased by December 31, 2026. Use OFFER_HEADLINE / OFFER_SUBHEAD / OFFER_DISCLOSURE from offer.ts.
  LEGAL: any page that says "$0 down" or "no payments" must also render OFFER_DISCLOSURE on that page.
- Warranty: 5 years on defects in materials and workmanship; consumables (filters, RO membranes, salt) excluded;
  12 months installation workmanship.

## Claims that are WRONG and must go everywhere they appear
- "7-layer" / "7 stages" / any list naming filtration media (zinc carbon, copper carbon, EvoResin, Katalox,
  aluminosilicate, garnet, KDF, zeolite, resin brand names). The old blend is gone. SELL THE OUTCOME:
  soft water, chlorine/chloramine taste and odor gone at every tap, sediment and rust filtered, appliances
  and fixtures protected, softer skin and hair. Never name the media.
- Filter cartridges / "filters" as the Filtration product. Filtration is one self-cleaning tank, not cartridges.
  (The Purification system does include a sediment pre-filter; that is fine on Purification pages only.)
- "In-house financing", "half down", "no third-party lender", "no credit check". Financing is now Pinnacle
  Finance, approved credit, soft pull.
- "Free under-sink RO ($1,000 value)". Filtration INCLUDES an under-sink RO; say that, no "$1,000 value".
- "Free 250-gallon tank upgrade" or 250-gallon options. Storage is 165-gallon tanks, added as modules
  (one, two or more) when a home needs more.
- "Price-match guarantee" (not in the sources; remove).
- Old price ranges like "$5,995 to $19,999".
- RO: never 1:1 or 50% recovery; Blue Logic RO runs about 3 gallons purified per 1 to drain (up to 75%
  recovery), made safe by the Filtration in front. Never headline "2,400 GPD" as real output.
- NSF certification claims: only what the knowledge base supports (e.g. "NSF/ANSI and FDA compliant
  materials" for storage). No "NSF-certified system".
- Salt-savings percentages, lifespans, "most homeowners report..." statistics: keep only if the KB states them.
- Service area: Salt Lake, Davis, Utah County, Tooele valley, Ogden/Weber metro. Never promise a local tech
  or in-home visit for places outside that; never tell anyone their town is outside the area.

## Style rules (Scott's, mandatory)
- US English (color, center, inquiry, gray, license...).
- No em dashes (the long dash) in any text you write or touch; use commas, colons or parentheses.
  Replace em dashes in copy on pages you own.
- Professional, client-facing tone. No internal analogies.
- Keep existing layout, components, SEO titles/meta structure and URLs. Update meta descriptions and
  JSON-LD/FAQ schema text when the visible copy they mirror changes.
