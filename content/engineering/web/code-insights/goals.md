# Code insights goals and roadmap

## Goals 

### Code insights generates revenue in FY22

**Problem:** Engineers and engineering managers/directors/VPs want to be able to understand their codebase at a high level (which parts of the code base are health/unhealthy? How close are we to removing all instances of a code smell?). Existing tools that just use git data don't answer these questions because they don't look at the code itself, just the pattern of commits. Sourcegraph has all the information needed to answer these questions, but there is currently no way for an engineering leader to get the answer out of Sourcegraph. 

**Value to Sourcegraph:** The Sourcegraph sales cycle is unusual because although we consistently wow our users, the economic decision-maker is usually not one of these users. Instead, the people with the power to sign a contract with us are higher up within an organization and usually depend on running a trial to fully understand the value of Sourcegraph. When code insights answers these personas' higher-level questions about codebases that our core features do not currently answer, it can dramatically speed up our sales cycle as well as our sales pipeline by giving decision makers a reason to buy Sourcegraph without needing to run a trial.

**Milestones and Outcomes:**

_Because code insights is an entirely new feature and closely informed by customer feedback, the further in the future goals get, the more flexible the order of these milestones is (especially when it comes to interleaving "business" milestones like beta/GA/paid, with feature milestones, like third-party data or monitoring/campaign integration)._ 

1. ✅ Three customers give us qualitative feedback after using our code insights prototypes to guide the initial product direction. 

    - **Outcome:** We have a list of potential features and their likely value that we can use to achieve our initial adoption milestones ([Productboard view](https://sourcegraph.productboard.com/feature-board/2327586-code-insights-next-objective)). 

1. 🔄 We have decided on and implemented metrics to quantitatively measure the adoption of code insights prototypes (see [RFC 279](https://docs.google.com/document/d/1I10tm5CFZvzQYNeV--JacRGLLIUesXQBp6ZO8uhakRs/edit#)). 

    - **Outcome:** We have weekly quantitative reports on the use of code insights at each customer. 

1. Code insights can scale to large (if not the largest) codebases. 

    - **Outcome:** All but the largest customers can use insights prototypes over their entire codebase to answer questions about the state of _all_ of their code.

1. Code insights are useful to a broad set of customers (this may include integrations with campaigns, code monitoring, or third party data sources – see [Productboard feature view](https://sourcegraph.productboard.com/feature-board/1793095-code-insights)).  

    - **Outcome:** Code insights features are actively in use by VPs/Directors at 5+ enterprise customers.  

1. Customers can easily create their own custom insights using a dedicated UI.

    - **Outcome:** Code insights can move from prototype to beta feature (easy to enable or enabled by default, documented, and supported by the CE team rather than the product team).
    - **Outcome:** At least three customers create their own code insights that they actively reference.  

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

At a glance roadmap as of 2021-01-14:

![2021-01-14](https://sourcegraphstatic.com/handbook/product-roadmaps/2021-01-14CodeInsightsRoadmap.png)