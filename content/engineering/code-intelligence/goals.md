# Code Intelligence goals and roadmap

## Goals

### Deliver precise code intelligence to as many users as possible

Progress on adoption and usage is tracked in our [Looker dashboard](https://sourcegraph.looker.com/dashboards-next/159).

**Problem:**

- Adoption of precise code intelligence comes with a cost. This cost often exceeds a customers's expectation of the benefits precise code intelligence would provide to their organization. We therefore have low adoption in both private instances and Sourcegraph Cloud.
- There is no large open source corpus to demonstrate the benefit of precise code intelligence when adopted at scale.
- Direct delivery to customers prior to having a large, working sample of repositories is difficult as we don't know what issues are caused by our tooling, and what issues are caused by non-standard build configurations.

**High level outcomes:**

- CE and Sales have a significant amount of open source repos to showcase and can easily demonstrate the value of setting up precise code intelligence.
- For languages that are particularly subject to unusual setups and tooling, our indexed open source showcase helps us determine if setup issues are caused by an unusual customer dev environment.

### C++ precise code intelligence support

**Milestones:**

1. ✅ Sourcegraph Cloud has up-to-date precise code intelligence for C++ repositories.
    - ✅ Increase observability in the code intel executor to make troubleshooting failed auto-index records possible.
    - ✅ Auto-index 5 repositories on Sourcegraph Cloud.
    
    **Outcome:** 5 popular open source C++ repositories have up-to-date precise code intelligence on Sourcegraph Cloud.

1. ✅ Sourcegraph Cloud has precise code intelligence for C++ repositories that use cmake as a build system. 
    - ✅ Auto-index 5 repositories on Sourcegraph Cloud that use cmake as a build system.
    - ✅ Research: Add inference rules for cmake projects to auto-index on Cloud.
   
     **Outcome:** 5 popular open source cmake repositories have up-to-date precise code intelligence on Sourcegraph Cloud.

1. 🔄 Build lsif-clang testing infrastructure
    - 🔄 Build a tool which can to semantically compare and diff LSIF dumps.
    - 🔄 Write a test harness for lsif-clang which can perform snapshot tests on small code snippets.
    - Spike: Explore how to perform snapshot tests on large projects for integration testing.
    
    **Outcome:** We can confidently make code changes to lsif-clang without worrying about obvious bugs.

1. Sourcegraph Cloud has precise code intelligence for C++ repositories that use Bazel as a build system.
    - Support Bazel projects in lsif-clang.
    - Auto-index 5 repositories on Sourcegraph Cloud that use Bazel as a build system.
    - Update and improve documentation to ensure a good user experience.
    
    **Outcome:** 5 popular open source C++ repositories using Bazel have up-to-date precise code intelligence on Sourcegraph Cloud.
    
1. 🔄 Increase C++ precise code intel monthly operations.
    - 🔄 Deliver to [*N<sub>1</sub>*][N1].
    - Deliver to [*N<sub>2</sub>*][N2].
    - Deliver to [*N<sub>3</sub>*][N3].
    
    **Outcome:** 3 enterprise customers with C++ precise code intel configured in their repositories.

1. Sourcegraph Cloud has up-to-date precise code intelligence for C++ repositories that exceed 1mil SLOC.
    - Create benchmarks of lsif-clang memory and CPU usage for various sizes of repositories. 
    - Auto-index 5 repositories on Sourcegraph Cloud that exceed 1M SLOC.
    
    **Outcome:** 5 popular open source C++ repositories that exceed 1M SLOC have up-to-date precise code intelligence on Sourcegraph Cloud.

1. Implement standard C++ code navigation features.
    - Jump to declaration.
    - Jump to implementation.
    - Switch between source and header file.

### Java precise code intelligence support

**Milestones:**

1. 🔄 Sourcegraph Cloud has up-to-date precise code intelligence for 5 Gradle repositories.
    - 🔄 Manual configuration in a forked repository.
    - 🔄 Gradle plugin implementation.
    - Publish Gradle plugin.
    - Update and improve documentation to ensure a good user experience.
    
    **Outcome:** 5 popular open source Gradle repositories have up-to-date precise code intelligence on Sourcegraph Cloud.

1. Sourcegraph Cloud has up-to-date precise code intelligence for 5 Maven repositories.
    - Manual configuration in a forked repository.
    - Maven plugin implementation.
    - Publish Maven plugin.
    - Update and improve documentation to ensure a good user experience.
    
    **Outcome:** 5 popular open source Maven repositories have up-to-date precise code intelligence on Sourcegraph Cloud.
 
1. Sourcegraph Cloud has precise code intelligence for Java repositories that use Bazel as a build system.
    - Manual configuration in a forked repository.
    - Bazel script implementation.
    - Update and improve documentation to ensure a good user experience.
    
    **Outcome:**  5 popular open source Java repositories using Bazel have up-to-date precise code intelligence on Sourcegraph Cloud.

1. Increase Java precise code intel monthly operations.
    - Deliver to [*N<sub>4</sub>*][N4].
    - Deliver to [*N<sub>5</sub>*][N5].
    - Deliver to [*N<sub>6</sub>*][N6].
    
    **Outcome:** 3 enterprise customers with Java precise code intel configured in their repositories.
    
1. Lsif-java supports third party dependency navigation.

1. Lsif-java supports Java 11-16.

### Backend stability

**Milestones:**

1. 🔄 Stabilize code intelligence backend.
    - ✅ Rewrite resolvers so they can be optimized.
    - 🔄 Add hard limits to all database queries.
    - 🔄 Implement [RFC 311](https://docs.google.com/document/d/1q59lyj-tLEmEQBe3k9bTQj85NR4abfk2SLNS6UkmcdM/edit) (enable out-of-band data migrations).
    - Update codeintel data schema to reduce memory pressure in query path.
    
    **Outcome:** No code intelligence queries consume compute or unbounded memory.
    
 1. Reduce code intelligence failure blast radius.
    - Move background processes into isolated container(s).
    - Spike: Explore how to tune Postgres for our database insertion patterns.
    - Add hard limits to code intelligence tables in shared database.
    
    **Outcome:** No code intelligence failure will affect the stability of the core search feature.
    
1. Decrease backend latency and resource requirements.
  
    
## Roadmap

The code intel team roadmap is tracked in [productboard](https://sourcegraph.productboard.com/roadmap/2288108-code-intel).

At a glance roadmap as of 2021-02-18:

![2021-02-18](https://sourcegraphstatic.com/handbook/product-roadmaps/2021-02-18-code-intel-roadmap.png)

[N1]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.lgv97p81ib7i
[N2]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.7vmkcs91o3z1
[N3]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.77q74hyj1vt7
[N4]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.dody7tmh0cys
[N5]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.yaz1er2nj6qx
[N6]: https://docs.google.com/document/d/1T4KPRiRFVoAG2-yhokdxlKjozVflUOSH1k9X68PmrVs/edit#bookmark=id.vu3qkq4e0r70
