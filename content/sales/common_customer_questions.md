# Common questions from prospective customers

This page lists common questions we hear from prospective customers who are considering Sourcegraph.

Most questions include an example answer and explanation. The explanation is formatted as normal text, and the example answer is formatted in a blockquote:

> like this.

## [What is Sourcegraph?](../marketing/messaging.md#sourcegraph-value-proposition)

See "[What is Sourcegraph?](../marketing/messaging.md#sourcegraph-value-proposition)".

## [What problems does Sourcegraph solve?](../marketing/messaging.md#what-problems-does-sourcegraph-solve)

See "[What problems does Sourcegraph solve?](../marketing/messaging.md#what-problems-does-sourcegraph-solve)".

## How is Sourcegraph different from the built-in code search of our code host?

This somewhat depends on which code host they're using. Look up the [product comparison with their code host](../../workflow/index.md#other-tools) for details.

Generally, though, code hosts offer very basic code search functionality that isn't *actually* very useful for developers. If someone asks this question, they probably don't use code search very frequently, because if they did use their code host's code search, they would be familiar with its shortcomings. It is very, very rare that someone asking this question is an avid user of their code host's code search and wants to know the feature-by-feature comparison.

Here is a strategy for handling this question live (for simplicity, this assumes their code host is GitHub):

