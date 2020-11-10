# Code Intelligence goals and priorities

## Goals

### Grow LSIF adoption and usage reaching [*N<sub>0</sub>*][N0] precise code intel operations a month

Progress on adoption and usage is tracked in our [Looker dashboard](https://sourcegraph.looker.com/dashboards/131).

**Problem:** By default, users get basic code intel results which are often incorrect for tokens with common names (such as Get). This is solved by enabling precise code intel, which gives users faster, 100% accurate results for a definition or reference for a symbol they hover over. 

**Strategy:** It is imperative that we raise adoption *deeply* within a particular language and ecosystem. We want to provide fast and precise answers about a user's _universe of code_. This can only happen when that entire universe is indexed. We intend to provide an index for _all_ such universes of code by making progress on two fronts. First, we need to raise excitement for the opportunities adopting precise code intelligence makes possible. Once a user sees what is possible, they should have little reason not to put in the effort of adoption. Second, we need to reduce the friction felt during indexing (especially during adoption). Users tend to perceive only the work we ask them to do to set up precise code intelligence and do not perceive the full benefit of precise code intelligence. Reducing the friction of indexing is a critical step in growing support. It is also necessary to raise adoption *widely* across companies. Until we have support for a set of indexers that aligns closely with a company's tech stack, we cannot pursue those companies for adoption. There will always be a large pool of untapped users we can reach by adding support for additional languages.

**Milestones:**

1. 🔄 Deliver precise Go code intelligence to 3 organizations.
    - ✅ Deliver to [*N<sub>1</sub>*][N1]
    - 🔄 Deliver to [*N<sub>2</sub>*][N2]
    - Deliver to [*N<sub>3</sub>*][N3]
1. 🔄 Deliver precise C++ code intelligence to 3 organizations.
    - Deliver to [*N<sub>4</sub>*][N4]
    - Deliver to [*N<sub>5</sub>*][N5]
    - Deliver to [*N<sub>6</sub>*][N6]
1. 🔄 Support automatically indexing source code within Sourcegraph.
    - ✅  Provide best effort auto-indexing for supported languages [RFC 201](https://docs.google.com/document/d/1NPQs1s814LZjNXjPuavqC1N7hZR192DNtmSBmAeH9UY/edit)
    - Next steps TBD
1. 🔄 Support incremental indexing of Go source code.
    - 🔄 Add incremental indexing for monorepo support [RFC 170](https://docs.google.com/document/d/1NPu0Vc7FpdoYwCrtpnu-8KB4OPbw7L0KBTqw96JVc8w/edit#)
1. 🔄 Deliver precise Java code intelligence to 3 organizations.
    -  🔄 Add native Gradle support for lsif-java
    - Deliver to [*N<sub>7</sub>*][N7]
    - Deliver to [*N<sub>8</sub>*][N8]
    - Deliver to (TBD)
1. Deliver precise TypeScript code intelligence to 3 organizations.
    - Deliver to [*N<sub>9</sub>*][N9]
    - Deliver to (TBD)
    - Deliver to (TBD)
1. Automate the list of languages unsupported by precise code intelligence ordered by impact. 
1. Integrate with 3 widely used build tools to reduce the friction of indexing monorepos.
    - Support Bazel
    - Support Buck
    - Support Pants
1. Build indexers for 3 high-impact language/ecosystems.
    - Support C#
    - Support Python
    - Support Scala
    
## Roadmap
The code intel team roadmap is tracked in [productboard](https://sourcegraph.productboard.com/feature-board/1825051-code-intel)

[N0]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.63lmpljtve9f
[N1]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.lgv97p81ib7i
[N2]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.7vmkcs91o3z1
[N3]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.77q74hyj1vt7
[N4]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.dody7tmh0cys
[N5]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.yaz1er2nj6qx
[N6]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.vu3qkq4e0r70
[N7]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.22p5u8gdheua
[N8]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.wugsa2bws90r
[N9]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.xq968uve0czg
