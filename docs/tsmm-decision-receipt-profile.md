---
owner: maintainers
last_reviewed: 2026-05-05
applicable_version: v0.8.0
tier: 1
---

# TSMM Decision Receipt Profile

The TSMM decision receipt profile defines how a TSMM runtime trust decision is represented using `decision/decision-receipt.schema.json`.

## Required preservation

A TSMM-mapped decision receipt MUST preserve:

- decision identity;
- evaluated subject;
- decision maker;
- policy reference;
- evaluated artifacts;
- authority boundary;
- assurance level where claimed;
- result status;
- admitted and prohibited effects;
- decision timestamps;
- evidence references.

## Outcome mapping

| TSMM outcome | TIS decision type | TIS result status |
| --- | --- | --- |
| allow | accept | passed |
| deny | reject | failed |
| warn | defer | deferred |
| review | escalate | escalated |
| suspend | suspend | suspended |

See `decision/examples/tsmm-mapped-decision-receipt.example.json`.
