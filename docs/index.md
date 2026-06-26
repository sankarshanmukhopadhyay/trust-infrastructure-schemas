# Trust Infrastructure Schemas Documentation

**Current release:** `v0.10.0`  
**Last reviewed:** 2026-06-26

This documentation describes TIS as an executable governance artifact layer for operational trust infrastructure.

## Start here

| Need | Document |
|---|---|
| Understand the model | `open-trust-artifact-model.md` |
| Understand trust assumptions | `TRUST-ASSUMPTIONS.md` |
| Understand authority and evidence | `TRUST-MODEL.md` |
| Use DTG compatibility artifacts | `dtg-compatibility-profile.md` |
| Use TSMM runtime governance projections | `tsmm-runtime-governance-projection-profile.md` |
| Use Trust Task runtime assurance artifacts | `trust-task-runtime-assurance-profile.md` |
| Use OpenVTC runtime artifacts | `openvtc-runtime-profile.md` |
| Normalize OpenVTC states | `openvtc-state-normalization.md` |
| Use VTI runtime assurance artifacts | `vti-runtime-assurance-profile.md` |
| Bind evidence bundles | `evidence-bundle-integrity-profile.md` |
| Publish registry entries safely | `registry-publication-profile.md` |
| Use status and revocation evidence | `status-and-revocation-evidence.md` |
| Track DTG/OpenVTC/VTI drift | `dtg-openvtc-vti-interoperability.md` |
| See the end-to-end flow | `cross-repo-example.md` |
| Understand validation coverage | `validation-coverage.md` |
| Use decision receipts | `decision-receipts.md` |
| Review release history | `releases/` |

## Canonical artifact flow

```text
Declaration -> Evidence Bundle -> Evaluation Envelope -> Decision Receipt -> Registry Entry
```

## DTG/OpenVTC/VTI flow

```text
TSMM Runtime Governance Projection -> VTI Authority Evidence -> OpenVTC Task Evidence -> Trust Task Receipt -> Evidence Bundle -> Decision Receipt
```

## Release notes

- `releases/v0.10.0.md`
- `releases/v0.9.0.md`
- `releases/v0.8.0.md`
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

## v0.10.0 runtime assurance additions

- [TSMM runtime governance projection profile](tsmm-runtime-governance-projection-profile.md)
- [Trust Task runtime assurance profile](trust-task-runtime-assurance-profile.md)
- [OpenVTC state normalization](openvtc-state-normalization.md)
- [Evidence bundle integrity profile](evidence-bundle-integrity-profile.md)
- [Registry publication profile](registry-publication-profile.md)
- [Status and revocation evidence](status-and-revocation-evidence.md)
- [TSMM runtime governance crosswalk](crosswalks/tsmm-runtime-governance-crosswalk.md)
- [TSMM Trust Task evidence crosswalk](crosswalks/tsmm-trust-task-evidence-crosswalk.md)
- [TSMM/TIS v0.10 alignment](cross-repo/tsmm-tis-v0.10-alignment.md)
