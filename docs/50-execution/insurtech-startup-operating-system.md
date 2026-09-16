---
id: insurtech-startup-operating-system
title: InsurTech Startup Operating System — Business Plan and Requirements v0.1
author: Manus AI
owner: Donald Haight
status: founder-working-draft
sensitivity: public-repository
created: 2026-09-16
last_reviewed: 2026-09-16
related_documents:
  - operating-model-instruction-manual
  - agent-company-operating-system
  - venture-studio-incubator-operating-system
  - phase1-prd
  - claimexpress-protocol
  - legal-review-map
  - decisions
  - risks-review-gates
---

# InsurTech Startup Operating System

> **Tagline:** A human-governed, evidence-led operating system for designing, proving, launching, and improving insurance-adjacent software without silently assuming insurance, adjusting, payment, or fiduciary authority.

## Executive Summary

Yes. The current Human Blockchain architecture already contains the core of an InsurTech startup: a role-based claim and project record, user-directed consent, evidence capture, a protocol for claim requests and determinations, operational metrics, and a controlled founding-operator environment. The correct first implementation is an **insurance-adjacent workflow, evidence, and coordination platform**. It should not initially represent itself as an insurer, insurance producer, public adjuster, third-party administrator, managing general agent, claims administrator, escrow provider, or financial institution.

The system can help property owners, contractors, field-service providers, and approved insurance-side participants document, organize, route, verify, and record claim/project workflow events. It must not make a coverage decision, negotiate a claim on a user's behalf, sell insurance, bind coverage, custody funds, advise on legal rights, or replace a licensed or contractually authorized actor. A Claim Caller may make or record an insurance-side determination only when a named authority source exists; an agent may assist the workflow but cannot become the Claim Caller. [1] [2] [3]

The recommended early posture is **Company Zero InsurTech**: prove one bounded RRCA / ClaimStore workflow in one selected jurisdiction, using synthetic or consented data, traceable evidence, human review, and no regulated money movement. A future carrier, agency, administrator, or insurance-product path is possible, but it must be separately designed and professionally reviewed after the initial operating evidence exists.

## 1. Strategic Frame

The InsurTech operating system turns a complex insurance-restoration transaction into a controlled record of actions, authority, evidence, consent, status, and operating consequences. It treats the claim as a shared workflow with role-specific responsibilities. The platform's value is not to make the insurance decision. Its value is to make the transaction more legible, less fragmented, and more accountable to the people authorized to participate.

The current Phase 1 direction provides a useful product spine: a property-damage opportunity becomes a documented claim/project file; a contractor creates an offer; the property owner controls approval; the request and any determination are recorded; evidence is captured; work and completion are verified; and the record supports operational learning. [1] The InsurTech plan makes the regulatory, data, agent, launch, and business boundaries explicit.

> **Core operating principle:** A system record can establish what was submitted, observed, uploaded, consented to, or recorded. It must not overstate that the platform determined coverage, guaranteed a legal outcome, validated an insurance obligation, or controlled funds unless the responsible, authorized entity actually did so.

## 2. Initial Product Position and Expansion Options

The first product should be selected by the authority it requires, not by how attractive its features sound. The following paths are distinct and should not be blended through naming or marketing.

| Product position | What the platform does | Core constraint | Setup complexity |
|---|---|---|---|
| Evidence and workflow platform | Supports user-directed documentation, consent, tasking, offer/project records, claim-request packaging, external-determination recording, and operational reporting | No insurance decision, advocacy, sale, binding, custody, or payment handling by the platform | Lowest; recommended for the first controlled pilot |
| Connected insurance workflow platform | Exchanges approved workflow data with licensed/authorized participants or carriers under written terms | Requires data rights, participant authority, integration controls, security review, and partner-specific procedures | Moderate to high |
| Regulated insurance operator or intermediary | Carries out insurer, agency, producer, public-adjusting, MGA, TPA, claims-administration, payment, or similar regulated functions | Requires an entity, licenses or authorizations, contracts, professionals, state-by-state analysis, supervision, and operating controls | Highest; explicitly out of initial scope |

