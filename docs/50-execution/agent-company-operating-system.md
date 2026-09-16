---
id: agent-company-operating-system
title: Agent Company Operating System — Business Plan and Requirements v0.1
author: Manus AI
owner: Donald Haight
status: founder-working-draft
sensitivity: public-repository
created: 2026-09-15
last_reviewed: 2026-09-15
related_documents:
  - human-blockchain-master-continuity-brief-001
  - agent-system-prompt
  - developer-agent-handoff
  - master-roadmap
  - decisions
  - risks-review-gates
---

# Agent Company Operating System

> **Tagline:** A human-governed operating system that turns founder intent, verified knowledge, and specialized agent work into disciplined software research, development, launch, and continuous improvement.

## Executive Summary

Yes, it is possible to create an **agent operating system for a software-development company** with an operating posture analogous to a research-and-engineering firm: it can formulate product theses, maintain a research record, define architectures, build software, test releases, operate a pilot, measure outcomes, and feed verified learning into the next version.

The correct objective is not an autonomous company. It is a **human-governed company with agent-native operations**. The system creates leverage by making knowledge, requirements, decisions, work, evidence, quality, and release readiness continuously visible. Humans retain authority where consequences are material: strategy, capital, legal posture, commitments, access, regulated activity, production release, and public representations.

For the Human Blockchain program, the first business purpose is to make **Market Applications and the related portfolio capable of repeatedly producing and maintaining useful software**, beginning with the existing RRCA / ClaimStore controlled operating cell. The company-level operating system is therefore a parallel enabling track, not a replacement for the accepted strategy of proving one Lead-to-Done workflow first. [1] [2]

## 1. Company Thesis and Positioning

The agent company is a product-development and operations firm that combines a founder's domain expertise with a reusable system for research, product definition, engineering, quality assurance, documentation, and controlled launch. Its durable asset is not a collection of agent prompts. Its durable asset is the **verified operating record**: decisions, source knowledge, requirements, source code, tests, deployment evidence, customer learning, and reusable patterns.

The company should operate in a research-and-engineering posture rather than as an ungoverned content factory. It should be able to explain why a product exists, what it is designed to prove, what assumptions remain uncertain, who may act, how quality is measured, and what must be approved before external action. The same operating system can later support multiple products, domains, clients, or business lines without confusing their data, authority, economics, or intellectual property.

### Company Zero

The initial customer is the company itself. The first product is an internal **Company Zero** operating environment that manages the planning and delivery of the first ClaimStore / ClaimExpress operating cell. It must show that agents can help the organization move from a narrated objective to a tested, reviewable increment of software without bypassing human authority.

| Dimension | Company Zero treatment |
|---|---|
| Initial scope | One RRCA-centered Lead-to-Done workflow and its supporting documentation |
| Primary user | Founder and accountable Company Admin |
| Agent role | Research, product, engineering, QA, documentation, and operating support |
| Source of truth | Versioned repository, decision and risk registers, work records, tests, and observed results |
| External activity | Human-approved only; no autonomous contracting, payment, legal, insurance, or public claims |
| Success signal | A tested software increment and a traceable explanation of why it was built, how it was tested, and what was learned |

## 2. Operating Model

The agent company requires six connected layers. Each layer is separately accountable, but all use the same work objects, evidence, and review rules.

| Layer | Purpose | Primary outputs | Human accountability |
|---|---|---|---|
| Founder and governance | Set intent, priorities, boundaries, and approval rules | Charter, decisions, budgets, release approvals | Founder and named approvers |
| Knowledge and research | Preserve sources, retrieve context, test assumptions, and record uncertainty | Source records, research briefs, evidence links, question log | Knowledge owner and domain reviewer |
| Product and requirements | Translate intent into bounded user value and testable scope | PRDs, user stories, acceptance criteria, roadmap | Product owner |
| Architecture and engineering | Produce maintainable, secure, testable software | Architecture records, code, migrations, interfaces, build evidence | Technical lead |
| Quality and security | Independently test behavior, permissions, recovery, and security boundaries | Test results, defects, release recommendation, incident records | Quality/security owner |
| Operations and learning | Operate controlled pilots, measure outcomes, and improve the model | Operating briefs, metrics, retrospectives, updated requirements | Company Admin and founder |

