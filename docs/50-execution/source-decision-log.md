---
id: source-decision-log
title: "Source Decision Log"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 44917
source_line_end: 46734
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# DECISION_LOG.md  
## Genesis ClaimStore Season 1 Repository  
### Architectural, Product, Legal, Operating, Sponsor, and Repository Decisions

---

## 1. Purpose

This document records major decisions for the Genesis ClaimStore Season 1 Repository.

The Decision Log prevents silent architecture drift.

Any decision that affects the structure, product, data model, legal posture, user flows, sponsor framing, Season 1 operating cell, or future build direction should be recorded here.

This file answers:

```text
What has already been decided?
Why was it decided?
What documents are affected?
What remains open?
What should not be reopened without cause?
```

---

## 2. Decision Status Values

Use these values:

```text
PROPOSED
ACCEPTED
PROVISIONAL
NEEDS_REVIEW
LEGAL_TO_BE_VETTED
SUPERSEDED
DEFERRED
REJECTED
```

---

## 3. Decision Categories

Use these categories:

```text
ARCHITECTURE
PRODUCT
PROTOCOL
DATA_MODEL
LEGAL
OPERATIONS
SPONSOR
DASHBOARD
REPOSITORY
AGENT
SEASON_1
```

---

## 4. Decision Entry Format

Each decision should use this format:

```text
Decision ID:
Title:
Category:
Status:
Date:
Decision:
Reason:
Affected Documents:
Affected Modules:
Open Questions:
Notes:
```

---

# D001 — ClaimStore Is Market Infrastructure, Not Contractor CRM

## Category

```text
ARCHITECTURE
PRODUCT
```

## Status

```text
ACCEPTED
```

## Decision

ClaimStore will be defined as insurance restoration market infrastructure, not merely contractor CRM, lead generation, estimating software, or a carrier claim system.

## Reason

The historical source documents show that ClaimStore was intended to connect property owners, contractors, insurers, adjusters, mortgage companies, field service providers, and other entities around a common claim/project transaction.

Calling it contractor CRM would flatten the architecture.

## Affected Documents

```text
MASTER_CONTEXT.md
README.md
CLAIMSTORE_CASE_STUDY_MASTER_BRIEF.md
PHASE_1_PRODUCT_REQUIREMENTS_DOCUMENT.md
DATA_MODEL_MASTER_SPECIFICATION.md
```

## Affected Modules

```text
ClaimStore
ClaimExpress
Property Owner File
Contractor Operations
Claim Request
Quantum Dashboard
Sponsor Position
```

## Open Questions

```text
How should this be described in short public-facing language without overwhelming first-time readers?
```

---

# D002 — ClaimExpress Is the Protocol Layer

## Category

```text
PROTOCOL
ARCHITECTURE
PRODUCT
```

## Status

```text
ACCEPTED
```

## Decision

ClaimExpress will be treated as the claim/project workflow protocol, not merely the old website or brand.

## Reason

ClaimExpress defines the movement of offers, claim requests, approvals, holds, rejections, supplements, evidence, bookkeeping, and closeout events.

## Affected Documents

```text
CLAIMEXPRESS_PROTOCOL_SPECIFICATION.md
CLICK_EVENT_PROTOCOL.md
BOOKKEEPING_EVENT_PROTOCOL.md
USER_FLOW_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
```

## Affected Modules

```text
Claim Request
ClaimStore Claim
Event Ledger
Bookkeeping Event
Offer
Evidence
Human Blockchain
```

## Open Questions

```text
What should the API/event schema naming convention be for ClaimExpress protocol events?
```

---

# D003 — Phase 1 Is Contractor-First, Property-Owner-Enabled

## Category

```text
PRODUCT
SEASON_1
OPERATIONS
```

## Status

```text
ACCEPTED
```

## Decision

Phase 1 will be contractor-first and property-owner-enabled.

The first build will use contractor operations as the practical entry point while preserving property owner consent, self-help control, claim file ownership, and platform neutrality.

