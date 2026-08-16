---
id: insurance-determination
title: "Insurance Determination and Claim Caller Addendum"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 13932
source_line_end: 14536
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# Insurance Determination Addendum v0.1  
## Claim Caller, Designations, Corporate Accountability, and Claim Request Decision Responsibility

## 1. Purpose

This addendum defines the insurance-side accountability layer inside the ClaimExpress Protocol.

The original system allowed insurance companies, adjusters, and claim managers to view, approve, reject, or hold claim requests. However, the deeper requirement is that every properly documented and submitted claim request must have a responsible person, role, or authorized designation assigned to make the call.

That responsible designation is called the **Claim Caller**.

The Claim Caller is the person or assigned authority responsible for making, recording, or standing behind the claim determination.

---

## 2. The Problem

Insurance companies often use third-party inspection teams, independent adjusters, adjusting vendors, and field reviewers to inspect, document, scope, and estimate claims.

However, these third parties are frequently not authorized to make the final claim determination.

They may inspect.

They may document.

They may estimate.

They may recommend.

They may provide an opinion.

But they may not be permitted to make the call.

The insurance company then relies on an internal, often opaque corporate process to determine whether the claim is denied, partially approved, adjusted, approved, or held.

This creates a problem for a neutral claim documentation system.

A properly documented claim request submitted through ClaimStore cannot disappear into a corporate veil.

The system must know:

```text id="x2ndtu"
Who is responsible for making the call?
What authority do they have?
When was the determination made?
What was the determination?
What evidence was reviewed?
What reason was given?
What happens next?
```

---

## 3. Claim Caller Definition

A Claim Caller is the designated person or authorized role responsible for making or recording the claim determination on a submitted claim request.

A Claim Caller may be:

```text id="c8xv8f"
Insurance Company Claim Manager
Designated Claims Manager
Staff Adjuster
Independent Adjuster with authority
Adjusting Vendor Representative with authority
Carrier-authorized Reviewer
Program Administrator
Other authorized insurance-side designee
```

The key requirement is not the title.

The key requirement is authority.

The Claim Caller is the accountable decision point.

---

## 4. Entity Role vs. Designation

This addendum introduces a critical distinction.

### 4.1 Entity Role

An Entity Role defines what a user can generally do inside an entity or company account.

Examples:

```text id="a41ndh"
Insurance Admin
Claim Manager
Adjuster
Call Center
Read-Only Reviewer
Independent Adjuster
Adjusting Vendor Admin
```

Entity Role is persistent.

It describes normal permissions.

### 4.2 Designation

A Designation is a claim-specific or request-specific assignment of responsibility.

Examples:

```text id="uk0c84"
Claim Caller
Assigned Adjuster
Field Inspector
Coverage Reviewer
Estimate Reviewer
Supplement Reviewer
Final Payment Reviewer
Dispute Escalation Contact
Mortgage Loss Draft Contact
```

Designation is contextual.

It answers:

```text id="fjuewj"
For this claim, who is responsible for this decision or task?
```

A user may have the Entity Role of Independent Adjuster but not have the Designation of Claim Caller.

A user may have the Entity Role of Claim Manager and be designated as Claim Caller for one claim but not another.

---

## 5. Why the Distinction Matters

The insurance company may say:

```text id="qw6nne"
“The adjuster inspected it, but they do not make coverage decisions.”
```

The system must then ask:

```text id="dwfqxs"
Who does?
```

Without a Claim Caller designation, no party is accountable for the decision.

The ClaimExpress Protocol should not allow the insurance side to create ambiguity around a submitted claim request.

If the system can identify the contractor who made the offer, the property owner who accepted or submitted the request, the field verifier who uploaded evidence, and the ClaimBuddy who ran the trip, it should also identify the insurance-side party responsible for the determination.

---

## 6. Claim Determination Types

A Claim Caller may make or record the following determinations:

```text id="s6uzy7"
Denied
Approved
Partially Approved
Approved with Adjustments
Held for Review
More Information Requested
Supplement Required
Reinspection Required
Escalated
Coverage Question
Closed
```

The prior “approve / reject / hold” model should be expanded.

A more complete model:

```text id="w0n5r3"
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

---

## 7. Claim Request Decision Record

Every claim request determination should create a Claim Decision Record.

Fields:

```text id="utv64f"
Claim Decision ID
ClaimStore Claim ID
Claim Request ID
Decision Type
Decision Amount, if applicable
Coverage Position, if applicable
Scope Items Approved
Scope Items Denied
Scope Items Adjusted
Reason Codes
Decision Notes
Claim Caller User ID
Claim Caller Entity ID
Claim Caller Entity Role
Claim Caller Designation
Authority Source
Decision Timestamp
Documents Reviewed
Evidence Reviewed
Estimate / Offer Version Reviewed
Supplement Link, if applicable
Next Action
```

---

## 8. Authority Source

Every Claim Caller designation should identify the authority source.

Possible values:

```text id="5vlf1r"
Carrier Staff Authority
Carrier Assigned Claim Manager
Carrier Assigned Staff Adjuster
Carrier Authorized Independent Adjuster
Carrier Authorized Adjusting Vendor
Program Authority
Delegated Authority
Recorded External Determination
Unknown / Not Provided
```

If the authority source is unknown, the system should mark the claim decision as incomplete or externally recorded without verified authority.

---

## 9. Claim Caller Assignment Workflow

### 9.1 Carrier Participates Directly

```text id="6xtxvi"
Insurance company receives claim request.
↓
Insurance admin or system assigns Claim Caller.
↓
Claim Caller reviews package.
↓
Claim Caller makes determination.
↓
Claim Decision Record is created.
```

### 9.2 Independent Adjuster Has Authority

```text id="3a2z7t"
Insurance company assigns IA.
↓
IA is designated as Claim Caller.
↓
IA reviews documentation and inspection results.
↓
IA makes determination within delegated authority.
↓
Decision is recorded.
```

### 9.3 Independent Adjuster Does Not Have Authority

```text id="uxls3q"
IA inspects and uploads estimate/opinion.
↓
IA is designated as Field Adjuster or Estimate Reviewer.
↓
Claim Caller remains unassigned or assigned to carrier claim manager.
↓
System requires Claim Caller designation before final determination can be recorded as insurance-side decision.
```

### 9.4 Carrier Refuses Platform Participation

```text id="g4z6s2"
Property owner or contractor submits package externally.
↓
System records delivery.
↓
External response is uploaded.
↓
System records External Determination.
↓
Claim Caller may be marked as Unknown / Not Provided unless response identifies responsible party.
```

---

## 10. Corporate Veil Problem

The Claim Caller concept addresses the corporate veil problem.

A properly documented claim request should not be met with an invisible corporate response.

The system should distinguish between:

```text id="zdixl6"
A named or designated person making the call
```

and:

```text id="dprzsk"
An undefined corporate process producing a response
```

The legal interpretation of this issue must be vetted by counsel, but the system architecture should preserve the accountability question.

The platform does not need to accuse the insurer.

It simply records:

```text id="11d4qk"
Claim Request Submitted
Decision Received
Claim Caller Identified / Not Identified
Authority Verified / Not Verified
Reason Provided / Not Provided
```

This is powerful without being reckless.

---

## 11. Insurance-Side Designations

The insurance-side designation model should include:

```text id="p3l1lh"
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

These designations are assigned per claim or per claim request.

A single user can hold multiple designations.

A single claim can have multiple designees.

But every submitted Claim Request should have exactly one responsible Claim Caller at the determination stage.

---

## 12. Relationship to Human Blockchain

Human Blockchain verifies facts.

Claim Caller makes determinations.

Examples:

```text id="x4arl6"
ClaimBuddy verifies roof photos were taken.
Field Inspector verifies damage was observed.
Independent Adjuster uploads estimate/opinion.
Claim Caller determines approve, deny, partial approve, adjust, or hold.
```

The system must not confuse observation with determination.

Observation says:

```text id="bu5gl3"
This is what was seen.
```

Determination says:

```text id="5cpnug"
This is what the insurance-side authority decided.
```

---

## 13. Relationship to TER and Proficiency

Claim Caller performance can be measured, but carefully.

Potential metrics:

```text id="m3hj1n"
Decision response time
Decision completeness
Reason-code completeness
Reversal rate
Supplement rate
Reinspection rate
Escalation rate
Over/under variance
Final outcome variance
Dispute rate
```

