# Content generation

There are several pages in the handbook that contain generated content. For example, the [team page](../../team/index.md) uses data on team members that's checked in to the repository to generate the content at build-time. You can recognize a data-driven section because it will contain a directive that looks like `generator:team_members_list` inside of double curly braces somewhere in the markdown.

This page describes how this generation functionality is implemented in case you need to modify it.

## Embedded notebooks

Search Notebooks can be embedded on a handbook page using a `notebook:id` directive inside of double curly braces. This is implemented in [/src/lib/markdownToHtml.ts](https://github.com/sourcegraph/handbook/blob/main/src/lib/markdownToHtml.ts). The ID of the notebook is the portion of the URL that looks like `Tm90ZWJvb2s6MQ==`.

Note that this integration only works with public notebooks on sourcegraph.com.

## Data files

The data that drives the various pages is located in [/data](https://github.com/sourcegraph/handbook/tree/main/data) and is stored in the YAML format. Each contains a list of entries, with those entries containing various fields, and those fields containing strings or pointers to other elements (for example, the name of a person as a string, or a pointer for a team to a member of that team via the id.) For example, here is a sample team where the title and strategy links are strings, and the pm is a pointer to a person:

```yaml
search_product:
  title: Search Product
  strategy_link: /strategy-goals/strategy/search/product/index.md
  pm: logan_zhao
  issue_labels:
    - team/search-product
    - team/search
```

There are schema files for each of the data files at [/schema](https://github.com/sourcegraph/handbook/tree/main/schema) that set formats and whether different fields are required or not.

When implementing new fields/structures, avoid creating new string values for things that you can look up via id or else we will have multiple sources of truth for the same values.

## Code

The flow for content generation starts in [/src/lib/markdownToHtml.ts](https://github.com/sourcegraph/handbook/blob/main/src/lib/markdownToHtml.ts) in the function `insertGeneratedMarkdown`, which handles detecting a `{{generator:*}}` directive and passing it on to the appropriate markdown generation function. If you add a new kind of generator you need to add the mapping here.

The markdown generation functions are in [/src/lib/generatedMarkdown.js](https://github.com/sourcegraph/handbook/blob/main/src/lib/generatedMarkdown.js). These functions are responsible for processing the data files and returning the markdown that will be inserted on the page. Typically these functions are iterating over objects, looking up values for other objects, in order to generate some sort of list that can be returned for embedding on the page.

Lastly, there is [/src/scripts/validateData.mjs](https://github.com/sourcegraph/handbook/blob/main/src/scripts/validateData.mjs) which runs at build time and validates that any data that points to other data (for example, a pointer to a specific team member from a team) actually exists, and will report an error if it does not. If you add new data relationships, you should also add a check here.

## Edit data shortcut for pages driven by data

You can configure a page to show a shortcut to editing it's header as follows:

```
---
data_source: [/data/code_hosts.yml, code hosts]
data_source_2: [/data/product_teams.yml, product teams]
---
```

The header supports optionally adding up to two data sources.

This particular example will show, underneath "Edit this page" on the right hand side, "Edit code hosts data" and "Edit product teams data" (the first entry is the path, the second is what to display visually). This is implemented in [/src/components/EditSection.tsx](https://github.com/sourcegraph/handbook/blob/main/src/components/EditSection.tsx).

This can also be a good way to figure out what data sources are driving a page, if the author has added them.
