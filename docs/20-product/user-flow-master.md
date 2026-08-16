---
id: user-flow-master
title: "User Flow Master Specification"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 33935
source_line_end: 35742
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# User Flow Master Specification v0.1  
## ClaimStore / ClaimExpress / ClaimBuddy / Kimosabe Season 1 Workflows  
### Property Owner, Contractor, ISR, ClaimBuddy, Claim Caller, Platform Admin, Support, Sponsor

## 1. Purpose

This document defines the primary user flows for Season 1.

The purpose is to convert the data model, backlog, role/designation matrix, ClaimExpress Protocol, Human Blockchain model, TER/SLA model, and Quantum Dashboard model into real workflows.

Each flow should identify:

```text id="voz6u0"
Actors
Preconditions
Steps
Objects created or updated
Events created
Evidence required
Bookkeeping effects
Permissions required
Designations required
Dashboard effects
Acceptance tests
```

The system must preserve the core architecture:

```text id="o2rr01"
No user clicks OK for another user.
Entity Role is not Designation.
Claim Caller is a designation.
The first shared offer becomes the First Offer Baseline.
The first claim request creates a ClaimStore Claim.
No evidence means no verified event.
Certain clicks create timestamps.
Certain clicks create bookkeeping events.
Human Blockchain begins as verified event ledger.
ClaimsBank begins as release-condition logic.
```

---

# 2. Flow Index

Season 1 should support the following primary flows:

```text id="dfy14p"
F01 New User Onboarding
F02 Property Owner Creates Property File
F03 Contractor Company Setup
F04 Contractor Creates Lead
F05 Contractor Converts Lead to Project
F06 Contractor Creates Offer
F07 Property Owner Reviews and Accepts Offer
F08 First Shared Offer Baseline
F09 Contractor Creates Jobs, Orders, Equipment, and Other Charges
F10 Claim Request Created and Submitted
F11 ClaimStore Claim Created
F12 Claim Caller Assigned
F13 Insurance Determination Recorded
F14 External Determination Recorded
F15 ClaimBuddy Task Created and Assigned
F16 ClaimBuddy Completes Field Task
F17 Human Blockchain Event Created
F18 Project Compliance Need/Done Completed
F19 Contractor Records Payment
F20 Bookkeeping Event Chain
F21 Final Closeout and Proficiency Calculation
F22 TER/SLA Review
F23 ClaimsBank Readiness Condition Check
F24 Quantum Dashboard Updates
F25 Platform Support Flow
F26 Admin Correction Flow
F27 Sponsor Viewer Flow
F28 One Prompt Event Demo Flow
```

---

# F01 — New User Onboarding

## Actors

```text id="k4k1cp"
New User
Kimosabe / Onboarding UI
Platform System
```

## Preconditions

```text id="z2x6sz"
User has not created an account.
Terms of Service exists.
Privacy Policy exists.
```

## Steps

```text id="yd93by"
1. User visits onboarding page.
2. User creates account.
3. System creates User record.
4. User verifies email or contact method, if required.
5. User accepts Terms of Service and Privacy Policy.
6. System creates Agreement Acceptance record.
7. User completes basic profile.
8. User selects or is assigned initial path: Property Owner, Contractor, ClaimBuddy, Insurance User, Sponsor, Support/Internal.
9. System creates User Profile record.
10. System creates Entity Role Assignment or prompts entity creation.
```

## Objects Created / Updated

```text id="6k8wnz"
User
User Profile
Agreement Acceptance
Entity Role Assignment
Event
```

## Events Created

```text id="t7bpae"
User Created
Agreement Accepted
Profile Created
Initial Role Selected
```

## Permissions Required

```text id="b7log4"
User self-authority.
No delegated authority required.
```

## Acceptance Test

```text id="vifz3a"
A new user can create an account, accept terms from their own account, create profile, and receive an initial role assignment.
```

---

# F02 — Property Owner Creates Property File

## Actors

```text id="3bu0cz"
Property Owner
Platform System
Kimosabe Guidance
```

## Preconditions

```text id="nnenld"
User has account.
User has accepted Terms.
User has Property Owner role or is creating owner entity.
```

## Steps

```text id="hdipjw"
1. Property Owner selects Create Property File.
2. User enters property address.
3. User enters property type and optional roof/property details.
4. User adds insurance company and policy information, if available.
5. User adds mortgage company information, if available.
6. User uploads photos/documents, if available.
7. System creates Property record.
8. System links Property Owner Entity/User to Property.
9. System creates initial Annual Need/Done records if enabled.
```

## Objects Created / Updated

