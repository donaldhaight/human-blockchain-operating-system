---
id: source-open-questions
title: "Source Open Questions"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 46749
source_line_end: 48695
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# OPEN_QUESTIONS.md  
## Genesis ClaimStore Season 1 Repository  
### Strategic, Product, Technical, Legal, Operating, Sponsor, Dashboard, and Event Questions

---

## 1. Purpose

This document tracks unresolved questions for the Genesis ClaimStore Season 1 Repository.

The purpose is to stop carrying open questions loosely in conversation, memory, documents, and strategy notes.

Every important unresolved issue should be captured here, categorized, numbered, and eventually resolved through:

```text
Decision Log
Product requirement update
Legal review
Technical validation
Sponsor strategy
Operating decision
Founder decision
```

This document does not slow the project down.

It prevents confusion later.

---

## 2. Question Status Values

Use these values:

```text
OPEN
ANSWERED
NEEDS_RESEARCH
NEEDS_COUNSEL
NEEDS_FOUNDER_DECISION
NEEDS_TECHNICAL_VALIDATION
NEEDS_SPONSOR_FEEDBACK
DEFERRED
SUPERSEDED
```

---

## 3. Priority Values

Use these values:

```text
P0 — Must answer before Season 1 build or legal launch path
P1 — Must answer before One Prompt Event or sponsor outreach
P2 — Should answer during MVP build
P3 — Can defer until Season 2+
```

---

## 4. Question Categories

Use these categories:

```text
STRATEGY
SEASON_1
PRODUCT
TECHNICAL
DATA_MODEL
LEGAL
OPERATIONS
SPONSOR
DASHBOARD
EVENT
AGENT
SOURCE
FOUNDER
```

---

## 5. Question Entry Format

Recommended format:

```text
Question ID:
Question:
Category:
Priority:
Status:
Why It Matters:
Related Documents:
Potential Decision Path:
Owner:
Notes:
```

---

# 6. Strategic Questions

## Q172 — Which first operating market should Season 1 target?

Category:

```text
SEASON_1
OPERATIONS
STRATEGY
```

Priority:

```text
P0
```

Status:

```text
OPEN
```

Why It Matters:

The first market determines legal review, contractor availability, weather patterns, compliance requirements, sponsor relevance, and operating-cell complexity.

Related Documents:

```text
Season 1 Operating Plan and Roadmap
Quantum Dashboard Underwriting Model
Backlog and User Stories
Legal Review Issue Register
```

Potential Decision Path:

Compare candidate markets by:

```text
Storm frequency
Roofing claim volume
Known contractor relationships
Legal complexity
Permit/NOC requirements
Sponsor interest
Travel/field support feasibility
```

---

## Q173 — Which founding operator / contractor operation will be used?

Category:

```text
SEASON_1
OPERATIONS
LEGAL
```

Priority:

```text
P0
```

Status:

```text
OPEN
```

Why It Matters:

The founding operator carries the George Washington rollout. This party proves the workflow, absorbs early trust risk, and may provide defined guarantees.

Related Documents:

```text
George Washington Rollout Model
Season 1 Operating Plan
Legal Review Issue Register
Founding Operator Playbook
```

Potential Decision Path:

Identify whether the founding operator is:

```text
Existing contractor company
New controlled contracting entity
RRCA-aligned contractor
Joint operating partner
Demo-only synthetic operator for event
```

---

## Q174 — What exact format should the One Prompt Event use?

Category:

```text
EVENT
SPONSOR
STRATEGY
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

The event may be private, sponsor-only, recorded, livestreamed, staged, or internal-first.

Related Documents:

```text
One Prompt Event Package
Season 1 Operating Plan
Sponsor Position Book
Legal Review Issue Register
```

Potential Decision Path:

Choose from:

```text
Private founder/sponsor briefing
Recorded demo
Invite-only strategic partner event
Internal command event
Public announcement after legal review
Two-stage private then public reveal
```

---

## Q175 — Which sponsor category should be approached first?

Category:

```text
SPONSOR
STRATEGY
DASHBOARD
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

