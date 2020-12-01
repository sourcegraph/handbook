# Product learning

The conclusion of every project should include analysis of performance. Below is the beginnings of us keeping track of what we've learned based on usage data.

## 2020-11-30

**Team**: Search

**Author**: Eric Brody-Moore

**Overview**: Data relating to and the next iteration of search homepages, tour, performance and more. Eric BM set up GitHub issues where he thought appropriate but most of other action items are either on him or should be revisited in the future by the product team.

### Cloud homepage

_Conclusion_: People [aren’t using these panels to click through](https://docs.google.com/presentation/d/1Rs3xUURNXy0-Bk-8T2BfVP96nZZpIW74NcbPotQ0w7w/edit#slide=id.ga56aa0b39d_0_0), but we are seeing [improvements to the search learning curve](https://docs.google.com/presentation/d/1Rs3xUURNXy0-Bk-8T2BfVP96nZZpIW74NcbPotQ0w7w/edit#slide=id.ga8c2441d17_0_25) with users using multiple filters quicker on their onboarding, so having the syntax on the page is helpful. We could improve this by getting info on what is most helpful, and then curating a really nice panel with that info as a resource (vs. examples to click through), but this likely will not become a priority until we can do a comprehensive refresh when users can add private code.

### Enterprise homepage

_No conclusions_ ([it’s still really early in the data](https://sourcegraph.looker.com/looks/723)), but we have a couple outstanding projects:

- We'll eventually need discovery/user research into the the entry points of search. If a lot of users have bookmarks that bypass the homepage, for example, the panels will see lower traffic.
- We can see this quantitatively also in the ratio of WAU on the panels to overall WAUs ([issue assigned to Eric BM](https://github.com/sourcegraph/analytics/issues/80)).

### CNCF homepage

_Conclusion_: CNCF repogroups [didn’t have many searches](https://docs.google.com/presentation/d/1Rs3xUURNXy0-Bk-8T2BfVP96nZZpIW74NcbPotQ0w7w/edit#slide=id.ga98b1e463b_0_0) because there was no guidance/help for what the search page means. A majority of users don’t submit a search on repogroup pages.

- Fix ([16256](https://github.com/sourcegraph/sourcegraph/issues/16256)): Add repo panel for repositories being searched over in the repogroup, and pull in the search syntax panels.

### Search tour

_Conclusion_: Need to look at the data, but it’s a disjointed experience now. Priority TBD, and Eric BM will be pulling this data soon.

### Search performance

_Conclusion_: P50/90/99 aren’t really helpful; we need to change how we approach this or how we use this data.

- Going forward, we should setup a system that runs test queries multiple times per day on a large instance (e.g. Cloud when we hit more repositories), and these queries should be based on customer use cases.