The first path enables practical learning while preserving optionality. The second path should begin only after a designated partner, a written data/authority model, a pilot jurisdiction, and security controls are approved. The third path is not authorized by this plan.

## 3. Company Zero InsurTech Pilot

Company Zero is a limited operating proof. It is not a nationwide insurance platform, a carrier replacement, or a public claim-advocacy launch.

| Pilot dimension | Initial requirement |
|---|---|
| User value | Help a property owner and approved service participants organize and complete a defined claim/project documentation workflow |
| Geographic boundary | One founder-selected jurisdiction and operating market; jurisdiction-specific review before use |
| Customer Zero | RRCA and a defined operating cell, subject to independent role, consent, and conflict boundaries |
| Data basis | Synthetic data first; real data only after a documented lawful/contractual basis, user notice, access controls, and retention rule exist |
| Claims posture | Record user-directed submissions and external responses; do not claim to adjudicate, negotiate, interpret coverage, or decide eligibility |
| Financial posture | Record bookkeeping and release-condition logic only; no custody, escrow, money transmission, settlement, or disbursement by the platform |
| AI posture | Draft, organize, classify, and flag gaps; cannot make coverage, pricing, underwriting, claims, payment, adverse-action, or legal determinations |
| Exit condition | A controlled workflow produces attributable evidence, clear consent, a reviewable decision path, tested security/quality controls, and a retrospective |

## 4. Operating Model

The InsurTech operating system has five connected layers. The model requires a named human owner for each layer, even where agents perform most of the working tasks.

| Layer | Purpose | Primary output | Accountable human |
|---|---|---|---|
| Product and market | Define the customer problem, permitted product position, jurisdictional scope, and pilot value | Product charter, Venture Card, pilot scope | Founder / product owner |
| Authority and compliance | Map what each actor may do and what the platform must not do | Authority matrix, legal issue queue, approval gates | Founder plus qualified reviewer when required |
| Evidence and data | Capture consented records, preserve lineage, limit access, and support corrections | Evidence ledger, data inventory, retention schedule | Data/security owner |
| Workflow and operations | Execute the narrow claim/project workflow with role-based transitions | Claim/project record, task flow, exception log | Operating-cell owner |
| Engineering and assurance | Build, test, monitor, and correct the platform without bypassing controls | Code, tests, release packet, incident record | Technical and quality owner |

An agent can participate in each layer, but never owns the legal or insurance authority itself. The record must distinguish the agent that drafted or classified information from the human or authorized party who made, verified, or approved a consequential decision.

## 5. Roles, Authority, and Agent Boundaries

The product must model roles, designations, and authority separately. A role is a general permission context. A designation is an accountable responsibility for a particular claim, project, task, request, or decision. [3]

| Actor | May do within approved scope | May not do without separate authority |
|---|---|---|
| Property owner | Control their claim file, provide information, review offers, approve their own actions, and authorize permitted workflow steps | Delegate authority silently or have consent inferred from a contractor or platform action |
| Contractor / service provider | Create an offer, document work, submit allowed materials, perform contracted services, and respond to tasks | Accept for the property owner, decide coverage, represent the platform as insurer/adjuster, or make a claim determination |
| ClaimBuddy / field verifier | Capture evidence, complete a permitted checklist, and state what was observed | Provide legal/coverage interpretation, approve for the owner, or become an insurance decision maker without authority |
| Insurance-side participant | Review and record a permitted decision when their authority is documented | Exercise authority not granted by their entity or present an opinion as an insurer determination |
| Claim Caller | Make or record the determination assigned to them for a claim request, with an authority source | Act outside designation scope or allow an anonymous corporate process to be represented as an identified decision maker |
| Platform support | Explain navigation, identify missing workflow elements, and route support requests | Sign, accept, negotiate, advise legally, decide coverage, or submit on behalf of a user without explicit delegation |
| Agent | Draft, organize, classify, summarize, test, detect gaps, and prepare human review materials | Determine coverage, recommend an insurance action to a customer, negotiate, bind, submit a final decision, move money, alter authority, or communicate a material claim externally |

