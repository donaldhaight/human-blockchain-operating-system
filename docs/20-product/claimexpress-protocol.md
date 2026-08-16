---
id: claimexpress-protocol
title: "ClaimExpress Protocol Specification"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 6869
source_line_end: 8875
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# ClaimExpress Protocol Specification v0.1  
## Claim / Project Workflow, Event, Timestamp, and Bookkeeping Protocol  
### System Engineering Draft

## 1. Purpose

The ClaimExpress Protocol defines how property insurance claims and reconstruction projects move through the ClaimStore market infrastructure.

It is not merely a user interface.

It is the workflow, event, evidence, permission, timestamp, and bookkeeping protocol that allows multiple parties to participate in a common claim/project transaction while acting from their own roles.

The protocol governs:

- Claim creation.
- Lead creation.
- Project creation.
- Offer creation.
- Property owner approval.
- Claim request submission.
- Insurance review.
- Supplemental requests.
- Final paperwork.
- Project verification.
- Closeout.
- Timestamped events.
- Evidence requirements.
- Bookkeeping events.
- Status changes.
- Task records.
- Audit trail.

The protocol exists to answer a practical question:

**What happened, who did it, when did they do it, under what authority, what evidence supports it, and what financial or bookkeeping consequence did it create?**

---

## 2. Core Protocol Principle

The central rule of the ClaimExpress Protocol is:

```text
Every meaningful action in a claim/project workflow creates an event.
Some events only record status.
Some events create timestamps.
Some events create evidence records.
Some events create bookkeeping entries.
Some events trigger permissions.
Some events trigger notifications.
Some events create settlement or payment consequences.
```

In Phase 1, the system must distinguish between:

1. Simple UI clicks.
2. Timestamped workflow events.
3. Evidence events.
4. Consent / approval events.
5. Bookkeeping events.
6. Financial trigger events.
7. Locking events.
8. Notification events.
9. TER / SLA measurement events.

---

## 3. Canonical ClaimStore Claim Rule

The first claim request or claim notice received by the system creates a ClaimStore Claim.

All future requests, notices, tasks, evidence, documents, messages, approvals, supplements, final paperwork, and financial events related to that loss must attach to the same ClaimStore Claim.

The ClaimStore Claim is separate from:

- Insurance company claim number.
- Contractor project number.
- Property owner property file.
- Mortgage company loss draft number.
- Field service task number.
- Supplier order number.
- Internal platform ticket number.

The ClaimStore Claim is the neutral platform transaction container.

---

## 4. Core Transaction Spine

The ClaimExpress Protocol follows this transaction spine:

```text
Damage / Opportunity
↓
Lead / Property / Claim File
↓
Inspection / Documentation
↓
Estimate / Offer
↓
Property Owner Review
↓
Property Owner Acceptance / Rejection / Question
↓
Claim Request Package
↓
Insurance Review
↓
Approval / Rejection / Hold
↓
Buildable Project
↓
Jobs and Job Orders
↓
Production / Field Events
↓
Supplemental Request, if needed
↓
Completion Verification
↓
Final Claim Request / Final Paperwork
↓
Payment / Mortgage / Loss Draft / Settlement Events
↓
Closeout
```

---

## 5. Primary Protocol Objects

The protocol requires these core objects.

### 5.1 ClaimStore Claim

The shared claim transaction container.

Fields:

```text
ClaimStore Claim ID
Property ID
Property Owner User ID
Insurance Company ID
Insurance Claim Number
Contractor Company ID
Primary Project ID
Claim Status
Date Created
Created By
Created From Event
Related Requests
Related Tasks
Related Documents
Related Evidence
Related Financial Events
```

### 5.2 Lead

A potential claim/project opportunity.

Fields:

```text
Lead ID
Source
Referral Source
Property Address
Contact Info
Project Type
Job Type
Estimated Opportunity
Photos
Documents
Lead Status
Assigned Contractor
Assigned Sales Rep
Timestamped Notes
```

### 5.3 Pending Project

A project that is not yet fully sold, approved, buildable, or locked.

