# Ecosystem interoperability

This repository is designed to compose with upstream DTG Labs projects. The objective is **interoperability by construction**: clear role boundaries, explicit assumptions, and traceable artifacts.

## Upstream projects in scope

- **dtg-credentials**: credential schemas and issuance/verifier semantics used by ecosystem implementations.
- **verifiable-trust-infrastructure**: reference architecture and operational building blocks for verifiable trust ecosystems.
- **openVTC**: reference implementation patterns and tooling for deploying and operating verifiable trust components.

## Compatibility model

This repository provides the **assurance and conformance layer**. The upstream repos provide **ecosystem architecture, credential semantics, and implementation surfaces**.

### What composes cleanly

- Use *dtg-credentials* as a credential schema substrate and map credential families to this repo’s data structures and assurance expectations.
- Use *verifiable-trust-infrastructure* to describe system architecture; use this repo to define how that architecture is assessed (controls, evidence, evaluation workflows).
- Use *openVTC* as a reference deployment surface for validating conformance and evidence collection patterns.

### What is explicitly out of scope

- This repo does not define new VC data model semantics beyond what is required for assurance artifacts.
- This repo does not attempt to be a certification program or an authority.
- This repo does not ship production-grade infrastructure components (that’s where openVTC and VTI fit).

## Transport alignment

Interoperability depends on a transport substrate for secure, privacy-preserving exchange of messages and artifacts between endpoints. This repo aligns with the **Trust Spanning Protocol (TSP)** from ToIP as a candidate transport layer for these exchanges.

See: https://trustoverip.github.io/tswg-tsp-specification/


## OASF integration impact

The OASF integration work across TSMM, ANAB, and DCAS creates a clear normalization responsibility for this repository. The purpose is not to absorb those repositories. The purpose is to publish the shared artifact contracts they should all be able to reuse.

### Canonical role of this repository

- TSMM remains the semantic spine
- ANAB remains the domain baseline
- DCAS remains the evaluator
- this repository carries the canonical OASF-shaped publication, evaluation, mapping, and registry artifact contracts

That split keeps semantics, requirements, execution, and carrier formats from collapsing into one repository.


## AIS-1 interoperability note

AIS-1 now has an **experimental** profile in `profiles/ais1/`. The intent is to let bonded agent identity move through schema, registry, and evaluation surfaces without every downstream repo renaming the same fields differently. The profile should be read as an identity-and-accountability layer, not as a complete delegation or protocol-trust contract, and not yet as a fully settled ecosystem-wide canonical contract.
