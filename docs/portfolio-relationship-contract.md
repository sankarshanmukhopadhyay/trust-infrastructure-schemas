---
title: Portfolio Relationship Contracts
parent: Governance & Lifecycle
grand_parent: Documentation
nav_order: 3
---
# Portfolio Relationship Contracts

The `portfolio/` schemas provide portable contracts for representing portfolio relationships, repository authority, adoption paths, and validation results. They do not decide which portfolio relationships exist.

Portfolio classification remains the authority of the portfolio repository. TIS owns only the reusable serialization and validation contracts. This permits `portfolio-relationships.yaml` to become machine-validatable without creating a circular authority dependency.

The canonical relationship vocabulary includes `normative-dependency`, `informative-alignment`, `supports`, `profiles`, `implements`, `tested-by`, `evaluated-by`, `produces-evidence-for`, `assurance-feedback-to`, `incubates`, `fork-of`, and `nominates-review-for`.
