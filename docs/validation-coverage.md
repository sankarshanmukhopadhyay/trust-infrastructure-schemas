# Validation Coverage

**Last reviewed:** 2026-05-05  
**Release:** `v0.9.0`

This repository treats validation coverage as a governance artifact. The repository should not advertise a schema family unless at least one representative example is validated by CI or by the local validation script.

## Machine-readable manifest

Coverage is declared in:

- `validation/artifact-coverage.json`
- `validation/artifact-coverage.schema.json`

The manifest records each artifact family, its current status, its schema, its examples, the documentation that explains it, and the workflow or script that validates it.

## Covered artifact families

The `v0.7.0` validation surface includes:

| Artifact family | Schema | Example or data |
|---|---|---|
| DTG credentials | `credentials/dtg/v1/*.json` | `examples/dtg/v1/*.example.json` |
| Agent credentials | `credentials/agent/v1/*.json` | `examples/agent/v1/*.example.json` |
| Reputation credentials | `credentials/reputation/v1/*.json` | `examples/reputation/v1/*.example.json` |
| Conformance declaration | `conformance/conformance-declaration.schema.json` | `conformance/examples/example-declaration.json` |
| Assurance levels | `assurance/assurance.schema.json` | `assurance/assurance-levels.json` |
| Controls registry | `controls/controls.schema.json` | `controls/controls.json` |
| Control-assurance matrix | `controls/mappings/control-assurance-matrix.schema.json` | `controls/mappings/control-assurance-matrix.json` |
| Registry simulation | `registry/registry.schema.json` | `registry/sample-registry.json` |
| Registry entry | `registry/registry-entry.schema.json` | `examples/composition/registry-entry.example.json` |
| Artifact reference | `common/artifact-reference.schema.json` | `common/examples/artifact-reference.example.json` |
| Authority boundary | `governance/authority-boundary.schema.json` | `governance/examples/authority-boundary.example.json` |
| Evidence bundle manifest | `evidence/evidence-bundle-manifest.schema.json` | `examples/composition/evidence-bundle-manifest.example.json` |
| OASF publication profile | `oasf/oasf-publication-profile.schema.json` | `oasf/examples/oasf-publication-profile.example.json` |
| OASF evaluation envelope | `oasf/oasf-evaluation-envelope.schema.json` | `oasf/examples/oasf-evaluation-envelope.example.json` |
| OASF control crosswalk | `oasf/mappings/oasf-control-crosswalk.schema.json` | `oasf/mappings/oasf-control-crosswalk.json` |
| ODRL policy reference | `odrl/odrl-policy-reference.schema.json` | `odrl/samples/odrl-policy-reference.json` |
| AIS-1 bonded agent profile | `profiles/ais1/schema.json` | `profiles/ais1/examples/bonded-agent-profile.example.json` |
| Trust artifact taxonomy | `model/trust-artifact-taxonomy.schema.json` | `model/trust-artifact-taxonomy.json` |
| Decision receipt | `decision/decision-receipt.schema.json` | `decision/examples/decision-receipt.example.json` |

## Local validation

Run:

```bash
node tools/lint-schemas.js
node tools/validate-conformance.js
```

The local script assumes `ajv` from `ajv-cli` is available on `PATH`.

## Evidence produced

Successful validation produces:

- schema/example compatibility evidence;
- release-documentation presence evidence;
- schema identity and documentation hygiene evidence;
- protection against stale `.DS_Store` and local-only artifacts;
- confirmation that examples referenced by the coverage manifest exist.
