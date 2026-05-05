# Trust Infrastructure Schemas

**Current release:** `v0.7.0`  
**Release theme:** Executable Governance Contract Pack and Validation Hardening  
**Last reviewed:** 2026-05-05

This repository publishes canonical **machine-readable trust artifacts** for operational digital trust infrastructure.

The repository is not only a JSON Schema catalog. It is an implementation-oriented **Open Trust Artifact Model** for expressing authority, evidence, assurance, conformance, registry state, policy references, and bounded trust decisions in a form that can be validated by machines and reviewed by humans.

## Why this repository exists

Most trust ecosystems still depend on websites, PDFs, and narrative governance. Those materials are useful for interpretation but weak as operational contracts. A verifier, registry, auditor, or relying party needs artifacts that can answer concrete questions:

- What claim is being made?
- Who has authority to make it?
- What evidence supports it?
- Which assurance level applies?
- Which controls were checked?
- What policy was applied?
- What decision was made?
- What can be audited later?

`trust-infrastructure-schemas` provides the artifact layer for those questions.

## What changed in v0.7.0

`v0.7.0` turns the repository into a stronger executable-governance contract pack.

Major changes:

- added first-class **decision receipt** schema, example, and documentation;
- hardened the **authority boundary** contract with structured delegation, scope, revocation, relying-party constraint, and evidence-reference metadata;
- added an **evidence bundle manifest** schema for composition examples;
- added a reusable **registry entry** schema;
- added a machine-readable **artifact coverage manifest**;
- expanded CI/local validation to cover all major artifact families;
- refreshed documentation, release notes, roadmap, and cross-repo implementation guidance;
- cleaned repository hygiene and release traceability.

## Canonical governance flow

The recommended cross-repo flow is now:

```text
Declaration -> Evidence Bundle -> Evaluation Envelope -> Decision Receipt -> Registry Entry
```

This makes the trust lifecycle auditable. A registry entry can point to a declaration. The declaration can point to evidence. The evidence can be evaluated. The evaluation can support a decision receipt. The decision receipt can record the policy, authority boundary, and relying-party result.

## Artifact families

### 1. Identity and authority artifacts

- Agent credential schemas: `credentials/agent/v1/README.md`
- DTG credential schemas: `credentials/dtg/v1/README.md`
- Reputation credential schemas: `credentials/reputation/v1/README.md`
- AIS-1 bonded agent profile: `profiles/ais1/schema.json` *(experimental)*
- Authority boundary schema: `governance/authority-boundary.schema.json`

### 2. Assurance and conformance artifacts

- Assurance levels: `assurance/assurance-levels.md`
- Assurance schema: `assurance/assurance.schema.json`
- Implementer declaration template: `conformance/IMPLEMENTER-DECLARATION.md`
- Conformance declaration schema: `conformance/conformance-declaration.schema.json`
- Evidence bundle manifest schema: `evidence/evidence-bundle-manifest.schema.json`
- Decision receipt schema: `decision/decision-receipt.schema.json`

### 3. OASF, policy, and evaluation artifacts

- OASF publication profile schema: `oasf/oasf-publication-profile.schema.json`
- OASF evaluation envelope schema: `oasf/oasf-evaluation-envelope.schema.json`
- OASF control crosswalk: `oasf/mappings/oasf-control-crosswalk.json`
- ODRL policy reference schema: `odrl/odrl-policy-reference.schema.json` *(experimental)*

### 4. Control framework artifacts

- Controls registry: `controls/controls.md`
- Controls data: `controls/controls.json`
- Controls schema: `controls/controls.schema.json`
- Control-to-assurance mapping: `controls/mappings/control-assurance-matrix.json`

### 5. Registry and ecosystem-state artifacts

- Registry schema: `registry/registry.schema.json`
- Registry entry schema: `registry/registry-entry.schema.json`
- Sample registry: `registry/sample-registry.json`
- Composition examples: `examples/composition/`

### 6. Artifact model metadata and validation coverage

