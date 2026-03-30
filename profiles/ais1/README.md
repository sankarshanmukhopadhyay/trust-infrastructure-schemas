# AIS-1 profile

This profile adds a reusable machine-readable shape for **AIS-1 bonded agent identity** inside the canonical trust artifact layer.

## What the profile covers

- agent identifier (`did:ais1`)
- sponsor identity
- issuer or trust anchor
- bond verification details
- tier (`basic`, `verified`, `sovereign`)
- lifecycle status (`active`, `suspended`, `revoked`)
- evidence references
- authority-boundary note for relying parties

## Artifacts

- Schema: `schema.json`
- Example bonded-agent profile: `examples/bonded-agent-profile.example.json`
- Example registry trust signal: `examples/registry-trust-signal.example.json`

## Interpretation guardrails

This profile exists to normalize AIS-1 into the artifact layer. It does **not** declare that bonded identity alone proves delegation, runtime authorization, or message provenance. Downstream baselines and evaluators should preserve those distinctions.
