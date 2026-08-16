---
id: role-designation-matrix
title: "Entity Role and Designation Matrix"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 27045
source_line_end: 28984
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# Entity Role and Designation Matrix v0.1  
## Permissions, Responsibilities, Authority Sources, Events, and Accountability Rules

## 1. Purpose

This document defines the relationship between Entity Roles and Designations inside the ClaimStore ecosystem.

The purpose is to prevent confusion between:

```text
Who a user generally is
```

and:

```text
What that user is specifically responsible for
```

Entity Role controls general access.

Designation controls claim-specific, project-specific, task-specific, request-specific, or decision-specific responsibility.

The system must use both.

---

## 2. Core Rule

```text
Entity Role ≠ Designation
```

An Entity Role answers:

```text
What kind of user is this?
What can this user generally access?
What functions can this user generally perform?
```

A Designation answers:

```text
For this specific claim, project, task, request, decision, payment condition, or event, who is responsible?
```

A user may have many roles over time.

A user may hold different designations on different matters.

A user may have a role but not have authority for a specific action.

---

## 3. Why This Matters

The insurance restoration market fails when responsibility is hidden, assumed, delegated informally, or buried inside company process.

The ClaimStore ecosystem must know:

```text
Who created the lead?
Who made the offer?
Who accepted the offer?
Who submitted the claim request?
Who inspected the property?
Who estimated the damage?
Who made the insurance determination?
Who verified completion?
Who approved release conditions?
Who recorded payment?
Who failed to respond?
```

Entity Role alone cannot answer this.

Designation answers it.

---

## 4. Entity Types

Phase 1 should support the following Entity Types:

