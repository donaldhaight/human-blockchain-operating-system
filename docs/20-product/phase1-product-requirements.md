---
id: phase1-prd
title: "Phase 1 Product Requirements Document"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 18055
source_line_end: 19750
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# Phase 1 Product Requirements Document v0.1  
## ClaimStore / ClaimExpress / ClaimBuddy / Kimosabe Season 1 Build Scope  
### From Historical Vision to Executable Market Infrastructure

## 1. Purpose

This Product Requirements Document defines the first buildable version of the ClaimStore ecosystem.

The purpose of Phase 1 is not to build the entire national insurance restoration infrastructure.

The purpose is to prove the core transaction.

The core transaction is:

```text
A property damage opportunity becomes a documented claim/project file.
A contractor creates a structured offer.
The property owner controls their own approval.
A claim request is generated.
The insurance-side decision path is recorded.
Field evidence is captured.
Jobs, orders, other charges, and costs are tracked.
Completion is verified.
Final paperwork is generated.
Bookkeeping events are recorded.
Performance is measured.
The dashboard can underwrite the market.
```

Phase 1 must prove that ClaimStore can function as neutral market infrastructure while being launched through a controlled founding-operator environment.

---

## 2. Product Thesis

Phase 1 should be:

```text
Contractor-first
Property-owner-enabled
Claim-request-centered
Evidence-backed
Role-based
Event-driven
Bookkeeping-aware
Dashboard-observable
Founding-operator-supported
Neutral-platform-ready
```

The first product must help a real contractor operation sell, document, build, close, and collect claim-related projects.

At the same time, it must preserve the long-term neutral platform rules:

```text
No user clicks OK for another user.
Every meaningful action creates an event.
Certain clicks create timestamps.
Certain clicks create bookkeeping events.
Certain clicks create consent events.
Certain clicks create Human Blockchain verification events.
Entity Role is not the same as Designation.
The first offer matters.
The final closeout matters.
The variance becomes intelligence.
```

---

## 3. Phase 1 Strategic Frame

Phase 1 is the **George Washington rollout**.

The founding operator crosses first.

The market does not yet fully understand neutral market infrastructure, so the founding contractor operation helps create trust by standing behind the work, proving the process, and absorbing early operating risk.

The system must therefore support two realities:

```text
1. Founding Operator / Contractor Operations System
2. Neutral ClaimStore Market Infrastructure System
```

The first can move fast.

The second must preserve role boundaries, consent, evidence, auditability, and neutrality.

Phase 1 should be designed so the founding operator can prove the workflow without corrupting the neutral market record.

---

## 4. Phase 1 Success Standard

Phase 1 succeeds if the system can support this end-to-end flow:

```text
User enters through website
↓
Creates account / profile
↓
Accepts Terms
↓
Selects or is assigned role
↓
Property or lead is created
↓
Contractor creates project / offer
↓
Offer includes jobs, orders, equipment, and other charges
↓
Property owner reviews and accepts from their own account
↓
ClaimStore Claim is created
↓
Claim Request package is submitted
↓
Claim Caller / insurance response is recorded
↓
Field task or ClaimBuddy verification captures evidence
↓
Jobs and job orders are completed
↓
Completion is verified
↓
Final paperwork is generated
↓
Payment / receivable / commission / referral / transaction events are recorded
↓
TER and proficiency metrics update
↓
Quantum Dashboard shows market, performance, and revenue indicators
```

A simpler success statement:

**A contractor can use the system to turn a claim-related opportunity into a documented, accepted, built, verified, and financially tracked project while the property owner retains control of their own claim file and approvals.**

---

## 5. Phase 1 User Groups

Phase 1 must support the following user groups.

### 5.1 Platform Admin

Manages the platform, entity types, roles, permissions, markets, content, virtual items, support, dashboards, and configuration.

### 5.2 Contractor Admin

Manages contractor company profile, branch locations, users, roles, leads, projects, offers, jobs, job orders, costs, payments, pay plans, and reporting.

