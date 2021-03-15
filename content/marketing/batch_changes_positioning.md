# Batch Changes messaging and positioning 

## Overview

- **Product name:** Batch Changes (formerly known as Campaigns)
- **Marketing launch date:** 2021-03-24
- **Access and pricing:** Paid add-on for Enterprise customers; all customers can try the product (limit: 5 changesets)

## Positioning and value drivers

### 1-sentence pitch

Sourcegraph Batch Changes enables developers to automate and manage large-scale code changes across all of their repositories and code hosts.

### Value driver: Accelerate developer velocity 

#### Pains

- Asking each repository owner to make changes duplicates effort and lengthens time required
- Tracking changes to many repositories requires spreadsheets and manual labor
- When problems occur with critical security updates, every hour that goes by increases risk
- Internal library authors need to enable and sometimes force upgrades.

#### Benefits

- Can reduce the time it takes to make large-scale code changes by 80%
- Increase the speed and accuracy of making changes while reducing the risk of introducing breaking changes
- Improve code quality throughout the org by reducing the risk of bugs or bad code making it to production

#### Customer proof points

- Coming soon

## Personas

- **Engineering leadership:** Efficiency gains; accelerate developer velocity 
- **Infrastructure teams:** Getting other teams to make changes is really hard and time consuming
- **Site reliability engineers:** Deploy & maintain services across hundreds of repos
- **Security engineers:** Faster updates = less risk
- **Engineers with microservice architectures:** Managing 10s to 100s of repos efficiently requires automation

## Use cases

- **Security:** When problems occur with critical security updates, every hour that goes by increases risk. Batch Changes enables you to find any place where vulnerabilities exist and then refactor code to replace insecure functions, update vulnerable packages, or modify container configurations across hundreds of repositories.
- **Configuration:** Quickly edit every CI, build, and other configuration files to make changes such as altering steps, migrating versions or changing base images.
- **Refactoring:** Use language-aware tooling of your choice to perform complex refactors like updating an API and its function calls or replacing libraries entirely. 

## Discovery 

- How do you make large scale code changes at your company? Do you have any automation in place to fix / upgrade code at scale? What is it used for?
- Tell me about a time you had to change (functions, configuration, libraries) across your codebase?
- Tell me about a time you were asked to merge a change from a framework library?
- Tell me about a time you were blocked because an internal library wasn’t updated?
- How does the core / platform team make sure that their internal customers upgrade to up to date libraries?
- What framework boilerplate code do you have to update?

## Resources

- Training (internal)
- [Docs](https://docs.sourcegraph.com/batch_changes)
- Landing page (coming soon)
- [Demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw)
- Blog post (coming soon)
