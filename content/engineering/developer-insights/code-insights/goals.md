# Code insights goals and roadmap

## Goals

See also our [completed goals](goals_completed.md).

### 1. Deliver a revenue-capturing product
#### 1.1 Deliver code insights beta version

**Problem:** we can't launch code insights into beta because we:

1. don't have a way for users to create insights that doesn't run into the problems of creating insights outlined in RFC 304 "Create an Insight" UI + UX
   1. This includes an easy path to finding/creating insights, like through the search UI (one-click create from search)
1. don't have a way for code insights to run on the backend and meet a users' expectations of how fast they should run
   1. There is an issue of slowness -- insights take >1 day to run -- combined with communication -- this is not communicated at all right now in the product
   1. There is an issue of serialization -- your insights don't start running until we've calculated/logged data for all the prior insights users have entered on your instance
1. don't have docs for either of the above features (since these features don't yet exist)

**Why we are focusing on this:** a beta that sets/meets appropriate user expectations, scales to their entire codebase, and is understandable without hand-holding from CE/product is necessary to then ultimately enable insights by default in an open beta. This in turn will allow us to collect feedback and add necessary features as we develop code insights into a revenue-capturing GA product.

#### 1.2 Deliver code insights GA version

**Problem:** In order to launch code insights widely and charge for it, in addition to the beta features, we'll need to:

1. Make the more complex finer-touch improvements customers have already asked for and indicated are necessary to getting full value from a basic insights product, like repo filtering
1. Improve where/when code insights display in context within sourcegraph, and how a user can control that
1. Others TBD based on beta feedback + progress

**Why we are focusing on this:** To deliver on creating a revenue-capturing product

## Roadmap

The Code Insights [roadmap](https://sourcegraph.productboard.com/feature-board/2689572-fy2022-roadmap-developer-insights) can be viewed in Productboard.
