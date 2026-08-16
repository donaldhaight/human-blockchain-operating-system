---
id: working-model-index
title: "Working Model Index"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 43152
source_line_end: 44902
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# CANON_INDEX.md  
## Genesis ClaimStore Season 1 Repository  
### Canonical Document Index, Status Map, Related Modules, and Next Actions

---

## 1. Purpose

This document is the Canon Index for the Genesis ClaimStore Season 1 Repository.

The purpose is to track every canonical document created for the ClaimStore / Kimosabe / Human Blockchain ecosystem and explain:

```text
What the document is
Why it exists
What modules it affects
What legal sensitivity it carries
What status it has
What should happen next
```

The Canon Index prevents the repository from becoming a loose collection of documents.

It turns the canon into an organized operating library.

---

## 2. Canon Status Values

Use these status values:

```text
DRAFT
CANONICAL_DRAFT
NEEDS_REVIEW
LEGAL_TO_BE_VETTED
TECHNICAL_TO_BE_VALIDATED
READY_FOR_BACKLOG
READY_FOR_BUILD
READY_FOR_EXPORT
DEFERRED
SUPERSEDED
APPROVED_FOR_PHASE_1
```

---

## 3. Legal Sensitivity Values

Use these values:

```text
LOW
MODERATE
HIGH
CRITICAL
```

Definitions:

```text
LOW = Mostly internal architecture, naming, or non-legal product planning.
MODERATE = May affect workflow, user expectations, or business claims.
HIGH = Touches legal, financial, insurance, public adjusting, privacy, sponsor, or performance issues.
CRITICAL = Must be reviewed before public launch, live operation, sponsor offer, or user reliance.
```

---

## 4. Build Relevance Values

Use these values:

```text
REFERENCE
PRODUCT
PROTOCOL
DATA_MODEL
USER_FLOW
BACKLOG
QA
LEGAL
OPERATIONS
SPONSOR
DASHBOARD
AGENT
EVENT
```

A document may have more than one build relevance value.

---

# 5. Canonical Document Index

---

## #01 — ClaimStore Case Study Master Brief

### Purpose

Defines the master narrative of ClaimStore as market infrastructure for the insurance restoration market.

It explains the original insight, market problem, stakeholder fragmentation, ClaimStore solution, ClaimExpress protocol, ClaimBuddy / Human Blockchain, SelfInsurity, RRCA, ClaimsBank, Quantum Dashboard, sponsor positions, and Season 1 launch logic.

### Status

```text
CANONICAL_DRAFT
```

### Build Relevance

```text
REFERENCE
PRODUCT
SPONSOR
OPERATIONS
DASHBOARD
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
ClaimStore Platform
ClaimExpress
ClaimBuddy
Human Blockchain
RRCA
SelfInsurity
ClaimsBank
Quantum Dashboard
Sponsor Positions
Season 1 Operating Cell
```

### Related Source Documents

```text
Construction Support
MarketApp / ClaimStore 2006
ClaimStore Vision 2012
Patent Abstract
THE ENGINE
Architecture Deck
ClaimExpress TOS
RRCA Member Agreement
```

### Next Action

Split sponsor-facing and developer-facing language into separate exports.

---

## #02 — ClaimStore Requirements Discovery Brief

### Purpose

Translates historical source documents into modern requirements discovery.

Defines Phase 1 as contractor-first, property-owner-enabled, claim-request-centered, role-based, evidence-backed, and dashboard-observable.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BACKLOG
```

### Build Relevance

```text
PRODUCT
USER_FLOW
BACKLOG
DATA_MODEL
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
Identity
Profile
Entity Roles
Designations
Property Owner File
Contractor BMS
Claim Request
Evidence
TER
Quantum Dashboard
```

### Related Source Documents

```text
MarketApp
ClaimStore Vision
THE ENGINE
Patent Abstract
```

### Next Action

Cross-check all requirements against Phase 1 PRD and backlog.

---

## #03 — ClaimExpress Protocol Specification

### Purpose

Defines ClaimExpress as the claim/project workflow protocol.

Covers transaction spine, event categories, click classes, claim request types, status transitions, evidence events, bookkeeping events, consent events, and protocol transitions.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BUILD
```

### Build Relevance

```text
PROTOCOL
EVENT
PRODUCT
QA
DATA_MODEL
```

### Legal Sensitivity

```text
HIGH
```

### Related Modules

