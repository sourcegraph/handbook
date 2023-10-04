# Product documentation

These guidelines are for contributing documentation to the [sourcegraph repository](https://github.com/sourcegraph/sourcegraph/tree/main/doc). See [editing the handbook](../../../../handbook/editing/index.md) for how to contribute handbook content.

## Contributing

Whenever a feature is changed, updated, introduced, or [deprecated](../../../product/process/prioritize_and_build/deprecation_process.md), the pull request introducing these changes must be accompanied by the documentation (either updating existing ones or creating new ones).

The developer who made the code change is also [responsible](../roles/index.md#software-engineer) for writing the initial documentation for new features and updating the documentation for changes to existing features. This includes updating [the changelog as well](https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md). At the pace Sourcegraph evolves, this is the only way to keep the docs up to date.

For documentation changes that introduce new HTML/CSS/JS patterns to the docs site, the author should tag `@frontend-devs` as an additional reviewer on the pull request.

The [changelog](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md) should also be updated for any changes that impact the user.

It's the [responsibility of the Product Manager](../../../product/roles/index.md#product-manager) to ensure all features are shipped with documentation (i.e., that nothing slips through), whether is a small or big change.

We use the [monthly release blog post](https://about.sourcegraph.com/blog) as a changelog checklist to ensure everything is documented.

### Local development of documentation only

For local development of documentation, clone the main [sourcegraph repository](https://github.com/sourcegraph/sourcegraph/tree/main/). The development environment for Sourcegraph, detailed in [Getting started with developing Sourcegraph](https://github.com/sourcegraph/sourcegraph/blob/main/doc/dev/local_development.md), is not required.

After saving any changes or updates, documentation can be previewed locally with the following commands:

```
cd sourcegraph
./dev/docsite.sh -config doc/docsite.json serve -http=localhost:5080
```

Make sure that `Go` is installed locally. You can follow the steps [here →](https://go.dev/doc/install)

Navigate the browser to [https://localhost:5080](https://localhost:5080) to view the documentation.

## Best practices

Best practices for writing documentation.

### Naming and linking documentation pages

1. Every page in a directory should be linked to from its parent page (index.md in that directory), unless the document is designed to be [standalone](#standalone-documents).
1. Every new document should be cross-linked to its related documentation, and linked from its topic-related index, when it exists.
1. Always cross-link to `.md` files, including the file extension, so that the docs are browsable as-is (e.g., in GitHub's file browser).
1. When you create a new directory, always start with an `index.md` file. Don't use another file name and don't create `README.md` files.
1. Don't use special chars and spaces, or capital letters in file names, directory names, branch names, and anything that generates a path.
1. When creating a new document, and it has more than one word in its name, use underscores instead of spaces or dashes (`-`). For example, a proper name would be `import_projects_from_github.md`.

### Images and binary assets

For large images and other binary assets, upload them to the `sourcegraph-assets` Google Cloud Storage bucket instead with `gsutil cp -a public-read local/path/to/myasset.png gs://sourcegraph-assets/` (and refer to them as `https://sourcegraphstatic.com/myasset.png`). For a more detailed instructions visit [this page](../../../../handbook/editing/handbook-images-video.md).

**Important: make sure to use [ImageOptim.app](https://imageoptim.com/mac) to reduce the size of the images before uploading, since large images degrade page loading speed.**

### Administration documentation

This advice currently pertains to [Sourcegraph administration documentation](https://docs.sourcegraph.com/admin).

- Try to avoid repeating information. Instead, find the most relevant home for a piece of information, and link to it from where you want it so that the information can be easily found and referenced from other places.
  - e.g. [Deployments playbooks](deployments/playbooks.md), [Managed instances operations](../../../cloud/technical-docs/index.md), [Docker Compose operations guides](https://docs.sourcegraph.com/admin/install/docker-compose/operations)
- Instead of adding an FAQ item, try to add the information in a more agnostic format to the relevant documents first, so that it can easily be found and referenced from other places.
  - e.g. instead of "How do I do X when Y for Z?", try "Do X" with a section for "Y" situation in the relevant documents for "Z"
  - If a FAQ item still feels prudent, link to the guide from the FAQ instead of repeating the information.
- Try to avoid creating new pages. This makes information easier to discover, reference, and maintain (keep up to date).
  - If a new guide or overview is going to be too long to be added to a page, try to distill its components into smaller "operations" that can be added elsewhere, or see if there are documentation that can be referenced instead.

#### Deployment documentation

Deployment documentation should be structured as follows:

- `admin/install/X/...`
  - "Sourcegraph with X" (`admin/install/X/index.md`). Includes:
    - Installation (`#installation`): how to install Sourcegraph with this method. Can link out to separate guide(s) where appropriate.
      - This gets featured here because a customer will likely only encounter installation once.
      - Similarly, "Migration to X" (`admin/install/X/migrate.md`) should be in its own page because a customer will likely only encounter it once.
    - About (`#about`): links to background info, some basic ideas, etc.
  - "Operations guides for Sourcegraph with X" (`admin/install/X/operations.md`). This page should be the go-to page for "I need to do something with my X deployment".
    - See [administration documentation best practices](#administration-documentation).
    - When creating documentation for X, reference these guides instead of repeating.
    - Anything that is not specific to X deployment method should be added to the relevant product documentation instead and linked.
    - Upgrade and configuration documentation should be included here, because unlike installation and upgrades customers will need them often.

Example: [Sourcegraph with Docker Compose](https://docs.sourcegraph.com/admin/install/docker-compose).

## Tips and tricks

### Standalone documents

By default, an error will be raised if a documentation page is not linked to, as we want it to be discovered by readers and indexed by search engines. If the need arises for a page to be standalone and not linked to (e.g., you've moved the page's contents but don't want to break external inbound links), add the following YAML front matter content to the top of the page:

```yaml
---
ignoreDisconnectedPageCheck: true
---
```

YAML front matter is optional and is used for adding page metadata that can be used by document processors such as docsite and static site generators.

### SEO

Similarly, SEO metadata can be provided individually for every document, which will help our documentation page to raise its search rank. Every one of them are totally optional.

```yaml
---
title: 'Deploying with Kubernetes'
description: 'A step by step guide to deploying in a Kubernetes environment'
category: 'Deployment'
type: 'article'
imageURL: 'https://storage.googleapis.com/sourcegraph-assets/blog/Show%20Us%20Your%20Calendar%20Images/Show%20Us%20Your%20Calendar%20Hero.png'
tags:
  - Kubernetes
  - Deployments
  - How to
---
```
