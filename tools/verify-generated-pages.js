#!/usr/bin/env node
/** Verify the built GitHub Pages artifact, not merely the source IA. */
const fs = require('fs');
const path = require('path');
const site = process.argv[2] || '_site';
const docs = 'docs';

function walk(d) {
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d, {withFileTypes:true}).flatMap(e => e.isDirectory() ? walk(path.join(d,e.name)) : [path.join(d,e.name)]);
}
function fm(f) {
  const t=fs.readFileSync(f,'utf8');
  if(!t.startsWith('---\n')) return {};
  const end=t.indexOf('\n---\n',4); const o={};
  for(const l of t.slice(4,end).split('\n')) { const m=l.match(/^([\w-]+):\s*(.*?)\s*$/); if(m)o[m[1]]=m[2].replace(/^['"]|['"]$/g,''); }
  return o;
}

let errors=[];
if (!fs.existsSync(path.join(site,'index.html'))) errors.push('root index.md did not render to _site/index.html');

const pages=walk(docs).filter(f=>f.endsWith('.md'));
for(const f of pages){
  const meta=fm(f); let out;
  if(meta.permalink){let p=meta.permalink.replace(/^\//,''); out=p.endsWith('/')?path.join(site,p,'index.html'):path.join(site,p);}
  else out=path.join(site,f.replace(/\.md$/,'.html'));
  if(!fs.existsSync(out)) errors.push(`${f}: expected generated HTML ${out}`);
}

const outputFiles=walk(site);
for (const f of outputFiles.filter(f=>f.endsWith('.md'))) errors.push(`${f}: raw Markdown must not be deployed by Pages`);

for (const f of outputFiles.filter(f=>f.endsWith('.html'))) {
  const html=fs.readFileSync(f,'utf8');
  if (!/<link\b[^>]*rel=["'][^"']*stylesheet[^"']*["'][^>]*>/i.test(html) &&
      !/<link\b[^>]*href=["'][^"']+\.css[^"']*["'][^>]*>/i.test(html)) {
    errors.push(`${f}: generated page has no stylesheet link`);
  }
  const bad=[...html.matchAll(/href=["']([^"']*\.md(?:#[^"']*)?)["']/gi)].map(m=>m[1]);
  for (const href of bad) errors.push(`${f}: unresolved Markdown href '${href}'`);
}

if(errors.length){console.error('Generated Pages publication check failed:');errors.forEach(e=>console.error('- '+e));process.exit(1);}
console.log(`Generated Pages publication: PASS (${pages.length} documentation sources rendered; no raw Markdown or unstyled HTML detected)`);
