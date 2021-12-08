# Dev Experience team strategy

This page outlines the vision, strategy, and goals of the [Dev Experience team](../../../../product-engineering/engineering/enablement/dev-experience/index.md).

## Mission

Make it so that every developer feels empowered to be productive in contributing to the Sourcegraph application.

## Vision

We want teammates and contributors to be delighted by the experience of working on Sourcegraph — to have a feeling so strong that it becomes a key contributor to their happiness and an asset in our recruitment of new teammates.

What is a delightful experience for developers exactly? While it's different for everyone, these experiences all share common traits: reproducibility, predictability, short feedback loop, previewing changes.

Engineers should be able to spend their time solving problems that matter to them and focus on their goals.

## Guiding principles

We inherit Sourcegraph's [engineering principles and practices](../../../../product-engineering/engineering/principles-and-practices.md) and [Enablement org's principles and practices](../../../../product-engineering/engineering/enablement/index.md#principles-and-practices). In addition, the following principles guide the work we do in dev experience. Sometimes adhering to one causes us to compromise another, but they guide our decisions on what matters.

- **We don't own the developer experience at Sourcegraph – we simply focus on it.** Sourcegraph engineers own the developer experience as a collective.
- **We ship open products.** Our products are open to contributions to anyone in the company, documented, and provide migration paths if necessary. Our decisions are clearly and publicly communicated for everyone to understand our reasoning. We want to make it simple for everyone to benefit from and work on Sourcegraph’s developer experience.
- **We bandage first, then plan for surgery.** Fix local problems first, then generalize if and only if it makes sense.
  - What we cannot take upon right now, we make its status clear and provide stewardship.
    - We should never refuse to fix a "now" problem in favour of a long-term solution, only to cancel the fix because the priorities changed in between. More than not addressing the issue at hand, it prevents our users from fixing the problem for themselves in the meantime.
  - We deliver small and iterative experiments and collect feedback. We communicate regularly on their status to enable others to provide inputs. We should reap the benefits of what we work on as we go, not at the end.
- **We listen and observe.** Our users often know best what's immediately good for them because they are the ones experiencing it every day.
  We are not a dependency. We actively seek to avoid blocking product teams. We focus on improving and expediting progress, not being critical to it.

## Measuring success

To help us understand if we’re going in the right direction and to measure the progress we’re making, we want to use the following indicators:

- 🎯 Increased developer satisfaction in the surveys, tangible examples in the happiness logs
- 🎯 TTFPR: time to first PR for new engineers (10th Pr, etc.)
- 🎯 We maintain or improve our NPS rating in Q3 & Q4 / or aim to keep it above 60 as a baseline.
- 🎯 Total number of contributors to the DX ecosystem
- 🎯 Mean Time To Change

## Roadmap

### Now (3 months)

Our high-level roadmap is blurry; we aim to work on the most impactful problems.

- **Make the CI pipeline reliable, understandable, and actionable in case of failures.**
  - Tactic: Get back to Green and disable flakey tests.
  - Tactic: Lower the entry barrier to interacting with CI: pare down pipeline complexity, papercuts, improve documentation and tooling, pipeline output investment, etc.
  - OKR1: 95% green builds on main
  - OKR2: decrease mean build time for pull requests
- **Most obvious and immediate pain points impacting the onboarding are fixed.**
  - Tactic: Groom arbitrary list, focus on low hanging fruits,actively contribute to sg setup effort.
  - OKR: Improved NPS, Time To Tenth PR
- **DX is observable**
  - Tactic: Find reliable metrics that we can start monitoring with low prior engineering efforts.
  - Tactic: Evaluate and decide if we continue with OkayHQ.
  - OKR: Those metrics are sufficient to corroborate existing DX hypotheses (or invalidate them).

### Next (6-12 months)

We are currently drafting opportunities and projects we plan to explore over next year in our [strategy draft document](https://docs.google.com/document/d/1IrIe7NUEr_0RscvWDuvtjAKFRIp4agpc_in1_6T5WBQ/edit#).

### Later

We are currently drafting future bets in our [strategy draft document](https://docs.google.com/document/d/1IrIe7NUEr_0RscvWDuvtjAKFRIp4agpc_in1_6T5WBQ/edit#).
