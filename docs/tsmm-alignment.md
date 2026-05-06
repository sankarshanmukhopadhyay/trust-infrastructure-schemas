---
owner: maintainers
last_reviewed: 2026-05-05
applicable_version: v0.8.0
tier: 1
---

# TSMM Alignment

This repository is aligned with the Trust Systems Meta Model (TSMM) as the executable artifact contract layer. TSMM provides the semantic model. This repository provides schemas that implementers can validate, preserve, publish, and audit.

## Canonical relationship

```text
TSMM = semantic model and cross-ecosystem grammar
TIS  = canonical executable artifact contracts
```

## Artifact mapping

| TSMM concept | TIS artifact | Evidence produced |
| --- | --- | --- |
| Authority graph edge | Authority boundary | bounded authority, scope, delegation, revocation obligation |
| Evidence artifact | Artifact reference | hashable, fresh, typed evidence reference |
| Evidence bundle | Evidence bundle manifest | packaged evidence set |
| Assessment | Evaluation envelope | verifier result and controls checked |
| Trust decision | Decision receipt | policy-bound decision and operational effect |
| Trust registry | Registry entry | discoverable artifact chain |
| Assurance profile | AL1-AL4 assurance object | assurance rigor and control evidence |

## Machine-readable mapping

See `model/tsmm-artifact-mapping.json` and `model/tsmm-artifact-mapping.schema.json`.

## Governance rule

Registry publication makes artifacts discoverable. It does not grant runtime operating authority. A relying party must still evaluate policy, evidence, authority, revocation, assurance, and requested effect.
