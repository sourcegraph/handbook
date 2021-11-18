# Supporting Batch Changes

## Batch Changes documentation

The best place to start is to read through all of the [Batch Changes docs](https://docs.sourcegraph.com/batch_changes). Of particular importance:

- [Introduction to Batch Changes](https://docs.sourcegraph.com/batch_changes/explanations/introduction_to_batch_changes): understand what the product is all about
- [Quickstart](https://docs.sourcegraph.com/batch_changes/quickstart): create your first batch change!
- [How `src` executes a batch spec](https://docs.sourcegraph.com/batch_changes/explanations/how_src_executes_a_batch_spec): this is what happens under the hood when the user previews or applies a batch change
- [Troubleshooting](https://docs.sourcegraph.com/batch_changes/references/troubleshooting): this (along with the above doc on how `src` works) holds common first steps for troubleshooting; _always feel free to add to this page!_
- [Requirements](https://docs.sourcegraph.com/batch_changes/references/requirements): make sure customers understand and meet our requirements

## Support quests

These are some ideas for onboarding quests, to be run in our dogfood or testing environments. (For inspiration, be sure to check out our [current demo batch changes](https://k8s.sgdev.org/batch-changes) as well.)

For each of these quests, be sure to also get familiar with the updating process: after creating an initial batch change with `src batch apply`, make a change to the spec and then preview and apply the change.

- Create a batch change over 5+ repositories for each of the following:
  - Run [Comby](https://comby.dev/) to replace `fmt.Sprintf("%d", :[v])` with `strconv.Itoa(:[v])` in Go files (`*.go`)
  - Run `go fmt ./...` in the repository
  - Replace problematic language (such as changing blacklist/whitelist to blocklist/allowlist)
- Create a “monorepo” batch change: one that creates at least 5 changesets in a single repository
- Create a “manual” batch change: one that imports at least 5 changesets, and does not create any

## Support pairing

In order to stay in sync, support engineers and Batchers should have periodic pairing sessions. The goals of these sessions:

- Keep support informed about upcoming changes/features.
- Keep the Batchers informed about common problems and support themes.
- Give support engineers an opportunity to dig deeper into the tech, to further empower them. This can reduce the need for escalations, and deliver solutions to customers faster.
