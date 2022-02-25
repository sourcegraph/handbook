# Project planning, stakeholder, and SME interaction assignment [1-2hr (async), 30min (interview)]

The goal with this assignment is to see if the candidate can think about how they would need to organize this project, and why they made certain decisions. It’s also an opportunity to interact with the individual in a more typical scenario.

For example, can the candidate respond to feedback, does the candidate have other questions. While exposure to cloud/container deployments is desired, we’re also looking for the aptitude to think critically and consider what the customer is looking to accomplish.

During the interview, the panel may explore the candidate's knowledge in this space both through an assessment of the questions they ask or through direct questions related to the knowledge needed for success.

## Scenario 1: Deployment

Sourcegraph has identified that a number of our large customers are experiencing difficulty with self-hosted deployments (on-prem). This can be attributed to a number of points including too much detail in current docs (it covers all the cases) and the fact that skills can vary from customer to customer.

Because of this, the Customer Engineering team has asked for a best practices guide they can pass along to customers looking to self-host Sourcegraph. The team has also provided a few topics (see below) and asked that you put together a basic project plan (1 page or less) that includes a high-level outline for the guide. In addition, they’re looking for you to include the resources you’ll need to be successful, subject matter experts you’ll need access to, how long you expect the project to take, and how you will define/measure success.

We expect this assignment to take no more than 2 hours, but are providing one week to accommodate your schedule. If you need additional time, please let us know. When you are done, submit your project plan to the hiring manager, and we will schedule an interview session with a Customer Engineer and the hiring manager.

During this session, we’ll go over your project plan and ask questions about your process. Our goal here is not to ensure you got everything right, but that you have exposure to these concepts, and can talk about how you would organize this project.

### Deployment best practices requirements:

- Target Audience: Sourcegraph Admins
- Target deployment size: 20,000 Repositories, >1,500 Users, 10 large mono repos, and 75% engagement rate
- Install and deployment
- High availability/cluster
- Deployment types
- Cloud providers
- Resource allocation
- Upgrade process
- Configuration:
  - Authentication/SSO
  - Repository syncing
  - Monitoring and alerting

### Key questions:

- When should a customer use Docker Compose vs. Kubernetes?
- Are there specific instructions based on the cloud provider a customer uses?
- What are the best infrastructure requirements?
- What are key permission/access control considerations?

Feel free to review our existing docs for installation and deployment best practices for additional information.

### What we'll evaluate

- How well does the candidate understand modern deployment technologies like Cloud and Containers?
- Did the candidate create a logical flow for the guide, what reasoning did they give for their approach?
- Did the candidate point out any vagueness in the assignment, did they have solutions on how that might be addressed?
- Did the candidate express the type of SMEs they would need access to, for example, did they show understanding that someone in Delivery, DevOps, or IT Ops would likely have the relevant information?
- Does the candidate indicate openness and willingness to learn these concepts, even if they don’t currently have expertise or exposure in this area?
- What analytics or metrics did the candidate indicate would be ideal for measuring success?
- How long does the candidate believe the project will take, and could they provide justification for their answer?

## Scenario 2: CodeGraph Search

The Support team at Source graph has identified an increase in tickets related to users being unable to find precise pieces of code. While there is no bug at the root of these requests, we have discovered that a number of our new users are only using literal search.

Because the true power of Sourcegraph is ultimately realized by using more advanced search options such as regex and structural, the Support team has asked for a best practices guide they can pass along to developers that may be new to these concepts. They would like the guide to focus on regex, but also provide guidance to future guides related to more advanced search features.

The team has provided a few topics (see below) and asked that you put together a basic project plan (1 page or less) that includes a high-level outline for the guide. In addition, they’re looking for you to include the resources you’ll need to be successful, subject matter experts you’ll need access to, how long you expect the project to take, and how you will define/measure success.

We expect this assignment to take no more than 2 hours, but are providing one week to accommodate your schedule. If you need additional time, please let us know.

When you are done, submit your project plan to the hiring manager, and we will schedule an interview session with the hiring manager and a relevant stakeholder you would be working with in this role.

During this session, we’ll go over your project plan and ask questions about your process. Our goal here is not to ensure you got everything right, but that you have exposure to these concepts, and can talk about how you would organize this project.

### Search best practices requirements:

- Target audience: new Sourcegraph Users, junior to senior-level developers/engineers
- Search Basics
- Literal search
- Regex search
- Features
  - Regex query syntax
  - Search contexts
  - Saved searches
  - Symbols

### Key questions:

- What is literal search?
- Why is there more than one search option/approach?
- What advantages are provided by regex?
- How do you narrow search across specific repositories?
- When to use more advanced search options

Feel free to review our existing docs related to search and deployment best practices for additional information.

### What we'll evaluate

- How well does the candidate understand the modern development lifecycle as well as common developer tools and technologies?
- Did the candidate create a logical flow for the guide, what reasoning did they give for their approach?
- Did the candidate point out any vagueness in the assignment, did they have solutions on how that might be addressed?
- Did the candidate express the type of SMEs they would need access to, for example, did they show understanding that someone in Product, Engineer, or Support would likely have the relevant information?
  start a process to figure that out.
- Does the candidate indicate openness and willingness to learn these concepts, even if they don’t currently have expertise or exposure in this area?
- What analytics or metrics did the candidate indicate would be ideal for measuring success?
- How long does the candidate believe the project will take, and could they provide justification for their answer?
