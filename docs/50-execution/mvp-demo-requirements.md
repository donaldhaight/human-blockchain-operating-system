---
id: mvp-demo-requirements
title: "MVP Demo Requirements"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 51307
source_line_end: 52489
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# MVP_DEMO_REQUIREMENTS.md  
## Genesis ClaimStore Season 1 Repository  
### One Prompt Event Demo Requirements, Live/Simulated/Mocked Scope, Acceptance Criteria, and Demo Data Plan

---

## 1. Purpose

This document defines the minimum viable demo requirements for the Genesis ClaimStore Season 1 build.

The demo must show the smallest truthful version of the ClaimStore architecture.

The purpose is not to fake a finished national platform.

The purpose is to demonstrate one coherent operating cell:

```text id="1io5gm"
Lead
→ Project
→ Offer
→ Property Owner Acceptance
→ Claim Request
→ ClaimStore Claim
→ Claim Caller / External Determination
→ ClaimBuddy Verification
→ Human Blockchain Event
→ Bookkeeping Event
→ TER / Proficiency
→ ClaimsBank Readiness
→ Quantum Dashboard
→ Sponsor Position
```

The demo should prove coherence.

It should not overpromise completion.

---

## 2. Demo Principle

The demo must be honest.

Every demo element should be labeled as one of:

```text id="2sfv1d"
LIVE
SIMULATED
MOCKED
NARRATED
DEFERRED
```

Definitions:

```text id="g1tkjf"
LIVE = Working product behavior with real data objects and recorded events.
SIMULATED = Working simplified version using controlled demo data or simplified logic.
MOCKED = Static or prototype representation that shows intended design but does not perform backend logic.
NARRATED = Explained verbally or in deck/script without screen interaction.
DEFERRED = Explicitly not part of the MVP demo.
```

The demo may use simulation or mockups, but it must not pretend that mocked features are live.

---

## 3. Demo Audience

Primary audiences:

```text id="clld39"
Founder / internal team
Developers
Strategic advisors
Legal reviewers
Potential founding sponsors
Potential operating partners
AI agents / technical contributors
```

Secondary audiences, later:

```text id="sfe77j"
Contractors
Insurance-side observers
ClaimBuddy candidates
Financial partners
Public-facing stakeholders
```

The first demo should be private or controlled until legal-safe language is reviewed.

---

## 4. Core Demo Story

The demo story:

```text id="61fs9c"
A property is damaged by hail or wind.
A contractor creates a lead.
The lead becomes a project.
The contractor creates an offer with jobs and other charges.
The property owner accepts from their own account.
A claim request is created.
The first claim request creates a ClaimStore Claim.
An insurance-side decision is recorded through Claim Caller or external determination.
A ClaimBuddy task verifies real-world completion or documentation.
Evidence creates a Human Blockchain event.
A payment or financial event creates bookkeeping.
First offer and final closeout create proficiency data.
TER/SLA updates.
ClaimsBank readiness conditions are checked.
Quantum Dashboard shows the operating cell and market scenario.
Sponsor Position shows how founding participation fits without ownership.
```

---

## 5. Non-Negotiable Demo Rules

The demo must preserve:

```text id="8zkwim"
No user clicks OK for another user.
Entity Role is not Designation.
Claim Caller is not merely Reviewer.
First shared offer becomes First Offer Baseline.
First claim request creates ClaimStore Claim.
Upload is not verification.
No evidence means no verified Human Blockchain event.
Bookkeeping events link to trigger events.
External determinations are marked external.
ClaimsBank is release-condition logic only.
TER is internal performance logic only.
Sponsor positions are sponsorship, not ownership.
```

If the demo violates one of these rules, the demo fails.

---

## 6. Demo User Accounts

The demo should include these users:

```text id="sllyit"
Platform Admin
Platform Support User
Property Owner
Authorized Property Representative, optional
Contractor Admin
Sales Rep / ISR
Project Lead
Bookkeeper
ClaimBuddy
Insurance User
Claim Manager
Independent Adjuster
Claim Caller
Sponsor Viewer
```

Minimum live demo users:

```text id="oqpj23"
Platform Admin
Property Owner
Contractor Admin / Sales Rep
ClaimBuddy
Claim Caller or Support User recording External Determination
Sponsor Viewer
```

---

## 7. Demo Entities

The demo should include these entities:

```text id="2sookg"
Platform Entity
Property Owner / Household Entity
Contractor Entity
Contractor Branch
Insurance Company Entity
ClaimBuddy / Field Verifier Entity
Sponsor Entity
```

