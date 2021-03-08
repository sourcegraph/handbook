# Supporting Campaigns

## Campaigns documentation

The best place to start is to read through all of the [Campaigns docs](https://docs.sourcegraph.com/campaigns). Of particular importance:

- [Introduction to campaigns](https://docs.sourcegraph.com/campaigns/explanations/introduction_to_campaigns): understand what the product is all about
- [Quickstart](https://docs.sourcegraph.com/campaigns/quickstart): create your first campaign!
- [How `src` executes a campaign spec](https://docs.sourcegraph.com/campaigns/explanations/how_src_executes_a_campaign_spec): this is what happens under the hood when the user previews or applies a campaign
- [Troubleshooting](https://docs.sourcegraph.com/campaigns/references/troubleshooting): this (along with the above doc on how `src` works) holds common first steps for troubleshooting; _always feel free to add to this page!_
- [Requirements](https://docs.sourcegraph.com/campaigns/references/requirements): make sure customers understand and meet our requirements

## Support quests

These are some ideas for onboarding quests, to be run in our dogfood or testing environments. (For inspiration, be sure to check out our [current demo campaigns](https://k8s.sgdev.org/campaigns) as well.)

For each of these quests, be sure to also get familiar with the updating process: after creating an initial campaign with `src campaign apply`, make a change to the spec and then preview and apply the change.

- Create a campaign over 5+ repositories for each of the following:
  - Run [Comby](https://comby.dev/) to replace `fmt.Sprintf("%d", :[v])` with `strconv.Itoa(:[v])` in Go files (`*.go`)
  - Run `go fmt ./...` in the repository
  - Replace problematic language (such as changing blacklist/whitelist to blocklist/allowlist)
- Create a “monorepo” campaign: a campaign that creates at least 5 changesets in a single repository
- Create a “manual” campaign: a campaign that imports at least 5 changesets, and does not create any

## Support pairing

In order to stay in sync, support engineers and campaigns engineers should have periodic pairing sessions. The goals of these sessions:

- Keep support informed about upcoming changes/features.
- Keep Campaigns team informed about common problems and support themes.
- Give support engineers an opportunity to dig deeper into the tech, to further empower them. This can reduce the need for escalations, and deliver solutions to customers faster.
