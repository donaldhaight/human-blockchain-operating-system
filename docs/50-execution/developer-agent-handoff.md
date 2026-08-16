---
id: developer-agent-handoff
title: "Developer and Agent Handoff Package"
status: extracted-working-draft
source_id: SRC-010
source_sha256: e0c62c29d4155603b3d24c6e9cebd9d3b71a9f54647ba3d14cacbd045fe91403
source_line_start: 20922
source_line_end: 22641
authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.
---
# Developer / Agent Handoff Package v0.1  
## Repository Structure, Build Instructions, Agent Workflows, and Season 1 Execution System

## 1. Purpose

This document defines the Developer / Agent Handoff Package for the ClaimStore / ClaimExpress / ClaimBuddy / Kimosabe / Human Blockchain ecosystem.

The purpose is to turn the current canon into a structured repository that can be used by:

```text
Human developers
AI coding agents
Product managers
Project managers
System architects
Legal reviewers
Sponsor reviewers
Operators
Kimosabe workflow agents
```

This package is not merely documentation.

It is the instruction layer for building Season 1.

The handoff must preserve the full architecture while making the first build practical, testable, and staged.

---

## 2. Core Handoff Principle

The handoff package must separate:

```text
Vision
```

from:

```text
Requirements
```

from:

```text
Build instructions
```

from:

```text
Legal-to-be-vetted material
```

from:

```text
Operating decisions
```

from:

```text
Agent prompts and task instructions
```

The system is too large to hand to developers as a single narrative.

It must be broken into usable files.

---

## 3. Repository Goal

The repository should allow a new developer, AI agent, sponsor reviewer, or internal stakeholder to answer:

```text
What is this?
Why does it exist?
Who uses it?
What gets built first?
What is out of scope?
What are the core objects?
What are the workflows?
What are the roles?
What are the designations?
What clicks create events?
What clicks create bookkeeping?
What is ClaimExpress?
What is ClaimBuddy?
What is Human Blockchain?
What is TER?
What is ClaimsBank?
What is Quantum Dashboard?
What is Season 1?
What should I build today?
```

---

## 4. Recommended Repository Structure

