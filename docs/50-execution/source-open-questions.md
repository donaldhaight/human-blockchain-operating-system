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
## Q213 — Which business line should carry the Agent Company Operating System?
Category:
```text
FOUNDER
STRATEGY
AGENT
```
Priority:
```text
P1
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The operating system needs a clear owner, naming context, and record boundary. Candidate treatments are Market Applications, an internal Human Blockchain operating capability, or another defined USA LLC business line.

Related Documents:
```text
Agent Company Operating System
Master Continuity Brief
Decision Register
```
---
## Q214 — Is the first Agent Company objective internal proof or an external software/services offering?
Category:
```text
FOUNDER
STRATEGY
OPERATIONS
```
Priority:
```text
P1
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

An internal Company Zero proof keeps scope and legal exposure low. An external offering adds customer, contract, data, support, and commercial requirements.

Related Documents:
```text
Agent Company Operating System
Season 1 Operating Plan
Risks and Review Gates
```
---
## Q215 — Which bounded RRCA / ClaimStore delivery loop should be proved first?
Category:
```text
FOUNDER
PRODUCT
SEASON_1
AGENT
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The first loop defines the practical test of the agent-company model. It must be narrow, useful to RRCA, measurable, reversible, and representative of the Lead-to-Done architecture.

Potential Decision Path:
```text
Select one capability with a named user, workflow, acceptance test, source basis, and release owner.
```
---
## Q216 — Which initial operating model should Company Zero test first?
Category:
```text
FOUNDER
TECHNICAL
AGENT
```
Priority:
```text
P1
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The team can initially use a human-guided repository and workspace or invest immediately in a dedicated company control-plane application. The first option reduces setup and maximizes learning; the second increases repeatability but adds build and governance burden.

Related Documents:
```text
Agent Company Operating System
Master Roadmap
Developer and Agent Handoff Package
```
---
## Q217 — Which legal/business line should operate the initial venture studio and incubator function?
Category:
```text
FOUNDER
STRATEGY
LEGAL
```
Priority:
```text
P1
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The studio needs a clear accountable entity and scope. Candidate treatments include USA LLC, Market Applications, another current business line, or a later separately formed entity. A chosen label does not itself resolve entity, liability, ownership, tax, or securities requirements.

Related Documents:
```text
Venture Studio and Incubator Operating System
Master Continuity Brief
Risks and Review Gates
```
---
## Q218 — Does the first venture-studio phase serve only the internal portfolio or also an invited external founder cohort?
Category:
```text
FOUNDER
STRATEGY
OPERATIONS
```
Priority:
```text
P1
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

An internal studio validates the method under existing authority and data boundaries. External participation adds selection, terms, IP, privacy, support, marketing, program, and potentially securities issues.

Related Documents:
```text
Venture Studio and Incubator Operating System
Agent Company Operating System
Risks and Review Gates
```
---
## Q219 — Which three venture candidates should receive the first Venture Cards after Company Zero?
Category:
```text
FOUNDER
STRATEGY
PORTFOLIO
```
Priority:
```text
P1
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The selection defines the initial portfolio and must be deliberate. Each candidate should be scored for founder conviction, customer access, evidence base, strategic fit, buildability, capital need, time horizon, risk, and relationship to the shared operating system.

Related Documents:
```text
Venture Card Template
Venture Studio and Incubator Operating System
Master Roadmap
```
---
## Q220 — What capital posture is intended for the first twelve months of the venture studio?
Category:
```text
FOUNDER
STRATEGY
LEGAL
FINANCE
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Founder-funded internal operations, service-funded work, sponsor/research-supported activity, and a future professionally designed capital pathway have different governance, timing, disclosure, entity, tax, and regulatory consequences.

Related Documents:
```text
Venture Studio and Incubator Operating System
Founding Sponsor Position Book
Risks and Review Gates
```
---
## Q221 — Is the first InsurTech product limited to insurance-adjacent workflow and evidence software, or is a regulated function intended from the beginning?
Category:
```text
FOUNDER
PRODUCT
LEGAL
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The selected posture determines required entity, licensing, agreements, product claims, agent limits, data handling, supervision, launch gates, and professional review. The recommended starting posture is insurance-adjacent workflow and evidence software only.

Related Documents:
```text
InsurTech Startup Operating System
Legal Architecture To Be Vetted
Risks and Review Gates
```
---
## Q222 — Which jurisdiction and RRCA / ClaimStore operating market should host the first InsurTech pilot?
Category:
```text
FOUNDER
SEASON_1
LEGAL
OPERATIONS
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Insurance, adjusting, contractor, privacy, electronic-signature, consumer-protection, and related obligations vary by jurisdiction. A real pilot needs one named geographic scope before the product and review gates can be completed.

