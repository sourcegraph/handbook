# Product and engineering planning

## Philosophy

Our planning process defines how we create goals and track progress toward those goals.

Properties of a good plan:

- The plan addresses the most important business needs (and is subject to change if the business needs change).
- The plan is ambitious and feasible.
- The plan provides a clear direction about what success looks like so the teams have space to figure out how to achieve success and so teams understand what is not a priority.

To acheive a good plan, our planning process based on the following principles:

- Everyone on our team has context and insights that are valuable inputs into the planning process.
- success we want to understand and be able to measure the impact and value the work we commit to will have on customers, our internal teams, and the overall success of Sourcegraph.
- Arriving at a good plan is an iterative process that is neither exclusively top-down nor exclusively bottom-up because there is a cyclical information dependency. Company level strategy is informed by what is working and not working about our business (context our teams have), and team plans are informed by what our company level strategy is (a decision ultimately owned by our CEO).

TODO(nick): write more here

## Definitions

- Strategy: Our [strategy](strategy.md) is a concise description of how product and engineering contribute to the top-level company objectives. It sets a clear direction so we stay focused on what is important and have appropriate trade-off discussions if necessary.
- OKRs: [OKRs](../company/goals/guidelines.md) define how we measure success.
- Roadmap items: The concrete high-level things that we are delivering to achieve success (as measured by OKRs).

In short, the strategy is the WHY, the OKRs are the WHAT, and roadmap items are the HOW.

### Related terminology

- Product priorities: An ordered list of problem statements or outcomes that product has evidence is important
- Backlog: The ordered list of items to be tackled after items on the roadmap are complete
- Department: A top-level organizational unit of people, such as Sales, Product or Marketing.
- Org: A mid-level organizational unit of people, such as Code Graph, Enablement, or Cloud. Note that an org does not necessarily represent a coherent product area that exists in the product, it's an internal team.
- Team: A well-defined product team that works to deliver features for one or more product areas.
- Product Area: A loosely defined collection of features or capabilities that may be worked on by one or more teams.
- Launch tiers (L1, L2, and L3): Different levels of attention and planning that features we are launching get. This is documented on the [marketing launch page](../marketing/product-marketing/marketing_launch_tiers.md).

## Annual planning process

We go through this full process in Q4 and a lightweight version of this every quarter to review and make necessary updates.

| Week of quarter | Action                                                                                                                                                         |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Week 2          | Draft annual vision document for next year <ul> <li>VPP/VPE draft annual vision doc</li> </ul>                                                                 |
| Week 3          | Gather input from stakeholders <ul> <li>VPP/VPE get feedback from exec team and key stakeholders</li></ul>                                                     |
| Week 4          | Update annual vision <ul> <li>VPP/VPE update annual vision draft based on feedback</li></ul>                                                                   |
| Week 5          | Share & gather feedback <ul> <li>VPP/VPE share annual vision with Product/Eng Directors and gather feedback</li></ul>                                          |
| Week 6          | Finalize annual vision document <ul> <li>VPs update and finalize based on feedback</li> <li>Annual vision added to handbook & communicated on Slack</li> </ul> |

## Quarterly planning process

