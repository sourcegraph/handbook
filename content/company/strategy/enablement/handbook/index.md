# Handbook strategy

Sourcegraph is a Handbook first company. The Handbook is our source of truth, and a living document. We expect every teammate to propose improvements, changes, additions, and fixes to keep it continuously up-to-date and functional.

This page outlines the vision, strategy, and goals of the Handbook team.

Quicklinks:

- [Productboard (Internal only)](https://sourcegraph.productboard.com/feature-board/3424445-handbook)
- [Github Issues](https://github.com/sourcegraph/handbook/issues)
- [Handbook Home](../../../index.md)

## Mission, Vision & Guiding Principles

### Mission

The Handbook serves as a [source of truth](../../../../communication#sources-of-truth.md) for company policies, team process, strategy and more. We live our value of [being open and transparent](../../../values.md#open-and-transparent) by keeping the Handbook public.

**We help Sourcegraph teammates** find and document information quickly by providing a smooth navigation experience and an accessible contribution process. An easy-to-use Handbook is essential for teammates to be efficient in their daily work and while engaging with customers.

**We help Sourcegraph candidates** learn more about the company during their application and interview process by keeping our Handbook public.

**We help Sourcegraph current and potential customers** learn more about the company they're working with by publishing and maintaining [public](../../../values.md#open-and-transparent) documentation.

### Vision

#### 1 Year vision

> The Handbook is every Sourcegraph teammate's go-to source for answering their questions, and the team is enabled to create and maintain content as they see fit.

#### 3 Year vision

> The Handbook is not only a resource for answering specific questions, but also for browsing to learn about what's going on at Sourcegraph. Interactive content provides tailored onboarding and learning experiences to be used during the full span of one's career at Sourcegraph. It's a visually pleasing and functional artifact of the current state of the company and team.

#### 10 year vision

> The Sourcegraph Handbook is an industry standard for documentation, and has inspired other companies to embrace a culture of high agency and transparency with a tool like this.

### Guiding principles

- **The Handbook can ve viewed by anyone.** One of our Sourcegraph values is [transparency](../../../values.md#open-and-transparent). We want all public information to be available to everyone, whether they work at Sourcegraph or not, and it all lives in the Handbook. The Handbook should be searchable and easy to navigate.
- **The Handbook can be edited by any Sourcegraph teammate.** We value [high agency](../../../values.md#high-agency) and encourage all teammates to update the Handbook as they see fit. We provide resources to help teammates contribute to the Handbook no matter their technical background.
- **The Handbook is maintained by every Sourcegraph teammate.** At Sourcegraph, [we work as a team](../../../values.md#work-as-a-team). No one person is responsible for keeping our content updated, it falls on all of us. Editing and updating pages should be quick and well documented.
- **The Handbook is a source of truth** at Sourcegraph, and information there is expected to be accurate and up-to-date.

## Where we are now

The Handbook team is new, and up until now the Handbook has been owned by everyone. The product is relatively immature and needs defining. Features are basic, and it functions similarly to a simple wiki. With dedicated focus, we believe the Handbook can remain a pillar of the Sourcegraph culture and grow in value as a tool for internal and external stakeholders.

During a Hackathon in FY22Q3, huge strides were made by refactoring the Handbook. This will allow for easier development in the future, and within the Hackathon time frame allowed for adding new features like the "Contributers" section, and providing users a full preview of their changes.

Much of FY22Q3 was spent in discovery: learning what people like and don't like about the Handbook in its current state. Through early analysis using [Productboard](https://sourcegraph.productboard.com/feature-board/3424445-handbook), we believe improving navigation and the editing experiences will have the highest impact to users.

### Top customer, support, sales and marketing issues

- The most reported customer issue is finding things in the Handbook. Search doesn't always produce the results you're expecting, there isn't a menu through which to browse the site, and the organization of information doesn't always make sense.
- The second most reported issue is complications around contributing to the Handbook. Teammates with a technical background like the current process, but teammates from less technical backgrounds sometimes struggle with making changes.

### Competitive landscape

While we don't consider it to be a competitor to our Handbook, we draw inspiration from the [Gitlab Handbook](https://about.gitlab.com/handbook/).

### Analyst landscape

The only analytics currently being tracked regularly are around search, via (Swiftype)[https://app.swiftype.com/engines/handbook/analytics/insights?start=2021-09-13&end=2021-10-12]. Recent changes to the Handbook included adding [Google Analytics](https://analytics.google.com/analytics/web/#/p288277472/reports/reportinghub?params=_u..nav%3Dmaui&collectionId=life-cycle) but we have not yet determined what meaninful metrics we will be tracking.

## Strategy and Plans

The next six months are focused on better defining the Handbook as a product and team, as well as enhancing existing functionality like discovering and editing content.

### Goals

#### FY22Q4

- **Objective:** Finding content in the Handbook is intuitive and reliable.
- **Why?** The Handbook is a source of truth at Sourcegraph, and it’s the primary resource for teammates, candidates and customers to learn more about the company.
- **How does this align with the overall [product strategy](../../index.md)?** This enables all teammates at Sourcegraph to be more efficient and accelerate the time it takes to provide value to customers.
  - **Key Result 1:** Reduce percentage of searches with no click throughs.
- **How will this be measured?** Through insights already provided by Swiftype.

### Themes (and What's Next and why)

#### Navigation

The Handbook is a source of truth for lots of company information, and users must be able to find what they're looking for quickly. Intuitive navigation is essential for browsing and discovering content.

We will:

- Build and refine a [navigation sidebar](https://github.com/sourcegraph/handbook/issues/7).
- Evaluate the information architecture of the Handbook and implement changes as needed.
- Explore options for presenting related content.
- Build a Handbook home page to better showcase featured or popular pages, and guide the user to the content they're looking for.

#### Search

Current search works best when you know exactly what you're looking for. The Handbook needs a reliable search solution that helps guide users to the right content.

We will:

- Evaluate the current search provider, [Swiftype](https://app.swiftype.com/engines/handbook/overview) to determine if it's the best solution for our needs.
  - If we stay with Swiftype: review & refine search rules.
  - If we choose another solution: implement.

#### Onboarding

Onboarding should set teammates up for success in contributing to the Handbook, no matter their technical background. We'll provide resources and recommendations for learning about and making changes to the Handbook.

We will:

- Evaluate current Handbook onboarding documentation and tasks.
- Explore ways to expand Handbook onboarding beyond adding yourself to the team page.

#### Support

Ongoing support for Handbook users is essential in keeping it up-to-date. Support documentation should be accessible to every type of learner, and Handbook users should have a clear escalation path for help with the Handbook.

We will:

- Explore ways to provide better in-the-moment support when teammates are working through an issue.
- Establish Handbook Office Hours as a regular forum for teammates to get help with the Handbook, or see demos of new features.

#### Handbook Team

The Handbook team is new, and currently a team of one. We need to understand the resources required to support this strategy over time.

We will:

- Evaluate needs and put together a team & resourcing plan to hopefully put into action in FY23.

### What we're not working on & why

#### Changing the editing interface or process.

We believe there is value in the pull request process that exists today and would like to spend more resources on learning and development before changing the process itself.

#### Content permissions

In the future we may explore ways to publish internal-only content in the Handbook with permission controls, to keep all documentation in one place. However, this is not a priority right now as current interim solutions are working.

#### Saved/Favorited content

There are prerequesites to having something like this, like associating these with a user, and those things are not prioritized at this time.
