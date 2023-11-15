# Batch Changes CE onboarding

Welcome to Batch Changes! This page is primarily for new members of the CE team, but it could be helpful to other teams, too. After going through these steps, you should:

- understand what Batch Changes is
- be able to present it to customers from a value, usage, and functional perspective
- be comfortable demoing Batch Changes to developers and answering questions

## Prerequisites

General [CE onboarding](../../../../technical-success/ce/onboarding/index.md)

## Part 1: Discover Batch Changes

- Watch the [demo video](https://www.youtube.com/watch?v=eOmiyXIWTCw) and checkout the [landing page](https://about.sourcegraph.com/batch-changes/)
- What is Batch Changes, and why does it matter to customers? Read about [product positioning and messaging](go-to-market/index.md)
- How to demo Batch Changes? Read the [Batch Changes deep dive](https://docs.google.com/presentation/d/1CN3KQf1Hfdb4RO6FgBgKuiHK4ERcOAHPgVnOcBu-MPU/edit#slide=id.ga366db8d9b_0_116)
- How does Batch Changes work? Read the Batch Changes documentation section of the [Supporting Batch Changes guide](./supporting-batch-changes.md#batch-changes-documentation)

## Part 2: Use Batch Changes

- If you are blocked at any time during onboarding, ask for help in #batch-changes. If you are blocked, others will be as well and we want to know about it.
- Feel free to document your onboarding experience and share it back with the Batch Changes team so that we can make this even better!
- In this tutorial, we will use [demo.sourcegraph.com](https://demo.sourcegraph.com) as our environment. You should have access by default using SSO.
- Tip: Use the docs extensively to complete the tutorial steps.

### Step 1: Quickstart

Let's start with a quick setup example to warm up: [Quickstart](https://docs.sourcegraph.com/batch_changes/quickstart).

By the end of this step, you should be able to answer:

- what does `on` do?
- what are `steps`?
- what is the difference between _applying_ and _publishing_?
- what are steps required to configure Batch Changes?

### Step 2: comby

Let's use [comby](https://comby.dev/). Batch Changes can run any code change tool, but comby is great for structural-type change. See how it works with Batch Changes in this [tutorial](https://docs.sourcegraph.com/batch_changes/tutorials/refactor_go_comby). We have created three playground repositories that you can open changesets on: add `repo:sourcegraph-ce-onboarding` to the search query to limit the search results to those. Don't publish your changesets yet!

By the end of this step, you should be able to answer:

- what is comby?
- does Batch Changes rely on comby?

### Step 3: The `on` attribute

Can you scope down your batch change to only a two repositories? Modify the spec to scope down your batch change to [sourcegraph-ce-onboarding/titan](https://github.com/sourcegraph-ce-onboarding/titan) and [sourcegraph-ce-onboarding/tiny-go-testing-repository](https://github.com/sourcegraph-ce-onboarding/tiny-go-testing-repository). Tip: you may find [`on`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#on) useful.

### Step 4: Publishing

Sometimes you want to publish only _some_ but not all changesets to the code host and keep the others unpublished, for example to test out if the repository owners will merge the changesets. Find out how to publish only on [sourcegraph-ce-onboarding/tiny-go-testing-repository](https://github.com/sourcegraph-ce-onboarding/tiny-go-testing-repository) using [`published`](https://docs.sourcegraph.com/batch_changes/references/batch_spec_yaml_reference#changesettemplate-published).

### Step 5: Templating

Can you use [templating](https://docs.sourcegraph.com/batch_changes/references/batch_spec_templating) to add an additional step to the spec, and run a linter _only_ on the files that have been modified?

Tip: we maintain a [cheat sheet](https://docs.sourcegraph.com/batch_changes/references/batch_spec_cheat_sheet) with commonly used patterns

By the end of this step, you should be able to answer:

- what is templating? why is it useful?

### Step 6: Tracking existing changesets

Batch Changes can [track changesets](https://docs.sourcegraph.com/batch_changes/how-tos/tracking_existing_changesets) that have been created manually. Create a new batch change to track the last 10 changesets opened on [sourcegraph/sourcegraph](https://github.com/sourcegraph/sourcegraph).

## Part 3: Get feedback

Record yourself demo-ing Batch Changes, and send a link to your video to @malo on slack to get feedback and fine tune your approach! Aim for a demo of less than 10 minutes, and feel free to use this structure:

- Explain the high level value
- Run the user through how to create a batch change (feel free to skip the CLI execution time)
- Run the user though tracking batch changes from the GUI?

## There's always more!

Congrats!!! This is the end of the Batch Changes CE onboarding, we hope it was useful to you.

Feel free to continue exploring the docs, and check out our [Batch Changes examples](https://github.com/sourcegraph/batch-change-examples) (contributions welcome).
