# Sourcegraph Cloud instance for user research

One of our tools for carrying out usability testing and getting feedback is our dedicated Sourcegraph Cloud instance for user research.

## Why do we have a dedicated instance for user research?

The product and design team uses a mix of [moderated and unmoderated user research](../index.md) to validate and improve on our work. For some early-stage design research, interactive Figma prototypes do the job. But for many things we want to test, we need to use the real Sourcegraph application, not an interactive prototype.

Sourcegraph.com is not an effective alternative, as the experience on .com doesn’t reflect the actual experience on a customer’s own instance. This in turn influences the research itself so that we may not actually get relevant or valid research insights. Similarly, S2 is internal-only to Sourcegraph, and can’t be accessed outside of the Sourcegraph team.

With our dedicated instance for user research, we can much more accurately explore and validate the customer experience in a like environment.

## Overview of the instance

- The instance is available at https://research.sourcegraph.com.
- The instance is kept up to date with `main` on an hourly schedule. This means that the research instance can be used while an effort is underway, before each monthly version release.
- The instance has been populated with a set of open-source repositories “owned” by a fictional organization: Fable Labs. There’s nothing particularly special about these repositories other than representing a variety of languages and complexity, to make them useful for a range of code-related activities.
- The instance should **not** be considered either stable or permanently stateful. For a variety of reasons, we may choose to either clear all data on the instance or discontinue the instance.

## Using the research instance for user research

- The research instance will be most immediately valuable for unmoderated user research using Usertesting.com.
- In unmoderated user research, we will provide a generic username and password for participants to use to log in to the instance. This user account has minimal permissions to carry out actions on the instance, and the generic password will be changed manually after each round of unmoderated user research.
- More than one unmoderated user research participant can sign in with the same user account at the same time to complete their activities.
- The instance is a standalone Cloud instance and not part of our internal authentication infrastructure.
- When creating content on the instance, aim for real-world accuracy to create a realistic environment for user research. For example, a new search context might be named `@security-team`, but avoid `@test-context-123`.
- When creating content on the instance for the purpose of or as a result of running user research, if the content may conflict or influence other research activities, the research organizer is responsible for removing or reverting that content to restore the instance to a "clear state."

## Coordinating user research

- Since the user research instance is kept up to date with `main`, unreleased features can be enabled on the instance for user research for any given activity.
- Generally speaking, multiple user research activities can be carried out in parallel so long as their activities don’t directly influence or impact each other (for example, someone might carry out research on a new approach to search suggestions while someone else carries out research on creating new code insights). However, it’s best practice to share your research planning and timeline with other teams. The #product-research channel on Slack is a good place to share research planning and spot potential overlap.

See also: [RFC 731: Dedicated Instance on Cloud for User Research](https://docs.google.com/document/d/1tpvT2Lv0asVy8ti2ceB_lQf0tvXtbQquGP5vXNkYPGs/)