```text
Platform
Property Owner / Consumer
Licensed Contractor
Independent Sales Representative / ISR
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

---

## 5. Primary Entity Roles

## 5.1 Platform Roles

```text
Portal Master
Platform Admin
Site Admin
Market Admin
Support Admin
Support User
Content Admin
Protocol Reviewer
TER Reviewer
Dashboard Viewer
```

## 5.2 Property Owner Roles

```text
Property Owner
Authorized Property Representative
Property Viewer
Document Submitter
Completion Approver
```

## 5.3 Contractor Roles

```text
Contractor Owner
Contractor Admin
Branch Admin
Location Admin
Manager
Sales Rep
ISR
Project Manager
Production Manager
Office Support
Bookkeeper
Call Center User
Warranty User
Read-Only User
```

## 5.4 Insurance-Side Roles

```text
Insurance Admin
Claim Manager
Staff Adjuster
Independent Adjuster
Adjusting Vendor Admin
Adjusting Vendor User
Estimate Reviewer
Coverage Reviewer
Call Center User
Read-Only Reviewer
```

## 5.5 ClaimBuddy / Field Service Roles

```text
ClaimBuddy
ClaimBuddy Admin
Field Inspector
Field Service Provider
Documentation Provider
Completion Verifier
Non-Interested Verifier
Interested Verifier
```

## 5.6 ClaimsBank / Financial Roles, Future

```text
ClaimsBank Admin
Escrow Reviewer
Reserve Reviewer
Release Condition Reviewer
Payment Reviewer
Financial Partner User
```

## 5.7 Sponsor Roles, Future

```text
Sponsor Admin
Sponsor Viewer
Sponsor Program Manager
Sponsor Dashboard Viewer
```

---

## 6. Primary Designations

Designations are assigned to a specific object.

They are not merely user titles.

## 6.1 Insurance-Side Designations

```text
Claim Caller
Assigned Adjuster
Field Inspector
Estimate Reviewer
Coverage Reviewer
Supplement Reviewer
Final Payment Reviewer
Reinspection Reviewer
Dispute Escalation Contact
Loss Draft Contact
```

## 6.2 Contractor-Side Designations

```text
Offer Owner
Project Lead
Scope Owner
Sales Lead
Production Lead
Job Order Owner
Supplement Owner
Final Paperwork Owner
Warranty Owner
Collection Owner
```

## 6.3 Property Owner-Side Designations

```text
Claim File Owner
Authorized Property Representative
Offer Acceptance Authority
Completion Approval Authority
Document Submitter
Delegated Signer
```

## 6.4 ClaimBuddy / Field Designations

```text
ClaimBuddy Verifier
Inspection Verifier
Evidence Collector
Signature Witness
Completion Verifier
Non-Interested Completion Verifier
Dispute Documentation Witness
Mortgage Inspection Support
```

## 6.5 ClaimsBank Designations, Future

```text
Release Condition Verifier
Escrow Reviewer
Reserve Reviewer
Payment Approver
Holdback Reviewer
Warranty Reserve Reviewer
Dispute Holdback Reviewer
```

## 6.6 Platform Designations

```text
Support Owner
Protocol Reviewer
TER Reviewer
Admin Correction Reviewer
SLA Escalation Owner
Legal Review Queue Owner
```

---

## 7. General Permission Classes

Each role/designation may be evaluated against these permission classes:

```text
View
Create
Edit
Submit
Approve
Reject
Hold
Assign
Verify
Upload Evidence
Sign / Consent
Trigger Bookkeeping
Record Payment
Record Determination
Close
Correct / Amend
Export
Administer
```

High-consequence permissions require both proper role and proper designation.

---

## 8. High-Consequence Actions

The following actions should require special permission, designation, or authority:

```text
Accept offer
Authorize claim request
Approve completion
Make insurance determination
Assign Claim Caller
Record external determination
Lock project baseline
Unlock project baseline
Create bookkeeping event
Record payment
Approve release condition
Verify completion
Supersede decision
Close project
Close claim
Block user
Override TER flag
Admin correction
```

These actions must create audit events.

---

## 9. Matrix: Platform Roles

## Portal Master

General access:

```text
Global platform configuration
Entity type setup
Market setup
System-level admin
Role and designation configuration
```

May do:

```text
Create entity types
Create roles
Create designation types
Configure markets
Configure virtual items
View platform dashboards
Assign Site Admins
```

May not do:

```text
Accept offer for property owner
Make insurance determination
Approve completion for property owner
Sign user agreements for another user
Create neutral verification without evidence
```

Required designations for special actions:

```text
Admin Correction Reviewer
Protocol Reviewer
TER Reviewer
```

---

## Platform Admin

May do:

```text
Manage users
Manage entities
Manage markets
Manage content
Manage support
View workflow status
Configure system settings
```

May not do:

```text
Consent for users
Approve claims for insurance companies
Approve construction completion for property owners
Make contractor offers unless also acting under contractor entity role
```

Special notes:

Platform Admin actions must be auditable.

---

## Support User

May do:

```text
Assist users
Create support tickets
Route issues
Explain workflow
Link help content
Escalate problems
```

May not do:

```text
Accept
Approve
Reject
Sign
Submit claim requests for user unless explicitly authorized and recorded
Make determinations
Record payment as financial authority
```

Required designation:

```text
Support Owner
```

---

## TER Reviewer

May do:

```text
Review TER flags
Recommend coaching
Recommend remediation
Review evidence of performance
```

May not do:

```text
Publicly punish users automatically
Alter event history
Suppress valid adverse records without correction trail
```

Required designation:

```text
TER Reviewer
```

---

## 10. Matrix: Property Owner Roles

## Property Owner

May do:

```text
Create property file
Upload property documents
Upload policy information
Upload mortgage information
View contractor offer
Accept offer
Reject offer
Ask question
Authorize claim request
Approve completion
View claim/project status
Download documents
Grant delegated authority
Revoke delegated authority
```

May not do:

```text
Make contractor offer
Make insurance determination
Verify non-interested completion unless separately designated
Approve payment release for parties beyond their authority
```

High-consequence actions:

```text
Accept offer
Authorize claim request
Approve completion
Delegate authority
```

These actions create consent events.

---

## Authorized Property Representative

May do:

```text
Act within delegated authority
Upload documents
Review offer
Accept/reject/approve only if delegated
Communicate on property owner’s behalf within scope
```

Required designation:

```text
Authorized Property Representative
```

Authority source:

```text
Property Owner Authorization
Delegated Authority Record
```

May not do:

```text
Act outside delegated scope
Make insurance determination
Act as contractor unless separately authorized
```

---

## Completion Approver

May do:

```text
Approve completion
Reject completion
Request punch items
Upload completion comments
```

Required designation:

```text
Completion Approval Authority
```

Event impact:

```text
Completion Approval Event
TER impact
ClaimsBank release-condition impact
```

---

## 11. Matrix: Contractor Roles

## Contractor Owner

May do:

```text
Create contractor entity
Manage branches
Manage users
Assign contractor roles
Configure pay plans
View all company projects
Approve internal company settings
Review financial reports
```

May not do:

```text
Accept property owner offer for property owner
Make insurance determination
Approve completion for property owner unless delegated
```

Special designations:

```text
Project Lead
Admin Correction Reviewer
Final Paperwork Owner
Collection Owner
```

---

## Contractor Admin

May do:

```text
Manage company profile
Manage branch settings
Create leads
Assign sales reps
Create projects
Create offers
Create jobs
Create orders
Add other charges
Track payments
Assign project designations
View reports
```

May not do:

```text
Accept offer for property owner
Authorize claim request for property owner
Approve completion for property owner
Make insurance determination
```

Can assign:

```text
Offer Owner
Project Lead
Sales Lead
Production Lead
Job Order Owner
Final Paperwork Owner
Warranty Owner
Collection Owner
```

---

## Sales Rep / ISR

May do:

```text
Create or manage assigned leads
Schedule appointments
Upload inspection notes/photos
Prepare offer draft
Communicate with property owner
Request support
Track commission status
```

May do only with designation:

```text
Create first shared offer as Offer Owner
Submit documentation package as assigned user
Run inspection as Field Inspector, if designated
```

May not do:

```text
Accept offer for property owner
Approve completion for property owner
Make insurance determination
Record final payment unless authorized
```

Common designations:

```text
Sales Lead
Offer Owner
Field Inspector
Document Submitter
```

---

## Project Manager / Production Manager

May do:

```text
Manage production schedule
Create job orders
Assign labor/subs
Upload production evidence
Track job status
Record completion candidates
Handle punch items
Coordinate final paperwork
```

Common designations:

```text
Project Lead
Production Lead
Job Order Owner
Completion Coordinator
Warranty Owner
```

May not do:

```text
Approve property owner completion
Make insurance determination
Create non-interested verification if interested
```

---

## Bookkeeper

May do:

```text
Enter invoices
Record payments
Track receivables
Track payables
Track commissions
Track referral fees
Prepare financial reports
```

May not do:

```text
Create consent events
Change first offer baseline
Alter event history
Release escrow/reserve funds unless separately authorized
```

Bookkeeping actions must link to trigger events when possible.

---

## 12. Matrix: Insurance-Side Roles

## Insurance Admin

May do:

```text
Manage insurance entity users
Assign claim managers
Assign adjusters
Assign Claim Caller designation
View claim requests
Configure insurance-side workflow
```

May not do:

```text
Inspect property unless assigned
Make claim determination unless Claim Caller or authorized role
Act for property owner
Act for contractor
```

Can assign:

```text
Claim Caller
Assigned Adjuster
Estimate Reviewer
Coverage Reviewer
Supplement Reviewer
Final Payment Reviewer
```

Authority source:

```text
Carrier Staff Authority
Carrier Entity Admin Assignment
```

---

## Claim Manager

May do:

```text
View claim request
Review evidence
Assign adjuster
Assign reviewers
Record claim notes
Make determination if designated Claim Caller
```

May not do:

```text
Make determination without Claim Caller designation or authority source
Accept contractor offer for property owner
Modify contractor evidence
```

Common designations:

```text
Claim Caller
Coverage Reviewer
Supplement Reviewer
Final Payment Reviewer
Dispute Escalation Contact
```

---

## Staff Adjuster

May do:

```text
Inspect
Estimate
Upload photos
Upload estimate
Record opinion
Review documentation
Make determination only if Claim Caller
```

May not do:

```text
Make final determination without Claim Caller designation
Act as property owner
Act as contractor
```

Common designations:

```text
Assigned Adjuster
Field Inspector
Estimate Reviewer
Claim Caller, if authorized
```

---

## Independent Adjuster

May do:

```text
Inspect property
Upload photos
Upload estimate/opinion
Respond to assignment
Provide documentation
```

May not do:

```text
Make the call unless designated Claim Caller with authority source
Bind carrier unless authorized
Approve payment unless authorized
```

Common designations:

```text
Assigned Adjuster
Field Inspector
Estimate Reviewer
Claim Caller, only if authorized
```

Important rule:

```text
Independent Adjuster ≠ Claim Caller unless explicitly designated.
```

---

## Adjusting Vendor Admin

May do:

```text
Manage vendor users
Assign independent adjusters
Manage vendor assignments
View vendor-related claims
```

May not do:

```text
Make carrier determination unless delegated authority is recorded
Approve claim request without Claim Caller designation
```

---

## Read-Only Reviewer

May do:

```text
View assigned claim/request information
Download documents if permitted
Add internal notes if allowed
```

May not do:

```text
Approve
Deny
Hold
Request more information as formal decision
Make determination
Assign Claim Caller
```

Use “Reviewer” only when no decision authority exists.

---

## 13. Matrix: Claim Caller Designation

## Claim Caller

Object scope:

```text
Claim Request
ClaimStore Claim
Specific determination event
```

May be held by:

```text
Claim Manager
Staff Adjuster
Independent Adjuster
Adjusting Vendor User
Insurance Admin
Program Administrator
Other authorized insurance-side user
```

Authority source required:

```text
Carrier Staff Authority
Carrier Assigned Claim Manager
Carrier Authorized Independent Adjuster
Carrier Authorized Adjusting Vendor
Program Authority
Delegated Authority
External Determination Recorded
Unknown / Not Provided, if external/unclear
```

May do:

```text
Record claim determination
Approve
Approve partial
Approve with adjustments
Deny
Hold for review
Request more information
Request reinspection
Escalate
Supersede prior determination
Close review
```

Required event:

```text
Claim Determination Made
```

Required record:

```text
Claim Decision Record
```

Required fields:

```text
Decision type
Decision amount, if applicable
Reason / notes
Evidence reviewed
Authority source
Timestamp
Claim Caller identity or not identified status
```

May not do:

```text
Modify property owner consent
Modify contractor offer
Alter evidence
Approve completion for property owner
Act outside authority source
```

---

## 14. Matrix: ClaimBuddy / Field Roles

## ClaimBuddy

May do:

```text
Accept assigned tasks
Schedule task
Run trip
Capture photos/videos
Collect documents
Capture signatures where authorized
Complete checklist
Submit evidence
Mark task submitted
```

May not do:

```text
Accept offer for property owner
Authorize claim request for property owner
Make insurance determination
Act as public adjuster unless licensed/structured
Provide legal advice
Approve payment release unless separately designated
```

Common designations:

```text
ClaimBuddy Verifier
Evidence Collector
Signature Witness
Completion Verifier
Inspection Verifier
```

---

## Field Inspector

May do:

```text
Inspect
Document
Photograph
Measure
Submit findings
```

May not do:

```text
Make final insurance determination unless also Claim Caller
Approve completion unless designated
Create non-interested verification if interested
```

---

## Completion Verifier

May do:

```text
Review completed work
Capture photos/videos
Complete checklist
Collect property owner completion signature, if applicable
Submit completion verification
```

May not do:

```text
Approve completion for property owner unless delegated
Record payment release unless ClaimsBank designation exists
```

Trust classification:

```text
Interested Completion Verifier
Non-Interested Completion Verifier
```

---

## Non-Interested Verifier

May do:

```text
Verify event with higher trust weight
Provide independent evidence
Support ClaimsBank-ready event
```

May not do:

```text
Have direct undisclosed economic interest
Hide conflict
Act outside task scope
```

---

## 15. Matrix: ClaimsBank Roles, Future

## Release Condition Verifier

May do:

```text
Review required release conditions
Confirm evidence completeness
Confirm designated approvals
Flag missing items
Mark release condition satisfied
```

May not do:

```text
Move funds unless separately authorized and legally structured
Override missing consent
Ignore dispute status
```

Required designations:

```text
Release Condition Verifier
Escrow Reviewer
Payment Approver, if applicable
```

---

## Payment Approver

Future only.

May do:

```text
Approve payment release within authorized structure
Record approval
Trigger payment workflow
```

May not do:

```text
Act without legal/payment authority
Release disputed funds without process
Bypass completion evidence
```

Phase 1 status:

```text
Deferred unless legally structured.
```

---

## 16. Matrix: Sponsor Roles

## Sponsor Admin

May do:

```text
Manage sponsor profile
View sponsor-specific dashboard
Manage sponsor users
Review sponsor position documents
Submit sponsor information
```

May not do:

```text
Access identified user/claim data without permission
Control TER scores
Control Claim Caller decisions
Control platform governance
Make claim decisions
Override protocol
```

---

## Sponsor Dashboard Viewer

May do:

```text
View permitted sponsor dashboard
View aggregated or sponsor-specific metrics
Download approved reports
```

May not do:

```text
Access restricted data
View private claim files
Influence user routing outside rules
Suppress adverse data
```

---

## 17. Authority Source Matrix

Authority Source must be recorded for high-consequence designations.

Common authority sources:

```text
User Self-Authority
Property Owner Authorization
Delegated Authority Record
Contractor Admin Assignment
Carrier Staff Authority
Carrier Assigned Claim Manager
Carrier Authorized Independent Adjuster
Carrier Authorized Adjusting Vendor
Platform Protocol Assignment
ClaimsBank Release Requirement
Sponsor Program Requirement
Court / Legal Authority, future
External Determination Recorded
Unknown / Not Provided
```

Authority Source is required for:

```text
Claim Caller
Authorized Property Representative
Completion Approval Authority
Delegated Signer
Payment Approver
Release Condition Verifier
Admin Correction Reviewer
```

---

## 18. Event Impact Matrix

## Role or Designation Action → Event Type

```text
Property Owner accepts offer
→ Consent Event
→ Offer Accepted Event
→ Possible Project Accepted Event
```

```text
Contractor creates first shared offer
→ Protocol Event
→ First Offer Baseline Event
→ Possible Bookkeeping Baseline Event
```

```text
Claim Request submitted
→ Protocol Transition Event
→ ClaimStore Claim Created, if first request
→ Package Snapshot Event
```

```text
Claim Caller makes determination
→ Claim Determination Event
→ Claim Decision Record
→ Dashboard accountability metric
```

```text
ClaimBuddy uploads completion evidence
→ Evidence Event
→ Human Blockchain Event, if verified
→ TER/SLA Event
```

```text
Payment recorded
→ Bookkeeping Event
→ Receivable Update
→ Dashboard revenue/payment metric
```

```text
User misses task deadline
→ TER/SLA Event
→ Possible flag
```

---

## 19. Bookkeeping Authority Matrix

Bookkeeping events may be created by workflow triggers or authorized users.

## Workflow-Triggered Bookkeeping

```text
Offer accepted
Project locked
Job order created
Other charge approved
Field service task completed
Payment recorded
Project closed
```

## User-Entered Bookkeeping

May be performed by:

```text
Contractor Admin
Bookkeeper
Project Lead, if allowed
Platform Admin for correction only
ClaimsBank Reviewer, future
```

May not be performed by:

```text
Property Owner, except viewing or recording own payment evidence
ClaimBuddy, unless task fee completion workflow
Insurance Reviewer, unless authorized payment/determination role
Sponsor
```

---

## 20. Consent Authority Matrix

## Property Owner Consent

Actions:

```text
Accept offer
Reject offer
Authorize claim request
Approve completion
Delegate authority
```

Allowed actors:

```text
Property Owner
Authorized Property Representative, within scope
```

Not allowed:

```text
Contractor
Platform Support
ClaimBuddy
Insurance User
Sponsor
```

## Contractor Consent

Actions:

```text
Submit offer
Accept professional agreement
Assign internal roles
Commit to project terms
```

Allowed actors:

```text
Contractor Owner
Contractor Admin
Authorized Contractor Representative
```

## Insurance Determination Authority

Actions:

```text
Approve
Approve partial
Approve with adjustments
Deny
Hold
Request more information
```

Allowed actors:

```text
Claim Caller
External Determination Record, if non-platform response
```

---

## 21. Evidence Authority Matrix

## Evidence Upload

May upload:

```text
Property Owner
Contractor User
ISR
ClaimBuddy
Field Service Provider
Independent Adjuster
Insurance User
Platform Support, if clearly marked and source identified
```

## Evidence Verification

May verify:

```text
ClaimBuddy Verifier
Completion Verifier
Field Inspector
Non-Interested Verifier
Platform Protocol Reviewer
Property Owner for owner-controlled approvals
ClaimsBank Release Condition Verifier, future
```

Important rule:

```text
Uploading evidence does not automatically verify the event.
```

---

## 22. Designation Assignment Rules

## Who Can Assign Designations?

```text
Platform Admin → platform/support/protocol designations
Contractor Admin → contractor project designations
Property Owner → delegated property-owner designations
Insurance Admin / Claim Manager → insurance-side designations
ClaimBuddy Admin → ClaimBuddy task designations
ClaimsBank Admin → release/payment designations, future
```

## Designations That Require Acceptance

```text
ClaimBuddy Verifier
Field Inspector
Independent Adjuster
Non-Interested Verifier
Support Owner, optional
```

## Designations That Require Authority Confirmation

```text
Claim Caller
Authorized Property Representative
Payment Approver
Release Condition Verifier
Delegated Signer
```

---

## 23. Permission Failure Examples

## Example 1: Contractor Attempts to Accept Offer

Result:

```text
Blocked.
System requires property owner or authorized representative.
Event may record attempted unauthorized action if necessary.
```

## Example 2: Independent Adjuster Attempts to Approve Claim Without Claim Caller Designation

Result:

```text
Blocked or recorded as opinion/recommendation only.
System requires Claim Caller designation or external determination record.
```

## Example 3: ClaimBuddy Marks Completion Verified Without Evidence

Result:

```text
Blocked from verified status.
Task may remain submitted or incomplete.
```

## Example 4: Platform Admin Changes First Offer Baseline

Result:

```text
Direct overwrite blocked.
Correction/superseding event required.
Reason required.
Audit event created.
```

## Example 5: Sponsor Attempts to View Identified Claim File

Result:

```text
Blocked unless user permission and data-sharing legal basis exist.
```

---

## 24. Phase 1 Minimum Role Set

To keep Phase 1 buildable, start with:

```text
Platform Admin
Platform Support
Property Owner
Authorized Property Representative
Contractor Admin
Sales Rep / ISR
Project Manager
Bookkeeper
ClaimBuddy
Insurance User
Independent Adjuster
Claim Manager
Sponsor Viewer, limited
```

---

## 25. Phase 1 Minimum Designation Set

Start with:

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

Defer:

```text
Payment Approver
Escrow Reviewer
Reserve Reviewer
Sponsor Program Manager
Court / Legal Authority
Advanced delegated authority chains
```

---

## 26. Role / Designation Data Fields

## User Role Assignment Fields

```text
User Role Assignment ID
User ID
Entity ID
Entity Type
Entity Role
Assigned By
Assigned Date
Status
Permissions Profile
```

## Designation Assignment Fields

```text
Designation ID
Designation Type
Related Object Type
Related Object ID
Assigned User ID
Assigned Entity ID
Assigned Entity Role
Assigned By User ID
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