The first sponsor category sets the tone and may validate the business model.

Candidate sponsor categories:

```text
Insurance / Protection Sponsor
ClaimsBank / Payment / Escrow Sponsor
ClaimBuddy Verification Sponsor
Technology Infrastructure Sponsor
Construction Management / RRCA Sponsor
Territory Sponsor
```

Related Documents:

```text
Founding Stakeholder Sponsor Position Book
Quantum Dashboard Underwriting Model
One Prompt Event Package
Legal Review Issue Register
```

Potential Decision Path:

Evaluate each sponsor category by:

```text
Strategic fit
Legal complexity
Capital potential
Credibility impact
Speed to conversation
Risk of misunderstanding
```

---

## Q176 — Which legal counsel category should be engaged first?

Category:

```text
LEGAL
SEASON_1
OPERATIONS
```

Priority:

```text
P0
```

Status:

```text
OPEN
```

Why It Matters:

The ecosystem touches multiple legal areas. The first counsel engagement must focus on the highest Season 1 risk.

Candidate first counsel categories:

```text
Technology platform / TOS counsel
Insurance / public adjusting counsel
Construction / contractor counsel
Financial services / escrow / payments counsel
Securities / sponsor counsel
Privacy / data counsel
```

Related Documents:

```text
Legal Architecture To Be Vetted
Legal Review Issue Register
README
Master Context
```

Potential Decision Path:

Start with combined review of:

```text
TOS
SelfInsurity
Public adjusting
ClaimBuddy scope
Claim Caller language
Founding operator guarantee
```

---

# 7. Product Questions

## Q177 — Should the first build be founding-operator system, neutral platform, or shared event spine?

Category:

```text
PRODUCT
TECHNICAL
ARCHITECTURE
```

Priority:

```text
P0
```

Status:

```text
OPEN
```

Why It Matters:

This decides whether the first code focuses on contractor operations, neutral market infrastructure, or a shared event/protocol backbone.

Related Documents:

```text
George Washington Rollout Model
Data Model Master Specification
Backlog and User Stories
Decision Log
```

Potential Decision Path:

Options:

```text
A. Build founding-operator system first.
B. Build neutral platform first.
C. Build shared identity/event/protocol spine first.
D. Build demo prototype first, then decide production architecture.
```

Recommended leaning:

```text
Shared event/protocol spine first, with contractor-first workflow surfaces.
```

---

## Q178 — What is the minimum acceptable external determination record?

Category:

```text
PRODUCT
LEGAL
DATA_MODEL
```

Priority:

```text
P0
```

Status:

```text
OPEN
```

Why It Matters:

Carriers may not participate directly at first. The system needs a safe way to record decisions without falsely creating Claim Caller authority.

Related Documents:

```text
Claim Caller Addendum
Data Model Master Specification
Legal Review Issue Register
Acceptance Test and QA Master Plan
```

Potential minimum fields:

```text
Decision type
Date received
Source document or communication
Carrier name
Claim number, if available
Amount, if applicable
Reason, if provided
Claim Caller identified / not identified
Authority source known / unknown
Uploaded evidence
Recorded by user
```

---

## Q179 — Which Phase 1 features must be live versus mocked for the One Prompt Event?

Category:

```text
PRODUCT
EVENT
TECHNICAL
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

The event needs credibility but does not require full production software.

Related Documents:

```text
One Prompt Event Package
Backlog and User Stories
Acceptance Test and QA Master Plan
MVP Demo Requirements
```

Potential split:

Live:

```text
Identity mock/demo users
Project/offer flow
Event ledger view
Claim request mock
Claim Caller record
Evidence/task mock
Dashboard scenario
```

Mocked:

```text
Payment processing
Actual escrow
Carrier integration
Full TER automation
Full mobile ClaimBuddy app
```

---

## Q180 — What dashboard assumptions should be used for the first operating cell?

Category:

```text
DASHBOARD
SPONSOR
EVENT
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

