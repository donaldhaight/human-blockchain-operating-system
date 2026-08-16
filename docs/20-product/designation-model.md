---
id: designation-model
title: "Designation Model Addendum"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 14558
source_line_end: 15376
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# Designation Model Addendum v0.1  
## Entity Roles, Claim-Specific Responsibility, Claim Caller, and Assignment Authority

## 1. Purpose

This addendum defines the Designation Model for ClaimStore, ClaimExpress, Human Blockchain, ClaimsBank, TER, and the Quantum Dashboard.

The Designation Model solves a critical problem:

A user’s general role inside an entity does not always tell us what that user is responsible for on a specific claim, project, task, review, decision, or payment condition.

Therefore, the system must distinguish between:

```text
Entity Role
```

and:

```text
Designation
```

Entity Role defines general permission.

Designation defines specific responsibility.

---

## 2. Core Distinction

### 2.1 Entity Role

An Entity Role is the user’s general permission category within an entity.

Examples:

```text
Insurance Admin
Claim Manager
Adjuster
Independent Adjuster
Contractor Admin
Sales Rep
Project Manager
ClaimBuddy
Field Service Provider
Platform Support
Property Owner
```

Entity Role answers:

```text
What kind of user is this inside the system?
What can they generally access?
What functions can they generally perform?
```

Entity Role is usually persistent until changed by an admin or agreement.

---

### 2.2 Designation

A Designation is a claim-specific, project-specific, task-specific, request-specific, or decision-specific assignment of responsibility.

Examples:

```text
Claim Caller
Assigned Adjuster
Field Inspector
Estimate Reviewer
Coverage Reviewer
Supplement Reviewer
Completion Verifier
Dispute Escalation Contact
Final Payment Reviewer
Mortgage Loss Draft Contact
ClaimBuddy Verifier
Project Lead
Offer Owner
```

Designation answers:

```text
For this specific matter, who is responsible?
```

Designation may change from claim to claim, task to task, request to request, and event to event.

---

## 3. Why Designations Are Required

Without Designations, the system can identify that someone is an adjuster, claim manager, contractor admin, or field provider, but it cannot always identify who was responsible for a specific outcome.

That is not enough.

A neutral market infrastructure system must know:

```text
Who inspected?
Who estimated?
Who made the offer?
Who accepted the offer?
Who submitted the claim request?
Who reviewed the evidence?
Who made the call?
Who verified completion?
Who approved payment?
Who released funds?
Who failed to respond?
```

Entity Role alone does not answer those questions.

Designation does.

---

## 4. Designation Object

The Designation Object should be a first-class system object.

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
Assignment Date
Effective Date
Expiration Date
Status
Delegation Allowed
Evidence Required
Decision Authority Level
Audit Trail
```

Related Object Type may include:

```text
ClaimStore Claim
Claim Request
Project
Offer
Job
Job Order
Task
Other Charge
Dispute
Payment Event
ClaimsBank Condition
```

---

## 5. Designation Types

### 5.1 Insurance-Side Designations

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
Claim Manager
Loss Draft Contact
```

### 5.2 Contractor-Side Designations

```text
Project Lead
Offer Owner
Scope Owner
Sales Lead
Production Manager
Job Order Owner
Supplement Owner
Final Paperwork Owner
Warranty Owner
Collection Owner
```

### 5.3 Property Owner-Side Designations

```text
Property Owner
Authorized Property Representative
Completion Approver
Document Submitter
Claim File Owner
```

### 5.4 Field / Verification Designations

```text
ClaimBuddy Verifier
Interested Verifier
Non-Interested Verifier
Completion Verifier
Inspection Verifier
Evidence Collector
Signature Witness
```

### 5.5 ClaimsBank Designations

```text
Escrow Reviewer
Release Condition Verifier
Reserve Reviewer
Payment Approver
Holdback Reviewer
Dispute Holdback Reviewer
```

### 5.6 Platform Designations

```text
Support Owner
Protocol Reviewer
TER Reviewer
SLA Escalation Owner
Admin Correction Reviewer
```

---

## 6. Claim Caller as a Designation

Claim Caller is not merely an Entity Role.

It is a Designation.

A user may have the Entity Role of:

```text
Claim Manager
Staff Adjuster
Independent Adjuster
Insurance Admin
Adjusting Vendor Representative
```

but only becomes the Claim Caller when assigned responsibility for making or recording the determination on a specific claim request.

The Claim Caller designation must identify:

```text
Who has responsibility for the decision?
What authority source supports that responsibility?
What decision was made?
When was it made?
What evidence was reviewed?
What reason was provided?
```

