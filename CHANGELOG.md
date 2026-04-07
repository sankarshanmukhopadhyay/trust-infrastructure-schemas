# Changelog

## [Unreleased]

### Added
- Added `common/artifact-reference.schema.json` and example payloads to normalize reusable references to declarations, evidence bundles, evaluation results, policies, and bindings.
- Added `governance/authority-boundary.schema.json` and example payloads to carry explicit scope, revocation, and delegation-boundary metadata.
- Added `examples/composition/` as a machine-readable cross-repo composition pack covering declaration, evidence bundle, evaluator output, and registry publication.
- Added `docs/identifier-governance.md` to document stable `$id` rules and release-pinning expectations.

### Changed
- Refreshed stale and placeholder schema `$id` values so canonical identifiers align to `trust-infrastructure-schemas` at `v0.6.0`.
- Extended conformance, registry, OASF, and AIS-1 artifacts to carry reusable artifact references and explicit authority-boundary metadata.
- Refreshed README, docs index, taxonomy metadata, roadmap, and sample artifacts to match the completed roadmap increment.

### Added
- Added `odrl/odrl-policy-reference.schema.json` and `odrl/samples/odrl-policy-reference.json` as the experimental ODRL artifact family for bounded policy publication.
- Added `docs/odrl-artifact-family.md` to document the architectural boundary for ODRL in the canonical trust artifact layer.

### Changed
- Refreshed README, docs index, taxonomy metadata, registry schema, and sample registry to carry optional ODRL policy references.

## v0.6.0 - 2026-03-31

### Added
- Experimental ODRL policy-reference artifact family.
- Optional registry support for policy artifacts that point at ODRL-compatible policy objects.

### Changed
- Clarified that this repository carries ODRL artifacts but does not evaluate ODRL semantics or claim that publication equals enforcement.


### Added
- Added `docs/a2a-bound-trust-artifacts.md` to record how the canonical schema layer should treat reusable patterns exposed by ANAB-over-A2A.
- Added `oasf/oasf-publication-profile.schema.json` and `oasf/oasf-evaluation-envelope.schema.json` as canonical OASF-shaped carrier contracts.
- Added `oasf/mappings/oasf-control-crosswalk.json` and its schema to normalize cross-repo OASF control mappings.
- Added `docs/oasf-artifact-family.md` to document the OASF artifact family and its architectural boundary.

### Changed
- Refreshed README, cross-repo composition, roadmap, taxonomy, and registry sample artifacts to account for A2A-bound trust descriptions.
- Extended conformance and registry artifacts so they can carry optional OASF publication, evaluation, evidence, and semantic-binding references.
- Extended validation tooling to check OASF schemas and example payloads.


## v0.5.1 - 2026-03-24

### Added
- Added `docs/roadmap.md` to record the next composition-focused increments for the canonical trust artifact layer.
- Added `docs/cross-repo-example.md` to explain how OTAM, ANAB, and DCAS compose end to end.
- Expanded `registry/sample-registry.json` with a downstream baseline example carrying `ANAGB-*` control identifiers.

### Changed
- Generalized generic conformance and registry artifacts to accept namespaced control identifiers beyond the local `SC-*` catalog.
- Refreshed `$id` references so published schemas point at `trust-infrastructure-schemas` instead of the retired `schemas` path.
- Refreshed README freshness metadata and removed stray `.DS_Store` artifacts from the archive.

## v0.5.0 - 2026-03-14

### Added
- Added an explicit **Open Trust Artifact Model** framing for the repository.
- Added `docs/open-trust-artifact-model.md` to define the repository as an artifact model, not only a schema collection.
- Added `docs/artifact-taxonomy.md` to document artifact classes across identity, governance, assurance, controls, and registry state.
- Added `model/trust-artifact-taxonomy.json` as a machine-readable taxonomy of trust artifacts.
- Added `model/trust-artifact-taxonomy.schema.json` to validate the taxonomy file.

### Changed
- Repositioned the README around operational digital trust infrastructure.
- Updated documentation index and architecture narrative to reflect the trust-artifact-layer concept.
- Clarified how this repository composes with TSMM-style meta-model work, DCAS, and downstream baselines.
- Removed stray `.DS_Store` files from the repository archive.

## v0.4.0 - 2026-03-05
- Published release v0.4.0.
- Added assurance, controls, conformance, and registry documentation and schemas.

## v0.3.0 - 2026-03-04
- Added ecosystem interoperability and architecture documentation.

## v0.2.1 - 2026-03-03
- Documentation and workflow hygiene updates.