```text id="f4yytl"
Property
Evidence Record
Document
Annual Need/Done Record
Event
```

## Events Created

```text id="8h3gu2"
Property Created
Property Document Uploaded
Annual Need Created
```

## Evidence Required

```text id="bzxrdo"
None required to create property.
Evidence required later for verified events.
```

## Acceptance Test

```text id="mfd3tz"
Property Owner can create property file, upload documents, and see property dashboard.
```

---

# F03 — Contractor Company Setup

## Actors

```text id="qvurdd"
Contractor Owner
Contractor Admin
Platform Admin, optional
Platform System
```

## Preconditions

```text id="6t9gfu"
Contractor user has account.
Professional agreement workflow exists or is pending.
```

## Steps

```text id="t1cntm"
1. Contractor Owner creates contractor entity.
2. System assigns Contractor Owner role.
3. Contractor accepts required professional/member agreement, if active.
4. Contractor creates branch location.
5. Contractor selects market.
6. Contractor configures branch settings.
7. Contractor adds users.
8. Contractor assigns roles: Admin, Sales Rep, ISR, Project Manager, Bookkeeper.
9. System records role assignments.
```

## Objects Created / Updated

```text id="ls4rfn"
Entity
Entity Location / Branch
Entity Role Assignment
Agreement Acceptance
Event
```

## Events Created

```text id="rxuehi"
Contractor Entity Created
Contractor Branch Created
Agreement Accepted
Role Assigned
Branch Settings Updated
```

## Acceptance Test

```text id="9zt2aq"
Contractor Admin can create branch, assign users, and enable market-specific project compliance settings.
```

---

# F04 — Contractor Creates Lead

## Actors

```text id="g1cqow"
Contractor Admin
Sales Rep / ISR
Platform System
```

## Preconditions

```text id="3a11y3"
Contractor entity exists.
User has contractor role.
Market exists.
```

## Steps

```text id="sr0kdd"
1. Contractor user selects Create Lead.
2. User enters property address or links existing Property.
3. User enters contact information.
4. User selects claim/project type.
5. User selects lead source.
6. User assigns lead to Sales Rep / ISR.
7. System creates Lead.
8. System records Lead Created Event.
9. If lead source qualifies, system creates referral tracking candidate.
```

## Objects Created / Updated

```text id="yg8bcm"
Lead
Referral Fee Record, optional
Event
Notification
```

## Events Created

```text id="f8oi6a"
Lead Created
Lead Assigned
Referral Fee Tracked, optional
```

## Bookkeeping Effects

```text id="91fpbw"
Referral Fee Tracked may create bookkeeping candidate, depending configuration.
```

## Acceptance Test

```text id="mey2zn"
Contractor user can create and assign lead; assigned user sees lead in dashboard.
```

---

# F05 — Contractor Converts Lead to Project

## Actors

```text id="b6blsz"
Sales Rep / ISR
Contractor Admin
Platform System
```

## Preconditions

```text id="3osdwo"
Lead exists.
Lead is qualified.
User has permission to convert lead.
```

## Steps

```text id="5bqqf7"
1. User opens Lead.
2. User selects Convert to Project.
3. System checks or creates Property record.
4. System creates Project record.
5. System links Lead to Project.
6. System assigns Project Lead or prompts designation.
7. Lead status changes to Converted.
8. Project status becomes Created or Estimated.
```

## Objects Created / Updated

```text id="qxiq4q"
Project
Property, if new
Designation Assignment, optional
Lead
Event
```

## Events Created

```text id="etgzch"
Lead Converted
Project Created
Project Lead Assigned, optional
```

## Acceptance Test

```text id="2svt8o"
Qualified lead converts to project and preserves lead source/referral context.
```

---

# F06 — Contractor Creates Offer

## Actors

```text id="6m5tw6"
Offer Owner
Sales Rep / ISR
Contractor Admin
Platform System
```

## Preconditions

```text id="csgp4p"
Project exists.
User has contractor role.
Offer Owner designation exists or is assigned.
```

## Steps

```text id="fa4u8o"
1. User opens Project.
2. User selects Create Offer.
3. System creates Draft Offer.
4. User selects pricing method: Lump Sum, Line Item, Job-Based, Hybrid, Estimate/Opinion.
5. User adds jobs.
6. User adds orders, equipment, and other charges.
7. User enters selling price and estimated cost fields.
8. User attaches supporting evidence/documents.
9. User saves Draft Offer.
```

## Objects Created / Updated

```text id="94bp4t"
Offer
Offer Version
Job
Order
Equipment Order
Other Charge
Evidence Record
Event
```

