# Upstream Reference: OpenVTC DTG Credentials

**Repository:** <https://github.com/OpenVTC/dtg-credentials>  
**Tracked branch/ref:** `main`  
**TIS release:** `v0.9.0`  
**Last reviewed:** 2026-05-06

## Role

`dtg-credentials` is treated by TIS as the implementation reference for DTG-compatible Verifiable Credential envelope shape, credential type usage, issuer/subject binding, validity windows, and proof metadata.

## TIS artifacts

- `credentials/dtg/v1/dtg-vc-envelope.json`
- `credentials/dtg/v1/dtg-credential-subject.json`
- `credentials/dtg/v1/personhood-membership-profile.json`
- `credentials/dtg/v1/rcard-credential.json`
- `docs/dtg-compatibility-profile.md`

## Drift watch

Monitor upstream changes to VC context version, credential type arrays, proof suites, status handling, personhood overlays, witness payloads, endorsement payloads, and relationship-card structures.
