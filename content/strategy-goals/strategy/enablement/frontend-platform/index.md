# Frontend Platform strategy

The Frontend Platform team, by the nature of their purpose, does not follow a traditional product roadmap and instead focuses on high-impact projects aligned with the company's OKRs.

## Mission

To empower all users and Sourcegraph frontend developers to achieve maximum efficiency and effectiveness by enabling and building a first-class web experience.

## Vision

Using and developing Sourcegraph is effortless.

- We have a frictionless developer experience that empowers our frontend engineers to achieve the maximum value from the time spent on development.
- We have an intuitive, performant, and consistent user experience that makes Sourcegraph an indispensable part of every developer workflow.

## Roadmap

[Full list of roadmap issues for Frontend Platform](https://github.com/orgs/sourcegraph/projects/214/views/21?filterQuery=label%3A%22team%2Ffrontend-platform%22)

See also our [completed goals](../../../../departments/product-engineering/engineering/enablement/frontend-platform/goals_completed.md).

### FY23 Q1

The main focus for Q1 is laying the groundwork to meet our contractual WCAG compliance requirements by the end of FY2023. We also want to 1) Reduce the flakiness of E2E tests by refactoring them, assigning ownership, and providing guidance for writing better tests and 2) Finish up implementing and migrating React components to the Wildcard Component Library, which streamlines the "look and feel" of the Sourcegraph platform and makes it easier for frontend devs to do their work.

- [Complete V2 of Wildcard Component Library](https://github.com/sourcegraph/sourcegraph/issues/31204)

- [Refactor E2E testing](https://github.com/sourcegraph/sourcegraph/issues/31206)

- [Documentation and planning on WCAG 2.1 AA compliance](https://github.com/sourcegraph/sourcegraph/issues/31200)

### FY23 Q2

In Q2 we'll tackle the meat of our WCAG accessibility requirements by working with frontend teams to audit and improve their areas of ownership. Because quarterly DevX surveys report "codebase inconsistency" as a contributor to poor developer experience at Sourcegraph, we'll focus on migrations that standardize our frontend code and setup automations to prevent regressions. Finally, we'll work with backend teams to introduce more actionable observability tooling that helps teams know how to find problems and fix them quickly.

- [Improve consistency in Sourcegraph's frontend codebase](https://github.com/sourcegraph/sourcegraph/issues/33123)

- [Improve client-side observability on Sourcegraph Cloud](https://github.com/sourcegraph/sourcegraph/issues/26570)

- WCAG 2.1 AA Accessibility [auditing user journeys](https://github.com/sourcegraph/sourcegraph/issues/31475) and [fixing known issues](https://github.com/sourcegraph/sourcegraph/issues/31476)

### FY23 Q3

- [Review and remove unnecessary RxJs in our codebase](https://github.com/sourcegraph/sourcegraph/issues/33124)

- [Investigate alternatives to Percy/Chromatic for regression testing](https://github.com/sourcegraph/sourcegraph/issues/33740)

- [Wildcard Design System as a product](https://github.com/sourcegraph/sourcegraph/issues/33747)

- [WCAG 2.1 AA Accessibility - Comprehensive audit and response](https://github.com/sourcegraph/sourcegraph/issues/33743)

### FY23 Q4

- [WCAG 2.1 AA Accessibility - Maintaining compliance](https://github.com/sourcegraph/sourcegraph/issues/33745)

- [Improve regression testing tooling](https://github.com/sourcegraph/sourcegraph/issues/33748)