---

## 7. Authority Source

Every Designation should optionally include an Authority Source.

Authority Source explains why the designee has the right or responsibility to act.

Possible values:

```text
Entity Admin Assignment
Carrier Staff Authority
Carrier Assigned Claim Manager
Carrier Authorized Independent Adjuster
Carrier Authorized Adjusting Vendor
Contractor Company Assignment
Property Owner Authorization
Platform Protocol Assignment
ClaimsBank Release Requirement
Sponsor Program Requirement
Delegated Authority
External Response Recorded
Unknown / Not Provided
```

Authority Source is especially important for:

```text
Claim Caller
Authorized Property Representative
Payment Approver
Completion Verifier
ClaimsBank Release Condition Verifier
```

---

## 8. Designation Status

Designations should have statuses.

```text
Assigned
Accepted
Declined
Active
Completed
Expired
Revoked
Transferred
Superseded
Unknown
Not Provided
```

Example:

```text
Claim Caller Assigned
Claim Caller Accepted
Claim Determination Completed
Claim Caller Superseded
```

Example:

```text
Completion Verifier Assigned
Verification Submitted
Verification Accepted
Designation Completed
```

---

## 9. Assignment and Acceptance

Some designations may be assigned without acceptance.

Others should require acceptance.

### 9.1 Assignment Only

Examples:

```text
Contractor Admin assigns Sales Lead.
Platform assigns Support Owner.
System assigns Project Lead based on creator.
```

### 9.2 Assignment + Acceptance

Examples:

```text
ClaimBuddy accepts verification task.
Independent Adjuster accepts claim assignment.
Non-Interested Verifier accepts completion verification.
```

### 9.3 Assignment + Authority Confirmation

Examples:

```text
Claim Caller
Payment Approver
Authorized Property Representative
ClaimsBank Release Condition Verifier
```

High-consequence designations should require confirmation of authority.

---

## 10. Designations and Permissions

A Designation should not automatically grant unlimited permissions.

It grants context-specific permissions.

Example:

A user with Entity Role:

```text
Independent Adjuster
```

and Designation:

```text
Assigned Adjuster on Claim 123
```

may be able to inspect, upload photos, and submit estimate/opinion on Claim 123.

But that does not mean the user can make the determination unless also designated as:

```text
Claim Caller
```

Example:

A ClaimBuddy designated as:

```text
Completion Verifier on Project 456
```

may upload completion verification evidence for Project 456.

But that does not mean the ClaimBuddy can approve final payment.

---

## 11. Designations and Event Records

Every major event should record both Entity Role and Designation where applicable.

Event record fields should include:

```text
Actor User ID
Actor Entity ID
Actor Entity Role
Actor Designation
Related Object
Event Type
Timestamp
Authority Source
Evidence
Decision Type
```

This lets the audit trail answer:

```text
Did the person who acted have the right role?
Did they have the right designation?
Did they have authority for this specific action?
```

---

## 12. Designations and ClaimExpress Protocol

ClaimExpress Protocol should support designation events.

New event types:

```text
Designation Created
Designation Assigned
Designation Accepted
Designation Declined
Designation Revoked
Designation Transferred
Designation Completed
Designation Expired
Authority Source Recorded
Claim Caller Assigned
Claim Caller Not Identified
Claim Caller Changed
Completion Verifier Assigned
Release Condition Verifier Assigned
```

These events should be timestamped and auditable.

---

## 13. Designations and Human Blockchain

Human Blockchain events should record designation because verification depends on context.

Example:

```text
User Role: ClaimBuddy
Designation: Non-Interested Completion Verifier
Event: Completion Verified
```

Example:

```text
User Role: Independent Adjuster
Designation: Field Inspector
Event: Inspection Completed
```

Example:

```text
User Role: Independent Adjuster
Designation: Claim Caller
Event: Claim Determination Made
```

Same role, different designations, different trust consequences.

---

## 14. Designations and TER

TER should measure performance by both Entity Role and Designation.

A user may perform well as a Field Inspector but poorly as an Estimate Reviewer.

A contractor employee may perform well as a Project Lead but poorly as a Final Paperwork Owner.

An adjuster may perform well as an inspector but poorly as a Claim Caller.

Therefore TER should support:

```text
TER by Entity Role
TER by Designation
TER by Task Type
TER by Market
TER by Season
TER by Claim Type
```

---

## 15. Designations and Proficiency

Proficiency should also be designation-specific.

Examples:

