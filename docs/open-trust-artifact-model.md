# Open Trust Artifact Model

The repository is best understood not as a miscellaneous schema library, but as an **Open Trust Artifact Model** implemented through schemas.

## Problem

Most digital trust frameworks define governance in prose. Operational systems, however, need structured objects that can be exchanged, validated, indexed, and audited.

Without those objects, ecosystems fall back to brittle interpretation, repository-specific formats, and duplicated semantics.

## Thesis

Trust infrastructure needs machine-readable primitives for the artifacts that prove how trust is governed, asserted, evaluated, and maintained.

This repository provides those primitives.

## Artifact classes

### Identity and authority artifacts
These identify actors, issuers, delegated roles, and related trust-bearing entities.

### Governance artifacts
These express policies, framework definitions, and ecosystem rules.

### Assurance and conformance artifacts
These express assurance posture, implementation claims, and evaluable declarations.

### Control artifacts
These define the control set and mappings used to interpret assurance levels and conformance obligations.

### Ecosystem state artifacts
These express membership, registry state, status, and other indexable trust facts.

## Relationship to adjacent work

- **TSMM-style models** define entities, relationships, and high-level governance semantics.
- **This repository** defines the machine-readable artifact layer that operational systems exchange and validate.
- **DCAS and related workflows** consume these artifacts to evaluate trust assertions and conformance claims.

## Design principle

The model SHOULD be stable enough for implementers to adopt, while remaining extensible enough for new trust domains and ecosystem-specific profiles.
