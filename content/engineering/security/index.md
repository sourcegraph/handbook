# Security team

## Vision

Make Sourcegraph secure by design.

## Contact

- [security@sourcegraph.com](mailto:security@sourcegraph.com)
- #security channel Slack.
- [@sourcegraph/security](https://github.com/orgs/sourcegraph/teams/security) on GitHub.

## How to report a security vulnerability

If you think that you have found a security issue, please email us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>. We will reply to reports within 1 business day to acknowledge that we received them and will strive to send you regular updates on our progress until the issue is resolved. You may request an update by replying to the existing email thread. We will read, but may not respond to low quality or spammy reports (e.g. those produced by automated tooling).

### Bounties

We provide monetary rewards, up to $10,000 USD, for security vulnerability reports. The actual reward amount is determined based on the number of customers impacted, the difficulty of exploiting the vulnerability, and the severity of the consequences (e.g. service disruption, data leakage, reputational damage to Sourcegraph) of a successful exploit.

We will send payment to a valid PayPal account after the issue is confirmed fixed or 90 days from the original report, whichever happens first. We will ask you for the name and country associated with your PayPal account.

We may choose to not issue a reward if any of the following apply:

1. You engage in disruptive behavior on sourcegraph.com itself (e.g. spamming our system with requests, fake accounts, denial of service). Sourcegraph is [open source software](https://github.com/sourcegraph/sourcegraph), so you can [install a copy yourself](https://docs.sourcegraph.com/#quickstart-guide) and test against that instead.
1. You publicly disclose a vulnerability before we confirm that it is OK to do so. We want to give our customers time to upgrade to a patched version before public disclosure.
1. You spam us with duplicate and/or low quality vulnerability reports (e.g. copy/pasting generic issues from automatic scanning tools).
1. You are a current or former teammate at Sourcegraph (e.g. employee, contractor, intern).
1. You are friends or family with a current or former teammate at Sourcegraph.

## How we respond to security vulnerability reports

When we receive [a report of a security vulnerability](#how-to-report-a-security-vulnerability), a member of our security team determines if a reported vulnerability should be investigated by an engineer.

- If so, a member of our security team will [file a vulnerability report in sourcegraph/security-issues](https://github.com/sourcegraph/security-issues/issues/new/choose) and follow the checklist in the issue template.

- If not, a member of our security team will respond to the report to notify the reporter why we are not acting on the report.

  > Thank you for your report. Could you please provide us with $INFOX, $INFOY, and $INFOZ so we can investigate this further? 

  > Thank you for your report. We will not be taking further action on this report because $REASONS.
