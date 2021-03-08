# Goals

# Overarching goal: Deliver campaigns to as many users as possible
Campaigns are GA and already create value for some early adopters. The next step is to onboard a broader audience.
Campaigns will be most valuable for users with large codebases and teams, which are more likely to be found at large tech startups or in the enterprise. Therefore, our primary goal now is to increase adoption of campaigns for our enterprise customers.
Longer term, we want to push continuous code maintenance and campaigns to every developer.

Progress on adoption and usage is tracked in this [Looker dashboard](https://sourcegraph.looker.com/dashboards/136).

**Problem**

- Our customers have diverse environments, configurations and workflows, that campaigns need to be able to fit into.

**Outcomes**

- We onboard N1 new customers and N2 changesets get created (N1 and N2 in OKRs)
- We track usage with a monthly MAUs and customer penetration report
- CE and sales are equipped with enough material and examples to demonstrate the value of campaigns to a broad range of users with varied workflows.

## Objective: Users can create, manage and track large scale campaigns
**Milestones**

- ✅ Campaigns support monorepos
- Rate limiting: users can create large scale changesets without breaking code host or CI
- Users can manipulate (push, close, comment on) many changesets

**Outcome**

- N3% of users creating 100+ campaigns report success

## Objective: Broad campaigns adoption and great developer experience
We want to make it so that campaigns is easy to onboard and use not only for a few power users, but also for all software engineers. This is a key limitation of existing in-house tooling at out customers.

**Outcomes**

- Developers from teams outside infrastructure / developer services start using campaigns
- N4% of users that land on the campaigns dashboard become Active Campaigns Maintainers

## Objective: Changeset creators get changesets merged faster
A campaign is successful when its changes get merged.

**Outcomes**

- We have a weekly, actionable time-to-merge report
- We observe that time-to-merge decreases over time (goal TBD)

## Objective: Recurring campaigns
**Outcomes**

- Users can set campaigns to run recurrently

# Roadmap

We maintain a [directionally correct roadmap](https://sourcegraph.productboard.com/roadmap/2400849-campaings-objectives-public), updated as feedback comes in. Timelines and priorities can change.

<img src="./roadmap-updated-2021-02-12.png" alt="Campaigns short term roadmap updated 2021-02-12" />

*Updated 2021-02-12*

# How we built those goals and milestones
We generally think about campaigns features in terms of 4 themes:

1. create many changesets easily
1. track, manage, and merge many changesets easily
1. expand the realm where campaigns can run
1. keep campaigns robust and performant
