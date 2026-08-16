---
id: claimstore-object-addendum
title: "ClaimStore Object Model Addendum"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 10198
source_line_end: 11260
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# ClaimStore Object Model Addendum v0.1  
## Jobs, Orders, Other Charges, Offers, Need/Done, Proficiency, and Dual-Code-Base Event Boundaries

## 1. Purpose

This addendum defines the shared object model required to support both:

1. The Founding Operator / Contracting Operations System.
2. The Neutral ClaimStore Market Infrastructure System.

These systems may be separate code bases, but they must share a common language around claims, projects, offers, jobs, orders, other charges, evidence, events, costs, and proficiency.

The purpose is to prevent the contractor operating system from becoming confused with the neutral market record while still allowing contractor-side activity to feed verified events into the ClaimStore protocol.

The key design principle is:

```text
The founding operator may perform the work,
but the neutral platform must preserve the role-based record.
```

---

## 2. Two-Code-Base Object Boundary

### 2.1 Founding Operator / Contractor Code Base

This code base is optimized for:

```text
Selling
Scoping
Estimating
Production
Job costing
Supplements
Payroll
Commissions
Subcontractors
Materials
Equipment
Other charges
Collections
Problem solving
Warranty
Cash flow
```

It may contain company-specific workflows and shortcuts.

It is allowed to be contractor-opinionated.

### 2.2 Neutral Market Infrastructure Code Base

This code base is optimized for:

```text
Entity roles
Independent user consent
Property owner control
Insurance review
Claim request records
Evidence events
Human Blockchain verification
ClaimsBank release conditions
TER/SLA measurement
Audit trail
Market reporting
Sponsor and stakeholder underwriting
```

It must not silently allow the contractor’s internal system to act on behalf of other parties.

### 2.3 Shared Integration Rule

The systems may exchange events, but the neutral platform must classify imported events.

```text
Contractor Internal Event
↓
Integration Adapter
↓
ClaimExpress Protocol Event
↓
Neutral ClaimStore Record
```

The imported event must answer:

```text
Who performed the action?
From which entity?
In what role?
Was this internal-only or shared?
Does it require property owner action?
Does it require insurer action?
Does it create evidence?
Does it create bookkeeping?
Does it trigger ClaimsBank?
Does it affect TER?
```

---

## 3. Object Hierarchy

The core hierarchy is:

```text
Property
↓
ClaimStore Claim
↓
Project
↓
Offer
↓
Jobs
↓
Orders
↓
Other Charges
↓
Tasks
↓
Evidence
↓
Events
↓
Bookkeeping
↓
Proficiency Metrics
```

Not every Property has a Claim.

Not every Claim has a Contractor Project.

Not every Project has an Insurance Claim.

But the model must support all combinations.

---

## 4. Property Object

The Property is the permanent real-world asset.

It exists outside any single claim.

Fields:

```text
Property ID
Owner User ID
Address
Structure Type
Market
County
State
Policy Info
Mortgage Info
Annual Need/Done Status
Pre-Claim File Status
Claim History
Inspection History
Photos
Documents
```

The Property is the anchor for seasonal Need/Done.

---

## 5. Annual / Seasonal Need-Done Object

This object exists outside the claim workflow.

Purpose:

Track whether a property has received its annual inspection, pre-claim documentation, roof review, or readiness check.

Fields:

```text
NeedDone ID
Property ID
Season / Year
Need Type
Need Date
Done Date
Assigned To
Performed By
Evidence
Status
Reset Rule
```

Default annual rule:

```text
Every January 1, annual property inspection status resets to Need.
When completed, status becomes Done.
```

Example statuses:

```text
Need
Scheduled
In Progress
Done
Skipped
Not Applicable
Expired
```

This is important for:

```text
SelfInsurity
Pre-Claim documentation
Supplemental roof protection
Annual inspection programs
Customer retention
Future underwriting
```

---

## 6. ClaimStore Claim Object

The ClaimStore Claim is the neutral transaction container.

Fields:

```text
ClaimStore Claim ID
Property ID
Property Owner ID
Insurance Company ID
Insurance Claim Number
Primary Contractor ID
Primary Project ID
Created By
Created From Event
Date Created
Claim Type
Peril Type
Claim Status
Related Offers
Related Claim Requests
Related Projects
Related Tasks
Related Evidence
Related Payments
Related Supplements
Related Final Paperwork
```

