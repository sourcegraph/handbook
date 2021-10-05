# 📘 Sourcegraph handbook <a href="https://app.netlify.com/sites/sourcegraph-handbook/deploys"><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/4c81a998-33b5-4357-a593-479e21bb10f3/deploy-status" align="right"></a>

The Sourcegraph handbook describes how we (Sourcegraph teammates) work. It’s publicly visible because we are an [open company](https://handbook.sourcegraph.com/company#open-company).

The handbook is a living document and we expect every teammate to propose improvements, changes, additions, and fixes to keep it continuously up-to-date and accurate.

All content is in [Markdown](https://www.markdownguide.org/getting-started/#what-is-markdown) files under the [📁 content](./content) folder.

## Run locally

You need NodeJS and Yarn installed.

Install dependencies:

```
yarn
```

Then start the handbook:

```
yarn dev
```

## Check links locally

We use [markdown-link-check](https://github.com/tcort/markdown-link-check) for link checking at build time in [the `link-check` GitHub action](.github/workflows/link-check.yml). If you want to run it locally, from the root of the repository you can run this command:

    yarn check-internal-links

This can be slow, so you can also check a single file by running this command, replacing `path_to_file` with the file you want to validate:

    yarn markdown-link-check <path_to_file>

Note that this will also check external links, which the GitHub action ignores. If you wish to ignore those, add `-c .github/workflows/link-check-internal.json` to the command.

## Build

During deployment, the `netlify-build` script gets executed. To simulate the build process, you can run it locally:

```
yarn netlify-build
```

The output will be in the `out` directory.

## Deployment to production

The repository is configured to automatically deploy the `main` branch to production on Netlify.
