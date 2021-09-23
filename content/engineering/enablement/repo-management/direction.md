# Repo Management Direction

This page outlines the vision, strategy, and goals of the [Repository Management team](index.md).

## Mission & Vision

### Mission

Our mission is to maintain and evolve the methods by which code is pulled into Sourcegraph from code hosts, in a way that supports all required functionality while maximizing performance, reliability, and ease of use.

We also have temporary custody of Authentication, with the aspiration being to split the team to give auth a dedicated team to own it. As a result, unless otherwise specified, the rest of this page relates to Repo Management and code host work.

### Vision

#### 1 Year vision

Sourcegraph provides the means to simply, easily, and reliably connect to all common code management systems, allowing you to use any of Sourcegraph’s brilliant functionality with any of your code, regardless of its storage system. Our support of different code hosts scales to the biggest companies with minimal customizations.

Sourcegraph’s own engineers are able to interact with the components that facilitate access to code in a consistent and simple way, enabling new functionality to be built to support all code management systems with little-to-no customization.

#### 3 Year vision

Sourcegraph is easily set up to access any code management system, regardless of type. Sourcegraph functionality works with any code, from anywhere.

#### 10 year vision

> A sentence or two on your ten year vision is where you can really go wild and describe the problems you want to solve and solutions you want to deliver unbound by limitations of technology or scope. Be inspiring and look to the our 10 and 30 year strategies for ideas.

### Guiding principles

- We aim to provide consistent support for the code hosts we support
- We cannot cater to every customer’s wants and needs, and trying to would undermine our ability to serve all of Sourcegraph’s current and future customers
- As a result, we prioritize work that will best support that majority (current and future), sometimes compromising what we can offer to individual customers whose needs are not aligned with our strategic decisions
- Our work underpins almost every feature Sourcegraph offers, and so our work is of value to all users of Sourcegraph
- More directly our work is utilized by any user setting up code host connections - this can be any kind of Sourcegraph user, ranging from IC developers to central administrators (often called “site admins”)
- Many customers will utilize more than one code management system and so oftentimes have more than one code host to set Sourcegraph up with
- Customers do not want to have to take code host differences into account, so we aim to make the setup, management, and capabilities of our code host support consistent, despite the technical differences between them
- We aim to ensure our setup of code hosts is simple enough for any engineer but also ensure that we provide documentation that is sufficiently clear that any user could follow it to set up code hosts
- Many customers have a large number of repos and a number of large repos, and so performance, scalability, reliability, and resilience are as important as the ease of setup
- We also serve the rest of the Sourcegraph engineering team, who use the code host connections and replicated code to provide their own functionality
- As a result, we aim to make sure that the support of code hosts is as consistent as the different code hosts allow in terms of facilitating the functionality Sourcegraph offers

## Where we are now

> - Where is the team's area of ownership in terms of its maturity? Is it new and basic, or complete and lovable? Are different features at different levels?
> - What did we achieve in the last few months?
> - What key learnings did we recently make?
> - What is on the critical path for growth?
> - How does the product fit within Sourcegraph as a whole?

### Top customer, support, sales and marketing issues

> ⚠️ Please see below in [Strategy and plans](#strategy-and-plans) for more information on which problems are actually in scope of the team.

- Monorepo support
  - **Problem:** A major priority is to start supporting repositories that are massive in scale. Today, this does not work simply because the machines take too long to process unindexed searches, even with a MASSIVE machine.
- Phabricator support
  - **Problem:** Phabricator support within Sourcegraph was never properly implemented, resulting in limited support.
- Bitbucket Cloud permission syncing
  - **Problem:** Atlassian are ending support for BitBucket Server and staring moving all customers to the Cloud. But Sourcegraph doesn't currently support native permission syncing for BitBucket Cloud.
-

### Competitive landscape

> - Who is the competition for this product area?
> - What recent developments in competition is impacting sales, marketing and product strategy?

### Analyst landscape

> - If you are not currently involved with analyst discussions for your product area, you can reach out to Christine for context here and to stay in the loop in the future.
> - Are there analysts tracking this product area?
> - How are analysts positioning the product? What are areas of improvement?

## Strategy and plans

### Goals

🎯 Goal 1

🎯 Goal 2

🎯 Goal 3

### Themes

### What's next and why

> More detailed plans related back to the themes and goals. If your time frame covers more than a quarter, it would be valuable to give some indication of time within the plans in this section, to help others appreciate the likely ETA of value.

### What we're not working on

> What are we explicitly not working on? Are there frequent requests from customers or other teams we are choosing not to take on? Making that explicit makes other teams understand the strategy and reduces back and forth.<br>If there is a time component (e.g. “We’re not working on this this Q but likely to pick it up next Q”), call it out.