> Well, first, how often do you use GitHub code search? [Their response is almost always "a few times a week" or less.] Makes total sense. The most helpful way to think about the difference is that with really good code search, you'd actually use code search many times *per day*. Sourcegraph becomes the first place you go to answer questions and unblock yourself while coding. I'll send you the public stats and docs (and the [Yelp usage chart](https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html)) about code search usage inside our customers and Google and Facebook, which all have really good code search. We usually see around 10-20% of developers inside an organization immediately becoming daily code search users, and over the next few weeks or months as other developers get accustomed to it, that number grows to 60-90% of all developers.
>
> - [If they want more specific feature information, run through the [Sourcegraph tour](https://docs.sourcegraph.com/getting-started/tour) and show them how Sourcegraph can answer questions that come up many times per day while coding.]
> - [If they want to see these usage claims backed up by data, walk through the materials you mentioned with them live.]

## Should I deploy using Docker or to a cluster?

> Start with the Docker quickstart (https://docs.sourcegraph.com/#quickstart) to try out Sourcegraph locally. When you're ready to deploy Sourcegraph for your organization, deploy using Docker (https://docs.sourcegraph.com/admin/install/docker) in most cases. The cluster deployment (https://docs.sourcegraph.com/admin/install/cluster) is easy to migrate to later for high scalability and high availability. Of course, if you just prefer deploying on Kubernetes, then starting with the cluster deployment is fine.

## Does Sourcegraph respect GitHub (or other code host) permissions?

> Yes, see repository permissions documentation (https://docs.sourcegraph.com/admin/repo/permissions).

## Why should I pay for Sourcegraph and not just use the open source version?

Here's a comprehensive answer that you can trim down based on the prospective customer's specific needs. It assumes that their developers are already using Sourcegraph internally because it's extremely rare that organizations begin by using the open source version (this question usually comes up at the end of a trial).

> You're using Sourcegraph to accelerate your organization's software development. Based on the usage levels and survey results you've shared with us, Sourcegraph is living up to that promise. That means your developers are frequently going to Sourcegraph to understand your organization's code, fix critical problems, and make large-scale refactors.
>
> In your Sourcegraph [trial/under-10-users free tier usage], you're already seeing the value of key paid features of Sourcegraph: [emphasize the points below that are relevant to the specific customer, and remove points that are irrelevant]
>
> - Code navigation (go-to-definition, find-references, and other features provided by [Sourcegraph extensions](https://docs.sourcegraph.com/extensions).
>   - Search is just the first step when your developers use Sourcegraph to answer important questions or solve problems. Once they find the code they're looking for, they usually need to know things such as "Where's this code being used?", "Who wrote this code and when was it changed?", "Where's this function defined?", "Is this function being called in production anymore, according to LightStep/Datadog/Sentry/etc. logs?", and so on. This is only possible on paid tiers.
>   - Code reviews are faster and more effective (catching more problems earlier) when your developers have go-to-definition and find-references available during code reviews (e.g., in GitHub pull requests with the [browser extension](https://docs.sourcegraph.com/integration/browser_extension) or using our native UI integrations for [GitLab](https://docs.sourcegraph.com/integration/gitlab) and [Bitbucket Server](https://docs.sourcegraph.com/integration/bitbucket_server#native-extension)).
> - Single sign-on (SSO) user authentication (see [docs](https://docs.sourcegraph.com/admin/auth)). This makes it so all of your developers can easily and securely access Sourcegraph with central account provisioning (e.g., ensuring you don't forget to deactivate someone's Sourcegraph account when they are no longer employed).
> - High-scale and high-availability cluster deployment (see [docs](https://docs.sourcegraph.com/admin/install/cluster)).
> - Technical support. Your developers already rely on Sourcegraph, and a day of reduced productivity if Sourcegraph goes down costs you far more than the price of the paid tiers.
> - Ease and security of official builds. If you run the open source version of Sourcegraph, you'll need to build the Docker images on your own, which requires writing and maintaining your own build scripts and tracking our release calendar. Using the official builds saves you the hassle and ensures you'll have regular updates available (and immediate updates when a critical security issue is discovered in Sourcegraph or any other related infrastructure, such as OpenSSL or PostgreSQL).

## How hard is it to set up and maintain Sourcegraph in my organization?

> You can [set up Sourcegraph](https://docs.sourcegraph.com/#quickstart) and see value in 5 minutes. Most of our customers tell us Sourcegraph is one of the easiest applications to maintain, but we're happy to give a more precise estimate of the burden if you help us understand the environment in which you intend to deploy Sourcegraph. As a specific data point, one of our large customers reported that maintaining Sourcegraph for 1,000+ daily users takes ~5% of a single person's time.

## How is Sourcegraph different from Kythe?

Kythe is a very low-level code intelligence system. It plays the same role as LSIF (which is what Sourcegraph uses instead of Kythe for code intelligence). Kythe is not a product that they can actually use. It doesn’t do code search, code browsing, code host integrations, campaigns, code insights, etc.

It's like saying instead of Salesforce CRM we will just use InsightSquared (actually Kythe is even lower-level than InsightSquared, but you get the idea).


## Is Sourcegraph a platform, tool, or application?

Usually this question means the person has the following concerns:

1. Is it hard to set up? Will it take a long time before we see value?
   - Connotation: A "platform" is hard to set up and requires a lot of coordination among teams and systems.)
1. Does it replace what I'm using today, or is it additive?
   - Connotation: An organization can only have a single "platform" for developers. Anything else must either integrate with their existing platform or replace it.
1. Does it do one thing well or many things poorly?
   - Connotation: A "tool" does one thing well. A common failure mode of "platforms" or "applications" (which do more things) is that they don't do anything particularly well.
1. Do people actually interact with it, or does it sit behind the scenes (like a backend database)?

Here is an answer that addresses all of these concerns. You can tailor it to address the person's specific concerns.

> [Sourcegraph is an application](../marketing/messaging.md#sourcegraph-is-an-a-application) that developers use primarily from their web browser for universal code search. It integrates with your existing repositories, code hosts, code review tools, editors, and other developer tools to give your developers a single place to discover and understand code and make large-scale changes. You can [set up Sourcegraph](https://docs.sourcegraph.com/#quickstart) and start seeing value in 5 minutes.

## What's the difference between Sourcegraph and Elasticsearch?

[Elastic](https://www.elastic.co/) is an enterprise software company that produces [Elasticsearch](https://www.elastic.co/elasticsearch), which is a low-level search engine that other applications can use to provide search functionality. Elasticsearch is not an end-user application; it must be integrated into another application. Because it has a generally good reputation for general-purpose search, many end-user applications that rely on Elasticsearch for search make that fact public (even though it's not necessary or common for applications to tell users all the other underlying technologies they use).

The built-in (non-universal) code search functionality of many code hosts (including GitHub, GitLab, and Bitbucket Server) uses Elasticsearch under the hood.

> Unlike Elasticsearch, Sourcegraph is a universal code search application that you can use directly. Sourcegraph connects directly to all of your code hosts, syncs and indexes repositories, and gives you an easy, powerful search and code navigation UI.
>
> Elasticsearch is not an end-user product. It's an underlying backend service that provides low-level indexing and query APIs to your own applications, but you need to build the UI, syncing, analysis, deployment, etc., yourself. It's also built for general purpose document search, not code search.
>
> We initially considered having Sourcegraph use Elasticsearch under the hood. But we decided to build our own search that is optimized for code, because code is a very special kind of data with meaningful structure, history, and (of course) punctuation and special characters that Elasticsearch was not built to handle.

## Can users sign in via LDAP?

> Usually companies with LDAP have Okta, OneLogin, or some other SSO and prefer sign-in through that, using our [user authentication support](https://docs.sourcegraph.com/admin/auth). If someone insists on LDAP, you can point them to [@beyang's comment on issue #618](https://github.com/sourcegraph/sourcegraph/issues/618#issuecomment-438778854) or ask them those questions directly.

## Is Sourcegraph still helpful if my company uses microservices?

(Rough answer copied from Slack.)

> That is a fairly common objection. In theory, yes, microservices mean you never need to care about other people’s code. You just expect them to declare an API, and you rely on that API. In practice, that is almost never the case. The monolith-to-microservices transition is always in flux, your microservice ends up depending on other codebases in messy ways, or you realize you need to combine multiple microservices again or further decompose a single microservice into multiple microservices. We have tons of customers who use microservices who would be puzzled by someone who said microservices means you don’t need Sourcegraph. With this said, it’s a tough objection to overcome unless we have a champion inside the company. If we encounter that objection when going outbound or top-down into a company, it’s probably fatal until we can get in another way.

> Analogy: It’s kind of like the Coasean theory of the firm. In theory, a “company” could just be a bunch of independent contractors (equiv. to microservices in this analogy), but coordination and transaction costs are so high in that model, so you always find that companies are some mix of employees and contractors. And you also see companies moving around on the spectrum when some new management team or philosophy takes hold (eg Boeing 787).

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
- When should I expect Sourcegraph code change management campaigns to be available? Can I access the feature set today?
- Why is Sourcegraph more expensive than GitHub Enterprise / Stack Overflow / Slack / Asana / JIRA licenses?
- Can you break down your pricing fees for managed instances?
