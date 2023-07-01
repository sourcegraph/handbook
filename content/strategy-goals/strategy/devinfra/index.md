# Developer Infrastructure Team Strategy

This page outlines the vision, strategy, and goals of the [Developer Infrastructure team](../../../departments/engineering/teams/devinfra/index.md).

## Mission

Empower every developer to be productive in contributing to the Sourcegraph application.

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
