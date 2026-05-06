# VTI Runtime Assurance Profile

**Applicable release:** `v0.9.0`  
**Status:** Experimental profile with validated examples  
**Last reviewed:** 2026-05-06

This profile aligns TIS with Verifiable Trust Infrastructure at <https://github.com/OpenVTC/verifiable-trust-infrastructure>.

VTI introduces executable authority surfaces: VTA contexts, ACL roles, allowed context scope, VTA authorization credentials, sealed transfer envelopes, DID templates, TEE attestation, and provision-integration receipts. TIS models these as authority, enforcement, evidence, revocation, and audit artifacts.

## Control-plane mapping

| Concern | VTI artifact | TIS profile |
|---|---|---|
| Authority | VTA authorization credential | `profiles/vti/vta-authorization-credential.schema.json` |
| Delegation | ACL entry | `profiles/vti/vta-acl-entry.schema.json` |
| Scope | VTA context | `profiles/vti/vta-context.schema.json` |
| Enforcement | Sealed transfer / challenge-bound operation | `profiles/vti/sealed-transfer-envelope.schema.json` |
| Evidence | Attestation reference | `profiles/vti/tee-attestation-reference.schema.json` |
| Auditability | Provision integration receipt | `profiles/vti/provision-integration-receipt.schema.json` |

## Assurance expectations

A VTI relying party SHOULD be able to determine who exercised authority, under which context, with which delegated permissions, against which policy, with what evidence, and whether the action remains valid after revocation or expiry.
