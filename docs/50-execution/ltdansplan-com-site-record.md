---
id: ltdansplan-com-site-record
title: LtDansPlan.com — Site Record and Operating Contract
owner: Donald Haight
status: active
sensitivity: public-repository
created: 2026-09-30
last_reviewed: 2026-09-30
source_ids:
  - SRC-010
tags:
  - ltdansplan
  - narrative-wrapper
  - parish-register
  - territory-auction
  - site-record
  - human-blockchain
---

# LtDansPlan.com — site record and operating contract

## Purpose

LtDansPlan.com is the **narrative-wrapper domain** of the Prepare America constellation: the
seventh of seven domains, and the one that carries the emotional argument for the Human
Blockchain. The other six domains carry the engineering (HumanBlockchain.IO, Kimosabe.AI), the
movement (PrepareAmerica.com), the beachhead market (InsuranceRestorationMarket.com,
MarketApplications.IO) and the founder brand (DonaldHaight.com).

The site exists to do three jobs: explain the plan in language that survives a kitchen table,
register the world as a map of real counties with holders and coefficients, and convert interest
through two public write paths — the Soft-Entry Funnel and the Territory Auction.

## Built capability

| Surface | Status | Notes |
| --- | --- | --- |
| Public narrative site | Live | Nine routes, prerendered per route with route metadata |
| Parish register | Live | 3,216 real county-equivalents (50 states, DC, Puerto Rico), keyed by FIPS |
| Interactive map | Live | Pre-projected SVG paths, position-keyed spot index, season status overlay |
| Parish records | Live | Holder, archetype, season, coefficient of truth, live claimant count |
| Soft-Entry Funnel | Live | `funnel.join` — email dedupe, archetype and optional parish, founders list |
| Territory Auction | Live | `funnel.reserve` — reservation plus lead, reviewed in the console |
| Dispatch publishing | Live | Owner writes lore, chapter and bulletin dispatches that publish to the public API |
| Game Master console | Live | Owner-gated: overview, leads (CSV export), parishes, claims, dispatches, season posture |
| Search visibility | Live | sitemap.xml, robots.txt, canonicals, console excluded from indexing |
| Payments and checkout | Not wired | Interest is captured as leads; the owner configures money outside this site |

## Architecture

React 19 + Tailwind 4 client, Express + tRPC v11 server, Drizzle over MySQL. Delivery is a
container: Express serves prerendered HTML for the public routes, hashed assets, the SPA, the
parish geometry and `/api/*`. The parish geometry is generated once from public county data and
committed, so the map and the database cannot disagree about which parishes exist.

Data tables: `leads`, `parishes`, `claims`, `dispatches`, `settings`. The parish seed is
idempotent and preserves operating state, so the register can be re-seeded against a live
database without erasing a season.

## Authorization

The console is gated server-side on every procedure. Access is granted by the platform `admin`
role or by matching the configured owner email (`OWNER_EMAIL`, then `settings.ownerEmail`). If no
owner is configured, the first signed-in visitor may claim the seat exactly once; configuring
`OWNER_EMAIL` closes that bootstrap path permanently. The owner email is never sent to the
browser.

## Rules the site states, and the operating model they encode

- **NEED → DONE.** An address enters at NEED; somebody has to prove DONE. The claim is the bridge.
- **Territory rights are temporary.** Seasons reset; the minimum was always the guarantee.
- **The coefficient of truth.** CSCE (Ceiling Score Coefficient Estimate) = Critical × Strategic ×
  Emotional, from audit, liquidity and persuasion. It governs how much an approved claim can
  capitalize. Criticality is capped deliberately: nothing is infinitely important.
- **The Vegas Protocol.** A losing claim resolves as a sale — the second buyer steps in — so the
  game cannot end in a forfeit.
- **Territory sovereignty.** The rule-set is a floor, not a ceiling: a county may add requirements.

## Commercial position

Address tier at $5 per address (one button, one honest answer), the Founders seat for the first
hundred, then ten station seats from $10 to $50 with the Architect and Banker at the top, and an
immersive-world subscription for the map itself. Prices are fixed by the canon, not configured in
the application.

## Verification

- `pnpm check` — TypeScript across client, server, shared and tests
- `pnpm test` — vitest: shared validation contract, content canon, geography integrity
- `node scripts/verify-api.mjs <origin>` — 35 checks over the real HTTP surface: public reads,
  lead creation and dedupe, reservation creation, rejection of malformed input and unknown
  parishes, and refusal of four admin procedures for unauthenticated callers
- `node scripts/verify-build.mjs <origin>` — 47 checks: prerendered HTML per route, route
  metadata, canonical URLs, 404s for unknown paths, console exclusion from indexing, cache policy
  for assets, geometry, HTML and the API, sitemap and robots
- `pnpm build` — client, SSR bundle, nine prerendered routes, `sitemap.xml`, `robots.txt`

Latest verified state: all four suites pass on the built container; the checkpoint that produced
this record is the canonical-main commit "Build LtDansPlan.com: narrative wrapper, parish
register and Game Master console".

## Operating manual

The full playbook — console access and owner gating, content cadence, season operations,
auction handling, data and recovery, known limits, and a troubleshooting table — lives in the
project repository at `docs/operations-playbook.md`.

## Open gates and limits

- Payments, Patreon tiers and immersive-world subscriber groups are configured outside this site.
- 3,216 registered parishes against the charter's 3,350: the balance is reserved for overlay
  territories (school districts and catchments), which are allocated apart from land.
- Chapter One is public; Chapters 2–5 are first-pass drafts from the project canon and 6–12 are
  outlined beats. Every draft is labelled as a draft in the interface and awaits the owner's
  review.
- Legal, securities, escrow, insurance, tax and valuation framing remains working scenarios under
  the owner's review gates. Nothing on the site is an offer, a solicitation or a guarantee.

## Change discipline

Material changes to this site land as a canonical-main checkpoint through the project's own
review, then update this record. Anything that changes a stated rule of the world — season
mechanics, the coefficient, the auction, pricing — is an owner decision and must be reflected in
both the site copy and this document in the same change.