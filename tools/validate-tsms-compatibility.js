const fs=require('fs');
const contract=JSON.parse(fs.readFileSync('model/tsms-compatibility.json','utf8'));
const fixtures=[
  JSON.parse(fs.readFileSync('validation/tsms/compatible-baseline.json','utf8')),
  JSON.parse(fs.readFileSync('validation/tsms/unknown-semantic-version.json','utf8'))
];
const failures=[];
const expectedRole='portable-machine-readable-contract-layer';
if(contract.role!==expectedRole) failures.push('TIS TSMS role changed');
if(contract.compatibilityPolicy.semanticAuthorityTransfer!==false) failures.push('TIS must not acquire TSMM semantic authority');
if(contract.compatibilityPolicy.silentCompatibilityForUnknownVersions!==false) failures.push('unknown versions must not silently pass');
for(const p of contract.goldenPathContracts||[]) if(!fs.existsSync(p)) failures.push('missing golden-path contract '+p);
function disposition(f){
  const known=f.semanticAuthorityRepository===contract.tsms.semanticAuthority.repository &&
    f.semanticAuthorityVersion===contract.tsms.semanticAuthority.version &&
    f.tisVersion===contract.repositoryVersion &&
    f.tgaVersion===contract.tsms.downstreamConsumer.version;
  return known ? contract.compatibilityPolicy.knownBaseline : contract.compatibilityPolicy.unknownVersion;
}
for(const f of fixtures){
  const actual=disposition(f);
  if(actual!==f.expectedDisposition) failures.push('fixture expected '+f.expectedDisposition+' got '+actual);
}
if(disposition(fixtures[1])==='compatible-candidate') failures.push('unknown semantic version was admitted');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
fs.mkdirSync('artifacts/validation',{recursive:true});
const evidence={repository:contract.repository,repositoryVersion:contract.repositoryVersion,profile:'tsms-compatibility',status:'pass',baseline:{tsmm:contract.tsms.semanticAuthority.version,tis:contract.repositoryVersion,tga:contract.tsms.downstreamConsumer.version},checks:{roleBoundary:'pass',semanticAuthorityTransfer:'rejected',knownBaseline:'compatible-candidate',unknownVersion:'unsupported',goldenPathContracts:'present'},limitations:['Candidate compatibility is repository evidence, not external certification or proof of remote repository state.'],executedAt:new Date().toISOString()};
fs.writeFileSync('artifacts/validation/tsms-compatibility.json',JSON.stringify(evidence,null,2)+'\n');
console.log('TSMS compatibility: PASS');
