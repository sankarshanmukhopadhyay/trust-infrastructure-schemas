# Stable identifier governance

This repository is the canonical publication point for trust-infrastructure artifact contracts. That makes identifier hygiene part of the product, not housekeeping.

## Rules

### 1. `$id` values MUST point at the current repository name

Published schema identifiers MUST use the `trust-infrastructure-schemas` repository path and MUST NOT use the retired upstream `schemas` path or placeholder hosts.

### 2. Release tags are the canonical pin for published contracts

Consumers SHOULD pin to a release tag such as `v0.6.0`.

- `main` is acceptable for exploration and draft integration.
- release tags are the only stable production pin
- examples in this repository SHOULD demonstrate pinned references where possible

### 3. Minor and patch lines preserve contract identity within a major shape

For a non-breaking update:

- keep the same schema path
- publish a new tagged release
- preserve compatibility for previously valid payloads
- update examples and docs so they reference the latest stable release tag

### 4. Breaking changes require a new major path or explicitly versioned schema family

If a change invalidates previously valid payloads or reinterprets the meaning of an existing field, the change MUST be treated as breaking. In practice that means introducing a new versioned path such as `v2/` or a new schema family path.

### 5. Example artifacts are part of the contract surface

Examples SHOULD be useful pinned references, not vague placeholder prose. When a machine-readable example demonstrates a composition pattern, it SHOULD carry:

- a stable schema or artifact URI
- integrity material where relevant
- a clear scope and authority boundary
- enough metadata for downstream repos to reuse the example shape without translation

## Operational guidance

When updating this repository in a normal commit:

1. update schema `$id` values only when they are wrong, stale, or still point at `main`
2. refresh example artifacts that embed release-pinned references
3. update README and docs index if a new artifact family or contract is introduced
4. run repository validation so identifier drift is caught alongside schema drift

## Why this matters

The artifact layer becomes operational infrastructure only when downstream repos can pin, validate, and audit against stable identifiers. Unstable `$id` values create hidden semantic drift, make caching unreliable, and force local glue code. This repository should remove that ambiguity.