## Events Created

```text id="t4ehcb"
Offer Draft Created
Job Added
Order Added
Other Charge Added
Evidence Uploaded
Offer Updated
```

## Acceptance Test

```text id="2bfstn"
Offer can include jobs, orders, equipment, other charges, selling price, estimated cost, and evidence.
```

---

# F07 — Property Owner Reviews and Accepts Offer

## Actors

```text id="q49a0p"
Property Owner
Authorized Property Representative, if delegated
Contractor User
Platform System
```

## Preconditions

```text id="wo0wnj"
Offer exists.
Offer is shared with Property Owner.
Property Owner has account and accepted Terms.
```

## Steps

```text id="so55n1"
1. Contractor shares Offer.
2. System notifies Property Owner.
3. Property Owner logs in.
4. Property Owner views Offer version, price, scope, jobs, other charges, and terms.
5. Property Owner may accept, reject, or ask question.
6. If accepting, system confirms high-consequence action.
7. Property Owner accepts from own account.
8. System records Offer Accepted Event and Consent Event.
9. Project status changes to Accepted.
10. Contractor is notified.
```

## Objects Created / Updated

```text id="wdth7p"
Offer
Project
Event
Notification
Agreement/Consent Record, if applicable
```

## Events Created

```text id="znd9g9"
Offer Shared
Offer Viewed
Offer Accepted
Consent Event
Project Accepted
```

## Critical Rule

```text id="h4l0ps"
Contractor, Platform Support, ClaimBuddy, or Sponsor cannot accept the offer for the Property Owner unless valid delegated authority exists.
```

## Acceptance Test

```text id="3jwvch"
Only Property Owner or authorized delegate can accept offer; event records user, role, authority, timestamp, and offer version.
```

---

# F08 — First Shared Offer Baseline

## Actors

```text id="ro8e27"
Offer Owner
Platform System
```

## Preconditions

```text id="i6y5em"
Draft Offer exists.
No prior shared offer exists for project, or system recognizes first shared event.
```

## Steps

```text id="zk66se"
1. Offer Owner selects Share Offer.
2. System checks whether this is first shared offer.
3. If yes, system marks First Offer Baseline.
4. System creates Offer Version snapshot.
5. System records First Offer Baseline Event.
6. Later revisions preserve original baseline.
```

## Objects Created / Updated

```text id="a0zovm"
Offer
Offer Version
Event
Proficiency Baseline, if separate
```

## Events Created

```text id="au1yk5"
Offer Shared
First Offer Baseline Created
```

## Acceptance Test

```text id="sq29av"
First shared offer remains preserved even if later revised or superseded.
```

---

# F09 — Contractor Creates Jobs, Orders, Equipment, and Other Charges

## Actors

```text id="gt9x0p"
Offer Owner
Project Lead
Contractor Admin
Bookkeeper, limited
Platform System
```

## Preconditions

```text id="3wkctl"
Project exists.
Offer exists or Project scope is being built.
```

## Steps

```text id="pgdlz5"
1. User adds Job to Project/Offer.
2. User selects Job Category.
3. User enters scope description.
4. User adds Material Order, Labor Order, Turnkey Order, Equipment Order, or Service/Punch Order.
5. User adds Other Charges such as permit, trip, engineering, measurement report, estimate, supplement processing.
6. User enters estimated selling price and cost categories.
7. System updates totals.
8. System records events for each object added or changed.
```

## Objects Created / Updated

```text id="e856zn"
Job
Order
Equipment Order
Other Charge
Offer
Project
Bookkeeping Event, conditional
```

## Events Created

```text id="9c5mbn"
Job Added
Order Created
Equipment Order Created
Other Charge Added
Offer Totals Updated
```

## Acceptance Test

```text id="6vh8hq"
Project can represent complete scope, including material, labor, turnkey, equipment, and other charge economics.
```

---

# F10 — Claim Request Created and Submitted

## Actors

```text id="966pkw"
Property Owner
Contractor User, if authorized workflow
Platform System
```

## Preconditions

```text id="hptkmp"
Accepted offer exists or claim documentation package exists.
Property Owner authorization rules are satisfied.
Required documents/evidence selected.
```

## Steps

```text id="fb9454"
1. User selects Create Claim Request.
2. User selects request type: Preliminary, Supplemental, Final.
3. System assembles package contents.
4. User reviews package.
5. Required authorization is confirmed.
6. User submits Claim Request.
7. System creates Package Snapshot.
8. Claim Request status becomes Submitted.
9. System records Claim Request Submitted Event.
10. If no ClaimStore Claim exists, system creates one.
```

