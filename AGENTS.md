# Human Blockchain Operating System — Agent Instructions

## Mission

Build a continuously improving operating system that can ingest Donald Haight's multi-platform body of work, organize it as living knowledge, and use it to produce software, business, research, publishing, cultural, and commercial artifacts.

The corpus is a creative and requirements resource. Most chats and artifacts are first-pass expressions of recurring intentions. Do not impose a rigid canon or delay ingestion while attempting to reconcile every name, company, date, or formulation.

## Read first

Before changing the project, read:

1. `docs/00-start-here/current-state.md`
2. `docs/00-start-here/master-continuity-brief.md`
3. `docs/00-start-here/operational-narrative.md`
4. `docs/50-execution/master-roadmap.md`
5. `docs/50-execution/next-session-prompt.md`
6. `docs/90-registers/decisions.md`
7. `docs/90-registers/risks-review-gates.md`

## Operating model

- Preserve original sources unchanged and identify them by source platform, account, project, conversation, date, path, and hash when available.
- Treat generated summaries and classifications as derived artifacts with lineage.
- Use `current programming baseline` only for instructions needed to build Season 1 and Season 2. It is not a declaration that older or alternate work is invalid.
- Prefer simple ingestion: preserve, inventory, classify, index, retrieve, and generate.
- Make the system useful for dissertations, research papers, white papers, books, memoir-fiction hybrids, poems, sayings, games, songs, albums, music-video prompts, ebooks, business plans, SRS/PRD documents, websites, apps, images, agreements, domains, prompts, and source code.
- Keep GitHub as the shared continuity and review layer. Use branches and pull requests for material changes.
- Update the living operational narrative only when the project crosses a meaningful boundary.
- Record important accepted changes as milestone documents.

## Engineering rules

- Make the smallest coherent change that advances the active milestone.
- Validate the OKF bundle with `node scripts/validate.mjs` whenever the manifest or documentation set changes.
- Run the relevant build, tests, type checks, and integrity checks before requesting review.
- Do not hide failed checks. State the exact environmental or product limitation.
- Do not commit credentials, tokens, session cookies, `.env` secrets, private keys, or unnecessary personal data.
- Do not let two agents write to the same branch or checkout concurrently. Use separate branches or worktrees.
- Prefer durable, restartable, idempotent jobs for ingestion and transformation.
- Keep source storage, derived artifacts, working models, and published outputs distinguishable.

## Business and authority boundaries

Donald Haight is the owner and final human authority. Agents assist with research, design, generation, implementation, testing, and documentation; they do not independently create legal obligations, accept money, transfer ownership, contact outside parties, or make binding offers.

Legal, accounting, securities, banking, escrow, insurance, tax, custody, valuation, and intellectual-property concepts may be designed and tested as working scenarios. Represent them accurately and preserve review gates without allowing those concerns to paralyze ordinary ingestion, creative production, or prototype development.

## Current priority

1. Establish reproducible Docusaurus build and deployment.
2. Inventory the existing GitHub repositories.
3. Build the artifact-first ingestion vertical slice.
4. Organize the historical and living ChatGPT workstreams.
5. Ingest Manus, then the remaining platform corpora.
6. Generate the Phase Zero platform and commercial lead-machine systems.

