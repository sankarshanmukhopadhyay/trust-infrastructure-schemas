# Changelog

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