Related Documents:
```text
InsurTech Startup Operating System
Phase 1 Product Requirements Document
Legal Architecture To Be Vetted
```
---
## Q223 — What data basis should the first InsurTech proof use?
Category:
```text
FOUNDER
DATA_MODEL
LEGAL
SECURITY
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Synthetic records enable rapid workflow testing. Consented real records add operational learning but require a documented lawful or contractual basis, user notice, access controls, retention, and incident handling. A staged synthetic-then-consented approach is a viable default.

Related Documents:
```text
InsurTech Startup Operating System
Legal Architecture To Be Vetted
Data Model Master Specification
```
---
## Q224 — Should the first release record external insurance determinations only, or prepare for an approved participating carrier/partner integration?
Category:
```text
FOUNDER
PRODUCT
TECHNICAL
LEGAL
```
Priority:
```text
P1
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

External-determination recording is lower complexity and can prove the accountability model. A direct integration requires a named partner, data/authority basis, technical interface agreement, security testing, and rollback path.

Related Documents:
```text
InsurTech Startup Operating System
Insurance Determination and Claim Caller Addendum
ClaimExpress Protocol Specification
```
---
## Q225 — Who is the named human owner for the first InsurTech compliance queue and no-go decision?
Category:
```text
FOUNDER
OPERATIONS
LEGAL
AGENT
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Agents may prepare records and escalate gaps, but the company needs a responsible human to own professional-review coordination, open-issue treatment, readiness evidence, and the decision to hold or stop a pilot.

Related Documents:
```text
InsurTech Startup Operating System
InsurTech Pilot Launch-Gate Template
Risks and Review Gates
```
---
## Q226 — Which single user-directed claim/project workflow should constitute the first InsurTech Company Zero proof?
Category:
```text
FOUNDER
PRODUCT
SEASON_1
AGENT
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The first proof must be small enough to secure and test, yet complete enough to establish consent, evidence, authority, external-determination recording, exception handling, and learning. It should not require unapproved coverage, payment, or claims-administration authority.

Potential Decision Path:
```text
Choose one workflow with a named user, jurisdiction, data basis, permitted platform role, acceptance tests, release owner, and retrospective measure.
```
---
## Q227 — Is the first legal-services version internal legal-readiness infrastructure or a limited external attorney-network pilot after professional review?
Category:
```text
FOUNDER
STRATEGY
LEGAL
OPERATIONS
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Internal legal-readiness work can prove the coverage record, confidentiality, and agent blocks without presenting services to clients. An external network adds professional-entity, attorney verification, conflicts, engagement, advertising, client-choice, fee, privacy, and jurisdiction requirements.

Related Documents:
```text
Legal Services and Jurisdictional Attorney Network Operating System
Legal Matter and Jurisdictional Launch-Gate Template
Risks and Review Gates
```
---
## Q228 — Which state and forum/venue context should govern the first jurisdictional attorney-network review?
Category:
```text
FOUNDER
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
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Professional responsibility, legal-service entity rules, advertising, referral/fee arrangements, data handling, court practice, insurance regulation, and reciprocal structures depend on the relevant jurisdiction. County or venue capability should not be described as a platform-issued legal license.

Related Documents:
```text
Legal Services and Jurisdictional Attorney Network Operating System
Legal Architecture To Be Vetted
InsurTech Startup Operating System
```
---
## Q229 — Who is the intended client for the first legal matter or legal-readiness work?
Category:
```text
FOUNDER
LEGAL
GOVERNANCE
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

A property owner, contractor, RRCA, USA LLC, prospective reciprocal/attorney-in-fact entity, InsurTech platform, and DAO may have different interests. The client must be identified before legal advice, privilege, conflict analysis, engagement, data access, or representation can be discussed.

Related Documents:
```text
Legal Services and Jurisdictional Attorney Network Operating System
Legal Architecture To Be Vetted
Risks and Review Gates
```
---
## Q230 — What attorney-network structure should be tested first?
Category:
```text
FOUNDER
LEGAL
STRATEGY
GOVERNANCE
```
Priority:
```text
P1
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The initial alternatives are an independent attorney/firm coordination network, a future lawyer-controlled professional entity, or a DAO-supported standards/community layer that performs no legal representation. They differ materially in professional control, economics, data, governance, and regulatory constraints.

