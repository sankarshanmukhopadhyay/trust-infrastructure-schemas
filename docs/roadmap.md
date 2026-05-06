# Roadmap

**Last reviewed:** 2026-05-05  
**Current release:** `v0.7.0`

The roadmap prioritizes adoption, validation, and governance interoperability over unconstrained schema expansion.

## Delivered in v0.7.0

- Decision receipt schema, example, and documentation.
- Hardened authority-boundary schema.
- Evidence bundle manifest schema.
- Registry entry schema.
- Artifact coverage manifest and coverage schema.
- Expanded CI/local validation for all major artifact families.
- Refreshed README, documentation index, trust model, trust assumptions, taxonomy, cross-repo guidance, and release notes.
- Repository hygiene improvements, including `.gitignore` and local-artifact cleanup.

## Near-term backlog

### 1. Decision receipt interoperability profile

Define profiles for common relying-party contexts:

- registry discovery;
- credential acceptance;
- agent identity-state reliance;
- runtime delegation pre-check;
- conformance certification acceptance.

### 2. Evidence bundle integrity profile

Add optional manifest-level integrity controls, including canonicalization expectations, bundle hash calculation, signature metadata, and detached-proof references.

### 3. Authority boundary conformance tests

Add test fixtures that show valid and invalid authority boundaries, including revoked, stale, delegated, and out-of-scope examples.

### 4. Registry publication profile

Clarify the minimum artifact references that a registry entry should carry at AL2, AL3, and AL4.

### 5. Crosswalk hardening

Extend OASF and control crosswalk examples to carry confidence, equivalence type, and review status.

## Deferred

- New domain-specific credential families unless they are backed by a clear adoption use case.
- Runtime policy-engine implementation details.
- Cryptographic proof format standardization beyond reference and integrity metadata.

## vNext alignment priorities

- Promote the TSMM artifact mapping from candidate to supported after implementation feedback.
- Add transform tooling from TSMM graph references to TIS authority boundary and decision receipt drafts.
- Add richer negative examples for registry-publication-is-not-authorization cases.
