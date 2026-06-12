# Contributing to coldqubit projects

Thanks for helping build the missing layers between a quantum circuit and production.
This is the **org-wide default** guide; a project's own `CONTRIBUTING.md` always wins
where it exists.

## Ground rules

- Be kind; follow the [Code of Conduct](CODE_OF_CONDUCT.md).
- Discuss non-trivial changes in an issue on the affected project first.
- Favor small, well-tested, well-reasoned changes. New behavior needs a test.
- Match the project's voice in docs and messages: precise, technical, honest. If
  something is planned, say planned.

## Where things go

- **Bug reports and feature requests**: the affected project's issue tracker.
- **New project proposals**: a
  [project proposal issue](https://github.com/coldqubit/.github/issues/new?template=project-proposal.yml)
  on this repository. See [GOVERNANCE.md](GOVERNANCE.md) for how proposals are decided.
- **Org-level questions** (standards, governance, the website): an issue on this
  repository.
- **Security problems**: never a public issue; see [SECURITY.md](SECURITY.md).

## Development workflow

Every project under the home is **container-first**: building and testing must work
through containers, with no host toolchain to install. The exact commands belong to
each project; check its own guide and `README`.

## Developer Certificate of Origin (DCO)

Contributions to every coldqubit project are accepted under the
[Developer Certificate of Origin](https://developercertificate.org/) 1.1: you certify
that you wrote the change, or otherwise have the right to submit it under the
project's Apache-2.0 license. You assert this by signing off each commit, which
`git commit -s` appends automatically:

```text
Signed-off-by: Your Name <you@example.com>
```

Use a real name and a reachable email. Commits without a sign-off are asked to amend
(`git commit --amend -s`, or `git rebase --signoff` for a branch). Inbound
contributions carry the same Apache-2.0 terms the projects ship under, so no separate
license assignment is required.
