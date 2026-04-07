#!/usr/bin/env node
/**
 * Lightweight schema linter (no deps).
 * Enforces a minimal baseline of documentation and identity hygiene.
 *
 * Usage:
 *   node tools/lint-schemas.js
 */
const fs = require("fs");
const path = require("path");

const ROOTS = ["credentials", "assurance", "conformance", "controls", "model", "oasf", "odrl", "registry", "profiles", "common", "governance"];
const REQUIRED_TOP_LEVEL = ["$schema", "$id", "title", "description", "type"];

function walk(dir, out=[]) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.isFile() && (p.endsWith(".schema.json") || p.includes("/credentials/"))) out.push(p);
  }
  return out;
}

function load(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

let failed = false;

for (const root of ROOTS) {
  const files = walk(root);
  for (const f of files) {
    // Skip non-schema JSON under credentials if any appear in future.
    const obj = load(f);

    for (const k of REQUIRED_TOP_LEVEL) {
      if (!(k in obj)) {
        console.error(`LINT: missing '${k}' in ${f}`);
        failed = true;
      }
    }

    // Prefer explicit additionalProperties at the top-level object.
    if (obj.type === "object" && !("additionalProperties" in obj)) {
      console.error(`LINT: missing top-level 'additionalProperties' in ${f}`);
      failed = true;
    }

    // Encourage non-empty descriptions.
    if (typeof obj.description === "string" && obj.description.trim().length < 10) {
      console.error(`LINT: description too short in ${f}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log("Schema lint OK");
