# Product/Engineering planning communication

This page documents how we communicate our plans and progress.

## Annual strategy

Our vision is the story of where we want to be at the end of the year and our strategy describes how we are going to achieve that vision. This is intended to be a stable plan that does not change throughout the year.

[Current vision and strategy.](../strategy-goals/index.md)

## Quarterly department OKRs

Each quarter we set OKRs at the department level (all of product and engineering).

OKRs define what success looks like each quarter, taking into account where we are at as a company and what we think the next things we need to accomplish given the vision and strategy we have for the year.

We don't do OKRs at lower levels (orgs, teams); instead we ask orgs and teams to focus on building out their roadmap (using strategy and OKRs as an input).

### OKR tracking

The source of truth for current OKRs and status of those OKRs is in our [private issue tracker](https://github.com/sourcegraph/product-engineering-tracker/labels/summary).

- This is private because KRs frequently contain sensitive business metrics and customer names).
- The sanitized public version of our OKRs are [here in the handbook](../../../strategy-goals/goals/index.md).

Each KR has an associated GitHub issue following [this template](https://github.com/sourcegraph/product-engineering-tracker/issues/new?template=product-engineering-kr.md).

- The assignee of each OKR is responsible for posting an update to the associated tracking issue by 19:00 UTC each Friday. Weekly updates should include:
  - The status of how we are tracking toward the goal (for numeric goals, include the current number we are at).
    | Status | Description |
    | ------------- | -------------------------------------------- |
    | 🟢 On track | 90–100% confidence we will achieve the goal. |
    | ⚠️ At risk | 75–89% confidence we will achieve the goal. |
    | 🛑 Off track | <75% confidence we will achieve the goal. |
    | 🚀 Done | We have achieved the goal! |
    | ☠️ Cancelled | We are no longer pursuing this goal. |
  - Description of concrete progress that has been made since the last weekly update.
  - Clear next steps and owners.
  - Any other helpful information (ex: risks, requests for help).
- VP Product and VP Eng review and ask questions async and then anything that needs discussion is added to [VP team sync agenda](../team/index.md#vp-team-sync).

## Roadmap

The purpose of our roadmap is to communicate to our team and our customers the story of what we plan to deliver to acheive our our annual vision and quarterly OKRs.

Expectations around roadmap items depend on how far in the future we expect them to happen. Our goal is to have:

- High confidence and fidelity in our roadmap for the next 3 months on a rolling basis (reviewed/updated ~monthly)
- Our best approximation for the biggest milestones we want to hit over the next 12 months on a rolling basis (reviewed/updated ~quarterly)

The roadmap should always reflect the realistic expectations of the team

- Don't invent roadmap items that the team has low confidence in just to fill space on the roadmap (at the same time it is important for teams to challenge themselves to think about what they want to aim to accomplish over a time horizon longer than one quarter).
- Don't provide false precision on dates (if you can only place items into a quarter or month, that is fine)
- Don't include stretch roadmap items (just adjust the timeline out so you don't feel the need to label something as "stretch")

For FY23 Q1, the source of truth for our roadmap is [this GitHub project](https://github.com/orgs/sourcegraph/projects/214).

- Each roadmap item should link to an issue that follows [this template](https://github.com/sourcegraph/sourcegraph/issues/new?template=roadmap-issue.md)
- Teams should keep the delivery plan up-to-date and post updates to the issue anytime something important happens (ex: milestone achieved, plan changed)

## Team newsletters

Team newsletters communicate a high-level narrative/summary to the rest of the company about what each team in product/eng accomplished since the last newsletter and what is up next.

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

Near the end of each quarter, the product/engineering VPs and Directors will get together for a retrospective. The purpose of this retrospective is to create a shared safe space for celebrating wins, learning, and improvement.

- Before the retrospective we will
  - Solicit feedback from the broader product/engineering team
  - Asynchronously write down thoughts on topics we may want to discuss during the retrospective. Prompts may include but aren't limited to:
    - What went well (wins) for yourself and for your team?
    - Did we accomplish what we said we were going to accomplish?
    - What didn’t go well (struggles and challenges) for yourself and for your team?
    - What did you and/or your team learn?
    - What should we start/stop/continue?
- During the retrospective we will vote on what topics we want to discuss and then discuss those topics.
- After the retrospective, we will share notes and action items in a public channel for transparency.
