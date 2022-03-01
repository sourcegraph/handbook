# Continuous integration changelog

This page logs significant monthly changes to our [CI infrastructure](./index.md), and is primarily maintained by the [DevX team](../../../enablement/dev-experience/index.md).

Also see the [DX newsletter](../../../enablement/dev-experience/newsletter.md) for some of this content, as well as other DX-related updates.

## January 2022

- 26th: [`asdf`](https://asdf-vm.com/) _plugin_ installations are now automatically done by all Buildkite agents. When writing pipelines, individual repositories should not longer use the `asdf plugin-add` command. However, `asdf install` should still be used to install the _tools_ defined in your `.tool-versions` file. We recommend adding these as a [`.buildkite/pre-command` hook](https://buildkite.com/docs/agent/v3/hooks#job-lifecycle-hooks). [#3019](https://github.com/sourcegraph/infrastructure/pull/3019), [#29375](https://github.com/sourcegraph/sourcegraph/pull/30217)
- 19th: Created CI changelog.
