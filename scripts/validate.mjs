import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifestPath = path.join(root, 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const missing = manifest.files
  .map((item) => item.path)
  .filter((file) => !fs.existsSync(path.join(root, file)));

if (missing.length) {
  console.error(`Missing bundle files:\n${missing.join('\n')}`);
  process.exit(1);
}

const duplicatePaths = manifest.files
  .map((item) => item.path)
  .filter((item, index, all) => all.indexOf(item) !== index);
if (duplicatePaths.length) {
  console.error(`Duplicate manifest paths:\n${duplicatePaths.join('\n')}`);
  process.exit(1);
}

const ids = [];
for (const item of manifest.files.filter((entry) => entry.path.startsWith('docs/') && entry.path.endsWith('.md'))) {
  const text = fs.readFileSync(path.join(root, item.path), 'utf8');
  const match = text.match(/^---\n[\s\S]*?^id:\s*([^\n]+)$/m);
  if (!match) {
    console.error(`Missing frontmatter id: ${item.path}`);
    process.exit(1);
  }
  ids.push({id: match[1].trim(), path: item.path});
}
const duplicateIds = ids.filter((item, index, all) => all.findIndex((candidate) => candidate.id === item.id) !== index);
if (duplicateIds.length) {
  console.error(`Duplicate document ids:\n${duplicateIds.map((item) => `${item.id}: ${item.path}`).join('\n')}`);
  process.exit(1);
}

console.log(`OKF bundle valid: ${manifest.files.length} registered files; ${ids.length} unique documentation ids.`);
