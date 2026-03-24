## Trust Infrastructure Schemas (Release v0.5.0)

This repository publishes the canonical **machine-readable artifacts** for operational digital trust infrastructure.

**Last reviewed:** 2026-03-24

## Positioning

Most trust ecosystems stop at narrative governance. This repository focuses on the harder layer: the structured artifacts needed to express, exchange, validate, and automate trust decisions.

In practice, this repository now positions itself as an **Open Trust Artifact Model** implemented through schemas.

That means the primary product is not a loose collection of JSON schemas. The primary product is a model of the artifacts required to operate trust systems, including:

- identity and authority artifacts
- governance and policy artifacts
- assurance and conformance artifacts
- ecosystem state and registry artifacts

## Upstream origin

This repository is forked from https://github.com/archetech/schemas.
The project builds upon the original structure while evolving schema governance and validation practices to support Archon and broader trust-infrastructure use cases.

## Artifact families

The repository is organized around the artifact types that appear in real trust ecosystems.

### 1. Identity and authority artifacts

- Agent credential schemas: `credentials/agent/v1/README.md`
- DTG credential schemas: `credentials/dtg/v1/README.md`
- Reputation credential schemas: `credentials/reputation/v1/README.md`

### 2. Assurance and conformance artifacts

- Assurance levels: `assurance/assurance-levels.md`
- Assurance schema: `assurance/assurance.schema.json`
- Implementer declaration template: `conformance/IMPLEMENTER-DECLARATION.md`
- Conformance declaration schema: `conformance/conformance-declaration.schema.json`

### 3. Control framework artifacts

- Controls registry: `controls/controls.md`
- Controls data: `controls/controls.json`
- Controls schema: `controls/controls.schema.json`
- Control-to-assurance mapping: `controls/mappings/control-assurance-matrix.json`

### 4. Ecosystem state artifacts

- Registry schema: `registry/registry.schema.json`
- Sample registry: `registry/sample-registry.json`

### 5. Artifact model metadata

- Trust artifact taxonomy: `model/trust-artifact-taxonomy.json`
- Taxonomy schema: `model/trust-artifact-taxonomy.schema.json`
- Model overview: `docs/open-trust-artifact-model.md`

## Ecosystem and related repositories

This repository is part of a broader assurance and governance stack:

- **`schemas` (this repo):** the schema registry and artifact model for operational trust systems.
- **DCAS (`dtg-conformance-assurance`):** the assurance method and verifier workflow that evaluates conformance claims built on these contracts.
- **Domain baselines (example: `agent-name-assurance-baseline`):** normative requirements for specific domains that produce declarations and evidence bundles evaluable via DCAS.
- **TSMM-aligned work:** conceptual models that define entities, relationships, and governance semantics across the trust stack.

**Canonical ownership:** Assurance Levels (AL1–AL4) are defined *normatively* in `assurance/assurance-levels.md`. Downstream repos MUST reference this document instead of copying AL semantics.

See also: `docs/cross-repo-governance.md`.
- Cross-repo example pack: `docs/cross-repo-example.md`
- A2A-bound trust artifact note: `docs/a2a-bound-trust-artifacts.md`
- Roadmap: `docs/roadmap.md`


## ANAB-over-A2A impact

ANAB now publishes a detailed A2A description extension for Agent Cards. That does not create an immediate schema migration requirement here, but it does create a structural question for the canonical artifact layer: which parts of that binding are domain-specific, and which parts are reusable trust-artifact patterns that should eventually be standardized across ecosystems?

This repo now records that position in `docs/a2a-bound-trust-artifacts.md`.

## Why this shift matters

Identity ecosystems standardized credentials. Trust ecosystems also need standardized **assurance artifacts**, **conformance artifacts**, **control artifacts**, and **registry artifacts**.

This repository exists to provide those machine-readable primitives so that trust frameworks can move from narrative governance to **verifiable and automatable trust infrastructure**.

## Schema versioning policy

This repository follows semantic governance for schema evolution.

### Major versions (`vN/`)

- Represent semantic compatibility boundaries.
- Breaking structural or validation changes require a new `v(N+1)/` directory.

### Minor / patch releases

Within a major version directory, the following changes are generally allowed:

- clarify descriptions and documentation
- add optional properties
- add new schemas and examples
- extend the artifact taxonomy without invalidating existing payloads

Changes that MAY be breaking and SHOULD be treated cautiously:

- tightening validation constraints
- changing required properties
- altering semantic interpretation of existing fields

When in doubt, changes that invalidate previously valid payloads MUST be treated as breaking.

### Consumer guidance

Implementers SHOULD:

- pin to tagged releases for production use
- avoid referencing `main` for production validation
- use `$id` as the canonical identifier for published schema references
- treat the artifact taxonomy as the navigation layer for implementation and governance alignment

## Tools

Reference scripts for implementers and CI parity:

- `tools/validate-conformance.js` — validate conformance, controls, assurance, and registry simulation artifacts via AJV CLI
- `tools/lint-schemas.js` — lightweight schema linting for identity and documentation hygiene

## Registry simulation (non-normative)

Example artifacts showing how an ecosystem might index implementers and their declarations:

- `registry/sample-registry.json`
- `registry/registry.schema.json`

## Ecosystem interoperability

See `docs/ecosystem-interoperability.md`, `docs/architecture.md`, and `docs/open-trust-artifact-model.md` for how this repository composes with DTG Labs upstream work and adjacent trust-stack efforts.
