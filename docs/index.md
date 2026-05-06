# Trust Infrastructure Schemas Documentation

**Current release:** `v0.9.0`  
**Last reviewed:** 2026-05-06

This documentation describes TIS as an executable governance artifact layer for operational trust infrastructure.

## Start here

| Need | Document |
|---|---|
| Understand the model | `open-trust-artifact-model.md` |
| Understand trust assumptions | `TRUST-ASSUMPTIONS.md` |
| Understand authority and evidence | `TRUST-MODEL.md` |
| Use DTG compatibility artifacts | `dtg-compatibility-profile.md` |
| Use OpenVTC runtime artifacts | `openvtc-runtime-profile.md` |
| Use VTI runtime assurance artifacts | `vti-runtime-assurance-profile.md` |
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
DTG VC Envelope -> OpenVTC Relationship/VRC Evidence -> VTI Runtime Authority Evidence -> TIS Decision Receipt
```

## Release notes

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
