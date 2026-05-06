# DTG / OpenVTC / VTI Interoperability and Drift Tracking

**Applicable release:** `v0.9.0`  
**Status:** Cross-repo compatibility profile  
**Last reviewed:** 2026-05-06

TIS now tracks three upstream implementation repositories as operational references:

| Repository | Role in the trust stack |
|---|---|
| <https://github.com/OpenVTC/dtg-credentials> | DTG credential creation and verification implementation. |
| <https://github.com/OpenVTC/openvtc> | OpenVTC relationship, VRC, DID, DIDComm, and configuration workflow implementation. |
| <https://github.com/OpenVTC/verifiable-trust-infrastructure> | VTI/VTA authority, ACL, sealed transfer, DID template, attestation, and integration implementation. |

## Machine-readable tracking

The compatibility state is recorded in:

- `model/cross-repo-compatibility-matrix.schema.json`
- `model/cross-repo-compatibility-matrix.json`

## Drift review triggers

Open a TIS drift review issue when an upstream change affects any of the following:

- credential context, type, proof, status, or subject structure;
- DID method support or DID document template behavior;
- relationship or VRC state-machine semantics;
- DIDComm routing, mediator, or service endpoint assumptions;
- VTA context, ACL role, permission, or `allowed_contexts` semantics;
- sealed transfer, provision-integration, or attestation evidence structure;
- CLI output or examples used as validation fixtures.

## Recommended cadence

Upstream release notes SHOULD be reviewed before every TIS minor release and at least monthly while the DTG, OpenVTC, and VTI profiles remain experimental.

## Governance rule

TIS does not become the implementation authority for these upstream repos. TIS defines the executable artifact contracts needed for assurance, auditability, relying-party evaluation, and cross-repo interoperability.
