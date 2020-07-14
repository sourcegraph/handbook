# Campaigns team

User-facing documentation: https://docs.sourcegraph.com/user/campaigns

Developer documentation: https://docs.sourcegraph.com/dev/campaigns_development

### New, work-in-progress UX

We're working on a new flow and a new way for people to create campaigns based on the beta feedback. See [#10921](https://github.com/sourcegraph/sourcegraph/pull/10921) and the following new doc pages (which are "pre-written" prior to being implemented to get us all on the same page about the changes we'll be making):

- [Campaigns main doc page](https://docs.sourcegraph.com/@campaigns-new-flow/user/campaigns)
- [Hello World Campaign guide](https://docs.sourcegraph.com/@campaigns-new-flow/user/campaigns/hello_world_campaign)
- [Campaigns design doc](https://docs.sourcegraph.com/@campaigns-new-flow/dev/campaigns_design)

## Vision

**Find code that needs to be changed and change it by running code**.

## Mission

Users can focus on changing their code because campaigns provides the plumbing:

* Finding the correct repositories in which to run code
* Fetching the newest version of each repository
* Running code in each repository
* Turn the result into patches
* Create pull requests from patches
* Draft, keep track of and update a large number of pull requests
* Re-running code when the base branch changes

Users provide the code to make the change, we provide the plumbing to turn it into a large-scale change and monitor its progress.

* We take care of all the bits and pieces that would rob users of their time and that are not essential to the change they want to make.
* We don't try to come up with fancy and seemingly magic ways of changing code (i.e. high-level tools to refactor code) before we get the fundamentals right (running users' code in thousands of repositories and turning that into thousands of pull requests).
* We don't interfere with the code that produces a change. We provide the infrastructure to run it across all of your repositories and turn it into a large-scale code change.

## Analogies

Netlify and AWS Lambda solve difficult, repeatable problems for developers, removing overhead and enabling them to focus on the problems they are solving. In that regard, campaigns are to large-scale code changes what Netlify is to static site generation and AWS Lambda is to handling HTTP requests.

When I write an AWS Lambda function I want to focus on which requests it receives and what response to send out. I don't want to worry about which server to run it on, how to scale it, secure it, add logging, keep track of its usage.

When I deploy a static site on Netlify I want to focus on my site — its content and design — and not think about where it's deployed, how to get new SSL certificates, how to install dependencies to run the static site generator on a server, how to preview the site in a pull request.

When I create a campaign to make large-scale code changes I want to _focus on the specific change I want to make across all of the code at my organization_. I don't want to worry about all of the overhead associated with execution, code hosts, and management of all things listed above.

## Members

- [C. P.](../../../company/team/index.md#todo) ([engineering manager](../roles.md#engineering-manager)) starting 2020-08-03.
- [Thorsten Ball](../../../company/team/index.md#thorsten-ball-he-him) ([project lead](../roles.md#project-lead))
- [Adam Harvey](../../../company/team/index.md#adam-harvey-he-him)
- [Erik Seliger](../../../company/team/index.md#erik-seliger)

## Hiring status

_Updated 2020-07-13_

We are hiring for these roles:

- +1 [Software Engineer - Frontend](https://github.com/sourcegraph/careers/blob/master/job-descriptions/software-engineer-frontend.md)
