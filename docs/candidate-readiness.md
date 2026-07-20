---
title: Candidate Readiness
parent: Validation and Conformance
nav_order: 1
---
# Candidate readiness

TIS is a **Candidate specification** under active validation. Candidate means its declared schema families are near feature-complete and validation is systematic and reproducible. It is not an independent certification claim.

## First valid result

```bash
npm ci
npm run candidate:check
```

The command validates schemas, positive and negative examples, documentation, governance declarations, portfolio relationships, Mermaid syntax, and the built GitHub Pages site.

## Authority boundary

TIS owns portable schema contracts, identifiers, serialization profiles, and validation contracts. Canonical semantic authority remains with TSMM.
