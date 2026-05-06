# OpenVTC Runtime Profile

**Applicable release:** `v0.9.0`  
**Status:** Experimental profile with validated examples  
**Last reviewed:** 2026-05-06

This profile aligns TIS with OpenVTC runtime workflows published at <https://github.com/OpenVTC/openvtc>.

OpenVTC turns trust graph relationships into operational state: persona DIDs, DIDComm routing, relationship requests, VRC issuance, storage, configuration protection, and robotic maintainer activity. TIS captures those surfaces as evidence artifacts so they can be replayed, validated, and audited.

## Runtime evidence flow

```text
Persona DID -> Relationship request -> Relationship finalization -> VRC issuance -> VRC verification -> Evidence bundle -> Decision receipt
```

## Schemas

- `profiles/openvtc/openvtc-profile.schema.json`
- `profiles/openvtc/openvtc-relationship-state.schema.json`
- `profiles/openvtc/openvtc-vrc-issuance-receipt.schema.json`
- `profiles/openvtc/openvtc-config-evidence.schema.json`
- `profiles/openvtc/openvtc-didcomm-routing-evidence.schema.json`

## Assurance expectations

OpenVTC evidence SHOULD avoid disclosing secrets. Protected or secured configuration SHOULD be represented by digest, class, encryption state, access-control reference, and capture timestamp rather than raw secret material.