Delegated authority, where allowed, must be explicit, scoped, dated, revocable, tied to the applicable object and permitted action, and preserved as an audit record. The default rule remains: **no user clicks OK for another user.** [4]

## 6. Minimum Product and Control Requirements

| ID | Requirement | Priority | Acceptance condition |
|---|---|---|---|
| IOS-001 | Declare the product's permitted operating position for each pilot | P0 | The pilot charter names the platform role and prohibited functions in plain language |
| IOS-002 | Maintain a jurisdiction and compliance matrix | P0 | Every active pilot is linked to a geography, product scope, legal issue owner, and unresolved review items |
| IOS-003 | Enforce role, designation, and authority separation | P0 | Each consequential action records actor, entity, role, designation, authority source, and object |
| IOS-004 | Require user-owned consent and delegated-authority controls | P0 | Prohibited cross-user approvals are blocked and tested; valid delegation is scoped and revocable |
| IOS-005 | Maintain an append-only event and evidence record | P0 | Material workflow changes have attributable events; corrections use reversal, amendment, or superseding records |
| IOS-006 | Lock submitted request packages and preserve versions | P0 | A reviewer can identify the exact package, evidence, offer version, and consent state used at submission |
| IOS-007 | Separate observation, verification, and determination | P0 | A field observation cannot be displayed as a coverage decision; each determination identifies its authorized source or external-recorded status |
| IOS-008 | Support Claim Caller accountability without asserting platform adjudication | P0 | Decision records distinguish Claim Caller, authority source, external response, unknown authority, and incomplete information |
| IOS-009 | Enforce data classification, least privilege, and tenant boundaries | P0 | Sensitive records have a classification, access policy, audit trail, and tested prohibited-access case |
| IOS-010 | Require secure evidence handling | P0 | Uploaded evidence has attribution, object link, timestamp, access policy, integrity record, and deletion/retention handling |
| IOS-011 | Keep AI assistance reviewable and bounded | P0 | Agent output is visibly labeled, source-linked where applicable, editable by a human, and blocked from protected decisions/actions |
| IOS-012 | Keep financial records distinct from money movement | P0 | Bookkeeping or release-condition events never initiate, hold, settle, or disburse funds without an approved provider and authority path |
| IOS-013 | Maintain agreement and notice versioning | P0 | The system records accepted document/version, actor, date/time, applicable role/entity, and evidence of consent |
| IOS-014 | Implement a security, incident, and exception path | P0 | Access incidents, data issues, workflow exceptions, and agent failures have a named owner, containment process, record, and corrective action |
| IOS-015 | Support controlled external integration | P1 | A carrier/partner integration cannot activate without named owner, written data/authority basis, scope, test evidence, and rollback path |
| IOS-016 | Maintain provider and vendor records | P1 | Every external provider has a purpose, data access scope, contract/review status, and offboarding process |
| IOS-017 | Produce a pilot release packet | P1 | The packet contains scope, tests, known limitations, support procedure, monitoring, decision owner, and recovery plan |
| IOS-018 | Track actuals separately from claims, estimates, and forecasts | P1 | Dashboards label observed data, user-entered information, assumptions, scenarios, and projections separately |
| IOS-019 | Maintain public-communication controls | P1 | No public statement claims coverage, approval, financial result, regulatory status, partner endorsement, or market performance without evidence and authorized review |
| IOS-020 | Preserve portability and correction rights where applicable | P2 | A defined process exists for record correction, export, deletion/retention requests, and dispute of inaccurate data |

## 7. AI and Agent Safety Requirements

Agents improve throughput only if their authority is narrow, observable, and reversible. The system must treat all imported documents, emails, uploads, prompts, and partner messages as untrusted inputs. A document may be evidence or context; it cannot alter an agent's instructions, access rights, or approval rules.