## Objects Created / Updated

```text id="cex14v"
Claim Request
Claim Request Package Snapshot
ClaimStore Claim, if first request
Event
Document
Notification
```

## Events Created

```text id="pg2xfk"
Claim Request Created
Package Snapshot Created
Claim Request Submitted
ClaimStore Claim Created, if applicable
```

## Acceptance Test

```text id="f8xmi9"
Submitted claim request creates locked package snapshot and, if first request, creates ClaimStore Claim.
```

---

# F11 — ClaimStore Claim Created

## Actors

```text id="fh5kfa"
Platform System
```

## Preconditions

```text id="jmodyp"
First Claim Request or Claim Notice is submitted/received.
No existing related ClaimStore Claim exists.
```

## Steps

```text id="jcvx0e"
1. System detects first claim request/notice.
2. System creates ClaimStore Claim.
3. System links Property, Property Owner, Project, Contractor, Insurance Company if known.
4. System links Claim Request.
5. System records Created From Event ID.
6. System sets status.
```

## Objects Created / Updated

```text id="3nvl9q"
ClaimStore Claim
Claim Request
Project
Event
```

## Events Created

```text id="f22hhd"
ClaimStore Claim Created
Claim Request Linked
```

## Acceptance Test

```text id="027ydr"
First claim request creates a neutral claim transaction container; future requests attach to it.
```

---

# F12 — Claim Caller Assigned

## Actors

```text id="auxlxw"
Insurance Admin
Claim Manager
Platform Support, for external/unknown status only
Platform System
```

## Preconditions

```text id="qvnu2m"
Claim Request exists.
Insurance-side entity/user exists or external response path is used.
```

## Steps

```text id="osk7og"
1. Insurance Admin or authorized Claim Manager opens Claim Request.
2. User selects Assign Claim Caller.
3. User selects authorized person.
4. System records Authority Source.
5. System creates Claim Caller Designation.
6. System notifies Claim Caller.
7. Claim Request status changes to Assigned to Claim Caller.
```

## Objects Created / Updated

```text id="xry441"
Designation Assignment
Claim Request
Event
Notification
```

## Events Created

```text id="e578z2"
Claim Caller Assigned
Authority Source Recorded
Claim Request Assigned
```

## Acceptance Test

```text id="sxfikv"
Claim Caller designation is claim/request-specific and includes authority source.
```

---

# F13 — Insurance Determination Recorded

## Actors

```text id="vl2wk1"
Claim Caller
Platform System
```

## Preconditions

```text id="hpag13"
Claim Request exists.
User has Claim Caller designation for the request.
Authority Source exists.
```

## Steps

```text id="n1hxrw"
1. Claim Caller opens Claim Request.
2. Claim Caller reviews package and evidence.
3. Claim Caller selects Decision Type.
4. Claim Caller enters decision amount, if applicable.
5. Claim Caller enters reason/notes.
6. Claim Caller links reviewed evidence/documents.
7. Claim Caller submits determination.
8. System creates Claim Decision Record.
9. System updates Claim Request status.
10. System updates ClaimStore Claim status.
11. Dashboard updates Claim Caller accountability metrics.
```

## Objects Created / Updated

```text id="9dmv8k"
Claim Decision Record
Claim Request
ClaimStore Claim
Event
Dashboard Metric
```

## Events Created

```text id="2c88e0"
Claim Determination Made
Claim Request Status Updated
Claim Caller Accountability Metric Updated
```

## Acceptance Test

```text id="njw84m"
Only designated Claim Caller can create platform-recorded determination.
```

---

# F14 — External Determination Recorded

## Actors

```text id="obv3eb"
Property Owner
Contractor User
Platform Support
Platform System
```

## Preconditions

```text id="cl5pci"
Carrier or insurance-side response occurred outside platform.
External document, email, letter, or note exists.
```

## Steps

```text id="qh4y5d"
1. User selects Record External Determination.
2. User uploads carrier response or enters summary.
3. System asks whether Claim Caller is identified.
4. If identified, name/entity/authority source is recorded.
5. If not identified, status is Claim Caller Not Identified.
6. System creates External Determination Record.
7. Claim Request status updates based on decision.
8. Dashboard updates external/unknown accountability metrics.
```

## Objects Created / Updated

```text id="0bxzth"
Claim Decision Record
Evidence Record
Claim Request
ClaimStore Claim
Event
Dashboard Metric
```

## Events Created

```text id="8sve4b"
External Determination Recorded
Claim Caller Not Identified, if applicable
Authority Source Unknown, if applicable
```

