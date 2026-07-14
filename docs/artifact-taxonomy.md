# Artifact Taxonomy

**Last reviewed:** 2026-05-05  
**Current release:** `v0.9.0`

The artifact taxonomy is the navigation layer for the Open Trust Artifact Model. It gives implementers a stable overview of which artifact families exist, where they live, and whether they are normative, implemented, experimental, or illustrative.

## Machine-readable source

- Taxonomy: `model/trust-artifact-taxonomy.json`
- Schema: `model/trust-artifact-taxonomy.schema.json`

## Status semantics

| Status | Meaning |
|---|---|
| `normative` | Canonical source of semantics for this repository. |
| `implemented` | Schema or artifact family with validated examples and documentation. |
| `experimental` | Validated artifact intended for careful cross-repo reuse while semantics mature. |
| `illustrative` | Example pattern or simulation, not an ecosystem mandate. |

## v0.7.0 taxonomy additions

This release adds or elevates:

- decision receipt artifacts;
- evidence bundle manifests;
- registry entry schema;
- validation coverage manifest;
- richer authority boundary metadata;
- validation coverage across OASF, ODRL, AIS-1, taxonomy, registry, composition, and decision examples.

## Implementation guidance

Consumers should use the taxonomy to decide which artifacts are appropriate for their assurance flow. A domain baseline may only need conformance declarations and evidence manifests. A relying party should also preserve decision receipts. A public registry should publish registry entries referencing declarations, evidence, evaluations, and relevant decisions.

## Delegation lineage artifacts

A delegation lineage is an authority artifact that records the ordered or branching derivation of authority from an originating principal. Its paired verification artifact records chain-level checks and an effect-admission result. It complements, rather than replaces, an authority boundary.