Optional:

```text id="sr3lf6"
Mortgage Company Entity
Adjusting Vendor Entity
Field Service Provider Entity
```

---

## 8. Demo Market

The demo should use one clearly defined market.

Fields:

```text id="057y33"
State
Market Name
County / Territory
Peril Type: Hail / Wind
Project Type: Roofing
Season: Season 1
```

Recommended demo market placeholder:

```text id="jk4j4t"
Demo Market A
```

Do not use a real market publicly until strategic/legal choice is made.

---

## 9. Demo Data Set

Minimum demo dataset:

```text id="o01pxn"
One property owner
One property
One insurance company
One contractor
One contractor branch
One lead
One project
One offer
Two jobs
One equipment order
Three other charges
One preliminary claim request
One ClaimStore Claim
One claim decision or external determination
One ClaimBuddy task
Five evidence records
One Human Blockchain event
One payment record
One bookkeeping event
One TER/SLA sample
One proficiency calculation
One ClaimsBank readiness condition
One Quantum Dashboard scenario
One Sponsor Position
```

---

## 10. Demo Evidence Package

The demo should include sample evidence:

```text id="x4d0p6"
Roof damage photo
Overview property photo
Measurement report placeholder
Estimate PDF placeholder
Offer PDF or offer snapshot
External carrier response placeholder
Completion photo
Completion checklist
Signature record
Payment evidence placeholder
```

If real photos are used, remove personal/private data unless permission exists.

---

# 11. Live / Simulated / Mocked Scope

## 11.1 Identity and Login

Recommended demo status:

```text id="83mesu"
SIMULATED or LIVE
```

Minimum requirement:

```text id="r72r1y"
Demo must show different users or clearly simulate user-switching.
```

Acceptance criteria:

```text id="c94ivp"
Property Owner action is distinguishable from Contractor action.
Claim Caller action is distinguishable from Contractor action.
ClaimBuddy action is distinguishable from Support action.
```

Must not:

```text id="zijsqj"
Show one admin account doing every user’s action without explaining simulation.
```

---

## 11.2 Entity / Role / Designation

Recommended demo status:

```text id="dq9ehy"
SIMULATED
```

Minimum requirement:

```text id="57ma8j"
Show that users have roles and specific designations.
```

Must demonstrate:

```text id="4zjsjq"
Contractor Admin role
Property Owner role
ClaimBuddy role
Claim Caller designation
Offer Owner designation
Project Lead designation
Completion Verifier designation
```

Acceptance criteria:

```text id="5vo1c5"
Demo visibly distinguishes Entity Role from Designation.
```

---

## 11.3 Contractor Lead Creation

Recommended demo status:

```text id="r6n3qg"
LIVE
```

Minimum requirement:

```text id="l6xr3c"
Contractor creates lead with property address, contact, source, and market.
```

Acceptance criteria:

```text id="7e1z54"
Lead Created Event exists.
Lead is assigned or assignable.
Lead can convert to Project.
```

---

## 11.4 Lead to Project Conversion

Recommended demo status:

```text id="pdtgwt"
LIVE
```

Minimum requirement:

```text id="fm21wx"
Lead converts into Project.
Project links to Property and Contractor.
```

Acceptance criteria:

```text id="3cv5hz"
Project Created Event exists.
Lead status updates to Converted.
Project Lead designation can be assigned or displayed.
```

---

## 11.5 Offer Builder

Recommended demo status:

```text id="y5huhc"
LIVE or SIMULATED
```

Minimum requirement:

```text id="6j5rqb"
Create an offer with jobs, one equipment order, and other charges.
```

Must include:

```text id="epzjzx"
Selling price
Estimated material cost
Estimated labor cost
Estimated equipment cost
Estimated other charges
Total estimated cost
Terms
```

Acceptance criteria:

```text id="3yb1pg"
Offer exists.
Jobs exist.
Other Charges exist.
Offer totals display.
```

---

## 11.6 First Offer Baseline

Recommended demo status:

```text id="ezhn5o"
LIVE
```

Minimum requirement:

```text id="rowa7q"
When offer is shared, system marks it as First Offer Baseline.
```

Acceptance criteria:

```text id="120gjz"
First Offer Baseline flag visible.
Offer Version snapshot visible.
Baseline cannot be overwritten in demo.
```

---

## 11.7 Property Owner Offer Review and Acceptance

Recommended demo status:

```text id="x0wqlf"
LIVE or SIMULATED
```

Minimum requirement:

```text id="hkk4rk"
Property Owner accepts offer from own account or clearly simulated own-user context.
```

