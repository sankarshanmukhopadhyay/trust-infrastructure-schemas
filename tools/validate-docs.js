const fs = require('fs');
const path = require('path');
const roots = ['README.md', 'docs'];
const bad = [];

function walk(p) {
  if (!fs.existsSync(p)) return;
  const stat = fs.statSync(p);
  if (stat.isDirectory()) {
    for (const child of fs.readdirSync(p)) walk(path.join(p, child));
    return;
  }
  if (!p.endsWith('.md')) return;
  const text = fs.readFileSync(p, 'utf8');
  for (const match of text.matchAll(/\[[^\]]+\]\(([^)#]+)(?:#[^)]+)?\)/g)) {
    const target = match[1];
    if (/^(https?:|mailto:)/.test(target)) continue;
    const resolved = path.resolve(path.dirname(p), target);
    if (!fs.existsSync(resolved)) bad.push(`${p}: ${target}`);
  }
}

roots.forEach(walk);
if (bad.length) {
  console.error(bad.join('\n'));
  process.exit(1);
}
console.log('Documentation links: PASS');