Fields:

```text
Pending Project ID
Lead ID
Property ID
Property Owner ID
Contractor ID
Sales Rep ID
Estimated Jobs
Offer Status
Claim Status
Contingency / Authorization Status
```

### 5.4 Project

A contractor-controlled production and accounting file connected to the claim/project transaction.

Fields:

```text
Project ID
ClaimStore Claim ID
Contractor Company ID
Property Owner ID
Project Number
Project Status
Accounting Lock Status
Estimated Selling Price
Estimated Cost
Actual Cost
Variance
Jobs
Job Orders
Payments
Receivables
Commissions
```

### 5.5 Job

A phase or trade category within a project.

Fields:

```text
Job ID
Project ID
Job Category
Estimated Selling Price
Estimated Cost
Actual Selling Price
Actual Cost
Job Status
Related Job Orders
```

### 5.6 Job Order

A material, labor, turnkey, or punch order used to estimate, procure, assign, build, or close a job.

Fields:

```text
Job Order ID
Job ID
Order Type
Vendor / Subcontractor
Estimated Cost
Actual Cost
Status
Assigned To
Required Evidence
Invoice Status
Payment Status
```

### 5.7 Claim Request

A formal package or event requesting review, approval, supplement, final payment, or closure.

Fields:

```text
Claim Request ID
ClaimStore Claim ID
Request Type
Preliminary / Supplemental / Final
Submitted By
Submitted To
Submitted Date
Package Contents
Amount Requested
Status
Review Events
Approval Events
Rejection Events
Hold Events
```

### 5.8 Evidence Event

A record of real-world evidence.

Fields:

```text
Evidence Event ID
Event Type
Related Claim / Project / Job / Task
Uploaded By
Entity Role
Timestamp
Location
Photo / Video / Document / Signature
Checklist
Verification Status
Interested / Non-Interested Verifier
```

### 5.9 Bookkeeping Event

A system event that creates, updates, locks, accrues, invoices, pays, or reconciles a financial or accounting record.

Fields:

```text
Bookkeeping Event ID
Event Type
Related Claim / Project / Job / Order
Created By
Timestamp
Debit / Credit Classification, if applicable
Amount
Revenue Category
Cost Category
Commission Category
Receivable Category
Payable Category
Status Before
Status After
Linked Document
```

---

## 6. Event Categories

The protocol uses event categories to determine consequences.

### 6.1 Navigation Events

Low-consequence events.

Examples:

```text
User viewed dashboard
User opened claim file
User viewed project summary
User viewed document
```

Default effect:

```text
May log access history.
Usually does not create bookkeeping event.
May create timestamped audit entry if document access is legally relevant.
```

### 6.2 Workflow Events

Events that move the claim/project forward.

Examples:

```text
Lead created
Project created
Offer created
Claim request created
Task assigned
Job order created
Final paperwork generated
```

Default effect:

```text
Creates timestamp.
Updates status.
May trigger notification.
May create dashboard update.
May create TER/SLA measurement point.
```

### 6.3 Consent Events

Events where a user approves, accepts, rejects, authorizes, signs, certifies, or verifies.

Examples:

```text
TOS accepted
Member Agreement accepted
Contractor offer accepted
Claim request approved
Completion verified
Dispute sheet signed
Final paperwork approved
```

Default effect:

```text
Creates timestamp.
Records user identity.
Records entity role.
Records agreement version.
Requires audit trail.
May trigger bookkeeping event.
May trigger ClaimsBank release condition.
Cannot be performed by another user without delegated authority.
```

### 6.4 Evidence Events

Events where proof is uploaded or captured.

Examples:

```text
Photo uploaded
Video uploaded
Document uploaded
Signature captured
Inspection completed
Trip verified
Completion evidence uploaded
```

Default effect:

```text
Creates timestamp.
Attaches evidence.
May update task status.
May update TER evidence completeness score.
May satisfy release condition.
```

### 6.5 Bookkeeping Events

Events that affect money, cost, revenue, receivables, payables, commissions, escrow, or reporting.

