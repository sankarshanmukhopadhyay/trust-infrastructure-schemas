---
title: GitHub Pages
author: maintainers
parent: Governance & Lifecycle
grand_parent: Documentation
nav_order: 2
---
# GitHub Pages

TIS publishes its documentation as a Just the Docs site through the repository-owned GitHub Pages workflow in `.github/workflows/pages.yml`. The site is built from the repository root using `_config.yml`; it is **not** published by selecting `/docs` as a branch folder in GitHub Pages settings.

## Information architecture

Rendered navigation is task-oriented and intentionally independent of the repository's filesystem layout:

1. **Artifact Contracts** — schema and artifact surfaces.
2. **Semantic Alignment** — TSMM mappings, crosswalks, and trust-model semantics.
3. **Assurance & Validation** — candidate readiness, validation coverage, and evidence posture.
4. **Integration & Adoption** — runtime profiles, interoperability, and adoption guidance.
5. **Governance & Lifecycle** — portfolio relationships, documentation operations, and roadmap governance.
6. **Releases** — release history and compatibility context.

Existing documentation files remain at their established paths. Navigation is expressed through Just the Docs front matter, which avoids breaking inbound links merely to improve site structure.

## Publication contract

Before Jekyll builds, the Pages workflow runs:

```bash
node tools/validate-pages-ia.js
```

The check fails when a documentation page is orphaned, references an unapproved navigation parent, omits required hierarchy metadata, duplicates a sibling title, or when a required navigation hub disappears. The candidate assurance gate runs the same check through `npm run pages:check`.

The Pages workflow then builds the site with:

```bash
bundle exec jekyll build --trace
```

and verifies that the generated home page and Mermaid initialization assets are present before publishing the `_site` artifact.

## Adding documentation

When adding a substantive page under `docs/`, assign it to one of the six approved navigation hubs using front matter such as:

```yaml
---
title: Example Artifact Profile
parent: Artifact Contracts
grand_parent: Documentation
nav_order: 20
---
```

Add a new top-level hub only when the existing task model genuinely cannot accommodate the material. Any such change should update `tools/validate-pages-ia.js` in the same commit so the navigation model remains executable governance rather than an informal convention.
