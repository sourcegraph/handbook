# Web Team Goals and Priorities 

## Goals

### Long term

**_Deliver the full, unique value of [extensions](https://docs.sourcegraph.com/extensions) to our users._**

**Outcome**: Our webapp, browser extensions and native integrations are great platforms to provide our users unique value through extensions. These platforms are well-maintained, consistent, easy to setup, well-documented, well-tested, performant, and show their power through convincing extensions built on top of them. The extensions platform and API provide powerful capabilities to extension developers and a great developer experience.

### Medium term

To reach our long-term goal, we set the following medium-term goals to guide our short-term iteration plans.
We will tackle these medium-term goals in order, though expect to have some work done in parallel as we progress.

1. **Make the products that extensions are build on (web app, code host integrations) more consistent and improve discoverability.**
   Our web app has accumulated a lot of design debt over time, which negatively impacts how we can use it as a vehicle to deliver extensions.
   With areas like the repository page, user settings area (which extensions are configured through), navigation, command palette UI and the extension registry affected, it is hard to provide a good UX around extensions (the extension registry blends into goal (2)).
   Our code host integrations, which are an implementation of our extension API, are a huge driver of adoption inside companies and multiply the value of extensions by bringing them into code review workflows, but are difficult to discover and setup.
2. **Bring the extension platform into shape.**
   Our extension platform includes the workflow around creating, installing and using extensions, the API exposed to developers and its documentation.
   To grow adoption of extensions, these need to be solid, but they are currently lacking on multiple dimensions.
   Some API areas like code insights are still in prototype phase and are still undocumented (this blends into goal (3)).
   Our extension host is also currently implemented in a way that makes it difficult for us to maintain, evolve to enable more use cases and to onboard new teammates into this area of the codebase.
   Combining this with writing a few smaller extensions (part of goal (3)) allows us to dogfood the experience and inform us where the platform is lacking.
3. **Build out compelling use cases with the extensions platform.**
   This includes writing more extensions ourselves, but also extending the extension API with more capabilities to enable more use cases.
   We have a long list of ideas and use cases customers shared with us that we can solve and/or enable customers to solve with extensions.
   Some of these integrate Sourcegraph with more external services to suit the setups of more customers, others provide completely new value no other product provides.

### Short term

Our goals for the current iteration can be found in our [iteration goals living Google Doc](https://docs.google.com/document/d/1n9WKjieKmd2YYkNrEsOfdmxRYUrbowLWjq05phLoQ6s/edit).

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true).

## Roadmap

1. ✅ Existing sourcegraph extensions are more discoverable ([RFC 209](https://docs.google.com/document/d/1I5BMEGp3QuB81AjSzLCQwq_XJV1sXevlU0lpB4O1pj8/edit#))
1. ✅ The Sourcegraph browser extension is more discoverable and easy to congifure ([RFC 221](https://docs.google.com/document/d/19f4xleYBU1zZZdqMmXlLmFxeR-fwEpOwTOgViOFOnyo/edit))
1. ✅ Build new and improved Sourcegraph extensions to showcase the value and opportunity of extensions ([RFC 246](https://docs.google.com/document/d/1HngEeLNAe7_QzVJr6UPi0Si4ZALqTzb7uonOxUiJP6g/edit))
1. 🔄 Improve the Sourcegraph extensions (internal) development experience ([RFC 155](https://docs.google.com/document/d/1ikrUNVe3YVbR-JpegxhjrFdmRkTGzTLcOMkKHnOyjuE/edit)) and (external) documentation
1. Code insights TBD
1. Sourcegraph web app navigation is clearer and intentionally designed ([RFC 248](https://docs.google.com/document/d/1AEeCuXuYGlu2kU9HfTuh5rMuoL2ASxy-G4LFje_ySFE/edit?usp=drive_web&ouid=110069214620879702746))
1. Page title breadcrumbs are unified and useful 
1. Later-stage code insights work 