- Trust artifact taxonomy: `model/trust-artifact-taxonomy.json`
- Taxonomy schema: `model/trust-artifact-taxonomy.schema.json`
- Artifact coverage manifest: `validation/artifact-coverage.json`
- Coverage schema: `validation/artifact-coverage.schema.json`
- Coverage documentation: `docs/validation-coverage.md`

## Normative and experimental status

This repository distinguishes between stable implementation contracts and experimental profiles.

| Status | Meaning |
|---|---|
| `normative` | Canonical source of semantics within this repository. |
| `implemented` | Supported schema or artifact family with validated examples. |
| `experimental` | Available for careful reuse but still under semantic pressure-testing. |
| `illustrative` | Example or simulation intended to show composition, not impose ecosystem policy. |

Assurance Levels AL1–AL4 are defined normatively in `assurance/assurance-levels.md`. Downstream repositories SHOULD reference this document instead of copying AL semantics.

## Ecosystem and related repositories

This repository is part of a broader assurance and governance stack:

- **`trust-infrastructure-schemas`** — canonical schema and artifact model layer.
- **DCAS / conformance tooling** — verifier workflows that evaluate conformance claims built on these contracts.
- **Domain baselines** — domain-specific requirement sets that produce declarations and evidence bundles.
- **TSMM-aligned models** — meta-models that describe entities, relationships, authority, delegation, evidence, and runtime governance.

See:

- `docs/cross-repo-governance.md`
- `docs/cross-repo-example.md`
- `docs/open-trust-artifact-model.md`
- `docs/artifact-taxonomy.md`

## Validation

Local validation requires Node.js and `ajv-cli`.

```bash
npm install
npm run check
```

Or, if `ajv` is already installed globally:

```bash
node tools/validate-conformance.js
node tools/lint-schemas.js
```

The validation surface includes all major artifact families, including credentials, conformance declarations, controls, assurance levels, registry simulation, OASF artifacts, ODRL references, AIS-1 examples, evidence bundle manifests, authority boundaries, artifact references, decision receipts, taxonomy metadata, and coverage manifests.

See `docs/validation-coverage.md`.

## Schema versioning policy

This repository follows semantic governance for schema evolution.

### Major versions

Major versions represent semantic compatibility boundaries. Breaking structural or validation changes require a new major version path or explicit migration guidance.

### Minor / patch releases

Within a compatible release line, the following changes are generally allowed:

- clarifying descriptions and documentation;
- adding optional properties;
- adding new schemas and examples;
- expanding artifact taxonomy entries;
- expanding validation coverage without invalidating existing examples.

Changes that MAY be breaking and SHOULD be treated cautiously:

- tightening validation constraints;
- changing required properties;
- altering semantic interpretation of existing fields;
- removing artifact fields or status values.

## Consumer guidance

Implementers SHOULD:

- pin to tagged releases for production use;
- avoid referencing `main` for production validation;
- use `$id` as the canonical identifier for published schema references;
- validate examples and manifests in CI;
- preserve decision receipts and evidence bundles where relying-party actions depend on trust artifacts;
- check authority-boundary and revocation metadata before relying on any artifact operationally.

## Documentation index

- Architecture: `docs/architecture.md`
- Trust model: `docs/TRUST-MODEL.md`
- Trust assumptions: `docs/TRUST-ASSUMPTIONS.md`
- Open Trust Artifact Model: `docs/open-trust-artifact-model.md`
- Artifact taxonomy: `docs/artifact-taxonomy.md`
- Cross-repo example: `docs/cross-repo-example.md`
- Cross-repo governance: `docs/cross-repo-governance.md`
- Decision receipts: `docs/decision-receipts.md`
- Validation coverage: `docs/validation-coverage.md`
- OASF artifact family: `docs/oasf-artifact-family.md`
- ODRL artifact family: `docs/odrl-artifact-family.md`
- AIS-1 schema profile: `docs/ais1-schema-profile.md`
- Identifier governance: `docs/identifier-governance.md`
- GitHub Pages: `docs/github-pages.md`
- Roadmap: `docs/roadmap.md`

## Upstream origin

This repository is forked from `https://github.com/archetech/schemas` and evolves the original schema structure toward operational trust infrastructure, assurance, and executable governance use cases.