## Reason

The first operating cell must be buildable. Contractors have the urgent workflow need, existing project activity, and operational motivation. Property owners must remain in control of their approvals and claim file.

## Affected Documents

```text
PHASE_1_PRODUCT_REQUIREMENTS_DOCUMENT.md
SEASON_1_OPERATING_PLAN_AND_ROADMAP.md
BACKLOG_AND_USER_STORIES.md
USER_FLOW_MASTER_SPECIFICATION.md
```

## Affected Modules

```text
Contractor Company
Lead
Project
Offer
Property Owner File
Claim Request
Offer Acceptance
```

## Open Questions

```text
Which contractor operation becomes the first founding operator?
Which market becomes the first operating cell?
```

---

# D004 — Season 1 Theme Is Proof of Coherence

## Category

```text
SEASON_1
OPERATIONS
SPONSOR
```

## Status

```text
ACCEPTED
```

## Decision

Season 1 will be framed as Proof of Coherence.

Season 1 does not need to prove national scale. It must prove one coherent operating cell from lead to dashboard.

## Reason

The ecosystem is large. The first credible test is not scale; it is coherence.

## Affected Documents

```text
SEASON_1_OPERATING_PLAN_AND_ROADMAP.md
ONE_PROMPT_EVENT_PACKAGE.md
README.md
MASTER_CONTEXT.md
```

## Affected Modules

```text
Operating Cell
One Prompt Event
Quantum Dashboard
Sponsor Package
MVP Demo
```

## Open Questions

```text
What exact demo scope must be live versus mocked for the One Prompt Event?
```

---

# D005 — The One Prompt Event Target Date Is 11-1-2026

## Category

```text
SEASON_1
OPERATIONS
EVENT
```

## Status

```text
PROVISIONAL
```

## Decision

The One Prompt Event target date is 11-1-2026.

Season 1 is framed as 11-1-2026 through 11-1-2027.

## Reason

The date creates a ceremonial and operational start line for Season 1.

## Affected Documents

```text
ONE_PROMPT_EVENT_PACKAGE.md
SEASON_1_OPERATING_PLAN_AND_ROADMAP.md
README.md
MASTER_CONTEXT.md
```

## Affected Modules

```text
One Prompt Event
Season 1 Roadmap
Sponsor Package
Demo Environment
```

## Open Questions

```text
Should the event be private, sponsor-only, recorded, streamed, or staged in phases?
```

---

# D006 — Use the George Washington Rollout Model

## Category

```text
OPERATIONS
ARCHITECTURE
LEGAL
SEASON_1
```

## Status

```text
ACCEPTED
LEGAL_TO_BE_VETTED
```

## Decision

The first seasons will use a founding operator to cross first, stand behind defined work, absorb early trust risk, prove the protocol, and help the market trust the infrastructure.

## Reason

The market did not know how to buy neutrality. Trust must be demonstrated through controlled operations before neutrality can be fully understood or purchased.

## Affected Documents

```text
GEORGE_WASHINGTON_ROLLOUT_MODEL.md
SEASON_1_OPERATING_PLAN_AND_ROADMAP.md
LEGAL_ARCHITECTURE_TO_BE_VETTED.md
LEGAL_REVIEW_ISSUE_REGISTER.md
FOUNDING_OPERATOR_PLAYBOOK.md
```

## Affected Modules

```text
Founding Operator
Contractor Operations
Imported Events
Guarantee Language
ClaimsBank Conditions
Sponsor Position
```

## Open Questions

```text
Who gives the guarantee?
What exactly is guaranteed?
What legal disclosures are required?
How are conflicts disclosed?
```

---

# D007 — Preserve Two-Code-Base Possibility

## Category

```text
ARCHITECTURE
TECHNICAL
OPERATIONS
```

## Status

```text
PROVISIONAL
```

## Decision

The architecture will preserve the possibility of two code bases:

```text
1. Founding Operator / Contractor Operations System
2. Neutral ClaimStore Market Infrastructure System
```