### 5.3 Contractor Sales Rep / ISR

Manages assigned leads, inspections, notes, photos, appointments, offer support, property owner communication, and commission visibility.

### 5.4 Property Owner

Creates property file, uploads documents, reviews offers, accepts/rejects/questions offers, approves completion, and controls their own claim-related actions.

### 5.5 ClaimBuddy / Field Verifier

Accepts tasks, captures evidence, completes checklists, captures signatures, and creates verified field events.

### 5.6 Insurance-Side User

May view claim request, record decision, approve, approve partial, approve with adjustments, deny, hold, request more information, or be recorded externally.

### 5.7 Claim Caller

A designation, not merely a role. The Claim Caller is responsible for making or recording the insurance-side determination on a specific claim request.

### 5.8 Platform Support

Assists users, routes issues, explains workflow, and supports operations without clicking, signing, approving, or consenting for another user.

---

## 6. Phase 1 Core Modules

Phase 1 should include these modules.

```text
Identity and Profile
Entity / Role / Designation
Platform Admin
Contractor Operations
Property Owner Claim File
ClaimExpress Protocol
Offer Builder
Jobs / Orders / Other Charges
Evidence and Documents
ClaimBuddy / Field Tasks
Insurance Determination / Claim Caller
Bookkeeping Events
TER / Proficiency
Quantum Dashboard v0.1
Support / Knowledge Base
Virtual Items / Revenue Events
```

---

## 7. Identity and Profile Requirements

The system must allow users to create accounts and profiles.

Required features:

```text
Create user account
Accept Terms of Service
Track agreement version
Create profile
Assign entity type
Assign entity role
Assign designation where applicable
Manage contact information
Track certification status
Track role activation
```

Every user action must be attributable.

Minimum identity fields:

```text
User ID
Name
Email
Phone
Profile Type
Entity ID
Entity Role
Active Designations
Agreement Acceptances
Certification Status
Created Date
Status
```

---

## 8. Entity / Role / Designation Requirements

The system must support both roles and designations.

### 8.1 Entity Role

Entity Role defines general permissions.

Examples:

```text
Property Owner
Contractor Admin
Sales Rep
ISR
ClaimBuddy
Field Service Provider
Insurance Admin
Claim Manager
Independent Adjuster
Platform Support
Platform Admin
```

### 8.2 Designation

Designation defines responsibility on a specific claim, project, task, request, or decision.

Minimum Phase 1 designations:

```text
Claim Caller
Assigned Adjuster
Field Inspector
Offer Owner
Project Lead
Completion Verifier
ClaimBuddy Verifier
Support Owner
```

### 8.3 Requirement

Every major event should record:

```text
User
Entity
Entity Role
Designation, if applicable
Timestamp
Related Object
Action
Authority Source, if applicable
```

---

## 9. Platform Admin Requirements

Platform Admin must manage:

```text
Entity types
Entity roles
Designations
States
Markets
Branch settings
Project categories
Job categories
Order types
Other charge types
Units of measure
Virtual items
Revenue categories
Content
Announcements
Support categories
User permissions
Workflow settings
TER settings
Dashboard filters
```

Admin must not be allowed to silently approve, accept, sign, or consent for other users.

Admin corrections must create auditable correction events.

---

## 10. Contractor Company Requirements

Contractor Admin must be able to:

```text
Create contractor company
Create branch location
Select market
Add users
Assign roles
Assign pay plans
Configure branch settings
Enable market-specific compliance views
Create leads
Create projects
Create offers
Create jobs
Create job orders
Add other charges
Track costs
Track payments
View reports
```

Branch settings should support:

```text
State
Market
Permit required
Notice of Commencement required
Inspection required
Engineering required
Mortgage package required
Florida compliance view enabled
Annual Need/Done enabled
Need/Done checklist enabled
```

---

## 11. Property Owner Requirements

