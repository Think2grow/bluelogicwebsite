# Access & Setup

## Access status
| Resource | Status | Notes |
|---|---|---|
| Semrush API | ✅ Have | key in gitignored `.env` (`SEMRUSH_API_KEY`). Costs units per call — batch. |
| Website files | ✅ Have | this repo; blog posts in `src/content/blog/`, pages in `src/pages/`. |
| Cloudflare API | ⚠️ Token expires 2026-06-26 | not needed for this project; can delete. |
| Google Search Console | 🙋 Manual (user) | for monitoring earned links + indexing new assets. |
| Gmail (info@bluelogicwater.com) | ✅ Connected | connector = DRAFT + read/label only, **no send tool**. |

## Decisions (made 2026-06-17)
1. **Email workflow:** Claude writes each fully-personalized email into the info@ **Drafts**
   folder (Gmail connector has create_draft only — NO send). User clicks Send per the drip
   schedule. Governed by the Deliverability Protocol below. (= "near-autonomous": Claude does
   all work, user does the final send click — a built-in human-in-the-loop + pacing control.)
2. **Niches:** ✅ **All four in parallel**, throttled to one shared daily send cap.
3. **Send-from:** ✅ **info@bluelogicwater.com** (Google Workspace — MX = aspmx.l.google.com).
   - Gmail OAuth MUST be authorized while logged into info@bluelogicwater.com.
   - Note: `info@` is a role address; a named sender (e.g. scott@) usually gets higher cold
     reply rates, but info@ is acceptable. Signature should still name a real person.

### Email-auth status — ALL GREEN (verified live 2026-06-17 via public resolvers)
- **SPF:** ✅ `v=spf1 include:_spf.google.com -all`
- **DKIM:** ✅ enabled in Workspace (`google._domainkey`, 2048-bit) — verified resolving.
- **DMARC:** ✅ `v=DMARC1; p=none; rua=mailto:info@bluelogicwater.com; fo=1` — verified resolving.
- Future hardening: after a few weeks at p=none, tighten DMARC to `p=quarantine`.

## Sender identity block  ✅ (provided 2026-06-17)
- Sender name: **Scott Watson**
- Title: **Owner**
- Send-from / reply email: **info@bluelogicwater.com**
- Business phone: **801-980-2583** (call or text)
- Preferred contact line in emails: "reply here, or call/text me at 801-980-2583"
- Booking / contact link: none provided (use phone + email)
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