For Independent Adjusters:

```text id="kli9np"
First estimate/opinion accuracy
Scope variance
Supplement frequency
Reinspection frequency
Documentation completeness
```

For Claim Callers:

```text id="2tr6kl"
Determination cycle time
Decision clarity
Adjustment accuracy
Final claim outcome variance
Appeal/dispute reversal rate
```

The system must separate:

```text id="068th4"
Field Adjuster Proficiency
```

from:

```text id="bfiib7"
Claim Caller Determination Accountability
```

---

## 14. Relationship to ClaimsBank

ClaimsBank should not treat an insurance-side response as sufficient unless the response has a recorded decision state.

Future ClaimsBank release logic may require:

```text id="t56wgp"
Claim Request Approved
Approved Amount Recorded
Claim Caller Identified
Authority Source Recorded
Property Owner Acceptance / Acknowledgement
Completion Verification
Mortgage / Loss Draft Conditions, if applicable
```

If Claim Caller is unknown, ClaimsBank can still record the payment event, but risk flags should remain.

---

## 15. Relationship to SelfInsurity

SelfInsurity protects the property owner’s right to submit, document, and control their own claim file.

The Claim Caller model complements SelfInsurity by requiring the insurance side to identify who made the determination.

The property owner directs their claim request.

The insurer, through a Claim Caller or equivalent designation, responds.

The system preserves both sides.

---

## 16. Relationship to ClaimExpress Protocol

ClaimExpress Protocol should add these event types:

```text id="kc9wm5"
Claim Caller Assigned
Claim Caller Changed
Authority Source Recorded
Field Adjuster Assigned
Estimate Reviewer Assigned
Coverage Reviewer Assigned
Claim Determination Made
Claim Determination Revised
Claim Determination Superseded
Claim Caller Not Identified
External Determination Recorded
```

Claim Request statuses should expand to:

```text id="znahxj"
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

---

## 17. Relationship to Legal Architecture

This concept belongs in the Legal Architecture To Be Vetted document.

Questions for counsel:

1. Can the system require a participating insurance company to designate a Claim Caller?
2. Can the system describe a missing Claim Caller as an incomplete response?
3. How should “authority source” be worded?
4. Can failure to identify a Claim Caller be framed as a transparency issue?
5. What language avoids unauthorized claim handling, public adjusting, or legal advice?
6. How should external carrier responses be recorded when the platform is not integrated with the insurer?
7. What disclaimers are required when the platform records determinations but does not make them?

---

## 18. Phase 1 Implementation

Phase 1 should support the concept without overbuilding it.

Minimum fields:

```text id="vt1ivw"
Claim Caller User / Name
Claim Caller Entity
Claim Caller Designation
Authority Source
Decision Type
Decision Date
Decision Amount
Reason / Notes
External or Platform-Recorded Flag
```

Minimum statuses:

```text id="qxsp7p"
Submitted
Delivered
Assigned
Under Review
Approved
Approved Partial
Approved with Adjustments
Denied
Held
More Information Requested
External Response Recorded
No Claim Caller Identified
```

If the insurer does not participate, the contractor/property owner/platform support can upload or record the external response, but it must be marked accordingly.

---

## 19. Canonical Sentence

A claim request is not truly answered by “the insurance company” as an abstraction; it is answered by a Claim Caller or recorded external determination with an identifiable authority source, decision type, timestamp, reason, and reviewed evidence.

---

## 20. Working Conclusion

The Claim Caller is the missing accountability role on the insurance side.

It distinguishes inspection from determination, opinion from authority, and corporate process from assigned responsibility.

Entity Role tells us what a user generally can do.

Designation tells us what that user is responsible for on this claim.

That distinction is essential to ClaimStore’s no-conflicts architecture, SelfInsurity, Human Blockchain, TER, ClaimsBank, and the future legal model.

This should be inserted before the Quantum Dashboard document because it changes underwriting too. A market with fast, named, accountable Claim Callers behaves very differently from a market where decisions disappear into anonymous carrier process.

My next recommendation is to add a short **Designation Model Addendum** to the Object Model, then proceed to the Quantum Dashboard.
