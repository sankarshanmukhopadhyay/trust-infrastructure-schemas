# AIS-1 Schema Profile

This note records how AIS-1 should be represented in `trust-infrastructure-schemas`.

## Why this profile exists

AIS-1 contributes a reusable identity-and-accountability pattern: a durable agent identifier, a sponsor-backed bond, tiered trust signals, and revocation-aware state. That shape is useful across the portfolio, but only if it is normalized once and then reused consistently.

The profile added here is intentionally narrow. It captures:

- the bonded agent
- the sponsor that stands behind it
- the issuer or trust anchor
- bond verification metadata
- tier and lifecycle state
- evidence pointers
- a plain authority boundary statement

## Artifacts

- Schema (repo path): `profiles/ais1/schema.json`
- Example (repo path): `profiles/ais1/examples/bonded-agent-profile.example.json`
- Registry trust signal example (repo path): `profiles/ais1/examples/registry-trust-signal.example.json`

## Design choice

The profile stays out of three things on purpose:

1. **delegation semantics**
2. **runtime authorization logic**
3. **protocol-specific provenance guarantees**

Those belong to other layers. Keeping them out here lets the canonical artifact model stay reusable and composable.