Examples:

```text
Project locked
Estimated cost saved
Actual cost entered
Invoice generated
Payment recorded
Commission accrued
Referral fee accrued
Field service fee charged
Claim transaction fee created
Escrow holdback created
Loss draft package generated
```

Default effect:

```text
Creates timestamp.
Creates or updates accounting/bookkeeping record.
May lock or freeze related values.
May trigger invoice or receivable.
May update dashboard revenue.
May affect My Money / commissions.
```

### 6.6 Locking Events

Events that preserve a financial or evidentiary snapshot.

Examples:

```text
Project locked
Project unlocked
Offer locked
Claim request package locked
Final paperwork locked
Completion package locked
```

Default effect:

```text
Creates timestamp.
Captures snapshot.
Restricts edits.
Requires permission to unlock.
Creates audit trail if changed later.
May create bookkeeping baseline.
```

### 6.7 Notification Events

Events that notify a user or entity.

Examples:

```text
Offer available
Claim request submitted
Insurance review needed
Task assigned
Evidence missing
Payment due
Final paperwork ready
TER flag issued
```

Default effect:

```text
Creates notification.
May record delivery status.
May trigger SLA clock.
```

### 6.8 TER / SLA Events

Events used to measure performance.

Examples:

```text
Task assigned
Task accepted
Task started
Task completed
Call returned
Inspection completed
Evidence uploaded
Issue corrected
Punch item resolved
```

Default effect:

```text
Creates timestamp.
Updates SLA clock.
Updates TER metrics.
May trigger flag if late or incomplete.
```

---

## 7. Click Classification Model

Not every click matters equally.

The UI must classify clicks.

### 7.1 Class A Click - Navigation

Examples:

```text
Open file
View dashboard
Expand panel
Search
Filter
Sort
```

System effect:

```text
Optional access log.
No status change.
No bookkeeping event.
```

### 7.2 Class B Click - Timestamped Action

Examples:

```text
Add note
Change lead status
Send invite
Assign task
Mark task accepted
Mark appointment complete
Submit support ticket
```

System effect:

```text
Creates timestamped workflow event.
May trigger notification.
May start/stop SLA clock.
```

### 7.3 Class C Click - Evidence / Verification Action

Examples:

```text
Upload photo
Upload video
Capture signature
Complete checklist
Verify trip
Verify completion
```

System effect:

```text
Creates evidence event.
Creates timestamp.
May update Human Blockchain record.
May affect TER.
May satisfy payment/release condition.
```

### 7.4 Class D Click - Consent / Approval Action

Examples:

```text
Accept TOS
Accept Member Agreement
Accept contractor offer
Approve claim request
Reject claim request
Hold for review
Approve final paperwork
Approve completion
```

System effect:

```text
Creates legally significant event.
Requires user attribution.
Requires role attribution.
Requires agreement version if relevant.
Creates immutable audit entry.
May trigger bookkeeping event.
May trigger financial release condition.
```

### 7.5 Class E Click - Bookkeeping Action

Examples:

```text
Lock project
Generate invoice
Record payment
Create receivable
Approve commission
Create referral fee
Charge transaction fee
Create escrow event
Release holdback
```

System effect:

```text
Creates bookkeeping event.
Creates timestamp.
Updates ledger/accounting records.
May update revenue dashboard.
May update My Money.
May lock amounts.
```

### 7.6 Class F Click - Protocol Transition

Examples:

```text
Convert lead to pending project
Convert pending project to project
Submit preliminary claim request
Submit supplemental claim request
Submit final claim request
Mark project buildable
Close project
Close claim
```

System effect:

```text
Creates workflow transition.
Creates timestamp.
Updates status.
May create bookkeeping event.
May create snapshot.
May trigger notifications.
May update dashboard.
```

---

## 8. Status Model

### 8.1 Lead Status

```text
New
Assigned
Contacted
Appointment Scheduled
Inspected
Qualified
Unqualified
Converted to Pending Project
Converted to Project
Lost
Archived
```

### 8.2 Pending Project Status

