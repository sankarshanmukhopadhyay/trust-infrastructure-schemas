const fs = require('fs');
const path = require('path');
const roots = ['README.md', 'index.md', 'docs'];
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

  // Validate Jekyll link tags against repository-root paths.
  for (const match of text.matchAll(/\{%\s*link\s+([^\s%]+)\s*%\}/g)) {
    const target = match[1];
    if (!fs.existsSync(path.resolve(target))) bad.push(`${p}: missing Jekyll link target ${target}`);
  }

  // Validate ordinary local Markdown links. Jekyll link tags are handled above.
  for (const match of text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)) {
    const target = match[1].trim();
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    if (target.startsWith('{% link ')) continue;
    const clean = target.split('#')[0];
    if (!clean) continue;
    const resolved = path.resolve(path.dirname(p), clean);
    if (!fs.existsSync(resolved)) bad.push(`${p}: ${target}`);
  }
}

roots.forEach(walk);
if (bad.length) {
  console.error(bad.join('\n'));
  process.exit(1);
}
console.log('Documentation links: PASS');