```text
/genesis-claimstore/
│
├── 00_README/
│   ├── README.md
│   ├── MASTER_CONTEXT.md
│   ├── CANON_INDEX.md
│   ├── GLOSSARY.md
│   └── DECISION_LOG.md
│
├── 01_VISION/
│   ├── CLAIMSTORE_CASE_STUDY_MASTER_BRIEF.md
│   ├── ORIGINAL_INSIGHT.md
│   ├── GEORGE_WASHINGTON_ROLLOUT_MODEL.md
│   ├── SEVEN_GROUPS_ONE_ARCHITECTURE.md
│   └── TEN_YEAR_SEASONAL_LAUNCH.md
│
├── 02_PRODUCT_REQUIREMENTS/
│   ├── PHASE_1_PRD.md
│   ├── REQUIREMENTS_DISCOVERY_BRIEF.md
│   ├── PHASE_1_SCOPE.md
│   ├── PHASE_1_EXCLUSIONS.md
│   └── ACCEPTANCE_TESTS.md
│
├── 03_PROTOCOLS/
│   ├── CLAIMEXPRESS_PROTOCOL.md
│   ├── CLICK_EVENT_PROTOCOL.md
│   ├── BOOKKEEPING_EVENT_PROTOCOL.md
│   ├── CLAIM_CALLER_PROTOCOL.md
│   ├── DESIGNATION_MODEL.md
│   └── SELFINSURITY_PRINCIPLES.md
│
├── 04_DATA_MODEL/
│   ├── DATA_MODEL_OVERVIEW.md
│   ├── ENTITY_ROLE_MATRIX.md
│   ├── DESIGNATION_OBJECTS.md
│   ├── CORE_OBJECTS.md
│   ├── CLAIM_PROJECT_OBJECTS.md
│   ├── OFFER_JOB_ORDER_OTHER_CHARGE_OBJECTS.md
│   ├── EVENT_LEDGER.md
│   ├── HUMAN_BLOCKCHAIN_EVENTS.md
│   ├── BOOKKEEPING_EVENTS.md
│   ├── TER_PROFICIENCY_METRICS.md
│   └── CLAIMSBANK_READINESS_FIELDS.md
│
├── 05_USER_FLOWS/
│   ├── PROPERTY_OWNER_FLOW.md
│   ├── CONTRACTOR_FLOW.md
│   ├── ISR_FLOW.md
│   ├── CLAIMBUDDY_FLOW.md
│   ├── INSURANCE_CLAIM_CALLER_FLOW.md
│   ├── FIELD_SERVICE_FLOW.md
│   ├── PLATFORM_ADMIN_FLOW.md
│   └── SUPPORT_FLOW.md
│
├── 06_MODULE_SPECS/
│   ├── IDENTITY_PROFILE_MODULE.md
│   ├── ENTITY_ROLE_DESIGNATION_MODULE.md
│   ├── CONTRACTOR_OPERATIONS_MODULE.md
│   ├── PROPERTY_OWNER_CLAIM_FILE_MODULE.md
│   ├── OFFER_BUILDER_MODULE.md
│   ├── CLAIM_REQUEST_MODULE.md
│   ├── CLAIM_CALLER_MODULE.md
│   ├── CLAIMBUDDY_TASK_MODULE.md
│   ├── EVIDENCE_DOCUMENT_MODULE.md
│   ├── BOOKKEEPING_MODULE.md
│   ├── TER_SLA_MODULE.md
│   ├── QUANTUM_DASHBOARD_MODULE.md
│   ├── VIRTUAL_ITEMS_REVENUE_MODULE.md
│   └── SUPPORT_KNOWLEDGE_BASE_MODULE.md
│
├── 07_BACKLOG/
│   ├── BACKLOG_OVERVIEW.md
│   ├── EPICS.md
│   ├── USER_STORIES.md
│   ├── MVP_BUILD_ORDER.md
│   ├── SEASON_1_MILESTONES.md
│   └── DEFERRED_FEATURES.md
│
├── 08_AGENT_INSTRUCTIONS/
│   ├── AGENT_SYSTEM_PROMPT.md
│   ├── PRODUCT_AGENT.md
│   ├── ARCHITECTURE_AGENT.md
│   ├── DATA_MODEL_AGENT.md
│   ├── BACKEND_AGENT.md
│   ├── FRONTEND_AGENT.md
│   ├── QA_AGENT.md
│   ├── LEGAL_REVIEW_AGENT.md
│   ├── SPONSOR_PACKAGE_AGENT.md
│   └── DOCUMENTATION_AGENT.md
│
├── 09_LEGAL_COMPLIANCE_TO_BE_VETTED/
│   ├── LEGAL_ARCHITECTURE_TO_BE_VETTED.md
│   ├── TERMS_OF_SERVICE_NOTES.md
│   ├── PROFESSIONAL_MEMBER_AGREEMENT_NOTES.md
│   ├── CLAIMBUDDY_AGREEMENT_NOTES.md
│   ├── FIELD_SERVICE_AGREEMENT_NOTES.md
│   ├── SPONSOR_AGREEMENT_NOTES.md
│   ├── SELFINSURITY_LANGUAGE_REVIEW.md
│   ├── CLAIM_CALLER_LANGUAGE_REVIEW.md
│   ├── CLAIMSBANK_ESCROW_RESERVE_REVIEW.md
│   └── TER_SCORING_REVIEW.md
│
├── 10_BUSINESS_SPONSOR/
│   ├── FOUNDING_SPONSOR_POSITION_BOOK.md
│   ├── QUANTUM_DASHBOARD_UNDERWRITING_MODEL.md
│   ├── SEASON_1_OPERATING_PLAN.md
│   ├── SPONSOR_POSITION_TEMPLATES.md
│   ├── SPONSOR_RISK_DISCLOSURES.md
│   └── ONE_PROMPT_EVENT_PACKAGE.md
│
├── 11_OPERATIONS/
│   ├── SEASON_1_OPERATING_CELL.md
│   ├── FOUNDING_OPERATOR_PLAYBOOK.md
│   ├── CLAIMBUDDY_OPERATING_MODEL.md
│   ├── RRCA_SLA_TER_MODEL.md
│   ├── SUPPORT_OPERATIONS.md
│   └── WEEKLY_REVIEW_CADENCE.md
│
├── 12_INTEGRATIONS/
│   ├── FOUNDING_OPERATOR_INTEGRATION.md
│   ├── EVENT_IMPORT_RULES.md
│   ├── ACCOUNTING_EXPORTS.md
│   ├── PAYMENT_ESCROW_FUTURE.md
│   ├── DOCUMENT_SIGNATURE_FUTURE.md
│   ├── WEATHER_DATA_FUTURE.md
│   └── INSURANCE_CARRIER_FUTURE.md
│
└── 13_QA_TESTING/
    ├── ACCEPTANCE_TESTS.md
    ├── ROLE_PERMISSION_TESTS.md
    ├── DESIGNATION_TESTS.md
    ├── CLAIMEXPRESS_PROTOCOL_TESTS.md
    ├── BOOKKEEPING_EVENT_TESTS.md
    ├── HUMAN_BLOCKCHAIN_TESTS.md
    ├── TER_PROFICIENCY_TESTS.md
    └── DASHBOARD_TESTS.md
```