| Agent control | Required behavior |
|---|---|
| Task contract | State objective, inputs, authority limit, sensitivity, allowed tools, output, acceptance criteria, and named human owner |
| Source lineage | Link material claims and generated summaries to a source, explicit assumption, or stated uncertainty |
| Protected-action block | Deny autonomous coverage, underwriting, claims, payment, authority, consent, pricing, adverse-action, legal, and external publication actions |
| Human review | Require independent testing or human review for outputs used in a consequential workflow or customer communication |
| Escalation | Flag ambiguity, missing authority, missing evidence, sensitive data, jurisdiction variance, security concern, or external commitment before proceeding |
| Recordkeeping | Preserve the agent's work item, relevant context reference, tool/action record, changed artifacts, result, review, and exception state |
| Evaluation | Measure accuracy, evidence completeness, correct escalation, defect recovery, and accepted outcome rather than output volume |

## 8. Launch Gates and Controlled Release

A launch is not a marketing date. It is the approved transition from a defined pilot state to a more exposed operating state. The completed [InsurTech pilot launch-gate template](./insurtech-pilot-launch-gate-template.md) must be completed for every pilot or material release.

| Gate | Required decision evidence |
|---|---|
| Product boundary | Named user, jurisdiction, workflow, product position, exclusions, and customer value |
| Authority boundary | Role/designation matrix, consent rules, delegated-authority policy, and prohibited-action tests |
| Legal/compliance queue | Open items, review owner, risk treatment, and explicit no-go conditions; no claim of legal clearance absent qualified review |
| Data and security | Data inventory, data basis, access controls, test results, vendor records, incident process, and recovery plan |
| Workflow quality | Requirements-to-test traceability, permission tests, evidence/record tests, negative tests, and defect disposition |
| Operating readiness | User support, exception handling, training, monitoring, contact path, and accountable release owner |
| Commercial/public posture | Approved statements, user notices, contracts if applicable, and publication authorization |
| Retrospective | Measurable pilot objective, actual results, limitations, incidents, decision, and update to the living plan |

## 9. Staged Roadmap

### Stage I0 — Define the permitted pilot

Select the first jurisdiction, user, workflow, product position, and data basis. Document the platform's prohibitions as carefully as its desired capabilities. Establish the legal and compliance issue queue, but do not represent the plan as professional clearance.

### Stage I1 — Make the record trustworthy

Implement identity, roles, designations, consent, delegated authority, evidence, event history, versioned submissions, access control, and correction/reversal behavior. Test that no actor or agent can silently approve, decide, or submit for another actor.

### Stage I2 — Prove one user-directed claim/project loop

Use a bounded RRCA / ClaimStore workflow. The initial proof should be an evidence-and-workflow record, using synthetic data or consented data only. The output is a documented flow from intake through evidence, offer/authorization as applicable, external determination recording, completion verification, and retrospective.

### Stage I3 — Introduce approved participants and integrations

Only after I2 is reliable, evaluate a scoped integration or design-partner pilot. Activation requires a named partner, data and authority basis, clear interface contract, security testing, and rollback. The platform remains a record and workflow tool unless a separate authority is granted.

### Stage I4 — Expand carefully by jurisdiction and capability

Expand one jurisdiction, participant type, data category, or workflow capability at a time. Each expansion renews the launch-gate evidence. Do not turn a feature into a regulated function through incremental wording changes or hidden automation.

### Stage I5 — Decide whether a regulated pathway is justified

Use observed operating evidence to decide whether any agency, producer, administrator, MGA, claims, carrier, payment, or other regulated business model should be investigated. This is a separate venture and professional-review decision, not an automatic result of platform adoption.

## 10. Business Model Hypotheses

The business model should follow validated user value and lawful operating scope. The platform should not charge or describe a fee in a manner that creates an unreviewed insurance, referral, adjusting, escrow, investment, or fiduciary characterization.

