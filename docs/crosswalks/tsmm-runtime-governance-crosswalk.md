# TSMM Runtime Governance Crosswalk

## Purpose

This crosswalk explains how TSMM runtime governance concepts are projected into TIS artifact contracts in v0.10.0.

| TSMM concept | TIS v0.10.0 artifact |
|---|---|
| Actor | `actor_ref` in runtime governance projection; `actor` in Trust Task receipts |
| Requested effect | `requested_effect_ref`; `effect_admission` |
| Trust boundary | `trust_boundary_ref`; authority boundary references |
| Authority basis | `governance/authority-boundary.schema.json`; VTI ACL evidence |
| Delegation chain | `delegation_chain_refs` |
| Policy references | `policy_refs` |
| Evidence references | evidence bundle manifest and Trust Task evidence refs |
| Revocation check | VTI status-list reference |
| Decision | decision receipt |
| Audit | audit refs across projection and execution receipt |

## Design rule

TIS does not redefine TSMM semantics. TIS records machine-verifiable artifacts that preserve and carry those semantics into operational trust infrastructure.
