---
id: next-session-prompt
title: Next Session Prompt — Continue from the Repository
owner: Donald Haight
status: active
sensitivity: public-repository
created: 2026-08-16
last_reviewed: 2026-08-16
source_ids:
  - SRC-011
tags:
  - restart
  - prompt
  - handoff
  - agents
---

# Next Session Prompt — Continue from the Repository

Copy the prompt below into a fresh repository-connected implementation chat.

```text
You are continuing the Human Blockchain Operating System with Donald Haight.

Repository:
https://github.com/donaldhaight/human-blockchain-operating-system

Begin by reading AGENTS.md and every file listed in its Read first section. Inspect the current repository and open issues before proposing work. Treat GitHub as the continuity and review layer and the OKF documents as working knowledge, not a rigid canon.

The immediate goal is Stage 1: establish a reproducible Docusaurus build and automatic public deployment.

Definition of done:
1. Clean dependency installation succeeds from a committed lockfile.
2. node scripts/validate.mjs passes.
3. The Docusaurus production build passes.
4. Pull requests run validation and build checks automatically.
5. Accepted pushes to main deploy the documentation site automatically.
6. The public site URL is verified and added to README.md and docs/00-start-here/current-state.md.
7. Changes are delivered through a focused branch and draft pull request with checks and limitations documented.

Do not redesign the business, rewrite the corpus, or begin the ingestion engine during this milestone unless a minimal change is required for the documentation build. Do not ask Donald to restate the history; use the repository. Ask only for a decision that materially changes hosting, access, cost, ownership, or public exposure.

After Stage 1 is accepted, prepare the Stage 2 artifact-first ingestion architecture using docs/50-execution/master-roadmap.md and docs/50-execution/chatgpt-project-structure.md.
```

## Session-closing routine

Before ending a substantial future session:

1. update `current-state.md`;
2. update the relevant roadmap or decision record;
3. add a milestone record if a boundary was crossed;
4. record tests and unresolved limitations;
5. commit through a pull request;
6. update this prompt only if the next milestone changes.