```text
Event Ledger
Claim Request
ClaimStore Claim
Offer
Evidence
Bookkeeping Events
Consent Events
Protocol Transitions
```

### Related Source Documents

```text
ClaimExpress TOS
Patent Abstract
THE ENGINE
ClaimStore Vision
```

### Next Action

Create developer-facing state transition table and API event schema.

---

## #04 — ClaimExpress Protocol Addendum A  
### Contractor Offer, Other Charges, Equipment Orders, Need/Done, and Proficiency

### Purpose

Corrects and expands the original offer and cost model.

Defines Contractor Offer as complete list of jobs, orders, equipment, other charges, selling price, estimated cost, evidence, and terms.

Defines first offer vs final closeout variance as proficiency intelligence.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BUILD
```

### Build Relevance

```text
PRODUCT
DATA_MODEL
PROTOCOL
QA
DASHBOARD
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
Offer Builder
Jobs
Orders
Equipment Orders
Other Charges
Need/Done
Proficiency Metrics
Bookkeeping Events
```

### Related Source Documents

```text
ClaimStore Vision
Purchase Order
THE ENGINE
RRCA Member Agreement
```

### Next Action

Map every offer/cost component to database fields and acceptance tests.

---

## #05 — George Washington Rollout Model

### Purpose

Defines the founding-operator rollout strategy.

Explains why the first seasons use a founding operator to absorb early trust risk, guarantee defined work, document transactions, and prove the protocol before neutrality is fully trusted by the market.

### Status

```text
CANONICAL_DRAFT
NEEDS_LEGAL_REVIEW
```

### Build Relevance

```text
OPERATIONS
LEGAL
SPONSOR
PRODUCT
```

### Legal Sensitivity

```text
CRITICAL
```

### Related Modules

```text
Founding Operator System
Neutral Platform
Imported Events
Guarantee Language
Season 1 Operating Cell
Sponsor Package
```

### Related Source Documents

```text
Architecture Deck
ClaimStore Vision
RRCA Member Agreement
Purchase Order
```

### Next Action

Create Founding Operator Playbook and legal issue packet for guarantee/conflict disclosures.

---

## #06 — ClaimStore Object Model Addendum

### Purpose

Defines the object hierarchy connecting Property, ClaimStore Claim, Project, Offer, Jobs, Orders, Other Charges, Tasks, Evidence, Events, Bookkeeping, Proficiency, ClaimsBank readiness, and Quantum Dashboard.

Also defines two-code-base event boundaries.

### Status

```text
CANONICAL_DRAFT
READY_FOR_DATA_MODEL
```

### Build Relevance

```text
DATA_MODEL
EVENT
PRODUCT
ARCHITECTURE
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
Property
ClaimStore Claim
Project
Offer
Job
Order
Other Charge
Task
Event Ledger
Bookkeeping Event
Imported Event
```

### Related Source Documents

```text
THE ENGINE
Patent Abstract
ClaimStore Vision
MarketApp
```

### Next Action

Cross-check with Data Model Master Specification.

---

## #07 — Human Blockchain / ClaimBuddy Operating Model

### Purpose

Defines Human Blockchain as the verified event ledger and ClaimBuddy as the field task / evidence / verification layer.

Covers task types, verification levels, evidence requirements, interested vs non-interested verifier, trust weight, and ClaimsBank readiness impacts.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BACKLOG
```

### Build Relevance

```text
PROTOCOL
USER_FLOW
DATA_MODEL
QA
OPERATIONS
```

### Legal Sensitivity

```text
HIGH
```

### Related Modules

```text
ClaimBuddy Tasks
Evidence
Human Blockchain Events
SLA
TER
ClaimsBank Conditions
Field Services
```

### Related Source Documents

```text
ClaimStore Vision
RRCA Member Agreement
Purchase Order
Patent Abstract
```

### Next Action

Create ClaimBuddy Agreement Notes and task-specific acceptance tests.

---

## #08 — RRCA SLA and TER Model

### Purpose

Defines SLA, TER, proficiency, routing, coaching, three-week flag rule, evidence requirements, role/task averages, and performance governance.

### Status

```text
CANONICAL_DRAFT
LEGAL_TO_BE_VETTED
```

### Build Relevance

```text
OPERATIONS
DATA_MODEL
QA
DASHBOARD
LEGAL
```

### Legal Sensitivity

```text
HIGH
```

### Related Modules