## Acceptance Test

```text id="423x72"
External response can be recorded without falsely claiming platform-verified Claim Caller authority.
```

---

# F15 — ClaimBuddy Task Created and Assigned

## Actors

```text id="iguc8k"
Property Owner
Contractor User
Platform Support
ClaimBuddy Admin
Platform System
```

## Preconditions

```text id="diwrx0"
Claim, project, property, or task need exists.
ClaimBuddy role exists.
```

## Steps

```text id="pvfh39"
1. Authorized user selects Create Task.
2. User selects Task Type.
3. User links task to Claim, Project, Property, Job, Order, or Other Charge.
4. User sets evidence/checklist/signature requirements.
5. User assigns ClaimBuddy or sends to eligible pool.
6. System creates Task.
7. System creates ClaimBuddy Verifier designation, if assigned.
8. ClaimBuddy receives notification.
```

## Objects Created / Updated

```text id="h2j50y"
Task
Designation Assignment
Checklist
Event
Notification
```

## Events Created

```text id="rw6iir"
Task Created
ClaimBuddy Assigned
Designation Assigned
```

## Acceptance Test

```text id="oklix0"
Task includes required evidence/checklist rules and assigned ClaimBuddy designation.
```

---

# F16 — ClaimBuddy Completes Field Task

## Actors

```text id="rb0ask"
ClaimBuddy
Field Verifier
Platform System
```

## Preconditions

```text id="1t664o"
Task exists.
ClaimBuddy has accepted designation.
Required checklist/evidence rules exist.
```

## Steps

```text id="ek3av4"
1. ClaimBuddy accepts task.
2. ClaimBuddy records scheduled/en route/on-site status, if enabled.
3. ClaimBuddy captures required photos/videos/documents.
4. ClaimBuddy completes checklist.
5. ClaimBuddy captures signature if required.
6. ClaimBuddy submits task.
7. System checks requirements.
8. If complete, task moves to Submitted/Verified depending review rules.
9. If incomplete, task is returned for more information.
```

## Objects Created / Updated

```text id="m17n87"
Task
Checklist
Checklist Items
Evidence Record
Signature Record
Event
SLA Record
```

## Events Created

```text id="lusz00"
Task Accepted
Task On Site
Evidence Uploaded
Checklist Completed
Signature Captured
Task Submitted
Task Verified or Returned
```

## Acceptance Test

```text id="6s9fpf"
ClaimBuddy cannot create verified completion without required evidence/checklist/signature.
```

---

# F17 — Human Blockchain Event Created

## Actors

```text id="x12yjw"
Platform System
Verifier / ClaimBuddy
Protocol Reviewer, optional
```

## Preconditions

```text id="p4i6hx"
Task or action is eligible for Human Blockchain Event.
Required evidence exists.
Verification status is satisfied.
```

## Steps

```text id="t7g98a"
1. System detects verified task/event.
2. System checks required evidence.
3. System checks verifier role/designation.
4. System records interested/non-interested status.
5. System assigns trust weight.
6. System creates Human Blockchain Event.
7. System updates TER/SLA.
8. System checks ClaimsBank readiness conditions.
9. Dashboard updates verification metrics.
```

## Objects Created / Updated

```text id="zap15r"
Human Blockchain Event
Evidence Record
Task
TER Metric / SLA Record
ClaimsBank Condition
Dashboard Metric
```

## Events Created

```text id="g8jxm7"
Human Blockchain Event Created
Verification Level Assigned
ClaimsBank Condition Checked
```

## Acceptance Test

```text id="azw0cr"
Verified field event becomes evidence-backed Human Blockchain Event with actor, verifier, evidence, timestamp, and trust weight.
```

---

# F18 — Project Compliance Need/Done Completed

## Actors

```text id="tmhicx"
Contractor User
Project Lead
ClaimBuddy / Verifier, optional
Platform System
```

## Preconditions

```text id="t7a7di"
Project exists.
Compliance Need/Done item exists.
```

## Steps

```text id="pi13rc"
1. User opens Project Compliance checklist.
2. User selects item: Permit, NOC, Inspection Request, Inspection Pass, Engineering, Mortgage Package, etc.
3. User uploads required evidence/document.
4. User marks item Done.
5. System records completion event.
6. If evidence required and missing, system blocks verified Done.
```

## Objects Created / Updated

```text id="4v9a76"
Project Compliance Need/Done
Evidence Record
Document
Event
```

## Events Created

```text id="irph54"
Compliance Item Completed
Evidence Uploaded
Need/Done Updated
```

