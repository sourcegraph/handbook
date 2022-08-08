## History

The origin of our work is the core of Sourcegraph, first implemented as [srclib](https://github.com/sourcegraph/srclib) a code analysis tool developed by our co-founders [Beyang](https://github.com/beyang) and [Quinn](https://github.com/sqs) in 2015.

2016 - We evolved our strategy to utilize LSP (Language Server Protocol) to power the new Sourcegraph code search engine. LSP is a user oriented protocol and requires an implementation of a language server for each programming language.

2017 - Over time we started to experience some issues with language servers. They can be difficult to deploy, slow at runtime, slow to adopt by members of their respective language communities, and slow to develop.

2018 - We added a new basic code intelligence that is built on search-based heuristics to allow us to provide quick and good enough i.e. "imprecise" support for the [most popular programming languages](https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22).

2019 - While looking for more efficient alternatives to language servers we found LSIF (Language Server Index Format) which provided an index-based implementation of precise code navigation (similar to srclib) with the advantage of being able to build on top of the work done in the LSP community (LSIF and LSP are sister protocols).

2020 and beyond - The Code Intelligence team is responsible for how Sourcegraph understands code and for providing data that powers semantic search, batch changes, and code insights. Our API is the point of discovery for the knowledge graph for all source code.
