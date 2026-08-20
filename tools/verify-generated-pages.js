#!/usr/bin/env node
const fs=require('fs'), path=require('path');
const site=process.argv[2]||'_site', docs='docs';
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);}
function fm(f){const t=fs.readFileSync(f,'utf8'); if(!t.startsWith('---\n')) return {}; const end=t.indexOf('\n---\n',4); const o={}; for(const l of t.slice(4,end).split('\n')){const m=l.match(/^([\w-]+):\s*(.*?)\s*$/); if(m)o[m[1]]=m[2].replace(/^['"]|['"]$/g,'');} return o;}
let errors=[]; const pages=walk(docs).filter(f=>f.endsWith('.md'));
for(const f of pages){const meta=fm(f); let out;
 if(meta.permalink){let p=meta.permalink.replace(/^\//,''); out=p.endsWith('/')?path.join(site,p,'index.html'):path.join(site,p);}
 else out=path.join(site,f.replace(/\.md$/,'.html'));
 if(!fs.existsSync(out)) errors.push(`${f}: expected generated HTML ${out}`);
}
if(errors.length){console.error('Generated Pages completeness check failed:'); errors.forEach(e=>console.error('- '+e)); process.exit(1);}
console.log(`Generated Pages completeness: PASS (${pages.length} documentation sources rendered as HTML)`);