---

## 27. Audit Requirements

Every high-consequence action must record:

```text
User ID
Entity ID
Entity Role
Designation, if applicable
Authority Source, if applicable
Related Object
Action
Timestamp
Status before
Status after
Evidence, if applicable
Agreement version, if applicable
IP/device metadata, if appropriate
```

---

## 28. Dashboard Impacts

Roles and designations affect Quantum Dashboard variables.

Examples:

```text
Claim Caller identified rate
Claim Caller not identified rate
Average decision time by Claim Caller
First offer accuracy by Offer Owner
Closeout variance by Project Lead
Completion verification trust by verifier type
TER by role
TER by designation
ClaimBuddy task completion rate
Evidence completeness by role
Sponsor data access compliance
```

---

## 29. TER Impacts

TER should be calculated by:

```text
User
Entity
Entity Role
Designation
Task Type
Market
Season
Claim Type
Project Type
```

Do not assign all performance to the company if a designation-level measure exists.

Example:

```text
A contractor company may have high overall TER.
One Offer Owner may have poor first-offer accuracy.
One Project Lead may have poor closeout timing.
One ClaimBuddy may have strong completion verification reliability.
```

---

## 30. ClaimsBank Impacts

ClaimsBank release-condition logic should check:

```text
Property owner approval authority
Completion verifier designation
Claim Caller or external determination status
Payment approver authority, future
Release condition verifier designation, future
Evidence completeness
Dispute status
TER/trust status
```

