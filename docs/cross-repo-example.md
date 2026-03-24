# Cross-repo composition example

This note shows the intended layering across the current trust artifact stack.

## The composition pattern

1. **`trust-infrastructure-schemas`** defines the shared artifact contracts and canonical Assurance Level semantics.
2. **A domain baseline** such as `agent-name-assurance-baseline` produces a domain-specific conformance declaration and evidence bundle.
3. **A verifier method** such as DCAS evaluates that declaration and evidence using a repeatable workflow.
4. **A registry or catalog** can index the resulting declaration and its assurance posture without needing to understand domain-specific prose.

## Why this increment matters

The main interoperability risk was not schema syntax. It was control identifier drift across repositories. Some artifacts assumed only `SC-*` control IDs. That made the canonical layer unnecessarily narrow, because downstream baselines use their own namespaces such as `ANAGB-*`.

This release removes that bottleneck for the registry and generic conformance declaration artifacts. The shared layer now accepts namespaced control identifiers so downstream assurance packs can travel without lossy translation.

## Example

See `registry/sample-registry.json` for an illustrative entry showing how a registry can carry a declaration emitted by a downstream baseline while still preserving the canonical Assurance Level vocabulary.

## Practical takeaway

The canonical layer should standardize **how trust artifacts travel**, not force every downstream baseline to collapse into one local control namespace.


## ANAB-over-A2A follow-on

With the new ANAB-over-A2A binding, the composition chain can now include an Agent Card that carries references to a declaration, evidence bundle, card-binding material, and trust-anchor metadata. The canonical repo does not need to own the ANAB schema to make this legible. It needs to make clear that these are recognizable trust-artifact patterns traveling through the stack.
