# Admin Experience Vision, Strategy, Execution and Metrics - Draft v0.1

**Goal:** Build on top of the [Company-Wide VSEM document](https://docs.google.com/document/d/1ZgGq3Ox1c1i_3z1z-zLANVDkj2iif_ZUPFq5NvZmAis/edit?usp=sharing) with a specific focus on the Admin user persona to define Vision, Strategy, Execution plan and Metrics for the Sourcegraph admin experience.

## Admin Persona Overview

Before we define the vision, strategy, execution, and metrics, we should describe more about who we mean when we say 'admin'. For the purposes of this document, we are describing [three distinct types of admins](./admin-exp-personas.md).

## Vision

_Vision: The long-term (3–5-year) description of what we're building and why. The vision will not change frequently, but it will be reviewed every 3 months to ensure it remains relevant and aligned with Sourcegraph's mission and values._

**Admin Experience Vision Statement:**

We believe Sourcegraph's **admin experience has the ability to provide unique value** to admins built on strong intelligence, adaptable configurations, and open systems. **Admin systems are open** meaning current and past state is clearly observable, debuggable, and create predictable outcomes. **They are adaptable** to ensure admins within the most complex organizations feel confident Sourcegraph is set up in a secure and reliable way. Sourcegraph **makes the administration experience delightful** by delivering unique admin-focused insights and intelligently remediating errors.

## Strategy

_Strategy: The strategy is Sourcegraph's medium-term plan for how to achieve our vision. It highlights the key strategic directions we must execute against in order to make our vision a reality. The strategy will be revisited annually and will likely evolve over time, but the big picture should largely stay the same._

### **Draft 3-5 Year Strategy:**

#### **(We are here!) Stage 1:**

Build scalable, enterprise grade core systems for Sourcegraph that support both our customers and other teams across Sourcegraph. In many ways, we **know** what's missing, based on feedback, by looking at other great admin experiences, or from our own intuition, and stage 1 is about solving these. A few ways we will do this include…

- Increase the number of locations code Sourcegraph can talk to. This includes eliminating the experience drop-off between popular code hosts (GitHub) and less popular (such as Perforce).
- Enterprise level permissioning and user management.
- Ensure all systems are observable, debuggable, and measured with defined and monitored SLAs
- The admin experience is frictionless and delightful, providing admins with information exactly where they expect it, and giving them the tools they need to scale their instance with the needs of their company
- Ensure the above systems can scale to meet the needs of our largest customers.
- Ensure our system remains easy to change, open for expansion to other code hosts, while meeting strict requirements for performance and scalability that other Sourcegraph teams have our APIs.
- Build a clear interface between source code and features (the 'everything feels like a monorepo' approach from Jason Warner)

#### **Stage 2:**

Once we have built the core of our systems, we will bring Sourcegraph code intelligence into the site-admin experience. This will help build admin trust in our intelligence and relieve admins of monotonous tasks. A few ways we will do this include…

- Automatic identification and remediation of errors
- Leverage intelligence to help admins fully configure their instance (i.e. recommend ways to deploy more precise code intel)
- Truly predictable change management (i.e. Admins should reliably know how a change will impact the system before they make the change)
- [... there are many other ways we can inject intelligence into admin experience]
- Continue supporting/extending foundational systems as needed by customers or internal stakeholders

> Note: At this stage, the admin experience splits into two distinct workstreams

#### **Stage 3a:**

Now that Admins trust our intelligence, we will launch targeted, value-add services to admins. Historically, the admin experience is something required to get core value out of Sourcegraph. The goal here is to turn the admin experience itself into something that customers would pay for. A few ways we will do this include…

- Intelligent Permissions Monitoring (brainstorm [here](https://docs.google.com/document/d/1G51rD9ZNSh9deAGwQiDNfc9P3MEmQkrDomr70DB18j0/edit?usp=sharing))
- [other ideas coming soon…]
- Continue supporting/extending foundational systems as needed by customers or internal stakeholders

#### **Stage 3b:**

Sourcegraph extends admin support for even more specific configurations opening up Sourcegraph to the most complex customer environments possible. By the completion of this stage, Sourcegraph should feel confident we can meet the needs of any enterprise customers worldwide. A few ways we will do this include…

- Multi-single-instance control plane to support customers like Apple with extreme security requirements that are not met by single-instance deployment
- Zero-downtime upgrades/deployments

## 2023 Execution Plan

\*_Execution: The execution plan is the process for how we will implement Sourcegraph's strategy and highlight the necessary actions needed to achieve our vision. Each execution plan typically comprises a number of important projects and initiatives, critical decisions that need to be made, the allocation of resources, etc Teammates should use this to connect their day-to-day work to the company's vision and strategy._

Currently, we are working on Stage 1 of the strategy defined in the previous section. We anticipate all of 2023 to be focused in Stage 1 with only small experiments in Stage 2. All major projects will follow the Job Fair prioritization process starting with a PRFAQ.

Note: Anything above the — line has already been greenlit and staffed. Things below are tentatively scheduled for 2023 but not yet greenlit or staffed.

#### Increase our support for git-based code hosts:

- Tier 1 ADO ([Job Fair Project](https://github.com/sourcegraph/pr-faqs/issues/43))
- Gerrit Permissions syncing ([Job Fair Project](https://github.com/sourcegraph/pr-faqs/issues/41)) and batch changes (Job Fair Project TBD)
- —
- Introduce support for GitHub's fine-grain auth tokens (currently Beta, GA date TBD)
- Notify customers of ending support for non-expiring GitLab PATs (Release 16.0 of GitLab happens on May 22, 2023)
- Introduce GitHub App as a site-level code host (PRFAQ TBD)

#### Introduce first class support for non-git code hosts:

- Launch a first-class Perforce integration (validated by TAM estimate [here](https://docs.google.com/spreadsheets/d/12Z9Oozn1SWsQ6LRYq5MDBc_bAqDvJZgzSF_iqbGl43k/edit?usp=sharing) as well as [Top-10 asks from GTM](https://docs.google.com/spreadsheets/d/10RIKcT_MTK_f5f6cyFtlvdxGvUOjppT5W2vaNF2BkBU/edit#gid=246402443)). Key existing product gaps include changelist and streams support.
- —
- Fast follow first-class Perforce with first-class SVN (validated by TAM estimate [here](https://docs.google.com/spreadsheets/d/1SguvCbf7oqVWCnJqa7Io98lppIn4shwEQOmmuke_d70/edit?usp=sharing) as well as [Top-10 asks from GTM](https://docs.google.com/spreadsheets/d/10RIKcT_MTK_f5f6cyFtlvdxGvUOjppT5W2vaNF2BkBU/edit#gid=246402443))

#### Build more for our ICP (Strategic customers):

- Permissions should work efficiently at 2XL scale ([Job Fair Project](https://github.com/sourcegraph/pr-faqs/issues/42))
- SCIM ([Job Fair Project](https://github.com/sourcegraph/pr-faqs/issues/66))
- —
- Repository syncing at 2XL scale (Job Fair Project TBD)
- Reduce the operational cost of running Sourcegraph (PRFAQ TBD) including deduping git objects across forks ([GitHub Ticket](https://github.com/sourcegraph/sourcegraph/issues/40448), Job Fair Project TBD) including adding automated infra cost alerting to Sourcegraph
- Enterprise level User management (Fast follow of SCIM to solve [these gaps](https://docs.google.com/document/d/1wTLxhLHulU_agWMAB8AiGfFZTUyUpWvBc5p1fLCu_SI/edit#bookmark=id.85ekzccm66x9) with a goal of 'delightful User Management at 2XL scale'
- Option to deactivate code host connection (From product gap to aid debugging purposes, PRFAQ TBD)
- Permissions in parallel (need to validate this need further, [RFC](https://docs.google.com/document/d/1nWbmfM5clAH4pi_4tEt6zDtqN1-z1DuHlQ7A5KAijf8/edit?usp=sharing))

#### Increase the maturity of the admin experience systems:

- Permissions should be debuggable, observable, etc ([Job Fair Project](https://github.com/sourcegraph/pr-faqs/issues/23))
- Permissions syncing should be debuggable, observable, etc ([Job Fair Project](https://github.com/sourcegraph/pr-faqs/issues/23))
- —
- Display SLAs/SLOs/SLIs to admins in the site-admin UI (PRFAQ TBD)
- Health checking tooling to give customers confidence the deployment is successful ([past SDD](https://docs.google.com/document/d/1shS8DZkZXMB-T4rKwLMogU70N4mSyOpDG1G7ElkjHD4/edit?usp=sharing))
- Revamp enterprise license generation and introduce proper upsell-based gating between packaging tiers (PRFAQ TBD)

#### Improve time-to-value for admins setting up a new instance (supporting growth team):

- The admin experience onboarding process should build trust with admins while guiding first time admins through the process ([Job Fair Project](https://github.com/sourcegraph/pr-faqs/issues/67))
- Improved self-hosting experience for first-time-deployments ([Job Fair Project 1](https://github.com/sourcegraph/pr-faqs/issues/40), and [Job Fair Project 2](https://github.com/sourcegraph/pr-faqs/issues/9))
- Improved executor deployment/hosting (Executors in K8s, improved deployment docs, etc) ([Job Fair Project](https://github.com/orgs/sourcegraph/projects/302/views/2?filterQuery=-no%3Apriority+execu&pane=issue&itemId=17669270))
- — Anything not currently prioritized by our team should be owned by growth going forward

#### More importantly, we will NOT work on the below in 2023:

- A major redesign of the admin experience. We will aim to slowly improve the experience over the next year as part of specific job fair projects but will not meaningfully redesign.
- Radical improvements to in-product analytics. The spike in 2022 continues to show value to customers and has yet to generate any significant product gap blockers from customers. Feature teams will own adding new analytics if they desire (i.e. own)
- We will not meaningfully solve the RBAC tech-debt in 2023 (Described in RFC 617). This is a significant effort that needs to be driven by end-user value. Today, this pain does not reach customers often.
- Zero downtime deployments. We started moving to Rendezvous hashing in 2022 and have not heard meaningful customer requirements for zero downtime recently.
- CVS support. This has been requested by Goldman Sachs and JPMC. In 2023, we will focus on Perforce and SVN as they have higher overall addressable markets. We will revisit this if mid-year we have a simpler way to integrate non-git code hosts.

## **2023 Key Metrics**

> Note: This section is a WIP while we finish the above sections. Below is a brainstorming of the various metrics that could matter to us.

_Metrics: These are the measures or indicators that Sourcegraph will use to track our progress towards our goals. They should be closely tied to the vision and strategy and will be used to gauge the effectiveness of the execution of our plan._

#### New admin setup

- Time to first search
- % dropoff in the admin setup UI

#### Build for our ICP

- We are confident Sourcegraph can support our first wall-to-wall expansion at a strat customers
- SLAs are met X% of the time

#### Improve our code host support (git and non-git)

- Number of customers successfully deployed with Perforce \>5
- Number of customers successfully deployed with SVN \>1
- % of customers with \>1 code host connected to Sourcegraph (increase by X%)

#### Operational Maturity

- The number of P0/P1 issues decreases
- The number of open product gaps on Repo/IAM decreases