```text
Created
Awaiting Inspection
Awaiting Offer
Offer Drafted
Offer Shared
Awaiting Property Owner Review
Accepted
Rejected
On Hold
Converted to Project
Archived
```

### 8.3 Project Status

```text
Created
Estimated
Offer Pending
Accepted
Claim Request Pending
Awaiting Insurance Review
Approved / Buildable
Partially Approved
Supplement Needed
In Production
Punch / Troubleshooting
Completion Pending
Final Paperwork Pending
Payment Pending
Closed
Cancelled
Disputed
```

### 8.4 ClaimStore Claim Status

```text
Created
Documentation Gathering
Preliminary Request Submitted
Insurance Review
Approved
Rejected
Held for Review
Supplemental Request Pending
Supplemental Request Submitted
Buildable
In Production
Completion Review
Final Request Submitted
Payment / Loss Draft Pending
Closed
Disputed
Archived
```

### 8.5 Claim Request Status

```text
Draft
Submitted
Viewed
Approved
Rejected
Held for Review
More Information Requested
Supplement Required
Superseded
Closed
```

### 8.6 Job Order Status

```text
Draft
Issued
Accepted
Scheduled
In Progress
Completed
Evidence Required
Verified
Invoiced
Paid
Cancelled
Disputed
```

### 8.7 Field Service Task Status

```text
Requested
Assigned
Accepted
Scheduled
En Route
On Site
Evidence Captured
Submitted
Verified
Returned for More Info
Completed
Cancelled
Disputed
```

---

## 9. Claim Request Types

### 9.1 Preliminary Claim Request

Purpose:

Initial claim/project review request.

Common use:

- Contractor or property owner submits initial documentation.
- Insurance company reviews early project scope.
- Used before full build authorization.

May include:

```text
Property info
Policy info
Claim info
Damage photos
Estimate
Contractor offer
Property owner authorization
Inspection notes
Measurement report
```

### 9.2 Supplemental Claim Request

Purpose:

Request additional payment, scope, or approval after new information, damage, code requirements, price changes, or missing items are discovered.

May include:

```text
Original approved amount
New scope item
Reason for supplement
Photos / video
Estimate revision
Change order
Contractor note
Property owner acknowledgement
```

### 9.3 Final Claim Request

Purpose:

Request claim closeout, recoverable depreciation, final insurance payment, mortgage release, or completion acknowledgement.

May include:

```text
Final invoice
Completion photos
Property owner completion approval
Contractor warranty documents
Lien waiver / no lien documentation
Mortgage inspection documents
Final statement of claim
Payment summary
```

---

## 10. Protocol Transitions and Event Effects

### 10.1 Lead Created

Trigger:

```text
Property owner creates request
Contractor enters lead
Referral partner submits lead
Site captures lead
Insurance company creates claim opportunity
```

Events created:

```text
Lead Created Event
Timestamp
Source Record
Notification to assigned role
```

Bookkeeping effect:

```text
None by default.
Potential referral source tracking begins.
```

### 10.2 Lead Converted to Project

Trigger:

```text
Contractor decides lead is active project opportunity.
```

Events created:

```text
Lead Converted Event
Pending Project or Project Created Event
Timestamp
Project Number Assigned
```

Bookkeeping effect:

```text
Project accounting shell created.
Referral fee may become pending if source is commissionable.
```

### 10.3 Project ID Assigned

Trigger:

```text
Contractor creates project number.
```

Events created:

```text
Project ID Assigned Event
Timestamp
```

Bookkeeping effect:

```text
Project becomes available for job costing.
Estimated revenue/cost fields become active.
```

### 10.4 Project Locked

Trigger:

```text
Contractor locks project for accounting, offer, claim request, or production control.
```

Events created:

```text
Project Locked Event
Timestamp
Snapshot of estimate / jobs / costs / offer
```

Bookkeeping effect:

```text
Estimated selling price and estimated costs become baseline.
Variance tracking begins.
Edits require unlock event.
```

### 10.5 Offer Created

Trigger:

```text
Contractor creates offer to property owner.
```

