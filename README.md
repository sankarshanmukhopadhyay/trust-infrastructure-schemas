# Trust Infrastructure Schemas

**Current release:** `v0.9.0`  
**Release theme:** DTG/OpenVTC/VTI Compatibility Profiles and Runtime Trust Artifact Alignment  
**Last reviewed:** 2026-05-06

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

## What changed in v0.9.0

`v0.9.0` moves TIS from related-work awareness to executable cross-repo interoperability with DTG Credentials, OpenVTC, and Verifiable Trust Infrastructure.

Major changes:

- added a DTG VC envelope compatibility profile aligned to <https://github.com/OpenVTC/dtg-credentials>;
- added DTG personhood and relationship-card overlay profiles;
- added OpenVTC runtime evidence profiles for relationship state, VRC issuance, configuration evidence, and DIDComm routing;
- added VTI runtime assurance profiles for VTA contexts, ACL entries, authorization credentials, sealed transfer, DID templates, TEE attestation, and provision-integration receipts;
- added a machine-readable cross-repo compatibility matrix and drift-review process;
- refreshed stale release references and documentation navigation;
- expanded validation coverage across all new examples.

## Canonical governance flow

```text
Model -> Authority Boundary -> Runtime Evidence -> Evaluation -> Decision Receipt -> Registry Entry
```

For DTG/OpenVTC/VTI workflows, the executable flow is:

```text
DTG Credential -> OpenVTC Relationship/VRC Evidence -> VTI Authority Evidence -> TIS Decision Receipt -> Registry Entry
```

## Artifact families

### Identity, credential, and authority artifacts

- DTG credential schemas: `credentials/dtg/v1/README.md`
- DTG compatibility profile: `docs/dtg-compatibility-profile.md`
- Agent credential schemas: `credentials/agent/v1/README.md`
- Reputation credential schemas: `credentials/reputation/v1/README.md`
- Authority boundary schema: `governance/authority-boundary.schema.json`

### Runtime profiles

- OpenVTC runtime profile: `docs/openvtc-runtime-profile.md`
- VTI runtime assurance profile: `docs/vti-runtime-assurance-profile.md`
- AIS-1 bonded agent profile: `profiles/ais1/schema.json` *(experimental)*

### Assurance and conformance artifacts

- Assurance levels: `assurance/assurance-levels.md`
- Conformance declaration schema: `conformance/conformance-declaration.schema.json`
- Evidence bundle manifest schema: `evidence/evidence-bundle-manifest.schema.json`
- Decision receipt schema: `decision/decision-receipt.schema.json`

### Registry and ecosystem-state artifacts

- Registry schema: `registry/registry.schema.json`
- Registry entry schema: `registry/registry-entry.schema.json`
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
