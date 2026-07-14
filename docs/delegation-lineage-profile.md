# Delegation Lineage Profile

## Applicability

Use this profile when delegation depth exceeds one, a workflow crosses trust domains, concurrent branches converge, or revocation must propagate beyond an immediate delegate.

## Required verifier behaviour

A verifier must check principal continuity, complete parent references, monotonic scope attenuation, transaction and intent binding, status freshness, domain-transition evidence, aggregate branch authority, and revocation propagation where applicable.

## Adoption sequence

1. Issue or resolve the root mandate.
2. Create one hop record for every authority transfer.
3. Bind every hop to the same transaction and originating principal.
4. Compare granted scope to parent scope.
5. Record domain mappings and branch convergence.
6. Produce a chain verification artifact before effect admission.

## Failure handling

A failed or indeterminate chain check must deny the effect or route it to an explicitly authorized escalation path. Authentication of the current actor does not override a failed lineage check.