Canonical rule:

```text
The first claim request or claim notice creates the ClaimStore Claim.
All future related requests attach to it.
```

---

## 7. Project Object

The Project is the contractor’s production and accounting container.

Fields:

```text
Project ID
ClaimStore Claim ID
Contractor Company ID
Property Owner ID
Project Number
Project Name
Market
Branch Location
Project Status
Accounting Lock Status
First Offer ID
Current Offer ID
Final Closeout ID
Estimated Selling Price
Final Selling Price
Estimated Cost
Actual Cost
Variance
Jobs
Orders
Other Charges
Payments
Commissions
Referral Fees
```

The Project may originate in the contractor system but becomes visible to the neutral platform only through shared protocol events.

---

## 8. Contractor Offer Object

The Contractor Offer is the complete scope-and-price statement made to the Property Owner.

It can be:

```text
Lump Sum
Line Item
Job-Based
Hybrid
Estimate / Opinion
```

Fields:

```text
Offer ID
Project ID
ClaimStore Claim ID
Created By
Created By Role
Offer Type
Pricing Method
Offer Version
Offer Status
Date Created
Date Shared
Date Accepted
Date Rejected
Property Owner Action Required
Total Selling Price
Estimated Total Cost
Estimated Gross Margin
Jobs Included
Other Charges Included
Equipment Included
Terms
Evidence
Signature
Baseline Flag
Superseded By
```

Important rule:

```text
The first shared offer becomes the First Offer Baseline unless explicitly marked as draft/internal.
```

---

## 9. Offer Version Object

Every material change to an offer should create a new version.

Fields:

```text
Offer Version ID
Offer ID
Version Number
Created By
Created Date
Reason for Revision
Previous Version ID
Total Selling Price
Estimated Total Cost
Scope Change Summary
Supplement Link, if applicable
Status
```

Version types:

```text
Draft
First Shared
Revised
Supplemental
Final
Superseded
Withdrawn
Accepted
```

---

## 10. Job Object

A Job is a trade, phase, or scope category within a Project or Offer.

Fields:

```text
Job ID
Project ID
Offer ID
Job Category
Description
Estimated Selling Price
Final Selling Price
Estimated Material Cost
Estimated Labor Cost
Estimated Turnkey Cost
Estimated Equipment Cost
Estimated Other Charges
Estimated Total Cost
Actual Material Cost
Actual Labor Cost
Actual Turnkey Cost
Actual Equipment Cost
Actual Other Charges
Actual Total Cost
Variance
Status
```

Examples:

```text
Roofing
Siding
Gutters
Painting
Temporary Repairs
Interior Repairs
Water Mitigation
Punch-Out
Warranty
```

Each Job may contain Material Orders, Labor Orders, Turnkey Orders, Equipment Orders, and Other Charges.

---

## 11. Order Object

Orders describe the cost, procurement, assignment, or execution components of a Job.

Order types:

```text
Material Order
Labor Order
Turnkey Order
Equipment Order
Punch Order
Service Order
```

Fields:

```text
Order ID
Job ID
Project ID
Order Type
Vendor / Subcontractor / Provider
Description
Quantity
Unit of Measure
Estimated Unit Cost
Estimated Total Cost
Actual Unit Cost
Actual Total Cost
Selling Price, if customer-facing
Status
Issued Date
Accepted Date
Completed Date
Verified Date
Invoice Status
Payment Status
Evidence Required
Evidence Uploaded
```

---

## 12. Equipment Order Object

Equipment Orders are first-class objects, not miscellaneous notes.

Fields:

```text
Equipment Order ID
Job ID
Project ID
Equipment Type
Provider
Owned / Rented / Subcontracted
Quantity
Unit of Measure
Rental Period
Estimated Cost
Actual Cost
Billable Amount
Delivery Date
Return Date
Evidence
Status
```

Examples:

```text
Dumpster
Lift
Crane
Scaffolding
Generator
Drying equipment
Temporary fencing
Safety equipment
```

---

## 13. Other Charge Object

Other Charges are first-class project/offer components.

Fields:

```text
Other Charge ID
Project ID
Offer ID
Related Job ID, if applicable
Charge Type
Description
Quantity
Unit of Measure
Unit Price
Total Selling Price
Estimated Cost
Actual Cost
Billable / Non-Billable
Required / Optional
Evidence Required
Task Required
Status
```

