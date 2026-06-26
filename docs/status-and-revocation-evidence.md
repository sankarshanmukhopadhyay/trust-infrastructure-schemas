# Status and Revocation Evidence

## Purpose

v0.10.0 introduces a status-list reference profile so revocation, suspension, expiry, and activation checks can be carried as runtime assurance evidence.

## Supported purposes

```text
revocation, suspension, expiry, activation, other
```

## Supported status values

```text
active, suspended, revoked, expired, unknown
```

## Governance use

A status reference should be included whenever an effect decision depends on current lifecycle state. Registry discovery, ACL membership, authorization credentials, and task execution receipts should not be treated as current without a corresponding status or revocation check where the policy requires freshness.

## Validation

Schema: `profiles/vti/status-list-reference.schema.json`

Example: `profiles/vti/examples/status-list-reference.example.json`
