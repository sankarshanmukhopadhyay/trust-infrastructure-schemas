# ODRL artifact family

## Why add this here

This repository is the canonical **artifact contract layer** for the broader trust stack. Some ecosystems need a machine-readable way to carry policy artifacts without inventing a repo-local shape for every policy-bearing integration.

ODRL is a good fit for that bounded job.

## What this directory does

The ODRL artifact family standardizes a simple carrier contract for:

- a stable policy identifier
- an optional ODRL profile reference
- the governed target
- publication mode
- a URI and hash for the referenced policy
- optional pointers to evaluator outputs

## What this directory does not do

This repository does **not** evaluate ODRL policy semantics and does **not** claim that policy publication equals trustworthy enforcement. It only provides the machine-readable contract so policy references can travel predictably.

## Files

- Schema: `../odrl/odrl-policy-reference.schema.json`
- Sample: `../odrl/samples/odrl-policy-reference.json`
- Registry usage: `../registry/sample-registry.json`

## Architectural boundary

- **TSMM** explains where ODRL fits in the broader trust-system semantics.
- **This repo** carries the policy artifact contract.
- **Domain baselines such as ANAB** may optionally publish ODRL references.
- **Evaluators** remain responsible for checking whether published policies are actually enforced.