This model treats each agent as a bounded contributor rather than as an independent executive. A task is complete only when its required evidence is present and the named accountable human accepts the relevant stage.

## 3. Agent Team Design

A small specialized team is preferable to an undifferentiated “agent army.” The initial roles below may be performed by one or more agents, but their mandates and review paths remain separate.

| Agent | Mission | May do | Must escalate |
|---|---|---|---|
| Chief Orchestrator | Convert approved objectives into coherent work plans | Create work breakdowns, surface dependencies, maintain status | Priority conflicts, material scope changes, blocked gates |
| Knowledge and Research Agent | Retrieve and compare relevant evidence | Summarize sources, identify uncertainty, prepare research briefs | Unsupported claims, sensitive source use, external outreach |
| Product and Requirements Agent | Define user value and acceptance tests | Draft requirements, backlog items, scope boundaries | Product tradeoffs, user commitments, requirements changing authority |
| Architecture Agent | Maintain system boundaries and technical choices | Propose schemas, interfaces, event models, implementation paths | Data, security, cost, or irreversibility tradeoffs |
| Engineering Agent | Implement approved increments | Write code, tests, migrations, documentation, previews | Production deployment, secret access, destructive operations |
| QA and Security Agent | Verify that implementation meets requirements and controls | Run tests, adversarial checks, permission tests, defect reports | Release approval, discovered vulnerabilities, privacy/security failures |
| Documentation Agent | Maintain the operational record | Update plans, registers, handoffs, release notes | Conflicts between sources and current decisions |
| Business Operations Agent | Prepare controlled pilot operations and metrics | Draft procedures, reports, checklists, internal tasks | Contracts, pricing, payments, external representations, regulated activity |

## 4. Work-Item Contract

Every agent work item should be an auditable unit with a stable identifier. This prevents goal drift and makes later learning reusable.

| Required field | Requirement |
|---|---|
| Objective | A measurable desired outcome tied to an approved strategy or requirement |
| Context | The source documents, decisions, constraints, and relevant data needed for the task |
| Authority | What the agent may change, what it may only propose, and the named accountable human |
| Inputs and outputs | Accepted input types, expected deliverables, and evidence required for completion |
| Acceptance criteria | Observable conditions that distinguish success from a plausible-looking draft |
| Risk classification | Privacy, security, legal, financial, external, and operational implications |
| Review path | Independent test, reviewer, or approval gate appropriate to the consequence |
| Provenance | Links to source records, code commit, test run, and decision history |
| Learning capture | Result, variance, defect, question, or changed assumption resulting from the work |

The default lifecycle is:

> **Approved objective → contextual briefing → proposed plan → human or policy gate → implementation → automated checks → independent review → controlled release → observed outcome → knowledge and requirements update.**

## 5. Minimum Business Capabilities

The initial operating system must support the following capabilities before it is treated as a reusable company platform.