Acceptance criteria:

```text id="dz1p3n"
Offer Accepted Event exists.
Consent Event exists.
User shown as Property Owner or delegated authority.
Contractor cannot perform acceptance.
```

Critical demo moment:

```text id="2aohhb"
No user clicks OK for another user.
```

---

## 11.8 Claim Request Creation

Recommended demo status:

```text id="iwoj69"
LIVE or SIMULATED
```

Minimum requirement:

```text id="htsd9o"
Create Preliminary Claim Request from accepted offer and evidence package.
```

Acceptance criteria:

```text id="eziap6"
Claim Request Type = Preliminary.
Package Snapshot exists.
Claim Request Submitted Event exists.
```

---

## 11.9 ClaimStore Claim Creation

Recommended demo status:

```text id="t1ckl2"
LIVE
```

Minimum requirement:

```text id="kvabf8"
First Claim Request creates ClaimStore Claim.
```

Acceptance criteria:

```text id="z2f6wj"
ClaimStore Claim ID created.
Claim Request linked.
Created From Event visible.
```

Critical demo moment:

```text id="ah9807"
The first claim request creates the neutral claim transaction container.
```

---

## 11.10 Claim Caller Assignment

Recommended demo status:

```text id="4bhbmg"
SIMULATED or LIVE
```

Minimum requirement:

```text id="co1xao"
Show Claim Caller designation assigned to claim request or show external determination path.
```

Acceptance criteria:

```text id="0qmy7v"
Claim Caller is visible as designation, not generic reviewer.
Authority Source is captured or marked external/unknown.
```

---

## 11.11 Claim Decision / External Determination

Recommended demo status:

```text id="qdaze2"
SIMULATED
```

Minimum requirement:

```text id="dtkcdp"
Record either a platform Claim Decision by Claim Caller or an External Determination.
```

Recommended safer first demo:

```text id="cf8yi2"
External Determination Recorded
Claim Caller Not Identified / Authority Source Unknown, if carrier does not participate
```

Acceptance criteria:

```text id="emogm4"
Decision type recorded.
Amount or status recorded.
Evidence/source document linked.
Decision event visible.
External flag visible if external.
```

---

## 11.12 Evidence Upload

Recommended demo status:

```text id="h64kq5"
LIVE
```

Minimum requirement:

```text id="gjn9qe"
Upload or display evidence records linked to Project, Claim Request, or Task.
```

Acceptance criteria:

```text id="15opnf"
Evidence Record includes type, uploader, timestamp, related object, and status.
```

Must demonstrate:

```text id="bm3oum"
Upload is not verification.
```

---

## 11.13 ClaimBuddy Task

Recommended demo status:

```text id="pbb0na"
SIMULATED or LIVE
```

Minimum requirement:

```text id="vd69lb"
Create a ClaimBuddy task for documentation or completion verification.
```

Acceptance criteria:

```text id="ha6j2s"
Task Type selected.
ClaimBuddy assigned.
Checklist/evidence requirement visible.
Task status changes through submitted/verified.
```

---

## 11.14 Human Blockchain Event

Recommended demo status:

```text id="17a4ks"
SIMULATED
```

Minimum requirement:

```text id="3c84w9"
Verified task creates Human Blockchain Event.
```

Acceptance criteria:

```text id="9kk734"
Human Blockchain Event shows actor, verifier, evidence, timestamp, trust weight, and related object.
```

Critical demo moment:

```text id="uk6005"
No evidence = no verified event.
```

---

## 11.15 Bookkeeping Event

Recommended demo status:

```text id="ljkwdx"
SIMULATED or LIVE
```

Minimum requirement:

```text id="tmrt3n"
Show Project Lock, Other Charge Approval, or Payment Recorded creating a Bookkeeping Event.
```

Acceptance criteria:

```text id="un4msr"
Bookkeeping Event links to Trigger Event.
Amount/category/status visible.
No orphan bookkeeping event.
```

---

## 11.16 Payment Record

Recommended demo status:

```text id="6zuxca"
SIMULATED
```

Minimum requirement:

```text id="aprauy"
Record a payment event or show a payment record.
```

Acceptance criteria:

```text id="1zczce"
Payment Record links to Project and Bookkeeping Event.
Demo does not imply actual ClaimsBank fund movement.
```

---

## 11.17 Proficiency Calculation

Recommended demo status:

```text id="mxdxod"
SIMULATED
```

Minimum requirement:

```text id="q3vsh8"
Compare First Offer Baseline to Final Closeout.
```

