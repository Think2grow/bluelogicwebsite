# Campaign Log — backlink outreach

Dated log of the weekday sweep (replies, follow-ups, links won). Newest first.
Tracking also lives in: Gmail label **"Backlink Outreach"** + `prospects.md` statuses.

Email-able prospects (the only ones that flow through Gmail; rest are web forms):
- info@wasatchdrilling.com (well · asset #4)
- doylesappliance@icloud.com (appliance · asset #1)
- hvpinspector@gmail.com (inspector · asset #2)

Follow-up rule: if no reply ~4 business days after last touch and fewer than 3 total
touches, draft a brief follow-up reply for Scott to schedule-send. Stop after 3 touches.

---

## 2026-06-19 (manual outreach by Scott)
- **Henry Walker Homes** — submitted via contractor-inquiry form. Awaiting reply. All 3 top
  builders now contacted (Fieldstone, Nilson, Henry Walker). 6 prospects contacted total.
- Remaining queue: The Appliance Mechanic, Wasatch Water Heaters, Armstrong Drilling, A1 Inspector, Roots.

## 2026-06-19 (sweep)
- No replies yet from any of the 5 contacted prospects (sent/submitted 6/18). Nothing due.
- Follow-up window for the 2 emailed prospects (Doyle's, Hidden Valley) opens ~Wed 6/24.
- Cron alive; no new threads to label. Remaining outreach batch still queued (Henry Walker, etc.).

## 2026-06-18 (manual outreach by Scott)
- **Wasatch Drilling** — submitted via contact form (after the email bounce). Awaiting reply.
- **Nilson Homes** — TEXTED to both numbers (385) 402-7862 & (801) 392-8100; their form has no
  message field. Awaiting reply. Note for future builder outreach: Nilson = text channel.
- **Fieldstone Homes** — submitted via contact form. Awaiting reply.
- **Day-1 tally:** 5 prospects contacted (Doyle's + Hidden Valley by email; Wasatch + Fieldstone
  by form; Nilson by text). 1 hard bounce (Wasatch email) recovered via form.
- **Still queued (not yet contacted):** Henry Walker, The Appliance Mechanic, Wasatch Water
  Heaters, Armstrong Drilling, A1 Inspector, Roots Builders. All messages ready in outreach-queue.md.

## 2026-06-18 (sweep done)
- All 3 scheduled emails SENT on time (15:40 / 17:50 / 19:40 UTC = 9:40 / 11:50 / 1:40 MT).
- **Doyle's Appliance** — delivered, no reply yet.
- **Hidden Valley Inspection** — delivered, no reply yet.
- **Wasatch Drilling** — ⚠️ HARD BOUNCE: info@wasatchdrilling.com is invalid (550 address not
  found). Do not re-email it. Recovery message added to outreach-queue.md → submit via their
  contact form (https://wasatchdrilling.com/contact-us/) or call (435) 257-2369.
- All 3 threads labeled "Backlink Outreach". No follow-ups due yet (sent today; window ~6/24).
- Deliverability note: 1 hard bounce out of 3. Isolated (bad published address), not a pattern.
  Domain reputation fine; just avoid that address.
- **Scott's actions:** (a) submit Wasatch via form/phone, (b) builder forms (Nilson, Fieldstone).

## 2026-06-18 (sends fire) — first sweep due
- Scheduled sends fire today (MT): Wasatch Drilling 9:40am, Doyle's 11:50am, Hidden Valley 1:40pm.
- **Resume action:** run the sweep. Note these went out today, so the +4-business-day follow-up
  window opens ~Wed 2026-06-24 (only for non-repliers, <3 touches). Check for any early replies.
  Apply the "Backlink Outreach" label to the sent threads. Recreate the sweep cron (it was
  session-only and died overnight).
- Also nudge Scott on builder forms (Nilson, Fieldstone first) if not yet submitted.

## 2026-06-17 (setup + scheduled)
- 3 Gmail drafts created (Wasatch Drilling, Doyle's, Hidden Valley) with signature + clean
  HTML links. Scott SCHEDULED all 3 via Gmail Schedule Send for Thu 2026-06-18
  (9:40 / 11:50 / 1:40 MT). Visible in Gmail "Scheduled" folder.
- Form/phone messages ready in `outreach-queue.md` (builders prioritized).
- Gmail label "Backlink Outreach" (Label_1) created. Weekday-morning sweep cron set (session-only).
