# Cross-product ownership: Core workflow

**Owning PM:** [Ben Venker](../../team/#ben-venker)

**Design partners:** [Paulo Almeida](../../team/#paulo-almeida), [Quinn Keast](../../team/#quinn-keast)

> What is ["cross-product ownership"](cross-product_owners.md)?

The owning PM is the Directly Responsible Individual (DRI) for the core workflow ([scope](#the-core-workflow-in-the-sourcegraph-product)), reporting to the CEO.

## Overview

The core workflow in Sourcegraph today is using Sourcegraph to unblock yourself or answer a question by performing a search and then reading and navigating through code.

Its charter is to enable our [1-year vision](../../../../engineering/index.md#product-vision-and-strategy) of becoming a code intelligence platform by making the core workflow more powerful and intuitive, and leveraging our capabilities, to create irreplaceable dev tooling.

## Short-term execution

### Reducing complexity

Being recently created, the Core workflow's first short-term project is a rapid simplification of the existing Sourcegraph search UI without changing the underlying interaction models or structure. That work is nearly complete and has consisted largely of removing or consolidating old UI and UX that obstructed or distracted users.

## 1-year vision

### Evolving the core workflow

The longer term purpose of this ownership is to first evolve the core workflow to better empower developers in their daily work. We'll apply existing customer feedback, fresh research, technical capabilities, and design thinking to our customers' most challenging problems that we have an advantage in solving. Doing that to the best of our ability may mean some breaking changes to our current product, but they will always be in service of a better outcome for our users.

## How we'll do it

### Define the first principles of the core workflow

First, we have co-created [first principles for the core workflow](core_workflow_first_principles.md). Previously, these first principles were more implicitly understood than anything, and are oriented around code search without consideration of a broader workflow supporting code intelligence.

### Evolve the information architecture and interaction model behind the core workflow

Next, we’ll work on evolving the information architecture and interaction model behind the core workflow around these [first principles](core_workflow_first_principles.md). This will be done at a high level of information/documentation and low level of visual fidelity—just enough to align across teams on how the evolved conceptual model is surfaced.

We aren’t starting from scratch: the Search Product team has been exploring opportunities here that we'll continue building on. The underlying ideas around how the core workflow will extend and integrate with other product features like Code Insights and Batch Changes should be clear and intuitive as an outcome.

We’ll aim to explore, share, and collect feedback for this over the course of about a week.

### Rapid prototyping, building, and testing

Over the course of ~2 months, ahead of the Sourcegraph 4.0 release, we’ll rapidly prototype, build, and test this work. We want to move very quickly, but as this an intentionally large shift to the product, we must reduce risk as we go (we must not break Sourcegraph as a result of this work).

To help communicate and seek better feedback while we do this, we’ll define the key workflows / jobs-to-be-done that need to be demonstrably improved or retain effectiveness.

We’ll also start defining the key workflows / jobs-to-be-done enabled by the core workflow.

While the first shippable iteration will target the core workflow, we’ll work directly with teams like Code Insights, Batch Changes, and Code Navigation to integrate these features as quickly as possible under the shared interaction model.

## Timeline recap

- 2022-07-18 - 2022-07-22 – Define MVP of first principles for core workflow.
- 2022-07-25 - 2022-07-29 – Explore, share, collect feedback on evolved information architecture and interaction model.
- 2022-07-29 and on – Rapid prototyping, building, and testing.
- Targeting first shipped iteration for Sourcegraph 4.0

## The Core workflow in the Sourcegraph product

Core workflow ownership encompasses the following areas:

### By user experience

- Searching

  - Search bar
  - Suggestions
  - Search contexts

- Viewing and interacting with search results

  - Ranking search results
  - Rendering search results of all types
  - All interactions on the results page

- Viewing an individual result

  - File page
    - All UI and UX up to the opening of the code intel popover
      - All UI/UX that is a result of interacting with the popover (for example, the find references pane) falls under Code Navigation/Code Intel.

- Repo page
  - All UI/UX on the repo page itself
  - Ownership _doesn't_ extend to the Code Intelligence section on that page

### By screens

- Logged-in homepage
- Search results page
- File result page
- Repo result page (and child pages, excluding Code Intel)

## Resources

- The first initiative is the **Core workflow punch list** ([GitHub project](https://github.com/orgs/sourcegraph/projects/271/views/1))
- For new and existing issues, here are the relevant GitHub labels: [cp-core-workflow](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Acp-core-workflow)
- Slack channel: #cp-core-workflow
