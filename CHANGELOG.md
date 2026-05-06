# Changelog

All notable changes to this repository are documented here.

## [v0.9.0] - 2026-05-06

### Added

- Added DTG VC envelope compatibility profile and DTG credential subject profile aligned to `OpenVTC/dtg-credentials`.
- Added DTG personhood membership and relationship-card overlay schemas with validated examples.
- Added OpenVTC runtime schemas for relationship state, VRC issuance receipts, configuration evidence, DIDComm routing evidence, and top-level runtime profile evidence.
- Added VTI runtime assurance schemas for VTA contexts, ACL entries, VTA authorization credentials, sealed transfer envelopes, DID template references, TEE attestation references, and provision-integration receipts.
- Added `model/cross-repo-compatibility-matrix.json` and schema to track upstream references, mappings, assurance implications, and drift-review triggers.
- Added cross-repo examples connecting DTG, OpenVTC, VTI, evidence bundles, and TIS decision receipts.

### Changed

- Refreshed README, documentation index, upstream reference documentation, and validation coverage for v0.9.0.
- Expanded validation tooling to include all new compatibility profile examples.
- Repositioned DTG schemas as both wire-compatibility profiles and stronger TIS semantic governance overlays.

### Fixed

- Cleaned stale current-release references across active documentation.
- Added explicit drift-review guidance for DTG, OpenVTC, and VTI upstream changes.

## [v0.7.0] - 2026-05-05

### Added

- Added `decision/decision-receipt.schema.json` as a first-class trust decision receipt artifact.
- Added `decision/examples/decision-receipt.example.json` and decision receipt documentation.
- Added `evidence/evidence-bundle-manifest.schema.json` for runnable evidence bundle composition examples.
- Added `registry/registry-entry.schema.json` for validating single registry entries used in composition packs.
- Added `validation/artifact-coverage.json` and `validation/artifact-coverage.schema.json` as machine-readable validation coverage evidence.
- Added `docs/decision-receipts.md` and `docs/validation-coverage.md`.
- Added `package.json` with local validation scripts.
- Added `.gitignore` for local artifact hygiene.

### Changed

- Expanded `governance/authority-boundary.schema.json` with structured authority type, authority ID, delegation chain, revocation metadata, scope constraints, relying-party constraints, and evidence references.
- Updated artifact reference role vocabulary to include `decision` and `receipt` roles.
- Updated conformance declaration scope handling so composition examples can reference profiles, policies, and decision artifacts in addition to credential schemas.
- Updated composition examples to show the full declaration → evidence → evaluation → decision → registry flow.
- Updated `registry/sample-registry.json` to include decision receipt references.
- Updated `model/trust-artifact-taxonomy.json` for v0.7.0 artifact families and validation coverage.
- Refreshed README, documentation index, architecture, trust model, trust assumptions, artifact taxonomy, roadmap, and cross-repo governance documents.
- Expanded `tools/validate-conformance.js` and GitHub Actions validation across all major artifact families.
- Expanded `tools/lint-schemas.js` to check release documentation, schema namespace hygiene, coverage references, and local-only artifacts.

### Fixed

- Removed stale local `.DS_Store` artifact.
- Backfilled missing `docs/releases/v0.6.0.md` release documentation.
- Cleaned release traceability by aligning `VERSION`, README, docs, taxonomy, and release notes around `v0.7.0`.

## [v0.6.0] - 2026-04-07

### Added

- Introduced OASF publication profile and evaluation envelope schemas.
- Added OASF control crosswalk artifacts.
- Added ODRL policy reference schema and sample.
- Added AIS-1 experimental profile materials.
- Added reusable artifact-reference and authority-boundary contracts.
- Added cross-repo composition examples connecting baseline declarations, evidence, evaluation, and registry publication.

### Changed

- Repositioned the repository as an Open Trust Artifact Model rather than a loose schema catalog.
- Expanded registry examples to support OASF-aware and ODRL-aware references.

## [v0.5.0] - 2026-03-25

### Added

- Added cross-repo governance and composition documentation.
- Added expanded schema governance and identifier guidance.

## [v0.4.0] - 2026-03-10

### Added

- Added assurance-level and control mapping materials.

## [v0.3.0] - 2026-02-20

### Added

- Added conformance declaration schema and implementer declaration template.

## [v0.2.1] - 2026-02-01

### Changed

- Refined schema documentation and example validation practices.
