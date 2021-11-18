# Batch Changes messaging and positioning

## Overview

- **Product name:** Batch Changes (formerly known as Campaigns)
- **Access and pricing:** Paid add-on for Enterprise customers; all customers can try the product (limit: 5 changesets)

## Positioning and value drivers

### 1-sentence pitch

Sourcegraph Batch Changes enables developers to automate and manage large-scale code changes across all of their repositories and code hosts.

### Value driver: Accelerate developer velocity

#### Pains

When developers need to make changes across multiple repositories or workspaces:

- Asking each repository owner to make changes duplicates effort and lengthens time required
- Tracking changes to many repositories requires spreadsheets and manual labor
- When problems occur with critical security updates, every hour that goes by increases risk
- Internal library authors need to enable and sometimes force upgrades.

#### Benefits

- Can reduce the time it takes to make large-scale code changes by 80%
- Improve code quality throughout the org by reducing the risk of bugs or bad code making it to production
- Turn control back to the developer making the change. Instead of asking for help, they can automate the change and ask for review.

#### Customer proof points

- [Workiva reduces the time it takes to make large-scale code changes by 80%](https://about.sourcegraph.com/case-studies/workiva-automates-large-scale-code-changes)
- [Indeed keeps code up to date and accelerates development velocity](https://about.sourcegraph.com/case-studies/indeed-accelerates-development-velocity)

## Personas

- **Engineering leadership:** Efficiency gains; accelerate developer velocity
- **Infrastructure, platform and framework teams:** Getting other teams to make changes is really hard and time consuming
- **Site reliability engineers:** Deploy & maintain services across hundreds of repos
- **Security engineers:** Faster updates = less risk
- **Engineers with microservice architectures** in general: Managing 10s to 100s of repos efficiently requires automation

## Use cases

- **Security:** When problems occur with critical security updates, every hour that goes by increases risk. Batch Changes enables you to find any place where vulnerabilities exist and then refactor code to replace insecure functions, update vulnerable packages, or modify container configurations across hundreds of repositories.
- **Configuration:** Quickly edit every CI, build, and other configuration files to make changes such as altering steps, migrating versions or changing base images.
- **Refactoring:** Use language-aware tooling of your choice to perform complex refactors like updating an API and its function calls or replacing libraries entirely.
- **Ship Breaking changes:** When updating boilerplate code, internal libraries, or frameworks across a company, use Batch Changes to rollout the upgrade to all consumer repositories.

## Discovery

When talking to a platform, infrastucture or developer experience team, or as a starting point:

- How do you make large scale code changes at your company? Do you have any automation in place to fix / upgrade code at scale? What is it used for?
- Tell me about a time you had to change (functions, configuration, libraries) across your codebase?
- How does the core / platform team make sure that their internal customers upgrade to up to date libraries?
- What framework boilerplate code do you have to update?

If the developer does not know, default to:

- Tell me about a time you were asked to merge a change from a framework library?
- Tell me about a time you were blocked because an internal library wasn’t updated?

## Resources

- [Docs](https://docs.sourcegraph.com/batch_changes)
- [Landing page](https://about.sourcegraph.com/batch-changes)
- [Demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw)
- [Blog post](https://about.sourcegraph.com/blog/introducing-batch-changes/)
- (private) AE training [recording](https://drive.google.com/file/d/10oeyEvKNKk4RdyJUtvc-rXcgcmGhSrc2/view?usp=sharing) [slides](https://docs.google.com/presentation/d/1N50kk1N712lvsWI_BrGB4WH8LHnOVYrkxqvRS9WubuA/edit#slide=id.g7d2aea8729_0_0)

### Interview guides

How to have fruitful conversations with:

- [Customers with existing in-house tooling](https://docs.google.com/document/d/1MuPIUh9Hr7hR3eWsa_uyeZpyA9N_-G4xPJaywvidZeU)
- [Customers with monorepos](https://docs.google.com/document/d/1jtDzkpTLer3Fbt__-SRB6RmFuo2YRuBFmyUSZ-H1A6I)