Examples:

```text
Permit
Trip
Engineering
Inspection Request
Inspection Fee
Notice of Commencement
Measurement Report
Xactimate Estimate
Supplement Processing
Collection Letter
Postage
Documentation Service
Warranty Administration
Dispute Resolution
Mortgage Processing
```

Other Charges may trigger tasks, evidence, bookkeeping, or ClaimsBank conditions.

---

## 14. Florida / Market-Specific Compliance Object

Some markets require additional views or checklists.

The Florida model should be represented as a branch or market setting.

Fields:

```text
Compliance Requirement ID
Branch Location ID
Market
State
Requirement Name
Requirement Type
Need / Done Status
Required Evidence
Due Date
Completed Date
Completed By
Related Project
Related Other Charge
```

Examples:

```text
Notice of Commencement
Permit
Inspection Request
Inspection Pass
Engineering
Final Inspection
```

Branch Location Setting:

```text
Market Compliance View Enabled = Yes / No
```

---

## 15. Need-Done Checklist Object

Need-Done can be used both annually and inside projects.

Fields:

```text
Checklist ID
Checklist Type
Related Property / Project / Job / Claim
Need Item
Status
Required Evidence
Responsible Role
Due Date
Done Date
Done By
Timestamp
```

Checklist types:

```text
Annual Property Readiness
Pre-Claim Inspection
Florida Compliance
Project Closeout
Mortgage Loss Draft
Warranty
Supplement
```

---

## 16. Evidence Object

Evidence attaches to claims, projects, jobs, orders, other charges, tasks, and checklist items.

Fields:

```text
Evidence ID
Evidence Type
Related Object Type
Related Object ID
Uploaded By
Uploaded By Role
Timestamp
Location
File
Description
Checklist Link
Signature Link
Verification Status
Interested / Non-Interested Verifier
```

Evidence types:

```text
Photo
Video
Document
Signature
Measurement Report
Estimate
Invoice
Permit
Inspection Result
Engineering Letter
Completion Form
```

---

## 17. Task Object

Tasks convert required work into assigned action.

Fields:

```text
Task ID
Task Type
Related Claim / Project / Job / Order / Other Charge
Requested By
Assigned To
Assigned Role
Interested / Non-Interested
Status
Created Date
Accepted Date
Scheduled Date
Completed Date
Evidence Required
Evidence Uploaded
SLA Clock
TER Impact
```

Task types:

```text
Inspection
Trip
Measurement
Estimate
Permit Run
Engineering Review
Document Pickup
Photo Documentation
Adjuster Meeting
Supplement Support
Collection Letter
Warranty Visit
Punch-Out
Completion Verification
```

---

## 18. Event Object

Events are the canonical system memory.

Fields:

```text
Event ID
Event Type
Event Category
Actor User ID
Actor Entity ID
Actor Role ID
Related Object Type
Related Object ID
Timestamp
Status Before
Status After
Evidence IDs
Bookkeeping Impact
TER Impact
SLA Impact
ClaimsBank Impact
Source System
Source Event ID
Imported / Native
Reversal Event ID
```

Source System values:

```text
Contractor Operations System
Neutral ClaimStore Platform
ClaimBuddy
ClaimsBank
Admin
External Import
```

---

## 19. Bookkeeping Event Object

Bookkeeping Events are financial consequences of protocol actions.

Fields:

```text
Bookkeeping Event ID
Trigger Event ID
Related Project
Related Job
Related Order
Related Other Charge
Amount
Category
Estimated / Actual
Revenue / Cost / Receivable / Payable / Commission / Referral / Escrow / Reserve
Status
Created Date
Posted Date
Reversed Date
```

Categories:

```text
Estimated Revenue
Actual Revenue
Estimated Cost
Actual Cost
Receivable
Payable
Commission
Referral Fee
Field Service Fee
Transaction Fee
Escrow Requirement
Reserve Requirement
Holdback
Warranty Reserve
```

---

## 20. Proficiency Metric Object

Proficiency measures how close the first scope/estimate/opinion was to the final verified outcome.

Fields:

```text
Proficiency Metric ID
User ID
Entity ID
Role ID
Market
Season
Claim Type
Project Type
Job Type
First Baseline Amount
Final Approved Amount
Final Built Amount
Final Actual Cost
Variance Amount
Variance Percentage
Supplement Count
Supplement Amount
Closeout Time
Evidence Completeness
Dispute Flag
TER Link
```

