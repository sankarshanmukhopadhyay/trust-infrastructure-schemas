---
owner: maintainers
last_reviewed: 2026-05-05
applicable_version: v0.8.0
tier: 1
---

# TSMM Registry Alignment

TSMM models the registry as a governance surface. TIS defines registry entries as executable publication artifacts.

## Publication rule

A registry entry MAY publish a trust fact. It MUST NOT be interpreted as granting runtime authority. Relying parties must evaluate the entry alongside authority boundaries, evidence bundles, evaluation envelopes, policies, revocation state, and decision receipts.

See `registry/examples/tsmm-derived-registry-entry.example.json`.