```text
SLA Records
TER Metrics
Proficiency Metrics
Routing
Review Flags
RRCA Standards
Training
```

### Related Source Documents

```text
RRCA Member Agreement
RRCA One-Page Understanding
Purchase Order
```

### Next Action

Create internal-only TER policy and legal review issue packet.

---

## #09 — Insurance Determination / Claim Caller Addendum

### Purpose

Defines Claim Caller as the insurance-side determination designation.

Distinguishes inspection, estimate, opinion, review, recommendation, external determination, and actual claim decision responsibility.

### Status

```text
CANONICAL_DRAFT
LEGAL_TO_BE_VETTED
```

### Build Relevance

```text
PROTOCOL
DATA_MODEL
USER_FLOW
QA
LEGAL
DASHBOARD
```

### Legal Sensitivity

```text
CRITICAL
```

### Related Modules

```text
Claim Caller
Claim Decision Record
Claim Request
External Determination
Authority Source
Quantum Dashboard
```

### Related Source Documents

```text
Patent Abstract
ClaimStore Vision
ClaimExpress TOS
```

### Next Action

Create legally safe UI copy and counsel question packet.

---

## #10 — Designation Model Addendum

### Purpose

Defines Designation as claim/project/task/request/decision-specific responsibility, separate from Entity Role.

Establishes the accountability layer between roles and events.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BUILD
```

### Build Relevance

```text
DATA_MODEL
PERMISSIONS
QA
PROTOCOL
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
Designation Assignment
Authority Source
Entity Role Matrix
Claim Caller
Offer Owner
Project Lead
Completion Verifier
Support Owner
```

### Related Source Documents

```text
THE ENGINE
Patent Abstract
ClaimStore Vision
RRCA Member Agreement
```

### Next Action

Create permission tables and object-specific designation rules.

---

## #11 — Quantum Dashboard Underwriting Model

### Purpose

Defines the dashboard as the underwriting, simulation, observability, market-sizing, sponsor, and stakeholder intelligence layer.

Includes formulas for market opportunity and risk-adjusted opportunity.

### Status

```text
CANONICAL_DRAFT
LEGAL_TO_BE_VETTED
```

### Build Relevance

```text
DASHBOARD
SPONSOR
PRODUCT
DATA_MODEL
LEGAL
```

### Legal Sensitivity

```text
HIGH
```

### Related Modules

```text
Dashboard Metrics
Scenario Model
Market Opportunity
Claim Caller Accountability
TER Confidence
Sponsor Position
Season Forecast
```

### Related Source Documents

```text
Architecture Deck
ClaimStore Vision
Midday / Kimosabe Chat Export
```

### Next Action

Create dashboard-safe disclaimers and v0.1 operating cell scenario.

---

## #12 — Founding Stakeholder Sponsor Position Book

### Purpose

Defines sponsor positions as sponsorship, not ownership.

Covers sponsor categories, territory, season, term, rights, obligations, recognition, data access, exclusivity, renewal, and revocation.

### Status

```text
CANONICAL_DRAFT
LEGAL_TO_BE_VETTED
```

### Build Relevance

```text
SPONSOR
LEGAL
DASHBOARD
OPERATIONS
```

### Legal Sensitivity

```text
CRITICAL
```

### Related Modules

```text
Sponsor Position
Sponsor Data Access
Quantum Dashboard
One Prompt Event
Season 1 Ask
```

### Related Source Documents

```text
Architecture Deck
Midday / Kimosabe Chat Export
```

### Next Action

Create sponsor template packages and legal review version.

---

## #13 — Phase 1 Product Requirements Document

### Purpose

Defines the first buildable version of the ecosystem.

Covers modules, users, objects, workflows, build order, acceptance standards, exclusions, and one operating cell.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BACKLOG
```

### Build Relevance

```text
PRODUCT
BACKLOG
QA
DATA_MODEL
USER_FLOW
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
All Phase 1 modules
```

### Related Source Documents

```text
All major historical source documents
```

### Next Action

Convert into developer-facing requirements and sprint plan.

---

## #14 — Season 1 Operating Plan and Roadmap

### Purpose

Defines Season 1 as Proof of Coherence.

Sets Season 1 timeframe, operating cell, roadmap, milestones, roles, sponsor targets, legal priorities, metrics, and readiness criteria.

### Status

```text
CANONICAL_DRAFT
READY_FOR_OPERATIONS
```

