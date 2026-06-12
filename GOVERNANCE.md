# Governance

coldqubit is an independent, open-source **project home** for quantum tooling: the
missing layers between a runnable quantum circuit and production. It is not a company
and not a one-person hobby. This document describes how the home itself is run and how
projects enter, live under, and leave it. It is intentionally lightweight and matches
the home's current size: one maintainer today, structured to grow.

Per-project decisions belong to each project. A project may carry its own
`GOVERNANCE.md` (shotgate [does](https://github.com/coldqubit/shotgate/blob/main/GOVERNANCE.md));
where it has none, this document applies.

## Scope

coldqubit hosts tooling at the quantum × DevOps junction: testing, gating,
orchestration, observability, policy, infrastructure as code, and the other layers a
quantum workload needs to ship through a real pipeline. General quantum SDKs,
algorithms research, and hardware projects are out of scope.

## Roles

- **Users** open issues on the project they use, ask questions, and propose features.
- **Contributors** send pull requests to any project. Start with that project's
  contributing guide, or the org-wide [CONTRIBUTING.md](CONTRIBUTING.md).
- **Project maintainers** review and merge, cut releases, and steward one project's
  roadmap. Each project lists its roster (shotgate:
  [MAINTAINERS.md](https://github.com/coldqubit/shotgate/blob/main/MAINTAINERS.md)).
- **Home maintainers** steward the org itself: accept and archive projects, hold the
  shared standards, and maintain this repository. The roster is in
  [MAINTAINERS.md](MAINTAINERS.md).

## How decisions are made

Routine changes anywhere are decided by **lazy consensus**: a maintainer approves and
merges, and any maintainer may ask to hold a change for discussion before it lands.

Substantial or hard-to-reverse decisions are written down before they happen.
Project-scoped ones are recorded as Architecture Decision Records in that project
(shotgate's live in
[docs/adr/](https://github.com/coldqubit/shotgate/tree/main/docs/adr)). Org-scoped
ones (accepting a project, archiving one, changing a shared standard or this document)
are discussed in an issue on this repository and recorded in the merged pull request.

While there is a single home maintainer, that maintainer is the final decision-maker.
As maintainers are added, decisions move to consensus among them, with the lead
maintainer breaking ties only when consensus is not reached. The explicit goal is that
no decision depends on one person staying available.

## Project lifecycle

### Proposing a project

New projects start as a **project proposal issue on this repository**:
[propose a project](https://github.com/coldqubit/.github/issues/new?template=project-proposal.yml).
Proposals are discussed in the open and accepted by lazy consensus of the home
maintainers. A proposal does not need working code; it needs a real gap, a credible
shape, and someone willing to maintain it.

### Shared standards

Every project under the home commits to the same standard:

- **Apache-2.0** license and **DCO** sign-off on inbound contributions.
- **Container-first reproducibility**: anyone can build and test without host setup.
- **Honest status labels**: alpha is called alpha, planned is called planned,
  validated means measured.
- **The shared design system**: the tile-based mark language with one new glyph and
  one owned accent per project; verdict green/red/amber stays reserved.
- A clear maintainer roster, its own or by reference to this home.

### Accepted, archived

An accepted project gets a repository under the org, a product number, and a slot on
[coldqubit.org](https://coldqubit.org). A project whose maintainers step away and that
finds no successor is archived in place, readable forever, labelled honestly.

## Changing the maintainer roster

Adding or removing a home maintainer is a pull request against
[MAINTAINERS.md](MAINTAINERS.md), confirmed by lazy consensus of the current home
maintainers. Project rosters change the same way in their own repositories.

## Code of conduct, security

Participation everywhere under the home is governed by the
[Code of Conduct](CODE_OF_CONDUCT.md). Security reports follow
[SECURITY.md](SECURITY.md); never report vulnerabilities in public issues.
