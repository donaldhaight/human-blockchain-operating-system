---
id: screen-inventory
title: "Screen Inventory and UX Flow Map"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 52504
source_line_end: 55158
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# SCREEN_INVENTORY_AND_UX_FLOW_MAP.md  
## Genesis ClaimStore Season 1 Repository  
### MVP Screen Inventory, UX Flow Map, Required Fields, Buttons, Permissions, Events, and Demo Readiness

---

## 1. Purpose

This document defines the initial screen inventory and UX flow map for the Genesis ClaimStore Season 1 MVP demo and early product build.

The purpose is to translate the architecture into practical user interfaces.

Each screen should make clear:

```text id="nrts4e"
Who can see it
Who can act on it
What object it displays
What fields are required
What buttons exist
What permissions are required
What designations are required
What events are created
What evidence is required
What bookkeeping effects may occur
What must not be allowed
```

This document is for:

```text id="o0tdwt"
Frontend developers
UX designers
Product managers
QA agents
AI coding agents
Demo builders
Kimosabe coordinators
Legal reviewers
```

---

## 2. UX Design Principles

The interface must preserve the trust architecture.

UX should make these distinctions visible:

```text id="43ipup"
User vs Entity
Entity Role vs Designation
Upload vs Verification
Review vs Determination
Draft vs Shared
Internal vs External
Estimated vs Actual
Claim Request vs Claim Decision
Payment Record vs Fund Movement
Sponsor View vs Operational Authority
```

A user should not have to guess who is responsible.

The screen should show it.

---

## 3. Non-Negotiable UX Rules

Every screen must obey:

```text id="2s19g5"
No user clicks OK for another user.
Entity Role is not Designation.
Claim Caller is not merely Reviewer.
Evidence upload is not verification.
No evidence means no verified Human Blockchain event.
First shared offer becomes First Offer Baseline.
First claim request creates ClaimStore Claim.
Bookkeeping events link to trigger events.
External determinations are marked external.
ClaimsBank is release-condition readiness only in Phase 1.
TER is internal in Phase 1.
Sponsor positions are sponsorship, not ownership.
Support assists; users decide.
```

---

# 4. Screen Index

The MVP screen inventory includes:

```text id="umv37v"
S01 Login / Demo User Switcher
S02 User Profile
S03 Agreement Acceptance
S04 Platform Admin Dashboard
S05 Entity Management
S06 Role Assignment
S07 Designation Assignment
S08 Market / Branch Settings
S09 Operating Cell Dashboard
S10 Property Owner Dashboard
S11 Property File
S12 Evidence Library
S13 Contractor Dashboard
S14 Lead List
S15 Lead Detail
S16 Project List
S17 Project Detail
S18 Offer Builder
S19 Offer Review / Property Owner Acceptance
S20 First Offer Baseline View
S21 Jobs / Orders / Other Charges View
S22 Claim Request Builder
S23 Claim Request Package Snapshot
S24 ClaimStore Claim Detail
S25 Claim Caller Assignment
S26 Claim Decision / External Determination
S27 ClaimBuddy Task List
S28 ClaimBuddy Task Detail
S29 Checklist / Evidence Capture
S30 Human Blockchain Event Detail
S31 Bookkeeping Event Detail
S32 Payment Record
S33 Final Closeout / Proficiency
S34 TER / SLA Internal View
S35 ClaimsBank Readiness View
S36 Quantum Dashboard
S37 Sponsor Position View
S38 Sponsor Dashboard
S39 Support Ticket
S40 Admin Correction
S41 Event Ledger / Timeline
S42 One Prompt Event Demo Console
```

---

# S01 — Login / Demo User Switcher

## Purpose

Allow demo or product users to enter the system and make user identity visible.

For demo purposes, a user switcher may simulate multiple users.

## Primary Users

```text id="sl3a54"
All users
Demo operator
```

## Required Elements

```text id="kjdiry"
Login form or demo user selector
Current user display
Current entity display
Current entity role display
Current active designation display, if applicable
```

## Key Buttons

```text id="srxyhb"
Log In
Switch Demo User
Continue
```

## Events

```text id="xmo5qr"
User Logged In
Demo User Switched, demo only
```

## UX Rule

The demo must never make it appear that one admin is silently performing every user action.

If demo user switching is used, clearly show which user is active.

---

# S02 — User Profile

## Purpose

Display and edit basic user identity and contact information.

## Primary Users

```text id="vqplin"
All authenticated users
Platform Admin, limited support view
```

## Required Fields

```text id="78dp2f"
First Name
Last Name
Display Name
Email
Phone
Address, optional
Preferred Contact Method
Profile Status
```

## Key Buttons

```text id="0qdb5u"
Save Profile
View Roles
View Designations
```

## Events

```text id="1e8oi3"
Profile Created
Profile Updated
```

---

# S03 — Agreement Acceptance

## Purpose

Allow users to accept required agreements from their own account.

## Primary Users

```text id="ov5t0l"
All users
```

## Required Fields / Display

```text id="46dipk"
Agreement title
Agreement version
Effective date
Acceptance checkbox
User identity
Timestamp after acceptance
```

## Key Buttons

