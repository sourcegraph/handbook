# Goals

The campaigns team is building the best solution available for creating and managing large scale changes. To do so we will focus on the following objectives:

## Grow adoption of campaigns

We need to grow usage of campaigns to understand our customer use cases and inform our roadmap.

### How do we will do this:
* The product manager will work with the CE team to identify customers who fit our current product offering and onboard them to campaigns
* The campaigns team will identify and correct user experience issues which hinder adoption
* The engineering team will strive quickly correct errors which impede adoption


## Design and build the best solution for creating many changesets
For a single solution to become the best tool for making large scale changes at any given company,  it must provide features which meet the varying requirements dictated by each environment, configuration and workflow found in the company.

Currently the tools companies do have for making large scale changes are only usable by a select group of experienced developers and solve a limited number of use cases.

### Problems
* Campaigns does not currently allow users to open many changesets in a single repo in a way that supports monorepo workflows
* It takes too long to merge changesets because owners are not aware the  changesets were created
* The documentation and usability of campaigns are not sufficient to provide a frictionless experience for less experienced developers

### Milestones
* Robust support for monorepo workflows
* Support adding reviewers to changesets
* Support adding labels to changesets
* Documentation on how to set up and start using and troubleshoot campaigns has been tested and improved

### Outcomes
* We sign one monorepo customer in Q1
* Multiple customers find value in adding reviewers and labels to changesets
* An increase in the average number of merged changesets is observed
* A reduction in the number of support requests for users getting started with campaigns

## Design and build the best solution for managing many changesets

Completing a large scale change in any organization requires coordination with and approval by, many people. Tooling is required for this process to not only be efficient, but at a certain scale, be _possible_. This includes making developers aware changesets exist, reminding them to merge changesets, or if possible, sidestepping this social dilemma entirely by enabling automatic merges.

### Problems

* Company workflows often require issues/tickets to accompany changes to their code bases. Campaigns does natively support issue tracking systems.
* It is currently too difficult to find changesets which cannot or have not been merged.
* Often owners do not prioritize merging changesets. It takes too long to nudge the owners of each changeset.
* We do not currently support automerge. Doing so would greatly reduce the manual effort required to merge changesets.

### Milestones

* Support creating tickets/issues alongside or instead of code changes.
* Users can search, filter and sort changesets by check and review status, title, repository and branch.
* A campaign owner can nudge developers to merge changesets.
* Campaigns can leverage the automerge capabilities provided by their code host.

### Outcomes

* An increase in the average number of merged changesets is observed.
* A reduction in the average amount of time to close a campaign is observed.
* The nudge and automerge features are used by customers to reduce time to merge.

# Roadmap

As we work on increasing adoption, our roadmap is in flux as we are gathering new information from customers about what they need in order to try out campaigns.

We maintain a [directionally correct roadmap](https://sourcegraph.productboard.com/roadmap/2400849-campaings-objectives-public), updated as feedback comes in.
