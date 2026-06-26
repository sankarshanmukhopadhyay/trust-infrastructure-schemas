# TSMM and TIS v0.10.0 Alignment

## Release position

TIS v0.10.0 makes TSMM runtime governance executable by adding artifact contracts for projections, lifecycle events, execution receipts, status checks, registry publication evidence, and integrity-bound evidence bundles.

## Layering

```text
TSMM = semantic governance model
TIS  = executable artifact contract layer
VTI  = authority and capability enforcement surface
OpenVTC = relationship and VRC workflow evidence surface
DTG = credential and graph-edge evidence surface
```

## Practical effect

A relying party can now ask not only whether an artifact exists, but whether the actor had authority, whether the requested effect was in scope, whether the evidence bundle was bound, whether status was current, and whether a decision receipt exists for the effect.