Property Owner must be able to:

```text
Create property profile
Enter property address
Upload photos and documents
Enter policy information
Enter mortgage information
View contractor offer
Accept offer
Reject offer
Ask question / request change
Authorize claim request
View claim/project status
Approve completion
Download documents
Request help
```

Property Owner actions must be user-directed.

A contractor, admin, ClaimBuddy, or platform user cannot accept an offer or approve completion on behalf of the Property Owner without explicit delegated authority.

---

## 12. Lead Requirements

The system must allow creation and management of Leads.

Lead sources may include:

```text
Property owner
Contractor
Sales rep
Website
Referral
Platform admin
Partner
External import
```

Lead fields:

```text
Lead ID
Source
Property address
Contact information
Project type
Claim type
Notes
Photos
Assigned contractor
Assigned sales rep
Status
Created date
```

Lead statuses:

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

Lead conversion should create timestamped workflow events.

If referral fees may apply, Lead Source should begin referral tracking.

---

## 13. Project Requirements

The Project is the contractor production and accounting container.

Project fields:

```text
Project ID
ClaimStore Claim ID
Contractor Company ID
Property Owner ID
Project Number
Branch Location
Market
Project Status
Accounting Lock Status
First Offer ID
Current Offer ID
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

Project statuses:

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

---

## 14. Contractor Offer Requirements

The Contractor Offer is the complete scope-and-price statement.

The system must support:

```text
Lump Sum Offer
Line Item Offer
Job-Based Offer
Hybrid Offer
Estimate / Opinion
```

Offer must include:

```text
Offer ID
Project ID
ClaimStore Claim ID
Created By
Offer Owner designation
Pricing method
Offer version
Jobs included
Other charges included
Equipment included
Total selling price
Estimated total cost
Estimated gross margin
Terms
Evidence
Status
```

Offer statuses:

```text
Draft
First Shared
Viewed
Accepted
Rejected
Questioned
Revised
Superseded
Withdrawn
Converted to Claim Request
```

Important rule:

```text
The first shared offer becomes the First Offer Baseline unless explicitly marked as draft/internal.
```

---

## 15. Jobs / Orders / Other Charges Requirements

Each Project or Offer may contain Jobs.

Each Job may contain:

```text
Material Orders
Labor Orders
Turnkey Orders
Equipment Orders
Other Charges
```

### 15.1 Job Fields

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
Actual Material Cost
Actual Labor Cost
Actual Turnkey Cost
Actual Equipment Cost
Actual Other Charges
Variance
Status
```

### 15.2 Order Types

```text
Material Order
Labor Order
Turnkey Order
Equipment Order
Punch Order
Service Order
```

### 15.3 Other Charges

Other Charges must be first-class line items.

Examples:

```text
Permits
Trips
Engineering
Inspection fees
Notice of Commencement
Measurement reports
Xactimate estimates
Supplement processing
Collection letters
Postage
Documentation services
Warranty administration
Dispute resolution
Mortgage processing
```

Other Charges may create:

```text
Task
Timestamp
Bookkeeping event
Invoice line
Receivable
Payable
Evidence requirement
ClaimsBank condition
```

---

## 16. ClaimStore Claim Requirements

The ClaimStore Claim is the neutral transaction container.

Canonical rule:

```text
The first claim request or claim notice received by the system creates a ClaimStore Claim.
All future related requests, notices, documents, tasks, events, and decisions attach to it.
```

