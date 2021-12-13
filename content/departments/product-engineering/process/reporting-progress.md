# Reporting progress

There are a few ways we track plans and celebrate progress at Sourcegraph.

- The [GitHub project tracker](#github-project-tracker) is **the source of truth** for all key results in product and engineering.
- [OKR slides](#okr-slides) contain the top level product and engineering results that the VPs and Directors review and discuss on a weekly basis.
- [Monthly team updates](#monthly-team-updates) communicate a high-level narrative/summary to the rest of the company about what each team in product/eng accomplished since the last monthly update and what is up next.
- [Monthly demo days](../team-culture/demo-day.md) are a great opportunity for engineers to highlight and share with a broad audience the specific things they shipped. It is really fun!

## Status definitions

| Status        | Description                                  |
| ------------- | -------------------------------------------- |
| 🟢 On track   | 90-100% confidence we will achieve the goal. |
| 😬 At risk    | 75-89% confidence we will achieve the goal.  |
| ⛔️ Off track | <75% confidence we will achieve the goal.    |
| 🚀 Done       | We have achieved the goal!                   |
| ☠️ Cancelled  | We are no longer pursuing this goal.         |

## GitHub project tracker

The [GitHub project tracker](https://github.com/orgs/sourcegraph/projects/214) is **the source of truth** for key results in product and engineering.

There are a few tabs:

- The **Department KRs** tab tracks the top level product and engineering key results that the VPs and Directors review every week at the [VP team sync](../team/index.md#vp-team-sync). Updates are tracked and communicated in the [OKR slides](#okr-slides).
- The **Org KRs** tab tracks all the org level key results. VPs and Directors review this monthly, or as-needed when something is escalated by a Director.
- The **Team Deliverables** tab tracks the next big roadmap items that each team is delivering in service of their KRs.
  - When teams are in the state where they have a clear KR, but don't yet have a clear roadmap to achieving that KR, the KR is included in this view. Once a roadmap item added, the KR is removed.
  - Teams should include any big current and future roadmap items that the team has line of sight to.
  - Roadmap items have a target date that is our best estimate of when the item will be delivered. This date is used for multiple purposes:
    - A diagnostic tool to help us identify teams that might need help.
    - A cross-functional communication tool so Sales/CE/CS/Marketing can plan ahead to help us drive usage of the things we are delivering.
  - This tab is reviewed ad hoc by VPs.
- The **All** tab simply shows all items in the tracker for reference.
- Orgs and teams may create their own tabs and documented expectations in their own section of the handbook.

All items in the tracker should be linked to a GitHub issue so that we can assign owners, see a history of updates (useful audit log if we need to change KRs), and so there is an place for the team to post updates.

Customer names and business metrics can't be mentioned on public issues, so by default, all issues should be created in [sourcegraph/product-engineering-tracker](https://github.com/sourcegraph/product-engineering-tracker).

## OKR slides

The OKR tracker slides are a living document that directors update by 19:00 UTC each week to communicate that current state of top level product and engineering key results for the current quarter. It only contains 1 week's worth of updates.

The slides are reviewed and discussed each week in the [VP team sync](../team/index.md#vp-team-sync) so we can celebrate wins, identify risks, and course correct if necessary.

After the slides are reviewed, they are copied to a seprate slide deck to capture week-over-week progress.

After the [VP team sync](../team/index.md#vp-team-sync), summarized OKR status updates are posted in #product-engineering-planning Slack channel for visibility.

Slides:

- [FY22 Q4 (current week)](https://docs.google.com/presentation/d/1DgY3k684Jn3diCe4GPPcrGt9iaD9-vyndiiJwEoELyE/edit#slide=id.gfca47eca53_0_184)
- [FY22 Q4 (week over week history)](https://docs.google.com/presentation/d/1d36d47VFSZzQWIhdkZt3JZ3pNUk766yy8iwkFfVpTyY/edit)

## Weekly updates

These are due each Friday by 19:00 UTC.

- Teams ensure that the [GitHub project tracker](#github-project-tracker) and connected issues are up-to-date.
- Directors update the [OKR slides](#okr-slides)

## Monthly team updates

Monthly team updates communicate a high-level narrative/summary to the rest of the company about what each team in product/eng accomplished since the last monthly update and what is up next.

The engineering manager of each team is responsible for sending an update to [engineering-team-status@sourcegraph.com](https://groups.google.com/a/sourcegraph.com/g/engineering-team-status) by the end of the week that contains the first day of each month. EMs may delegate to someone else on the team to send the update.

Guidelines:

- The email subject should contain the team name and the date (for example: "Search update 2020-10-14") so each update starts a distinct email thread (otherwise, they get grouped in the Google Groups UI).
- There is no strict format to follow for the content, but here are some tips:
  - Favor prose over a list of changes.
  - Be brief and link to details.
  - Consider sharing wins, challenges, risks, plans, lessons learned.
  - Inline relevant screenshots/demos/gifs/charts when possible so it isn't just a wall of text.
  - Be creative and have fun with it! Jokes and random fun facts are welcome.

## Monthly PMM roadmap update

In addition to the monthly team update, each PM should update the [PMM roadmap deck](https://docs.google.com/presentation/d/1o3R8WUIhzzRz0x5laTwVcizOzVWrMBe5MCAz74H45Ss/edit#slide=id.gf131fe1596_2_7) (internal only) for their features at the same time. This deck contains a manually updated copy of the current plan, plus recently launched important customer-facing features from the OKR and roadmap tracker. In the future we may transition updating this to PMM, but for now its important product managers are involved in ensuring it is up to date and correct.

## Quarterly department retrospective

The purpose of our quarterly department retrospective is to create a shared safe space for celebrating wins, learning, and improvement.

- Format
  - 1 hr synchronous meeting
- Attendees
  - VPP, VPE, and their direct reports
- Prework
  - DRI responsible for each department KR fills out their retrospective slide in preparation for meeting, colleting any necessary information from their team in advance.
- During retrospective
  - Review OKRs and discuss outcomes
    - Understand whether or not we accomplished what we set out to accomplish this quarter.
    - Celebrate achieved KRs and amplify the things that are working.
    - Identify what didn’t work and discuss what we could have done.
  - Roundtable discussion
    - The goal is to leave room for open discussion around what else transpired not directly related to OKRs.
    - What went well (wins) for yourself and for your team?
    - Did we accomplish what we said we were going to accomplish?
    - What didn’t go well (struggles and challenges) for yourself and for your team?
    - What did you and/or your team learn?
- Deliverable
  - Finalized OKR scorecard deck ready to be shared with the company