## Reason

The founding operator may need fast, practical contractor-side tools, while the neutral platform must preserve role boundaries, consent, evidence, audit, and market accountability.

## Affected Documents

```text
CLAIMSTORE_OBJECT_MODEL_ADDENDUM.md
DATA_MODEL_MASTER_SPECIFICATION.md
BACKLOG_AND_USER_STORIES.md
SEASON_1_REPOSITORY_CREATION_PLAN.md
```

## Affected Modules

```text
Founding Operator Integration
Imported Event
Neutral Event Ledger
Consent Events
Evidence Verification
```

## Open Questions

```text
Should the first build be one modular system or two connected systems?
What is the minimum event adapter required?
```

---

# D008 — No User Clicks OK for Another User

## Category

```text
PROTOCOL
LEGAL
PRODUCT
QA
```

## Status

```text
ACCEPTED
```

## Decision

No user can accept, approve, sign, waive, verify, or consent on behalf of another user unless explicit delegated authority exists.

## Reason

This is the core self-help, consent, and trust rule of the system.

## Affected Documents

```text
MASTER_CONTEXT.md
README.md
ENTITY_ROLE_AND_DESIGNATION_MATRIX.md
USER_FLOW_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
LEGAL_REVIEW_ISSUE_REGISTER.md
```

## Affected Modules

```text
Offer Acceptance
Claim Request Authorization
Completion Approval
Agreement Acceptance
Delegated Authority
Signature Record
```

## Open Questions

```text
Which actions can be delegated?
Which actions should never be delegated?
What form must delegated authority take?
```

---

# D009 — Entity Role Is Not Designation

## Category

```text
ARCHITECTURE
DATA_MODEL
PERMISSIONS
PROTOCOL
```

## Status

```text
ACCEPTED
```

## Decision

Entity Role and Designation will be separate concepts.

Entity Role defines general permissions.

Designation defines specific responsibility for a claim, project, task, request, decision, or condition.

## Reason

The system needs to know not only what type of user someone is, but who is responsible for a specific matter.

## Affected Documents

```text
MASTER_GLOSSARY_AND_NAMING_CONVENTION.md
ENTITY_ROLE_AND_DESIGNATION_MATRIX.md
DATA_MODEL_MASTER_SPECIFICATION.md
USER_FLOW_MASTER_SPECIFICATION.md
```

## Affected Modules

```text
Entity Role Assignment
Designation Assignment
Permissions
Claim Caller
Offer Owner
Project Lead
Completion Verifier
Support Owner
```

## Open Questions

```text
Which designations require acceptance?
Which designations require authority source confirmation?
```

---

# D010 — Claim Caller Is a Designation

## Category

```text
PROTOCOL
LEGAL
DATA_MODEL
QA
```

## Status

```text
ACCEPTED
LEGAL_TO_BE_VETTED
```

## Decision

Claim Caller is a designation, not merely a role or reviewer.

The Claim Caller is the person or authorized role responsible for making or recording the insurance-side determination on a specific claim request.

## Reason

Insurance-side accountability must be visible. Inspection, estimate, review, and determination are not the same thing.

## Affected Documents

```text
INSURANCE_DETERMINATION_CLAIM_CALLER_ADDENDUM.md
DESIGNATION_MODEL_ADDENDUM.md
ENTITY_ROLE_AND_DESIGNATION_MATRIX.md
DATA_MODEL_MASTER_SPECIFICATION.md
LEGAL_REVIEW_ISSUE_REGISTER.md
```

## Affected Modules

```text
Claim Caller
Claim Decision Record
Claim Request
External Determination
Authority Source
Quantum Dashboard
```

## Open Questions

```text
What UI language is safe when Claim Caller is not identified?
Can participating carriers be contractually required to assign a Claim Caller?
```

---

# D011 — External Determinations Must Be Marked External

## Category

```text
PROTOCOL
LEGAL
DATA_MODEL
QA
```

## Status

```text
ACCEPTED
```

## Decision

