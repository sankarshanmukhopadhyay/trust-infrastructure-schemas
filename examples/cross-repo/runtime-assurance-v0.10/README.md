# Runtime Assurance v0.10 Composition Pack

This example pack shows the v0.10.0 assurance chain across TSMM, VTI, OpenVTC, Trust Task receipts, evidence bundles, decision receipts, and registry publication.

```text
TSMM runtime governance projection
  -> VTI ACL / authorization evidence
  -> OpenVTC task evidence
  -> Trust Task lifecycle event
  -> Trust Task execution receipt
  -> Integrity-bound evidence bundle
  -> Decision receipt
  -> Registry publication profile
```

The pack demonstrates the core v0.10.0 rule: registry publication and task completion are not authorization by themselves. Authorization requires current authority, policy, evidence, status/revocation checks, and a decision receipt for the requested effect.
