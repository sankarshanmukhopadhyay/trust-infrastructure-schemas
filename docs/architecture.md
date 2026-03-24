# Architecture snapshot

This diagram is a non-normative view of where this repository sits in a broader trust stack.

```mermaid
flowchart TB
  subgraph I[Identity Layer]
    DID[DIDs and identifiers]
    VC[Verifiable credentials]
  end

  subgraph A[Trust Artifact Layer]
    OTAM[Open Trust Artifact Model]
    AS[Assurance artifacts]
    CF[Conformance artifacts]
    OASF[OASF publication and evaluation artifacts]
    CT[Control artifacts]
    RG[Registry artifacts]
    OTAM --> AS
    OTAM --> CF
    OTAM --> OASF
    OTAM --> CT
    OTAM --> RG
  end

  subgraph G[Governance Layer]
    TF[Trust frameworks]
    PL[Policies and rules]
    MM[TSMM-style meta-models]
  end

  subgraph O[Operational Systems]
    DCAS[DCAS and assurance workflows]
    BAS[Domain baselines]
    REG[Trust registries]
    AG[Agent ecosystems]
  end

  DID --> VC --> OTAM
  TF --> OTAM
  PL --> OTAM
  MM -. semantic alignment .- OTAM
  AS --> DCAS
  CF --> DCAS
  OASF --> DCAS
  OASF --> AG
  CT --> BAS
  RG --> REG
  OTAM --> AG
```

## Notes

- The repository is positioned as the machine-readable artifact layer between identity primitives and governance systems.
- Schemas in this repository are implementations of a broader artifact model.
- Downstream assurance, registry, and agent systems can reuse the same artifact classes without copying semantics into each repository.

- OASF publication profiles and evaluation envelopes now sit inside the trust artifact layer as shared carrier contracts between semantic models, domain baselines, evaluators, and registry surfaces.
