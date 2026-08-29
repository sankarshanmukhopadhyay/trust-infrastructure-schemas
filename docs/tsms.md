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

## Candidate baseline

The current candidate stack baseline is:

- TSMM `v0.24.0`
- TIS `v0.14.1`
- TGA `v0.12.1`

The machine-readable declaration is `model/tsms-compatibility.json`.

Run:

```bash
npm run tsms:check
```

The validator produces `artifacts/validation/tsms-compatibility.json`.

## Fail-safe compatibility

Only the explicitly declared baseline receives the `compatible-candidate` disposition. An unknown TSMM, TIS, or TGA version is `unsupported`; it must not silently inherit compatibility.

Fixtures exercise both the known baseline and an unknown semantic version under `validation/tsms/`.

## Golden-path portable contracts

The initial TSMS golden path uses existing TIS contracts rather than creating TSMS-specific duplicates:

- `governance/authority-boundary.schema.json`
- `evidence/evidence-bundle-manifest.schema.json`
- `decision/decision-receipt.schema.json`

This keeps TSMS a composition of existing authorities rather than a competing artifact family.

## Evidence and non-claims

A passing TIS TSMS check means the local repository has a coherent declared stack baseline, authority boundary, fail-safe compatibility policy, and required portable contracts.

It does **not** establish external certification or prove that remote repository state has not changed.