```text id="v2soru"
Accept
Decline
Download / View Agreement
```

## Events

```text id="lfl9io"
Agreement Viewed
Agreement Accepted
Agreement Declined
```

## UX Rule

No admin, contractor, support user, or AI agent may accept agreements for another user.

---

# S04 — Platform Admin Dashboard

## Purpose

Give platform admins access to configuration, support, entities, roles, designations, events, and system health.

## Primary Users

```text id="g5m99i"
Platform Admin
Portal Master
Kimosabe Coordinator
```

## Display Elements

```text id="c5eaxa"
Entity counts
User counts
Open support tickets
Open legal review issues
Open TER flags
Recent high-consequence events
Demo operating cell status
```

## Key Buttons

```text id="6f0k43"
Manage Entities
Manage Markets
Manage Roles
Manage Designations
Manage Virtual Items
View Event Ledger
View Legal Issue Register
```

## Events

```text id="9vsdmb"
Admin Dashboard Viewed
```

---

# S05 — Entity Management

## Purpose

Create and manage entities.

## Primary Users

```text id="n47cvv"
Platform Admin
Entity Admin, scoped
```

## Required Fields

```text id="8j3qeo"
Entity Type
Legal Name
Display Name
Primary Contact
Status
Address
Phone
Email
```

## Entity Types

```text id="njecsb"
Platform
Property Owner / Household
Licensed Contractor
Insurance Company
Independent Adjuster
ClaimBuddy / Field Verifier
Sponsor
Field Service Provider
```

## Key Buttons

```text id="6mngij"
Create Entity
Edit Entity
Deactivate Entity
Add Location
Add User
```

## Events

```text id="v7d77x"
Entity Created
Entity Updated
Entity Deactivated
Entity Location Added
```

---

# S06 — Role Assignment

## Purpose

Assign entity roles to users.

## Primary Users

```text id="gpr4w5"
Platform Admin
Entity Admin
Contractor Admin, scoped
Insurance Admin, scoped
```

## Required Fields

```text id="26hjgg"
User
Entity
Entity Role
Assigned By
Start Date
Status
```

## Key Buttons

```text id="9kxmbe"
Assign Role
Remove Role
Suspend Role
```

## Events

```text id="kgenx6"
Role Assigned
Role Removed
Role Suspended
```

## UX Rule

Role assignment gives general permission, not claim/project-specific responsibility.

---

# S07 — Designation Assignment

## Purpose

Assign specific responsibility for a claim, project, task, request, decision, or condition.

## Primary Users

```text id="ns29sz"
Platform Admin
Contractor Admin
Insurance Admin
Claim Manager
Support Admin
```

## Required Fields

```text id="m6958f"
Designation Type
Related Object Type
Related Object ID
Assigned User
Assigned Entity
Assigned User Role
Authority Source
Assigned By
Status
Requires Acceptance Flag
```

## Key Buttons

```text id="2v72pf"
Assign Designation
Accept Designation
Decline Designation
Transfer Designation
Revoke Designation
```

## Events

```text id="u11j1e"
Designation Assigned
Designation Accepted
Designation Declined
Designation Transferred
Designation Revoked
```

## UX Rule

Designation must show the related object.

Example:

```text id="u8lxve"
Claim Caller for Claim Request #CR-1001
```

not merely:

```text id="4sypoc"
Claim Caller
```

---

# S08 — Market / Branch Settings

## Purpose

Configure market and branch-specific requirements.

## Primary Users

```text id="7wcmid"
Platform Admin
Contractor Admin
Branch Admin
```

## Required Fields

```text id="dmaptn"
State
Market
Branch
Permit Required
Notice of Commencement Required
Inspection Required
Engineering Required
Mortgage Package Required
Annual Need/Done Enabled
Project Compliance Need/Done Enabled
```

## Key Buttons

```text id="j7n6y2"
Save Settings
Create Market
Create Branch
```

## Events

```text id="h9tsge"
Market Created
Branch Created
Branch Settings Updated
```

---

# S09 — Operating Cell Dashboard

## Purpose

Show the Season 1 operating cell status.

## Primary Users

```text id="9r2elu"
Founder
Kimosabe
Platform Admin
Operator
Sponsor Viewer, limited version
```

## Display Elements

```text id="imdh7s"
Market
Season
Active leads
Active projects
Offers shared
Offers accepted
Claim requests submitted
ClaimStore claims created
Claim decisions / external determinations
ClaimBuddy tasks
Evidence records
Human Blockchain events
Bookkeeping events
TER flags
ClaimsBank readiness conditions
```

## Key Buttons

```text id="mfu42i"
View Leads
View Projects
View Claims
View Dashboard Scenario
View Event Timeline
```

## Events

```text id="vrc1s5"
Operating Dashboard Viewed
```

---

# S10 — Property Owner Dashboard

## Purpose

Give property owner a simple view of property, offer, claim request, tasks, evidence, and required actions.

## Primary Users

```text id="14pgb6"
Property Owner
Authorized Property Representative
```

## Display Elements

```text id="00j9cj"
Property file
Active offers
Pending approvals
Claim requests
Claim status
Evidence/documents
Tasks requiring action
Messages/support
```

## Key Buttons

