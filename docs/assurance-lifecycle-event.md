---
title: Assurance Lifecycle Event
parent: Artifact Contracts
grand_parent: Documentation
nav_order: 15
---
# Assurance Lifecycle Event

## Purpose

`assurance/assurance-lifecycle-event.schema.json` records how a detected change affects the continued usability of prior assurance evidence or conclusions.

The contract exists to make one cross-repository proposition machine-testable:

> A prior assurance conclusion must not silently remain current when a material or unknown change affects the conditions under which that conclusion was produced.

The contract does **not** define domain-specific materiality. TSPP, CTS, the Assurance Hub, or another authorized evaluator remains responsible for classifying impact within its own authority scope. TIS owns the portable serialization and validation boundary only. Canonical trust-system semantics remain TSMM authority.

## Core fields

| Field | Purpose |
|---|---|
| `event_id`, `event_type`, `observed_at` | Identify and order the lifecycle event. |
| `target` | Identify the assurance target or record being evaluated. |
| `previous_state_refs` | Preserve immutable references to the prior evidence/state. |
| `current_state_refs` | Reference observed current state where available. |
| `changed_dimensions` | Identify what changed without claiming universal materiality semantics. |
| `impact` | Record `non_material`, `material`, or `unknown`. |
| `disposition` | Record continued current status, staleness, reassessment, invalidation, supersession, or indeterminacy. |
| `reassessment_scope` | Bound the work required when reassessment is necessary. |
| `superseding_ref` | Preserve lineage when an assurance record is superseded. |
| `authority` | Attribute the classification to an actor and scope. |
| `rationale` | Preserve the judgment that led to the disposition. |
| `provenance` | Link the event to execution evidence where available. |

## Fail-safe invariants

Repository validation enforces these semantic boundaries in addition to JSON Schema structure:

1. `impact: unknown` cannot produce `disposition: current`.
2. `impact: material` cannot silently produce `disposition: current`.
3. `disposition: superseded` requires `superseding_ref`.
4. `disposition: reassessment_required` requires a non-empty `reassessment_scope`.

These rules deliberately allow a legitimate non-material change to preserve `current` assurance when the responsible evaluator records an attributable rationale.

## Examples

Valid fixtures:

- `assurance/examples/assurance-lifecycle-event.material-change.example.json`
- `assurance/examples/assurance-lifecycle-event.non-material.example.json`

Adversarial fixtures:

- `assurance/examples/invalid/assurance-lifecycle-event.unknown-current.invalid.json`
- `assurance/examples/invalid/assurance-lifecycle-event.material-current.invalid.json`
- `assurance/examples/invalid/assurance-lifecycle-event.superseded-missing-ref.invalid.json`

Run:

```bash
npm run assurance-lifecycle:check
```

The same gate is included in `npm run candidate:check`.

## Authority boundary

The schema carries a TSMM semantic projection to existing concepts including Assessment, TrustDecision, Revocation, Supersession, EvidenceArtifact, GovernanceAuthority, Scope, and Policy. `authorityTransfer` is explicitly false.

The contract does not make TIS authoritative for:

- what counts as a material security or privacy change;
- whether a conformance delta requires a partial or full rerun;
- the final combined assurance decision;
- canonical TSMM semantic definitions.

Those judgments remain with the responsible component or semantic authority.

## Version posture

This contract is being introduced for the TRQP Stack 2026.2 lifecycle work tracked in TIS issue #4. Its presence alone does not complete that work. TIS v0.15.0 is justified only if the contract is validated and actually consumed across the Stack as intended.
