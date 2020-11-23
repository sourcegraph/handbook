# Search team

We own the end-to-end Sourcegraph search experience.

## Vision

Sourcegraph search is:

- **Fast:** Performance of showing results is fast and I can get to what I’m looking for quickly.
- **Scalable:** Sourcegraph scales to any private codebase and the size of the open-source universe. Users can trust that the result set is drawn from the entire set of code they care about, and if the result isn't found, it doesn't exist.
- **Expressive:** It is possible to construct a search query to find exactly the results I’m looking for. The tools, syntax, filters, are provided to construct the queries I want to write. We strive for a search experience where the answer to “Can I do ‘X’ with Sourcegraph?” will always be yes.
- **Easy to use:** Users can quickly understand how to find what they are looking for and what options are available for searching. The search syntax is clear and intuitive.
- **Shareable:** Sourcegraph searches are easy to share, and provide team and organization wide value. This in turn creates network effects that compound the value Sourcegraph provides with scale.

## Search goals and priorities

See [goals and priorities](goals.md).

## Iterations

The search team plans its work in **2-week iterations**.

The goals and updates for current and past iterations can be found in the [iteration log](./iteration_log.md).

The planned work items for the current iteration are tracked in the [Search iterations GitHub project](https://github.com/orgs/sourcegraph/projects/93).

### Planning an iteration

Iterations start **every other Monday**.

**On the last Friday of an iteration:**

- Teammates add the themes they're planning to work on, and the desired outcomes, to the [iteration log](./iteration_log.md).
- Teammates add relevant GitHub issues or cards to the **Planned** column of the [Search iterations GitHub project](https://github.com/orgs/sourcegraph/projects/93).
- Teammates add any topics they would like to discuss during the retrospective to the [Search team retrospectives](https://docs.google.com/document/d/1YyPhH-OVrFddLhlerlfrqmnqe633I09wp9D9mSI4Za8/edit) document.

**On the first Monday of an iteration:**

- The team holds its [retrospective](https://docs.google.com/document/d/1YyPhH-OVrFddLhlerlfrqmnqe633I09wp9D9mSI4Za8/edit) for the previous iteration.
- The team reviews the iteration plan during the team sync, and kicks off the iteration.

**Work log updates:**

- Teammates should update the [work log](./iteration_log.md) for the themes they're working on.
- PR approvals are not required for work log updates.
- Updates should be in prose and communicate progress made and pain points.
- Updates should happen at least twice (in the middle and at the end of the iteration), but may be more frequent if desired.
  - The mid-iteration update should contain a forecast for the next week, and whether the remaining planned work is on track to be completed on time.
  - The end-of-iteration update should mention whether the planned outcomes were reached or not, and if not, why.

## Contact

- #search channel or @searchers on Slack.
- [@sourcegraph/search](https://github.com/orgs/sourcegraph/teams/search) team or [team/search label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fsearch+) on GitHub.

## Members

- We're hiring a [Product Manager](../../product/roles/product_manager.md) for this role. [Christina Forney](../../../company/team/index.md#christina-forney-she-her) is involved in the meantime.
- [Loïc Guychard](../../../company/team/index.md#loïc-guychard) ([Engineering Manager](../roles.md#engineering-manager))
  - [Farhan Attamimi](../../../company/team/index.md#farhan-attamimi)
  - [Rijnard van Tonder](../../../company/team/index.md#rijnard-van-tonder)
  - [Stefan Hengl](../../../company/team/index.md#stefan-hengl-he-him)
  - [Juliana Peña](../../../company/team/index.md#juliana-peña-she-her)
  - [Keegan Carruthers-Smith](../../../company/team/index.md#keegan-carruthers-smith)
  - R.N, full-stack engineer, joining 2020-12-14
  - C.C., backend engineer, joining 2021-01-04

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo%3A%5Egithub.com%2Fsourcegraph%2Fsourcegraph%24+file%3Amonitoring%2F.*+%7B%3A%5B_%5D%2C+Owner%3A+ObservableOwnerSearch%2C+%3A%5B_%5D%7D+OR+%28%3A%5B_%5D%2C+ObservableOwnerSearch%29+count%3A1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/f482ef3e-f5dc-4bef-b7c4-307e0ad30d6a)

## Growth plan

_Updated 2020-11-18_

We are looking to hire:

- A [backend software engineer](../hiring/software-engineer-backend.md)

Loïc will be at management capacity when we reach 7-8 engineers on the team, but we will still need to grow further to deliver on our goals for search. Our next step will be to split the team in half. Both of these teams will be cross-functional, with frontend + backend skills, and will have design needs. Before we split these teams, we will need to hire an EM and a PM.

### Search core

The search core team will focus on the capabilities, scalability and polish of our core feature set: search language and supporting UI, search backends.

Examples:

- Scale indexed search to 1m repositories.
- Reduce latency and timeouts of search.
- Implement streaming search.

### Search growth

The Search growth team will focus on initiatives aiming at growing usage or adoption of our search features, such as onboarding efforts or features unlocking new use cases.

Examples:

- Implement code monitoring.
- Increase search weekly active users.