When an insurance-side decision occurs outside the platform, the system may record an External Determination, but must not falsely create internal Claim Caller authority.

## Reason

Many carriers may not participate directly at first. The system must record reality without overstating authority.

## Affected Documents

```text
USER_FLOW_MASTER_SPECIFICATION.md
DATA_MODEL_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
LEGAL_REVIEW_ISSUE_REGISTER.md
```

## Affected Modules

```text
External Determination
Claim Decision Record
Claim Caller Not Identified
Authority Source
Dashboard Metrics
```

## Open Questions

```text
What is the minimum acceptable evidence for recording an external determination?
```

---

# D012 — First Shared Offer Becomes First Offer Baseline

## Category

```text
PRODUCT
DATA_MODEL
DASHBOARD
QA
```

## Status

```text
ACCEPTED
```

## Decision

The first shared contractor offer becomes the First Offer Baseline unless explicitly marked draft/internal.

## Reason

The first offer is the first structured economic statement of the project. It is needed for proficiency, variance, and underwriting intelligence.

## Affected Documents

```text
CLAIMEXPRESS_PROTOCOL_ADDENDUM_A.md
DATA_MODEL_MASTER_SPECIFICATION.md
BACKLOG_AND_USER_STORIES.md
USER_FLOW_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
```

## Affected Modules

```text
Offer
Offer Version
First Offer Baseline
Proficiency Metric
Quantum Dashboard
```

## Open Questions

```text
What exact user action changes draft offer to first shared offer?
Can a mistakenly shared offer be superseded without losing baseline audit?
```

---

# D013 — First Claim Request Creates ClaimStore Claim

## Category

```text
PROTOCOL
DATA_MODEL
PRODUCT
QA
```

## Status

```text
ACCEPTED
```

## Decision

The first claim request or claim notice received by the system creates a ClaimStore Claim. Future related requests attach to that ClaimStore Claim.

## Reason

The ClaimStore Claim is the neutral transaction container.

## Affected Documents

```text
CLAIMEXPRESS_PROTOCOL_SPECIFICATION.md
DATA_MODEL_MASTER_SPECIFICATION.md
USER_FLOW_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
```

## Affected Modules

```text
ClaimStore Claim
Claim Request
Claim Request Package Snapshot
Event Ledger
Claim Decision Record
```

## Open Questions

```text
How should duplicate/related claims be detected in Phase 1?
```

---

# D014 — Human Blockchain Begins as Verified Event Ledger

## Category

```text
ARCHITECTURE
PROTOCOL
DATA_MODEL
LEGAL
```

## Status

```text
ACCEPTED
```

## Decision

Human Blockchain will begin as an append-only, evidence-backed, human-verified event ledger.

It will not require literal blockchain or crypto in Phase 1.

## Reason

The trust layer must be built around evidence and human verification before any future blockchain implementation.

## Affected Documents

```text
HUMAN_BLOCKCHAIN_CLAIMBUDDY_OPERATING_MODEL.md
DATA_MODEL_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
MASTER_GLOSSARY_AND_NAMING_CONVENTION.md
```

## Affected Modules

```text
Evidence
Task
ClaimBuddy
Human Blockchain Event
TER
ClaimsBank Condition
Quantum Dashboard
```

## Open Questions

```text
What event fields are required to support future on-chain anchoring, if desired?
```

---

# D015 — No Evidence Means No Verified Event

## Category

```text
PROTOCOL
QA
DATA_MODEL
OPERATIONS
```

## Status

```text
ACCEPTED
```

## Decision

A task, trip, inspection, completion, or field event cannot become a verified Human Blockchain Event without required evidence.

## Reason

Evidence is the basis of trust in the system.

## Affected Documents

```text
HUMAN_BLOCKCHAIN_CLAIMBUDDY_OPERATING_MODEL.md
USER_FLOW_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
```

## Affected Modules

```text
Evidence
Task
Checklist
ClaimBuddy
Human Blockchain Event
Completion Verification
ClaimsBank Condition
```

