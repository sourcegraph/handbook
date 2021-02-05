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

### Planning an iteration

Iterations start **every other Monday**.

**On the last Friday of an iteration:**

- Teammates add the themes they're planning to work on, and the desired outcomes, to the [iteration log](./iteration_log.md).
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

- We're hiring a [Product Manager](https://jobs.lever.co/sourcegraph/254299f5-f91b-43e2-aa1a-3732963dd296) for this role. [Christina Forney](../../../company/team/index.md#christina-forney-she-her) is involved in the meantime.
- [Rob Rhyne](../../../company/team/index.md#rob-rhyne) and [Quinn Keast](../../../company/team/index.md#quinn-keast-he-him) ([Product Designers](../../product/roles/product_designer.md))
- Search core backend {#search-core-backend-eng}
    - FQ2 [Engineering Manager](../roles.md#engineering-manager), Loïc acting manager until then.
        - [Keegan Carruthers-Smith](../../../company/team/index.md#keegan-carruthers-smith)
        - [Stefan Hengl](../../../company/team/index.md#stefan-hengl-he-him)
        - FQ1 backend engineer
        - FQ3 backend engineer
- Search product {#search-product-eng}
    - [Loïc Guychard](../../../company/team/index.md#loïc-guychard) ([Engineering Manager](../roles.md#engineering-manager))
        - [Rijnard van Tonder](../../../company/team/index.md#rijnard-van-tonder)
        - [Juliana Peña](../../../company/team/index.md#juliana-peña-she-her)
        - [Rok Novosel](../../../company/team/index.md#rok-novosel-he-him)
        - [Camden Cheek](../../../company/team/index.md#camden-cheek-hehim)
        - FQ2 backend hire
        - FQ2 frontend hire
        - FQ3/4 TBD

## On-call

- [Alerts owned by this team](https://sourcegraph.com/search?q=repo%3A%5Egithub.com%2Fsourcegraph%2Fsourcegraph%24+file%3Amonitoring%2F.*+%7B%3A%5B_%5D%2C+Owner%3A+monitoring.ObservableOwnerSearch%2C+%3A%5B_%5D%7D+OR+%28%3A%5B_%5D%2C+monitoring.ObservableOwnerSearch%29+count%3A1000&patternType=structural)
- [OpsGenie rotation](https://sourcegraph.app.opsgenie.com/teams/dashboard/f482ef3e-f5dc-4bef-b7c4-307e0ad30d6a)
