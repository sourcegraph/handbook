# Sourcegraph release tool

This tool helps generates [Sourcegraph releases](../process/releases/index.md).
It is developed in [`dev/release`](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/tree/dev/release).
To use it, check out the `sourcegraph/sourcegraph` repository and run:

```sh
pnpm release help
```

## Prerequisite

This tool requires the following dependencies in your system `PATH`

- [node](https://github.com/nvm-sh/nvm)
- [pnpm](https://classic.yarnpkg.com/en/docs/install#mac-stable)
- [comby](https://comby.dev)
- [gsed](https://formulae.brew.sh/formula/gnu-sed#default) (macOS only)
- [src-cli](https://github.com/sourcegraph/src-cli)
- [sg](https://docs.sourcegraph.com/dev/setup/quickstart)
- [docker](https://www.docker.com/get-started)

If also requires the following information, you will be prompted to enter them by the release tool.

- [GitHub Personal Access Token with `repo` scope](https://github.com/settings/tokens)
- [Docker Hub Access Token](https://hub.docker.com/settings/security)
- [#eng-announce Webhook Url](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&v=dnrhbauihkhjs5ag6vszsme45a&i=pldpna5vivapxe4phewnqd42ji&h=team-sourcegraph.1password.com)
- [Release Automation Google Calendar API Credentials](https://start.1password.com/open/i?a=HEDEDSLHPBFGRBTKAKJWE23XX4&v=dnrhbauihkhjs5ag6vszsme45a&i=ll46ki4jdb5zxnawgaxbdug4ie&h=team-sourcegraph.1password.com)
