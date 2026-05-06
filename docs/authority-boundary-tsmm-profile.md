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
