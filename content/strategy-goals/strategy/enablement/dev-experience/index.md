# Dev Experience team strategy

This page outlines the vision, strategy, and goals of the [Dev Experience team](../../../../departments/product-engineering/engineering/enablement/dev-experience/index.md).

## Mission

Make it so that every developer feels empowered to be productive in contributing to the Sourcegraph application.

## Vision

We want teammates and contributors to be delighted by the experience of working on Sourcegraph—to have a feeling so strong that it becomes a key contributor to their happiness and an asset in our recruitment of new teammates.

What is a delightful experience for developers exactly? While it's different for everyone, these experiences all share common traits: reproducibility, predictability, short feedback loop, previewing changes.

Engineers should be able to spend their time solving problems that matter to them and focus on their goals.

### CI Vision

#### CI is discoverable and simple to understand

The pipeline holds an agglomeration of checks that are necessary for us to ensure we ship with an acceptable quality to our customers. As engineers, it provides us feedback on our work and it should be as clear as possible.

**Discoverability implies two things:**

- You can see what are the available actions while you are using the tool in question.
- You can learn about the tool without having to explicitly focus on doing so. In other terms, you learn about it as you go.

Discoverability does not absolve anyone from writing documentation, but instead complements it and exposes users to it: "they know what they don't know". Therefore, in the context of the CI, it translates into:

- You can see what are the available tests to give you confidence in your changes and you can zoom onto these to understand how they work.
- You can read how other steps are written to understand how to add a new one or how to modify them in order to adjust what is tested.
- The two above statements enable you to be autonomous to make changes on the CI pipeline within your own domain.

#### CI steps are first class citizens and have owners

Linking a step to any scripts that may be run, should not be a tedious task that requires squinting at a myriad of log lines. As an engineer working on a particular domain, adding or updating a step should be straightforward, even if there is no familiarity with the CI.

#### CI is predictable, then fast

What is being run, how and when must be very clear. Otherwise, it introduces friction that prevents new engineers from debugging existing steps, which puts pressure on the engineers who have been around longer.

## Guiding principles

We inherit Sourcegraph's [engineering principles and practices](../../../../departments/product-engineering/engineering/process/principles-and-practices.md) and [Enablement org's principles and practices](../../../../departments/product-engineering/engineering/enablement/index.md#principles-and-practices). In addition, the following principles guide the work we do in dev experience. Sometimes adhering to one causes us to compromise another, but they guide our decisions on what matters.

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

- 🎯 The main pipeline is consistently green for at least 23 hours/day
- 🎯 Red builds on the pipeline are caused by legitimate test failures, not the lower level infrastructure they're running on
- 🎯 Total build time on main is within ~5 minuts of previous deployment model

## Roadmap

### FY23 Q1

- [Improve CI stability](https://github.com/sourcegraph/sourcegraph/issues/31003)

- [SOC2 Compliance](https://github.com/sourcegraph/sourcegraph/issues/31008)

- [Improve engineering onboarding: tooling](https://github.com/sourcegraph/sourcegraph/issues/31005)

- [Improve support for application developer experience](https://github.com/sourcegraph/sourcegraph/issues/31006)

### Next (6–12 months)

- [Standardize logging, metrics, and errors](https://github.com/sourcegraph/sourcegraph/issues/30552)

- Standardize code checks and testing

- Improve incident detection on Sourcegraph Cloud
