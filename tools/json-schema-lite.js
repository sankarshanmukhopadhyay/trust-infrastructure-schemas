#!/usr/bin/env node
/**
 * Repository-local JSON Schema validator.
 *
 * Implements the JSON Schema features used by TIS schemas so candidate
 * validation has zero network/runtime package dependencies. This is not a
 * general-purpose JSON Schema implementation and MUST NOT be published as one.
 */

function ptr(root, ref) {
  if (!ref.startsWith('#/')) throw new Error(`Unsupported external $ref: ${ref}`);
  return ref.slice(2).split('/').reduce((o, part) => {
    const key = part.replace(/~1/g, '/').replace(/~0/g, '~');
    if (o == null || !(key in o)) throw new Error(`Unresolvable $ref: ${ref}`);
    return o[key];
  }, root);
}

function typeOk(type, value) {
  if (Array.isArray(type)) return type.some(t => typeOk(t, value));
  switch (type) {
    case 'object': return value !== null && typeof value === 'object' && !Array.isArray(value);
    case 'array': return Array.isArray(value);
    case 'string': return typeof value === 'string';
    case 'number': return typeof value === 'number' && Number.isFinite(value);
    case 'integer': return Number.isInteger(value);
    case 'boolean': return typeof value === 'boolean';
    case 'null': return value === null;
    default: return true;
  }
}

function eq(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

function validate(root, schema, value, path = '$') {
  const errors = [];
  const add = msg => errors.push(`${path}: ${msg}`);

  if (schema === true) return errors;
  if (schema === false) return [`${path}: rejected by false schema`];
  if (!schema || typeof schema !== 'object') return errors;

  if (schema.$ref) return validate(root, ptr(root, schema.$ref), value, path);

  if (schema.allOf) for (const s of schema.allOf) errors.push(...validate(root, s, value, path));
  if (schema.anyOf && !schema.anyOf.some(s => validate(root, s, value, path).length === 0)) add('must satisfy at least one anyOf branch');
  if (schema.oneOf) {
    const matches = schema.oneOf.filter(s => validate(root, s, value, path).length === 0).length;
    if (matches !== 1) add(`must satisfy exactly one oneOf branch (matched ${matches})`);
  }
  if (schema.not && validate(root, schema.not, value, path).length === 0) add('must not satisfy forbidden schema');
  if (schema.if && validate(root, schema.if, value, path).length === 0 && schema.then) errors.push(...validate(root, schema.then, value, path));
  if (schema.if && validate(root, schema.if, value, path).length !== 0 && schema.else) errors.push(...validate(root, schema.else, value, path));

  if ('const' in schema && !eq(value, schema.const)) add(`must equal const ${JSON.stringify(schema.const)}`);
  if (schema.enum && !schema.enum.some(v => eq(v, value))) add(`must be one of ${JSON.stringify(schema.enum)}`);

  if (schema.type && !typeOk(schema.type, value)) {
    add(`must be type ${JSON.stringify(schema.type)}`);
    return errors;
  }

  if (typeof value === 'string') {
    if (schema.minLength != null && value.length < schema.minLength) add(`length must be >= ${schema.minLength}`);
    if (schema.maxLength != null && value.length > schema.maxLength) add(`length must be <= ${schema.maxLength}`);
    if (schema.pattern) {
      let re;
      try { re = new RegExp(schema.pattern); } catch (e) { throw new Error(`Invalid schema regex ${schema.pattern}: ${e.message}`); }
      if (!re.test(value)) add(`must match ${schema.pattern}`);
    }
    // Deliberately mirrors the old Ajv configuration: validateFormats=false.
  }

  if (typeof value === 'number') {
    if (schema.minimum != null && value < schema.minimum) add(`must be >= ${schema.minimum}`);
    if (schema.maximum != null && value > schema.maximum) add(`must be <= ${schema.maximum}`);
  }

  if (Array.isArray(value)) {
    if (schema.minItems != null && value.length < schema.minItems) add(`must contain >= ${schema.minItems} items`);
    if (schema.maxItems != null && value.length > schema.maxItems) add(`must contain <= ${schema.maxItems} items`);
    if (schema.uniqueItems) {
      const seen = new Set(value.map(v => JSON.stringify(v)));
      if (seen.size !== value.length) add('items must be unique');
    }
    if (schema.items) value.forEach((v, i) => errors.push(...validate(root, schema.items, v, `${path}[${i}]`)));
    if (schema.contains && !value.some((v, i) => validate(root, schema.contains, v, `${path}[${i}]`).length === 0)) add('must contain an item matching contains');
  }

  if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
    for (const key of schema.required || []) if (!(key in value)) errors.push(`${path}.${key}: required property missing`);
    for (const [key, sub] of Object.entries(schema.properties || {})) if (key in value) errors.push(...validate(root, sub, value[key], `${path}.${key}`));
    for (const [pat, sub] of Object.entries(schema.patternProperties || {})) {
      const re = new RegExp(pat);
      for (const [key, v] of Object.entries(value)) if (re.test(key)) errors.push(...validate(root, sub, v, `${path}.${key}`));
    }
    if (schema.dependentRequired) {
      for (const [key, deps] of Object.entries(schema.dependentRequired)) if (key in value) for (const dep of deps) if (!(dep in value)) errors.push(`${path}.${dep}: required when ${key} is present`);
    }
    if (schema.additionalProperties === false) {
      const known = new Set(Object.keys(schema.properties || {}));
      const patterns = Object.keys(schema.patternProperties || {}).map(p => new RegExp(p));
      for (const key of Object.keys(value)) if (!known.has(key) && !patterns.some(re => re.test(key))) errors.push(`${path}.${key}: additional property not allowed`);
    } else if (schema.additionalProperties && typeof schema.additionalProperties === 'object') {
      const known = new Set(Object.keys(schema.properties || {}));
      for (const [key, v] of Object.entries(value)) if (!known.has(key)) errors.push(...validate(root, schema.additionalProperties, v, `${path}.${key}`));
    }
  }

  return errors;
}

module.exports = { validate };