### Build Relevance

```text
OPERATIONS
SPONSOR
PRODUCT
DASHBOARD
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
Operating Cell
Founding Operator
ClaimBuddy
Quantum Dashboard
Sponsor Positions
Legal Review
```

### Related Source Documents

```text
Architecture Deck
ClaimStore Vision
Purchase Order
RRCA
```

### Next Action

Create operating-cell checklist and weekly review cadence.

---

## #15 — Developer / Agent Handoff Package

### Purpose

Defines repository structure, agent workflows, build instructions, file map, agent rules, data model starting points, backlog structure, and definition of done.

### Status

```text
CANONICAL_DRAFT
READY_FOR_REPOSITORY
```

### Build Relevance

```text
AGENT
PRODUCT
BACKLOG
QA
OPERATIONS
```

### Legal Sensitivity

```text
LOW
```

### Related Modules

```text
Repository
Agent Instructions
Backlog
QA
Data Model
Developer Handoff
```

### Related Source Documents

```text
All canon documents
```

### Next Action

Convert into repo folders and agent prompt files.

---

## #16 — Legal Architecture To Be Vetted

### Purpose

Maps the legal structure requiring review: TOS, Privacy, SelfInsurity, public adjusting, legal advice, Claim Caller, ClaimBuddy, ClaimsBank, TER, sponsors, securities, franchise, employment, and founding operator conflicts.

### Status

```text
LEGAL_TO_BE_VETTED
CANONICAL_DRAFT
```

### Build Relevance

```text
LEGAL
PRODUCT
OPERATIONS
SPONSOR
QA
```

### Legal Sensitivity

```text
CRITICAL
```

### Related Modules

```text
All legal-sensitive modules
```

### Related Source Documents

```text
ClaimExpress TOS
RRCA Member Agreement
Purchase Order
Architecture Deck
```

### Next Action

Prepare counsel packets by issue ID.

---

## #17 — One Prompt Event Package

### Purpose

Defines the Genesis demonstration / launch event structure.

Includes event thesis, audience, founder script, slide sequence, demo flow, sponsor ask, safe legal framing, and post-event actions.

### Status

```text
CANONICAL_DRAFT
READY_FOR_EVENT_PLANNING
LEGAL_TO_BE_VETTED
```

### Build Relevance

```text
OPERATIONS
SPONSOR
DASHBOARD
LEGAL
EVENT
```

### Legal Sensitivity

```text
HIGH
```

### Related Modules

```text
One Prompt Demo
Sponsor Position
Quantum Dashboard
Season 1 Ask
Founder Script
```

### Related Source Documents

```text
Architecture Deck
Midday / Kimosabe Chat Export
All canon documents
```

### Next Action

Create slide outline and shorter sponsor/investor version.

---

## #18 — Master Glossary and Naming Convention

### Purpose

Defines canonical names, terms, roles, designations, objects, event types, sponsor concepts, and naming rules.

Prevents architectural language from drifting.

### Status

```text
CANONICAL_DRAFT
READY_FOR_REPOSITORY
```

### Build Relevance

```text
REFERENCE
AGENT
PRODUCT
LEGAL
SPONSOR
```

### Legal Sensitivity

```text
LOW_TO_MODERATE
```

### Related Modules

```text
All modules
```

### Related Source Documents

```text
All canon documents
```

### Next Action

Split into glossary, naming rules, safe language library, and do-not-flatten terms.

---

## #19 — Entity Role and Designation Matrix

### Purpose

Defines entity types, entity roles, designations, permission classes, authority sources, high-consequence actions, consent authority, evidence authority, sponsor access, and role/designation acceptance tests.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BUILD
```

### Build Relevance

```text
PERMISSIONS
DATA_MODEL
QA
USER_FLOW
LEGAL
```

### Legal Sensitivity

```text
HIGH
```

### Related Modules

```text
Entity Role Assignment
Designation Assignment
Authority Source
Permissions
Claim Caller
Sponsor Access
Delegated Authority
```

### Related Source Documents

```text
THE ENGINE
Patent Abstract
ClaimStore Vision
RRCA Member Agreement
```

### Next Action

Convert into permission matrix tables for developers.

---

## #20 — Data Model Master Specification

### Purpose

Defines database-ready object families, fields, relationships, events, and Phase 1 build priorities.

### Status

```text
CANONICAL_DRAFT
READY_FOR_TECHNICAL_VALIDATION
```

### Build Relevance

```text
DATA_MODEL
BACKEND
QA
DASHBOARD
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
All core data objects
```

### Related Source Documents

```text
THE ENGINE
Patent Abstract
ClaimStore Vision
MarketApp
```

### Next Action

Convert into ERD, schema drafts, API objects, and migration plan.

---

## #21 — Backlog and User Stories

### Purpose

Converts PRD, data model, user flows, protocol, and QA requirements into epics, user stories, acceptance criteria, sprint plan, and MVP priority levels.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BUILD_PLANNING
```

