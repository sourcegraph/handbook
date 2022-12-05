# Growth Team Strategy

## Vision

In a year, Sourcegraph will have a product-led, cloud-first growth motion. The signup flow will be a fast self-service experience that lets users pick the right deployment option for them. After signup, users will discover the value of Sourcegraph in a few minutes and have a guided path to becoming a power user, that will lead them to share Sourcegraph with their teammates and power viral growth within a given customer. Sourcegraph's experience will be optimised for collaboration. This will allow Sourcegraph the company to have a product-led-growth motion and to deliver its vision to make it so everyone can code.

## Key metric

Our key metric is PQLs (Product Qualified Leads), as defined by (WIP):

- an account with 5 WAUs for 2 weeks
- an account with a champion (TBD)

While we figure out how to generate PQLs at scale, we also track Stage 2 lead generation (independently of activation).

## Guiding principles

- We are customer centric; we believe building the best experience for individual users is the best long term growth strategy
- We are data driven
- We move quickly and iteratively
- We focus on product-led sales

## Where we are now

Sourcegraph is not product-led, cloud-first. However, Sourcegraph's single-tenant cloud offering is maturing and we plan for it to be the primary deployment option moving forward.

On 2022-09-27, we launched a new signup flow that lets users get a single-tenant Sourcegraph cloud instance for a 15-day trial (extended to 30 days if the instance is used). Pre-qualified email domains instantly get a pre-provisioned instance, while non pre-qualified emails go through manual qualification and provisioning. After the instances are handed-off to customers, the Customer Engineering team starts a white-glove onboarding sequence (email, training sessions, etc) to help users onboard. Also see [cloud trial operations](./../../../departments/engineering/teams/growth/cloud-trial-operations.md) for details on the flow.

We have observed 4 different [user journeys](https://docs.google.com/document/d/1Jlt1oeOwjPC_PSPypEwnwfIkT6K2hw_Jek3J16ZiW1A/edit) (private). To support product-led, cloud-first growth we'll have to fix the following issues (and more we will discover):

- **Signup and self-service activation**

  - Setting up and onboarding Sourcegraph is high-commitment, and in many cases requires support from Sourcegraph's Customer Engineering. We observe that most signups don't add their codehost or activate on their own.
  - It's hard and high commitment for users to add their code. It's frequent for trials to be in fact _pre-trials_: a potential champion requests a trial, and adds their personal code to build a case to convince their team or management to run a Sourcegraph trial. We need to make that motion very easy, both in-product, and by allowing those champions to self-serve what they need (security, one-pager, business case, etc) to drive a Sourcegraph trial.
  - There are many friction points in the flow, that are likely to cause churn. For example, if initial users don't reset their password within the first 72 hours, they need to talk to a CE to get a new reset password link.
  - The signup workflow is very manual, and relies on lots of ad hoc automation powered by Zapier that is brittle and constrains the experience. Managing trials requires lots of time from CE.

- **Virality**
  - There's no easy/practical way to invite collaborators and users to a cloud instance. Besides, unless SSO is setup and `allowSignup` is true, users can't join a pre-existing trial instance. That means unless the initial admins is very proactive, others won't join the instance.
  - Sourcegraph is massively used for collaboration in practice (sharing search query link), but there is no collaboration experience in-product. Several features such as Batch Changes (getting PRs merged), Notebooks, Monitors would deeply benefit from a better collaboration experience, that would power feedback loops.
- Lastly, metrics and user profiles are not well defined (active user, PQL, Champion).

## Strategy and Plans

Our overall strategy is to unlock the four key themes that will enable product-led growth, in-order:

- Self-serve
- Short time to value, easy to onboard
- Network effects / feedback loops
- Healthy friction leading to an easy purchase

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vThxOgLUUK2EfBhYRoCPwfKcw8wiarmD7uaTtmQpB1_WL7oho1377pRT8Vv6l7avKtCdK4T1o9Qaqng/embed?start=false&loop=false&delayms=3000&slide=id.g1581317b2af_2_0" allow="fullscreen" title="Product Led Growth"></iframe>

Now that we have launched an initial, semi-automated signup flow, our initial priorities are:

- **Improve initial user onboarding**, in particular (a) being able to discover the value of Sourcegraph and (b) adding code. To do so, we're working on an onboarding widget ([#43596](https://github.com/sourcegraph/sourcegraph/issues/43596)), and investigating how to make adding code one-click (not started yet).
- **Make support and feedback inbound instead of outbound** ([#41929](https://github.com/sourcegraph/sourcegraph/issues/41929))
- **Empower users to drive trials**, including showcasing Sourcegraph to their teams or decision makes, to lead to a trial. We will continue mapping [successfull and failed user journeys](https://docs.google.com/document/d/1Jlt1oeOwjPC_PSPypEwnwfIkT6K2hw_Jek3J16ZiW1A/edit#heading=h.ql3419vdhzcg) and work with other teams to make trials successfull.
- **Build the infrastructure required to improve the signup and onboarding experience** ([RFC 763](https://docs.google.com/document/d/1MoDYlWBWALGDj-DJdlCvAAFpkrW0nwJL_nb0ih4uUJ0/edit#)). We will start building a cloud console API that will be be used to request and customized (eg. set subdomain), pre-configure (eg. pre-configure Google workspace SSO, pre-load OSS code to instances), and manage trial instances. This infrastructure is not growth-specific and has broad utility for Cloud instances in general.
- **Iterate on the signup experience.** Our endgame for signup is the following:
  - I sign in via Google Workspace or GitHub to start a trial on signup.sourcegraph.com
  - If Google Workspace, my instance is preconfigured to allow other users to sign in via Google Workspace
  - If GitHub, my instance is preconfigured to allow other users to sign in via GitHub
- **Refine metrics**

### What we're not working on & why

- We are not working on the self-hosted motion until we have a working self-serve Cloud motion.
- We are not building in-product conversion flows (example: credit card payments), and focus on generating PQLs for Sourcegraph's go-to-market team to engage with (product-led sales).
- We're not immediately working on virality, until we fix initial onboarding. We need to focus on the biggest problem first.