| ID | Requirement | Priority | Acceptance condition |
|---|---|---|---|
| AOS-001 | Maintain a company charter, objectives, and current priorities | P0 | Every active initiative links to an approved objective and accountable owner |
| AOS-002 | Register initiatives, capabilities, tasks, dependencies, and state history | P0 | A reviewer can trace a release back to an initiative and its acceptance criteria |
| AOS-003 | Enforce human authority boundaries | P0 | Agents cannot execute a protected action without a named human approval event |
| AOS-004 | Preserve source lineage and distinguish source from inference | P0 | Material requirements and claims link to source, decision, or explicit assumption |
| AOS-005 | Maintain a decision, question, assumption, and risk register | P0 | Each material change is recorded in the appropriate register before release |
| AOS-006 | Maintain a product backlog and requirements-to-test traceability | P0 | Each implemented requirement has a test or a documented reason it cannot yet be tested |
| AOS-007 | Use version control and review for material changes | P0 | Code and significant documentation changes have an attributable review record |
| AOS-008 | Run repeatable quality checks | P0 | Build, test, lint, permission, and regression evidence is stored or linked before release |
| AOS-009 | Separate environments and data sensitivity | P0 | Synthetic/demo, development, staging, and production data are visibly separated |
| AOS-010 | Protect secrets and privileged access | P0 | No credential is stored in source control; privileged actions are logged and scoped |
| AOS-011 | Record agent inputs, outputs, tools, and changed artifacts | P1 | A reviewer can reconstruct what an agent changed and why within the retained work record |
| AOS-012 | Provide release gates and rollback planning | P1 | Each release has approval, validation evidence, owner, rollback or recovery procedure |
| AOS-013 | Monitor cost, time, quality, and outcome signals | P1 | Dashboard separates actual operating measures from assumptions and forecasts |
| AOS-014 | Create an incident and exception path | P1 | Failures can be triaged, contained, corrected, and linked to preventive work |
| AOS-015 | Maintain role-based access and delegated authority records | P1 | Access is least-privilege, revocable, and tested against prohibited actions |
| AOS-016 | Evaluate agents on accuracy, escalation, recovery, and verified outcomes | P1 | Agent scorecards do not reward volume alone and include failed-control findings |
| AOS-017 | Support a reusable research-to-product pipeline | P1 | A research finding can produce a question, decision proposal, requirement, and testable build item without re-entry |
| AOS-018 | Maintain portfolio separation | P1 | Each company, brand, domain, customer, and product has an explicit context and data boundary |
| AOS-019 | Create controlled external-communication drafts | P2 | Drafts identify evidence, approver, audience, and publication status; they cannot self-publish material claims |
| AOS-020 | Support operating reviews and retrospectives | P2 | Each pilot or release produces a brief showing outcome, exceptions, decisions, and next actions |

## 6. Guardrails and Non-Negotiable Controls

The agent operating system inherits the program's existing rules: agents assist while humans remain accountable; consent is actor-owned; evidence and verification are distinct; corrections preserve history; and regulated or high-consequence activities require qualified review. [1] [3]

| Control area | Required rule |
|---|---|
| External commitments | Agents may draft but cannot bind an entity, sign, accept, negotiate, purchase, sell, or represent approval |
| Financial activity | Agents cannot move money, open accounts, set pricing, or create investment, escrow, lending, insurance, or payment activity without explicit authority and qualified review |
| Legal and regulatory activity | Agents may identify issues and prepare counsel materials; they cannot provide final legal conclusions or submit regulated filings |
| Security and access | Production access changes, credentials, permissions, and destructive operations require named approval and audit evidence |
| Sensitive data | Minimize collection, classify data, use least privilege, and prevent unrestricted model access to regulated or private information |
| Public communication | Public claims, partnerships, performance, valuation, endorsement, or launch messages require evidence and authorized disclosure review |
| Software release | A release requires defined tests, known limitations, approval threshold, monitoring, and recovery plan |
| Agent safety | Treat retrieved material as untrusted input; do not let text from sources override system instructions, permissions, or approval rules |

## 7. Pilot Architecture Options

The company can prove the operating model through either of the following approaches. No platform architecture is selected by this document; the founder should choose after the first controlled workflow and cost/ownership needs are clearer.

| Approach | Tradeoffs | Cost | Setup complexity |
|---|---|---|---|
| Human-guided repository and workspace | Uses the repository, registers, issue tracking, code review, and bounded agents as the operating layer. It is fastest to prove and keeps human oversight high, but some coordination remains manual. | Low incremental cost | Low to moderate |
| Integrated company control plane | Builds a dedicated application for work items, agent assignments, approvals, evidence, knowledge retrieval, dashboards, and release gates. It offers repeatability and product potential, but adds build, security, data-governance, and maintenance burden. | Higher build and operating cost | High |

The recommended **sequence**, not an irreversible architecture choice, is to prove the human-guided model with Company Zero first. Its observed bottlenecks will define which control-plane capabilities deserve software investment. Any persistent automation or external integration will be designed separately after trigger type, data sources, frequency, management needs, security boundary, and delivery channel are defined.

