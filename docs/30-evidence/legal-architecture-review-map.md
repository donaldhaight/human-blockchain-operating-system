---
id: legal-review-map
title: "Legal Architecture To Be Vetted"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 22658
source_line_end: 23982
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# Legal Architecture To Be Vetted v0.1  
## ClaimStore / ClaimExpress / RRCA / SelfInsurity / ClaimBuddy / ClaimsBank / Sponsor Legal Review Map

## 1. Purpose

This document organizes the legal architecture that must be reviewed by qualified counsel before launch.

It does not provide legal advice.

It does not make final legal conclusions.

It identifies the major legal boundaries, questions, risks, documents, doctrines, user relationships, and platform behaviors that must be vetted before the ClaimStore ecosystem is launched, marketed, funded, sponsored, or operated at scale.

The purpose is to preserve the system’s no-conflicts architecture while preparing it for professional legal review.

---

## 2. Core Legal Thesis

The ClaimStore ecosystem depends on clear separation between:

```text
Platform
User
Professional participant
Contractor
Property owner
Insurance company
Adjuster
Field service provider
ClaimBuddy
Sponsor
Financial service provider
Legal service provider
Governance layer
```

The system must avoid pretending that one party is another.

The core rule remains:

```text
No user clicks OK for another user.
```

The legal architecture must preserve:

```text
Independent user consent
Role-specific authority
Designation-specific responsibility
Self-help boundaries
Professional-service boundaries
Insurance decision accountability
Financial release-condition boundaries
Sponsor rights limitations
Platform neutrality
Auditability
```

---

## 3. Legal Status of This Document

Status:

```text
LEGAL_TO_BE_VETTED
```

This document is a planning and issue-identification document.

It should be reviewed by counsel in relevant areas, including:

```text
Technology platform terms
Insurance law
Public adjusting rules
Contractor licensing
Consumer protection
Data privacy
Financial services / escrow / payments
Employment and independent contractor law
Franchise / business opportunity law
Advertising and sponsorship law
Dispute resolution
Securities / token / investment law, if applicable
```

---

## 4. Historical Legal Foundation

The original legal architecture already separated two important layers:

### 4.1 ClaimExpress Terms of Service

ClaimExpress.com was framed as:

```text
Platform
Self-help system
Do-it-yourself claim/project documentation utility
Collaboration utility
Marketplace connector
```

The TOS separated the platform from:

```text
Legal advice
Public adjusting
Insurance agency
Contracting services
Fiduciary duty
Guarantees
Employment
Franchise
Agency
Partnership
Joint venture
```

### 4.2 RRCA Member Agreement

The RRCA Member Agreement governed professional participants and contractor-side protocol.

It addressed:

```text
RRCA Business System
Lifetime Roof Assurance
Task Efficiency Rating
Member obligations
Certification
OSHA training
Contracting protocol
Communication
Trips / inspections / signatures
Scoping / estimating
Adjuster meetings
Building / troubleshooting / closeout
Dispute resolution
Warranty administration
Pay / escrow / reserve concepts
```

### 4.3 Purchase Order / One-Page Understanding

The purchase order and one-page understanding reinforced that:

```text
ClaimExpress.com Terms of Service
```

and:

```text
RRCA Membership Agreement
```

were separate agreements.

This separation should be preserved and modernized.

---

## 5. Primary Legal Separation Model

The ecosystem should be designed around separate legal layers.

```text
Public User Access
↓
Terms of Service / Privacy Policy
↓
Self-help tools / ClaimStore platform access
```

```text
Professional Participant Access
↓
Professional Agreement / Member Agreement / Field Service Agreement
↓
Protocol duties / certification / SLA / TER
```

```text
Sponsor Participation
↓
Sponsor Agreement
↓
Defined rights, obligations, limits, data access, term, revocation
```

```text
Financial Release / ClaimsBank
↓
Financial partner agreements / escrow or payment agreements, if applicable
↓
Release-condition logic and fund movement rules
```

```text
Legal / Dispute / Advocacy Services
↓
Separate engagement with licensed professional or entity
↓
No hidden platform legal representation
```