This is the planning process we do each quarter.
| Week | Action |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Week 7 of current quarter<br>5 weeks until next quarter | Gather input from stakeholders on upcoming priorities <ul> <li>VPP/VPE gather input from exec team on important problems to solve next quarter</li> <li>Product/Eng Directors gather input from teams on next quarter priorities</li> </ul> |
| Week 8 of current quarter<br>4 weeks until next quarter | Draft department level OKRs <ul> <li>VPP/VPE & Product/Eng Directors create first draft of OKRs during [VP team sync](team.md#vp-team-sync)</li> <li>VPP/VPE share with exec team and integrate feedback</li> <li>Product/Eng Directors share with their orgs and integrate feedback</li> </ul> |
| Week 9 of current quarter<br>3 weeks until next quarter | Revise department level OKRs<ul> <li>VPP/VPE & Product/Eng Directors discuss and revise OKRs during [VP team sync](team.md#vp-team-sync)<li>VPP/VPE share updates with exec team and integrate feedback</li> <li>Product/Eng Directors share updates with their orgs and integrate feedback</li> </ul> |
| Week 10 of current quarter<br>2 weeks until next quarter | Finalize OKRs<ul> <li>VPP/VPE & Product/Eng Directors align on final OKRs during [VP team sync](team.md#vp-team-sync)</li> <li>VPP/VPE get exec team buy in to finalize and approve OKRs</li> <li>OKRs added to the handbook & communicated on Slack</li> </ul> |
| Week 12 of current quarter<br>1 week until next quarter | End of quarter retrospective<ul> <li>VPP/VPE & Product/Eng Directors retro previous quarter</li> <li>VPP/VPE and CTO team retro previous quarter & finalize OKR scorecard</li> </ul> |
| Week 1 of new quarter | Kick off new quarter<ul> <li>VPP/VPE share previous quarter OKR scorecard to Product/Eng Department </li> <li>Communicate department OKRs for upcoming quarter at Company kick off</li> </ul> |

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

The OKR tracker slides are a living document that is updated once a week to communicate that current state of top level product and engineering key results for the current quarter. It only contains 1 week's worth of updates. Each slide has an owner, and that owner is responsible for updating that slide at the end of each week.

The slides are reviewed and discussed each week in the [VP team sync](team.md#vp-team-sync) so we can celebrate wins, identify risks, and course correct if necessary.

After the slides are reviewed, they are copied to a seprate slide deck to capture week-over-week progress.

Slides:

- [FY22 Q4 (current week)](https://docs.google.com/presentation/d/1DgY3k684Jn3diCe4GPPcrGt9iaD9-vyndiiJwEoELyE/edit#slide=id.gfca47eca53_0_184)
- [FY22 Q4 (week over week history)](https://docs.google.com/presentation/d/1d36d47VFSZzQWIhdkZt3JZ3pNUk766yy8iwkFfVpTyY/edit)

### Weekly team updates

These are due each Friday by 19:00 UTC.

- Update the [GitHub project tracker](#github-project-tracker)
- Update the [OKR slides](#okr-slides)

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
  - Finalized OKR scorecard deck ready to be shared with the company

## Strategy Pages

[The per-team strategy pages](../company/strategy/index.md#per-team-strategy-pages) are where we track our strategy in narrative form for the next 3-12 months. Engineering should feel empowered to bring up that they feel strongly about in conversations with product. [We want to push decisions down to people closest to those problems](../communication/decisions.md#what-makes-an-effective-decision). It is product's responsibility to help give insight into customer pains and feedback, strategic priorities, and to ensure consistency across the product.

Teams should work on what their strategy page says they will work on next, and not just leave it behind to work on other things. If there is a desire to work on something else, the change should be discussed and merged to the page. We ask that teams leverage the [Strategy page template](https://github.com/sourcegraph/handbook/blob/main/page_templates/strategy_template.md) when creating and updating content.

## Experimentation and improvements to planning

### Using the AARRR Framework to facilitate feature lifecycle planning

Features are no different than products in their need to acquire visitors, activate users, retain those users, expand via referral and other viral means and generate revenue for the business.

To improve planning so that teams consider these stages as part of feature development, some product teams are experimenting with Dave McClure's pirate framework. This framework condenses these phases into an easy to remember (if not comical sounding) mnemonic:

- Acquisition - grow the number of users using the feature
- Activation - improve the number of users who see value
- Retention - ensure activated users come back to the feature
- Referral - ensure your users invite other users
- Revenue - understand how the feature contributes back to the business.

Learn more about the framework with this [introduction](https://medium.com/@ginoarendsz/an-introduction-to-the-aarrr-framework-b8570d6ae0d2) or Dave McClure's [slide deck on the topic](https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version).

To leverage the framework, teams are incorporating the metrics in [product documents](https://docs.google.com/document/d/1-TIKwwQd2eQEH0PCuBhOitLcm31Pdx5NmCShVj6JqyU/edit#bookmark=id.gp24i8rlesx), [user stories](https://miro.com/app/board/o9J_ltNMJnI=/) and in reporting such as [Amplitude notebooks](https://analytics.amplitude.com/sourcegraph/notebook/h7td539?source=sidebar).

## Related content

- It's important to think about how your features will go to market, but [pricing features](../product/product_management/pricing.md) is a complicated topic and has its own page.
- You can find the backlogs for the product teams by visiting their [individual strategy pages](../company/strategy/index.md#per-team-strategy-pages). Teams are using different tools and processes to plan and track their work such as Jira, Productboard, or GitHub issues.
- See also [tracking issues](../engineering/tracking_issues.md)
- See also [prioritizing](../product/product_management/prioritizing.md)
