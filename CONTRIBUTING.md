# Contributing

## Before you change a contract

Open or reference an issue for substantive schema, identifier, compatibility, validation, or authority-boundary changes. The issue should state the proposition being changed, the owning authority, compatibility expectations, and evidence that could falsify the proposed approach.

## Validation

Candidate validation is dependency-free:

```bash
npm run candidate:check
```

Every schema change must include valid and invalid examples where appropriate, compatibility analysis, documentation, and an authority-impact statement. Do not describe experimental profiles as certified or stable.

## Issue → PR → evidence → merge

A substantive PR should record:

- the schema/contract proposition and authoritative surface changed;
- compatibility or migration impact;
- valid, invalid, and boundary examples relevant to the claim;
- validation commands and resulting evidence artifacts;
- any delegated semantic authority or downstream dependency;
- residual uncertainty and conditions that would require reassessment or revocation.

Do not weaken a failing validator or negative fixture merely to make CI green unless the existing test is demonstrably wrong and that judgment is recorded.

## Authority discipline

TIS owns portable contracts and validation behavior. It must not silently acquire semantic authority from TSMM or runtime/governance authority from downstream implementations. If implementation pressure exposes a missing canonical concept, escalate it to the layer that owns that meaning.