---

## 6. Core Legal Principle: SelfInsurity

SelfInsurity is the guided self-help doctrine.

Public phrase:

```text
We Help You Help Yourself.
```

Legal review must determine how this can be safely expressed.

SelfInsurity should mean:

```text
User-directed tools
User-controlled claim file
Independent service provider access
Educational content
Documentation support
Workflow guidance
Evidence organization
Optional professional help
```

SelfInsurity should not imply, unless properly structured and licensed:

```text
Legal representation
Public adjusting
Insurance brokerage
Claim advocacy by the platform
Guaranteed insurance outcome
Carrier obligation
Financial guarantee
```

---

## 7. No User Clicks OK for Another User

This principle should become a legal and technical control.

The system must prevent:

```text
Contractor accepting offer for property owner
Platform admin signing for user
ClaimBuddy approving completion for property owner without authority
Insurance-side user approving on behalf of another insurance authority without designation
Support user consenting for property owner
```

Exceptions require explicit delegated authority.

Delegated authority must include:

```text
Who delegated
Who received authority
Scope
Expiration
Related object
Allowed actions
Signature / consent
Revocation
Audit trail
```

Legal review questions:

1. What delegated authority language is required?
2. Which actions can be delegated?
3. Which actions should never be delegated?
4. What records are needed to prove authorization?
5. How should revocation work?

---

## 8. Terms of Service Review

The modern TOS should address:

```text
User eligibility
Account creation
Agreement acceptance
Self-help nature
No legal advice
No public adjusting
No insurance agency relationship
No contractor guarantee by platform
No fiduciary duty
Independent service providers
Marketplace limitations
User responsibility
Electronic signatures / click acceptance
Document uploads
Data privacy
User content
Payment terms
Subscriptions / virtual items
Dispute resolution
Limitation of liability
Indemnity
Termination
Changes to terms
```

Key question:

```text
How can the platform provide powerful claim/project tools without being treated as the user’s legal representative, public adjuster, insurer, agent, contractor, or fiduciary?
```

---

## 9. Privacy Policy / Data Use Review

The system will handle sensitive data:

```text
Property addresses
Insurance policy information
Claim information
Photos and videos of homes
Documents
Signatures
Payment records
Contractor business information
Performance scores
Claim decisions
Potential dispute records
```

Privacy review topics:

```text
Data collection
Data use
Data sharing
Service provider access
Sponsor data access
De-identified dashboard data
Retention
Deletion
Audit logs
Security
Consumer rights
Photos/videos
Location data
Sensitive claim documents
```

Sponsor access must be especially controlled.

Sponsors should not receive identified claim/user data merely by being sponsors.

---

## 10. Professional Participant Agreement Review

Professional participants may include:

```text
Licensed Contractors
Independent Sales Reps
Independent Sales & Production Management Contractors
Other Trade Contractors
Subcontractors
ClaimBuddy verifiers
Field service providers
Independent adjusters
Inspection providers
Documentation providers
```

Agreements should address:

```text
Independent contractor status
No employment unless separately intended
Licensing responsibility
Insurance requirements
Background checks, where appropriate
OSHA / safety obligations
Certification
Protocol compliance
Evidence requirements
Communication standards
SLA
TER
Dispute resolution
Warranty obligations
Payment terms
Data use
Confidentiality
Termination / blocking
```

Legal review questions:

1. Does the agreement create franchise risk?
2. Does it create employment risk?
3. Does it create agency risk?
4. Does it create joint venture or partnership risk?
5. Does it improperly control contractors?
6. Does TER create adverse-action risk?
7. Does routing based on TER require special disclosures?

---

## 11. Contractor Licensing and Construction Responsibility

The platform must not confuse software support with construction responsibility.

Potential parties:

```text
Licensed Contractor
Subcontractor
Founding Operator
RRCA Member
Field Service Provider
Platform
```

Legal review should clarify:

```text
Who contracts with property owner?
Who is responsible for permits?
Who is responsible for construction quality?
Who warranties work?
Who handles punch-list?
Who handles worker safety?
Who pays subs/suppliers?
Who collects payments?
Who bears license/insurance obligations?
```

The founding operator may guarantee work in Season 1, but the scope and legal form of that guarantee must be reviewed.

---

## 12. George Washington Guarantee Review

The George Washington rollout model uses a founding contractor/operator to stand behind early work and absorb early trust risk.

Potential guarantee areas:

```text
Workmanship
Punch-list
Warranty
Documentation
Final paperwork
Dispute response
Completion support
Field correction
```

Legal review questions:

1. Who gives the guarantee?
2. What exactly is guaranteed?
3. What is excluded?
4. What term applies?
5. Is reserve required?
6. Does the guarantee create insurance-like risk?
7. Does it create warranty, service contract, or consumer protection obligations?
8. How does it interact with RRCA / Lifetime Roof Assurance?
9. How does it transition to ClaimsBank / reserve model later?

---

## 13. Public Adjusting Boundary

This is a critical legal issue.

The platform may help users document, organize, and submit claim information.

But public adjusting laws may restrict who can negotiate, advocate, interpret coverage, or act on behalf of insureds.

Legal review must address:

```text
Statement of Claim language
Claim documentation support
Supplement processing
Estimate preparation
Property owner self-help
Contractor involvement in claim process
ClaimBuddy assistance
Buddy Claim role
SelfInsurity language
Dispute support
Insurance company communications
```

Questions:

1. What can a contractor do in each target state?
2. What can the platform do without being a public adjuster?
3. What can ClaimBuddy do?
4. What can Buddy Claim do?
5. What language is safe for “help you help yourself”?
6. What must be user-directed?
7. What disclaimers are required?
8. When must a licensed public adjuster or attorney be involved?

---

## 14. Legal Advice Boundary

The platform should not provide legal advice unless a licensed legal entity and engagement are separately established.

Risk areas:

```text
Dispute resolution
Insurance coverage explanations
Claim denial response
Contract interpretation
Lien waivers
Mortgage documents
Arbitration
Delegated authority
Terms and forms
```

Legal review questions:

1. What content is educational vs. legal advice?
2. What forms can be provided as self-help forms?
3. What disclaimers are required?
4. When should users be referred to an attorney?
5. Can Buddy Claim be a legal marketplace or referral layer?
6. How should attorney participation be separated?

---

## 15. Insurance Company / Claim Caller Review

The Claim Caller model is an accountability mechanism.

It records who is responsible for making or recording a claim determination.

Legal review must assess how to describe this without making unsupported legal accusations.

Safe system actions may include:

```text
Claim Caller assigned
Claim Caller not identified
Authority source recorded
External determination recorded
Reason provided / not provided
Decision timestamp recorded
```

Potential risk language to avoid without legal review:

```text
Carrier violated rules
Corporate veil abuse
Bad faith
Unlawful denial
```

Possible safer framing:

```text
The system records whether an identified decision authority was provided.
```

Questions for counsel:

1. Can participating carriers be contractually required to designate a Claim Caller?
2. How should non-participating carrier responses be recorded?
3. Can “Claim Caller Not Identified” be displayed to property owners?
4. Can this data be aggregated for dashboard use?
5. How should authority source be defined?
6. Does this create insurance regulatory implications?

---

## 16. Independent Adjuster / Adjusting Vendor Review

The system must distinguish:

```text
Inspection
Estimate
Opinion
Recommendation
Determination
```

An independent adjuster may inspect and estimate but may not be authorized to make the call.

Legal review should address:

```text
Adjuster licensing
Delegated authority
Carrier authority
Adjusting vendor responsibility
Claim Caller designation
IA proficiency scoring
Data sharing
```

Key rule to vet:

```text
An Independent Adjuster is not the Claim Caller unless designated with authority to make or record the determination.
```

---

## 17. ClaimBuddy / Field Service Agreement Review

ClaimBuddy may enter property, capture photos/videos, collect documents, witness signatures, and perform field tasks.