ClaimStore Claim fields:

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
Claim Type
Peril Type
Claim Status
Related Offers
Related Claim Requests
Related Tasks
Related Evidence
Related Decisions
Related Payments
```

Claim statuses:

```text
Created
Documentation Gathering
Preliminary Request Submitted
Insurance Review
Approved
Approved Partial
Approved with Adjustments
Denied
Held for Review
More Information Requested
Supplemental Request Pending
Buildable
In Production
Completion Review
Final Request Submitted
Payment / Loss Draft Pending
Closed
Disputed
Archived
```

---

## 17. Claim Request Requirements

The system must support three claim request types:

```text
Preliminary Claim Request
Supplemental Claim Request
Final Claim Request
```

Each Claim Request must include:

```text
Claim Request ID
ClaimStore Claim ID
Request Type
Submitted By
Submitted To
Submitted Date
Package Contents
Amount Requested
Status
Evidence Reviewed
Decision Record
```

Claim Request statuses:

```text
Draft
Submitted
Delivered
Viewed
Assigned to Claim Caller
Under Review
More Information Requested
Reinspection Requested
Approved
Approved Partial
Approved with Adjustments
Denied
Held for Review
Escalated
Superseded
Closed
```

Package snapshots should be locked when submitted.

---

## 18. Insurance Determination / Claim Caller Requirements

The system must support Claim Caller designation.

The Claim Caller is the assigned person or authority responsible for making or recording the insurance-side determination.

Minimum Claim Caller fields:

```text
Claim Caller User / Name
Claim Caller Entity
Claim Caller Entity Role
Claim Caller Designation
Authority Source
Assigned Date
Decision Date
Decision Type
Decision Amount
Reason / Notes
External or Platform-Recorded Flag
```

Decision types:

```text
Approve
Approve Partial
Approve with Adjustments
Deny
Hold for Review
Request More Information
Request Reinspection
Escalate
Supersede Prior Determination
Close Review
```

If no Claim Caller is identified, the system should record:

```text
Claim Caller Not Identified
Authority Source Unknown / Not Provided
External Determination Recorded, if applicable
```

This is an accountability and transparency feature.

---

## 19. Evidence and Document Requirements

The system must support uploads and evidence records.

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

Every evidence record should include:

```text
Evidence ID
Evidence Type
Related Object Type
Related Object ID
Uploaded By
Uploaded By Role
Designation, if applicable
Timestamp
Location, if applicable
Verification Status
Interested / Non-Interested Flag
```

No verified event should be created without required evidence.

---

## 20. ClaimBuddy / Field Task Requirements

The system must support basic ClaimBuddy / Field Task workflows.

Task types:

```text
Property Inspection
Damage Documentation
Photo / Video Capture
Document Pickup
Document Delivery
Signature Capture
Measurement Support
Estimate Support
Adjuster Meeting Attendance
Permit / Notice Verification
Material Delivery Verification
Job Progress Verification
Completion Verification
Punch-List Verification
Warranty Visit
Dispute Meeting Documentation
Mortgage Inspection Support
Final Paperwork Support
```

Task lifecycle:

```text
Task Requested
Task Created
Task Assigned
Task Accepted
Task Scheduled
En Route
On Site
Evidence Captured
Checklist Completed
Signature Captured, if required
Task Submitted
Task Reviewed
Task Verified
Task Completed
Human Blockchain Event Created
```

Phase 1 may support this in web form before a full mobile app.

---

## 21. Human Blockchain Event Requirements

A Human Blockchain Event is a verified real-world event.

Minimum fields:

```text
Human Blockchain Event ID
Event Type
Task ID
ClaimStore Claim ID
Project ID
Job ID, if applicable
Order ID, if applicable
Other Charge ID, if applicable
Property ID
Actor User ID
Actor Entity ID
Actor Role ID
Actor Designation
Verifier User ID
Verifier Entity ID
Verifier Role ID
Verifier Designation
Interested / Non-Interested Flag
Timestamp
Location, if applicable
Evidence IDs
Checklist Results
Signature IDs
Trust Weight
TER Impact
SLA Impact
Bookkeeping Impact
ClaimsBank Impact
```

Phase 1 trust levels:

```text
Self-reported
Evidence attached
Interested party verified
Non-interested party verified
ClaimsBank-ready verified
```

---

## 22. Event Ledger Requirements

The system must have an event ledger.

Every meaningful action should create an event.

Event fields:

```text
Event ID
Event Category
Event Type
Actor User ID
Actor Entity ID
Actor Role ID
Actor Designation
Related Object Type
Related Object ID
Timestamp
Status Before
Status After
Evidence IDs
Document IDs
Financial Impact Flag
Bookkeeping Event ID, if applicable
Notification IDs
Agreement Version, if applicable
Source System
Imported / Native
Reversal Event ID, if applicable
```

Events should be append-only.

Corrections should be reversal, amendment, or superseding events.

---

## 23. Click Classification Requirements

The system must classify clicks.

### 23.1 Class A - Navigation Click

No status change.

### 23.2 Class B - Timestamped Action

Creates workflow timestamp.

### 23.3 Class C - Evidence / Verification Action

Creates evidence event.

### 23.4 Class D - Consent / Approval Action

Creates legally significant audit event.

### 23.5 Class E - Bookkeeping Action

Creates financial or accounting event.

### 23.6 Class F - Protocol Transition

Moves claim/project/task from one state to another.

Examples:

```text
Offer accepted
Claim request submitted
Project locked
Job order verified
Payment recorded
Completion verified
Final paperwork generated
Project closed
```

---

## 24. Bookkeeping Event Requirements

Certain clicks must create bookkeeping events.

Bookkeeping Event fields:

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

Minimum Phase 1 bookkeeping events:

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

## 25. Payment / Commission / Referral Requirements

The system must track, at minimum:

```text
Payments recorded
Receivables
Commissions pending
Commissions earned
Commissions paid
Referral fees tracked
Referral fees eligible
Referral fees accrued
Transaction fees billable
Field service fees billable
```

Commission statuses:

```text
Potential
Pending
Earned
Payable
Paid
Reversed
Disputed
```

Referral fee statuses:

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

---

## 26. Need/Done Requirements

The system must support two Need/Done concepts.

### 26.1 Annual / Seasonal Property Need/Done

Outside the claim workflow.

```text
Every property resets to Need on January 1.
When annual inspection or readiness task is completed, status becomes Done.
```

Use cases:

```text
Annual roof inspection
Pre-claim documentation
Policy review
Inventory update
Supplemental roof protection review
```

### 26.2 Project Compliance Need/Done

Inside the project workflow.

Examples:

```text
Notice of Commencement
Permit
Inspection Request
Inspection Pass
Engineering
Mortgage Package
Final Photos
Completion Signature
```

Branch settings may enable special compliance views for markets like Florida.

---

## 27. TER / SLA Requirements

Phase 1 must track basic TER / SLA metrics.

Minimum TER fields:

```text
Task assigned time
Task accepted time
Task completed time
Evidence required
Evidence uploaded
User role
Designation
Market
Claim / project / task
First offer baseline
Final closeout value
Supplement count
Communication event
Flag status
```

Minimum outputs:

```text
On-time / late
Evidence complete / incomplete
Task completed / incomplete
Below average flag
Three-week flag
Proficiency variance
Routing eligibility indicator
```

The first enforcement rule:

```text
Below relevant average for three consecutive weeks creates a TER Review Flag.
```

---

## 28. Proficiency Requirements

The system must track first-pass accuracy.

Baselines:

```text
First Offer Baseline
First Estimate Baseline
First IA Opinion Baseline
Locked Project Baseline
Final Closeout Baseline
```

Variance comparisons:

```text
First Offer vs Final Approved Scope
First Offer vs Final Built Scope
Estimated Cost vs Actual Cost
Estimated Gross Margin vs Final Gross Margin
First IA Opinion vs Final Determination
```

This supports routing, training, underwriting, and performance improvement.

---

## 29. Quantum Dashboard Phase 1 Requirements

The Quantum Dashboard v0.1 must show basic operational and underwriting data.

### 29.1 Operational Views

```text
Claims
Projects
Offers
Claim Requests
Tasks
Evidence
Need/Done
Payments
Revenue Events
TER Flags
Proficiency Variance
```

### 29.2 Underwriting Views

```text
Market opportunity
Claim volume assumption
Average claim value
Service attachment rate
Platform capture rate
Capacity
Claim Caller accountability
TER confidence
Revenue projection
Sponsor opportunity
Founding operator-backed projects
```

### 29.3 Minimum Formula

```text
Market Opportunity
=
Affected Properties
× Claim Conversion Rate
× Average Claim Value
× Service Attachment Rate
× Platform Capture Rate
```

Risk-adjusted opportunity:

```text
Platform Revenue
× TER Confidence
× Capacity Confidence
× Claim Caller Accountability
× Regulatory Confidence
× Founding Operator Guarantee Confidence
```

---

## 30. Virtual Items / Revenue Catalog Requirements

The system must support Virtual Items.

Virtual Item fields:

```text
Virtual Item ID
Name
Description
Entity Type
Role Eligibility
Price
Billing Method
Tax Category
Required Agreement
Required Certification
Revenue Recognition Category
Active / Inactive
```

Phase 1 Virtual Item examples:

```text
Project ID Fee
Claim File Fee
Directory Listing
Contractor Verification
Field Inspection
Measurement Report
Xactimate Estimate
Documentation Service
Supplement Processing
Collection Letter
ClaimBuddy Task
Certification Fee
Training Fee
Transaction Fee
```

---

## 31. Support Requirements

The system must support basic help and support.

Features:

```text
Support ticket
Ticket category
Ticket status
Ticket owner designation
Related user/entity/claim/project/task
Knowledge base
Quick explainer
Role-specific help
Admin notes
```

Support must not become unauthorized representation.

Support assists.

Users decide.

---

## 32. Notification Requirements

The system must create notifications for meaningful events.

Examples:

```text
Account created
Agreement accepted
Role assigned
Designation assigned
Lead assigned
Offer shared
Offer accepted
Claim request submitted
Claim Caller assigned
Claim determination recorded
Task assigned
Evidence missing
Payment recorded
TER flag issued
Final paperwork ready
```

Notifications may be:

```text
In-app
Email
SMS later
Dashboard alert
Admin alert
```

---

## 33. Agreement and Legal Boundary Requirements

Phase 1 must track agreement acceptance.

Required agreements:

```text
Terms of Service
Privacy Policy
Professional / Member Agreement, if applicable
ClaimBuddy Agreement
Field Service Agreement
Contractor Agreement
Sponsor Agreement, if applicable
Delegated Authority Agreement, if applicable
```

The system must preserve:

```text
Agreement version
Accepted by user
Accepted date
Entity
Role
IP/device metadata, if appropriate
```

The system must enforce:

```text
No user accepts agreement for another user.
No user signs for another user without delegated authority.
No platform user approves claim decisions for insurance company.
No contractor accepts offer for property owner.
```

---

## 34. Founding Operator Integration Requirements

If two code bases exist, the integration must follow strict boundaries.

Founding Operator events may feed into ClaimStore, but the neutral platform must classify them.

Imported event requirements:

```text
Source system
Source event ID
Actor
Role
Designation
Related object
Internal-only or shared
Evidence attached
Consent required
Bookkeeping impact
Neutral verification status
```

Example:

```text
Contractor marks work complete.
Neutral platform records contractor work complete.
Completion still requires Property Owner or designated verifier action.
```

---

## 35. Phase 1 Exclusions

Do not build in Phase 1 unless absolutely required:

```text
Full carrier claims management system
Full mortgage loss draft automation
Full regulated banking functionality
Token launch
Full supplier ecommerce
Full manufacturer catalog
Full affiliate self-service platform
Full nationwide ClaimBuddy dispatch
Native mobile app as first dependency
Full franchising system
Public National Roofing League
Full sponsor marketplace
Full DAO governance
AI-only claim decisions
Public TER leaderboards
```

Design for them.

Do not depend on them.

---

## 36. Phase 1 Build Order

Recommended build order:

```text
1. Identity / authentication
2. User profile
3. Entity / role / designation model
4. Agreement acceptance tracking
5. Platform admin shell
6. State / market / branch settings
7. Contractor company setup
8. Property owner property file
9. Lead object
10. Project object
11. Offer builder
12. Jobs / orders / other charges
13. Event ledger
14. Evidence upload
15. ClaimStore Claim object
16. Claim Request workflow
17. Claim Caller / determination record
18. Task / ClaimBuddy workflow
19. Bookkeeping events
20. Payment / commission / referral tracking
21. Need/Done
22. TER / proficiency v0.1
23. Quantum Dashboard v0.1
24. Support / knowledge base
25. Virtual items / revenue catalog
26. Founding operator integration adapter
```

---

## 37. Phase 1 Acceptance Tests

The product is not ready unless it can answer the following.

### 37.1 Claim / Project Questions

```text
Who created the lead?
Who owns the property file?
Who created the offer?
What jobs and other charges were included?
What was the first offer amount?
Who accepted the offer?
When was it accepted?
What claim request was submitted?
Who was the Claim Caller?
What decision was made?
What evidence was reviewed?
What changed after decision?
What work was completed?
Who verified completion?
What final paperwork was generated?
```

### 37.2 Bookkeeping Questions

```text
What estimated selling price was saved?
What estimated cost was saved?
What actual cost was recorded?
What payments were recorded?
What commissions are pending?
What referral fees are tracked?
What field service fees are billable?
What transaction fees are billable?
What is the final variance?
```

### 37.3 Performance Questions

```text
Which tasks were late?
Which tasks lack evidence?
Which users are below average?
Who has three-week flags?
How accurate was the first offer?
How accurate was the IA opinion?
Which designations are performing well?
Which roles need coaching?
```

### 37.4 Dashboard Questions

```text
What market are we testing?
What is the assumed claim volume?
What is the average claim value?
What revenue events exist?
What sponsor positions are supported?
What is TER confidence?
What is Claim Caller accountability?
What is founding operator guarantee exposure?
```

---

## 38. Season 1 Operating Cell

Recommended Season 1 operating cell:

```text
Hail / Wind
+ Roofing
+ One primary contractor operation
+ Property owner claim file
+ Contractor offer
+ Jobs / orders / other charges
+ Claim request
+ Claim Caller accountability
+ ClaimBuddy completion verification
+ Basic bookkeeping
+ TER / proficiency
+ Quantum Dashboard
+ Founding operator guarantee
```

This is narrow enough to build and broad enough to prove the whole architecture.

---

## 39. Day 1 / One Prompt Event Demo

The One Prompt Event should demonstrate:

```text
One property
One claim/project
One contractor offer
One property owner approval
One claim request
One Claim Caller response
One ClaimBuddy verification
One final paperwork path
One bookkeeping event chain
One TER metric
One Quantum Dashboard scenario
One sponsor position
```

This becomes the public proof of coherence.

---

## 40. Working Conclusion

Phase 1 is not a website.

Phase 1 is not a CRM.

Phase 1 is not contractor software alone.

Phase 1 is the first executable market cell.

It must prove that ClaimStore can coordinate:

```text
Identity
Role
Designation
Property
Claim
Project
Offer
Jobs
Orders
Other Charges
Evidence
Claim Request
Claim Caller
Task
Verification
Bookkeeping
TER
Proficiency
Dashboard
Sponsor Logic
```

If Phase 1 proves that, the rest becomes expansion.

The system does not need to start national.

It needs to start true.

Next I recommend **Document 9: Season 1 Operating Plan and Roadmap v0.1**.

That will turn the PRD into a time-based launch plan: One Prompt Event, pre-season preparation, Season 1 operating cell, milestones, roles, capital needs, sponsor targets, build phases, and what must be true by 11-1-2027.
