# Product and engineering planning

- [Product and engineering planning](#product-and-engineering-planning)
  - [Planning timeline](#planning-timeline)
    - [Annual planning process](#annual-planning-process)
    - [Quarterly planning process](#quarterly-planning-process)
  - [Sharing progress](#sharing-progress)
    - [Status definitions](#status-definitions)
    - [GitHub project tracker](#github-project-tracker)
    - [OKR slides](#okr-slides)
    - [Monthly team updates](#monthly-team-updates)
  - [Quarterly retrospectives](#quarterly-retrospectives)

## Planning timeline

### Annual planning process

We go through this full process in Q4 and a lightweight version of this every quarter to review and make necessary updates.

| Week of quarter | Action                                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Week 2          | Draft annual vision document for next year<li>VPP/VPE draft annual vision doc                                                             |
| Week 3          | Gather input from stakeholders<li>VPP/VPE get feedback from exec team and key stakeholders                                                |
| Week 4          | Update annual vision <li>VPP/VPE update annual vision draft based on feedback                                                             |
| Week 5          | Share & gather feedback <li>VPP/VPE share annual vision with Product/Eng Directors and gather feedback                                    |
| Week 6          | Finalize annual vision document <li>VPs update and finalize based on feedback <li>Annual vision added to handbook & communicated on Slack |

### Quarterly planning process

This is the planning process we do each quarter.

| Week of quarter    | Action                                                                                                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Week 7             | Gather input from stakeholders on upcoming priorities <li>VPP/VPE gather input from exec team on important problems to solve next quarter <li>Product/Eng Directors gather input from teams on next quarter priorities |
| Week 8             | Draft department level OKRs <li>VPP/VPE & Product/Eng Directors meeting to draft OKRs<li>VPP/VPE share and get feedback from exec team                                                                                 |
| Week 9             | Revise department level OKRs<li>VPP/VPE & Product/Eng Directors meeting to revise final draft of OKRS                                                                                                                  |
| Week 10            | Finalize OKRs<li>VPP/VPE get exec team buy in to finalize and approve OKRs<li>OKRs added to the handbook & communicated on Slack                                                                                       |
| Week 12            | Prepare for end of quarter retrospective<li>Product/Eng Directors gather input from their teams on OKR progress and fill out OKR scorecard                                                                             |
| Week 13            | End of quarter retrospective<li>VPP/VPE & Product/Eng Directors retro previous quarter<li>VPP/VPE and CTO Team retro previous quarter & finalize OKR scorecard                                                         |
| Week 1 New Quarter | Kick off new quarter<li>VPP/VPE share previous quarter OKR scorecard to Product/Eng Department <li>Communicate department OKRs for upcoming quarter at Company kick off                                                |

## Sharing progress

There are a few ways we track plans and celebrate progress at Sourcegraph.

- The [GitHub project tracker](#github-project-tracker) is **the source of truth** for all key results in product and engineering.
- The [OKR slides](#okr-slides) contain the top level product and engineering results that the VPs and Directors review and discuss on a weekly basis.
- The [monthly team update](#monthly-team-updates) communicate a high-level narrative/summary to the rest of the company about what the team accomplished since the last monthly update and what is up next.
- [Monthly demo days](demo-day.md) are a great opportunity for engineers to highlight and share with a broad audience the specific things they shipped. It is really fun!

### Status definitions

| Status        | Description                                 |
| ------------- | ------------------------------------------- |
| ⛔️ Off track | <75% confidence we will achieve the goal    |
| 😬 At risk    | 75-89% confidence we will achieve the goal  |
| 🟢 On track   | 90-100% confidence we will achieve the goal |
| 🚀 Done       | We have achieved the goal!                  |
| ☠️ Cancelled  | We are no longer pursuing this goal         |

### GitHub project tracker

The [GitHub project tracker](https://github.com/orgs/sourcegraph/projects/214) is **the source of truth** for key results in product and engineering. There are a few tabs:

- The **Product and Engineering** tab tracks the results that the product and engineering VPs and directors review every week at the [VP team sync](#vp-team-sync).
- Each org (Cloud, Enablement, Code graph) has a tab that tracks the results for that org. Org directors review this dashboard each week with their team.
- The **Engineering** tab tracks results that are relevant only to engineering or engineering leadership. This is reviewed every week in the [VPE team sync](#todo-link).
- The **All** tab simply shows all items in the tracker for reference.

Expectations:

- Each tab on this tracker is reviewed and updated on a weekly basis with the relevant teams for each tab (see above).
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

The OKR tracker slides are a living document that is updated once a week to communicate that current state of top level product and engineering key results for the current quarter. It only contains 1 week's worth of updates. Each slide has an owner, and that owner is responsible for updating that slide at the end of each week so it can be reviewed at the [VP team sync](#vp-team-sync) on Monday.

The slides are reviewed and discussed each week in the [VP team sync](#vp-team-sync) so we can celebrate wins, identify risks, and course correct if necessary.

After the slides are reviewed, they are copied to a seprate slide deck to capture week-over-week progress.

Slides:

- [FY22 Q4 (current week)](https://docs.google.com/presentation/d/1DgY3k684Jn3diCe4GPPcrGt9iaD9-vyndiiJwEoELyE/edit#slide=id.gfca47eca53_0_184)
- [FY22 Q4 (week over week history)](https://docs.google.com/presentation/d/1d36d47VFSZzQWIhdkZt3JZ3pNUk766yy8iwkFfVpTyY/edit)

### Monthly team updates

Monthly team updates communicate a high-level narrative/summary to the rest of the company about what the team accomplished since the last monthly update and what is up next.

The engineering manager of each team is responsible for sending an update to [engineering-team-status@sourcegraph.com](https://groups.google.com/a/sourcegraph.com/g/engineering-team-status) by the end of the week that contains the first day of each month. EMs may delegate to someone else on the team to send the update.

Guidelines:

- The email subject should contain the team name and the date (for example: "Search update 2020-10-14") so each update starts a distinct email thread (otherwise, they get grouped in the Google Groups UI).
- There is no strict format to follow for the content, but here are some tips:
  - Favor prose over a list of changes.
  - Be brief and link to details.
  - Consider sharing wins, challenges, risks, plans, lessons learned.
  - Inline relevant screenshots/demos/gifs/charts when possible so it isn't just a wall of text.
  - Be creative and have fun with it! Jokes and random fun facts are welcome.

## Quarterly retrospectives

The purpose of our quarterly OKR retrospectives is to create a shared safe space for celebrating wins, learning, and improvement.

- Format
  - 1 hr synchronous meeting
- Attendees
  - VPP, VPE, and their direct reports
- Prework
  - DRI responsible for each KR fills out their retrospective slide in preparation for meeting, colleting any necessary information from their team in advance.
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
  - Finalized OKR Scorecard deck ready to be shared with the company
