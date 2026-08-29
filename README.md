# Trust Infrastructure Schemas

> **Flagship repository**  
> **Role:** `portable-machine-readable-contract-layer`  
> **Current version:** `v0.14.1`  
> **Canonical validation:** `make validate`  
> **Authority:** [`governance/repository-authority.yaml`](governance/repository-authority.yaml)  
> **Start here:** [`docs/adoption.md`](docs/adoption.md)


**Current release:** `v0.14.1`  
**Release theme:** Publication repair, zero-install validation, and scope discipline  
**Last reviewed:** 2026-08-20

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

## TIS in the Trust Systems Modelling Stack (TSMS)

TIS is the **portable machine-readable contract layer** between TSMM canonical semantics and TGA executable governance artifacts. The current candidate baseline is **TSMM v0.24.0 / TIS v0.14.1 / TGA v0.12.1**. Unknown versions are not silently treated as compatible.

- [TSMS portable contract guide](docs/tsms.md)
- Machine-readable compatibility declaration: `model/tsms-compatibility.json`
- Validation: `npm run tsms:check`
- Governing workstream: [#7](https://github.com/sankarshanmukhopadhyay/trust-infrastructure-schemas/issues/7)


## What changed in v0.14.1

`v0.14.1` repairs the publication and validation architecture and establishes a stricter repository boundary.

Major changes:

- candidate validation no longer installs npm packages or depends on registry availability;
- GitHub Pages treats root `index.md` plus `docs/**/*.md` as the canonical publication surface;
- internal documentation links are resolved by Jekyll rather than emitted as `.md` URLs;
- generated-site assurance checks for missing HTML, unresolved Markdown links, and missing stylesheet references;
- TIS Core is explicitly separated from ecosystem-specific adapter profiles and repository assurance evidence;
- new schemas must pass portability, authority, non-duplication, assurance-value, and lifecycle admission tests.

See [`docs/repository-scope.md`](docs/repository-scope.md).

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

Local validation requires Node.js. Candidate validation has no npm package-install dependency.

```bash
npm run candidate:check
```

The validation pipeline checks schema examples, coverage references, release documentation, and local artifact hygiene.

## Delegation lineage

Version 0.11.0 adds portable schemas for chained and fan-out delegation. Implementers can verify originating-principal continuity, scope attenuation, trust-domain transitions, branch convergence, and revocation propagation before admitting an effect. Start with [`delegation/README.md`](delegation/README.md).
