# Campaigns goals and priorities

## Goals

### Build a base of three customers who regularly use campaigns

We want to get a solid set of customers who regularly use and rely on campaigns. “Regularly” means at least one campaign per month.

What will get us there?

- **Smoother on-ramp:** Internal testing has revealed that using campaigns for the first time is not as easy as it could be. A frictionless initial experience is critical to adoption and a delightful user experience.
- **Better debugging experience:** It can be challenging to debug a more complex campaign. Figuring out what went wrong and how to fix it is a slow iterative loop.
- **User validation:** The above issues were revealed by user testing. Once we believe we have fixed them, we need to validate this with further user testing.

### Grow adoption of campaigns

Once we’re out of beta, we want everyone to start using campaigns!

We need to follow-up with customers who are already using campaigns to make sure that we’re taking their input into consideration when prioritizing new features.

We need to make it as easy as possible for new customers to try out campaigns:

- **Even smoother on-ramp:** Minimize the number of steps it takes a user to go from “found Campaigns in the Sourcegraph menu” to “has created a pull request, making a meaningful change”.
- **Easy to try:** Allow users to run campaigns on sourcegraph.com to try them out (requires user-specific tokens).
- **Examples:** Document as many meaningful example campaigns as possible.
- **More examples:** Provide ready-to-go campaign specs that users can easily run.

[Looker dashboard with usage metrics (internal only)](https://sourcegraph.looker.com/dashboards/136)

### Make it easier for customers to change the code they want to change in their preferred way

As we learn how people use Campaigns, we also need to focus on _how they wish they could use_ Campaigns.

For example, Campaigns run on _repositories_ vs. on specific search results. When running a campaign, the code that’s being run to change code doesn’t have access to the specific search results (i.e. file + line number), only to the repository. That makes it hard to make really granular changes based on search results. (A possible solution would be a more refined interface between search results and user-supplied code. For example: we could pass lines of _<filename>:<lineno>_ on stdin to each command that’s executed in a repository.)

Another example: in some cases, it’s cumbersome to first search code in the browser and then have to copy the query to a campaign-spec file and run the campaign. (A possible solution would be an implementation of the prototype that generates patches in the browser.)

### Perform actions beyond creating/merging changesets

Our users use more than just their code host and Sourcegraph. They use ticket trackers, review systems, and time trackers.

We want to discover what external systems our users want to use campaigns with, and ensure that we can integrate with them. For example, an organization that uses JIRA will likely want to be able to link tickets to campaigns and have the state updated as the campaign is executed.

## Roadmap

1. **Customer outreach to improve adoption of campaigns**
1. User credentials ([RFC 242](https://docs.google.com/document/d/1SqoWWm1xs82QibrWwYsXmpmgweN6EpcKt1qXrRBjjlU/edit)), which will allow non-site-admins to create campaigns
1. Better burndown charts
1. Versioning/releasing of src-cli with respect to sg/sg
1. Improved documentation of src-cli login process
1. Add filtering/searching to campaign and changeset lists
1. Ability to auto-merge changesets, depending on various conditions
1. Ability to add default reviewers to changesets

### Roadmap Process

Our roadmapping process is a team effort. As we receive customer feedback, and as we come up with cool new features, we record these in one of three places. Customer feedback goes into our [team Productboard page](https://sourcegraph.productboard.com/feature-board/2104383-campaigns). Well-defined tasks live in our [team backlog](https://github.com/sourcegraph/sourcegraph/issues?q=is%3Aopen+is%3Aissue+label%3Ateam%2Fcampaigns+milestone%3ABacklog). And larger, less defined ideas live in the bottom section of our [private roadmap doc](https://docs.google.com/document/d/1zRTfK6mENKicfLwDaWgLk1dBvQVKDg-J7pwjGg8tpps/edit#), below the _fog of war_ line.

It is the job of the EM and PM to pull/formulate/define tasks from the above sources and prioritize them. That prioritized list is under the [Future heading](https://docs.google.com/document/d/1zRTfK6mENKicfLwDaWgLk1dBvQVKDg-J7pwjGg8tpps/edit#heading=h.jk3gp8lyopke) of our roadmap doc.

For our sprint planning, the team looks over the prioritized list, revises estimates on work needed, and agrees on these priorities. Once we are aligned, we pull as much as will comfortably fit into the next sprint, creating GitHub issues as needed, and track those in that sprint's tracking issue.
