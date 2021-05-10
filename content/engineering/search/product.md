# Search product team

The search product team owns all parts of Sourcegraph that help users Compose search queries and navigate search results:

  - Search field
  - Search results UI
  - Search contexts
  - Query language, including structural search
  - The search homepage, homepage panels
  - Repogroup pages

It also owns a subset of features built on top of Sourcegraph search:

- Code monitoring
- Saved searches

## Contact

- #search channel or @search-product on Slack.
- [GitHub team](https://github.com/orgs/sourcegraph/teams/search-product)

## Team members

- We're hiring a [Product Manager](../../product/roles/index.md#product-manager) ([apply here](https://boards.greenhouse.io/sourcegraph91/jobs/4003912004)) for this role. [Christina Forney](../../../company/team/index.md#christina-forney-she-her) is involved in the meantime.
- [Rob Rhyne](../../../company/team/index.md#rob-rhyne) and [Quinn Keast](../../../company/team/index.md#quinn-keast-he-him) ([Product Designers](../../product/roles/index.md#product-designer))
- [Loïc Guychard](../../../company/team/index.md#loïc-guychard) ([Engineering Manager](../roles.md#engineering-manager))
    - [Rijnard van Tonder](../../../company/team/index.md#rijnard-van-tonder)
    - [Juliana Peña](../../../company/team/index.md#juliana-peña-she-her)
    - [Rok Novosel](../../../company/team/index.md#rok-novosel-he-him)
    - [Camden Cheek](../../../company/team/index.md#camden-cheek-hehim)
    - F.K., starting 2021-05-24

## Processes

### Planning

We work in two-week iterations.

Iterations start every other Monday.

#### Planning artifacts

We use two main artifacts to plan iterations: our [planning document](https://docs.google.com/document/d/1swnkQwd724IB_HP3_Mw3KkFnfl45t-PmWcNo_1gtkQM/edit#), and a GitHub project specific to the iteration. We think of their relative roles as follows:

- The planning document is used as a discussion platform to agree on intended outcomes for the iteration. An intended outcome is not "issue #xxxx is closed", but rather "problem X is solved".
- The GitHub project is an itemized representation of the work needed to accomplish the outcomes listed in the planning document.
- If some items in the GitHub project are not closed by the end of the iteration, teammates should mention in their last weekly update of the iteration what this impact is on planned outcomes.

#### Planning a new iteration

On the last Thursday of an iteration:

- The EM for the team:
    - Creates a GitHub project for the iteration.
    - Creates a section in the [planning document](https://docs.google.com/document/d/1swnkQwd724IB_HP3_Mw3KkFnfl45t-PmWcNo_1gtkQM/edit#), outlining a draft of current projects / priorities.
- The team:
    - Adds notes to the planning document outlining how they plan to contribute to current projects / priorities, adds any missing projects / priorities, adds any questions on missing context.
    - Adds relevant issues to the GitHub project for the iteration, based on the content of the planning document.

We have asynchronous discussion in the planning document. On the first Monday of an iteration, during the team sync, we validate the current plan & the contents of the GitHub project together, thus officially starting the iteration.

#### Weekly updates

Every week on Friday, Geekbot will prompt teammates to share:

- Progress towards iteration goals.
- Roadblocks they've encountered.
- Questions they have for the team.
- Anything else they'd like to make the team aware of.

Updates are posted in #search-product-internal.

#### Projects spanning multiple iterations

Projects that will span multiple iterations should have an associated project board tracking all known issues (example: [search contexts](https://github.com/orgs/sourcegraph/projects/113)). The subset of issues planned for a given iteration can then be added to the iteration's project, as GitHub issues can have multiple associated projects.

#### Slack time

We should plan with built-in slack time: the time engineers plan to allocate to roadmap goals should not be 100% of your available engineering time. As an engineer, "things I'd like to get to, but are non-priority work" are tackled as part of this slack time.

On the other hand, the planning document + initial set of issues in the project board represents "work that we plan to complete to keep us on track for our goals".

Adding non-priority items to the iteration project board when _completed_ is be a good way of surfacing what was accomplished. Depending on the nature of the task, mentioning it in weekly updates may be more appropriate -- user's discretion.

#### Changing our processes

We keep our iteration process fluid. We discuss any aspects that could be improved in our retrospective, and aggressively bias towards testing out new changes immediately.

### Retrospectives

At the end of every iteration, we conduct a retrospective. Our retrospective notes can be found [here](https://docs.google.com/document/d/15F7OXwFTpLIvjPrJtNd0wRY49MtCUO-kMacpcIMlAWU/edit).

