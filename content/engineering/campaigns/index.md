# Campaigns team

<img src="https://storage.googleapis.com/sourcegraph-assets/campaigneros.png"  align=right alt="Campaigñeros Logo">

## Vision

**Find code that needs to be changed and change it by running code**.

## Contact

- #campaigns-chat channel or @campaigns on Slack.
- [@sourcegraph/campaigns](https://github.com/orgs/sourcegraph/teams/campaigns) team or [team/campaigns label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fcampaigns+) on GitHub.

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

## Goals and priorities

See [Campaigns goals and priorities](goals.md)

## Analogies

Netlify and AWS Lambda solve difficult, repeatable problems for developers, removing overhead and enabling them to focus on the problems they are solving. In that regard, campaigns are to large-scale code changes what Netlify is to static site generation and AWS Lambda is to handling HTTP requests.

When I write an AWS Lambda function I want to focus on which requests it receives and what response to send out. I don't want to worry about which server to run it on, how to scale it, secure it, add logging, keep track of its usage.

When I deploy a static site on Netlify I want to focus on my site — its content and design — and not think about where it's deployed, how to get new SSL certificates, how to install dependencies to run the static site generator on a server, how to preview the site in a pull request.

When I create a campaign to make large-scale code changes I want to _focus on the specific change I want to make across all of the code at my organization_. I don't want to worry about all of the overhead associated with execution, code hosts, and management of all things listed above.

## Process

For each iteration (currently one month long), we follow this process:

* Before the iteration begins, we do pre-planning to make the most of our the planning meeting:
  * EM creates a [tracking issue](https://about.sourcegraph.com/handbook/engineering/tracking_issues) for the iteration which will hold our goals and plans, in addition to tracking the issues we intend to address. EM also creates the milestone for sprint N+1 and a `planned/CampaignsSprintN` label for things that didn't get finished in the previous sprint.
  * Everyone on the team looks through [our backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fcampaigns+milestone%3ABacklog) for any issues they think we should consider for the next sprint, and set the corresponding Campaigns Sprint milestone.
  * Everyone on the team looks through the current tracking issue for any issues they do not expect to finish by the end of the sprint (EOD Tuesday), and set the next sprint's milestone so they will show up on  the new tracking issue.
  * Engineers add estimates to issues in the new tracking issue if they are missing.
  * Everyone on the team reviews the roadmap doc and comments their thoughts. Replace estimate placeholders with your actual estimates (and a best-guess range is fine: "3-5d"). For any items without linked Github issues, please create those issues and link them.

* We then have our planning meeting to determine our common goals for the iteration.
  * First we verify that any unfinished items in the old sprint will be finished by EOD.
  * Next, we look at all of the items in the new sprint, to verify that these are our highest priority items that we definitely want to finish this sprint. (These tend to be smaller items, like bug fixes, or work carrying over from the previous sprint.)
  * Then we look at our roadmap doc to discuss comments people had, verify estimates, and ultimately to sort the items in terms of priority. *The goal is to have a freshly prioritized roadmap.*
  * Finally, we work down that list, adding the highest priority items to our tracking issue (creating issues if needed), assigning them to engineers until we are at capacity (leaving some slack in the sprint for customer support and other unexpected issues).

* Each day, Slack reminds us to do our stand-up, which consists of a *short* message (it shouldn't take longer than 30s to write) in the reminder's thread. As we are a globally distributed team, this can be a statement of intent for the day, or a recap of what we have finished that day.

* After sprint planning, the team has a retro to discuss how the previous sprint went, and what changes we might want to our working agreements.

## Working Agreements

* To avoid siloing of knowledge and to keep teammates happy, we make sure that everyone gets a chance to work in different areas of the codebase. In particular, we don't want tasks in area X to always default to person P.
* If a process isn't serving us, we are quick to shut it down.
* We do not schedule team meetings on Fridays. (Folks are free to pair on Fridays if they want.)

## Team Communication

Our team has two Slack channels, one public (#campaigns-chat) and one private (#campaigns-team). _Our default is to use the public channel._

The private channel is for communications that would be of no interest to someone not on the team. Things like (re-)scheduling of team meetings, vacation scheduling, reminders about tasks that need completing, etc. Keeping these out of the public channel raises the signal-to-noise ratio for folks interested in Campaigns, but not interested in who will be 10 minutes late to our sync meeting today due to the fact that their cat knocked over a jar of pickles and now there's glass everywhere and everything smells like vinegar and now you wish you hadn't read this sentence to the end.

## Stewardship of src-cli

The Campaigns team is the current owner of [src-cli](https://github.com/sourcegraph/src-cli), due to the fact that most of the src-cli work in recent months has been related to Campaigns. We do not expect to be the permanent owners of src-cli; when another team becomes the main contributor, we will transfer ownership to them.

## Members

- We're hiring a [Product Manager](../../product/roles/product_manager.md) for this role. [Rob Rhyne](../../../company/team/index.md#rob-rhyne) is involved in the meantime.
- [Chris Pine](../../../company/team/index.md#chris-pine-he-she-they-chris) ([Engineering Manager](../roles.md#engineering-manager))
  - [Thorsten Ball](../../../company/team/index.md#thorsten-ball-he-him)
  - [Adam Harvey](../../../company/team/index.md#adam-harvey-he-him)
  - [Erik Seliger](../../../company/team/index.md#erik-seliger)

## Related links

- [User-facing documentation](https://docs.sourcegraph.com/campaigns)
- [Developer documentation](https://docs.sourcegraph.com/dev/background-information/campaigns)

## Growth plan

_Updated 2020-11-18_

No open positions at this time, but we will probably be hiring soon.
