---
owner: maintainers
last_reviewed: 2026-05-05
applicable_version: v0.8.0
tier: 1
---

# TSMM Executable Artifact Walkthrough

This walkthrough shows an end-to-end cross-repo artifact chain aligned with TSMM.

## Artifact chain

| Step | Artifact | Purpose |
| --- | --- | --- |
| 1 | `examples/composition/tsmm-aligned/01-authority-boundary.example.json` | Constrains authority, delegation, scope, and revocation. |
| 2 | `examples/composition/tsmm-aligned/02-evidence-bundle-manifest.example.json` | Packages evidence for validation and audit. |
| 3 | `examples/composition/tsmm-aligned/03-evaluation-envelope.example.json` | Records evaluator result and controls checked. |
| 4 | `examples/composition/tsmm-aligned/04-decision-receipt.example.json` | Records the relying-party decision and admitted/prohibited effects. |
| 5 | `examples/composition/tsmm-aligned/05-registry-entry.example.json` | Publishes discoverable artifact state. |

## Decision result

The example allows `submit-status-update` and prohibits `initiate-payment`, `modify-registry-entry`, and `delegate-onward`. This is the core executable-governance distinction: the artifact chain admits one bounded effect while preserving evidence for why other effects remain outside scope.

## Validation

Run:

```bash
npm install
npm run check
```
