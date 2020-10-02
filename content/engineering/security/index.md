# Security team

We think that security is an enabler for the business. Sourcegraph is committed to proactive security, and addressing vulnerabilities in a timely manner. We approach security with a can-do philosophy, and look to achieve product goals while maintaining a positive posture, and increasing our security stance over time.

## Goals

Our current work is documented in our [tracking issue](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+label%3Atracking+label%3Ateam%2Fsecurity+is%3Aopen).

### Visibility into Sourcegraph Cloud's attack surface

**Problem:** The Cloud team is working toward [private code on Sourcegraph Cloud](../cloud/index.md#private-code-on-sourcegraph-cloud). Before we can have [confidence in our security model](#confidence-in-our-security-model), we first need to have visibility into current risks, issues, and threats, so we can proactively plan what work needs to be done (i.e., we don't want to be relying on or waiting for security researchers or customer to report vulnerabilities to us).

**Milestones:**

1. All Docker images are continuously scanned for known security vulnerabilities and the security team is alerted as vulnerabilities are found.
1. All compute nodes are continuously scanned for known security vulnerabilities and the security team is alerted as vulnerabilities are found.
1. Vulnerabilities with a high severity, or a CVSS score of at least 4.0 are resolved.
1. Implement centralized storage of all of our existing logs (e.g., application logs, compute infrastructure logs).
1. Start collecting audit and access logs (e.g., visibility into both intentional and unintentional logins). This is useful from both a security visibility point of view, as also a requirement for various auditing frameworks (though not currently a target).
1. Normalize log format in our centralized log storage so that it is easier to correlate and search. This is a prerequisite for creating automated alerts from the logs.
1. Create alerts and dashboards to automate the process of investigating events of interest (e.g., detect and alert on a spike of failed login attempts to a single account, or across Sourcegraph Cloud as a whole).

### Confidence in our security model

**Problem:** We need to have a high degree of confidence in our overall security before we ask paying customers to trust us with their private code.

**Milestones:**

1. We connect our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) to Sourcegraph Cloud and only [members who can access that repository on GitHub](https://github.com/sourcegraph/security-test/settings/access) can access that repository on Sourcegraph Cloud (i.e., [Sourcegraph organization owners](https://github.com/orgs/sourcegraph/people?query=role%3Aowner) and [@sourcegraph/security](https://github.com/orgs/sourcegraph/teams/security) members).
   - **DEPENDENCY:** We can't do this until we can have [private code on Sourcegraph Cloud](../cloud/index.md#private-code-on-sourcegraph-cloud)
1. We advertise a bounty for each unique vulnerability that allows an unauthorized person to gain access to our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud.
   - **DEPENDENCY:** This milestone depends on milestone 3 of [Visibility into Sourcegraph Cloud's attack surface](#visibility-into-sourcegraph-clouds-attack-surface). We should detect and fix the obvious issues ourselves before we start to invite others to attack us with large bounties.
1. We run a time-bound capture the flag event where there are larger bounties for being able to gain access to our [test security repository](https://github.com/sourcegraph/security-test/blob/main/README.md) on Sourcegraph Cloud.
1. We host our private [infrastructure repository](http://github.com/sourcegraph/infrastructure) on Sourcegraph Cloud.
1. We allow paying customers to host their private code on Sourcegraph Cloud.

## Contact

- [security@sourcegraph.com](mailto:security@sourcegraph.com)
- #security channel Slack.
- [@sourcegraph/security](https://github.com/orgs/sourcegraph/teams/security) on GitHub.

## Responsibilities

- Proactively improve the security of our application and infrastructure.
- Define, plan, and prioritize security work that needs to be done (and then go do that work).
- Directly contribute to our codebase (i.e., Go, TypeScript, Kubernetes, Docker, Google Cloud Platform) to secure our application and deployments, and help other engineers on our team make the necessary changes.
- [Respond to security vulnerability reports](#how-we-respond-to-security-vulnerability-reports)
  - https://github.com/sourcegraph/security-issues
- Increase our security posture by running traditional security tools such as vulnerability scanners, SAST, and DAST tools.
  - https://github.com/sourcegraph/sourcegraph/security/code-scanning
- Create a culture of security at Sourcegraph that empowers all of our engineers to write secure code.

## Reporting a vulnerability

If you think that you have found a security issue, please email us at <a href="mailto:security@sourcegraph.com">security@sourcegraph.com</a>. We will reply to reports within 1 US business day to acknowledge that we received them and will strive to send you regular updates on our progress until the issue is resolved. You may request an update by replying to the existing email thread. We will read, but may not respond to low quality or spammy reports (e.g. those produced by automated tooling).

### Bounties

We provide monetary rewards, up to \$10,000 USD, for security vulnerability reports. The actual reward amount is determined based on the number of customers impacted, the difficulty of exploiting the vulnerability, and the severity of the consequences (e.g. service disruption, data leakage, reputational damage to Sourcegraph) of a successful exploit.

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

  > Thank you for your report. Could you please provide us with $INFOX, $INFOY, and \$INFOZ so we can investigate this further?

  > Thank you for your report. We will not be taking further action on this report because \$REASONS.

---

## How we work

On the security team, we work by planning, tracking, and reviewing - creating a feedback mechanism targeting our own continuous improvement based on the things we learn.

### Principles

1. [Goals](https://about.sourcegraph.com/company/goals/guidelines) are something we strive for, whilst tracking and communicating progress.
2. A work item is a piece of work (e.g., writing code, hiring a new teammate) that makes progress toward achieving a goal.
3. Releases may be made up of N workitems, that may impact Y goals. Whilst this is true, we communicate both internally and externally progress towards those goals.
4. Security by its various nature has public work items ([main repo](https://github.com/sourcegraph/sourcegraph) and private workitems ([security repo](https://github.com/sourcegraph/security-issues/)). Over time workitems should move from the private repository to the public repository once they can be made public. The ideal goal state is the lack of a private security repository.

### Planning

1. We plan iterations and features prior to their execution, in a team planning session.
2. We set one or more goals for the iteration.
3. We write RFCs and solicit feedback ideally, prior to the start of an iteration, but especially with forethought in mind.
4. We hold weekly team syncs and [track them here](https://docs.google.com/document/d/1l-JyN-hol2G6YXNqPsJsIgN2z3aZEzOW4-Julu4xthI).
5. We report on our status and progress weekly in [tracking issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Atracking+label%3Ateam%2Fsecurity), and radiate communication.

### Tracking

1. Goals are the combination of a [GitHub project](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Security) and issues with tags. GitHub tracking issue (labels: tracking, team/security) with an additional label (secgoal:<someshortthing1>) support tracking against a goal.
   a. Work items impacting this goal are created in GitHub, by using the labels team/security and secgoal:<someshortthing1>.
   b. When a work item is targets a specific release, the appropriate tracking label is added.
   c. Milestones for individual goals are communicated on the goal tracking issue.
2. Tracking issues are used for communicating status. We embrace the small, incremental, but well thought out changes. This provides the added benefit of easing communication with our customers, both internal and external.
   a. By tagging work items, the tracking issues are the source of truth on a per release basis.
   b. Each release has at least one goal associated with it, communicated in the tracking issue. These goals are release specific, meaning they may or may not be reflected in our existing project goals.

### Learning

After the each release, we hold a [retrospective](https://about.sourcegraph.com/retrospectives). We try to understand the degree to which we achieved the goals we communicated at the beginning of the iteration. We identify what went well and what our opportunities for improvement. We actively choose one of the things we've learned, and target its improvement.

### Working with other teams

The security team helps other teams investigate, orient, review, and sometimes plan changes.

**Small changes**

Small changes, defined as less than 1 day of effort are communicated in a GitHub issue, either in the [sourcegraph repository](https://www.github.com/sourcegraph/sourcegraph) or, when sensitive in nature, the [security repository](https://www.github.com/sourcegraph/security-issues). We provide a detailed bug report, including the steps to reproduce, and an example of the desired state. Where possible, we identify and propose a fix, and submit a pull request to the [code owner](../code_reviews.md#who-should-i-get-a-code-review-from).

**Medium changes**

Medium changes operate on the same principle as small changes, except that the code owner is always the one driving it. These changes also include a documented test plan for validation of the security change. These changes are usually take no more than one week.

**Large changes**

Changes that are cross-cutting or requiring greater than one week of effort are large, and communicated through [RFCs](../../communication/rfcs/index.md). The RFC provides as much context as possible about the issue, the reason for the change, and its relative importance and urgency. We collaborate on the RFC as a team, sharing the RFC with the Engineering Manager(s) for the impacted team for both feedback and [prioritizing](../../product/prioritizing.md). Upon approval, we create GitHub issues, labeling them with a new label, for the RFC (i.e RFC-214), sharing with the Engineering Manager. When possible, a member of the security team attends the planning session, to help provide input should more be needed.

**Providing input**

Teams planning and executing changes should ask for Pull Request reviews from the Security Team as needed to gain confidence in the implementation. Teams should also feel free to ask for a security review of any RFC they're working on that aren't directly created from the Security Goals.

## Members

- [Chayim Kirshen](../../../company/team/index.md#chayim-kirshen-he-him) ([Engineering Manager](../roles.md#engineering-manager)).
- [Elizabeth Stirling](../../../company/team/index.md#elizabeth-stirling-she-her)

## Open Positions

[Software Engineer - Security](../../engineering/hiring/software-engineer-security.md)
