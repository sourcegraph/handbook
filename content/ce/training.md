# Training sessions and demo flows

Sourcegraph traditionally provides a pack of three training sessions to new [Enterprise](https://about.sourcegraph.com/pricing) customers.

However, additional sessions are available on custom topics.

## General training session tips

- Start by sharing a link to the company's internal Sourcegraph deployment, if available. This allows viewers to follow along.
- End by sharing your email address and describing how they can get in contact for support.
- Make it clear at the start that you will stop for questions at each stage along the way. These are most successful when the viewers are deeply engaged and using Sourcegraph themselves.
- Tailor all of the use cases described below to the company in question.

## Sourcegraph 101 (Standard demo flow)

_Trainer_: Customer Engineer

_Time_: 45 minutes

### Agenda
<u>5 minutes</u>: introductions and company overview

<u>20 minutes</u>: Sourcegraph 101 demo, covering 4-5 key product capabilities and use cases

<u>5–10 minutes</u>: internal company early adopters and volunteers share their use cases for Sourcegraph

<u>10–15 minutes</u>: Q&A

### Demo flow

**Code search**

<u>Use case</u>: while implementing a new service, a developer uses Sourcegraph to find usage examples and re-usable code from the rest of the codebase.

- Starting from the Sourcegraph homepage, describe how engineers at Uber, Yelp, Lyft, Cloudflare, and more use Sourcegraph. Use the Sourcegraph Chrome extension to run a search using the `src` shortcut search engine.
- Describe how Sourcegraph helps users filter their searches and find the results they want. Use repository suggestions to filter results; use a `lang:` filter to scope results; exclude test files, and more.
- Share how to learn more via documentation and the different search modes.

**Code navigation**

<u>Use case</u>: navigating across and into code, and determining if usage examples you find are trustworthy (e.g. how recently has the code changed?; who edited it?; etc.).

- After clicking on a search result, using Sourcegraph for navigation is like using a fully configured IDE.
- Share hover tooltips, go to definition, and find references functionality, describing how it works cross-repository.
- Share Git blame overlays.

**Code review**

<u>Use case</u>: use Sourcegraph to provide more context during code review, and prevent bugs from ever being merged in the first place.

- Click into a Git blame commit message to show how Sourcegraph can provide code intelligence and navigation in a diff view.
- Click on the code host link in the top-right corner to visit the file on the code host, and if supported, show hover tooltips and code navigation functionality there.

**Other search types**

<u>Use cases</u>: incident response war rooms, tracking usage of an API/library, security and compliance, and more.

- After returning to Sourcegraph, illustrate how other search types (symbol search, commit search, and diff search) work.
- Walk through a few examples to show how Sourcegraph helps end users track usage of their APIs/libraries, how Sourcegraph can be used for incident response, and more.
- Add a saved search and describe how it can be used to keep track of code.

_Optional, if time allows_

**Extensions**

<u>Use case</u>: pull in more context (e.g. from internal or third-party tools) to your code

- Describe Sourcegraph’s extensibility philosophy (similar to an IDE).
- Using the Codecov extension, show how Sourcegraph can add critical context to code (including during code review).
- Share a link to the ["Authoring extensions" documentation page](https://docs.sourcegraph.com/extensions/authoring).

## Sourcegraph 102 (Becoming a Sourcegraph power user)

_Trainer_: Customer Engineer

_Time_: 45 minutes

### Agenda
<u>10 minutes</u>: introductions and a reminder of basic Sourcegraph workflows

<u>20 minutes</u>: Sourcegraph advanced features demo

<u>5–10 minutes</u>: internal company users share their experiences with Sourcegraph so far

<u>10–15 minutes</u>: Q&A

### Demo flow

_If not covered in the Sourcegraph 101 session_

**Extensions**
<u>Use case</u>: pull in more context (e.g. from internal or third-party tools) to your code.

- Describe Sourcegraph’s extensibility philosophy (similar to an IDE).
- Using the Codecov extension, show how Sourcegraph can add critical context to code (including during code review).
- Share a link to the ["Authoring extensions" documentation page](https://docs.sourcegraph.com/extensions/authoring).

**Structural search**
<u>Use case</u>: search for code structure matches, rather than string matches, to find more complex errors or issues in the code.

- Describe what structural search is, and show our documentation on it. Provide a link to our [blog post](https://about.sourcegraph.com/blog/going-beyond-regular-expressions-with-structural-code-search) describing some advanced use cases.
- Start with a simple query to show off searching for code blocks in our codebase (e.g. `if err != nil { :[_] } lang:go`). Highlight how structural search respects matching parentheses, curly braches, and similar.
- Share a more complex query across all code on Sourcegraph.com that can be used to find dangerous patterns or code smells (e.g. `try { :[_] } catch (:[_]) { } lang:java`, which will return Java try/catch blocks that don't handle exceptions).

**Code Insights**
<u>Use case</u>: reveal higher-level insights about your codebase, such as the progress of a migration from one library to another.

- First, enable code insights by being a member of the [Sourcegraph organization](https://sourcegraph.com/organizations/sourcegraph/members) on Sourcegraph.com.
- Enable search-insights and code-stats-insights extensions 
- Add code insights to your sourcegraph.com user settings:
        "codeInsights": true
    }```

- Visit the [github.com/sourcegraph/sourcegraph](https://sourcegraph.com/github.com/sourcegraph/sourcegraph) repository on Sourcegraph.com to show off a set of useful insights. Walk through use cases associated with each (e.g., tracking migrations, figuring out what technologies to invest in internally, measuring against goals for metrics like code coverage by team, etc.)

**Campaigns**
<u>Use case</u>: use Sourcegraph to find _and fix_ issues in your code. Automate, creat, and oversee large-scale code migrations from a single place.

- Describe campaigns, and visit the [Campaigns page on Sourcegraph.com](https://sourcegraph.com/campaigns) to recommend interested users view the introductory video (which describes how to create campaigns).
- Visit [https://k8s.sgdev.org/](https://k8s.sgdev.org/), and click on the **Campaigns** link to view existing demo campaigns.
- Visit one or two existing campaigns and talk through product capabilities.
- Focus on the value that comes from being able to manage such campaigns—stay on top of progress with the status and burndown chart, filter down to the repositories/PRs that haven't yet been merged so the manager knows who to follow up with, etc.

## Sourcegraph office hours

_Trainer_: Customer Engineer + Product Manager + Engineer

_Time_: 30 minutes

### Agenda
<u>5 minutes</u>: introductions (Customer Engineer).

<u>5–10 minutes</u>: product roadmap review (Product Manager).

<u>15–20 minutes</u>: open Q&A regarding product features, use cases, roadmap, and more.