Legal review topics:

```text
Independent contractor status
Background checks
Property access
Photo/video consent
Data privacy
Safety
Insurance / bonding
Scope of service
No legal advice
No public adjusting
No contractor authority
No property owner consent authority
Conflict disclosure
Interested vs non-interested verifier
Payment terms
Task cancellation
Dispute handling
```

ClaimBuddy must assist without becoming an unauthorized representative.

---

## 18. Human Blockchain Evidence Review

Human Blockchain events create a trusted record.

Legal review topics:

```text
Evidence admissibility
Audit trail
Electronic signatures
Timestamp reliability
GPS/location data
Photo/video consent
Record retention
Correction/reversal events
Data ownership
User access to records
Third-party access
```

Important question:

```text
How should the system describe verified events without overstating legal conclusiveness?
```

Safe language may be:

```text
System-verified event
Evidence-backed event
Timestamped record
Uploaded documentation
```

Avoid overclaiming:

```text
Legally conclusive proof
Final legal determination
Court-admissible guarantee
```

unless counsel approves.

---

## 19. Electronic Signature / Clickwrap Review

The system will rely on clicks and signatures.

Legal review topics:

```text
Clickwrap enforceability
Signature capture
Agreement versioning
Consent logs
IP/device metadata
Audit trails
Delegated authority
Offer acceptance
Completion approval
Claim request authorization
Member agreement acceptance
Sponsor agreement signature
```

Every consent event should record:

```text
User
Timestamp
Agreement/document version
Action
Related object
Evidence, if applicable
```

---

## 20. ClaimsBank / Escrow / Payment / Reserve Review

ClaimsBank should begin as:

```text
Transaction-record logic
Bookkeeping event system
Release-condition model
Escrow/reserve architecture to be vetted
```

It should not be marketed as a bank, escrow company, lender, payment processor, or regulated financial institution unless properly structured.

Legal review topics:

```text
Escrow
Money transmission
Payment processing
Lending
Deductible financing
Reserve accounts
Warranty reserves
Dispute holdbacks
Loss draft handling
Mortgage company funds
Commissions
Referral fees
Trust accounts
Custody of funds
ClaimsBank name risk
```

Phase 1 safer language:

```text
ClaimsBank release-condition model
ClaimsBank transaction record
ClaimsBank-ready events
Escrow candidate
Reserve candidate
Holdback candidate
Payment event recorded
```

---

## 21. Pay / Escrow / Reserve Review

The RRCA one-page understanding included Pay, Escrow, and Reserve as a standard method to help guarantee everyone gets paid.

Legal review should address:

```text
Who holds funds?
Who controls release?
Whose funds are they?
What account type?
What disclosures?
What fees?
What licensing?
What happens in dispute?
What happens on termination?
```

Potential uses:

```text
Sales rep commissions
Subcontractor payments
Supplier payments
Warranty reserves
Dispute holdbacks
Mortgage release conditions
Completion-based draw releases
```

---

## 22. Referral Fee / Win Fee Review

The system may track referral fees, win fees, project ID fees, transaction fees, field service fees, and optional service fees.

Legal review topics:

```text
Contractor referral laws
Insurance referral restrictions
Lead generation rules
Disclosure requirements
Anti-kickback issues
Real estate / mortgage related restrictions
Consumer protection
Tax treatment
Revenue recognition
```

Referral/win fee fields must be transparent and contractually defined.

---

## 23. Sponsor Agreement Review

Sponsor positions must not be confused with ownership, securities, governance rights, insurance authority, or guaranteed returns.

Sponsor agreement topics:

```text
Sponsorship scope
Category
Territory
Season
Term
Rights
Obligations
Contribution
Recognition
Data access
Use of marks
Exclusivity
Renewal
Revocation
No ownership
No control
No guarantee
No unauthorized claims
Confidentiality
Compliance
Dispute resolution
```

Critical principle:

```text
Sponsorship, not ownership.
```

Legal review questions:

