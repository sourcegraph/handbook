# Change acceptance checklist <span class="badge badge-note">SOC2/GN-105</span>

This checklist encourages the authors, reviewers, and maintainers of pull requests (PRs) to confirm changes were analyzed for high-impact risks to quality, performance, reliability, security, and maintainability.

Using checklists improves quality in software engineering. This checklist is a straightforward tool to support and bolster the skills of contributors to the Sourcegraph codebase.

> NOTE: Not every change requires strict adherance to this checklist - see [Acceptance exceptions](#acceptance-exceptions).

## Checklist

### Quality

1. I have ensured my changes have been thoroughly [peer-reviewed per our pull request reviews guidelines](https://docs.sourcegraph.com/dev/background-information/pull_request_reviews).
2. For the code that this change impacts, I believe that the automated tests ([Testing principles and guidelines](https://docs.sourcegraph.com/dev/background-information/testing_principles)) validate functionality that is highly important to users (including consideration of all test levels).
3. If the existing automated tests do not cover the above functionality, I have added the necessary additional tests or added an issue to describe the automation testing gap and linked it to this PR.
4. I have considered the technical aspects of this change’s impact on Sourcegraph Cloud, self-managed, and managed customers.
5. I have considered the impact of this change on portions of the system owned by other teams and have requested reviews from members of the relevant team where appropriate.

### Performance and observability

1. I have assessed the performance implications of this change, or I have asked a reviewer to help assess the performance impact.
2. I have introduced adequate observability measures so that issues can easily be detected and monitored.

### Documentation

1. I have documented these changes in a [source of truth](../../../../../company-info-and-process/communication/index.md#sources-of-truth), or I have decided that they are not needed.
2. I have added/updated documentation or decided that documentation changes are unnecessary for this PR.

### Security

1. I have confirmed that if this PR contains changes pertaining to the processing or storing of credentials or tokens, authorization, and authentication methods, I have added the `security` label and I have requested a review from members of the [Security team](../../cloud/security/index.md).

### Deployment

1. I have considered using a feature flag for this change because the change may be high risk.
2. If I am using a feature flag:
   1. I plan to test the change on dogfood before I test it in Sourcegraph Cloud or a Sourcegraph release.
   2. I have considered rolling it out to just Sourcegraph teammates and/or to a subset of production customers before rolling it out to all customers in Sourcegraph Cloud or a full release.
3. I have requested reviews from members of the relevant [Cloud teams](../../cloud/index.md) where a change to self-managed, managed or the deployment of Sourcegraph Cloud is required.

## Exceptions

### Situational exceptions

If for a situational reason, a pull request needs to be exempted from the acceptance guidelines, skipping reviews or not checking the acceptance checkbox will trigger an automated process that will either:

- if an exception reason is provided, create an issue logging the reason and pull request
- create and link an issue requesting that the author document a reason for the exception

These exceptions will be tracked in [sourcegraph/sec-pr-audit-trail](https://github.com/sourcegraph/sec-pr-audit-trail).

### Fixed exceptions

The list below designates source code exempted from the acceptance guidelines because they do not directly impact the behaviour of the application in any way.

- [sourcegraph/sourcegraph](github.com/sourcegraph/sourcegraph)
  - `dev/*`: internal tools, scripts for the local environment and continuous integration.
  - `enterprise/dev/*`: internal tools, scripts for the local environment and continuous integration that fall under the [Sourcegraph Enterprise license](https://github.com/sourcegraph/sourcegraph/blob/main/LICENSE.enterprise).

## Appendix

- Sourcegraph Cloud: [the Sourcegraph deployment available to the public at sourcegraph.com](../deployments/instances.md#sourcegraph-cloud)
- Self-managed customers: [customers who self-host Sourcegraph instances](https://docs.sourcegraph.com/admin/install)
- Managed customers: [managed Sourcegraph instances](https://docs.sourcegraph.com/admin/install/managed)
- Sourcegraph release: [versioned releases of Sourcegraph](../releases/index.md)
- Staging/Dogfood: [pre-production environment](../deployments/instances.md#k8s-sgdev-org)
