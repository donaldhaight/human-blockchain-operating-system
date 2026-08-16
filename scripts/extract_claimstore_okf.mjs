import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const [sourceArg, bundleArg] = process.argv.slice(2);
if (!sourceArg || !bundleArg) {
  console.error('Usage: node extract_claimstore_okf.mjs SOURCE.md BUNDLE_DIR');
  process.exit(2);
}

const sourcePath = path.resolve(sourceArg);
const bundleRoot = path.resolve(bundleArg);
const sourceText = fs.readFileSync(sourcePath, 'utf8');
const lines = sourceText.split(/\r?\n/);
const sourceHash = crypto.createHash('sha256').update(sourceText).digest('hex');

const specs = [
  ['claimstore-case-study-master-brief', 'ClaimStore Case Study Master Brief', '# The ClaimStore Vision for the Insurance Restoration Market', 1, '10-business/claimstore-case-study-master-brief.md'],
  ['requirements-discovery', 'ClaimStore Requirements Discovery Brief', '# ClaimStore Requirements Discovery Brief v0.1', 0, '20-product/claimstore-requirements-discovery.md'],
  ['claimexpress-protocol', 'ClaimExpress Protocol Specification', '# ClaimExpress Protocol Specification v0.1', 0, '20-product/claimexpress-protocol.md'],
  ['claimexpress-offer-addendum', 'ClaimExpress Offer and Need/Done Addendum', '# ClaimExpress Protocol Specification v0.1', 1, '20-product/claimexpress-offer-need-done-addendum.md'],
  ['george-washington-rollout', 'George Washington Rollout Model', '# Strategic Addendum - The George Washington Rollout Model', 0, '10-business/george-washington-rollout.md'],
  ['claimstore-object-addendum', 'ClaimStore Object Model Addendum', '# ClaimStore Object Model Addendum v0.1', 0, '20-product/claimstore-object-model-addendum.md'],
  ['human-blockchain-claimbuddy', 'Human Blockchain and ClaimBuddy Operating Model', '# Human Blockchain / ClaimBuddy Operating Model v0.1', 0, '20-product/human-blockchain-claimbuddy-model.md'],
  ['rrca-sla-ter', 'RRCA SLA and Task Efficiency Rating Model', '# RRCA SLA and Task Efficiency Rating Model v0.1', 0, '20-product/rrca-sla-ter-model.md'],
  ['insurance-determination', 'Insurance Determination and Claim Caller Addendum', '# Insurance Determination Addendum v0.1', 0, '20-product/insurance-determination-claim-caller.md'],
  ['designation-model', 'Designation Model Addendum', '# Designation Model Addendum v0.1', 0, '20-product/designation-model.md'],
  ['quantum-dashboard', 'Quantum Dashboard Underwriting Model', '# Quantum Dashboard Underwriting Model v0.1', 0, '30-evidence/quantum-dashboard-underwriting.md'],
  ['founding-sponsor-book', 'Founding Stakeholder Sponsor Position Book', '# Founding Stakeholder Sponsor Position Book v0.1', 0, '40-market/founding-sponsor-position-book.md'],
  ['phase1-prd', 'Phase 1 Product Requirements Document', '# Phase 1 Product Requirements Document v0.1', 0, '20-product/phase1-product-requirements.md'],
  ['season1-operating-plan', 'Season 1 Operating Plan and Roadmap', '# Season 1 Operating Plan and Roadmap v0.1', 0, '10-business/season1-operating-plan.md'],
  ['developer-agent-handoff', 'Developer and Agent Handoff Package', '# Developer / Agent Handoff Package v0.1', 0, '50-execution/developer-agent-handoff.md'],
  ['legal-review-map', 'Legal Architecture To Be Vetted', '# Legal Architecture To Be Vetted v0.1', 0, '30-evidence/legal-architecture-review-map.md'],
  ['one-prompt-event', 'One Prompt Event Package', '# One Prompt Event Package v0.1', 0, '40-market/one-prompt-event-package.md'],
  ['master-glossary', 'Master Glossary and Naming Convention', '# Master Glossary and Naming Convention v0.1', 0, '20-product/master-glossary.md'],
  ['role-designation-matrix', 'Entity Role and Designation Matrix', '# Entity Role and Designation Matrix v0.1', 0, '20-product/entity-role-designation-matrix.md'],
  ['data-model-master', 'Data Model Master Specification', '# Data Model Master Specification v0.1', 0, '20-product/data-model-master.md'],
  ['backlog-user-stories', 'Backlog and User Stories', '# Backlog and User Stories v0.1', 0, '50-execution/backlog-user-stories.md'],
  ['user-flow-master', 'User Flow Master Specification', '# User Flow Master Specification v0.1', 0, '20-product/user-flow-master.md'],
  ['master-context', 'Master Context', '# MASTER_CONTEXT.md', 0, '50-execution/master-context.md'],
  ['working-model-index', 'Working Model Index', '# CANON_INDEX.md', 0, '50-execution/working-model-index.md'],
  ['source-decision-log', 'Source Decision Log', '# DECISION_LOG.md', 0, '50-execution/source-decision-log.md'],
  ['source-open-questions', 'Source Open Questions', '# OPEN_QUESTIONS.md', 0, '50-execution/source-open-questions.md'],
  ['source-index', 'Source Index', '# SOURCE_INDEX.md', 0, '50-execution/source-index.md'],
  ['agent-system-prompt', 'Agent System Prompt', '# AGENT_SYSTEM_PROMPT.md', 0, '50-execution/agent-system-prompt.md'],
  ['mvp-demo-requirements', 'MVP Demo Requirements', '# MVP_DEMO_REQUIREMENTS.md', 0, '50-execution/mvp-demo-requirements.md'],
  ['screen-inventory', 'Screen Inventory and UX Flow Map', '# SCREEN_INVENTORY_AND_UX_FLOW_MAP.md', 0, '20-product/screen-inventory-ux-flow.md'],
  ['api-event-schema', 'API Event Schema Outline', '# API_EVENT_SCHEMA_OUTLINE.md', 0, '50-execution/api-event-schema.md'],
  ['data-dictionary', 'Data Dictionary and Field Naming Rules', '# DATA_DICTIONARY_AND_FIELD_NAMING_RULES.md', 0, '50-execution/data-dictionary-field-naming.md'],
  ['mvp-erd', 'MVP ERD Outline', '# MVP_ERD_OUTLINE.md', 0, '20-product/mvp-erd-outline.md'],
];

