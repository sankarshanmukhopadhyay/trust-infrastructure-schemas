# Trust Infrastructure Schemas v0.11.0

## Delegation lineage becomes portable evidence

This release adds interoperable schema contracts for proving that downstream agent authority remains connected to an originating principal, bounded by the original transaction and intent, attenuated across every hop, and valid when branches cross domains or converge.

## Added

- Delegation lineage schema supporting linear, fan-out, and convergent topologies.
- Chain-verification schema with explicit principal, lineage, attenuation, freshness, domain, aggregation, and revocation checks.
- Positive linear and fan-out examples plus a negative scope-expansion fixture.
- Adoption and authority-boundary integration guidance.

## Compatibility

The release is additive and non-breaking. Existing authority-boundary payloads remain valid. Multi-hop implementations should reference the new lineage artifact as evidence.

## Security and assurance impact

The schemas make local credential validity insufficient on its own. Relying systems can now require a chain-level result before effect admission and retain evidence suitable for audit, challenge, and revocation review.
