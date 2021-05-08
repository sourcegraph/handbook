# Code insights goals and roadmap

The Code insights team focuses on bringing code insights to life as a valuable new Sourcegraph product. 

The team's goals and roadmap contain the features and customer signals that guide our work.  

## Goals for FY22 

See also our [completed goals](goals_completed.md).

### 1. Deliver a user-loved, revenue-capturing product 

#### 1.1 Deliver code insights beta version

**Problem:** Code insights can't be [in beta](https://docs.sourcegraph.com/admin/beta_and_prototype_features) until: 

1. Users can create insights effectively and without error
   1. This includes an easy path to finding/creating insights, like through the search UI (one-click create from search)
1. Code insights can run on the backend and meet a user's loading-time expectations 
   1. We'll build both backend optimizations and UI expectation-setting and communicating
   1. This also involves exploring parallel rather than serial implementations
1. We have docs for both of the above features

**Why we are focusing on this:** a beta that sets/meets appropriate user expectations, scales to their entire codebase, and is usable without hand-holding from CE/product is necessary to then ultimately enable insights by default in an open beta. An open beta in turn will allow us to collect feedback and add necessary features as we develop code insights into a revenue-capturing, generally available product.

**How we will measure success:** We will track quantitative customer adoption and usage for metrics like number of insights created, number of users who have created an insight, and number of pageviews on code insights in our [Code Insights KPIs](https://sourcegraph.looker.com/dashboards/172) dashboard. We will also be in frequent contact with code insights customers and the CE team to collect qualitative feedback about the product.

#### 1.2 Deliver code insights GA version

**Problem:** In order to launch code insights widely and capture the value in new revenue, in addition to the beta features, we'll need to:

1. Make the more complex finer-touch improvements customers have already asked for and indicated are necessary, like repo filtering
1. Improve where and when code insights display in context within Sourcegraph, and how a user can control that or share their insights
1. Other features TBD based on beta feedback + progress

**Why we are focusing on this:** To deliver on creating a revenue-capturing product. This is important because we deeply believe in the [mission and vision](index.md#mission) of code insights, and in order to continue developing increasingly valuable features we must prove that the product can be self-sustaining. 

**How we will measure success:** Our primary measure of success will be if customers find code insights valuable enough to purchase it. Our secondary success metrics (or post-purchase success metrics) will be the same adoption and retention metrics on our [Code Insights KPIs](https://sourcegraph.looker.com/dashboards/172) dashboard.

## Roadmap

### FY22

The Code Insights [roadmap](https://sourcegraph.productboard.com/feature-board/2689572-fy2022-roadmap-developer-insights) can be viewed in Productboard. (There is also a [Code insights team-specific gantt chart roadmap](https://sourcegraph.productboard.com/roadmap/2809900-code-insights-features-timeline-roadmap) view with the same information.)
