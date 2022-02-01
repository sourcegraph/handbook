# Reporting progress

There are a few ways we track plans and celebrate progress at Sourcegraph.

- The [GitHub project tracker](#github-project-tracker) is **the source of truth** for all key results in product and engineering.
- [Monthly team updates](#monthly-team-updates) communicate a high-level narrative/summary to the rest of the company about what each team in product/eng accomplished since the last monthly update and what is up next.
- [Monthly demo days](../team-culture/demo-day.md) are a great opportunity for engineers to highlight and share with a broad audience the specific things they shipped. It is really fun!

## Status definitions

| Status        | Description                                  |
| ------------- | -------------------------------------------- |
| 🟢 On track   | 90–100% confidence we will achieve the goal. |
| 😬 At risk    | 75–89% confidence we will achieve the goal.  |
| ⛔️ Off track | <75% confidence we will achieve the goal.    |
| 🚀 Done       | We have achieved the goal!                   |
| ☠️ Cancelled  | We are no longer pursuing this goal.         |

## GitHub project tracker

The [GitHub project tracker](https://github.com/orgs/sourcegraph/projects/214) is **the source of truth** for key results in product and engineering.

There are a few tabs:

- The **Department KRs** tab tracks the top level product and engineering key results that the KR owners, Directors and VPs update weekly. 
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


## Weekly OKR updates

These are due each Friday by 19:00 UTC. 

- Each KR owner is responsible for posting a comment to the issue in the [GitHub project tracker](#github-project-tracker) with the latest status update and ensuring the delivery plan is up to date (reflecting what has been accomplished, the work that remains, date estimates, etc.) 

- VPP and VPE review each issue in the [GitHub project tracker](#github-project-tracker) on Fridays at 23:00 UTC and ask questions on the issues directly. Answers are provided by updating/editing the latest update directly so it gets added to the summary issue. 

- By default, we do not discuss OKRs unless someone explicitly raises a discussion point. The summary issue should be reviewed by Prod/Eng leadership on a recurring basis so everyone is aware of our progress. 


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
