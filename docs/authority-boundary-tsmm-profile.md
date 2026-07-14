---
owner: maintainers
last_reviewed: 2026-05-05
applicable_version: v0.8.0
tier: 1
---

# Authority Boundary TSMM Profile

A TSMM authority graph describes who has authority, how authority is delegated, and where authority can be revoked. A TIS authority boundary constrains reliance on a specific portion of that graph.

## Required fields for TSMM-derived boundaries

TSMM-derived authority boundaries SHOULD include:

- `statement`;
- `authority_type`;
- `authoritative_party`;
- `authority_id`;
- `delegation_required`;
- `delegation_chain`;
- `revocation`;
- `scope`;
- `scope_constraints`;
- `relying_party_constraints`;
- `evidence_references`.

## Enforcement rule

The boundary constrains a decision. It does not make the decision by itself. Runtime action still requires a decision receipt when a relying party admits an effect.

## Optional delegation-lineage evidence

When authority is multi-hop or fan-out, include a reference to a `delegation/delegation-lineage.schema.json` artifact in the authority boundary's evidence references. The lineage artifact carries topology and attenuation evidence; the authority boundary continues to define the applicable governance boundary.
