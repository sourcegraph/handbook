# Code Intelligence goals and priorities

## Goals

### Expand language support and adoption of precise code intelligence

Progress on adoption and usage is tracked in our [Looker dashboard](https://sourcegraph.looker.com/dashboards/131).

**Problem:**

- Adoption of precise code intelligence comes with a cost. This cost often exceeds a customers's expectation of the benefits precise code intelligence would provide to their organization. We therefore have low adoption in both private instances and Sourcegraph Cloud.
- There is no large open source corpus to demonstrate the benefit of precise code intelligence when adopted at scale.
- Direct delivery to customers prior to having a large, working sample of repositories is difficult as we don't know what issues are caused by our tooling, and what issues are caused by non-standard build configurations.

**Outcome:**

- 200 popular open source C++ and Java repos are indexed on Sourcegraph Cloud.
- C++ and Java indexers are adopted by at least 3 customers each.
- Precise code intel reaches [*N<sub>0</sub>*][N0] precise code intel operations a month.
- CE and Sales have a significant amount of open source repos to showcase and can easily demonstrate the value of setting up precise code intelligence.
- For languages that are particularly subject to unusual setups and tooling, our indexed open source showcase helps us determine if setup issues are caused by an unusual customer dev environment.

**Milestones:**

1. 🔄 Sourcegraph Cloud has precise code intelligence for 100 C++ repositories.
    - 🔄 Improve stability and observability in lsif-clang
    - 🔄 Improve stability and observability in the code intel executor (for auto-indexing)
    - Support automatic indexing of Bazel projects
    - Auto-detect common C++ project configurations and enable auto-indexing for C++ projects on Sourcegraph Cloud
    - Fix broken auto-index configurations for high-profile projects

1. Increase precise code intel operations by ([*N<sub>1</sub>*][N1]+[*N<sub>2</sub>*][N2]+[*N<sub>3</sub>*][N3]) per month.
    - Deliver to [*N<sub>1</sub>*][N1]
    - Deliver to [*N<sub>2</sub>*][N2]
    - Deliver to [*N<sub>3</sub>*][N3]

1. Sourcegraph Cloud has precise code intelligence for 100 Java repositories.
    - Add support for third-party code intelligence in lsif-java
    - Support automatic indexing of Gradle projects
    - Support automatic indexing of Maven projects
    - Auto-detect common Java project configurations and enable auto-indexing for Java projects on Sourcegraph Cloud
    - Fix broken auto-index configurations for high-profile projects

1. Increase precise code intel operations by ([*N<sub>4</sub>*][N4]+[*N<sub>5</sub>*][N5]+[*N<sub>6</sub>*][N6]) per month.
    - Deliver to [*N<sub>4</sub>*][N4]
    - Deliver to [*N<sub>5</sub>*][N5]
    - Deliver to [*N<sub>6</sub>*][N6]

## Roadmap

The code intel team roadmap is tracked in [productboard](https://sourcegraph.productboard.com/feature-board/1825051-code-intel).

[N0]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.63lmpljtve9f
[N1]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.lgv97p81ib7i
[N2]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.7vmkcs91o3z1
[N3]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.77q74hyj1vt7
[N4]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.dody7tmh0cys
[N5]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.yaz1er2nj6qx
[N6]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.vu3qkq4e0r70
