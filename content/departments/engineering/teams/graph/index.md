# Graph Team

Charter: Create structural and semantic data from unstructured code to provide end-user value.

- SCIP schema, tooling & upload
- 8 precise SCIP indexers
- Syntax highlighting
- Precise & search based code nav
- Auto-indexing

## Members

{{generator:product_team.graph}}

## Contact

- #discuss-graph in Slack.

### Video walkthrough

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/fcaddfd333da487cb526a4fc99ead803" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Vision

The Graph team builds tools and services that provide contextual information around code, taking into account its lexical, syntactic, and semantic structure. This includes:

- An API to provide fast, comprehensive, and accurate answers to important code navigation queries such as Go to Definition and Find References
- A powerful and flexible language-agnostic model of dependency relationships across projects, repositories, and languages
- Robust, extensible, and scalable infrastructure to index code across all languages, keep those indexes up-to-date, and efficiently resolve code navigation queries against all indexed code.

## Strategy

- We see Code intelligence as the glue that sticks the product together, providing a platform for features from navigation to precise powered searches, compiler-accurate batch changes and insights. We aim to provide support for all widely used languages and for the ones we don’t, provide a platform for any developer to add and test their own indexers.
- In the near term we want code navigation to provide seamless, out-of-the-box, precise code navigation for languages that cover 90% of the market usage.
- We want our code navigation to reach IDE feature parity, while offering the option of plugging into developers’ favorite IDEs.
- In the longer term, we envision building a global knowledge graph that accurately maps the entire code universe.
- Our complete strategy is available at [Code intelligence strategy](../../../../strategy-goals/strategy/code-intelligence/index.md)