## Open Questions

```text
Which task types require which minimum evidence packages?
```

---

# D016 — ClaimsBank Begins as Release-Condition Logic

## Category

```text
ARCHITECTURE
LEGAL
DATA_MODEL
PRODUCT
```

## Status

```text
ACCEPTED
LEGAL_TO_BE_VETTED
```

## Decision

ClaimsBank will begin as release-condition, bookkeeping, payment-event, escrow-candidate, reserve-candidate, and holdback-candidate logic.

It will not be treated as an actual bank, escrow company, money transmitter, or lender in Phase 1.

## Reason

The financial architecture is important, but regulated fund movement must be legally structured.

## Affected Documents

```text
MASTER_CONTEXT.md
LEGAL_REVIEW_ISSUE_REGISTER.md
DATA_MODEL_MASTER_SPECIFICATION.md
CLAIMSBANK_RELEASE_CONDITION_PROTOCOL.md
```

## Affected Modules

```text
Bookkeeping Event
Payment Record
ClaimsBank Condition
Escrow Candidate
Reserve Candidate
Holdback Candidate
Quantum Dashboard
```

## Open Questions

```text
Can the ClaimsBank name be used publicly in Phase 1?
What partner structure is required for actual escrow or payment release?
```

---

# D017 — TER Begins Internal, Not Public

## Category

```text
OPERATIONS
LEGAL
DASHBOARD
QA
```

## Status

```text
ACCEPTED
LEGAL_TO_BE_VETTED
```

## Decision

TER will begin as an internal performance, coaching, routing, review, and remediation signal. Public rankings are deferred.

## Reason

Performance scoring creates legal, reputational, employment, contractor, and consumer risks if exposed too early.

## Affected Documents

```text
RRCA_SLA_TER_MODEL.md
LEGAL_REVIEW_ISSUE_REGISTER.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
QUANTUM_DASHBOARD_UNDERWRITING_MODEL.md
```

## Affected Modules

```text
TER Metric
SLA Record
TER Review Flag
Routing
Training
Quantum Dashboard
```

## Open Questions

```text
What disclosures, appeals, and correction procedures are required?
```

---

# D018 — Three-Week Below-Average Rule Creates TER Review Flag

## Category

```text
OPERATIONS
QA
DATA_MODEL
```

## Status

```text
PROVISIONAL
LEGAL_TO_BE_VETTED
```

## Decision

If a user, role, entity, or designation performs below relevant average for three consecutive weeks, the system creates a TER Review Flag.

## Reason

This provides early intervention without automatic public punishment.

## Affected Documents

```text
RRCA_SLA_TER_MODEL.md
BACKLOG_AND_USER_STORIES.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
```

## Affected Modules

```text
TER Metric
TER Review Flag
SLA Record
Training
Routing
```

## Open Questions

```text
What is the relevant average for each role/task/market?
What remediation process is required before blocking?
```

---

# D019 — Sponsor Positions Are Sponsorship, Not Ownership

## Category

```text
SPONSOR
LEGAL
DASHBOARD
```

## Status

```text
ACCEPTED
LEGAL_TO_BE_VETTED
```

## Decision

Founding Sponsor Positions are sponsorship arrangements with defined rights, recognition, category/territory/season participation, access, and obligations. They are not automatic ownership, equity, governance, profit share, token rights, insurance authority, banking authority, or claim decision authority.

## Reason

Sponsor packaging must avoid overpromising and must preserve the no-conflicts architecture.

## Affected Documents

```text
FOUNDING_STAKEHOLDER_SPONSOR_POSITION_BOOK.md
LEGAL_REVIEW_ISSUE_REGISTER.md
ONE_PROMPT_EVENT_PACKAGE.md
README.md
```

## Affected Modules

```text
Sponsor Position
Sponsor Data Access
Quantum Dashboard
Season 1 Ask
One Prompt Event
```

## Open Questions

```text
What sponsor rights can be offered safely before legal review?
Which sponsor category should be approached first?
```

