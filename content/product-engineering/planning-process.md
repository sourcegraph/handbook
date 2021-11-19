# Product and engineering planning process

Our planning process defines how we create goals and track progress toward those goals as a department.

## Philosophy

A good plan has the following properties:

- The plan addresses the most important business needs (and is subject to change if the business needs change).
- The plan is ambitious and feasible.
- The plan provides a clear direction about what success looks like so the teams have space to figure out how to achieve success and so teams understand what is not a priority.

Arriving at a good plan is an iterative process that is neither exclusively top-down nor exclusively bottom-up because there is a cyclical information dependency. Company level strategy is informed by what is working and not working about our business (context our teams have), and team plans are informed by what our company level strategy is (a decision ultimately owned by the CEO). Fundmentally, everyone on our team has context and insights that are valuable inputs into the planning process.

In practice, both the top-down motion and bottoms-up motion happen concurrently, but we need to bootstrap the process to iteratively work through the information dependency. It is helpful to think about planning as having a `W` shape:

![Planning shape](https://assets.proof.pub/2056/firstround/O6rbG1rNQ2emg8EPj1Xa_TKImage%200%20Leadership%20Frames.png)

Source: [The Secret to a Great Planning Process — Lessons from Airbnb and Eventbrite](https://review.firstround.com/the-secret-to-a-great-planning-process-lessons-from-airbnb-and-eventbrite)

## Definitions

- Our **[strategy](strategy.md)** is a concise description of how product and engineering contribute to the top-level company objectives. It sets a clear direction so we stay focused on what is important and have appropriate trade-off discussions if necessary. This is the **WHY**.
- **[OKRs](../company/goals/guidelines.md)** define how we measure success. This is the **WHAT**.
- **Roadmap items** are the concrete high-level things that we are delivering to achieve success (as measured by OKRs). This is the **HOW**.

## Annual planning process

The goal of our annual planning process is to create and maintain a 1 year top level strategy that teams can reference during each quarterly planning process.

We go through this full process in Q4 and a lightweight version of this every quarter to review and make necessary updates.

| Week of quarter | Action                                                                                                                                                                                                                                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Weeks 2 - 5     | Draft the annual vision document for the next year <ul> <li>VPs draft annual vision doc based on all known context.</li> <li>VPs solicit feedback from exec team and product/eng teams.</li> <li>VPs make updates to the vision based on feedback and solicit new rounds of feedback as necessary.</li></ul> |
| Week 6          | Finalize annual vision document <ul> <li>VPs get buy-in from key stakeholders.</li> <li>Annual strategy added to handbook and communicated to team.</li> </ul>                                                                                                                                               |

## Quarterly planning process

This is the planning process we do each quarter.
| Week | Action |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Week 7 of current quarter<br>5 weeks until next quarter | Gather input from stakeholders on upcoming priorities <ul> <li>VPs gather input from exec team on important problems to solve next quarter</li> <li>Directors gather input from teams on next quarter priorities</li> </ul> |
| Week 8 of current quarter<br>4 weeks until next quarter | Draft department level OKRs <ul> <li>VPs & Directors create first draft of OKRs during [VP team sync](team.md#vp-team-sync)</li> <li>VPs share with exec team and integrate feedback</li> <li>Directors share with their orgs and integrate feedback</li> </ul> |
| Week 9 of current quarter<br>3 weeks until next quarter | Revise department level OKRs<ul> <li>VPs & Directors discuss and revise OKRs during [VP team sync](team.md#vp-team-sync)<li>VPs share updates with exec team and integrate feedback</li> <li>Directors share updates with their orgs and integrate feedback</li> </ul> |
| Week 10 of current quarter<br>2 weeks until next quarter | Finalize OKRs<ul> <li>VPs & Directors align on final OKRs during [VP team sync](team.md#vp-team-sync)</li> <li>VPs get exec team buy in to finalize and approve OKRs</li> <li>OKRs added to the handbook & communicated on Slack</li> </ul> |
| Week 12 of current quarter<br>1 week until next quarter | End of quarter retrospective<ul> <li>VPs & Directors retro previous quarter</li> <li>VPs and CTO team retro previous quarter & finalize OKR scorecard</li> </ul> |
| Week 1 of new quarter | Kick off new quarter<ul> <li>VPs share previous quarter OKR scorecard to Product/Eng Department </li> <li>Communicate department OKRs for upcoming quarter at Company kick off</li> </ul> |

## Sharing progress

There are a few ways we track plans and celebrate progress at Sourcegraph.

- The [GitHub project tracker](#github-project-tracker) is **the source of truth** for all key results in product and engineering.
- [OKR slides](#okr-slides) contain the top level product and engineering results that the VPs and Directors review and discuss on a weekly basis.
- [Monthly team updates](#monthly-team-updates) communicate a high-level narrative/summary to the rest of the company about what each team in product/eng accomplished since the last monthly update and what is up next.
- [Monthly demo days](demo-day.md) are a great opportunity for engineers to highlight and share with a broad audience the specific things they shipped. It is really fun!

### Status definitions

| Status        | Description                                  |
| ------------- | -------------------------------------------- |
| 🟢 On track   | 90-100% confidence we will achieve the goal. |
| 😬 At risk    | 75-89% confidence we will achieve the goal.  |
| ⛔️ Off track | <75% confidence we will achieve the goal.    |
| 🚀 Done       | We have achieved the goal!                   |
| ☠️ Cancelled  | We are no longer pursuing this goal.         |

### GitHub project tracker

The [GitHub project tracker](https://github.com/orgs/sourcegraph/projects/214) is **the source of truth** for key results in product and engineering. There are a few tabs.

- The **Department KRs** tab tracks the top level product and engineering key results that the VPs and Directors review every week at the [VP team sync](#vp-team-sync).
- The **Org KRs** tab tracks all the org level key results (excluding those that are tracked at the department level). VPs and Directors review this monthly, or as-needed when something is escalated by a Director.
- The **Team Deliverables** tab tracks the next big roadmap items that each team is delivering in service of their KRs.
  - When teams are in the state where they have a clear KR, but don't yet have a clear roadmap to achieving that KR, the KR is included in this view. Once a roadmap item added, the KR is removed.
  - Teams should include as many future roadmap items beyond the quarter as that team has line of sight to.
  - Roadmap items have a target date that is our best estimate of when the item will be delivered. This date is used for multiple purposes:
    - A diagnostic tool to help us identify teams that might need help.
    - A cross-functional communication tool so Sales/CE/CS/Marketing can plan ahead to help us drive usage of the things we are delivering.
  - This tab is reviewed ad hoc by VPs.
- The **Engineering** tab tracks results that are relevant only to engineering or engineering leadership. This is reviewed every week in the [VPE team sync](team.md#vpe-team-sync).
- The **All** tab simply shows all items in the tracker for reference.
- Each org (Cloud, Enablement, Code graph) has a tab that tracks the results that the directors for that org care about. Directors own how they use their tab with their org.

Expectations:

- Each tab on this tracker is reviewed and updated on a weekly basis by the relevant team.
- Each item in the tracker is linked to a GitHub issue.
  - Customer names and business metrics can't be mentioned on public issues, so by default, all issues should be created in [sourcegraph/product-engineering-tracker](https://github.com/sourcegraph/product-engineering-tracker).
- For each issue linked to from the tracker, the assignee is responsible for posting an update to the issue at the end of each week. The update should include:

  ```markdown
  # Wins

  <!-- What outcomes have we accomplished since the last update? -->

  # Risks

  <!-- What might prevent us from making the progress we want to make? -->

  # Next steps

  <!-- What are the next outcomes that the team is working toward? -->
  ```

### OKR slides

The OKR tracker slides are a living document that directors update by 19:00 UTC each week to communicate that current state of top level product and engineering key results for the current quarter. It only contains 1 week's worth of updates.

The slides are reviewed and discussed each week in the [VP team sync](team.md#vp-team-sync) so we can celebrate wins, identify risks, and course correct if necessary.

After the slides are reviewed, they are copied to a seprate slide deck to capture week-over-week progress.

After the [VP team sync](team.md#vp-team-sync), summarized OKR status updates are posted in #product-engineering-planning Slack channel for visibility.

Slides:

- [FY22 Q4 (current week)](https://docs.google.com/presentation/d/1DgY3k684Jn3diCe4GPPcrGt9iaD9-vyndiiJwEoELyE/edit#slide=id.gfca47eca53_0_184)
- [FY22 Q4 (week over week history)](https://docs.google.com/presentation/d/1d36d47VFSZzQWIhdkZt3JZ3pNUk766yy8iwkFfVpTyY/edit)

### Weekly updates

These are due each Friday by 19:00 UTC.

- Owners update their sections and connected issues in the [GitHub project tracker](#github-project-tracker)
- Directors update the [OKR slides](#okr-slides)

### Monthly team updates

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

### Monthly PMM roadmap update

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