Events created:

```text
Offer Created Event
Timestamp
Offer Version
```

Bookkeeping effect:

```text
Estimated selling price may update.
No receivable yet unless accepted/contracted.
```

### 10.6 Offer Shared

Trigger:

```text
Contractor makes offer available to property owner.
```

Events created:

```text
Offer Shared Event
Timestamp
Notification to property owner
```

Bookkeeping effect:

```text
No receivable yet.
Sales pipeline value may update.
```

### 10.7 Offer Accepted by Property Owner

Trigger:

```text
Property owner clicks accept or signs offer/authorization.
```

Events created:

```text
Offer Accepted Event
Timestamp
User attribution
Agreement / contract version
Signature, if required
```

Bookkeeping effect:

```text
Project status becomes accepted.
Contract value may become committed revenue.
Receivable may be created depending on accounting rules.
Referral fee may become contingent.
Commission may become pending.
Claim request package can be generated.
```

### 10.8 Preliminary Claim Request Submitted

Trigger:

```text
Property owner or authorized workflow submits claim request package.
```

Events created:

```text
Preliminary Claim Request Submitted Event
Timestamp
Package Snapshot
Notification to insurance reviewer
```

Bookkeeping effect:

```text
Claim transaction fee may be created.
Documentation fee may be created.
ClaimStore Claim created if first request.
```

### 10.9 Insurance Company Approves

Trigger:

```text
Insurance user clicks approve or approval is recorded from external documentation.
```

Events created:

```text
Claim Request Approved Event
Timestamp
Reviewer attribution
Approval amount
Approval notes
```

Bookkeeping effect:

```text
Approved amount recorded.
Project may become buildable.
Expected receivable may update.
Commission may move from pending to earned status depending on rules.
Referral fee may move to accrued or conditional accrued status.
ClaimsBank release condition may be satisfied.
```

### 10.10 Insurance Company Rejects

Trigger:

```text
Insurance user rejects request or rejection is recorded from external documentation.
```

Events created:

```text
Claim Request Rejected Event
Timestamp
Reviewer attribution
Reason code
```

Bookkeeping effect:

```text
No approval receivable created.
Dispute/supplement pathway may open.
Expected revenue may be revised.
```

### 10.11 Insurance Company Holds for Review

Trigger:

```text
Insurance user places request on hold or hold is recorded from external communication.
```

Events created:

```text
Claim Request Held Event
Timestamp
Reviewer attribution
Reason / missing information
```

Bookkeeping effect:

```text
SLA clock begins or pauses based on rules.
No new receivable unless prior approval exists.
```

### 10.12 Job Order Created

Trigger:

```text
Contractor creates material, labor, turnkey, or punch order.
```

Events created:

```text
Job Order Created Event
Timestamp
Order Type
Assigned Vendor/Subcontractor
```

Bookkeeping effect:

```text
Estimated cost created or updated.
Purchase/work order liability may be anticipated.
Job cost budget updates.
```

### 10.13 Job Order Verified

Trigger:

```text
Work, material, or service order is verified by evidence or approval.
```

Events created:

```text
Job Order Verified Event
Timestamp
Evidence attachments
Verifier attribution
```

Bookkeeping effect:

```text
Actual cost can be recognized.
Payable may be approved.
Variance updates.
```

### 10.14 Payment Recorded

Trigger:

```text
Payment received or entered.
```

Events created:

```text
Payment Recorded Event
Timestamp
Payment Source
Amount
Related invoice / receivable
```

Bookkeeping effect:

```text
Receivable reduced.
Cash/payment record created.
Commission eligibility may update.
Referral fee eligibility may update.
ClaimsBank record may update.
```

### 10.15 Completion Verified

Trigger:

```text
Property owner, ClaimBuddy, field verifier, or authorized party verifies completion.
```

Events created:

```text
Completion Verified Event
Timestamp
Verifier attribution
Photos / documents / signature
```

Bookkeeping effect:

```text
Final invoice may be generated.
Final claim request may be enabled.
Recoverable depreciation request may be triggered.
Mortgage release package may be triggered.
Holdback release condition may be satisfied.
```

