# Human Blockchain OKF Bundle v0.2

This package is the Docusaurus-ready knowledge and commissioning layer for the Human Blockchain business and software program.

[![Test deployment](https://github.com/donaldhaight/human-blockchain-operating-system/actions/workflows/test-deploy.yml/badge.svg)](https://github.com/donaldhaight/human-blockchain-operating-system/actions/workflows/test-deploy.yml)
[![Deploy to GitHub Pages](https://github.com/donaldhaight/human-blockchain-operating-system/actions/workflows/deploy.yml/badge.svg)](https://github.com/donaldhaight/human-blockchain-operating-system/actions/workflows/deploy.yml)

## Knowledge site

The public documentation site is configured for:

<https://donaldhaight.github.io/human-blockchain-operating-system/>

GitHub Pages publishes automatically after an accepted push to `main` once the repository Pages source is set to **GitHub Actions**.

## Start locally

```bash
npm ci
npm run validate
npm start
```

## Build the static site

```bash
npm run build
```

The generated site is written to `build/`. Pull requests validate and build the site; accepted pushes to `main` publish the build through GitHub Pages.

## Governing rule

Donald Haight's current narrated intention, approved decisions, and observed operating results control current execution. Historical corpus material is retrievable evidence and creative supply—not immutable canon.

## Package structure

- `okf.yaml` — bundle identity and authority rules
- `manifest.json` — machine-readable file/document registry
- `docs/00-start-here/` — commissioning brief, package index, shared definitions
- `docs/10-business/` through `docs/50-execution/` — planned document package
- `docs/90-registers/` — decisions, assumptions, risks, variables, and source tracking
- `docusaurus.config.js` and `sidebars.js` — documentation-site configuration
- `scripts/validate.mjs` — basic bundle integrity check
- `sources/` — preserved synthesis source used for extraction

## Extracted ClaimStore package

Version 0.2 includes 33 working artifacts extracted from the ClaimStore Vision Requirements synthesis. See `docs/00-start-here/extraction-report.md` for source hashes, line ranges, and output paths. The extraction is repeatable with the included root-level extraction script in the accompanying package.

This is a working foundation. Placeholder documents are intentionally listed in the package index rather than falsely presented as completed.