### Build Relevance

```text
BACKLOG
PRODUCT
QA
AGENT
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
All Phase 1 modules
```

### Related Source Documents

```text
PRD
Data Model
User Flow
QA Plan
Legal Issue Register
```

### Next Action

Move into issue tracker / project board.

---

## #22 — User Flow Master Specification

### Purpose

Defines step-by-step workflows for onboarding, property owner, contractor, offer, claim request, Claim Caller, ClaimBuddy, Human Blockchain, bookkeeping, TER, ClaimsBank, dashboard, support, sponsor, and One Prompt Event demo.

### Status

```text
CANONICAL_DRAFT
READY_FOR_BUILD_PLANNING
```

### Build Relevance

```text
USER_FLOW
PRODUCT
QA
FRONTEND
BACKEND
```

### Legal Sensitivity

```text
HIGH
```

### Related Modules

```text
All user-facing workflows
```

### Related Source Documents

```text
PRD
Protocol
Role Matrix
Data Model
Legal Issue Register
```

### Next Action

Convert into workflow diagrams and screen inventory.

---

## #23 — Acceptance Test and QA Master Plan

### Purpose

Defines test suites, severity levels, regression tests, QA dataset, evidence requirements, and definition of done.

### Status

```text
CANONICAL_DRAFT
READY_FOR_QA
```

### Build Relevance

```text
QA
BACKLOG
AGENT
PRODUCT
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
All Phase 1 modules
```

### Related Source Documents

```text
Backlog
User Flows
Data Model
Legal Issue Register
```

### Next Action

Convert into automated/manual QA checklist and test cases.

---

## #24 — Legal Review Issue Register

### Purpose

Turns legal architecture into trackable review items with issue IDs, risk categories, affected modules, counsel questions, safe language, unsafe language, priority, and status.

### Status

```text
LEGAL_TO_BE_VETTED
CANONICAL_DRAFT
```

### Build Relevance

```text
LEGAL
PRODUCT
SPONSOR
OPERATIONS
QA
```

### Legal Sensitivity

```text
CRITICAL
```

### Related Modules

```text
All legal-sensitive modules
```

### Related Source Documents

```text
Legal Architecture
ClaimExpress TOS
RRCA Member Agreement
Purchase Order
Architecture Deck
```

### Next Action

Assign issue owners and prepare counsel packets.

---

## #25 — Season 1 Repository Creation Plan

### Purpose

Defines the project repository folder structure, file creation order, metadata tags, source archive plan, export plan, repository maintenance rules, and readiness checklists.

### Status

```text
CANONICAL_DRAFT
READY_FOR_REPOSITORY_CREATION
```

### Build Relevance

```text
AGENT
OPERATIONS
REFERENCE
```

### Legal Sensitivity

```text
LOW
```

### Related Modules

```text
Repository
Documentation
Agent Instructions
Exports
Source Archive
```

### Related Source Documents

```text
All canon documents
```

### Next Action

Create actual folder structure and markdown files.

---

## #26 — Master Context File

### Purpose

Provides the single master context every human or AI agent must read before contributing.

Summarizes project identity, source history, architecture, rules, roles, designations, workflows, objects, legal warnings, build priorities, and agent instructions.

### Status

```text
CANONICAL_DRAFT
READY_FOR_REPOSITORY
```

### Build Relevance

```text
REFERENCE
AGENT
PRODUCT
LEGAL
SPONSOR
QA
```

### Legal Sensitivity

```text
MODERATE
```

### Related Modules

```text
All modules
```

### Related Source Documents

```text
All canon documents
```

### Next Action

Place at 00_README/MASTER_CONTEXT.md and require all agents to read first.

---

## #27 — README.md

### Purpose

Provides the repository front door.

Explains what the repository is, what ClaimStore is, Season 1 goal, architecture sentence, folder structure, reading paths, non-negotiable rules, legal-safe language, and immediate next actions.