### 10.16 Final Claim Request Submitted

Trigger:

```text
Final paperwork is submitted for payment/closeout.
```

Events created:

```text
Final Claim Request Submitted Event
Timestamp
Package Snapshot
```

Bookkeeping effect:

```text
Final receivable created or updated.
Transaction fee may be created.
Escrow/loss draft event may be updated.
Closeout clock begins.
```

### 10.17 Claim / Project Closed

Trigger:

```text
All required work, evidence, payments, signatures, and closeout conditions are satisfied.
```

Events created:

```text
Claim Closed Event
Project Closed Event
Timestamp
Closing Package Snapshot
```

Bookkeeping effect:

```text
Project closed to further ordinary edits.
Final revenue/cost variance calculated.
Commissions finalized.
Referral fees finalized.
TER/SLA records finalized.
Dashboard realized revenue updated.
```

---

## 11. Bookkeeping Event Rules

### 11.1 Bookkeeping Events Must Be Deterministic

A click should not silently create financial consequences unless the rule is defined.

Each bookkeeping event must specify:

```text
Trigger
Amount Source
Account / Category
Timing
Reversal Rule
Permission Required
Related Object
Audit Record
```

### 11.2 Estimated vs. Actual

The system must separate:

```text
Estimated Selling Price
Actual Selling Price
Estimated Cost
Actual Cost
Variance
```

Estimated values are planning values.

Actual values are verified or entered transaction values.

Variance is created when actual values differ from locked estimates.

### 11.3 Lock / Unlock

Locking creates a baseline.

Unlocking must require:

```text
Permission
Reason
Timestamp
User attribution
Before / after snapshot
```

### 11.4 Commission Events

Commission should not be a single event.

It should move through statuses:

```text
Potential
Pending
Earned
Payable
Paid
Reversed
Disputed
```

Possible triggers:

```text
Lead assigned
Offer accepted
Project approved
Payment received
Project closed
```

### 11.5 Referral Fee Events

Referral fee should move through statuses:

```text
Tracked
Eligible
Accrued
Invoiced
Collected
Paid / Shared
Reversed
Disputed
```

Possible triggers:

```text
Lead source captured
Lead converted
Project accepted
Payment received
Project closed
```

### 11.6 Field Service Fee Events

Field service fee should move through statuses:

```text
Requested
Authorized
Assigned
Completed
Verified
Billable
Invoiced
Paid
```

### 11.7 Claim Transaction Fee Events

Transaction fee may be triggered by:

```text
Claim file created
Claim request submitted
Supplemental request submitted
Final request submitted
Project processed
```

The exact Phase 1 pricing rule must be configured as a virtual item.

---

## 12. Event Ledger Requirements

The protocol requires an event ledger.

This is not necessarily a blockchain at Phase 1.

It is an append-only event history.

Each event should include:

```text
Event ID
Event Category
Event Type
Actor User ID
Actor Entity ID
Actor Role ID
Target Object Type
Target Object ID
Timestamp
Status Before
Status After
Evidence IDs
Document IDs
Financial Impact Flag
Bookkeeping Event ID, if applicable
Notification IDs
Agreement Version
Source IP / Device, if appropriate
System Generated / User Generated
Reversal Event ID, if applicable
```

Events should not be deleted.

Corrections should be made through reversal, amendment, or superseding events.

---

## 13. Human Blockchain Event Requirements

Certain protocol events become Human Blockchain events when they represent verified real-world activity.

Examples:

```text
Trip Verified
Inspection Completed
Document Picked Up
Signature Captured
Material Delivered
Work Completed
Punch Item Resolved
Completion Verified
Mortgage Inspection Completed
Dispute Meeting Attended
```

Human Blockchain events should include:

```text
Who verified
What was verified
When verified
Where verified
How verified
Evidence attached
Whether verifier was interested or non-interested
What task or payment condition it satisfied
```

These events may later become ClaimsBank release conditions.

---

## 14. ClaimsBank Trigger Requirements

