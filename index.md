---
layout: default
title: Trust Infrastructure Schemas
nav_order: 1
has_children: false
permalink: /
---

# Trust Infrastructure Schemas

Trust Infrastructure Schemas (TIS) publishes portable, machine-readable contracts for authority, delegation, evidence, decisions, registries, conformance, and assurance.

**Status:** Candidate specification  
**Current release:** `v0.14.0`  
**Lifecycle:** Active  
**Operational status:** Active validation

## Navigate by task

- **Implement:** [Adoption](docs/adoption.md) → [Architecture](docs/architecture.md) → [Artifact Contracts](docs/artifact-contracts.md)
- **Trace meaning:** [Semantic Alignment](docs/semantic-alignment.md) → [TSMM Semantic Coverage](docs/tsmm-semantic-coverage.md)
- **Validate:** [Assurance & Validation](docs/assurance-validation.md) → [Candidate Readiness](docs/candidate-readiness.md)
- **Integrate:** [Integration & Adoption](docs/integration-adoption.md) → [Interoperability](docs/interoperability.md)
- **Govern:** [Governance & Lifecycle](docs/governance-lifecycle.md) → [Portfolio Relationship Contract](docs/portfolio-relationship-contract.md)
- **Release history:** [v0.14.0 release notes](docs/releases/v0.14.0.md)

The complete task-oriented documentation map is available from the [Documentation home](docs/index.md).

## Authority boundary

TIS owns portable schema design, identifiers, serialization contracts, validation rules, and repository releases. It does not own the canonical semantic definitions maintained by the Trust Systems Meta Model, nor does it assert certification or independent assurance.

## First validation result

```bash
npm ci --no-audit --no-fund
npm run candidate:check
```

The Candidate evidence report is written to:

```text
artifacts/candidate/candidate-readiness.json
```
