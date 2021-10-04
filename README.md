# 📘 Sourcegraph handbook <a href="https://app.netlify.com/sites/sourcegraph-handbook/deploys"><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/4c81a998-33b5-4357-a593-479e21bb10f3/deploy-status" align="right"></a>

The Sourcegraph handbook describes how we (Sourcegraph teammates) work. It’s publicly visible because we are an [open company](https://about.sourcegraph.com/handbook/company#open-company).

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

## Build

During deployment, the `netlify-build` script gets executed. To simulate the build process, you can run it locally:

```
yarn netlify-build
```

The output will be in the `out` directory.

## Deployment to production

The repository is configured to automatically deploy the `main` branch to production on Netlify.