The protocol should identify financial trigger events even before full ClaimsBank functionality exists.

Potential ClaimsBank triggers:

```text
Offer Accepted
Claim Request Approved
Project Buildable
Job Order Verified
Completion Verified
Final Claim Request Submitted
Mortgage Signoff Received
Payment Recorded
Dispute Holdback Created
Warranty Reserve Created
```

Each trigger should specify:

```text
Does this create escrow?
Does this release escrow?
Does this create holdback?
Does this release holdback?
Does this create receivable?
Does this require human verification?
Does this require property owner approval?
Does this require mortgage review?
```

Phase 1 may only record these events without moving funds.

---

## 15. No User Clicks for Another User

This rule applies across the protocol.

A contractor cannot accept an offer for a property owner.

A platform admin cannot approve a claim request for an insurer.

An insurer cannot verify completion for a property owner.

A ClaimBuddy cannot sign for a property owner unless a delegated-authority workflow exists.

A sales rep cannot accept a Member Agreement for a contractor company unless authorized by company role.

A system admin cannot silently consent to a legal agreement for any user.

Delegated authority must be explicit, limited, auditable, and revocable.

---

## 16. Minimum Protocol Permissions

### 16.1 Property Owner

Can:

```text
Create property file
Upload property evidence
Accept / reject contractor offer
Submit or authorize claim request
Approve completion
View claim/project status
Download documents
Request help
```

Cannot:

```text
Approve insurance review
Edit contractor job costs
Approve contractor commissions
Approve another property owner’s claim
```

### 16.2 Contractor Admin

Can:

```text
Create company location
Create users
Assign contractor roles
Create leads
Create projects
Create jobs/job orders
Create offers
Submit contractor-side documentation
Generate final paperwork
Manage pay plans
Record contractor-side payments/costs
```

Cannot:

```text
Accept property owner offer for property owner
Approve insurer review
Impersonate ClaimBuddy verification unless performing that role with disclosure
```

### 16.3 Sales Rep / ISR

Can:

```text
Manage assigned leads
Add notes
Upload photos
Schedule appointments
Create preliminary project data
View commission status
```

Cannot by default:

```text
Lock project accounting
Approve final paperwork
Modify company settings
Approve property owner consent
```

### 16.4 Insurance Reviewer

Can:

```text
View claim requests
Approve
Reject
Hold for review
Request more information
Download package
Add review notes
```

Cannot:

```text
Edit contractor project accounting
Accept contractor offer for property owner
Verify contractor completion for property owner
```

### 16.5 ClaimBuddy / Field Verifier

Can:

```text
Accept assigned task
Upload evidence
Capture signature
Complete checklist
Verify trip/task
Close task
```

Cannot:

```text
Approve claim request unless separately authorized
Accept offer for property owner
Edit contractor financials
Release funds
```

### 16.6 Platform Admin

Can:

```text
Manage users/entities/roles
Configure workflow
Configure virtual items
Support users
View audit logs according to policy
Correct system errors through auditable process
```

Cannot:

```text
Secretly approve, accept, sign, or waive user rights
Erase event history
Create legal consent for another user
```

---

## 17. Document Package Requirements

The protocol must generate document packages.

### 17.1 Preliminary Package

May include:

```text
Property info
Policy info
Claim info
Damage photos
Initial estimate
Contractor offer
Property owner authorization
Inspection notes
Measurement report
```

### 17.2 Supplemental Package

May include:

```text
Original scope
Approved amount
New scope item
Reason for supplement
Photos/video
Estimate revision
Change order
Code requirement
Material/labor variance
Property owner acknowledgement
```

### 17.3 Final Package

May include:

```text
Final invoice
Completion photos
Completion signature
Statement of Completion
Warranty documentation
Lien waiver / no-lien documentation
Mortgage package
Payment summary
Final Statement of Claim
```

Each package should have:

```text
Package ID
Version
Created By
Created Date
Included Documents
Included Evidence
Included Events
Locked Snapshot
Delivery History
```

---

## 18. Notification and SLA Clocks

