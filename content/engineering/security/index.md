# Security team

We think that security is an enabler for the business. Sourcegraph is committed to proactive security, and addressing vulnerabilities in a timely manner. We approach security with a can-do philosophy, and look to achieve product goals while maintaining a positive posture, and increasing our security stance over time.

## Goals

Customers know they can confidently and securely use Sourcegraph with their private code.

[This (internal) document](https://docs.google.com/document/d/1HhYfnkC17yCPqqw91H1QAF7q8toOOiNtoOOw06hqrNQ/) details our plan.

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

## Reporting a Vulnerability

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

--------------------------

## How we Work

On the security team, we work by planning, tracking, and reviewing - creating a feedback mechansim targeting our own continuous improvement based on the things we learn.

### Principles

1. [Goals](https://about.sourcegraph.com/company/goals/guidelines) are something we strive for, whilst tracking and communicating progress.
2. A work item is a piece of work (e.g., writing code, hiring a new teammate) that makes progress toward achieving a goal.
3. Releases may be made up of N workitems, that may impact Y goals.  Whilst this is true, we communicate both internally and externally progress towards those goals.
4. Security by its various nature has public work items ([main repo](https://github.com/sourcegraph/sourcegraph) and private workitems ([security repo](https://github.com/sourcegraph/security-issues/)). Over time workitems should move from the private repository to the public repository once they can be made public.  The ideal goal state is the lack of a private security repository.

### Planning

1. We plan iterations and features prior to their execution, in a team planning session.
2. We set one or more goals for the interation.
3. We write RFCs and solicit feedback ideally, prior to the start of an iteration, but especially with forethought in mind.
4. We hold weekly team syncs and [track them here](https://docs.google.com/document/d/1l-JyN-hol2G6YXNqPsJsIgN2z3aZEzOW4-Julu4xthI).
5. We report on our status and progress weekly in [tracking issues](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3Atracking+label%3Ateam%2Fsecurity), and radiate communication.

### Tracking

1. Goals are the combination of a [GitHub project](https://github.com/orgs/sourcegraph/projects?query=is%3Aopen+Security) and issues with tags. GitHub tracking issue (labels: tracking, team/security) with an additional label (secgoal:<someshortthing1>) support tracking against a goal.
   a. Work items impacting this goal are created in GitHub, by using the labels team/security and secgoal:<someshortthing1>.
   b. When a work item is targets a specific release, the appropriate tracking label is added.
   c. Milestones for individual goals are communicated on the goal tracking issue.
   
2. Tracking issues are used for communicating status.  We embrace the small, incremental, but well thought out changes.  This provides the added benefit of easing communication with our customers, both internal and external.
   a. By tagging work items, the tracking issues are the source of truth on a per release basis.
   b. Each release has at least one goal associated with it, communicated in the tracking issue.  These goals are release specific, meaning they may or may not be reflected in our existing project goals.
   
### Learning

After the each release, we hold a [retrospective](https://about.sourcegraph.com/retrospectives). We try to understand the degree to which we achieved the goals we communicaed at the beginning of the iteration.  We idenitfy what went well and what our opportunities for imporvement.  We actively choose one of the things we've learned, and target its improvement.

## Members

- [Chayim Kirshen](../../../company/team/index.md#chayim-kirshen-he-him) ([Engineering Manager](../roles.md#engineering-manager)).
- [Elizabeth Stirling](../../../company/team/index.md#elizabeth-stirling-she-her)

## Open Positions

[Software Engineer - Security](../../engineering/hiring/software-engineer-security.md)
