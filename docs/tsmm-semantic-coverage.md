---
title: TSMM Semantic Coverage
parent: Semantic Alignment
grand_parent: Documentation
nav_order: 11
---
# TSMM Semantic Coverage

TIS v0.13.0 makes its normative dependency on TSMM machine-verifiable. Canonical artifact schemas declare `x-tsmm-semantic-binding` metadata containing stable `urn:tsmm:concept:*` identifiers, while `model/tsmm-semantic-coverage.json` records coverage status across the artifact layer.

Coverage does not transfer semantic authority. TSMM remains authoritative for concept meaning; TIS remains authoritative for schema identifiers, serialization, constraints, validation, and releases.

`npm run semantic:check` verifies that mapped artifacts exist, semantic identifiers are well formed, each mapped artifact declares the expected binding, and no binding claims an authority transfer. The check emits `artifacts/portfolio/portfolio-alignment.json`.