## Acceptance Test

```text id="ctdakd"
Project compliance item cannot be marked verified Done without required evidence when configured.
```

---

# F19 — Contractor Records Payment

## Actors

```text id="5ni9gm"
Bookkeeper
Contractor Admin
Project Lead, if permitted
Platform System
```

## Preconditions

```text id="y8b2oy"
Project exists.
Payment received or payment evidence exists.
User has bookkeeping permission.
```

## Steps

```text id="i573d8"
1. User opens Project financial tab.
2. User selects Record Payment.
3. User enters amount, date, payer, payee, method, reference.
4. User uploads payment evidence if available.
5. System creates Payment Record.
6. System creates Payment Recorded Event.
7. System creates Bookkeeping Event.
8. Receivable status updates.
9. Dashboard updates payment/revenue metrics.
```

## Objects Created / Updated

```text id="fa4f9w"
Payment Record
Bookkeeping Event
Evidence Record
Project
Dashboard Metric
```

## Events Created

```text id="qzjfq1"
Payment Recorded
Bookkeeping Event Created
Receivable Updated
```

## Acceptance Test

```text id="t498hc"
Payment record creates linked bookkeeping event and updates project financial status.
```

---

# F20 — Bookkeeping Event Chain

## Actors

```text id="gpxyw5"
Platform System
Contractor Admin
Bookkeeper
Project Lead
```

## Preconditions

```text id="9mkby6"
Workflow action with financial consequence occurs.
```

## Steps

```text id="ne6i28"
1. System detects configured bookkeeping trigger.
2. System creates Bookkeeping Event.
3. Bookkeeping Event links to Trigger Event.
4. Bookkeeping Event records amount/category/status.
5. Project/financial summary updates.
6. Dashboard updates revenue/cost metrics.
```

## Trigger Examples

```text id="9fn6ul"
Project Locked
Other Charge Approved
Field Service Task Completed
Payment Recorded
Commission Earned
Referral Fee Accrued
Project Closed
```

## Acceptance Test

```text id="1sfsx8"
Every bookkeeping event can identify the workflow event that triggered it, or a manual correction reason.
```

---

# F21 — Final Closeout and Proficiency Calculation

## Actors

```text id="c45r6v"
Project Lead
Bookkeeper
Contractor Admin
Platform System
```

## Preconditions

```text id="vfm05x"
Project has first offer baseline.
Project has final costs and final selling price.
Completion and final paperwork status are satisfied or manually marked.
```

## Steps

```text id="25lgxu"
1. User opens Project Closeout.
2. User enters or confirms final selling price.
3. User enters or confirms actual material, labor, turnkey, equipment, and other charge costs.
4. User confirms final paperwork status.
5. System calculates variance.
6. System creates Final Closeout record/event.
7. System creates Proficiency Metrics.
8. TER/proficiency dashboards update.
```

## Objects Created / Updated

```text id="38nt47"
Project
Bookkeeping Event
Proficiency Metric
TER Metric, if applicable
Dashboard Metric
```

## Events Created

```text id="zovqnl"
Final Closeout Completed
Project Final Variance Calculated
Proficiency Metric Created
```

## Acceptance Test

```text id="2xsz04"
System compares First Offer Baseline to Final Closeout and creates variance/proficiency metric.
```

---

# F22 — TER/SLA Review

## Actors

```text id="n1oivb"
Platform System
TER Reviewer
Contractor Admin
Kimosabe / Training Support
```

## Preconditions

```text id="zx0n6o"
Tasks and events exist.
SLA rules are configured.
Relevant averages exist or are manually seeded.
```

## Steps

```text id="lbjk53"
1. System calculates task timeliness.
2. System calculates evidence completeness.
3. System calculates completion status.
4. System calculates basic TER.
5. System compares to relevant average.
6. If below average for three consecutive weeks, system creates TER Review Flag.
7. TER Reviewer reviews flag.
8. Reviewer may assign coaching/remediation.
```

## Objects Created / Updated

```text id="y2kdey"
SLA Record
TER Metric
TER Review Flag
Support / Training Task, optional
```

## Events Created

```text id="08e99s"
SLA Calculated
TER Calculated
TER Review Flag Created
TER Reviewed
```

## Acceptance Test

```text id="3xswsi"
Below-average performance for three consecutive weeks creates internal review flag, not automatic public punishment.
```

---

# F23 — ClaimsBank Readiness Condition Check

## Actors

```text id="43ze3m"
Platform System
ClaimsBank Reviewer, future
Project Lead
Property Owner
ClaimBuddy Verifier
```

