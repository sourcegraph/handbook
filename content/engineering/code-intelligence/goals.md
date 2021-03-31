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
    
    **Outcome:** 5 popular open source C++ repositories have up-to-date precise code intelligence on Sourcegraph Cloud.

1. ✅ Sourcegraph Cloud has precise code intelligence for C++ repositories that use cmake as a build system. 
   
     **Outcome:** 5 popular open source cmake repositories have up-to-date precise code intelligence on Sourcegraph Cloud.

1. ✅ Build lsif-clang testing infrastructure.
    
    **Outcome:** We can confidently make code changes to lsif-clang without worrying about obvious bugs.

1. 🔄 Sourcegraph Cloud has precise code intelligence for C++ repositories that use Bazel as a build system.
    
    **Outcome:** 5 popular open source C++ repositories using Bazel have up-to-date precise code intelligence on Sourcegraph Cloud.
    
1. 🔄 Increase C++ precise code intel monthly operations.
    
    **Outcome:** 3 enterprise customers with C++ precise code intel configured in their repositories.

1. Sourcegraph Cloud has up-to-date precise code intelligence for C++ repositories that exceed 1mil SLOC.
    
    **Outcome:** 5 popular open source C++ repositories that exceed 1M SLOC have up-to-date precise code intelligence on Sourcegraph Cloud.

1. Implement standard C++ code navigation features.

### Java precise code intelligence support

**Milestones:**

1. 🔄 Sourcegraph Cloud has up-to-date precise code intelligence for 5 Gradle repositories.

    **Outcome:** 5 popular open source Gradle repositories have up-to-date precise code intelligence on Sourcegraph Cloud.

1. 🔄 Sourcegraph Cloud has up-to-date precise code intelligence for 5 Maven repositories.

    **Outcome:** 5 popular open source Maven repositories have up-to-date precise code intelligence on Sourcegraph Cloud.
    
1. ✅ lsif-java supports Java 11-16.
 
1. 🔄 Sourcegraph Cloud has precise code intelligence for Java repositories that use Bazel as a build system.

    **Outcome:** 5 popular open source Java repositories using Bazel have up-to-date precise code intelligence on Sourcegraph Cloud.

1. 🔄 Increase Java precise code intel monthly operations. 

    **Outcome:** 3 enterprise customers with Java precise code intel configured in their repositories.
    
1. lsif-java supports third party dependency navigation.



### Backend stability

**Milestones:**

1. 🔄 Stabilize code intelligence backend.  

   **Outcome:** No code intelligence queries consume compute or unbounded memory.
    
 1. Reduce code intelligence failure blast radius.

    **Outcome:** No code intelligence failure will affect the stability of the core search feature.
    
1. Decrease backend latency and resource requirements.
  
    
## Roadmap

The code intel team roadmap is tracked in [productboard](https://sourcegraph.productboard.com/roadmap/2658140-code-intel).

At a glance roadmap as of 2021-03-30:

![2021-03-30](https://sourcegraphstatic.com/handbook/product-roadmaps/2021-03-30-code-intel-roadmap.png)