Quantum Dashboard needs defensible assumptions for event/demo/sponsor conversations.

Related Documents:

```text
Quantum Dashboard Underwriting Model
One Prompt Event Package
Sponsor Position Book
Legal Review Issue Register
```

Potential assumptions:

```text
Affected properties
Claim conversion rate
Average claim value
Service attachment rate
Platform capture rate
TER confidence
Capacity confidence
Claim Caller accountability
Regulatory confidence
Founding operator guarantee confidence
```

---

## Q181 — Which other charge types are required for MVP?

Category:

```text
PRODUCT
DATA_MODEL
BOOKKEEPING
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

Other Charges are first-class objects, but MVP should not overbuild every possible category.

Minimum likely MVP types:

```text
Permit
Trip
Engineering
Measurement Report
Estimate Service
Supplement Processing
Collection Letter
Warranty Administration
Mortgage Processing
```

Related Documents:

```text
Contractor Offer Addendum
Data Model Master Specification
Backlog and User Stories
```

---

## Q182 — Which ClaimBuddy task types are required for MVP?

Category:

```text
PRODUCT
OPERATIONS
LEGAL
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

ClaimBuddy must be narrow enough to launch safely and broad enough to prove Human Blockchain.

Minimum likely MVP task types:

```text
Photo / Video Capture
Damage Documentation
Document Pickup
Signature Capture
Completion Verification
Adjuster Meeting Documentation
Final Paperwork Support
```

Related Documents:

```text
Human Blockchain / ClaimBuddy Operating Model
User Flow Master Specification
Legal Review Issue Register
```

---

## Q183 — Which roles and designations are mandatory for MVP?

Category:

```text
PRODUCT
DATA_MODEL
PERMISSIONS
```

Priority:

```text
P0
```

Status:

```text
OPEN
```

Why It Matters:

Too many roles slows development. Too few flatten accountability.

Minimum MVP roles:

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
Claim Manager
Independent Adjuster
Sponsor Viewer
```

Minimum MVP designations:

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

Related Documents:

```text
Entity Role and Designation Matrix
Data Model Master Specification
Backlog and User Stories
```

---

# 8. Technical Questions

## Q184 — What technical stack should be used for the first build?

Category:

```text
TECHNICAL
PRODUCT
AGENT
```

Priority:

```text
P0
```

Status:

```text
OPEN
```

Why It Matters:

The first stack determines speed, agent compatibility, maintainability, and integration path.

Decision factors:

```text
Speed to MVP
AI coding agent compatibility
Event ledger support
Role/permission support
Document/evidence storage
Dashboard capability
Future API readiness
Security
Cost
```

Related Documents:

```text
Developer / Agent Handoff Package
Backlog and User Stories
Data Model Master Specification
```

---

## Q185 — Should Phase 1 use a modular monolith or services?

Category:

```text
TECHNICAL
ARCHITECTURE
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

The ecosystem is large, but premature microservices could slow development.

Potential recommendation:

```text
Modular monolith first, clean domain boundaries, event ledger as core spine.
```

Related Documents:

```text
Developer / Agent Handoff Package
Data Model Master Specification
Decision Log
```

---

## Q186 — What is the minimum event schema?

Category:

```text
TECHNICAL
DATA_MODEL
PROTOCOL
```

Priority:

```text
P0
```

Status:

```text
OPEN
```

Why It Matters:

The event ledger is the backbone of ClaimExpress, Human Blockchain, bookkeeping, TER, and dashboard intelligence.

Minimum fields:

```text
Event ID
Event category
Event type
Actor user
Actor entity
Actor role
Actor designation
Authority source
Related object type
Related object ID
Timestamp
Status before
Status after
Evidence links
Bookkeeping link
Source system
Reason / notes
```

Related Documents:

```text
Data Model Master Specification
ClaimExpress Protocol Specification
Acceptance Test and QA Master Plan
```

---

## Q187 — What evidence storage strategy should be used?