1. Does any sponsor package create securities risk?
2. Does territory/category exclusivity create competition or franchise issues?
3. Does sponsor data access create privacy risk?
4. Does sponsor influence compromise neutrality?
5. What disclosures are required?

---

## 24. Securities / Token / Stakeholder Review

The broader ecosystem may eventually include tokens, stakeholder rights, rewards, treasuries, or DAO-like structures.

These must be deferred or separately reviewed.

Legal review topics:

```text
Securities law
Investment contract risk
Token issuance
Rewards
Governance rights
Profit sharing
Staking
Treasury
DAO governance
Crowdfunding
Investor materials
Sponsor vs investor distinction
```

Season 1 should avoid token-first positioning.

Use:

```text
Stakeholder participation
Sponsor position
Operating cell
Market infrastructure
```

not:

```text
Investment return promise
Token upside
Guaranteed profit
Ownership of market
```

---

## 25. Franchise / Business Opportunity Review

The RRCA / contractor network / territory / protocol model may raise franchise or business opportunity issues.

Legal review topics:

```text
Use of marks
Required fees
Control or assistance
Marketing system
Territory rights
Required suppliers
Training obligations
Ongoing support
Profit expectations
Member network
Certification
Lifetime Roof Assurance
```

Potential risk:

```text
If members pay fees and operate under a branded system with significant control/support, franchise laws may apply.
```

This must be reviewed before broad contractor rollout.

---

## 26. Employment / Independent Contractor Review

Roles such as ISR, ClaimBuddy, field service provider, inspector, documentation provider, and support contractor may create employment classification issues.

Legal review topics:

```text
Control
Scheduling
Tools
Training
Exclusivity
Payment method
Performance scoring
Discipline / blocking
Insurance
Tax reporting
State labor rules
```

TER and routing may affect classification if not carefully structured.

---

## 27. TER / Performance Scoring Review

TER is powerful but sensitive.

Legal review topics:

```text
User notice
Scoring transparency
Adverse action
Appeal/remediation
Bias
Data accuracy
Public display
Defamation risk
Employment classification
Contractor discipline
Consumer-facing rankings
```

Phase 1 safer approach:

```text
Internal operations
Coaching
Training
Routing eligibility
Manual review before blocking
No public score publication
```

---

## 28. Quantum Dashboard Review

The Quantum Dashboard may show market projections, sponsor value, revenue assumptions, TER confidence, Claim Caller accountability, and risk-adjusted opportunity.

Legal review topics:

```text
Projection disclaimers
Sponsor/investor materials
No guaranteed returns
Data accuracy
Privacy
Aggregation
Carrier performance reporting
Contractor rankings
Market claims
Financial model assumptions
```

Dashboard outputs should distinguish:

```text
Actual data
Assumptions
Scenarios
Forecasts
Projections
Opinions
```

---

## 29. Founding Operator Dual Code Base Review

The founding operator may use an internal contractor operations system while the neutral platform maintains separate market records.

Legal review topics:

```text
Data sharing
User consent
Neutrality
Conflict disclosures
Contractor guarantee
Imported events
Internal vs platform truth
Property owner approvals
Insurance communication
```

Important rule:

```text
A founding operator event should not become neutral consent or neutral verification unless the required platform evidence and authority rules are satisfied.
```

---

## 30. Platform Neutrality and Conflict Review

The system is not interest-neutral; it is role-neutral.

Each party has interests.

The platform must preserve:

```text
Disclosure
Role separation
Independent consent
Independent service-provider responsibility
Event audit trail
Evidence standards
Conflict identification
```

Legal review should evaluate:

```text
Can a platform be contractor-originated and still function neutrally?
What disclosures are required?
How should founding operator conflicts be presented?
How should sponsored categories be disclosed?
How should preferred providers be labeled?
```

---

## 31. Document Set To Be Created

The legal architecture likely requires these documents:

```text
Terms of Service
Privacy Policy
Property Owner User Agreement / Acknowledgements
Professional Participant Agreement
Contractor Member / Protocol Agreement
ClaimBuddy Agreement
Field Service Provider Agreement
Independent Sales Rep Agreement
Sponsor Agreement
Delegated Authority Form
Electronic Signature Consent
Claim Request Authorization
Completion Verification Form
Dispute Documentation Form
Warranty / Lifetime Roof Assurance Documents
ClaimsBank Release-Condition Terms
Escrow / Reserve Agreement, future
```

Each document must be mapped to user type and workflow.

---

## 32. Legal Review Issue Register

Create a legal issue register with fields:

```text
Issue ID
Issue Name
Description
Affected Module
Affected User Type
Risk Category
Current Assumption
Question for Counsel
Priority
Status
Decision
```

Initial issue list:

```text
L001 SelfInsurity wording
L002 Public adjusting boundary
L003 Legal advice boundary
L004 Contractor guarantee
L005 Claim Caller accountability language
L006 ClaimsBank escrow/payment/reserve
L007 Referral/win fees
L008 Sponsor rights
L009 Securities/token risk
L010 Franchise/business opportunity risk
L011 Independent contractor classification
L012 TER scoring/adverse action
L013 Data privacy
L014 Electronic signatures
L015 Delegated authority
L016 Founding operator conflict disclosure
L017 Human Blockchain evidence claims
L018 Quantum Dashboard projections
```

---

## 33. Season 1 Legal Priorities

Before Season 1 launch, prioritize:

```text
Terms of Service
Privacy Policy
Property owner self-help acknowledgements
Contractor/professional agreement
ClaimBuddy/field service agreement
Electronic signature consent
Delegated authority form
Sponsor agreement template
Claim Caller language review
ClaimsBank naming/language review
TER internal-use policy
Founding operator guarantee language
```

Do not wait for every future legal issue to be solved.

But do not launch high-risk features before their legal basis is reviewed.

---

## 34. Phase 1 Legal Guardrails

Phase 1 should use guardrails:

```text
No token launch
No actual ClaimsBank fund movement unless properly structured
No public TER rankings
No legal advice
No public adjusting by platform
No insurance product sale unless properly licensed/structured
No sponsor ownership claims
No anonymous user consent
No unvetted guarantee language
No automated adverse action without review
No unrestricted sponsor data access
```

---

## 35. Language Principles

Use careful language.

Prefer:

```text
Self-help
Documentation
Workflow
Record
Evidence
Request
Review
Decision record
Release condition
Sponsor position
Operating cell
Scenario
To be vetted
```

Avoid or vet carefully:

```text
Legal representation
Public adjusting
Guaranteed claim approval
Bank
Escrow
Insurance product
Investment return
Ownership
Fraud accusation
Bad faith
Carrier violation
Certified legal proof
```

---

## 36. Legal Architecture Relationship to Product

Legal architecture must be embedded in product design.

Examples:

```text
TOS acceptance → event ledger
Offer acceptance → property owner consent event
Claim Caller → designation and authority source
ClaimBuddy task → conflict disclosure and evidence rules
ClaimsBank release condition → required verification and approvals
TER flag → internal review and remediation path
Sponsor dashboard → data access controls
```

Legal review is not a PDF afterthought.

It shapes the product.

---

## 37. Canonical Legal Sentence

The ClaimStore ecosystem is designed as a role-based, user-directed, evidence-backed market infrastructure system that helps parties document, route, verify, and manage insurance restoration claim/project workflows without allowing the platform or one user to secretly assume another user’s legal, insurance, financial, or contractual authority.

---

## 38. Working Conclusion

The legal architecture is not a brake on the vision.

It is the structure that allows the vision to survive contact with the market.

The system becomes trustworthy because it separates:

```text
Who owns the decision
Who performs the task
Who verifies the fact
Who makes the determination
Who holds funds
Who guarantees work
Who sponsors a category
Who governs the table
```

That separation is the no-conflicts architecture.

The legal review must protect it.

Next I recommend **#12: One Prompt Event Package v0.1**.

That will turn the entire canon into a launch/demo structure: narrative, agenda, proof points, demo flow, sponsor framing, founder statement, Kimosabe framing, and the Season 1 ask.