```text
First Offer Accuracy → Offer Owner
Scope Completeness → Scope Owner
Final Closeout Accuracy → Project Lead
Estimate Accuracy → Estimate Reviewer
Decision Accuracy / Reversal Rate → Claim Caller
Verification Accuracy → Completion Verifier
```

This prevents the system from assigning all credit or blame to the wrong role.

---

## 16. Designations and ClaimsBank

ClaimsBank release conditions should check designations.

Examples:

```text
Property Owner Completion Approver must approve completion.
Non-Interested Completion Verifier must verify completion.
Claim Caller must approve claim request or approved amount must be externally recorded.
Escrow Reviewer must confirm release condition.
Payment Approver must approve disbursement.
```

ClaimsBank should not release funds based only on a generic role if a specific designation is required.

---

## 17. Designations and SelfInsurity

SelfInsurity requires that user-directed decisions remain with the proper party.

Designation helps preserve this.

Examples:

```text
Property Owner = Claim File Owner.
Property Owner or Authorized Property Representative = Offer Acceptance Authority.
ClaimBuddy = Evidence Collector, not Property Owner.
Contractor = Offer Creator, not Property Owner Approver.
Insurance Claim Caller = Determination Authority, not anonymous corporate process.
```

This supports the rule:

```text
No user clicks OK for another user.
```

unless a delegated authority designation exists.

---

## 18. Delegated Authority Designation

Delegated authority must be explicit.

Fields:

```text
Delegator User ID
Delegate User ID
Scope of Authority
Related Object
Allowed Actions
Expiration
Revocation Method
Signature / Consent
Audit Trail
```

Examples:

```text
Property Owner authorizes spouse to approve completion.
Company owner authorizes manager to accept Member Agreement.
Carrier authorizes independent adjuster to make calls up to a dollar limit.
ClaimsBank authorizes escrow reviewer to approve release conditions.
```

Delegated authority should never be assumed.

---

## 19. Designation Examples

### 19.1 Insurance Claim Request

```text
Entity Role:
Independent Adjuster

Designation:
Field Inspector

Action:
Uploads inspection photos and estimate/opinion.

Result:
Observation and estimate recorded, but no final determination.
```

Then:

```text
Entity Role:
Claim Manager

Designation:
Claim Caller

Action:
Approves partial claim request with adjustments.

Result:
Claim Decision Record created.
```

---

### 19.2 Contractor Offer

```text
Entity Role:
Sales Rep

Designation:
Offer Owner

Action:
Creates first offer.

Result:
First Offer Baseline created.
```

Then:

```text
Entity Role:
Contractor Admin

Designation:
Project Lead

Action:
Locks project after acceptance.

Result:
Project accounting baseline created.
```

---

### 19.3 Completion Verification

```text
Entity Role:
ClaimBuddy

Designation:
Non-Interested Completion Verifier

Action:
Uploads post-completion photos and property owner signature.

Result:
Human Blockchain Completion Verified Event created.
```

Then:

```text
Entity Role:
ClaimsBank Reviewer

Designation:
Release Condition Verifier

Action:
Confirms release conditions satisfied.

Result:
Escrow release event becomes eligible.
```

---

## 20. Minimum Phase 1 Implementation

Phase 1 should support these designations:

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

Minimum fields:

```text
Designation Type
Related Object
Assigned User
Assigned Entity
Assigned Role
Authority Source
Status
Assigned Date
Completed Date
```

Minimum events:

```text
Designation Assigned
Designation Accepted
Designation Completed
Designation Revoked
Claim Caller Assigned
Claim Caller Not Identified
```

---

## 21. Deferred Designation Features

Defer:

```text
Complex delegation chains
Dollar-limit authority logic
Multi-carrier authority matrices
Automated regulatory classification
Public designation badges
On-chain designation records
Cross-company universal designations
```

These can come later.

---

## 22. Working Conclusion

The Designation Model is the missing accountability layer between roles and events.

Entity Role tells the system what kind of user someone is.

Designation tells the system what that user is responsible for in this specific matter.

That distinction allows ClaimStore to preserve neutrality, enforce consent, assign responsibility, measure performance, support ClaimsBank, and expose the hidden accountability gaps in the insurance restoration market.

The Claim Caller is the first and most important insurance-side designation.

Now we are ready for **Document 6: Quantum Dashboard Underwriting Model v0.1**.

That document will use this new Claim Caller concept as a risk variable: markets with clear designations and accountable claim determinations are more underwritable than markets where decisions are slow, anonymous, opaque, or constantly revised.
