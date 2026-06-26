# Trust Task Runtime Assurance Profile

## Purpose

Trust Task artifacts record runtime execution evidence without collapsing governance semantics into a single success or failure flag. The v0.10.0 profile separates task lifecycle, decision outcome, and effect admission.

## State model

Lifecycle state uses the TSMM-aligned task evidence vocabulary:

```text
submitted, working, input-required, auth-required, completed, failed, canceled, rejected
```

Decision outcome is recorded separately:

```text
allow, deny, warn, review, downgrade, suspend
```

Effect admission is also separate:

```text
permitted, blocked, queued-for-review, restricted
```

This separation is important because a task may complete while producing a deny decision, or may be blocked because additional authorization is required.

## Artifact contracts

- `profiles/trust-tasks/trust-task-reference.schema.json`
- `profiles/trust-tasks/trust-task-manifest-reference.schema.json`
- `profiles/trust-tasks/trust-task-lifecycle-event.schema.json`
- `profiles/trust-tasks/trust-task-execution-receipt.schema.json`

## Assurance use

A Trust Task execution receipt should be included in the evidence bundle whenever a relying-party decision depends on runtime execution rather than only static registry state.