---

## 5. Top-Level README.md

The README should be written for someone entering the repository cold.

It should include:

```text
Project name
One-sentence description
Season 1 goal
Core architecture
What is in scope
What is out of scope
Repository map
How to use the documents
Build order
Legal warning
Agent workflow instructions
```

Recommended opening:

```text
ClaimStore is a market infrastructure system for the insurance restoration market. Phase 1 proves a controlled operating cell where property owners, contractors, insurance-side claim decision-makers, field verifiers, and platform administrators can coordinate claim/project workflows through role-based applications, evidence-backed events, bookkeeping-aware actions, and dashboard-visible performance metrics.
```

---

## 6. MASTER_CONTEXT.md

This is the most important file for AI agents.

It should summarize the entire project in one place.

Sections:

```text
Project identity
Historical source context
Core thesis
Season 1 goal
System layers
Core entities
Core roles
Core designations
Core objects
Critical rules
Build priorities
Do-not-violate principles
Legal-to-be-vetted notes
Current decision state
```

Critical rules to include:

```text
No user clicks OK for another user.
Entity Role is not the same as Designation.
Claim Caller is a designation.
Certain clicks create timestamps.
Certain clicks create bookkeeping events.
The first shared offer becomes the First Offer Baseline unless marked draft/internal.
The first claim request creates a ClaimStore Claim.
No evidence means no verified event.
The founding operator may prove the workflow but does not become the neutral truth by default.
ClaimsBank begins as release-condition and bookkeeping logic, not regulated banking.
TER begins as internal coaching/routing/performance logic, not public punishment.
```

---

## 7. CANON_INDEX.md

This file indexes all canonical documents created so far.

Recommended canon list:

```text
01 ClaimStore Case Study Master Brief
02 ClaimStore Requirements Discovery Brief
03 ClaimExpress Protocol Specification
03A Contractor Offer / Other Charges / Need-Done / Proficiency Addendum
03B George Washington Rollout Model
04 Object Model Addendum
05 Human Blockchain / ClaimBuddy Operating Model
06 RRCA SLA and TER Model
07 Insurance Determination / Claim Caller Addendum
08 Designation Model Addendum
09 Quantum Dashboard Underwriting Model
10 Founding Stakeholder Sponsor Position Book
11 Phase 1 Product Requirements Document
12 Season 1 Operating Plan and Roadmap
13 Developer / Agent Handoff Package
```

Each entry should include:

```text
Purpose
Status
Source dependency
Next action
```

---

## 8. GLOSSARY.md

The glossary is mandatory because the system has many coined terms.

Minimum terms:

```text
ClaimStore
ClaimExpress
MarketApp
Kimosabe
Human Blockchain
ClaimBuddy
SelfInsurity
RRCA
ClaimsBank
Quantum Dashboard
Task Efficiency Rating
Service Level Agreement
Proficiency
Claim Caller
Designation
Entity Role
Founding Operator
George Washington Rollout
Need/Done
Other Charges
First Offer Baseline
Final Closeout
Virtual Item
Human Blockchain Event
Bookkeeping Event
ClaimStore Claim
Claim Request
One Prompt Event
Founding Sponsor Position
Sponsorship, Not Ownership
```

Each term should have:

```text
Definition
What it is
What it is not
Phase 1 treatment
```

---

## 9. DECISION_LOG.md

The decision log should record all major architectural decisions.

Initial decisions:

```text
D001 - Proceed contractor-first, property-owner-enabled.
D002 - Treat ClaimExpress as protocol.
D003 - Preserve ClaimStore as market infrastructure / clearinghouse brand.
D004 - Treat ClaimsBank as future financial/release-condition layer.
D005 - Use Human Blockchain as verified event ledger before any literal blockchain.
D006 - Separate Entity Role from Designation.
D007 - Define Claim Caller as insurance-side determination designation.
D008 - Treat No User Clicks OK for Another User as platform principle.
D009 - Use George Washington rollout through founding operator.
D010 - Maintain two-code-base possibility.
D011 - Treat Other Charges and Equipment Orders as first-class objects.
D012 - Track First Offer vs Final Closeout for proficiency.
D013 - Begin TER as internal role/task average system.
D014 - Use Quantum Dashboard for underwriting, not unsupported certainty.
D015 - Sponsor positions are sponsorship, not ownership.
```

Each decision should include:

```text
Decision ID
Date
Decision
Reason
Affected documents
Open questions
```

---

## 10. PRODUCT_REQUIREMENTS.md

This should be the clean developer-facing version of the Phase 1 PRD.

Sections:

```text
Product summary
Phase 1 goal
User groups
Core modules
In scope
Out of scope
Requirements by module
Acceptance tests
Build order
Risks
Dependencies
```

This file should not be a poetic narrative.

It should be build-oriented.

---

## 11. USER_FLOWS.md

This file should describe exact user flows.

Minimum flows:

```text
Property Owner creates property file.
Contractor creates lead.
Contractor converts lead to project.
Contractor creates first offer.
Property Owner accepts offer.
Claim Request is created.
Claim Caller is assigned or not identified.
Claim determination is recorded.
ClaimBuddy completes verification task.
Contractor records payment.
Final paperwork is generated.
Project closes.
TER/proficiency updates.
Quantum Dashboard updates.
```

Each flow should include:

```text
Actors
Preconditions
Steps
Events created
Bookkeeping effects
Permissions
Acceptance test
```

---

## 12. DATA_MODEL.md

This file should become the source of truth for objects.

Minimum object groups:

```text
Identity objects
Entity objects
Role objects
Designation objects
Property objects
Claim objects
Project objects
Offer objects
Job objects
Order objects
Equipment order objects
Other charge objects
Task objects
Evidence objects
Event objects
Bookkeeping event objects
Claim decision objects
TER/proficiency objects
Dashboard objects
Virtual item objects
```

Each object should include:

```text
Purpose
Fields
Relationships
Created by
Updated by
Events
Permissions
Phase 1 status
```

---

## 13. ENTITY_ROLE_MATRIX.md

This file defines general roles.

Columns:

```text
Entity Type
Entity Role
General Permissions
Can Create
Can View
Can Edit
Can Approve
Can Verify
Can Trigger Bookkeeping
Can Assign Designation
Phase 1 Status
```

Rows should include:

```text
Property Owner
Contractor Admin
Contractor Sales Rep
ISR
ClaimBuddy
Field Service Provider
Insurance Admin
Claim Manager
Independent Adjuster
Platform Admin
Platform Support
ClaimsBank Reviewer, future
Sponsor Admin, future
```

---

## 14. DESIGNATION_MODEL.md

This file defines contextual responsibility.

Columns:

```text
Designation
Related Object
Who Can Hold It
Who Can Assign It
Authority Source Required
Allowed Actions
Required Evidence
Decision Authority
Event Impact
Phase 1 Status
```

Minimum designations:

```text
Claim Caller
Assigned Adjuster
Field Inspector
Estimate Reviewer
Offer Owner
Project Lead
Completion Verifier
ClaimBuddy Verifier
Support Owner
Release Condition Verifier, future
Payment Approver, future
```

---

## 15. PERMISSIONS_MATRIX.md

This should define what users can and cannot do.

Critical rules:

```text
Contractor cannot accept property owner offer for property owner.
Platform admin cannot approve insurance claim determination.
ClaimBuddy cannot sign for property owner unless delegated authority exists.
Independent Adjuster cannot make determination unless designated Claim Caller.
Support can assist but cannot consent.
Imported founding-operator event cannot create neutral consent without required evidence/user action.
```

Permissions should be testable.

---

## 16. CLAIMEXPRESS_PROTOCOL.md

This file defines statuses, transitions, and protocol events.

Minimum sections:

```text
Core transaction spine
ClaimStore Claim creation rule
Claim request types
Claim request statuses
Offer events
Project events
Evidence events
Bookkeeping events
Claim Caller events
Human Blockchain events
Closeout events
Protocol transition rules
```

Every transition should define:

```text
Trigger
Actor
Required role
Required designation
Required evidence
Timestamp
Bookkeeping effect
Notification effect
Dashboard effect
```

---

## 17. CLICK_EVENT_PROTOCOL.md

This file defines click classifications.

Classes:

```text
Class A - Navigation
Class B - Timestamped Action
Class C - Evidence / Verification
Class D - Consent / Approval
Class E - Bookkeeping
Class F - Protocol Transition
```

For each click type:

```text
Examples
Event created
Audit requirement
Bookkeeping impact
Legal significance
TER/SLA impact
```

---

## 18. BOOKKEEPING_EVENT_PROTOCOL.md

This file defines financial consequences.

Minimum bookkeeping events:

```text
Project Accounting Shell Created
Estimated Selling Price Saved
Estimated Cost Saved
Project Locked Baseline Created
Referral Fee Tracked
Commission Pending
Commission Earned
Field Service Fee Billable
Transaction Fee Billable
Payment Recorded
Receivable Updated
Other Charge Added
Equipment Order Created
Project Final Variance Calculated
```

