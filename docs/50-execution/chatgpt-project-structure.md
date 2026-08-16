---
id: chatgpt-project-structure
title: ChatGPT Project and Corpus Organization Structure
owner: Donald Haight
status: proposed-ready
sensitivity: public-repository
created: 2026-08-16
last_reviewed: 2026-08-16
source_ids:
  - SRC-011
tags:
  - chatgpt
  - projects
  - corpus
  - naming
  - continuity
---

# ChatGPT Project and Corpus Organization Structure

## Purpose

Separate historical discovery from forward execution without making the historical corpus irrelevant. The projects are workspaces and retrieval boundaries, not separate universes.

## Project map

| Code | Project | Scope | Primary outcome |
|---|---|---|---|
| P00 | Historical Corpus | Earliest available record through 2026-08-16 | Chronological, searchable inventory of conversations and artifacts |
| P01 | Living Program | 2026-08-16 forward, seeded with the strongest recent six weeks | Current planning, orchestration, decisions, and cross-project continuity |
| P02 | Phase Zero Platform | Product implementation only | Working Season 1–2 platform and current programming baseline |
| P03 | Lead Machine and Cultural Catalog | Domains, funnels, books, music, videos, games, websites, and offers | Audience, leads, sales/licensing evidence, and asset catalog |
| P04 | Repository Archaeology | Existing GitHub repositories | Reuse map, recovery inventory, deployment candidates, and hidden assets |

## Conversation naming system

Use:

`P##-YYYYMMDD-PLATFORM-NNN — Short Title`

Platform codes:

| Code | Platform |
|---|---|
| CGP | ChatGPT personal |
| CGT | ChatGPT team/workspace |
| MAN | Manus |
| CLA | Claude |
| GEM | Gemini |
| GRK | Grok |
| NLM | NotebookLM |
| OFF | Offline or historical document |
| GIT | GitHub repository or code artifact |

Examples:

- `P00-20240115-CGP-001 — Original 26-Topic Loop`
- `P00-20260815-MAN-083 — Preservation and Sponsor Prototype`
- `P01-20260816-CGT-001 — GitHub Cornerstone`
- `P02-20260817-GIT-001 — Docusaurus Deployment`

When an exact date is unknown, use the best-supported month or year and record date confidence separately. Do not invent precision.

## Artifact classification

Primary artifact types:

- dissertation;
- research paper;
- white paper;
- nonfiction book;
- hybrid fiction/memoir book;
- poem, rhyme, or saying;
- game;
- song;
- album;
- music-video prompt;
- ebook;
- business plan;
- requirements document, SRS, or PRD;
- website;
- application;
- image;
- legal agreement or SLA;
- domain or brand;
- prompt;
- source code.

Minimum metadata:

- stable artifact ID;
- title;
- artifact type;
- original-document flag;
- source platform and account;
- source project and conversation;
- original or best-supported date;
- parent or derivation relationship;
- people, companies, brands, and domains;
- tags;
- source path and hash;
- generated outputs.

## Interpretation rule

Ingestion is content-neutral. Preserve and index first. Classification helps retrieval and production; it does not judge whether a draft is canonical, sufficiently polished, or consistent with every other draft.

The current programming baseline is maintained separately for developers. Historical, cultural, speculative, and alternate material remains available to inspire, test, expand, or regenerate future work.

