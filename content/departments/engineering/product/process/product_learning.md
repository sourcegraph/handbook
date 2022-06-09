# Product learning

The conclusion of every project should include analysis of performance. Below is the beginnings of us keeping track of what we've learned based on usage data.

- [Successful search sessions <> week 1 retention](#2021-05-19)
- [What actions lead to Cloud retention](#2021-01-11)
- [Value of browser extensions](#2020-12-06)
- [Search homepages and tour (2020-11-30)](#2020-11-30)

## 2021-05-19

**Team**: Product

**Author**: Eric Brody-Moore

**Overview**: We processed sessions on Sourcegraph Cloud to categorize them as successful or failed search sessions and, most notably, how they correlates to week 1 retention.

**Caveat**: Our current defition/proxy of a successful session is a click into search results. This will evolve over time to become more accurate. See more context in the [RFC](https://docs.google.com/document/d/1hzW3kjnIJHzgh8JgCqVXVn7wJbzvCnT14LsaCT95S8E/edit?ts=608c6eb3#).

### Search session success/failure

_Conclusion_: one successful session (in its definition today) does not lead to realization of the value proposition and week 1 retention.

This supports the need for a lot of projects/ideas already in motion:

- Including code intelligence in search results (hovering is 2x retention correlated with retention than submitting a search)
- Improvements to the search tour. 60% of failed search sessions had two or less searches, which were most likely low quality searches

What I _think_ will help but have no quantitative proof from this analysis:

- More efforts from the search redesesign to improve the quality of the searches earlier on in the user lifecycle
- Search results ranking so the likelihood of a user clicking into results and seeing code intelligence is higher
- Improvements to the search tour to get people to the code they care about and learn the search syntax

**Data**

I ran a week of search sessions for the week of 2021-05-03.

- 64% were success, 36% were failed sessions

Of the 64% successes:

- 54% clicked into results and used code intel
- 39% clicked into results but did not use code intel
- 7% clicked ‘open code host’

Of the fails:

- 60% of fails are <=2 searches and leave; 68% are <=3 searches and leave

Supporting data

- 12% week 1 retention in all users who searched vs. week 1 24% retention for users who hovered and clicked 'find references' (Source: [Amplitude](https://analytics.amplitude.com/sourcegraph/chart/7l5vdg4?source=workspace))
- Multiple searches vs. one search increases the week 1 retention from 10 -> 15% (Source: [Ampltide](https://analytics.amplitude.com/sourcegraph/chart/6gzjoql?source=workspace))

**Note:** This data should not be looked at as causation, but we have additional qualitative analyses that makes me more confident in the conclusions.

## 2021-01-11

**Team**: Product

**Author**: Eric Brody-Moore

**Overview**: A deep-dive into what actions lead to Cloud retention. The [full slide deck](https://docs.google.com/presentation/d/1JM-FEFFAwHNfpPvx0bvAl8yyLYIok61pe_idsk4EofE/edit#slide=id.p) is available on Google Drive.

### Cloud retention

_Conclusion_: There are [no actions that obviously lead to retention](https://docs.google.com/presentation/d/1JM-FEFFAwHNfpPvx0bvAl8yyLYIok61pe_idsk4EofE/edit#slide=id.gb2d1807fe7_0_23), and [no actions that are significantly stickier](https://docs.google.com/presentation/d/1JM-FEFFAwHNfpPvx0bvAl8yyLYIok61pe_idsk4EofE/edit#slide=id.gb2d1807fe7_0_16) than others.

- Action: The next step is to analyze what they’re looking at and how it might fit into their workflow, not the specific actions they're taking on Cloud.

- Action: If we want to take this step, develop an RFC to propose adding action-based retention to pings to get insight into which actions lead to retention on on-prem instances.

Neither of these actions have been prioritized (as of 2021-01-11).

## 2020-12-06

**Team**: Web

**Author**: Joel Kwartler, with help from Eric Brody-Moore

**Overview**: Data related to the value of browser extensions (+integrations) and recent improvements. Action items are to continue supporting code host integrations.

### Code host integrations user value

_Conclusion_: A [qualitative analysis](https://sourcegraph.looker.com/explore/sourcegraph_events/nps_submissions?qid=YDTCYMvtpsTde5VyPvwTni) of all NPS promoters for the past 14 months (Nov 2019-Nov 2020) found 6% of them cite a feature the integrations provide as the only given reason for their score.

A mapping of [DAU/MAU vs Integration Usage Saturation](https://sourcegraph.looker.com/merge?mid=O70qAsSQSePBKsg8R78n31&toggle=vis) by customer displayed a positive correlation between integration use and high customer use.

An [analysis of retention](https://docs.google.com/presentation/d/1zH6kyUC2RT8Ss0b1Tv57fo3Tg5NflHZT44BE9nCYmLk/edit?ts=5fcb2950#slide=id.gaf6f52a0fb_0_1) found significantly higher retention on Sourcegraph.com for users with the extension.

- Action: we will continue to prioritize adoption, growth, and maintenance of our integrations.

### Browser extension panel redesign

_Conclusion_: The browser extension [panel redesign](https://docs.google.com/presentation/d/1zH6kyUC2RT8Ss0b1Tv57fo3Tg5NflHZT44BE9nCYmLk/edit?ts=5fcb2950#slide=id.gaf6f52a0fb_0_7) was successful at reducing uninstall feedback around "usage confusion" or "security concerns" to 0 (from [_N<sub>0</sub>_][n0]). It also reduced our [uninstall/install rates by 5%](https://docs.google.com/spreadsheets/d/1nRmZTPbXNKfh2xc2bZPOySB7A2YSUOaDBfFLmdpHHgo/edit#gid=1640698666&range=V24) in month 1.

- Action: we will continue to make design/UI updates to features addressing user feedback.

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

## References

[n0]: https://docs.google.com/document/d/1iMlVh_Wm47v4YRpEvazrC5lmbJLkXwlGAEelTCqIx5Q/edit