Each should define:

```text
Trigger
Amount source
Related object
Financial category
Status
Reversal rule
Dashboard impact
```

---

## 19. HUMAN_BLOCKCHAIN_EVENTS.md

This file defines verified real-world events.

Minimum event types:

```text
Trip Verified
Inspection Completed
Photo Uploaded
Video Uploaded
Document Uploaded
Signature Captured
Completion Verified
Material Delivery Verified
Punch Item Verified
Dispute Meeting Documented
Mortgage Inspection Supported
```

Each should define:

```text
Required evidence
Actor
Verifier
Interested/non-interested flag
Trust weight
TER impact
ClaimsBank impact
```

---

## 20. TER_SLA_MODEL.md

This file defines performance rules.

Sections:

```text
SLA definition
TER definition
Proficiency definition
Role-specific standards
Designation-specific standards
Evidence requirement
Three-week flag rule
Coaching/remediation/blocking
Routing implications
ClaimsBank implications
Sponsor implications
```

Initial rule:

```text
Below relevant average for three consecutive weeks creates TER Review Flag.
```

---

## 21. QUANTUM_DASHBOARD_MODEL.md

This file defines dashboard variables.

Sections:

```text
Operating dashboard
Market dashboard
Simulation dashboard
Stakeholder dashboard
Market opportunity formula
Revenue formula
Risk-adjusted opportunity formula
Claim Caller accountability variable
TER confidence variable
Proficiency variable
ClaimsBank variable
Founding operator guarantee variable
Sponsor position variable
```

Minimum formula:

```text
Market Opportunity =
Affected Properties
× Claim Conversion Rate
× Average Claim Value
× Service Attachment Rate
× Platform Capture Rate
```

---

## 22. BACKLOG.md

The backlog should be organized into epics.

Recommended epics:

```text
E01 Identity / Profile
E02 Entity / Role / Designation
E03 Agreements / Consent
E04 Platform Admin
E05 Contractor Company / Branch
E06 Property Owner File
E07 Lead / Project
E08 Offer Builder
E09 Jobs / Orders / Other Charges
E10 ClaimStore Claim
E11 Claim Request
E12 Claim Caller
E13 Evidence / Documents
E14 ClaimBuddy / Tasks
E15 Event Ledger
E16 Bookkeeping Events
E17 Payments / Commissions / Referrals
E18 Need/Done
E19 TER / Proficiency
E20 Quantum Dashboard
E21 Support / Knowledge Base
E22 Virtual Items / Revenue Catalog
E23 Founding Operator Integration
```

Each epic should include:

```text
Goal
User stories
Dependencies
Acceptance tests
Phase
```

---

## 23. USER_STORIES.md

Example format:

```text
As a Property Owner,
I want to accept a contractor offer from my own account,
so that my approval is recorded as my own timestamped consent event.
```

Acceptance criteria:

```text
Property owner is authenticated.
Offer is visible.
Offer version is displayed.
User clicks accept.
System records timestamp.
System records user ID, role, agreement version.
System creates Offer Accepted Event.
System notifies contractor.
System prevents contractor/admin from accepting on owner’s behalf.
```

---

## 24. AGENT_SYSTEM_PROMPT.md

This file instructs AI agents how to work on the project.

Recommended prompt core:

```text
You are working on the ClaimStore / Kimosabe Season 1 build. Preserve the architecture. Do not collapse Entity Role and Designation. Do not allow one user to consent for another user. Treat ClaimExpress as an event-driven protocol. Treat Human Blockchain as a verified event ledger. Treat ClaimsBank as release-condition and bookkeeping logic unless explicitly instructed otherwise. Treat TER as internal role/task performance logic. Build Phase 1 narrowly and defer national-scale, regulated, token, and public-ranking features.
```

Agent rules:

```text
Read MASTER_CONTEXT.md first.
Check DECISION_LOG.md before changing architecture.
Update affected docs when changing object model.
Never create a feature that violates No User Clicks OK for Another User.
Flag legal-sensitive issues instead of solving them casually.
Prefer small buildable modules.
Write acceptance tests for every workflow.
```

---

## 25. PRODUCT_AGENT.md

Role:

Owns requirements and backlog.

Responsibilities:

```text
Translate canon into product requirements.
Maintain PRD.
Maintain backlog.
Define user stories.
Define acceptance tests.
Protect Phase 1 scope.
Track open questions.
```

---

## 26. ARCHITECTURE_AGENT.md

