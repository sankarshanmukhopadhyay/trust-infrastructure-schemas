# Trust Assumptions

**Last reviewed:** 2026-05-05  
**Current release:** `v0.7.0`

This repository makes the following assumptions explicit so downstream systems do not mistake schema validity for operational trustworthiness.

## Schema validity is necessary but insufficient

A payload that validates against a schema is structurally well-formed. It is not automatically true, current, authoritative, or safe to rely on.

## Publication is not authorization

A registry entry, publication profile, or discoverable artifact does not by itself authorize an entity to act. Authorization requires the applicable policy, delegation artifact, authority boundary, and revocation state to be evaluated at the time of action.

## Evidence must remain inspectable

Evidence references should be durable enough for review, audit, and dispute resolution. Where evidence freshness matters, `fresh_until`, revocation metadata, or status-check requirements should be provided.

## Authority must be scoped

Authority is never assumed to be global. The authority boundary schema exists because trust systems routinely fail when discovery, identity, evaluation, and delegation are collapsed into the same operational meaning.

## Decision receipts are bounded evidence

A decision receipt records a decision made by a particular actor under a particular policy and authority boundary. It does not create universal trust. It should be interpreted with its timestamps, evaluated artifacts, allowed actions, prohibited actions, and conditions.

## Experimental artifacts require care

Experimental artifacts such as the AIS-1 profile and ODRL policy reference are included for normalization and implementation learning. They are validated and documented, but downstream users should expect semantic refinement.
