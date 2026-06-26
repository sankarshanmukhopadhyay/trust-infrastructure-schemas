# TSMM Trust Task Evidence Crosswalk

## Purpose

This crosswalk maps TSMM task evidence semantics into TIS Trust Task runtime assurance artifacts.

| TSMM dimension | TIS field |
|---|---|
| Task identity | `task_id`, `task_ref` |
| Task lifecycle | `lifecycle_state` |
| Actor | `actor` |
| Subject | `subject_ref` |
| Authority context | `authority_context_ref` |
| Policy | `policy_refs` |
| Evidence | `evidence_refs` |
| Decision | `decision_outcome` |
| Effect admission | `effect_admission` |
| Auditability | `audit_refs` |

## Anti-pattern avoided

Do not treat `completed` as equivalent to `allow`. Lifecycle completion and authorization result are separate governance facts.