Role:

Owns system architecture.

Responsibilities:

```text
Maintain module map.
Maintain two-code-base boundary.
Maintain event-driven architecture.
Maintain integration rules.
Protect neutral platform boundaries.
Define API/event contracts.
```

---

## 27. DATA_MODEL_AGENT.md

Role:

Owns objects and relationships.

Responsibilities:

```text
Maintain DATA_MODEL.md.
Define fields.
Define object relationships.
Track source of truth.
Prevent object drift.
Coordinate with protocol and dashboard docs.
```

---

## 28. BACKEND_AGENT.md

Role:

Builds API, database, event ledger, permissions, and business logic.

Responsibilities:

```text
Implement identity/role/designation model.
Implement core objects.
Implement event ledger.
Implement protocol transitions.
Implement bookkeeping events.
Implement evidence linking.
Implement audit rules.
```

Hard rules:

```text
Events are append-only.
Consent events must be attributable.
Bookkeeping events must identify trigger event.
Claim Caller decision must identify authority source or unknown status.
```

---

## 29. FRONTEND_AGENT.md

Role:

Builds user interfaces.

Responsibilities:

```text
Build role-specific dashboards.
Build offer review/acceptance UI.
Build contractor project UI.
Build property owner claim file UI.
Build task/evidence UI.
Build Claim Caller decision UI.
Build dashboard views.
```

Hard rules:

```text
Never hide which user is taking action.
Show when action creates a legal/financial/event consequence.
Warn users before consent/bookkeeping actions.
```

---

## 30. QA_AGENT.md

Role:

Tests workflows and rules.

Responsibilities:

```text
Test permissions.
Test no-user-clicks-for-another-user.
Test offer acceptance.
Test ClaimStore Claim creation.
Test Claim Caller assignment.
Test bookkeeping triggers.
Test event ledger.
Test evidence requirements.
Test TER/proficiency calculations.
```

---

## 31. LEGAL_REVIEW_AGENT.md

Role:

Flags legal-sensitive issues.

Responsibilities:

```text
Identify language needing counsel.
Flag public adjusting risk.
Flag legal advice risk.
Flag insurance product risk.
Flag banking/escrow/payment risk.
Flag performance scoring risk.
Flag data privacy risk.
Flag delegated authority risk.
```

Rule:

```text
Do not provide final legal conclusions. Prepare review questions and issue lists.
```

---

## 32. SPONSOR_PACKAGE_AGENT.md

Role:

Turns architecture into sponsor-facing material.

Responsibilities:

```text
Maintain sponsor position templates.
Maintain sponsor rights/obligations.
Maintain risk disclosures.
Coordinate with Quantum Dashboard.
Avoid ownership/equity/regulatory overpromises.
```

---

## 33. DOCUMENTATION_AGENT.md

Role:

Keeps docs synchronized.

Responsibilities:

```text
Update canon index.
Update glossary.
Update decision log.
Maintain source references.
Convert chat drafts into clean markdown.
Track open questions.
```

---

## 34. Build Workflow for Agents

Recommended workflow:

```text
1. Read MASTER_CONTEXT.md.
2. Read current task file.
3. Check DECISION_LOG.md.
4. Identify affected docs.
5. Propose change.
6. Update requirement or backlog.
7. Update data model if objects change.
8. Update protocol if events change.
9. Update tests.
10. Record decision if architectural.
```

No agent should change a core rule silently.

---

## 35. Season 1 Development Phases

### Phase 1A - Foundation

```text
Identity
Profile
Entities
Roles
Designations
Agreements
Permissions
Admin shell
```

### Phase 1B - Contractor / Property Core

```text
Contractor company
Branch settings
Property owner file
Leads
Projects
Offers
Jobs
Orders
Other Charges
```

### Phase 1C - Protocol / Evidence

```text
ClaimStore Claim
Claim Requests
Claim Caller
Evidence upload
Event ledger
Click classifications
```

### Phase 1D - Tasks / Bookkeeping

```text
ClaimBuddy tasks
Human Blockchain events
Bookkeeping events
Payments
Commissions
Referrals
Need/Done
```

### Phase 1E - Intelligence

```text
TER
Proficiency
Quantum Dashboard
Revenue events
Sponsor views
```

### Phase 1F - Integration / Demo

```text
Founding operator integration
One Prompt Event demo
Acceptance testing
Legal review package
Sponsor package
```

---

## 36. Minimum Viable Demo

The minimum viable demo should show:

```text
Contractor creates lead.
Lead converts to project.
Contractor creates offer with jobs and other charges.
Property owner accepts offer from own account.
ClaimStore Claim is created.
Preliminary Claim Request is submitted.
Claim Caller is assigned or marked not identified.
Decision is recorded.
ClaimBuddy task verifies completion.
Payment is recorded.
Bookkeeping events are visible.
TER/proficiency updates.
Quantum Dashboard shows operating cell.
```

This demo proves the architecture.

---

## 37. Acceptance Test Master List

### Test 1 - No User Clicks for Another User

A contractor attempts to accept a property owner offer.

Expected result:

```text
System prevents action.
System requires property owner login or delegated authority.
```

### Test 2 - ClaimStore Claim Creation

First claim request submitted.

Expected result:

```text
ClaimStore Claim created.
Request attaches to ClaimStore Claim.
Future requests attach to same ClaimStore Claim.
```

### Test 3 - Claim Caller Required

Claim request receives insurance decision.

Expected result:

```text
Decision record requires Claim Caller or External Determination status.
Authority source required or marked unknown.
```

### Test 4 - Offer Baseline

First shared offer is sent.

Expected result:

```text
First Offer Baseline created.
Later revisions do not overwrite first baseline.
```

### Test 5 - Bookkeeping Click

Project locked.

Expected result:

```text
Project Locked Event created.
Bookkeeping baseline created.
Estimated values frozen.
```

### Test 6 - Evidence Requirement

Task marked complete without required evidence.

Expected result:

```text
System prevents verified completion.
Task remains incomplete or returned for more info.
```

### Test 7 - Proficiency Variance

Final closeout entered.

Expected result:

```text
System compares first offer baseline to final closeout.
Variance record created.
```

### Test 8 - TER Flag

User below relevant average for three consecutive weeks.

Expected result:

```text
TER Review Flag created.
No automatic public punishment.
```

---

## 38. Legal Review Queue

The legal review queue should track:

```text
Issue
Affected module
Risk type
Current language
Question for counsel
Priority
Status
```

Initial legal review issues:

```text
SelfInsurity wording
Claim Caller accountability language
No public adjusting boundary
No legal advice boundary
Contractor guarantee language
ClaimsBank escrow/reserve/payment language
TER scoring and blocking
Delegated authority
Sponsor rights
Data privacy
Insurance/protection product language
```

---

## 39. Open Questions File

Create:

```text
OPEN_QUESTIONS.md
```

Sections:

```text
Product questions
Legal questions
Technical questions
Business questions
Sponsor questions
Operations questions
Data model questions
```

Continue numbering the existing question log rather than restarting.

---

## 40. Source Archive

Create a source archive directory:

```text
/99_SOURCE_ARCHIVE/
```

Suggested structure:

```text
/99_SOURCE_ARCHIVE/
├── 2006_MARKETAPP/
├── 2012_CLAIMSTORE_VISION/
├── PATENT_ABSTRACT/
├── THE_ENGINE/
├── TOS/
├── RRCA_MEMBER_AGREEMENT/
├── ARCHITECTURE_DECK/
├── PURCHASE_ORDER/
├── ONE_PAGERS/
└── CHAT_EXPORTS/
```

Every source file should have a short source note:

```text
What this file is
Why it matters
Which canon docs reference it
Cautions
```

---

## 41. Documentation Status Tags

Use status tags in documents.

Recommended tags:

```text
DRAFT
CANONICAL_DRAFT
NEEDS_REVIEW
LEGAL_TO_BE_VETTED
TECHNICAL_TO_BE_VALIDATED
READY_FOR_BACKLOG
READY_FOR_BUILD
DEFERRED
SUPERSEDED
```

Example:

```text
Status: CANONICAL_DRAFT
Legal Status: TO_BE_VETTED
Build Status: READY_FOR_BACKLOG
```

---

## 42. Decision Discipline

When a new insight arrives, place it in the correct layer.

Examples:

```text
New legal boundary → Legal Architecture / Protocol / PRD
New object → Data Model / Protocol / Tests
New workflow → User Flows / PRD / Backlog
New market insight → Quantum Dashboard / Sponsor Book
New operating insight → Season 1 Plan / Founding Operator Playbook
New role insight → Entity Role Matrix / Designation Model
New performance insight → TER / SLA Model
```

This protects the architecture from becoming a pile of ideas.

---

## 43. Agent Safety Rules

Agents must not:

```text
Invent regulated financial services.
Invent final legal conclusions.
Allow one user to consent for another.
Collapse Claim Caller into generic reviewer.
Collapse ClaimBuddy into legal representative.
Treat ClaimsBank as a bank in Phase 1.
Treat Human Blockchain as mandatory on-chain crypto.
Treat TER as public ranking from day one.
Treat sponsor positions as ownership.
Treat insurance decisions as made by the platform.
```

