# Technical Advisors: Working with the Sourcegraph GraphQL API

## Intended Audience

This document is mainly geared towards **external** users of the Sourcegraph GraphQL API, not for internal Sourcegraph developers. Some external users are folks in Technical Success or even customers themselves.

## What GraphQL is and isn't

It is:

- A query language for APIs
- Provides **exactly** what you ask for. No more, no less.
  - This is called over/underfetching data
- Strongly typed
- Versionless

It isn't:

- A query language for **databases**
  - It isn't a language for Graph Databases (like Neo4j)
- A solution for world hunger...unfortunately

## Anatomy of a GraphQL Query/Operation

![Anatomy of a GraphQL Query/Operation](https://storage.googleapis.com/sourcegraph-assets/anatomy-of-a-graphql-query.png)

**Operation Type**: Query, Mutation, or Subscription. Describes the type of operation you’re trying to do.

**Operation Name**: Optional descriptor that identifies the operation, typically for debugging or server-side logging

**Variable Definition**: Dynamic parts that typically change between requests and can be defined externally or in-line

**Variable Type / GraphQL Type**: The data structure of the variable or of a type, as defined in the GraphQL Schema

**Nullability**: Determine whether or not a field or variable is allowed to be `null`

**Fields**: Building blocks that represent the data being returned

**Arguments**: Either pulled in from a **Variable Definition** or in-line, these specify key-value pairs that affect how a **Field** is resolved

**(Inline) Fragments**: Encapsulated pieces of shared query logic

## Sourcegraph's GraphQL Schema & Documentation

Sourcegraph's GraphQL API is defined by its schema or SDL (Schema Definition Language).

Explore the Sourcegraph GraphQL API documentation [here](https://docs.sourcegraph.com/api/graphql/api-docs)

- These docs are auto-generated, for more details join [#wg-graphql-docs](https://sourcegraph.slack.com/archives/C04PUHSBVDG)
- There are some types, fields, and fragments that exist in the API but are undocumented, raise it to that Slack channel

<hr>

## Setting up your GraphQL IDE

Apollo Sandbox is great for navigating through a complex GraphQL schema and has great developer experience for crafting queries

1. Navigate to [Apollo Studio Sandbox](https://studio.apollographql.com/sandbox/explorer) and click Open Connection Settings in the top left corner

![](https://storage.googleapis.com/sourcegraph-assets/open-connection-settings.png)

2. Under **Endpoint** input `https://demo.sourcegraph.com/.api/graphql` and click **Save**

![](https://storage.googleapis.com/sourcegraph-assets/connection-settings.png)

3. On the bottom of the IDE, click **Headers** and create an `Authorization` header key with the value in the format: `token "Your Demo Token"`

![](https://storage.googleapis.com/sourcegraph-assets/new-header.png)

4. Now you have easy one-click crafting of your GraphQL queries and Schema reference! 🎉

![](https://storage.googleapis.com/sourcegraph-assets/create-operation.gif)

## Navigating the Schema

When you've set up your Apollo Sandbox environment successfully, you should have access to the [GraphQL schema reference page](https://studio.apollographql.com/sandbox/schema/reference).

This page is incredibly instrumental in being able to understand and navigate the objects and types that are available in the API.

![](https://storage.googleapis.com/sourcegraph-assets/apollo-sandbox-schema-reference.png)

Simply search for the objects or types you're looking for to see how to access them.

![](https://storage.googleapis.com/sourcegraph-assets/schema-navigation.gif)

By searching for a [Batch](https://studio.apollographql.com/sandbox/schema/reference?query=batch) under the `Query` root type, you can see all objects that are available with "batch" in the name or documentation

Clicking into [BatchChange](https://studio.apollographql.com/sandbox/schema/reference/objects/BatchChange) gives me all the fields that are available under that object and also how to access it.

## Understanding Fragments

A Fragment is a power filtering mechanism that takes advantage of the strongly typed nature of GraphQL schemas

Consider the below operation:

```graphql
query Search($query: String!) {
  search(query: $query, version: V3) {
    results {
      results {
        ... on FileMatch {
          ...FileMatchFields
        }
      }
    }
  }
}

fragment FileMatchFields on FileMatch {
  repository {
    name
    url
  }
  file {
    name
    path
    url
  }
}
```

```graphql
... on File Match
```

The above notation takes advantage of the strongly typed nature of GraphQL.

What this means is "of the returned data from the parent, if the type is of `FileMatch`, return the following fields..."

```graphql
...FileMatchFields
```

This fragment notation is a way to improve readability of your GraphQL operation.
It is a shorthand way to add fields into an operation. The `fragment FileMatchFields on FileMatch` later on in the operation body defines the fields that are to be requested.

## Understanding Pagination

There are some objects in the API that return lots of data. Sourcegraph utilizes a cursor based pagination pattern somewhat based on the [Relay-spec](https://relay.dev/docs/guides/graphql-server-specification/).

Consider the below operation:

```graphql
//Get the first 10 insights' IDs
query Insights($first: Int, $after: String) {
    insightViews(first: $first, after: $after) {
        pageInfo {
            hasNextPage
            endCursor
        }
        nodes {
            id
        }
    }
}

//Query Variables
{
    "first": 10,
    "after": null
}
```

Paginated data is accessed through `nodes`

Pass the `nodes.id` field into subsequent calls in the `$after` variable to paginate through data that occurs _after_ that Object. See operation below for an example.

`pageInfo` and `totalCount` can tell you how much data is left

```graphql
//Get the next 5 insights after a specific insight
query Insights($first: Int, $after: String) {
    insightViews(first: $first, after: $after) {
        pageInfo {
            hasNextPage
            endCursor
        }
        nodes {
            id
        }
    }
}

//Query variables
{
    "first": 5,
    "after": "aW5zaWdodF92aWV3OiIyNU9lanpQZUVWZ1ViMk96NzNYdnF4TnVvdUci"
}
```

`endCursor` will always return the _last_ ID in your call so you can use that in subsequent calls until `hasNextPage` is `false`.

## Tips & Tricks

1. Make use of your browser's developer tools to determine the GraphQL operation within Sourcegraph's web app.

![](https://storage.googleapis.com/sourcegraph-assets/get-graphql-operation-devtools.png)

2. Check out the [`Node` documentation](https://studio.apollographql.com/sandbox/schema/reference/interfaces/Node?query=node) to see what parts of the API require pagination

3. Use the _Copy Operation Link_ when right clicking into Sandbox to collaborate with other folks who have the IDE configured

![](https://storage.googleapis.com/sourcegraph-assets/copy-operation-link.png)

## Example GraphQL Operations

> The below operations will use `demo.sourcegraph.com`. Adjust to your connection details and variables as necessary

[File contents from default branch](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fdemo.sourcegraph.com%2F.api%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGIBKCUwBOSAzgARQSrIrkQBmZAhmSQJZIDmANgmfW14AdJAEcYCQgE8yAMUEIAwlRQ0SswhDgARBPSYxuKAEKEmSKAAsAFABIADkxSX0ZAMopCHTgEIANGS2SEyIrh5eXACUZMAiZGSECPYQ7CgQ0tbBoYFZCNGxSPHxYHoGRqbmVjFxRfEoTISc%2BNWFtUWUcHBsKC1tbQBG3BD91o7Org5Olvk1fbWU1KizcwC%2By7VrrRvLm-GbKyB%2BIABuDWxMgwgkGCAF8UIgY5YPrg84AKIAgtoAsu8AdHAwA8-DUHrkXmQHpxupYYP1-h0APQkCBEKAIThmeyWFFowgYrFMHEPEQHFZAA)

[Get a diff of two Commits](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fdemo.sourcegraph.com%2F.api%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABACICWAZhQCoDuEAwhHHGSgM4AUAJEgIaJ0RAMoo8ZJAHMANEW4AjPuwRDR4qbO4ALBHzCqxEyQEpgAHSREreBAAcI7NhEKd%2BguW4TGi5y1atQzLZ84uwQSJyKykIKSgiyOnoxiWDevv4ZFGQANgjkVOw%2BFhklSBBgCIXpJSUQ2WAACnwoWsU1GUgItE0tbe1WWjBIANZVff1W8uUE4%2B0AvrMZC34ly6t9y3Mg0iAAbiFkfPK57Bgg1WYgnpdCl5Jsg-IAdIFwAPRhMHhQCJJ4fLYtB8IF8fn8Aa1tm1LlEEDciJcAMwATnkAAYABwAVixl2k0JAKXhlwAbFioFAsQB2OEgCxbOZAA)

[List first 1000 repos](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fdemo.sourcegraph.com%2F.api%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADICWAzigGJl5UAqAFhDBQIZJgBKCADhApFgAHSREiefoLIoIeMggoAKAGZ0q6IgEYADPoCUwsRIlIIYJcfGmz7RCdtFLFKAr4oyEJI9sw8ADa%2BRAC%2BjmFIISAANCAAbuwK7ABGAUoYICAhQA)

[List all files in a repo](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fdemo.sourcegraph.com%2F.api%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADICWAzigIIA2tAYmbQhQJJIBKCADhABQASPAgBu6IgGUUeMkgDmAQgA0RQUgCGiCdNkLVgnhpQALHTLnyDI2HgplRCCQCEIEFhqQBKIsAA6SEREInz2KBCE-JraatEIPv6BQURQEHBwZCj8IuJqOQkByckyCAj8RqYShsYmqjYwdg5OeQi29o4FSUVByBasvoXdRRUmg0NBlAAiZDbhhGPjDbQLRQC%2BK0TrXZuDW6sgyiCiGrIaAEYsFBggiUF%2BIDn3EvcAEgCi1JP3yoP3cU9Ee7yTImGBnAB0qTgAHoKBAGlAEPI8BoeCZYfC8IjkajRgdfiARgD7t8CfVGo4ATJcAF9qsgA)

[List all languages in a repo](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fdemo.sourcegraph.com%2F.api%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABADICWAziiQIZIDmMN9CFAkkgEoIAOEAFABIkNROiIBlFHjIMANEUF4EAN3FSZDAIQBKIsAA6SIkWV8KZFBEL8RYxXYR7Dxk0QA2dRswRG3RKAg4OEt%2BZTVFcOc-fw8vJhYKGJMAXxi0pBSQORAVGhkaACN3VgwQFxMDEHCq8SqACQBRAEEAESq5GKrHWqIq%2BksACxhCgDpAuAB6CggYPCgEejwaHkHp2fnF5dWOrpAeGhRB3qrd1yrlWDwLFV8MImlcIyyUoA)

[All active users this month](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fdemo.sourcegraph.com%2F.api%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAIJQoCWAbggKoDO%2B9AKgBYX0CyEqrAFABIAhuWoIACvgoQw6Ig3xlKNSXmlgAlEWAAdJESIxGeenxHKJUmXOGiVVzdr0GDKCCiEAbAMIQYqZxckGQR6J30XAyN8JCFEQMijIQBzBABlD0p6Sigw3QjIg08hbKUxZgp4gpcAXwSiOojGmpAAGhAqITUhACNPUIwQfIMdEDwEKlG5UYAJAFESABFR1sDR2PiMIlHkihRWGB6AOigIOAB6ej88KARkvCEAB1ZL69v7p9YVtZBHoX2ptsQN8IqNxrATGJASg8Lg9C0akA)

[Introspection query](https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fdemo.sourcegraph.com%2F.api%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAJKp4QDOADglCgJYRICKuhRwAOkkX-wH0BlKAAsEcAIace-OURz4CAFQK1ORJJMREAvrPl84MFJMbNV64Ju0I9Bw5RgAjEXgbVzSS3etad%2BryGRChqCJQyQcFEAHRxAGIwADZJPg7ygdFgDHh0jABu4ZHRfP4I6YZg4VDunkxIFfKNcknQZvWUzfySeADmEdxRJXExZNQmAGqSSbhdfJnBC3JL9g1DAGZ4kr2IqESJKT5EzERCR4OGANYMSGCNZY1Vbh5ejesMCElglAAUN1AzKoAEQQ1FyUDMCDA6BCeFwAEpisEHkM5E8ai96l0ev0kdERmNJtNZqj%2BCs5KErHNYnEfAAlBDrLrk-gMSggsF0SF3Ul8KqciFeBmSSjMRosm7jFDxD5fAZdAlIKVTGblUkS1D4daSKBFC7BEb0xnixrIeAq3C-f6AhAc8HcmEoOEIRH6wworLVWqvXlENl2rkoKFdfn2oUIEVi9WNahUSgMZxJBA%2BeW%2Bw1hBlM6NDQLpTbbXYoUhKomq468ISElAW3z3WyPL2YqOGSm%2BGkxI3rVaVRmSZLV4lqwyNdK5jZbHbIIud8unATnRrXW51xCNCDrBe%2Bpc86Ie4LrzclIjb6l76IHsJ4kon31yM8lC9U2-yG9Hu-159yR%2B1z8vm47t931XX8vw3S83UA-hX0goChxg-hvyveDj3-akj3vGCWSPLDFjQ7sShwlkVl0EAABoQHyHoGEkRNwgwEAQF0IA)

## Example scripts that utilize the GraphQL API

> Ensure you're part of the Sourcegraph GitHub organization to view these private scripts

[Add/Update/Delete Repository Metadata - Python](https://github.com/sourcegraph/customer-assets/blob/main/ce-tools/pysdk/sourcegraph/api_resources/repo_metadata_apis.py)
