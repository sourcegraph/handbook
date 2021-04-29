# Code insights goals and roadmap

## Goals

See also our [completed goals](goals_completed.md).

### FY22 OKR: 3 enterprise customers have created 2+ code insights that they check 2+ times a week

**Problem:** Engineers and engineering managers/directors/VPs want to be able to understand their codebase at a high level (which parts of the code base are health/unhealthy? How close are we to removing all instances of a code smell?). Existing tools that just use git data don't answer these questions because they don't look at the code itself, just the pattern of commits. Sourcegraph has all the information needed to answer these questions, but there is currently no way for an engineering leader to get the answer out of Sourcegraph.

**Value to Sourcegraph:** The Sourcegraph sales cycle is unusual because although we consistently wow our users, the economic decision-maker is usually not one of these users. Instead, the people with the power to sign a contract with us are higher up within an organization and usually depend on running a trial to fully understand the value of Sourcegraph. When code insights answers these personas' higher-level questions about codebases that our core features do not currently answer, it can dramatically speed up our sales cycle as well as our sales pipeline by giving decision makers a reason to buy Sourcegraph without needing to run a trial.

#### FY22Q1 OKR: 3 enterprise customers have created a code insight

**Problem:** While our existing code insights prototypes get customers interested in trying the product, they currently cause many problems for a customer who tries to use them, because:
- The backend runs slowly on the scale of many days to populate data, and the frontend doesn't reveal or mitigate this
- You create code insights in your settings file, which creates a poor UX for creating a code insight
- There is limited in-product guidance of how to use or view code insights

**Milestones and outcomes:**

1.  Customers can easily create their own custom insights using a dedicated UI.

    - **Outcome:** Code insights can move from prototype to beta feature (easy to enable or enabled by default, documented, and supported by the CE team rather than the product team).
    - **Outcome:** At least three customers create their own code insights that they actively reference.

1. Code insights running on the backend over a large scale of repos create a positive user experience even if they require a long loading time.

    - **Outcome:** We see code insights churn after creation of an insight decrease by 50%.

#### Future milestones and outcomes:

1. Code insights are useful to a broad set of customers (this may include integrations with batch changes, code monitoring, or third party data sources – see [Productboard feature view](https://sourcegraph.productboard.com/feature-board/1793095-code-insights)).

    - **Outcome:** Code insights features are actively in use by VPs/Directors at 5+ enterprise customers.

1. Code insights is GA (generally available) for all customers and has low/no barriers to wide adoption.

    - **Outcome:** Customers communicate to their AE/CE that they use code insights in making engineering decisions.
    - **Outcome:** 10% of Sourcegraph customers actively use code insights.
    - **Outcome:** Customers use code insights with limited help from CE in setting them up.

1. Code insights provides enough value to be a paid product.

    - **Outcome:** Existing customers buy code insights as its own paid feature.
    - **Outcome:** Customers who express explicit interest in the code insights features have a faster sales cycle through our pipeline than our average customer.
    - **Outcome:** Code insights is the primary driver behind 5 new enterprise sales.

## Roadmap

Our [roadmap is in Productboard](https://sourcegraph.productboard.com/roadmap/2327428-code-insights-objectives-roadmap). We organize our roadmap by milestone objective rather than feature, because to achieve each milestone we may shift or prioritize features based on further customer feedback or product decisions.

Our roadmap as of 2021-03-19:

<div style="overflow-x: auto; width: 100%">
<!-- Screenshot taken with this browser extension: https://chrome.google.com/webstore/detail/svg-screenshot/nfakpcpmhhilkdpphcjgnokknpbpdllg -->
<object data="./roadmap.svg" type="image/svg+xml" />
</div>
