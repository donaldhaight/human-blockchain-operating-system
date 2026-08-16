---
id: data-model-master
title: "Data Model Master Specification"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 28999
source_line_end: 31541
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# Data Model Master Specification v0.1  
## ClaimStore / ClaimExpress / ClaimBuddy / Human Blockchain / ClaimsBank / Quantum Dashboard  
### Phase 1 Object Families, Fields, Relationships, Events, and Build Priorities

## 1. Purpose

This document defines the master data model for the Phase 1 ClaimStore ecosystem.

It translates the architecture into database-ready object families.

The purpose is to ensure that ClaimStore can support:

```text
Identity
Entities
Roles
Designations
Properties
Claims
Projects
Offers
Jobs
Orders
Other Charges
Tasks
Evidence
Human Blockchain Events
Claim Requests
Claim Decisions
Bookkeeping Events
TER
Proficiency
ClaimsBank readiness
Quantum Dashboard
Sponsor positions
```

The data model must preserve the core architecture:

```text
Entity Role is not Designation.
Claim Caller is a designation.
The first claim request creates a ClaimStore Claim.
The first shared offer becomes the First Offer Baseline.
No user clicks OK for another user.
No evidence means no verified event.
Certain clicks create timestamps.
Certain clicks create bookkeeping events.
```

---

## 2. Data Model Principles

### 2.1 Event-Driven

Every meaningful action should create an event.

Objects may change status, but the event ledger explains why, when, by whom, and under what authority.

### 2.2 Append-Only Audit Trail

Events should not be deleted or overwritten.

Corrections should be handled through:

```text
Correction Event
Reversal Event
Superseding Version
Admin Correction with Reason
```

### 2.3 Role + Designation Aware

Every major action should record:

```text
Actor User
Actor Entity
Actor Entity Role
Actor Designation, if applicable
Authority Source, if applicable
```

### 2.4 Evidence-Linked

Verified real-world events must link to evidence.

Evidence may include:

```text
Photo
Video
Document
Signature
Checklist
Measurement Report
Estimate
Invoice
Permit
Inspection Result
Engineering Letter
Completion Form
```

### 2.5 Bookkeeping-Aware

Certain workflow actions must create bookkeeping events.

The system must be able to answer:

```text
What action created this financial consequence?
Who triggered it?
What object did it affect?
Was it estimated or actual?
Was it reversed or superseded?
```

### 2.6 Phase 1 First, Future Ready

The data model must support future ClaimsBank, sponsor dashboards, advanced integrations, mobile apps, and AI agents, but Phase 1 should build only what is needed for the first operating cell.

---

## 3. Object Family Overview

The data model is organized into these families:

```text
1. Identity and Access
2. Entities and Organizations
3. Roles, Permissions, and Designations
4. Geography and Markets
5. Properties and Annual Need/Done
6. Leads and Opportunities
7. ClaimStore Claims
8. Projects
9. Offers and Offer Versions
10. Jobs, Orders, Equipment, and Other Charges
11. Claim Requests
12. Claim Decisions and Claim Caller
13. Tasks and ClaimBuddy Workflows
14. Evidence and Documents
15. Event Ledger
16. Human Blockchain Events
17. Bookkeeping Events
18. Payments, Commissions, and Referral Fees
19. TER, SLA, and Proficiency
20. ClaimsBank Readiness
21. Quantum Dashboard Metrics
22. Virtual Items and Revenue Catalog
23. Support and Knowledge Base
24. Sponsors and Founding Positions
25. Agreements and Legal Records
```

---

## 4. Identity and Access Objects

## 4.1 User

The User is the human account.

Minimum fields:

```text
User ID
First Name
Last Name
Display Name
Email
Phone
Authentication Provider
Account Status
Created Date
Last Login Date
Primary Entity ID
Profile Completion Status
Verification Status
```

Relationships:

```text
User has many Entity Role Assignments.
User has many Designation Assignments.
User has many Agreement Acceptances.
User creates many Events.
User uploads many Evidence Records.
```

Phase 1 requirement:

Every event must be attributable to a User.

---

## 4.2 User Profile

The profile contains extended user information.

Fields:

```text
Profile ID
User ID
Address
City
State
Zip
Timezone
Preferred Contact Method
Bio / Notes
Certification Status
Background Check Status, future
Insurance / License References, if applicable
Profile Visibility
```

Phase 1 note:

Keep profile simple. Do not overbuild social profile features.

---

## 5. Entities and Organizations

## 5.1 Entity