Applies to:

```text
Licensed Contractor
Independent Sales Rep
Independent Adjuster
Estimator
Field Service Provider
ClaimBuddy
```

---

## 21. Baseline Object

A Baseline preserves a starting point.

Baseline types:

```text
First Offer Baseline
First Estimate Baseline
First IA Opinion Baseline
Locked Project Baseline
Approved Scope Baseline
Final Closeout Baseline
```

Fields:

```text
Baseline ID
Baseline Type
Related Object
Created By
Created Date
Amount
Scope Snapshot
Cost Snapshot
Evidence Snapshot
Version
Locked Flag
```

---

## 22. Variance Object

Variance compares baselines to outcomes.

Fields:

```text
Variance ID
Related Project / Job / Offer / Estimate
Baseline ID
Comparison Target
Baseline Amount
Final Amount
Variance Amount
Variance Percentage
Reason Codes
Supplement Link
Role Responsible / Influencing Role
Calculated Date
```

Reason codes may include:

```text
Hidden Damage
Code Requirement
Missed Scope
Material Price Change
Labor Price Change
Customer Change
Insurance Reclassification
Engineering Requirement
Permit Requirement
Weather Delay
Documentation Error
Estimator Error
Production Change
```

---

## 23. ClaimsBank Readiness Fields

Even before ClaimsBank moves money, objects should include fields that indicate financial release conditions.

Examples:

```text
Escrow Eligible
Reserve Required
Holdback Required
Release Condition Type
Human Verification Required
Property Owner Approval Required
Mortgage Approval Required
Insurance Approval Required
Warranty Reserve Required
Dispute Holdback Required
```

These fields allow Phase 1 to record the future logic without becoming a regulated financial system too soon.

---

## 24. Integration Boundary Rules

When the Founding Operator System sends an event to the Neutral Platform:

1. It must identify source system.
2. It must identify actor and role.
3. It must identify whether the action is internal-only or shared.
4. It must not create property owner consent automatically.
5. It must not create insurer approval automatically.
6. It must not create neutral verification unless evidence rules are satisfied.
7. It may create a pending review event.
8. It may create a contractor-side bookkeeping event.
9. It may create a ClaimExpress protocol event.
10. It may trigger a notification to another party for independent action.

---

## 25. Example Event Translation

### Contractor Internal Event

```text
Sales Rep marks offer accepted in contractor system.
```

Neutral platform interpretation:

```text
Contractor reports offer accepted.
Property owner acceptance still required unless signed evidence exists.
System creates Pending Property Owner Confirmation Event.
If signed document uploaded, system creates Evidence Review Event.
If property owner clicks accept directly, system creates Offer Accepted Event.
```

### Contractor Uploads Invoice

Neutral platform interpretation:

```text
Invoice Uploaded Event
Actual Cost Candidate Created
Bookkeeping Event Pending Verification
If verified by contractor admin, actual cost updates.
If tied to ClaimsBank release, additional verification may be required.
```

### Contractor Marks Work Complete

Neutral platform interpretation:

```text
Contractor Work Complete Event
Completion Verification Required
Property Owner / ClaimBuddy / Field Verifier action required before neutral Completion Verified Event.
```

---

## 26. Canonical Data Flow

```text
Founding Operator Activity
↓
Contractor Internal Event
↓
Shared Object Mapping
↓
ClaimExpress Protocol Event
↓
Evidence / Consent / Bookkeeping Classification
↓
Neutral ClaimStore Record
↓
Human Blockchain Event, if verified
↓
ClaimsBank Condition, if applicable
↓
Quantum Dashboard Metric
↓
TER / SLA Update
```

---

## 27. Working Conclusion

The object model must support both real contractor operations and neutral market infrastructure.

The founding operator can prove the process, but the neutral platform must preserve independent consent, evidence, auditability, and role boundaries.

The shared object model is the bridge.

If these objects are defined correctly, the two code bases can work together without collapsing trust, neutrality, or operating speed.

Next I recommend returning to the original path and creating **Document 4: Human Blockchain / ClaimBuddy Operating Model v0.1**. Now that the objects and event boundaries are clear, that document can define how real-world trips, photos, videos, documents, signatures, inspections, and task completions become verified events.