A payment condition should not be satisfied merely because a generic user clicked a button.

The proper role, designation, evidence, and authority must exist.

---

## 31. Legal Review Flags

The following role/designation concepts require legal review:

```text
Authorized Property Representative
Delegated Signer
Claim Caller
Independent Adjuster authority
ClaimBuddy scope
Field service provider scope
Completion verification
Public adjusting boundary
Payment approver
Escrow/release condition verifier
TER-based blocking
Sponsor data access
```

---

## 32. Canonical Rule Set

Use these as system design rules:

```text
1. Every user has at least one Entity Role.
2. High-consequence actions may require a Designation.
3. Designations are assigned to specific objects.
4. Authority Source must be recorded for decision or consent authority.
5. No user consents for another user without delegated authority.
6. Uploading evidence is not the same as verifying evidence.
7. Inspection is not determination.
8. Estimate is not determination.
9. Reviewer is not Claim Caller unless designated.
10. Claim Caller is required for platform-recorded insurance determinations.
11. External determinations must be marked external.
12. Bookkeeping events must identify their trigger.
13. Admin corrections must not overwrite history.
14. TER should measure role and designation performance separately.
15. Sponsor access never overrides privacy, protocol, or consent.
```

---

## 33. Acceptance Tests

## Test 1 — Role Without Designation

