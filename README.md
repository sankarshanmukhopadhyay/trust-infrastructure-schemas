# Trust Infrastructure Schemas

**Current release:** `v0.10.0`  
**Release theme:** TSMM-Aligned Runtime Assurance Artifact Contracts  
**Last reviewed:** 2026-06-26

This repository publishes canonical **machine-readable trust artifacts** for operational digital trust infrastructure. It is an implementation-oriented **Open Trust Artifact Model** for expressing authority, evidence, assurance, conformance, registry state, policy references, runtime workflow state, and bounded trust decisions in forms that can be validated by machines and reviewed by humans.

## Why this repository exists

Trust infrastructure fails when governance remains trapped in websites, PDFs, and informal operational practice. A verifier, registry, auditor, agent, or relying party needs executable artifacts that can answer:

- What claim is being made?
- Who had authority to make it?
- What scope, delegation, and revocation rules applied?
- What evidence supports the claim?
- Which assurance level and controls were checked?
- What runtime decision was made?
- What can be independently audited later?

`trust-infrastructure-schemas` provides the artifact contracts for those questions.

## What changed in v0.10.0

`v0.10.0` moves TIS from compatibility profiles to TSMM-aligned runtime assurance artifact contracts.

Major changes:

- added a TSMM runtime governance projection profile;
- added Trust Task reference, manifest-reference, lifecycle-event, and execution-receipt schemas;
- separated task lifecycle state, decision outcome, and effect admission;
- aligned VTI authorization evidence with implementation roles, capability grants, context scope, consumer kind, lifecycle state, and TSMM authority semantics;
- added OpenVTC relationship state normalization and task evidence mapping;
- added integrity-bound evidence bundle metadata;
- added VTI status-list reference and registry publication profiles;
- added TSMM crosswalks and a v0.10.0 runtime assurance composition pack.

## Canonical governance flow

```text
Model -> Authority Boundary -> Runtime Evidence -> Evaluation -> Decision Receipt -> Registry Entry
```

For DTG/OpenVTC/VTI workflows, the executable flow is:

```text
TSMM Runtime Governance Projection -> VTI Authority Evidence -> OpenVTC Task Evidence -> Trust Task Receipt -> Evidence Bundle -> Decision Receipt -> Registry Publication
```

## Artifact families

### Identity, credential, and authority artifacts

- DTG credential schemas: `credentials/dtg/v1/README.md`
- DTG compatibility profile: `docs/dtg-compatibility-profile.md`
- Agent credential schemas: `credentials/agent/v1/README.md`
- Reputation credential schemas: `credentials/reputation/v1/README.md`
- Authority boundary schema: `governance/authority-boundary.schema.json`

### Runtime profiles

- TSMM runtime governance projection profile: `docs/tsmm-runtime-governance-projection-profile.md`
- Trust Task runtime assurance profile: `docs/trust-task-runtime-assurance-profile.md`
- OpenVTC runtime profile: `docs/openvtc-runtime-profile.md`
- OpenVTC state normalization: `docs/openvtc-state-normalization.md`
- VTI runtime assurance profile: `docs/vti-runtime-assurance-profile.md`
- AIS-1 bonded agent profile: `profiles/ais1/schema.json` *(experimental)*

### Assurance and conformance artifacts

- Assurance levels: `assurance/assurance-levels.md`
- Conformance declaration schema: `conformance/conformance-declaration.schema.json`
- Evidence bundle manifest schema: `evidence/evidence-bundle-manifest.schema.json`
- Evidence bundle integrity profile: `docs/evidence-bundle-integrity-profile.md`
- Status and revocation evidence: `docs/status-and-revocation-evidence.md`
- Decision receipt schema: `decision/decision-receipt.schema.json`

### Registry and ecosystem-state artifacts

- Registry schema: `registry/registry.schema.json`
- Registry entry schema: `registry/registry-entry.schema.json`
- Registry publication profile: `registry/registry-publication-profile.schema.json`
- Trust artifact taxonomy: `model/trust-artifact-taxonomy.json`
- Cross-repo compatibility matrix: `model/cross-repo-compatibility-matrix.json`

## Upstream implementation references

TIS tracks these repositories as operational references:

- <https://github.com/OpenVTC/dtg-credentials>
- <https://github.com/OpenVTC/openvtc>
- <https://github.com/OpenVTC/verifiable-trust-infrastructure>

The tracking method is documented in `docs/dtg-openvtc-vti-interoperability.md` and expressed in `model/cross-repo-compatibility-matrix.json`.

## Validation

Local validation requires Node.js and `ajv-cli`.

```bash
npm install
npm run check
```

The validation pipeline checks schema examples, coverage references, release documentation, and local artifact hygiene.
