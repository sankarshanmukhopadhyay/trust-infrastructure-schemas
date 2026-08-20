#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const docsRoot = path.join(process.cwd(), 'docs');
const requiredHubs = [
  'Artifact Contracts',
  'Semantic Alignment',
  'Assurance & Validation',
  'Integration & Adoption',
  'Governance & Lifecycle',
  'Releases'
];

function filesRecursively(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const p = path.join(dir, entry.name);
    return entry.isDirectory() ? filesRecursively(p) : [p];
  });
}

function frontMatter(file) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---\n', 4);
  if (end < 0) return null;
  const data = {};
  for (const line of text.slice(4, end).split('\n')) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*?)\s*$/);
    if (match) data[match[1]] = match[2].replace(/^['"]|['"]$/g, '');
  }
  return data;
}

const markdownFiles = filesRecursively(docsRoot).filter((f) => f.endsWith('.md'));

// Markdown targets survive into generated HTML as .md hrefs and commonly 404.
// Require Jekyll's link tag for repository-local Markdown references.
const publicationSources = [path.join(process.cwd(), 'index.md'), ...markdownFiles];
const pages = markdownFiles.map((file) => ({ file, fm: frontMatter(file) }));
const errors = [];

// The publication contract is centralized in Jekyll config: canonical docs
// inherit the Just-the-Docs default layout, and malformed YAML front matter is
// fatal. This avoids requiring 70+ duplicated `layout` declarations while still
// making the styling/front-matter guarantee machine-verifiable.
const jekyllConfig = fs.readFileSync(path.join(process.cwd(), '_config.yml'), 'utf8');
if (!/^strict_front_matter:\s*true\s*$/m.test(jekyllConfig)) {
  errors.push('_config.yml must set strict_front_matter: true so malformed page metadata fails the build');
}
const docsDefaultLayout = /defaults:\s*[\s\S]*?-\s+scope:\s*[\s\S]*?path:\s*["']?docs["']?\s*[\s\S]*?values:\s*[\s\S]*?layout:\s*default\s*(?:\n|$)/m;
if (!docsDefaultLayout.test(jekyllConfig)) {
  errors.push('_config.yml must apply layout: default to the docs publication surface');
}

for (const file of publicationSources) {
  const text = fs.readFileSync(file, 'utf8');
  const re = /\]\((?!https?:\/\/|mailto:|\{% link )([^)]*\.md)(?:#[^)]*)?\)/g;
  for (const match of text.matchAll(re)) errors.push(`${path.relative(process.cwd(), file)}: local Markdown link must use Jekyll {% link %}: ${match[1]}`);
}

for (const page of pages) {
  const rel = path.relative(process.cwd(), page.file);
  if (!page.fm) {
    errors.push(`${rel}: missing YAML front matter`);
    continue;
  }
  if (!page.fm.title) errors.push(`${rel}: missing title`);
  if (rel !== 'docs/index.md' && !page.fm.parent) errors.push(`${rel}: missing parent`);
}

const docsIndex = pages.find((p) => path.relative(process.cwd(), p.file) === 'docs/index.md');
if (!docsIndex || !docsIndex.fm || docsIndex.fm.title !== 'Documentation' || docsIndex.fm.permalink !== '/docs/') {
  errors.push('docs/index.md must remain the Documentation navigation root at /docs/');
}

const byTitle = new Map();
for (const page of pages) {
  if (page.fm && page.fm.title) {
    if (!byTitle.has(page.fm.title)) byTitle.set(page.fm.title, []);
    byTitle.get(page.fm.title).push(page);
  }
}

for (const hubTitle of requiredHubs) {
  const candidates = byTitle.get(hubTitle) || [];
  const hub = candidates.find((p) => p.fm.parent === 'Documentation');
  if (!hub) {
    errors.push(`missing required navigation hub: ${hubTitle}`);
    continue;
  }
  if (hub.fm.has_children !== 'true') errors.push(`${path.relative(process.cwd(), hub.file)}: hub must declare has_children: true`);
  if (!hub.fm.permalink) errors.push(`${path.relative(process.cwd(), hub.file)}: hub must declare a stable permalink`);
}

for (const page of pages) {
  if (!page.fm) continue;
  const rel = path.relative(process.cwd(), page.file);
  if (rel === 'docs/index.md') continue;
  if (page.fm.parent === 'Documentation') {
    if (!requiredHubs.includes(page.fm.title)) errors.push(`${rel}: only approved IA hubs may be direct Documentation children`);
  } else {
    if (!requiredHubs.includes(page.fm.parent)) errors.push(`${rel}: unknown navigation parent '${page.fm.parent}'`);
    if (page.fm.grand_parent !== 'Documentation') errors.push(`${rel}: child page must declare grand_parent: Documentation`);
  }
}

const siblingKeys = new Map();
for (const page of pages) {
  if (!page.fm || !page.fm.title || !page.fm.parent) continue;
  const key = `${page.fm.parent}::${page.fm.title}`;
  if (siblingKeys.has(key)) {
    errors.push(`duplicate navigation title '${page.fm.title}' under '${page.fm.parent}'`);
  } else {
    siblingKeys.set(key, page.file);
  }
}

const rootIndex = fs.readFileSync(path.join(process.cwd(), 'index.md'), 'utf8');
const version = fs.readFileSync(path.join(process.cwd(), 'VERSION'), 'utf8').trim();
if (!rootIndex.includes(`**Current release:** ` + '`v' + version + '`')) {
  errors.push(`index.md must identify v${version} as the current release`);
}

if (errors.length) {
  console.error('GitHub Pages information architecture validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`GitHub Pages IA: PASS (${pages.length} documentation pages across ${requiredHubs.length} hubs)`);
