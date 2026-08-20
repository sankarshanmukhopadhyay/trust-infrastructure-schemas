const fs=require('fs');
const coverage=JSON.parse(fs.readFileSync('model/tsmm-semantic-coverage.json','utf8'));
const mapping=JSON.parse(fs.readFileSync('model/tsmm-artifact-mapping.json','utf8'));
const urn=/^urn:tsmm:concept:[a-z0-9-]+$/;
let failures=[];
for(const c of coverage.coverage){if(!urn.test(c.concept_id))failures.push(`invalid concept id ${c.concept_id}`);for(const p of c.artifacts){if(!fs.existsSync(p))failures.push(`missing mapped artifact ${p}`);else{const d=JSON.parse(fs.readFileSync(p,'utf8'));const b=d['x-tsmm-semantic-binding'];if(!b)failures.push(`${p} missing x-tsmm-semantic-binding`);else if(!b.conceptIds.includes(c.concept_id))failures.push(`${p} does not declare ${c.concept_id}`);if(b&&b.authorityTransfer!==false)failures.push(`${p} must not transfer TSMM authority`);}}}
for(const m of mapping.mappings){for(const id of m.tsmm_concept_ids||[])if(!urn.test(id))failures.push(`mapping has invalid concept id ${id}`);if(m.schema_path&&!fs.existsSync(m.schema_path))failures.push(`mapping references missing ${m.schema_path}`)}
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
fs.mkdirSync('artifacts/portfolio',{recursive:true});
const evidence={repository:'trust-infrastructure-schemas',semanticAuthority:'trust-systems-meta-model',relationship:'normative-dependency',unknownConceptReferenceFormat:0,missingMappedArtifacts:0,authorityConflicts:0,status:'pass',evidenceGeneratedAt:new Date().toISOString()};
fs.writeFileSync('artifacts/portfolio/portfolio-alignment.json',JSON.stringify(evidence,null,2)+'\n');
console.log(`TSMM semantic alignment: PASS (${coverage.coverage.length} covered concepts)`);