```text id="3b3qrq"
View Property
Upload Document
Review Offer
Authorize Claim Request
Approve Completion
Create Support Ticket
```

## Events

```text id="psity4"
Property Owner Dashboard Viewed
```

## UX Rule

Property Owner dashboard must clearly show actions only the owner/delegate can perform.

---

# S11 — Property File

## Purpose

Display property details and related claim/project history.

## Primary Users

```text id="zj0009"
Property Owner
Authorized Property Representative
Contractor, scoped
Platform Support, scoped
```

## Required Fields

```text id="nxqv2a"
Property Address
Property Type
Owner Entity
Insurance Company, optional
Policy Information Status
Mortgage Company, optional
Market
Annual Need/Done Status
```

## Key Buttons

```text id="4q4k1d"
Edit Property
Upload Evidence
Add Policy Info
Add Mortgage Info
View Claims
View Projects
```

## Events

```text id="g6ow6t"
Property Created
Property Updated
Property Document Uploaded
```

---

# S12 — Evidence Library

## Purpose

Display all evidence linked to a property, project, claim, task, or request.

## Primary Users

```text id="gn10nq"
Authorized users by related object
ClaimBuddy
Platform Support
Claim Caller, scoped
```

## Required Fields

```text id="bmqnv0"
Evidence Type
File Name
Uploaded By
Uploaded Date
Related Object
Verification Status
Verifier
Trust Weight
Interested / Non-Interested Flag
```

## Key Buttons

```text id="a7f1jf"
Upload Evidence
View Evidence
Verify Evidence
Reject Evidence
Request More Info
Link to Package
```

## Events

```text id="vva1x8"
Evidence Uploaded
Evidence Verified
Evidence Rejected
Evidence Returned for More Info
```

## UX Rule

Use separate labels:

```text id="a7wla9"
Uploaded
Pending Review
Verified
Rejected
```

Never imply upload equals verification.

---

# S13 — Contractor Dashboard

## Purpose

Show contractor lead, project, offer, production, bookkeeping, and task activity.

## Primary Users

```text id="4o7kp7"
Contractor Admin
Sales Rep / ISR
Project Manager
Bookkeeper
```

## Display Elements

```text id="x4y55j"
New leads
Assigned leads
Active projects
Draft offers
Shared offers
Accepted offers
Claim requests
Production tasks
Other charges
Payments
Bookkeeping events
TER/proficiency view, if allowed
```

## Key Buttons

```text id="ey4jt4"
Create Lead
Create Project
Create Offer
View Bookkeeping
View Tasks
```

## Events

```text id="jzlf2m"
Contractor Dashboard Viewed
```

---

# S14 — Lead List

## Purpose

List leads by status, market, source, assignment, and conversion status.

## Primary Users

```text id="l8e9xt"
Contractor Admin
Sales Rep / ISR
Platform Admin, scoped
```

## Columns

```text id="n75y35"
Lead ID
Contact
Property Address
Market
Lead Source
Assigned User
Status
Created Date
Converted Project ID
```

## Key Buttons

```text id="v77kg4"
Create Lead
Assign Lead
Convert to Project
Archive Lead
```

## Events

```text id="wp5w66"
Lead List Viewed
Lead Assigned
Lead Archived
```

---

# S15 — Lead Detail

## Purpose

Display and update a lead.

## Primary Users

```text id="a5y0pp"
Contractor Admin
Sales Rep / ISR
```

## Required Fields

```text id="zs7lf9"
Lead Source
Contact Name
Contact Phone
Contact Email
Property Address
Claim Type
Project Type
Market
Assigned User
Status
```

## Key Buttons

```text id="1eh1ac"
Save Lead
Assign
Schedule Inspection
Convert to Project
Mark Lost
```

## Events

```text id="k556ob"
Lead Created
Lead Updated
Lead Assigned
Lead Converted
Lead Lost
```

---

# S16 — Project List

## Purpose

List projects by status, market, contractor branch, property, and assigned project lead.

## Primary Users

```text id="a936r0"
Contractor Admin
Sales Rep / ISR
Project Manager
Bookkeeper
Platform Admin, scoped
```

## Columns

```text id="s2i0yy"
Project ID
Property Address
Property Owner
Market
Status
Project Lead
Current Offer
ClaimStore Claim ID
Estimated Value
Actual / Final Value
```

## Key Buttons

```text id="s4527t"
Create Project
Open Project
Filter
Export
```

---

# S17 — Project Detail

## Purpose

Central project workspace.

## Primary Users

```text id="w3qhnm"
Contractor Admin
Project Lead
Sales Rep / ISR
Bookkeeper
Property Owner, scoped view
Platform Support, scoped
```

## Display Elements

```text id="x17m6y"
Project summary
Property
Property Owner
Contractor
Project Lead designation
Project status
Offer status
Claim Request status
Jobs
Orders
Other Charges
Evidence
Tasks
Bookkeeping
Need/Done
TER/proficiency
```

## Key Buttons

```text id="h5k94d"
Create Offer
Create Claim Request
Add Job
Add Other Charge
Create Task
Record Payment
Close Project
View Event Timeline
```

## Events