Agents must:

```text
Preserve role boundaries.
Preserve designations.
Preserve evidence requirements.
Preserve event audit trail.
Preserve bookkeeping triggers.
Preserve self-help boundary.
Preserve legal-to-be-vetted status.
Preserve Phase 1 discipline.
```

---

## 44. Human Developer Instructions

Human developers should start with:

```text
README.md
MASTER_CONTEXT.md
PHASE_1_PRD.md
DATA_MODEL.md
CLAIMEXPRESS_PROTOCOL.md
BACKLOG.md
ACCEPTANCE_TESTS.md
```

Then build in this order:

```text
Identity
Entities/Roles/Designations
Admin shell
Core objects
Event ledger
Contractor workflows
Property owner workflows
Offer builder
Claim request
Claim Caller
Evidence/task
Bookkeeping
TER/proficiency
Dashboard
```

Developers should not start with:

```text
Mobile app
Token system
Full carrier integration
Full escrow/banking
Public rankings
National marketplace
```

---

## 45. Technical Architecture Notes

Recommended architecture principles:

```text
Event-driven
Role-based access control
Designation-aware permissions
Append-only event ledger
Modular monolith first or clean service boundaries
API-first where practical
Web-first Phase 1
Mobile-ready data model
File/evidence storage abstraction
Audit trail by default
Bookkeeping separated from payment movement
ClaimsBank release conditions separated from actual fund movement
```

Suggested backend concepts:

```text
Users
Entities
Roles
Designations
Properties
Claims
Projects
Offers
Jobs
Orders
OtherCharges
Tasks
Evidence
Events
BookkeepingEvents
ClaimDecisions
TERMetrics
VirtualItems
DashboardMetrics
```

---

## 46. Data Integrity Rules

Data integrity rules:

```text
Do not delete events.
Do not overwrite consent.
Do not overwrite first offer baseline.
Do not overwrite final closeout baseline.
Do not treat external carrier response as verified internal Claim Caller decision unless authority is known.
Do not mark task verified without required evidence.
Do not release ClaimsBank condition without required designations and evidence.
Do not let imported contractor events automatically become neutral approvals.
```

Corrections should be:

```text
Correction event
Reversal event
Superseding version
Admin correction with reason
```

---

## 47. One Prompt Event Build Target

The repository should support a One Prompt Event demonstration.

Demo script:

```text
1. Show seven-group architecture.
2. Show Season 1 operating cell.
3. Show user roles and designations.
4. Show contractor creates offer.
5. Show property owner accepts.
6. Show claim request submitted.
7. Show Claim Caller determination.
8. Show ClaimBuddy verification.
9. Show bookkeeping event chain.
10. Show TER/proficiency.
11. Show Quantum Dashboard.
12. Show sponsor position.
13. Show roadmap.
```

The demo should prove coherence, not completion.

---

## 48. Recommended Immediate Next Steps

After creating this handoff package, the next work should be:

```text
1. Convert all draft documents into repository markdown files.
2. Create MASTER_CONTEXT.md.
3. Create GLOSSARY.md.
4. Create DATA_MODEL.md.
5. Create BACKLOG.md.
6. Create USER_STORIES.md.
7. Create ACCEPTANCE_TESTS.md.
8. Create AGENT_SYSTEM_PROMPT.md.
9. Create LEGAL_ARCHITECTURE_TO_BE_VETTED.md.
10. Create ONE_PROMPT_EVENT_PACKAGE.md.
```

This becomes the first working repo.

---

## 49. Working Conclusion

The Developer / Agent Handoff Package is where the vision becomes executable.

The repository must let humans and agents work without losing the architecture.

The most important instruction is:

```text
Do not flatten the system.
```

Do not flatten roles into users.

Do not flatten designations into titles.

Do not flatten Claim Caller into reviewer.

Do not flatten Human Blockchain into file upload.

Do not flatten ClaimsBank into bookkeeping.

Do not flatten ClaimStore into contractor CRM.

Do not flatten SelfInsurity into marketing slogan.

Do not flatten Quantum Dashboard into charts.

Each layer exists because the market needs it.

The repository preserves the layers.

The build begins when the layers can be acted on.

That completes **#10**.

My next recommendation is **#11: Legal Architecture To Be Vetted v0.1**. It will not pretend to give legal advice. It will organize the legal review map: TOS, Member Agreement, SelfInsurity, Claim Caller, no public adjusting, no legal advice, ClaimsBank, sponsor positions, TER, delegated authority, and the George Washington guarantee.
