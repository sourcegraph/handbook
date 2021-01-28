# Product documentation

These guidelines are for contributing documentation to the [sourcegraph repository](https://github.com/sourcegraph/sourcegraph/tree/master/doc). See [editing the handbook](../editing.md) for how to contribute handbook content.

## Contributing

Whenever a feature is changed, updated, introduced, or [deprecated](../product/deprecation_process.md), the pull request introducing these changes must be accompanied by the documentation (either updating existing ones or creating new ones).

The developer who made the code change is also [responsible](../../handbook/engineering/roles.md#software-engineer) for writing the initial documentation for new features and updating the documentation for changes to existing features. At the pace Sourcegraph evolves, this is the only way to keep the docs up to date.

For documentation changes that introduce new HTML/CSS/JS patterns to the docs site, the author should tag `@frontend-devs` as an additional reviewer on the pull request.

It's the [responsibility of the Product Manager](https://jobs.lever.co/sourcegraph/254299f5-f91b-43e2-aa1a-3732963dd296) to ensure all features are shipped with documentation (i.e., that nothing slips through), whether is a small or big change.

We use the [monthly release blog post](https://about.sourcegraph.com/blog) as a changelog checklist to ensure everything is documented.

## Local development of documentation only

For local development of documentation, clone the main [sourcegraph repository](https://github.com/sourcegraph/sourcegraph/tree/master/).  The development environment for Sourcegraph, detailed in [Getting started with developing Sourcegraph](https://github.com/sourcegraph/sourcegraph/blob/master/doc/dev/local_development.md), is not required.

After saving any changes or updates, documentation can be previewed locally with the follow commands:

```
cd sourcegraph
./dev/docsite.sh -config doc/docsite.json serve -http=localhost:5080
```

Navigate the browser to [https://localhost:5080](https://localhost:5080) to view the documentation.

## Naming and linking documentation pages

1. Every page in a directory should be linked to from its parent page (index.md in that directory), unless the document is designed to be [standalone](#standalone-documents).
1. Every new document should be:
    - Cross-linked to its related documentation, and linked from its topic-related index, when it exists.
    - Linked to from the [docs global nav template](https://github.com/sourcegraph/sourcegraph/blob/master/doc/_resources/templates/document.html#L58).
1. Always cross-link to `.md` files, including the file extension, so that the docs are browseable as-is (e.g., in GitHub's file browser).
1. When you create a new directory, always start with an `index.md` file. Don't use another file name and don't create `README.md` files.
1. Don't use special chars and spaces, or capital letters in file names, directory names, branch names, and anything that generates a path.
1. For large images and other binary assets, upload them to the `sourcegraph-assets` Google Cloud Storage bucket instead with `gsutil cp -a public-read local/path/to/myasset.png gs://sourcegraph-assets/` (and refer to them as `https://sourcegraphstatic.com/myasset.png`).
1. When creating a new document and it has more than one word in its name, use underscores instead of spaces or dashes (`-`). For example, a proper name would be `import_projects_from_github.md`.
1. Start a new directory with an `index.md` file.

## Standalone documents

By default, an error will be raised if a documentation page is not linked to, as we want it to be discovered by readers and indexed by search engines. If the need arises for a page to be standalone and not linked to (e.g., you've moved the page's contents but don't want to break external inbound links), add the following YAML front matter content to the top of the page:

```yaml
---
ignoreDisconnectedPageCheck: true
---
```

YAML front matter is optional and is used for adding page metadata that can be used by document processors such as docsite and static site generators.