User has Entity Role: Independent Adjuster.

User attempts to approve claim request.

Expected result:

```text
System blocks final determination.
System allows estimate/opinion only.
System requires Claim Caller designation.
```

## Test 2 — Designated Claim Caller

User has Entity Role: Independent Adjuster.

User has Designation: Claim Caller.

Authority Source: Carrier Authorized Independent Adjuster.

User approves partial claim.

Expected result:

```text
Claim Decision Record created.
Decision event recorded.
Authority source stored.
Dashboard accountability metric updated.
```

## Test 3 — Property Owner Consent

Contractor attempts to accept offer for Property Owner.

Expected result:

```text
Blocked.
Property Owner login required or delegated authority required.
```

## Test 4 — Delegated Authority

Authorized Property Representative accepts offer within scope.

Expected result:

```text
Offer Accepted Event created.
Delegated Authority Record linked.
Property Owner notified.
```

## Test 5 — Completion Verification

ClaimBuddy uploads photos but no checklist.

Expected result:

```text
Evidence uploaded.
Task not verified until checklist complete.
```

## Test 6 — Sponsor Data Access

Sponsor Viewer attempts to open identified claim file.

Expected result:

```text
Blocked unless authorized data access exists.
```

---

## 34. Working Conclusion

The Entity Role and Designation Matrix is the accountability engine of ClaimStore.

Roles define general access.

Designations define responsibility.

Authority sources define why the person can act.

Events define what happened.

Evidence defines what supports it.

Bookkeeping events define financial consequence.

TER defines performance.

ClaimsBank checks conditions.

Quantum Dashboard underwrites the pattern.

The market has always had roles.

ClaimStore adds designations.

That is how responsibility becomes visible.

Next I recommend **#15: Data Model Master Specification v0.1**.

That will define the actual object families, fields, relationships, event links, and Phase 1 database-ready structure.
