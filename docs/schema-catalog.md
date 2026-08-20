---
title: Schema Catalog
parent: Artifact Contracts
grand_parent: Documentation
nav_order: 2
---
# Schema Catalog

This page is the human-readable entry point to every machine-contract family published by TIS. The JSON/YAML files remain canonical; this catalog makes their scope and validation surface discoverable from GitHub Pages.

| Family | Canonical location | Governance purpose |
|---|---|---|
| Common references | `common/` | Stable cross-artifact references. |
| DTG credentials | `credentials/dtg/v1/` | DTG credential semantic overlays and VC compatibility contracts. |
| Agent credentials | `credentials/agent/v1/` | Agent identity, capability, infrastructure, and collaboration attestations. |
| Reputation | `credentials/reputation/v1/` | Portable reputation claims. |
| Authority | `governance/` | Authority boundaries, scope, delegation requirements, and revocation obligations. |
| Delegation | `delegation/` | Delegation lineage and chain-verification evidence. |
| Evidence | `evidence/` | Evidence-bundle integrity and references. |
| Decisions | `decision/` | Bounded decision receipts. |
| Registries | `registry/` | Registry entries and publication profiles. |
| Trust Tasks | `profiles/trust-tasks/` | Runtime task references, lifecycle events, manifests, and execution receipts. |
| OpenVTC | `profiles/openvtc/` | Runtime workflow evidence and state normalization. |
| VTI | `profiles/vti/` | VTA authorization, ACL, transfer, status, and integration evidence. |
| TSMM | `profiles/tsmm/` | Runtime governance projection contracts. |
| OASF / AIS-1 / ODRL | `oasf/`, `profiles/ais1/`, `odrl/` | Experimental ecosystem composition profiles. |
| Assurance / controls / conformance | `assurance/`, `controls/`, `conformance/` | Assurance claims, controls, and implementer declarations. |
| Portfolio governance | `portfolio/`, `data/` | Cross-repository authority and relationship contracts. |

## Publication contract

Every Markdown file under `docs/` is required to render to HTML. CI verifies both the source information architecture and the generated `_site` output. A documentation file cannot silently exist only in the repository while being absent from the published site.
