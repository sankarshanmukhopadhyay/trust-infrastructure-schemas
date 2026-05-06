---
owner: maintainers
last_reviewed: 2026-05-05
applicable_version: v0.8.0
tier: 1
---

# TSMM Evidence Alignment

TSMM defines the semantic role of evidence. This repository packages evidence into machine-validatable artifacts.

## Alignment pattern

```text
TSMM EvidenceArtifact -> TIS artifact reference
TSMM EvidenceBundle   -> TIS evidence bundle manifest
TSMM Assessment       -> TIS evaluation envelope
TSMM TrustDecision    -> TIS decision receipt
```

Evidence bundles SHOULD be treated as audit material, not narrative attachments. They must be independently referencable, freshness-aware, and hashable wherever possible.
