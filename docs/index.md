---
layout: default
title: Documentation
nav_order: 2
has_children: true
permalink: /docs/
---

# Documentation

Use this documentation by task rather than by repository directory. The navigation preserves existing page locations while grouping material around the decisions implementers and assurance teams actually make.

| Area | Use it when you need to… | Start here |
| --- | --- | --- |
| Artifact Contracts | select or implement a portable trust artifact | [Artifact Contracts](artifact-contracts.md) |
| Semantic Alignment | determine what a TIS artifact means and which TSMM concepts it projects | [Semantic Alignment](semantic-alignment.md) |
| Assurance & Validation | validate schemas, candidate status, and generated assurance evidence | [Assurance & Validation](assurance-validation.md) |
| Integration & Adoption | compose TIS with protocols, runtime systems, and interoperability profiles | [Integration & Adoption](integration-adoption.md) |
| Governance & Lifecycle | understand repository authority, portfolio relationships, and lifecycle controls | [Governance & Lifecycle](governance-lifecycle.md) |
| Releases | inspect version history and migration context | [Releases](releases/index.md) |

## Recommended implementation path

1. Read the [Adoption guide](adoption.md) and [Architecture](architecture.md).
2. Select the required [Artifact Contracts](artifact-contracts.md).
3. Confirm [Semantic Alignment](semantic-alignment.md) against TSMM.
4. Run the [Assurance & Validation](assurance-validation.md) checks.
5. Review [Governance & Lifecycle](governance-lifecycle.md) before publishing or relying on artifacts.

## Machine validation

```bash
npm ci --no-audit --no-fund
npm run candidate:check
```

Candidate and portfolio alignment evidence is emitted under `artifacts/`.
