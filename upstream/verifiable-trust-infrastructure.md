# Upstream Reference: OpenVTC Verifiable Trust Infrastructure

**Repository:** <https://github.com/OpenVTC/verifiable-trust-infrastructure>  
**Tracked branch/ref:** `main`  
**TIS release:** `v0.9.0`  
**Last reviewed:** 2026-05-06

## Role

`verifiable-trust-infrastructure` is treated by TIS as the implementation reference for VTA runtime authority, context scope, ACL enforcement, VTA authorization credentials, sealed transfer, DID templates, TEE attestation references, and provision-integration receipts.

## TIS artifacts

- `profiles/vti/vta-context.schema.json`
- `profiles/vti/vta-acl-entry.schema.json`
- `profiles/vti/vta-authorization-credential.schema.json`
- `profiles/vti/sealed-transfer-envelope.schema.json`
- `profiles/vti/did-template-reference.schema.json`
- `profiles/vti/tee-attestation-reference.schema.json`
- `profiles/vti/provision-integration-receipt.schema.json`
- `docs/vti-runtime-assurance-profile.md`

## Drift watch

Monitor upstream changes to VTA context semantics, ACL role and permission names, `allowed_contexts`, sealed transfer envelope fields, DID template rendering, attestation verification, challenge-response authentication, token lifecycle, and integration receipt evidence.