```text id="nlmj2v"
Project Viewed
Project Updated
Project Locked
Project Closed
```

---

# S18 — Offer Builder

## Purpose

Create and revise offers.

## Primary Users

```text id="95cysf"
Offer Owner
Contractor Admin
Project Lead
Sales Rep / ISR
```

## Required Fields

```text id="or8a4r"
Project
Pricing Method
Offer Status
Jobs
Orders
Equipment Orders
Other Charges
Selling Price
Estimated Material Cost
Estimated Labor Cost
Estimated Turnkey Cost
Estimated Equipment Cost
Estimated Other Charges
Terms
```

## Key Buttons

```text id="rjvrgv"
Save Draft
Add Job
Add Order
Add Other Charge
Preview Offer
Share Offer
Withdraw Offer
Revise Offer
```

## Events

```text id="p0wfsv"
Offer Draft Created
Offer Updated
Job Added
Order Added
Other Charge Added
Offer Shared
First Offer Baseline Created
Offer Revised
Offer Withdrawn
```

## UX Rule

When user clicks Share Offer for first time, show warning:

```text id="7gnt43"
Sharing this offer will create the First Offer Baseline for proficiency and audit history.
```

---

# S19 — Offer Review / Property Owner Acceptance

## Purpose

Allow property owner to review and accept/reject/question offer.

## Primary Users

```text id="c4n8ai"
Property Owner
Authorized Property Representative
```

## Display Elements

```text id="t64xr4"
Offer version
Contractor
Project
Property
Scope summary
Jobs
Other Charges
Total Price
Terms
Documents/evidence
Acceptance warning
```

## Key Buttons

```text id="e2hb4y"
Accept Offer
Reject Offer
Ask Question
Download Offer
```

## Events

```text id="mna1c6"
Offer Viewed
Offer Accepted
Offer Rejected
Offer Questioned
Consent Event Created
```

## UX Rule

Only Property Owner or valid delegate sees active Accept button.

Contractor view must show:

```text id="8ule87"
Waiting for Property Owner acceptance.
```

---

# S20 — First Offer Baseline View

## Purpose

Show preserved first shared offer.

## Primary Users

```text id="q094r7"
Contractor Admin
Project Lead
Platform Admin
Property Owner, scoped
Dashboard users, summarized
```

## Display Elements

```text id="2uslpr"
First Offer ID
Version Number
Shared Date
Shared By
Total Selling Price
Estimated Costs
Jobs
Other Charges
Evidence
Superseded By, if applicable
```

## Key Buttons

```text id="kzvx7d"
View Snapshot
Compare to Current Offer
Compare to Final Closeout
```

## Events

```text id="x7h6kv"
First Offer Baseline Viewed
```

## UX Rule

Baseline is read-only.

Corrections require admin correction/superseding event.

---

# S21 — Jobs / Orders / Other Charges View

## Purpose

Manage detailed project scope and cost components.

## Primary Users

```text id="o4x5fk"
Offer Owner
Project Lead
Contractor Admin
Bookkeeper, scoped
```

## Required Sections

```text id="cc3pjx"
Jobs
Material Orders
Labor Orders
Turnkey Orders
Equipment Orders
Other Charges
Estimated Cost
Actual Cost
Variance
```

## Key Buttons

```text id="ot6r3v"
Add Job
Add Order
Add Equipment Order
Add Other Charge
Edit Estimate
Enter Actual Cost
Approve Charge
```

## Events

```text id="7vq4nl"
Job Added
Order Created
Equipment Order Created
Other Charge Added
Actual Cost Entered
Other Charge Approved
Bookkeeping Event Created, if applicable
```

---

# S22 — Claim Request Builder

## Purpose

Create Preliminary, Supplemental, or Final Claim Request.

## Primary Users

```text id="jkq743"
Property Owner
Authorized Property Representative
Contractor User, if workflow allows and authorized
Platform Support, assistance only
```

## Required Fields

```text id="sec5ay"
Claim Request Type
Project
Property
Offer Version
Requested Amount
Included Evidence
Included Documents
Submitted To
Authorization Status
```

## Key Buttons

```text id="mfg4ek"
Save Draft
Preview Package
Submit Claim Request
Request Owner Authorization
```

## Events

```text id="2g3u62"
Claim Request Draft Created
Package Previewed
Claim Request Submitted
ClaimStore Claim Created, if first request
```

## UX Rule

If contractor prepares package, distinguish:

```text id="3fv572"
Prepared by Contractor
Authorized / Submitted by Property Owner
```

unless legally vetted otherwise.

---

# S23 — Claim Request Package Snapshot

## Purpose

Preserve exactly what was submitted.

## Primary Users

```text id="u7qaaj"
Property Owner
Contractor
Claim Caller / Insurance User
Platform Support
```

## Display Elements

```text id="cryygz"
Claim Request ID
Request Type
Submitted Date
Submitted By
Authorized By
Offer Version
Included Evidence
Included Documents
Requested Amount
Delivery Status
```

## Key Buttons

```text id="oz5i4p"
View Package
Download Package
Record Delivery
Create Supplemental Request
```

## Events

```text id="xyqtc6"
Package Snapshot Viewed
Package Exported
Delivery Recorded
```