Certain protocol events start SLA clocks.

Examples:

```text
Lead assigned → contractor response clock
Issue reported → communication response clock
Task assigned → task acceptance clock
Task accepted → task completion clock
Claim request submitted → review clock
Evidence requested → evidence upload clock
Punch item created → correction clock
```

The system should track:

```text
Start time
Expected response/completion time
Actual response/completion time
On-time / late
Reason for delay
TER effect
Escalation status
```

---

## 19. Protocol Audit Rules

The protocol must preserve a complete audit history.

Audit rules:

1. Events are append-only.
2. Deletions should be prohibited or heavily restricted.
3. Corrections should create correction events.
4. Financial corrections should create reversal/amendment events.
5. Legal consent events should never be overwritten.
6. Evidence should be versioned or superseded, not silently replaced.
7. Package snapshots should remain available after submission.
8. Every approval must show who approved, when, and from what role.
9. Every bookkeeping event must show the triggering event.
10. Every ClaimsBank release condition should trace back to verified events.

---

## 20. Phase 1 Minimum Protocol Build

Phase 1 should implement the following minimum events:

```text
User Created
TOS Accepted
Entity Created
Role Assigned
Contractor Company Created
Property Created
Lead Created
Lead Status Changed
Lead Converted
Project Created
Project ID Assigned
Project Locked
Offer Created
Offer Shared
Offer Accepted
ClaimStore Claim Created
Preliminary Claim Request Created
Preliminary Claim Request Submitted
Insurance Review Status Changed
Photo Uploaded
Document Uploaded
Signature Captured
Task Created
Task Assigned
Task Completed
Job Created
Job Order Created
Payment Recorded
Completion Verified
Final Paperwork Generated
Project Closed
```

Phase 1 minimum bookkeeping events:

```text
Project Accounting Shell Created
Estimated Selling Price Saved
Estimated Cost Saved
Project Locked Baseline Created
Referral Fee Tracked
Commission Pending
Field Service Fee Billable
Transaction Fee Billable
Payment Recorded
Receivable Updated
Project Final Variance Calculated
```

---

## 21. Phase 1 Deferred Protocol Features

The following should be designed for but deferred:

```text
Full carrier claims-system integration
Full mortgage loss draft API
Full escrow fund movement
Token ledger
Multi-party arbitration workflow
Automated supplier ordering
Automated subcontractor payroll
Advanced AI claim review
Public adjuster workflow
Attorney workflow
Full affiliate event routing
Full mobile GPS dispatch
```

---

## 22. Protocol Success Test

The protocol works if the system can answer:

```text
Who created the claim?
Who owns the property file?
Who created the offer?
Who accepted the offer?
When was it accepted?
What evidence existed at acceptance?
When was the claim request submitted?
Who reviewed it?
Was it approved, rejected, or held?
What changed after approval?
What jobs were created?
What costs were estimated?
What costs became actual?
Who verified completion?
What final paperwork was produced?
What payments were recorded?
What commissions/referral fees were triggered?
What remains open?
Who is below SLA?
What does the dashboard show?
```

If the system can answer those questions, ClaimExpress is functioning as a protocol.

---

## 23. Working Conclusion

ClaimExpress is the transaction protocol for ClaimStore.

Its power comes from treating claim/project actions as structured events.

A click is not just a click when it changes status, creates evidence, triggers bookkeeping, starts an SLA clock, or records consent.

The system must therefore be designed as:

```text
Role
↓
Permission
↓
Action
↓
Event
↓
Timestamp
↓
Evidence
↓
Status Change
↓
Bookkeeping Consequence
↓
Dashboard Update
↓
Audit Trail
```

That is the foundation of ClaimStore, Human Blockchain, ClaimsBank, TER, and the Quantum Dashboard.

Next I recommend **Document 4: Human Blockchain / ClaimBuddy Operating Model v0.1**, because it will define how offline human actions become trusted system events - including trips, evidence, interested vs. non-interested verifiers, task dispatch, TER impact, and future ClaimsBank release conditions.