Related Documents:
```text
Legal Services and Jurisdictional Attorney Network Operating System
Venture Studio and Incubator Operating System
Risks and Review Gates
```
---
## Q231 — Is a reciprocal insurance exchange an exploratory future venture or an active formation objective?
Category:
```text
FOUNDER
INSURANCE
LEGAL
STRATEGY
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

An attorney-in-fact can be an insurance-management role in a reciprocal structure, but it is not the same as an attorney-at-law or attorney of record. Active formation changes the required insurance-regulatory, capitalization, governance, contracts, client/entity, and professional-review work.

Related Documents:
```text
Legal Services and Jurisdictional Attorney Network Operating System
InsurTech Startup Operating System
Risks and Review Gates
```
---
## Q232 — What data basis may the legal-services readiness proof use?
Category:
```text
FOUNDER
LEGAL
DATA_MODEL
SECURITY
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Synthetic/internal scenarios provide the lowest-risk method to test routing, coverage records, permissions, and agent blocks. Real intake or matter data requires carefully defined client, engagement, notice, authorization, confidentiality, privilege, processor, retention, and incident controls.

Related Documents:
```text
Legal Matter and Jurisdictional Launch-Gate Template
Legal Services and Jurisdictional Attorney Network Operating System
Risks and Review Gates
```
---
## Q233 — Is the first construction-management product coordination software only, owner-authorized support, or a future licensed construction operation?
Category:
```text
FOUNDER
PRODUCT
LEGAL
OPERATIONS
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The operating posture determines contractual scope, licensing, insurance, safety, staffing, permits, payment, warranty, product claims, and the platform/agent authority boundary. The recommended starting posture is coordination and project-information software only.

Related Documents:
```text
Construction Management Startup Operating System
Legal Architecture To Be Vetted
Risks and Review Gates
```
---
## Q234 — Which state/market and project type should host the first construction-management Company Zero pilot?
Category:
```text
FOUNDER
SEASON_1
LEGAL
OPERATIONS
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Contractor, construction-management, permit, inspection, safety, consumer-protection, lien, payment, and data rules vary by jurisdiction and project type. A first pilot needs a bounded geographic and construction scope before responsible-party controls can be completed.

Related Documents:
```text
Construction Management Startup Operating System
Season 1 Operating Plan and Roadmap
Phase 1 Product Requirements Document
```
---
## Q235 — Who is the customer, who contracts with the property owner, and who owns each construction responsibility for the first pilot?
Category:
```text
FOUNDER
OPERATIONS
LEGAL
CONSTRUCTION
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The system must identify the property owner, licensed contractor, project lead, site/safety owner, permit/inspection responsibility, quality responsibility, warranty issuer, payment authority, and escalation path. Coordination software cannot silently absorb those roles.

Related Documents:
```text
Construction Management Startup Operating System
Construction Management Pilot Launch-Gate Template
Legal Architecture To Be Vetted
```
---
## Q236 — Which named person or entity controls site safety and the emergency/escalation path for the first pilot?
Category:
```text
FOUNDER
OPERATIONS
LEGAL
SAFETY
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The platform can record issues and notify responsible parties, but it cannot become a safety authority through automation. Site control and safety responsibility must be real, named, contractually/operationally supported, and reachable through a tested escalation path.

Related Documents:
```text
Construction Management Startup Operating System
Construction Management Pilot Launch-Gate Template
Professional Participant Agreement Review
```
---
## Q237 — What data basis may the construction-management proof use?
Category:
```text
FOUNDER
DATA_MODEL
LEGAL
SECURITY
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

Synthetic records can test the authority, scope, schedule, change, evidence, and closeout model. Authorized real project records add operating learning but require a documented access basis, consent, contractor/owner expectations, retention, confidentiality, and incident controls.

Related Documents:
```text
Construction Management Startup Operating System
Construction Management Pilot Launch-Gate Template
Risks and Review Gates
```
---
## Q238 — Which single construction-management workflow should be proved first?
Category:
```text
FOUNDER
PRODUCT
SEASON_1
AGENT
```
Priority:
```text
P0
```
Status:
```text
NEEDS_FOUNDER_DECISION
```
Why It Matters:

The first loop must be narrow enough to test permissions and responsibility, yet useful enough to prove project value. Candidate paths include scope-to-baseline, job/order coordination, change control, field evidence, punch/quality correction, and completion/closeout.

Potential Decision Path:
```text
Choose one workflow with a named project, jurisdiction, customer, contract/responsibility map, data basis, acceptance tests, release owner, and retrospective measure.
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
