# Pull Requests compliance and requirements

All pull requests must provide [a test plan](https://docs.sourcegraph.com/dev/background-information/testing_principles#test-plans) and be reviewed by a teammate. If for situational reasons, it needs to be exempted, an [exception is automatically recorded](https://docs.sourcegraph.com/dev/background-information/testing_principles#exceptions).

Exceptions are periodically reviewed by the @dev-infra-team infra-team on a weekly basis.

## Contact

Tag @dev-infra-team on Slack for help.

Discuss the process in #discuss-dev-infra.

## Process

### For all teammates

1. If a PR is considered to be an exception, a GitHub issue is automatically created over [a GitHub repository dedicated to track them](https://github.com/sourcegraph/sec-pr-audit-trail/issues), and the teammate who is responsible will be assigned.
1. When assigned such an issue, the teammate (or a peer) is required to post an explanation for the exception as well as to justify how it was reviewed and/or tested, and close it.
1. If the issue is reopened by @dev-infra-support, the teammate must update the explanation until considered valid by @dev-infra-support.

### For engineer on dev-infra-support rotation

> All issues prior to 2023-05-22 have been reviewed manually, even if they do not carry the `approved` label.

1. Current engineer on @dev-infra-support rotation reviews closed issues which do not have the label `approved`.
1. For each of those, if the provided explanation for the exception is valid, the engineer on rotation applies the label `approved`.
1. If the provided explanation is invalid, the issue is reopened with a comment explaining. Back to step 2 on [the teammates part of the process](#for-all-teammates).
