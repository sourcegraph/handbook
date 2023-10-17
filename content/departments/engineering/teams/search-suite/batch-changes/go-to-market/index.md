# Batch Changes go-to-market hub

## Overview

- **Product name:** Batch Changes (formerly known as Campaigns)
- **Access and pricing:** Paid add-on for Enterprise customers; all customers can try the product (limit: 10 changesets)

## Positioning and Use Cases

### 1-sentence pitch

Sourcegraph Batch Changes enables developers to automate and manage large-scale code changes across all of their repositories and code hosts.

### Pains

When developers need to make changes across multiple repositories or workspaces:

- Asking each repository owner to make changes takes a lot of time and effort
- Tracking changes to many repositories requires spreadsheets and manual labor
- Automating applying changes with one-off scripts is brittle

### Benefits

- Reduce the time it takes to make large-scale code changes by up to 80%
- Turn control back to the developer making the change. Instead of asking for help, they can automate the change and ask for a review.

### Customer proof points

- [Workiva reduces the time it takes to make large-scale code changes by 80%](https://about.sourcegraph.com/case-studies/workiva-automates-large-scale-code-changes)
- [Indeed keeps code up to date and accelerates development velocity](https://about.sourcegraph.com/case-studies/indeed-accelerates-development-velocity)

## Go-to-market playbook

There are many ways to get value out of Batch Changes, but here are the two approaches that are the most successful:

### Playbook 1

- **Use cases**: Update platform components / libraries
- **User persona**: a platform team that is responsible for a framework or platform. Sample teams: Java platform team, client platform team, frontend platform team.
- **Painpoint**: When shipping new internal library versions with breaking changes, getting other teams to upgrade takes a lot of time and effort.
- **Product use case**: When updating boilerplate code, internal libraries, or frameworks across a company, use Batch Changes to rollout the upgrade to all consumer repositories.
- **Sponsor**: developer experience team
- [Examples](https://sourcegraph.productboard.com/feature-board/2104383-batch-changes/features/12303097/insights)

### Playbook 2

- **Use cases**: Maintain infra or respond to incidents
- **User persona**: an infrastructure team, sometimes also responsible for developer experience
- **Painpoint**: Infrastructure or configuration files have a lot of repetitive / boilerplate code that is very time-consuming to change.
- **Product use case**: ship updates to configuration across many repositories.
  - Quickly edit every CI, build, and other configuration files to make changes such as altering steps, migrating versions or changing base images.
  - Update infrastructure-as-code (eg. Terraform) files across many repositories

### Other product use cases

- Code security When problems occur with critical security updates, every hour that goes by increases risk. Batch Changes enables you to find any place where vulnerabilities exist and then refactor code to replace insecure functions, update vulnerable packages, or modify container configurations across hundreds of repositories.
- **Refactoring:** Use language-aware tooling of your choice to perform complex refactors like updating an API and its function calls or replacing libraries entirely.

Here is a list of detailed [usage examples](https://github.com/sourcegraph/batch-changes-use-cases) (private).

## Discovery

When talking to a platform, infrastructure or developer experience team, or as a starting point:

- How do you make large scale code changes at your company? Do you have any automation in place to fix / upgrade code at scale? What is it used for?
- Tell me about a time you had to change (functions, configuration, libraries) across your codebase?
- How does the core / platform team make sure that their internal customers upgrade to up to date libraries?
- What framework boilerplate code do you have to update?

If the developer does not know, default to:

- Tell me about a time you were asked to merge a change from a framework library?
- Tell me about a time you were blocked because an internal library wasn’t updated?
- Tell me about a time you were tracking pull requests in a spreadsheet?

## Resources

- [Batch Changes strategy page](../../../../../../strategy-goals/strategy/batch-changes/index.md)
- [Docs](https://docs.sourcegraph.com/batch_changes)
- [Demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw)
- [Blog post](https://about.sourcegraph.com/blog/introducing-batch-changes/)
- (private) AE training [recording](https://drive.google.com/file/d/10oeyEvKNKk4RdyJUtvc-rXcgcmGhSrc2/view?usp=sharing) [slides](https://docs.google.com/presentation/d/1N50kk1N712lvsWI_BrGB4WH8LHnOVYrkxqvRS9WubuA/edit#slide=id.g7d2aea8729_0_0)
- [Running batch changes server-side (Beta)](server-side/index.md)

### Interview guides

How to have fruitful conversations with:

- [Customers with existing in-house tooling](https://docs.google.com/document/d/1MuPIUh9Hr7hR3eWsa_uyeZpyA9N_-G4xPJaywvidZeU)
- [Customers with monorepos](https://docs.google.com/document/d/1jtDzkpTLer3Fbt__-SRB6RmFuo2YRuBFmyUSZ-H1A6I)
