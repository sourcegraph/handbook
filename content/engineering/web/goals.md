# Web Team Goals and Priorities 

## Goals

### Long term

**_The web team has four areas of focus:_**

  1. **_Creating and maintaining a highly usable and intentionally designed webapp interface_**
  1. **_Delivering the full, unique value of Sourcegraph [extensions](https://docs.sourcegraph.com/extensions)_**
  1. **_Maintaining and expanding_ [_code host integrations_](https://docs.sourcegraph.com/dev/background-information/web/code_host_integrations)**
  1. **_Developing code insights into an entirely new featureset_**

**Outcome**: 

* All of these areas of focus are well-maintained, well-designed, well-documented, well-tested, performant, easy to set up, and leave users impressed. 
* The webapp helps users discover and employ the full power of Sourcegraph effectively, with a high quality and highly usable interface. 
* Soucegraph extensions and the extensions API provide powerful capabilities to users and a great experience for extension developers. 
* Sourcegraph code host native integrations and browser extensions support the most common code hosts and browsers. 
* Code insights expose the value of Sourcegraph's knowledge of your codebase to users at all levels of an organization. 

### Medium term

_These medium-term goals are listed in order of rough priority. This means we preference a sooner-listed goal when making progress on one would conflict with another goal, but it doesn't mean we only work on the first goal until it's done – we balance our iterations in sum so we can make some progress on all of these goals over a quarter. Within each goal, the sub-goals are also listed in (stricter) priority order._ 

1. **Make code insights an entirely new reason to use Sourcegraph.**
   1. Focus on building prototypes to solve the most pressing needs of our customers, to clearly demonstrate the value of code insights. 
   1. Expose more generalizable metrics that let our users measure and track their own goals, whether those are migrations, code smells, security needs, cross-collaboration, or other information about code. 
   1. Expose features that let our users build their own insights. 

1. **Make Sourcegraph extensions a core part of Sourcegraph users' experiences.**
   1. Track anonymized, general usage of extensions to determine which extensions are most successful at adding value for our users to inform our future work.
   1. Build, maintain, and update API endpoints that are robust and immediately useful, to grow adoption of extensions. 
   1. Make the extensions action bar clear and scalable, and help users discover and use our extensions. 
   1. Improve discoverability and design of the extension registry to enable users to find the most useful extensions and make users excited to build their own extension. 

1. **Increase the weekly active users of all our code host integrations.**
   1. Maintain the existing native integrations and browser extensions. 
   1. Build support for new code hosts and new browsers, like Safari and Gerrit. 
   1. Build support for the browser extension to reference both a private Sourcegraph instance and public code on Sourcegraph.com. 

1. **Make the Sourcegraph web interfaces more consistent and improve discoverability of Sourcegraph features.**
   1. Make progress on design debt throughout the web app where the web team owns the design: repo page areas and panels, navigation and headers, general theming, and the blob page (file viewer). 
   1. Build and update designs to help users discover or understand everything Sourcegraph offers, like new navigation menus and header concepts. 

### Short term

Our goals for the current iteration can be found in our [iteration goals living Google Doc](https://docs.google.com/document/d/1n9WKjieKmd2YYkNrEsOfdmxRYUrbowLWjq05phLoQ6s/edit).

The individual tasks and progress of the current iteration can be found as GitHub issues in our [GitHub project board](https://github.com/orgs/sourcegraph/projects/45?fullscreen=true).

## Roadmap

1. ✅ Existing sourcegraph extensions are more discoverable ([RFC 209](https://docs.google.com/document/d/1I5BMEGp3QuB81AjSzLCQwq_XJV1sXevlU0lpB4O1pj8/edit#))
1. ✅ The Sourcegraph browser extension is more discoverable and easy to congifure ([RFC 221](https://docs.google.com/document/d/19f4xleYBU1zZZdqMmXlLmFxeR-fwEpOwTOgViOFOnyo/edit))
1. ✅ Build new and improved Sourcegraph extensions to showcase the value and opportunity of extensions ([RFC 246](https://docs.google.com/document/d/1HngEeLNAe7_QzVJr6UPi0Si4ZALqTzb7uonOxUiJP6g/edit))
1. ✅ Improve the Sourcegraph extensions (internal) development experience ([RFC 155](https://docs.google.com/document/d/1ikrUNVe3YVbR-JpegxhjrFdmRkTGzTLcOMkKHnOyjuE/edit)) and (external) documentation
1. 🔄 Code insights migration prototype and directory decoration
1. 🔄 Safari browser extension
1. Sourcegraph web app navigation is clearer and intentionally designed ([RFC 248](https://docs.google.com/document/d/1AEeCuXuYGlu2kU9HfTuh5rMuoL2ASxy-G4LFje_ySFE/edit?usp=drive_web&ouid=110069214620879702746))
1. Page title breadcrumbs are unified and useful 
1. Later-stage code insights work 