## Preconditions

```text id="g0kvf9"
Project/Claim has configured ClaimsBank readiness conditions.
Required events may exist.
```

## Steps

```text id="fkaaga"
1. System checks required conditions.
2. System verifies property owner acceptance.
3. System checks Claim Caller or external determination status.
4. System checks completion verification.
5. System checks final paperwork.
6. System checks mortgage package, if required.
7. System updates ClaimsBank Condition statuses.
8. Dashboard updates ClaimsBank-ready metrics.
```

## Objects Created / Updated

```text id="32h3za"
ClaimsBank Condition
Human Blockchain Event
Claim Decision Record
Project
Dashboard Metric
```

## Events Created

```text id="fto6ny"
ClaimsBank Condition Checked
ClaimsBank Condition Satisfied
ClaimsBank Condition Missing
```

## Acceptance Test

```text id="czoxhv"
ClaimsBank condition cannot be satisfied unless required role/designation/evidence/approval events exist.
```

---

# F24 — Quantum Dashboard Updates

## Actors

```text id="2uv536"
Platform System
Operator
Sponsor Viewer, limited
Kimosabe
```

## Preconditions

```text id="qvzjyh"
Operational data or scenario assumptions exist.
```

## Steps

```text id="aao2sd"
1. System aggregates claims/projects/offers/tasks/events.
2. System calculates operational metrics.
3. System calculates Claim Caller accountability metrics.
4. System calculates TER/proficiency metrics.
5. User enters or updates market assumptions.
6. System calculates Market Opportunity.
7. System calculates risk-adjusted opportunity.
8. Sponsor views are filtered by access level.
```

## Objects Created / Updated

```text id="fbhp79"
Dashboard Metric
Scenario
Sponsor Data Access Grant, if applicable
```

## Events Created

```text id="jsjcdm"
Dashboard Metric Updated
Scenario Created
Sponsor Dashboard Viewed
```

## Acceptance Test

```text id="j044hc"
Dashboard can show operating cell metrics and scenario formula without exposing unauthorized private data.
```

---

# F25 — Platform Support Flow

## Actors

```text id="rkt3g8"
Property Owner
Contractor User
ClaimBuddy
Insurance User
Support User
Platform System
```

## Preconditions

```text id="l3i5s2"
User needs help.
Support role exists.
```

## Steps

```text id="x7woao"
1. User creates support ticket.
2. System links ticket to related object if applicable.
3. Support User is assigned Support Owner designation.
4. Support User reviews context.
5. Support User provides guidance, links, explanation, or escalation.
6. Support User does not accept, approve, sign, or decide for user.
7. Ticket is resolved or escalated.
```

## Objects Created / Updated

```text id="dl8alw"
Support Ticket
Designation Assignment
Event
Knowledge Base Article, optional
```

## Events Created

```text id="321jco"
Support Ticket Created
Support Owner Assigned
Support Response Added
Support Ticket Closed
```

## Acceptance Test

```text id="3il26t"
Support can assist and route but cannot consent, approve completion, make claim determination, or act as another user.
```

---

# F26 — Admin Correction Flow

## Actors

```text id="9l8k22"
Platform Admin
Admin Correction Reviewer
Platform System
```

## Preconditions

```text id="y6fw5z"
Data error or correction request exists.
User has correction permission.
```

## Steps

```text id="1bpfr7"
1. Admin opens correction tool.
2. Admin selects object/event requiring correction.
3. System displays original record.
4. Admin enters correction reason.
5. Admin submits correction.
6. System creates Correction Event.
7. System creates superseding/reversal record if needed.
8. Original record remains auditable.
```

## Objects Created / Updated

```text id="0vbyhq"
Event
Correction Event
Superseding Record
Affected Object
```

## Events Created

```text id="6p3bhp"
Admin Correction Requested
Admin Correction Completed
Record Superseded
```

## Acceptance Test

```text id="00738h"
Admin cannot silently overwrite high-consequence history.
```

---

# F27 — Sponsor Viewer Flow

## Actors

```text id="iuaeyx"
Sponsor Admin
Sponsor Viewer
Platform Admin
Platform System
```

## Preconditions

```text id="yqnqye"
Sponsor entity exists.
Sponsor position exists.
Data access level is configured.
```

## Steps

```text id="6fhwkq"
1. Sponsor Viewer logs in.
2. System checks Sponsor Role.
3. System checks Sponsor Position.
4. System checks Data Access Grant.
5. Sponsor views permitted dashboard.
6. Sponsor cannot open identified claim/project files unless explicitly authorized.
7. Sponsor dashboard view event is recorded.
```