function findOccurrence(heading, occurrence) {
  const matches = [];
  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].trimEnd() === heading) matches.push(i);
  }
  return matches[occurrence] ?? -1;
}

function endOfArtifact(start) {
  for (let i = start + 1; i < lines.length; i += 1) {
    if (lines[i].trim() === '## Prompt:') return i;
  }
  return lines.length;
}

const extracted = [];
const missing = [];
for (const [id, title, heading, occurrence, relativePath] of specs) {
  const start = findOccurrence(heading, occurrence);
  if (start < 0) {
    missing.push({id, heading, occurrence});
    continue;
  }
  const end = endOfArtifact(start);
  const body = lines.slice(start, end).join('\n').trim();
  const outputPath = path.join(bundleRoot, 'docs', relativePath);
  fs.mkdirSync(path.dirname(outputPath), {recursive: true});
  const frontmatter = [
    '---',
    `id: ${id}`,
    `title: ${JSON.stringify(title)}`,
    'status: extracted-working-draft',
    'source_id: SRC-010',
    `source_sha256: ${sourceHash}`,
    `source_line_start: ${start + 1}`,
    `source_line_end: ${end}`,
    'authority_note: Current working synthesis; Donald Haight current narration and approved decisions control.',
    '---',
    '',
  ].join('\n');
  fs.writeFileSync(outputPath, `${frontmatter}${body}\n`, 'utf8');
  extracted.push({id, title, path: `docs/${relativePath}`, start: start + 1, end});
}

const sourcesDir = path.join(bundleRoot, 'sources');
fs.mkdirSync(sourcesDir, {recursive: true});
const preservedSource = path.join(sourcesDir, 'ChatGPT-2-ClaimStore-Vision-Requirements-20260816-1153.md');
fs.copyFileSync(sourcePath, preservedSource);

const reportLines = [
  '---',
  'id: extraction-report-src-010',
  'title: ClaimStore Requirements Extraction Report',
  'status: generated',
  '---',
  '',
  '# ClaimStore Requirements Extraction Report',
  '',
  `- Source: \`${path.basename(sourcePath)}\``,
  `- SHA-256: \`${sourceHash}\``,
  `- Source lines: ${lines.length.toLocaleString('en-US')}`,
  `- Extracted artifacts: ${extracted.length}`,
  `- Missing configured artifacts: ${missing.length}`,
  '',
  '| ID | Artifact | Source lines | OKF path |',
  '|---|---|---:|---|',
  ...extracted.map((item) => `| ${item.id} | ${item.title} | ${item.start}–${item.end} | \`${item.path}\` |`),
  '',
  '## Treatment',
  '',
  'The source transcript is preserved under `sources/`. Completed generated artifacts were extracted into Docusaurus documents. Prompts, acknowledgments, and transcript mechanics remain in the preserved source and are not published as requirements pages.',
  '',
  'The word “canonical” inside extracted historical material is interpreted as “current working definition within that synthesis.” Donald Haight’s current narration, approved decisions, executed agreements, and observed operating results control.',
];
if (missing.length) {
  reportLines.push('', '## Missing configured artifacts', '', ...missing.map((item) => `- ${item.id}: \`${item.heading}\` occurrence ${item.occurrence}`));
}
fs.writeFileSync(path.join(bundleRoot, 'docs/00-start-here/extraction-report.md'), `${reportLines.join('\n')}\n`, 'utf8');

const manifestPath = path.join(bundleRoot, 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const generatedPaths = new Set([
  'docs/00-start-here/extraction-report.md',
  'sources/ChatGPT-2-ClaimStore-Vision-Requirements-20260816-1153.md',
  ...extracted.map((item) => item.path),
]);
manifest.files = manifest.files.filter((item) => !generatedPaths.has(item.path));
manifest.files.push(
  {path: 'docs/00-start-here/extraction-report.md', type: 'extraction-report', status: 'generated'},
  {path: 'sources/ChatGPT-2-ClaimStore-Vision-Requirements-20260816-1153.md', type: 'preserved-source', status: 'preserved', sha256: sourceHash},
  ...extracted.map((item) => ({path: item.path, type: 'extracted-knowledge-artifact', status: 'working-draft', source_id: 'SRC-010'})),
);
manifest.generated_at = new Date().toISOString();
manifest.source_count = 1;
manifest.extracted_artifact_count = extracted.length;
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

console.log(JSON.stringify({sourceHash, sourceLines: lines.length, extracted: extracted.length, missing}, null, 2));
if (missing.length) process.exitCode = 1;