## 8. Staged Roadmap

### Stage A — Establish the Operating Record

Create the charter, instruction manual, requirements register, question log, roles, quality gates, and work-item template. Run all planning changes through the repository and ensure the records describe current founder intent. This document completes the initial definition of that stage.

### Stage B — Prove One Internal Delivery Loop

Select one bounded RRCA / ClaimStore capability. Prepare the requirement, architecture, acceptance tests, code change, quality evidence, human review, and retrospective through the agent-company workflow. The release must be narrow enough to be reviewed by the founder and reversed or corrected safely.

### Stage C — Measure and Refine the Company System

Measure cycle time, rework, defects, source retrieval quality, test coverage, agent escalation accuracy, and founder review burden. Convert recurring bottlenecks into requirements for a future integrated control plane rather than guessing at features.

### Stage D — Reuse Across the Portfolio

After the first delivery loop is reliable, apply the operating pattern to another portfolio product, domain experience, research package, or internal tool. Maintain separate data, authority, economics, and intellectual-property contexts.

### Stage E — Controlled Commercialization

Only after a repeatable internal record exists should the company decide whether to offer services, licensed tooling, managed agent operations, or a platform to external organizations. Contracts, pricing, representations, data processing, and support obligations require distinct business and legal design.

## 9. Initial Metrics

The first scorecard should favor reliable learning over activity volume. It should distinguish actual data from estimates and preserve evidence of how the metric was calculated.

| Dimension | Initial measure |
|---|---|
| Delivery | Lead time from approved requirement to reviewed increment; release frequency; rollback rate |
| Quality | Acceptance-test pass rate; escaped defect rate; time to correct a defect; security findings |
| Governance | Protected-action attempts blocked; approval completeness; audit-record completeness |
| Knowledge | Source-to-requirement traceability; retrieval usefulness; unresolved-question aging |
| Agent performance | Correct escalation rate; rework rate; human acceptance rate; recovery quality |
| Operations | Pilot completion rate; SLA adherence; evidence completeness; exception aging |
| Economics | Actual cost by initiative; cost per accepted increment; expected versus observed value |

## 10. Decisions, Assumptions, and Open Questions

This plan records a working direction: develop the agent company as a **human-governed planning and delivery system**. It does not authorize formation of a new legal entity, hiring, spending, external marketing, autonomous integration, regulated activity, or public launch. Those matters remain subject to the existing governance and review boundaries. [3]

The first founder decisions needed to turn the plan into an implementation milestone are recorded as Q213–Q216 in the open-question register:

1. What business name and initial scope should carry the agent-company function: Market Applications, a new internal company operating system, or another defined business line?
2. Should Company Zero remain an internal operating capability through Season 1, or should an external software or services offering be a parallel objective?
3. Which one bounded RRCA / ClaimStore workflow should be the first agent-company delivery-loop proof?
4. Which initial operating model should be tested first: a human-guided repository/workspace or an integrated control-plane product?

## Closing

The operating system is feasible and strategically aligned with the Human Blockchain program. Its near-term purpose is simple: turn the existing body of work into a company that can plan, build, test, launch, operate, and improve software without requiring the founder to be the manual connection among every idea, agent, document, developer, and decision.

The first practical move is not to build a general agent platform. It is to prove **one governed internal software-delivery loop** around the RRCA-centered Season 1 operating cell, then use actual evidence to decide what should become reusable infrastructure.

## References

[1]: https://github.com/donaldhaight/human-blockchain-operating-system/blob/main/docs/00-start-here/master-continuity-brief.md "Human Blockchain Master Continuity Brief"
[2]: https://github.com/donaldhaight/human-blockchain-operating-system/blob/main/docs/50-execution/master-roadmap.md "Master Roadmap — Knowledge to Execution"
[3]: https://github.com/donaldhaight/human-blockchain-operating-system/blob/main/docs/90-registers/risks-review-gates.md "Risks and Review Gates"
