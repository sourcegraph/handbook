# Frontend Platform strategy

The Frontend Platform team, by the nature of their purpose, does not follow a traditional product roadmap and instead focuses on high-impact projects aligned with Engineering department strategy. To inform our priorities, we gain crucial insights from quarterly DevX surveys, bi-weekly Frontend Crew discussions, and 1:1 syncs with our teammates.

## Mission

To empower all users and Sourcegraph frontend developers to achieve maximum efficiency and effectiveness by enabling and building a first-class web experience.

## Vision

Using and developing Sourcegraph is effortless.

- We have a frictionless developer experience that empowers our frontend engineers to achieve the maximum value from the time spent on development.
- We have an intuitive, performant, and consistent user experience that makes Sourcegraph an indispensable part of every developer workflow.

## Roadmap

[Full list of roadmap issues for Frontend Platform](https://github.com/orgs/sourcegraph/projects/214/views/21?filterQuery=label%3A%22team%2Ffrontend-platform%22)

See also our [completed goals](../../../departments/engineering/teams/frontend-platform/goals_completed.md).

### FY23 Q2

Once V2 of the Wildcard Component Library is over the finish line, we'll tackle the meat of our WCAG accessibility requirements by working with frontend teams to audit and improve their areas of ownership. We'll also work with DevX to introduce more actionable observability tooling that helps teams know how to find problems and fix them quickly, and we'll lay the groundwork for better integration, E2E, and visual testing suites.

- [Complete V2 of Wildcard Component Library](https://github.com/sourcegraph/sourcegraph/issues/31204)

- WCAG 2.1 AA Accessibility [auditing user journeys](https://github.com/sourcegraph/sourcegraph/issues/31475) and [fixing known issues](https://github.com/sourcegraph/sourcegraph/issues/31476)

- [Improve client-side observability on Sourcegraph Cloud](https://github.com/sourcegraph/sourcegraph/issues/26570)

- [Client flakes: low-hanging fruit](https://github.com/sourcegraph/sourcegraph/issues/38345)

### FY23 Q3

As we move towards Cloud (Managed Instances) as our preferred deployment method, it will become more important than ever that everything shipped to production is ready to be consumed by customers, which means we need better tests. We'll spend the first part of the quarter investigating pain points around our testing processes and exploring solutions to start implementing. And because quarterly DevX surveys report that "codebase inconsistency" negatively impacts the developer experience at Sourcegraph, we'll also focus on completing ongoing migrations and streamlinging file structure, naming conventions, and organization of reusable modules.

- [Improve consistency in Sourcegraph's frontend codebase](https://github.com/sourcegraph/sourcegraph/issues/33123)

- [Investigate alternatives to Percy/Chromatic for testing](https://github.com/sourcegraph/sourcegraph/issues/33740)

- [WCAG 2.1 AA Accessibility - Comprehensive audit and response](https://github.com/sourcegraph/sourcegraph/issues/33743)

### FY23 Q4

- [WCAG 2.1 AA Accessibility - Maintaining compliance](https://github.com/sourcegraph/sourcegraph/issues/33745)

- [Review and remove unnecessary RxJs in our codebase](https://github.com/sourcegraph/sourcegraph/issues/33124)

### FY24 Q1

- [Wildcard Design System as a product](https://github.com/sourcegraph/sourcegraph/issues/33747)
