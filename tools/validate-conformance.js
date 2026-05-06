#!/usr/bin/env node
/**
 * Reference validator for trust-infrastructure-schemas.
 *
 * This tool intentionally shells out to `ajv` so local validation mirrors CI.
 * Usage:
 *   node tools/validate-conformance.js
 */
const { execSync } = require("child_process");
const fs = require("fs");

function run(cmd) {
  execSync(cmd, { stdio: "inherit", shell: "/bin/bash" });
}

function exists(p) {
  try { fs.accessSync(p); return true; } catch { return false; }
}

function validate(schema, data, label) {
  if (!exists(schema)) throw new Error(`Missing schema: ${schema}`);
  if (!exists(data)) throw new Error(`Missing data/example: ${data}`);
  console.log(`== Validating ${label} ==`);
  run(`ajv validate -s ${schema} -d ${data} --strict=false`);
}

function validateCredentialFamilies() {
  for (const domain of ["dtg", "agent", "reputation"]) {
    console.log(`== Validating credential family: ${domain} ==`);
    const files = fs.readdirSync(`credentials/${domain}/v1`).filter((f) => f.endsWith(".json"));
    for (const base of files) {
      const schema = `credentials/${domain}/v1/${base}`;
      const example = `examples/${domain}/v1/${base.replace(/\.json$/, ".example.json")}`;
      validate(schema, example, `${domain}/${base}`);
    }
  }
}

function validateCoverageManifest() {
  validate("validation/artifact-coverage.schema.json", "validation/artifact-coverage.json", "artifact coverage manifest");
  const manifest = JSON.parse(fs.readFileSync("validation/artifact-coverage.json", "utf8"));
  for (const artifact of manifest.artifacts) {
    for (const field of ["schema", "documentation"]) {
      const value = artifact[field];
      if (Array.isArray(value)) {
        for (const p of value) if (!exists(p)) throw new Error(`Coverage manifest references missing ${field}: ${p}`);
      } else if (value && !exists(value)) {
        throw new Error(`Coverage manifest references missing ${field}: ${value}`);
      }
    }
    for (const p of artifact.examples || []) {
      if (!exists(p)) throw new Error(`Coverage manifest references missing example: ${p}`);
    }
  }
}

if (!exists("conformance/conformance-declaration.schema.json")) {
  console.error("ERROR: run from repository root.");
  process.exit(1);
}

try {
  validateCredentialFamilies();

  validate("conformance/conformance-declaration.schema.json", "conformance/examples/example-declaration.json", "conformance declaration example");
  validate("controls/controls.schema.json", "controls/controls.json", "controls registry");
  validate("assurance/assurance.schema.json", "assurance/assurance-levels.json", "assurance registry");
  validate("controls/mappings/control-assurance-matrix.schema.json", "controls/mappings/control-assurance-matrix.json", "control-to-assurance matrix");
  validate("registry/registry.schema.json", "registry/sample-registry.json", "registry simulation");
  validate("registry/registry-entry.schema.json", "examples/composition/registry-entry.example.json", "composition registry entry");
  validate("common/artifact-reference.schema.json", "common/examples/artifact-reference.example.json", "reusable artifact reference example");
  validate("governance/authority-boundary.schema.json", "governance/examples/authority-boundary.example.json", "authority boundary example");
  validate("evidence/evidence-bundle-manifest.schema.json", "examples/composition/evidence-bundle-manifest.example.json", "evidence bundle manifest example");
  validate("oasf/oasf-publication-profile.schema.json", "oasf/examples/oasf-publication-profile.example.json", "OASF publication profile example");
  validate("oasf/oasf-evaluation-envelope.schema.json", "oasf/examples/oasf-evaluation-envelope.example.json", "OASF evaluation envelope example");
  validate("oasf/oasf-evaluation-envelope.schema.json", "examples/composition/verifier-evaluation.example.json", "composition verifier evaluation example");
  validate("oasf/mappings/oasf-control-crosswalk.schema.json", "oasf/mappings/oasf-control-crosswalk.json", "OASF control crosswalk");
  validate("odrl/odrl-policy-reference.schema.json", "odrl/samples/odrl-policy-reference.json", "ODRL policy reference sample");
  validate("profiles/ais1/schema.json", "profiles/ais1/examples/bonded-agent-profile.example.json", "AIS-1 bonded agent profile example");
  validate("model/trust-artifact-taxonomy.schema.json", "model/trust-artifact-taxonomy.json", "trust artifact taxonomy");
  validate("decision/decision-receipt.schema.json", "decision/examples/decision-receipt.example.json", "decision receipt example");
  validate("conformance/conformance-declaration.schema.json", "examples/composition/domain-baseline-declaration.example.json", "composition domain baseline declaration");

  validate("model/tsmm-artifact-mapping.schema.json", "model/tsmm-artifact-mapping.json", "TSMM artifact mapping");
  validate("governance/authority-boundary.schema.json", "governance/examples/tsmm-derived-authority-boundary.example.json", "TSMM-derived authority boundary example");
  validate("evidence/evidence-bundle-manifest.schema.json", "evidence/examples/tsmm-evidence-bundle-manifest.example.json", "TSMM evidence bundle manifest example");
  validate("oasf/oasf-evaluation-envelope.schema.json", "examples/composition/tsmm-aligned/03-evaluation-envelope.example.json", "TSMM-aligned evaluation envelope example");
  validate("decision/decision-receipt.schema.json", "decision/examples/tsmm-mapped-decision-receipt.example.json", "TSMM-mapped decision receipt example");
  validate("registry/registry-entry.schema.json", "registry/examples/tsmm-derived-registry-entry.example.json", "TSMM-derived registry entry example");
  validate("governance/authority-boundary.schema.json", "examples/composition/tsmm-aligned/01-authority-boundary.example.json", "TSMM composition authority boundary");
  validate("evidence/evidence-bundle-manifest.schema.json", "examples/composition/tsmm-aligned/02-evidence-bundle-manifest.example.json", "TSMM composition evidence bundle");
  validate("decision/decision-receipt.schema.json", "examples/composition/tsmm-aligned/04-decision-receipt.example.json", "TSMM composition decision receipt");
  validate("registry/registry-entry.schema.json", "examples/composition/tsmm-aligned/05-registry-entry.example.json", "TSMM composition registry entry");

  validateCoverageManifest();

  console.log("OK");
} catch (e) {
  console.error(e.message || e);
  process.exit(2);
}
