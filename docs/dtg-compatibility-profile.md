# DTG Compatibility Profile

**Applicable release:** `v0.9.0`  
**Status:** Experimental profile with validated examples  
**Last reviewed:** 2026-05-06

This profile aligns TIS with the DTG credential implementation published at <https://github.com/OpenVTC/dtg-credentials>.

## Governance position

TIS now separates DTG artifacts into two layers:

| Layer | Purpose |
|---|---|
| DTG VC envelope profile | Validates interoperable W3C Verifiable Credential shape used by DTG-compatible implementations. |
| DTG semantic overlays | Express stronger trust-governance constraints for membership, relationship, invitation, persona, endorsement, witness, personhood, and relationship-card artifacts. |

The envelope profile is intentionally permissive around `credentialSubject` extension fields because upstream implementations may carry implementation-specific subject payloads. TIS semantic overlays remain available when an ecosystem needs stronger, more auditable constraints.

## Schemas

- `credentials/dtg/v1/dtg-vc-envelope.json`
- `credentials/dtg/v1/dtg-credential-subject.json`
- `credentials/dtg/v1/personhood-membership-profile.json`
- `credentials/dtg/v1/rcard-credential.json`

## Assurance expectations

A relying party SHOULD verify issuer authority, validity window, proof material, credential status, and applicable governance policy before relying on a DTG credential. Higher assurance deployments SHOULD bind the VC envelope to a decision receipt and evidence bundle.
