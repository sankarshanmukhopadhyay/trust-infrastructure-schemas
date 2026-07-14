# Delegation Lineage

This directory defines portable contracts for proving how delegated authority resolves from a current actor to an originating principal.

## Start here

- Validate `examples/valid-linear-lineage.json` against `delegation-lineage.schema.json`.
- Use `delegation-lineage-verification.schema.json` to record chain-level checks.
- Use fan-out topology when concurrent branches later contribute to one effect.

The schema is additive. Existing authority-boundary users can reference a lineage artifact through `evidence_references` without changing their existing payloads.
