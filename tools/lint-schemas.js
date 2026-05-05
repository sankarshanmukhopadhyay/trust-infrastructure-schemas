#!/usr/bin/env node
/**
 * Lightweight schema and release linter (no external dependencies).
 *
 * Enforces a minimal baseline for schema identity, documentation hygiene,
 * release traceability, and local-artifact cleanliness.
 */
const fs = require("fs");
const path = require("path");

const ROOTS = ["credentials", "assurance", "conformance", "controls", "model", "oasf", "odrl", "registry", "profiles", "common", "governance", "decision", "evidence", "validation"];
const REQUIRED_TOP_LEVEL = ["$schema", "$id", "title", "description", "type"];
const EXPECTED_NAMESPACE = "https://raw.githubusercontent.com/sankarshanmukhopadhyay/trust-infrastructure-schemas/";

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.isFile() && (p.endsWith(".schema.json") || p.includes("/credentials/") || p === "profiles/ais1/schema.json")) out.push(p);
  }
  return out;
}

function walkAll(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory() && ![".git", "node_modules"].includes(ent.name)) walkAll(p, out);
    else if (ent.isFile()) out.push(p);
  }
  return out;
}

function load(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

let failed = false;
function fail(msg) {
  console.error(`LINT: ${msg}`);
  failed = true;
}

const version = fs.existsSync("VERSION") ? fs.readFileSync("VERSION", "utf8").trim() : "";
if (!version) fail("missing VERSION value");
if (version && !fs.existsSync(`docs/releases/${version}.md`)) fail(`missing release document docs/releases/${version}.md`);

for (const p of walkAll(".")) {
  if (path.basename(p) === ".DS_Store") fail(`local-only artifact found: ${p}`);
}

for (const root of ROOTS) {
  const files = walk(root);
  for (const f of files) {
    const obj = load(f);

    for (const k of REQUIRED_TOP_LEVEL) {
      if (!(k in obj)) fail(`missing '${k}' in ${f}`);
    }

    if (obj.type === "object" && !("additionalProperties" in obj)) {
      fail(`missing top-level 'additionalProperties' in ${f}`);
    }

    if (typeof obj.description === "string" && obj.description.trim().length < 10) {
      fail(`description too short in ${f}`);
    }

    if (obj.$id && !obj.$id.startsWith(EXPECTED_NAMESPACE)) {
      fail(`unexpected $id namespace in ${f}: ${obj.$id}`);
    }
  }
}

const coverage = "validation/artifact-coverage.json";
if (fs.existsSync(coverage)) {
  const manifest = load(coverage);
  for (const artifact of manifest.artifacts || []) {
    if (artifact.schema && !fs.existsSync(artifact.schema)) fail(`coverage schema missing: ${artifact.schema}`);
    for (const ex of artifact.examples || []) if (!fs.existsSync(ex)) fail(`coverage example missing: ${ex}`);
    for (const doc of artifact.documentation || []) if (!fs.existsSync(doc)) fail(`coverage documentation missing: ${doc}`);
  }
}

if (failed) process.exit(1);
console.log("Schema lint OK");