---

# D020 — Quantum Dashboard Is Underwriting and Scenario Intelligence

## Category

```text
DASHBOARD
SPONSOR
PRODUCT
LEGAL
```

## Status

```text
ACCEPTED
LEGAL_TO_BE_VETTED
```

## Decision

Quantum Dashboard will be treated as underwriting, observability, scenario, and stakeholder intelligence, not guaranteed projections or investment advice.

## Reason

The dashboard is powerful but must distinguish actual data from assumptions, forecasts, and projections.

## Affected Documents

```text
QUANTUM_DASHBOARD_UNDERWRITING_MODEL.md
LEGAL_REVIEW_ISSUE_REGISTER.md
ONE_PROMPT_EVENT_PACKAGE.md
SPONSOR_POSITION_BOOK.md
```

## Affected Modules

```text
Dashboard Metric
Scenario
Market Opportunity
Risk-Adjusted Opportunity
Sponsor Dashboard
Claim Caller Accountability
TER Confidence
```

## Open Questions

```text
What assumptions should be used in the first Season 1 demo scenario?
What disclaimers are required for sponsor-facing dashboards?
```

---

# D021 — Need/Done Has Two Meanings

## Category

```text
PRODUCT
DATA_MODEL
OPERATIONS
```

## Status

```text
ACCEPTED
```

## Decision

Need/Done will be treated as two distinct concepts:

```text
1. Annual / Seasonal Need/Done for property readiness
2. Project Compliance Need/Done for project-specific requirements
```

## Reason

Annual readiness resets outside the claim workflow. Project compliance requirements depend on market, branch, and project conditions.

## Affected Documents

```text
CLAIMEXPRESS_PROTOCOL_ADDENDUM_A.md
DATA_MODEL_MASTER_SPECIFICATION.md
USER_FLOW_MASTER_SPECIFICATION.md
BACKLOG_AND_USER_STORIES.md
```

## Affected Modules

```text
Annual Need/Done
Project Compliance Need/Done
Branch Settings
Property
Project
```

## Open Questions

```text
Which Annual Need/Done items are Phase 1?
Which markets require which project compliance items?
```

---

# D022 — Other Charges and Equipment Orders Are First-Class Objects

## Category

```text
DATA_MODEL
PRODUCT
BOOKKEEPING
```

## Status

```text
ACCEPTED
```

## Decision

Other Charges and Equipment Orders will be treated as first-class objects, not miscellaneous notes.

## Reason

Permits, trips, engineering, measurement reports, equipment, and support charges affect offer accuracy, project cost, supplements, closeout, and proficiency.

## Affected Documents

```text
CLAIMEXPRESS_PROTOCOL_ADDENDUM_A.md
DATA_MODEL_MASTER_SPECIFICATION.md
BACKLOG_AND_USER_STORIES.md
```

## Affected Modules

```text
Offer
Job
Order
Equipment Order
Other Charge
Bookkeeping Event
Proficiency Metric
```

## Open Questions

```text
Which other charge types are required for MVP?
```

---

# D023 — Bookkeeping Events Must Link to Trigger Events

## Category

```text
DATA_MODEL
PROTOCOL
QA
```

## Status

```text
ACCEPTED
```

## Decision

Every bookkeeping event must link to a trigger event or manual correction reason.

## Reason

Financial consequences must be traceable to workflow actions.

## Affected Documents

```text
BOOKKEEPING_EVENT_PROTOCOL.md
DATA_MODEL_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
```

## Affected Modules

```text
Bookkeeping Event
Event Ledger
Payment Record
Commission Record
Referral Fee Record
Revenue Event
```

## Open Questions

```text
Which Phase 1 clicks create bookkeeping events automatically?
```

---

# D024 — Admin Corrections Must Preserve History

## Category

```text
DATA_MODEL
QA
LEGAL
```

## Status

```text
ACCEPTED
```

## Decision

Admin corrections must not overwrite high-consequence history. Corrections must create correction, reversal, or superseding events with reason.

