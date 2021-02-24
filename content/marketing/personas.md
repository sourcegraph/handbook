# Personas

A persona is a set of people who share common problems and other traits. Instead of writing a blog post for a single specific person, or building a feature for a single specific person, we target broad sets of people ("personas") that we name and define here.

For general information about personas, see "[Personas for Product Management](https://svpg.com/personas-for-product-management/)".

## Dev Tools Leader

The person who is in charge of the development experience, tooling decisions, and tooling budget for the organization.

Our [Customers page](https://about.sourcegraph.com/customers) is written for this persona.

### Job titles

Engineering Manager for:

- Developer Infrastructure
- Developer Productivity (sometimes "dev prod")
- Developer Tools (or "Tooling")
- Shared Engineering Services
- Engineering Velocity
- Engineering Effectiveness
- Developer Experience
- Development Standards
- Developer Platform

### Responsibilities

- Help the entire organization deliver high-quality software quickly
- Increase developer productivity
- Maintain and improve the development process and tooling

### Problems

- This persona's decisions affect every dev and dev team, and those people can be very particular about their current workflow and very vocal.
- The decisions also require the cooperation of every other dev. Devs, unlike many other roles, often have much greater (informal) freedom to refuse to go along with a new centralized process. ("Herding cats.")
- Organizations often have (multiple) large, organization-wide changes to dev practices and code going on at once. Many of these fall to this persona to execute. Examples: monolith-to-microservices, using a new programming language, implementing new requirements like internationalization.
- This persona needs to deal with a ton of existing (often legacy) tools, including internal tools built by developers a long time ago that run an important process but are not owned by anyone anymore.

### What success looks like

- Providing a widely used code search solution that meets the needs of the engineering team with low cost and maintenance burden
- Providing the best tools, recruiting, and keeping up with Google/FB/etc.

### What failure looks like

- The developers don't end up using code search
- I can't demonstrate the benefits of code search to developers or to my manager

### Common objections

- I'm not confident my developers would use this
- I don't see direct/immediate business value here (beyond the potential for devs to enjoy using it)

### Examples

- https://app.hubspot.com/contacts/2762526/contact/13899851/
- https://app.hubspot.com/contacts/2762526/contact/11876251/
- https://app.hubspot.com/contacts/2762526/contact/16023320/
- https://app.hubspot.com/contacts/2762526/contact/15971251/
- https://app.hubspot.com/contacts/2762526/contact/13517551/

## Software Engineer

This is the most common and general persona we encounter. Software engineers make up the bulk of Sourcegraph users in most of our customers. They're often the first to set up Sourcegraph inside their organization, and they make great champions.

### Job titles

- Software Engineer
- Software Developer

Notes:

- Sometimes these titles are prefixed with terms like Senior/Junior/Staff/Principal to indicate seniority.
- Sometimes the title includes a specifier like Frontend/Backend/Mobile/Web/etc. Unless the specifier has its own persona on this page, it falls under this persona.
- "Software Engineer" and "Software Developer" mean exactly the same thing. Unlike with many other terms and titles, there is not even a subtle difference in connotation that I (@sqs) am aware of.

### Responsibilities

- Read and review code (and need to understand existing code)
- Refactor code
- Write new code
- Fix bugs

### Problems

Usually, by the time we're speaking with this persona, they've already decided they want/need "code search." That is, they've already made the jump from the original problem they have to their desired solution (code search), so their sentiment is one of the following:

- I personally feel we need code search for my company's code
- I personally want code search here
- I want what I had at (Google/Facebook/my previous company that had code search)

It's rare we speak with this persona in the earlier stage where they've realized the problem but haven't decided they need code search. Here's a sampling of these problems:

- I spend a lot of time blocked, waiting for other people to answer my question about how something works in our code
- It takes a long time for other people to review my code
- I'm looking for something specific but don't know which repository to look in

### What success looks like

- Sourcegraph is deployed and proven working on their code and at their scale
- Their company decides to adopt Sourcegraph and many developers use it

### What failure looks like

- Sourcegraph does not work and wastes their time setting it up
- They fail to get others to use Sourcegraph
- They get in trouble for setting up a paid product or one that legal/security hasn't vetted

### Common objections

- I and/or my team needs code search, but the rest of my organization doesn't need it
- I don't know how to spread it to the rest of my company
- I'm worried that I'll get in trouble for getting people hooked on a product that ends up costing money or that legal/security hasn't vetted

### Personally rewarded by

- Writing better code
- Maintaining and fixing existing code
- Enabling developers to answer their own questions
- Enabling others to build and use APIs the right way

### Examples

- https://app.hubspot.com/contacts/2762526/contact/1909869/
- https://app.hubspot.com/contacts/2762526/contact/16012101/
- https://app.hubspot.com/contacts/2762526/contact/15757651/
- https://app.hubspot.com/contacts/2762526/contact/15755551/
- https://app.hubspot.com/contacts/2762526/contact/10414951/
- https://app.hubspot.com/contacts/2762526/contact/11545601/
- https://app.hubspot.com/contacts/2762526/contact/13456355/
- https://app.hubspot.com/contacts/2762526/contact/15873101/

## Software Engineer (DevOps/SRE)

> This persona is a subset of the [Software Engineer persona](#software-engineer), and most aspects of that persona also apply here.

DevOps and SRE (Site Reliability Engineer) are 2 different roles, but we combine them here because the way they use Sourcegraph is similar.

DevOps: An engineer who is responsible for coding and scripting on processes related to build, test, packaging, deployment, monitoring, capacity planning, and observability.

SRE (Site Reliability Engineer): The person who helps other engineers build robust and easy-to-manage/deploy applications. Also the person who gets a page when the site goes down (due to a recent application change) and needs to coordinate incident response to restore the site.

### Job titles

- DevOps
- Site Reliability Engineer (SRE)
- Production Engineering (this new term is preferred by some companies)
- Delivery Engineering

### Problems

- I need to stay aware of how all of our systems are deployed
- I need to help developers understand how to deploy and maintain their applications
- DevOps: SREs and developers expect me to give them a way to respond to incidents
- SRE: When the site goes down, I need to quickly find the source of the problem
- SRE: I need to reduce the likelihood that developers build systems that will fail in production

### What success looks like

- Sourcegraph helps developers and DevOps/SRE teams work together better (bridging the gap).
- Sourcegraph is where my DevOps/SRE team goes to understand how an application is deployed.
- DevOps: The software delivery pipeline (build, test, package, deploy, monitor, etc.) is healthy and widely used by all of our applications' codebases.
- SRE: Reduced incident response times
- SRE: I am able to be proactive (finding defects before they take down prod), not reactive
- SRE: My company's applications have higher uptime/stability and fewer incidents
- SRE: Developers tap the SRE team's knowledge more frequently and at the right times

### What failure looks like

Nobody else at my company is using Sourcegraph, so I can't even trust that all the devs' code is on it. It's not worth the maintenance burden.

### Common objections

- SRE: The defects that cause downtime for us are not related to code changes, so Sourcegraph would not help

### Other tools used

- Continuous integration
- Artifactory
- Datadog/LightStep/AppDynamics/Sentry
- Honeycomb
- Kubernetes
- Prometheus and Grafana

### Personally rewarded by

- Becoming more proactive (less reactive) about things that cause problems in the software lifecycle or for deployed applications in production
- Teaching best practices to engineers about deployment and building reliable systems

### Examples

- DevOps: https://app.hubspot.com/contacts/2762526/contact/16035251/
- DevOps: https://app.hubspot.com/contacts/2762526/contact/15851951/
- DevOps: https://app.hubspot.com/contacts/2762526/contact/13455899/
- SRE: https://app.hubspot.com/contacts/2762526/contact/13456445/
- SRE: https://app.hubspot.com/contacts/2762526/contact/15613852/

## Software Engineer (infrastructure/platform)

> This persona is a subset of the [Software Engineer persona](#software-engineer), and most aspects of that persona also apply here.

An engineer on a team that is responsible for building/managing tooling, defining coding standards, creating common libraries, or otherwise improving the developer experience.

### Job titles

- Infrastructure Engineer
- Platform Engineer
- Developer Tools
- Internal Tools Engineer
- Shared Engineering Services

## Software Engineer (security)

> This persona is a subset of the [Software Engineer persona](#software-engineer), and most aspects of that persona also apply here.

An engineer who is responsible for application/code security.

### Job titles

- Security Software Engineer
- Security Engineer
- [DevSecOps](https://www.devsecops.org/) (basically DevOps but with Sec(urity) inserted)
- Infosec

### Examples

- https://app.hubspot.com/contacts/2762526/contact/15807951
- https://app.hubspot.com/contacts/2762526/contact/16031951

## IT/Ops

Someone who doesn't consider themselves a software developer, but who's on a team that manages internal tools from 3rd-party vendors. (If they're a developer, see [Software Engineer](#software-engineer).)

### Job titles

- IT Engineer
- IT Manager
- Systems Engineer
- System Administrator

(Company: 250+ engineers)

### Problems

- I was asked to get or improve our code search tools (or to run Sourcegraph specifically) by our engineering team.

### What success looks like

- Providing a widely used code search solution that meets the needs of the engineering team with low cost and maintenance burden

### What failure looks like

- Maintaining code search takes a lot of my time
- The developers don't end up using code search
- I can't demonstrate/understand the benefits of code search to developers or to my manager

### Other tools used

Atlassian suite: Bitbucket, Jira, Confluence, etc.

### Common objections

- Code search isn't one of our top priorities because we aren't devs and/or we aren't rewarded for running something that just gets a lot of usage

### Examples

- https://app.hubspot.com/contacts/2762526/contact/15257501/
- https://app.hubspot.com/contacts/2762526/contact/15187551/
- https://app.hubspot.com/contacts/2762526/contact/15722451/

## Other personas

- Engineering Manager, CTO, Tech Lead, (Software) Architect
  - Do they meet the criteria for being a [Dev Tools Leader](#dev-tools-leader)? If not, then their role in adopting and using Sourcegraph is most similar to that of the [Software Engineer](#software-engineer) (with perhaps greater-than-average clout).
