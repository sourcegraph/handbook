# Search core team

The search core team owns all parts of Sourcegraph that map an interpreted search query to a set of results:

- Indexed and unindexed search (Zoekt & Searcher)
- Diff/commit search
- Result ranking
- Open source indexing, current at over 2.5M repos!

To learn more about our goals, see the [Search Core strategy](../../../../../strategy-goals/strategy/code-graph/search/core.md) page.

## Team members

{{generator:product_team.search_core}}

## Teammate experience: guiding principles

We seek to follow a set of [guiding principles](./guiding_principles_core.md) when welcoming new teammates and working as a team.

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
- Our [OKR and status updates are tracked using GitHub](https://github.com/orgs/sourcegraph/projects/214) under the Code Graph tab.

## Team syncs, plans and updates:

- The teams holds syncs twice weekly (Mon, Thu).
- Before team syncs, teammates add their status and plans to the [team sync meeting notes](https://docs.google.com/document/d/1cTdGC4jBK7aEnb9ChzCLYHVGBpRRMNYGdUUPYVPIWHo/edit#).
- The team discusses the updates live during the sync.
- Updates should be in prose and communicate progress made and pain points.

## Backlog

We use a [backlog project board](https://github.com/orgs/sourcegraph/projects/204/views/3?layout=board) to capture work items we've identified.

## Retrospective

- We have a retrospective every two weeks, on Monday. This is a time for us to look back and discuss progress and consider changes to process.
- Our [action plans and learnings are captured in a document](https://docs.google.com/document/d/1qCSVyu0IU9_w0mpHic3mFS2yqwI1CzZwM9HUp2ySrU4/edit).
- If we are going to have a sync retrospective, we use a Jamboard to capture everyone's thoughts. The theme for the Jamboard can rotate.
- If we are going to have an async retrospective, we use the Google Doc above to capture our retro.

## Our Repositories

- [Zoekt](https://github.com/sourcegraph/zoekt) the Zoekt search engine we support and use.
- [Sourcegraph](https://github.com/sourcegraph/sourcegraph) our product.
- [Scratchpad](https://github.com/sourcegraph/search-scratch) A place to capture research, thoughts, and ideas.

## Living the Async Life

Our team is geographically and timezone diverse. The handbook has a [large page dedicated to it](../../../../../company-info-and-process/communication/asynchronous-communication.md) and it is worth reading. This section is intended to augment the handbook. Since our team works across many timezones, setting boundaries for notifications becomes really important to protect your free time. You are empowered to do this and here are a couple of suggestions:

1. Set your working hours in Google. This makes it easier for your teammates to see when you are normally online.
2. Set your [notification schedule in Slack](https://slack.com/help/articles/214908388-Pause-notifications-with-Do-Not-Disturb).
3. When you need focus time, enable Mac Focus time and/or set Slack to Do not Disturb.
4. Google Calendar supports focus time. Block out time on your calendar in 2, 4 or 6 hour intervals where you only work on a particular task. Enable your Focus time (F6 key on Mac keyboard) and set Slack to DND.
5. Enable Google Calendar in Slack to sync up your Slack status with your Google Calendar.
6. Setup email filters for GitHub notifications.
7. Mute conversations in Slack to reduce notifications or leave the channel.
8. The Slack notification pane on the left side has an option to only show channels that are unread. This hides the channels with no new content and speeds up catching up in Slack.
9. If things like Google Mail and Calendar are not cutting it for you, try other tools. Some people really like using Spark for email and Fantastical for their calendar. To do list tools like Things and ToDoist are popular and also integration tools like Zapier can be really helpful. Ask in Slack, you will get suggestions.

## How We Work

- For support rotation picking up incidental work. Tasks in support backlog to capture this, more intentional work around support and papercuts versus trying to work normally and getting interrupted.
- Focus on more feature flag driven development to simplify on-premise changes and speed up MTTR for Cloud.

## On Boarding - [visit the page](./onboarding.md)

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
