---
title: Roadmap
parent: Governance & Lifecycle
grand_parent: Documentation
nav_order: 5
---
# Roadmap

**Last reviewed:** 2026-08-29  
**Current release:** `v0.14.1`

The roadmap prioritizes portable contracts, validation, and governance interoperability over unconstrained schema expansion.

## September 2026 priority: TRQP Stack 2026.2 lifecycle evidence

**Coordinating issue:** https://github.com/sankarshanmukhopadhyay/trqp-assurance-hub/issues/39  
**TIS implementation issue:** https://github.com/sankarshanmukhopadhyay/trust-infrastructure-schemas/issues/4

TIS #4 is the authoritative repo-local tracker for this work. The earlier Hub #41 existed only while TIS Issues were disabled and is retained closed as historical lineage.

### Proposition

> Change, invalidation, reassessment, assurance-validity, and supersession evidence used across repositories should have portable machine-readable contracts where interoperability requires them, without moving semantic or component authority into TIS.

### Assessment first

Before introducing a new schema family, evaluate whether existing TIS contracts can express the required Stack 2026.2 evidence through compatible extension or composition.

Candidate portable surfaces, only where required, include:

- assurance change event;
- change-impact classification;
- reassessment plan/result;
- assurance validity state;
- supersession lineage.

### Required properties

- subject/target identity;
- previous/current state references;
- changed dimensions;
- materiality/impact state;
- affected claims/evidence;
- authority/provenance references;
- invalidation/reassessment rationale;
- explicit unknown/unsupported impact;
- lifecycle/supersession references;
- no implicit authority transfer.

### Acceptance evidence

- existing-contract sufficiency decision;
- valid and invalid fixtures for any new contract;
- explicit unknown-impact representation;
- machine-testable authority boundaries;
- documented compatibility/invalidation behavior;
- successful consumption by relevant Stack components;
- synchronized schema catalogue, Pages and candidate validation.

## Stack 2026.2 version policy

`v0.15.0` is only a candidate if a material portable-contract addition lands. If existing TIS `v0.14.1` contracts are sufficient, retain the existing release in the coordinated tuple.

## Timing

| Target | Outcome |
|---|---|
| 6 Sep | existing-contract sufficiency assessed |
| 20 Sep | any required portable contract and compatibility behavior ready |
| 20–25 Sep | participate in coordinated adversarial suite |
| 26 Sep | version decision frozen |
| 27–28 Sep | coordinated eligibility replay |

## Continuing backlog

Decision-receipt interoperability, evidence-bundle integrity, authority-boundary conformance, registry publication, and crosswalk hardening remain valid backlog. They are not Stack 2026.2 blockers unless directly required by the lifecycle proposition above.
