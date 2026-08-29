#!/usr/bin/env node
const fs = require('fs');
const { validate: validateJsonSchema } = require('./json-schema-lite');

const schemaPath = 'assurance/assurance-lifecycle-event.schema.json';
const validFixtures = [
  'assurance/examples/assurance-lifecycle-event.material-change.example.json',
  'assurance/examples/assurance-lifecycle-event.non-material.example.json'
];
const invalidFixtures = [
  'assurance/examples/invalid/assurance-lifecycle-event.unknown-current.invalid.json',
  'assurance/examples/invalid/assurance-lifecycle-event.material-current.invalid.json',
  'assurance/examples/invalid/assurance-lifecycle-event.superseded-missing-ref.invalid.json'
];

function load(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'));
}

function semanticErrors(event) {
  const errors = [];
  if (event.impact === 'unknown' && event.disposition === 'current') {
    errors.push('unknown impact cannot retain current assurance');
  }
  if (event.impact === 'material' && event.disposition === 'current') {
    errors.push('material change cannot silently retain current assurance');
  }
  if (event.disposition === 'superseded' && !event.superseding_ref) {
    errors.push('superseded disposition requires superseding_ref');
  }
  if (event.disposition === 'reassessment_required' && (!Array.isArray(event.reassessment_scope) || event.reassessment_scope.length === 0)) {
    errors.push('reassessment_required disposition requires reassessment_scope');
  }
  return errors;
}

const schema = load(schemaPath);
let failed = false;

for (const path of validFixtures) {
  const data = load(path);
  const structural = validateJsonSchema(schema, schema, data);
  const semantic = semanticErrors(data);
  if (structural.length || semantic.length) {
    failed = true;
    console.error(`FAIL valid fixture ${path}`);
    for (const error of [...structural, ...semantic]) console.error(`- ${error}`);
  } else {
    console.log(`PASS valid fixture ${path}`);
  }
}

for (const path of invalidFixtures) {
  const data = load(path);
  const structural = validateJsonSchema(schema, schema, data);
  const semantic = semanticErrors(data);
  if (structural.length === 0 && semantic.length === 0) {
    failed = true;
    console.error(`FAIL invalid fixture unexpectedly admitted: ${path}`);
  } else {
    console.log(`PASS rejected invalid fixture ${path}: ${[...structural, ...semantic].join('; ')}`);
  }
}

if (failed) process.exit(1);
console.log('OK assurance lifecycle invariants');