| Hypothesis | Potential value | Validation condition |
|---|---|---|
| Workflow software subscription | Recurring revenue for document, task, evidence, and reporting tools | Demonstrated user value, support model, data/security controls, and clear product positioning |
| Per-project documentation service | Revenue tied to a defined documentation or workflow deliverable | Clear scope, user consent, fees, no unauthorized representation, and jurisdiction review |
| Field-evidence coordination service | Improves record completeness and operational confidence | Approved provider scope, privacy/safety controls, conflict disclosure, and evidence quality measurement |
| Enterprise/partner integration | Creates value for approved participants through trusted workflow exchange | Written authority/data terms, partner diligence, interface testing, and no false endorsement |
| Analytics and operational reporting | Helps organizations understand measured process performance | De-identification/access controls, clear data basis, and no unsupported claims or prohibited profiling |
| Future regulated product | May enable a licensed or authorized business model | Separate entity, professionals, approvals, supervision, policies, agreements, and launch plan |

## 11. Initial Metrics

The initial scorecard must measure whether the product is safe, useful, and operationally reliable before it measures growth.

| Dimension | Initial indicator |
|---|---|
| Consent and authority | Percentage of consequential actions with complete actor, role, designation, authority, and versioned-consent record |
| Evidence quality | Evidence completeness, upload-to-review time, missing-evidence rate, correction rate, and access exceptions |
| Workflow quality | Requirement/test pass rate, forbidden-action block rate, defect escape rate, exception aging, and recovery time |
| Customer utility | Completion rate for the selected workflow, user-reported clarity, support resolution, and rework reduction |
| Compliance readiness | Unresolved critical issue count, gate completeness, response time to escalations, and prohibited-feature attempts |
| Agent performance | Correct escalation rate, source traceability, human acceptance rate, rework, and avoided protected-action execution |
| Economics | Actual operating cost, cost per completed pilot record, support burden, and separately labeled revenue hypotheses |

## 12. Founder Decisions Required Before Implementation

1. **Initial product scope:** Is the first product limited to insurance-adjacent evidence and workflow software, or is a licensed/regulated function intended from the beginning?
2. **Pilot jurisdiction:** Which state, market, and operating-cell context should be used first? This determines the first legal and product constraints.
3. **Customer Zero:** Should RRCA remain the only initial user organization, or should a separate property-owner, contractor, or partner design group be selected?
4. **Data posture:** Should the first proof use synthetic records only, consented real records under a controlled process, or both in sequence?
5. **Carrier/partner posture:** Should the first release record external determinations only, or should it prepare for a named, approved integration partner?
6. **Compliance ownership:** Who is the named human responsible for the pilot compliance queue, legal-review coordination, and no-go decision?

## Closing

The intention is clear enough to execute the first version. This company should begin as an **agent-supported InsurTech workflow and evidence platform**, disciplined by user-owned consent, role-specific authority, decision provenance, privacy and security controls, and a narrow controlled pilot.

The first real achievement is not an insurer or a nationwide claims platform. It is a working, reviewable, user-directed record that helps a defined operating cell complete a claim/project workflow more clearly while proving that the platform and its agents do not overstep their authority. The evidence from that pilot—not ambition alone—should determine the next regulatory, commercial, and technical step.

## References

[1]: https://github.com/donaldhaight/human-blockchain-operating-system/blob/main/docs/20-product/phase1-product-requirements.md "Phase 1 Product Requirements Document"
[2]: https://github.com/donaldhaight/human-blockchain-operating-system/blob/main/docs/20-product/claimexpress-protocol.md "ClaimExpress Protocol Specification"
[3]: https://github.com/donaldhaight/human-blockchain-operating-system/blob/main/docs/20-product/insurance-determination-claim-caller.md "Insurance Determination and Claim Caller Addendum"
[4]: https://github.com/donaldhaight/human-blockchain-operating-system/blob/main/docs/30-evidence/legal-architecture-review-map.md "Legal Architecture To Be Vetted"