## UX Rule

Snapshot is read-only after submission.

---

# S24 — ClaimStore Claim Detail

## Purpose

Display neutral claim transaction container.

## Primary Users

```text id="ziv4gw"
Property Owner
Contractor, scoped
Insurance User, scoped
Claim Caller, scoped
Platform Admin
Platform Support
```

## Display Elements

```text id="7a3y6z"
ClaimStore Claim ID
Property
Property Owner
Insurance Company
Insurance Claim Number, if available
Project
Claim Requests
Claim Decisions
Evidence
Tasks
Human Blockchain Events
Bookkeeping Summary
ClaimsBank Conditions
Status
```

## Key Buttons

```text id="4cphha"
Create Claim Request
View Claim Requests
View Decision Records
View Evidence
View Timeline
```

## Events

```text id="ux3kvr"
ClaimStore Claim Viewed
ClaimStore Claim Updated
```

---

# S25 — Claim Caller Assignment

## Purpose

Assign or display Claim Caller designation.

## Primary Users

```text id="yeb2dk"
Insurance Admin
Claim Manager
Platform Admin, limited/manual
```

## Required Fields

```text id="b73cvr"
Claim Request
Assigned User
Assigned Entity
Authority Source
Designation Status
Assigned By
Assigned Date
```

## Key Buttons

```text id="s4e23u"
Assign Claim Caller
Transfer Claim Caller
Mark External / Not Identified
```

## Events

```text id="1p6cxh"
Claim Caller Assigned
Claim Caller Transferred
Claim Caller Not Identified
Authority Source Recorded
```

## UX Rule

Do not label a generic reviewer as Claim Caller unless designation exists.

---

# S26 — Claim Decision / External Determination

## Purpose

Record insurance-side decision or external determination.

## Primary Users

```text id="vakco4"
Claim Caller
Platform Support, external record only
Property Owner / Contractor, external upload only, if allowed
```

## Required Fields

```text id="wtsmb6"
Decision Type
Decision Amount
Reason / Notes
Evidence Reviewed
Authority Source
Claim Caller Designation, if platform decision
External Flag
Claim Caller Identified / Not Identified
Source Document
```

## Key Buttons

```text id="a4fxkf"
Record Decision
Record External Determination
Request More Information
Mark Held
Upload Response
```

## Events

```text id="wmnff1"
Claim Decision Recorded
External Determination Recorded
Claim Caller Not Identified
Claim Request Status Updated
```

## UX Rule

Use safe labels.

Avoid accusatory terms.

---

# S27 — ClaimBuddy Task List

## Purpose

List field tasks assigned to ClaimBuddy or field verifier.

## Primary Users

```text id="xw2hfz"
ClaimBuddy
ClaimBuddy Admin
Platform Support
Contractor / Property Owner, scoped task view
```

## Columns

```text id="o2bioa"
Task ID
Task Type
Related Object
Property
Due Date
Status
Assigned ClaimBuddy
Evidence Required
Checklist Required
```

## Key Buttons

```text id="ucqa07"
Accept Task
Open Task
Filter Tasks
```

## Events

```text id="gtmtse"
Task List Viewed
Task Accepted
```

---

# S28 — ClaimBuddy Task Detail

## Purpose

Complete assigned task.

## Primary Users

```text id="z44gyx"
ClaimBuddy
Field Verifier
```

## Display Elements

```text id="lhnrqp"
Task Type
Property
Related Object
Instructions
Checklist
Required Evidence
Required Signature
Due Date
SLA status
```

## Key Buttons

```text id="o2fbtf"
Accept
En Route
On Site
Upload Evidence
Complete Checklist
Capture Signature
Submit Task
```

## Events

```text id="hf0o1b"
Task Accepted
Task En Route
Task On Site
Evidence Uploaded
Checklist Completed
Signature Captured
Task Submitted
```

---

# S29 — Checklist / Evidence Capture

## Purpose

Capture structured field evidence.

## Primary Users

```text id="sxmthj"
ClaimBuddy
Field Verifier
Contractor User, if task allows
```

## Required Elements

```text id="wogvrv"
Checklist items
Required response fields
Photo upload
Video upload, optional
Document upload
Signature capture, if required
Notes
```

## Key Buttons

```text id="1gjnkw"
Save Progress
Upload Evidence
Complete Item
Submit Checklist
```

## Events

```text id="n527y5"
Checklist Item Completed
Evidence Uploaded
Checklist Submitted
```

---

# S30 — Human Blockchain Event Detail

## Purpose

Display verified event record.

## Primary Users

```text id="y23zcu"
Platform Admin
Authorized users tied to related object
ClaimBuddy
ClaimsBank Reviewer, future
Dashboard viewers, summarized
```

## Display Elements

```text id="n4yc1b"
Human Blockchain Event ID
Base Event
Actor
Actor Role
Actor Designation
Verifier
Verifier Role
Verifier Designation
Evidence
Timestamp
Related Object
Trust Weight
Verification Level
Interested / Non-Interested Flag
ClaimsBank Impact
TER Impact
```

## Key Buttons

```text id="uwm8t4"
View Evidence
View Related Task
View Timeline
Flag Issue
```

## UX Rule

