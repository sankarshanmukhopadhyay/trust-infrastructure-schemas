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
**Current release:** `v0.12.0`  
**Lifecycle:** Active  
**Operational status:** Active validation

## Start here

- [Adoption guide](docs/adoption.md)
- [Architecture](docs/architecture.md)
- [Artifact taxonomy](docs/artifact-taxonomy.md)
- [Candidate readiness](docs/candidate-readiness.md)
- [Validation coverage](docs/validation-coverage.md)
- [Portfolio relationships](docs/portfolio-relationships.md)
- [Governance](GOVERNANCE.md)
- [Release notes](RELEASE_NOTES_v0.12.0.md)

## Authority boundary

TIS owns portable schema design, identifiers, serialization contracts, validation rules, and repository releases. It does not own the canonical semantic definitions maintained by the Trust Systems Meta Model, nor does it assert certification or independent assurance.

## First validation result

```bash
npm ci
npm run candidate:check
```

The Candidate evidence report is written to:

```text
artifacts/candidate/candidate-readiness.json
```
