# TSMM Runtime Governance Projection Profile

## Purpose

The TSMM runtime governance projection profile makes the boundary between TSMM and TIS explicit. TSMM remains the semantic source for actor, role, authority, policy, evidence, trust decision, lifecycle, and effect semantics. TIS provides the executable artifact contracts that package those semantics into machine-validatable references.

The profile is intentionally a projection, not a replacement meta-model. It records the TSMM runtime governance envelope that was evaluated and binds it to TIS authority boundaries, policy references, evidence bundles, status checks, decision receipts, and audit records.

## Governance chain

```text
TSMM runtime governance envelope
  -> TIS runtime governance projection
  -> authority boundary
  -> policy and evidence references
  -> revocation or status check
  -> decision receipt
  -> audit evidence
```

## Authority and scope

A projection does not create authority. It records how authority expressed in TSMM has been carried into TIS artifacts. Runtime authorization still requires current authority, policy, evidence, revocation/status checks, and a decision receipt.

## Validation

Schema: `profiles/tsmm/tsmm-runtime-governance-projection.schema.json`

Example: `profiles/tsmm/examples/runtime-governance-projection.example.json`
