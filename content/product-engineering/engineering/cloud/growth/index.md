# Cloud growth

The cloud growth team focuses on the growth of Sourcegraph.com, both as a SaaS product and lead generator for Sourcegraph as an on-prem product.

## Members

- [Bill Creager](../../../../company/team/index.md#bill-creager) (Acting [Engineering Manager](../../roles.md#engineering-manager)) {#api-docs-eng}
  - [Stephen Gutekanst](../../../../company/team/index.md#stephen-gutekanst)
  - FQ3 full stack engineer
  - FQ3 full stack engineer
  - FQ3 full stack engineer

## Contact

- #cloud-growth channel in Slack

## Goals

[Goals and roadmap](../../../../company/strategy/cloud/growth/index.md)

## API docs

The cloud growth team's primary focus for today is API docs. As we hire out this team we will be working on more growth opportunities. API docs is a core component of a company-wide initiative to help Sourcegraph become the standard tool for searching and understanding public code.

## The API docs vision

It is hard for developers to get good answers to API-related questions today, they lack easy access to solid tooling, docs, formatting and examples from public (and private) code. Some languages are better served than others (e.g. [Go is served well](https://pkg.go.dev)), but nearly all languages lack an excellent way to answer:

- What API do I need to use?
- How do I use this API? Can I get a quick example?
- How are other people using this API?

We believe that API docs can address a missing step in the workflow of developers exploring open source libraries by providing in-context documentation and usage examples. In addition it has the potential to create a powerful acquisition channel for Sourcegraph through strengthening our SEO.

## How API docs contribute to Sourcegraph

API docs provides both value by making developers delighted, as well as acting as a strong user acquisition channel both for Sourcegraph.com and our on-prem product. We believe it can be the primary way we reach the other 80% of developers out there who are not familiar with Sourcegraph.

## History our team has made

Below is a summary of history our team has made, focusing on key milestones.

#### October, 2021 (this month!)

[email update](https://user-images.githubusercontent.com/3173176/137404711-02a48d1f-047c-431c-8fab-02439440f345.png)

- We reach a key milestone of 2k+ MAUs.
- Published an article: [Postgres text search: balancing query time and relevancy](https://about.sourcegraph.com/blog/postgres-text-search-balancing-query-time-and-relevancy/)

#### Sept, 2021

- Google has indexed 87,000+ API docs pages, you can find them in Google although rare.
- We participated in a hackathon, producing [better repo pages (YouTube)](https://youtu.be/sgqtPb8ubAw)
- We've received notable amounts of feedback from ~10+ internal developers.
- Quinn Keast held a demo day video talk about my and his work collaborating on the design for API docs UX.
- Due to incredibly slow Google indexing, we shift focus to two new avenues to de-risk:
  - Search-like integration
  - VS code integration
- Major work on the API docs search backend has been completed.

#### August, 2021

- API docs have now indexed: 3000+ repositories with 5.8 million GitHub stars combined, 23,000+ Go packages, and 1 million fairly high quality Go symbol pages.
- From having no sitemap at all on Sourcegraph.com, we create a new [sitemap generator](https://github.com/sourcegraph/sourcegraph/tree/main/cmd/sitemap) which builds a sitemap of 400k+ API docs pages issuing several million GraphQL queries against our backend to produce it.
- You can now link to individual symbols in API docs pages - a major UX milestone and important for our SEO.
- Major improvements to our SEO in general, preventing Google from indexing garbage pages and improving metadata. API docs gains link previews.

#### July, 2021:

- A [sneak peek blog post](https://about.sourcegraph.com/blog/api-documentation-for-all-your-code/) was written in coordination with the marketing team.
- We publicized "What's new in API docs?" [on Twitter](https://twitter.com/slimsag/status/1425998256039813123):
  - Now indexed over 71 million Go symbols.
  - Working on redesigned UI with Quinn Keast.
  - Implemented major parts of redesigned UI.
  - Fixed issues with using it on Go standard library and Sourcegraph codebase.
  - Massive page performance improvements
  - The sidebar is MUCH better now, it follows as you scroll on the page, etc.

#### June, 2021

[demo video](https://drive.google.com/file/d/126LLrQanXH7rHr0d8d_qvmnSpdefBa2V/view)

- API docs reached a polished enough state to be turned on-by-default for all users of Sourcegraph.com
- Usage examples were added.
- The API docs spec extension to LSIF was solidified, ensuring it could support "Jump to API docs" from code views, "View code" in API docs pages, usage examples in API docs pages, and search integration in the future.
- Over 19 issues and other substantial improvements were made based on internal feedback of the feature. [changelog](https://github.com/sourcegraph/sourcegraph/blob/main/CHANGELOG.md#api-docs-experimental)

#### May, 2021

[status update email](https://user-images.githubusercontent.com/3173176/119178234-46897500-ba22-11eb-84cd-cb05fd837921.png)

- We announced three weeks ahead of schedule that we have reached our internal beta of API docs on Sourcegraph.com, with the feature on-by-default for all Sourcegraph teammates.
- We completed substantial backend, frontend, and GraphQL API work.

#### April, 2021

[status update email](https://user-images.githubusercontent.com/3173176/119178044-09bd7e00-ba22-11eb-8463-7ea39295806b.png)

- We spent a substantial amount of time getting consensus from code intel, leadership, and product teams that we are solving the right problem.
- Substantial time was spent making sure we settled on the right code-intel architecture for this project, including drafting and getting consensus on the API docs extension to the LSIF spec.
- We implemented a substantial portion of how we build, store, and index the code intelligence data for API docs with an implementation for the lsif-go indexer.
