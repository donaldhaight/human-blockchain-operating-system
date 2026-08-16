---
id: master-roadmap
title: Master Roadmap — Knowledge to Execution
owner: Donald Haight
status: active-working
sensitivity: public-repository
created: 2026-08-16
last_reviewed: 2026-08-16
source_ids:
  - SRC-010
  - SRC-011
tags:
  - roadmap
  - ingestion
  - docusaurus
  - phase-zero
  - lead-machine
---

# Master Roadmap — Knowledge to Execution

## Outcome

Create a continuously improving system that can ingest Donald Haight's complete multi-platform and offline body of work, organize it for retrieval and production, and use it to build the Phase Zero operating platform, commercial lead systems, cultural properties, publications, research, and future ventures.

## Stage 0 — Continuity and project organization

Deliverables:

- root `AGENTS.md`;
- current-state record;
- master roadmap;
- restart prompt;
- Historical Corpus and Living Program project definitions;
- GitHub milestone issues.

Done when a new human or agent can enter from the repository, understand the state in minutes, and begin the next milestone without oral reconstruction.

## Stage 1 — Docusaurus build and deployment

Deliverables:

- deterministic dependency lockfile;
- validation and production-build workflow;
- GitHub Pages deployment workflow;
- public documentation URL;
- build and deployment status displayed in the repository.

Done when pull requests validate automatically and accepted `main` changes deploy without manual intervention.

## Stage 2 — Artifact-first ingestion engine

The first engine should be simple:

1. receive files or exports;
2. preserve originals;
3. hash and register sources;
4. extract conversations and artifacts;
5. classify artifact types;
6. record relationships and dates;
7. index for retrieval;
8. generate requested outputs with source links.

Design for adapters rather than one giant parser. Initial adapters should cover ChatGPT export JSON, ordinary folders/ZIPs, Markdown, PDF, DOCX, and the observable Manus export format. Additional platform adapters follow the evidence in their exports.

Done when the same import can run twice without duplicates, resume after interruption, and produce an artifact catalog with source lineage.

## Stage 3 — Manus discovery and ingestion

Combine human-assisted retrieval with automation. A human may download and organize awkward historical materials while scripts inventory, hash, classify, and index them.

Begin with representative sources, then expand when the adapter proves reliable. The objective is commercial and cultural discovery as much as preservation.

## Stage 4 — ChatGPT historical and living corpora

Ingest personal and team/workspace exports as separate source families. Organize the historical project chronologically through 2026-08-16. Seed the Living Program with the strongest recent work and all current implementation instructions.

Do not force every older draft into the current programming baseline. Make all material retrievable and regenerable.

## Stage 5 — Cross-platform baseline and discovery

Add Claude, Gemini, Grok, and NotebookLM sources. Identify recurring intentions, concept families, alternative names, unique later discoveries, artifacts, and reusable formulations.

The output is not a single frozen canon. It is:

- a current programming baseline;
- a searchable idea and artifact library;
- relationship and chronology maps;
- source-grounded generation context;
- explicit open variables where implementation requires a decision.

## Stage 6 — Phase Zero platform

Generate and improve:

- common App Home;
- Stakeholder Groups, Legal Entities, Roles, Super Admin, and RBAC;
- Company Admin onboarding and Company Admin Agents;
- development-team and business-development applications;
- prospects, leads, offers, pending projects, projects, referrals, warranties, and maintenance;
- jobs, job orders, tasks, and task requests;
- ClaimExpress and Need-to-Done;
- ClaimBuddy/Buddy Claim workflows;
- attributable ledgers and money events;
- Quantum Dashboard;
- Season 1 and Season 2 operating environment.

## Parallel Track A — Lead machine and cultural catalog

Inventory and activate the domain, publishing, entertainment, and cultural portfolio. Create landing pages, catalogs, audience funnels, expressions of interest, sales/licensing pathways, and measurable revenue evidence leading toward 2026–2028 launch windows.

Develop an Asset and Revenue Evidence Book for domains, content, software, traffic, leads, rights, costs, and transactions. Treat estimated value as a testable scenario until supported by evidence and qualified review.

## Parallel Track B — Repository archaeology

Inventory the existing GitHub repositories before rebuilding similar systems. Capture stack, purpose, age, build status, deployability, documents, screens, reusable code, licenses, secrets risk, unique concepts, overlap, and recommended disposition.

Done when every repository has a one-page evidence card and the portfolio has a reuse and recovery map.

