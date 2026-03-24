# OASF artifact family

This document records the canonical OASF-shaped artifact patterns that now belong in this repository.

## Why this exists

The recent OASF integration work across TSMM, ANAB, and DCAS created a reuse pressure that should not be resolved through ad hoc copying. The same publication, evidence, and evaluation patterns will appear across multiple downstream repos. This repository is the right place to make those shapes boring, stable, and reusable.

## What is now canonical here

### 1. OASF publication profile

Schema: `../oasf/oasf-publication-profile.schema.json`

This artifact describes how a subject is published through an OASF-facing surface. It carries:

- subject identity and type
- declaration references
- evidence references
- semantic bindings
- control namespaces
- trust anchors

This is a shared transport and discovery shape. It is not a replacement for TSMM semantics, ANAB baselines, or DCAS evaluation logic.

### 2. OASF evaluation envelope

Schema: `../oasf/oasf-evaluation-envelope.schema.json`

This artifact describes how an evaluator publishes a result against an OASF-described subject or declaration set. It carries:

- evaluator metadata
- result and findings
- assurance level
- controls checked
- evidence bundle references
- semantic bindings

This keeps evaluator outputs portable without forcing evaluator-specific local formats to become canonical.

### 3. OASF control crosswalk

Artifacts:
- `../oasf/mappings/oasf-control-crosswalk.json`
- `../oasf/mappings/oasf-control-crosswalk.schema.json`

The crosswalk gives downstream repositories a shared pattern for mapping OASF-level control expectations into domain baselines and evaluator checks.

## Design boundary

This repository standardizes the reusable artifact shapes. It does not absorb:

- TSMM as the semantic owner of trust-system entities
- ANAB as the owner of agent-name baseline requirements
- DCAS as the owner of evaluator workflow behavior

The boundary is deliberate. This repository owns the artifact contracts that let those systems compose without semantic collapse.

## Practical consequence

A downstream repository can now publish:

- a declaration through the conformance schema
- an OASF publication profile
- evaluator results through an OASF evaluation envelope
- registry entries that point to all of the above

without inventing a new local carrier format each time.
