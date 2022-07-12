# Cross-product ownership: Core workflow

**Owning PM:** [Ben Venker](../../team/#ben-venker)

**Design partners:** [Paulo Almeida](../../team/#paulo-almeida), [Quinn Keast](../../team/#quinn-keast)

> What is ["cross-product ownership"](cross-product_owners.md)?

The core workflow in Sourcegraph today is using Sourcegraph to unblock yourself or answer a question by performing a search and then reading and navigating through code.

The owning PM is the Directly Responsible Individual (DRI) for the core workflow ([scope](#the-core-workflow)), reporting to the CEO.

## Current efforts
The Core workflow ownership area is new and still being defined, but current efforts are:
- A rapid simplification of the existing Sourcegraph search UI without changing the underlying interaction models or structure of the search UI
- Long term strategy and outcome definition toward a re-envisioning of Sourcegraph’s core search workflow
- Defining the interface for teams to propose features into the Core workflow


## Goals

This initiative's charter is to make the core workflow **simpler, better, and more coherent**.

## The Core workflow

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

## Current strategy and processes

This role was created the final third of FY23 Q2 and the long term strategy and processes are still being defined.

### Short term

In the near term, the strategy is to prepare for deeper integration of Sourcegraph products and features by reducing the complexity of the core workflow. We'll do this by making high-confidence, low-effort changes which largely involve removing or consolidating features and experiences. Only a small number of new features will be introduced.

### Long term

TBD

###

## Interfacing with the Core workflow

TBD interface definition of how to get features into the core workflow. Pending conversations with product teams.

## Resources

- The first initiative is the **Core workflow punch list** ([GitHub project](https://github.com/orgs/sourcegraph/projects/271/views/1))
- For new and existing issues, here are the relevant GitHub labels: [cp-core-workflow](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Acp-core-workflow)
- Slack channel: [#cp-core-workflow](https://sourcegraph.slack.com/archives/C03N0HGN069)
