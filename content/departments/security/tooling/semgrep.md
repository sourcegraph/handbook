# Semgrep OSS vulnerability scanning

We use [Semgrep OSS][0] as a static analysis tool to analyse the code in the
`sourcegraph/sourcegraph` and `sourcegraph/cody` repository for security vulnerabilities
and bad patterns. We have published playbook below seperately to resolve issues, false positives.

- [Developer playbook](1)
- [Security engineer playbook](2)
- [Operational playbook](3)

## For Sourcegraph engineers

### For resolving Semgrep SAST alerts

Semgrep [Developer playbook](1) is well documented handling any situation that developer faces.
Any Semgrep issues should be visible to you via the output of the `Semgrep OSS /
Code Analysis` GitHub check and as Github Comments.

If the offending commit has to be landed as part of resolving an incident,

- Check the [Developer Playbook](1) to resolve semgrep alert through source code comments.
- (or) find an admin for the repository (for whom branch protection rules will not apply) to
  merge the code in for you.

### For Semgrep SAST Stuck issues

This rarely happens (less than 0.5%), but if it does, please follow the steps below:

- Ensure your branch is up to date with the `main` or default branch. If not please rebase your branch.
- If the issue is still not resolved, please reach out to the Security team in #discuss-security.
- (or) find an admin for the repository (for whom branch protection rules will not apply) to
  merge the code in for you.

If you're not still clear on how to resolve an issue raised by Semgrep, please reach out
to the Security team in #discuss-security.

## For Security engineers

### Security Engineer Playbook

[Security Engineer playbook](2) contains all information including triaging alerts, tweak rules, semgrep errors.
If you come up with unique issues scenario, please document in the same playbook.

### Operational Playbook

[Operational playbook](3) contains all information including architecture, tweaking rules, upgrading
semgrep versions, stuck issues. If you come up with unique operational issues scenario, please document
in the same playbook.

## Semgrep SAST Alerts and Metrics

Semgrep SAST alerts are stored in SIEM and can be queried from Elasticsearch (index: github-code-scanning).
Additionally, SAST metrics dashboard is published under Analytics > Dashboard > Semgrep SAST Scan metrics.

[0]: https://semgrep.dev
[1]: https://github.com/sourcegraph/infrastructure/tree/main/security/tooling/sast/playbook
[2]: https://github.com/sourcegraph/infrastructure/blob/main/security/tooling/sast/playbook/security-engineers-playbook.md
[3]: https://github.com/sourcegraph/infrastructure/blob/main/security/tooling/sast/playbook/operational-playbook.md
