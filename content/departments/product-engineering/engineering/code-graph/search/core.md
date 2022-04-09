# Search core team

The search core team owns all parts of Sourcegraph that map an interpreted search query to a set of results:

- Indexed and unindexed search (Zoekt & Searcher)
- Diff/commit search
- Result ranking

To learn more about our goals, see the [Search Core strategy](../../../../../strategy-goals/strategy/code-graph/search/core.md) page.

## Team members

{{generator:product_team.search_core}}

## Contact

- #search channel or @search-core on Slack.
- [`team/search-core` on GitHub](https://github.com/orgs/sourcegraph/teams/search-core)

## Support rotation

The Search Core team has a customer support rotation: each week, one team member will be responsible for fielding questions and requests from Customer Engineering and Customer Support.

The engineer on support rotation can be contacted using the Slack alias `@search-core-support`.

The support rotation can be viewed on OpsGenie: [search core schedule](https://sourcegraph.app.opsgenie.com/teams/dashboard/1cc52380-1d71-420e-9c80-2ccb161c648c/main).

Should an engineer be unable to fulfill support responsibilities for any reason (for example, due to upcoming time off), they should swap with a teammate.

We track support issues from customers on this [board](https://github.com/orgs/sourcegraph/projects/166)

## Planning

- The search core team plans its work continuously (we don't do sprints/iterations).
- Supporting existing customers is critical to our success and can be prioritized ahead of roadmap work.
- Our [OKR and status updates are tracked using GitHub](https://github.com/orgs/sourcegraph/projects/214/views/11) under the Code Graph tab.

## Team syncs, plans and updates:

- The teams holds syncs twice weekly (Mon, Thu).
- Before team syncs, teammates add their status and plans to the [team sync meeting notes](https://docs.google.com/document/d/1cTdGC4jBK7aEnb9ChzCLYHVGBpRRMNYGdUUPYVPIWHo/edit#).
- The team discusses the updates live during the sync.
- Updates should be in prose and communicate progress made and pain points.

## Backlog

We use a [backlog project board](https://github.com/orgs/sourcegraph/projects/204/views/3?layout=board) to capture work items we've identified.

## Retrospective

- We have a retrospective every two weeks, on Monday. This is a time for us to look back and discuss progress and consider changes to process.
- Our [action plans and learnings are capture in a document](https://docs.google.com/document/d/1qCSVyu0IU9_w0mpHic3mFS2yqwI1CzZwM9HUp2ySrU4/edit) and we use a Jamboard to capture everyone's thoughts. The theme for the Jamboard rotates.

## Our Repositories

- [Zoekt](https://github.com/sourcegraph/zoekt) the Zoekt search engine we support and use.
- [Sourcegraph](https://github.com/sourcegraph/sourcegraph) our product
- [Scratchpad](https://github.com/sourcegraph/search-scratch) A place to capture research, thoughts, and ideas.

## On Boarding

Your onboarding experience is expected to take three months, after which you will feel more confident in your ability to have impact on our team and within Sourcegraph. This process will require your both your High Agency on our commitment to support you through the process. The timeline is broken down into 30, 60 and 90 days.

### First Month

The theme for the first month is learning about your team. Primarily your teammates and domain knowledge. We operate as a team and having 1:1s with team members, learning your way around our Slack channels and the handbook are important to your success. Make sure you finish up your Process Street tasks as well. The domain knowledge includes getting Sourcegraph up and running as well as learing the architecture of Zoekt and our application. There will be a video session for the architecture. Domain knowledge also includes processes and getting familiar with our code base. Use Sourecegraph to learn more about our software (use case [developer onboarding](../../../../../strategy-goals/strategy/use-cases/dev-onboarding.md))! Build and share out a notebook, update our onboarding page with what you learn and make it better for the next person. You will also get a story that you will complete, either solo or by pairing, and commit to our code base.

### Second Month

The second month will continue the theme of learning. The primary focus will be on our product and our existing projects. Expect additional project work and pairing opportunties. It will be an opportunity to learn about planning and proactive communication in an asynchronous environment. GitHub [gists](https://docs.github.com/en/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists) are a great way to capture your plan and then share them in our Slack channel. Dip your foot into the water and help out on pull requests. Take part in our retrospectives.

Expect to spend some time to learn about troubleshooting and shadowing operational issues so you can become more comfortable taking part on support after your first 90 days. This is a good time to become familar with our operational tools, Grafana and Honeycomb.

### Third Month

During the third month, you will contine to develop and learn. In additional to working on more complicated projects, you are also expected to understand search core's roadmap and participate in discussions around it. Since our tool is for software engineers, you have a great context on how our tools can make an impact for other engineers. We expect your honest feedback about our current processes, tooling architecture, code base and roadmap. Please be proactive in sharing how we can improve.

By now you will have also experienced multiple company meetings and engineering demos. Take advantage of these opportunies to develop your business context and knowledge about what other teams are working on. We are a small startup and _you_ can make an impact.

We would like for you to take the role of Directly Responsible Individual (DRI) for a project. DRIs are empowered and accountable for the success of the initiative they lead. The scope and complexity of the problem to solve will depend on your seniority level. While you likely won’t be the only person working on this project, it’s up to you to make sure it gets done and that you have all resources necessary. Being a DRI might sound challenging and stressful, especially during your first months at Sourcegraph. Don’t worry - your buddy, peers, and team’s product manager and engineering manager are here to help and support you. The goal is to give you the sense of responsibility and ownership.

This month, you will also switch to active participation in operational rotation and join the team’s rotation schedule. Please do not forget that your peers are here to help, and you can rely on their support and guidance, especially during your first shift.

### Public resources are available here:

- [Learning Go](https://go.dev)
- [Architecture diagram](https://docs.sourcegraph.com/dev/background-information/architecture)
- [Sourcegraph Documentation](https://docs.sourcegraph.com/dev)
- [Super helpful intro video](https://www.youtube.com/watch?v=VXaUXwMLzjg)
- [How gitserver works](../../enablement/repo-management/how-gitserver-works.md)
- Zoekt Bedtime Reading:
  - https://github.com/sourcegraph/zoekt/blob/master/doc/design.md
  - https://swtch.com/~rsc/regexp/regexp4.html
  - https://www.youtube.com/watch?v=qOKDQT7-PJk
  - https://www.youtube.com/watch?v=_-KTAvgJYdI
  - https://about.sourcegraph.com/blog/tackling-the-long-tail-of-tiny-repos-with-shard-merging/
  - https://about.sourcegraph.com/blog/zoekt-memory-optimizations-for-sourcegraph-cloud/
  - https://swtch.com/~rsc/regexp/regexp4.html
  - https://github.blog/2021-12-15-a-brief-history-of-code-search-at-github/

Our private resources are available [in the Google doc](https://docs.google.com/document/d/10SNzhuA5dmRJ5Na3PMnuShlPmtGGVIz3P2GA4RtfaGo/edit)

## Misc

- [iteration log (deprecated)](./iteration_log.md)