Acceptance criteria:

```text id="wycoev"
Variance amount calculated.
Variance percent calculated.
Proficiency metric shown.
```

---

## 11.18 TER / SLA

Recommended demo status:

```text id="saz9l5"
MOCKED or SIMULATED
```

Minimum requirement:

```text id="l4zzhb"
Show internal TER/SLA sample metric.
```

Acceptance criteria:

```text id="d1ipqj"
TER is labeled internal.
No public ranking.
Three-week flag described as review/coaching trigger.
```

---

## 11.19 ClaimsBank Readiness

Recommended demo status:

```text id="b5tik2"
MOCKED or SIMULATED
```

Minimum requirement:

```text id="o2p0ap"
Show release-condition checklist.
```

Must include:

```text id="r0vgjg"
Property Owner Acceptance
Claim Decision or External Determination
Completion Verification
Payment Recorded
Final Paperwork, optional
```

Acceptance criteria:

```text id="7spgle"
Status shown as release-condition readiness only.
No actual escrow/fund movement implied.
```

---

## 11.20 Quantum Dashboard

Recommended demo status:

```text id="l6lm15"
SIMULATED
```

Minimum requirement:

```text id="ets212"
Show Operating Cell Overview and Market Opportunity Scenario.
```

Must show:

```text id="hyyk8l"
Claims count
Projects count
Offers count
Claim Requests count
Claim Caller / External Determination status
Evidence / Human Blockchain count
Bookkeeping event count
TER / Proficiency sample
ClaimsBank readiness sample
Market opportunity assumptions
```

Acceptance criteria:

```text id="pvruol"
Actual/demo data is separated from scenario assumptions.
No guaranteed returns language.
```

---

## 11.21 Sponsor Position

Recommended demo status:

```text id="w6q67o"
MOCKED or NARRATED
```

Minimum requirement:

```text id="m0i6e4"
Show one sample sponsor position tied to category, market, season, and rights/obligations.
```

Acceptance criteria:

```text id="6paclh"
Sponsor Position is labeled sponsorship, not ownership.
Data access level is limited.
No equity/profit/guaranteed return implied.
```

---

# 12. Demo Screens Required

Minimum screen inventory:

```text id="qu7sot"
1. Login / User Switcher Demo
2. Operating Cell Dashboard
3. Property Owner File
4. Contractor Lead Detail
5. Project Detail
6. Offer Builder
7. Offer Review / Acceptance
8. Claim Request Package
9. ClaimStore Claim Detail
10. Claim Caller / External Determination
11. Evidence Library
12. ClaimBuddy Task
13. Human Blockchain Event Detail
14. Bookkeeping Event Detail
15. TER / Proficiency View
16. ClaimsBank Readiness View
17. Quantum Dashboard Scenario
18. Sponsor Position View
```

Optional screens:

```text id="nna035"
Support Ticket
Admin Role/Designation Assignment
Agreement Acceptance
Source Event / Imported Event
Decision Log / Canon View
```

---

# 13. Demo Event Ledger Requirements

At minimum, the demo should show these events:

```text id="qwm82d"
User Created
Entity Created
Role Assigned
Designation Assigned
Property Created
Lead Created
Lead Converted
Project Created
Offer Draft Created
Job Added
Other Charge Added
Offer Shared
First Offer Baseline Created
Offer Accepted
Consent Event Created
Claim Request Submitted
ClaimStore Claim Created
Claim Decision or External Determination Recorded
Evidence Uploaded
Task Created
Task Submitted
Task Verified
Human Blockchain Event Created
Payment Recorded
Bookkeeping Event Created
Proficiency Metric Created
Dashboard Metric Updated
```

---

# 14. Demo Data Integrity Checks

Before showing the demo, confirm:

```text id="j1qeia"
Offer accepted by Property Owner user, not Contractor.
Claim Caller is designation, not role label only.
External determination is marked external.
Evidence upload and verification are separate.
Human Blockchain Event has evidence.
Bookkeeping Event has Trigger Event.
First Offer Baseline remains preserved.
Sponsor cannot access private claim detail.
ClaimsBank language says readiness/condition, not escrow release.
TER is internal.
```

---

# 15. Demo Script Spine

The demo script should follow this sequence:

```text id="9z6i19"
1. Show Operating Cell Dashboard.
2. Explain Season 1 Proof of Coherence.
3. Contractor creates Lead.
4. Lead converts to Project.
5. Contractor creates Offer with Jobs and Other Charges.
6. Offer is shared.
7. Property Owner accepts from own account.
8. First Offer Baseline is created.
9. Preliminary Claim Request is submitted.
10. ClaimStore Claim is created.
11. Claim Caller / External Determination is recorded.
12. ClaimBuddy verifies a real-world event.
13. Evidence creates Human Blockchain Event.
14. Payment / financial action creates Bookkeeping Event.
15. Final Closeout creates Proficiency Metric.
16. TER/SLA view shows internal performance signal.
17. ClaimsBank Readiness view shows conditions.
18. Quantum Dashboard shows operating cell and market scenario.
19. Sponsor Position shows participation without ownership.
20. Close with Season 1 ask.
```

---

# 16. Demo Acceptance Test

The MVP demo passes if it can answer:

```text id="6gbwlk"
Who created the lead?
Who converted it to project?
Who created the offer?
What was in the first shared offer?
Who accepted the offer?
What claim request was submitted?
Did it create a ClaimStore Claim?
Who made or recorded the insurance-side decision?
Was it internal Claim Caller or external determination?
What evidence was uploaded?
Who verified it?
What Human Blockchain Event was created?
What bookkeeping event was triggered?
What was the first-offer to final-closeout variance?
What TER/SLA signal changed?
What ClaimsBank readiness condition was satisfied?
What does the Quantum Dashboard show?
What sponsor data is visible?
```

If the event ledger can answer these, the demo works.

---

# 17. Demo Build Priority

## P0 — Must Have

```text id="uljb8l"
Demo users
Roles/designations
Property
Lead
Project
Offer
Jobs / Other Charges
Offer Acceptance
First Offer Baseline
Claim Request
ClaimStore Claim
Claim Caller or External Determination
Evidence
Task
Human Blockchain Event
Bookkeeping Event
Quantum Dashboard basic view
```

## P1 — Should Have

```text id="nn20rk"
Payment Record
Proficiency Metric
TER/SLA sample
ClaimsBank Readiness
Sponsor Position
Support Ticket
Agreement Acceptance
```

## P2 — Nice to Have

```text id="f007j6"
User-switching polish
Timeline visual
Exportable claim package
Event ledger filter
Source-to-canon view
Role/designation admin screen
```

## Deferred

```text id="96uelw"
Actual payment processing
Escrow/fund movement
Carrier integration
Mortgage portal
Native mobile app
Supplier ecommerce
Token/DAO mechanics
Public leaderboard
```

---

# 18. Demo Legal Guardrails

Do not say:

```text id="d1u0my"
We adjust claims.
We represent property owners.
We guarantee insurance approval.
ClaimsBank holds funds.
Sponsors own the market.
TER publicly ranks bad actors.
Human Blockchain is legally conclusive proof.
```

Use:

```text id="yk6rxk"
User-directed claim/project workflow.
Documentation and coordination tools.
External determination recorded.
Claim Caller identified or not identified.
Release-condition readiness.
Sponsor position, not ownership.
Internal TER/SLA signals.
Evidence-backed verified event.
```

---

# 19. Demo Risk Register

Key demo risks:

```text id="yh7wri"
R01 Demo looks like contractor CRM only.
R02 Demo violates no-user-clicks-OK rule.
R03 Claim Caller appears as generic reviewer.
R04 ClaimsBank sounds like regulated banking.
R05 Sponsor position sounds like ownership.
R06 Human Blockchain sounds like crypto hype.
R07 TER sounds punitive/public.
R08 External determination sounds like accusation.
R09 Legal boundaries are not stated.
R10 Demo is too large and loses the operating cell story.
```

Mitigation:

```text id="7f1gfy"
Keep demo narrow.
Label live/simulated/mocked.
Use safe language.
Show event ledger.
Show role/designation.
Show Property Owner consent.
Show dashboard last.
```

---

# 20. Working Conclusion

The MVP demo is not a performance.

It is a proof.

It must prove that the system can preserve:

```text id="mtv9hz"
Identity
Role
Designation
Consent
Evidence
Event
Claim Request
Claim Caller
Bookkeeping
Human Blockchain
TER
ClaimsBank Readiness
Quantum Dashboard
Sponsor Boundary
```

The demo does not need every feature.

It needs the right spine.

If the spine is visible, Season 1 becomes believable.

If the spine is missing, the demo becomes just another software walkthrough.

Build the spine.

Show the cell.

Prove coherence.

Next I recommend **#29: Screen Inventory and UX Flow Map v0.1**.

That will translate the MVP demo and user flows into a practical list of screens, page purposes, required fields, buttons, permissions, and event triggers for designers and frontend builders.
