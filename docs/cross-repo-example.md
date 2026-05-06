# Cross-Repo Composition Example

**Last reviewed:** 2026-05-05  
**Release:** `v0.7.0`

The composition examples show how a domain baseline, evidence bundle, evaluator output, relying-party decision, and registry publication can use the same canonical artifact layer.

## Example files

| Step | File | Schema |
|---|---|---|
| 1. Declaration | `examples/composition/domain-baseline-declaration.example.json` | `conformance/conformance-declaration.schema.json` |
| 2. Evidence | `examples/composition/evidence-bundle-manifest.example.json` | `evidence/evidence-bundle-manifest.schema.json` |
| 3. Evaluation | `examples/composition/verifier-evaluation.example.json` | `oasf/oasf-evaluation-envelope.schema.json` |
| 4. Decision | `decision/examples/decision-receipt.example.json` | `decision/decision-receipt.schema.json` |
| 5. Registry | `examples/composition/registry-entry.example.json` | `registry/registry-entry.schema.json` |

## Flow

```text
Domain baseline declaration
        ↓
Evidence bundle manifest
        ↓
Verifier evaluation envelope
        ↓
Decision receipt
        ↓
Registry entry
```

## Why this matters

The flow separates five governance functions that are often collapsed into one narrative claim:

1. **Declaration** says what the implementer claims.
2. **Evidence** lists the artifacts supporting the claim.
3. **Evaluation** records the verifier’s assessment.
4. **Decision** records the relying-party or verifier outcome under a policy.
5. **Registry** publishes discoverable state and references.

This separation improves auditability because each step has its own artifact and authority boundary.

## Authority and delegation

The composition example is deliberately conservative. The registry entry makes the agent discoverable. The decision receipt may accept identity-state reliance. Neither artifact automatically grants runtime task delegation. Runtime delegation remains a separate control-plane decision.

## Validation

The examples are validated by:

```bash
node tools/validate-conformance.js
```

Coverage is recorded in `validation/artifact-coverage.json`.

## v0.8.0 TSMM-aligned composition

A full TSMM-aligned runtime decision composition is available at `examples/composition/tsmm-aligned/`. It demonstrates authority boundary, evidence bundle, evaluation envelope, decision receipt, and registry entry artifacts connected into one audit chain.
