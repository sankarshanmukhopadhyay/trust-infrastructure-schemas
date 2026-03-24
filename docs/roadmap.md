# Roadmap (Schedule-Free)

This roadmap captures the next logical increments for the **trust-infrastructure-schemas** repository as the canonical trust artifact layer. It intentionally does not include dates.

## Product direction

The repository should do three things well:

1. define the canonical machine-readable contracts that other repos can safely depend on
2. keep shared semantics stable, especially Assurance Levels and artifact identifiers
3. make cross-repo composition legible enough that implementers do not need tribal knowledge

## Delivered foundations

- Canonical Assurance Level model (`assurance/`)
- Control registry and mappings (`controls/`)
- Conformance declaration schema (`conformance/`)
- Registry simulation artifacts (`registry/`)
- Open Trust Artifact Model framing (`docs/open-trust-artifact-model.md`)
- OASF artifact family for publication profiles, evaluation envelopes, and crosswalks (`oasf/`)

## Next increments

### 1. Cross-repo composition pack

- show how a domain baseline declaration, an evidence bundle, and a verifier evaluation result compose end to end
- make control identifier handling robust across repos and namespaces
- publish an example registry entry that can carry downstream declarations without custom rewriting

**Outcome:** downstream repos can compose through the canonical artifact layer without inventing local glue code.

### 2. Stable identifier hygiene

- keep `$id` references aligned to the current repository name and release tags
- document identifier update rules for minor vs major releases
- make example artifacts useful as pinned references, not placeholder prose

**Outcome:** implementers can pin contracts with less ambiguity and less drift.

### 3. Artifact family expansion

- add more explicit governance and policy artifact contracts where reuse pressure is high
- keep those additions orthogonal so downstream repos can opt in without breaking older integrations

**Outcome:** the model grows by addition, not by semantic confusion.

## Tracking philosophy

This roadmap is a living artifact. Items may move as downstream repos harden. The governing principle is simple: this repository should stay boring, dependable, and composable.


### 4. A2A-bound trust artifact patterns

- document how A2A Agent Card extensions can carry trust-artifact references without forcing domain baselines into a shared local vocabulary
- identify which fields are generic reusable patterns, such as declaration references, evidence references, trust anchors, freshness, and authority boundaries
- wait to promote those patterns into normative schemas until reuse pressure is visible across more than one downstream baseline

**Outcome:** the canonical layer stays stable while remaining ready to generalize the right parts of A2A-bound trust descriptions.


### 5. OASF profile hardening

- observe reuse pressure across more downstream baselines before expanding OASF profile semantics
- keep optional fields optional unless at least two independent downstream repos need the same stronger contract
- publish cross-repo examples that show how OASF publication and evaluation artifacts flow through registry entries and declarations

**Outcome:** OASF support grows as shared infrastructure, not as a dumping ground for downstream local fields.
