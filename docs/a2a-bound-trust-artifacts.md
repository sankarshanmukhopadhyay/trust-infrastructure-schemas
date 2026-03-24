# A2A-bound trust artifacts

## Why this note exists

ANAB now defines a machine-readable **ANAB-over-A2A description extension** for Agent Cards. That does not automatically mean the canonical schema layer should absorb the full ANAB schema as-is. It does mean the canonical layer needs a clear position on which parts are reusable patterns.

## Canonical view

The shared layer SHOULD distinguish between:

1. **domain-specific trust descriptions** such as the ANAB extension
2. **reusable artifact patterns** that can appear across ecosystems

For A2A-bound trust descriptions, the reusable patterns are:

- a dereferenceable declaration reference
- an evidence bundle reference
- issuer or trust-anchor reference material
- freshness and revocation metadata
- explicit authority-boundary statements

Those are not specific to ANAB. They are generic trust-artifact concerns that happen to be attached to an A2A Agent Card in this case.

## Design rule

This repository SHOULD standardize the **shape families** that recur across ecosystems, without forcing all domain baselines to collapse into one local vocabulary.

That means ANAB can remain the domain authority for:

- naming semantics
- verification tiers
- operator-binding requirements
- A2A-specific control language

While the canonical artifact layer remains the stable home for:

- declaration references
- evidence references
- integrity pins
- trust-anchor references
- freshness and revocation metadata
- authority-boundary metadata

## Practical implication

The right near-term move is not to absorb the full ANAB extension schema into the canonical repo. The right move is to document A2A-bound trust descriptions as a **recognized artifact family** and keep the canonical model ready to generalize recurring fields when reuse pressure becomes clear across multiple baselines.
