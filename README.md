# coldqubit/.github

Organisation-level management for the **coldqubit** GitHub org: the org profile, the
org-wide community defaults, the governance of the home itself, and the
<https://coldqubit.org> website.

## What lives where

| Branch | Content |
| --- | --- |
| `main` | Org management: the [org profile README](profile/README.md), org governance ([GOVERNANCE.md](GOVERNANCE.md), [MAINTAINERS.md](MAINTAINERS.md)), org-wide default community health files ([CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), [SECURITY.md](SECURITY.md), [SUPPORT.md](SUPPORT.md)), and the [project proposal](.github/ISSUE_TEMPLATE/project-proposal.yml) issue form. |
| `web` | The <https://coldqubit.org> website, an orphan branch with no shared history, deployed by GitHub Pages in GitHub Actions mode. |

## Conventions

- `profile/README.md` renders on <https://github.com/coldqubit>.
- Health files here are **org-wide defaults**: they apply to every coldqubit
  repository that does not carry its own. A repository's own files always win.
- **New project proposals are issues on this repository**, not on a product's
  tracker: product trackers are scoped to that product's bugs and features. Use the
  [proposal form](https://github.com/coldqubit/.github/issues/new?template=project-proposal.yml).
- Website changes go to the `web` branch only; see its own README.
