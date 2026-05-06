# Trust Infrastructure Schemas Documentation

**Current release:** `v0.7.0`  
**Last reviewed:** 2026-05-05

This documentation describes the repository as an executable governance artifact layer for operational trust infrastructure.

## Start here

| Need | Document |
|---|---|
| Understand the model | `open-trust-artifact-model.md` |
| Understand trust assumptions | `TRUST-ASSUMPTIONS.md` |
| Understand authority and evidence | `TRUST-MODEL.md` |
| See the end-to-end flow | `cross-repo-example.md` |
| Understand validation coverage | `validation-coverage.md` |
| Use decision receipts | `decision-receipts.md` |
| Use OASF artifacts | `oasf-artifact-family.md` |
| Use ODRL policy references | `odrl-artifact-family.md` |
| Use AIS-1 profile artifacts | `ais1-schema-profile.md` |
| Review release history | `releases/` |

## Canonical artifact flow

```text
Declaration -> Evidence Bundle -> Evaluation Envelope -> Decision Receipt -> Registry Entry
```

This flow is the core implementation path for `v0.7.0`. It ensures that trust artifacts do not merely exist, but can be evaluated, decisioned, published, and audited.

## Machine-verifiable surfaces

The repository now includes validated schemas and examples for:

- credential artifacts;
- assurance levels;
- conformance declarations;
- controls and control mappings;
- OASF publication and evaluation artifacts;
- ODRL policy references;
- AIS-1 bonded-agent profiles;
- reusable artifact references;
- authority boundaries;
- evidence bundle manifests;
- decision receipts;
- registry entries;
- artifact taxonomy and validation coverage manifests.

## Release notes

- `releases/v0.7.0.md`
- `releases/v0.6.0.md`
- `releases/v0.5.0.md`
- `releases/v0.4.0.md`
- `releases/v0.3.0.md`
- `releases/v0.2.1.md`

## TSMM alignment

- [TSMM alignment](tsmm-alignment.md)
- [TSMM decision receipt profile](tsmm-decision-receipt-profile.md)
- [Authority boundary TSMM profile](authority-boundary-tsmm-profile.md)
- [TSMM evidence alignment](tsmm-evidence-alignment.md)
- [TSMM registry alignment](tsmm-registry-alignment.md)
- [TSMM executable artifact walkthrough](tsmm-executable-artifact-walkthrough.md)
