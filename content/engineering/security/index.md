# Security team

<div style="text-align: center; margin-bottom: 1rem">
  <img src="https://storage.googleapis.com/sourcegraph-assets/security-team-logo.jpg" width="50%" alt="Shielding Sourcegraph from attackers">
</div>

We think that security is an enabler for the business. Sourcegraph is committed to proactive security, and addressing vulnerabilities in a timely manner. We approach security with a can-do philosophy, and look to achieve product goals while maintaining a positive posture, and increasing our security stance over time.

## Contact

- [security@sourcegraph.com](mailto:security@sourcegraph.com)
- #security channel Slack.
- [@sourcegraph/security](https://github.com/orgs/sourcegraph/teams/security) on GitHub.
- [report a vulnerability](reporting-vulnerabilities.md)

## Goals and priorities

See [security goals and priorities](goals.md)

----

## Responsibilities

- Proactively improve the security of our application and infrastructure.
- Define, plan, and prioritize security work that needs to be done (and then go do that work).
- Directly contribute to our codebase (i.e., Go, TypeScript, Kubernetes, Docker, Google Cloud Platform) to secure our application and deployments, and help other engineers on our team make the necessary changes.
- [Respond to security vulnerability reports](#how-we-respond-to-security-vulnerability-reports)
  - https://github.com/sourcegraph/security-issues
- Increase our security posture by running traditional security tools such as vulnerability scanners, SAST, and DAST tools.
  - https://github.com/sourcegraph/sourcegraph/security/code-scanning
  - [Infrastructure information](./infrastructure/index.md)
  - [Security tooling](./tooling/index.md)
- Create a culture of security at Sourcegraph that empowers all of our engineers to write secure code.

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

The security team helps other teams investigate, orient, review, and sometimes plan changes. Teams [request security code reviews](secure-code-review.md).

**Small changes**

Small changes, defined as less than 1 day of effort are communicated in a GitHub issue, either in the [sourcegraph repository](https://www.github.com/sourcegraph/sourcegraph) or, when sensitive in nature, the [security repository](https://www.github.com/sourcegraph/security-issues). We provide a detailed bug report, including the steps to reproduce, and an example of the desired state. Where possible, we identify and propose a fix, and submit a pull request to the [code owner](../code_reviews.md#who-should-i-get-a-code-review-from).

**Medium changes**

Medium changes operate on the same principle as small changes, except that the code owner is always the one driving it. These changes also include a documented test plan for validation of the security change. These changes are usually take no more than one week.

**Large changes**

Changes that are cross-cutting or requiring greater than one week of effort are large, and communicated through [RFCs](../../communication/rfcs/index.md). The RFC provides as much context as possible about the issue, the reason for the change, and its relative importance and urgency. We collaborate on the RFC as a team, sharing the RFC with the Engineering Manager(s) for the impacted team for both feedback and [prioritizing](../../product/prioritizing.md). Upon approval, we create GitHub issues, labeling them with a new label, for the RFC (i.e RFC-214), sharing with the Engineering Manager. When possible, a member of the security team attends the planning session, to help provide input should more be needed.

**Providing input**

Teams planning and executing changes should ask for Pull Request reviews from the Security Team as needed to gain confidence in the implementation. Teams should also feel free to ask for a security review of any RFC they're working on that aren't directly created from the Security Goals.

**Deploying infrastructure**

Security develops infrastructure in the [Auxilliary project](https://console.cloud.google.com/home/dashboard?project=sourcegraph-server&_ga=2.42742757.1539584256.1606825468-757838940.1606655220). We work with the [Distribution team](https://about.sourcegraph.com/handbook/engineering/distribution) to deploy and test in dogfood, and promote to production. We are responsible for documentation and operating systems, and [Distribution](https://about.sourcegraph.com/handbook/engineering/distribution) helps make infrastructure production-ready based on our guidelines. Security acts as an input to Distribution.

## Members

- FQ1 [Engineering Manager](../roles.md#engineering-manager), Elizabeth acting manager until then. {#security-eng}
    - [Elizabeth Stirling](../../../company/team/index.md#elizabeth-stirling-she-her)
    - [André Eleuterio](../../../company/team/index.md#andré-eleuterio-hehim)
    - FQ1 [security engineer](https://hire.lever.co/jobs/postings/edit/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)
    - FQ2 [security engineer](https://hire.lever.co/jobs/postings/edit/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)
    - FQ3 [security engineer](https://hire.lever.co/jobs/postings/edit/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)
    - FQ4 [security engineer](https://hire.lever.co/jobs/postings/edit/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)

## Open Positions

[Software Engineer - Security](https://jobs.lever.co/sourcegraph/c36db3e1-0ece-465d-ad7c-1eb6de9a4b22)