Do not imply legal conclusiveness.

Use:

```text id="nbiulu"
Verified according to platform protocol.
```

---

# S31 — Bookkeeping Event Detail

## Purpose

Display financial consequence created by workflow.

## Primary Users

```text id="qjrip6"
Bookkeeper
Contractor Admin
Platform Admin
ClaimsBank Reviewer, future
```

## Display Elements

```text id="z3zt3g"
Bookkeeping Event ID
Trigger Event
Related Object
Amount
Category
Estimated / Actual
Status
Created Date
Posted Date
Reversal / Superseding Event
```

## Key Buttons

```text id="bn0ipg"
View Trigger Event
Record Payment
Reverse Event
Export
```

## UX Rule

No orphan bookkeeping events.

---

# S32 — Payment Record

## Purpose

Record payment information without implying ClaimsBank fund control.

## Primary Users

```text id="jcodwf"
Bookkeeper
Contractor Admin
Platform Admin, scoped
```

## Required Fields

```text id="sr5ins"
Project
ClaimStore Claim
Paid By
Paid To
Amount
Payment Date
Payment Method
Reference Number
Evidence
```

## Key Buttons

```text id="rnrrgf"
Record Payment
Upload Evidence
Save
Reverse / Correct
```

## Events

```text id="i05pqz"
Payment Recorded
Bookkeeping Event Created
Receivable Updated
```

## UX Rule

Label as payment record, not platform-held funds.

---

# S33 — Final Closeout / Proficiency

## Purpose

Close project and calculate variance from first offer baseline.

## Primary Users

```text id="42xeti"
Project Lead
Bookkeeper
Contractor Admin
Platform Admin, scoped
```

## Required Fields

```text id="wb8qkz"
Final Selling Price
Actual Material Cost
Actual Labor Cost
Actual Turnkey Cost
Actual Equipment Cost
Actual Other Charges
Final Closeout Date
Completion Evidence
Final Paperwork Status
```

## Key Buttons

```text id="z18mbt"
Calculate Variance
Close Project
Reopen / Correct
View First Offer Baseline
```

## Events

```text id="elzhbj"
Final Closeout Completed
Project Final Variance Calculated
Proficiency Metric Created
Project Closed
```

---

# S34 — TER / SLA Internal View

## Purpose

Display internal performance metrics.

## Primary Users

```text id="e4mc58"
Platform Admin
TER Reviewer
Contractor Admin, scoped
Kimosabe
```

## Display Elements

```text id="9ycdfe"
User
Entity
Role
Designation
Task Type
Market
Timeliness Score
Evidence Score
Completion Score
Overall TER
Relevant Average
Three-Week Flag
Review Status
```

## Key Buttons

```text id="ucmpp9"
Review Flag
Add Coaching Note
Mark Reviewed
Export Internal Report
```

## UX Rule

Label clearly:

```text id="a1eddb"
Internal performance review only.
```

No public leaderboard in Phase 1.

---

# S35 — ClaimsBank Readiness View

## Purpose

Show release-condition readiness.

## Primary Users

```text id="ev22sa"
Platform Admin
Contractor Admin, scoped
Property Owner, limited
ClaimsBank Reviewer, future
Sponsor Viewer, aggregated only
```

## Display Elements

```text id="zc4f02"
Condition Type
Required / Optional
Status
Required Evidence
Satisfied By
Satisfied Date
Related Event
```

## Conditions

```text id="jcfpu4"
Property Owner Acceptance
Claim Decision / External Determination
Completion Verification
Final Paperwork
Mortgage Package
Payment Recorded
Warranty Reserve Candidate
Escrow Candidate
Holdback Candidate
```

## UX Rule

Use readiness/condition language.

Do not imply actual banking or escrow.

---

# S36 — Quantum Dashboard

## Purpose

Display operating cell metrics and market scenario.

## Primary Users

```text id="c1nr9b"
Founder
Kimosabe
Platform Admin
Sponsor Viewer, limited
Strategic Partner, limited
```

## Display Elements

```text id="z8lcuc"
Operating Cell Overview
Lead count
Project count
Offer count
Claim Request count
Claim Caller accountability
External Determination count
Evidence / Human Blockchain count
Bookkeeping event count
TER / Proficiency sample
ClaimsBank readiness sample
Market Opportunity assumptions
Risk-adjusted opportunity
```

## Key Buttons

```text id="cpj9g2"
Create Scenario
Edit Assumptions
View Source Data
Export Scenario
```

## UX Rule

Clearly label:

```text id="rer6o2"
Actual demo data
Scenario assumptions
Forecast / projection
```

No guaranteed-return language.

---

# S37 — Sponsor Position View

## Purpose

Display sample sponsor position.

## Primary Users

```text id="z6p336"
Platform Admin
Sponsor Admin
Sponsor Viewer
Kimosabe
```

## Display Elements

```text id="dd0jpp"
Sponsor Category
Founding Stakeholder Group
Market
Territory
Season
Term
Rights
Obligations
Recognition
Data Access Level
Legal Review Status
Status
```

## Key Buttons

```text id="0kiv7j"
Create Sponsor Position
Edit Position
View Dashboard Access
Generate Sponsor Summary
```

