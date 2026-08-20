---
title: Repository Scope and Admission Policy
parent: Governance & Lifecycle
grand_parent: Documentation
nav_order: 6
---
# Repository Scope and Admission Policy

TIS is a **portable contract layer**, not a catalogue of every schema used by every trust system.

The repository had accumulated three materially different classes of artifacts under one umbrella. This policy makes their authority and lifecycle explicit so ecosystem-specific work cannot silently expand the TIS core.

## What TIS Core owns

A schema belongs in **TIS Core** only when it expresses a reusable machine contract that can be consumed across multiple trust infrastructures without importing the governance model of one upstream ecosystem.

Core families are:

- authority boundary and delegation lineage;
- evidence references and evidence-bundle integrity;
- bounded decision receipts;
- registry entry/publication contracts;
- assurance, controls, and conformance declarations;
- stable artifact references and lifecycle/status evidence.

A proposed core schema MUST satisfy all of the following admission tests:

1. **Portability:** at least two independent systems could use the contract without changing its semantics.
2. **Authority clarity:** TIS can state exactly which serialization/constraint semantics it owns and which semantics remain upstream.
3. **Non-duplication:** an authoritative upstream schema cannot be referenced directly instead.
4. **Assurance value:** local validation produces evidence that a relying implementation can use.
5. **Lifecycle:** versioning, supersession, and withdrawal behavior are defined.

Failure of any test means the artifact does not belong in TIS Core.

## Profiles are adapters, not new authority

`profiles/` exists to map upstream ecosystems onto TIS Core contracts. A profile MAY constrain, compose, or reference a TIS Core contract, but it MUST NOT silently become the canonical definition of an upstream protocol, credential, runtime state machine, or governance model.

Profiles therefore have **adapter authority only**:

- upstream repositories remain authoritative for their native semantics;
- TIS owns only the mapping and additional portable constraints it explicitly declares;
- profiles must identify the upstream authority and reviewed revision;
- profiles should be removable without breaking unrelated TIS Core contracts.

DTG, Trust Tasks, OpenVTC, VTI, TSMM, OASF, AIS-1, and ODRL integration material is evaluated under this rule.

## Repository evidence is not a schema family

Portfolio relationships, compatibility matrices, upstream review records, validation outputs, and repository authority declarations are **assurance evidence about TIS**. They support auditability but are not automatically reusable trust-infrastructure schemas.

New portfolio-monitoring or repository-governance structures should therefore be added only when they are required to verify TIS's own authority, dependencies, or release claims. General portfolio monitoring belongs in the portfolio monitor rather than TIS.

## Upstream-native schemas

TIS SHOULD reference an upstream-native schema instead of copying it. An overlay is justified only when TIS adds a portable constraint that is both machine-verifiable and outside the upstream schema's responsibility.

For example, DTG credential semantics remain DTG authority. TIS may publish a compatibility overlay when it is necessary to bind that credential into a reusable evidence, authority, or decision contract, but TIS must not become an independent fork of the DTG credential specification.

## Refactoring direction

The current repository remains backward compatible during the transition, but future work follows this target structure:

| Class | Repository role | Direction |
|---|---|---|
| Core portable contracts | normative TIS | retain and strengthen |
| Ecosystem adapters | non-authoritative profiles | retain only where mapping adds executable value |
| Copied/upstream-native contracts | compatibility debt | reference upstream or retire |
| Portfolio/repository metadata | assurance evidence | minimize; keep only TIS-specific evidence |
| Experimental mappings | incubating profiles | time-bound, explicitly experimental, promote or remove |

A future major release MAY physically separate core contracts from ecosystem adapters after downstream dependency analysis. This release establishes the governance boundary first so that separation can be evidence-driven rather than disruptive.