### Status

```text
CANONICAL_DRAFT
READY_FOR_REPOSITORY
```

### Build Relevance

```text
REFERENCE
AGENT
OPERATIONS
```

### Legal Sensitivity

```text
LOW_TO_MODERATE
```

### Related Modules

```text
Repository
Contributor Onboarding
Developer Handoff
Legal Review
Sponsor Review
```

### Related Source Documents

```text
Master Context
Repository Creation Plan
All canon documents
```

### Next Action

Place at root or 00_README/README.md.

---

## #28 — Canon Index

### Purpose

Indexes the full canonical document set.

Tracks purpose, status, build relevance, legal sensitivity, related modules, related source documents, and next action.

### Status

```text
CANONICAL_DRAFT
READY_FOR_REPOSITORY
```

### Build Relevance

```text
REFERENCE
AGENT
OPERATIONS
```

### Legal Sensitivity

```text
LOW
```

### Related Modules

```text
Repository
Documentation
Decision Log
Agent Instructions
```

### Related Source Documents

```text
All canon documents
```

### Next Action

Maintain as living index whenever documents are added, split, revised, or superseded.

---

# 6. Supporting Documents Still Needed

The following documents should be created next or split from existing canon:

```text
29 DECISION_LOG.md
30 OPEN_QUESTIONS.md
31 SOURCE_INDEX.md
32 SOURCE_NOTES_PACKAGE
33 AGENT_SYSTEM_PROMPT.md
34 PERMISSIONS_MATRIX.md
35 API_EVENT_SCHEMA_OUTLINE.md
36 SCREEN_INVENTORY.md
37 ONE_PROMPT_EVENT_SLIDE_OUTLINE.md
38 FOUNDER_SCRIPT.md
39 SPONSOR_SAFE_LANGUAGE.md
40 LEGAL_COUNSEL_PACKET_INDEX.md
41 MVP_DEMO_REQUIREMENTS.md
42 SPRINT_PLAN.md
43 ERD_OUTLINE.md
44 DASHBOARD_METRIC_DICTIONARY.md
45 FOUNDING_OPERATOR_PLAYBOOK.md
46 CLAIMBUDDY_TASK_CATALOG.md
47 CLAIM_CALLER_UI_COPY.md
48 CLAIMSBANK_SAFE_LANGUAGE.md
49 EXPORT_PACKAGE_PLAN.md
```

---

# 7. Canon Maintenance Rules

## Rule 1 — Do Not Rewrite Canon Silently

If a canonical concept changes, update:

```text
Decision Log
Affected document
Canon Index
Related backlog item
Related QA test
```

---

## Rule 2 — Split Documents, Do Not Destroy Them

If a large canon document becomes multiple technical files, keep the original and mark the split.

Example:

```text
Data Model Master Specification
→ Core Objects
→ Event Ledger Objects
→ Bookkeeping Objects
→ Dashboard Objects
```

---

## Rule 3 — Legal-Sensitive Concepts Must Link to Issue IDs

Any document using these concepts must reference the Legal Review Issue Register:

```text
SelfInsurity
Public adjusting
Legal advice
Claim Caller
ClaimBuddy
ClaimsBank
Escrow
Reserve
Sponsor positions
TER
Founding operator guarantee
Insurance/supplemental protection
Tokens/DAO/stakeholder rights
```

---

## Rule 4 — Build Documents Must Link to QA

Any buildable requirement must have at least one acceptance test.

---

## Rule 5 — New Terms Must Be Added to Glossary

If a new coined term appears, add it to:

```text
MASTER_GLOSSARY_AND_NAMING_CONVENTION.md
```

before using it broadly.

---

# 8. Working Conclusion

The Canon Index is the map of the Genesis ClaimStore Season 1 canon.

It tells future contributors where the architecture lives, which documents control which parts of the build, which concepts require legal review, and what actions come next.

The canon is now large enough to build from.

The next task is not more imagination.

The next task is controlled conversion:

```text
Canon
→ Repository
→ Backlog
→ Legal Review
→ Prototype
→ One Prompt Event
→ Season 1
```

Protect the canon.

Build the cell.

Prove coherence.

Next I recommend **#24: Decision Log v0.1**.

That will lock in the major architectural decisions already made so future developers, agents, sponsors, and counsel know what is settled, what is provisional, and what remains open.