## UX Rule

Prominent note:

```text id="gt0cth"
Sponsor Position does not imply ownership, equity, governance control, claim decision authority, banking authority, or private user data access.
```

---

# S38 — Sponsor Dashboard

## Purpose

Show limited sponsor-safe metrics.

## Primary Users

```text id="fpv7vy"
Sponsor Viewer
Sponsor Admin
Platform Admin
```

## Display Elements

```text id="o6vw9d"
Aggregated scenario data
Sponsor category
Season
Territory
Permitted metrics
No identified claim file access unless grant exists
```

## Key Buttons

```text id="vj86r4"
View Scenario
Download Sponsor Summary
Request Follow-Up
```

## Events

```text id="vqmkv5"
Sponsor Dashboard Viewed
Unauthorized Sponsor Access Attempt, if blocked
```

---

# S39 — Support Ticket

## Purpose

Allow support without acting for user.

## Primary Users

```text id="cqsori"
All users
Platform Support
Support Owner
```

## Required Fields

```text id="fzo03q"
Category
Description
Related Object
Priority
Status
Support Owner
```

## Key Buttons

```text id="exdh4x"
Create Ticket
Assign Support Owner
Respond
Escalate
Close
```

## Events

```text id="9eqwai"
Support Ticket Created
Support Owner Assigned
Support Response Added
Ticket Closed
```

## UX Rule

Support cannot accept, approve, sign, determine, or consent for user.

---

# S40 — Admin Correction

## Purpose

Correct data errors without overwriting history.

## Primary Users

```text id="t1rlmh"
Platform Admin
Admin Correction Reviewer
```

## Required Fields

```text id="vq17kz"
Object Type
Object ID
Original Value
Proposed Correction
Reason
Reviewer
Correction Type
```

## Key Buttons

```text id="7j6grr"
Submit Correction
Approve Correction
Reject Correction
Create Superseding Event
Create Reversal Event
```

## Events

```text id="16m3ow"
Admin Correction Requested
Admin Correction Approved
Correction Event Created
Record Superseded
```

## UX Rule

Original high-consequence record remains visible/auditable.

---

# S41 — Event Ledger / Timeline

## Purpose

Show append-only event history for claim, project, property, offer, task, or user.

## Primary Users

```text id="ibt6ds"
Authorized users
Platform Admin
QA
Kimosabe
```

## Display Elements

```text id="f4grfw"
Event ID
Timestamp
Event Category
Event Type
Actor
Entity
Role
Designation
Related Object
Status Before
Status After
Evidence Links
Bookkeeping Link
Source System
```

## Key Buttons

```text id="h58znv"
Filter Events
View Event Detail
View Evidence
View Bookkeeping
Export Timeline
```

## UX Rule

Event timeline should make the trust chain visible.

---

# S42 — One Prompt Event Demo Console

## Purpose

Control and present the MVP demo sequence.

## Primary Users

```text id="pi760i"
Founder
Demo Operator
Kimosabe
```

## Display Elements

```text id="yh8mcf"
Demo step checklist
Current active user
Current object
Next action
Live / Simulated / Mocked label
Event log preview
Talking points
Legal-safe phrase prompts
```

## Key Buttons

```text id="eboxc9"
Start Demo
Next Step
Switch User
Open Current Screen
Mark Step Complete
Show Event Ledger
Show Dashboard
```

## Events

```text id="o98c27"
Demo Step Started
Demo Step Completed
Demo User Switched
```

## UX Rule

Every demo element must be labeled:

```text id="0w4ucw"
LIVE
SIMULATED
MOCKED
NARRATED
DEFERRED
```

---

# 5. UX Flow Map

## Flow A — Contractor Lead to Project to Offer

```text id="387m31"
S13 Contractor Dashboard
→ S14 Lead List
→ S15 Lead Detail
→ Convert to Project
→ S17 Project Detail
→ S18 Offer Builder
→ S21 Jobs / Orders / Other Charges
→ Share Offer
→ S20 First Offer Baseline
```

Critical events:

```text id="ej8oec"
Lead Created
Lead Converted
Project Created
Offer Draft Created
Job Added
Other Charge Added
Offer Shared
First Offer Baseline Created
```

---

## Flow B — Property Owner Offer Acceptance

```text id="npsadl"
S10 Property Owner Dashboard
→ S19 Offer Review / Acceptance
→ Accept Offer
→ S17 Project Detail, owner view
```

Critical events:

```text id="i0600d"
Offer Viewed
Offer Accepted
Consent Event Created
Project Accepted
```

Critical rule:

```text id="kywg8j"
Contractor cannot accept for Property Owner.
```

---

## Flow C — Claim Request to ClaimStore Claim

```text id="caesjh"
S17 Project Detail
→ S22 Claim Request Builder
→ S23 Claim Request Package Snapshot
→ Submit
→ S24 ClaimStore Claim Detail
```

Critical events:

```text id="x0qa7n"
Claim Request Draft Created
Package Snapshot Created
Claim Request Submitted
ClaimStore Claim Created
```

Critical rule:

```text id="a5o8eh"
First Claim Request creates ClaimStore Claim.
```

---

## Flow D — Claim Caller / External Determination

