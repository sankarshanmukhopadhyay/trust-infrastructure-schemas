---
title: Schema Catalog
parent: Artifact Contracts
grand_parent: Documentation
nav_order: 2
---
# Schema Catalog

This page inventories the machine contracts present in the repository. Presence does **not** imply equal authority: TIS Core contracts are reusable normative contracts, while ecosystem-specific profiles are adapters whose native semantics remain upstream. See [Repository Scope and Admission Policy]({% link docs/repository-scope.md %}).

| Class | Family | Canonical location | Governance purpose |
|---|---|---|---|
| Core | Common references | `common/` | Stable cross-artifact references. |
| Adapter / compatibility debt | DTG credentials | `credentials/dtg/v1/` | DTG credential semantic overlays and VC compatibility contracts. |
| Adapter | Agent credentials | `credentials/agent/v1/` | Agent identity, capability, infrastructure, and collaboration attestations. |
| Adapter | Reputation | `credentials/reputation/v1/` | Portable reputation claims. |
| Core | Authority | `governance/` | Authority boundaries, scope, delegation requirements, and revocation obligations. |
| Core | Delegation | `delegation/` | Delegation lineage and chain-verification evidence. |
| Core | Evidence | `evidence/` | Evidence-bundle integrity and references. |
| Core | Decisions | `decision/` | Bounded decision receipts. |
| Core | Registries | `registry/` | Registry entries and publication profiles. |
| Adapter | Trust Tasks | `profiles/trust-tasks/` | Runtime task references, lifecycle events, manifests, and execution receipts. |
| Adapter | OpenVTC | `profiles/openvtc/` | Runtime workflow evidence and state normalization. |
| Adapter | VTI | `profiles/vti/` | VTA authorization, ACL, transfer, status, and integration evidence. |
| Adapter | TSMM | `profiles/tsmm/` | Runtime governance projection contracts. |
| Experimental adapter | OASF / AIS-1 / ODRL | `oasf/`, `profiles/ais1/`, `odrl/` | Experimental ecosystem composition profiles. |
| Core | Assurance / controls / conformance | `assurance/`, `controls/`, `conformance/` | Assurance claims, controls, and implementer declarations. |
| Repository evidence | Portfolio governance | `portfolio/`, `data/` | Cross-repository authority and relationship contracts. |

## Publication contract

Every Markdown file under `docs/` is required to render to HTML. CI verifies both the source information architecture and the generated `_site` output. A documentation file cannot silently exist only in the repository while being absent from the published site.