An Entity represents an organization, company, household, sponsor, platform group, or legal participant.

Fields:

```text
Entity ID
Entity Type
Legal Name
Display Name
Status
Primary Contact User ID
Primary Address
City
State
Zip
Website
Phone
Email
Created Date
Created By
```

Entity Types:

```text
Platform
Property Owner / Household
Licensed Contractor
Independent Sales Representative
Independent Sales & Production Management Contractor
Insurance Company
Adjusting Vendor
Independent Adjuster
ClaimBuddy / Field Verifier
Field Service Provider
Supplier / Manufacturer, future
Mortgage Company, future
ClaimsBank / Financial Partner, future
Sponsor / Strategic Partner, future
Legal / Dispute Provider, future
```

Relationships:

```text
Entity has many Users.
Entity has many Locations.
Entity has many Role Assignments.
Entity may own Projects.
Entity may participate in Claims.
Entity may sponsor Positions.
```

---

## 5.2 Entity Location / Branch

A Location represents a branch, office, territory, or operating unit.

Fields:

```text
Location ID
Entity ID
Location Type
Name
Address
City
State
Zip
Market ID
Timezone
Status
Permit Required Flag
Notice of Commencement Required Flag
Inspection Required Flag
Engineering Required Flag
Mortgage Package Required Flag
Annual Need/Done Enabled
Project Compliance Need/Done Enabled
```

Phase 1 use:

Contractor branch settings should control market-specific workflows, such as Florida compliance requirements.

---

## 6. Roles, Permissions, and Designations

## 6.1 Entity Role Assignment

Entity Role tells the system what a user generally can do inside an entity.

Fields:

```text
Entity Role Assignment ID
User ID
Entity ID
Entity Type
Entity Role
Permissions Profile ID
Assigned By User ID
Assigned Date
Status
Start Date
End Date
```

Examples:

```text
Property Owner
Contractor Admin
Sales Rep
ISR
Project Manager
Bookkeeper
ClaimBuddy
Insurance Admin
Claim Manager
Independent Adjuster
Platform Admin
Platform Support
Sponsor Viewer
```

---

## 6.2 Designation Assignment

Designation tells the system what a user is responsible for on a specific matter.

Fields:

```text
Designation ID
Designation Type
Related Object Type
Related Object ID
Assigned User ID
Assigned Entity ID
Assigned Entity Role
Assigned By User ID
Assigned By Entity ID
Authority Source
Assigned Date
Accepted Date
Completed Date
Expired Date
Status
Scope
Delegation Allowed
Evidence Required
Decision Authority Level
```

Minimum Phase 1 Designations:

```text
Claim Caller
Assigned Adjuster
Field Inspector
Offer Owner
Project Lead
Completion Verifier
ClaimBuddy Verifier
Support Owner
Authorized Property Representative
```

Relationships:

```text
Designation belongs to User.
Designation belongs to Entity.
Designation belongs to Related Object.
Designation may be required for Event.
Designation may be required for Claim Decision.
Designation may be required for ClaimsBank condition.
```

---

## 6.3 Permission Profile

Fields:

```text
Permission Profile ID
Name
Description
Entity Type
Role
Can View
Can Create
Can Edit
Can Submit
Can Approve
Can Reject
Can Hold
Can Assign
Can Verify
Can Upload Evidence
Can Sign / Consent
Can Trigger Bookkeeping
Can Record Payment
Can Record Determination
Can Close
Can Correct / Amend
Can Export
Can Administer
```

Phase 1 note:

Start with role-based permissions, but design for designation-aware overrides.

---

## 7. Geography and Market Objects

## 7.1 State

Fields:

```text
State ID
State Name
State Code
Active Flag
```

## 7.2 Market

Fields:

```text
Market ID
State ID
Market Name
Market Type
Primary Metro
Status
Seasonal Risk Profile
Default Timezone
```

## 7.3 Territory

Fields:

```text
Territory ID
Market ID
Territory Name
Description
Zip Codes
Counties
Sponsor Position ID, if applicable
Status
```

## 7.4 Storm Event

Fields:

```text
Storm Event ID
Event Date
Peril Type
Affected Geography
Estimated Affected Properties
Damage Severity
Claim Probability
Source
Status
```

Phase 1 note:

Storm Event may begin as manually entered dashboard assumption.

---

## 8. Properties and Annual Need/Done

## 8.1 Property

Fields:

```text
Property ID
Property Owner Entity ID
Primary Property Owner User ID
Address
City
State
Zip
County
Market ID
Property Type
Roof Type
Year Built
Mortgage Company ID, if known
Insurance Company ID, if known
Policy Info Status
Created Date
Status
```

Relationships:

```text
Property has many Claims.
Property has many Projects.
Property has many Annual Need/Done Records.
Property has many Evidence Records.
```

---

## 8.2 Annual Need/Done Record

Annual readiness object outside claim workflow.

Fields:

```text
Annual Need/Done ID
Property ID
Season Year
Need Type
Status
Needed Date
Completed Date
Completed By User ID
Evidence IDs
Reset Date
Notes
```

Need Types:

```text
Annual Roof Inspection
Pre-Claim Documentation
Policy Review
Inventory Update
Maintenance Review
Supplemental Protection Review
```

Rule:

```text
Annual Need/Done resets to Need on January 1.
```

---

## 9. Leads and Opportunities

## 9.1 Lead

Fields:

```text
Lead ID
Lead Source
Property ID, if known
Property Address
Contact Name
Contact Phone
Contact Email
Claim Type
Project Type
Peril Type
Market ID
Assigned Contractor Entity ID
Assigned Sales Rep User ID
Status
Created By User ID
Created Date
Converted Project ID
Referral Source ID, if applicable
```

Statuses:

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

Events:

```text
Lead Created
Lead Assigned
Lead Contacted
Lead Inspected
Lead Converted
Lead Lost
```

---

## 10. ClaimStore Claim

## 10.1 ClaimStore Claim

The neutral claim transaction container.

Canonical rule:

```text
The first claim request or claim notice received by the system creates a ClaimStore Claim.
All future related requests, notices, documents, tasks, events, and decisions attach to it.
```

Fields:

```text
ClaimStore Claim ID
Property ID
Property Owner Entity ID
Insurance Company Entity ID
Insurance Claim Number
Primary Contractor Entity ID
Primary Project ID
Created By User ID
Created From Event ID
Claim Type
Peril Type
Storm Event ID
Claim Status
Date of Loss
Created Date
Closed Date
Dispute Flag
External Carrier Participation Flag
```

Statuses:

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

Relationships:

```text
ClaimStore Claim has many Claim Requests.
ClaimStore Claim has many Claim Decisions.
ClaimStore Claim has many Projects.
ClaimStore Claim has many Tasks.
ClaimStore Claim has many Evidence Records.
ClaimStore Claim has many Human Blockchain Events.
```

---

## 11. Projects

## 11.1 Project

The contractor production and accounting container.

Fields:

```text
Project ID
ClaimStore Claim ID
Property ID
Property Owner Entity ID
Contractor Entity ID
Contractor Location ID
Project Number
Market ID
Project Type
Project Status
Accounting Lock Status
First Offer ID
Current Offer ID
Estimated Selling Price
Final Selling Price
Estimated Total Cost
Actual Total Cost
Estimated Gross Margin
Final Gross Margin
Variance Amount
Variance Percent
Created By User ID
Created Date
Closed Date
```

Statuses:

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

Events:

```text
Project Created
Project Accepted
Project Locked
Project Unlocked
Project Entered Production
Project Completion Pending
Project Closed
Project Disputed
```

---

## 11.2 Project Compliance Need/Done

Inside project workflow.

Fields:

```text
Project Compliance ID
Project ID
Compliance Type
Required Flag
Status
Needed Date
Completed Date
Completed By User ID
Evidence IDs
Notes
```

Compliance Types:

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

---

## 12. Offers and Offer Versions

## 12.1 Offer

The complete scope-and-price statement.

Fields:

```text
Offer ID
Project ID
ClaimStore Claim ID
Property ID
Contractor Entity ID
Created By User ID
Offer Owner Designation ID
Pricing Method
Offer Version Number
Offer Status
First Shared Flag
First Offer Baseline Flag
Total Selling Price
Estimated Material Cost
Estimated Labor Cost
Estimated Turnkey Cost
Estimated Equipment Cost
Estimated Other Charges
Estimated Total Cost
Estimated Gross Margin
Terms
Shared Date
Viewed Date
Accepted Date
Rejected Date
Superseded By Offer ID
```

Pricing Methods:

```text
Lump Sum
Line Item
Job-Based
Hybrid
Estimate / Opinion
```

Statuses:

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

Rule:

```text
The first shared offer becomes the First Offer Baseline unless explicitly marked draft/internal.
```

---

## 12.2 Offer Version

Fields:

```text
Offer Version ID
Offer ID
Version Number
Created By User ID
Created Date
Reason for Revision
Snapshot JSON / Structured Snapshot
Total Selling Price
Estimated Total Cost
Status
Superseded Flag
```

Purpose:

Preserve every offer version for audit and proficiency.

---

## 13. Jobs, Orders, Equipment, and Other Charges

## 13.1 Job

Fields:

```text
Job ID
Project ID
Offer ID
ClaimStore Claim ID
Job Category
Description
Status
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
Variance Amount
Variance Percent
Created By User ID
Created Date
Closed Date
```

---

## 13.2 Order

Fields:

```text
Order ID
Job ID
Project ID
Order Type
Vendor / Provider Entity ID
Description
Quantity
Unit of Measure
Estimated Cost
Actual Cost
Selling Price
Status
Created By User ID
Created Date
Completed Date
Evidence IDs
```

Order Types:

```text
Material Order
Labor Order
Turnkey Order
Equipment Order
Punch Order
Service Order
```

---

## 13.3 Equipment Order

Equipment can be a specific Order Type or its own table if needed.

Fields:

```text
Equipment Order ID
Order ID
Project ID
Job ID
Equipment Type
Provider Entity ID
Start Date
End Date
Estimated Cost
Actual Cost
Delivery Required Flag
Pickup Required Flag
Evidence IDs
Status
```

Examples:

```text
Dumpster
Lift
Crane
Scaffolding
Generator
Drying Equipment
```

---

## 13.4 Other Charge

Other Charges are first-class objects.

Fields:

```text
Other Charge ID
Project ID
Offer ID
Job ID, optional
ClaimStore Claim ID
Other Charge Type
Description
Quantity
Unit of Measure
Estimated Amount
Actual Amount
Selling Price
Status
Required Flag
Evidence Required Flag
Evidence IDs
Created By User ID
Created Date
Approved Date
Bookkeeping Event ID
```

Other Charge Types:

```text
Permit
Trip
Engineering
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

Events:

```text
Other Charge Added
Other Charge Approved
Other Charge Rejected
Other Charge Invoiced
Other Charge Paid
```

---

## 14. Claim Requests

## 14.1 Claim Request

Fields:

```text
Claim Request ID
ClaimStore Claim ID
Project ID
Property ID
Request Type
Submitted By User ID
Submitted By Entity ID
Submitted To Entity ID
Submitted Date
Delivered Date
Viewed Date
Status
Amount Requested
Package Snapshot ID
Current Claim Decision ID
External Submission Flag
External Delivery Evidence ID
```

Request Types:

```text
Preliminary Claim Request
Supplemental Claim Request
Final Claim Request
```

Statuses:

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

Rule:

Package snapshots should be locked when submitted.

---

## 14.2 Claim Request Package Snapshot

Fields:

```text
Package Snapshot ID
Claim Request ID
Created By User ID
Created Date
Included Offer Version ID
Included Evidence IDs
Included Document IDs
Included Estimate IDs
Included Photos Count
Included Videos Count
Included Other Charges
Snapshot Hash, future
Status
```

Purpose:

Preserve exactly what was submitted.

---

## 15. Claim Decisions and Claim Caller

## 15.1 Claim Decision Record

Fields:

```text
Claim Decision ID
ClaimStore Claim ID
Claim Request ID
Decision Type
Decision Amount
Coverage Position
Scope Items Approved
Scope Items Denied
Scope Items Adjusted
Reason Codes
Decision Notes
Claim Caller User ID
Claim Caller Entity ID
Claim Caller Entity Role
Claim Caller Designation ID
Authority Source
Decision Timestamp
Documents Reviewed
Evidence Reviewed
Offer Version Reviewed
Supplement Link, if applicable
External or Platform-Recorded Flag
Claim Caller Not Identified Flag
Supersedes Claim Decision ID
Next Action
```

Decision Types:

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

Rule:

A claim request cannot be treated as fully determined without either:

```text
Claim Caller decision record
```

or:

```text
External determination record / Claim Caller not identified status
```

---

## 16. Tasks and ClaimBuddy Workflows

## 16.1 Task

Fields:

```text
Task ID
Task Type
Related Object Type
Related Object ID
ClaimStore Claim ID
Project ID
Property ID
Requested By User ID
Requested By Entity ID
Assigned User ID
Assigned Entity ID
Designation ID
Status
Priority
Scheduled Date
Accepted Date
Started Date
On Site Date
Completed Date
Submitted Date
Verified Date
SLA Due Date
Evidence Required Flag
Checklist Required Flag
Signature Required Flag
Bookkeeping Impact Flag
ClaimsBank Impact Flag
```

Task Types:

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

Statuses:

```text
Requested
Created
Assigned
Accepted
Scheduled
En Route
On Site
Evidence Captured
Checklist Completed
Signature Captured
Submitted
Reviewed
Verified
Completed
Returned for More Info
Cancelled
```

---

## 16.2 Checklist

Fields:

```text
Checklist ID
Task ID
Checklist Type
Created Date
Completed Date
Completed By User ID
Status
```

## 16.3 Checklist Item

Fields:

```text
Checklist Item ID
Checklist ID
Question / Requirement
Response Type
Response Value
Required Flag
Evidence Required Flag
Evidence ID
Status
```

---

## 17. Evidence and Documents

## 17.1 Evidence Record

Fields:

```text
Evidence ID
Evidence Type
Related Object Type
Related Object ID
Uploaded By User ID
Uploaded By Entity ID
Uploaded By Role
Uploaded By Designation ID
Uploaded Date
Captured Date
Location Data, if applicable
File ID
File Name
File Type
File Size
Verification Status
Interested / Non-Interested Flag
Trust Weight
Source
Notes
```

Evidence Types:

```text
Photo
Video
Document
Signature
Checklist
Measurement Report
Estimate
Invoice
Permit
Inspection Result
Engineering Letter
Completion Form
```

Verification Statuses:

```text
Uploaded
Pending Review
Verified
Rejected
Returned for More Info
Superseded
```

---

## 17.2 Document

Fields:

```text
Document ID
Document Type
Related Object Type
Related Object ID
File ID
Created By User ID
Created Date
Version Number
Status
Agreement Flag
Signature Required Flag
Signed Date
```

Document Types:

```text
Offer
Claim Request Package
Estimate
Invoice
Permit
Engineering Letter
Completion Form
Agreement
Warranty Document
Dispute Document
Mortgage Package
```

---

## 17.3 Signature Record

Fields:

```text
Signature ID
Document ID
Related Object Type
Related Object ID
Signed By User ID
Signed By Entity ID
Signer Role
Signer Designation ID
Authority Source
Signature Date
Signature Method
IP / Device Metadata, if appropriate
Delegated Authority ID, if applicable
Status
```

---

## 18. Event Ledger

## 18.1 Event

The Event table is the system memory.

Fields:

```text
Event ID
Event Category
Event Type
Actor User ID
Actor Entity ID
Actor Entity Role
Actor Designation ID
Authority Source
Related Object Type
Related Object ID
ClaimStore Claim ID
Project ID
Property ID
Timestamp
Status Before
Status After
Evidence IDs
Document IDs
Financial Impact Flag
Bookkeeping Event ID
Notification IDs
Agreement Version ID, if applicable
Source System
Imported / Native Flag
Reversal Event ID
Supersedes Event ID
Reason / Notes
```

Event Categories:

```text
Navigation
Timestamped Action
Evidence
Consent
Bookkeeping
Protocol Transition
TER / SLA
Admin Correction
Notification
Integration Import
```

---

## 19. Human Blockchain Events

## 19.1 Human Blockchain Event

Fields:

```text
Human Blockchain Event ID
Base Event ID
Event Type
Task ID
ClaimStore Claim ID
Project ID
Job ID
Order ID
Other Charge ID
Property ID
Actor User ID
Actor Entity ID
Actor Role
Actor Designation ID
Verifier User ID
Verifier Entity ID
Verifier Role
Verifier Designation ID
Interested / Non-Interested Flag
Timestamp
Location Data, if applicable
Evidence IDs
Checklist ID
Signature IDs
Trust Weight
Verification Level
TER Impact ID
SLA Impact ID
Bookkeeping Impact ID
ClaimsBank Condition ID
Status
```

Verification Levels:

```text
Self-Reported
Evidence Attached
Interested Party Verified
Non-Interested Party Verified
Multi-Party Verified
ClaimsBank-Ready Verified
```

---

## 20. Bookkeeping Events

## 20.1 Bookkeeping Event

Fields:

```text
Bookkeeping Event ID
Trigger Event ID
Related Object Type
Related Object ID
Project ID
Job ID
Order ID
Other Charge ID
ClaimStore Claim ID
Amount
Category
Estimated / Actual
Revenue / Cost / Receivable / Payable / Commission / Referral / Escrow / Reserve
Status
Created Date
Posted Date
Reversed Date
Supersedes Bookkeeping Event ID
Notes
```

Minimum Phase 1 Categories:

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

## 21. Payments, Commissions, and Referral Fees

## 21.1 Payment Record

Fields:

```text
Payment ID
Project ID
ClaimStore Claim ID
Paid By Entity ID
Paid To Entity ID
Amount
Payment Date
Payment Method
Payment Type
Reference Number
Evidence ID
Status
Recorded By User ID
Bookkeeping Event ID
```

## 21.2 Commission Record

Fields:

```text
Commission ID
Project ID
User ID
Entity ID
Pay Plan ID
Basis Amount
Commission Rate
Commission Amount
Status
Earned Date
Payable Date
Paid Date
Bookkeeping Event ID
```

Statuses:

```text
Potential
Pending
Earned
Payable
Paid
Reversed
Disputed
```

## 21.3 Referral Fee Record

Fields:

```text
Referral Fee ID
Lead ID
Project ID
Referral Source Entity ID
Referral Source User ID
Basis Amount
Referral Rate
Referral Amount
Status
Bookkeeping Event ID
```

Statuses:

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

## 22. TER, SLA, and Proficiency

## 22.1 SLA Record

Fields:

```text
SLA ID
Task ID
Related Object Type
Related Object ID
User ID
Entity ID
Role
Designation ID
SLA Type
Expected Start
Expected Completion
Actual Start
Actual Completion
Evidence Required Flag
Evidence Complete Flag
Status
Late Flag
```

## 22.2 TER Metric

Fields:

```text
TER Metric ID
User ID
Entity ID
Entity Role
Designation ID
Task Type
Market ID
Season ID
Measurement Period
Timeliness Score
Evidence Score
Completion Score
Communication Score
Accuracy Score
Rework Score
Dispute Score
Trust Score
Overall TER
Relevant Average
Below Average Flag
Three Week Flag
Status
```

## 22.3 Proficiency Metric

Fields:

```text
Proficiency Metric ID
User ID
Entity ID
Role
Designation ID
Project ID
ClaimStore Claim ID
Metric Type
Baseline Object Type
Baseline Object ID
Final Object Type
Final Object ID
Baseline Amount
Final Amount
Variance Amount
Variance Percent
Created Date
```

Metric Types:

```text
First Offer Accuracy
First Scope Accuracy
First IA Opinion Accuracy
Estimated Cost Accuracy
Final Margin Accuracy
Supplement Performance
Closeout Accuracy
```

---

## 23. ClaimsBank Readiness

## 23.1 ClaimsBank Condition

Phase 1 tracks conditions, not regulated fund movement.

Fields:

```text
ClaimsBank Condition ID
ClaimStore Claim ID
Project ID
Condition Type
Required Flag
Status
Required Evidence IDs
Required Designation Type
Required Approval Event ID
Satisfied By User ID
Satisfied By Designation ID
Satisfied Date
Notes
```

Condition Types:

```text
Property Owner Acceptance
Claim Caller Decision
Completion Verification
Final Paperwork Submitted
Mortgage Package Complete
Payment Recorded
Warranty Reserve Candidate
Escrow Candidate
Holdback Candidate
Dispute Holdback Candidate
```

Statuses:

```text
Not Required
Required
Pending
Satisfied
Waived
Disputed
Deferred
```

---

## 24. Quantum Dashboard Metrics

## 24.1 Dashboard Metric

Fields:

```text
Dashboard Metric ID
Metric Type
Market ID
Season ID
Storm Event ID
Entity ID, optional
Claim Type
Project Type
Value
Value Type
Source
Assumption Flag
Actual Flag
Created Date
Updated Date
```

Metric Types:

```text
Affected Properties
Claim Conversion Rate
Average Claim Value
Service Attachment Rate
Platform Capture Rate
TER Confidence
Capacity Confidence
Claim Caller Accountability
Regulatory Confidence
Founding Operator Guarantee Confidence
Projected Platform Revenue
Actual Platform Revenue
Sponsor Opportunity Value
```

## 24.2 Scenario

Fields:

```text
Scenario ID
Scenario Name
Market ID
Season ID
Created By User ID
Created Date
Description
Assumption Set
Projected Opportunity
Risk-Adjusted Opportunity
Status
```

---

## 25. Virtual Items and Revenue Catalog

## 25.1 Virtual Item

Fields:

```text
Virtual Item ID
Name
Description
Entity Type Eligibility
Role Eligibility
Designation Eligibility
Price
Billing Method
Tax Category
Required Agreement ID
Required Certification ID
Revenue Recognition Category
Active Flag
Created Date
```

Examples:

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

## 25.2 Revenue Event

Fields:

```text
Revenue Event ID
Virtual Item ID
Related Object Type
Related Object ID
Entity ID
User ID
Amount
Status
Created Date
Billed Date
Collected Date
Bookkeeping Event ID
```

---

## 26. Support and Knowledge Base

## 26.1 Support Ticket

Fields:

```text
Support Ticket ID
Created By User ID
Related Entity ID
Related Object Type
Related Object ID
Support Owner Designation ID
Category
Priority
Status
Created Date
Closed Date
Resolution Notes
```

## 26.2 Knowledge Base Article

Fields:

```text
Article ID
Title
Category
Role Visibility
Content
Status
Created By User ID
Created Date
Updated Date
```

---

## 27. Sponsors and Founding Positions

## 27.1 Sponsor Position

Fields:

```text
Sponsor Position ID
Sponsor Entity ID
Sponsor Category
Founding Stakeholder Group
Season ID
Territory ID
Market ID
Term Start
Term End
Rights
Obligations
Contribution
Recognition
Integration Rights
Data Access Level
Dashboard Access Level
Exclusivity Type
Performance Requirements
SLA Requirements
TER Requirements
Compliance Requirements
Renewal Rights
Revocation Rules
Legal Review Status
Status
```

## 27.2 Sponsor Data Access Grant

Fields:

```text
Sponsor Data Access Grant ID
Sponsor Entity ID
Access Level
Market ID
Season ID
Data Scope
Approved By User ID
Legal Basis
Start Date
End Date
Status
```

---

## 28. Agreements and Legal Records

## 28.1 Agreement

Fields:

```text
Agreement ID
Agreement Type
Name
Version
Effective Date
Status
Legal Review Status
Document ID
```

Agreement Types:

```text
Terms of Service
Privacy Policy
Professional Participant Agreement
Contractor Member Agreement
ClaimBuddy Agreement
Field Service Agreement
Sponsor Agreement
Delegated Authority Agreement
Electronic Signature Consent
Claim Request Authorization
Completion Verification Form
```

## 28.2 Agreement Acceptance

Fields:

```text
Agreement Acceptance ID
Agreement ID
User ID
Entity ID
Role
Designation ID, if applicable
Accepted Date
Acceptance Method
IP / Device Metadata, if appropriate
Related Object Type, if applicable
Related Object ID, if applicable
Status
```

## 28.3 Delegated Authority Record

Fields:

```text
Delegated Authority ID
Delegator User ID
Delegate User ID
Delegator Entity ID
Delegate Entity ID
Scope
Related Object Type
Related Object ID
Allowed Actions
Start Date
Expiration Date
Revocation Date
Signature ID
Agreement Acceptance ID
Status
```

---

## 29. Source System and Integration Objects

## 29.1 Source System

Fields:

```text
Source System ID
Name
Type
Owner Entity ID
Status
Integration Method
```

Examples:

```text
Founding Operator System
ClaimStore Native
Accounting Export
Document Signing Future
Insurance Carrier Future
Weather Data Future
```

## 29.2 Imported Event

Fields:

```text
Imported Event ID
Source System ID
Source Event ID
Mapped Event ID
Imported Date
Actor Mapping Status
Related Object Mapping Status
Neutral Verification Status
Consent Required Flag
Evidence Required Flag
Bookkeeping Impact Flag
Status
```

Rule:

```text
Imported contractor events do not automatically become neutral consent, insurance determination, or non-interested verification.
```

---

## 30. Phase 1 Minimum Build Objects

The minimum Phase 1 database should include:

```text
User
User Profile
Entity
Entity Location
Entity Role Assignment
Designation Assignment
Permission Profile
State
Market
Property
Annual Need/Done Record
Lead
ClaimStore Claim
Project
Project Compliance Need/Done
Offer
Offer Version
Job
Order
Equipment Order or Equipment Order Type
Other Charge
Claim Request
Claim Request Package Snapshot
Claim Decision Record
Task
Checklist
Checklist Item
Evidence Record
Document
Signature Record
Event
Human Blockchain Event
Bookkeeping Event
Payment Record
Commission Record
Referral Fee Record
SLA Record
TER Metric
Proficiency Metric
ClaimsBank Condition
Dashboard Metric
Scenario
Virtual Item
Revenue Event
Support Ticket
Agreement
Agreement Acceptance
Delegated Authority Record
Sponsor Position, simplified
```

---

## 31. Deferred Objects

Defer until later:

```text
Full supplier catalog
Manufacturer catalog
Full mortgage company portal
Full insurance carrier claims platform
Full escrow account ledger
Actual money movement ledger
Token wallet
DAO governance voting
Public leaderboard
Advanced AI underwriting object
Weather API object
Full mobile device telemetry object
Multi-carrier authority matrix
Complex franchise/member territory model
```

---

## 32. Critical Relationship Map

```text
User
→ Entity Role Assignment
→ Entity
```

```text
User
→ Designation Assignment
→ Related Object
```

```text
Property
→ ClaimStore Claim
→ Claim Request
→ Claim Decision Record
```

```text
Property
→ Project
→ Offer
→ Jobs
→ Orders / Other Charges
```

```text
Task
→ Evidence
→ Human Blockchain Event
```

```text
Event
→ Bookkeeping Event
→ Payment / Commission / Referral / Revenue Event
```

```text
Project
→ First Offer Baseline
→ Final Closeout
→ Proficiency Metric
```

```text
Role + Designation + Task
→ SLA
→ TER Metric
```

```text
ClaimStore Claim + Project + Evidence + Claim Decision
→ ClaimsBank Conditions
```

```text
Markets + Events + TER + Proficiency + ClaimsBank Conditions
→ Quantum Dashboard Metrics
```

---

## 33. Data Integrity Rules

The system must enforce:

```text
1. Every Event has an Actor User.
2. Every high-consequence Event has Entity Role and, where required, Designation.
3. Claim Caller decision requires Claim Caller designation or External Determination status.
4. First shared Offer creates First Offer Baseline.
5. First Claim Request creates ClaimStore Claim.
6. Evidence upload is not the same as verification.
7. Human Blockchain Event requires evidence and verification status.
8. Bookkeeping Event requires trigger event or manual correction reason.
9. Admin corrections do not overwrite history.
10. Property Owner consent requires Property Owner or delegated authority.
11. Imported events cannot create neutral consent automatically.
12. Sponsor data access must be granted explicitly.
```

---

## 34. Acceptance Tests

## Test 1 — First Claim Request Creates ClaimStore Claim

Input:

```text
Claim Request submitted with no existing ClaimStore Claim.
```

Expected:

```text
ClaimStore Claim created.
Claim Request linked.
Event recorded.
```

---

## Test 2 — First Shared Offer Creates Baseline

Input:

```text
Offer status changes from Draft to First Shared.
```

Expected:

```text
First Offer Baseline Flag set.
Offer Version preserved.
Event recorded.
```

---

## Test 3 — Claim Caller Decision

Input:

```text
User records claim determination.
```

Expected:

```text
System checks Claim Caller designation or records external determination.
Claim Decision Record created.
Authority Source stored.
Event recorded.
Dashboard metric updated.
```

---

## Test 4 — Completion Verification

Input:

```text
ClaimBuddy completes task with required evidence.
```

Expected:

```text
Evidence records linked.
Checklist completed.
Human Blockchain Event created.
TER/SLA records updated.
ClaimsBank condition checked.
```

---

## Test 5 — Unauthorized Consent

Input:

```text
Contractor attempts to accept offer for property owner.
```

Expected:

```text
Action blocked.
No consent event created.
Unauthorized attempt event optional.
```

---

## Test 6 — Bookkeeping Trigger

Input:

```text
Project locked.
```

Expected:

```text
Protocol Event created.
Bookkeeping Event created.
Estimated values preserved.
```

---

## Test 7 — Sponsor Data Restriction

Input:

```text
Sponsor viewer tries to access identified claim file without grant.
```

Expected:

```text
Access denied.
Security/access event logged.
```

---

## 35. Working Conclusion

The data model is the skeleton of the architecture.

If the data model is wrong, the product becomes ordinary software.

If the data model is right, ClaimStore can preserve:

```text
User consent
Role boundaries
Designation accountability
Claim request history
Insurance determination records
Real-world evidence
Human Blockchain verification
Bookkeeping consequences
TER and proficiency
ClaimsBank readiness
Quantum Dashboard underwriting
Sponsor boundaries
```

The first operating cell does not need every feature.

It needs the right objects.

The right objects make the future possible.

Next I recommend **#16: Backlog and User Stories v0.1**.

That will break this data model and PRD into buildable epics, user stories, acceptance criteria, and MVP milestones for developers and AI coding agents.