```text id="q2fawx"
S24 ClaimStore Claim Detail
→ S25 Claim Caller Assignment
→ S26 Claim Decision / External Determination
```

Critical events:

```text id="5h4a2x"
Claim Caller Assigned
Claim Decision Recorded
External Determination Recorded
Claim Caller Not Identified, if applicable
```

Critical rule:

```text id="ka5qet"
Reviewer is not Claim Caller unless designated.
```

---

## Flow E — ClaimBuddy / Human Blockchain

```text id="itrak8"
S27 ClaimBuddy Task List
→ S28 ClaimBuddy Task Detail
→ S29 Checklist / Evidence Capture
→ Submit Task
→ Verify Task
→ S30 Human Blockchain Event Detail
```

Critical events:

```text id="8ja9ju"
Task Created
ClaimBuddy Assigned
Task Accepted
Evidence Uploaded
Checklist Completed
Task Submitted
Task Verified
Human Blockchain Event Created
```

Critical rule:

```text id="y9v2qb"
No evidence = no verified event.
```

---

## Flow F — Bookkeeping / Payment / Closeout

```text id="n0lodc"
S17 Project Detail
→ S31 Bookkeeping Event Detail
→ S32 Payment Record
→ S33 Final Closeout / Proficiency
```

Critical events:

```text id="h7f6hc"
Project Locked
Bookkeeping Event Created
Payment Recorded
Final Closeout Completed
Proficiency Metric Created
```

Critical rule:

```text id="07l2kj"
Bookkeeping event links to trigger event.
```

---

## Flow G — Dashboard / Sponsor

```text id="0nmhss"
S09 Operating Cell Dashboard
→ S36 Quantum Dashboard
→ S37 Sponsor Position View
→ S38 Sponsor Dashboard
```

Critical events:

```text id="285ppt"
Dashboard Viewed
Scenario Created
Sponsor Position Viewed
Sponsor Dashboard Viewed
```

Critical rule:

```text id="f23fk3"
Sponsor access does not equal operational authority or private claim access.
```

---

# 6. Screen Priority

## P0 — Required for MVP Demo

```text id="hknfga"
S01 Login / Demo User Switcher
S07 Designation Assignment, simplified
S09 Operating Cell Dashboard
S10 Property Owner Dashboard
S11 Property File
S13 Contractor Dashboard
S15 Lead Detail
S17 Project Detail
S18 Offer Builder
S19 Offer Review / Property Owner Acceptance
S20 First Offer Baseline View
S22 Claim Request Builder
S23 Claim Request Package Snapshot
S24 ClaimStore Claim Detail
S25 Claim Caller Assignment, simplified
S26 Claim Decision / External Determination
S28 ClaimBuddy Task Detail
S29 Checklist / Evidence Capture
S30 Human Blockchain Event Detail
S31 Bookkeeping Event Detail
S33 Final Closeout / Proficiency
S35 ClaimsBank Readiness View
S36 Quantum Dashboard
S37 Sponsor Position View
S41 Event Ledger / Timeline
S42 One Prompt Event Demo Console
```

## P1 — Required for Season 1 Operating Cell

```text id="fr6hk5"
S02 User Profile
S03 Agreement Acceptance
S04 Platform Admin Dashboard
S05 Entity Management
S06 Role Assignment
S08 Market / Branch Settings
S12 Evidence Library
S14 Lead List
S16 Project List
S21 Jobs / Orders / Other Charges View
S27 ClaimBuddy Task List
S32 Payment Record
S34 TER / SLA Internal View
S39 Support Ticket
S40 Admin Correction
```

## P2 — Nice to Have / Later

```text id="uq8bdk"
Advanced Sponsor Dashboard
Advanced Dashboard Scenario Editor
Full Admin Configuration UI
Full Support Knowledge Base
Full Export Builder
Full Legal Review Tracker UI
```

---

# 7. UX Acceptance Tests

The UX passes if a reviewer can answer:

```text id="oncs67"
Who is logged in?
What entity do they belong to?
What role do they have?
What designation do they have for this object?
What action are they allowed to take?
What action are they blocked from taking?
What event will this button create?
Does this action require consent?
Does this action require evidence?
Does this action create bookkeeping?
Does this action affect ClaimStore Claim?
Does this action affect TER/SLA?
Does this action affect ClaimsBank readiness?
Does this action affect Quantum Dashboard?
```

If the screen hides these answers, the UX needs improvement.

---

# 8. Working Conclusion

The screen inventory is where the architecture becomes visible.

A screen is not just a page.

A screen is a responsibility boundary.

The best UX for ClaimStore will make the trust architecture obvious:

```text id="d6s5v1"
This is the user.
This is the role.
This is the designation.
This is the object.
This is the action.
This is the consequence.
This is the event.
This is the evidence.
This is the bookkeeping.
This is the dashboard impact.
```

If the screen shows that, the product teaches the market how to trust it.

If the screen hides that, the product becomes ordinary software.

Build screens that show responsibility.

Next I recommend **#30: API Event Schema Outline v0.1**.

That will define the event object, event categories, event types, required fields, status transitions, and sample payloads so developers can begin designing the backend around the event ledger spine.
