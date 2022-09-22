# Growth Team Strategy

## Vision

In a year, Sourcegraph will have a product-led, cloud-first growth motion. The signup flow will be a fast self-service experience that lets users pick the right deployment option for them. After signup, users will discover the value of Sourcegraph in a few minutes and have a guided path to becoming a power user, that will lead them to share Sourcegraph with their teammates and power viral growth within a given customer. Sourcegraph's experience will be oprimised for collaboration. This will allow Sourcegraph the company to have a product-led-growth motion and to deliver its vision to make it so everyone can code.

## Key metric

Our key metric is PQLs (Product Qualified Leads), as defined by (WIP):

- an account with 5 WAUs for 2 weeks
- an account with a champion (TBD)

## Guiding principles

- We are customer centric; we believe building the best experience for individual users is the best long term growth strategy
- We are data driven
- We move quickly and iteratively
- We focus on product-led sales

## Where we are now

Sourcegraph is not product-led, cloud-first. However, Sourcegraph's single-tenant cloud offering is maturing and we plan for it to be the primary deployment option moving forward. To support product-led, cloud-first growth we'll have to fix the following issues (and more):

- The current initial experience is not developer-friendly as it requires users to self-host and/or talk to a salesperson to try out the product.
- Setting up and onboarding Sourcegraph is painful and in many cases requires support from Sourcegraph's Customer Engineering and support team. In particular, the initial onboarding experience on cloud requires admins to read the docs.
- There's no easy/practical way to invite collaborators and users to a cloud instance. Besides, the MAU caps (as determined by a user's license) limits the growth motion: a user may click on a Sourcegraph link and not be able to join.
- Sourcegraph is massively used for collaboration in practice (sharing search query link), but there is no collaboration experience in-product. Several features such as Batch Changes (getting PRs merged), Notebooks, Monitors would deeply benefit from a better collaboration experience, that would power feedback loops.
- Lastly, metrics and user profiles are not well defined (active user, PQL, Champion).

## Strategy and Plans

Our overall strategy is to unlock the four key themes that will enable product-led growth:

- Self-serve
- Short time to value, easy to onboard
- Network effects / feedback loops
- Healthy friction leading to an easy purchase

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vThxOgLUUK2EfBhYRoCPwfKcw8wiarmD7uaTtmQpB1_WL7oho1377pRT8Vv6l7avKtCdK4T1o9Qaqng/embed?start=false&loop=false&delayms=3000&slide=id.g1581317b2af_2_0" allow="fullscreen" title="Product Led Growth"></iframe>

In the coming weeks (September and early October), we are focusing on [creating a self-service signup flow](https://docs.google.com/document/d/1aUfXlt5AGwhG7tIF8dPRmsLhFL8TuvPKFvXlOsxgFws) in support of the cloud launch . After that, we want to work on up to four threads in parallel:

- **Iterate on the signup experience.** Build a fast signup experience that feels like a product.
- **Improve admin onboarding and instance configuration.**
- **Refine user activation metrics and iterate on user onboarding and activation.**
- **Explore feedback loops and collaboration.** The scope of this is TBD. The first step is for product/design to research the key feedback loops/collaboration moments in the current Sourcegraph experience, and to make sure they result in acquisition/activation.

### What we're not working on & why

- We are not working on the self-hosted motion in September and October, as we are focused on cloud.
- We are not building in-product conversion flows (example: credit card payments), and focus on generating PQLs for Sourcegraph's go-to-market team to engage with.
