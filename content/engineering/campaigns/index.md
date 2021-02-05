# Campaigns team

<img src="https://storage.googleapis.com/sourcegraph-assets/campaigneros.png"  align=right alt="Campaigñeros Logo">

## Vision

**Find code that needs to be changed and change it at scale by running code.**

This is the inspirational end game state for campaigns in 3 years:

- **Code invariants** - Describe a code pattern once, and campaigns will fix it everywhere, automatically, forever, thanks to its declarative model.
- **Continuous maintenance** - Instead of deferring codebase maintenance to large, painful, and risky changes, campaigns let developers introduce changes incrementally and in a safe and automated way. Much like CI/CD increased efficiency and reduced risk through small deployments, campaigns let developers make incremental codebase-wide changes.
- **In-editor and instant feedback** - Developers don’t leave the editor to create or be notified of changesets. Repository owners can discover and apply great code patterns faster.
- **Universal campaigns** - Make changes to public and private code. Open source projects can provide campaign specs so that their dependents can seamlessly upgrade. Campaigns ease upgrading in private and on-premise environments.

## Contact

- #campaigns-chat channel or @campaigns on Slack.
- [@sourcegraph/campaigns](https://github.com/orgs/sourcegraph/teams/campaigns) team or [team/campaigns label](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aissue+is%3Aopen+label%3Ateam%2Fcampaigns+) on GitHub.

## Mission

Users can focus on changing their code because campaigns provide the plumbing:

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

* We prioritize our work in [this project](https://github.com/orgs/sourcegraph/projects/119). It is the responsibility of the PM and EM to keep this updated and correct.

* Each day, Slack reminds us to do our text check-in, which consists of a *short* message (it shouldn't take longer than a minute to write) in the reminder's thread. This should be a recap of what we have finished that day.

* Each week, at 23:30 UTC on Thursdays, Slack reminds us to post our plans for the next week. This should consist of a short message (about a paragraph) in the reminder's thread covering our plans, and anything that they accomplished in the previous week that wasn't captured in their daily status updates. The PM then rolls this up into a status update that is emailed to engineering leadership.
  * Since most of the "what we accomplished" details have already been recorded in the daily Slack check-ins, it is not necessary for engineers to repeat any of those items. The status update could still include any additional info or color that the engineer wishes to record (if any), but would primarily be forward-looking.
  * Responses should be posted when each of us are next working; people in incompatible time zones do not need to get up in the middle of the night to do this immediately!

* One Big Thing: Each sprint, each engineer gets one big thing to work on — one significant chunk of work scoped to be doable in a single sprint (leaving some slack in the sprint for customer support and other unexpected issues). When it is completed, engineers will pull P0 items from [our planning project](https://github.com/orgs/sourcegraph/projects/119) into the current sprint to work on (or P1 if there are no P0s).

* Invariants and assumptions:
  * Issues have the current milestone set if-and-only-if they are P0.
  * An issue assigned to an engineer means that engineer is committing to finishing *in the current sprint*. Issues should be unassigned by default.

### Sprint planning

Our two-week sprints start every other Wednesday. We follow this process:

* Before the iteration begins, we do pre-planning to make the most of our the planning meeting:
  * EM creates a [tracking issue](https://about.sourcegraph.com/handbook/engineering/tracking_issues) for the iteration which will track our progress through the iteration. EM also creates the milestone for sprint N+1 and a `planned/CampaignsSprintN` label for things that didn't get finished in the previous sprint.
  * Everyone on the team looks through [our backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fcampaigns+milestone%3ABacklog) for any issues they think we should consider for the next sprint. To to so, add the issue to the "Needs prioritization" column of [our planning project](https://github.com/orgs/sourcegraph/projects/119).
  * Everyone on the team looks through the current tracking issue for any issues they do not expect to finish by the end of the sprint (EOD Tuesday), and set the next sprint's milestone so they will show up on the new tracking issue. (Feel free to un-assign these if you wish.) Make sure to set the relevant `planned` label on issues that move to the next sprint, for tracking and accountability.
  * Engineers add/refine estimates to issues in the new tracking issue and the planning project. All estimates in GitHub are assumed to be upper-bound estimates. (A missing estimate means "between 1 second and 1 trillion years.")
  * Everyone on the team reviews our [roadmap in Productboard](https://sourcegraph.productboard.com/roadmap/2263724-campaigns-releases) for the current/next release.

* We then have our planning meeting to determine our common goals for the iteration.
  * First we verify that any unfinished items in the old sprint will be finished by EOD.
  * Next, we look at all of the items in the new sprint, to verify that these are our highest priority items that we definitely want to finish this sprint. (These tend to be smaller items, like bug fixes, or work carrying over from the previous sprint.) These should all be prioritized as P0s in the planning project. (If they are not P0s, then we remove the milestone and assing the correct priority.)
  * Then we look at our [roadmap in Productboard](https://sourcegraph.productboard.com/roadmap/2263724-campaigns-releases) to align on priorities and verify estimates. *The goal is to have a freshly prioritized roadmap.*
  * We work as a team to assign One Big Thing to each engineer.
  * Finally, we verify that the sum of the estimates of our P0 column is does not exceed 2 days per engineer. In other words:
     * `issues.filter(p0).map(estimate).sum <= (num_engineers * 2).days`

* After sprint planning, the team has a retro to discuss how the previous sprint went, and what changes we might want to our working agreements.

## Working Agreements

* To avoid siloing of knowledge and to keep teammates happy, we make sure that everyone gets a chance to work in different areas of the codebase. In particular, we don't want tasks in area X to always default to person P.
* We do not schedule team meetings on Fridays. (Folks are free to pair on Fridays if they want.)
* We do not scramble to get last-minute changes in before branch-cut. (If it's a blocking issue, there's [a process for that](https://about.sourcegraph.com/handbook/engineering/releases#issues).)
* If there is no agenda in our sync doc for our Wednesday and Thursday syncs by 5 minutes before the meeting starts, the meeting is automatically cancelled.
* If a process isn't serving us, we are quick to shut it down.

## Team Communication

Our team has two Slack channels, one public (#campaigns-chat) and one private (#campaigns-team). _Our default is to use the public channel._

The private channel is for communications that would be of no interest to someone not on the team. Things like (re-)scheduling of team meetings, vacation scheduling, reminders about tasks that need completing, etc. Keeping these out of the public channel raises the signal-to-noise ratio for folks interested in Campaigns, but not interested in who will be 10 minutes late to our sync meeting today due to the fact that their cat knocked over a jar of pickles and now there's glass everywhere and everything smells like vinegar and now you wish you hadn't read this sentence to the end.

## Stewardship of src-cli

The Campaigns team is the current owner of [src-cli](https://github.com/sourcegraph/src-cli), due to the fact that most of the src-cli work in recent months has been related to Campaigns. We do not expect to be the permanent owners of src-cli; when another team becomes the main contributor, we will transfer ownership to them.

## Members

- [Malo Marrec](../../../company/team/index.md#malo-marrec-he-him) Product Manager (onboarding)
- [Rob Rhyne](../../../company/team/index.md#rob-rhyne) [Product Designer](../../product/roles/product_designer.md)
- [Chris Pine](../../../company/team/index.md#chris-pine-he-she-they-chris) ([Engineering Manager](../roles.md#engineering-manager)) {#campaigns-eng}
  - [Thorsten Ball](../../../company/team/index.md#thorsten-ball-he-him)
  - [Adam Harvey](../../../company/team/index.md#adam-harvey-he-him)
  - [Erik Seliger](../../../company/team/index.md#erik-seliger)j
  - FQ1 [full-stack engineer](https://jobs.lever.co/sourcegraph/886e4343-6efc-4ab1-b204-f9115cfdeae3)
  - FQ2 engineer
  - FQ3/4 TBD

## Related links

- [User-facing documentation](https://docs.sourcegraph.com/campaigns)
- [Developer documentation](https://docs.sourcegraph.com/dev/background-information/campaigns)
- [Onboarding](onboarding.md)
- [Supporting Campaigns](supporting-campaigns.md)
- [Campaign's Drive Folder (private)](https://drive.google.com/drive/u/0/folders/18Sa_NpsVRvVV8MIvuXyoDEinpEf8fbGn)
- [Campaign's Product Marketing Brief](https://docs.google.com/document/d/1yQpCKF50gx8_T-KDnU4s9TjW6fZpMUfWLF2h4xSM8jk)
## Growth plan

_Updated 2020-12-09_

We are looking for a [full-stack or frontend engineer](https://jobs.lever.co/sourcegraph/886e4343-6efc-4ab1-b204-f9115cfdeae3) to join our team!
