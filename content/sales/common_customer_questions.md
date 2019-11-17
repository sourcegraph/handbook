# Common questions from prospective customers

This page lists common questions we hear from prospective customers who are considering Sourcegraph.

Most questions include an example answer and explanation. The explanation is formatted as normal text, and the example answer is formatted in a blockquote:

> like this.

## How is Sourcegraph different from the built-in code search of our code host?

This somewhat depends on which code host they're using. Look up the [product comparison with their code host](../../workflow/index.md#other-tools) for details.

Generally, though, code hosts offer very basic code search functionality that isn't *actually* very useful for developers. If someone asks this question, they probably don't use code search very frequently, because if they did use their code host's code search, they would be familiar with its shortcomings. It is very, very rare that someone asking this question is an avid user of their code host's code search and wants to know the feature-by-feature comparison.

Here is a strategy for handling this question live (for simplicity, this assumes their code host is GitHub):

> Well, first, how often do you use GitHub code search? [Their response is almost always "a few times a week" or less.] Makes total sense. The most helpful way to think about the difference is that with really good code search, you'd actually use code search many times *per day*. Sourcegraph becomes the first place you go to answer questions and unblock yourself while coding. I'll send you the public stats and docs (and the [Yelp usage chart](https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html)) about code search usage inside our customers and Google and Facebook, which all have really good code search. We usually see around 10-20% of developers inside an organization immediately becoming daily code search users, and over the next few weeks or months as other developers get accustomed to it, that number grows to 60-90% of all developers.
>
> - [If they want more specific feature information, run through the [Sourcegraph tour](https://docs.sourcegraph.com/user/tour) and show them how Sourcegraph can answer questions that come up many times per day while coding.]
> - [If they want to see these usage claims backed up by data, walk through the materials you mentioned with them live.]

## Should I deploy using Docker or to a cluster?

> Start with the Docker quickstart (https://docs.sourcegraph.com/#quickstart) to try out Sourcegraph locally. When you're ready to deploy Sourcegraph for your organization, deploy using Docker (https://docs.sourcegraph.com/admin/install/docker) in most cases. The cluster deployment (https://docs.sourcegraph.com/admin/install/cluster) is easy to migrate to later for high scalability and high availability. Of course, if you just prefer deploying on Kubernetes, then starting with the cluster deployment is fine.

## Does Sourcegraph respect GitHub (or other code host) permissions?

> Yes, see repository permissions documentation (https://docs.sourcegraph.com/admin/repo/permissions).

## Needs answer

- What’s the recommended resource provisioning on our end for optimal search performance at scale?
- Can we use LDAP/AD to assign license keys?
- How can I make sure certain repositories are not indexed?
- How often does Sourcegraph index/update our repositories? Is it real-time?
- We have a ton of repositories. Will Sourcegraph put too much load on our Bitbucket Server/GitHub/etc. instance and take it down?
- Do you support non-git-based code hosts like Perforce/TFS2010? Are there any limitations with using Sourcegraph?
- Can Sourcegraph search across both a git-based code host and a non-git-based code host?
- Why do I need to use the Chrome extension?
- Do you have plans to update the Firefox browser extension for compatibility?
- Are there plans for a deeper integration with editors like IntelliJ or Visual Studio Code?
- What are the advantages of using Sourcegraph over running a script and searching with grep?
- How often would the average user use Sourcegraph? Do you have more IC devs or tech leads/management using Sourcegraph?
- What languages does Sourcegraph support with full semantic search / precise code intelligence?
- Does Sourcegraph support cross-repository code intelligence?
- Our Security team will likely have concerns about who will have access to our data when we clone our repos. Can you tell me how permissioning works and how to appease their concerns?
- If our developers have all of our code on their local machines, what advantages are there for using Sourcegraph?
- How does Sourcegraph rank search results?
- Can any user customize the search filters, or just our site admin?
- Do you support negative regex look arounds?
- Can Sourcegraph search within our code review comments?
- Does Sourcegraph have a Slack integration for notifications from Saved Searches?
- When should I expect Sourcegraph Automation to be available? Can I access the feature set today?
- Why is Sourcegraph more expensive than GitHub Enterprise / Stack Overflow / Slack / Asana / JIRA licenses?
- Can you break down your pricing fees for managed instances?
- Why should I pay for Sourcegraph and not just use a free/open-source self-hosted instance?
