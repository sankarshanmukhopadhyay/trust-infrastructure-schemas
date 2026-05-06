# Cross-Repo Governance

**Last reviewed:** 2026-05-05  
**Current release:** `v0.9.0`

This repository is designed to interoperate with downstream assurance, conformance, registry, baseline, and meta-model repositories. Its role is to provide canonical artifact contracts, not to own every domain policy.

## Authority and scope

| Layer | Responsibility |
|---|---|
| This repository | Defines reusable artifact contracts and validation expectations. |
| Domain baseline repositories | Define domain-specific requirements and evidence expectations. |
| Evaluator repositories | Execute assessments and publish evaluation envelopes. |
| Registry repositories | Publish discoverable state and references. |
| Relying-party systems | Apply policy and produce or preserve decision receipts. |

## Canonical ownership

- AL1–AL4 semantics are owned by `assurance/assurance-levels.md`.
- Artifact shape is owned by schema files in this repository.
- Domain-specific control interpretation belongs in downstream baseline repositories.
- Runtime authorization belongs to systems that evaluate delegation, policy, and revocation at the time of action.

## Delegation principle

Publication is not delegation. Discovery is not authorization. Evaluation is not unlimited reliance. A decision receipt is bounded evidence of a decision under a policy and authority boundary.

## Evidence principle

Downstream repositories SHOULD produce artifacts that can be referenced by the canonical artifact layer:

- declarations;
- evidence bundle manifests;
- evaluation envelopes;
- decision receipts;
- registry entries.

## Revocation principle

Any operational reliance flow SHOULD preserve enough metadata to check revocation or status before reuse. Authority-boundary metadata and decision receipts are the primary carriers for this requirement in `v0.7.0`.

## v0.8.0 TSMM alignment

The cross-repo governance model now treats TSMM as the semantic model layer and this repository as the executable artifact contract layer. Cross-repo implementations SHOULD preserve TSMM concept references in TIS artifacts where those references support auditability, conformance, or interoperability.
