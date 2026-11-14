# Copy flow pass, 2026-11 (shared by every agent on this pass)

Repo: C:\Users\think\OneDrive\Desktop\blue-logic-water-website-main (Astro site for bluelogicwater.com).
Branch content/copy-flow-pass is checked out. Do NOT run git, pnpm/npm build or astro. Edit only the
files your task assigns you. If a fix belongs in a file you do not own, list it in your report.

Also read docs/update-brief-2026-11.md: its facts, retired claims and style rules still apply in full.

## Why this pass exists
Scott (owner) read the site and said the hero kicker "Your Family, Unfiltered." does not flow (and it is
odd for a company that sells filtration). His ask: find anything else that does not flow or does not match
the brand, and fix it.

## The brand voice
Blue Logic is a family-owned, locally owned Utah company. Owner Jared's video sets the tone: education
first, test the water, then recommend what the home actually needs, with an honest out-the-door price.
Copy should sound like a knowledgeable local tech talking to a homeowner: plain, specific, calm, confident.

## What to fix (rewrite in place, keep layout, components, URLs, SEO title/meta structure)
- Slogans or wordplay that misfire or contradict the product ("Unfiltered" style lines, puns, mixed metaphors).
- Generic marketing filler that says nothing: "engineering excellence", "perfect harmony", "elevate",
  "unparalleled", "cutting-edge", "state-of-the-art", "the purest water", "peace of mind" stacked on
  "worry-free", triple-noun crescendos ("your home, your family, and your life").
- Fear selling and overreach: implying ordinary tap water endangers babies, "threats" you cannot see,
  claims that a contaminant number means danger without context. Facts with a source are fine when stated
  calmly. Keep health claims to what the KB supports; no medical claims.
- Benefits attached to the wrong product: only Purification (whole-home RO) reduces arsenic, PFAS,
  nitrate, heavy metals, TDS at every tap. Softener = hardness. Filtration = softening plus chlorine/
  chloramine taste and odor, sediment, plus an under-sink RO at the kitchen tap. Do not say "our whole-home
  systems reduce PFAS at every faucet" generically.
- Service area: Salt Lake, Davis, Utah County, Tooele valley, Ogden/Weber metro. Flag (do not silently
  delete pages) any page or link that promotes a city outside that, e.g. Park City; on shared sections
  swap such links for an in-area city.
- Clunky flow: headings that repeat the previous heading's word ("Pure..." then "Pure..."), sentences
  that run on, paragraphs that restate the one above, abrupt topic jumps, CTA text that does not match
  where the link goes, section comments/labels that do not match the content.
- Inconsistencies: heading case (use Title Case for H1/H2, sentence text otherwise), product names
  (Blue Logic Softener, Blue Logic Filtration, Blue Logic Purification System; "the Purification System"
  on second mention), the phone number (801) 980-2583, "free water test" naming (it is done at the kitchen
  sink), "Wasatch Front" vs listed areas.
- Hyphens or en dashes used as dashes in sentences ("Arsenic - 135 times"); em dashes anywhere. Use
  colons, commas or parentheses.
- British spellings or words (US English always).
- Typos, doubled words, broken grammar.

Do not invent new facts, numbers, testimonials or prices. Do not add prices to pages that do not show them.
Do not rewrite copy that already reads well just to change it; the goal is fixes, not a new site.
Keep FAQ JSON-LD / schema text in sync with visible copy you change.

## Report back
A list grouped by file: old text (short), new text, one-line reason. Then a separate list of anything you
flagged but did not change (out-of-area pages, facts you could not verify, fixes in files you do not own).