## Reason

The event ledger must preserve trust, auditability, and legal defensibility.

## Affected Documents

```text
DATA_MODEL_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
USER_FLOW_MASTER_SPECIFICATION.md
```

## Affected Modules

```text
Event Ledger
Admin Correction
Offer Baseline
Claim Decision Record
Bookkeeping Event
Evidence Record
```

## Open Questions

```text
Which records require two-person/admin review for correction?
```

---

# D025 — Support Assists; Users Decide

## Category

```text
OPERATIONS
LEGAL
USER_FLOW
QA
```

## Status

```text
ACCEPTED
```

## Decision

Platform Support may guide, explain, route, document, and escalate, but may not accept, approve, sign, determine, or consent for a user.

## Reason

This preserves SelfInsurity and reduces unauthorized representation risk.

## Affected Documents

```text
USER_FLOW_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
LEGAL_REVIEW_ISSUE_REGISTER.md
```

## Affected Modules

```text
Support Ticket
Support Owner
Offer Acceptance
Claim Request Authorization
Completion Approval
Claim Decision
```

## Open Questions

```text
What support scripts are legally safe?
```

---

# D026 — AI Agents Assist; Humans Remain Accountable

## Category

```text
AGENT
LEGAL
OPERATIONS
```

## Status

```text
ACCEPTED
LEGAL_TO_BE_VETTED
```

## Decision

AI agents may help organize work, draft documents, generate checklists, summarize data, assist code creation, and support operations, but they do not make legal, insurance, financial, claim, consent, or payment decisions.

## Reason

The Human Blockchain and SelfInsurity architecture require human accountability.

## Affected Documents

```text
AGENT_SYSTEM_PROMPT.md
MASTER_CONTEXT.md
LEGAL_REVIEW_ISSUE_REGISTER.md
BACKLOG_AND_USER_STORIES.md
```

## Affected Modules

```text
Kimosabe
Agent Army
Support
Legal Review Agent
Product Agent
QA Agent
```

## Open Questions

```text
What AI disclosure language is required in the product and repository?
```

---

# D027 — Use Repository as Execution System

## Category

```text
REPOSITORY
AGENT
OPERATIONS
```

## Status

```text
ACCEPTED
```

## Decision

The Season 1 repository will not be a document archive. It will be an execution system containing canon, product requirements, protocols, data model, flows, backlog, QA, legal review, sponsor materials, dashboard models, agent instructions, and exports.

## Reason

The project is too large to manage as a single narrative. It needs structured execution layers.

## Affected Documents

```text
SEASON_1_REPOSITORY_CREATION_PLAN.md
README.md
MASTER_CONTEXT.md
CANON_INDEX.md
```

## Affected Modules

```text
Repository
Agent Instructions
Exports
Source Archive
Backlog
QA
Legal Review
```

## Open Questions

```text
Should the first actual repository be created as markdown files, downloadable zip, GitHub-ready structure, or all three?
```

---

# D028 — Legal Issues Must Be Tracked by Issue ID

## Category

```text
LEGAL
REPOSITORY
QA
PRODUCT
```

## Status

```text
ACCEPTED
```

## Decision

Legal-sensitive concepts must be tracked in the Legal Review Issue Register with issue IDs.

## Reason

Legal risk must be managed structurally, not through vague warnings.

## Affected Documents

```text
LEGAL_REVIEW_ISSUE_REGISTER.md
LEGAL_ARCHITECTURE_TO_BE_VETTED.md
README.md
MASTER_CONTEXT.md
```

## Affected Modules

```text
SelfInsurity
Public Adjusting
Legal Advice
Claim Caller
ClaimBuddy
ClaimsBank
Sponsor Positions
TER
Founding Operator
Delegated Authority
```

## Open Questions

```text
Who will own issue status updates after counsel review?
```

---

# D029 — Safe Phase 1 Language Must Be Used Until Counsel Review

## Category

```text
LEGAL
SPONSOR
EVENT
PRODUCT
```

## Status

