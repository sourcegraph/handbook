# 📘 Sourcegraph handbook <a href="https://app.netlify.com/sites/sourcegraph-handbook/deploys"><img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/4c81a998-33b5-4357-a593-479e21bb10f3/deploy-status" align="right"></a>

The Sourcegraph handbook describes how we (Sourcegraph teammates) work. It’s publicly visible because we are an [open company](https://handbook.sourcegraph.com/company#open-company).

The handbook is a living document and we expect every teammate to propose improvements, changes, additions, and fixes to keep it continuously up-to-date and accurate.

All content is in [Markdown](https://www.markdownguide.org/getting-started/#what-is-markdown) files under the [📁 content](./content) folder.

## Run locally

### Using a local Node environment

You need NodeJS and Yarn installed. How to do so can vary from machine to machine, but as an example on Ubuntu 20.04:

1. Install `nvm` from https://github.com/nvm-sh/nvm
1. Run `nvm install` from the current directory (if you already have nvm make sure you are using a node version >= v16.14.2)
1. Run `npm install -g yarn` from the current directory

Install dependencies:

```shell
yarn
```

Then start the handbook:

```shell
yarn dev
```

### Fetching GitHub data

If you want to fetch GitHub data (used for the recent contributors list on the sidebar), you should set the environment variable `GITHUB_TOKEN` to a working personal access token, and set the `CONTEXT` environment variable to `production`.

### Using Docker

You can run the handbook locally using Docker and the included Dockerfile. This won't require you to have a Node environment installed, you'll need only the Docker engine (Linux) or Docker Desktop (Windows and MacOS) installed.

After cloning this repository, build the image with:

```shell
docker build . -t handbook-builder
```

Then, you'll need to install dependencies with Yarn. The following command will execute your image in a temporary container, creating a bind mount with the current application directory mapped to `/app` inside the container.

```shell
docker run -it --rm --mount type=bind,source="$(pwd)",target=/app handbook-builder yarn
```

With the dependencies installed, you can run the development environment to preview the handbook on your browser.
Use the following command to create the mount and redirect all connections on port `8000` of the host machine to port `3000` inside the container, where the application is running:

```shell
docker run -it --rm --mount type=bind,source="$(pwd)",target=/app -p 8000:3000 handbook-builder yarn dev
```

You can now access the application on `http://localhost:8000`. Any changes made to the handbook will be automatically reflected on the preview.

## Autogenerated content

There are special tokens within some markdown pages (`{{generator:*}}`) that are filled at build time from the YAML files in the [data](./data) folder. The code which does this the filling is in [src/lib/generatedMarkdown.ts], and these are called as part of the markdown pipeline in `src/lib/markdownToHtml.ts`.

## Check links locally

We use [markdown-link-check](https://github.com/tcort/markdown-link-check) for link checking at build time in [the `link-check` GitHub action](.github/workflows/link-check.yml). If you want to run it locally, from the root of the repository you can run this command:

```shell
yarn check-links
```

This can be slow, so you can also check a single file by running this command, replacing `path_to_file` with the file you want to validate:

```shell
yarn markdown-link-check <path_to_file>
```

Note that this will also check external links, which the GitHub action ignores. If you wish to ignore those, add `-c .github/workflows/link-check-internal.json` to the command.

## Build

During deployment, the `netlify-build` script gets executed. To simulate the build process, you can run it locally:

```shell
yarn netlify-build
```

The output will be in the `out` directory.

## Deployment to production

The repository is configured to automatically deploy the `main` branch to production on Netlify.
