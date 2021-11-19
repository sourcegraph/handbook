# Cloud Growth Goals and Roadmap

## Team

Cloud growth is a rapidly evolving team, which currently consists of:

- Stephen Gutekanst (engineer)
- Rob Rhyne (temporary product manager and product designer)
- We're hiring a [full stack engineer](https://boards.greenhouse.io/sourcegraph91/jobs/4145598004) and [product manager](https://boards.greenhouse.io/sourcegraph91/jobs/4068101004)!

## Goals

### 1. Improve Google SEO & indexing of API docs

**Why?** It unlocks a new avenue to reach the other >80% of developers out there who are not familiar with Sourcegraph.

We want API docs pages to be prevalent in Google. There is work to do here in two areas:

1. Making API docs UX better generally, improving the quality of API docs, etc.
2. Build our sitemap, and make other key improvements to our SEO.

### 2. Improve the first-time user experience of Sourcegraph

**Why?** It improves our ability to retain new users, leading directly to increased Cloud and Enterprise sales.

A first time user to Sourcegraph will arrive at Sourcegraph in a few ways: Directly to https://sourcegraph.com/search, via our browser extension, via Google, etc.

In many cases, we believe a developer's first expectation will be to search for code that is familiar to them. A specific repository, a specific package, symbol, etc. Today, Sourcegraph is not set up to serve such users and they will recieve poor results. We touch on this issue [in a blog post](https://about.sourcegraph.com/blog/postgres-text-search-balancing-query-time-and-relevancy/#Why-is-relevance-important-in-code-search).

We aim to improve the first-time user experience of Sourcegraph in a few key ways:

1. When first experiencing the product, users should be able to refrence a list of the most important features to review
2. When searching for a specific piece of code (a repository, package, symbol, etc.), leverage API docs information to make it trivial to jump straight from the Sourcegraph home page (or search results page) to the repository page or API docs page for that code. That is, a new user should not need to understand our advanced search filter syntax in order to get to the code they're expecting to find. As this leverages API docs data, we'll tackle this for Go code only at first.
3. When navigating to a repository page, make it clear why Sourcegraph is a better experience than say GitHub or GitLab. We talk about this in [a demo video](https://youtu.be/sgqtPb8ubAw) produced for a hackathon project.

### 3. Experimental VS code integration of API docs

**Why?** It is a unique new opportunity to delight developers and provide value with minimal investment.

We want to add experimental support for having API docs integrated right into VS code. We have finished [brainstorming with the codeintel team what this would look like](https://docs.google.com/document/d/11oYVWPKJP0_lcuSKbEUoJG9QC3UnvQgLw8P7pUMjimo/edit#heading=h.x6k890l5pc2w) and have an immediate plan forward on this. The vision is to:

1. Have an `Sourcegraph API docs: search` command pallete action, which opens API docs to the side.
2. You have the ability to view API docs, usage examples, etc. as you write code. Either by searching for API docs with a query, or by it following your cursor as you code.

We think this can provide a unique valuable experience because VS Code's "Find All References" view is not a great user experience AND because it only has examples from your local codebase rather than across your team's codebases, or even globally.

### 4. Improve Go API docs UX

**Why?** It is a pre-requisite for goals 1, 2, and 3 above to succeed - and to delight developers in general we need to continue investing here.

For API docs to be widely accepted, we need to improve the UX in various ways. This primarily involves bug fixing and implementing better ways to navigate API docs.

## Roadmap

The team is working on [a list of problem statements and potentital solutions](https://docs.google.com/document/d/1vQcuXKMBY8P3aKDgp5tgxS0o0qmB03DGVo7z8OvO8tk/edit#heading=h.le5c6oa31qxt) to help guide the selection projects. Sample projects may include:

- clearly displaying key value propositions
- improving traffic to key features
- improving our understanding of user journeys
- creating viral growth opportunities

The API Docs [roadmap](https://sourcegraph.productboard.com/feature-board/2689572-fy2022-roadmap-developer-insights) can be viewed in Productboard.