Category:

```text
TECHNICAL
EVIDENCE
LEGAL
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

Evidence includes photos, videos, documents, signatures, estimates, invoices, permits, and potentially sensitive information.

Considerations:

```text
Secure storage
Access permissions
Versioning
Retention
Metadata
Location data
Signature metadata
Exportability
Privacy compliance
```

Related Documents:

```text
Data Model Master Specification
Legal Review Issue Register
Acceptance Test and QA Master Plan
```

---

## Q188 — What should be automated versus manual in MVP?

Category:

```text
TECHNICAL
PRODUCT
OPERATIONS
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

Manual workflows can prove the operating model before automation is justified.

Possible manual in MVP:

```text
ClaimsBank condition review
TER review
Sponsor dashboard updates
Legal review queue
Some evidence verification
External determination entry
```

Possible automated in MVP:

```text
Event recording
First offer baseline
First claim request creates ClaimStore Claim
Permission blocking
Basic dashboard counts
Basic bookkeeping trigger
```

---

# 9. Legal Questions

## Q189 — Can the ClaimsBank name be used publicly in Phase 1?

Category:

```text
LEGAL
SPONSOR
PRODUCT
```

Priority:

```text
P0
```

Status:

```text
NEEDS_COUNSEL
```

Why It Matters:

ClaimsBank is powerful but may imply banking, escrow, or regulated financial services.

Related Legal Issue:

```text
L014 — ClaimsBank Name and Function
```

Potential safe fallback:

```text
ClaimsBank-ready records
Release-condition model
ClaimStore financial coordination layer
```

---

## Q190 — What public language is safe for SelfInsurity?

Category:

```text
LEGAL
PRODUCT
MARKETING
```

Priority:

```text
P0
```

Status:

```text
NEEDS_COUNSEL
```

Why It Matters:

SelfInsurity could be misunderstood as insurance, public adjusting, or legal representation.

Related Legal Issue:

```text
L003 — SelfInsurity Language
```

Potential safe framing:

```text
We Help You Help Yourself.
Guided self-help.
User-directed claim file.
Documentation and workflow support.
```

---

## Q191 — What can contractors legally do in the claim request workflow?

Category:

```text
LEGAL
PRODUCT
OPERATIONS
```

Priority:

```text
P0
```

Status:

```text
NEEDS_COUNSEL
```

Why It Matters:

Contractor participation in insurance claims is state-sensitive and public-adjusting sensitive.

Related Legal Issue:

```text
L004 — Public Adjusting Boundary
```

Potential areas to review:

```text
Estimate preparation
Supplement support
Statement of Claim
Claim Request submission
Communication with carrier
Dispute documentation
```

---

## Q192 — What ClaimBuddy tasks are legally safe?

Category:

```text
LEGAL
OPERATIONS
PRODUCT
```

Priority:

```text
P0
```

Status:

```text
NEEDS_COUNSEL
```

Why It Matters:

ClaimBuddy may enter property, collect documents, capture signatures, and document claim/project facts.

Related Legal Issue:

```text
L010 — ClaimBuddy Scope
```

---

## Q193 — What sponsor rights can be offered before legal review is complete?

Category:

```text
LEGAL
SPONSOR
STRATEGY
```

Priority:

```text
P0
```

Status:

```text
NEEDS_COUNSEL
```

Why It Matters:

Sponsor positions must avoid securities, ownership, franchise, governance, privacy, and regulated-service risks.

Related Legal Issue:

```text
L019 — Sponsor Positions
```

---

## Q194 — What delegated authority structure is legally sufficient?

Category:

```text
LEGAL
PRODUCT
DATA_MODEL
```

Priority:

```text
P0
```

Status:

```text
NEEDS_COUNSEL
```

Why It Matters:

Delegated authority is the only exception to “No user clicks OK for another user.”

Related Legal Issue:

```text
L013 — Delegated Authority
```

---

## Q195 — What warranty / guarantee language is safe for the founding operator?

Category:

```text
LEGAL
OPERATIONS
SPONSOR
```

Priority:

```text
P0
```

Status:

```text
NEEDS_COUNSEL
```

Why It Matters:

The George Washington rollout depends on trust, but guarantee language can create warranty, insurance-like, or consumer protection exposure.

Related Legal Issue:

```text
L009 — Founding Operator Guarantee
```

---

# 10. Operations Questions

## Q196 — What is the first Season 1 operating-cell staffing model?

Category:

```text
OPERATIONS
SEASON_1
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Potential roles:

```text
Founder / Kimosabe
Platform Admin
Contractor Admin
Sales Rep / ISR
Project Lead
Bookkeeper
ClaimBuddy
Support Owner
Legal Review Owner
Dashboard Owner
Sponsor Owner
```

---

## Q197 — What is the weekly review cadence for Season 1?

Category:

```text
OPERATIONS
TER
DASHBOARD
```

Priority:

```text
P2
```

Status:

```text
OPEN
```

Possible cadence:

```text
Weekly operating review
Weekly TER/SLA review
Weekly legal issue review
Weekly build/backlog review
Weekly sponsor pipeline review
Monthly dashboard scenario update
```

---

## Q198 — What support scripts are safe?

Category:

```text
OPERATIONS
LEGAL
SUPPORT
```

Priority:

```text
P1
```

Status:

```text
NEEDS_COUNSEL
```

Why It Matters:

Support assists; users decide. Scripts must not create legal/public-adjusting/representation risk.

Related Documents:

```text
Legal Review Issue Register
User Flow Master Specification
Acceptance Test and QA Master Plan
```

---

## Q199 — What is the first ClaimBuddy certification/training path?

Category:

```text
OPERATIONS
PRODUCT
AGENT
```

Priority:

```text
P2
```

Status:

```text
OPEN
```

Potential certification levels:

```text
Basic Documentation
Property Inspection Support
Completion Verification
Dispute Documentation
Market Lead / Trainer
```

---

# 11. Sponsor Questions

## Q200 — What is the first sponsor-facing one-page summary?

Category:

```text
SPONSOR
EVENT
LEGAL
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Why It Matters:

Sponsors need a concise, safe, compelling entry point.

Related Documents:

```text
Sponsor Position Book
One Prompt Event Package
Legal Review Issue Register
Quantum Dashboard Model
```

---

## Q201 — Should sponsor positions be priced before legal review?

Category:

```text
SPONSOR
LEGAL
STRATEGY
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Potential answer:

Use value ranges, discussion frameworks, or “to be structured” language before formal pricing.

---

## Q202 — Which sponsor data access levels should exist?

Category:

```text
SPONSOR
DATA_MODEL
LEGAL
DASHBOARD
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Potential levels:

```text
Public / Narrative
Aggregated Scenario
Aggregated Operating
Program-Level
Restricted / Permissioned
Identified Claim-Level, likely deferred
```

---

# 12. Dashboard Questions

## Q203 — What is the first Quantum Dashboard screen?

Category:

```text
DASHBOARD
PRODUCT
EVENT
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Candidate first screens:

```text
Operating Cell Overview
Market Opportunity Scenario
Claim Caller Accountability
TER / Proficiency
ClaimsBank Readiness
Sponsor Position View
```

Recommended first screen:

```text
Operating Cell Overview with Market Opportunity Scenario.
```

---

## Q204 — What confidence scores are needed for MVP?

Category:

```text
DASHBOARD
DATA_MODEL
SPONSOR
```

Priority:

```text
P2
```

Status:

```text
OPEN
```

Potential confidence scores:

```text
TER Confidence
Capacity Confidence
Claim Caller Accountability
Regulatory Confidence
Founding Operator Guarantee Confidence
Evidence Confidence
ClaimsBank Readiness Confidence
```

---

## Q205 — How should Claim Caller accountability be displayed safely?

Category:

```text
DASHBOARD
LEGAL
PRODUCT
```

Priority:

```text
P0
```

Status:

```text
NEEDS_COUNSEL
```

Potential safe metrics:

```text
Claim Caller identified
External determination recorded
Claim Caller not identified
Authority source known
Authority source unknown / not provided
Average response time
```

Avoid:

```text
Bad faith score
Carrier violation score
Fraud label
```

---

# 13. Source / Documentation Questions

## Q206 — Which historical source documents should receive source notes first?

Category:

```text
SOURCE
REPOSITORY
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Recommended order:

```text
THE ENGINE
ClaimStore Vision 2012
MarketApp 2006
Patent Abstract
ClaimExpress TOS
RRCA Member Agreement
Purchase Order
Architecture Deck
Midday / Kimosabe Chat Export
```

---

## Q207 — Should original source documents be included in external exports?

Category:

```text
SOURCE
LEGAL
SPONSOR
```

Priority:

```text
P2
```

Status:

```text
OPEN
```

Potential answer:

Keep original sources internal. Use summarized source notes in sponsor/legal/developer exports unless full source is needed.

---

# 14. Founder / Strategy Questions

## Q208 — What is the founder’s public role/title for Season 1?

Category:

```text
FOUNDER
SPONSOR
EVENT
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Potential titles:

```text
Founder
Architect
Kimosabe
Originator
Season 1 Founder / Operator
Genesis Architect
```

---

## Q209 — How much of the Human Blockchain / United Stakeholders larger vision should be public at One Prompt Event?

Category:

```text
FOUNDER
EVENT
STRATEGY
LEGAL
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Potential answer:

Lead with ClaimStore operating cell. Reveal Human Blockchain as the verified event principle. Keep full United Stakeholders / DAO / economic architecture as deeper context, not public lead.

---

## Q210 — What is the simplest public sentence for the project?

Category:

```text
FOUNDER
MARKETING
SPONSOR
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Candidate:

```text
ClaimStore helps property owners, contractors, insurers, and field service providers coordinate insurance restoration claims and reconstruction projects through better documentation, verified field events, clearer accountability, and market intelligence.
```

---

# 15. Agent Questions

## Q211 — What should the first agent system prompt include?

Category:

```text
AGENT
REPOSITORY
PRODUCT
```

Priority:

```text
P1
```

Status:

```text
OPEN
```

Required content:

```text
Read Master Context first.
Preserve architecture.
Do not flatten terms.
Do not violate consent.
Respect role/designation distinction.
Use legal issue register.
Use backlog and QA.
Update decision log.
```

---

## Q212 — Which AI agents are needed first?

Category:

```text
AGENT
OPERATIONS
TECHNICAL
```

Priority:

```text
P2
```

Status:

```text
OPEN
```

Likely first agents:

```text
Documentation Agent
Product Agent
Data Model Agent
Backlog Agent
QA Agent
Legal Review Agent
Sponsor Package Agent
Kimosabe Coordinator Agent
```

---

# 16. Open Question Review Cadence

Questions should be reviewed:

```text
Weekly during repository creation
Weekly during MVP build
Before legal counsel meetings
Before sponsor outreach
Before One Prompt Event
At every major decision checkpoint
```

---

# 17. Conversion Rule

When an open question is answered, update:

```text
OPEN_QUESTIONS.md
DECISION_LOG.md, if architectural or strategic
Affected canon document
Affected backlog item
Affected QA test
Affected legal issue, if applicable
```

Do not simply answer questions in conversation and leave the repository unchanged.

---

## 18. Working Conclusion

The Open Questions Register is not uncertainty.

It is control.

A project this large must know what it knows and what it does not yet know.

The questions do not weaken the architecture.

They protect it.

The right question, held in the right place, becomes a future decision.

The future decision becomes a buildable path.

The buildable path becomes Season 1.

Next I recommend **#26: Source Index and Source Notes Package v0.1**.

That will create the bridge from the original uploaded historical documents to the modern canon, so every source is tracked, summarized, and tied to the documents it influenced.
