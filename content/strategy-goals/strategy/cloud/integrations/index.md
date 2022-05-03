# Integrations Team Strategy

Quick links:

- [Integrations Backlog](https://github.com/orgs/sourcegraph/projects/213/views/26)

## Vision

Sourcegraph provides value anywhere that someone reads or writes code.

## Where we are now

### Our products

#### Browser extensions

First released in 2016, the[ Browser Extension](https://about.sourcegraph.com/blog/browse-review-code-on-github-like-in-an-ide-with-the-sourcegraph-chrome-extension/) is the oldest product in the Integrations ecosystem of products. The mission of the Browser Extension is to bring the value of Sourcegraph to code hosts.

Browser extensions offer code intelligence features, providing information and actions when you hover your mouse over code in files, diffs, pull requests. They also bring further information to the code host by displaying data provided via Sourcegraph extensions (e.g. code coverage information).

All recent work in our Browser extensions has been to ensure stability, test coverage and bug fixes.

#### IDE extensions

The initial release of our IDE extensions was mid 2017 and included Sublime Text, JetBrains and Atom (VS Code was introduced in 2018). Most of these integrations were basic in functionality and allowed you to:

- Open a file in Sourcegraph
- Search text selection in Sourcegraph
- Copy link to line in Sourcegraph

On Jan 2022, we released a major revamp of our VS Code integration that included far more functionality including:

- Integrated Sourcegraph search
- Open a file from search in your IDE
- Access to saved searches, recent files and repositories

At the time of writing this document we’re also looking to create a similar extension for the JetBrains family of IDEs.

#### Sourcegraph extensions

Sourcegraph extensions originated in an October 2018 hackathon. They were rapidly used to build things like our Codecov integration, and some core features of Sourcegraph were ported from our main codebase to this new platform: git-extras (providing our inline blame feature) and code intel extensions.

Sourcegraph extensions provide additional functionality to the Sourcegraph website or code hosts if you have the browser extension installed. These cover both integrations with third party tools (e.g. Codecov, Datadog, Sentry etc.) as well as other tools (e.g. search export, open in editor etc.). We also provide both a public extensions registry and the ability to create your own registry for discovering and installing extensions. At present anyone can create an extension on our public extension registry.

After the release of the Datadog integration (Feb 2022), we’ve seen increasing interest in integrating with more third party tools.

## Strategy and Plans for FY’23

### **Themes**

#### Double down on integrations

In the long term we want to position Sourcegraph as the authoritative source for information relating to code. In order to achieve this we need to provide a platform that our customers trust and provides compounding value with each tool you integrate.

Integrations align directly with our FY’23 strategy as some of our use cases require information from other tools (e.g. Managing security vulnerabilities). Integrations can also provide additional value to our existing features (e.g. Code Insights aggregating third party data with code search data).

Integrations can also increase our addressable market by providing value for roles we don’t normally support. This could work in two ways, combining code with other third party data they typically use (e.g. Mapping code to infrastructure for SREs) or bringing visibility of Sourcegraph functionality to tools that other roles use (e.g. linking Sourcegraph notebooks in a Jira ticket for Product Managers). This aligns with early signals from our tech partners who are looking to expand their solutions beyond their current target market to developers.

#### Focus on bringing a great Sourcegraph search experience to more IDE users

Right now, we see a polar distribution of usage with Sourcegraph, our power users use us multiple times per week, but the majority only occasionally. We believe that part of the key of converting occasional users to frequent users is to become embedded in a developers workflow and providing our functionality into IDEs is the best way to do that.

To achieve this, we will focus on building highly native integrations for VS Code and JetBrains IDEs that minimize context switching and focus on developer flow. As our goal is building a habit of using Sourcegraph in the IDE, we want to ensure core use cases are well adopted before expanding our functionality. Consequently we’ll initially focus on the Code Reuse and Developer Onboarding use cases before expanding to others later.

We also believe that we can greatly improve the adoption of our IDE extensions by focusing on the management and rollout of extensions at scale. Often enterprises have supported IDEs, IDE extensions, or tooling for particular IDEs. If we can become a standard approved extension for IDEs at large companies, we can greatly increase our reach inside of them. To achieve this we’ll focus on making it easier to automatically configure and authenticate our extensions for private instances.

#### Use Browser Extensions as a funnel for advanced functionality

When launched, our Browser Extensions provided much needed code intelligence functionality into code hosts, however, this is now implemented natively (either directly in the case of GitHub, or indirectly through Web IDEs).

Adding functionality via Browser Extensions is expensive and brittle due to the fact we don’t own the underlying platform and we anticipate this will get worse as browsers become further locked down. Despite the difficulties, we do have a competitive advantage that we can provide the same functionality across different code hosts, providing a consistent experience for our customers.

Because of the complexities of adding functionality directly into code hosts, we believe the best course of action is to continue to solve our core use cases (Code Reuse and Developer Onboarding) via Browser Extensions but redirect users to our web app for more advanced functionality. This approach has worked well with “Find References” and we believe we can continue to use it for other features.

### **What's next and why**

#### Q2

We have two major themes for Q2:

1. Increase the usage of Sourcegraph within IDEs
2. Determine long term direction for Sourcegraph extensions

##### Increase the usage of Sourcegraph within IDEs

We believe that we can improve our IDE extensions are a great way of getting Sourcegraph adopted into a developers workflow, driving engagement. We want to continue the momentum we generated in Q1 with the VS Code launch by continuing to invest here. We will focus on two major streams of work:

1. [JetBrains IDE extension](https://github.com/sourcegraph/sourcegraph/issues/31465) - to increase total market of IDE users
2. [Improve VSCode recurring usage](https://github.com/sourcegraph/sourcegraph/issues/34346) - identify pain points with the current extension to increase engagement.

We’ve decided to do these two streams simultaneously so that we can take any learnings from VS Code usage and apply it to our JetBrains IDE extension.

**Determine long term direction for Sourcegraph extensions**

At the moment it’s not clear to us or our customers what Sourcegraph extensions should be used for. Because of this we haven’t been able to set clear expectations around what we are or aren’t building and any long term direction. We want to use this quarter to better understand:

- What are the key pain points for our customers that extensions could solve?
- What are the key integrations that customers would like to see?
- What do we have to add to our platform to support this?

As this is quite discovery heavy we will also address common pain points with the current extensions to ensure that they are [enterprise friendly](https://github.com/sourcegraph/sourcegraph/issues/34347).

Check out our roadmap [here](https://github.com/orgs/sourcegraph/projects/214/views/21)

### **What we're not working on & why**

- Adding native search in code hosts
- Supporting community developed extensions
