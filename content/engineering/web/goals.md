# Web Team Goals and Priorities 

**_The web team has two areas of focus:_**

  1. **_Extensibility_:** _delivering the full, unique value of Sourcegraph across [extensions](https://docs.sourcegraph.com/extensions) and_ [_code host integrations_](https://docs.sourcegraph.com/dev/background-information/web/code_host_integrations).
  1. **_Frontend platform:_** _creating and maintaining a highly usable and intentionally designed webapp interface._

_Until it has fully staffed its own team, the web team also "parents" the **[code insights team](../code-insights/index.md)**._ 

## Goals

See also our [completed goals](goals_completed.md).

###  _Extensibility_ – make Sourcegraph extensions an active ecosystem 

**Problem:** 

- Customers' extension usage is currently untracked and (presumably) low, so we can't quantify if users are getting value from existing extensions. 
- Sourcegraph's native extensions UI has problems of scale, such as displaying very many extensions. 
- Sourcegraph's extensions registry has UI problems that make it harder for users or CE/Sales folks to find or share valuable extensions.
- Nearly all of the most commonly-used extensions were built by Sourcegraph rather than third-party developers. This won't scale – Sourcegraph has neither the resources nor the insight that third-party developers have when it comes to building useful extensions. 

**Milestones:**

1. 🔄 We can collect anonymized, aggregate usage data of our extensions to determine the popularity and usage of (existing and future) extensions ([RFC 267](https://docs.google.com/document/d/1HKgwTyG-IcRM81xLAmussWV4EdK95uy7GjKFIG8vgU4/edit#heading=h.trqab8y0kufp)). 
   - **Outcome:** We can measure usage and adoption of extensions, by extension ID, across our customers in order to make informed product decisions. 

1. 🔄 The on-Sourcegraph extensions UI (action bar and contribution points) is clear and scalable, to help users discover and use extensions. 
   - **Outcome:** - [*N<sub>1</sub>*][N1]% of Sourcegraph server users use at least one extension a week. 

1. The extensions registry promotes discovery of relevant extensions and third-party extensions. 
   - **Outcome:** The Sales and CE teams are excited and confident when showing off the extensions registry and extensions features to customers. 

1. Sourcegraph partners with relevant third-party services to publish their own extensions. 
   - **Outcome:** Three "partnership" extensions have been built by Sourcegraph partners. 

1. We can safely and confidently oversee the extensions ecosystem of third-party contributions without needing to individually review published extensions. 
   - **Outcome:** Customers are qualitatively confident in using extensions built by non-partner third parties. 
   - **Outcome:** We have a scalable process and policy for publishing or verifying extensions. 

1. Sourcegraph extensions become an "ecosystem" (third parties build extensions using docs/tutorials/marketing promos; expose metrics and adoption of extensions to developers and/or public). 
   - **Outcome:** Three custom extensions have been built by customers. 
   - **Outcome:** One custom extension has been publicly published by an existing customer and is used by developers not at that customer. 
   - **Outcome:** One of the five most-used Sourcegraph extensions was built by a non-Sourcegrapher. 

### _Extensibility_ - support seamless code host integration for all of Sourcegraph's features

**Problem:** 

- Right now, the Sourcegraph browser extensions and code host integrations only support a limited number of (the most popular) code hosts. 
- The ways one can use Sourcegraph features and extensions are limited to a few specific UI touchpoints rather than all the interactions available on Sourcegraph natively. 
- If one wants to use multiple Sourcegraph instances on a code host, one has to manually change the URL of the Sourcegraph instance every time.
- To run Sourcegraph searches, you have to navigate to Sourcegraph and away from the code host. 

**Milestones:**

1. 🔄 The Sourcegraph browser extension supports Gerrit. 
   - **Outcome:** Sales closes deals with customers that primarily use Gerrit ([primary customer example](https://github.com/sourcegraph/customer/issues/138)).

1. The Sourcegraph code host integrations expose all of Sourcegraph's extension features on the code host UI, like directory decorations or extensions action bar and status bar functionality. 
   - **Outcome:** Usage of Sourcegraph code host integrations at customers with a supported code host is 30%. 

1. The browser extension automatically falls back to Sourcegraph.com when configured with a private instance but on a public repo. 
   - **Outcome:** [*N<sub>2</sub>*][N2]% higher daily extension interactions for extension users that use both public and private code. 
   - **Outcome:** [*N<sub>3</sub>*][N3]% of file views on Sourcegraph.com come via the fallback feature.  

1. The browser extension can support multiple private Sourcegraph instances for code intelligence. 
   - **Outcome:** [*N<sub>4</sub>*][N4]% of users use multiple Sourcegraph instances for code intelligence on their code host. 
   - **Outcome:** Average daily interactions for folks with multiple instances connected to the extension are [*N<sub>5</sub>*][N5]% higher than single-instance users.

1. Sourcegraph searches can be run on or from the code host. 
   - **Outcome:** [*N<sub>6</sub>*][N6]% of Sourcegraph searches come natively on the code host.
   - **Outcome:** [*N<sub>7</sub>*][N7]% of users run their first Sourcegraph search ever on the code host rather than a Sourcegraph instance.  

### _Extensibility_ – create an IDE extension that brings Sourcegraph into the IDE 

**Problem:** 

Right now you can only use Sourcegraph's search features on Sourcegraph in a browser. Integrating search, code intelligence, and Sourcegraph extensions with an IDE like VSCode would massively spread the Sourcegraph's usefulness and ease-of-adoption for our users. _

**Milestones:** _This project is still early-stage and these milestones are more likely than normal to change based on early feature research._

1. 🔄 Determine the minimum lovable prototype feature(s) necessary to launch an IDE integration (example features: basic search, advanced search, code intel, Sourcegraph extension). 
   - **Outcome:** A prioritized feature list built upon user research that can form the initial roadmap of the IDE extension. (This may reorder the later goals and add feature-based milestones.) 

1. Determine and build tracking for core performance and adoption metrics of the IDE extension. 
   - **Outcome:** We can measure usage and adoption of the IDE extension separate it by existing/new users. 

1. The Sourcegraph IDE extension is a useable prototype and provides enough immediate value for developers to want to enable it.  
   - **Outcome:** We see [*N<sub>8</sub>*][N8]% of existing Sourcegraph users enable and use the IDE extension. 
   - **Outcome:** We get qualitative feedback from early adopters around what features are most useful or need work. 

1. The Sourcegraph IDE extension is generally available and promoted across our pages and IDE extension registries. 
   - **Outcome:** The Sourcegraph IDE extension increases DAU of Sourcegraph [*N<sub>9</sub>*][N9]% versus users who don't use the IDE extension. 
   - **Outcome:** [*N<sub>10</sub>*][N10]% of new and existing Sourcegraph users use the IDE extension. 

1. The Sourcegraph IDE extension drives new sales and adoption of Sourcegraph. 
   - **Outcome:** >[*N<sub>11</sub>*][N11] number of new "free tier" monthly first-time users started by using Sourcegraph in their IDE. 
   - **Outcome:**  Qualitatively determined, at least three customer deals come in from companies excited about the Sourcegraph IDE extension or whose first Sourcegraph touchpoint was the IDE extension. 

### _Frontend Platform_ - make the web app UI consistent, accessible, and scalable 

**Problem:** 

The Sourcegraph web platform has accumulated lots of design debt, since much of it was built before we had a design team. Additionally, the existing UI components don't scale to Sourcegraph's feature growth. The web platform should be more accessible, delightful, customizable, and scalable in order to empower Sourcegraph's users and Sourcegraph's internal teams' development.

### Milestones: 
1. 🔄 Sourcegraph's core navigation effectively highlights our core features and scales to new ones. 
   - **Outcome:** We have a defined path forward for expanding navigation to include new features without needing to frequently redesign. 

1. Sourcegraph's UI lets users customize themes, colors, and font attributes. 
   - **Outcome:**  The Sourcegraph UI meets all WCAG accessibility standards. 

1. Sourcegraph's UI components are clean and intentionally designed.
   - **Outcome:** The Sourcegraph frontend is easy for other teams to develop on top of. 
   - **Outcome:** The Sourcegraph UI contributes to the Sourcegraph brand to the point where it is clear what "feels like" and "does not feel like" Sourcegraph, per qualitative feedback from internal teams. 

### Short term

Our goals for the current iteration can be found in our [iteration goals living Google Doc](https://docs.google.com/document/d/1n9WKjieKmd2YYkNrEsOfdmxRYUrbowLWjq05phLoQ6s/edit).

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true).

## Roadmap

The web team maintains objective-based roadmaps in Productboard for each of our two focus areas: [frontend platform roadmap](https://sourcegraph.productboard.com/roadmap/2362023-web-frontend-platform-roadmap) and [extensibility roadmap](https://sourcegraph.productboard.com/roadmap/2330181-web-extensibility-roadmap). 

At a glance roadmap as of 2021-01-14:

Frontend platform
![2021-01-14](https://sourcegraphstatic.com/handbook/product-roadmaps/2021-01-14FrontendPlatformRoadmap.png)

Extensibility
![2021-01-14](https://sourcegraphstatic.com/handbook/product-roadmaps/2021-01-14ExtensibilityRoadmap.png)

[N1]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N2]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N3]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N4]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N5]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N6]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N7]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N8]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N9]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N10]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
[N11]: https://docs.google.com/document/d/1KF-upHfYc3SoK4Nz_t3CjD-20XIGkF4UZuzpFvwc5fY/edit
