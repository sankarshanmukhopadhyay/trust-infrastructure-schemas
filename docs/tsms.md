---
title: TSMS portable contract layer
parent: Integration & Adoption
grand_parent: Documentation
---
# TIS in the Trust Systems Modelling Stack (TSMS)

TIS is the **portable machine-readable contract layer** of TSMS.

```text
TSMM canonical semantics
        ↓
TIS portable contracts
        ↓
TGA executable governance artifacts
```

## Authority boundary

TIS owns portable contracts and their validation rules. It does not own canonical TSMM semantics, TGA implementation compositions, or external certification.

A need discovered downstream does not permit TIS to redefine a TSMM concept. Semantic gaps must be raised to TSMM. Likewise, TGA remains responsible for its executable compositions.

## First evidence-backed stack release

TIS `v0.14.1` participates in **`tsms-stack-2026.1 — Cashew-Nut`** through the accepted immutable TSMS baseline:

- TSMM `v0.24.0` — commit `2867010121e8a61971184d8fe7d3306b985e5884`
- TIS `v0.14.1` — commit `d25539932181e6d883f5bec261daaf011f740059`
- TGA `v0.12.1` — commit `f0bdc309a691a7be8dca3b48fed8ac1555219bec`

The release and its cross-repository assurance evidence are coordinated by TSMM; TIS does not acquire semantic or executable-governance authority through that coordination.

Adopters of the complete stack should start with the TSMS adopter guide:

https://sankarshanmukhopadhyay.github.io/trust-systems-meta-model/tsms-adopter-guide.html

The machine-readable TIS declaration remains `model/tsms-compatibility.json`.

Run:

```bash
npm run tsms:check
```

The validator produces `artifacts/validation/tsms-compatibility.json`.

## Fail-safe compatibility

Only the explicitly declared accepted baseline receives the compatible candidate disposition. An unknown TSMM, TIS, or TGA state must not silently inherit compatibility. Cross-repository drift may cause TSMS to withdraw inherited compatibility even when a local TIS validation remains green.

Fixtures exercise both the known baseline and unknown state under `validation/tsms/`.

## Golden-path portable contracts

The initial TSMS golden path uses existing TIS contracts rather than creating TSMS-specific duplicates:

- `governance/authority-boundary.schema.json`
- `evidence/evidence-bundle-manifest.schema.json`
- `decision/decision-receipt.schema.json`

This keeps TSMS a composition of existing authorities rather than a competing artifact family.

## Evidence and non-claims

A passing TIS TSMS check means the local repository has a coherent declared stack baseline, authority boundary, fail-safe compatibility policy, and required portable contracts.

It does **not** establish external certification, prove remote repository state is unchanged, or authorize TIS to redefine TSMM semantics or TGA compositions.
