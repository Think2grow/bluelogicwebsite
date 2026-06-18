# Access & Setup

## Access status
| Resource | Status | Notes |
|---|---|---|
| Semrush API | ✅ Have | key in gitignored `.env` (`SEMRUSH_API_KEY`). Costs units per call — batch. |
| Website files | ✅ Have | this repo; blog posts in `src/content/blog/`, pages in `src/pages/`. |
| Cloudflare API | ⚠️ Token expires 2026-06-26 | not needed for this project; can delete. |
| Google Search Console | 🙋 Manual (user) | for monitoring earned links + indexing new assets. |
| Gmail / email sending | ⏳ PENDING DECISION | see below. |

## Decisions (made 2026-06-17)
1. **Email workflow:** ✅ **Fully autonomous send** by Claude, governed by the Deliverability
   Protocol below (throttled, unique copy, verified contacts, circuit-breaker).
2. **Niches:** ✅ **All four in parallel**, throttled to one shared daily send cap.
3. **Send-from:** ✅ **A @bluelogicwater.com address** (brand-matched, best deliverability).
   - ⏳ Need exact address from user. Gmail OAuth MUST be authorized with THAT account.
   - ⏳ Verify SPF/DKIM/DMARC before first send.

## Sender identity block  (FILL THIS IN — templates depend on it)
- Sender name: _______________  (git author = "Scott Watson")
- Title: _______________
- Send-from / reply email: _______________  (a @bluelogicwater.com address)
- Business phone: _______________
- Booking / contact link: _______________
- Business name: Blue Logic Water
- Website: https://www.bluelogicwater.com

## Deliverability Protocol (anti-spam) — follow on EVERY send
1. **Throttle:** ~5/day warm-up week, then ~8–10/day max. Tue–Thu, 9am–3pm MT. Never a burst.
2. **Verified real contacts only** — pull the actual address from the prospect's own site;
   skip (don't guess) if none found. Bounces are the #1 reputation killer.
3. **Unique copy every email** — personalized first line referencing their site; no duplicate bodies.
4. **Plain text, ONE link** (full bluelogicwater.com URL, no shorteners), no attachments/images.
5. **Clear opt-out line, honored.**
6. **Monitor + reply** to responses (replies boost sender reputation).
7. **Circuit-breaker:** if bounces/complaints climb, auto-pause and report instead of pushing.
8. Send only after the linked asset page is LIVE.

## Guardrails
- Secrets stay in gitignored `.env`; never commit. Verify `git check-ignore .env` before any commit.
- This `seo/` folder does NOT deploy (only `public/` + built pages do) — safe for working docs.
