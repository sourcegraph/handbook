---
data_source: [/data/engineering_ownership.yml, engineering ownership]
---

# Engineering Ownership

The following table documents the ownership of our product and tech stack.

The table is generated from [data/engineering_ownership.yml](https://github.com/sourcegraph/handbook/blob/main/data/engineering_ownership.yml). You can [edit that file](https://github.com/sourcegraph/handbook/blob/main/data/engineering_ownership.yml) to make changes.

If you see an area that is missing or has no owner and you need an answer, contact the #product-eng-directors channel for help.

{{generator:engineering_ownership}}

## Owners files

Whenever possible, it is preferred to document code ownership via an OWNERS file in the relevant directory, rather than a row in the table above. (Support for OWNERS files in sourcegraph/sourcegraph was [added on 2022-01-31](https://github.com/sourcegraph/sourcegraph/pull/30395), so it's a work in progress.)

Owners files work exactly like the CODENOTIFY files that we use currently:

- An OWNERS file can appear in any directory.
- Owners files are recursive, so an OWNERS file in a directory also applies to all subdirectories.
- The effective owners of a given file / directory are determined by the union of the owners of all parent directories.

OWNERS files and CODENOTIFY files use the same syntax, and notifications for both are implemented by the [Codenotify](https://github.com/sourcegraph/codenotify) tool. Owners files have some additional guidelines:

- It is preferred to list a team (e.g., @sourcegraph/frontend-platform) rather than individuals.
- If there is an individual with expertise in a given part of the code, who is not on the owning team (e.g., Thorsten Ball with sg), that person should be listed in OWNERS.

For questions about our use of owners files, please reach out on [#dev-experience](https://sourcegraph.slack.com/archives/C01N83PS4TU).