```text
ACCEPTED
```

## Decision

Use safe Phase 1 language for legal-sensitive concepts until counsel approves stronger language.

## Reason

The project includes insurance, legal, financial, sponsorship, performance scoring, and user-consent concepts that require careful public phrasing.

## Affected Documents

```text
LEGAL_REVIEW_ISSUE_REGISTER.md
README.md
MASTER_CONTEXT.md
ONE_PROMPT_EVENT_PACKAGE.md
SPONSOR_POSITION_BOOK.md
```

## Affected Modules

```text
Marketing
Sponsor Materials
UI Copy
One Prompt Event
Legal Review
```

## Open Questions

```text
Which public phrases should be approved first?
```

---

# D030 — One Prompt Event Demo Must Show One Complete Operating Cell

## Category

```text
EVENT
SEASON_1
PRODUCT
SPONSOR
```

## Status

```text
ACCEPTED
```

## Decision

The One Prompt Event demo should show one complete operating cell from lead to dashboard, not a broad theoretical platform tour.

## Reason

One complete coherent transaction is more credible than many disconnected promises.

## Affected Documents

```text
ONE_PROMPT_EVENT_PACKAGE.md
USER_FLOW_MASTER_SPECIFICATION.md
ACCEPTANCE_TEST_AND_QA_MASTER_PLAN.md
BACKLOG_AND_USER_STORIES.md
```

## Affected Modules

```text
Property Owner
Contractor
Offer
Claim Request
Claim Caller
ClaimBuddy
Human Blockchain
Bookkeeping
TER
Quantum Dashboard
Sponsor Position
```

## Open Questions

```text
Should the first demo use real historical sample data, synthetic data, or a hybrid?
```

---

## 5. Open Decision List

These decisions remain open:

```text
OD001 — First Season 1 market selection
OD002 — First founding operator selection
OD003 — One Prompt Event format
OD004 — First sponsor category to approach
OD005 — First legal counsel category to engage
OD006 — First technical stack
OD007 — One code base versus two code bases
OD008 — MVP live versus mocked demo scope
OD009 — ClaimsBank public naming strategy
OD010 — Initial dashboard scenario assumptions
OD011 — ClaimBuddy first task catalog
OD012 — Minimum external determination evidence
OD013 — Public website language
OD014 — Sponsor package pricing / valuation logic
OD015 — Repository export format
```

---

## 6. Decision Maintenance Rules

## Rule 1 — Do Not Change Core Rules Silently

Any change to these requires a decision entry:

```text
No user clicks OK for another user
Entity Role is not Designation
Claim Caller is a Designation
First shared offer baseline
First claim request creates ClaimStore Claim
Human Blockchain evidence rule
ClaimsBank Phase 1 limitation
TER internal-first rule
Sponsor positions are sponsorship, not ownership
```

## Rule 2 — Link Decisions to Documents

Every major decision must identify affected documents.

## Rule 3 — Link Decisions to QA

If a decision affects system behavior, update acceptance tests.

## Rule 4 — Link Legal Decisions to Issue IDs

If counsel resolves a legal question, update:

```text
LEGAL_REVIEW_ISSUE_REGISTER.md
DECISION_LOG.md
Affected product documents
Affected UI copy
Affected sponsor materials
```

## Rule 5 — Mark Superseded Decisions

Do not delete old decisions.

If a decision changes, mark it:

```text
SUPERSEDED
```

and create a new decision entry.

---

## 7. Working Conclusion

The Decision Log is the project’s memory of judgment.

The canon captures what we believe.

The backlog captures what we build.

The QA plan captures what we test.

The legal register captures what we must vet.

The Decision Log captures what we have decided.

Future contributors should not casually reopen settled architecture.

They should build from it, test against it, and only change it with a recorded reason.

Next I recommend **#25: Open Questions Register v0.1**.

That will gather the unresolved strategic, product, technical, legal, sponsor, operational, and dashboard questions into one numbered register so we can stop carrying them loosely in the chat.
