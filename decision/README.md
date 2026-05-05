# Decision Receipts

**Status:** Experimental governance contract introduced in `v0.7.0`.

Decision receipts record the point at which a relying party, verifier, registry, evaluator, or policy engine turns published trust artifacts into an operational decision.

They are intentionally separate from logs. A log says that something happened. A decision receipt says what was evaluated, which policy was applied, what authority boundary controlled the decision, what the result was, and what evidence can be inspected later.

## Files

- `decision-receipt.schema.json` — canonical decision receipt schema.
- `examples/decision-receipt.example.json` — runnable example used by CI.

## Governance semantics

A decision receipt SHOULD be produced when an implementation makes or records a trust decision using one or more schema artifacts from this repository.

A decision receipt MUST NOT be treated as a universal authorization token. It is scoped evidence of a decision made by a specific decision maker under a specific policy and authority boundary.

## Minimum decision lifecycle

1. Identify the subject.
2. Resolve the applicable policy.
3. Gather evaluated artifacts.
4. Check evidence freshness and integrity.
5. Apply the authority boundary.
6. Produce the decision result.
7. Preserve the receipt as auditable evidence.

## Cross-repo role

Decision receipts are designed to compose with:

- conformance declarations
- evidence bundle manifests
- OASF publication profiles
- OASF evaluation envelopes
- registry entries
- ODRL policy references
- AIS-1 bonded-agent profiles

This turns the canonical flow into:

```text
Declaration -> Evidence -> Evaluation -> Decision Receipt -> Registry Publication
```