## Objects Created / Updated

```text id="asg5fo"
Sponsor Position
Sponsor Data Access Grant
Dashboard Metric
Event
```

## Events Created

```text id="o7aa0e"
Sponsor Dashboard Viewed
Unauthorized Sponsor Access Attempt, if blocked
```

## Acceptance Test

```text id="cspndw"
Sponsor access is limited to permitted dashboard/data scope and does not override privacy or protocol boundaries.
```

---

# F28 — One Prompt Event Demo Flow

## Actors

```text id="fz3o68"
Founder
Kimosabe
Demo Operator
Property Owner Demo User
Contractor Demo User
Claim Caller Demo User
ClaimBuddy Demo User
Sponsor Demo User
Platform System
```

## Preconditions

```text id="48mmq5"
Demo environment exists.
Demo users exist.
Demo market exists.
Demo sponsor position exists.
```

## Steps

```text id="0eferl"
1. Show seven-group architecture.
2. Create or show Property Owner.
3. Create or show Contractor.
4. Create Lead.
5. Convert Lead to Project.
6. Create Offer with Jobs, Orders, Equipment, and Other Charges.
7. Share Offer.
8. Property Owner accepts from own account.
9. Submit Preliminary Claim Request.
10. System creates ClaimStore Claim.
11. Assign Claim Caller or record external determination.
12. Record Claim Decision.
13. Create ClaimBuddy Completion Verification Task.
14. ClaimBuddy uploads evidence and completes checklist.
15. System creates Human Blockchain Event.
16. Record Payment.
17. System creates Bookkeeping Event.
18. Close project and calculate proficiency variance.
19. Show TER/SLA metrics.
20. Show ClaimsBank readiness condition.
21. Show Quantum Dashboard.
22. Show Founding Sponsor Position.
```

## Acceptance Test

```text id="vdfvob"
Demo proves one coherent operating cell from lead to dashboard without violating role/designation/consent/evidence rules.
```

---

# 3. Cross-Flow Rules

## Rule 1 — Consent Must Be User-Owned

Any flow involving acceptance, authorization, signature, or completion approval must be performed by the authorized user or delegated authority.

## Rule 2 — Determination Must Be Claim Caller-Owned

Insurance-side determinations require Claim Caller designation or external determination status.

## Rule 3 — Evidence Must Be Attached Before Verification

Uploads are not verification unless evidence rules and verifier rules are satisfied.

## Rule 4 — Bookkeeping Must Trace to Trigger

Every bookkeeping event must link to a workflow trigger or manual correction reason.

## Rule 5 — Sponsor Access Is Never Operational Authority

Sponsors may view permitted data but do not control claims, projects, TER, Claim Caller decisions, or user consent.

## Rule 6 — Support Assists, Users Decide

Support may guide, explain, escalate, and document. Support may not consent for users.

---

# 4. Flow Acceptance Master Test

The full Season 1 system passes if it can answer:

```text id="62lqj6"
Who created the user?
Who accepted the Terms?
Who owns the property file?
Who created the lead?
Who converted it to project?
Who created the offer?
What was in the first offer?
Who accepted it?
Who submitted the claim request?
Did it create a ClaimStore Claim?
Who was assigned Claim Caller?
What decision was recorded?
Was the decision external?
Who completed the field task?
What evidence was uploaded?
Who verified completion?
What bookkeeping event was triggered?
What was the first-offer to final-closeout variance?
What TER/SLA metrics changed?
What ClaimsBank readiness condition was satisfied?
What did the Quantum Dashboard show?
What sponsor data was visible?
```

If the system can answer these questions from the event ledger, the user flows are working.

---

# 5. Working Conclusion

User flows are where architecture meets reality.

A product can have the right objects and still fail if the flows allow the wrong person to act, the wrong event to fire, or the wrong evidence to count.

These flows preserve the system’s trust logic:

```text id="xzlgnc"
The user acts.
The role permits.
The designation assigns responsibility.
The click creates an event.
The evidence verifies.
The bookkeeping records consequence.
The Claim Caller makes or records the determination.
The Human Blockchain remembers.
The TER measures.
The ClaimsBank condition checks.
The Quantum Dashboard underwrites.
```

That is the workflow spine of Season 1.

Next I recommend **#18: Acceptance Test and QA Master Plan v0.1**.

That will convert these flows into test suites for permissions, roles/designations, claim requests, Claim Caller, evidence, Human Blockchain, bookkeeping, TER, ClaimsBank readiness, dashboard access, and the One Prompt Event demo.
