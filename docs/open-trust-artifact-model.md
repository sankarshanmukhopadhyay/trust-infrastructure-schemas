# Open Trust Artifact Model

**Last reviewed:** 2026-05-05  
**Current release:** `v0.9.0`

The Open Trust Artifact Model is the repository’s organizing model for executable governance. It defines the machine-readable artifacts needed to move from narrative trust frameworks to verifiable trust infrastructure.

## Core proposition

Trust infrastructure needs more than identifiers and credentials. It needs artifacts that can express:

- identity and authority;
- evidence and assurance;
- policy and constraints;
- conformance and control mappings;
- registry and ecosystem state;
- decision outcomes and auditability.

The model treats these artifacts as composable governance contracts.

## Artifact classes

| Class | Purpose | Representative artifacts |
|---|---|---|
| Identity and authority | Identify actors and authority-bearing entities | DTG, agent, reputation, AIS-1, authority boundary |
| Governance and policy | Express policy references and control-plane limits | ODRL references, trust assumptions, authority boundaries |
| Assurance and conformance | Capture claims, evidence, evaluations, and assurance levels | conformance declarations, evidence manifests, OASF envelopes |
| Decision evidence | Record policy-bound decisions and reliance outcomes | decision receipts |
| Controls and mappings | Define requirements and crosswalks | controls registry, assurance matrix, OASF crosswalk |
| Registry state | Publish discoverable trust facts | registry entries and registry simulation |
| Model metadata | Explain and validate the artifact catalog | taxonomy and coverage manifest |

## Canonical lifecycle

```text
Declare -> Evidence -> Evaluate -> Decide -> Publish -> Audit
```

The `v0.7.0` release makes this lifecycle explicit:

1. `conformance/conformance-declaration.schema.json` records the claim.
2. `evidence/evidence-bundle-manifest.schema.json` records supporting artifacts.
3. `oasf/oasf-evaluation-envelope.schema.json` records evaluation results.
4. `decision/decision-receipt.schema.json` records the reliance decision.
5. `registry/registry-entry.schema.json` and `registry/registry.schema.json` publish discoverable state.
6. `validation/artifact-coverage.json` records which repository artifacts are covered by validation.

## Authority is bounded

No artifact in this repository should be interpreted as unlimited trust. The authority boundary model requires implementers to state what is authoritative, what is out of scope, whether delegation is required, and how revocation or status should be checked.

## Evidence is inspectable

Evidence is represented through reusable artifact references, evidence bundle manifests, evaluation envelopes, and decision receipts. Implementers should preserve these artifacts because they support auditability, conformance review, and relying-party accountability.

## Experimental profiles

Experimental artifacts, such as the AIS-1 profile and ODRL policy reference, are included to support cross-repo normalization. Experimental status means that the artifact is validated and documented but still subject to semantic refinement.

## TSMM alignment role

The Open Trust Artifact Model is the executable artifact layer for TSMM-aligned governance. TSMM supplies semantic meaning; this model supplies schema-constrained artifacts that can be validated, published, preserved, and audited.
