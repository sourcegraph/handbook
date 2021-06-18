# Code Intelligence goals and roadmap

## Goals

### Top goal: Build and scale the Global Code Graph
Progress on adoption and usage of code intelligence is tracked in our [Looker dashboard](https://sourcegraph.looker.com/dashboards-next/159).

**Vision:** The Global Code Graph experience will make it so that when a developer lands on a relevant repo on Sourcegraph they will experience precise code intelligence, being able to jump to accurate definitions and find precise cross-repository references. They’ll also be able to navigate the dependency graph of a repository at any tagged commit.

**Problem:** Until recently we’ve been focusing on delivering local code intelligence for more languages. Getting precise code intelligence results for a given repository is a clear upgrade from search-based, but setting up precise code intelligence at the moment requires significant effort from the user or customer. Furthermore, users only get precise Go to definition and Find references features within the repository that has LSIF set up. 

In order to work towards the Global Code Graph vision, we’re focusing our efforts on the current work streams: 


### Cross repository and dependency navigation
We believe that this is the global code graph’s killer feature. It elevates the code navigation experience to a whole new level of cross-project analysis. It includes enabling precise cross-repository navigation and the ability to navigate to any third party dependency a repository references. We're solving this initially on Sourcegraph Cloud and plan to replicate the same functionality for on-premise usage.

**Milestones:**
- ✅ Cross repository and dependency navigation for Go works on Sourcegraph Cloud
- ✅ RFC 307: POC cross-repository and dependency navigation for Java and JS
- ✅ Java cross-repository and dependency navigation works on Sourcegraph Cloud
- JS cross-repository and dependency navigation works on Sourcegraph Cloud (Planned for Q3)
- Python cross-repository and dependency navigation available on Sourcegraph Cloud (Planned for Q4)


### Auto-indexing and scaling the code graph
The current set up experience is not scalable for customers with a large amount of repositories. Enabling auto-indexing would mean a lower barrier for entry, a seamless out of the box experience and more engineers using precise code intelligence. 
Building the code graph also means we need to generate and store increased amounts of LSIF data that will require scaling our infrastructure in an order of one to two magnitudes. We hypothesize that we'll reach scaling concerns, we want to be proactive in identifying and removing bottlenecks.

**Milestones:**
- ✅ Go auto-configuration is enabled and indexing all of Sourcegraph main's repository dependencies
- 🔄 Scale Go code graph on Sourcegraph Cloud (Estimated completion July 30th)
- 🔄 Ship trial version of auto-indexing for enterprise instances (Estimated completion July 30th)
- 🔄 Scale Java code graph on Sourcegraph Cloud (Estimated completion July 30th)
- Global code graph exists for Go on Sourcegraph Cloud (Planned for Q3)
- JS auto-configuration and indexing repositories on Cloud (Planned for Q3)
- Global code graph exists for JS (Planned for Q4)


### Ship precise language support
We’ve historically invested in broadening our span of supported languages. This is an ongoing effort that ties directly back to building the Global Code Graph vision.

**Milestones:**
- ✅ Ship C++ local precise code intelligence 
- ✅ Ship Java local precise code intelligence 
- ✅ Python indexer exploration spike 
- Ship Python precise code intelligence (Planned for Q3-Q4)
- Lsif-node is production quality (Planned for Q3)
- C# exploration spike (Planned for Q4)
    
## Roadmap

The code intel team roadmap is tracked in [productboard](https://sourcegraph.productboard.com/roadmap/2658140-code-intel).
At a glance roadmap as of 2021-06-18:
![2021-06-18](https://sourcegraphstatic.com/handbook/product-roadmaps/2021-06-18-code-intel-roadmap.png)
