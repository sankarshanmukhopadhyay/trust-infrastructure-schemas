# Trust Model

**Last reviewed:** 2026-05-05  
**Current release:** `v0.7.0`

The trust model for this repository is based on bounded authority, explicit evidence, machine-readable assurance, and auditable decisions.

## Core assumptions

1. Trust claims are only useful when they can be independently inspected.
2. Authority must be scoped, delegated, and revocable.
3. Evidence should be represented as addressable artifacts, not only prose.
4. Assurance should connect controls, evidence, and evaluation outputs.
5. Reliance should produce a decision record when operational action depends on trust artifacts.

## Artifact roles

| Artifact | Role in trust model |
|---|---|
| Credential schemas | Define identity, relationship, capability, and reputation artifact shapes. |
| Conformance declaration | Records implementer claims and covered schema scope. |
| Evidence bundle manifest | Lists the artifacts supporting a claim. |
| OASF publication profile | Publishes discoverable subject, declaration, evidence, and semantic-binding references. |
| OASF evaluation envelope | Records evaluator output and assurance/control results. |
| Authority boundary | States scope, delegation, revocation, and relying-party constraints. |
| Decision receipt | Records the trust decision made under policy and authority constraints. |
| Registry entry | Publishes indexable state and artifact references. |

## Authority boundaries

Authority boundaries are central to the model. Every artifact that may influence reliance SHOULD make clear:

- who is authoritative;
- what scope applies;
- whether separate delegation is required;
- how revocation or status should be checked;
- which relying-party actions are allowed, prohibited, or conditional.

The canonical schema is `governance/authority-boundary.schema.json`.

## Decision receipts

Decision receipts are introduced in `v0.7.0` to preserve the link between evidence and reliance. A verifier may validate an artifact, but a relying party needs to know what decision was made, under what policy, and with what conditions. The receipt records this decision context.

## Revocation and freshness

Any artifact used for operational reliance SHOULD carry freshness or revocation information either directly or through an authority boundary. A previously valid artifact may become unsafe if revocation status changes or freshness expires.

## Auditability

Auditability requires more than logs. This model expects structured artifacts that can be retained and revalidated:

- declarations;
- evidence manifests;
- evaluation envelopes;
- decision receipts;
- registry entries;
- coverage manifests.
