---
title: DTG Upstream Review
parent: Integration & Adoption
grand_parent: Documentation
nav_order: 3
---
# DTG Upstream Review

**Review date:** 2026-08-20  
**Portfolio source:** DTG Portfolio Monitor tracked-repository registry  
**Rule:** TIS adopts merged upstream contract changes; proposals and open pull requests are tracked as drift until their authority status changes.

## Schema-relevant repositories

| Repository | TIS relevance | 2026-08-20 disposition |
|---|---|---|
| `trustoverip/dtgwg-cred-spec` | Normative credential shapes | **Update required.** VWC `digest` is now required and binds the witness credential to the exact VRC/edge. TIS v0.14.0 aligns the VWC overlay. |
| `trustoverip/dtgwg-trust-tasks-tf` | Runtime trust-task contracts | **Track.** The implementation family has advanced to `trust-tasks-rs` 0.11 with coordinated transport/proof crate releases. Existing TIS lifecycle/reference/receipt profiles remain structurally compatible; version drift is recorded for continued review. |
| `trustoverip/dtgwg-zkp-tf` | Privacy / proof requirements | **No merged schema delta on upstream main.** Requirements work under review must not be treated as normative TIS input until merged. |
| `trustoverip/dtgwg-vds-tf` | Verifiable data structures | **Track.** Relevant to relationship-card and future VDS profiles; no TIS contract promoted by this review. |
| `OpenVTC/dtg-credentials` | Credential implementation | **Retain compatibility profile.** Re-test after the upstream credential implementation consumes the latest credential specification. |
| `OpenVTC/openvtc` | Runtime workflow evidence | **Retain runtime profile.** Changes belong in OpenVTC profile schemas only when observable evidence/state shapes change. |
| `OpenVTC/verifiable-trust-infrastructure` | VTA authority/enforcement | **Retain VTI profile.** Continue tracking ACL, status, authorization and integration evidence. |

The HTX, UX, general-coordination, credential-task-force workspace, RAHP workspace, agent-names workspace, and legacy r-card workspace remain portfolio inputs but do not create a direct machine-schema delta in this release.

## VWC edge-binding correction

The upstream credential specification now makes `credentialSubject.digest` mandatory for a VWC. The digest is the SHA-256 value of the JCS-canonicalized VRC. `credentialSubject.id` and `taskContext` alone identify an observed party and exchange, not the exact edge. TIS therefore no longer treats a free-standing `witnessedEdge` string as sufficient edge-binding evidence.

## Candidate work intentionally not promoted

The proposed Verifiable Delegation Credential (VDC) and the evolving proof-of-liveness v0.4 requirements are important design inputs, but they remain outside the merged authority surface reviewed here. TIS should add contracts only when those upstream shapes become sufficiently stable to validate without inventing semantics on their behalf.
