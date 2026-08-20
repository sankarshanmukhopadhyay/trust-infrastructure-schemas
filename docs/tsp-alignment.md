---
title: Transport alignment: ToIP Trust Spanning Protocol (TSP)
parent: Semantic Alignment
grand_parent: Documentation
nav_order: 12
---
# Transport alignment: ToIP Trust Spanning Protocol (TSP)

This repository is transport-agnostic. It defines machine-readable **data structures** that can be used as payloads in secure exchanges between endpoints.

## Why TSP is relevant

The ToIP **Trust Spanning Protocol (TSP)** defines a transport substrate for secure, privacy-preserving message exchange. When assurance artifacts, conformance results, or evidence bundles are exchanged between endpoints, TSP is a candidate transport layer.

Spec reference: https://trustoverip.github.io/tswg-tsp-specification/

## What this repo provides to transport

- Stable schemas for claims, evidence, and conformance artifacts.
- Versioned identifiers for reproducible evaluation and exchange.
- Deterministic validation tooling for CI enforcement.

## What this repo does not define

- Endpoint discovery and routing.
- Message encryption and authentication mechanisms.
- Network-level threat mitigation.

Those concerns are handled by the selected transport protocol (for example, TSP) and the implementation environment.
