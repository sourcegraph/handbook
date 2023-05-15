# Pull Requests compliance and requirements

All pull requests must provide [a test plan](https://docs.sourcegraph.com/dev/background-information/testing_principles#test-plans) and be reviewed by a teammate. If for situational reasons, it needs to be exempted, an [exception is automatically recorded](https://docs.sourcegraph.com/dev/background-information/testing_principles#exceptions).

Exceptions are periodically reviewed by the @dev-experience-team on a weekly basis.

## Contact

Tag @dev-experience-team on Slack for help.

Discuss the process in #ask-dev-experience.

## Process

### For all teammates

1. If a PR is considered to be an exception, a GitHub issue is automatically created over [a GitHub repository dedicated to track them](https://github.com/sourcegraph/sec-pr-audit-trail/issues), and the teammate who caused it is assigned to it.
1. When assigned such an issue, the teammate (or a peer) has to post an explanation for the exception as well as to justify how it was reviewed and/or tested, and close it.
1. If the issue is reopened by @dev-experience-support, the teammate must update the explanation until considered valid by @dev-experience-support.

### For engineer on dev-experience-support roation

> All issues prior to 2023-05-22 have been reviewed manually, even if they do not carry the `approved` label.

1. Current engineer on @dev-experience-support rotation reviews closed issues which do not have the label `approved`.
1. For each of those, if the provided explanation for the exception is valid, the engineer on rotation applies the label `approved`.
1. If the provided explanation is invalid, the issue is reopened with a comment explaining. Back to step 2 on [the teammates part of the process](#for-all-teammates).
